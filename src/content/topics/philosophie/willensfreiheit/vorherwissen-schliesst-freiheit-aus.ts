import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'vorherwissen-schliesst-freiheit-aus',
  title: `„Wenn Gott alles vorherweiß, sind wir nicht frei."`,
  proponents: [
    {
      name: 'Nelson Pike',
      role: 'Religionsphilosoph, University of California, Irvine (1930–2010)',
      work: '„Divine Omniscience and Voluntary Action", Philosophical Review 74 (1965)',
    },
    {
      name: 'John Martin Fischer',
      role: 'Philosoph, University of California, Riverside',
      work: 'God, Foreknowledge, and Freedom (Hg., 1989)',
    },
    {
      name: 'Marcus Tullius Cicero',
      role: 'Römischer Philosoph und Staatsmann (106–43 v. Chr.)',
      work: 'De fato; De divinatione – bestritt das Vorherwissen, um die Freiheit zu retten (berichtet bei Augustinus, De civitate Dei V,9)',
    },
    {
      name: 'Gregory A. Boyd',
      role: 'Theologe, Vertreter des „Offenen Theismus"',
      work: 'God of the Possible (2000)',
    },
  ],
  steelman: `Wenn Gott gestern unfehlbar wusste, dass du morgen lügen wirst, dann ist es heute eine Tatsache der Vergangenheit, dass Gott das glaubte. Die Vergangenheit kannst du nicht ändern. Und Gott kann sich nicht irren. Also kannst du morgen nicht anders, als zu lügen – sonst hättest du entweder die Vergangenheit verändert oder Gott zum Irrenden gemacht. Nelson Pike hat dieses Argument 1965 präzise formuliert, und es ist so alt wie die Philosophie: Schon Cicero zog die Konsequenz und leugnete lieber das göttliche Vorherwissen, als die Freiheit aufzugeben. Für den Christen ist das ein echtes Dilemma: Entweder Gott weiß die Zukunft nicht vollständig (dann ist er nicht allwissend und die Prophetie bricht zusammen), oder wir sind nicht frei (dann ist Gott für alles verantwortlich, auch für die Sünde und die Hölle). Calvinisten wählen das zweite Horn, offene Theisten das erste. Wer beides behaupten will, behauptet einen Widerspruch.`,
  biblical: {
    summary: `Die Schrift lehrt beides ohne Spannung nebeneinander: Gott kennt die Zukunft bis in die freien Entscheidungen hinein (Ps 139,16; Jes 46,10; die Vorhersage von Petrus' Verleugnung), und zugleich sind die Menschen für genau diese Entscheidungen verantwortlich. Die deutlichste Stelle ist Apg 2,23: Jesus wurde „aus bedachtem Rat und Vorsehung Gottes übergeben" – und dennoch „habt ihr ihn genommen … und erwürget". Ebenso Lk 22,22: Der Weg des Menschensohnes ist beschlossen, „doch weh dem Menschen", der ihn verrät. Vorherwissen hebt Verantwortung offenbar nicht auf.`,
    detail: `- **Vorherwissen:** „Deine Augen sahen mich, da ich noch unbereitet war, und es waren alle Tage auf dein Buch geschrieben" (Ps 139,16). „Ich verkündige vorher, was hernach kommen soll" (Jes 46,10, sinngemäß).
- **Verantwortung trotz Vorhersage:** Jesus sagt Petrus' Verleugnung voraus (Mt 26,34). Petrus „ging hinaus und weinte bitterlich" (Mt 26,75) – er erlebt sich als schuldig, nicht als gezwungen; und er wird durch Reue wiederhergestellt (Joh 21,15–17).
- **Bedingte Prophetie:** Gott kündigt Unheil an, das nicht eintritt, wenn Menschen umkehren (Jer 18,7–10; Jona 3,10). Prophetie ist oft Ruf, nicht Fahrplan – und Gott kennt auch das, was *geschehen würde* (1 Sam 23,10–13: David erfährt, was die Bürger von Keïla tun *würden*).
- **„Gott bereute":** Aussagen wie Gen 6,6 sind Ausdruck göttlicher Anteilnahme in menschlicher Sprache; dieselbe Erzählung sagt 1 Sam 15,29: „Er ist nicht ein Mensch, daß ihn etwas gereuen sollte" – mitten in einem Kapitel, das in V. 11 von Gottes Reue spricht. Der Text selbst zeigt, wie er gelesen werden will.`,
    sources: [
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '2,23', quote: `denselben (nachdem er aus bedachtem Rat und Vorsehung Gottes übergeben war) habt ihr genommen durch die Hände der Ungerechten und ihn angeheftet und erwürget.`, translation: 'Luther 1912', status: 'verbatim', original: `τοῦτον τῇ ὡρισμένῃ βουλῇ καὶ προγνώσει τοῦ θεοῦ ἔκδοτον …`, note: 'Griechisch prognōsis = Vorherwissen; Gottes Plan und menschliche Schuld in einem Satz.' },
      { kind: 'bibel', work: 'Psalm', ref: '139,16', quote: `Deine Augen sahen mich, da ich noch unbereitet war, und es waren alle Tage auf dein Buch geschrieben, die noch werden sollten, als derselben keiner da war.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '22,22', quote: `Der Menschensohn geht zwar dahin, wie es beschlossen ist; doch wehe dem Menschen, durch den er verraten wird.`, status: 'paraphrase' },
      { kind: 'bibel', work: 'Matthäus', ref: '26,34.75', quote: `Wahrlich ich sage dir: In dieser Nacht, ehe der Hahn kräht, wirst du mich dreimal verleugnen. … Und ging heraus und weinte bitterlich.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Samuel', ref: '15,29', quote: `Auch lügt der Held in Israel nicht, und es gereut ihn nicht; denn er ist nicht ein Mensch, daß ihn etwas gereuen sollte.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jeremia', ref: '18,7–8', quote: `Plötzlich rede ich wider ein Volk und Königreich, daß ich's ausrotten, zerbrechen und verderben wolle; wo sich's aber bekehrt von seiner Bosheit, dawider ich rede, so soll mich auch reuen das Unglück, das ich ihm gedachte zu tun.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Väter haben das Argument gekannt und beantwortet – lange vor Pike. **Origenes** schreibt gegen Kelsos: Nicht weil etwas vorhergewusst wird, geschieht es, sondern weil es geschehen wird, wird es vorhergewusst; die Vorhersage ist nicht die Ursache (Contra Celsum II,20). **Augustinus** hält gegen Cicero beides fest: Gott weiß alles im Voraus, und wir tun mit unserem Willen, was nur mit unserem Willen geschieht (De civitate Dei V,9–10). **Johannes von Damaskus** formuliert die östliche Synthese: Gott weiß alles im Voraus, aber er bestimmt nicht alles im Voraus (Expositio fidei II,30). Die koptisch-orthodoxe Kirche folgt dieser Linie: Gottes Vorherwissen ist vollkommen, seine Vorherbestimmung betrifft nicht unsere freie Annahme oder Ablehnung des Heils.`,
    detail: `- **Origenes' Beispiel ist Judas:** Die Weissagung des Verrats hat Judas nicht gezwungen; er hätte anders handeln können, und dann wäre auch etwas anderes vorhergewusst worden. Das Vorherwissen bezieht sich auf etwas, das geschehen *oder nicht geschehen* kann.
- **Augustinus' Gedächtnis-Vergleich (De libero arbitrio III):** So wie deine Erinnerung das Vergangene nicht erzwingt, so erzwingt Gottes Vorherwissen das Zukünftige nicht.
- **Boethius** (Trost der Philosophie V) fügt hinzu: Gott ist nicht in der Zeit; er „sieht voraus" nicht, sondern schaut alles in einer ewigen Gegenwart – wie wir einen Menschen gehen sehen, ohne ihn zum Gehen zu zwingen.
- Die orthodoxe Tradition lehnt sowohl den Fatalismus (alles ist festgelegt) als auch die Begrenzung von Gottes Wissen ab.`,
    sources: [
      { kind: 'kirchenvater', author: 'Origenes', work: 'Gegen Kelsos (Contra Celsum)', ref: 'II,20', year: 'um 248', quote: `Nicht der Vorhersagende ist die Ursache des Zukünftigen, weil er es vorhersagte; vielmehr gab das zukünftige Ereignis, das auch ohne Vorhersage eingetreten wäre, dem Vorherwissenden den Anlass, es vorherzusagen. Das Vorherwissen bezieht sich auf etwas, das geschehen oder auch nicht geschehen kann.`, status: 'paraphrase', note: 'Sinngemäß nach den englischen Übersetzungen (Crombie, ANF). Origenes nennt Judas als Beispiel.' },
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Vom Gottesstaat (De civitate Dei)', ref: 'V,9–10', year: '413–426', quote: `Gegen Cicero bekennen wir beides: dass Gott alles weiß, bevor es geschieht, und dass wir mit unserem Willen tun, was wir nur wollend tun.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Über den freien Willen (De libero arbitrio)', ref: 'III,2–4', year: '388–395', quote: `Wie dein Gedächtnis das Vergangene nicht zu geschehen zwingt, so zwingt Gottes Vorherwissen das Zukünftige nicht zu geschehen.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Johannes von Damaskus', work: 'Expositio fidei', ref: 'II,30', year: '8. Jh.', quote: `Gott weiß zwar alles im Voraus, aber er bestimmt nicht alles im Voraus.`, original: `… while God knows all things beforehand, yet He does not predetermine all things.`, translation: 'eigene Übersetzung nach NPNF II/9', status: 'verbatim' },
    ],
  },
  opposingView: {
    summary: `In der Religionsphilosophie ist das Problem seit Pike (1965) intensiv diskutiert. Die Mehrheit der christlichen Philosophen hält Vorherwissen und Freiheit für vereinbar; es gibt mehrere ausgearbeitete Lösungen: (1) die **boethianische Ewigkeitslösung** (Stump/Kretzmann 1981), (2) die **ockhamistische Lösung** mit der Unterscheidung „harter" und „weicher" Tatsachen über die Vergangenheit (Marilyn McCord Adams 1967, Plantinga 1986), (3) den **Molinismus** mit dem „mittleren Wissen" Gottes (Luis de Molina 1588; Craig, Plantinga). Eine Minderheit (offene Theisten wie Hasker und Boyd) gibt das vollständige Vorherwissen auf. Das Fatalismus-Argument gilt deshalb nicht als zwingend – aber als ernsthafte Herausforderung.`,
    detail: `- **Ehrlich:** Keine der Lösungen ist unumstritten. Linda Zagzebski (*The Dilemma of Freedom and Foreknowledge*, 1991) hält das Argument für stärker, als viele Theisten zugeben, und vertritt dennoch die Vereinbarkeit.
- **Wichtig für Laien:** Für den Vorwurf des *logischen Widerspruchs* genügt es, *ein* widerspruchsfreies Modell zu zeigen. Wer einen Widerspruch behauptet, muss zeigen, dass *keine* dieser Lösungen funktionieren kann.`,
    sources: [
      { kind: 'gegner', author: 'Nelson Pike', work: 'Divine Omniscience and Voluntary Action', ref: 'Philosophical Review 74', year: '1965', quote: `Wenn Gott zu einem früheren Zeitpunkt glaubte, dass Jones später X tut, dann stand es nicht in Jones' Macht, X zu unterlassen – sonst hätte er Gottes frühere Überzeugung falsch machen oder Gottes Existenz aufheben können.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Eleonore Stump, Norman Kretzmann', work: 'Eternity', ref: 'Journal of Philosophy 78', year: '1981', quote: `Gottes Ewigkeit ist der vollständige, gleichzeitige Besitz grenzenlosen Lebens; ewiges Wissen ist kein Vorher-Wissen im zeitlichen Sinn.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Marilyn McCord Adams', work: 'Is the Existence of God a "Hard" Fact?', ref: 'Philosophical Review 76', year: '1967', quote: `Nicht jede Aussage über die Vergangenheit beschreibt eine „harte", abgeschlossene Tatsache; Gottes frühere Überzeugungen über die Zukunft sind „weiche" Tatsachen.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Linda Zagzebski', work: 'The Dilemma of Freedom and Foreknowledge', year: '1991', quote: `Das Argument für theologischen Fatalismus ist stark, aber es gibt Wege, die Vereinbarkeit zu verteidigen.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Wissen verursacht nichts. Wenn ich weiß, dass die Sonne morgen aufgeht, geht sie nicht auf, *weil* ich es weiß – ich weiß es, weil sie aufgehen wird. Genauso weiß Gott, was ich tun werde, weil ich es tun werde, nicht umgekehrt. Hätte ich anders gewählt, hätte Gott etwas anderes gewusst. Und Gott ist nicht in der Zeit gefangen: Er sieht nicht „voraus", er sieht alles in seiner ewigen Gegenwart – so wie du jemanden gehen siehst, ohne ihn zum Gehen zu zwingen.`,
  keyPoints: [
    `**Wissen richtet sich nach dem Gewussten:** Gottes Wissen ist wahr, *weil* ich so handeln werde – nicht: Ich handle so, weil Gott es weiß. Die Erklärungsrichtung läuft von der Tat zum Wissen.`,
    `**Der modale Fehlschluss:** Notwendig ist nur: „Wenn Gott weiß, dass ich X tue, dann tue ich X." Daraus folgt nicht: „Ich tue X notwendig." Schon Boethius unterschied diese bedingte von der einfachen Notwendigkeit.`,
    `**Gott ist nicht in der Zeit gefangen:** Für den Ewigen gibt es kein „Gestern", an dem sein Wissen unveränderlich festgelegt wurde. Er schaut alles in einer ewigen Gegenwart (Boethius).`,
    `**Weiche Tatsachen:** „Gott glaubte gestern, dass ich morgen X tue" ist keine abgeschlossene Tatsache wie „gestern regnete es", sondern hängt davon ab, was ich morgen tue (Ockhamismus).`,
    `**Die Schrift hält beides zusammen:** Apg 2,23 nennt Gottes Vorherwissen und die Schuld der Täter in einem Satz; Petrus wurde seine Verleugnung vorhergesagt – und er bereute sie als seine eigene Tat.`,
    `**Die Kirche kennt das Problem seit Origenes:** Vorherwissen ist nicht Ursache (Contra Celsum II,20); Gott weiß alles im Voraus, bestimmt aber nicht alles im Voraus (Johannes von Damaskus).`,
  ],
  argument: {
    name: 'Vorherwissen ist kein Verursachen',
    summary: 'Warum Gottes vollkommenes Wissen die Freiheit nicht aufhebt.',
    premises: [
      {
        text: `P1: Wissen richtet sich nach seinem Gegenstand: Eine Überzeugung ist wahr, weil die Wirklichkeit so ist – nicht umgekehrt.`,
        support: `Das ist der Begriff von Wahrheit selbst (Entsprechung). Auch der Gegner akzeptiert ihn: Meine Erinnerung an gestern macht gestern nicht so, wie es war.`,
      },
      {
        text: `P2: Gottes Vorherwissen ist Wissen – vollkommen und unfehlbar, aber eben Wissen, nicht Bewirken.`,
        support: `Die Schrift unterscheidet Gottes Vorherwissen (prognōsis) von seinem Beschluss (boulē), vgl. Apg 2,23; die Väter (Origenes, Johannes von Damaskus) betonen ausdrücklich, dass Gott nicht alles, was er vorherweiß, auch vorherbestimmt.`,
      },
      {
        text: `P3: Also weiß Gott, dass ich X tun werde, weil ich X tun werde – meine freie Tat ist der Grund für den Inhalt seines Wissens, nicht sein Wissen der Grund für meine Tat.`,
        support: `Das folgt aus P1 und P2. Origenes formuliert es am Beispiel des Judas: Das Ereignis gab dem Vorherwissenden den Anlass, nicht umgekehrt.`,
      },
      {
        text: `P4: Eine Handlung, deren Ursache ich selbst bin und die nur in dem Sinn „feststeht", dass sie gewusst wird, ist frei.`,
        support: `Freiheit wird durch Zwang oder Determination aufgehoben, nicht durch Bekanntsein. Auch der Mensch, der zuverlässig vorhersagt, dass sein ehrlicher Freund das gefundene Geld zurückgibt, nimmt dem Freund nicht die Freiheit.`,
      },
    ],
    inferences: [
      `Das Gegenargument (Pike) begeht einen modalen Fehlschluss: Aus der Notwendigkeit des Zusammenhangs („wenn Gott es weiß, geschieht es") wird die Notwendigkeit des Ereignisses („es geschieht notwendig").`,
      `Meine Fähigkeit, anders zu handeln, ist die Fähigkeit, so zu handeln, dass Gott von Ewigkeit her etwas anderes gewusst hätte – nicht die Fähigkeit, die Vergangenheit zu ändern oder Gott irren zu lassen.`,
    ],
    conclusion: `Göttliches Vorherwissen und menschliche Freiheit sind vereinbar. Wer einen Widerspruch behauptet, muss zeigen, dass Wissen Ursache seines Gegenstandes ist – und das gilt nicht einmal für menschliches Wissen.`,
  },
  voices: [
    {
      person: 'origenes',
      role: 'als Apologet gegen Kelsos (mit Vorbehalt)',
      text: `Der heidnische Philosoph Kelsos spottete: Wenn Jesus den Verrat und die Verleugnung vorhersagte, dann habe er als Gott die Jünger dazu getrieben. Origenes antwortet in *Contra Celsum* II,20 mit einer Unterscheidung, die bis heute den Kern jeder guten Antwort bildet: Der Vorhersagende ist nicht die Ursache des Vorhergesagten. Das Ereignis wäre auch ohne die Vorhersage eingetreten, und es selbst war der Anlass für das Vorherwissen. Judas hätte anders handeln können – dann wäre auch etwas anderes vorhergewusst und vorhergesagt worden. In seiner Schrift *Über das Gebet* (Kap. 5–6) wendet Origenes denselben Gedanken auf das Beten an: Gott kennt unsere Gebete im Voraus und hat sie in seine Vorsehung eingeplant – deshalb ist Beten nicht sinnlos. Origenes wird hier als Apologet zitiert; seine verurteilten Spekulationen stehen nicht zur Debatte.`,
      sources: [
        { kind: 'kirchenvater', author: 'Origenes', work: 'Über das Gebet (De oratione)', ref: '5–6', year: 'um 233', quote: `Der Einwand, Beten sei sinnlos, weil Gott alles vorherweiß, übersieht, dass Gott auch die freien Bewegungen unseres Willens und unsere Gebete im Voraus kennt und in seine Ordnung aufnimmt.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'augustinus',
      role: 'als Philosoph gegen Ciceros Ausweg',
      text: `Augustinus berichtet in *De civitate Dei* V,9, dass Cicero, um die Freiheit zu retten, das Vorherwissen leugnete – und hält ihm entgegen, dass er damit den Menschen frei, aber Gott blind gemacht habe. Der fromme Geist, so Augustinus, wählt beides und bekennt beides. Schon in *De libero arbitrio* III hatte er das Problem mit seinem Gesprächspartner Evodius durchgearbeitet: So wenig unser Gedächtnis das Vergangene erzwingt, so wenig erzwingt Gottes Vorherwissen das Zukünftige. Wichtig: Für die Philosophie ist Augustinus hier unverzichtbar; seine späteren, stärker prädestinatianischen Akzente teilt die orthodoxe Tradition nicht.`,
      sources: [
        { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De civitate Dei', ref: 'V,9', year: '413–426', quote: `Cicero wollte den Menschen frei machen und machte ihn gottlos, indem er das Vorherwissen leugnete; der fromme Sinn aber wählt beides.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'boethius',
      role: 'als Philosoph der Ewigkeit Gottes',
      text: `Boethius schrieb *Der Trost der Philosophie* im Kerker, kurz vor seiner Hinrichtung (524). Im fünften Buch löst er das Problem des Vorherwissens mit seiner berühmten Definition der Ewigkeit: Gott lebt nicht in der Zeit, sondern besitzt sein grenzenloses Leben vollständig und zugleich. Sein Wissen ist deshalb kein *Vor*-Wissen, sondern ein Schauen der ewigen Gegenwart – wie jemand, der von einem hohen Gipfel aus den ganzen Weg überblickt. Dazu unterscheidet Boethius zwei Arten von Notwendigkeit: die *einfache* (der Mensch ist notwendig sterblich) und die *bedingte* (wenn ich sehe, dass jemand geht, geht er notwendig – aber mein Sehen zwingt ihn nicht zu gehen). Gottes Wissen erzeugt nur diese zweite, harmlose Notwendigkeit.`,
      sources: [
        { kind: 'kirchenvater', author: 'Boethius', work: 'Der Trost der Philosophie (De consolatione philosophiae)', ref: 'V, Prosa 6', year: 'ca. 524', quote: `Ewigkeit ist der vollständige und zugleich vollkommene Besitz unbegrenzbaren Lebens.`, original: `Aeternitas igitur est interminabilis vitae tota simul et perfecta possessio.`, translation: 'eigene Übersetzung', status: 'verbatim' },
        { kind: 'kirchenvater', author: 'Boethius', work: 'Der Trost der Philosophie', ref: 'V, Prosa 6', year: 'ca. 524', quote: `Es gibt zwei Notwendigkeiten: eine einfache (alle Menschen sind sterblich) und eine bedingte (wer gesehen wird, wie er geht, geht notwendig); die bedingte zwingt nicht.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'craig',
      role: 'als Verteidiger des Molinismus',
      text: `William Lane Craig hat in *The Only Wise God* (1987) das Fatalismus-Argument als modalen Fehlschluss analysiert und den Molinismus wieder ins Gespräch gebracht. Nach Luis de Molina (*Concordia*, 1588) kennt Gott nicht nur, was geschehen *kann* und was geschehen *wird*, sondern auch, was jedes freie Geschöpf in jeder möglichen Situation frei tun *würde* („mittleres Wissen"). So kann Gott die Welt souverän lenken, indem er Umstände schafft, ohne die Freiheit zu verletzen. Craig betont, dass dies ein philosophisches Modell ist – für die Abwehr des Widerspruchsvorwurfs genügt aber, dass es möglich ist.`,
      sources: [
        { kind: 'fachliteratur', author: 'William Lane Craig', work: 'The Only Wise God: The Compatibility of Divine Foreknowledge and Human Freedom', year: '1987', quote: `Aus „Gott weiß, dass X geschehen wird" folgt nur, dass X geschehen wird, nicht dass X notwendig geschehen muss; das Fatalismus-Argument verwechselt beides.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'johannes-damaskus',
      role: 'als Zusammenfasser der östlichen Väter',
      text: `Johannes von Damaskus unterscheidet in der *Genauen Darlegung des orthodoxen Glaubens* (II,30) klar zwischen Vorherwissen und Vorherbestimmung. Gott weiß alles im Voraus, auch was in unserer Macht steht; vorherbestimmen aber tut er nur, was nicht in unserer Macht steht. Das Böse will Gott nicht, und die Tugend erzwingt er nicht. Diese Formel ist bis heute die Grundlage der orthodoxen – auch der koptischen – Antwort an Calvinisten wie an Fatalisten.`,
    },
  ],
  dialog: [
    {
      id: 'unfehlbar-also-notwendig',
      objection: `Gott kann sich nicht irren. Wenn er gestern glaubte, dass du morgen lügst, und du morgen die Wahrheit sagst, hätte Gott sich geirrt. Das ist unmöglich. Also *kannst* du morgen nicht die Wahrheit sagen.`,
      objectionBy: 'Nelson Pike',
      targetsPremise: 4,
      answer: `Hier liegt ein logischer Kurzschluss vor. Notwendig ist nur der Zusammenhang: *Wenn* Gott weiß, dass ich lüge, *dann* lüge ich. Daraus folgt nicht, dass ich *notwendig* lüge. Hätte ich die Wahrheit gesagt, hätte Gott von Ewigkeit her gewusst, dass ich die Wahrheit sage. Meine Freiheit besteht nicht darin, Gott irren zu lassen, sondern darin, dass mein Handeln bestimmt, *was* Gott weiß.`,
      detail: `Die mittelalterliche Logik nannte das den Unterschied zwischen *necessitas consequentiae* (Notwendigkeit der Folgerung) und *necessitas consequentis* (Notwendigkeit des Gefolgerten). Ein Alltagsbeispiel: Notwendig gilt „Wenn du weißt, dass ich hier sitze, sitze ich hier." Aber ich sitze nicht notwendig hier – ich könnte aufstehen, und dann wüsstest du eben, dass ich stehe. Boethius hat diese Unterscheidung schon um 524 gezogen.`,
      questionsBack: [
        `Zwingt dein Wissen, dass ich gerade sitze, mich zum Sitzen? Wenn nicht – warum sollte Gottes Wissen zwingen?`,
      ],
      followUps: [
        {
          id: 'vergangenheit-unveraenderlich',
          objection: `Das ist zu billig. Gottes Überzeugung von gestern ist eine Tatsache der Vergangenheit. Die Vergangenheit ist festgelegt. Wenn du anders handeln könntest, müsstest du die Vergangenheit ändern können – und das kann niemand.`,
          objectionBy: 'John Martin Fischer',
          targetsPremise: 4,
          answer: `Nicht jede Aussage über die Vergangenheit beschreibt eine abgeschlossene Tatsache. „Gestern war zwei Tage vor meiner Hochzeit" ist eine Aussage über gestern – aber ob sie wahr ist, hängt davon ab, ob ich morgen heirate. Ebenso hängt „Gott glaubte gestern, dass ich morgen lüge" davon ab, was ich morgen tue. Ich ändere die Vergangenheit nicht; ich habe nur die Macht, so zu handeln, dass Gott immer schon etwas anderes geglaubt hätte.`,
          detail: `Diese Unterscheidung zwischen „harten" und „weichen" Tatsachen geht auf Wilhelm von Ockham zurück und wurde von Marilyn McCord Adams (1967) und Alvin Plantinga („On Ockham's Way Out", 1986) ausgearbeitet. Weiche Tatsachen sind solche, die scheinbar nur von der Vergangenheit handeln, deren Wahrheit aber von der Zukunft abhängt. Gottes Vorherwissen ist das Paradebeispiel.`,
          sources: [
            { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'On Ockham\'s Way Out', ref: 'Faith and Philosophy 3', year: '1986', quote: `Wir haben die Macht, so zu handeln, dass Gott anderes geglaubt hätte – nicht die Macht, die Vergangenheit zu verändern.`, status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'harte-tatsache',
              objection: `Das ist ein Trick. Gottes Überzeugung ist ein geistiger Zustand Gottes – das ist so „hart" wie irgendeine Tatsache. Weiche Tatsachen sind ein Sprachspiel, um das Problem wegzudefinieren.`,
              objectionBy: 'John Martin Fischer / William Hasker',
              answer: `Dann nimm die zweite klassische Antwort: Gott hat kein „Gestern". Er existiert nicht in der Zeit, sondern in der Ewigkeit, die alles zugleich umfasst. Sein Wissen ist kein Vor-Wissen, sondern ein Schauen der ewigen Gegenwart – so wie du von einem Berg den ganzen Weg siehst, ohne die Wanderer zu schieben. Dann gibt es keine „vergangene Überzeugung Gottes", die mich festlegen könnte.`,
              detail: `Das ist die Lösung des Boethius, von Thomas von Aquin übernommen und von Eleonore Stump und Norman Kretzmann (1981) philosophisch präzisiert. Sie hat einen großen Vorteil: Sie entspricht der Überzeugung der Väter, dass Gott der Schöpfer der Zeit ist und nicht ihr Gefangener (vgl. Augustinus, Bekenntnisse XI). Gottes Wissen von meiner Tat und meine Tat sind „ewig-gleichzeitig" – und Gleichzeitiges zwingt nicht.`,
              followUps: [
                {
                  id: 'zeitloser-gott-unbiblisch',
                  objection: `Ein zeitloser Gott ist der Gott der griechischen Philosophen, nicht der Bibel. In der Bibel reagiert Gott, hört Gebete, handelt in der Geschichte. Ein zeitloser Gott kann das nicht.`,
                  objectionBy: 'Nicholas Wolterstorff / offene Theisten',
                  answer: `Die Bibel spricht von Gott *vor* den Zeiten (1 Kor 2,7; 2 Tim 1,9) und sagt, dass bei ihm „ein Tag wie tausend Jahre" ist (2 Petr 3,8). Dass Gott in der Geschichte handelt, heißt nicht, dass er in ihr gefangen ist: Die Wirkungen sind zeitlich, der Wirkende ewig. Das größte Beispiel ist die Menschwerdung: Der ewige Logos tritt in die Zeit ein, ohne aufzuhören, ewig zu sein. Und wer Gott lieber zeitlich denkt, hat immer noch die anderen Antworten – das Fatalismus-Argument scheitert ohnehin am modalen Fehlschluss.`,
                  detail: `Ehrlich: Unter christlichen Philosophen ist umstritten, ob Gott streng zeitlos oder „seit der Schöpfung zeitlich" zu denken ist (Craig vertritt Letzteres). Für die Frage nach Vorherwissen und Freiheit muss man das nicht entscheiden: Die Ewigkeitslösung, der Ockhamismus und die Analyse des modalen Fehlschlusses sind voneinander unabhängig. Wichtig für das Gespräch: Du brauchst nur *eine* tragfähige Antwort, der Gegner muss *alle* widerlegen.`,
                  sources: [
                    { kind: 'bibel', work: '2. Petrus', ref: '3,8', quote: `Eins aber sei euch unverhalten, ihr Lieben, daß ein Tag vor dem HERRN ist wie tausend Jahre, und tausend Jahre wie ein Tag.`, translation: 'Luther 1912', status: 'verbatim' },
                    { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Bekenntnisse (Confessiones)', ref: 'XI,13–14', year: 'ca. 397–401', quote: `Gott geht den Zeiten nicht in der Zeit voraus; er ist vor allen Zeiten in der Erhabenheit der immer gegenwärtigen Ewigkeit.`, status: 'paraphrase' },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'judas-war-gezwungen',
          objection: `Jesus hat den Verrat des Judas und die Verleugnung des Petrus vorhergesagt. Wenn die Vorhersage nicht scheitern konnte, hatten Judas und Petrus keine Wahl. Dann ist Judas ein Opfer, kein Täter.`,
          objectionBy: 'Kelsos (2. Jh.) und moderne Kritiker',
          targetsPremise: 3,
          answer: `Genau diesen Einwand hat schon der heidnische Philosoph Kelsos im 2. Jahrhundert erhoben – und Origenes hat geantwortet: Die Vorhersage war nicht die Ursache des Verrats. Judas hätte anders handeln können; dann wäre auch etwas anderes vorhergesagt worden. Die Vorhersage folgt der Tat, nicht die Tat der Vorhersage. Und Petrus zeigt, wie die Schrift das versteht: Er weint bitterlich – über seine eigene Schuld.`,
          detail: `Origenes formuliert in Contra Celsum II,20: Das künftige Ereignis gab dem Vorherwissenden den Anlass, es vorherzusagen. Interessant ist auch, dass Jesus Judas noch beim Abendmahl einen Bissen reicht und ihn mit „Freund" anspricht (Mt 26,50) – Gesten, die ihm die Umkehr offenhalten. Petrus und Judas begehen beide schweres Unrecht, aber Petrus kehrt um und Judas verzweifelt (Mt 27,3–5). Der Unterschied liegt nicht in der Vorhersage, sondern in ihrer freien Antwort.`,
          questionsBack: [
            `Wenn Petrus nur ein Opfer der Vorhersage war – warum erlebt er seine Tat als Schuld und bereut sie?`,
          ],
          followUps: [
            {
              id: 'gott-abhaengig-von-geschoepfen',
              objection: `Wenn Gottes Wissen von unseren Taten abhängt, dann ist Gott von seinen Geschöpfen abhängig. Das widerspricht seiner Vollkommenheit und Unabhängigkeit.`,
              objectionBy: 'Thomistischer oder calvinistischer Einwand',
              answer: `Es ist keine Unvollkommenheit, die Wirklichkeit so zu erkennen, wie sie ist. Wenn Gott freie Geschöpfe will, dann gehört es zu seiner Vollkommenheit, sie *als freie* zu erkennen. Abhängig ist nur der *Inhalt* seines Wissens, nicht sein Sein oder seine Macht. Und dass es freie Geschöpfe gibt, die er so erkennt, verdankt sich wiederum seinem freien Schöpfungswillen.`,
              detail: `Hier gibt es innerchristlich unterschiedliche Modelle: Thomisten sprechen von Gottes Wissen als Ursache der Dinge, betonen aber, dass Gott Ursachen *als freie* Ursachen wirken lässt; Molinisten sprechen vom mittleren Wissen. Die orthodoxe Tradition hat das nicht dogmatisch entschieden; entscheidend ist, dass Gott alles weiß und der Mensch frei ist. Gott „gewinnt" nichts durch die Geschöpfe – er erkennt nur, was er selbst ins Dasein gerufen hat.`,
            },
          ],
        },
      ],
    },
    {
      id: 'offener-theismus',
      objection: `Seid doch konsequent: Wenn Freiheit echt ist, kann auch Gott die freie Zukunft nicht wissen, weil sie noch nicht feststeht. Christliche Theologen wie Gregory Boyd und Clark Pinnock vertreten das längst – der „offene Theismus". Damit ist das Problem gelöst.`,
      objectionBy: 'Gregory Boyd',
      targetsPremise: 2,
      answer: `Der offene Theismus rettet die Freiheit um den Preis der Allwissenheit – und der Prophetie. Jesus sagt Petrus nicht nur vage Untreue voraus, sondern dreimalige Verleugnung vor dem Hahnenschrei: eine Kette freier Entscheidungen. Die Kirche hat den offenen Theismus nie angenommen. Und er ist unnötig: Das Problem, das er lösen will, beruht auf einem logischen Fehlschluss.`,
      detail: `Der offene Theismus ist eine Position aus dem evangelikalen Raum der 1990er-Jahre (Pinnock u. a., *The Openness of God*, 1994). Er nimmt das biblische Bild des reagierenden Gottes ernst, was anzuerkennen ist. Doch er widerspricht den zahlreichen Vorhersagen freier Handlungen (Kyrus wird bei Jesaja mit Namen genannt, Jes 44,28–45,1; Petrus' Verleugnung; der Verrat des Judas) und der einhelligen Lehre der Väter. Für die koptische Kirche ist entscheidend: Gottes Wissen ist vollkommen – „es ist keine Kreatur vor ihm unsichtbar" (Hebr 4,13).`,
      sources: [
        { kind: 'bibel', work: 'Hebräer', ref: '4,13', quote: `Und keine Kreatur ist vor ihm unsichtbar, es ist aber alles bloß und entdeckt vor seinen Augen.`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'fachliteratur', author: 'Clark Pinnock u. a.', work: 'The Openness of God', year: '1994', quote: `Gott kennt die Zukunft als teilweise offen, weil freie Entscheidungen noch nicht feststehen.`, status: 'paraphrase', note: 'Gegenposition innerhalb des Protestantismus.' },
      ],
      followUps: [
        {
          id: 'gott-bereut',
          objection: `Aber die Bibel selbst sagt, dass Gott bereut (Gen 6,6), sich umentscheidet (Jona 3,10) und etwas herausfinden will: „Nun weiß ich, daß du Gott fürchtest" (Gen 22,12). Das klingt nicht nach einem Gott, der alles im Voraus weiß.`,
          objectionBy: 'Gregory Boyd',
          answer: `Dieselbe Bibel sagt: „Er ist nicht ein Mensch, daß ihn etwas gereuen sollte" (1 Sam 15,29) – und zwar im selben Kapitel, das in V. 11 von Gottes Reue spricht. Der Text zeigt selbst, dass die Reue-Sprache Gottes echte Anteilnahme in menschlichen Worten ausdrückt, nicht Unwissen. Und Jona 3 ist bedingte Prophetie: Gott kündigt Gericht an, *damit* Ninive umkehrt (Jer 18,7–8).`,
          detail: `Gen 22,12 („Nun weiß ich") wird von den Vätern so gelesen, dass Gott Abrahams Treue nun offenbar macht – für Abraham selbst und für alle Nachkommen. Die Väter sprechen von *Synkatabasis*, göttlicher Herablassung: Gott redet so, dass wir es verstehen können, wie ein Vater mit seinem Kind (Johannes Chrysostomus gebraucht diesen Begriff häufig in seinen Genesis-Homilien).`,
          followUps: [
            {
              id: 'anthropomorphismus-ausrede',
              objection: `„Anthropomorphismus" ist eine bequeme Ausrede. Ihr entscheidet willkürlich, welche Verse wörtlich gelten und welche nicht.`,
              objectionBy: 'Gregory Boyd / skeptischer Bibelleser',
              answer: `Nicht willkürlich: Die Bibel gibt selbst grundsätzliche Aussagen über Gottes Wesen – „Ich, der HERR, wandle mich nicht" (Mal 3,6), „Gott ist nicht ein Mensch, daß er lüge, noch ein Menschenkind, daß ihn etwas gereue" (Num 23,19) –, und diese Grundsätze erklären die erzählenden Stellen, nicht umgekehrt. So hat die alexandrinische Auslegung von Anfang an gelesen. Wer umgekehrt alle Erzählungen wörtlich nimmt, müsste Gott auch Füße, Augen und Unwissen über Adams Versteck zuschreiben (Gen 3,9).`,
              detail: `Das Prinzip „Lehraussagen erklären Erzählungen" ist keine Erfindung der Apologetik, sondern eine alte Auslegungsregel. Wichtig ist der Ton: Die Erzählungen von Gottes „Reue" sind nicht wertlos, sie zeigen, dass Gott das menschliche Tun nicht gleichgültig ist. Der unwandelbare Gott ist kein kalter Gott.`,
              sources: [
                { kind: 'bibel', work: 'Maleachi', ref: '3,6', quote: `Denn ich bin der HERR und wandle mich nicht.`, translation: 'Luther 1912', status: 'verbatim' },
                { kind: 'bibel', work: 'Numeri (4. Mose)', ref: '23,19', quote: `Gott ist nicht ein Mensch, daß er lüge, noch ein Menschenkind, daß ihn etwas gereue.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'warum-verlorene-erschaffen',
      objection: `Selbst wenn Vorherwissen nicht verursacht: Gott wusste, dass manche Menschen verloren gehen. Trotzdem hat er sie erschaffen. Das ist moralisch nicht besser, als sie direkt zur Hölle zu bestimmen.`,
      objectionBy: 'Bart Ehrman / skeptischer Einwand',
      answer: `Es gibt einen moralischen Unterschied zwischen *bestimmen* und *zulassen*. Gott will, dass alle gerettet werden (1 Tim 2,4), und gibt jedem Menschen die Möglichkeit dazu. Hätte Gott nur Menschen erschaffen dürfen, die sich nie gegen ihn entscheiden, hätte er womöglich gar keine Welt mit freier Liebe erschaffen können. Dass manche die angebotene Liebe ablehnen, macht nicht den Schenkenden schuldig.`,
      detail: `Craig und andere Molinisten haben ein mögliches Modell entwickelt: Es könnte sein, dass in jeder Welt mit freien Geschöpfen, die Gott schaffen könnte, einige sich frei und endgültig gegen ihn entscheiden würden (sie nennen das „transweltliche Verlorenheit"). Dann stünde Gott vor der Wahl, keine Welt freier Liebe zu schaffen oder eine Welt, in der er allen seine Gnade anbietet und manche sie ablehnen. Ehrlich: Das ist ein Modell, kein Dogma. Die koptische Kirche betont vor allem: Gott hat am Tod des Gottlosen keinen Gefallen (Hes 33,11), und niemand geht verloren, der nicht selbst „nicht gewollt" hat (Mt 23,37). Mehr dazu im Themenblock „Hölle und Gericht".`,
      sources: [
        { kind: 'bibel', work: 'Hesekiel', ref: '33,11', quote: `So wahr als ich lebe, spricht der HERR HERR, ich habe keinen Gefallen am Tode des Gottlosen, sondern daß sich der Gottlose bekehre von seinem Wesen und lebe.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'molinismus-spekulativ',
          objection: `„Mittleres Wissen" ist reine Spekulation. Was soll Aussagen darüber, was ein freier Mensch in einer nie eingetretenen Situation tun *würde*, wahr machen? Es gibt dafür keine Grundlage (Grounding Objection).`,
          objectionBy: 'William Hasker / Robert M. Adams',
          answer: `Ein fairer Einwand – der Molinismus ist ein philosophisches Modell, kein Dogma der Kirche. Aber wir alle setzen solche Aussagen ständig voraus: „Hätte man meiner Mutter Geld für eine Lüge geboten, sie hätte abgelehnt." Wir halten das für wahr, ohne zu wissen, was es „wahr macht". Und vor allem: Ich brauche den Molinismus nicht. Die Vereinbarkeit von Vorherwissen und Freiheit lässt sich auch ohne ihn zeigen.`,
          detail: `Die Grounding Objection ist die bekannteste Kritik am Molinismus. Molinisten antworten, dass kontrafaktische Aussagen über freie Entscheidungen grundlegend wahr sein können, ohne in etwas anderem verankert zu sein. Die Debatte ist offen. Für die koptische Apologetik gilt: Man sollte den Molinismus als mögliches Modell kennen, ihn aber nicht als kirchliche Lehre ausgeben.`,
          followUps: [
            {
              id: 'nur-moegliches-modell',
              objection: `Dann bleibt dir nur ein „mögliches Modell". Das ist kein Wissen, sondern ein Ausweichen.`,
              objectionBy: 'Philosophischer Kritiker',
              answer: `Für deinen Vorwurf genügt es. Du hast behauptet, Vorherwissen und Freiheit seien *logisch unvereinbar*. Einen logischen Widerspruch widerlegt man, indem man ein widerspruchsfreies Modell zeigt – ob es auch das tatsächliche ist, ist eine zweite Frage. Die Beweislast für „unmöglich" liegt bei dem, der es behauptet.`,
              detail: `Das ist dieselbe Methode, mit der Alvin Plantinga das logische Problem des Übels entschärft hat (siehe Themenblock Theodizee). In der Logik heißt das ein Konsistenzbeweis durch ein Modell.`,
            },
          ],
        },
        {
          id: 'warum-dann-beten',
          objection: `Wenn Gott sowieso schon alles weiß, was geschehen wird – warum betet ihr dann? Euer Gebet ändert doch nichts.`,
          objectionBy: 'Häufige Frage von Skeptikern und Gläubigen',
          answer: `Gottes Wissen umfasst auch mein Gebet. Wenn Gott weiß, dass ich bete, kann er mein Gebet von Ewigkeit her in seinen Plan aufnehmen – so wie ein Vater, der weiß, dass sein Kind ihn um etwas bitten wird, und es deshalb bereithält. Das Gebet ist nicht überflüssig, sondern eine der Weisen, wie Gott die Welt durch freie Geschöpfe lenkt. Origenes hat genau diese Frage schon im 3. Jahrhundert beantwortet.`,
          detail: `Origenes, *Über das Gebet* 5–6: Gott ordnet die Welt so, dass er die freien Regungen der Menschen, auch ihre Gebete, vorhersieht und berücksichtigt. Außerdem ist Beten nicht nur Bitten, sondern Gemeinschaft mit Gott – die Agpeya, das Stundengebet der koptischen Kirche, ist vor allem Lobpreis, Psalmen und Hingabe. Siehe auch den Claim „Gott erhört Gebete nicht".`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Zwingt dein Wissen, dass ich gerade sitze, mich zum Sitzen? Wenn nicht – worin unterscheidet sich Gottes Wissen grundsätzlich?`,
    `Ist Wissen die Ursache seines Gegenstandes – oder richtet es sich nach ihm?`,
    `Wenn Gott nicht in der Zeit ist: Wo genau liegt dann die „vergangene Überzeugung", die mich festlegen soll?`,
    `Du sagst „logisch unvereinbar". Welche der drei Lösungen (Ewigkeit, Ockhamismus, Molinismus) hast du als widersprüchlich erwiesen?`,
  ],
  avoid: [
    `„Gott weiß nur das Notwendige, nicht unsere freien Entscheidungen." – Das ist offener Theismus und widerspricht Schrift und Vätern.`,
    `„Gott hat alles vorherbestimmt, auch wer verloren geht." – Das ist calvinistisch, nicht orthodox. Kopten verteidigen nicht Calvins doppelte Prädestination.`,
    `„Das ist eben ein Geheimnis." – Als erste Antwort wirkt das wie eine Flucht. Erst die logische Analyse geben; das Wort „Geheimnis" ist dann für das Wie der Ewigkeit angemessen, nicht für das Ob.`,
  ],
  concessions: [
    `Das Fatalismus-Argument ist intellektuell ernst zu nehmen; auch christliche Philosophen streiten über die beste Lösung.`,
    `Wie genau Gottes ewiges Wissen sich zur Zeit verhält, übersteigt unser Begreifen; wir können Widerspruchsfreiheit zeigen, nicht Gottes Erkenntnisweise durchschauen.`,
  ],
  furtherReading: [
    { kind: 'kirchenvater', author: 'Boethius', work: 'Der Trost der Philosophie, Buch V', year: 'ca. 524', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'William Lane Craig', work: 'The Only Wise God', year: '1987', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Linda Zagzebski', work: 'The Dilemma of Freedom and Foreknowledge', year: '1991', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Origenes', work: 'Gegen Kelsos II,20; Über das Gebet 5–6', year: '3. Jh.', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Vorherwissen', 'Allwissenheit', 'Fatalismus', 'Boethius', 'Molinismus', 'Ewigkeit', 'Offener Theismus'],
  related: [
    'willensfreiheit/freier-wille-illusion',
    'calvinismus/doppelte-praedestination',
    'calvinismus/roemer-9',
    'theodizee/unerhoerte-gebete',
    'hoelle/liebender-gott-keine-hoelle',
  ],
};

export default claim;
