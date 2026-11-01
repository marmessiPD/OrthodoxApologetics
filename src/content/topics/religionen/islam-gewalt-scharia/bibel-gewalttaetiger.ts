import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'bibel-gewalttaetiger',
  title: `„Die Bibel ist gewalttätiger als der Koran."`,
  proponents: [
    { name: 'Shabir Ally', role: 'Islamischer Apologet, Let the Quran Speak', work: 'Debatten „Is the Bible more violent than the Qur\'an?"' },
    { name: 'Mohammed Hijab', role: 'Islamischer Apologet, London', work: 'Debatten über Gewalt in Bibel und Koran' },
    { name: 'Zakir Naik', role: 'Islamischer Prediger, Peace TV', work: 'Vorträge über Gewalt in der Bibel' },
    { name: 'Philip Jenkins', role: 'Historiker, Baylor University (selbst Christ)', work: 'Laying Down the Sword: Why We Can\'t Ignore the Bible\'s Violent Verses (2011)' },
  ],
  steelman: `„Ihr Christen zitiert 9:5, aber lest eure eigene Bibel: ‚Von den Städten dieser Völker … sollst du nichts leben lassen, was Odem hat' (Dtn 20,16). ‚Töte Mann und Frau, Kind und Säugling, Rind und Schaf' (1 Sam 15,3). ‚Tötet alles, was männlich ist unter den Kindern … aber alle Mädchen, die nicht Männer erkannt haben, lasst für euch leben' (Num 31,17–18). ‚Wohl dem, der deine jungen Kinder nimmt und zerschmettert sie an dem Stein' (Ps 137,9). Selbst Jesus sagt: ‚Meine Feinde … bringt her und erwürgt sie vor mir' (Lk 19,27). Sogar der christliche Historiker Philip Jenkins räumt ein, dass die Bibel mehr und schlimmere Gewalttexte enthält als der Koran – der Koran kennt keinen Befehl zum Völkermord, er verbietet die Tötung von Frauen und Kindern und gebietet: ‚Übertretet nicht' (2:190)."`,
  biblical: {
    summary: `Die Bibel enthält tatsächlich harte Texte, und Christen dürfen sie nicht verschweigen. Aber man muss unterscheiden: (1) **Erzählung** und **Gebot**; (2) unter den Geboten **zeitlich und örtlich begrenzte** Befehle (die Völker Kanaans, Amalek – an eine bestimmte Generation gerichtet) und **allgemeine, offene** Gebote an alle Gläubigen; (3) die Richtung der Offenbarung: Das Alte Testament weist auf Christus hin, und das Neue Testament – das letzte Wort – verwirft das Schwert für das Reich Gottes (Mt 26,52; Joh 18,36). Kein neutestamentlicher Text gebietet Christen, gegen Ungläubige zu kämpfen. Der Koran dagegen richtet „Kämpfen ist euch vorgeschrieben" (2:216) direkt an die Gläubigen, und 9:29 nennt kein zeitliches Ende außer der Unterwerfung.`,
    detail: `**Kriegsrhetorik im Alten Orient:** Formeln wie „alles vollständig vernichten" sind auch in anderen altorientalischen Kriegsberichten als stereotype Übertreibung belegt (K. A. Kitchen, Paul Copan). Josua 10,40 spricht von vollständiger Vernichtung – doch kurz danach leben die Kanaaniter weiter im Land (Ri 1,21.27–33).

**Der Koran bestätigt die Landnahme:** Mose sagt im Koran zu Israel: „O mein Volk, betretet das heilige Land, das Allah euch bestimmt hat" (5:21). Und der Koran nennt die Tora „Rechtleitung und Licht" (5:44). Wer die Landnahme als Völkermord verurteilt, verurteilt damit etwas, das der Koran billigt.

**Lk 19,27** ist das Wort des Königs in einem Gleichnis (Lk 19,11–27) über das Gericht bei der Wiederkunft, keine Anweisung an die Jünger.`,
    sources: [
      { kind: 'bibel', work: '5. Mose (Deuteronomium)', ref: '20,16–18', quote: `Aber in den Städten dieser Völker, die dir der HERR, dein Gott, zum Erbe geben wird, sollst du nichts leben lassen, was Odem hat … auf daß sie euch nicht lehren tun alle die Greuel, die sie ihren Göttern tun.`, translation: 'Luther 1912', status: 'paraphrase' },
      { kind: 'bibel', work: 'Richter', ref: '1,21.27–33', quote: `Die Kanaaniter blieben in vielen Städten wohnen; Israel vertrieb sie nicht.`, status: 'paraphrase' },
      { kind: 'koran', work: 'Sure 5 (al-Ma\'ida)', ref: '5:21', quote: `O mein Volk, betretet das geheiligte Land, das Allah für euch bestimmt hat, und kehrt nicht den Rücken.`, original: `yā qawmi dkhulū l-arḍa l-muqaddasata llatī kataba llāhu lakum`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/5/21' },
      { kind: 'koran', work: 'Sure 2 (al-Baqara)', ref: '2:216', quote: `Vorgeschrieben ist euch zu kämpfen, obwohl es euch zuwider ist.`, original: `kutiba ʿalaykumu l-qitālu wa-huwa kurhun lakum`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/2/216' },
    ],
  },
  church: {
    summary: `Die alexandrinische Tradition, aus der die koptische Kirche lebt, las die Kriegsbücher des Alten Testaments nie als Auftrag an Christen, Menschen zu bekämpfen. Origenes deutete die Kriege Josuas in seinen Homilien geistlich: Die Feinde, die der Christ vernichten soll, sind die Sünden und Laster in seiner Seele. Die Väter verstanden das Alte Testament von Christus her – als Geschichte, die auf das Kreuz zuläuft, wo Gott selbst Gewalt erleidet, statt sie auszuüben. Die frühe Kirche wuchs 300 Jahre ohne Schwert.`,
    sources: [
      { kind: 'kirchenvater', author: 'Origenes', work: 'Homilien über das Buch Josua', ref: 'u. a. Hom. 15', year: 'um 240', quote: `Die Kriege Josuas sind für den Christen Bilder des inneren Kampfes; die Völker, die auszurotten sind, sind die Laster in unserer Seele.`, status: 'paraphrase', note: 'Origenes ist für Kopten keine Lehrautorität, aber ein früher Zeuge alexandrinischer Schriftauslegung.' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '52', year: 'um 318', quote: `Völker, die Krieg liebten, legen nach der Annahme der Lehre Christi die Waffen nieder und wenden sich dem Ackerbau zu.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Philip Jenkins argumentiert in *Laying Down the Sword* (2011), dass die Bibel – besonders mit den Bann-Texten (*ḥerem*) – zahlreiche und zum Teil härtere Gewalttexte enthält als der Koran, und dass Juden und Christen gelernt haben, diese Texte zu „vergessen" oder umzudeuten. Er warnt davor, den Islam für Texte zu verurteilen, die man in der eigenen Schrift übersieht. Christliche Ethiker wie Paul Copan und Matthew Flannagan (*Did God Really Command Genocide?*, 2014) betonen dagegen die hyperbolische Kriegssprache, die Begrenztheit der Befehle und die fortschreitende Offenbarung. Wortzählungen (etwa computergestützte Textanalysen) sagen wenig, weil sie Erzählung und Gebot nicht unterscheiden.`,
    detail: `**Jenkins fair gelesen:** Jenkins behauptet nicht, das Christentum sei heute gewalttätiger, sondern dass die Bibel schwierige Texte enthält, mit denen Christen ehrlich umgehen müssen. Darin hat er recht. Er räumt zugleich ein, dass diese Texte in der Bibel meist erzählend und an konkrete historische Situationen gebunden sind.`,
    sources: [
      { kind: 'fachliteratur', author: 'Philip Jenkins', work: 'Laying Down the Sword: Why We Can\'t Ignore the Bible\'s Violent Verses', year: '2011', quote: `Die Bibel enthält zahlreiche, teils härtere Gewalttexte als der Koran; Juden und Christen haben gelernt, sie zu vergessen oder umzudeuten.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Paul Copan / Matthew Flannagan', work: 'Did God Really Command Genocide? Coming to Terms with the Justice of God', year: '2014', quote: `Die Bann-Texte verwenden stereotype, hyperbolische Kriegssprache des Alten Orients; die Befehle waren begrenzt und nicht auf andere Zeiten übertragbar.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'K. A. Kitchen', work: 'On the Reliability of the Old Testament', year: '2003', quote: `Altorientalische Kriegsberichte verwenden regelmäßig übertreibende Formeln totaler Vernichtung.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Die Bibel enthält harte Texte – das gebe ich offen zu. Aber es gibt drei Unterschiede: Erstens waren die alttestamentlichen Kriegsbefehle auf bestimmte Völker und eine bestimmte Zeit begrenzt; 9:29 dagegen gilt „bis sie den Tribut entrichten". Zweitens ist das letzte Wort der Bibel Jesus, der das Schwert verbietet (Mt 26,52); das letzte Wort des Korans ist Sure 9. Drittens bestätigt der Koran selbst die Landnahme Kanaans (5:21) und nennt die Tora „Licht" (5:44). Die Frage ist nicht, welches Buch mehr Gewalt *erzählt*, sondern welches seinen Lesern *heute* Gewalt gebietet.`,
  keyPoints: [
    `**Ehrlich zugeben:** Dtn 20, 1 Sam 15, Num 31 sind harte Texte. Christen dürfen sie nicht verschweigen.`,
    `**Erzählung vs. Gebot, begrenzt vs. offen:** Die Bann-Befehle galten Kanaan und Amalek in einer bestimmten Generation; 2:216, 8:39 und 9:29 sind an die Gläubigen allgemein gerichtet.`,
    `**Die Richtung der Offenbarung:** Bibel – vom begrenzten Krieg zum gewaltlosen Evangelium; Koran – von der mekkanischen Geduld zur Sure 9.`,
    `**Der Koran billigt die Landnahme (5:21) und nennt die Tora Licht (5:44).** Wer die Bibel als Völkermord-Buch verurteilt, trifft auch den Koran.`,
    `**Das Vorbild des Gründers entscheidet:** Wer Gewalt übte, handelte das gegen Jesus oder gemäß Jesus? Gegen Mohammed oder gemäß Mohammed (33:21)?`,
    `**Lk 19,27 und Mt 10,34** sind kein Kampfauftrag: ein Gleichnis über das Endgericht und ein Wort über Spaltung um des Glaubens willen.`,
  ],
  voices: [
    {
      person: 'paul-copan',
      role: 'als Religionsphilosoph und Ethiker des Alten Testaments',
      text: `Copan zeigt, dass die Bann-Texte stereotype, übertreibende Kriegssprache verwenden, wie sie aus ägyptischen, hethitischen und assyrischen Berichten bekannt ist, und dass die Befehle auf die Kanaaniter jener Zeit begrenzt waren – nicht auf alle Völker oder alle Zeiten. Er betont, dass Gott im Alten Testament mit einem gefallenen, gewaltvollen Kulturraum schrittweise umgeht und auf Christus hinführt. Kein späterer Leser erhielt den Auftrag, diese Kriege zu wiederholen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Paul Copan', work: 'Is God a Moral Monster? Making Sense of the Old Testament God', year: '2011', quote: `Die Kriegstexte des AT sind zeitlich begrenzt, hyperbolisch und nicht als bleibendes Gebot gedacht.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'origenes',
      role: 'als alexandrinischer Ausleger der Kriegsbücher',
      text: `Origenes liest in seinen Josua-Homilien die Eroberungskriege als Bild des geistlichen Kampfes: Christus, der wahre Josua (griechisch *Iēsous*), führt die Seele in das verheißene Land, und die Feinde sind die Laster, die vertrieben werden müssen. Für ihn wäre es undenkbar gewesen, aus Josua einen Auftrag zum Krieg gegen Menschen abzuleiten. Er ist für die koptische Kirche keine Lehrautorität, aber ein wichtiger Zeuge alexandrinischer Schriftauslegung.`,
    },
    {
      person: 'philip-jenkins',
      role: 'als Historiker, der die Gewalttexte beider Schriften vergleicht',
      text: `Jenkins mahnt Christen zur Ehrlichkeit: Wer den Koran wegen 9:5 anklagt, muss die Bann-Texte der eigenen Bibel kennen. Zugleich zeigt seine Arbeit, wie jüdische und christliche Traditionen diese Texte über Jahrhunderte begrenzt, vergeistlicht und umgedeutet haben. Für das Gespräch heißt das: Christen gewinnen Glaubwürdigkeit, wenn sie die harten Texte offen ansprechen und erklären, warum sie für Christen kein Kampfauftrag sind.`,
      sources: [
        { kind: 'fachliteratur', author: 'Philip Jenkins', work: 'Laying Down the Sword', year: '2011', quote: `Plädoyer für einen ehrlichen Umgang mit den Gewalttexten der Bibel und Darstellung ihrer Umdeutung in jüdischer und christlicher Tradition.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'christopher-wright',
      role: 'als Alttestamentler',
      text: `Wright betont, dass die Landnahme Kanaans in der Bibel als einmaliges göttliches Gericht über eine bestimmte, lange angekündigte Bosheit dargestellt wird (Gen 15,16; Dtn 9,5) – nicht als Modell für Israels spätere Kriege und erst recht nicht für die Kirche. Israel selbst wird mit demselben Gericht bedroht, wenn es dieselben Gräuel tut. Die Texte bleiben schwer, aber sie sind keine ethnische oder religiöse Kriegserklärung für alle Zeiten.`,
      sources: [
        { kind: 'fachliteratur', author: 'Christopher J. H. Wright', work: 'The God I Don\'t Understand', year: '2008', quote: `Die Eroberung Kanaans ist als einmaliges Gericht dargestellt und nicht als wiederholbares Modell.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'justin',
      role: 'als Zeuge der frühen Kirche',
      text: `Justin bezeugt um 155 dem Kaiser, dass die Prophezeiung „Schwerter zu Pflugscharen" (Jes 2,4) in den Christen erfüllt sei: Menschen, die früher Krieg führten und einander töteten, führen nun keinen Krieg mehr gegen ihre Feinde und sterben lieber, als Christus zu verleugnen. Die frühe Kirche las ihre Bibel – einschließlich des Alten Testaments – von Jesus her.`,
      sources: [
        { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Erste Apologie', ref: '39', year: 'um 155', quote: `Erfüllung von Jesaja 2,4: Die Christen, die früher einander töteten, führen keinen Krieg mehr gegen ihre Feinde.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'dtn-20-samuel-15',
      objection: `Dtn 20,16 und 1 Sam 15,3: Gott befiehlt, Frauen, Kinder und Säuglinge zu töten. So etwas Schlimmes steht nirgends im Koran.`,
      objectionBy: 'Shabir Ally',
      answer: `Diese Texte sind hart, und ich spiele sie nicht herunter. Aber sie sind auf bestimmte Völker (Kanaan, Amalek) und eine bestimmte Situation begrenzt, kein allgemeines Gebot für Gläubige aller Zeiten. Und der Koran billigt selbst die Landnahme: Mose sagt in 5:21: „Betretet das heilige Land, das Allah euch bestimmt hat." Wenn die Landnahme Völkermord war, dann hat der Koran ihn gutgeheißen.`,
      followUps: [
        {
          id: 'nur-land-betreten',
          objection: `5:21 befiehlt nur, das Land zu betreten – nicht, Frauen und Kinder zu töten.`,
          objectionBy: 'Shabir Ally',
          answer: `Dann akzeptierst du die Landnahme selbst als göttlichen Befehl; die Frage betrifft die Mittel. Und der Koran nennt die Tora „Rechtleitung und Licht" (5:44) – die Tora, die Dtn 20 enthält. Ein Muslim kann den Gott der Tora nicht konsequent ein Ungeheuer nennen.`,
          sources: [
            { kind: 'koran', work: 'Sure 5 (al-Ma\'ida)', ref: '5:44', quote: `Wir haben die Tora hinabgesandt, in der Rechtleitung und Licht ist.`, original: `innā anzalnā t-tawrāta fīhā hudan wa-nūr`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/5/44' },
          ],
          followUps: [
            {
              id: 'grausame-stellen-hinzugefuegt',
              objection: `Die grausamen Stellen haben Menschen später hinzugefügt. Die ursprüngliche Tora war anders.`,
              objectionBy: 'Zakir Naik',
              answer: `Das ist das Islamische Dilemma: 5:43 sagt, die Juden zur Zeit Mohammeds hätten die Tora „bei sich, in der das Urteil Allahs ist". Und das Deuteronomium ist in den Schriftrollen vom Toten Meer in zahlreichen Handschriften belegt – Jahrhunderte vor Mohammed. Der Text, den der Koran „Licht" nennt, ist der Text, den wir lesen.`,
              followUps: [
                {
                  id: 'koran-setzt-grenzen',
                  objection: `Dann ist die Bibel eben unmoralischer – der Koran setzt Grenzen: „Übertretet nicht" (2:190), keine Tötung von Frauen und Kindern.`,
                  objectionBy: 'Mohammed Hijab',
                  answer: `Vergleiche die Reichweite: Die Kanaan-Befehle endeten mit jener Generation; 9:29 und 8:39 haben ein offenes Ziel – „bis die Religion gänzlich Allahs ist". Und schau, wie die Traditionen lasen: Die Rabbinen begrenzten die Bann-Gebote auf die sieben Völker, die nicht mehr existieren; die Kirchenväter vergeistlichten sie. Die islamischen Rechtsschulen leiteten aus 9:29 eine dauerhafte Gemeinschaftspflicht ab.`,
                  sources: [
                    { kind: 'koran', work: 'Sure 8 (al-Anfal)', ref: '8:39', quote: `Und kämpft gegen sie, bis es keine Verfolgung (fitna) mehr gibt und die Religion gänzlich Allahs ist.`, original: `wa-qātilūhum ḥattā lā takūna fitnatun wa-yakūna d-dīnu kulluhu li-llāh`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/8/39' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'quantitative-studie',
      objection: `Textanalysen und sogar der christliche Historiker Philip Jenkins zeigen: Die Bibel enthält mehr Gewalt als der Koran.`,
      objectionBy: 'Mohammed Hijab',
      answer: `Wortzählungen vermischen Erzählung und Gebot. Die Bibel ist eine umfangreiche Geschichtsbibliothek, der Koran überwiegend Ermahnung und Gesetz. Die richtige Frage ist: Welches Buch gebietet *seinen Lesern heute*, gegen Ungläubige zu kämpfen? Der Koran sagt den Gläubigen: „Vorgeschrieben ist euch zu kämpfen" (2:216). Jenkins selbst betont, dass die biblischen Texte meist erzählend und historisch gebunden sind.`,
      followUps: [
        {
          id: 'josua-auch-befehl',
          objection: `Josua ist nicht nur Erzählung – Gott *befiehlt* dort die Vernichtung.`,
          objectionBy: 'Shabir Ally',
          answer: `Ja, an Israel in jener Zeit gerichtet. Aber kein Apostel und kein Kirchenvater lehrte die Christen, aus Josua den Kampf gegen Ungläubige abzuleiten; Origenes las Josua als geistlichen Kampf gegen die Sünde. Die islamischen Juristen leiteten dagegen aus 9:5 und 9:29 allgemeine Regeln ab.`,
          followUps: [
            {
              id: 'kreuzfahrer-at',
              objection: `Die Kreuzfahrer und Konquistadoren beriefen sich sehr wohl auf das Alte Testament und auf Gottes Willen.`,
              objectionBy: 'Mohammed Hijab',
              answer: `Manche taten es, und sie missbrauchten die Schrift gegen das Neue Testament. Die Kreuzzüge hatten zwar einen Hintergrund – Jahrhunderte der Eroberung christlicher Länder von Syrien und Ägypten bis Spanien –, aber Massaker wie in Jerusalem 1099 oder die Plünderung Konstantinopels 1204 sind nicht zu rechtfertigen. Siehe Claim „Die Kreuzzüge zeigen die Gewalt des Christentums".`,
              followUps: [
                {
                  id: 'alles-missbrauch',
                  objection: `Ihr erklärt einfach jede christliche Gewalt zu Missbrauch. So macht ihr euch unangreifbar.`,
                  objectionBy: 'Mohammed Hijab',
                  answer: `Der Test ist überprüfbar: Handelten die gewalttätigen Christen wie Jesus oder gegen ihn? Handelten gewalttätige Muslime wie Mohammed in Khaybar oder bei den Banu Qurayza – oder gegen ihn? Das Vorbild des Gründers ist in beiden Religionen der Schlüssel zur Auslegung (33:21; 1 Petr 2,21). Genau darin liegt die Asymmetrie.`,
                  questionsBack: [
                    `Nenne mir eine Gewalttat von Christen, die dem Beispiel Jesu entspricht. Kannst du umgekehrt eine Gewalttat nennen, die dem Beispiel Mohammeds widerspricht – und wie begründest du das?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'lukas-19-27',
      objection: `Jesus selbst sagt in Lk 19,27: „Meine Feinde, die nicht wollten, dass ich über sie herrsche, bringt her und erwürgt sie vor mir."`,
      objectionBy: 'Zakir Naik',
      answer: `Das sagt der König in einem Gleichnis (Lk 19,11–27), das Jesus erzählt, weil die Leute meinten, das Reich Gottes werde sofort erscheinen. Es ist ein Bild für das Gericht bei seiner Wiederkunft, keine Anweisung an die Jünger. Unmittelbar danach zieht Jesus in Jerusalem ein, weint über die Stadt (Lk 19,41) und lässt sich gewaltlos verhaften.`,
      followUps: [
        {
          id: 'gott-toetet-feinde',
          objection: `Gleichnis oder nicht – Jesus stellt Gott als jemanden dar, der seine Feinde tötet.`,
          objectionBy: 'Zakir Naik',
          answer: `Gott als Richter am Ende der Geschichte – das lehrt auch der Islam (Hölle, Jüngstes Gericht). Die entscheidende Frage ist, ob *Menschen* den Auftrag haben, jetzt zu töten. Jesus sagt: „Liebet eure Feinde" (Mt 5,44), und zu Petrus: „Stecke dein Schwert an seinen Ort" (Mt 26,52).`,
          followUps: [
            {
              id: 'mt-10-34',
              objection: `Mt 10,34: „Ich bin nicht gekommen, Frieden zu bringen, sondern das Schwert."`,
              objectionBy: 'Shabir Ally',
              answer: `Lukas überliefert dasselbe Wort mit „Zwietracht" (Lk 12,51); der Zusammenhang ist die Spaltung von Familien um des Glaubens willen (Mt 10,35–36). Und die Jünger sind die Verfolgten: „Ich sende euch wie Schafe mitten unter die Wölfe" (Mt 10,16). Das Schwert trifft sie, nicht ihre Gegner.`,
              followUps: [
                {
                  id: 'tempelreinigung',
                  objection: `Und die Tempelreinigung? Jesus machte eine Peitsche und wurde gewalttätig (Joh 2,15).`,
                  objectionBy: 'Mohammed Hijab',
                  answer: `Joh 2,15 sagt, er trieb mit der Geißel „die Schafe und Ochsen" hinaus und stieß die Tische um – eine prophetische Zeichenhandlung gegen die Entweihung des Tempels. Niemand wurde verletzt oder getötet. Selbst die härteste Lesart dieser Szene ist meilenweit entfernt von der Tötung Kaʿb ibn al-Aschrafs oder der Hinrichtung der Banu Qurayza.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'steinigung-im-at',
      objection: `Das Alte Testament befiehlt die Steinigung von Ehebrechern, Homosexuellen und Sabbatbrechern. Der Koran ist viel milder.`,
      objectionBy: 'Mohammed Hijab',
      answer: `Das war bürgerliches Recht für Israel unter dem Sinaibund; Christen verstehen es als in Christus erfüllt, und kein christlicher Staat ist gehalten, es durchzusetzen. Im Islam gelten Auspeitschung (24:2) und – über die Hadithe – Steinigung als bleibendes Gottesrecht. Und der Koran ist nicht in allem milder: 5:33 schreibt Kreuzigung und wechselseitige Amputation vor.`,
      detail: `Siehe Claim „Die Bibel fordert grausame Strafen" (Topic „Altes Testament & Ethik").`,
      followUps: [
        {
          id: 'gesetz-nicht-aufgeloest',
          objection: `Jesus sagte: „Ich bin nicht gekommen, das Gesetz aufzulösen" (Mt 5,17). Also gilt für Christen alles noch.`,
          objectionBy: 'Zakir Naik',
          answer: `Er sagt: „sondern zu erfüllen" – und im selben Kapitel deutet er das Gesetz neu: „Auge um Auge … Ich aber sage euch: Widerstrebet nicht dem Übel" (Mt 5,38–39). Paulus nennt das Gesetz einen Zuchtmeister bis Christus (Gal 3,24–25), und das Apostelkonzil legte den Heidenchristen das mosaische Gesetz nicht auf (Apg 15,28–29).`,
          followUps: [
            {
              id: 'joh-8-spaeter',
              objection: `Die Geschichte von der Ehebrecherin (Joh 8) steht nicht in den ältesten Handschriften – sie ist eine spätere Einfügung.`,
              objectionBy: 'Shabir Ally',
              answer: `Das stimmt: Sie fehlt in P66, P75, Sinaiticus und Vaticanus. Die koptische Kirche liest sie, und viele Forscher halten sie für eine alte, echte Überlieferung. Aber mein Argument hängt nicht an ihr: Mt 5,38–48, Mt 26,52 und Röm 12,17–21 sind unbestritten und sagen dasselbe.`,
              followUps: [
                {
                  id: 'roemer-13-schwert',
                  objection: `Paulus sagt in Röm 13,4, die Obrigkeit trage das Schwert nicht umsonst. Also befürwortet auch das NT Gewalt.`,
                  objectionBy: 'Mohammed Hijab',
                  answer: `Röm 13 beschreibt die Aufgabe des Staates, das Böse zu bestrafen – nicht, den Glauben auszubreiten. Jesus trennte ausdrücklich: „Gebet dem Kaiser, was des Kaisers ist, und Gott, was Gottes ist" (Mt 22,21). Das staatliche Schwert dient der Gerechtigkeit für alle; 9:29 dagegen gebietet den Kampf um der Religion willen.`,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welcher Vers im Neuen Testament gebietet Christen, gegen Ungläubige zu kämpfen?`,
    `Wie lautet 5:21 – und billigt der Koran damit die Landnahme Kanaans?`,
    `Gilt 9:29 nach klassischem Verständnis zeitlich begrenzt wie Dtn 20 – oder „bis sie die Dschizya entrichten"?`,
    `Wenn ein Christ Gewalt übt – handelt er wie Jesus? Wenn ein Muslim Gewalt übt – handelt er gegen Mohammed?`,
  ],
  avoid: [
    `Nicht die alttestamentlichen Bann-Texte leugnen oder verharmlosen. Gestehe ihre Härte ein und erkläre sie.`,
    `Nicht mit Wortzählungen zurückschlagen („Der Koran hat aber mehr Gewaltverse"). Das Argument liegt in Reichweite und Richtung, nicht in Zahlen.`,
    `Nicht Jenkins als „Feind" darstellen. Er ist Christ und mahnt zu Recht zur Ehrlichkeit.`,
  ],
  concessions: [
    `Die Bibel enthält Texte, die nach heutigem Empfinden schockierend sind (Dtn 20; 1 Sam 15; Num 31; Ps 137).`,
    `Christen haben in der Geschichte alttestamentliche Kriegstexte missbraucht, etwa in Kreuzzugspredigten.`,
    `Der Koran kennt Begrenzungen der Kriegsführung, und das klassische Recht verbot die Tötung von Frauen und Kindern.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Paul Copan / Matthew Flannagan', work: 'Did God Really Command Genocide?', year: '2014', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Philip Jenkins', work: 'Laying Down the Sword', year: '2011', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Christopher J. H. Wright', work: 'The God I Don\'t Understand', year: '2008', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Nabeel Qureshi', work: 'Answering Jihad: A Better Way Forward', year: '2016', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Islam', 'Bibel', 'Gewalt', 'Altes Testament', 'Kanaan', 'Vergleich'],
  related: [
    'at-ethik/kanaaniter-voelkermord',
    'at-ethik/grausame-gesetze',
    'at-ethik/at-gott-monster',
    'islam-gewalt-scharia/schwertverse-kontext',
    'islam-hadith-sira/sira-vorbildlicher-charakter',
    'religion-gewalt/kreuzzuege',
    'islam-dilemma/das-islamische-dilemma',
  ],
};

export default claim;
