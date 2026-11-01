import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'alle-religionen-gleich-wahr',
  title: `„Alle Religionen sind gleich wahr (Elefant und Blinde)."`,
  proponents: [
    { name: 'John Hick', role: 'Religionsphilosoph, Birmingham und Claremont (1922–2012)', work: 'An Interpretation of Religion (Gifford Lectures, 1989); God and the Universe of Faiths (1973)' },
    { name: 'Karen Armstrong', role: 'Religionshistorikerin, Initiatorin der „Charter for Compassion"', work: 'The Case for God (2009)' },
    { name: 'Huston Smith', role: 'Religionswissenschaftler (1919–2016)', work: 'The World\'s Religions (1991; urspr. The Religions of Man, 1958)' },
    { name: 'Paul F. Knitter', role: 'Katholischer Theologe, Union Theological Seminary', work: 'No Other Name? (1985)' },
  ],
  steelman: `Jede Religion ist eine kulturell geprägte Antwort auf dieselbe letzte Wirklichkeit. John Hick nennt sie „das Reale an sich": Es übersteigt alle menschlichen Begriffe und erscheint in den Traditionen teils als persönlicher Gott (Jahwe, die Trinität, Allah, Vishnu), teils als unpersönliches Absolutes (Brahman, das Dao, Nirvana). Wie Blinde, die einen Elefanten betasten, hält jede Religion ihren Teil für das Ganze. Woran erkennt man, dass alle echt sind? An ihren Früchten: In allen großen Traditionen werden Menschen vom Kreisen um sich selbst zur Ausrichtung auf die letzte Wirklichkeit verwandelt; überall gibt es Heilige. Karen Armstrong ergänzt: Religion ist zuerst Praxis des Mitgefühls, nicht das Fürwahrhalten von Lehrsätzen; ihre Lehren sind Mythos im tiefen Sinn, keine naturwissenschaftlichen Behauptungen. Wer behauptet, nur seine Religion sei wahr, macht Gott zum Stammesgott und erklärt den Großteil der Menschheit für verloren.`,
  biblical: {
    summary: `Die Bibel bejaht, dass Gott sich allen Menschen bezeugt (Apg 14,17; Röm 1,19–20) und dass Menschen außerhalb Israels Wahres erkennen (Röm 2,14–15; Apg 17,28). Sie bezeugt aber zugleich, dass Gott sich geschichtlich und endgültig in Jesus Christus offenbart hat (Hebr 1,1–2; Joh 14,6; Apg 4,12) – und dass dieser Glaube auf überprüfbaren Ereignissen ruht: „Ist aber Christus nicht auferstanden, so ist unsre Predigt vergeblich" (1 Kor 15,14). Der christliche Glaube versteht sich also nicht als ein Mythos unter vielen, sondern als Zeugnis von Tatsachen. Paulus auf dem Areopag zeigt die Haltung: Achtung vor der religiösen Suche, klare Verkündigung des Auferstandenen (Apg 17,22–31).`,
    sources: [
      { kind: 'bibel', work: '1. Korinther', ref: '15,14.17', quote: `Ist aber Christus nicht auferstanden, so ist unsre Predigt vergeblich, so ist auch euer Glaube vergeblich … so ist euer Glaube eitel, so seid ihr noch in euren Sünden.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '14,6', quote: `Ich bin der Weg und die Wahrheit und das Leben; niemand kommt zum Vater denn durch mich.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Römer', ref: '2,14–15', quote: `Denn so die Heiden, die das Gesetz nicht haben, doch von Natur tun des Gesetzes Werk, so sind dieselben, dieweil sie das Gesetz nicht haben, sich selbst ein Gesetz, als die da beweisen, des Gesetzes Werk sei geschrieben in ihren Herzen …`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '18,37–38', quote: `Ich bin dazu geboren und in die Welt gekommen, daß ich die Wahrheit zeugen soll. Wer aus der Wahrheit ist, der höret meine Stimme. Spricht Pilatus zu ihm: Was ist Wahrheit?`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Der Pluralismus ist nicht neu. Im 2. Jahrhundert erklärte der Philosoph Kelsos, es sei gleichgültig, ob man den Höchsten Zeus, Adonai, Sabaoth oder Amun nenne; Origenes widersprach ausführlich. Die frühen Christen starben gerade deshalb als Märtyrer, weil sie sich weigerten, Christus als einen Gott unter vielen zu behandeln: Ein wenig Weihrauch vor dem Kaiserbild hätte genügt. Die koptische Kirche, die ihre Jahre nach der „Ära der Märtyrer" zählt, steht in dieser Tradition. Zugleich hat die alexandrinische Theologie fremde Weisheit gewürdigt: Justin und Clemens sahen in Philosophen und Weisen „Samen des Logos" – Teilwahrheiten, die in Christus ihre Fülle finden.`,
    sources: [
      { kind: 'kirchenvater', author: 'Origenes', work: 'Contra Celsum', ref: 'V,41 (Kelsos); I,24–25; V,45–46 (Antwort)', status: 'paraphrase', quote: `Gegen die These, die Namen des Höchsten seien austauschbar, hält Origenes fest, dass mit den Namen verschiedene Gottesvorstellungen und Kulte verbunden sind.` },
      { kind: 'sonstiges', author: 'Plinius der Jüngere', work: 'Briefe (Epistulae)', ref: '10,96 (an Kaiser Trajan)', year: 'ca. 112', quote: `Wer bestritt, Christ zu sein, und die Götter anrief, dem Bild des Kaisers mit Weihrauch und Wein opferte und Christus lästerte, den ließ ich frei – zu all dem lassen sich wahre Christen angeblich nicht zwingen.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Erste Apologie', ref: '46', year: 'ca. 155', original: 'καὶ οἱ μετὰ λόγου βιώσαντες Χριστιανοί εἰσι', quote: `Die mit dem Logos gelebt haben, sind Christen, auch wenn sie für Gottlose gehalten wurden – wie bei den Griechen Sokrates und Heraklit.`, status: 'verbatim', translation: 'eigene Übersetzung' },
    ],
  },
  opposingView: {
    summary: `John Hick entwickelte den einflussreichsten religionsphilosophischen Pluralismus. In Anlehnung an Kants Unterscheidung von „Ding an sich" und „Erscheinung" deutet er die Gottheiten und Absoluta der Religionen als Erscheinungsformen des einen „Realen an sich", das selbst weder persönlich noch unpersönlich, weder gut noch böse im menschlichen Sinn ist. Kriterium echter Religion ist die Verwandlung vom Ichzentriertsein zur Ausrichtung auf das Reale. Folgerichtig deutete Hick die Menschwerdung Christi als Metapher (*The Myth of God Incarnate*, 1977; *The Metaphor of God Incarnate*, 1993).`,
    detail: `**Kritik aus der Fachwelt:** Gavin D'Costa argumentierte, ein pluralistischer Standpunkt sei „unmöglich", weil er selbst eine exklusive, aus der liberalen Moderne stammende Position sei, die allen tatsächlichen Religionen widerspricht. Peter van Inwagen und Alvin Plantinga bestritten, dass Hick einen neutralen Standpunkt einnimmt. Harold Netland zeigte, dass Hick die Religionen gegen ihr Selbstverständnis umdeutet. S. Mark Heim hielt dagegen, dass die Religionen tatsächlich verschiedene Ziele anstreben. **Zum Elefantengleichnis:** Seine älteste bekannte Fassung steht im buddhistischen Pali-Kanon (Udana 6,4): Der Buddha erzählt es, um streitende Lehrer anderer Schulen als Blinde zu kennzeichnen – der König, der den ganzen Elefanten sieht, steht für den, der die Wahrheit kennt.`,
    sources: [
      { kind: 'gegner', author: 'John Hick', work: 'An Interpretation of Religion: Human Responses to the Transcendent', year: '1989', status: 'paraphrase', quote: `Die großen Weltreligionen sind verschiedene, kulturell geprägte Wahrnehmungen des einen Realen und Antworten darauf; ihr gemeinsames Kriterium ist die Umwandlung vom Ichzentriertsein zum Realitätszentriertsein.` },
      { kind: 'gegner', author: 'John Hick (Hg.)', work: 'The Myth of God Incarnate', year: '1977', status: 'paraphrase', quote: `Die Lehre von der Menschwerdung Gottes in Jesus ist als mythologische oder poetische Ausdrucksweise zu verstehen, nicht als wörtliche Aussage.` },
      { kind: 'fachliteratur', author: 'Gavin D\'Costa', work: 'The Impossibility of a Pluralist View of Religions', ref: 'Religious Studies 32 (2), S. 223–232', year: '1996', status: 'paraphrase', quote: `Der Pluralismus ist selbst eine Form des Exklusivismus.` },
      { kind: 'oestlich', work: 'Udana 6,4 (Tittha-Sutta)', status: 'paraphrase', quote: `Ein König lässt Blinde einen Elefanten betasten; jeder beschreibt nur den ertasteten Teil, und sie geraten in Streit. So, sagt der Buddha, streiten die Wanderer anderer Schulen, die blind sind und das Wahre nicht kennen.`, url: 'https://www.dhammatalks.org/suttas/KN/Ud/ud6_4.html' },
    ],
  },
  quickAnswer: `Die Religionen machen Aussagen, die sich widersprechen: Gott ist ein persönlicher Schöpfer – oder es gibt keinen Schöpfer. Jesus ist am Kreuz gestorben – sagt das Neue Testament; er ist nicht gekreuzigt worden – sagt der Koran. Beides kann nicht zugleich wahr sein. Und das Elefantengleichnis hat einen Haken: Wer es erzählt, behauptet, den ganzen Elefanten zu sehen – also genau den Überblick, den er allen Religionen abspricht. Ich glaube nicht, dass alle anderen Religionen in allem falsch sind. Aber nicht alle können gleich wahr sein.`,
  keyPoints: [
    `**Satz vom Widerspruch:** Die Religionen widersprechen sich in Kernfragen (persönlicher Gott oder nicht; Kreuzestod Jesu oder nicht; ein Leben oder viele). Widersprüchliches kann nicht zugleich wahr sein.`,
    `**Der Erzähler sieht den Elefanten:** Das Gleichnis setzt einen Überblick voraus, den es allen anderen abspricht. In der ältesten Fassung (Udana 6,4) ist es sogar ein exklusives Gleichnis des Buddha gegen andere Schulen.`,
    `**Hicks „Reales an sich" ist leer oder parteiisch:** Ohne erkennbare Eigenschaften lässt sich nichts darüber sagen – auch nicht, dass die Religionen darauf antworten. Hicks Kriterium der „Verwandlung" ist selbst eine bestimmte Ethik.`,
    `**Pluralismus ist verdeckter Exklusivismus:** Er erklärt die Menschwerdung zum Mythos, den Koran in seinem Endgültigkeitsanspruch für irrig, den Buddhismus für theistisch umdeutbar – er widerspricht allen Religionen in ihrem Selbstverständnis (D'Costa).`,
    `**Teilwahrheiten ja, gleiche Wahrheit nein:** Christen erkennen Wahres in anderen Religionen an (Justin, „Samen des Logos"; C. S. Lewis). Aber widersprüchliche Aussagen können nicht Teile desselben Ganzen sein.`,
    `**Logik ist nicht „westlich":** Auch die indische Logik (Nyaya) und Nagarjuna benutzen den Satz vom Widerspruch; wer ihn bestreitet, benutzt ihn dabei.`,
  ],
  argument: {
    name: 'Das Argument aus dem Satz vom Widerspruch',
    summary: 'Weil die Religionen sich in zentralen Aussagen widersprechen, können sie nicht alle gleich wahr sein.',
    premises: [
      {
        text: 'P1: Die großen Religionen machen inhaltliche, einander widersprechende Aussagen über die Wirklichkeit.',
        support: 'Beispiele: Es gibt einen persönlichen Schöpfer (Judentum, Christentum, Islam, Sikhismus) – es gibt keinen Schöpfer (früher Buddhismus); das Selbst ist Brahman (Advaita) – es gibt kein Selbst (Anatta) – der Mensch ist ein geschaffenes Selbst (Bibel); Jesus wurde gekreuzigt und starb (Neues Testament, nahezu alle Historiker) – er wurde nicht gekreuzigt (Koran 4,157); ein Leben, dann das Gericht (Hebr 9,27) – viele Wiedergeburten (Hinduismus, Buddhismus).',
        sources: [
          { kind: 'koran', work: 'Sure 4 (an-Nisa)', ref: '4:157', original: 'wa-mā qatalūhu wa-mā ṣalabūhu wa-lākin shubbiha lahum', quote: `Sie haben ihn aber nicht getötet und haben ihn auch nicht gekreuzigt, sondern es erschien ihnen (ein anderer) ähnlich.`, translation: 'sinngemäß nach Bubenheim/Elyas', status: 'paraphrase', url: 'https://quran.com/4/157' },
          { kind: 'bibel', work: '1. Korinther', ref: '15,3', quote: `…daß Christus gestorben sei für unsre Sünden nach der Schrift …`, translation: 'Luther 1912', status: 'verbatim' },
        ],
      },
      {
        text: 'P2: Von zwei einander widersprechenden Aussagen kann höchstens eine wahr sein (Satz vom Widerspruch).',
        support: 'Grundgesetz allen Denkens; auch die klassische indische Logik (Nyaya) setzt es voraus, und wer es bestreitet, setzt es in seinem Bestreiten voraus.',
      },
      {
        text: 'P3: Eine Religion, deren zentrale Aussagen falsch sind, ist nicht in dem Sinn „wahr", den ihre Anhänger meinen.',
        support: 'Ein Christ meint mit „das Christentum ist wahr" nicht, dass es nützlich oder schön ist, sondern dass Christus wirklich auferstanden ist (1 Kor 15,14–17). Ein Muslim meint, dass der Koran Gottes Wort ist.',
      },
    ],
    inferences: [
      'Also können nicht alle zentralen Aussagen aller Religionen wahr sein.',
      'Also können nicht alle Religionen in dem Sinn, den ihre Anhänger meinen, gleich wahr sein.',
    ],
    conclusion: 'Nicht alle Religionen sind gleich wahr. Das schließt nicht aus, dass sie viel Wahres, Gutes und Schönes enthalten – wohl aber, dass die Frage nach der Wahrheit gleichgültig wäre. Die ehrliche Aufgabe ist, die Ansprüche zu prüfen – allen voran die Auferstehung Jesu.',
  },
  voices: [
    {
      person: 'lesslie-newbigin',
      role: 'als Missionsbischof, der Jahrzehnte im religiös pluralen Indien lebte',
      text: `Lesslie Newbigin hörte das Elefantengleichnis in Indien unzählige Male. Er wies darauf hin, dass der eigentliche Punkt der Geschichte ständig übersehen wird: Sie wird aus der Sicht des Königs erzählt, der nicht blind ist und sieht, dass die Blinden den Elefanten nicht erfassen. Wer das Gleichnis gebraucht, um alle Wahrheitsansprüche zu relativieren, beansprucht selbst die Position des Sehenden – und erhebt damit den arrogantesten Anspruch von allen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Lesslie Newbigin', work: 'The Gospel in a Pluralist Society', year: '1989', ref: 'Kap. 1', status: 'paraphrase', quote: `Die Geschichte wird aus der Sicht des Königs erzählt, der nicht blind ist; wer sie benutzt, um die Wahrheitsansprüche der Religionen zu neutralisieren, beansprucht selbst diese überlegene Sicht.` },
      ],
    },
    {
      person: 'netland',
      role: 'als Religionsphilosoph und Hick-Kritiker',
      text: `Harold Netland zeigt, dass Hicks Pluralismus die Religionen nicht so nimmt, wie sie sich selbst verstehen, sondern sie nach einem modernen westlichen Modell umdeutet. Die Menschwerdung wird zur Metapher, die Einmaligkeit des Korans zur kulturellen Ausdrucksform, Nirvana und Trinität zu gleichwertigen „Erscheinungen". Am Ende steht eine neue, eigene Religionsphilosophie – die mit keiner der großen Religionen übereinstimmt und ihnen allen in zentralen Punkten widerspricht.`,
      sources: [
        { kind: 'fachliteratur', author: 'Harold A. Netland', work: 'Encountering Religious Pluralism: The Challenge to Christian Faith and Mission', year: '2001', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Harold A. Netland', work: 'Dissonant Voices: Religious Pluralism and the Question of Truth', year: '1991', status: 'paraphrase' },
      ],
    },
    {
      person: 'plantinga',
      role: 'als Erkenntnistheoretiker',
      text: `Alvin Plantinga hat den Vorwurf geprüft, es sei intellektuell oder moralisch unredlich, an der Wahrheit der eigenen Religion festzuhalten, wenn man um andere Religionen weiß. Sein Ergebnis: Wer überlegt, dass andere anders glauben, und dennoch nach sorgfältiger Prüfung bei seiner Überzeugung bleibt, handelt nicht willkürlich. Und der Pluralist tut genau dasselbe: Auch er hält seine Sicht für wahr und die widersprechenden Sichten der Exklusivisten für falsch. Eine Form von „Exklusivismus" ist unvermeidlich.`,
      sources: [
        { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'Pluralism: A Defense of Religious Exclusivism, in: T. D. Senor (Hg.), The Rationality of Belief and the Plurality of Faith', year: '1995', status: 'paraphrase' },
      ],
    },
    {
      person: 'tim-keller',
      role: 'als Pastor in New York',
      text: `Timothy Keller begegnete dem Elefantengleichnis ständig im pluralistischen Manhattan. Er antwortet: Man könnte nur wissen, dass jede Religion bloß einen Teil der Wahrheit sieht, wenn man selbst die überlegene, umfassende Sicht hätte, die man allen Religionen abspricht. Der Satz „Alle Religionen sind gleich gültig" ist selbst eine religiöse Überzeugung über die Natur Gottes – und wird mit derselben Gewissheit vertreten, die man den Religionen vorwirft.`,
      sources: [
        { kind: 'fachliteratur', author: 'Timothy Keller', work: 'The Reason for God (dt. Warum Gott?)', year: '2008', ref: 'Kap. 1', status: 'paraphrase' },
      ],
    },
    {
      person: 'origenes',
      role: 'als Apologet gegen den antiken Pluralisten Kelsos',
      text: `Origenes musste sich mit Kelsos auseinandersetzen, der wie ein moderner Pluralist argumentierte: Die Götternamen der Völker meinten alle denselben Höchsten. Origenes antwortet, dass Namen und Gottesbilder nicht beliebig sind, und er zeigt am Leben, Sterben und Auferstehen Jesu sowie an der Verwandlung seiner Jünger, dass das Christentum auf bestimmten Ereignissen beruht. Er tut das ohne Hass – und doch ohne die Wahrheitsfrage preiszugeben.`,
      sources: [
        { kind: 'kirchenvater', author: 'Origenes', work: 'Contra Celsum', ref: 'I,24–25; II,56–67; V,41–46', status: 'paraphrase' },
      ],
    },
    {
      person: 'cs-lewis',
      role: 'als Apologet, der Wahrheit und Weite verband',
      text: `C. S. Lewis betonte, dass ein Christ nicht glauben muss, alle anderen Religionen seien durch und durch falsch – anders als der Atheist, der den Kern aller Religionen für einen einzigen großen Irrtum halten muss. Aber Christsein heißt auch: Wo das Christentum anderen Religionen widerspricht, hat es recht. Wie beim Rechnen gibt es nur eine richtige Lösung – doch manche falschen Antworten liegen der richtigen viel näher als andere.`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Mere Christianity', ref: 'Buch II, Kap. 1', year: '1952', original: 'If you are a Christian you do not have to believe that all the other religions are simply wrong all through.', quote: `Wenn du Christ bist, musst du nicht glauben, dass alle anderen Religionen durch und durch falsch sind.`, status: 'verbatim', translation: 'eigene Übersetzung' },
      ],
    },
  ],
  dialog: [
    {
      id: 'praxis-statt-lehre',
      objection: `Religionen sind keine Theorien, sondern Wege der Praxis – Mitgefühl, Rituale, Gemeinschaft. Es geht nicht darum, Lehrsätze für wahr zu halten.`,
      objectionBy: 'Karen Armstrong',
      targetsPremise: 1,
      answer: `Praxis ist wichtig – aber jede Religion sagt auch, **warum** sie so lebt. Christen lieben, weil Gott Liebe ist und sich in Christus geoffenbart hat, der gekreuzigt und auferstanden ist. Buddhisten üben Achtsamkeit, weil sie das Nicht-Selbst und das Leid durchschauen wollen. Nimm die Begründungen weg, und du hast nicht mehr diese Religionen. Christen und Muslime sind für Wahrheitsansprüche gestorben, nicht für bloße Rituale.`,
      followUps: [
        {
          id: 'lehren-sind-mythos',
          objection: `Die Lehren sind Mythos im tiefen Sinn – symbolische Wahrheit, keine historischen Fakten. Das ist der Unterschied zwischen *mythos* und *logos*.`,
          objectionBy: 'Karen Armstrong',
          targetsPremise: 3,
          answer: `Für manche Texte ist eine symbolische Lesart berechtigt. Aber das Christentum gründet sich ausdrücklich auf ein geschichtliches Ereignis: „Ist aber Christus nicht auferstanden, so ist euer Glaube vergeblich" (1 Kor 15,17). Lukas will genau „erkunden", was geschehen ist (Lk 1,1–4). Das Christentum „Mythos" zu nennen, ist darum nicht neutral, sondern die Behauptung, sein Kern sei als Tatsache falsch.`,
          followUps: [
            {
              id: 'botschaft-bleibt-wertvoll',
              objection: `Na und? Auch ohne wörtliche Auferstehung bleibt die Botschaft der Liebe wertvoll.`,
              objectionBy: 'Karen Armstrong (sinngemäß)',
              answer: `Dann hältst du aber nicht das Christentum für gleich wahr, sondern deine eigene Umdeutung. Das ist ein verdeckter Exklusivismus (so der Theologe Gavin D'Costa). Ehrlicher Pluralismus müsste sagen: „Ich halte den christlichen Anspruch für falsch, schätze aber seine Ethik." Darüber können wir offen sprechen – und dann reden wir über die Gründe für und gegen die Auferstehung.`,
              questionsBack: [`Würdest du einem Christen sagen, dass du seinen Glauben für gleich wahr hältst, wenn du glaubst, dass Jesus nicht auferstanden ist?`],
            },
          ],
        },
      ],
    },
    {
      id: 'hick-reales-an-sich',
      objection: `Alle Religionen sind Antworten auf das eine Reale an sich, das jenseits aller Begriffe liegt. Persönliche Götter und unpersönliche Absoluta sind seine kulturellen Erscheinungsformen.`,
      objectionBy: 'John Hick',
      targetsPremise: 1,
      answer: `Wenn das Reale keine erkennbaren Eigenschaften hat – weder persönlich noch unpersönlich, weder gut noch eins –, dann kann man darüber überhaupt nichts sagen: auch nicht, dass die Religionen darauf antworten oder dass es sich lohnt, sich darauf auszurichten. Entweder ist das „Reale" leer, oder es wird stillschweigend doch mit Eigenschaften gefüllt – etwa mit Güte und Heilskraft.`,
      followUps: [
        {
          id: 'kant-ding-an-sich',
          objection: `Das ist wie bei Kant: Wir erkennen nur die Erscheinungen, nicht das Ding an sich. Genau so verhalten sich die Religionen zum Realen.`,
          objectionBy: 'John Hick',
          answer: `Kants „Ding an sich" war gerade unerkennbar; Kant hätte nicht sagen können, welche Erscheinungen „echte" Antworten darauf sind. Hick übernimmt Kants Unterscheidung, behauptet dann aber zu wissen, dass alle großen Religionen auf dasselbe Reale antworten und dass dies heilsam ist – das ist mehr, als Kant erlaubt. Und wenn alle religiösen Vorstellungen nur Erscheinungen sind, dann ist auch Hicks eigene Theorie nur eine weitere kulturelle Erscheinung.`,
          followUps: [
            {
              id: 'kriterium-verwandlung',
              objection: `Das Kriterium ist die Verwandlung vom Ichzentriertsein zum Realitätszentriertsein. Daran sieht man, dass alle großen Religionen echt sind.`,
              objectionBy: 'John Hick',
              answer: `Dieses Kriterium ist selbst ein bestimmtes ethisches Ideal, stark geprägt vom liberalen Christentum und der Aufklärung. Warum sollte Verwandlung der Maßstab sein und nicht Wahrheit? Und ob die Früchte wirklich gleich sind, lässt sich kaum messen – Hick räumte das selbst ein. Dass es in allen Traditionen Gutes und Böses gibt, zeigt höchstens, dass Menschen überall ähnlich sind – nicht, dass alle auf dasselbe Reale antworten.`,
              followUps: [
                {
                  id: 'heilige-ueberall',
                  objection: `Aber die Heiligen aller Religionen sind doch erkennbar gut – Gandhi, der Dalai Lama, Rumi. Wie kannst du da noch von „wahr" und „falsch" sprechen?`,
                  objectionBy: 'John Hick (sinngemäß)',
                  answer: `Gerne erkenne ich ihre Güte an – Christen sehen darin das Gewissen und Gottes allgemeine Güte am Werk (Röm 2,14–15; Justin). Aber die Güte von Menschen entscheidet nicht über die Wahrheit von Lehren: Ein guter Buddhist und ein guter Muslim können nicht beide recht haben in der Frage, ob es einen Schöpfer gibt. Heilige zu bewundern, beantwortet nicht, was wahr ist.`,
                },
              ],
            },
          ],
        },
        {
          id: 'jesus-als-metapher',
          objection: `Man kann Jesus doch als Metapher für Gottes Nähe verstehen – die Menschwerdung als poetische Wahrheit, nicht als Tatsache.`,
          objectionBy: 'John Hick (The Metaphor of God Incarnate)',
          targetsPremise: 3,
          answer: `Dann bestreitet man die Menschwerdung als wirkliches Geschehen – also das Zentrum des christlichen Glaubens (Joh 1,14; das Bekenntnis von Nizäa). Hick sagt damit nicht, das Christentum sei wahr, sondern es sei falsch, aber nützlich. Dasselbe tut er mit dem Koran und dem Buddhismus. Das ist kein Pluralismus, sondern Hicks eigene Religion – gegen alle anderen.`,
        },
      ],
    },
    {
      id: 'elefant-und-blinde',
      objection: `Die Religionen sind wie Blinde, die einen Elefanten betasten: Einer fühlt den Rüssel und sagt „Schlange", einer das Bein und sagt „Baum". Jeder hält seinen Teil für das Ganze.`,
      objectionBy: 'Huston Smith / John Hick (populäre Fassung)',
      answer: `Wer erzählt die Geschichte? Jemand, der den ganzen Elefanten sieht und weiß, dass die Blinden irren. Der Pluralist beansprucht also genau den überlegenen Überblick, den er allen Religionen abspricht. In der ältesten Fassung (Udana 6,4) erzählt übrigens der Buddha das Gleichnis, um streitende Lehrer anderer Schulen als Blinde zu kennzeichnen – es ist ursprünglich ein exklusives Gleichnis.`,
      followUps: [
        {
          id: 'nur-bescheiden',
          objection: `Ich beanspruche keinen Überblick. Ich bin nur bescheiden und sage: Niemand hat die ganze Wahrheit.`,
          objectionBy: 'Karen Armstrong (sinngemäß)',
          answer: `Dann kannst du aber auch nicht wissen, dass alle denselben Elefanten betasten – vielleicht berührt einer einen Elefanten, ein anderer einen Baum, ein dritter eine Schlange. „Niemand hat die ganze Wahrheit" ist selbst eine Aussage über die ganze Wahrheit. Bescheidenheit teile ich: Christen erkennen „stückweise" (1 Kor 13,12). Aber wir glauben, dass Gott sich wirklich gezeigt hat – nicht vollständig, aber wahr.`,
          followUps: [
            {
              id: 'jede-hat-teil',
              objection: `Dann hat eben jede Religion einen Teil der Wahrheit.`,
              objectionBy: 'Huston Smith (sinngemäß)',
              answer: `Dass Religionen Teilwahrheiten enthalten, sagen Christen seit Justin („Samen des Logos"). Aber Aussagen, die sich widersprechen, können nicht Teile desselben Ganzen sein. „Es gibt einen persönlichen Schöpfer" und „es gibt keinen Schöpfer", „Jesus starb am Kreuz" und „Jesus starb nicht am Kreuz" ergänzen sich nicht wie Rüssel und Bein – sie schließen sich aus. Das Gleichnis funktioniert für ergänzende, nicht für widersprüchliche Beschreibungen.`,
              followUps: [
                {
                  id: 'hoehere-ebene-eins',
                  objection: `Vielleicht widersprechen sich die Aussagen nur scheinbar. Auf einer höheren Ebene sind sie eins.`,
                  objectionBy: 'Paul F. Knitter (sinngemäß)',
                  answer: `Dann lass es uns an einem konkreten Fall prüfen: Wurde Jesus gekreuzigt und starb er – wie das Neue Testament und praktisch alle Historiker sagen –, oder wurde er nicht gekreuzigt, wie der Koran sagt? Es gibt keine „höhere Ebene", auf der ein geschichtlicher Mensch an einem bestimmten Freitag zugleich gestorben und nicht gestorben ist. Wenn die höhere Ebene auch das auflöst, verlieren Worte jede Bedeutung.`,
                  questionsBack: [`Ist Jesus am Kreuz gestorben – ja oder nein? Gibt es eine Ebene, auf der beide Antworten stimmen?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'logik-westlich',
      objection: `Der Satz vom Widerspruch ist westliches, aristotelisches Denken. Östliche Traditionen kennen das Sowohl-als-auch – Yin und Yang, Nagarjunas Tetralemma.`,
      objectionBy: 'Paul F. Knitter (sinngemäß)',
      targetsPremise: 2,
      answer: `Die klassische indische Logik (Nyaya) benutzt den Satz vom Widerspruch ganz selbstverständlich; Nagarjuna verwendet ihn sogar, um alle vier Positionen seines Tetralemmas zu verwerfen. Yin und Yang sind ergänzende Kräfte, keine logischen Widersprüche. Und dein Einwand benutzt selbst Logik: Du sagst, das östliche Denken habe recht und das westliche unrecht – das ist ein Entweder-oder.`,
      followUps: [
        {
          id: 'wahrheit-relativ',
          objection: `Wahrheit ist eben relativ. Was für dich wahr ist, muss für mich nicht wahr sein.`,
          objectionBy: 'Karen Armstrong (sinngemäß)',
          targetsPremise: 2,
          answer: `Dann ist auch der Pluralismus nur „für dich wahr", und du kannst mir meinen Exklusivismus nicht vorwerfen. Der Satz „Alle Wahrheit ist relativ" wird als absolut wahr vorgetragen – er widerlegt sich selbst. Manches ist tatsächlich relativ (ob Koriander schmeckt), anderes nicht (ob Jesus gestorben ist). Religiöse Kernaussagen gehören zur zweiten Art.`,
        },
      ],
    },
    {
      id: 'mystiker-dasselbe',
      objection: `Die Mystiker aller Religionen – Meister Eckhart, Rumi, Shankara – erfahren im Kern dasselbe. Das beweist die eine Wahrheit hinter allen Religionen.`,
      objectionBy: 'Huston Smith (Perennialismus)',
      answer: `Die Mystikforschung zeigt eher verschiedene Typen: die liebende Vereinigung mit einem persönlichen Gott (christliche und Sufi-Mystik), die Identität mit dem Absoluten (Advaita) und die Erfahrung der Leerheit (Buddhismus). R. C. Zaehner unterschied solche Typen; Steven Katz zeigte, dass Erfahrungen von der jeweiligen Tradition geprägt werden. Und selbst ähnliche Erfahrungen werden völlig verschieden gedeutet – die Erfahrung allein entscheidet die Wahrheitsfrage nicht.`,
      sources: [
        { kind: 'fachliteratur', author: 'R. C. Zaehner', work: 'Mysticism Sacred and Profane', year: '1957', status: 'paraphrase', quote: `Unterscheidung von Natur-, monistischer und theistischer Mystik.` },
        { kind: 'fachliteratur', author: 'Steven T. Katz (Hg.)', work: 'Mysticism and Philosophical Analysis', year: '1978', status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'zaehner-katholisch',
          objection: `Zaehner war Katholik und voreingenommen.`,
          objectionBy: 'Huston Smith (sinngemäß)',
          answer: `Mag sein – aber auch Forscher ohne christliches Interesse wie der jüdische Philosoph Steven Katz betonen die Unterschiede. Und der Perennialismus von Aldous Huxley, Frithjof Schuon oder Huston Smith beruht selbst auf einer bestimmten Metaphysik, der „immerwährenden Philosophie". Einen neutralen Standpunkt hat niemand. Ehrlich ist es, die Ansprüche und ihre Gründe zu vergleichen.`,
        },
      ],
    },
    {
      id: 'exklusivismus-gewalt',
      objection: `Exklusive Wahrheitsansprüche führen zu Intoleranz und Gewalt. Der Pluralismus ist die einzige Grundlage für Frieden.`,
      objectionBy: 'Karen Armstrong',
      answer: `Wahrheitsanspruch und Toleranz sind keine Gegensätze – Toleranz setzt voraus, dass man verschiedener Meinung ist. Die ersten Christen waren nicht Täter, sondern Opfer: Sie wurden hingerichtet, weil sie sich weigerten, Christus als einen Gott unter vielen zu behandeln und dem Kaiserbild Weihrauch zu opfern (Plinius, Brief 10,96). Christus gebietet Feindesliebe; wer im Namen Christi Gewalt übt, verrät ihn.`,
      followUps: [
        {
          id: 'gott-offen-fuer-alle',
          objection: `Dann gib wenigstens zu, dass Gott für alle Religionen offen ist.`,
          objectionBy: 'Paul F. Knitter (sinngemäß)',
          answer: `Gott ist offen für alle **Menschen** – er „will, dass allen Menschen geholfen werde" (1 Tim 2,4), und „in allerlei Volk, wer ihn fürchtet und recht tut, der ist ihm angenehm" (Apg 10,35). Das ist etwas anderes als die Behauptung, alle Religionen seien gleich wahr. Wie Gott Menschen richtet, die Christus nie wirklich kennengelernt haben, ist eine eigene Frage (siehe „Was ist mit denen, die nie von Jesus gehört haben?").`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Ist Jesus am Kreuz gestorben – ja oder nein? Kann beides wahr sein?`,
    `Woher weißt du, dass alle Blinden denselben Elefanten betasten – siehst du ihn?`,
    `Wenn das Reale keine erkennbaren Eigenschaften hat – wie kannst du wissen, dass es gut ist oder dass Religionen darauf antworten?`,
    `Hältst du den Pluralismus für wahr und den Exklusivismus für falsch? Ist das nicht auch ein exklusiver Anspruch?`,
    `Würde ein Muslim zustimmen, dass der Koran nur eine kulturelle Erscheinungsform des Realen ist?`,
  ],
  avoid: [
    `Sage nicht „Alle anderen Religionen sind vom Teufel" – Lewis und die Väter (Justin, Clemens) zeigen einen besseren, ehrlicheren Weg.`,
    `Reagiere nicht gereizt auf das Elefantengleichnis; frag freundlich, wer den Elefanten sieht.`,
    `Verwechsle nicht die Frage „Ist jede Religion wahr?" mit der Frage „Wird jeder Nichtchrist verdammt?" – das sind zwei verschiedene Fragen.`,
    `Behaupte nicht, Pluralisten seien dumm – Hick war ein scharfsinniger Philosoph. Zeig die innere Spannung seiner Position.`,
  ],
  concessions: [
    `Alle großen Religionen enthalten viel Wahres, Gutes und Schönes; Christen können von Buddhisten, Hindus, Muslimen und Juden lernen.`,
    `Exklusive Wahrheitsansprüche wurden in der Geschichte – auch von Christen – mit Gewalt durchgesetzt. Das war Verrat an Christus.`,
    `Niemand, auch kein Christ, erkennt Gott vollständig; wir erkennen „stückweise" (1 Kor 13,12).`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Harold A. Netland', work: 'Encountering Religious Pluralism', year: '2001', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Lesslie Newbigin', work: 'The Gospel in a Pluralist Society', year: '1989', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Timothy Keller', work: 'Warum Gott? (The Reason for God), Kap. 1', year: '2008', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Gavin D\'Costa', work: 'The Impossibility of a Pluralist View of Religions (Religious Studies 32)', year: '1996', status: 'paraphrase' },
    { kind: 'gegner', author: 'John Hick', work: 'An Interpretation of Religion', year: '1989', status: 'paraphrase', note: 'Zum fairen Verständnis der stärksten pluralistischen Position.' },
  ],
  difficulty: 3,
  tags: ['Pluralismus', 'John Hick', 'Elefantengleichnis', 'Satz vom Widerspruch', 'Exklusivismus', 'Wahrheit'],
  related: [
    'pluralismus/arrogant-nur-jesus',
    'pluralismus/nie-von-jesus-gehoert',
    'hinduismus/alle-wege-zum-gipfel',
    'islam-kreuzigung/nicht-gekreuzigt-4-157',
    'erkenntnistheorie/keine-absolute-wahrheit',
    'weitere-religionen/bahai-progressive-offenbarung',
  ],
};

export default claim;
