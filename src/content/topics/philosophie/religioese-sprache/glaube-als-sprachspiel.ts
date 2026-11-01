import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'glaube-als-sprachspiel',
  title: `„Religion ist nur ein Sprachspiel ohne Wahrheitsanspruch."`,
  proponents: [
    { name: 'D. Z. Phillips', role: 'Religionsphilosoph, Swansea und Claremont (1934–2006)', work: 'The Concept of Prayer (1965); Death and Immortality (1970); Religion without Explanation (1976)' },
    { name: 'Ludwig Wittgenstein', role: 'Philosoph (1889–1951)', work: 'Philosophische Untersuchungen (1953); Vorlesungen über religiösen Glauben (hg. 1966)' },
    { name: 'Don Cupitt', role: 'Theologe, Cambridge; „Sea of Faith"-Bewegung', work: 'Taking Leave of God (1980)' },
    { name: 'Karen Armstrong', role: 'Religionshistorikerin', work: 'The Case for God (2009)' },
  ],
  steelman: `Wittgenstein hat gezeigt, dass die Bedeutung eines Wortes sein Gebrauch in einer Lebensform ist. Religiöse Sprache gehört zu einem eigenen „Sprachspiel" mit eigenen Regeln – Gebet, Lob, Klage, Bekenntnis. Wer „Gott hat die Welt erschaffen" wie eine kosmologische Hypothese behandelt, macht einen Kategorienfehler, egal ob er sie verteidigt oder angreift. D. Z. Phillips folgerte daraus: Das Bittgebet ist kein Versuch, einen Weltlenker umzustimmen, sondern Ausdruck der Hingabe; das „ewige Leben" ist keine Fortdauer nach dem Tod, sondern eine Qualität selbstloser Liebe hier und jetzt. Don Cupitt ging weiter: „Gott" ist die Summe unserer höchsten Ideale. Karen Armstrong betont, dass vormoderne Gläubige Religion als Praxis und Mythos verstanden, nicht als wörtliche Tatsachenbehauptung. So verstanden, gerät der Glaube nie in Konflikt mit Wissenschaft und Geschichte – aber er macht auch keinen Wahrheitsanspruch. Wer behauptet, Gott existiere „wirklich" wie ein Gegenstand, hat die Grammatik des Glaubens nicht verstanden.`,
  biblical: {
    summary: `Die Bibel enthält Gebet, Poesie, Klage und Lob – sie ist weit mehr als eine Sammlung von Tatsachensätzen. Aber sie verankert den Glauben ausdrücklich in Wirklichkeit und Geschichte: Paulus vor König Agrippa: „Dies ist nicht im Winkel geschehen" (Apg 26,26). Johannes schreibt, „damit ihr glaubt, dass Jesus der Christus ist" (Joh 20,31). Und Paulus: „Hoffen wir allein in diesem Leben auf Christus, so sind wir die elendesten unter allen Menschen" (1 Kor 15,19) – ein Satz, der nur Sinn hat, wenn die Auferstehung eine Tatsache ist und nicht nur eine Lebenshaltung.`,
    detail: `- **Apg 26,26:** Paulus beruft sich vor einem römischen Statthalter auf öffentlich bekannte Ereignisse.
- **Lk 1,1–4:** Lukas will „den gewissen Grund" (*asphaleia*, Sicherheit) der Lehre vermitteln – die Sprache eines Historikers.
- **Apg 1,3:** Jesus zeigte sich „durch mancherlei Erweisungen" (*tekmēria*, „sichere Beweiszeichen") als lebendig.
- **1 Kor 15,14–19:** Wenn die Auferstehung nur eine Metapher wäre, wäre der Glaube nach Paulus „vergeblich".
- **Wahrheitsbegriff:** Im Johannesevangelium sagt Jesus: „Ich bin … die Wahrheit" (Joh 14,6) und vor Pilatus, er sei gekommen, „dass ich für die Wahrheit zeugen soll" (Joh 18,37). Biblische Wahrheit ist mehr als korrekte Sätze – aber nicht weniger.`,
    sources: [
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '26,26', quote: `Denn der König weiß solches wohl, zu welchem ich freudig rede. Denn ich achte, ihm sei der keines verborgen; denn solches ist nicht im Winkel geschehen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '20,31', quote: `Diese aber sind geschrieben, daß ihr glaubet, Jesus sei Christus, der Sohn Gottes, und daß ihr durch den Glauben das Leben habet in seinem Namen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '15,19', quote: `Hoffen wir allein in diesem Leben auf Christum, so sind wir die elendesten unter allen Menschen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '1,3', quote: `… welchen er sich nach seinem Leiden lebendig erzeigt hatte durch mancherlei Erweisungen und ließ sich sehen unter ihnen vierzig Tage lang …`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Kirche hat nie zwischen „gelebtem Glauben" und „Wahrheit" getrennt. Die Konzilien rangen um einzelne Wörter – *homoousios* in Nizäa, *Theotokos* in Ephesus –, weil es um die Wirklichkeit ging: Ist Christus wahrhaft Gott? Ist der, den Maria geboren hat, Gott selbst? Niemand streitet über ein Wort, wenn es nur ein Spielzug wäre. Die koptische Kirche, Kirche der Märtyrer, hat für diese Wahrheit gelitten – von Diokletian bis zu den 21 Märtyrern von Libyen (2015), die mit dem Namen Jesu auf den Lippen starben. Sie starben nicht für eine Lebensform, sondern für den, den sie als lebendigen Herrn bekannten.`,
    detail: `Justin der Märtyrer, ein Philosoph des 2. Jahrhunderts, beschreibt seinen Weg zum Glauben als Suche nach der *wahren* Philosophie; er fand im Christentum „die allein sichere und nützliche Philosophie" (Dialog mit Tryphon 8). Athanasius schreibt gegen die Arianer nicht über Sprachregeln, sondern über das Sein des Sohnes. Die alexandrinische Auslegung kennt den geistlichen Sinn der Schrift – aber immer *auf* dem wörtlichen und geschichtlichen, nicht an seiner Stelle.`,
    sources: [
      { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Dialog mit dem Juden Tryphon', ref: '8', year: 'um 160', status: 'paraphrase', quote: 'Ich fand diese Philosophie als die allein sichere und nützliche.' },
      { kind: 'konzil', work: 'Glaubensbekenntnis von Nizäa', year: '325', quote: `… eines Wesens mit dem Vater …`, original: 'ὁμοούσιον τῷ πατρί', status: 'verbatim', note: 'Der Streit um ein einziges Wort zeigt, dass die Kirche ihre Aussagen als wahr oder falsch verstand.' },
    ],
  },
  quickAnswer: `Wittgenstein hat recht, dass religiöse Sprache vielfältig ist: Gebet, Lob, Klage sind keine Laborberichte. Aber sie setzen voraus, dass es jemanden gibt, den man lobt und anfleht – niemand dankt einem Niemand. Das Christentum macht ausdrücklich Wahrheitsansprüche: Jesus wurde unter Pontius Pilatus gekreuzigt und ist auferstanden. Paulus sagt, ohne diese Tatsache wäre der Glaube „vergeblich" (1 Kor 15,14–17). Wer den Glauben zum bloßen Sprachspiel macht, beschreibt nicht das Christentum, sondern ersetzt es durch etwas anderes – und selbst der Atheist Kai Nielsen nannte das eine Immunisierung gegen jede Kritik.`,
  keyPoints: [
    `**Teilwahrheit anerkennen:** Religiöse Sprache ist mehr als Tatsachenbehauptung – sie ist Gebet, Lob, Hingabe. Das hat Wittgenstein richtig gesehen.`,
    `**Aber sie setzt Wirklichkeit voraus:** Lob, Dank und Bitte richten sich an ein Du. Ohne einen realen Gott werden sie zum Selbstgespräch.`,
    `**Das Christentum ist geschichtlich verankert:** „Gekreuzigt unter Pontius Pilatus", „nicht im Winkel geschehen", „vergeblich, wenn nicht auferstanden".`,
    `**Phillips beschreibt nicht, er reformiert:** Die Gläubigen selbst – von Paulus über die Väter bis zur koptischen Liturgie – verstehen ihre Aussagen realistisch. Eine Deutung, die fast alle Gläubigen für „verwirrt" erklärt, ist keine Beschreibung des Glaubens.`,
    `**Auch Atheisten sehen das Problem:** Kai Nielsen prägte 1967 den Begriff „wittgensteinscher Fideismus" als Kritik: Ein Glaube, der keinen Wahrheitsanspruch erhebt, entzieht sich jeder Prüfung.`,
    `**Mythos wurde Tatsache:** C. S. Lewis – die Sehnsucht der Mythen nach einem sterbenden und auferstehenden Gott ist in Christus geschichtliche Wirklichkeit geworden.`,
  ],
  voices: [
    {
      person: 'william-alston',
      role: 'als Verteidiger des religiösen Realismus',
      text: `Alston hat sich ausdrücklich gegen nicht-realistische Deutungen des Christentums gewandt, wie sie Phillips und Cupitt vertreten. Er argumentiert, dass der christliche Glaube von seinem eigenen Selbstverständnis her realistisch ist: Er behauptet, dass Gott unabhängig von unserem Denken und Sprechen existiert und gehandelt hat. Eine Deutung, die das bestreitet, mag als eigene Religionsphilosophie interessant sein, beschreibt aber nicht den Glauben der Kirche. Alston verteidigte zudem eine realistische Auffassung von Wahrheit überhaupt: Ein Satz ist wahr, wenn es sich so verhält, wie er sagt.`,
      sources: [
        { kind: 'fachliteratur', author: 'William P. Alston', work: '„Realism and the Christian Faith", International Journal for Philosophy of Religion 38', year: '1995', status: 'paraphrase', quote: 'Der christliche Glaube ist seinem Wesen nach realistisch; nicht-realistische Deutungen sind Revisionen, keine Beschreibungen.' },
        { kind: 'fachliteratur', author: 'William P. Alston', work: 'A Realist Conception of Truth', year: '1996', status: 'paraphrase', quote: 'Verteidigung eines realistischen Wahrheitsbegriffs.' },
      ],
    },
    {
      person: 'cs-lewis',
      role: 'als Literaturwissenschaftler und Apologet',
      text: `Lewis, Fachmann für Mythen und mittelalterliche Literatur, war vor seiner Bekehrung überzeugt, die Christusgeschichte sei ein Mythos wie die von Balder oder Adonis. Im Gespräch mit Tolkien und Dyson (1931) erkannte er: Der Mythos vom sterbenden Gott ist in Christus Tatsache geworden – „unter Pontius Pilatus", an einem bestimmten Ort, zu einer bestimmten Zeit. Lewis hielt fest, dass das Christentum gerade nicht nur „wahr wie Poesie" sein will, sondern auch geschichtlich wahr. Wer daraus nur ein Sprachspiel macht, verliert genau das, was ihn als Mythos so bewegt: dass es wirklich geschehen ist.`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: '„Myth Became Fact" (1944), in: God in the Dock', year: '1970', status: 'paraphrase', quote: 'Der Kern des Christentums ist ein Mythos, der zugleich Tatsache ist: Der alte Mythos vom sterbenden Gott tritt in die Geschichte ein.' },
      ],
    },
    {
      person: 'nt-wright',
      role: 'als Neutestamentler',
      text: `Wright zeigt in seinem Standardwerk über die Auferstehung, dass das griechische *anastasis* im Judentum und im frühen Christentum nie eine bloß innere Erfahrung oder eine Metapher für neuen Mut bezeichnete, sondern ein leibliches Wiederaufstehen nach dem Tod. Die ersten Christen behaupteten also eine Tatsache über einen Leichnam und ein Grab. Ob man ihnen glaubt, ist eine historische Frage – aber man kann ihre Aussage nicht in ein „Sprachspiel ohne Wahrheitsanspruch" umdeuten, ohne ihnen etwas anderes in den Mund zu legen, als sie gesagt haben.`,
      sources: [
        { kind: 'fachliteratur', author: 'N. T. Wright', work: 'The Resurrection of the Son of God', year: '2003', status: 'paraphrase', quote: 'Anastasis bezeichnete im antiken Judentum und frühen Christentum ein leibliches Leben nach dem Tod, keine Metapher.' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Bekenner von Nizäa',
      text: `Athanasius kämpfte sein Leben lang – fünfmal verbannt – um ein einziges Wort des Bekenntnisses: dass der Sohn „eines Wesens" mit dem Vater ist. Für ihn ging es nicht um Geschmack oder kirchliche Sprachregelung, sondern um die Wirklichkeit des Heils: Nur wenn der Sohn wahrhaft Gott ist, kann er uns mit Gott vereinen; ein Geschöpf könnte uns nicht vergöttlichen. Sein Kampf zeigt, dass die Kirche ihre Bekenntnisse als wahr oder falsch verstand – und dass sie bereit war, dafür zu leiden.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Reden gegen die Arianer (Orationes contra Arianos)', ref: 'II,69–70', status: 'paraphrase', quote: 'Wäre der Sohn ein Geschöpf, so wäre der Mensch nicht mit Gott vereint; nur weil er wahrer Gott ist, werden wir vergöttlicht.' },
      ],
    },
    {
      person: 'justin',
      role: 'als Philosoph und Märtyrer',
      text: `Justin war ein Philosoph, der Stoiker, Peripatetiker, Pythagoreer und Platoniker durchwanderte, bevor er von einem alten Mann am Meer auf die Propheten und Christus hingewiesen wurde. Er verstand das Christentum als *wahre* Philosophie, als Erkenntnis des Logos, der in Christus ganz erschienen ist. Er trug weiterhin den Philosophenmantel und starb um 165 in Rom als Märtyrer. Für Justin war Glaube nicht der Verzicht auf Wahrheit, sondern ihre Vollendung.`,
      sources: [
        { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Dialog mit Tryphon', ref: '2–8', status: 'paraphrase', quote: 'Bericht über die philosophische Suche und die Bekehrung zur wahren Philosophie.' },
      ],
    },
  ],
  dialog: [
    {
      id: 'eigenes-sprachspiel',
      objection: `„Religion ist ein eigenes Sprachspiel mit eigenen Regeln. ‚Gott existiert' ist keine Hypothese wie ‚Es gibt Quarks', sondern drückt eine Lebensform aus. Du kannst es nicht mit wissenschaftlichen oder historischen Maßstäben prüfen."`,
      objectionBy: 'D. Z. Phillips (Religion without Explanation, 1976)',
      answer: `Daran ist etwas Wahres: Gott ist kein Gegenstand neben anderen, und Gebet ist kein Laborbericht. Aber Christen meinen mit „Gott existiert" nicht nur „Ich lebe auf eine bestimmte Weise", sondern dass es Gott wirklich gibt – unabhängig von uns. Lob und Dank richten sich an jemanden; niemand dankt einem Niemand. Und das Christentum verbindet seinen Glauben mit geschichtlichen Ereignissen: „gekreuzigt unter Pontius Pilatus".`,
      sources: [
        { kind: 'fachliteratur', author: 'Ludwig Wittgenstein', work: 'Philosophische Untersuchungen', ref: '§ 23', year: '1953', quote: `Das Wort „Sprachspiel" soll hier hervorheben, daß das Sprechen der Sprache ein Teil ist einer Tätigkeit, oder einer Lebensform.`, status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'glaeubige-verstehen-sich-falsch',
          objection: `„Viele Gläubige missverstehen ihren eigenen Glauben, indem sie ihn wie eine pseudowissenschaftliche Theorie behandeln. Wahre Religion hat mit solchen Tatsachenbehauptungen nichts zu tun."`,
          objectionBy: 'D. Z. Phillips (sinngemäß)',
          answer: `Dann beschreibt Phillips den Glauben nicht, sondern er korrigiert ihn – und zwar gegen fast alle Gläubigen aller Jahrhunderte. Paulus, die Väter, die Konzilien und die Liturgie sprechen realistisch: Gott *ist*, Christus *ist* auferstanden. Wer entscheidet, was „wahre Religion" ist – ein Philosoph des 20. Jahrhunderts oder die Gemeinschaft, die diesen Glauben seit 2000 Jahren lebt? Selbst der Atheist Kai Nielsen sah in Phillips' Ansatz eine Umdeutung, die den Glauben gegen jede Kritik abschirmt.`,
          sources: [
            { kind: 'gegner', author: 'Kai Nielsen', work: '„Wittgensteinian Fideism", Philosophy 42 (Nr. 161)', year: '1967', status: 'paraphrase', quote: 'Kritik der Auffassung, religiöse Sprachspiele seien nur von innen verständlich und von außen nicht kritisierbar.', note: 'Nielsen prägte hier den Begriff; Phillips lehnte das Etikett ab.' },
          ],
          followUps: [
            {
              id: 'realismus-naiv-kant',
              objection: `„Realismus über Gott ist naiv. Spätestens seit Kant wissen wir, dass wir keinen Zugang zu einem ‚Ding an sich' haben. ‚Gott' ist die Summe unserer höchsten Ideale – mehr nicht."`,
              objectionBy: 'Don Cupitt (Taking Leave of God, 1980)',
              answer: `Der Satz „Wir können nicht wissen, wie die Wirklichkeit an sich ist" ist selbst eine Behauptung darüber, wie die Wirklichkeit an sich ist – er untergräbt sich. Kant selbst hielt an Gott als Postulat der praktischen Vernunft fest. Und wenn alle unsere Begriffe die Wirklichkeit verfehlen, dann gilt das auch für Cupitts eigene Theorie. Der christliche Glaube spricht zudem nicht von einem fernen „Ding an sich", sondern von einer Person, die in der Geschichte gesprochen und gehandelt hat.`,
              followUps: [
                {
                  id: 'ideal-genuegt',
                  objection: `„Aber Gott als höchstes Ideal genügt doch: Er motiviert zu Liebe und Gerechtigkeit. Wozu braucht man einen ‚wirklichen' Gott dahinter?"`,
                  objectionBy: 'Don Cupitt / „Sea of Faith"-Bewegung (sinngemäß)',
                  answer: `Ein Ideal kann nicht vergeben, nicht trösten, nicht die Toten auferwecken und dich nicht lieben. Paulus sagt: Wenn wir nur in diesem Leben auf Christus hoffen, sind wir die elendesten aller Menschen (1 Kor 15,19). Ein Gott, der nur unsere eigenen Werte widerspiegelt, kann uns auch nie korrigieren – er sagt immer, was wir schon denken. Bezeichnend ist, dass nicht-realistische Kirchenbewegungen kaum Menschen gewonnen haben: Wer einen Gott sucht, sucht ein Gegenüber, nicht ein Spiegelbild.`,
                  questionsBack: [`Kann ein Ideal dir vergeben?`],
                },
              ],
            },
          ],
        },
        {
          id: 'entweder-spiel-oder-hypothese',
          objection: `„Dann entscheide dich: Entweder Religion ist ein Sprachspiel – dann ist sie harmlos, aber nicht wahr. Oder sie ist eine Tatsachenbehauptung – dann ist sie eine wissenschaftliche Hypothese, und die ist gescheitert."`,
          objectionBy: 'Richard Dawkins (The God Delusion, Kap. 2, sinngemäß)',
          answer: `Es gibt ein Drittes: Der christliche Glaube erhebt Wahrheitsansprüche, die nicht im Labor, sondern philosophisch und historisch geprüft werden – so wie die Frage, ob Caesar den Rubikon überschritt, oder ob Naturgesetze existieren. Dawkins hat recht, dass „Gott existiert" eine Behauptung über die Wirklichkeit ist. Aber er verkürzt die Wirklichkeit auf das, was Naturwissenschaft messen kann.`,
          followUps: [
            {
              id: 'gott-hypothese-gescheitert',
              objection: `„Gott ist eine Hypothese wie jede andere, und die Wissenschaft hat sie nicht nötig – also ist sie gescheitert."`,
              objectionBy: 'Victor Stenger (God: The Failed Hypothesis, 2007)',
              answer: `Dass die Naturwissenschaft innerhalb der Natur ohne Gott auskommt, ist richtig und christlich – sie erklärt, *wie* die Natur funktioniert. Die Frage ist, warum es überhaupt eine geordnete, mathematisch beschreibbare Natur gibt und warum wir sie erkennen können. Dafür ist Gott keine Lückenfüller-Hypothese, sondern die Erklärung des Ganzen. Die großen Begründer der Naturwissenschaft – Kepler, Boyle, Newton, Maxwell – sahen genau darin den Grund für ihr Forschen.`,
              detail: `Siehe „Gott ist nur ein Lückenbüßer – die Wissenschaft schließt die Lücken" und „Dass die Welt mathematisch beschreibbar ist, ist Zufall".`,
            },
          ],
        },
      ],
    },
    {
      id: 'gebet-kein-bittgesuch',
      objection: `„Das Bittgebet ist kein Versuch, Gott zu einem Eingriff zu bewegen. ‚Dein Wille geschehe' zeigt: Beten heißt, seine Wünsche auszusprechen und sich dem zu ergeben, was kommt. Es ist Ausdruck, nicht Ursache."`,
      objectionBy: 'D. Z. Phillips (The Concept of Prayer, 1965)',
      answer: `Jesus lehrte ausdrücklich das Bitten: „Bittet, so wird euch gegeben" (Mt 7,7) – und begründete es mit einem Vater, der seinen Kindern Gutes gibt. Jakobus erinnert an Elia, auf dessen Gebet hin es nicht regnete (Jak 5,17). „Dein Wille geschehe" setzt gerade voraus, dass es einen Willen gibt, der geschehen kann. Natürlich ist Gebet auch Hingabe – aber Hingabe an jemanden, nicht ins Leere.`,
      sources: [
        { kind: 'bibel', work: 'Matthäus', ref: '7,7.11', quote: `Bittet, so wird euch gegeben; suchet, so werdet ihr finden; klopfet an, so wird euch aufgetan. … So denn ihr, die ihr doch arg seid, könnt dennoch euren Kindern gute Gaben geben, wieviel mehr wird euer Vater im Himmel Gutes geben denen, die ihn bitten!`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'bibel', work: 'Jakobus', ref: '5,16–17', quote: `Des Gerechten Gebet vermag viel, wenn es ernstlich ist. Elia war ein Mensch gleichwie wir; und er betete ein Gebet, daß es nicht regnen sollte, und es regnete nicht auf Erden drei Jahre und sechs Monate.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'bittgebet-magie',
          objection: `„Wer glaubt, er könne mit Gebeten den Lauf der Welt beeinflussen, denkt magisch. Phillips rettet das Gebet gerade vor diesem kindischen Aberglauben."`,
          objectionBy: 'D. Z. Phillips / Daniel Dennett (sinngemäß)',
          answer: `Magie will eine Macht durch richtige Formeln *kontrollieren*; das christliche Gebet *bittet* eine freie Person, die auch Nein sagen kann. Das ist nicht kindisch, sondern kindlich – „wenn ihr nicht werdet wie die Kinder" (Mt 18,3). Thomas von Aquin erklärte: Wir beten nicht, um Gottes Plan zu ändern, sondern um zu empfangen, was er *durch* unser Gebet geben will. Die koptische Agpeya – sieben Gebetszeiten am Tag – ist ein Gespräch mit einem Du, nicht ein Selbstgespräch.`,
          sources: [
            { kind: 'fachliteratur', author: 'Thomas von Aquin', work: 'Summa theologiae', ref: 'II-II q.83 a.2', status: 'paraphrase', quote: 'Wir beten, um zu erlangen, was Gott durch Gebete zu gewähren angeordnet hat.' },
          ],
          questionsBack: [`Ist es Magie, wenn ein Kind seinen Vater um etwas bittet – oder ist das eine Beziehung?`],
        },
      ],
    },
    {
      id: 'ewiges-leben-jetzt',
      objection: `„‚Ewiges Leben' heißt nicht, nach dem Tod weiterzuexistieren. Es ist eine Qualität des Lebens jetzt – selbstlose Liebe, die den Tod nicht fürchtet. Johannes selbst sagt: ‚Das ist das ewige Leben, dass sie dich erkennen' (Joh 17,3)."`,
      objectionBy: 'D. Z. Phillips (Death and Immortality, 1970)',
      answer: `Joh 17,3 sagt tatsächlich, dass das ewige Leben schon jetzt beginnt – in der Erkenntnis Gottes. Aber dasselbe Evangelium sagt: „Ich bin die Auferstehung und das Leben; wer an mich glaubt, der wird leben, ob er gleich stürbe" (Joh 11,25), und es erzählt vom leeren Grab und vom Auferstandenen, den Thomas berührt (Joh 20,27). Das „Schon jetzt" und das „Noch nicht" gehören zusammen. Wer nur das eine behält, hat das Evangelium halbiert.`,
      sources: [
        { kind: 'bibel', work: 'Johannes', ref: '11,25', quote: `Jesus spricht zu ihr: Ich bin die Auferstehung und das Leben. Wer an mich glaubt, der wird leben, ob er gleich stürbe.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'auferstehung-metapher-bultmann',
          objection: `„Auch die Auferstehung ist eine Metapher. Rudolf Bultmann sagte: Jesus ist ‚ins Kerygma auferstanden' – also in die Verkündigung, in den neuen Glauben der Jünger."`,
          objectionBy: 'Rudolf Bultmann / John Shelby Spong (sinngemäß)',
          answer: `Die ersten Zeugen meinten etwas anderes: ein leeres Grab, Begegnungen, Essen mit dem Auferstandenen. Das griechische *anastasis* bezeichnete im Judentum ein leibliches Wiederaufstehen, wie N. T. Wright ausführlich gezeigt hat. Man kann die Auferstehung bestreiten – aber man kann nicht behaupten, Paulus und die Evangelisten hätten nur eine Metapher gemeint. Paulus sagt ja gerade: Wenn sie nicht geschah, ist der Glaube vergeblich.`,
          sources: [
            { kind: 'gegner', author: 'Rudolf Bultmann', work: 'Das Verhältnis der urchristlichen Christusbotschaft zum historischen Jesus', year: '1960', status: 'paraphrase', quote: 'Jesus ist ins Kerygma auferstanden.', note: 'Bultmann war lutherischer Theologe; seine Entmythologisierung wird hier als Gegenposition zitiert.' },
          ],
          followUps: [
            {
              id: 'wright-ist-bischof',
              objection: `„Wright ist anglikanischer Bischof – natürlich kommt er zu diesem Ergebnis."`,
              objectionBy: 'Richard Carrier (sinngemäß)',
              answer: `Ein Argument wird nicht dadurch falsch, dass ein Bischof es vorträgt. Aber gut: Der jüdische Neutestamentler Pinchas Lapide kam zu dem Ergebnis, dass die Auferstehung Jesu ein reales Ereignis war – ohne Jesus als Messias anzuerkennen. Und selbst der Agnostiker Bart Ehrman gesteht zu, dass die Jünger fest überzeugt waren, Jesus leibhaftig gesehen zu haben. Was die ersten Christen *meinten*, ist unter Historikern kaum strittig – strittig ist nur, ob sie recht hatten.`,
              sources: [
                { kind: 'fachliteratur', author: 'Pinchas Lapide', work: 'Auferstehung. Ein jüdisches Glaubenserlebnis', year: '1977', status: 'paraphrase', quote: 'Ein jüdischer Gelehrter hält die Auferstehung Jesu für ein reales Geschehen, ohne Jesus als Messias anzuerkennen.' },
              ],
              detail: `Siehe den Themenblock „Die Auferstehung Jesu".`,
            },
          ],
        },
      ],
    },
    {
      id: 'religion-als-poesie',
      objection: `„Religion ist wie Poesie oder Musik: Es geht um Praxis, Ritual, Sinn. Vormoderne Menschen haben ihre Mythen nie wörtlich genommen – das wörtliche Glauben ist eine moderne Verirrung, ausgelöst durch den Wettbewerb mit der Wissenschaft."`,
      objectionBy: 'Karen Armstrong (The Case for God, 2009)',
      answer: `Für das Christentum stimmt diese historische Behauptung nicht. Die frühen Christen starben nicht für ein Gedicht, sondern weil sie bekannten, dass Jesus lebt und Herr ist – nicht der Kaiser. Konzilien stritten über ein Wort (*homoousios*), weil es um die Wirklichkeit ging. C. S. Lewis, selbst Fachmann für Mythen, sagte: Im Christentum ist „der Mythos Tatsache geworden" – das, was die Mythen erahnten, ist unter Pontius Pilatus wirklich geschehen.`,
      followUps: [
        {
          id: 'alexandriner-allegorie',
          objection: `„Aber gerade eure Alexandriner – Origenes und Co. – haben die Bibel allegorisch gelesen! Ihr selbst gebt zu, dass sie geistlich ausgelegt haben."`,
          objectionBy: 'Karen Armstrong (sinngemäß)',
          answer: `Die alexandrinische Tradition liest wörtlich *und* geistlich – nicht geistlich *statt* wörtlich. Auch Origenes hielt an der Wirklichkeit der Menschwerdung, des Kreuzes und der Auferstehung fest; die geistliche Deutung baut darauf auf. Kyrill von Alexandrien bestand gegen Nestorius gerade auf der geschichtlichen Wirklichkeit: Der, den Maria geboren hat, ist Gott selbst. Allegorie war für die Väter eine Vertiefung der Wirklichkeit, kein Ersatz.`,
          followUps: [
            {
              id: 'wozu-wahrheit',
              objection: `„Warum bestehst du überhaupt auf Wahrheit? Wenn der Glaube dir Sinn, Gemeinschaft und Trost gibt – reicht das nicht?"`,
              objectionBy: 'Alain de Botton (Religion for Atheists, 2012, sinngemäß)',
              answer: `Weil ein tröstlicher Irrtum eine Täuschung bleibt – und Christen würden ihren Glauben aufgeben, wenn er falsch wäre (1 Kor 15,14). Würdest du dir einen Ehepartner wünschen, der nur eine nützliche Einbildung ist? Gerade die Liebe will das Wirkliche. Und wenn das Christentum wahr ist, ist es nicht nur ein schönes Hobby für Gläubige, sondern betrifft jeden Menschen – auch dich.`,
              questionsBack: [`Wäre dir ein Trost recht, von dem du wüsstest, dass er auf einer Lüge beruht?`],
            },
          ],
        },
      ],
    },
    {
      id: 'fideismus-immun',
      objection: `„Der wittgensteinsche Fideismus macht den Glauben gegen jede Kritik immun – genau das ist intellektuell unredlich. Wer sich auf ‚eigene Sprachspiele' zurückzieht, verweigert die Debatte."`,
      objectionBy: 'Kai Nielsen (Wittgensteinian Fideism, 1967)',
      answer: `Da sind wir uns einig! Gerade deshalb lehnt das orthodoxe Christentum den Fideismus ab. Petrus fordert, „allezeit bereit zur Verantwortung" zu sein für die Hoffnung, die in uns ist (1 Petr 3,15). Die Väter – Justin, Athanasius, Kyrill – haben mit Philosophen diskutiert, nicht sich vor ihnen versteckt. Glaube und Vernunft gehören zusammen, weil der Glaube an den Logos geht, die göttliche Vernunft selbst.`,
      sources: [
        { kind: 'bibel', work: '1. Petrus', ref: '3,15', quote: `Heiliget aber Gott den HERRN in euren Herzen. Seid aber allezeit bereit zur Verantwortung jedermann, der Grund fordert der Hoffnung, die in euch ist, und das mit Sanftmütigkeit und Furcht.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'glaube-ohne-belege',
          objection: `„Aber am Ende glaubst du doch über die Belege hinaus. Glaube ist definitionsgemäß Fürwahrhalten ohne Beweis."`,
          objectionBy: 'Peter Boghossian (A Manual for Creating Atheists, 2013)',
          answer: `Das ist nicht der biblische Begriff. *Pistis* heißt Vertrauen – und zwar begründetes Vertrauen: Johannes schreibt seine Zeichen auf, „damit ihr glaubt" (Joh 20,31); Jesus zeigte sich „durch mancherlei Erweisungen" (Apg 1,3). Vertrauen geht über das Bewiesene hinaus, wie Vertrauen in einen Freund – aber es ist nicht grundlos. Glaube ohne Gründe wäre Leichtgläubigkeit, und die lehnt die Schrift selbst ab: „Prüfet alles" (1 Thess 5,21).`,
          detail: `Siehe „Glaube heißt, etwas ohne Beweise für wahr zu halten".`,
          questionsBack: [`Vertraust du deinem besten Freund ohne jeden Grund – oder weil du ihn kennst?`],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wem dankt ein Mensch, der Gott dankt – wenn es Gott nicht gibt?`,
    `Wer entscheidet, was „wahre Religion" ist: ein Philosoph oder die Gemeinschaft, die diesen Glauben seit 2000 Jahren lebt?`,
    `Warum hätte Paulus geschrieben, ohne Auferstehung sei der Glaube vergeblich, wenn er sie nur als Metapher verstand?`,
    `Würdest du für ein Sprachspiel sterben?`,
  ],
  avoid: [
    `Wittgenstein pauschal verurteilen. Seine Einsicht, dass religiöse Sprache mehr ist als Tatsachenbehauptung, ist wertvoll – nur die nicht-realistische Folgerung ist falsch.`,
    `„Der Glaube steht über der Vernunft, Argumente sind unwichtig." – Das ist genau der Fideismus, den Nielsen kritisiert.`,
    `Phillips oder Cupitt als „verkappte Atheisten" beschimpfen. Sachlich: Ihre Deutung weicht vom Glauben der Kirche ab.`,
  ],
  concessions: [
    `Religiöse Sprache ist tatsächlich vielschichtig; wer sie nur als Sammlung von Hypothesen behandelt, verfehlt Gebet, Liturgie und Poesie.`,
    `Manche Gläubige reden über Gott wie über einen Gegenstand in der Welt; die Kritik, dass Gott „kein Ding unter Dingen" ist, ist berechtigt und klassisch christlich.`,
  ],
  furtherReading: [
    { kind: 'gegner', author: 'D. Z. Phillips', work: 'Religion without Explanation', year: '1976', status: 'paraphrase' },
    { kind: 'gegner', author: 'Kai Nielsen & D. Z. Phillips', work: 'Wittgensteinian Fideism?', year: '2005', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'William P. Alston', work: '„Realism and the Christian Faith"', year: '1995', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: '„Myth Became Fact", in: God in the Dock', year: '1970', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'N. T. Wright', work: 'The Resurrection of the Son of God', year: '2003', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Wittgenstein', 'Sprachspiel', 'Nicht-Realismus', 'Phillips', 'Fideismus', 'Wahrheit'],
  related: [
    'religioese-sprache/gaertner-parabel',
    'religioese-sprache/religioese-saetze-sinnlos',
    'erkenntnistheorie/glaube-ohne-beweise',
    'erkenntnistheorie/keine-absolute-wahrheit',
    'auferstehung/legende-entwickelte-sich',
    'liberale-theologie',
  ],
};

export default claim;
