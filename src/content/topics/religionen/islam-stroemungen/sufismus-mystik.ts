import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'sufismus-mystik',
  title: `„Die Sufis kennen Gott durch innere Erfahrung – das ist dasselbe wie christliche Mystik."`,
  proponents: [
    { name: 'Seyyed Hossein Nasr', role: 'Iranisch-amerikanischer Philosoph und Islamwissenschaftler, George Washington University', work: 'Sufi Essays (1972); The Garden of Truth (2007)' },
    { name: 'Frithjof Schuon', role: 'Religionsphilosoph der „Philosophia perennis" (1907–1998)', work: 'Von der inneren Einheit der Religionen (1948)' },
    { name: 'Abu Hamid al-Ghazali', role: 'Theologe und Mystiker (1058–1111), „Beweis des Islam"', work: 'Al-Munqidh min ad-Dalal (Der Erretter aus dem Irrtum); Ihya Ulum ad-Din' },
    { name: 'Annemarie Schimmel', role: 'Islamwissenschaftlerin (1922–2003), Harvard/Bonn – betont Parallelen zur christlichen Mystik', work: 'Mystische Dimensionen des Islam (1975)' },
  ],
  steelman: `Jenseits von Dogmen und Rechtsschulen treffen sich die Liebenden Gottes. Al-Ghazali, der größte Theologe des Islam, fand nach einer tiefen Krise die Gewissheit nicht in Argumenten, sondern im „Kosten" (dhawq) der göttlichen Wirklichkeit. Rabi'a von Basra betete, sie wolle Gott weder aus Furcht vor der Hölle noch aus Hoffnung auf das Paradies dienen, sondern um seiner selbst willen. Rumi besingt die Sehnsucht der Rohrflöte nach dem Röhricht, aus dem sie geschnitten wurde. Gott selbst sagt im Hadith qudsi: „Mein Diener nähert sich Mir … bis Ich ihn liebe; und wenn Ich ihn liebe, bin Ich sein Gehör, mit dem er hört, und sein Blick, mit dem er sieht" (Sahih al-Bukhari 6502). Die Sufis sprechen vom Entwerden des Ich in Gott (fana) und vom Bleiben in Ihm (baqa) – die Kirchenväter von Vergöttlichung (theosis). Das Gebet des Herzens der Wüstenväter und das Gottgedenken (dhikr) der Sufis gleichen sich bis in die Atemtechnik. Die Islamwissenschaft hat sogar gezeigt, dass frühe Sufis von christlichen Mönchen lernten. Wer erfahren hat, braucht keine Dogmen: Auf dem Gipfel ist die Erfahrung des Einen dieselbe.`,
  biblical: {
    summary: `Die Bibel kennt eine tiefe Gotteserfahrung: Gott will Wohnung im Menschen nehmen (Joh 14,23), Christen werden „teilhaftig der göttlichen Natur" (2 Petr 1,4), „ich lebe, doch nun nicht ich, sondern Christus lebt in mir" (Gal 2,20). Aber diese Einheit ist **christozentrisch** und **personal**: Sie geschieht „in Christus", durch den Geist, als Gemeinschaft von Personen in Liebe (Joh 17,21–23) – nicht als Auflösung des Ich. Und die Bibel verlangt, Erfahrungen zu **prüfen** (1 Joh 4,1–3): Maßstab ist das Bekenntnis zu Jesus Christus, „der in das Fleisch gekommen ist".`,
    detail: `**1. Teilhabe, nicht Verschmelzung.** 2 Petr 1,4 spricht von Teilhabe (koinōnoi) an der göttlichen Natur – ein Begriff der Gemeinschaft, nicht der Identität. Joh 17,21: „dass sie alle eins seien, gleichwie du, Vater, in mir und ich in dir" – die Einheit ist nach dem Bild der Dreieinigkeit: vollkommene Einheit **ohne** Aufhebung der Personen.

**2. Gott liebt zuerst.** „Darin steht die Liebe: nicht dass wir Gott geliebt haben, sondern dass er uns geliebt hat" (1 Joh 4,10). Christliche Mystik ist Antwort auf eine Liebe, die vorausgeht – nicht Aufstieg aus eigener Kraft.

**3. Der Prüfstein.** „Prüfet die Geister, ob sie von Gott sind … Ein jeglicher Geist, der da bekennt, dass Jesus Christus ist in das Fleisch gekommen, der ist von Gott" (1 Joh 4,1–2). Innere Erfahrung ist nicht selbstbeglaubigend.`,
    sources: [
      { kind: 'bibel', work: '2. Petrus', ref: '1,4', quote: `… durch welche uns die teuren und allergrößten Verheißungen geschenkt sind, nämlich, daß ihr dadurch teilhaftig werdet der göttlichen Natur.`, original: 'ἵνα διὰ τούτων γένησθε θείας κοινωνοὶ φύσεως', translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '17,21', quote: `… auf daß sie alle eins seien, gleichwie du, Vater, in mir und ich in dir; daß auch sie in uns eins seien.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Johannes', ref: '4,1–2', quote: `Ihr Lieben, glaubet nicht einem jeglichen Geist, sondern prüfet die Geister, ob sie von Gott sind … Ein jeglicher Geist, der da bekennt, daß Jesus Christus ist in das Fleisch gekommen, der ist von Gott.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Johannes', ref: '4,10', quote: `Darin steht die Liebe: nicht, daß wir Gott geliebt haben, sondern daß er uns geliebt hat und gesandt seinen Sohn zur Versöhnung für unsre Sünden.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptische Kirche ist die Mutter des christlichen Mönchtums: Antonius, Makarius und Pachomius lebten in der ägyptischen Wüste, lange bevor es Sufis gab. Ihre Mystik ist durch und durch kirchlich und christozentrisch: Gebet, Fasten, Psalmen, die Eucharistie und das Anrufen des Namens Jesu. Athanasius fasst das Ziel zusammen: „Er wurde Mensch, damit wir vergöttlicht würden" (De Inc. 54) – **Teilhabe durch Gnade** an Gottes Leben, nie Wesensgleichheit mit Gott.`,
    detail: `In der koptischen Kirche des 20. Jahrhunderts gab es eine lebhafte Debatte um den Begriff „Vergöttlichung" (arab. *ta'alluh*): Papst Schenuda III. warnte eindringlich davor, ihn so zu verstehen, als würde der Mensch Gott im Wesen oder dürfe angebetet werden; Vater Matta el-Meskeen betonte in seinen Schriften die wirkliche Teilhabe am göttlichen Leben durch den Heiligen Geist. Beide verwarfen jede Vermischung von Schöpfer und Geschöpf. Genau diese Leitplanke unterscheidet christliche Mystik von Aussagen wie al-Halladschs „Ich bin die Wahrheit" (ana l-haqq).`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '54,3', year: 'ca. 318', quote: `Er wurde Mensch, damit wir vergöttlicht würden.`, original: 'Αὐτὸς γὰρ ἐνηνθρώπησεν, ἵνα ἡμεῖς θεοποιηθῶμεν', status: 'verbatim' },
      { kind: 'kirchenvater', work: 'Apophthegmata Patrum (Sprüche der Wüstenväter)', ref: 'Makarius der Große 19', year: '4./5. Jh.', quote: `Man muss nicht viele Worte machen; es genügt, die Hände auszubreiten und zu sagen: Herr, wie du willst und wie du weißt, erbarme dich meiner.`, status: 'paraphrase', note: 'Eine der Wurzeln des Jesusgebets in der ägyptischen Wüste – Jahrhunderte vor dem Sufismus.' },
      { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Vorträge und Schriften zur Frage der „Vergöttlichung" (ta\'alluh)', year: '1990er–2000er', status: 'paraphrase', note: 'Schenuda III. lehnte jede Lehre ab, die eine Teilhabe am göttlichen Wesen behauptet.' },
    ],
  },
  opposingView: {
    summary: `Der Sufismus (tasawwuf) ist die mystische Dimension des Islam, seit dem 8./9. Jahrhundert bezeugt (Hasan al-Basri, Rabi'a al-Adawiyya, al-Dschunaid). Er ist kein Gegenislam: Die meisten Sufis waren und sind schariatreu, viele Gelehrte zugleich Sufis. Al-Ghazali (gest. 1111) versöhnte Sufismus und sunnitische Theologie. Es gibt aber Spannungen: Al-Halladsch wurde 922 in Bagdad wegen Gotteslästerung hingerichtet; Ibn Arabis Schule der „Einheit des Seins" (wahdat al-wudschud) wurde von Ibn Taimiyya und später von salafitischen Strömungen scharf bekämpft.`,
    detail: `**Christliche Einflüsse:** Viele Islamwissenschaftler (u. a. Schimmel, Margaret Smith, Tor Andrae) halten es für wahrscheinlich, dass frühe Asketen Anregungen von christlichen Mönchen im Nahen Osten aufnahmen; das Ausmaß ist umstritten. **Erfahrung und Deutung:** In der Religionswissenschaft ist umstritten, ob es eine „reine", deutungsfreie Mystik gibt (Perennialismus: Huxley, Schuon, Forman) oder ob jede Erfahrung von der Tradition des Erfahrenden geprägt ist (Konstruktivismus: Steven T. Katz, 1978). Für das Gespräch heißt das: Ähnliche Sprache beweist noch nicht dieselbe Wirklichkeit.`,
    sources: [
      { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '6502', quote: `Mein Diener nähert sich Mir mit nichts, das Mir lieber wäre, als mit dem, was Ich ihm zur Pflicht gemacht habe; und er nähert sich Mir weiter mit freiwilligen Werken, bis Ich ihn liebe. Und wenn Ich ihn liebe, bin Ich sein Gehör, mit dem er hört, und sein Blick, mit dem er sieht …`, translation: 'sinngemäß', status: 'paraphrase', url: 'https://sunnah.com/bukhari:6502', note: 'Sog. „Hadith der freiwilligen Werke" (hadith an-nawafil), zentral für die Sufik.' },
      { kind: 'gegner', author: 'Abu Hamid al-Ghazali', work: 'Al-Munqidh min ad-Dalal (Der Erretter aus dem Irrtum)', year: 'um 1106–1110', quote: `Al-Ghazali beschreibt, dass er die Gewissheit, die er in Theologie und Philosophie nicht fand, auf dem Weg der Sufis durch unmittelbares „Kosten" (dhawq) erlangte.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Steven T. Katz', work: 'Language, Epistemology, and Mysticism, in: Katz (Hg.), Mysticism and Philosophical Analysis', year: '1978', quote: `Es gibt keine reinen, unvermittelten Erfahrungen; die Tradition des Mystikers prägt bereits, was er erfährt.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Ich habe großen Respekt vor der Gottessehnsucht der Sufis – Rabi'a und Rumi berühren auch Christen. Aber ähnliche Sprache bedeutet noch nicht dieselbe Erfahrung: Christliche Mystik ist Gemeinschaft mit dem dreieinen Gott **durch Christus**, der Mensch wurde, und sie hebt die Person nicht auf, sondern vollendet sie. Christliche „Vergöttlichung" ist Teilhabe durch Gnade, kein Entwerden in Gottes Wesen – und sie beginnt mit Gottes Liebe, die uns zuerst geliebt hat (1 Joh 4,10).`,
  keyPoints: [
    `**Echte Gemeinsamkeiten zugeben:** Sehnsucht nach Gott, Askese, Gottgedenken, Liebe um Gottes willen – und wahrscheinlich frühe Anregungen aus dem christlichen Mönchtum.`,
    `**Erfahrung ist nie deutungsfrei:** Wer was erfährt, hängt von der Wirklichkeit ab, auf die sie sich richtet – dazu sagen Mystiker sehr Verschiedenes (Katz).`,
    `**Theosis ≠ Fana:** Teilhabe durch Gnade an Gottes Leben, ohne Vermischung und mit bleibender Person – nicht Auflösung des Ich in Gott.`,
    `**Die Brücke heißt Inkarnation:** Wie kann der transzendente Gott dem Menschen so nahe kommen? Christlich: weil er selbst Mensch wurde. Gerade darin bleibt der Sufismus ohne Grund.`,
    `**Gott liebt zuerst:** Im Hadith an-nawafil liebt Gott den, der sich ihm nähert; im Evangelium liebt Gott die Sünder, bevor sie kommen (Röm 5,8).`,
    `**Prüfstein:** „Jesus Christus ist ins Fleisch gekommen" (1 Joh 4,2) – Mystik steht unter der öffentlichen Offenbarung, nicht über ihr.`,
  ],
  voices: [
    {
      person: 'gregor-nyssa',
      role: 'als Mystiker des unendlichen Fortschritts',
      text: `Gregor von Nyssa beschreibt in seinem *Leben des Mose* den Aufstieg der Seele zu Gott als unendliches Fortschreiten (epektasis): Weil Gott unendlich ist, findet die Seele nie ein Ende, an dem sie in ihm aufginge; sie wächst ewig in die Liebe hinein und bleibt dabei sie selbst. Das ist das Gegenbild zur Vorstellung, die Seele erlösche wie ein Tropfen im Meer.`,
      sources: [{ kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Das Leben des Mose (De vita Moysis)', ref: 'II,219–255', year: 'um 390', status: 'paraphrase' }],
    },
    {
      person: 'matta-el-meskeen',
      role: 'als koptischer Lehrer des Gebets',
      text: `Matta el-Meskeen lehrt das Gebet als Leben in der Gegenwart Christi: Nicht die Technik, sondern die Hingabe an die Person Jesu öffnet das Herz für den Heiligen Geist. Er warnt davor, Gebet als Methode zur Erzeugung von Erfahrungen zu benutzen; die Frucht echten Gebets sind Demut, Liebe zum Nächsten und Reue.`,
      sources: [{ kind: 'koptisch', author: 'Matta el-Meskeen', work: 'Orthodox Prayer Life: The Interior Way', year: 'engl. 2003', status: 'paraphrase' }],
    },
    {
      person: 'isaak-syrer',
      role: 'als Lehrer der Unterscheidung der Geister',
      text: `Isaak der Syrer, einer der größten Mystiker der östlichen Christenheit, verbindet glühende Gottesliebe mit nüchterner Demut: Wer sich seiner Sünde bewusst ist, sei größer als einer, der Tote auferweckt. Er warnt vor Täuschung durch außergewöhnliche Erfahrungen und misst geistliches Leben an Barmherzigkeit und Demut.`,
      sources: [{ kind: 'kirchenvater', author: 'Isaak der Syrer', work: 'Asketische Homilien', year: '7. Jh.', status: 'paraphrase' }],
    },
    {
      person: 'louis-massignon',
      role: 'als Erforscher al-Halladschs',
      text: `Massignon widmete sein Lebenswerk dem Mystiker al-Halladsch und zeigte mit großer Ehrfurcht, wie tief dessen Gottesliebe und seine Verehrung Jesu waren. Als katholischer Christ sah er im Martyrium al-Halladschs eine Sehnsucht nach einer Nähe zwischen Gott und Mensch, die der Islam in seiner Lehre nicht begründen kann – und die das Christentum in der Menschwerdung bekennt.`,
      sources: [{ kind: 'fachliteratur', author: 'Louis Massignon', work: 'La Passion de Husayn Ibn Mansûr Hallâj', year: '1922 (erw. 1975)', status: 'paraphrase' }],
    },
    {
      person: 'athanasius',
      role: 'als Lehrer der Vergöttlichung',
      text: `Für Athanasius ist Vergöttlichung kein Aufstieg des Menschen aus eigener Kraft, sondern Gabe: Der Logos nahm unsere Natur an, damit wir an seiner teilhaben. Der Mensch wird „Gott durch Gnade", nicht durch Natur – der Unterschied zwischen Schöpfer und Geschöpf bleibt ewig bestehen.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Reden gegen die Arianer', ref: 'I,39; III,19', year: 'um 340', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'gleiche-erfahrung-gipfel',
      objection: `Auf dem Gipfel der Mystik erfahren alle dasselbe – die eine göttliche Wirklichkeit. Die Dogmen sind nur die unterschiedliche Sprache, mit der Menschen das Unaussprechliche beschreiben.`,
      objectionBy: 'Frithjof Schuon / Seyyed Hossein Nasr',
      answer: `Woher weißt du, dass es dasselbe ist? Jede Erfahrung wird gedeutet – und die Unterschiede sind nicht nur sprachlich, sondern inhaltlich: Ist Gott dreieinig? Ist er Mensch geworden? Wurde Jesus gekreuzigt? Mystik hebt diese Widersprüche nicht auf. Und buddhistische Mystiker erfahren nach eigener Aussage gar keinen persönlichen Gott – ist das auch „dasselbe"?`,
      questionsBack: [
        `Wenn die Erfahrungen gleich wären – warum beschreiben Buddhisten, Sufis und Christen ihren Inhalt so verschieden?`,
      ],
      followUps: [
        {
          id: 'reines-bewusstsein',
          objection: `Katz' Konstruktivismus ist westlicher Reduktionismus. Es gibt reine Bewusstseinserfahrungen jenseits aller Begriffe – Robert Forman hat das gezeigt. Dort fallen alle Unterschiede weg.`,
          objectionBy: 'Perennialistische Religionsphilosophie',
          answer: `Selbst wenn es inhaltsleere Bewusstseinszustände gibt – sie sagen gerade nichts darüber, **wer** Gott ist. Eine Erfahrung ohne Inhalt kann nicht entscheiden, ob Gott einer in drei Personen ist oder nicht, ob er spricht, liebt oder Mensch wurde. Darüber entscheiden Offenbarung und Geschichte, nicht ein Bewusstseinszustand.`,
          followUps: [
            {
              id: 'offenbarung-auch-erfahrung',
              objection: `Aber eure Offenbarung ist doch auch nur die Erfahrung von Propheten und Aposteln. Ihr setzt eure Mystiker über unsere.`,
              objectionBy: 'Seyyed Hossein Nasr',
              answer: `Der christliche Glaube gründet nicht auf der Privaterfahrung eines Einzelnen, sondern auf öffentlichen Ereignissen: Jesus lehrte öffentlich, starb öffentlich unter Pontius Pilatus und wurde nach seinem Tod von vielen, auch von Skeptikern, gesehen (1 Kor 15,3–8). „Was wir gesehen und gehört haben, das verkündigen wir euch" (1 Joh 1,3). Christliche Mystik lebt **innerhalb** dieses öffentlichen Glaubens – sie ersetzt ihn nicht.`,
              sources: [
                { kind: 'bibel', work: '1. Johannes', ref: '1,1–3', quote: `Das da von Anfang war, das wir gehört haben, das wir gesehen haben mit unsern Augen, das wir beschaut haben und unsre Hände betastet haben, vom Wort des Lebens … was wir gesehen und gehört haben, das verkündigen wir euch.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              followUps: [
                {
                  id: 'eckhart-ibn-arabi',
                  objection: `Meister Eckhart sprach fast wie Ibn Arabi – und eure Kirche hat ihn verurteilt, so wie unsere Orthodoxen al-Halladsch hingerichtet haben. Die Dogmatiker beider Seiten fürchten die Mystiker.`,
                  objectionBy: 'Religionswissenschaftlicher Einwand',
                  answer: `Eckhart ist ein Theologe der westlichen Kirche, dessen Sätze 1329 teilweise verurteilt wurden; er ist keine Autorität der koptischen Kirche. Die östliche Tradition zeigt gerade das Gegenteil deiner These: Bei Athanasius, Gregor von Nyssa, Makarius und Isaak dem Syrer gehören tiefste Mystik und klares Bekenntnis zusammen. Dogma ist für sie kein Käfig, sondern das Geländer am Abgrund – Mystik ohne Bekenntnis wird verschwommen.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'fana-gleich-theosis',
      objection: `Fana – das Entwerden des Ich in Gott – ist dasselbe wie eure Theosis. Athanasius sagt doch selbst: Gott wurde Mensch, damit wir Gott würden.`,
      objectionBy: 'Sufischer Gesprächspartner',
      answer: `Ähnlich klingend, aber verschieden: Christliche Vergöttlichung ist Teilhabe **durch Gnade** an Gottes Leben, nicht an seinem Wesen – und die Person bleibt. Gregor von Nyssa beschreibt sie als ewiges Wachsen in Gott, nie als Erlöschen wie ein Tropfen im Meer. Das Vorbild ist die Dreieinigkeit: vollkommene Einheit, in der die Personen nicht aufgehoben werden (Joh 17,21).`,
      followUps: [
        {
          id: 'dschunaid-baqa',
          objection: `Du karikierst den Sufismus. Der nüchterne Sufismus al-Dschunaids lehrt nach dem Fana das Baqa – das Bleiben in Gott. Das Ich wird nicht vernichtet, sondern geläutert.`,
          objectionBy: 'Sufischer Gelehrter',
          answer: `Das ist ein berechtigter Einwand – der „nüchterne" Sufismus al-Dschunaids und al-Ghazalis unterscheidet sorgfältig. Dann liegt der Unterschied aber tiefer: Wie kann ein Geschöpf mit dem ganz transzendenten Gott vereint werden, ohne dass Gott selbst die Brücke baut? Im Christentum ist diese Vereinigung zuerst in Christus geschehen – Gottheit und Menschheit geeint ohne Vermischung und ohne Trennung. Unsere Teilhabe ist Teilhabe an ihm.`,
          followUps: [
            {
              id: 'kopten-gegen-theosis',
              objection: `Aber euer eigener Papst Schenuda III. hat die Lehre von der Vergöttlichung bekämpft! Selbst die Kopten lehnen ab, was du mir als christliche Mystik verkaufst.`,
              objectionBy: 'Kenner der koptischen Debatte',
              answer: `Ehrlich: Papst Schenuda III. hat davor gewarnt, „Vergöttlichung" so zu verstehen, als würde der Mensch Gott im Wesen oder dürfe angebetet werden; Matta el-Meskeen betonte die echte Teilhabe am göttlichen Leben. Beide lehnten jede Vermischung von Schöpfer und Geschöpf ab, beide bekannten 2 Petr 1,4 und Athanasius. Genau diese Grenze trennt christliche Mystik vom Satz al-Halladschs „Ich bin die Wahrheit".`,
              followUps: [
                {
                  id: 'hallaj-wie-jesus',
                  objection: `Al-Halladsch sagte „Ana l-haqq – Ich bin die Wahrheit", Jesus sagte „Ich bin die Wahrheit" (Joh 14,6). Beide waren Mystiker, die die Einheit mit Gott erlangt hatten – und beide wurden dafür getötet.`,
                  objectionBy: 'Perennialistischer Einwand',
                  answer: `Der Unterschied ist grundlegend: Jesus hat die Einheit mit Gott nicht durch Askese erlangt – er ist der ewige Sohn, der die Herrlichkeit beim Vater hatte, „ehe die Welt war" (Joh 17,5). Al-Halladsch wurde 922 von einem islamischen Gericht verurteilt, weil die Gelehrten urteilten, ein Geschöpf könne so nicht sprechen. Und wenn der Islam schon die Nähe eines Mystikers zu Gott nicht ertrug – wie viel weniger den Gedanken, dass Gott selbst Mensch wird? Gerade das aber bekennt das Evangelium.`,
                  questionsBack: [
                    `Wenn Gott einem Menschen so nahe kommen kann, dass dieser „Ich bin die Wahrheit" sagt – warum soll es unmöglich sein, dass Gott selbst Mensch wird?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'rabia-reine-liebe',
      objection: `Rabi'a betete: „Wenn ich Dich aus Furcht vor der Hölle anbete, so verbrenne mich in ihr; wenn aus Hoffnung auf das Paradies, so verschließe es mir; aber wenn ich Dich um Deiner selbst willen anbete, so enthalte mir Deine ewige Schönheit nicht vor." Das ist reine Liebe – christlicher geht es nicht.`,
      objectionBy: 'Annemarie Schimmel (als Darstellerin der Sufik)',
      answer: `Ein wunderschönes Gebet, und viele Christen haben ähnlich gebetet. Doch beachte, wo die christliche Liebe beginnt: „Lasset uns ihn lieben, denn er hat uns zuerst geliebt" (1 Joh 4,19). Im Koran gilt Gottes Liebe denen, die gehorchen: „Folgt mir, so wird Allah euch lieben" (3:31). Rabi'as Liebe sprengt fast den Rahmen dieser Theologie – sie findet ihre eigentliche Heimat bei dem Gott, der Liebe ist (1 Joh 4,8).`,
      sources: [
        { kind: 'gegner', author: 'Faridaddin Attar (Überlieferer)', work: 'Tadhkirat al-Auliya (Gedenkbuch der Gottesfreunde), Kapitel über Rabi\'a', year: '12./13. Jh.', quote: `O Gott, wenn ich Dich aus Furcht vor der Hölle anbete, verbrenne mich in der Hölle; wenn ich Dich aus Hoffnung auf das Paradies anbete, schließe mich davon aus; doch wenn ich Dich um Deiner selbst willen anbete, enthalte mir Deine ewige Schönheit nicht vor.`, status: 'paraphrase', note: 'Das Gebet ist erst Jahrhunderte nach Rabi\'as Tod (801) schriftlich überliefert; Wortlaut nach verbreiteter Wiedergabe.' },
        { kind: 'koran', work: 'Sure 3 (Al Imran)', ref: '3:31', quote: `Sag: Wenn ihr Allah liebt, dann folgt mir. So liebt euch Allah und vergibt euch eure Sünden.`, translation: 'nach Bubenheim/Elyas', status: 'verbatim', url: 'https://quran.com/3/31' },
      ],
      followUps: [
        {
          id: 'wadud-hadith-nawafil',
          objection: `Auch Allah ist al-Wadud, der Liebende (85:14). Und im Hadith der freiwilligen Werke wird Gott sogar zum Gehör und Blick seines Dieners. Der Islam kennt göttliche Liebe genauso.`,
          objectionBy: 'Sufischer Gelehrter',
          answer: `Ja, und dieser Hadith ist tief. Aber schau auf die Reihenfolge: Der Diener nähert sich durch Pflichten und freiwillige Werke, **bis** Gott ihn liebt. Im Evangelium ist es umgekehrt: „Gott erweist seine Liebe gegen uns darin, dass Christus für uns gestorben ist, da wir noch Sünder waren" (Röm 5,8). Die Liebe geht voraus und macht die Annäherung erst möglich.`,
          followUps: [
            {
              id: 'gnade-im-sufismus',
              objection: `Auch die Sufis kennen die Gnade: die göttliche Anziehung (dschadhba), das Licht, das Gott ins Herz wirft – al-Ghazali sagt, seine Heilung sei nicht durch Argumente, sondern durch ein Licht von Gott gekommen.`,
              objectionBy: 'Al-Ghazali (Argumentationslinie, Munqidh)',
              answer: `Da treffen wir uns: Die besten Sufis ahnen, dass Gott den ersten Schritt tun muss. Das Evangelium sagt, **wie** er ihn getan hat – indem er selbst kam: „Also hat Gott die Welt geliebt, dass er seinen eingeborenen Sohn gab" (Joh 3,16), und indem er „seine Liebe ausgegossen hat in unsre Herzen durch den Heiligen Geist" (Röm 5,5). Die Sehnsucht der Sufis ist eine Frage, auf die Christus die Antwort ist.`,
            },
          ],
        },
      ],
    },
    {
      id: 'dhikr-jesusgebet',
      objection: `Euer Herzensgebet und unser Dhikr sind dieselbe Methode: ein heiliger Name, wiederholt im Rhythmus des Atems. Vielleicht habt ihr es sogar von den Sufis übernommen.`,
      objectionBy: 'Sufischer Gesprächspartner',
      answer: `Die Wurzeln des Jesusgebets liegen in der ägyptischen Wüste des 4. und 5. Jahrhunderts – Makarius lehrte, es genüge zu sagen: „Herr, wie du willst und wie du weißt, erbarme dich meiner." Das ist vor dem Islam. Wenn es Einfluss gab, dann eher umgekehrt. Vor allem aber: Das Jesusgebet ist keine Technik, sondern die Anrede einer Person – „Herr Jesus Christus, Sohn Gottes, erbarme dich meiner". Es ist die Bitte eines Sünders um Erbarmen, keine Methode zum Entwerden.`,
      followUps: [
        {
          id: 'gehirn-gleich',
          objection: `Neurologisch passiert beim Dhikr und beim Jesusgebet dasselbe – Wiederholung beruhigt bestimmte Hirnareale. Also ist es dieselbe Erfahrung.`,
          objectionBy: 'Neurotheologischer Einwand',
          answer: `Hirnmessungen zeigen Begleitprozesse, nicht den Gegenstand einer Erfahrung. Zwei Menschen, die verschiedene Personen lieben, zeigen ähnliche Hirnmuster – deshalb lieben sie noch lange nicht dieselbe Person. Ob ich zu Christus bete oder einen Namen meditiere, entscheidet nicht der Scanner, sondern die Wirklichkeit, an die ich mich wende.`,
          followUps: [
            {
              id: 'wer-entscheidet-echtheit',
              objection: `Und wer entscheidet dann, welche Erfahrung echt ist? Du sagst einfach, deine ist von Gott und meine nicht.`,
              objectionBy: 'Sufischer Gesprächspartner',
              answer: `Ich urteile nicht über dein Herz – das kennt nur Gott. Aber die Bibel gibt objektive Maßstäbe: das Bekenntnis, „dass Jesus Christus ist in das Fleisch gekommen" (1 Joh 4,2), die Früchte des Geistes – Liebe, Freude, Friede, Demut (Gal 5,22) – und die Übereinstimmung mit dem Glauben der Apostel. Die Wüstenväter warnten sogar ausdrücklich vor Täuschung durch außergewöhnliche Erfahrungen: Erfahrung beglaubigt sich nicht selbst.`,
            },
          ],
        },
      ],
    },
    {
      id: 'ghazali-gewissheit',
      objection: `Al-Ghazali hat alle Argumente der Theologen und Philosophen geprüft und keine Gewissheit gefunden – erst die Erfahrung der Sufis gab sie ihm. Ihr Christen setzt auf Argumente; wir auf das Kosten Gottes.`,
      objectionBy: 'Seyyed Hossein Nasr',
      answer: `Al-Ghazalis Ehrlichkeit bewundere ich. Aber auch Christen setzen nicht nur auf Argumente: Wir „schmecken und sehen, wie freundlich der HERR ist" (Ps 34,9) – in Gebet und Eucharistie. Nur: Eine private Erfahrung kann mir Gewissheit geben, aber sie kann einem anderen nichts beweisen. Darum verbindet der christliche Glaube Erfahrung mit öffentlichen, prüfbaren Ereignissen.`,
      followUps: [
        {
          id: 'ghazali-gegen-gottheit-jesu',
          objection: `Al-Ghazali hat nach seiner mystischen Erfahrung sogar eine Widerlegung der Gottheit Jesu geschrieben. Mystik führt also gerade weg vom Christentum.`,
          objectionBy: 'Muslimischer Apologet',
          answer: `Die Schrift „ar-Radd al-dschamil" wird al-Ghazali zugeschrieben, ihre Verfasserschaft ist in der Forschung umstritten. Unabhängig davon richtet sich ihre Kritik gegen eine Vermischung von Gottheit und Menschheit – die die koptische Kirche selbst verwirft: Wir bekennen die Einung „ohne Vermischung, ohne Verwandlung, ohne Trennung". Wer gegen eine Vermischung argumentiert, trifft nicht das Bekenntnis der Kirche.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn alle Mystiker dasselbe erfahren – warum widersprechen sich ihre Aussagen über Gott so grundlegend?`,
    `Wie kann der ganz transzendente Gott dem Menschen so nahe kommen, wie die Sufis es suchen, wenn er nicht selbst die Brücke baut?`,
    `Liebt Gott den Menschen, bevor dieser sich ihm nähert – oder erst danach?`,
    `Bleibt deine Person in der Vereinigung mit Gott bestehen? Wenn nein – wer liebt dann noch wen?`,
    `Woran prüfst du, ob eine innere Erfahrung wirklich von Gott kommt?`,
  ],
  avoid: [
    `Nicht den Sufismus als „heidnisch" oder „unislamisch" abtun – das ist die Polemik der Salafiten, nicht unsere, und verletzt aufrichtige Gottsucher.`,
    `Nicht behaupten, die Sufis hätten „alles von den Christen abgeschrieben". Einflüsse sind wahrscheinlich, ihr Ausmaß aber umstritten.`,
    `Nicht Mystik pauschal als Einbildung oder Psychologie abwerten – du sägst damit an deinem eigenen Ast (Gebet, Wüstenväter, Gotteserfahrung).`,
    `Nicht Meister Eckhart oder New-Age-Autoren als Vertreter „der christlichen Mystik" anführen.`,
  ],
  concessions: [
    `Es gibt echte Parallelen zwischen Sufismus und christlicher Mystik – in Sprache, Askese und Gebetspraxis.`,
    `Viele Sufis zeigen eine Gottesliebe und Demut, die Christen beschämen kann.`,
    `Auch in der koptischen Kirche wurde um die richtige Rede von „Vergöttlichung" gerungen.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Annemarie Schimmel', work: 'Mystische Dimensionen des Islam. Die Geschichte des Sufismus', year: '1975 (dt. 1985)', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Kallistos Ware', work: 'The Orthodox Way', year: '1979', status: 'paraphrase', note: 'Zur orthodoxen Lehre von der Teilhabe an Gott.' },
    { kind: 'koptisch', author: 'Matta el-Meskeen', work: 'Orthodox Prayer Life: The Interior Way', year: 'engl. 2003', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Steven T. Katz (Hg.)', work: 'Mysticism and Philosophical Analysis', year: '1978', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Sufismus', 'Mystik', 'Fana', 'Theosis', 'Rabi\'a', 'al-Ghazali', 'al-Halladsch', 'Jesusgebet'],
  related: [
    'pluralismus/alle-religionen-gleich-wahr',
    'hinduismus/atman-ist-brahman',
    'neurowissenschaften/gotteserfahrung-hirnaktivitaet',
    'islam-heil-gottesbild/allah-liebt-die-guten',
    'erkenntnistheorie/religioese-erfahrung-kein-beleg',
  ],
};

export default claim;
