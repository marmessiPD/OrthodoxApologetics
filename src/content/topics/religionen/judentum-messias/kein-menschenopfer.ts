import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'kein-menschenopfer',
  title: `„Gott verbietet Menschenopfer – niemand kann für die Sünden eines anderen sterben (Ez 18)."`,
  proponents: [
    { name: 'Rabbi Tovia Singer', role: 'Gründer von Outreach Judaism', work: 'Let\'s Get Biblical!, Kapitel „Sacrifice and Atonement" (2014)' },
    { name: 'Rabbi Stuart Federow', role: 'Rabbiner in Houston', work: 'Judaism and Christianity: A Contrast (2012)' },
    { name: 'Rabbi Michael Skobac', role: 'Jews for Judaism (Toronto)', work: 'Vorträge „Atonement without Blood"' },
    { name: 'Rabbi Shmuley Boteach', role: 'Rabbiner und Publizist', work: 'Kosher Jesus (2012)' },
  ],
  steelman: `Die Tora lehrt persönliche Verantwortung: „Die Väter sollen nicht für die Söhne sterben … jeder soll für seine eigene Sünde sterben" (Dtn 24,16). Ezechiel wiederholt es feierlich: „Die Seele, die sündigt, die soll sterben" (Ez 18,4.20). Den Ernstfall der Stellvertretung gibt es sogar in der Tora: Nach dem Goldenen Kalb bietet Mose an, sich aus Gottes Buch tilgen zu lassen – und Gott lehnt ab: „Wer gegen mich gesündigt hat, den tilge ich aus meinem Buch" (Ex 32,32–33). „Kein Mensch kann seinen Bruder erlösen noch Gott ein Lösegeld für ihn geben" (Ps 49,8). Menschenopfer sind Gott ein Gräuel (Dtn 12,31); von ihnen sagt er: „was ich nicht geboten habe und was mir nie in den Sinn gekommen ist" (Jer 19,5). Tieropfer galten nur für unabsichtliche Sünden (Lev 4); für alles andere genügt aufrichtige Umkehr: Ninive wurde ohne Opfer vergeben (Jona 3), „wir wollen statt Stieren unsere Lippen darbringen" (Hos 14,3), „durch Güte und Treue wird Schuld gesühnt" (Spr 16,6). Und selbst nach christlichen Maßstäben erfüllt Jesus keine Opfervorschrift: Er war gegeißelt, also nicht makellos, wurde von Heiden außerhalb des Tempels getötet und von keinem Priester dargebracht. Die Vorstellung, ein Gott-Mensch sterbe zur Sühne, gehört in die heidnische Welt, nicht zur Tora.`,
  biblical: {
    summary: `Ez 18 und Dtn 24,16 regeln **Gerechtigkeit im Gericht**: Kinder werden nicht gegen ihren Willen für die Schuld ihrer Eltern bestraft, und wer umkehrt, lebt. Sie sprechen nicht über die **freiwillige Selbsthingabe** eines Unschuldigen, den Gott selbst dazu bestimmt. Genau diese beschreibt die Hebräische Bibel an anderer Stelle: Der Knecht des HERRN trägt „die Sünde der vielen" (Jes 53,12), „der HERR warf unser aller Schuld auf ihn" (53,6), sein Leben wird zum Schuldopfer (asham, 53,10). Am Versöhnungstag trägt der Bock „alle Schuld" Israels, ausdrücklich auch die bewussten Übertretungen (pescha'im, Lev 16,21). Und Ps 49 sagt nicht nur, dass kein Mensch erlösen kann, sondern auch: „Gott aber wird meine Seele erlösen aus der Gewalt des Totenreichs" (49,16).`,
    detail: `**Ez 18 im Zusammenhang:** Ezechiel widerspricht dem Sprichwort „Die Väter haben saure Trauben gegessen, und den Söhnen werden die Zähne stumpf" (18,2) – die Exilsgeneration meinte, sie büße unverschuldet für ihre Väter. Ezechiel antwortet: Gott richtet jeden nach seinem eigenen Weg, und der Umkehrende lebt (18,21–23). Das betrifft gerichtliche Strafe, nicht Sühne.

**Ex 32,30–35:** Mose will sühnen („vielleicht kann ich Sühne erwirken für eure Sünde") und bietet sich selbst an. Gott lehnt ab – Mose war selbst ein Sünder und nicht von Gott zum Sühnemittel bestimmt. Doch Moses Fürbitte rettete das Volk vor der Vernichtung (Ex 32,14; Ps 106,23).

**Menschenopfer und das Kreuz:** Dtn 12,31 und Jer 19,5 verurteilen, dass Menschen ihre Kinder Götzen opfern, um sie zu beeinflussen. Beim Kreuz bringt kein Mensch Gott ein Opfer dar, um ihn umzustimmen: Jesus wird ungerecht von Rom hingerichtet und gibt sein Leben freiwillig (Joh 10,18); Gott selbst schenkt die Sühne. Das Vorbild ist die Bindung Isaaks: Gott verhindert das Menschenopfer und sagt: „Gott wird sich das Lamm ersehen" (Gen 22,8) – auf dem Berg Morija, wo später der Tempel stand (2 Chr 3,1).

**Sühne und Blut:** „Die Seele des Fleisches ist im Blut, und ich habe es euch auf den Altar gegeben, um für eure Seelen Sühne zu schaffen" (Lev 17,11). Die Sühne ist nicht menschliche Leistung, sondern Gottes Gabe.`,
    sources: [
      { kind: 'bibel', work: 'Ezechiel', ref: '18,20', quote: `Denn welche Seele sündigt, die soll sterben. Der Sohn soll nicht tragen die Missetat des Vaters, und der Vater soll nicht tragen die Missetat des Sohnes; sondern des Gerechten Gerechtigkeit soll über ihm sein, und des Ungerechten Ungerechtigkeit soll über ihm sein.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jesaja', ref: '53,10–12', quote: `Doch dem HERRN gefiel es, ihn zu zerschlagen … wenn er sein Leben als Schuldopfer (asham) gegeben hat … Er hat die Sünde der vielen getragen und für die Übertreter gebetet.`, translation: 'eigene Übersetzung aus dem Hebräischen (gekürzt)', status: 'verbatim' },
      { kind: 'bibel', work: 'Levitikus', ref: '16,21', quote: `Und Aaron soll seine beiden Hände auf den Kopf des lebenden Bockes legen und über ihm alle Schuld der Kinder Israel bekennen und alle ihre Übertretungen in allen ihren Sünden.`, original: 'וְאֶת־כָּל־פִּשְׁעֵיהֶם לְכָל־חַטֹּאתָם', translation: 'eigene Übersetzung aus dem Hebräischen', status: 'verbatim' },
      { kind: 'bibel', work: 'Levitikus', ref: '17,11', quote: `Denn des Leibes Leben ist im Blut, und ich habe es euch zum Altar gegeben, daß eure Seelen damit versöhnt werden.`, translation: 'Luther 1912', status: 'paraphrase', note: 'Wortlaut nach Luther 1912 aus dem Gedächtnis.' },
      { kind: 'bibel', work: 'Psalm', ref: '49,8.16', quote: `Kann doch einen Bruder niemand erlösen noch ihn Gott versöhnen … Aber Gott wird meine Seele erlösen aus der Hölle Gewalt.`, translation: 'Luther 1912 (Ps 49,8.16)', status: 'paraphrase', note: 'Wortlaut nach Luther 1912 aus dem Gedächtnis; Verszählung in manchen Übersetzungen 49,7.15.' },
      { kind: 'bibel', work: 'Genesis', ref: '22,8.14', quote: `Abraham sprach: Gott wird sich das Lamm zum Brandopfer ersehen, mein Sohn … Und Abraham nannte den Namen dieses Ortes: Der HERR wird ersehen; daher man heute sagt: Auf dem Berg des HERRN wird es ersehen werden.`, translation: 'eigene Übersetzung aus dem Hebräischen', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Für die koptisch-orthodoxe Kirche ist der Tod Christi kein Menschenopfer, mit dem Menschen einen zornigen Gott besänftigen, sondern die Selbsthingabe des menschgewordenen Gottes: Der Logos nahm einen sterblichen Leib an, um „an Stelle aller" (anti pantōn) den Tod zu erleiden und ihn durch die Auferstehung zu besiegen (Athanasius, De Incarnatione 9; 20). In ihm sind Priester und Opfer eins. Das Heil wird empfangen durch Glauben, Taufe und das Leben in der Kirche; Christi Opfer wird in der Eucharistie gegenwärtig, „zur Vergebung der Sünden und zum ewigen Leben".`,
    detail: `Athanasius erklärt in „Über die Menschwerdung", warum Gott weder einfach den Fluch des Todes aufheben noch die Menschen ihrem Verderben überlassen konnte: Gottes Wort ist wahr, und seine Güte lässt sein Geschöpf nicht zugrunde gehen. Darum nahm der unsterbliche Logos einen Leib an, der sterben konnte, und gab ihn für alle hin. Kyrill von Alexandrien betont: Weil der Gestorbene der Gott-Logos in seinem eigenen Fleisch ist, wiegt sein Tod mehr als das Leben aller. Papst Schenuda III. hat diese Lehre in „Das Heil im orthodoxen Verständnis" für die heutige Kirche entfaltet: Erlösung durch das Blut Christi, empfangen in Glaube, Taufe, Buße und Teilhabe an den Mysterien.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '9,1–2', year: 'ca. 318', quote: `Er nahm einen Leib an, der sterben konnte, damit dieser, am Wort teilhabend, das über allen ist, an Stelle aller dem Tod genüge, und wegen des innewohnenden Wortes unverweslich bleibe.`, original: 'ἀντὶ πάντων', status: 'paraphrase' },
      { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Das Heil im orthodoxen Verständnis (Salvation in the Orthodox Concept)', status: 'paraphrase', quote: `Das Heil gründet auf der Erlösung durch das Blut Christi und wird durch Glaube, Taufe, Buße und das Leben in der Kirche empfangen.` },
      { kind: 'bibel', work: 'Johannes', ref: '10,17–18', quote: `Darum liebt mich der Vater, weil ich mein Leben lasse, um es wiederzunehmen. Niemand nimmt es von mir, sondern ich lasse es von mir selbst.`, translation: 'eigene Übersetzung aus dem Griechischen', status: 'verbatim' },
    ],
  },
  opposingView: {
    summary: `Das rabbinische Judentum lehrt, dass Gott dem aufrichtig Umkehrenden vergibt und dass nach dem Verlust des Tempels Gebet, Umkehr und Werke der Barmherzigkeit an die Stelle der Opfer treten (Avot de-Rabbi Natan 4; bBerachot 26b). Zugleich kennt die jüdische Überlieferung ausdrücklich die Vorstellung, dass Tod und Leiden Gerechter für andere sühnen können: Der Tod der Gerechten sühnt wie die rote Kuh (bMoed Qatan 28a); der Tod des Hohepriesters befreit den Totschläger (Num 35,25.28); die Märtyrer der Makkabäerzeit werden als „Lösegeld" und „Sühnetod" für das Volk verstanden (2 Makk 7,37–38; 4 Makk 6,28–29; 17,21–22); am Neujahrsfest bittet Israel Gott, der Bindung Isaaks zu gedenken.`,
    sources: [
      { kind: 'juedisch', work: 'Babylonischer Talmud, Moed Qatan', ref: '28a', quote: `Rabbi Ammi sagte: Warum steht der Tod Mirjams neben dem Abschnitt von der roten Kuh? Um dich zu lehren: Wie die rote Kuh sühnt, so sühnt der Tod der Gerechten.`, status: 'paraphrase', url: 'https://www.sefaria.org/Moed_Katan.28a' },
      { kind: 'juedisch', work: 'Mischna, Yoma', ref: '8,8', quote: `Sündopfer und Schuldopfer sühnen; Tod und Versöhnungstag sühnen zusammen mit Umkehr.`, status: 'paraphrase', url: 'https://www.sefaria.org/Mishnah_Yoma.8.8' },
      { kind: 'juedisch', work: 'Mischna, Sanhedrin', ref: '6,2', quote: `Der zum Tod Verurteilte soll sagen: Möge mein Tod eine Sühne für alle meine Sünden sein.`, original: 'תְּהֵא מִיתָתִי כַפָּרָה עַל כָּל עֲוֹנוֹתַי', status: 'paraphrase', url: 'https://www.sefaria.org/Mishnah_Sanhedrin.6.2' },
      { kind: 'juedisch', work: '4. Makkabäerbuch', ref: '6,28–29', year: '1. Jh. n. Chr.', quote: `Sei deinem Volk gnädig und lass dir unsere Strafe für sie genügen. Mach mein Blut zu ihrer Reinigung und nimm mein Leben als Ersatz für ihr Leben.`, status: 'paraphrase', note: 'Gebet des Märtyrers Eleasar. Das 4. Makkabäerbuch gehört nicht zum Kanon der koptischen Kirche; es ist hier Zeugnis jüdischen Denkens um die Zeit Jesu.' },
      { kind: 'juedisch', work: '4. Makkabäerbuch', ref: '17,21–22', year: '1. Jh. n. Chr.', quote: `Sie wurden gleichsam ein Lösegeld für die Sünde des Volkes; und durch das Blut jener Frommen und ihren Sühnetod hat die göttliche Vorsehung Israel gerettet.`, original: 'διὰ τοῦ ἱλαστηρίου θανάτου αὐτῶν', status: 'paraphrase', note: 'Das Wort „hilastērion" (Sühne) erscheint auch in Röm 3,25 für Christus.' },
      { kind: 'bibel', work: '2. Makkabäer', ref: '7,37–38', quote: `Ich aber gebe wie meine Brüder Leib und Leben hin für die Gesetze der Väter und rufe Gott an, dass er bald seinem Volk gnädig werde … und dass an mir und meinen Brüdern der Zorn des Allmächtigen ende.`, translation: 'eigene Übersetzung aus dem Griechischen (gekürzt)', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Ez 18 sagt, dass Gott Kinder nicht gegen ihren Willen für die Schuld der Eltern bestraft – es spricht nicht über einen Unschuldigen, der sich freiwillig hingibt. Genau das beschreibt Jes 53: „Der HERR warf unser aller Schuld auf ihn", er „trug die Sünde der vielen". Jesus war kein heidnisches Menschenopfer: Kein Priester opferte ihn, um Gott umzustimmen; er gab sein Leben selbst, und Gott selbst trug in ihm die Kosten. Sogar der Talmud sagt: „Der Tod der Gerechten sühnt" (bMoed Qatan 28a). Und Ps 49 sagt nicht nur „kein Mensch kann erlösen", sondern: „Gott wird meine Seele erlösen."`,
  keyPoints: [
    `**Ez 18 regelt Gerechtigkeit im Gericht**, nicht freiwillige Stellvertretung; der Kontext ist das Sprichwort von den sauren Trauben (18,2).`,
    `**Die Hebräische Bibel kennt beides:** persönliche Verantwortung (Ez 18) und stellvertretende Sühne durch einen Unschuldigen (Jes 53; Lev 16,21).`,
    `**Kein Menschenopfer im heidnischen Sinn:** Niemand opferte Jesus einem Gott; er gab sein Leben selbst (Joh 10,18). Vorbild ist Gen 22: Gott ersieht sich das Lamm.`,
    `**Ps 49 begründet die Menschwerdung:** Kein Mensch kann erlösen – „Gott aber wird meine Seele erlösen" (49,16).`,
    `**Jüdische Tradition:** Der Tod der Gerechten sühnt (bMoed Qatan 28a), der Tod des Hohepriesters befreit (Num 35,25), die Makkabäer-Märtyrer als Sühnetod (4 Makk 17,22).`,
    `**Umkehr ist unverzichtbar** – auch für Christen. Aber Gott gründet die Vergebung auf eine Sühne, die er selbst gibt (Lev 17,11).`,
  ],
  voices: [
    {
      person: 'athanasius',
      role: 'als Lehrer der Menschwerdung',
      text: `Athanasius stellt die Frage, warum Gott den Menschen nicht einfach durch ein Wort vergab. Seine Antwort: Der Tod und die Verderbnis hatten den Menschen ergriffen; Umkehr allein hätte die Sünde zwar beendet, aber die Natur nicht von der Verderbnis geheilt. Darum nahm der unsterbliche Logos einen sterblichen Leib an, gab ihn „an Stelle aller" in den Tod und besiegte den Tod durch die Auferstehung. Für Athanasius ist das Kreuz kein Opfer, das Menschen Gott darbringen, sondern Gottes eigenes Eintreten für sein Geschöpf.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '6–10; 20', year: 'ca. 318', status: 'paraphrase' },
      ],
    },
    {
      person: 'kyrill-alexandrien',
      role: 'als Lehrer der Christologie',
      text: `Kyrill betont, dass der Tod Christi nur deshalb für alle gelten kann, weil der Gestorbene nicht ein bloßer Mensch ist, sondern der Gott-Logos, der das Fleisch zu seinem eigenen gemacht hat. Ein Mensch könnte höchstens für sich selbst sterben; der menschgewordene Gott aber „wiegt" alle auf. Damit beantwortet Kyrill der Sache nach Ps 49,8: Kein Mensch kann den Bruder erlösen – Gott selbst tut es im eigenen Fleisch.`,
      sources: [
        { kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Dass Christus einer ist (Quod unus sit Christus)', year: 'um 430', status: 'paraphrase' },
      ],
    },
    {
      person: 'paulus',
      role: 'als jüdischer Ausleger von Opfer und Sühne',
      text: `Paulus deutet den Tod Jesu mit der Sprache des Versöhnungstags: Gott hat ihn öffentlich hingestellt als „hilastērion", als Sühneort, durch sein Blut (Röm 3,25) – dasselbe Wort, das die jüdische Überlieferung für den Sühnetod der Makkabäer-Märtyrer verwendet. Der Kern bei Paulus ist, dass Gott selbst handelt: „Gott war in Christus und versöhnte die Welt mit sich selbst" (2 Kor 5,19). Es ist nicht der Mensch, der Gott versöhnt, sondern Gott, der die Welt versöhnt.`,
      sources: [
        { kind: 'bibel', work: 'Römer', ref: '3,25', status: 'paraphrase' },
        { kind: 'bibel', work: '2. Korinther', ref: '5,19.21', quote: `Denn Gott war in Christo und versöhnte die Welt mit ihm selber und rechnete ihnen ihre Sünden nicht zu.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
    },
    {
      person: 'michael-brown',
      role: 'als messianisch-jüdischer Apologet',
      text: `Brown zeigt in seiner Antwort auf die Gegenmission, dass das Motiv des sühnenden Leidens und Todes der Gerechten breit in der jüdischen Literatur verankert ist – vom Versöhnungstag über die Märtyrertexte bis zum Talmud und zur späteren Mystik. Der Einwand „das ist unjüdisch" hält nach Brown den eigenen Quellen nicht stand. Zugleich betont er, dass das Neue Testament keine Abschaffung der Umkehr lehrt, sondern Umkehr und Sühne zusammenhält.`,
      sources: [
        { kind: 'fachliteratur', author: 'Michael L. Brown', work: 'Answering Jewish Objections to Jesus, Bd. 2: Theological Objections', year: '2000', status: 'paraphrase' },
      ],
    },
    {
      person: 'shenouda-iii',
      role: 'als koptischer Lehrer des Heils',
      text: `Papst Schenuda III. erklärt das Heil im orthodoxen Verständnis als Werk Gottes in Christus, das der Mensch nicht selbst verdienen kann, aber im Glauben, in der Taufe, in der Buße und im Leben der Kirche empfängt und mitträgt. Er weist sowohl die Vorstellung zurück, Umkehr allein mache die Erlösung überflüssig, als auch die Idee eines mechanischen Opfers ohne Umkehr und Heiligung.`,
      sources: [
        { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Das Heil im orthodoxen Verständnis', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'ez-18-niemand',
      objection: `Ez 18,20: „Die Seele, die sündigt, die soll sterben. Der Sohn soll nicht die Schuld des Vaters tragen." Niemand kann für die Sünden eines anderen sterben. Das ganze Christentum steht auf einem Fundament, das die Tora ausdrücklich verwirft.`,
      objectionBy: 'Tovia Singer',
      answer: `Ez 18 antwortet auf das Sprichwort „Die Väter haben saure Trauben gegessen, und den Söhnen werden die Zähne stumpf" (18,2): Gott bestraft Kinder nicht gegen ihren Willen für die Schuld der Eltern, und wer umkehrt, lebt. Das ist Gerechtigkeit im Gericht. Über die freiwillige Hingabe eines Unschuldigen spricht Ez 18 nicht – wohl aber Jes 53: „Der HERR warf unser aller Schuld auf ihn", „er trug die Sünde der vielen". Beides steht im Tanach.`,
      questionsBack: [
        `Wenn Ez 18 jede Stellvertretung ausschließt – wie verstehst du dann Jes 53,6 und 53,12?`,
      ],
      followUps: [
        {
          id: 'mose-ex-32',
          objection: `Ex 32: Mose bot sich als Ersatz an – „tilge mich aus deinem Buch" –, und Gott lehnte ab: „Wer gegen mich gesündigt hat, den tilge ich aus." Das ist die Antwort der Tora auf Stellvertretung.`,
          objectionBy: 'Tovia Singer',
          answer: `Mose war selbst ein Sünder – er durfte später das Land nicht betreten (Num 20,12) – und Gott hatte ihn nicht zum Sühnemittel bestimmt. Trotzdem rettete seine Fürbitte das Volk vor der Vernichtung (Ex 32,14; Ps 106,23). Ex 32 zeigt: Ein Mensch kann sich nicht selbst zum Lösegeld machen. Es zeigt nicht, dass Gott keines bereitstellen kann. Wir sprechen vom Sündlosen, den Gott selbst sendet (Jes 53,10: „dem HERRN gefiel es").`,
          followUps: [
            {
              id: 'psalm-49',
              objection: `Ps 49,8: „Kein Mensch kann seinen Bruder erlösen noch Gott ein Lösegeld für ihn geben." Damit ist es endgültig ausgeschlossen.`,
              objectionBy: 'Stuart Federow',
              answer: `Lies weiter: „Gott aber wird meine Seele erlösen aus der Gewalt des Totenreichs" (49,16). Das ist genau der christliche Punkt: Kein bloßer Mensch kann erlösen – Gott selbst muss es tun. Deshalb ist der Messias Gottes eigenes Wort, das Fleisch wurde. Ps 49 spricht nicht gegen das Evangelium, sondern erklärt, warum die Menschwerdung nötig war.`,
              followUps: [
                {
                  id: 'gott-opfert-sich-selbst',
                  objection: `Dann bringt Gott sich selbst ein Opfer, um sich selbst zu besänftigen. Das ist absurd und völlig unjüdisch.`,
                  objectionBy: 'Shmuley Boteach',
                  answer: `Es ist nicht ein Gott, der sich wie eine heidnische Gottheit selbst besänftigt, sondern Gott, der die Kosten der Versöhnung in seiner eigenen Person trägt – Liebe, die bezahlt. „Gott wird sich das Lamm ersehen" (Gen 22,8). Auch die jüdische Tradition kennt einen Gott, der am Leiden seines Volkes teilnimmt: „In all ihrer Bedrängnis war er bedrängt" (Jes 63,9), und der Talmud sagt, wohin Israel auch verbannt wurde, ging die Schechina mit ihm (bMegilla 29a).`,
                  sources: [
                    { kind: 'juedisch', work: 'Babylonischer Talmud, Megilla', ref: '29a', quote: `Komm und sieh, wie geliebt Israel vor dem Heiligen, gepriesen sei er, ist: Wohin sie auch verbannt wurden, ging die Schechina mit ihnen.`, status: 'paraphrase', url: 'https://www.sefaria.org/Megillah.29a' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'menschenopfer-greuel',
      objection: `Gott verabscheut Menschenopfer: Dtn 12,31; Jer 19,5 – „was ich nicht geboten habe und was mir nie in den Sinn gekommen ist". Das Kreuz ist ein Menschenopfer – heidnisch, nicht jüdisch.`,
      objectionBy: 'Michael Skobac',
      answer: `Diese Texte verurteilen, dass Menschen ihre Kinder Götzen opfern, um Götter zu beeinflussen – Moloch-Kult. Das Kreuz ist das Gegenteil: Kein Priester hat Jesus auf einem Altar dargebracht; Rom hat ihn ungerecht hingerichtet, und er gab sein Leben selbst (Joh 10,18). Gott hat das Böse der Menschen zum Heil gewendet, wie bei Josef (Gen 50,20). Das Vorbild ist die Bindung Isaaks: Gott verhindert das Menschenopfer und sagt, er selbst werde sich das Lamm ersehen – auf dem Berg Morija, dem späteren Tempelberg (2 Chr 3,1).`,
      followUps: [
        {
          id: 'hinrichtung-suehnt-nicht',
          objection: `Dann war Jesu Tod kein Opfer, sondern eine Hinrichtung. Und Hinrichtungen sühnen nichts.`,
          objectionBy: 'Tovia Singer',
          answer: `Beides: von Menschen her eine Hinrichtung, von Gott her eine Hingabe. Und deine eigene Tradition kennt sühnende Tode: „Wie die rote Kuh sühnt, so sühnt der Tod der Gerechten" (bMoed Qatan 28a); der Tod des Hohepriesters befreit den Totschläger (Num 35,25.28); die Makkabäer-Märtyrer gelten als „Lösegeld für die Sünde des Volkes" und ihr Tod als Sühne (4 Makk 17,21–22; vgl. 2 Makk 7,37–38).`,
          sources: [
            { kind: 'juedisch', work: 'Babylonischer Talmud, Moed Qatan', ref: '28a', quote: `Wie die rote Kuh sühnt, so sühnt der Tod der Gerechten.`, status: 'paraphrase', url: 'https://www.sefaria.org/Moed_Katan.28a' },
          ],
          followUps: [
            {
              id: 'nur-eigene-suenden',
              objection: `Diese Stellen meinen, dass Gott um der Gerechten willen Gnade übt oder dass der Tod die **eigenen** Sünden sühnt (Mischna Sanhedrin 6,2). Das ist keine stellvertretende Sühne.`,
              objectionBy: 'Stuart Federow',
              answer: `Bei Mischna Sanhedrin 6,2 hast du recht – dort geht es um die eigenen Sünden. Aber Moed Qatan 28a spricht vom Tod der Gerechten, der für ihre Generation sühnt; der Tod des Hohepriesters wirkt für den Totschläger, nicht für den Hohepriester; und das 4. Makkabäerbuch nennt den Tod der Märtyrer ausdrücklich „Lösegeld für die Sünde des Volkes" – mit demselben griechischen Wort „hilastērion", das Paulus in Röm 3,25 für Christus verwendet. Der Gedanke, dass der Tod eines Gerechten anderen zugutekommt, ist zutiefst jüdisch.`,
              questionsBack: [
                `Für wessen Sünde sühnt nach 4 Makk 17,21–22 der Tod der Märtyrer?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'umkehr-genuegt',
      objection: `Opfer galten nur für unabsichtliche Sünden (Lev 4). Für bewusste Sünden genügt Umkehr: Ez 18,21–23; Jona 3; Hos 14,3. Gott braucht kein Blut, um zu vergeben.`,
      objectionBy: 'Tovia Singer',
      answer: `Umkehr ist unverzichtbar – Jesus begann seine Verkündigung mit „Kehrt um!" (Mk 1,15). Aber am Versöhnungstag bekennt der Hohepriester über dem Bock „alle Schuld und alle Übertretungen" Israels (Lev 16,21) – das hebräische „pescha'im" meint bewusste Auflehnung. Und Gott sagt: „Ich habe euch das Blut auf den Altar gegeben, um Sühne zu schaffen" (Lev 17,11). Die Mischna hält beides zusammen: „Der Versöhnungstag sühnt zusammen mit Umkehr" (Yoma 8,8). Seit 70 n. Chr. gibt es kein Ritual von Lev 16 mehr – darum ist es so bedeutsam, dass der Messias die Sühne vorher geschaffen hat.`,
      followUps: [
        {
          id: 'lippen-statt-stiere',
          objection: `Hos 14,3: „Wir wollen statt Stieren unsere Lippen darbringen" – Gebet ersetzt das Opfer. Und Spr 16,6: „Durch Güte und Treue wird Schuld gesühnt."`,
          objectionBy: 'Michael Skobac',
          answer: `Wunderbare Verse – Gott sieht das Herz an. Aber sie sagen nicht, dass Gott die Sühne, die er selbst eingesetzt hat, abschafft. Die Propheten kritisieren Opfer ohne Gehorsam (1 Sam 15,22; Jes 1,11), und David, der „ein zerbrochenes Herz" als Opfer nennt, schließt mit „dann wird man Stiere auf deinem Altar opfern" (Ps 51,19–21). Nach 70 n. Chr. machten die Rabbinen Gebet und Barmherzigkeit zum Ersatz – eine seelsorgerliche Antwort auf eine Katastrophe. Wir glauben: Gott ist dieser Katastrophe mit dem einen Opfer des Messias zuvorgekommen.`,
        },
      ],
    },
    {
      id: 'nicht-makellos',
      objection: `Ein Opfer muss makellos sein (Lev 22,20) und vom Priester am Altar dargebracht werden. Jesus wurde gegeißelt – also nicht makellos –, von Römern getötet, außerhalb des Tempels. Er erfüllt keine einzige Opfervorschrift.`,
      objectionBy: 'Tovia Singer',
      answer: `Das Neue Testament behauptet gar nicht, Jesus sei nach levitischem Ritus geopfert worden. Der Hebräerbrief nennt ihn Priester nach der Weise Melchisedeks (Ps 110,4), der sich selbst darbrachte (Hebr 9,14). „Makellos" heißt beim Urbild: ohne Sünde (1 Petr 1,19; Jes 53,9). Das Passalamm wurde vor dem Schlachten geprüft (Ex 12,3–6) – Pilatus sagte: „Ich finde keine Schuld an ihm" (Lk 23,4). Und der Bock des Versöhnungstags wurde hinaus aus dem Lager geschickt – Jesus litt „draußen vor dem Tor" (Hebr 13,11–12).`,
      followUps: [
        {
          id: 'typologie-beliebig-opfer',
          objection: `Mit Typologie kannst du alles beweisen. Das ist nachträgliches Hineinlesen.`,
          objectionBy: 'Stuart Federow',
          answer: `Typologie allein beweist nichts, das gebe ich zu. Aber hier baut der Tanach selbst die Brücke vom Tieropfer zur Person: Jes 53,7 vergleicht den Knecht mit einem „Lamm, das zur Schlachtung geführt wird", und 53,10 nennt sein Leben ein „asham", ein Schuldopfer aus Lev 5. Die Verbindung von Opfer und Person hat Jesaja hergestellt, nicht die Kirche.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Spricht Ez 18 über gerichtliche Bestrafung gegen den Willen des Betroffenen – oder über freiwillige Hingabe?`,
    `Wie verstehst du Jes 53,6: „Der HERR warf unser aller Schuld auf ihn"?`,
    `Was bedeutet der Satz des Talmud „Der Tod der Gerechten sühnt" (bMoed Qatan 28a)?`,
    `Wie hält das Judentum seit 70 n. Chr. den Versöhnungstag nach Lev 16 – und wer hat die Ersatzformen bevollmächtigt?`,
    `Wenn kein Mensch seinen Bruder erlösen kann (Ps 49,8) – wer erlöst dann nach Ps 49,16?`,
  ],
  avoid: [
    `Nicht behaupten, Juden glaubten, Vergebung sei „ohne Blut unmöglich" und lebten deshalb ohne Vergebung. Das rabbinische Judentum kennt Umkehr, Gebet und Barmherzigkeit als Weg der Versöhnung – das muss man respektvoll wiedergeben.`,
    `Nicht den Tod Jesu als Besänftigung eines zornigen Vaters durch das Leiden des Sohnes darstellen. Das ist nicht die orthodoxe Lehre und bestätigt das Zerrbild des „Menschenopfers".`,
    `Nicht das 4. Makkabäerbuch als „Heilige Schrift" zitieren – es ist ein jüdisches Zeugnis, aber nicht Teil des koptischen Kanons.`,
  ],
  concessions: [
    `Ez 18 und Dtn 24,16 lehren wirklich persönliche Verantwortung; Stellvertretung muss aus anderen Texten begründet werden.`,
    `In Ex 32 lehnt Gott Moses Angebot ab, an Stelle des Volkes ausgetilgt zu werden.`,
    `Gott vergibt in der Hebräischen Bibel dem Umkehrenden auch ohne Opfer im Einzelfall (z. B. Ninive, Jona 3).`,
  ],
  furtherReading: [
    { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', year: 'ca. 318', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Michael L. Brown', work: 'Answering Jewish Objections to Jesus, Bd. 2', year: '2000', status: 'paraphrase' },
    { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Das Heil im orthodoxen Verständnis', status: 'paraphrase' },
    { kind: 'gegner', author: 'Tovia Singer', work: 'Let\'s Get Biblical!', year: '2014', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Sühne', 'Ezechiel 18', 'Stellvertretung', 'Menschenopfer', 'Versöhnungstag', 'Makkabäer', 'Akeda'],
  related: [
    'judentum-messias/jesaja-53-ist-israel',
    'judentum-messias/tora-ewig-gueltig',
    'islam-kreuzigung/niemand-traegt-last',
    'islam-kreuzigung/gott-kann-einfach-vergeben',
  ],
};

export default claim;
