import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'jesus-juedischer-reformer',
  title: `„Jesus war ein jüdischer Reformer, nie ein göttlicher Messias (Klausner, Vermes)."`,
  proponents: [
    { name: 'Joseph Klausner', role: 'Jüdischer Historiker (1874–1958), Hebräische Universität Jerusalem', work: 'Jeschu ha-Nozri (hebr. 1922; engl. Jesus of Nazareth, 1925)' },
    { name: 'Geza Vermes', role: 'Jüdischer Religionshistoriker (1924–2013), Oxford; Qumran-Forscher', work: 'Jesus the Jew (1973); The Changing Faces of Jesus (2000)' },
    { name: 'Rabbi Shmuley Boteach', role: 'Rabbiner und Publizist', work: 'Kosher Jesus (2012)' },
    { name: 'Paula Fredriksen', role: 'Historikerin des frühen Christentums (Boston University, Hebräische Universität)', work: 'From Jesus to Christ (1988); Jesus of Nazareth, King of the Jews (1999)' },
  ],
  steelman: `Die jüdische Forschung hat Jesus heimgeholt. Joseph Klausner zeigte 1922 auf Hebräisch, dass Jesus ganz im Judentum seiner Zeit stand: ein Lehrer der Gottes- und Nächstenliebe (Dtn 6,5; Lev 19,18), ein Meister des Gleichnisses wie die Rabbinen. Geza Vermes ordnete ihn 1973 den galiläischen Charismatikern zu – Wundertätern wie Honi dem Kreiszieher und Chanina ben Dosa, die Gott vertraulich wie ein Sohn seinen Vater anredeten. „Sohn Gottes" war im Judentum ein Ehrentitel für Gerechte und Könige, keine Aussage über göttliches Wesen. In den ältesten Evangelien beansprucht Jesus nie, Gott zu sein: „Was nennst du mich gut? Niemand ist gut als Gott allein" (Mk 10,18); den Tag des Endes kenne „auch der Sohn nicht" (Mk 13,32). Die Vergottung Jesu entstand erst Jahrzehnte später in einer heidenchristlichen, hellenistischen Umwelt, die Gottmenschen kannte – bei Paulus und im Johannesevangelium. Mit dem jüdischen Monotheismus des Schma ist sie unvereinbar. Und da Jesus die messianischen Erwartungen – Friede, Tempel, Sammlung Israels – nicht erfüllte, war er ein großer jüdischer Lehrer, aber weder Messias noch Gott.`,
  biblical: {
    summary: `Die jüdische Jesusforschung hat recht: Jesus war durch und durch Jude. Aber gerade die **ältesten** Quellen zeigen einen Juden, der mit jüdischen Kategorien Ansprüche erhebt, die kein Reformer erhebt: Er vergibt Sünden aus eigener Vollmacht – „Wer kann Sünden vergeben als Gott allein?" (Mk 2,7); er ist „Herr auch über den Sabbat" (Mk 2,28); er stellt sein „Ich aber sage euch" neben die Tora (Mt 5,21–48); er stillt den Sturm und geht auf dem Meer – Taten, die die Hebräische Bibel Gott zuschreibt (Ps 107,29; Hiob 9,8); und vor dem Hohen Rat bekennt er sich als der Menschensohn aus Dan 7, der „zur Rechten der Kraft" sitzt und „mit den Wolken des Himmels" kommt – worauf er wegen Gotteslästerung verurteilt wird (Mk 14,61–64).`,
    detail: `**1. Markus, nicht nur Johannes.** Die genannten Stellen stammen aus dem Markusevangelium, das die Forschung meist für das älteste hält. Die Behauptung, nur Johannes kenne einen göttlichen Jesus, trifft nicht zu.

**2. Der Menschensohn aus Daniel 7.** Dem „wie eines Menschen Sohn", der mit den Wolken kommt, wird „Macht, Ehre und Reich gegeben, dass ihm alle Völker und Leute aus so vielen verschiedenen Sprachen dienen sollen" (Dan 7,13–14). Mit den Wolken zu fahren ist in der Hebräischen Bibel ein Vorrecht Gottes (Ps 104,3; Jes 19,1).

**3. Frühe jüdische Christusverehrung.** Schon um 50 n. Chr. zitiert Paulus das aramäische Gebet „Maranatha – Unser Herr, komm!" (1 Kor 16,22) – ein Gebet der aramäisch sprechenden, jüdischen Urgemeinde an Jesus. In 1 Kor 8,6 formuliert er das Schma so um, dass Jesus in die Identität des einen Gottes einbezogen wird: „ein Gott, der Vater … und ein Herr, Jesus Christus". In Phil 2,10–11 wendet er Jes 45,23 – „Mir sollen sich alle Knie beugen" – auf Jesus an.`,
    sources: [
      { kind: 'bibel', work: 'Markus', ref: '2,5–7', quote: `Da aber Jesus ihren Glauben sah, sprach er zu dem Gichtbrüchigen: Mein Sohn, deine Sünden sind dir vergeben. Es waren aber etliche Schriftgelehrte, die saßen allda und gedachten in ihrem Herzen: Wie redet dieser solche Gotteslästerung? Wer kann Sünden vergeben denn allein Gott?`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Markus', ref: '14,61–64', quote: `Da fragte ihn der Hohepriester abermals und sprach zu ihm: Bist du Christus, der Sohn des Hochgelobten? Jesus aber sprach: Ich bin's; und ihr werdet sehen des Menschen Sohn sitzen zur rechten Hand der Kraft und kommen mit des Himmels Wolken. Da zerriß der Hohepriester seinen Rock und sprach: Was bedürfen wir weiter Zeugen? Ihr habt gehört die Gotteslästerung.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Daniel', ref: '7,13–14', quote: `Ich sah in diesem Gesicht des Nachts, und siehe, es kam einer in des Himmels Wolken wie eines Menschen Sohn bis zu dem Alten und ward vor ihn gebracht. Der gab ihm Gewalt, Ehre und Reich, daß ihm alle Völker, Leute und Zungen dienen sollten. Seine Gewalt ist ewig, die nicht vergeht.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '8,6', quote: `So haben wir doch nur einen Gott, den Vater, von welchem alle Dinge sind und wir zu ihm; und einen HERRN, Jesus Christus, durch welchen alle Dinge sind und wir durch ihn.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '16,22', quote: `So jemand den HERRN Jesus Christus nicht liebhat, der sei Anathema. Maran atha!`, original: 'μαρανα θα (aram. māranā tā – „Unser Herr, komm!")', translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptische Kirche bekennt Jesus Christus als den menschgewordenen Gott-Logos, „wahrer Gott vom wahren Gott", der zugleich wahrhaft Mensch und – nach dem Fleisch – Sohn Davids und Sohn Abrahams ist (Mt 1,1). Sie hat keinen Grund, die jüdische Herkunft Jesu kleinzureden; sie liest in jeder Liturgie die Propheten und Psalmen als Zeugnis über ihn. Die Väter haben genau die Stellen, auf die sich Vermes stützt (Mk 13,32; Mk 10,18), ausführlich behandelt: Athanasius erklärt, Christus habe als Mensch „nicht gewusst", was er als Gott weiß – weil er sich unserer Natur ganz angenommen hat (Contra Arianos III,42–46).`,
    detail: `Für Kyrill von Alexandrien ist gerade die echte Menschlichkeit Jesu – sein Hunger, seine Müdigkeit, sein Nichtwissen, seine Tränen – Teil des Heilsgeheimnisses: Der Logos macht sich alles Menschliche „zu eigen" (oikeiōsis), ohne aufzuhören, Gott zu sein. Wer nur den Menschen sieht, sieht richtig, aber nicht genug; wer nur den Gott sieht, verfehlt die Menschwerdung. Die koptische Christologie („eine fleischgewordene Natur des Gott-Logos", ohne Vermischung und ohne Trennung) hält beides zusammen.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Reden gegen die Arianer (Orationes contra Arianos)', ref: 'III,42–46', year: 'um 340', quote: `Der Sohn sagt „ich weiß nicht" nicht als Logos, sondern um des Fleisches willen, das er angenommen hat; denn es ist dem Menschen eigen, nicht zu wissen.`, status: 'paraphrase' },
      { kind: 'konzil', work: 'Glaubensbekenntnis von Nizäa', year: '325', quote: `… Gott von Gott, Licht vom Licht, wahrer Gott vom wahren Gott, gezeugt, nicht geschaffen, eines Wesens mit dem Vater.`, status: 'verbatim' },
    ],
  },
  opposingView: {
    summary: `Die moderne jüdische Jesusforschung – Klausner (1922), David Flusser (*Jesus*, 1968), Vermes (1973), Amy-Jill Levine (2006) – hat die jüdische Prägung Jesu eindrucksvoll herausgearbeitet; christliche Forscher haben vieles davon übernommen. Umstritten ist die Frage, wann und wo die Verehrung Jesu als göttlich entstand. Die ältere religionsgeschichtliche Schule (Wilhelm Bousset, *Kyrios Christos*, 1913) vermutete eine späte hellenistische Entwicklung; heute vertreten Larry Hurtado, Richard Bauckham und Martin Hengel eine **sehr frühe, jüdische** Christusverehrung. Der jüdische Talmudist Daniel Boyarin (*The Jewish Gospels*, 2012) argumentiert sogar, die Vorstellung eines göttlichen Messias (Menschensohn) habe es im Judentum schon vor Jesus gegeben.`,
    detail: `Vermes' These vom „Menschensohn" als bloßer aramäischer Umschreibung für „ich" bzw. „ein Mensch" hat Anhänger, wird aber für Mk 14,62 – wo Dan 7,13 und Ps 110,1 ausdrücklich verbunden werden – von vielen Forschern als unzureichend angesehen. Klausner selbst sah in Jesu Selbstbewusstsein etwas, das über die Propheten hinausging, und kam deshalb zu dem Schluss, Jesu Lehre sei zugleich „Judentum und Nicht-Judentum" gewesen.`,
    sources: [
      { kind: 'gegner', author: 'Joseph Klausner', work: 'Jesus of Nazareth: His Life, Times, and Teaching', year: '1922 (hebr.), 1925 (engl.)', quote: `Klausner würdigt Jesus als großen Lehrer der Sittlichkeit und Meister des Gleichnisses, sieht aber in seiner Lehre Elemente, die den nationalen Rahmen des Judentums sprengten, und lehnt ihn als Messias ab.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Geza Vermes', work: 'Jesus the Jew: A Historian\'s Reading of the Gospels', year: '1973', quote: `Jesus sei als galiläischer Chasid und charismatischer Wundertäter in der Art Honis und Chaninas ben Dosa zu verstehen; die Hoheitstitel hätten im Judentum keine göttliche Bedeutung gehabt.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Daniel Boyarin', work: 'The Jewish Gospels: The Story of the Jewish Christ', year: '2012', status: 'paraphrase', note: 'Boyarin ist jüdischer Talmudforscher (Berkeley) und kein Christ.' },
      { kind: 'juedisch', work: 'Mischna, Taanit', ref: '3,8', quote: `Honi der Kreiszieher betete um Regen und sprach zu Gott wie ein Sohn, der sich bei seinem Vater etwas erbittet.`, status: 'paraphrase', note: 'Grundlage für Vermes\' Vergleich.' },
    ],
  },
  quickAnswer: `Ja, Jesus war ganz Jude – und dafür sind wir jüdischen Gelehrten wie Klausner und Vermes dankbar. Aber gerade im ältesten Evangelium tut dieser Jude, was kein Reformer tut: Er vergibt Sünden aus eigener Vollmacht („Wer kann Sünden vergeben als Gott allein?", Mk 2,7), nennt sich Herr über den Sabbat und bekennt sich vor dem Hohen Rat als der Menschensohn aus Daniel 7, der mit den Wolken kommt – und wird dafür als Gotteslästerer verurteilt. Und schon zwanzig Jahre später beten jüdische Christen auf Aramäisch zu ihm: „Maranatha – Unser Herr, komm!" Das ist keine späte griechische Erfindung.`,
  keyPoints: [
    `**Gemeinsamkeit:** Jesus war Jude – das ist eine christliche Grundwahrheit (Mt 1,1; Joh 4,22), keine Entdeckung gegen die Kirche.`,
    `**Ansprüche im ältesten Evangelium:** Sündenvergebung, Herr des Sabbats, „Ich aber sage euch", Sturmstillung, Menschensohn aus Dan 7 – alles bei Markus.`,
    `**Jüdische Kategorien, nicht griechische:** Dan 7, Ps 110, das Schma – die Christologie wurzelt in der Hebräischen Bibel.`,
    `**Frühe jüdische Christusverehrung:** Maranatha (1 Kor 16,22), 1 Kor 8,6, Phil 2,10–11 – innerhalb von rund zwanzig Jahren unter Juden (Hurtado, Bauckham, Hengel).`,
    `**Der Chasid-Vergleich reicht nicht:** Honi und Chanina vergaben keine Sünden, beanspruchten nicht das Weltgericht und wurden nicht als „König der Juden" gekreuzigt und danach als Auferstandener verehrt.`,
    `**Mk 10,18 und 13,32** zeigen echte Menschlichkeit, keine Leugnung der Gottheit – das haben die Väter ausführlich bedacht.`,
  ],
  voices: [
    {
      person: 'hurtado',
      role: 'als Historiker der frühen Christusverehrung',
      text: `Hurtado hat gezeigt, dass die Verehrung Jesu – Gebet zu ihm, Anrufung seines Namens, Taufe auf seinen Namen, Lieder über ihn – nicht das Ergebnis einer langsamen Hellenisierung war, sondern als „Explosion" in den ersten Jahren unter jüdischen Gläubigen entstand. Diese Juden blieben strenge Monotheisten und verehrten keine anderen Mittlerwesen; dass sie Jesus in ihre Anbetung einbezogen, sei historisch erklärungsbedürftig – und am besten durch ihre Überzeugung, Gott selbst habe ihn auferweckt und erhöht.`,
      sources: [{ kind: 'fachliteratur', author: 'Larry W. Hurtado', work: 'Lord Jesus Christ: Devotion to Jesus in Earliest Christianity', year: '2003', status: 'paraphrase' }],
    },
    {
      person: 'bauckham',
      role: 'als Neutestamentler des jüdischen Monotheismus',
      text: `Bauckham beschreibt den jüdischen Monotheismus als Bekenntnis zur einzigartigen Identität des einen Gottes: Schöpfer aller Dinge und Herrscher über alles. Die ersten Christen hätten Jesus nicht als zweiten Gott neben den einen gestellt, sondern ihn in diese Identität einbezogen – „christologischer Monotheismus". Das zeige sich etwa darin, dass Paulus das Schma in 1 Kor 8,6 auf Vater und Sohn verteilt.`,
      sources: [{ kind: 'fachliteratur', author: 'Richard Bauckham', work: 'Jesus and the God of Israel', year: '2008', status: 'paraphrase' }],
    },
    {
      person: 'michael-brown',
      role: 'als messianisch-jüdischer Semitist',
      text: `Brown weist darauf hin, dass die Hebräische Bibel selbst Hinweise auf eine Vielheit in Gott enthält – Gott, der erscheint und doch nicht gesehen wird, der „Engel des HERRN", der als Gott spricht, Gottes Wort und Geist als handelnde Größen. Für ihn ist die Gottheit des Messias nicht ein heidnischer Fremdkörper, sondern die Erfüllung dieser Linien der Schrift.`,
      sources: [{ kind: 'fachliteratur', author: 'Michael L. Brown', work: 'Answering Jewish Objections to Jesus, Bd. 2: Theological Objections', year: '2000', status: 'paraphrase' }],
    },
    {
      person: 'athanasius',
      role: 'als Ausleger der „menschlichen" Worte Jesu',
      text: `Athanasius setzte sich mit denselben Bibelstellen auseinander, auf die sich heute Vermes beruft – vor allem Mk 13,32 („auch der Sohn nicht"). Seine Regel: Die Schrift spricht von Christus auf zweifache Weise – als dem ewigen Logos und als dem, der unsertwegen Mensch wurde. Was menschlich ist an ihm, ist wirklich menschlich; gerade darum kann er uns retten.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Reden gegen die Arianer', ref: 'III,26–58', year: 'um 340', status: 'paraphrase' }],
    },
    {
      person: 'edersheim',
      role: 'als jüdischer Gelehrter, der Christ wurde',
      text: `Edersheim, in Wien als Jude geboren, beschrieb in seinem großen Werk über das Leben Jesu dessen Umwelt aus der Kenntnis der rabbinischen Literatur heraus. Er zeigte, wie Jesu Worte und Taten in die jüdische Welt eingebettet sind – und wie gerade vor diesem Hintergrund sein Anspruch hervortritt, der Messias und Sohn Gottes zu sein, der die Hoffnungen Israels erfüllt.`,
      sources: [{ kind: 'fachliteratur', author: 'Alfred Edersheim', work: 'The Life and Times of Jesus the Messiah', year: '1883', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'nie-gott-beansprucht',
      objection: `In den synoptischen Evangelien sagt Jesus nie: „Ich bin Gott." Das steht nur bei Johannes, dem spätesten und am stärksten hellenisierten Evangelium.`,
      objectionBy: 'Geza Vermes',
      answer: `Jesus sagt es nicht mit griechischen Begriffen, sondern mit jüdischen Taten und Bildern. Bei Markus vergibt er Sünden, und die Schriftgelehrten verstehen sofort: „Wer kann Sünden vergeben als Gott allein?" (2,7). Er nennt sich „Herr über den Sabbat" (2,28), den Gott eingesetzt hat. Und vor dem Hohen Rat bekennt er sich als der Menschensohn aus Dan 7, der „mit den Wolken des Himmels" kommt (14,62) – worauf der Hohepriester sein Gewand zerreißt: Gotteslästerung.`,
      followUps: [
        {
          id: 'menschensohn-nur-mensch',
          objection: `„Menschensohn" (bar enasch) ist im Aramäischen eine Umschreibung für „ein Mensch" oder „ich". Daraus eine göttliche Gestalt zu machen, ist christliche Überinterpretation.`,
          objectionBy: 'Geza Vermes',
          answer: `In vielen Sätzen kann das stimmen. Aber in Mk 14,62 verbindet Jesus „Menschensohn" ausdrücklich mit Dan 7,13 („mit den Wolken des Himmels") und Ps 110,1 („zur Rechten"). Der Menschensohn in Daniel empfängt ewige Herrschaft, und „alle Völker sollen ihm dienen" (Dan 7,14). Mit den Wolken zu fahren, ist in der Hebräischen Bibel Gottes Vorrecht (Ps 104,3; Jes 19,1). Selbst der jüdische Talmudist Daniel Boyarin argumentiert, dass Dan 7 eine göttlich-menschliche Gestalt beschreibt.`,
          followUps: [
            {
              id: 'boyarin-aussenseiter',
              objection: `Boyarin ist ein Provokateur. Die meisten jüdischen Gelehrten sehen das anders.`,
              objectionBy: 'Rabbi Shmuley Boteach',
              answer: `Boyarin ist einer der angesehensten Talmudforscher der Gegenwart, und er steht nicht allein: Alan Segal hat schon 1977 gezeigt, dass die Rabbinen eine Lehre von „zwei Mächten im Himmel" kannten und bekämpften. Ich muss nicht alle Thesen Boyarins übernehmen. Mein Punkt ist nur: Die Vorstellung einer zweiten, göttlichen Gestalt neben dem Höchsten war im antiken Judentum denkbar – sie ist kein heidnischer Import.`,
              sources: [
                { kind: 'fachliteratur', author: 'Alan F. Segal', work: 'Two Powers in Heaven: Early Rabbinic Reports about Christianity and Gnosticism', year: '1977', status: 'paraphrase' },
              ],
              followUps: [
                {
                  id: 'zwei-maechte-haeresie',
                  objection: `Eben: Die Rabbinen haben die „zwei Mächte" als Ketzerei verurteilt. Also ist die Vorstellung unjüdisch.`,
                  objectionBy: 'Rabbinischer Einwand',
                  answer: `Dass die Rabbinen sie ab dem 2. Jahrhundert bekämpften, zeigt, dass sie unter Juden lebendig war – man verurteilt nicht, was niemand vertritt. Die Grenze wurde später gezogen, teils in Abgrenzung von den Christen. Im 1. Jahrhundert konnte der jüdische Philosoph Philo von Alexandrien den Logos sogar einen „zweiten Gott" nennen. Das Judentum zur Zeit Jesu hatte Raum für Gottes Wort und Weisheit als von Gott unterschieden und doch göttlich.`,
                  sources: [
                    { kind: 'juedisch', author: 'Philo von Alexandrien', work: 'Fragen und Antworten zur Genesis (Quaestiones in Genesin)', ref: 'II,62', year: '1. Jh.', quote: `Philo nennt den Logos den „zweiten Gott" (deuteros theos), nach dessen Bild der Mensch geschaffen sei.`, status: 'paraphrase', note: 'Erhalten nur in armenischer Übersetzung, griechisches Fragment bei Eusebius (Praep. Ev. VII,13).' },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'verurteilt-wegen-tempel',
          objection: `Jesus wurde nicht wegen göttlicher Ansprüche verurteilt, sondern weil er den Tempel bedrohte. Das war politisch gefährlich – deshalb die Kreuzigung.`,
          objectionBy: 'Paula Fredriksen',
          answer: `Die Tempelanklage spielt eine Rolle – aber nach Markus scheiterte sie, weil die Zeugen sich widersprachen (14,56–59). Das Urteil fiel erst nach Jesu Antwort: „Ich bin's; und ihr werdet sehen des Menschen Sohn sitzen zur Rechten der Kraft" (14,62–64). Und auch der Anspruch, über den Tempel zu verfügen, ist kein Anspruch eines Reformers, sondern eines, der über Gottes Haus Vollmacht hat.`,
        },
      ],
    },
    {
      id: 'hellenistische-vergottung',
      objection: `Die Vergottung Jesu ist ein Produkt der griechisch-römischen Welt, die Gottmenschen und Kaiserkult kannte. Sie entstand Jahrzehnte später bei Heidenchristen, nicht bei seinen jüdischen Jüngern.`,
      objectionBy: 'Geza Vermes',
      answer: `Die Quellen zeigen das Gegenteil. Um 50 n. Chr. zitiert Paulus das aramäische Gebet „Maranatha – Unser Herr, komm!" (1 Kor 16,22) – ein Gebet der aramäisch sprechenden, jüdischen Urgemeinde **an Jesus**. In 1 Kor 8,6 bezieht er Jesus in das Schma ein, in Phil 2,10–11 wendet er Jes 45,23 – „mir sollen sich alle Knie beugen", ein Wort Gottes – auf Jesus an. Larry Hurtado spricht von einer „Explosion" der Christusverehrung in den ersten zwei Jahrzehnten unter Juden.`,
      followUps: [
        {
          id: 'paulus-hellenist',
          objection: `Paulus war ein hellenistischer Jude aus Tarsus, beeinflusst von Mysterienkulten. Er hat das Christentum erfunden.`,
          objectionBy: 'Hyam Maccoby',
          answer: `Paulus nennt sich Pharisäer, ausgebildet bei Gamaliel in Jerusalem (Phil 3,5; Apg 22,3). Das Bekenntnis von Tod und Auferstehung hat er „empfangen" (1 Kor 15,3), und „Maranatha" ist Aramäisch, nicht Griechisch. Seine Gegner warfen ihm vieles vor, aber nie, er habe Jesus vergöttlicht – Petrus, Jakobus und Johannes gaben ihm „die Hand der Gemeinschaft" (Gal 2,9). Die Ableitung aus Mysterienkulten gilt in der Forschung weitgehend als überholt.`,
          followUps: [
            {
              id: 'schma-unvereinbar',
              objection: `Einen Menschen anzubeten ist mit dem Schma unvereinbar. Kein toratreuer Jude hätte das getan.`,
              objectionBy: 'Rabbi Shmuley Boteach',
              answer: `Und doch taten es Tausende toratreue Juden von Anfang an – Lukas berichtet von „vielen Tausend" gläubig gewordenen Juden, „und alle sind Eiferer für das Gesetz" (Apg 21,20). Sie fügten dem einen Gott keinen zweiten hinzu, sondern bekannten, dass Jesus in die Identität des einen Gottes gehört (1 Kor 8,6). Die Kirche bekennt bis heute das Schma: einen Gott – Vater, Sohn und Heiligen Geist.`,
              questionsBack: [
                `Wie erklärst du, dass strenge jüdische Monotheisten innerhalb weniger Jahre zu Jesus beteten?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'charismatiker-wie-honi',
      objection: `Jesus war ein galiläischer Charismatiker wie Honi der Kreiszieher und Chanina ben Dosa. Auch sie wirkten Wunder und redeten Gott wie einen Vater an. Niemand hat sie deshalb für Gott gehalten.`,
      objectionBy: 'Geza Vermes',
      answer: `Der Vergleich erklärt die Heilungen, aber nicht die Ansprüche. Honi betete um Regen; er vergab keine Sünden, stellte kein „Ich aber sage euch" neben die Tora, wählte keine Zwölf als neues Israel und kündigte nicht an, er werde als Menschensohn die Völker richten (Mt 25,31–32). Honi wurde nicht als „König der Juden" gekreuzigt, und niemand verkündete nach seinem Tod, Gott habe ihn auferweckt und erhöht.`,
      followUps: [
        {
          id: 'kreuzigung-politisch',
          objection: `Die Römer kreuzigten viele Aufrührer. Die Aufschrift „König der Juden" zeigt nur, dass Rom ihn für einen politischen Unruhestifter hielt.`,
          objectionBy: 'Paula Fredriksen',
          answer: `Genau – die Aufschrift (Mk 15,26) zeigt, dass es um einen messianischen Anspruch ging. Aber dann stellt sich die Frage: Andere messianische Bewegungen – Judas der Galiläer, später Bar Kochba – zerfielen mit dem Tod ihres Anführers. Gamaliel selbst nennt diese Regel (Apg 5,36–39). Warum wuchs die Bewegung Jesu nach seiner Hinrichtung, und zwar mit der Botschaft, der Gekreuzigte sei auferstanden?`,
          followUps: [
            {
              id: 'visionen-der-juenger',
              objection: `Die Jünger hatten Visionen aus Trauer. So etwas kennt die Psychologie.`,
              objectionBy: 'Historisch-kritischer Einwand',
              answer: `Trauervisionen erklären weder Erscheinungen vor Gruppen (1 Kor 15,5–7) noch die Bekehrung von Skeptikern wie Jakobus und Paulus noch das leere Grab. Bemerkenswert: Der orthodox-jüdische Gelehrte Pinchas Lapide kam zu dem Schluss, die Auferstehung Jesu sei ein reales Ereignis gewesen – ohne Jesus deshalb als Messias Israels anzuerkennen. Die Frage, wer dieser Jesus ist, stellt sich also auch jüdischen Forschern mit Ernst.`,
              sources: [
                { kind: 'gegner', author: 'Pinchas Lapide', work: 'Auferstehung. Ein jüdisches Glaubenserlebnis', year: '1977', quote: `Lapide hält die Auferstehung Jesu für ein historisches Geschehen, das den Glauben der Jünger erklärt, erkennt Jesus aber nicht als Messias Israels an.`, status: 'paraphrase' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'niemand-ist-gut',
      objection: `Jesus selbst wies es zurück: „Was nennst du mich gut? Niemand ist gut als Gott allein" (Mk 10,18). Und er gab zu, den Tag des Endes nicht zu kennen (Mk 13,32). Das sagt kein Gott.`,
      objectionBy: 'Rabbi Shmuley Boteach',
      answer: `Jesus sagt nicht: „Ich bin nicht gut." Er fragt: Weißt du, was du sagst, wenn du mich gut nennst – da doch nur Gott gut ist? Es ist eine Einladung zum Nachdenken. An anderer Stelle fragt er: „Welcher unter euch kann mich einer Sünde zeihen?" (Joh 8,46). Und Mk 13,32 stellt „den Sohn" ausdrücklich über die Engel. Athanasius erklärte: Christus spricht hier als Mensch, der unsere Natur ganz angenommen hat – auch ihr Nichtwissen.`,
      followUps: [
        {
          id: 'zwei-naturen-ausrede',
          objection: `Diese Unterscheidung „als Mensch – als Gott" ist eine bequeme Ausrede, mit der man jeden Widerspruch wegerklären kann.`,
          objectionBy: 'Geza Vermes',
          answer: `Sie ist nicht nachträglich erfunden, sondern ergibt sich aus dem Befund: Dieselben Evangelien zeigen Jesus hungrig, müde, weinend, wachsend „an Weisheit, Alter und Gnade" (Lk 2,52) – und zugleich mit Gottes Vollmacht handelnd. Wenn Gott wirklich Mensch geworden ist, müssen wir genau beides erwarten. Die koptische Kirche bekennt die Einung „ohne Vermischung": Die Menschheit wird nicht verschluckt, sondern bleibt echt.`,
        },
        {
          id: 'vater-groesser',
          objection: `Jesus sagt sogar: „Der Vater ist größer als ich" (Joh 14,28). Damit ist die Sache entschieden.`,
          objectionBy: 'Jüdischer Gesprächspartner',
          answer: `Die Väter verstanden das so: Der Vater ist „größer" als Ursprung, von dem der Sohn ewig gezeugt ist, und Christus spricht als der, der Knechtsgestalt angenommen hat (Phil 2,7). „Größer" heißt nicht „von anderem Wesen" – ein Sohn ist nicht weniger Mensch als sein Vater. Im selben Evangelium sagt Jesus: „Ich und der Vater sind eins" (10,30), und: „Wer mich sieht, der sieht den Vater" (14,9).`,
        },
      ],
    },
    {
      id: 'klausners-urteil',
      objection: `Klausner hat recht: Jesus war ein großer Lehrer der Sittlichkeit, aber seine Lehre löste das Judentum aus seinem nationalen Leben heraus. Deshalb hat das jüdische Volk ihn zu Recht abgelehnt.`,
      objectionBy: 'Joseph Klausner',
      answer: `Ich schätze Klausners Ehrlichkeit: Er sah, dass Jesu Selbstverständnis über das eines Propheten hinausging. Aber gerade darum passt „großer Morallehrer" nicht: Ein Lehrer, der Sünden vergibt und sich zum Richter der Welt erklärt, ist entweder mehr als ein Lehrer – oder kein guter Lehrer. Und Jesus wollte Israel nicht auflösen: „Ich bin nicht gekommen, das Gesetz aufzulösen, sondern zu erfüllen" (Mt 5,17); er sandte die Zwölf zuerst „zu den verlorenen Schafen aus dem Hause Israel" (Mt 10,6).`,
      followUps: [
        {
          id: 'kriterien-nicht-erfuellt',
          objection: `Selbst wenn er mehr beanspruchte: Er hat die messianischen Kriterien nicht erfüllt – kein Friede, kein Tempel, keine Sammlung der Zerstreuten.`,
          objectionBy: 'Rabbi Shmuley Boteach',
          answer: `Die Hebräische Bibel kennt zwei Bilder des Messias: den demütigen auf dem Esel (Sach 9,9) und den, „den sie durchbohrt haben" (Sach 12,10), den leidenden Knecht (Jes 53) und den herrschenden König. Dan 9,26 kündigt an, dass ein Gesalbter „ausgerottet" wird, **bevor** Stadt und Heiligtum zerstört werden – also vor 70 n. Chr. Die Kirche erwartet die Erfüllung der übrigen Verheißungen bei seiner Wiederkunft. Darüber lohnt sich ein eigenes Gespräch.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wer kann nach jüdischem Verständnis Sünden vergeben, die gegen Gott begangen wurden?`,
    `Warum zerriss der Hohepriester sein Gewand, als Jesus sich auf Dan 7,13 berief?`,
    `Wie erklärst du, dass aramäisch sprechende Juden schon in den ersten Jahren zu Jesus beteten („Maranatha")?`,
    `Warum zerfielen andere messianische Bewegungen nach dem Tod ihres Anführers, die Bewegung Jesu aber nicht?`,
    `Kann ein „großer Morallehrer" sich zum Richter der Welt erklären, ohne mehr zu sein als ein Lehrer?`,
  ],
  avoid: [
    `Nicht so tun, als hätten jüdische Forscher Jesus „falsch" verstanden. Ihre Einsichten über das Judentum Jesu sind wertvoll – knüpfe daran an.`,
    `Das Trilemma („Lügner, Verrückter oder Herr") nicht als Totschlagargument verwenden; der Gegner antwortet sofort: „oder Legende". Stütze dich auf die frühen Quellen.`,
    `Nicht „hellenistisch" als Schimpfwort für das Johannesevangelium akzeptieren, aber auch nicht leugnen, dass Johannes theologisch gestaltet.`,
    `Keine Gegenüberstellung „gesetzliches Judentum – befreiender Jesus". Das ist eine antijüdische Karikatur.`,
  ],
  concessions: [
    `Jesus war ein toratreuer Jude seiner Zeit; vieles in seiner Lehre hat Parallelen in der rabbinischen Tradition.`,
    `„Sohn Gottes" konnte im Judentum auch ein Ehrentitel für Könige und Gerechte sein; der Titel allein beweist keine Gottheit.`,
    `Das Johannesevangelium entfaltet die Christologie ausdrücklicher als die Synoptiker.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Larry W. Hurtado', work: 'Lord Jesus Christ: Devotion to Jesus in Earliest Christianity', year: '2003', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Richard Bauckham', work: 'Jesus and the God of Israel', year: '2008', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Daniel Boyarin', work: 'The Jewish Gospels', year: '2012', status: 'paraphrase' },
    { kind: 'gegner', author: 'Geza Vermes', work: 'Jesus the Jew', year: '1973', status: 'paraphrase' },
    { kind: 'gegner', author: 'Joseph Klausner', work: 'Jesus of Nazareth', year: '1925', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Historischer Jesus', 'Klausner', 'Vermes', 'Menschensohn', 'Frühe Christologie', 'Monotheismus'],
  related: [
    'historischer-jesus/gottheit-jesu-spaet-erfunden',
    'neues-testament/paulus-erfand-christentum',
    'judentum-messias/messias-kriterien-nicht-erfuellt',
    'judentum-messias/schma-schliesst-trinitaet-aus',
    'liberale-theologie/jesus-nur-morallehrer',
    'islam-gottheit-christi/vater-groesser-stunde-unbekannt',
  ],
};

export default claim;
