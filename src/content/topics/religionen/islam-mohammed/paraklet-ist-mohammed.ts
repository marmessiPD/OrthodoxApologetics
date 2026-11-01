import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'paraklet-ist-mohammed',
  title: `„Der Paraklet (Joh 14–16) ist Mohammed – Ahmad (61:6)."`,
  proponents: [
    { name: 'Ahmed Deedat', role: 'Islamischer Apologet (1918–2005)', work: 'What the Bible Says about Muhammad (1976)' },
    { name: 'Abdul-Ahad Dawud (David Benjamin Keldani)', role: 'Ehemaliger chaldäischer Priester, zum Islam konvertiert', work: 'Muhammad in the Bible (1928)' },
    { name: 'Zakir Naik', role: 'Islamischer Prediger, Peace TV', work: 'Vorträge „Muhammad in the Bible"' },
    { name: 'Abdullah Yusuf Ali', role: 'Koranübersetzer (1872–1953)', work: 'The Holy Qur\'an: Text, Translation and Commentary, Anmerkung zu 61:6' },
  ],
  steelman: `Der Koran sagt, Jesus habe „einen Gesandten" angekündigt, „der nach mir kommen wird; sein Name ist Ahmad" (61:6). Im Johannesevangelium kündigt Jesus tatsächlich einen „anderen Parakleten" an. Jesus selbst war der erste Paraklet (1 Joh 2,1) – ein „anderer" muss also ein Mensch wie er sein. Er kommt erst, wenn Jesus fortgeht (Joh 16,7) – der Heilige Geist aber war längst da (Lk 1,41; Joh 20,22). Er „wird nicht aus sich selbst reden, sondern was er hören wird, das wird er reden" (Joh 16,13) – genau so empfing Muhammad den Koran: „Er spricht nicht aus eigener Neigung; es ist nur eine Offenbarung, die eingegeben wird" (53:3–4). Er wird die Welt „überführen" (16,8) und Jesus „verherrlichen" (16,14) – Muhammad hat Jesus von der Schande der Kreuzigung und der Gotteslästerung der Vergöttlichung gereinigt. Und vermutlich stand im Urtext nicht *paraklētos* („Beistand"), sondern *periklytos* („der Hochgelobte") – genau die Bedeutung von „Ahmad".`,
  biblical: {
    summary: `Johannes identifiziert den Parakleten ausdrücklich: „der Tröster, **der Heilige Geist**, welchen mein Vater senden wird in meinem Namen" (Joh 14,26). Er ist „der Geist der Wahrheit, welchen die Welt nicht kann empfangen; denn sie sieht ihn nicht … Ihr aber kennet ihn; denn er bleibt bei euch und wird **in euch** sein" (14,17). Er bleibt „bei euch **ewiglich**" (14,16), wird von Jesus „vom Vater" gesandt (15,26; 16,7), soll die **Jünger** an alles erinnern, was Jesus **ihnen** gesagt hat (14,26), und verherrlicht Jesus, indem er „von dem Meinen nimmt" (16,14). Die Erfüllung berichtet die Apostelgeschichte: „nicht lange nach diesen Tagen" (Apg 1,5) – an Pfingsten (Apg 2,1–4.33).`,
    detail: `**Prüfpunkte am Text (jeder schließt Muhammad aus):**
- **14,26:** ausdrücklich „der Heilige Geist".
- **14,17:** Die Welt sieht ihn nicht – Muhammad war sichtbar. Er wohnt **in** den Jüngern – Muhammad wohnte in keinem Jünger.
- **14,16:** „ewiglich bei euch" – Muhammad starb 632.
- **14,26:** erinnert die Jünger an Jesu Worte – Muhammad lebte 600 Jahre nach ihnen.
- **15,26; 16,7:** Jesus sendet ihn – Muslime sagen nicht, Jesus habe Muhammad gesandt.
- **16,14:** verherrlicht Jesus, indem er von dem Seinen nimmt – der Koran bestreitet gerade Kreuz und Gottessohnschaft, die Mitte der Botschaft Jesu.
- **Apg 1,4–8; 2,33:** Erfüllung wenige Tage nach der Himmelfahrt.

**Zu „noch nicht da":** Im AT kam der Geist auf einzelne Menschen; nach Jesu Verherrlichung wohnt er bleibend in allen Glaubenden: „Denn der heilige Geist war noch nicht da; denn Jesus war noch nicht verklärt" (Joh 7,39).`,
    sources: [
      { kind: 'bibel', work: 'Johannes', ref: '14,16–17', quote: `Und ich will den Vater bitten, und er soll euch einen andern Tröster geben, daß er bei euch bleibe ewiglich: den Geist der Wahrheit, welchen die Welt nicht kann empfangen; denn sie sieht ihn nicht und kennt ihn nicht. Ihr aber kennet ihn; denn er bleibt bei euch und wird in euch sein.`, original: `καὶ ἄλλον παράκλητον δώσει ὑμῖν`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '14,26', quote: `Aber der Tröster, der heilige Geist, welchen mein Vater senden wird in meinem Namen, der wird's euch alles lehren und euch erinnern alles des, das ich euch gesagt habe.`, original: `ὁ δὲ παράκλητος, τὸ πνεῦμα τὸ ἅγιον`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '15,26', quote: `Wenn aber der Tröster kommen wird, welchen ich euch senden werde vom Vater, der Geist der Wahrheit, der vom Vater ausgeht, der wird zeugen von mir.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '16,7', quote: `Aber ich sage euch die Wahrheit: es ist euch gut, daß ich hingehe. Denn so ich nicht hingehe, so kommt der Tröster nicht zu euch; so ich aber gehe, will ich ihn zu euch senden.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '1,5', quote: `Denn Johannes hat mit Wasser getauft; ihr aber sollt mit dem heiligen Geist getauft werden nicht lange nach diesen Tagen.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptische Kirche bekennt den Heiligen Geist als „den Herrn und Lebendigmacher, der vom Vater ausgeht" (Joh 15,26) – ohne Filioque. Joh 15,26 ist gerade die Schlüsselstelle des koptischen Glaubens über den Geist. Der Paraklet ist die dritte Hypostase der Dreieinigkeit, die an Pfingsten auf die Apostel herabkam und seither in der Kirche wohnt: in der Taufe und der Myronsalbung empfängt jeder Gläubige die Gabe des Heiligen Geistes. Die Väter (Athanasius, Didymus der Blinde, Kyrill) haben die Paraklet-Worte stets auf den Heiligen Geist bezogen; Didymus schrieb eine eigene Schrift über den Heiligen Geist.`,
    detail: `Schon im 8. Jahrhundert wurde die Paraklet-Frage zwischen Christen und Muslimen diskutiert: Timotheus I. antwortete dem Kalifen al-Mahdi, der Paraklet sei der Geist Gottes, der mit dem Vater und dem Sohn eines Wesens ist; er sei unsichtbar und könne deshalb kein Mensch sein. Der Montanismus des 2. Jahrhunderts zeigt übrigens, dass auch früher schon jemand (Montanus) behauptete, der Paraklet zu sein – die Kirche verwarf dies, weil der Paraklet nach dem Evangelium in den Jüngern wohnt und an Pfingsten gekommen ist.`,
    sources: [
      { kind: 'konzil', work: 'Nizäno-Konstantinopolitanum', ref: '381', quote: `… und an den Heiligen Geist, den Herrn und Lebendigmacher, der vom Vater ausgeht, der mit dem Vater und dem Sohn angebetet und verherrlicht wird …`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Didymus der Blinde', work: 'Über den Heiligen Geist (De Spiritu Sancto)', year: 'ca. 360–380', status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Timotheus I.', work: 'Dialog mit dem Kalifen al-Mahdi', year: '781/782', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Johannes sagt selbst, wer der Paraklet ist: „der Heilige Geist" (Joh 14,26). Die Welt kann ihn nicht sehen, er wohnt in den Jüngern, er bleibt ewig bei ihnen, Jesus sendet ihn, und er kommt „nicht lange nach diesen Tagen" (Apg 1,5). Muhammad war sichtbar, wohnte in keinem Jünger, starb 632 und kam 600 Jahre später. Und keine einzige Handschrift liest *periklytos* – alle lesen *paraklētos*.`,
  keyPoints: [
    `**Ausdrückliche Identifikation:** „der Tröster, der Heilige Geist" (Joh 14,26).`,
    `**Unsichtbar und innewohnend:** „Die Welt sieht ihn nicht … er wird in euch sein" (14,17).`,
    `**Ewig bei den Jüngern** (14,16) und **von Jesus gesandt** (15,26; 16,7) – beides passt nicht auf Muhammad.`,
    `**Zeitpunkt:** „nicht lange nach diesen Tagen" (Apg 1,5) – erfüllt an Pfingsten (Apg 2).`,
    `**Kein Handschriftenbeleg für „periklytos":** Alle bekannten Handschriften lesen *paraklētos*, auch die ältesten Papyri (z. B. P66, um 200).`,
    `**Selbst die früheste islamische Deutung** (Ibn Ishaq) stützte sich nicht auf „periklytos", sondern auf das syrische Wort für „Tröster".`,
  ],
  voices: [
    {
      person: 'keener',
      role: 'als Johannes-Kommentator',
      text: `Craig Keener zeigt in seinem großen Johanneskommentar, dass *paraklētos* im Griechischen einen Fürsprecher, Beistand oder Anwalt bezeichnet und dass Johannes den Parakleten bewusst als „anderen" Beistand neben Jesus darstellt: Was Jesus für die Jünger war, wird der Geist in ihnen sein. Die Verheißungen sind an die Jünger beim Abschiedsmahl gerichtet und finden ihre Erfüllung im Kommen des Geistes, wie es Johannes selbst (20,22) und Lukas (Apg 2) bezeugen.`,
      sources: [{ kind: 'fachliteratur', author: 'Craig S. Keener', work: 'The Gospel of John: A Commentary, Bd. 2', year: '2003', status: 'paraphrase' }],
    },
    {
      person: 'timotheus-i',
      role: 'als Katholikos im Gespräch mit dem Kalifen',
      text: `Als al-Mahdi fragt, ob Muhammad nicht der Paraklet sei, antwortet Timotheus I., der Paraklet sei der Geist Gottes. Seine Begründung folgt dem Text: Der Paraklet ist unsichtbar, er wohnt in den Jüngern, er kommt vom Vater und lehrt alles, was Christus gesagt hat. Ein Mensch, der sichtbar unter Menschen lebte und Jahrhunderte nach den Aposteln kam, kann diese Beschreibung nicht erfüllen. Timotheus bleibt dabei höflich, ohne in der Sache nachzugeben.`,
      sources: [{ kind: 'kirchenvater', author: 'Timotheus I.', work: 'Dialog mit dem Kalifen al-Mahdi', year: '781/782', status: 'paraphrase' }],
    },
    {
      person: 'gabriel-reynolds',
      role: 'als Islamwissenschaftler',
      text: `Gabriel Said Reynolds diskutiert in seinem Korankommentar zu 61:6 die Frage, ob *aḥmad* ursprünglich ein Eigenname oder ein Adjektiv („der Preiswürdigere") war, und die alte These, der Vers spiele auf den Parakleten an. Er verweist auf die Forschung, nach der die früheste islamische Gleichsetzung mit dem Johannesevangelium über das syrische Wort *menaḥḥemānā* („Tröster") lief, das Ibn Ishaq mit Muhammad verband – nicht über eine angebliche griechische Lesart *periklytos*.`,
      sources: [{ kind: 'fachliteratur', author: 'Gabriel Said Reynolds', work: 'The Qur\'an and the Bible: Text and Commentary', ref: 'zu 61:6', year: '2018', status: 'paraphrase' }],
    },
    {
      person: 'didymus',
      role: 'als alexandrinischer Lehrer über den Heiligen Geist',
      text: `Didymus der Blinde, Leiter der Katechetenschule von Alexandrien, legt in seiner Schrift über den Heiligen Geist die Paraklet-Worte als Zeugnis für die Gottheit des Geistes aus: Der Geist, der vom Vater ausgeht, alles lehrt und in den Gläubigen wohnt, kann kein Geschöpf sein, denn kein Geschöpf wohnt in den Seelen der Menschen und heiligt sie. Seine Auslegung zeigt, wie selbstverständlich die alexandrinische Kirche den Parakleten als göttliche Person verstand.`,
      sources: [{ kind: 'kirchenvater', author: 'Didymus der Blinde', work: 'Über den Heiligen Geist', year: 'ca. 360–380', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'geist-war-schon-da',
      objection: `Jesus sagt: „Wenn ich nicht hingehe, kommt der Tröster nicht" (16,7). Aber der Heilige Geist war längst da – bei Johannes dem Täufer, Elisabeth, Simeon (Lk 1,15.41; 2,25). Also muss der Paraklet jemand anderes sein.`,
      objectionBy: 'Ahmed Deedat',
      answer: `Der Geist wirkte schon vorher – an einzelnen Menschen und zu bestimmten Zeiten. Jesus verheißt etwas Neues: dass der Geist **bleibend in allen** Jüngern wohnt (14,17). Johannes erklärt das selbst: „Der heilige Geist war noch nicht da; denn Jesus war noch nicht verklärt" (7,39). Gemeint ist das Kommen des Geistes in dieser neuen Weise – und das geschah an Pfingsten.`,
      sources: [
        { kind: 'bibel', work: 'Johannes', ref: '7,39', quote: `Das sagte er aber von dem Geist, welchen empfangen sollten, die an ihn glaubten; denn der heilige Geist war noch nicht da; denn Jesus war noch nicht verklärt.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'joh-20-22-schon-gegeben',
          objection: `In Joh 20,22 haucht Jesus die Jünger an: „Nehmet hin den Heiligen Geist." Also kam der Geist, bevor Jesus fortging – der Paraklet aber sollte erst danach kommen. Widerspruch!`,
          objectionBy: 'Zakir Naik',
          answer: `Joh 20,22 geschieht nach der Auferstehung, als Jesus bereits „zum Vater auffährt" (20,17) – er ist verherrlicht. Die Gabe in 20,22 ist der Anfang dessen, was an Pfingsten öffentlich und in Fülle geschieht (Apg 2). Und selbst wenn man hier eine Spannung sähe: Sie macht aus dem Geist keinen Menschen, der 600 Jahre später kommt. Johannes nennt den Parakleten ausdrücklich „den Heiligen Geist" (14,26).`,
          followUps: [
            {
              id: 'pfingsten-brachte-keine-wahrheit',
              objection: `Der Paraklet soll „in alle Wahrheit leiten" (16,13) und „die Welt überführen von der Sünde, der Gerechtigkeit und dem Gericht" (16,8). An Pfingsten gab es Zungenreden und Begeisterung, aber keine neue Wahrheit und kein neues Gesetz. Erst der Koran brachte die vollständige Wahrheit.`,
              objectionBy: 'Ahmed Deedat',
              answer: `Jesus erklärt selbst, worin das Überführen besteht: „von der Sünde, dass sie nicht an **mich** glauben; von der Gerechtigkeit, dass ich zum Vater gehe; vom Gericht, dass der Fürst dieser Welt gerichtet ist" (16,9–11). Das ist ganz auf Jesus bezogen – und genau das geschah an Pfingsten: Petrus predigt den Gekreuzigten und Auferstandenen, und „es ging ihnen durchs Herz" (Apg 2,37); dreitausend ließen sich taufen. Und „alle Wahrheit" ist den Jüngern verheißen, „euch" – die Frucht ist das apostolische Zeugnis, das wir im Neuen Testament haben.`,
              detail: `Der Geist bringt nach Joh 16,14 keine Lehre, die Jesus widerspricht: „Er wird mich verherrlichen, denn von dem Meinen wird er nehmen und euch verkündigen." Das Neue Testament ist das sichtbare Ergebnis dieser Verheißung: Die Apostel erinnern sich nach Ostern an Jesu Worte und verstehen sie (Joh 2,22; 12,16; 14,26). Ein Prophet, der sechs Jahrhunderte später die Kreuzigung bestreitet und Jesu Sohnschaft verneint, „nimmt" nicht „von dem Seinen", sondern widerspricht ihm. Für das Gespräch: Lies Joh 16,7–15 vollständig vor – jeder Satz dreht sich um Jesus.`,
              sources: [
                { kind: 'bibel', work: 'Johannes', ref: '16,8–11', quote: `Und wenn derselbe kommt, wird er die Welt strafen um die Sünde und um die Gerechtigkeit und um das Gericht: um die Sünde, daß sie nicht glauben an mich; um die Gerechtigkeit aber, daß ich zum Vater gehe und ihr mich hinfort nicht sehet; um das Gericht, daß der Fürst dieser Welt gerichtet ist.`, translation: 'Luther 1912', status: 'verbatim' },
                { kind: 'bibel', work: 'Apostelgeschichte', ref: '2,37.41', quote: `Da sie aber das hörten, ging's ihnen durchs Herz … Die nun sein Wort gerne annahmen, ließen sich taufen; und wurden hinzugetan an dem Tage bei dreitausend Seelen.`, translation: 'Luther 1912', status: 'paraphrase', note: 'Gekürzt.' },
              ],
              questionsBack: [
                `Wovon überführt der Paraklet nach Joh 16,9 die Welt – vom Unglauben an wen?`,
                `Wie kann einer, der die Kreuzigung leugnet, Jesus „verherrlichen", indem er „von dem Seinen nimmt"?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'periklytos-ahmad',
      objection: `Ursprünglich stand dort nicht paraklētos, sondern periklytos – „der Hochgelobte", genau die Bedeutung von Ahmad (61:6). Die Christen haben das Wort geändert.`,
      objectionBy: 'Abdul-Ahad Dawud',
      answer: `Für diese Behauptung gibt es keinen einzigen Beleg. Alle bekannten griechischen Handschriften lesen *paraklētos* – auch die ältesten Papyri, etwa P66 um das Jahr 200, Jahrhunderte vor Muhammad. Ebenso alle alten Übersetzungen (lateinisch, syrisch, koptisch). Und die Sätze rund um das Wort – unsichtbar, in den Jüngern wohnend, ewig bei ihnen, „der Heilige Geist" – müssten dann alle ebenfalls gefälscht sein.`,
      followUps: [
        {
          id: 'christen-haben-es-geaendert',
          objection: `Natürlich gibt es keinen Beleg – die Kirche hat alle Handschriften vereinheitlicht.`,
          objectionBy: 'Islamischer Online-Apologet',
          answer: `Die Handschriften waren über das ganze Römische Reich, Ägypten, Syrien und Persien verstreut, in Kirchen, die sich gegenseitig verurteilten – Kopten, Byzantiner, Ostsyrer. Niemand konnte sie alle vereinheitlichen. Und die koptischen Übersetzungen aus dem 3./4. Jahrhundert übernehmen das griechische Wort *paraklētos* direkt. Eine Fälschungsthese, die gerade wegen fehlender Belege wahr sein soll, ist nicht widerlegbar – und damit kein Argument.`,
          followUps: [
            {
              id: 'koran-61-6-beweist-es',
              objection: `Der Koran sagt in 61:6, Jesus habe Ahmad angekündigt. Da der Koran Gottes Wort ist, muss die Ankündigung im Evangelium gestanden haben.`,
              objectionBy: 'Zakir Naik',
              answer: `Dann ist das ein Glaubensschluss aus dem Koran, kein Befund aus dem Evangelium. Interessant ist: Die früheste islamische Gleichsetzung mit dem Johannesevangelium – bei Ibn Ishaq – stützt sich nicht auf *periklytos*, sondern auf das syrische *menaḥḥemānā* („Tröster") aus Joh 15,23–16,1, das er mit Muhammad verbindet. Die „periklytos"-These ist eine spätere Konstruktion. Und auch unter Muslimen ist umstritten, ob *aḥmad* in 61:6 ursprünglich ein Name oder ein Adjektiv („preiswürdiger") war.`,
              sources: [
                { kind: 'hadith', author: 'Ibn Ishaq (in der Rezension Ibn Hischams)', work: 'Sīrat Rasūl Allāh', year: 'Mitte 8. Jh.', quote: `Der Munaḥḥemana ist auf Syrisch Muhammad; auf Griechisch ist er der Paraklet.`, translation: 'sinngemäß nach der englischen Übersetzung von A. Guillaume (The Life of Muhammad, 1955)', status: 'paraphrase', note: 'Ibn Ishaq zitiert Joh 15,23–16,1 nach einem christlich-palästinisch-aramäischen Text; Seitenangabe bei Guillaume (ca. S. 103–104) vor Verwendung prüfen.' },
                { kind: 'fachliteratur', author: 'W. Montgomery Watt', work: '„His Name Is Ahmad", The Muslim World 43', year: '1953', status: 'paraphrase', note: 'Watt argumentiert, aḥmad sei in 61:6 ursprünglich adjektivisch zu verstehen.' },
                { kind: 'koran', work: 'Sure 61 (as-Saff)', ref: '61:6', quote: `Und als Jesus, der Sohn der Maria, sagte: „O Kinder Israels, ich bin Allahs Gesandter an euch, bestätigend, was von der Tora vor mir war, und einen Gesandten verkündend, der nach mir kommen wird: sein Name ist Ahmad."`, original: `wa-mubashshiran bi-rasūlin yaʾtī min baʿdī smuhū aḥmad`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/61/6' },
              ],
              followUps: [
                {
                  id: 'munahhemana-syrische-quelle',
                  objection: `Gerade Ibn Ishaq zeigt doch: Die frühen Muslime kannten einen syrischen Evangelientext, in dem ein Wort stand, das wie „Muhammad" klang. Die Christen jener Zeit hatten also eine Fassung, die auf ihn hinwies.`,
                  objectionBy: 'Ali Ataie',
                  answer: `*Menaḥḥemānā* ist im christlich-palästinischen Aramäisch schlicht die Übersetzung von *paraklētos* – „Tröster", von der Wurzel *n-ḥ-m* („trösten"). „Muhammad" kommt von der Wurzel *ḥ-m-d* („preisen"). Ibn Ishaq verbindet die beiden über einen Gleichklang, nicht über die Bedeutung. Der Text, den er zitiert, ist im Übrigen unser Johannesevangelium (15,23–16,1) – mit denselben Aussagen über den Geist der Wahrheit, der „vom Vater ausgeht". Er bestätigt also den Text, nicht seine Umdeutung.`,
                  detail: `Alfred Guillaume hat in seiner Übersetzung der Sira die von Ibn Ishaq zitierte Passage untersucht und festgestellt, dass sie dem christlich-palästinisch-aramäischen Lektionar nahesteht. Auch derselbe Ibn Ishaq setzt *menaḥḥemānā* ausdrücklich dem griechischen „Paraklet" gleich – er bestätigt damit indirekt, dass im Evangelium „Paraklet" stand, nicht „periklytos". Die spätere Behauptung, dort habe ursprünglich *periklytos* gestanden, findet bei Ibn Ishaq gerade keine Stütze. Für das Gespräch: Die früheste islamische Quelle zum Thema widerlegt die moderne Fälschungsthese.`,
                  sources: [
                    { kind: 'fachliteratur', author: 'Alfred Guillaume', work: 'The Life of Muhammad: A Translation of Ibn Ishaq\'s Sirat Rasul Allah', year: '1955', status: 'paraphrase', note: 'Anmerkungen zur Herkunft des Zitats aus Joh 15,23–16,1 und zum Wort menaḥḥemānā.' },
                  ],
                  questionsBack: [
                    `Aus welcher Wurzel kommt *menaḥḥemānā* – und aus welcher „Muhammad"?`,
                    `Wenn Ibn Ishaq selbst schreibt, auf Griechisch heiße das Wort „Paraklet" – wo bleibt dann die These vom ursprünglichen „periklytos"?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'redet-nicht-aus-sich-selbst',
      objection: `„Er wird nicht von sich selber reden; sondern was er hören wird, das wird er reden" (16,13). Das ist exakt die koranische Beschreibung Muhammads: „Er spricht nicht aus eigener Neigung; es ist nur eine Offenbarung, die eingegeben wird" (53:3–4).`,
      objectionBy: 'Ahmed Deedat',
      answer: `Dasselbe sagt Jesus über sich selbst: „Ich habe nicht von mir selber geredet" (Joh 12,49). Es beschreibt jede wahre Offenbarung – und den Geist, der nicht unabhängig vom Vater und Sohn spricht. Entscheidend ist der nächste Vers: „Derselbe wird mich verklären; denn von dem Meinen wird er's nehmen und euch verkündigen" (16,14). Der Paraklet verkündet, was Jesu ist – nicht etwas, das Jesu Kreuz und Sohnschaft bestreitet.`,
      sources: [
        { kind: 'bibel', work: 'Johannes', ref: '16,13–14', quote: `Wenn aber jener, der Geist der Wahrheit, kommen wird, der wird euch in alle Wahrheit leiten. Denn er wird nicht von sich selber reden; sondern was er hören wird, das wird er reden, und was zukünftig ist, wird er euch verkündigen. Derselbe wird mich verklären; denn von dem Meinen wird er's nehmen und euch verkündigen.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'muhammad-verherrlichte-jesus',
          objection: `Muhammad hat Jesus verherrlicht: Er hat ihn von der Schande der Kreuzigung befreit und von der Lüge, er sei Gott. Das ist die wahre Verherrlichung.`,
          objectionBy: 'Zakir Naik',
          answer: `Im Johannesevangelium ist das Kreuz selbst die Verherrlichung Jesu: „Die Zeit ist gekommen, daß des Menschen Sohn verklärt werde … Wenn das Weizenkorn nicht in die Erde fällt und erstirbt …" (12,23–24; vgl. 17,1). Wer das Kreuz leugnet, nimmt Jesus gerade seine Verherrlichung im Sinn des Evangeliums. Der Paraklet nimmt „von dem Meinen" – er bezeugt das, was Jesus gelehrt und getan hat (15,26), nicht das Gegenteil davon.`,
          followUps: [
            {
              id: 'fuerst-dieser-welt',
              objection: `Jesus sagt: „Es kommt der Fürst dieser Welt, und hat nichts an mir" (Joh 14,30). Ein „Fürst" der Welt, der nach Jesus kommt – das ist Muhammad, der ein Weltreich begründete.`,
              objectionBy: 'Ahmed Deedat',
              answer: `Lies, was Johannes sonst über den „Fürsten dieser Welt" sagt: „Nun wird der Fürst dieser Welt ausgestoßen werden" (12,31), und er „ist gerichtet" (16,11). Paulus nennt ihn den „Gott dieser Welt", der die Sinne der Ungläubigen verblendet (2 Kor 4,4). Gemeint ist der Satan, der in der Passion gegen Jesus aufsteht und doch „nichts an ihm hat". Ich glaube nicht, dass ein Muslim Muhammad mit dieser Gestalt gleichsetzen möchte – und ich tue es ausdrücklich nicht.`,
              detail: `Diese Deutung wurde von Ahmed Deedat popularisiert, wird aber von muslimischen Gelehrten kaum vertreten – aus gutem Grund. Im Johannesevangelium ist der „Fürst dieser Welt" (*ho archōn tou kosmou toutou*) stets der Widersacher, der durch das Kreuz besiegt wird (12,31–32). Im Gespräch ist hier besondere Behutsamkeit geboten: Mach deutlich, dass du Muhammad nicht mit dem Satan gleichsetzt, sondern zeigst, dass die vorgeschlagene Deutung den Text gegen sich hat. So bleibst du hart in der Sache und respektvoll gegenüber der Person.`,
              sources: [
                { kind: 'bibel', work: 'Johannes', ref: '12,31', quote: `Jetzt geht das Gericht über die Welt; nun wird der Fürst dieser Welt ausgestoßen werden.`, translation: 'Luther 1912', status: 'verbatim' },
                { kind: 'bibel', work: 'Johannes', ref: '14,30', quote: `Ich werde hinfort nicht mehr viel mit euch reden; denn es kommt der Fürst dieser Welt, und hat nichts an mir.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              questionsBack: [
                `Wer wird nach Joh 12,31 „ausgestoßen" und nach 16,11 „gerichtet"? Willst du Muhammad wirklich mit ihm gleichsetzen?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'maennliches-pronomen',
      objection: `Im Griechischen ist „pneuma" (Geist) sächlich, aber Johannes verwendet für den Parakleten das männliche „ekeinos" (er). Das zeigt, dass ein Mann gemeint ist.`,
      objectionBy: 'Islamischer Apologet mit Griechischkenntnissen',
      answer: `Das männliche Pronomen zeigt, dass der Paraklet eine **Person** ist, nicht eine bloße Kraft – darin stimmen wir überein. Aber Person heißt nicht Mensch: Auch Gott wird mit männlichen Pronomen bezeichnet. Zudem ist *paraklētos* selbst ein männliches Wort, auf das sich *ekeinos* grammatisch beziehen kann. Und in 14,26 steht ausdrücklich: „der Paraklet, der Heilige Geist".`,
      followUps: [
        {
          id: 'parakletos-menschlicher-anwalt',
          objection: `*Paraklētos* bezeichnete in der Antike einen menschlichen Anwalt oder Fürsprecher vor Gericht. Auch Philo verwendet das Wort für Menschen. Das Wort selbst verweist also auf einen Menschen.`,
          objectionBy: 'Ali Ataie',
          answer: `Das Wort bezeichnet eine Funktion – Beistand, Fürsprecher –, nicht eine Natur. Philo verwendet es übrigens auch für eine überirdische Fürsprache: Der Hohepriester brauche den vollkommenen „Sohn" des Weltschöpfers – bei Philo den Kosmos – als Parakleten zur Vergebung der Sünden. Im Neuen Testament heißt Jesus „Paraklet beim Vater" (1 Joh 2,1) – eine himmlische Fürsprache. Wer der johanneische Paraklet ist, entscheidet nicht die allgemeine Wortbedeutung, sondern die Definition im Text: „der Paraklet, der Heilige Geist, den der Vater senden wird in meinem Namen" (14,26).`,
          detail: `Philo von Alexandrien beschreibt in „Über das Leben des Mose" (II,134), dass der Hohepriester den vollkommenen „Sohn" des Vaters der Welt – gemeint ist der Kosmos – als Parakleten zur Vergebung der Sünden brauche. Das Wort wird also schon im hellenistischen Judentum für überirdische Fürsprecher verwendet. Für Johannes ist der Paraklet der „Geist der Wahrheit" (14,17; 15,26; 16,13), den der Vater sendet und der in den Glaubenden wohnt. Das passt zu keinem Menschen, aber genau zur Verheißung, dass Gott seinen Geist in die Herzen gibt (Ez 36,27; Joel 3,1).`,
          sources: [
            { kind: 'sonstiges', author: 'Philo von Alexandrien', work: 'Über das Leben des Mose (De vita Mosis)', ref: 'II,134', year: '1. Jh.', status: 'paraphrase', note: 'Der Hohepriester braucht den „Sohn" als Parakleten zur Vergebung der Sünden.' },
            { kind: 'bibel', work: '1. Johannes', ref: '2,1', quote: `… und ob jemand sündigt, so haben wir einen Fürsprecher bei dem Vater, Jesum Christum, der gerecht ist.`, original: `παράκλητον ἔχομεν πρὸς τὸν πατέρα`, translation: 'Luther 1912', status: 'verbatim' },
          ],
          questionsBack: [
            `Entscheidet die allgemeine Wortbedeutung oder die Definition im Text selbst, wer der Paraklet in Joh 14,26 ist?`,
          ],
          followUps: [
            {
              id: 'sinaiticus-ohne-heilig',
              objection: `Die alte syrische Übersetzung im Sinai-Codex liest in Joh 14,26 nur „der Geist, der Paraklet" – ohne „heilig". Das „Heilige Geist" ist also eine spätere Ergänzung.`,
              objectionBy: 'Mohammed Hijab',
              answer: `Das ist eine echte Textvariante, und du darfst sie ehrlich zugestehen: Der altsyrische Sinaiticus hat hier eine kürzere Lesart. Aber selbst dann steht dort „der **Geist**" – nicht ein Mensch, nicht ein Prophet. Alle griechischen Handschriften lesen *to pneuma to hagion*, und an den anderen Stellen nennt Johannes den Parakleten ohne jede Variante „den Geist der Wahrheit" (14,17; 15,26; 16,13), den die Welt nicht sieht und der in den Jüngern wohnt. Die Variante ändert an der Identität des Parakleten nichts.`,
              detail: `Die altsyrischen Evangelien (Sinaiticus, 4./5. Jh.; Curetonianus) sind wichtige, aber oft freie Übersetzungen mit eigenen Lesarten. Die Textkritik gewichtet die griechischen Handschriften (P66, P75, Sinaiticus, Vaticanus u. a.), die einhellig „der Heilige Geist" lesen. Für das Gespräch lohnt der Hinweis: Wer sich auf eine altsyrische Handschrift beruft, bestätigt damit, dass auch diese Überlieferung vom „Geist" spricht – Jahrhunderte vor Muhammad. Kein einziger Textzeuge liest dort einen Personennamen oder „Prophet".`,
              sources: [
                { kind: 'bibel', work: 'Johannes', ref: '14,26', quote: `Aber der Tröster, der Heilige Geist, welchen mein Vater senden wird in meinem Namen, derselbe wird's euch alles lehren und euch erinnern alles des, das ich euch gesagt habe.`, original: `ὁ δὲ παράκλητος, τὸ πνεῦμα τὸ ἅγιον`, translation: 'Luther 1912', status: 'verbatim' },
                { kind: 'bibel', work: 'Johannes', ref: '15,26', quote: `Wenn aber der Tröster kommen wird, welchen ich euch senden werde vom Vater, der Geist der Wahrheit, der vom Vater ausgeht, der wird zeugen von mir.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              questionsBack: [
                `Liest irgendeine Handschrift in Joh 14,26 etwas anderes als „Geist" – etwa einen Namen oder „Prophet"?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'anderer-paraklet-ist-mensch',
      objection: `Jesus nennt ihn „einen anderen Parakleten". Jesus selbst war Paraklet (1 Joh 2,1) und ein Mensch. Also ist der andere auch ein Mensch – ein Prophet wie Jesus.`,
      objectionBy: 'Jamal Badawi',
      answer: `„Ein anderer" heißt: ein weiterer Beistand derselben Art. Und nach dem Evangelium ist Jesus nicht nur Mensch, sondern das fleischgewordene Wort Gottes – ein „anderer" seiner Art ist der Geist Gottes. Vor allem aber beschreibt Jesus diesen anderen genau: unsichtbar für die Welt, in den Jüngern wohnend, ewig bei ihnen (14,16–17). Das ist kein Mensch.`,
      followUps: [
        {
          id: 'ewig-durch-seine-lehre',
          objection: `„Ewig bei euch" heißt: durch seine Lehre, den Koran, der bis zum Jüngsten Tag gilt.`,
          objectionBy: 'Zakir Naik',
          answer: `Der Text sagt nicht, dass die Lehre bei ihnen bleibt, sondern **er**: „daß er bei euch bleibe ewiglich … er bleibt bei euch und wird in euch sein" (14,16–17). Und „euch" sind die Jünger am Abschiedsabend, die er an alles erinnern soll, was Jesus „euch gesagt hat" (14,26). Muhammad hat keinen dieser Jünger je getroffen. Man muss den Text umdeuten, um ihn auf Muhammad zu beziehen.`,
          followUps: [
            {
              id: 'welt-erkennt-ihn-nicht',
              objection: `Jesus sagt, die Welt könne ihn nicht empfangen, „denn sie sieht ihn nicht und kennt ihn nicht" (14,17). Das heißt: Die Welt – Juden und Christen – erkannte Muhammad nicht an, obwohl er kam.`,
              objectionBy: 'Jamal Badawi',
              answer: `Lies den ganzen Satz: „… denn sie sieht ihn nicht und kennt ihn nicht. **Ihr aber kennt ihn**, denn er bleibt bei euch und wird in euch sein." Die Jünger kennen ihn schon jetzt, in der Gegenwartsform – und er wird *in* ihnen wohnen. „Nicht sehen" meint Unsichtbarkeit: Die Welt kann den Geist nicht mit Augen wahrnehmen. Muhammad war für jeden in Mekka und Medina sichtbar; Freunde und Gegner haben ihn gesehen und gekannt. Der Satz passt auf den Geist – und auf keinen Menschen.`,
              detail: `Der Gegensatz in Joh 14,17 ist doppelt: Die Welt sieht ihn nicht – die Jünger kennen ihn; er ist bei ihnen – er wird in ihnen sein. Das ist die Sprache der Einwohnung, die das Neue Testament für den Heiligen Geist verwendet (Röm 8,9.11; 1 Kor 3,16; 6,19). Zwei Verse später sagt Jesus dasselbe über sich: „Die Welt sieht mich nicht mehr, ihr aber sollt mich sehen" (14,19) – durch den Geist ist er selbst gegenwärtig. Didymus der Blinde hat in seiner Schrift über den Heiligen Geist gezeigt, dass diese Eigenschaften – unsichtbar, einwohnend, ewig bleibend – Merkmale Gottes sind, nicht eines Geschöpfes.`,
              voices: [
                { person: 'didymus', role: 'als alexandrinischer Lehrer über den Heiligen Geist', text: `Didymus der Blinde, Leiter der Katechetenschule von Alexandrien, argumentiert in „Über den Heiligen Geist", dass der Geist in vielen Menschen zugleich wohnen kann, während ein Geschöpf immer nur an einem Ort ist. Wer in allen Gläubigen zugleich wohnt und sie heiligt, hat göttliche Eigenschaften. So liest er die Verheißung des Parakleten in Joh 14–16.` },
              ],
              sources: [
                { kind: 'bibel', work: 'Johannes', ref: '14,17', quote: `… den Geist der Wahrheit, welchen die Welt nicht kann empfangen; denn sie sieht ihn nicht und kennt ihn nicht. Ihr aber kennet ihn; denn er bleibt bei euch und wird in euch sein.`, translation: 'Luther 1912', status: 'verbatim' },
                { kind: 'kirchenvater', author: 'Didymus der Blinde', work: 'Über den Heiligen Geist (De Spiritu Sancto)', year: 'ca. 360–375', status: 'paraphrase', note: 'Erhalten in der lateinischen Übersetzung des Hieronymus.' },
              ],
              questionsBack: [
                `Wie kann ein Mensch, der 600 Jahre später geboren wird, schon „bei" den Jüngern sein, sodass sie ihn „kennen"?`,
                `Haben die Menschen in Mekka Muhammad „nicht gesehen"?`,
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wen nennt Joh 14,26 ausdrücklich als den Parakleten?`,
    `War Muhammad für die Welt unsichtbar, und wohnte er in den Jüngern (14,17)?`,
    `Glaubst du, dass Jesus Muhammad gesandt hat (15,26; 16,7)?`,
    `Welche Handschrift liest „periklytos"?`,
    `Warum stützte sich Ibn Ishaq auf das syrische Wort für „Tröster" und nicht auf „periklytos"?`,
  ],
  avoid: [
    `Nicht behaupten, *aḥmad* könne „unmöglich" ein Name sein – die Frage ist in der Forschung offen; sag, dass sie umstritten ist.`,
    `Nicht über die „periklytos"-These spotten; zeige ruhig, dass jeder Handschriftenbeleg fehlt.`,
    `Joh 20,22 nicht verschweigen; erkläre es als Anfang der Gabe nach der Auferstehung.`,
  ],
  concessions: [
    `Das Verhältnis von Joh 20,22 und Apg 2 wird auch unter Christen unterschiedlich erklärt.`,
    `Der Paraklet wird bei Johannes personal beschrieben (männliches Pronomen) – das ist richtig beobachtet, nur spricht es für die Personalität des Geistes, nicht für einen Menschen.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Craig S. Keener', work: 'The Gospel of John: A Commentary', year: '2003', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Gabriel Said Reynolds', work: 'The Qur\'an and the Bible: Text and Commentary', year: '2018', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'A. Guillaume (Übers.)', work: 'The Life of Muhammad: A Translation of Ibn Isḥāq\'s Sīrat Rasūl Allāh', year: '1955', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Paraklet', 'Johannes 14–16', 'Ahmad', 'Sure 61:6', 'Heiliger Geist'],
  related: [
    'islam-mohammed/prophet-wie-mose-dtn-18',
    'islam-mohammed/weitere-bibelstellen-mohammed',
    'islam-bibelverfaelschung/bibel-textvarianten',
    'zeugen-jehovas/heiliger-geist-kraft',
  ],
};

export default claim;
