import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'ahmadiyya-jesus-kaschmir',
  title: `„Jesus überlebte das Kreuz und starb in Kaschmir (Ahmadiyya)."`,
  proponents: [
    { name: 'Mirza Ghulam Ahmad', role: 'Gründer der Ahmadiyya (1835–1908), beanspruchte, der „Verheißene Messias" und Mahdi zu sein', work: 'Masih Hindustan Mein (Jesus in Indien), verfasst 1899, vollständig veröffentlicht 1908' },
    { name: 'Mirza Tahir Ahmad', role: 'Vierter Kalif der Ahmadiyya Muslim Jamaat (1928–2003)', work: 'Christianity: A Journey from Facts to Fiction (1994)' },
    { name: 'Ahmed Deedat', role: 'Südafrikanischer muslimischer Debattierer (1918–2005); übernahm die Scheintod-These', work: 'Crucifixion or Cruci-Fiction? (1984)' },
    { name: 'Holger Kersten', role: 'Deutscher Sachbuchautor (nicht Ahmadi), popularisierte die Kaschmir-These im Westen', work: 'Jesus lebte in Indien (1983)' },
  ],
  steelman: `Die Ahmadiyya nimmt sowohl den Koran als auch die Evangelien ernster als alle anderen: Der Koran sagt, „sie haben ihn weder getötet noch gekreuzigt" (4:157) – also nicht durch Kreuzigung getötet; „es erschien ihnen nur so" (shubbiha lahum) – er schien tot. Die Ersatztheorie, nach der Gott einen Unschuldigen an Jesu Stelle sterben ließ, ist eine Ungerechtigkeit und unnötig. Die Evangelien selbst liefern die Indizien: Jesus hing nur wenige Stunden am Kreuz, Pilatus wunderte sich, dass er schon tot sein sollte (Mk 15,44), seine Beine wurden nicht gebrochen (Joh 19,33), aus der Wunde floss Blut – ein Zeichen für Kreislauf. Zwei heimliche Jünger brachten hundert Pfund Myrrhe und Aloe – Heilmittel. Jesus selbst kündigte das „Zeichen des Jona" an: Jona war im Fisch lebendig, also auch Jesus im Grab. Danach zeigte er seine Wunden, aß Fisch und sagte: „Ein Geist hat nicht Fleisch und Bein" – er war kein Auferstandener, sondern ein Überlebender. Er ging dann zu den „anderen Schafen" (Joh 10,16), den verlorenen Stämmen Israels im Osten; Gott gab ihm und seiner Mutter Zuflucht „auf einer Anhöhe mit Wiesen und Quellen" (23:50) – Kaschmir. Dort ist er im Schrein Roza Bal in Srinagar als „Yuz Asaf" begraben. So fällt die christliche Lehre von Sühnetod und Auferstehung – und zugleich die sunnitische Vorstellung, Jesus lebe leiblich im Himmel.`,
  biblical: {
    summary: `Alle vier Evangelien berichten übereinstimmend den **Tod** Jesu am Kreuz, sein Begräbnis und seine **leibliche Auferstehung** zu einem neuen, unvergänglichen Leben – nicht ein Überleben. Der älteste Text ist das Glaubensbekenntnis in 1 Kor 15,3–8, das Paulus empfangen hat und das in die ersten Jahre nach dem Kreuz zurückreicht: „Christus ist gestorben … begraben … auferweckt … gesehen worden." Die Einzelheiten, auf die sich die Ahmadiyya stützt, zeigen im Zusammenhang das Gegenteil: Pilatus wundert sich und **lässt den Tod amtlich bestätigen** (Mk 15,44–45); der Lanzenstich soll den Tod sichern (Joh 19,33–35); Myrrhe und Aloe sind Begräbnisgewürze, „wie die Juden zu begraben pflegen" (Joh 19,40).`,
    detail: `**1. Der Auferstandene ist kein Genesender.** Er tritt durch verschlossene Türen (Joh 20,19.26), wird nicht erkannt und verschwindet (Lk 24,16.31), wird vor ihren Augen emporgehoben (Lk 24,51; Apg 1,9). Dass er Fisch isst und sich berühren lässt (Lk 24,39–43), zeigt: Die Auferstehung ist **leiblich**, kein Gespenst – nicht, dass er ein Verwundeter in Pflege war.

**2. „Rühre mich nicht an" (Joh 20,17)** begründet Jesus selbst: „denn ich bin noch nicht aufgefahren zu meinem Vater". Acht Tage später lädt er Thomas ein, die Wunden zu berühren (20,27).

**3. Das Zeichen des Jona** vergleicht die Dauer („drei Tage und drei Nächte", Mt 12,40) und das Herauskommen. Jona selbst beschreibt seine Lage als Hinabsteigen ins Totenreich: „Ich schrie aus dem Bauch der Hölle" (Jona 2,3).

**4. „Andere Schafe" (Joh 10,16)** erklärt das Evangelium selbst: Jesus sollte sterben „nicht für das Volk allein, sondern dass er auch die Kinder Gottes, die zerstreut waren, zusammenbrächte" (Joh 11,52) – die Heiden. Deshalb sendet er seine Jünger „zu allen Völkern" (Mt 28,19).

**5. Hebr 5,7:** Jesus wurde „erhört" von dem, „der ihn vom Tode konnte aushelfen" – griechisch *ek thanatou*, „aus dem Tod heraus": durch Auferstehung, nicht durch Bewahrung vor dem Tod.`,
    sources: [
      { kind: 'bibel', work: 'Markus', ref: '15,44–45', quote: `Pilatus aber verwunderte sich, daß er schon tot war, und rief den Hauptmann und fragte ihn, ob er längst gestorben wäre. Und als er's erkundet von dem Hauptmann, gab er Joseph den Leichnam.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '19,33–35', quote: `Als sie aber zu Jesus kamen, da sie sahen, daß er schon gestorben war, brachen sie ihm die Beine nicht; sondern der Kriegsknechte einer öffnete seine Seite mit einem Speer, und alsbald ging Blut und Wasser heraus. Und der das gesehen hat, der hat es bezeugt, und sein Zeugnis ist wahr.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '19,39–40', quote: `Es kam aber auch Nikodemus … und brachte Myrrhe und Aloe untereinander, bei hundert Pfunden. Da nahmen sie den Leichnam Jesu und banden ihn in leinene Tücher mit den Spezereien, wie die Juden pflegen zu begraben.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '15,3–5', quote: `Denn ich habe euch zuvörderst gegeben, was ich empfangen habe: daß Christus gestorben sei für unsre Sünden nach der Schrift, und daß er begraben sei, und daß er auferstanden sei am dritten Tage nach der Schrift, und daß er gesehen worden ist von Kephas, darnach von den Zwölfen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jona', ref: '2,3', quote: `Ich rief zu dem HERRN in meiner Angst, und er antwortete mir; ich schrie aus dem Bauch der Hölle, und du hörtest meine Stimme.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Kirche bekennt mit dem Nizänum: Christus „wurde für uns gekreuzigt unter Pontius Pilatus, hat gelitten und ist begraben worden und ist am dritten Tage auferstanden nach der Schrift". Für die koptische Kirche ist der wirkliche Tod Christi kein Randdetail, sondern das Zentrum des Heils: Der Logos hat in seinem eigenen Fleisch den Tod geschmeckt, um den Tod von innen zu besiegen („Er hat den Tod durch seinen Tod zertreten" – Osterbotschaft der Kirche).`,
    detail: `Athanasius argumentiert in *De Incarnatione* 23, dass Christus gerade deshalb **öffentlich**, vor aller Augen, und nicht im Verborgenen starb, damit niemand seine Auferstehung als Fabel abtun könne: Wäre sein Tod nicht offenkundig gewesen, wäre auch seine Auferstehung verdächtig. Eine Theorie des Scheintods widerspricht also nicht nur einem Detail der Evangelien, sondern dem Kern des Glaubens: Ohne Tod keine Auferstehung, ohne Auferstehung kein Sieg über den Tod (1 Kor 15,14.17).`,
    sources: [
      { kind: 'konzil', work: 'Glaubensbekenntnis von Nizäa-Konstantinopel', year: '325/381', quote: `… der für uns gekreuzigt wurde unter Pontius Pilatus, gelitten hat und begraben wurde und am dritten Tage auferstanden ist nach der Schrift.`, status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '23', year: 'ca. 318', quote: `Wäre sein Tod im Verborgenen geschehen, hätte man seine Auferstehung für Gerede halten können; darum starb er öffentlich, damit auch seine Auferstehung beglaubigt sei.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die Ahmadiyya entstand 1889 in Qadian (Punjab). Mirza Ghulam Ahmad erklärte sich 1891 zum „Verheißenen Messias", der im Geist und in der Kraft Jesu gekommen sei – dafür musste Jesus tot sein. 1914 spaltete sich die Bewegung in die Ahmadiyya Muslim Jamaat (Qadian/Rabwah, heute London) und die Lahore-Ahmadiyya. Sunnitische und schiitische Gelehrte lehnen die Ahmadiyya fast einhellig ab, vor allem wegen Ghulam Ahmads Prophetenanspruch, der nach ihrer Lesart Sure 33:40 („Siegel der Propheten") widerspricht, und wegen der Leugnung der Himmelfahrt Jesu. 1974 erklärte Pakistan die Ahmadis per Verfassungsänderung zu Nicht-Muslimen; seit 1984 sind ihnen dort islamische Ausdrucksformen gesetzlich verboten. Sie erleiden bis heute schwere Verfolgung.`,
    detail: `**Forschungsstand zur Kaschmir-These:** Der Indologe Günter Grönbold (*Jesus in Indien. Das Ende einer Legende*, 1985), Per Beskow (*Strange Tales about Jesus*, 1983) und Norbert Klatt (*Lebte Jesus in Indien?*, 1988) haben gezeigt, dass der Name „Yuz Asaf" auf „Budhasaf" (Bodhisattva) aus der Barlaam-und-Josaphat-Legende zurückgeht – einer christianisierten Fassung der Buddha-Legende, die über arabische Fassungen nach Kaschmir gelangte. Die Identifizierung mit Jesus stammt von Ghulam Ahmad selbst. Unter Historikern – auch säkularen – ist der Kreuzestod Jesu einer der sichersten Fakten der Antike; der Neutestamentler Gerd Lüdemann, ein Atheist, nannte ihn „unbestreitbar".`,
    sources: [
      { kind: 'gegner', author: 'Mirza Ghulam Ahmad', work: 'Masih Hindustan Mein (engl. Jesus in India)', year: 'verfasst 1899, veröffentlicht 1908', status: 'paraphrase', quote: `Jesus sei vom Kreuz lebend abgenommen, mit einer Salbe (marham-i-Isa) geheilt worden, nach Osten gewandert und in Srinagar begraben.` },
      { kind: 'fachliteratur', author: 'Günter Grönbold', work: 'Jesus in Indien. Das Ende einer Legende', year: '1985', status: 'paraphrase', note: 'Yuz Asaf = Budhasaf/Bodhisattva aus der Barlaam-und-Josaphat-Tradition; Roza Bal ohne Bezug zu Jesus.' },
      { kind: 'gegner', author: 'Gerd Lüdemann', work: 'Die Auferstehung Jesu. Historie, Erfahrung, Theologie', year: '1994', quote: `Der Tod Jesu als Folge der Kreuzigung ist unbestreitbar.`, status: 'paraphrase', note: 'Lüdemann bestritt die Auferstehung, nicht den Tod.' },
    ],
  },
  quickAnswer: `Die Ahmadiyya gibt zu, was auch Historiker sagen: Jesus wurde wirklich gekreuzigt. Aber er starb auch wirklich – Pilatus ließ den Tod vom Hauptmann bestätigen (Mk 15,44–45), ein Soldat stach die Lanze in seine Seite, und Myrrhe und Aloe waren Begräbnisgewürze (Joh 19,40). Ein halbtoter, gepflegter Jesus hätte niemals den Glauben ausgelöst, er habe den Tod besiegt. Und „Yuz Asaf" in Srinagar ist nach der Forschung der Bodhisattva aus der Buddha-Legende – nicht Jesus.`,
  keyPoints: [
    `**Kreuzigung zugegeben:** Die Ahmadiyya bestätigt gegen die sunnitische Ersatztheorie, dass Jesus ans Kreuz kam – damit bleibt nur die Frage, ob er starb.`,
    `**Der Tod wurde geprüft:** Pilatus fragte den Hauptmann (Mk 15,44–45); römische Henker wussten, wann ein Mensch tot war; der Lanzenstich sicherte den Tod.`,
    `**Ein Überlebender ist kein Auferstandener:** Ein geschundener Mensch in Pflege konnte nicht als Sieger über den Tod verkündet werden (David F. Strauß, 1864).`,
    `**Die Texte im Zusammenhang:** Jona, „Rühre mich nicht an", „andere Schafe", Hebr 5,7 – jede Stelle wird im biblischen Kontext selbst anders erklärt.`,
    `**Roza Bal:** „Yuz Asaf" geht auf „Budhasaf" (Bodhisattva) zurück; die Jesus-Deutung entstand erst im 19. Jahrhundert (Grönbold, Klatt, Beskow).`,
    `**Doppelter Widerspruch:** Die These widerspricht dem Neuen Testament **und** der Mehrheitslesart des Korans (4:157–158) – sie dient vor allem Ghulam Ahmads Messiasanspruch.`,
  ],
  voices: [
    {
      person: 'qureshi',
      role: 'als ehemaliger Ahmadi',
      text: `Qureshi wuchs in einer frommen Ahmadi-Familie auf und lernte die Scheintod-These als Kind. Er beschreibt, wie er sie als Student mit den historischen Quellen prüfte – und zu dem Ergebnis kam, dass der Kreuzestod Jesu historisch so sicher ist wie kaum ein anderes Ereignis der Antike. Für ihn war das ein Wendepunkt: Wenn Jesus wirklich starb und die Jünger ihm danach als dem Auferstandenen begegneten, fällt die Grundlage der Ahmadiyya-Christologie.`,
      sources: [{ kind: 'fachliteratur', author: 'Nabeel Qureshi', work: 'Seeking Allah, Finding Jesus', year: '2014', status: 'paraphrase' }],
    },
    {
      person: 'athanasius',
      role: 'als Theologe von Tod und Auferstehung',
      text: `Athanasius betont, dass Christus seinen Tod nicht im Verborgenen, sondern öffentlich erlitt, damit niemand die Auferstehung als Märchen abtun konnte. Er musste wirklich sterben, um den Tod von innen zu überwinden: Der unsterbliche Logos nahm einen sterblichen Leib an, damit der Tod an ihm sein Ende fand.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '20–23', year: 'ca. 318', status: 'paraphrase' }],
    },
    {
      person: 'habermas',
      role: 'als Historiker der Auferstehung',
      text: `Habermas stützt sich auf Fakten, die die überwältigende Mehrheit der Fachgelehrten – auch skeptische – anerkennt: Jesus starb durch Kreuzigung, die Jünger erlebten danach Begegnungen, die sie als Erscheinungen des Auferstandenen deuteten, und selbst Skeptiker wie Paulus und Jakobus kamen zum Glauben. Die Scheintod-Hypothese gilt in der Forschung seit dem 19. Jahrhundert als widerlegt, weil sie weder den Tod noch den Osterglauben erklären kann.`,
      sources: [{ kind: 'fachliteratur', author: 'Gary R. Habermas, Michael R. Licona', work: 'The Case for the Resurrection of Jesus', year: '2004', status: 'paraphrase' }],
    },
    {
      person: 'lukas',
      role: 'als Historiker der Urgemeinde',
      text: `Lukas legt Wert darauf, dass der Auferstandene leiblich ist – er isst vor den Augen der Jünger und lässt sich betasten –, und zugleich, dass er nicht in ein gewöhnliches Leben zurückkehrt: Er verschwindet in Emmaus vor ihren Augen und wird beim Ölberg emporgehoben. Für Lukas ist Ostern nicht Genesung, sondern der Anfang der neuen Schöpfung.`,
      sources: [{ kind: 'bibel', work: 'Lukas', ref: '24,30–51', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'nur-wenige-stunden',
      objection: `Jesus hing nur etwa sechs Stunden am Kreuz – Gekreuzigte überlebten oft tagelang. Pilatus selbst wunderte sich, dass er schon tot war (Mk 15,44). Man brach seine Beine nicht. Er war bewusstlos, nicht tot.`,
      objectionBy: 'Mirza Tahir Ahmad',
      answer: `Jesus wurde vorher gegeißelt – eine römische Geißelung konnte allein schon tödlich sein, und er konnte sein Kreuz nicht mehr tragen (Mk 15,21). Gerade weil Pilatus sich wunderte, ließ er den Tod vom Hauptmann amtlich bestätigen (Mk 15,44–45). Die Soldaten brachen die Beine nicht, weil sie sahen, dass er schon tot war – und stießen zur Sicherheit die Lanze in seine Seite. Römische Henker wussten, wann jemand tot war; ihr eigenes Leben hing daran.`,
      sources: [
        { kind: 'wissenschaft', author: 'William D. Edwards, Wesley J. Gabel, Floyd E. Hosmer', work: 'On the Physical Death of Jesus Christ, Journal of the American Medical Association 255', ref: 'S. 1455–1463', year: '1986', quote: `Die Autoren kommen zu dem Schluss, dass die historischen und medizinischen Befunde klar darauf hinweisen, dass Jesus tot war, bevor die Seitenwunde zugefügt wurde.`, status: 'paraphrase', note: 'Die medizinischen Details (z. B. Todesursache) sind unter Ärzten diskutiert; der Tod selbst nicht.' },
      ],
      followUps: [
        {
          id: 'blut-floss-lebend',
          objection: `Aus der Wunde kam Blut und Wasser. Tote bluten nicht – Blut fließt nur, wenn das Herz schlägt. Johannes liefert den Beweis, dass Jesus lebte.`,
          objectionBy: 'Ahmed Deedat',
          answer: `Ein Lanzenstich in die Brust eines eben Verstorbenen kann sehr wohl Blut und Flüssigkeit austreten lassen – durch die Schwerkraft, aus Herzbeutel und Brustraum; Mediziner haben das vielfach erörtert. Entscheidend ist aber, warum Johannes es berichtet: Er betont als Augenzeuge, „damit ihr glaubt" (19,35), dass Jesus wirklich gestorben war. Du nimmst einen Satz, dessen Zweck die Bestätigung des Todes ist, als Beweis für das Gegenteil.`,
          followUps: [
            {
              id: 'myrrhe-als-medizin',
              objection: `Joseph von Arimathäa und Nikodemus waren heimliche Jünger. Sie brachten hundert Pfund Myrrhe und Aloe – Heilmittel für Wunden! Sie wollten Jesus retten.`,
              objectionBy: 'Mirza Ghulam Ahmad (Argumentationslinie)',
              answer: `Johannes sagt selbst, wozu: Sie banden den Leichnam mit den Spezereien in Leinentücher, „wie die Juden pflegen zu begraben" (19,40). Hundert Pfund sind eine königliche Begräbnismenge, keine Wundsalbe. Und wer einen Schwerverletzten retten will, wickelt ihn nicht fest in Tücher, legt ihn nicht in ein Felsengrab und rollt keinen Stein davor.`,
              followUps: [
                {
                  id: 'marham-isa-salbe',
                  objection: `Alte medizinische Bücher, sogar bei Avicenna, kennen eine „Salbe Jesu" (marham-i-Isa) für Wunden. Das ist die Salbe, mit der Jesu Kreuzeswunden behandelt wurden.`,
                  objectionBy: 'Mirza Ghulam Ahmad',
                  answer: `Der Name einer mittelalterlichen Salbe beweist nichts über das Jahr 30. Jesus galt – auch im Koran (3:49) – als großer Heiler; Arzneien nach ihm zu benennen, liegt nahe, wie man Pflanzen nach Heiligen benennt. Keine dieser Schriften behauptet, die Salbe sei auf Jesu Kreuzeswunden aufgetragen worden – das ist erst Ghulam Ahmads Schlussfolgerung, über 1.800 Jahre später und ohne eine einzige antike Quelle.`,
                  questionsBack: [
                    `Welche Quelle des 1. oder 2. Jahrhunderts berichtet, dass Jesus nach dem Kreuz medizinisch gepflegt wurde?`,
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'zeichen-des-jona',
          objection: `Jesus sagte, ihm werde nur das Zeichen des Jona gegeben (Mt 12,40). Jona war im Bauch des Fisches lebendig – also war auch Jesus im Grab lebendig.`,
          objectionBy: 'Ahmed Deedat',
          answer: `Jesus vergleicht ausdrücklich die Dauer – „drei Tage und drei Nächte" – und das Herauskommen. Und Jona beschreibt seine Lage selbst als Hinabsteigen ins Totenreich: „Ich schrie aus dem Bauch der Hölle (Scheol)" (Jona 2,3), „du hast mein Leben aus dem Verderben geführt" (2,7). Das Zeichen ist die Rückkehr aus dem Tod. Deshalb verkündeten die Apostel nicht „Jesus hat überlebt", sondern „Gott hat ihn auferweckt".`,
        },
      ],
    },
    {
      id: 'ass-fisch-ueberlebender',
      objection: `Nach dem Kreuz zeigte Jesus seine Wunden, aß Fisch und sagte: „Ein Geist hat nicht Fleisch und Bein" (Lk 24,39). Er war also kein auferstandener Geist, sondern ein lebender Mensch mit seinem alten Körper.`,
      objectionBy: 'Mirza Tahir Ahmad',
      answer: `Richtig – die Auferstehung ist leiblich, kein Gespenst. Das ist christlicher Glaube. Aber dieselben Texte zeigen, dass dieser Leib verwandelt ist: Er tritt durch verschlossene Türen (Joh 20,19), verschwindet vor ihren Augen (Lk 24,31) und wird emporgehoben (Lk 24,51). Ein Schwerverletzter, der Pflege braucht, tut das nicht.`,
      followUps: [
        {
          id: 'beruehre-mich-nicht',
          objection: `Er sagte zu Maria Magdalena: „Rühre mich nicht an" (Joh 20,17) – weil seine Wunden noch frisch und schmerzhaft waren.`,
          objectionBy: 'Ahmadiyya-Literatur',
          answer: `Jesus nennt den Grund selbst: „denn ich bin noch nicht aufgefahren zu meinem Vater". Griechisch heißt es eher „Halte mich nicht fest" – Maria soll ihn nicht in der alten Weise festhalten. Und acht Tage später fordert er Thomas auf, die Hand in seine Seite zu legen (20,27). Wären die Wunden so schmerzhaft, wäre das unverständlich.`,
          followUps: [
            {
              id: 'jaenger-einfach-froh',
              objection: `Die Jünger waren einfache Leute. Sie waren froh, dass er lebte, und nannten das „Auferstehung". Das ist psychologisch völlig verständlich.`,
              objectionBy: 'Ahmadiyya-Apologetik',
              answer: `Für Juden des 1. Jahrhunderts bedeutete „Auferstehung" die endzeitliche Erweckung zu unvergänglichem Leben (Dan 12,2) – nicht das Überleben einer Hinrichtung. Schon der Skeptiker David Friedrich Strauß wandte 1864 ein: Ein halbtot aus dem Grab gekrochener, siecher Mensch hätte bei den Jüngern Mitleid erweckt, aber nie den Eindruck eines Siegers über Tod und Grab. Dazu kommen Paulus und Jakobus, die keine Anhänger waren und trotzdem zum Glauben kamen.`,
              sources: [
                { kind: 'gegner', author: 'David Friedrich Strauß', work: 'Das Leben Jesu für das deutsche Volk bearbeitet', year: '1864', quote: `Ein halbtot aus dem Grabe Hervorgekrochener, siech Umherschleichender, der ärztlichen Pflege Bedürftiger hätte unmöglich den Eindruck eines Siegers über Tod und Grab, eines Lebensfürsten machen können.`, status: 'paraphrase', note: 'Strauß war selbst kein gläubiger Christ; sein Einwand gegen die Scheintod-These gilt seither als klassisch. Wortlaut nach verbreiteter Wiedergabe, Seitenzahl nicht geprüft.' },
              ],
              followUps: [
                {
                  id: 'jesus-floh-nach-osten',
                  objection: `Jesus musste vor den Römern fliehen. Er ging zu den „anderen Schafen" (Joh 10,16) – den verlorenen Stämmen Israels in Afghanistan und Kaschmir.`,
                  objectionBy: 'Mirza Ghulam Ahmad',
                  answer: `Johannes erklärt die „anderen Schafe" selbst: Jesus stirbt, um „die zerstreuten Kinder Gottes zusammenzubringen" (11,52) – die Heiden, die durch die Mission dazukommen. Darum sendet er seine Jünger „zu allen Völkern" (Mt 28,19), statt selbst heimlich zu wandern. Und bedenke die moralische Seite: Wenn Jesus überlebt hätte und zuließ, dass seine Jünger für die Botschaft „Er ist auferstanden" in den Tod gingen, wäre er ein Betrüger – das kann kein Muslim von einem Propheten Gottes sagen.`,
                  questionsBack: [
                    `Würde ein Prophet Gottes zulassen, dass seine Jünger für eine Auferstehung sterben, die nie stattgefunden hat?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'roza-bal-grab',
      objection: `In Srinagar steht der Schrein Roza Bal. Dort liegt „Yuz Asaf", ein Prophet, der aus dem Westen kam. Die örtliche Überlieferung ist alt, und „Yuz" ist Jesus.`,
      objectionBy: 'Mirza Ghulam Ahmad',
      answer: `Die Forschung hat den Namen geklärt: „Yuz Asaf" ist die arabisch-persische Form von „Budhasaf" – dem Bodhisattva aus der Barlaam-und-Josaphat-Legende, einer christianisierten Fassung der Buddha-Geschichte. Der Indologe Günter Grönbold (1985) und Norbert Klatt (1988) haben das im Detail gezeigt. Die Gleichsetzung mit Jesus stammt von Ghulam Ahmad selbst, aus den 1890er-Jahren.`,
      followUps: [
        {
          id: 'yuz-hebraeisch',
          objection: `„Yuz" ist hebräisch für Jesus, und „Asaf" heißt „Sammler" – Jesus, der die verlorenen Schafe sammelte. Die Etymologie passt perfekt.`,
          objectionBy: 'Ahmadiyya-Literatur',
          answer: `Das ist eine Volksetymologie. In den arabischen Fassungen der Legende (Kitab Bilauhar wa Budhasaf) lässt sich verfolgen, wie aus „Budhasaf" durch einen einzigen Punkt in der arabischen Schrift „Yudasaf" bzw. „Yuzasaf" wurde – die Buchstaben b und y unterscheiden sich nur durch die Stellung eines Punktes. Die Linie führt zum Bodhisattva, nicht nach Nazaret.`,
          followUps: [
            {
              id: 'koran-23-50-kaschmir',
              objection: `Der Koran bestätigt es: Gott gab Jesus und seiner Mutter Zuflucht „auf einer Anhöhe mit Ruheplatz und Quellwasser" (23:50). Das ist das grüne Kaschmir.`,
              objectionBy: 'Mirza Ghulam Ahmad',
              answer: `Der Vers nennt keinen Ort. Die klassischen Korankommentatoren dachten an Orte wie Damaskus, Ramla, Jerusalem oder Ägypten – viele bezogen den Vers auf die Kindheit Jesu, da Maria mitgenannt wird. Die Kaschmir-Deutung taucht erst im 19. Jahrhundert auf. Ein Vers, der jede grüne Landschaft beschreiben kann, beweist keinen Aufenthalt in Indien.`,
              sources: [
                { kind: 'koran', work: 'Sure 23 (al-Mu\'minun)', ref: '23:50', quote: `Und Wir machten den Sohn Maryams und seine Mutter zu einem Zeichen und gaben ihnen Unterkunft auf einer Anhöhe mit Grund zum Verweilen und Quellwasser.`, original: 'wa-āwaynāhumā ilā rabwatin dhāti qarārin wa-maʿīn', translation: 'nach Bubenheim/Elyas', status: 'verbatim', url: 'https://quran.com/23/50' },
                { kind: 'hadith', author: 'at-Tabari', work: 'Dschami\' al-Bayan (Tafsir)', ref: 'zu 23:50', status: 'paraphrase', note: 'At-Tabari referiert verschiedene Ortsdeutungen (u. a. Damaskus, Ramla, Jerusalem, Ägypten); Kaschmir ist nicht darunter.' },
              ],
            },
          ],
        },
        {
          id: 'lokale-verehrung-alt',
          objection: `Die Kaschmiris verehren das Grab seit Jahrhunderten als Grab eines Propheten. Das kann man nicht einfach wegwischen.`,
          objectionBy: 'Holger Kersten',
          answer: `Niemand bestreitet, dass dort ein Heiliger verehrt wird. Die Frage ist nur, wer. Ein muslimischer Heiliger mit dem Namen der Buddha-Legende, der als „Prophet" verehrt wird, ist nicht Jesus von Nazaret. Für Jesu Tod in Jerusalem haben wir Quellen aus dem 1. Jahrhundert (Paulus, die Evangelien, Tacitus, Josephus); für ein Grab Jesu in Kaschmir keine einzige vor dem 19. Jahrhundert.`,
        },
      ],
    },
    {
      id: 'koran-5-117-tod',
      objection: `Der Koran sagt, Jesus ist gestorben: „Als Du mich abberufen hast (tawaffaitani)" (5:117). Die Sunniten mit ihrem lebenden Jesus im Himmel irren genauso wie ihr Christen mit eurem Sühnetod.`,
      objectionBy: 'Ahmadiyya Muslim Jamaat',
      answer: `Ob „tawaffa" hier „sterben lassen" oder „vollständig zu sich nehmen" heißt, ist ein innerislamischer Streit, in dem die Mehrheit der Muslime gegen dich steht. Für unser Gespräch ist etwas anderes wichtig: Du gibst zu, dass Jesus wirklich ans Kreuz genagelt wurde – damit stehst du näher an der Geschichte als die Ersatztheorie. Dann bleibt nur die Frage, ob er dort starb. Und darauf antworten die Quellen eindeutig.`,
      sources: [
        { kind: 'koran', work: 'Sure 4 (an-Nisa)', ref: '4:157–158', quote: `… und sie haben ihn nicht getötet und haben ihn nicht gekreuzigt, sondern es erschien ihnen (jemand) ähnlich … Vielmehr hat Allah ihn zu Sich erhoben.`, original: 'wa-mā qatalūhu wa-mā ṣalabūhu wa-lākin shubbiha lahum … bal rafaʿahu llāhu ilaihi', translation: 'nach Bubenheim/Elyas', status: 'verbatim', url: 'https://quran.com/4/157-158' },
      ],
      followUps: [
        {
          id: 'ahmad-verheissener-messias',
          objection: `Jesus ist tot und kommt nicht leiblich wieder. Die verheißene Wiederkunft hat sich erfüllt – in einem, der in seinem Geist kam: Mirza Ghulam Ahmad, dem Verheißenen Messias.`,
          objectionBy: 'Ahmadiyya Muslim Jamaat',
          answer: `Jesus selbst hat davor gewarnt: „Wenn dann jemand zu euch wird sagen: Siehe, hier ist Christus! oder: da!, so sollt ihr's nicht glauben … Denn gleichwie der Blitz ausgeht vom Aufgang und scheint bis zum Niedergang, also wird auch sein die Zukunft des Menschensohnes" (Mt 24,23.27). Seine Wiederkunft ist für alle sichtbar, nicht in einer anderen Person. Und beachte: Die Kaschmir-These ist für Ghulam Ahmads Anspruch notwendig – nur ein toter Jesus braucht einen „Nachfolger in seinem Geist".`,
          sources: [
            { kind: 'bibel', work: 'Matthäus', ref: '24,23–27', quote: `So alsdann jemand zu euch wird sagen: Siehe, hier ist Christus! oder: da!, so sollt ihr's nicht glauben … Denn gleichwie der Blitz ausgeht vom Aufgang und scheint bis zum Niedergang, also wird auch sein die Zukunft des Menschensohnes.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
          followUps: [
            {
              id: 'prophezeiungen-ahmads',
              objection: `Mirza Ghulam Ahmad hat zahlreiche Prophezeiungen gemacht, die eingetroffen sind – etwa über die Pest in Indien. Gott hat ihn bestätigt.`,
              objectionBy: 'Ahmadiyya-Apologetik',
              answer: `Die Tora gibt einen Prüfstein: Was ein Prophet im Namen des HERRN ankündigt und nicht eintrifft, hat der HERR nicht geredet (Dtn 18,22). Kritiker verweisen auf Ankündigungen Ghulam Ahmads, die nicht wie angekündigt eintrafen – etwa den angekündigten Tod seines christlichen Debattengegners Abdullah Atham binnen 15 Monaten (1893) oder die angekündigte Ehe mit Muhammadi Begum; die Ahmadiyya deutet sie als bedingte Prophezeiungen. Ich überlasse dir das Urteil – aber Jesus wurde nicht durch Vorhersagen bestätigt, sondern durch die Auferstehung (Röm 1,4).`,
              sources: [
                { kind: 'bibel', work: '5. Mose', ref: '18,22', quote: `Wenn der Prophet redet in dem Namen des HERRN, und es wird nichts daraus und trifft nicht ein, das ist das Wort, das der HERR nicht geredet hat.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              followUps: [
                {
                  id: 'verfolgung-beweist',
                  objection: `Wir werden in Pakistan verfolgt, seit 1974 zu Nicht-Muslimen erklärt, unsere Moscheen werden angegriffen – genau wie die ersten Christen. Ist das nicht ein Zeichen, dass wir die Wahrheit haben?`,
                  objectionBy: 'Ahmadi-Gesprächspartner',
                  answer: `Die Verfolgung der Ahmadis ist Unrecht, und als Christ stehe ich an deiner Seite für deine Glaubensfreiheit – Christen in Pakistan teilen dieses Leid. Aber Leiden allein beweist keine Wahrheit; viele Gruppen haben gelitten. Die ersten Christen beriefen sich nicht auf ihr Leiden, sondern auf das leere Grab und die Begegnungen mit dem Auferstandenen. An diesem Punkt müssen wir das Gespräch führen.`,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn Pilatus den Tod vom Hauptmann bestätigen ließ – wer hätte ein Interesse gehabt, einen Lebenden als tot zu melden?`,
    `Wie hätte ein schwer verletzter, gepflegter Jesus seine Jünger überzeugen können, er habe den Tod besiegt?`,
    `Welche Quelle vor dem 19. Jahrhundert verbindet das Grab in Srinagar mit Jesus von Nazaret?`,
    `Wäre Jesus ein ehrlicher Prophet, wenn er seine Jünger für eine Auferstehung sterben ließ, die nie geschah?`,
    `Warum verlangt Ghulam Ahmads Anspruch, der „Verheißene Messias" zu sein, dass Jesus tot ist?`,
  ],
  avoid: [
    `Nicht Ahmadis und sunnitische Muslime gleichsetzen. Die Ahmadiyya hat eine eigene Theologie – und wird von Sunniten scharf abgelehnt.`,
    `Keine Häme über die Verfolgung der Ahmadis oder die pakistanische Verfassungsänderung von 1974. Religionsfreiheit gilt für alle.`,
    `Nicht mit dem Turiner Grabtuch argumentieren – seine Echtheit ist umstritten, und die Debatte lenkt vom eigentlichen Befund ab.`,
    `Nicht behaupten, aus einem Leichnam könne „niemals" Blut fließen oder „immer" fließen. Bleib bei der Funktion des Berichts (Joh 19,35) und beim amtlich bestätigten Tod.`,
  ],
  concessions: [
    `Jesus hing vergleichsweise kurz am Kreuz; das Erstaunen des Pilatus ist echt überliefert.`,
    `Die genaue medizinische Todesursache bei der Kreuzigung ist unter Ärzten diskutiert.`,
    `Die Ahmadiyya hat gegenüber der sunnitischen Ersatztheorie den Vorzug, die Kreuzigung als historisches Ereignis anzuerkennen.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Günter Grönbold', work: 'Jesus in Indien. Das Ende einer Legende', year: '1985', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Norbert Klatt', work: 'Lebte Jesus in Indien? Eine religionsgeschichtliche Klärung', year: '1988', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Nabeel Qureshi', work: 'Seeking Allah, Finding Jesus', year: '2014', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Gary R. Habermas, Michael R. Licona', work: 'The Case for the Resurrection of Jesus', year: '2004', status: 'paraphrase' },
    { kind: 'gegner', author: 'Mirza Ghulam Ahmad', work: 'Jesus in India (Masih Hindustan Mein)', year: '1908', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Ahmadiyya', 'Scheintod', 'Kaschmir', 'Roza Bal', 'Yuz Asaf', 'Kreuzigung', 'Auferstehung'],
  related: [
    'islam-kreuzigung/nicht-gekreuzigt-4-157',
    'islam-kreuzigung/ersatztheorie-taeuschung',
    'gnosis/jesus-in-indien',
    'auferstehung/scheintod',
    'islam-eschatologie/jesus-kommt-als-muslim',
  ],
};

export default claim;
