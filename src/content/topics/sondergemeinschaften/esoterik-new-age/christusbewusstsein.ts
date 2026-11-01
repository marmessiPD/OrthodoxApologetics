import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'christusbewusstsein',
  title: `„Jesus war ein erleuchteter Meister – jeder kann das Christusbewusstsein erlangen."`,
  proponents: [
    { name: 'Deepak Chopra', role: 'Arzt und Autor, Vertreter einer „ganzheitlichen" Spiritualität', work: 'The Third Jesus: The Christ We Cannot Ignore (2008)' },
    { name: 'Eckhart Tolle', role: 'Spiritueller Lehrer', work: 'The Power of Now (1997; dt. Jetzt!); A New Earth (2005)' },
    { name: 'Rudolf Steiner', role: 'Begründer der Anthroposophie (1861–1925)', work: 'Das Lukas-Evangelium (GA 114, 1909); Das fünfte Evangelium (GA 148); Lehre vom kosmischen Christus als „Sonnenwesen"' },
    { name: 'Helena P. Blavatsky / Alice A. Bailey', role: 'Theosophie (1831–1891) / Arkanschule (1880–1949)', work: 'The Secret Doctrine (1888); The Reappearance of the Christ (1948)' },
    { name: 'Helen Schucman', role: 'Psychologin, Niederschrift von „A Course in Miracles"', work: 'A Course in Miracles (1976; dt. Ein Kurs in Wundern)' },
  ],
  steelman: `„Christus" ist kein Nachname, sondern ein Titel: der Gesalbte, der Erleuchtete. Jesus von Nazareth war ein Mensch, der diesen Zustand vollkommen verwirklicht hat – das Einssein mit dem Göttlichen. Er sagte: „Das Reich Gottes ist inwendig in euch" (Lk 17,21), „Ihr seid Götter" (Joh 10,34), „Wer an mich glaubt, wird die Werke auch tun, die ich tue, und wird größere als diese tun" (Joh 14,12), und er betete, dass alle eins seien, „wie du, Vater, in mir und ich in dir" (Joh 17,21). Im Thomasevangelium sagt er: „Wer von meinem Mund trinkt, wird werden wie ich" (Logion 108). Mystiker aller Religionen – von Meister Eckhart bis zu den indischen Weisen – sprechen von der Geburt Gottes in der Seele. Rudolf Steiner lehrte, das kosmische Christuswesen habe sich bei der Jordantaufe mit dem Menschen Jesus verbunden und wirke seither als „Christus-Impuls" in der Menschheit. Die Kirche hat aus dem Wegweiser ein Idol gemacht: Statt Jesus nachzufolgen und sein Bewusstsein zu erlangen, betet sie ihn an. Deepak Chopra nennt das den „dritten Jesus" – weder der historische noch der kirchliche, sondern der Lehrer der Gottverwirklichung.`,
  biblical: {
    summary: `„Christus" (*Christos*, hebr. *Maschiach*) ist kein Bewusstseinszustand, sondern der Titel **einer bestimmten Person**: des verheißenen Messias Israels. „Du bist Christus, des lebendigen Gottes Sohn" (Mt 16,16); „Wer ist ein Lügner, wenn nicht, der da leugnet, dass **Jesus** der Christus sei? Das ist der Widerchrist" (1 Joh 2,22). Die Trennung von „Jesus" und „Christus" weist das Neue Testament ausdrücklich zurück: „Ein jeglicher Geist, der da bekennt, dass Jesus Christus ist in das Fleisch gekommen, der ist von Gott" (1 Joh 4,2). Jesus warnte: „Es werden viele kommen unter meinem Namen und sagen: Ich bin Christus" (Mt 24,5) und „Wenn jemand zu euch sagen wird: Siehe, hier ist Christus! … so sollt ihr's nicht glauben" (Mt 24,23).`,
    detail: `**Lk 17,21:** Jesus spricht zu Pharisäern, die ihn ablehnen – das Reich ist kaum „in" ihnen. *Entos hymōn* heißt hier „mitten unter euch": Das Reich ist in Jesu Person gegenwärtig. Gleich danach spricht er vom sichtbaren Kommen des Menschensohnes (17,22–37).

**Joh 14,12:** Die „größeren Werke" geschehen, „denn ich gehe zum Vater", und durch Gebet „in meinem Namen" (14,13–14) – sie hängen völlig von ihm ab und bezeichnen die weltweite Ausbreitung des Evangeliums, nicht Selbstvergottung.

**Joh 17,21:** Die Einheit der Jünger ist eine Gemeinschaft der Liebe durch Gnade („ich in ihnen", 17,23), keine Identität mit Gott. Jesus betet **zum** Vater – und er hatte die Herrlichkeit beim Vater, „ehe die Welt war" (17,5), was von keinem Jünger gesagt wird.

**Einzigartigkeit:** „Ich bin der Weg und die Wahrheit und das Leben; niemand kommt zum Vater denn durch mich" (Joh 14,6); „Wenn ihr nicht glaubt, dass ich es bin, so werdet ihr sterben in euren Sünden" (Joh 8,24). Ein Meister, der den Weg zeigt, ist etwas anderes als einer, der sagt, er **sei** der Weg.`,
    sources: [
      { kind: 'bibel', work: '1. Johannes', ref: '2,22', quote: `Wer ist ein Lügner, wenn nicht, der da leugnet, daß Jesus der Christus sei? Das ist der Widerchrist, der den Vater und den Sohn leugnet.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Johannes', ref: '4,2', quote: `Daran sollt ihr den Geist Gottes erkennen: ein jeglicher Geist, der da bekennt, daß Jesus Christus ist in das Fleisch gekommen, der ist von Gott.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '24,5', quote: `Denn es werden viele kommen unter meinem Namen und sagen: „Ich bin Christus" und werden viele verführen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '16,16', quote: `Da antwortete Simon Petrus und sprach: Du bist Christus, des lebendigen Gottes Sohn!`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '14,6', quote: `Jesus spricht zu ihm: Ich bin der Weg und die Wahrheit und das Leben; niemand kommt zum Vater denn durch mich.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '17,20–21', quote: `Da er aber gefragt ward von den Pharisäern: Wann kommt das Reich Gottes? antwortete er ihnen und sprach: … Denn sehet, das Reich Gottes ist inwendig in euch.`, original: `ἡ βασιλεία τοῦ θεοῦ ἐντὸς ὑμῶν ἐστιν`, translation: 'Luther 1912', status: 'verbatim', note: 'Moderne Übersetzungen: „mitten unter euch".' },
    ],
  },
  church: {
    summary: `Die Trennung zwischen dem Menschen Jesus und einem himmlischen „Christus", der bei der Taufe auf ihn herabkam, ist uralt: Irenäus beschreibt um 180 den Lehrer **Kerinth**, der genau das lehrte – der Christus sei in Gestalt einer Taube auf Jesus herabgekommen und vor der Passion wieder von ihm gewichen. Irenäus antwortet: Es gibt nur **einen und denselben** Jesus Christus, den Sohn Gottes, der Mensch wurde, litt und auferstand. Rudolf Steiners Lehre vom Christuswesen, das sich bei der Jordantaufe mit Jesus verband, ist eine moderne Wiederkehr dieser Vorstellung. Der hl. Kyrill von Alexandrien verteidigte gegen Nestorius dieselbe Einheit: Der Sohn Gottes und der Sohn Marias sind ein und derselbe. Die koptische Kirche bekennt am Ende jeder Liturgie, dass der Eingeborene seine Menschheit mit seiner Gottheit geeint hat „ohne Vermischung, ohne Vermengung und ohne Verwandlung" und dass seine Gottheit sich „nicht einen Augenblick" von seiner Menschheit getrennt hat.`,
    detail: `**Vereinigung mit Gott ja – aber als Gnade:** Die orthodoxe Kirche kennt die Sehnsucht nach Einheit mit Gott sehr wohl (Theosis). Doch sie geschieht durch Christus, im Heiligen Geist, in den Sakramenten und im Leben der Buße – als Geschenk an ein Geschöpf, nicht als Entdeckung der eigenen Göttlichkeit. Das koptische Mönchtum hat das Herzensgebet gepflegt: „Herr Jesus Christus, erbarme dich meiner" – ein Gebet der Demut an eine Person, keine Technik zur Bewusstseinserweiterung.`,
    sources: [
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien', ref: 'I,26,1', quote: `Kerinth lehrte, nach der Taufe sei der Christus in Gestalt einer Taube auf Jesus herabgekommen und vor dem Leiden wieder von ihm gewichen.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien', ref: 'III,16,1–8', quote: `Es ist ein und derselbe Jesus Christus, der Sohn Gottes, der Mensch geworden ist und gelitten hat.`, status: 'paraphrase' },
      { kind: 'liturgie', work: 'Koptische Liturgie, Bekenntnis vor der Kommunion', quote: `Er hat sie (die Menschheit) mit seiner Gottheit geeint ohne Vermischung, ohne Vermengung und ohne Verwandlung … seine Gottheit hat sich nicht einen Augenblick von seiner Menschheit getrennt.`, translation: 'sinngemäß', status: 'paraphrase' },
    ],
  },
  quickAnswer: `„Christus" heißt „Messias" – der Titel einer bestimmten Person, nicht ein Bewusstseinszustand. Das Neue Testament nennt es ausdrücklich die Lüge des Antichrists, Jesus und den Christus zu trennen (1 Joh 2,22). Und Jesus sagte nicht: „Ich zeige euch den Weg", sondern: „Ich **bin** der Weg" (Joh 14,6) – darum beteten ihn schon die ersten jüdischen Christen an.`,
  keyPoints: [
    `**Christus = Messias:** Titel einer Person (Mt 16,16), nicht eines Zustands.`,
    `**Keine Trennung von Jesus und Christus:** 1 Joh 2,22; 4,2; 5,6.`,
    `**Kerinth redivivus:** Die Lehre vom Christus, der bei der Taufe kam und vor dem Kreuz ging, hat Irenäus schon um 180 widerlegt.`,
    `**Lk 17,21:** „mitten unter euch" – gesagt zu Pharisäern; das Reich ist in Jesu Person da.`,
    `**Einzigartiger Anspruch:** Joh 8,24; 14,6 – kein Meister unter vielen.`,
    `**Frühe Anbetung:** Phil 2,6–11; Mt 28,9.17; Joh 20,28 – Jesus nahm Anbetung an.`,
  ],
  voices: [
    {
      person: 'irenaeus',
      role: 'als Widerleger Kerinths',
      text: `Irenäus setzt sich mit Lehrern auseinander, die zwischen dem irdischen Jesus und einem höheren Christus unterschieden. Er zeigt an den Evangelien und an Paulus: Johannes sagt nicht, das Wort sei auf einen Menschen herabgekommen, sondern „das Wort ward Fleisch". Wer Jesus und Christus trennt, zerreißt den Erlöser – und verliert die Erlösung, denn nur wenn derselbe, der Gott ist, wirklich gelitten hat und auferstanden ist, ist unser Fleisch geheilt.`,
      sources: [{ kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien', ref: 'III,16–18', quote: `Einheit Jesu Christi gegen die Trennung von Jesus und Christus.`, status: 'paraphrase' }],
    },
    {
      person: 'kyrill-alexandrien',
      role: 'als Lehrer der Einheit Christi',
      text: `Kyrill kämpfte gegen jede Christologie, die zwei Subjekte in Christus annimmt – einen Menschen Jesus und einen göttlichen Logos, der in ihm wohnt wie in einem Tempel. Für ihn ist der Sohn Marias derselbe wie der ewige Sohn Gottes: „eine fleischgewordene Natur des Gott-Logos". Eine New-Age-Lehre, die den Menschen Jesus zum Gefäß eines kosmischen Christusprinzips macht, wiederholt die Spaltung, die Kyrill und das Konzil von Ephesus (431) verworfen haben – nur noch radikaler.`,
      sources: [{ kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Zweiter und Dritter Brief an Nestorius; Zwölf Anathematismen', year: '430', quote: `Ein und derselbe ist der Sohn Gottes und der Sohn Marias.`, status: 'paraphrase' }],
    },
    {
      person: 'sundar-singh',
      role: 'als Suchender, der vom Bewusstseinsweg zu Christus fand',
      text: `Sadhu Sundar Singh wuchs in einer Sikh-Familie in Nordindien auf, suchte in Hindu- und Sikh-Frömmigkeit, Meditation und Askese den inneren Frieden und fand ihn nicht. Nach seinem eigenen Bericht begegnete ihm 1904 Christus in einer Vision als lebendige Person. Er wurde ein christlicher Wanderprediger in Indien und Tibet. Sein Zeugnis unterscheidet scharf zwischen dem Versuch, durch eigene Übung das Göttliche in sich zu finden, und der Begegnung mit dem lebendigen Christus, der sich schenkt.`,
      sources: [{ kind: 'fachliteratur', author: 'Sadhu Sundar Singh', work: 'At the Master\'s Feet (1922); With and Without Christ (1929)', quote: `Zeugnis von der Begegnung mit dem persönlichen Christus nach vergeblicher Suche in anderen Wegen.`, status: 'paraphrase' }],
    },
    {
      person: 'cs-lewis',
      role: 'als Denker über den Anspruch Jesu',
      text: `Lewis hielt es für unmöglich, Jesus als „großen Morallehrer" zu verehren und zugleich seinen Anspruch abzulehnen, Gott zu sein. Ein Mensch, der sagt, was Jesus sagte, wäre entweder ein Wahnsinniger oder etwas Schlimmeres – oder er ist, was er sagt. Die freundliche Mitte, Jesus sei einer von vielen erleuchteten Meistern, hat Jesus uns nicht offengelassen.`,
      sources: [{ kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Mere Christianity (dt. Pardon, ich bin Christ)', ref: 'Buch II, Kap. 3', year: '1952', quote: `Das Trilemma: Jesus ist entweder wahnsinnig, ein Lügner – oder der Herr.`, status: 'paraphrase' }],
    },
    {
      person: 'mangalwadi',
      role: 'als indischer Kenner von Guru-Bewegungen und New Age',
      text: `Mangalwadi hat in Indien die Welt der Gurus aus nächster Nähe untersucht und später die Übertragung indischer Spiritualität in den westlichen New Age analysiert. Er weist darauf hin, dass der Westen oft eine weichgezeichnete Version östlicher Lehren übernimmt, ohne die Folgen zu sehen, die Indien selbst erlebt hat: Wenn alles göttlich ist und das Ich nur Illusion, verliert die einzelne Person ihre Würde und das Böse seine Wirklichkeit. Er sieht im persönlichen Gott der Bibel die Grundlage für Menschenwürde und Hoffnung.`,
      sources: [
        { kind: 'fachliteratur', author: 'Vishal Mangalwadi', work: 'The World of Gurus', year: '1977', quote: `Analyse indischer Guru-Bewegungen.`, status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Vishal Mangalwadi', work: 'When the New Age Gets Old: Looking for a Greater Spirituality', year: '1992', quote: `Kritische Analyse der New-Age-Spiritualität aus indischer Perspektive.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'christus-titel-zustand',
      objection: `„Christus" ist kein Nachname, sondern ein Bewusstseinszustand. Jesus hat ihn erreicht – Buddha und andere auch. Jeder kann das Christusbewusstsein erlangen.`,
      objectionBy: 'Deepak Chopra / Eckhart Tolle',
      answer: `Richtig, „Christus" ist kein Nachname – es ist ein Titel: „der Gesalbte", der Messias, den Israel erwartete. Er bezeichnet ein Amt einer bestimmten Person, nicht einen Zustand. Darum sagt Petrus: „Du bist der Christus" (Mt 16,16), und Johannes nennt es die Lüge des Antichrists, zu leugnen, dass **Jesus** der Christus ist (1 Joh 2,22).`,
      followUps: [
        {
          id: 'reich-gottes-inwendig',
          objection: `Jesus hat doch gesagt: „Das Reich Gottes ist inwendig in euch" (Lk 17,21). Also liegt das Göttliche in uns.`,
          objectionBy: 'New-Age-Autoren',
          answer: `Zu wem sagte er das? Zu Pharisäern, die ihn ablehnten (17,20). Das Reich war kaum „in" ihnen. *Entos hymōn* heißt hier „mitten unter euch": Das Reich steht in Jesus selbst vor ihnen. Gleich danach spricht er vom sichtbaren Kommen des Menschensohnes wie ein Blitz (17,24).`,
          followUps: [
            {
              id: 'groessere-werke',
              objection: `Joh 14,12: „Ihr werdet noch größere Werke tun als ich." Also können wir werden wie er.`,
              objectionBy: 'Esoterische Autoren',
              answer: `Lies den Satz zu Ende: „… denn ich gehe zum Vater. Und was ihr bitten werdet in meinem Namen, das will ich tun" (14,12–13). Die größeren Werke geschehen durch ihn, auf Gebet in seinem Namen – und gemeint ist die Ausbreitung des Evangeliums in alle Welt. Das ist Abhängigkeit, nicht Selbstverwirklichung.`,
              followUps: [
                {
                  id: 'kirche-machte-idol',
                  objection: `Die Kirche hat aus dem Lehrer ein Idol gemacht. Jesus wollte Nachfolger, keine Anbeter.`,
                  objectionBy: 'Deepak Chopra',
                  answer: `Die frühesten Christen waren Juden, die niemals einen Menschen angebetet hätten – und sie beteten Jesus an, schon in den ersten Jahrzehnten (Phil 2,6–11). Jesus selbst nahm Anbetung an (Mt 14,33; 28,9.17; Joh 9,38) und lobte Thomas, als dieser ihn „mein Herr und mein Gott" nannte (Joh 20,28). Die Anbetung ist nicht spätere Kirchenerfindung, sondern der Ursprung.`,
                  questionsBack: [`Warum beteten fromme Juden wie Petrus und Johannes Jesus an, wenn er nur ein erleuchteter Lehrer war?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'steiner-sonnenwesen',
      objection: `Rudolf Steiner hat gezeigt: Der kosmische Christus, ein hohes Sonnenwesen, verband sich bei der Jordantaufe mit dem Menschen Jesus von Nazareth.`,
      objectionBy: 'Anthroposophen',
      answer: `Diese Vorstellung ist nicht neu: Schon um 100 lehrte Kerinth, der Christus sei bei der Taufe auf Jesus herabgekommen und vor dem Kreuz wieder gewichen. Irenäus hat das widerlegt, und der erste Johannesbrief wendet sich dagegen: Christus kam „nicht mit Wasser allein, sondern mit Wasser und Blut" (1 Joh 5,6) – er ist bei der Taufe **und** am Kreuz derselbe. Und Steiners Quelle ist nach eigener Aussage übersinnliche Schau, die niemand überprüfen kann.`,
      sources: [{ kind: 'bibel', work: '1. Johannes', ref: '5,6', quote: `Dieser ist's, der da kommt mit Wasser und Blut, Jesus Christus; nicht mit Wasser allein, sondern mit Wasser und Blut.`, translation: 'Luther 1912', status: 'verbatim' }],
      followUps: [
        {
          id: 'anthroposophie-funktioniert',
          objection: `Anthroposophie ist „Geisteswissenschaft". Waldorfschulen, Demeter-Landbau und Weleda funktionieren doch – das zeigt, dass Steiner etwas wusste.`,
          objectionBy: 'Anthroposophen',
          answer: `Manche dieser Praxisfelder haben Menschen angesprochen, und viele Waldorfeltern schätzen die Pädagogik – das gestehe ich zu. Aber praktischer Erfolg belegt nicht die übersinnlichen Behauptungen über Atlantis, Sonnenwesen oder zwei Jesusknaben. Steiner beanspruchte für seine Schau Gewissheit, ohne dass andere sie überprüfen könnten – das ist keine Wissenschaft im üblichen Sinn.`,
          detail: `Steiner lehrte unter anderem, es habe zwei Jesusknaben gegeben (einen „nathanischen" nach Lukas und einen „salomonischen" nach Matthäus), deren Wesen sich vereinigt hätten. Der Historiker Helmut Zander hat die Entstehung der Anthroposophie aus der Theosophie ausführlich dokumentiert.`,
          sources: [
            { kind: 'gegner', author: 'Rudolf Steiner', work: 'Das Lukas-Evangelium (GA 114)', year: '1909', quote: `Lehre von den zwei Jesusknaben und dem Christuswesen, das sich bei der Taufe mit Jesus verbindet.`, status: 'paraphrase' },
            { kind: 'fachliteratur', author: 'Helmut Zander', work: 'Anthroposophie in Deutschland: Theosophische Weltanschauung und gesellschaftliche Praxis 1884–1945', year: '2007', quote: `Historische Untersuchung der Entstehung der Anthroposophie aus der Theosophie.`, status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'christengemeinschaft',
              objection: `Die Christengemeinschaft feiert Sakramente und spricht von Christus – sie ist doch christlich.`,
              objectionBy: 'Mitglieder der Christengemeinschaft',
              answer: `Ich respektiere die Ernsthaftigkeit ihrer Mitglieder. Aber die Christengemeinschaft wurde 1922 mit Steiners Hilfe gegründet, und ihre Christologie beruht auf seiner Lehre vom kosmischen Christuswesen. Der Prüfstein des Johannesbriefs bleibt: Bekennt sie, dass Jesus selbst – der Sohn Marias – der ewige Sohn Gottes ist, der Fleisch wurde (1 Joh 4,2)?`,
            },
          ],
        },
      ],
    },
    {
      id: 'alle-meister-gleich',
      objection: `Jesus, Buddha, Krishna – alle waren erleuchtete Meister, die im Kern dasselbe lehrten: die Einheit mit dem Göttlichen.`,
      objectionBy: 'Theosophie / New-Age-Autoren',
      answer: `Ihre Lehren widersprechen sich in Kernfragen: Buddha lehrte weder einen Schöpfergott noch ein bleibendes Selbst; Krishna in der Gita lehrt Karma, Wiedergeburt und göttliche Avatare in vielen Zeitaltern; Jesus lehrt einen persönlichen Schöpfer, Sünde, Vergebung durch sein Kreuz und die leibliche Auferstehung. Wer sie „im Kern gleich" macht, muss die Kerne wegschneiden.`,
      followUps: [
        {
          id: 'tolle-ego',
          objection: `Eckhart Tolle sagt: Es geht nur um das Jetzt und die Auflösung des Egos – das ist der Kern aller Religion, auch des Christentums.`,
          objectionBy: 'Eckhart Tolle',
          answer: `Tolle hat recht, dass Ichsucht unser Problem ist und dass Gegenwärtigkeit heilsam sein kann. Aber das Christentum löst das Ich nicht auf, es erlöst es: Die Person bleibt und wird in Liebe vollendet – „dann aber werde ich erkennen, gleichwie ich erkannt bin" (1 Kor 13,12). Das Problem heißt nicht Ego, sondern Sünde, und die Lösung ist nicht Technik, sondern Gnade.`,
          followUps: [
            {
              id: 'meditation-erfahrung',
              objection: `Ich habe es selbst erlebt: In der Meditation spüre ich das Göttliche in mir.`,
              objectionBy: 'Praktizierende',
              answer: `Ich nehme deine Erfahrung ernst – Stille, Frieden und Weite sind real. Die Frage ist die Deutung: Ist das Göttliche „in dir" als dein wahres Selbst, oder ist es der lebendige Gott, der dir begegnen will? Sundar Singh suchte jahrelang in Meditation und fand Frieden erst, als ihm Christus als Person begegnete. Und die Väter lehren: Nicht jedes Licht ist Gott (2 Kor 11,14) – darum braucht Erfahrung Unterscheidung.`,
              questionsBack: [`Hat das, was du in der Meditation erfährst, einen Namen, einen Willen und eine Liebe zu dir?`],
              followUps: [
                {
                  id: 'eckhart-gottesgeburt',
                  objection: `Eure eigenen Mystiker sagen dasselbe: Meister Eckhart sprach von der „Gottesgeburt in der Seele" und vom „Seelenfünklein", das ungeschaffen sei. Die Mystik aller Religionen trifft sich im selben Punkt – nur die Dogmen trennen.`,
                  objectionBy: 'Eckhart Tolle / Willigis Jäger (zugespitzt)',
                  answer: `Eckhart ist ein schwieriger Zeuge: Er sprach kühn und paradox, und 1329 wurden mehrere seiner Sätze – darunter genau die vom „Ungeschaffenen" in der Seele – vom Papst verurteilt; Eckhart selbst hatte sich vorher dem Urteil der Kirche unterworfen. Was immer er meinte: Er lebte im Gebet, in den Sakramenten und im Bekenntnis zu Christus als dem einzigen Sohn. Die Gottesgeburt war für ihn Gnade an einem Geschöpf, kein Erwachen zur eigenen Göttlichkeit. Und die ältere ostkirchliche Mystik ist eindeutig: Vereinigung mit Gott ja – aber der Mensch bleibt Geschöpf.`,
                  detail: `Die ägyptische Wüstentradition kennt eine tiefe Mystik des Herzens – Makarius der Große spricht davon, dass Christus im Herzen wohnt und es mit Licht erfüllt. Doch diese Mystik ist durch und durch personal: Ein „Ich" ruft zu einem „Du" („Herr Jesus Christus, erbarme dich meiner"). Mystische Erfahrungen verschiedener Religionen ähneln sich in der Sprache der Stille und des Lichts; das beweist nicht, dass sie denselben Inhalt haben. Wer sie „im Kern gleich" nennt, setzt bereits voraus, was er beweisen will.`,
                  sources: [
                    { kind: 'sonstiges', work: 'Bulle „In agro dominico" (Papst Johannes XXII.)', year: '1329', quote: `Verurteilung von 28 Sätzen Meister Eckharts, teils als häretisch, teils als verdächtig.`, status: 'paraphrase', note: 'Katholische Entscheidung; hier nur als historisches Faktum angeführt.' },
                  ],
                  questionsBack: [`Wenn alle Mystiker dasselbe erfahren – warum betet der koptische Mönch zu Jesus Christus und nicht zu einem namenlosen Selbst?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'kurs-in-wundern',
      objection: `„Ein Kurs in Wundern" wurde von Jesus selbst diktiert – über die Psychologin Helen Schucman. Er lehrt: Sünde ist eine Illusion, die Welt ist ein Traum der Trennung, und Vergebung heißt erkennen, dass in Wirklichkeit nichts geschehen ist. Das ist das wahre Christusbewusstsein.`,
      objectionBy: 'A Course in Miracles (1976) / Marianne Williamson',
      answer: `Die Bibel gibt uns einen Prüfstein für jede Botschaft, die sich auf Jesus beruft: „Prüfet die Geister … ein jeglicher Geist, der da bekennt, dass Jesus Christus ist in das Fleisch gekommen, der ist von Gott" (1 Joh 4,1–2). Der „Kurs" erklärt die Welt und den Leib für Illusion und das Kreuz nicht als Sühne. Der Jesus der Evangelien sagt das Gegenteil: „Des Menschen Sohn ist gekommen, … dass er sein Leben gebe zur Erlösung für viele" (Mk 10,45), „Das ist mein Blut … für viele vergossen" (Mk 14,24). Zwei Botschaften, die sich widersprechen, können nicht vom selben Jesus stammen.`,
      detail: `Die Evangelien sind Quellen des 1. Jahrhunderts aus dem Umfeld der Augenzeugen; der „Kurs" ist eine innere Stimme, die eine New Yorker Psychologin in den Jahren 1965–1972 niederschrieb. Schucman selbst stand dem Text nach Berichten ihres Umfelds zeitlebens zwiespältig gegenüber. Historisch gesehen gibt es keinen Grund, eine moderne Eingebung über die ältesten Zeugnisse zu stellen. Theologisch ist der „Kurs" eine moderne Form des Doketismus: Was nicht wirklich ist – Leib, Welt, Leiden –, muss auch nicht wirklich erlöst werden.`,
      sources: [
        { kind: 'gegner', author: 'Helen Schucman (Niederschrift)', work: 'A Course in Miracles (dt. Ein Kurs in Wundern)', year: '1976', quote: `Die Welt der Trennung als Illusion; Sünde als Irrtum, der nicht wirklich ist; die Kreuzigung nicht als Sühneopfer verstanden.`, status: 'paraphrase' },
        { kind: 'bibel', work: 'Markus', ref: '10,45', quote: `Denn auch des Menschen Sohn ist nicht gekommen, daß er sich dienen lasse, sondern daß er diene und gebe sein Leben zur Bezahlung für viele.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      questionsBack: [`Wenn der Jesus des „Kurses" das Gegenteil von dem lehrt, was der Jesus der Evangelien sagt – welcher von beiden ist der wirkliche?`],
      followUps: [
        {
          id: 'suende-illusion-befreit',
          objection: `Aber die Lehre, dass Sünde eine Illusion ist, befreit! Die Kirchen haben Menschen mit Schuldgefühlen kleingehalten. Der „Kurs" heilt diese Schuld.`,
          objectionBy: 'Marianne Williamson / Gary Renard',
          answer: `Ich verstehe die Sehnsucht – viele Menschen sind durch harte Predigten verletzt worden, und das tut mir leid. Aber sag einem Kind, das missbraucht wurde, oder einer Familie, die im Krieg alles verlor, das Böse sei nicht wirklich geschehen. Das ist keine Heilung, sondern eine zweite Verletzung. Echte Vergebung setzt voraus, dass etwas Wirkliches geschehen ist – und gerade darum ist sie so befreiend. Die koptische Liturgie spricht unablässig von Gottes Menschenliebe (*philanthrōpia*): Gott vergibt nicht, indem er so tut, als sei nichts gewesen, sondern indem er die Last selbst trägt.`,
          detail: `Die Kirche lehrt nicht, Schuldgefühle zu kultivieren, sondern Buße als Heimkehr: Der verlorene Sohn gesteht seine Schuld, und der Vater läuft ihm entgegen (Lk 15,20–24). Die koptische Beichtpraxis ist auf Heilung angelegt – der Beichtvater ist Arzt, nicht Richter. Eine Weltanschauung, in der Böses nur Illusion ist, nimmt nicht nur dem Täter die Schuld, sondern auch dem Opfer das Recht, Unrecht Unrecht zu nennen.`,
          sources: [{ kind: 'bibel', work: '1. Johannes', ref: '1,8–9', quote: `So wir sagen, wir haben keine Sünde, so verführen wir uns selbst, und die Wahrheit ist nicht in uns. So wir aber unsre Sünden bekennen, so ist er treu und gerecht, daß er uns die Sünden vergibt und reinigt uns von aller Untugend.`, translation: 'Luther 1912', status: 'verbatim' }],
          questionsBack: [`Würdest du einem Menschen, dem schweres Unrecht angetan wurde, sagen, es sei in Wirklichkeit nichts geschehen?`],
          followUps: [
            {
              id: 'liebe-straft-nicht',
              objection: `Ein Gott der reinen Liebe braucht kein Opfer und keine Sühne. Die Idee, dass Blut fließen muss, damit Gott vergibt, ist primitives Stammesdenken.`,
              objectionBy: 'Deepak Chopra / New-Age-Autoren',
              answer: `Eine Liebe, der das Böse gleichgültig ist, wäre keine Liebe, sondern Gleichgültigkeit. Die Frage ist nicht, ob Gott vergeben **will** – das will er –, sondern was die Sünde angerichtet hat: Tod und Verderben, die den Menschen zerstören. Athanasius erklärt: Gott konnte sein Geschöpf nicht dem Untergang überlassen; darum nahm der Logos selbst einen sterblichen Leib an, um den Tod von innen her zu besiegen. Das Kreuz ist nicht Gottes Preis, den ein Dritter zahlen muss, sondern Gottes eigene Hingabe.`,
              detail: `In *Über die Menschwerdung* beschreibt Athanasius das „Dilemma" Gottes: Der Mensch, aus dem Nichts geschaffen, sank durch die Sünde zurück in Verderbnis und Tod. Es wäre Gottes unwürdig gewesen, sein Werk untergehen zu lassen – aber auch, sein Wort über den Tod einfach aufzuheben. Darum hat der Unsterbliche den Tod auf sich genommen, um ihn zu vernichten und uns die Unvergänglichkeit zu schenken. Die alexandrinische Tradition sieht im Kreuz deshalb vor allem Sieg und Heilung – nicht einen zornigen Gott, der besänftigt werden muss.`,
              voices: [
                {
                  person: 'athanasius',
                  role: 'als Lehrer der Menschwerdung',
                  text: `Athanasius stellt in *De Incarnatione* dar, dass der Logos einen Leib annahm, der sterben konnte, damit er an Stelle aller den Tod erleide und durch seine Auferstehung allen die Unvergänglichkeit schenke. Der Tod Christi ist für ihn nicht Bestrafung durch einen fremden Willen, sondern das freiwillige Werk des Sohnes, der den Tod gerade dadurch entmachtet, dass er ihn auf sich nimmt.`,
                  sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung (De Incarnatione)', ref: '6–9', quote: `Gott konnte das Geschöpf nicht dem Verderben überlassen; der Logos nahm einen sterblichen Leib an, um den Tod für alle zu überwinden.`, status: 'paraphrase' }],
                },
              ],
              followUps: [
                {
                  id: 'kosmischer-kindesmissbrauch',
                  objection: `Ein Vater, der seinen eigenen Sohn foltern und töten lässt, um besänftigt zu werden – das ist „göttlicher Kindesmissbrauch". Kein liebender Vater täte so etwas.`,
                  objectionBy: 'Verbreiteter Einwand gegen die Sühnelehre (auch von New-Age-Autoren aufgegriffen)',
                  answer: `Der Einwand trifft ein Zerrbild, nicht den christlichen Glauben. Der Sohn ist kein wehrloses Kind, das ein fremder Wille opfert, sondern der ewige Gott selbst, eines Wesens mit dem Vater: „Niemand nimmt es von mir, sondern ich lasse es von mir selber" (Joh 10,18). „Gott war in Christus und versöhnte die Welt mit ihm selber" (2 Kor 5,19). Am Kreuz leidet nicht ein Opfer **für** einen grausamen Gott – dort leidet Gott selbst in seinem fleischgewordenen Sohn **für** uns.`,
                  detail: `Hier zeigt sich, warum die Trinitätslehre und die Christologie Kyrills nicht abstrakt sind: Wer Jesus zu einem bloßen Menschen oder erleuchteten Meister macht, landet tatsächlich bei einem Gott, der einen Dritten leiden lässt. Wer bekennt, dass der Sohn Marias der ewige Sohn Gottes ist, sieht im Kreuz die äußerste Selbsthingabe Gottes. Die koptische Kirche singt in der Karwoche: „Dein ist die Kraft und die Herrlichkeit" – zum Gekreuzigten. Das ist nicht Verherrlichung von Gewalt, sondern das Bekenntnis, dass die Liebe stärker ist als der Tod.`,
                  sources: [
                    { kind: 'bibel', work: 'Johannes', ref: '10,18', quote: `Niemand nimmt es von mir, sondern ich lasse es von mir selber. Ich habe es Macht zu lassen und habe es Macht wieder zu nehmen.`, translation: 'Luther 1912', status: 'verbatim' },
                    { kind: 'bibel', work: '2. Korinther', ref: '5,19', quote: `Denn Gott war in Christo und versöhnte die Welt mit ihm selber und rechnete ihnen ihre Sünden nicht zu.`, translation: 'Luther 1912', status: 'verbatim' },
                    { kind: 'liturgie', work: 'Koptische Karwoche (Pascha-Woche), Hymnus „Thok te ti gom"', quote: `„Dein ist die Kraft und die Herrlichkeit und der Segen und die Macht in Ewigkeit" – gesungen zum leidenden Herrn.`, status: 'paraphrase' },
                  ],
                  questionsBack: [`Wenn der Sohn selbst Gott ist und sein Leben freiwillig gibt – wer missbraucht dann wen?`],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Was bedeutet „Christus" im hebräischen und griechischen Ursprung?`,
    `Wie verstehst du 1 Joh 2,22, wo die Trennung von Jesus und Christus „Antichrist" genannt wird?`,
    `Warum beteten die ersten jüdischen Christen Jesus an?`,
    `Hat Buddha jemals gesagt: „Ich bin der Weg, die Wahrheit und das Leben"?`,
  ],
  avoid: [
    `„Meditation ist dämonisch." – Pauschal falsch; die Kirche kennt eine reiche Tradition des stillen Gebets. Unterscheide Inhalt und Ziel.`,
    `Waldorfschulen pauschal verteufeln – viele Eltern wählen sie aus pädagogischen Gründen; argumentiere mit Steiners Christologie.`,
    `Mystiker wie Meister Eckhart vorschnell als Esoteriker abstempeln – ihre Aussagen sind komplex; bleib bei der biblischen Christologie.`,
  ],
  concessions: [
    `„Christus" ist tatsächlich ein Titel, kein Nachname.`,
    `Die christliche Tradition kennt die Einheit mit Gott (Theosis) und tiefe kontemplative Erfahrung.`,
    `Manche anthroposophische Praxisfelder (Pädagogik, Landbau) werden von vielen Menschen geschätzt.`,
  ],
  furtherReading: [
    { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien, Buch III', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Vishal Mangalwadi', work: 'When the New Age Gets Old', year: '1992', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Päpstlicher Rat für die Kultur / Päpstlicher Rat für den Interreligiösen Dialog', work: 'Jesus Christus, der Spender lebendigen Wassers. Überlegungen zu New Age aus christlicher Sicht', year: '2003', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Helmut Zander', work: 'Anthroposophie in Deutschland', year: '2007', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['New Age', 'Christusbewusstsein', 'Anthroposophie', 'Rudolf Steiner', 'Christologie', 'Kerinth'],
  related: [
    'hinduismus/jesus-war-avatar',
    'pluralismus/alle-religionen-gleich-wahr',
    'liberale-theologie/jesus-nur-morallehrer',
    'mormonen/gott-war-mensch',
    'gnosis/geheimes-wissen-elite',
  ],
};

export default claim;
