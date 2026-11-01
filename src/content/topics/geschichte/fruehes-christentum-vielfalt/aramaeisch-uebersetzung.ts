import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'aramaeisch-uebersetzung',
  title: `„Jesus sprach Aramäisch – die griechischen Evangelien sind schon eine verfälschende Übersetzung."`,
  proponents: [
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, UNC', work: 'Misquoting Jesus (2005); Jesus, Interrupted (2009) – die Jünger als aramäischsprachige, ungebildete Bauern' },
    { name: 'Reza Aslan', role: 'Religionswissenschaftler, Publizist', work: 'Zealot (2013)' },
    { name: 'George M. Lamsa', role: 'Assyrischer Übersetzer (†1975), Vertreter der Peschitta-Priorität', work: 'The Holy Bible from the Ancient Eastern Text (1933)' },
    { name: 'Muslimische Apologeten', role: 'z. B. in Debatten über das „ursprüngliche Indschil"', work: 'Argument: Der Koran ist im Original erhalten, die Worte Jesu nur in Übersetzung' },
  ],
  steelman: `Jesus und seine Jünger sprachen Aramäisch, die Sprache der einfachen Leute Galiläas. Die Evangelien aber sind auf Griechisch geschrieben – Jahrzehnte später, von Autoren, die wahrscheinlich nicht zu den Augenzeugen gehörten und für ein heidnisches Publikum schrieben. Jede Übersetzung ist schon Deutung: „Traduttore, traditore" – der Übersetzer ist ein Verräter. Wortspiele, Nuancen, kulturelle Bedeutungen gehen verloren, und Missverständnisse schleichen sich ein: Aus einem aramäischen „Menschensohn", der einfach „ein Mensch" heißen konnte, wurde ein himmlischer Titel; aus „Seil" vielleicht ein „Kamel". Papias berichtet sogar, Matthäus habe ursprünglich auf Hebräisch geschrieben – dieses Original ist verloren. Wir haben also nicht die Worte Jesu, sondern griechische Interpretationen von Menschen, die ihn nie gehört haben. Der Koran dagegen ist in der Sprache seiner Offenbarung erhalten – Wort für Wort.`,
  biblical: {
    summary: `Die Evangelien verschweigen nicht, dass Jesus Aramäisch sprach – sie bewahren an entscheidenden Stellen sogar seine aramäischen Worte und übersetzen sie für ihre Leser: „Talitha kum" (Mk 5,41), „Effata" (Mk 7,34), „Abba" (Mk 14,36), „Eloi, Eloi, lema sabachthani" (Mk 15,34), „Rabbuni" (Joh 20,16), „Kephas" (Joh 1,42). Das zeigt Treue zur Überlieferung, nicht Verfälschung. Übersetzung gehört zum Wesen des Evangeliums: An Pfingsten hört jeder die großen Taten Gottes „in seiner eigenen Sprache" (Apg 2,8), und vor dem Thron stehen Menschen „aus allen Völkern und Sprachen" (Offb 7,9). Das Christentum hatte nie eine heilige Sprache, außerhalb derer Gottes Wort nicht Gottes Wort wäre.`,
    detail: `**Aramäische Worte und Wendungen im Neuen Testament:**
- Talitha kum („Mädchen, steh auf", Mk 5,41)
- Effata („Tu dich auf", Mk 7,34)
- Abba („Vater", Mk 14,36; Röm 8,15; Gal 4,6 – sogar in griechischsprachigen Gemeinden des Paulus!)
- Eloi, Eloi, lema sabachthani (Mk 15,34; Mt 27,46 „Eli, Eli")
- Korban („Opfergabe", Mk 7,11), Rabbuni (Joh 20,16), Kephas (Joh 1,42), Boanerges (Mk 3,17), Golgatha, Gabbatha, Raka (Mt 5,22), Mammon
- Maranatha („Unser Herr, komm!", 1 Kor 16,22) – ein Gebetsruf der aramäischsprachigen Urgemeinde, den Paulus Griechen unübersetzt weitergibt.

**Zweisprachigkeit:** Galiläa lag zwischen griechisch geprägten Städten (Sepphoris, Tiberias, Dekapolis). Griechisch war Verkehrssprache des östlichen Mittelmeers; viele Juden waren zwei- oder dreisprachig (Aramäisch, Hebräisch, Griechisch). Die Kreuzesinschrift war dreisprachig (Joh 19,20).`,
    sources: [
      { kind: 'bibel', work: 'Markus', ref: '5,41', quote: `Und ergriff das Kind bei der Hand und sprach zu ihr: Talitha kumi! das ist verdolmetscht: Mägdlein, ich sage dir, stehe auf!`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Markus', ref: '15,34', quote: `Und um die neunte Stunde rief Jesus laut und sprach: Eli, Eli, lama asabthani? das ist verdolmetscht: Mein Gott, mein Gott, warum hast du mich verlassen?`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '2,8', quote: `Wie hören wir denn ein jeglicher seine Sprache, darin wir geboren sind?`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '16,22', quote: `Maranatha – unser Herr, komm!`, status: 'paraphrase', note: 'Aramäischer Gebetsruf der Urgemeinde in einem griechischen Brief.' },
    ],
  },
  church: {
    summary: `Die Kirche hat das Evangelium von Anfang an übersetzt: ins Syrische (die Sprache der aramäischsprachigen Christen), ins Lateinische, Koptische, Armenische, Äthiopische und Georgische. Die koptische Kirche besitzt mit den sahidischen und bohairischen Bibelübersetzungen einige der ältesten Übersetzungen überhaupt (ab dem 3. Jahrhundert). Ihre Liturgie verbindet bis heute Koptisch, Griechisch (Kyrie eleison) und Arabisch, in der Diaspora auch Englisch, Deutsch und andere Sprachen. Für die orthodoxe Theologie ist das Wort Gottes im höchsten Sinn Christus selbst, der Logos (Joh 1,1.14); die Schrift ist sein inspiriertes Zeugnis, das in jeder Sprache wahr bleibt.`,
    sources: [
      { kind: 'bibel', work: 'Johannes', ref: '1,14', quote: `Und das Wort ward Fleisch und wohnete unter uns, und wir sahen seine Herrlichkeit, eine Herrlichkeit als des eingeborenen Sohnes vom Vater, voller Gnade und Wahrheit.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Offenbarung', ref: '7,9', quote: `Eine große Schar aus allen Heiden und Völkern und Sprachen steht vor dem Thron und vor dem Lamm.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die Forschung ist sich einig, dass Jesus hauptsächlich Aramäisch sprach und wohl Hebräisch verstand; ob und wie gut er Griechisch sprach, ist offen. Ebenso unstrittig ist, dass die Evangelien ursprünglich griechisch geschrieben wurden; die Thesen einer aramäischen Ursprache der Evangelien (etwa George Lamsas Peschitta-Priorität) werden in der Fachwelt nicht vertreten – die Peschitta ist eine syrische Übersetzung aus dem Griechischen. Forscher wie Matthew Black, Joachim Jeremias und Maurice Casey haben aramäische Spuren in den Jesusworten untersucht; sie zeigen, dass die griechische Überlieferung vielfach aramäische Rede bewahrt. Diskutiert wird, wie wörtlich die Evangelien Jesus wiedergeben: Historiker sprechen von der „ipsissima vox" (der eigentlichen Stimme) statt der „ipsissima verba" (den genauen Worten).`,
    sources: [
      { kind: 'fachliteratur', author: 'Matthew Black', work: 'An Aramaic Approach to the Gospels and Acts', year: '3. Aufl. 1967', quote: `Untersuchung aramäischer Spracheigentümlichkeiten in den Evangelien; die Jesusworte zeigten vielfach aramäischen Hintergrund.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Joachim Jeremias', work: 'Neutestamentliche Theologie. Erster Teil: Die Verkündigung Jesu', year: '1971', quote: `Charakteristische Redeweisen Jesu (Abba-Anrede, Amen-Einleitung, Parallelismus) ließen seine eigene Stimme erkennen.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Papias von Hierapolis (bei Eusebius)', work: 'Kirchengeschichte', ref: 'III,39,16', year: 'frühes 2. Jh.', quote: `Matthäus hat die Worte in hebräischer Sprache zusammengestellt; jeder aber übersetzte sie, so gut er konnte.`, status: 'paraphrase', note: 'Bedeutung umstritten: hebräische/aramäische Sprache oder hebräischer Darstellungsstil?' },
      { kind: 'gegner', author: 'George M. Lamsa', work: 'The Holy Bible from the Ancient Eastern Text', year: '1933', quote: `Die aramäische Peschitta sei der Originaltext des Neuen Testaments.`, status: 'paraphrase', note: 'In der Fachwissenschaft abgelehnt.' },
    ],
  },
  quickAnswer: `Ja, Jesus sprach Aramäisch – und die Evangelien sagen das selbst, indem sie seine aramäischen Worte bewahren: „Talitha kum", „Effata", „Abba", „Eli, Eli, lema sabachthani". Übersetzung ist nicht Verfälschung; sonst wäre jede Bibel, jede Koranübersetzung und jedes Dolmetschen eine Lüge. Die Evangelisten waren zweisprachige Juden, die nahe an der Überlieferung standen. Übrigens: Auch der Koran zitiert Jesus, Mose und Noah auf Arabisch, obwohl sie nicht Arabisch sprachen – er setzt also selbst voraus, dass Gottes Botschaft in einer anderen Sprache treu wiedergegeben werden kann.`,
  keyPoints: [
    `**Die Evangelien bewahren Aramäisch:** Talitha kum, Effata, Abba, Eloi lema sabachthani, Rabbuni, Kephas, Maranatha – Zeichen der Treue, nicht der Verfälschung.`,
    `**Zweisprachige Welt:** Galiläa war von griechischen Städten umgeben; Griechisch war Verkehrssprache; die Evangelisten waren mit beiden Sprachwelten vertraut.`,
    `**Übersetzung ≠ Verfälschung:** Bedeutung lässt sich übertragen; man misst eine Übersetzung an ihrer Treue, nicht daran, dass sie eine Übersetzung ist.`,
    `**Stimme statt Tonband:** Die Evangelien geben Jesu Stimme (ipsissima vox) zuverlässig wieder, ohne Diktat-Anspruch.`,
    `**Peschitta-Priorität vermeiden:** Die Peschitta ist eine syrische Übersetzung aus dem Griechischen.`,
    `**Respektvoller Vergleich zum Koran:** Er gibt die Worte früherer Propheten selbst in Übersetzung wieder (vgl. 14:4) – und die meisten Muslime lesen ihn mit Hilfe von Übersetzungen.`,
  ],
  voices: [
    {
      person: 'joachim-jeremias',
      role: 'als Erforscher der aramäischen Muttersprache Jesu',
      text: `Jeremias hat einen großen Teil seines Lebens darauf verwendet, die aramäische Sprachgestalt hinter den griechischen Jesusworten zu rekonstruieren. Er fand charakteristische Merkmale: die Gottesanrede „Abba", das einleitende „Amen, ich sage euch", poetische Parallelismen, Rhythmus und Wortspiele, die erst im Aramäischen hörbar werden. Für ihn zeigen sie, dass die griechische Überlieferung die Stimme Jesu mit erstaunlicher Treue bewahrt hat.`,
      sources: [
        { kind: 'fachliteratur', author: 'Joachim Jeremias', work: 'Neutestamentliche Theologie I', year: '1971', quote: `Die ipsissima vox Jesu lasse sich an aramäischen Sprachmerkmalen erkennen.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'martin-hengel',
      role: 'als Historiker des hellenistischen Judentums',
      text: `Hengel hat gezeigt, dass das Judentum Palästinas seit dem 3. Jahrhundert v. Chr. tief vom Hellenismus durchdrungen war: Griechisch wurde in Jerusalem und Galiläa gesprochen, geschrieben und gelesen; es gab griechischsprachige Synagogen (vgl. Apg 6,9). Die scharfe Trennung zwischen einer „aramäischen" Jesusbewegung und einem „griechischen" Christentum ist für ihn ein Konstrukt. Schon die Urgemeinde in Jerusalem war zweisprachig – mit „Hebräern" und „Hellenisten" (Apg 6,1).`,
      sources: [
        { kind: 'fachliteratur', author: 'Martin Hengel', work: 'Judentum und Hellenismus', year: '1969', quote: `Das palästinische Judentum sei seit vorchristlicher Zeit hellenistisch geprägt gewesen; Zwei- und Mehrsprachigkeit seien verbreitet.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'bauckham',
      role: 'als Neutestamentler zur Augenzeugenschaft',
      text: `Bauckham hat die in den Evangelien genannten Personennamen mit der Namensstatistik des jüdischen Palästina verglichen. Die Häufigkeiten passen genau – Simon, Josef, Lazarus, Judas, Johannes – und die Evangelien unterscheiden gleichnamige Personen mit Beinamen, wie es nötig war, wenn es viele Simons gab. Für ihn zeigt das, dass die griechischen Evangelien auf Überlieferungen aus dem aramäischsprachigen Palästina zurückgehen, die von Augenzeugen getragen wurden.`,
      sources: [
        { kind: 'fachliteratur', author: 'Richard Bauckham', work: 'Jesus and the Eyewitnesses', year: '2006, 2. Aufl. 2017', quote: `Die Namensverteilung in den Evangelien entspricht der des jüdischen Palästina und deutet auf Augenzeugenüberlieferung.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'lamin-sanneh',
      role: 'als Historiker der Übersetzbarkeit des Evangeliums',
      text: `Sanneh, der in einer muslimischen Familie in Gambia aufwuchs, beschreibt den Unterschied zwischen dem Christentum und Religionen mit einer heiligen Offenbarungssprache: Das Christentum sei von Anfang an eine „übersetzte Religion" gewesen – die Worte Jesu sind uns schon im Neuen Testament auf Griechisch überliefert. Diese Übersetzbarkeit habe die Kulturen der Völker gestärkt, weil sie jede Sprache für würdig erklärt, Gottes Wort zu tragen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Lamin Sanneh', work: 'Translating the Message. The Missionary Impact on Culture', year: '1989', quote: `Das Christentum sei seinem Wesen nach übersetzbar und habe keine exklusive heilige Sprache.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'ephraem',
      role: 'als Kirchenvater der aramäischsprachigen (syrischen) Christenheit',
      text: `Ephräm der Syrer schrieb im 4. Jahrhundert in Syrisch, einem aramäischen Dialekt – in der Sprachfamilie Jesu. Seine Hymnen und Kommentare zeigen, dass die aramäischsprachigen Christen denselben Glauben an Christus, den menschgewordenen Sohn Gottes, bekannten wie die griechischsprachige Kirche. Die syrische Kirche las die Evangelien in einer Übersetzung aus dem Griechischen – und sah darin keine Verfälschung, sondern das Evangelium ihres Herrn in ihrer eigenen Sprache.`,
      sources: [
        { kind: 'kirchenvater', author: 'Ephräm der Syrer', work: 'Hymnen über den Glauben', year: '4. Jh.', quote: `Bekenntnis zum menschgewordenen Sohn Gottes in syrischer (aramäischer) Sprache.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'uebersetzung-verfaelscht',
      objection: `Jesus sprach Aramäisch, die Evangelien sind griechisch. Jede Übersetzung verfälscht – wir haben also gar nicht, was Jesus sagte.`,
      objectionBy: 'Muslimischer Apologet',
      answer: `Übersetzung ist Übertragung von Bedeutung, nicht Fälschung – sonst wäre jeder Dolmetscher ein Lügner. Die Evangelien bewahren sogar Jesu aramäische Worte („Talitha kum", „Abba", „Eli, Eli, lema sabachthani") und übersetzen sie ausdrücklich. Wer so vorgeht, will treu überliefern, nicht verändern.`,
      followUps: [
        {
          id: 'nuancen-verloren',
          objection: `Aber Nuancen gehen immer verloren. Traduttore, traditore – das weiß jeder Übersetzer.`,
          objectionBy: 'Bart Ehrman',
          answer: `Manche Nuancen gehen verloren, das stimmt – Wortspiele etwa. Aber der Kern einer Aussage lässt sich übertragen: „Mein Gott, warum hast du mich verlassen" bedeutet auf Griechisch dasselbe wie auf Aramäisch. Der Maßstab einer Übersetzung ist ihre Treue, und die lässt sich prüfen – etwa an den aramäischen Spuren, die Forscher wie Jeremias und Black im griechischen Text nachgewiesen haben.`,
          followUps: [
            {
              id: 'ipsissima-verba',
              objection: `Dann gib zu: Wir haben nicht die genauen Worte Jesu.`,
              objectionBy: 'Bart Ehrman',
              answer: `Das gebe ich gern zu – und es ist kein Problem. Die Kirche hat nie behauptet, die Evangelien seien ein Tonbandprotokoll. Sie geben Jesu Stimme und Lehre zuverlässig wieder, so wie ein guter Bericht eine Rede zuverlässig wiedergibt. Für Christen ist das höchste Wort Gottes nicht ein Text, sondern eine Person: Christus, der Logos.`,
              followUps: [
                {
                  id: 'koran-original',
                  objection: `Genau da ist der Koran überlegen: Er ist in der Originalsprache der Offenbarung erhalten, Wort für Wort.`,
                  objectionBy: 'Muslimischer Apologet',
                  answer: `Ich respektiere, wie sorgfältig Muslime den arabischen Koran bewahren. Aber beachte: Der Koran selbst gibt die Worte Jesu, Moses und Noahs auf Arabisch wieder, obwohl sie Aramäisch oder Hebräisch sprachen – er setzt also voraus, dass Gottes Botschaft in einer anderen Sprache treu wiedergegeben werden kann. Und nach 14:4 sandte Gott jeden Gesandten in der Sprache seines Volkes; Jesu Botschaft war also aramäisch, und der Koran überliefert sie in Übersetzung.`,
                  sources: [
                    { kind: 'koran', work: 'Sure 14 (Ibrahim)', ref: '14:4', quote: `Wir haben keinen Gesandten gesandt außer in der Sprache seines Volkes, damit er ihnen deutlich mache.`, original: `wa-mā arsalnā min rasūlin illā bi-lisāni qawmihi li-yubayyina lahum`, status: 'paraphrase', url: 'https://quran.com/14/4' },
                  ],
                  followUps: [
                    {
                      id: 'arabisch-gottes-sprache',
                      objection: `Der Koran ist das unmittelbare Wort Gottes auf Arabisch. Übersetzungen sind nur Deutungen der Bedeutung, nicht der Koran selbst.`,
                      objectionBy: 'Muslimischer Apologet',
                      answer: `Das ist eine innerislamische Lehre, die ich respektiere, aber nicht zum Maßstab für das Evangelium machen muss. Das Christentum glaubt, dass Gott sich in einer Person offenbart hat, und dass jede Sprache würdig ist, von ihm zu sprechen – deshalb hörte an Pfingsten jeder die Botschaft in seiner Sprache. Bedenke auch: Die große Mehrheit der Muslime weltweit spricht nicht Arabisch als Muttersprache und versteht den Koran im Alltag ebenfalls mit Hilfe von Übersetzungen. Übersetzung ist also auch für sie der Weg zum Verstehen.`,
                      questionsBack: [`Wenn ein indonesischer Muslim den Koran nur über eine Übersetzung versteht – hat er dann Gottes Botschaft nicht verstanden?`],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'peschitta-original',
      objection: `Die aramäische Peschitta ist das Original des Neuen Testaments. Die griechischen Texte sind Übersetzungen davon.`,
      objectionBy: 'George M. Lamsa',
      answer: `Das vertritt in der Fachwissenschaft niemand. Die Peschitta ist eine syrische Übersetzung, die im 4./5. Jahrhundert ihre Standardform erhielt; sie geht auf griechische Vorlagen zurück. Die griechischen Handschriften sind älter, und das Neue Testament zitiert das Alte Testament oft nach der griechischen Septuaginta – das ergäbe in einem aramäischen Original keinen Sinn.`,
      followUps: [
        {
          id: 'syrische-kirche-zeugnis',
          objection: `Aber die aramäischsprachigen Christen des Ostens haben doch die ursprüngliche Tradition bewahrt.`,
          objectionBy: 'Vertreter der Aramäisch-Priorität',
          answer: `Die syrisch-orthodoxe Kirche und die Kirche des Ostens sind ehrwürdige alte Kirchen, und sie sprechen eine Sprache aus der Familie Jesu. Gerade sie lesen das Neue Testament aber in einer Übersetzung aus dem Griechischen – und sie bekennen denselben Glauben an Christus, den Sohn Gottes, wie die griechischen und koptischen Christen. Ihr Zeugnis spricht also gegen die These, die griechischen Evangelien hätten Jesus verfälscht.`,
        },
      ],
    },
    {
      id: 'papias-matthaeus-hebraeisch',
      objection: `Papias sagt, Matthäus habe auf Hebräisch geschrieben. Unser griechischer Matthäus ist also nicht das Original – das Original ist verloren.`,
      objectionBy: 'Bart Ehrman',
      answer: `Was Papias genau meinte, ist umstritten: hebräische bzw. aramäische Sprache oder ein hebräischer Darstellungsstil. Der griechische Matthäus zeigt keine Spuren einer Übersetzung; er übernimmt oft wörtlich den griechischen Text des Markus. Möglich ist, dass Matthäus früher Jesusworte auf Aramäisch sammelte und das griechische Evangelium später entstand – die Kirche hat das griechische Matthäusevangelium von Anfang an als das Evangelium des Matthäus gelesen.`,
      followUps: [
        {
          id: 'indschil-verloren',
          objection: `Dann ist das ursprüngliche Indschil – das Evangelium, das Jesus gegeben wurde – verloren gegangen.`,
          objectionBy: 'Muslimischer Apologet',
          answer: `Das Neue Testament kennt kein Buch, das Jesus herabgesandt wurde; „Evangelium" ist die gute Botschaft von Jesus, die die Apostel verkündeten – und die halten wir in den vier Evangelien in Händen. Der Koran fordert zudem die Christen seiner Zeit auf, nach dem Evangelium zu richten, das bei ihnen ist (5:47) – das waren dieselben Evangelien, die wir in Handschriften lange vor dem 7. Jahrhundert besitzen.`,
        },
      ],
    },
    {
      id: 'juenger-analphabeten',
      objection: `Die Jünger waren ungebildete aramäischsprachige Fischer (Apg 4,13). Sie konnten keine eleganten griechischen Texte schreiben.`,
      objectionBy: 'Bart Ehrman',
      answer: `„Ungelehrt" in Apg 4,13 heißt: ohne Ausbildung als Schriftgelehrte – nicht des Lesens unkundig. Matthäus war Zolleinnehmer und musste mit Zahlen und Schriftstücken umgehen; Markus und Lukas waren keine galiläischen Fischer. Und wer einen Schreiber nutzte – wie Petrus mit Silvanus (1 Petr 5,12) –, konnte auch in gutem Griechisch schreiben lassen. Galiläa war zudem von griechischen Städten umgeben.`,
      followUps: [
        {
          id: 'jesus-griechisch',
          objection: `Jesus selbst konnte bestimmt kein Griechisch. Er war ein galiläischer Bauhandwerker.`,
          objectionBy: 'Reza Aslan',
          answer: `Das ist offen, nicht sicher. Nazareth lag nur wenige Kilometer von Sepphoris, einer griechisch geprägten Stadt, und ein Bauhandwerker kam mit vielen Menschen zusammen. Jesus sprach mit einer „Griechin" aus Syrophönizien (Mk 7,26) und mit Pilatus – ob mit Dolmetscher, wissen wir nicht. Für die Zuverlässigkeit der Evangelien ist die Frage aber nicht entscheidend.`,
        },
        {
          id: 'muendlich-verformt',
          objection: `Zwischen dem aramäischen Jesus und den griechischen Evangelien lagen Jahrzehnte mündlicher Überlieferung – das ist Stille Post.`,
          objectionBy: 'Bart Ehrman',
          answer: `Mündliche Überlieferung in einer Gemeinschaft mit Augenzeugen funktioniert anders als Stille Post: Sie wird gemeinsam gelernt, wiederholt und kontrolliert. Jesus lehrte in einprägsamen Formen – Parallelismen, Gleichnissen, Rhythmus –, die sich leicht merken ließen. Und Augenzeugen wie Petrus, Jakobus und Johannes lebten noch, als die Überlieferung ins Griechische überging (Gal 1,18–19; 2,9).`,
        },
      ],
    },
    {
      id: 'missverstaendnisse',
      objection: `Es gibt nachweisliche Übersetzungsfehler: Das „Kamel durchs Nadelöhr" war ein Seil (aram. gamla), und der „Menschensohn" hieß ursprünglich nur „ein Mensch".`,
      objectionBy: 'George M. Lamsa / Géza Vermes',
      answer: `Die Seil-Deutung ist eine alte Vermutung, aber nicht belegt; Jesus liebte drastische Bilder – er spricht auch vom Kamel, das man verschluckt, während man Mücken aussiebt (Mt 23,24). Beim „Menschensohn" streitet die Forschung, ob aramäisch *bar enasch* allgemein „ein Mensch" heißen kann; in den Evangelien knüpft Jesus aber erkennbar an Dan 7,13–14 an, wo der Menschensohn auf den Wolken kommt und ewige Herrschaft erhält.`,
      followUps: [
        {
          id: 'menschensohn-nur-mensch',
          objection: `Géza Vermes hat gezeigt, dass „Menschensohn" eine bescheidene Umschreibung für „ich" war. Erst die Kirche machte daraus einen göttlichen Titel.`,
          objectionBy: 'Géza Vermes',
          answer: `Vermes' These ist eine Position unter mehreren und wurde viel kritisiert. Selbst wenn der Ausdruck auch als Umschreibung gebraucht werden konnte, erklärt das nicht Sätze wie Mk 14,62: „Ihr werdet sehen des Menschen Sohn sitzen zur rechten Hand der Kraft und kommen mit des Himmels Wolken" – eine deutliche Anspielung auf Dan 7. Der Hohepriester verstand das als Gotteslästerung, nicht als bescheidenes „ich".`,
        },
      ],
    },
    {
      id: 'aramaeisch-exotik',
      objection: `Die aramäischen Worte bei Markus sind exotische Zauberformeln – wie bei antiken Magiern, die fremde Worte murmelten.`,
      objectionBy: 'Morton Smith',
      answer: `Magier hielten ihre fremden Formeln geheim und übersetzten sie nicht; Markus übersetzt jedes aramäische Wort sofort für seine Leser. „Talitha kum" heißt einfach „Mädchen, steh auf" – keine Formel, sondern eine zärtliche Anrede. Die Worte zeigen, dass Markus Erinnerungen an Jesu tatsächliche Rede bewahrt hat.`,
      followUps: [
        {
          id: 'warum-nicht-alles-aramaeisch',
          objection: `Wenn die Christen so treu waren – warum haben sie dann nicht die ganzen Worte Jesu auf Aramäisch aufgeschrieben?`,
          objectionBy: 'Muslimischer Apologet',
          answer: `Weil die Mission von Anfang an über Palästina hinausging: Antiochia, Alexandria, Rom – dort verstand man Griechisch, nicht Aramäisch. Die Apostel wollten, dass alle Völker das Evangelium verstehen (Mt 28,19), nicht, dass es in einer heiligen Sprache verschlossen bleibt. Wo Aramäisch gesprochen wurde, entstand später die syrische Übersetzung. Das ist kein Mangel, sondern der missionarische Charakter des Evangeliums.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn die Evangelisten verfälschen wollten – warum bewahren sie dann aramäische Worte und übersetzen sie?`,
    `Ist für dich jede Übersetzung eine Fälschung – auch Übersetzungen des Korans?`,
    `Wie gibt der Koran die Worte Jesu wieder – auf Aramäisch oder auf Arabisch?`,
    `Welche konkrete Lehre Jesu wurde deiner Meinung nach durch die Übersetzung ins Griechische verändert?`,
  ],
  avoid: [
    `Die Peschitta als aramäisches Original des Neuen Testaments ausgeben.`,
    `„Abba heißt Papi" – diese populäre Deutung hat schon James Barr (1988) widerlegt; Abba ist die normale Anrede „Vater".`,
    `Behaupten, die Evangelien enthielten die wörtlichen Worte Jesu wie ein Tonband.`,
    `Den Koran oder die arabische Sprache herabsetzen.`,
  ],
  concessions: [
    `Jesus sprach hauptsächlich Aramäisch; die Evangelien geben seine Worte in griechischer Übersetzung wieder.`,
    `Bei jeder Übersetzung gehen manche Nuancen und Wortspiele verloren.`,
    `Die Aussage des Papias über ein hebräisches Matthäuswerk ist schwer zu deuten.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Joachim Jeremias', work: 'Neutestamentliche Theologie I: Die Verkündigung Jesu', year: '1971', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Richard Bauckham', work: 'Jesus and the Eyewitnesses', year: '2017', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Lamin Sanneh', work: 'Translating the Message', year: '1989', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Martin Hengel', work: 'Judentum und Hellenismus', year: '1969', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Aramäisch', 'Übersetzung', 'Peschitta', 'Papias', 'Koran', 'Menschensohn'],
  related: ['neues-testament/stille-post', 'neues-testament/evangelien-spaet-anonym', 'islam-dilemma/injil-ist-nicht-das-nt', 'islam-bibelverfaelschung/ehrman-beweist-verfaelschung'],
};

export default claim;
