import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'alle-wege-zum-gipfel',
  title: `„Alle Wege führen zum selben Gipfel."`,
  proponents: [
    { name: 'Sri Ramakrishna', role: 'Bengalischer Mystiker (1836–1886)', work: 'The Gospel of Sri Ramakrishna (aufgezeichnet von Mahendranath Gupta) – „So viele Glaubensweisen, so viele Wege"' },
    { name: 'Swami Vivekananda', role: 'Schüler Ramakrishnas, Redner beim Weltparlament der Religionen 1893', work: 'Begrüßungsrede, Chicago, 11. September 1893' },
    { name: 'Mohandas K. Gandhi', role: 'Führer der indischen Unabhängigkeitsbewegung (1869–1948)', work: 'Hind Swaraj (1909), Kap. 10' },
    { name: 'Sarvepalli Radhakrishnan', role: 'Philosoph, indischer Staatspräsident', work: 'The Hindu View of Life (1927)' },
  ],
  steelman: `Schon der Rigveda sagt: „Das Seiende ist eines – die Weisen nennen es auf vielerlei Weise" (1,164,46). Ramakrishna hat dies nicht nur gelehrt, sondern erprobt: Er übte nacheinander verschiedene Formen der Hingabe, auch christliche und islamische, und erreichte jedes Mal dieselbe Gottverwirklichung. Daher sein Wort: „So viele Glaubensweisen, so viele Wege." Vivekananda zitierte 1893 in Chicago einen Hymnus: Wie verschiedene Ströme aus verschiedenen Quellen sich alle im Meer vereinen, so führen alle Wege der Menschen – krumm oder gerade – zu Gott. Wer behauptet, nur sein eigener Pfad führe auf den Gipfel, verwechselt seine Landkarte mit dem Berg. Die Geschichte zeigt, wohin solcher Exklusivismus führt: zu Religionskriegen. Die indische Weisheit dagegen ist gastfreundlich gegenüber allen Wegen.`,
  biblical: {
    summary: `Die Bibel bejaht, dass Gott „nicht ferne ist von einem jeglichen unter uns" und dass alle Völker ihn suchen sollen (Apg 17,26–27). Sie erkennt an, dass Menschen außerhalb Israels Gottes Gesetz im Gewissen tragen (Röm 2,14–15). Aber sie lehrt nicht viele Wege, sondern **einen Weg, der eine Person ist**: „Ich bin der Weg und die Wahrheit und das Leben" (Joh 14,6). Dieser Weg steht allen Völkern offen (Offb 7,9). Die Propheten haben das Hinken auf beiden Seiten ausdrücklich zurückgewiesen (1 Kön 18,21).`,
    detail: `- **Apg 17,22–31:** Paulus knüpft in Athen an den Altar des „unbekannten Gottes" und an griechische Dichter an – er würdigt die Suche, ruft aber dann zur Umkehr angesichts des Auferstandenen (17,30–31).
- **Joh 14,6 und Apg 4,12:** Nicht eine Lehre, sondern eine Person ist der Weg.
- **Mt 7,13–14:** Jesus selbst spricht von der engen Pforte – nicht aus Enge des Herzens, sondern als Warnung aus Liebe.
- **1 Kön 18,21:** Elia stellt Israel vor die Entscheidung zwischen dem HERRN und Baal – beides zugleich geht nicht.`,
    sources: [
      { kind: 'bibel', work: 'Johannes', ref: '14,6', quote: `Jesus spricht zu ihm: Ich bin der Weg und die Wahrheit und das Leben; niemand kommt zum Vater denn durch mich.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '17,26–27', quote: `…daß sie den Herrn suchen sollten, ob sie doch ihn fühlen und finden möchten; und fürwahr, er ist nicht ferne von einem jeglichen unter uns.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Könige', ref: '18,21', quote: `Wie lange hinket ihr auf beiden Seiten? Ist der HERR Gott, so wandelt ihm nach; ist's aber Baal, so wandelt ihm nach.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '4,12', quote: `Und ist in keinem andern Heil, ist auch kein anderer Name unter dem Himmel den Menschen gegeben, darin wir sollen selig werden.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die alexandrinische Tradition war nie engstirnig gegenüber fremder Weisheit: Clemens von Alexandrien sah in der griechischen Philosophie einen „Erzieher zu Christus", Justin sprach vom „Samen des Logos" in allen Völkern. Doch dieselben Väter unterschieden klar zwischen Wahrheitsfunken und der Fülle der Wahrheit in Christus. Schon im 2. Jahrhundert vertrat der Philosoph Kelsos einen antiken Pluralismus: Es sei gleichgültig, ob man den höchsten Gott Zeus, Adonai, Sabaoth oder Amun nenne. Origenes von Alexandrien widersprach: Die Namen sind nicht beliebig, denn sie tragen verschiedene Gottesvorstellungen und Erzählungen mit sich.`,
    sources: [
      { kind: 'kirchenvater', author: 'Origenes', work: 'Gegen Kelsos (Contra Celsum)', ref: 'V,41 (Kelsos-Zitat); I,24–25; V,45–46 (Antwort)', year: 'ca. 248', quote: `Kelsos: Es mache keinen Unterschied, ob man den Höchsten Zeus nenne oder Adonai oder Sabaoth oder wie die Ägypter Amun. – Origenes: Die Namen sind nicht gleichgültig, weil mit ihnen verschiedene Vorstellungen und Kulte verbunden sind.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Clemens von Alexandrien', work: 'Teppiche (Stromata)', ref: 'I,5,28', year: 'ca. 200', quote: `Die Philosophie war für die Griechen ein Erzieher zu Christus, wie das Gesetz für die Hebräer.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Zweite Apologie', ref: '13', year: 'ca. 155', quote: `Alles, was irgendwo von irgendwem richtig gesagt worden ist, gehört uns Christen; denn die Schriftsteller konnten durch den innewohnenden Samen des Logos die Wahrheit nur dunkel sehen.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Das Bild vom Berg setzt voraus, dass alle Wege zum selben Gipfel führen. Aber die Religionen beschreiben verschiedene Gipfel: das Verlöschen im Nirvana, die Identität mit Brahman, das Paradies als Diener Gottes, die ewige Liebesgemeinschaft mit dem dreieinigen Gott. Wer sagt, das sei alles dasselbe, behauptet, selbst schon auf dem Gipfel zu stehen und alle Wege zu überblicken. Jesus sagte nicht „Ich zeige einen Weg", sondern „Ich bin der Weg" – und dieser Weg steht allen Völkern offen.`,
  keyPoints: [
    `**Verschiedene Gipfel:** Nirvana, Moksha (Identität mit Brahman oder ewiger Dienst an Krishna), Dschanna und die Gemeinschaft mit dem dreieinigen Gott sind nicht vier Namen für dasselbe, sondern verschiedene Ziele.`,
    `**Wer hat den Gipfel gesehen?** Die Behauptung „alle Wege führen hinauf" beansprucht einen Überblick, den sie anderen abspricht.`,
    `**Auch Vedanta ordnet ein:** Vivekananda sah Dualismus und eingeschränkten Monismus als Stufen zum Advaita. Das ist nicht neutraler Pluralismus, sondern ein Inklusivismus mit Vedanta an der Spitze.`,
    `**Ramakrishnas Erfahrungen** wurden im Rahmen seiner eigenen Hindu-Mystik gedeutet; Taufe, Glaubensbekenntnis, Eucharistie – der christliche Weg – gehörten nicht dazu.`,
    `**Gita 4,11 meint Krishnas Weg:** „Alle folgen meinem Pfad" ist Krishna-zentriert, nicht neutral; Gita 18,66 ruft zur Zuflucht bei Krishna allein.`,
    `**Wahrheit in Liebe:** Wer glaubt, eine Brücke sei eingestürzt, warnt aus Liebe. Christen erkennen Wahres in anderen Religionen an (Justin), bezeugen aber Christus als den Weg.`,
  ],
  voices: [
    {
      person: 'origenes',
      role: 'als Apologet gegen den antiken Pluralisten Kelsos',
      text: `Kelsos, ein platonischer Philosoph des 2. Jahrhunderts, hielt die Namen der Götter für austauschbar: Zeus, Adonai, Sabaoth, Amun – alles derselbe Höchste. Origenes nimmt den Einwand ernst und antwortet, dass Namen nicht bloß Etiketten sind. Wer „Zeus" anruft, ruft den Gott der griechischen Mythen an, mit allem, was über ihn erzählt wird; wer den Gott Abrahams, Isaaks und Jakobs anruft, ruft den an, der sich in Israels Geschichte geoffenbart hat. Gleichgültigkeit gegenüber dem Namen ist in Wahrheit Gleichgültigkeit gegenüber der Wahrheit.`,
      sources: [
        { kind: 'kirchenvater', author: 'Origenes', work: 'Contra Celsum', ref: 'I,24–25; V,41–46', status: 'paraphrase', quote: `Die Namen Gottes sind nicht beliebig austauschbar.` },
      ],
    },
    {
      person: 'justin',
      role: 'als Philosoph, der viele Schulen prüfte',
      text: `Justin erzählt, wie er nacheinander bei Stoikern, Peripatetikern, Pythagoreern und Platonikern nach Gott suchte, bis ihn ein alter Mann auf die Propheten und auf Christus verwies. Er verachtet die Philosophen nicht – im Gegenteil: Er sieht in ihnen „Samen des Logos", Funken der Wahrheit, die von Christus, dem ganzen Logos, stammen. Aber gerade deshalb kann er nicht sagen, alle Schulen seien gleich gültig: Teilwahrheiten sind wertvoll, weil es die ganze Wahrheit gibt.`,
      sources: [
        { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Dialog mit Tryphon', ref: '2–8', status: 'paraphrase', quote: `Justins Weg durch die Philosophenschulen bis zur Begegnung mit den Propheten und Christus.` },
        { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Zweite Apologie', ref: '10; 13', status: 'paraphrase', quote: `Die Philosophen hatten Anteil am Logos „teilweise"; Christus ist der ganze Logos.` },
      ],
    },
    {
      person: 'paulus',
      role: 'als Apostel auf dem Areopag',
      text: `Paulus zeigt in Athen das Modell christlicher Begegnung mit anderen Religionen: Er beginnt mit Achtung („ich sehe, dass ihr sehr religiös seid"), knüpft an den Altar des unbekannten Gottes und an griechische Dichter an – und verkündet dann den Schöpfer, der „allen Menschen gebietet, Buße zu tun", weil er einen Tag des Gerichts gesetzt hat durch den Mann, den er von den Toten auferweckt hat (Apg 17,30–31). Würdigung und klare Verkündigung schließen sich nicht aus.`,
      sources: [
        { kind: 'bibel', work: 'Apostelgeschichte', ref: '17,30–31', quote: `Und zwar hat Gott die Zeit der Unwissenheit übersehen; nun aber gebietet er allen Menschen an allen Enden, Buße zu tun, darum daß er einen Tag gesetzt hat, auf welchen er richten will den Kreis des Erdbodens mit Gerechtigkeit durch einen Mann, in welchem er's beschlossen hat …`, translation: 'Luther 1912', status: 'verbatim' },
      ],
    },
    {
      person: 'chesterton',
      role: 'als scharfsinniger Beobachter der Religionen',
      text: `Chesterton widersprach der modischen Behauptung seiner Zeit, alle Religionen seien im Grunde gleich. Seine Beobachtung war das genaue Gegenteil: Die Religionen ähneln sich oft in Äußerlichkeiten – Priester, Gebete, Riten, heilige Gewänder –, aber sie unterscheiden sich gewaltig in dem, was sie lehren. Wer nur die Formen sieht, hält sie für gleich; wer die Inhalte prüft, erkennt die Unterschiede.`,
      sources: [
        { kind: 'fachliteratur', author: 'G. K. Chesterton', work: 'Orthodoxy', ref: 'Kap. 8', year: '1908', status: 'paraphrase', quote: `Die Religionen der Erde unterscheiden sich nicht sehr in Riten und Formen, wohl aber gewaltig in dem, was sie lehren.` },
      ],
    },
    {
      person: 'mangalwadi',
      role: 'als indischer Denker aus hinduistischem Umfeld',
      text: `Vishal Mangalwadi kennt die Guru-Szene Indiens aus eigener Anschauung. Er weist darauf hin, dass der Satz „alle Wege führen zu Gott" in Indien selbst meist eine bestimmte Weltanschauung transportiert: die monistische Sicht, nach der am Ende alle Unterschiede in Brahman aufgehen. Das ist keine neutrale Toleranz, sondern eine Lehre, die man prüfen muss wie jede andere.`,
      sources: [
        { kind: 'fachliteratur', author: 'Vishal Mangalwadi', work: 'The World of Gurus', year: '1977', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'ekam-sat',
      objection: `„Das Seiende ist eines, die Weisen nennen es vielfach" (Rigveda 1,164,46). Christus, Krishna, Allah – alles Namen für dasselbe Eine.`,
      objectionBy: 'Swami Vivekananda',
      answer: `Dass es nur einen Gott gibt, glauben Christen auch. Die Frage ist, ob alle Beschreibungen dieses Einen richtig sind. Namen sind keine bloßen Etiketten; mit ihnen kommen Aussagen: persönlich oder unpersönlich, menschgeworden oder nicht, gekreuzigt oder nicht. Schon im 2. Jahrhundert sagte der Philosoph Kelsos, es sei gleich, ob man Gott Zeus, Adonai oder Amun nenne – und Origenes antwortete: Die Namen tragen verschiedene Gottesbilder.`,
      sources: [
        { kind: 'oestlich', work: 'Rigveda', ref: '1,164,46', original: 'ekaṃ sad viprā bahudhā vadanti', quote: `Das Seiende ist eines – die Weisen nennen es auf vielerlei Weise (Indra, Mitra, Varuna, Agni …).`, translation: 'eigene Übersetzung', status: 'verbatim', note: 'Im Zusammenhang geht es um vedische Götter als Namen des einen Seienden.' },
      ],
      followUps: [
        {
          id: 'beschreibungen-begrenzt',
          objection: `Alle Beschreibungen sind menschliche Begrenzungen. Gott ist jenseits davon – darum sind alle gleich nah und gleich fern.`,
          objectionBy: 'Swami Sarvapriyananda (sinngemäß)',
          answer: `Dann beschreibt auch kein Weg den Gipfel wahr – auch der Vedanta nicht. Woher weißt du dann, dass alle zu ihm führen? „Alle Wege führen zu Gott" ist selbst eine Beschreibung Gottes, und zwar eine sehr bestimmte. Wenn Gott jenseits aller Aussagen ist, kann man auch diese nicht machen.`,
          followUps: [
            {
              id: 'ramakrishna-erprobt',
              objection: `Aber Ramakrishna hat es erfahren: Er übte Christentum und Islam und erreichte jedes Mal dieselbe Gottverwirklichung.`,
              objectionBy: 'Swami Vivekananda (über Ramakrishna)',
              answer: `Ramakrishnas Erlebnisse – etwa eine Vision Christi, der in ihn einging – wurden in seinem eigenen Rahmen als Hindu-Mystiker gedeutet. Er wurde nicht getauft, bekannte nicht das Glaubensbekenntnis, empfing nicht die Eucharistie und gehörte keiner Kirche an. Er hat also nicht den christlichen Weg gelebt, sondern christliche Bilder in seine Mystik aufgenommen. Und eine Erfahrung allein kann nicht entscheiden, was sie bedeutet.`,
              questionsBack: [
                `Hätte Ramakrishna auch eine Erfahrung gelten lassen, nach der Christus der einzige Herr ist?`,
                `Wer entscheidet, dass die Erfahrungen „dieselben" waren – die Erfahrung selbst oder Ramakrishnas Deutung?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'berg-gleichnis',
      objection: `Viele Wege führen auf denselben Berggipfel. Es ist engstirnig zu behaupten, nur ein einziger Pfad führe hinauf.`,
      objectionBy: 'Mohandas K. Gandhi (Hind Swaraj)',
      answer: `Das Bild setzt voraus, was es beweisen soll: dass es nur einen Gipfel gibt. Die Religionen beschreiben aber verschiedene Ziele: das Verlöschen im Nirvana, die Identität mit Brahman, das Paradies als Diener Gottes, die ewige Gemeinschaft der Liebe mit dem dreieinigen Gott in auferstandenen Leibern. Und wer behauptet, alle Wege führten zum selben Gipfel, muss selbst schon oben stehen und alle überblicken – genau das Wissen, das er anderen abspricht.`,
      sources: [
        { kind: 'gegner', author: 'Mohandas K. Gandhi', work: 'Hind Swaraj or Indian Home Rule', ref: 'Kap. 10', year: '1909', original: 'Religions are different roads converging to the same point. What does it matter that we take different roads, so long as we reach the same goal?', quote: `Die Religionen sind verschiedene Straßen, die zum selben Punkt führen. Was macht es, dass wir verschiedene Straßen gehen, solange wir dasselbe Ziel erreichen?`, status: 'verbatim', translation: 'eigene Übersetzung', url: 'https://www.mkgandhi.org/hindswaraj/chap10_hindumahomedans.htm', note: 'Geprüft 2026: Kap. X („The Condition of India (cont.): The Hindus and the Mahomedans") bestätigt; der zweite Satz ist im Kapiteltext auf mkgandhi.org belegt, der erste wird übereinstimmend aus demselben Abschnitt zitiert. Zusammenhang: Gandhi wirbt für Eintracht zwischen Hindus und Muslimen.' },
        { kind: 'fachliteratur', author: 'S. Mark Heim', work: 'Salvations: Truth and Difference in Religion', year: '1995', status: 'paraphrase', quote: `Die Religionen verfolgen tatsächlich verschiedene religiöse Ziele („Heile" im Plural).` },
      ],
      followUps: [
        {
          id: 'nur-worte-kern-liebe',
          objection: `Die Unterschiede sind nur Worte. Im Kern geht es allen um Liebe und um die Befreiung vom Ego.`,
          objectionBy: 'Sarvepalli Radhakrishnan (Linie)',
          answer: `Die ethischen Gemeinsamkeiten sind echt, und ich freue mich darüber. Aber „Befreiung vom Ego" bedeutet im Buddhismus das Erlöschen der Illusion eines Selbst, im Advaita das Aufgehen in Brahman, im Christentum die Verwandlung der Person in der Liebe Christi. Und der Kern des Christentums ist keine Technik gegen das Ego, sondern eine Person, die gestorben und auferstanden ist. Nimm das weg, und es ist kein Christentum mehr.`,
          followUps: [
            {
              id: 'auferstehung-nebensache',
              objection: `Ob Jesus wirklich auferstanden ist, ist doch nebensächlich. Was zählt, ist die Liebe, die er lehrte.`,
              objectionBy: 'Sarvepalli Radhakrishnan (Linie)',
              answer: `Paulus sah das anders: „Ist aber Christus nicht auferstanden, so ist euer Glaube eitel" (1 Kor 15,17). Das Christentum steht und fällt mit einem geschichtlichen Ereignis – es lässt sich nicht auf eine allgemeine Liebesethik verkürzen. Wer Religionen respektieren will, muss ihr Selbstverständnis respektieren; und das Selbstverständnis des Christentums ist die Auferstehung.`,
            },
          ],
        },
        {
          id: 'gott-zu-gross-ein-weg',
          objection: `Gott ist doch viel zu groß, um sich auf einen einzigen Weg festzulegen.`,
          objectionBy: 'Deepak Chopra (sinngemäß)',
          answer: `Gott ist groß genug, einen Weg zu schaffen, der allen offensteht. Christus ist kein kultureller Sonderweg: Das Evangelium kam früh nach Ägypten, Äthiopien, Syrien, Armenien und nach indischer Überlieferung durch den Apostel Thomas nach Indien. Heute ist das Christentum die am weitesten über Kulturen und Kontinente verbreitete Religion. Die „Enge" betrifft die Person, nicht die Kultur – die Tür steht jedem offen (Joh 10,9; Offb 7,9).`,
        },
      ],
    },
    {
      id: 'hindu-toleranz',
      objection: `Der Hinduismus ist tolerant; der exklusive Monotheismus hat zu Intoleranz und Religionskriegen geführt.`,
      objectionBy: 'Sarvepalli Radhakrishnan',
      answer: `Die Gastfreundschaft vieler Hindus ist bewundernswert. Aber Toleranz setzt echte Unterschiede voraus – man toleriert, was man für falsch hält; wer alles für gleich hält, braucht keine Toleranz. Gewalt gibt es in der Geschichte aller Traditionen, auch in Indien. Und die Frage, was wahr ist, wird nicht durch das Verhalten der Anhänger entschieden. Christus gebietet Feindesliebe (Mt 5,44) – die koptische Kirche hat das in 1400 Jahren unter oft schwerer Bedrängnis vorgelebt.`,
      detail: `Ein bewegendes Beispiel: Nach der Ermordung von 21 christlichen Arbeitern (20 Kopten und ein Ghanaer) durch den IS in Libyen im Februar 2015 sprachen Angehörige öffentlich Worte der Vergebung für die Mörder. Das ist nicht Schwäche, sondern Treue zu Christus, der am Kreuz für seine Henker betete (Lk 23,34).`,
      followUps: [
        {
          id: 'sag-doch-alle-gut',
          objection: `Dann sag doch einfach, dass alle Wege gut sind. Das wäre wahre Liebe und würde Frieden stiften.`,
          objectionBy: 'Swami Vivekananda (Linie)',
          answer: `Liebe sagt die Wahrheit. Wenn ich glaube, dass eine Brücke eingestürzt ist, wäre es lieblos, dich nicht zu warnen – Schweigen wäre Gleichgültigkeit. Frieden entsteht nicht dadurch, dass wir so tun, als gäbe es keine Unterschiede, sondern dadurch, dass wir einander trotz der Unterschiede achten. Die Bibel nennt das: „wahrhaftig sein in der Liebe" (Eph 4,15).`,
        },
      ],
    },
    {
      id: 'gita-4-11',
      objection: `Krishna sagt in der Gita: „Wie die Menschen sich mir nähern, so nehme ich sie an; alle folgen meinem Weg" (4,11). Das ist doch die vollkommene Offenheit.`,
      objectionBy: 'Swami Vivekananda',
      answer: `Lies genau: Krishna sagt, dass alle letztlich **seinem** Weg folgen, und in Gita 18,66 ruft er dazu auf, bei **ihm allein** Zuflucht zu nehmen. Das ist kein neutraler Pluralismus, sondern ein Krishna-zentrierter Inklusivismus – so wie Christen glauben, dass jeder, der gerettet wird, durch Christus gerettet wird. Jeder hat eine Mitte.`,
      sources: [
        { kind: 'oestlich', work: 'Bhagavad Gita', ref: '4,11', original: 'ye yathā māṃ prapadyante tāṃs tathaiva bhajāmy aham / mama vartmānuvartante manuṣyāḥ pārtha sarvaśaḥ', quote: `Wie die Menschen zu mir kommen, so nehme ich sie an; meinem Pfad folgen die Menschen in jeder Hinsicht, o Partha.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'jeder-hat-seine-mitte',
          objection: `Genau – dann sind wir uns ja einig: Jeder hat seine Mitte, und das ist in Ordnung.`,
          objectionBy: 'Sarvepalli Radhakrishnan (sinngemäß)',
          answer: `Dann lautet die ehrliche Frage: Welche Mitte ist wahr? Das lässt sich prüfen – an der Geschichtlichkeit, an der Auferstehung, an der inneren Stimmigkeit der Lehre. Ich lade dich ein: Lies das Markusevangelium und frag dich, wer dieser Jesus ist. Ich bin bereit, die Gita mit dir zu lesen.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Woher weißt du, dass alle Wege zum selben Gipfel führen – hast du ihn schon gesehen?`,
    `Ist das Nirvana des Buddhismus dasselbe wie die ewige Gemeinschaft mit Gott im Christentum?`,
    `Wenn Vivekananda Advaita als Gipfel aller Wege sah – ist das nicht auch ein Exklusivitätsanspruch?`,
    `Was würde Jesus selbst zu dem Satz sagen, er sei ein Weg unter vielen?`,
  ],
  avoid: [
    `Unterstelle Hindus nicht, ihre Toleranz sei geheuchelt – viele leben sie aufrichtig.`,
    `Behaupte nicht, alle anderen Religionen seien „vom Teufel" – die Väter (Justin, Clemens) sahen auch Wahrheitsfunken in fremder Weisheit.`,
    `Sage nicht „Jesus ist der einzige Weg, Punkt" ohne Begründung – erkläre, warum der Anspruch von Jesus selbst kommt und warum er allen offensteht.`,
  ],
  concessions: [
    `Christen haben sich in der Geschichte nicht immer tolerant verhalten; Gewalt im Namen Christi widerspricht seinem Gebot.`,
    `Es gibt echte ethische und spirituelle Gemeinsamkeiten zwischen den Religionen, die man ehrlich würdigen sollte.`,
  ],
  furtherReading: [
    { kind: 'kirchenvater', author: 'Origenes', work: 'Gegen Kelsos', year: 'ca. 248', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'S. Mark Heim', work: 'Salvations: Truth and Difference in Religion', year: '1995', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Harold A. Netland', work: 'Encountering Religious Pluralism', year: '2001', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Pluralismus', 'Ramakrishna', 'Vivekananda', 'Gandhi', 'Toleranz'],
  related: [
    'pluralismus/alle-religionen-gleich-wahr',
    'pluralismus/arrogant-nur-jesus',
    'hinduismus/atman-ist-brahman',
    'hinduismus/jesus-war-avatar',
    'islam-mohammed/derselbe-gott',
    'religion-gewalt/religion-verursacht-kriege',
  ],
};

export default claim;
