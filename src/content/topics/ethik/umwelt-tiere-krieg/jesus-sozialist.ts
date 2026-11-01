import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'jesus-sozialist',
  title: `„Jesus war Sozialist – das Christentum verlangt Gütergemeinschaft (Apg 2)."`,
  proponents: [
    { name: 'Friedrich Engels', role: 'Mitbegründer des Marxismus', work: '„Zur Geschichte des Urchristentums", Die Neue Zeit (1894/95)' },
    { name: 'Karl Kautsky', role: 'Marxistischer Theoretiker', work: 'Der Ursprung des Christentums (1908)' },
    { name: 'José Porfirio Miranda', role: 'Befreiungstheologe', work: 'Communism in the Bible (1981)' },
    { name: 'David Bentley Hart', role: 'Orthodoxer Religionsphilosoph', work: '„Are Christians Supposed to Be Communists?", The New York Times (2017); The New Testament: A Translation (2017)' },
  ],
  steelman: `Lies die Apostelgeschichte: „Alle aber, die gläubig waren geworden, waren beieinander und hielten alle Dinge gemein. Ihre Güter und Habe verkauften sie und teilten sie aus unter alle, nach dem jedermann not war" (Apg 2,44–45; vgl. 4,32–35). Das ist Gütergemeinschaft – Marx' Formel „Jedem nach seinen Bedürfnissen" klingt wie ein Echo davon. Jesus selbst sagte dem reichen Jüngling: „Verkaufe alles, was du hast, und gib's den Armen" (Mk 10,21), und: „Es ist leichter, daß ein Kamel durch ein Nadelöhr gehe, denn daß ein Reicher ins Reich Gottes komme" (Mk 10,25). Maria singt, dass Gott „die Reichen leer lässt" (Lk 1,53). Die Kirchenväter waren noch radikaler: Basilius nannte das zurückgehaltene Brot Eigentum des Hungernden, Chrysostomus den nicht geteilten Reichtum Diebstahl an den Armen. Engels und Kautsky sahen im Urchristentum eine proletarische Bewegung, und selbst der orthodoxe Theologe David Bentley Hart schreibt, die frühen Christen seien im Grunde Kommunisten gewesen. Das bürgerliche Christentum, das Privateigentum und Kapitalismus segnet, hat den radikalen Jesus verraten.`,
  biblical: {
    summary: `Die Bibel ist in ihren Warnungen vor Reichtum **radikaler, als vielen Christen lieb ist** – das muss man zugeben (Lk 12,15–21; Lk 16,19–31; Jak 5,1–6; 1 Tim 6,9–10). Doch die Gütergemeinschaft der Jerusalemer Urgemeinde war **freiwillig**: Petrus sagt zu Ananias ausdrücklich, das Grundstück sei vor und nach dem Verkauf in seiner Verfügung gewesen (Apg 5,4). Es gab weiterhin Privathäuser (Maria, die Mutter des Markus, Apg 12,12), und Paulus organisierte später keine Kollektivierung, sondern eine freiwillige Kollekte, bei der jeder gibt, „wie er's sich im Herzen vornimmt, nicht mit Unwillen oder aus Zwang" (2 Kor 9,7). Das Eigentum wird im Dekalog geschützt (Ex 20,15.17), aber als **anvertrautes Gut** verstanden, über das man vor Gott Rechenschaft ablegt (Lk 16,1–13; Ps 24,1). Das Maß ist die Barmherzigkeit: „Was ihr getan habt einem unter diesen meinen geringsten Brüdern, das habt ihr mir getan" (Mt 25,40).`,
    detail: `**Apg 2 und 4 genau gelesen.** Die Verben stehen im Imperfekt: Sie *verkauften immer wieder* und *teilten aus*, „nach dem jedermann not war" – eine fortlaufende Praxis der Liebe, keine einmalige Enteignung. Es gibt keinen Plan, keine Produktionsmittel in Gemeinbesitz, keine staatliche Zwangsgewalt, keinen Klassenkampf.

**Ananias und Saphira (Apg 5,1–11).** Sie sterben nicht, weil sie einen Teil behalten, sondern weil sie lügen: Sie geben vor, alles gegeben zu haben. „Hättest du ihn doch wohl mögen behalten, da du ihn hattest" (Apg 5,4).

**Das Jubeljahr (Lev 25).** Alle fünfzig Jahre kehrte verkauftes Land an die ursprüngliche Familie zurück. Das ist keine Kollektivierung, sondern der Schutz des *familiären Eigentums* gegen die Anhäufung bei wenigen. Die prophetische Vision: „Ein jeglicher wird unter seinem Weinstock und Feigenbaum wohnen ohne Scheu" (Mi 4,4).

**Arbeit und Teilen.** „So jemand nicht will arbeiten, der soll auch nicht essen" (2 Thess 3,10); „Wer gestohlen hat, der stehle nicht mehr, sondern arbeite … auf daß er habe, zu geben dem Dürftigen" (Eph 4,28). Eigentum ist Mittel zur Freigebigkeit.`,
    sources: [
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '2,44–45', quote: `Alle aber, die gläubig waren geworden, waren beieinander und hielten alle Dinge gemein. Ihre Güter und Habe verkauften sie und teilten sie aus unter alle, nach dem jedermann not war.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '5,4', quote: `Hättest du ihn doch wohl mögen behalten, da du ihn hattest; und da er verkauft war, war es auch in deiner Gewalt.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Korinther', ref: '9,7', quote: `Ein jeglicher nach seiner Willkür, nicht mit Unwillen oder aus Zwang; denn einen fröhlichen Geber hat Gott lieb.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Exodus', ref: '20,15.17', quote: `Du sollst nicht stehlen. … Laß dich nicht gelüsten deines Nächsten Hauses.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '25,40', quote: `Wahrlich ich sage euch: Was ihr getan habt einem unter diesen meinen geringsten Brüdern, das habt ihr mir getan.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '12,15', quote: `Sehet zu und hütet euch vor dem Geiz; denn niemand lebt davon, daß er viele Güter hat.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Väter sprechen über Reichtum mit einer Schärfe, die heute erschreckt. Der hl. Basilius predigte während einer Hungersnot über den reichen Kornbauern (Lk 12,18): Das Brot, das du zurückhältst, gehört dem Hungernden, der Mantel in deiner Truhe dem Nackten. Der hl. Johannes Chrysostomus sagte, den eigenen Reichtum nicht mit den Armen zu teilen, heiße, sie zu bestehlen. Gregor von Nazianz hielt eine große Rede über die Liebe zu den Armen. Zugleich haben die Väter das Eigentum nicht abgeschafft, sondern als **Verwaltung** verstanden: Clemens von Alexandrien zeigte in *Welcher Reiche wird gerettet werden?*, dass nicht der Besitz, sondern die Anhänglichkeit an ihn verdammt. Basilius gründete mit der „Basileias" ein Werk der Barmherzigkeit, nicht einen Staat der Enteignung. Die koptische Kirche lebt diese Tradition in der freiwilligen Armut der Mönche und in einem dichten Netz kirchlicher Sozialdienste für Arme in Ägypten.`,
    sources: [
      { kind: 'kirchenvater', author: 'Basilius von Caesarea', work: 'Homilie 6 über Lk 12,18 („Ich will meine Scheunen abbrechen")', ref: '7', year: 'um 368', quote: `Das Brot, das du zurückhältst, gehört dem Hungernden; der Mantel, den du in der Truhe verwahrst, dem Nackten; die Schuhe, die bei dir verrotten, dem Barfüßigen; das Silber, das du vergraben hast, dem Bedürftigen.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Zweite Homilie über Lazarus und den reichen Mann', year: 'um 388', quote: `Den eigenen Reichtum nicht mit den Armen zu teilen, heißt, sie zu bestehlen und ihnen den Lebensunterhalt zu nehmen; was wir besitzen, ist nicht unser, sondern ihres.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Clemens von Alexandrien', work: 'Quis dives salvetur (Welcher Reiche wird gerettet werden?)', year: 'um 200', quote: `Nicht der Besitz an sich, sondern die Leidenschaft für ihn trennt von Gott; Reichtum ist ein Werkzeug, das gut oder schlecht gebraucht werden kann.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Gregor von Nazianz', work: 'Oratio 14 (Über die Liebe zu den Armen)', year: 'um 365–372', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Jesus hat die Reichen schärfer gewarnt als jeder Sozialist – das sollten Christen nicht verharmlosen. Aber die Gütergemeinschaft in Apg 2 war freiwillig: Petrus sagt Ananias ausdrücklich, sein Besitz sei in seiner Verfügung gewesen (Apg 5,4). Der Sozialismus im modernen Sinn verlangt staatlichen Zwang, Abschaffung des Privateigentums und oft Klassenkampf; das Evangelium verlangt ein verwandeltes Herz, das aus Liebe freiwillig teilt. Das Christentum ist weder Kapitalismus noch Sozialismus, sondern ein Gericht über beide: über die Gier und über die Gewalt.`,
  keyPoints: [
    `**Freiwillig, nicht erzwungen:** Apg 5,4 und 2 Kor 9,7 – christliches Teilen geschieht aus Liebe, nicht durch Enteignung.`,
    `**Eigentum ist geschützt – und verpflichtet:** Der Dekalog verbietet Diebstahl und Begehren; zugleich ist Besitz anvertrautes Gut, das dem Nächsten dienen soll (Ps 24,1; Eph 4,28).`,
    `**Die Warnung vor Reichtum ist echt:** Mk 10,25; Lk 12,15–21; Jak 5,1–6 – Christen dürfen das nicht verwässern.`,
    `**Die Väter: scharf, aber nicht marxistisch:** Basilius und Chrysostomus nennen Hortung Diebstahl, rufen aber das Gewissen zur Barmherzigkeit, nicht den Staat zur Kollektivierung.`,
    `**Kein Wirtschaftssystem in der Bibel:** Die Schrift gibt Maßstäbe (Gerechtigkeit, Barmherzigkeit, Schutz der Schwachen), keinen Bauplan für Kapitalismus oder Sozialismus.`,
    `**Historische Erfahrung:** Marxistische Regime verbanden Kollektivierung mit Hungersnöten und Kirchenverfolgung – ein Gegensatz zur freiwilligen Liebesgemeinschaft der Urkirche.`,
  ],
  voices: [
    {
      person: 'lukas',
      role: 'als Historiker der Urgemeinde',
      text: `Lukas beschreibt die Gütergemeinschaft der Jerusalemer Gemeinde mit sichtlicher Bewunderung (Apg 2,42–47; 4,32–37) – und berichtet gleich danach von Ananias und Saphira, um zu zeigen, dass das Geben freiwillig war und die Sünde in der Lüge bestand (Apg 5,4). Er schildert auch Spannungen, etwa die Vernachlässigung der griechischsprachigen Witwen (Apg 6,1), und dass die Gemeinde in Antiochia später eine Hilfssendung nach Jerusalem schickte (Apg 11,27–30). Lukas zeichnet eine lebendige Liebesgemeinschaft, nicht ein Wirtschaftsprogramm.`,
      sources: [{ kind: 'bibel', work: 'Apostelgeschichte', ref: '2,42–47; 4,32–5,11; 6,1; 11,27–30', status: 'paraphrase' }],
    },
    {
      person: 'basilius',
      role: 'als Bischof in einer Hungersnot',
      text: `Basilius predigte um 368 während einer schweren Hungersnot in Kappadokien gegen die Kornhändler, die ihre Vorräte zurückhielten, um die Preise zu treiben. Er verkaufte sein eigenes Erbe und organisierte Speisungen. Seine Predigten sind ein Aufruf an das Gewissen der Reichen: Wer mehr hat, als er braucht, ist Verwalter, nicht Eigentümer. Gleichzeitig zeigt die von ihm gegründete Basileias – Hospital, Herberge und Armenhaus –, dass seine Antwort die tätige Barmherzigkeit der Kirche war.`,
      sources: [
        { kind: 'kirchenvater', author: 'Basilius von Caesarea', work: 'Homilie 6 („Destruam horrea mea") und Homilie 7 („An die Reichen")', year: 'um 368', status: 'paraphrase' },
        { kind: 'kirchenvater', author: 'Gregor von Nazianz', work: 'Oratio 43 (Grabrede auf Basilius)', ref: '35–36; 63', year: '381', status: 'paraphrase', note: 'Berichtet über Basilius\' Hilfe in der Hungersnot und die Basileias.' },
      ],
    },
    {
      person: 'chrysostomus',
      role: 'als Prediger in Antiochia und Konstantinopel',
      text: `Chrysostomus scheute sich nicht, den Reichen seiner Gemeinde ins Gewissen zu reden. In seinen Homilien über Lazarus erklärt er, Gott habe den Reichtum den Reichen anvertraut, damit sie ihn mit den Armen teilen; wer das nicht tue, begehe Diebstahl. In einer Homilie zur Apostelgeschichte malt er sogar aus, wie viel Not in Konstantinopel verschwände, wenn die Christen ihre Güter zusammenlegten. Doch er appelliert an die Freiwilligkeit des Herzens – und er bezahlte seinen Freimut gegenüber den Mächtigen mit der Verbannung.`,
      sources: [
        { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien über Lazarus und den reichen Mann', ref: 'Hom. 2', year: 'um 388', status: 'paraphrase' },
        { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zur Apostelgeschichte', ref: 'Hom. 11', year: 'um 400', status: 'paraphrase' },
      ],
    },
    {
      person: 'tim-keller',
      role: 'als Pastor in Manhattan',
      text: `In *Generous Justice* (2010) argumentiert Keller, dass die Bibel Gerechtigkeit für Arme nicht als Zusatz, sondern als Kennzeichen echter Gnade versteht: Wer selbst Gnade empfangen hat, wird großzügig. Er warnt vor zwei Verengungen – einer konservativen, die Armut nur als persönliches Versagen sieht, und einer progressiven, die sie nur als strukturelles Unrecht sieht. Die Bibel kenne beide Ursachen und verlange persönliche Barmherzigkeit ebenso wie gerechte Strukturen.`,
      sources: [{ kind: 'fachliteratur', author: 'Timothy Keller', work: 'Generous Justice: How God\'s Grace Makes Us Just', year: '2010', status: 'paraphrase' }],
    },
    {
      person: 'rodney-stark',
      role: 'als Religionssoziologe',
      text: `Rodney Stark zeigt in *The Rise of Christianity* (1996), dass die frühen Christen durch ihre gegenseitige Hilfe – besonders bei Seuchen, für Witwen und Waisen – eine einzigartige Solidargemeinschaft in der antiken Welt bildeten. Selbst Kaiser Julian beklagte, die „Galiläer" versorgten nicht nur ihre eigenen Armen, sondern auch die der Heiden. Diese Solidarität beruhte nicht auf staatlicher Umverteilung, sondern auf der Liebe einer freiwilligen Gemeinschaft.`,
      sources: [
        { kind: 'fachliteratur', author: 'Rodney Stark', work: 'The Rise of Christianity', ref: 'Kap. 4 und 7', year: '1996', status: 'paraphrase' },
        { kind: 'sonstiges', author: 'Kaiser Julian', work: 'Brief an Arsakios, Oberpriester von Galatien', ref: 'Brief 22 (Zählung der Loeb-Ausgabe, W. C. Wright)', year: '362', quote: `Die gottlosen Galiläer ernähren nicht nur ihre eigenen Armen, sondern auch die unseren.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'apg2-kommunismus',
      objection: `Apg 2,44: „Sie hielten alle Dinge gemein." Das ist Kommunismus – lange vor Marx.`,
      objectionBy: 'Karl Kautsky',
      answer: `Es ist eine Gemeinschaft der Liebe, aber kein Kommunismus im marxistischen Sinn. Sie war freiwillig – Petrus sagt zu Ananias: „Hättest du ihn doch wohl mögen behalten, da du ihn hattest" (Apg 5,4). Es gab weiter Privathäuser (Apg 12,12), keine Kollektivierung der Produktion, keinen Staat, der enteignet, und keinen Klassenkampf. Die Gläubigen verkauften immer wieder, was sie hatten, um Bedürftigen zu helfen – aus einem verwandelten Herzen, nicht aus einem politischen Programm.`,
      followUps: [
        {
          id: 'hart-kommunisten',
          objection: `Sogar David Bentley Hart, ein orthodoxer Theologe, schreibt: Die ersten Christen waren Kommunisten. Ihr modernen Christen habt das bequem verwässert.`,
          objectionBy: 'David Bentley Hart',
          answer: `Hart hat recht, dass das Neue Testament über Reichtum radikaler spricht, als viele Christen wahrhaben wollen – das ist ein berechtigter Weckruf. Aber selbst wenn man die Urgemeinde „kommunistisch" nennt, meint man eine freiwillige, religiöse Gemeinschaft des Teilens, nicht einen Staat, der Eigentum mit Zwang abschafft. Diese Unterscheidung ist entscheidend: Das Evangelium ruft das Herz zur Liebe, es ermächtigt nicht den Staat zur Enteignung.`,
          sources: [{ kind: 'fachliteratur', author: 'David Bentley Hart', work: '„Are Christians Supposed to Be Communists?", The New York Times', year: '2017', quote: `Hart argumentiert, die frühen Christen hätten in Gütergemeinschaft gelebt und Privatbesitz für mit der Nachfolge kaum vereinbar gehalten; das moderne Christentum habe diese Radikalität verdrängt.`, status: 'paraphrase', note: 'Hart ist orthodoxer Theologe mit eigenwilligen Positionen; keine Lehrautorität der koptischen Kirche.' }],
          followUps: [
            {
              id: 'basilius-umverteilung',
              objection: `Basilius sagt: Das Brot, das du zurückhältst, gehört dem Hungernden. Das ist Umverteilung, klar und deutlich.`,
              objectionBy: 'José Porfirio Miranda',
              answer: `Basilius spricht hier als Prediger zum Gewissen der Reichen: Wer hortet, während andere hungern, sündigt schwer. Das unterschreibe ich voll. Aber Basilius forderte nicht die Abschaffung des Eigentums durch den Staat – er gründete die Basileias, ein Werk der kirchlichen Barmherzigkeit, finanziert durch freiwillige Gaben, auch aus seinem eigenen Erbe. Seine Botschaft ist: Eigentum ist Verwaltung im Auftrag Gottes, und wer es nicht teilt, wird Rechenschaft geben.`,
              followUps: [
                {
                  id: 'staat-soll-umverteilen',
                  objection: `Wenn Teilen Pflicht ist, warum es dann nicht durch den Staat erzwingen? Freiwilligkeit heißt in der Praxis: Die Armen bleiben arm.`,
                  answer: `Christen dürfen durchaus für Steuern, Sozialsysteme und Schutz der Schwachen eintreten – Paulus fordert, Steuern zu zahlen (Röm 13,6–7), und das alttestamentliche Recht kannte verpflichtende Abgaben für Arme (Dtn 14,28–29). Das Christentum ist also nicht libertär. Aber Sozialismus im strengen Sinn – Abschaffung des Privateigentums, Planwirtschaft, oft verbunden mit Klassenkampf und Atheismus – widerspricht dem biblischen Menschenbild, das Freiheit, Familie und Eigentum als Gaben schützt. Welche Sozialpolitik am besten hilft, ist eine Frage der Klugheit, kein Dogma.`,
                  followUps: [
                    {
                      id: 'jubeljahr-sozialismus',
                      objection: `Das Jubeljahr in Lev 25 ist doch staatliche Umverteilung von Land – biblischer Sozialismus!`,
                      answer: `Im Jubeljahr kehrt das Land an die *ursprüngliche Familie* zurück. Das ist nicht Kollektivierung, sondern das Gegenteil: Jede Familie soll ihr eigenes Erbteil behalten und es nicht dauerhaft an Großgrundbesitzer verlieren. Es ist ein Gesetz gegen Monopole und Schuldknechtschaft, das das Privateigentum der Kleinen schützt. Die biblische Vision lautet: „Ein jeglicher wird unter seinem Weinstock und Feigenbaum wohnen" (Mi 4,4) – nicht unter dem Weinstock des Kollektivs.`,
                      sources: [{ kind: 'bibel', work: 'Levitikus', ref: '25,10.23–28', status: 'paraphrase' }],
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
      id: 'jesus-gegen-reiche',
      objection: `Jesus sagt: „Verkaufe alles, was du hast" (Mk 10,21) und „Eher geht ein Kamel durch ein Nadelöhr …" (Mk 10,25). Jesus war eindeutig gegen Reichtum.`,
      answer: `Ja, Jesus warnt vor Reichtum mit großer Schärfe – das dürfen wir nicht abschwächen. Aber er verlangt nicht von allen dasselbe: Dem reichen Jüngling, dessen Herz am Besitz hing, sagt er „Verkaufe alles"; Zachäus gibt die Hälfte und erstattet Betrogenes vierfach – und Jesus sagt: „Heute ist diesem Hause Heil widerfahren" (Lk 19,8–9). Jesus wurde von wohlhabenden Frauen unterstützt (Lk 8,3), und der reiche Josef von Arimathäa war sein Jünger (Mt 27,57). Es geht um das Herz, nicht um ein Wirtschaftssystem.`,
      followUps: [
        {
          id: 'nadeloehr-tor',
          objection: `Und kommt jetzt die Geschichte vom „Nadelöhr-Tor" in Jerusalem, durch das ein Kamel nur kniend passt? Das ist eine billige Ausrede.`,
          answer: `Da stimme ich dir zu: Für ein solches Tor gibt es keinen historischen Beleg; die Erklärung ist spät und sollte nicht verwendet werden. Jesus benutzt eine bewusste Übertreibung: Aus eigener Kraft kann sich kein Reicher vom Besitz lösen. Darum folgt sofort: „Bei den Menschen ist's unmöglich, aber nicht bei Gott" (Mk 10,27). Die Pointe ist Gnade, nicht Klassenzugehörigkeit.`,
          followUps: [
            {
              id: 'kirche-reich',
              objection: `Die Kirchen sind selbst reich, Bischöfe leben in Palästen. Wer im Glashaus sitzt …`,
              answer: `Wo Kirchenführer im Luxus leben, ist das ein Ärgernis, und die Kritik ist berechtigt. Die koptische Kirche hat eine starke Tradition freiwilliger Armut: Ihre Bischöfe kommen aus dem Mönchtum, das Besitzlosigkeit gelobt, und die Kirche unterhält in Ägypten umfangreiche Dienste für Arme, Kranke und Waisen. Der Maßstab für alle Kirchen ist Christus, der „arm ward um euretwillen" (2 Kor 8,9).`,
            },
          ],
        },
        {
          id: 'ananias-todesstrafe',
          objection: `Ananias und Saphira fielen tot um, weil sie nicht alles abgaben. Das ist Zwangskommunismus mit Todesstrafe!`,
          answer: `Genau das sagt der Text nicht. Petrus erklärt ausdrücklich, dass sie den Acker hätten behalten dürfen und auch den Erlös frei verwenden konnten (Apg 5,4). Ihre Sünde war, die Gemeinde und den Heiligen Geist zu belügen, indem sie vorgaben, alles gegeben zu haben. Die Erzählung beweist also das Gegenteil: Das Geben war freiwillig, die Lüge war das Problem.`,
        },
      ],
    },
    {
      id: 'marx-apg435',
      objection: `Marx' „Jeder nach seinen Fähigkeiten, jedem nach seinen Bedürfnissen" stammt doch fast wörtlich aus Apg 4,35: „Man gab einem jeglichen, was ihm not war."`,
      objectionBy: 'Friedrich Engels',
      answer: `Die Ähnlichkeit ist auffällig, und vielleicht hat Marx sich von der christlichen Tradition inspirieren lassen. Aber Marx' System unterscheidet sich grundlegend: Es ist atheistisch, setzt auf Klassenkampf und die „Diktatur des Proletariats" und will das Privateigentum mit Gewalt abschaffen. Die Urgemeinde teilte aus Liebe zu Gott und zueinander. Die Geschichte zeigt den Unterschied: Wo marxistische Regime herrschten, folgten Kollektivierung, Hungersnöte wie in der Ukraine 1932–33 und in China 1959–61 sowie Kirchenverfolgung.`,
      sources: [{ kind: 'gegner', author: 'Karl Marx', work: 'Kritik des Gothaer Programms', year: '1875', quote: `Jeder nach seinen Fähigkeiten, jedem nach seinen Bedürfnissen!`, status: 'verbatim' }],
      followUps: [
        {
          id: 'kein-echter-sozialismus',
          objection: `Das war kein echter Sozialismus. Der demokratische Sozialismus Skandinaviens ist das christliche Ideal.`,
          answer: `Die skandinavischen Länder sind Marktwirtschaften mit starkem Sozialstaat – und viele ihrer Sozialtraditionen haben lutherische Wurzeln. Christen können ein solches Modell aus guten Gründen unterstützen; andere Christen halten andere Modelle für wirksamer. Die Bibel schreibt kein Wirtschaftssystem vor. Sie verlangt Gerechtigkeit für Arme, faire Löhne (Jak 5,4), Schutz der Schwachen und Freigebigkeit – wie das am besten verwirklicht wird, ist eine Frage der Klugheit.`,
          followUps: [
            {
              id: 'kapitalismus-gier',
              objection: `Also verteidigst du den Kapitalismus mit seiner Gier und Ausbeutung?`,
              answer: `Nein. Die Bibel verurteilt Gier als „eine Wurzel alles Übels" (1 Tim 6,10), Jakobus klagt Arbeitgeber an, die Löhne zurückhalten (Jak 5,4), und die Väter predigten gegen Wucher – Basilius hat eine ganze Homilie gegen die Wucherer gehalten. Das Christentum ist ein Gericht über beide Extreme: über einen Kollektivismus, der die Freiheit und Würde des Einzelnen zerstört, und über einen Materialismus, der den Menschen auf seinen Marktwert reduziert.`,
              sources: [{ kind: 'kirchenvater', author: 'Basilius von Caesarea', work: 'Homilie über Psalm 14 (gegen die Wucherer)', year: 'um 370', status: 'paraphrase' }],
            },
          ],
        },
      ],
    },
    {
      id: 'mt25-sozialethik',
      objection: `In Mt 25 richtet Jesus die Menschen danach, ob sie Hungrige gespeist und Gefangene besucht haben – nicht nach ihrem Glauben. Das ist reine Sozialethik.`,
      answer: `Mt 25 ist tatsächlich zentral, und es ist ein Gericht über jedes Christentum, das die Armen vergisst. Jesus identifiziert sich mit den Geringsten: „Das habt ihr mir getan." Aber es geht um persönliche Werke der Barmherzigkeit – ich habe dich besucht, gespeist, gekleidet –, nicht um ein staatliches Programm. Und die Liebe zu Christus in den Armen und der Glaube an ihn sind keine Gegensätze: Der Glaube „ist durch die Liebe tätig" (Gal 5,6).`,
      followUps: [
        {
          id: 'nur-taten-zaehlen',
          objection: `Dann zählt am Ende nur, was man tut, nicht was man glaubt.`,
          answer: `Nach orthodoxem Verständnis gehören Glaube und Werke zusammen: Der Glaube empfängt die Gnade, und die Werke der Liebe sind seine Frucht und unsere Mitwirkung (Synergie). Mt 25 zeigt, dass ein Glaube ohne Barmherzigkeit tot ist (Jak 2,17). Zugleich zeigt das Gleichnis, dass Christus selbst der Maßstab ist – man dient ihm, auch wenn man es nicht weiß. Das Gericht gehört ihm.`,
        },
      ],
    },
    {
      id: 'eigentum-diebstahl',
      objection: `Proudhon sagte: „Eigentum ist Diebstahl." Und Chrysostomus hat dasselbe gesagt: Die Reichen sind Diebe.`,
      objectionBy: 'Pierre-Joseph Proudhon',
      answer: `Chrysostomus sagt: Wer seinen Reichtum *nicht teilt*, bestiehlt die Armen. Das ist etwas anderes als „Eigentum ist Diebstahl". Wäre Eigentum an sich Diebstahl, wäre das Gebot „Du sollst nicht stehlen" sinnlos – man kann nur stehlen, was jemandem gehört. Die Väter lehren: Eigentum ist erlaubt, aber nicht absolut; es steht unter der Pflicht der Liebe. Diese Spannung ist gesünder als beide Extreme.`,
      followUps: [
        {
          id: 'dekalog-besitzende',
          objection: `Das Eigentumsgebot im Dekalog schützte doch nur die Besitzenden gegen die Armen.`,
          answer: `Die Bibel zeigt das Gegenteil: Das Eigentumsrecht schützt gerade die Kleinen gegen die Mächtigen. Als König Ahab den Weinberg des Bauern Nabot an sich bringen wollte und Nabot ermorden ließ, schickte Gott den Propheten Elia mit einem vernichtenden Urteil (1 Kön 21). Die Propheten verurteilen die, „die ein Haus an das andere ziehen und einen Acker zum andern bringen" (Jes 5,8). Ohne Eigentumsschutz gehört am Ende alles den Stärksten.`,
          sources: [{ kind: 'bibel', work: 'Jesaja', ref: '5,8', quote: `Weh denen, die ein Haus an das andere ziehen und einen Acker zum andern bringen, bis daß kein Raum mehr da sei, daß sie allein das Land besitzen!`, translation: 'Luther 1912', status: 'verbatim' }],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn die Urgemeinde freiwillig teilte (Apg 5,4) – warum sollte daraus staatlicher Zwang folgen?`,
    `Warum haben gerade die Regime, die die Gütergemeinschaft am konsequentesten erzwangen, auch die Kirchen verfolgt?`,
    `Wie viel gibst du selbst freiwillig für Arme – und wäre das nicht der eigentliche Maßstab Jesu?`,
    `Kann man „Du sollst nicht stehlen" ohne Eigentum überhaupt verstehen?`,
  ],
  avoid: [
    `Die „Nadelöhr-Tor"-Legende verwenden – sie ist historisch nicht belegt.`,
    `Jesus zum Verteidiger des Kapitalismus oder des freien Marktes machen – das ist ebenso anachronistisch wie „Jesus der Sozialist".`,
    `Die scharfen Worte der Väter über Reichtum verschweigen oder abschwächen.`,
    `Arme pauschal für ihre Armut verantwortlich machen – die Bibel kennt Armut durch Unrecht (Jak 5,4; Am 2,6).`,
  ],
  concessions: [
    `Das Neue Testament und die Väter sprechen über Reichtum radikaler, als es in vielen bürgerlichen Kirchen gepredigt wird.`,
    `Die Kritik linker Denker am Wohlstandschristentum enthält einen berechtigten Kern.`,
    `Christen haben Reichtum und ungerechte Verhältnisse oft religiös gerechtfertigt.`,
  ],
  furtherReading: [
    { kind: 'kirchenvater', author: 'Basilius von Caesarea', work: 'On Social Justice (Homilien 6, 7, 8 und über Ps 14, engl. Übers. C. Paul Schroeder)', year: '2009', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'On Wealth and Poverty (Homilien über Lazarus, engl. Übers. Catharine P. Roth)', year: '1984', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Timothy Keller', work: 'Generous Justice', year: '2010', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Rodney Stark', work: 'The Rise of Christianity', year: '1996', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Sozialismus', 'Eigentum', 'Reichtum', 'Urgemeinde', 'Apg 2', 'Basilius', 'Chrysostomus'],
  related: [
    'religion-gewalt/atheistische-regime',
    'religionskritik/opium-des-volkes',
    'christentum-gesellschaft/christentum-ohne-nutzen',
    'christentum-gesellschaft/kirche-heuchlerisch',
    'liberale-theologie/jesus-nur-morallehrer',
  ],
};

export default claim;
