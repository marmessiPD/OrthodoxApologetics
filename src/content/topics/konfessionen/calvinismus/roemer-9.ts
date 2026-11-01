import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'roemer-9',
  title: `„Römer 9 beweist die Prädestination."`,
  proponents: [
    { name: 'John Piper', role: 'Reformierter Prediger', work: 'The Justification of God: An Exegetical and Theological Study of Romans 9:1–23 (1983)' },
    { name: 'Thomas R. Schreiner', role: 'Neutestamentler, Southern Baptist Theological Seminary', work: 'Romans (BECNT, 1998; 2. Aufl. 2018)' },
    { name: 'James White', role: 'Reformierter Apologet', work: `The Potter's Freedom (2000)` },
    { name: 'R. C. Sproul', role: 'Reformierter Theologe', work: 'Chosen by God (1986)' },
  ],
  steelman: `Röm 9 ist das Kapitel, an dem jede nicht-calvinistische Theologie scheitert. Paulus spricht von Zwillingen, die „noch nicht geboren waren und weder Gutes noch Böses getan hatten, auf dass der Vorsatz Gottes bestünde nach der Wahl" (9,11). „Jakob habe ich geliebt, aber Esau habe ich gehasst" (9,13). „So liegt es nun nicht an jemandes Wollen oder Laufen, sondern an Gottes Erbarmen" (9,16). „So erbarmt er sich nun, welches er will, und verstockt, welchen er will" (9,18). Und als der Einwand kommt: „Was beschuldigt er uns denn? Wer kann seinem Willen widerstehen?" (9,19) – da antwortet Paulus nicht „Gott hat den freien Willen vorausgesehen", sondern: „Wer bist du, Mensch, dass du mit Gott rechten willst?" Der Einwand selbst beweist, dass Paulus eine bedingungslose Erwählung lehrt; sonst wäre er nie aufgekommen. Es geht um Einzelne und ewiges Heil: Paulus beginnt mit seinem Schmerz über verlorene Israeliten (9,1–3), also um Errettung, nicht um Völker und irdische Rollen.`,
  biblical: {
    summary: `Röm 9 steht in der Einheit **Röm 9–11** und beantwortet die Frage: Ist Gottes Wort hinfällig geworden, weil so viele Israeliten Jesus ablehnen (9,6)? Paulus zeigt: Gott war immer frei, seine Heilsgeschichte über Erwählte zu führen, die er bestimmt – und **jetzt** bindet er das Heil an den **Glauben**, sodass Heiden hineinkommen und ungläubige Juden draußen bleiben (9,30–32). Die zitierten Stellen handeln von **Völkern** und **Rollen**: „Zwei Völker sind in deinem Leibe … der Größere wird dem Kleineren dienen" (Gen 25,23); „Jakob habe ich lieb und hasse Esau" schreibt Maleachi über Edom und Israel (Mal 1,2–4). Das Töpferbild stammt aus Jer 18, wo Gott je nach Umkehr umformt. Und das Ziel des Ganzen ist: „Gott hat alle beschlossen unter den Unglauben, **auf dass er sich aller erbarme**" (11,32).`,
    detail: `**1. Die Frage von Röm 9,6:** „Nicht, dass Gottes Wort darum aus sei." Das Thema ist Gottes Treue zu Israel, nicht eine abstrakte Lehre über Einzelseelen.

**2. Jakob und Esau:** Gen 25,23 spricht ausdrücklich von „zwei Völkern"; die Verheißung „der Größere wird dem Kleineren dienen" hat sich an Esau persönlich nie erfüllt (Esau diente Jakob nie), wohl aber an Edom und Israel (2 Sam 8,14). Mal 1,2–4 blickt Jahrhunderte zurück auf das Schicksal Edoms („habe sein Gebirge öde gemacht").

**3. „Hassen" im semitischen Sprachgebrauch:** Jakob „hatte Rahel lieber denn Lea" – und gleich darauf heißt es, Lea sei „gehasst" (wörtlich) gewesen (Gen 29,30–31). Jesus sagt in Lk 14,26 „hassen", wo Mt 10,37 „mehr lieben als" hat. Es geht um Vorzug in der Erwählung, nicht um ewige Verdammnis.

**4. Pharao (9,17–18):** Bevor Gott Pharaos Herz verhärtet (Ex 9,12), verhärtet Pharao es selbst (Ex 8,11.28 nach Luther-Zählung; in anderen Zählungen 8,15.32). Gott bestätigt eine gewählte Haltung.

**5. Das Töpferbild (9,20–23):** Jer 18,1–10 ist die Vorlage: Der Töpfer formt das missratene Gefäß um; Gott „reut das Unglück", wenn das Volk umkehrt. Paulus sagt bei den Gefäßen des Zorns, Gott habe sie „mit großer Geduld getragen" (9,22) – und Geduld leitet zur Buße (2,4). Bei den Gefäßen der Barmherzigkeit sagt er aktiv „die **er** zuvor bereitet hat" (9,23), bei den Gefäßen des Zorns nur „zugerichtet" ohne Gott als Handelnden.

**6. Das Fazit des Kapitels (9,30–32):** Israel hat die Gerechtigkeit nicht erreicht, „darum dass sie es nicht aus dem Glauben suchen". Der Grund ist Unglaube, nicht ein Dekret.

**7. Röm 11:** Die ausgebrochenen Zweige werden wieder eingepfropft, „so sie nicht bleiben in dem Unglauben" (11,23); die Heidenchristen können wieder ausgebrochen werden, wenn sie nicht in der Güte bleiben (11,22). Erwählung ist hier dynamisch, nicht fixiert.`,
    sources: [
      { kind: 'bibel', work: '1. Mose', ref: '25,23', quote: `Und der HERR sprach zu ihr: Zwei Völker sind in deinem Leibe, und zweierlei Leute werden sich scheiden aus deinem Leibe; und ein Volk wird dem andern überlegen sein, und der Größere wird dem Kleineren dienen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Maleachi', ref: '1,2–4', quote: `Ist nicht Esau Jakobs Bruder? spricht der HERR; und doch habe ich Jakob lieb und hasse Esau und habe sein Gebirge öde gemacht und sein Erbe den Schakalen zur Wüste. Und ob Edom sprechen würde: Wir sind verderbt, wir wollen das Wüste wieder erbauen! …`, translation: 'Luther 1912 (sinngemäß)', status: 'paraphrase', note: 'Der Kontext nennt ausdrücklich Edom als Volk.' },
      { kind: 'bibel', work: 'Jeremia', ref: '18,6–8', quote: `Siehe, wie der Ton ist in des Töpfers Hand, also seid auch ihr vom Hause Israel in meiner Hand. Plötzlich rede ich wider ein Volk und Königreich, daß ich's ausrotten, zerbrechen und verderben wolle; wo sich's aber bekehrt von seiner Bosheit, dawider ich rede, so soll mich auch reuen das Unglück, das ich ihm gedachte zu tun.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Römer', ref: '9,30–32', quote: `Die Heiden, die nicht haben nach der Gerechtigkeit getrachtet, haben die Gerechtigkeit erlangt; ich sage aber von der Gerechtigkeit, die aus dem Glauben kommt. Israel aber hat dem Gesetz der Gerechtigkeit nachgetrachtet, und hat das Gesetz der Gerechtigkeit nicht erreicht. Warum das? Darum daß sie es nicht aus dem Glauben suchen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Römer', ref: '11,22–23', quote: `Darum schau die Güte und den Ernst Gottes: den Ernst an denen, die gefallen sind, die Güte aber an dir, sofern du an der Güte bleibst; sonst wirst du auch abgehauen werden. Und jene, so sie nicht bleiben in dem Unglauben, werden sie eingepfropft werden; Gott kann sie wohl wieder einpfropfen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Römer', ref: '11,32', quote: `Denn Gott hat alle beschlossen unter den Unglauben, auf daß er sich aller erbarme.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Mose', ref: '29,30–31', quote: `Und Jakob … hatte Rahel lieber denn Lea. … Da aber der HERR sah, daß Lea unwert war, machte er sie fruchtbar.`, translation: 'Luther 1912', status: 'verbatim', note: `Hebräisch für „unwert" ist „senu'ah" – wörtlich „gehasst". Hassen = weniger lieben.` },
    ],
  },
  church: {
    summary: `Die Väter lasen Röm 9 einmütig **nicht** als Lehre einer bedingungslosen Verwerfung. Origenes erklärt im dritten Buch von *De principiis* die Verstockung des Pharao und das Töpferbild im Sinne des freien Willens. Johannes Chrysostomus betont in seiner Homilie zu Röm 9, dass Paulus einen anmaßenden Fragesteller zum Schweigen bringt, ohne die Freiheit aufzuheben, und dass die Gefäße durch ihre eigene Bosheit zu Gefäßen des Zorns werden. Die koptische Exegese liest Röm 9–11 heilsgeschichtlich: Gottes Erbarmen ist frei, aber es zielt auf alle.`,
    detail: `**Origenes, De principiis III,1:** Origenes diskutiert ausdrücklich Ex 4,21 („ich will sein Herz verstocken") und Röm 9,16–21. Er vergleicht Gottes Handeln mit dem Regen, der auf bebautes und unbebautes Land fällt: Das eine bringt Frucht, das andere Dornen – nicht weil der Regen verschieden wäre, sondern weil der Boden verschieden ist. So ist es dieselbe Güte Gottes, die den einen erweicht und den anderen, der sich weigert, verhärtet. *(Origenes ist kein Lehrer der Kirche, aber ein wichtiger Zeuge der frühen alexandrinischen Exegese.)*

**Chrysostomus, Hom. 16 zum Römerbrief:** Paulus will nicht den freien Willen aufheben, sondern zeigen, dass man Gott nicht zur Rechenschaft ziehen darf; die Verwerfung Israels hat ihren Grund in Israels Unglauben, wie Paulus am Ende des Kapitels selbst sagt.

**Koptische Auslegung:** Vater Tadros Malaty und Matta el-Meskeen folgen in ihren Römerbrief-Kommentaren der patristischen Linie: Röm 9 handelt von Gottes Freiheit in der Heilsgeschichte, nicht von einem ewigen Dekret über Einzelne.`,
    sources: [
      { kind: 'kirchenvater', author: 'Origenes', work: 'De principiis (Peri archon)', ref: 'III,1,7–24', year: 'um 220–230', status: 'paraphrase', note: 'Ausführliche Auslegung von Ex 4,21 und Röm 9 im Sinne der Willensfreiheit; Bild vom Regen auf verschiedenem Boden.' },
      { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum Römerbrief', ref: 'Hom. 16 (zu Röm 9)', year: 'um 390', status: 'paraphrase' },
      { kind: 'koptisch', author: 'Tadros Y. Malaty', work: 'Patristischer Kommentar zum Römerbrief', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Lies Röm 9 im Zusammenhang von Röm 9–11: Paulus erklärt, warum viele Juden draußen und viele Heiden drinnen sind. Jakob und Esau stehen in Gen 25,23 und Mal 1 für zwei **Völker**. Der Töpfer in Jer 18 formt je nach Umkehr um. Paulus nennt am Ende selbst den Grund für Israels Scheitern: „weil sie es nicht aus dem Glauben suchten" (Röm 9,32). Und das Ziel des Ganzen lautet: „auf dass er sich **aller** erbarme" (Röm 11,32).`,
  keyPoints: [
    `**Kontext Röm 9–11:** Das Thema ist Gottes Treue zu Israel (9,6), nicht ein Dekret über das ewige Schicksal jedes Einzelnen.`,
    `**Jakob/Esau = Völker:** Gen 25,23 („zwei Völker"), Mal 1,2–4 (Edom). „Hassen" heißt im Hebräischen „weniger lieben, zurücksetzen" (Gen 29,30–31; Lk 14,26 / Mt 10,37).`,
    `**Pharao verhärtete sich zuerst selbst** (Ex 8), bevor Gott ihn verhärtete – Gott bestätigt eine freie Wahl.`,
    `**Der Töpfer aus Jer 18** reagiert auf Umkehr; „Gefäße" können sich reinigen (2 Tim 2,21).`,
    `**Das Fazit ist der Glaube** (9,30–32), und die Hoffnung ist universal (11,23.32).`,
    `**Die Väter** (Origenes, Chrysostomus) lasen Röm 9 einmütig im Sinne der Willensfreiheit.`,
  ],
  voices: [
    {
      person: 'chrysostomus',
      role: 'als größter Paulus-Ausleger der Alten Kirche',
      text: `Chrysostomus liest Röm 9 als Antwort auf einen jüdischen Einwand: Wenn Gott Israel verheißen hat, warum sind dann so viele draußen? Paulus zeigt, dass schon die Erwählung Isaaks und Jakobs nicht an leiblicher Abstammung hing. Die harten Worte „wer bist du, Mensch?" weisen den zurecht, der Gott Vorschriften machen will – sie heben aber nicht auf, was Paulus kurz darauf sagt: Israel ist gestrauchelt, weil es nicht glaubte. Für Chrysostomus macht der Mensch sich durch seine Bosheit selbst zum Gefäß des Zorns.`,
      sources: [{ kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum Römerbrief', ref: 'Hom. 16', status: 'paraphrase' }],
    },
    {
      person: 'origenes',
      role: 'als früher alexandrinischer Exeget (mit Vorbehalt)',
      text: `Origenes stellt sich in *De principiis* III,1 genau den Texten, die Gegner des freien Willens anführen: der Verstockung des Pharao und Röm 9. Seine Antwort: Dieselbe Sonne macht Wachs weich und Ton hart; derselbe Regen lässt auf einem Feld Frucht und auf einem anderen Dornen wachsen. Gottes Güte ist eine – aber sie trifft auf verschiedene Herzen. Wer verstockt wird, verhärtet sich gegen dieselbe Güte, die andere erweicht.`,
      sources: [{ kind: 'kirchenvater', author: 'Origenes', work: 'De principiis', ref: 'III,1,10–11', status: 'paraphrase' }],
    },
    {
      person: 'nt-wright',
      role: 'als Paulus-Forscher',
      text: `Wright liest Röm 9–11 als Erzählung von Israels Berufung: Israel sollte das Licht der Welt sein, und in Christus erfüllt sich diese Berufung auf unerwartete Weise. Röm 9 ist für ihn keine zeitlose Abhandlung über Einzelprädestination, sondern eine Nacherzählung der Geschichte Israels von Abraham bis zum Exil. Die Frage ist, wie Gott seinem Bund treu bleibt – und die Antwort führt zur Hoffnung für Juden und Heiden in Röm 11.`,
      sources: [{ kind: 'fachliteratur', author: 'N. T. Wright', work: 'Paul and the Faithfulness of God', year: '2013', status: 'paraphrase', note: 'Wright ist Anglikaner; hier nur exegetisch zitiert.' }],
    },
    {
      person: 'tadros-malaty',
      role: 'als koptischer Kommentator',
      text: `Vater Tadros Malaty folgt in seiner Auslegung den Vätern: Gottes Erwählung ist frei und souverän, aber sie ist nicht willkürlich, sondern auf den Glauben hin ausgerichtet. Gottes Erbarmen gilt allen; wer verloren geht, verschließt sich selbst. Er betont den heilsgeschichtlichen Bogen von Röm 9 bis 11, der im Lobpreis von Gottes unergründlicher Weisheit endet (11,33–36).`,
      sources: [{ kind: 'koptisch', author: 'Tadros Y. Malaty', work: 'Patristischer Kommentar zum Römerbrief', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'es-geht-um-einzelne',
      objection: `„Es geht doch um Einzelne und ewiges Heil! Paulus beginnt mit seinem Schmerz über verlorene Israeliten (9,1–3) und spricht von Personen: Jakob, Esau, Pharao."`,
      objectionBy: 'John Piper / Thomas Schreiner',
      answer: `Ja, Paulus trauert um Einzelne – aber gerade weil sie **wegen Unglaubens** draußen sind und hineinkommen könnten. Er betet für ihre Rettung (10,1) und hofft, „etliche zu erretten" (11,14). Würde er für Menschen beten, deren Verwerfung von Ewigkeit feststeht? Die Personen in Röm 9 sind Repräsentanten: Jakob = Israel, Esau = Edom, Pharao = der Widersacher, durch den Gott seinen Namen kundmacht. Es geht um Gottes Freiheit, die Heilsgeschichte zu lenken.`,
      sources: [
        { kind: 'bibel', work: 'Römer', ref: '10,1', quote: `Liebe Brüder, meines Herzens Wunsch ist, und ich flehe auch zu Gott für Israel, daß sie selig werden.`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'bibel', work: 'Römer', ref: '11,14', quote: `… ob ich möchte die, so mein Fleisch sind, zu eifern reizen und ihrer etliche selig machen.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      questionsBack: [`Warum betet Paulus in Röm 10,1 für die Rettung Israels, wenn ihr Schicksal nach Röm 9 von Ewigkeit feststeht?`],
      followUps: [
        {
          id: 'voelker-bestehen-aus-einzelnen',
          objection: `„Völker bestehen aus Einzelnen. Wenn Gott ein Volk bedingungslos erwählt, erwählt er auch die Einzelnen bedingungslos. Die ‚korporative' Lesart hilft dir nicht."`,
          objectionBy: 'Thomas Schreiner',
          answer: `Doch, sie hilft – denn Paulus zeigt in Röm 11 selbst, dass Einzelne in die erwählte Gruppe hinein- und aus ihr herausgelangen: Ungläubige Israeliten werden „ausgebrochen", glaubende Heiden „eingepfropft", und beide Bewegungen sind umkehrbar (11,17–24). Die Erwählung der Gruppe ist fest; die Zugehörigkeit des Einzelnen hängt am Glauben.`,
          followUps: [
            {
              id: 'einwand-in-9-19',
              objection: `„Der Einwand in 9,19 – ‚Wer kann seinem Willen widerstehen?' – kommt nur auf, wenn Paulus eine bedingungslose Erwählung lehrt. Bei deiner Lesart würde ihn niemand stellen."`,
              objectionBy: 'John Piper',
              answer: `Der Einwand kommt sehr wohl auf – von einem Juden, der empört ist, dass Gott ungläubige Israeliten verwirft und Heiden aus Glauben annimmt. Er sagt sinngemäß: „Wenn Gott Israel verstockt, wie kann er uns dann beschuldigen?" Paulus antwortet in zwei Schritten: Gott hat das Recht, die Bedingungen festzulegen (9,20–23), und die Bedingung ist der Glaube (9,30–10,13). Wer nur bis 9,23 liest, hört den halben Gedankengang.`,
              followUps: [
                {
                  id: 'warum-dann-nicht-einfach-sagen',
                  objection: `„Wenn es um den Glauben ginge, hätte Paulus in 9,19 einfach sagen können: ‚Natürlich kann man widerstehen – es liegt an eurem Glauben.' Das tut er nicht."`,
                  objectionBy: 'James White',
                  answer: `Er sagt es – nur einige Verse später, und zwar ausführlich: 9,30–33; 10,3 („sie erkennen die Gerechtigkeit nicht, die vor Gott gilt"); 10,16 („sie sind nicht alle dem Evangelium gehorsam"); 10,21 („den ganzen Tag habe ich meine Hände ausgestreckt zu dem Volk, das sich nicht sagen lässt"). Gott streckt den ganzen Tag die Hände aus – das ist das Gegenteil eines Verwerfungsdekrets.`,
                  sources: [
                    { kind: 'bibel', work: 'Römer', ref: '10,21', quote: `Zu Israel aber spricht er: »Den ganzen Tag habe ich meine Hände ausgestreckt zu dem Volk, das sich nicht sagen läßt und widerspricht.«`, translation: 'Luther 1912 (sinngemäß)', status: 'paraphrase' },
                  ],
                  questionsBack: [`Wozu streckt Gott „den ganzen Tag" die Hände nach einem Volk aus, dessen Unglauben er selbst beschlossen hat?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'vor-der-geburt',
      objection: `„Röm 9,11: Ehe die Kinder geboren waren und weder Gutes noch Böses getan hatten – damit der Vorsatz Gottes nach der Wahl bestünde. Also ohne jedes Vorherwissen ihrer Taten!"`,
      objectionBy: 'R. C. Sproul',
      answer: `Paulus sagt: nicht aufgrund von **Werken** (9,12) – also nicht aufgrund von Verdienst oder Abstammung. Das ist sein Argument gegen den Gedanken, Israel habe das Heil durch Abstammung oder Gesetzeswerke sicher. Er sagt nicht, dass Gott den Glauben nicht vorausweiß; Glaube ist bei Paulus gerade das Gegenteil von Werken (4,4–5). Und die Wahl betrifft die Rolle: „Der Größere wird dem Kleineren dienen" (9,12) – nicht „der eine kommt in den Himmel, der andere in die Hölle".`,
      followUps: [
        {
          id: 'esau-hassen-ist-hassen',
          objection: `„‚Esau habe ich gehasst' – das ist stark. Du kannst ‚hassen' nicht einfach zu ‚weniger lieben' abschwächen."`,
          objectionBy: 'James White',
          answer: `Das ist keine Abschwächung, sondern hebräischer Sprachgebrauch: Lea wird „gehasst" genannt, obwohl Jakob sie nur weniger liebte als Rahel (Gen 29,30–31). Jesus fordert, Vater und Mutter zu „hassen" (Lk 14,26), was Matthäus mit „mehr lieben als" wiedergibt (Mt 10,37). Und Maleachi spricht von Edoms verwüstetem Land, nicht von Esaus Seele. Esau selbst wurde übrigens reich gesegnet und versöhnte sich mit Jakob (Gen 33).`,
          sources: [
            { kind: 'bibel', work: 'Lukas', ref: '14,26', quote: `So jemand zu mir kommt und haßt nicht seinen Vater, Mutter, Weib, Kinder, Brüder, Schwestern, auch dazu sein eigen Leben, der kann nicht mein Jünger sein.`, translation: 'Luther 1912', status: 'verbatim' },
            { kind: 'bibel', work: 'Matthäus', ref: '10,37', quote: `Wer Vater und Mutter mehr liebt denn mich, der ist mein nicht wert.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
        },
      ],
    },
    {
      id: 'verstockt-welchen-er-will',
      objection: `„Röm 9,18: ‚So erbarmt er sich nun, welches er will, und verstockt, welchen er will.' Gott verstockt souverän – Pharao ist das Beispiel."`,
      objectionBy: 'John Piper',
      answer: `Gott verstockt, wen er will – und die Schrift sagt uns, wen er verstocken will: die, die sich selbst zuvor verstockt haben. Im Exodus heißt es mehrfach, dass Pharao **sein Herz selbst verhärtete** (Ex 8,11.28), bevor Gott ihn verhärtete (Ex 9,12). Gott gibt Menschen dahin, die ihn nicht erkennen wollen (Röm 1,24.26.28). Verstockung ist Gericht über eine gewählte Haltung, nicht der Anfang der Sünde.`,
      sources: [
        { kind: 'bibel', work: '2. Mose', ref: '8,11', quote: `Da aber Pharao sah, daß er Luft gekriegt hatte, verhärtete er sein Herz und hörte sie nicht, wie denn der HERR geredet hatte.`, translation: 'Luther 1912', status: 'verbatim', note: 'In manchen Bibelausgaben 8,15.' },
        { kind: 'bibel', work: 'Römer', ref: '1,28', quote: `Und gleichwie sie nicht geachtet haben, daß sie Gott erkenneten, hat sie Gott auch dahingegeben in verkehrten Sinn.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'gott-kuendigt-verstockung-vorher-an',
          objection: `„Aber Gott kündigt schon in Ex 4,21 an: ‚Ich will sein Herz verstocken' – bevor Pharao irgendetwas tut."`,
          objectionBy: 'Reformierter Exeget',
          answer: `Gott kündigt an, was er tun wird – er weiß voraus, wie Pharao reagieren wird. Das ist Vorherwissen, nicht Ursache. Und Pharao war kein unbeschriebenes Blatt: Er war der Herrscher, der die hebräischen Kinder töten ließ (Ex 1) und Gott verhöhnte („Wer ist der HERR, des Stimme ich hören müsse?", Ex 5,2). Origenes erklärt: Dieselbe Sonne, die Wachs schmilzt, macht Ton hart – dieselbe Güte Gottes, die den Demütigen weich macht, verhärtet den Stolzen.`,
          sources: [
            { kind: 'bibel', work: '2. Mose', ref: '5,2', quote: `Pharao antwortete: Wer ist der HERR, des Stimme ich hören müsse und Israel ziehen lassen? Ich weiß nichts von dem HERRN.`, translation: 'Luther 1912', status: 'verbatim' },
            { kind: 'kirchenvater', author: 'Origenes', work: 'De principiis', ref: 'III,1,11', status: 'paraphrase', quote: `Wie dieselbe Sonne Wachs schmilzt und Ton trocknet und hart macht, so erweicht dieselbe Wirksamkeit Gottes die einen und verhärtet die anderen.` },
          ],
        },
      ],
    },
    {
      id: 'toepfer-und-ton',
      objection: `„Röm 9,21–22: ‚Hat nicht ein Töpfer Macht, aus einem Klumpen zu machen ein Fass zu Ehren und das andere zu Unehren?' Gott macht Gefäße des Zorns, ‚zugerichtet zur Verdammnis'. Deutlicher geht es nicht."`,
      objectionBy: 'James White / R. C. Sproul',
      answer: `Paulus nimmt das Bild aus Jer 18 – und dort erklärt Gott selbst, was es bedeutet: Wenn ein Volk, über das er Unheil angekündigt hat, sich bekehrt, „so soll mich auch reuen das Unglück" (Jer 18,7–10). Der Töpfer formt den Ton je nach dessen Antwort neu. Und in Röm 9,22–23 unterscheidet Paulus genau: Die Gefäße der Barmherzigkeit hat **Gott** „zuvor bereitet"; von den Gefäßen des Zorns sagt er nur, sie seien „zugerichtet" – ohne Gott als Handelnden – und dass Gott sie „mit großer Geduld getragen" hat.`,
      detail: `Die Asymmetrie ist beabsichtigt: aktiv „er hat zuvor bereitet" (*proētoimasen*) bei der Barmherzigkeit, passiv bzw. medial „zugerichtet" (*katērtismena*) beim Zorn. Und die „große Geduld" Gottes hat nach Röm 2,4 einen Zweck: „dass dich Gottes Güte zur Buße leitet". Paulus selbst sagt in 2 Tim 2,20–21: „So nun jemand sich reinigt …, der wird ein geheiligtes Fass sein, zu Ehren." Man kann vom Gefäß der Unehre zum Gefäß der Ehre werden.`,
      sources: [
        { kind: 'bibel', work: 'Jeremia', ref: '18,6–10', quote: `Siehe, wie der Ton ist in des Töpfers Hand, also seid auch ihr vom Hause Israel in meiner Hand … Wo sich's aber bekehrt von seiner Bosheit, dawider ich rede, so soll mich auch reuen das Unglück, das ich ihm gedachte zu tun.`, translation: 'Luther 1912', status: 'paraphrase' },
        { kind: 'bibel', work: '2. Timotheus', ref: '2,20–21', quote: `So nun jemand sich reinigt von solchen Leuten, der wird ein geheiligtes Fass sein zu Ehren, dem Hausherrn bräuchlich.`, translation: 'Luther 1912', status: 'paraphrase' },
      ],
      questionsBack: [`Warum sagt Paulus bei den Gefäßen der Barmherzigkeit „Gott hat sie bereitet", bei den Gefäßen des Zorns aber nicht?`],
      followUps: [
        {
          id: 'goettliches-passiv',
          objection: `„Das Passiv in 9,22 ist ein *passivum divinum*: Natürlich hat Gott sie zugerichtet – wer sonst?"`,
          objectionBy: 'Thomas R. Schreiner',
          answer: `Das ist eine mögliche Deutung, aber keine zwingende – und Chrysostomus, der Griechisch als Muttersprache las, sah es anders: Die Gefäße des Zorns sind durch ihren eigenen Willen dazu geworden. Paulus wechselt bewusst die Konstruktion. Und selbst wenn Gott der Handelnde wäre: Er „trägt sie mit großer Geduld" – man trägt nicht geduldig, was man selbst unwiderruflich zum Verderben bestimmt hat.`,
          voices: [
            {
              person: 'chrysostomus',
              role: 'als Ausleger des Römerbriefs',
              text: `Chrysostomus betont in seinen Römerbrief-Homilien, dass Paulus mit dem Töpferbild nicht die Freiheit des Willens aufhebt, sondern einen anmaßenden Fragesteller zum Schweigen bringt. Die Gefäße des Zorns sind solche, die sich durch eigene Bosheit dazu gemacht haben; Gottes Langmut zeigt, dass er ihre Umkehr wollte.`,
              sources: [{ kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum Römerbrief', ref: 'Homilie 16 (zu Röm 9)', year: 'um 390', status: 'paraphrase' }],
            },
          ],
          followUps: [
            {
              id: 'wer-bist-du-mensch',
              objection: `„Paulus bringt den Fragesteller zum Schweigen: ‚Ja, lieber Mensch, wer bist du denn, dass du mit Gott rechten willst?' (9,20). Genau das tust du, wenn du Gottes Gerechtigkeit nach deinen Maßstäben beurteilst."`,
              objectionBy: 'R. C. Sproul',
              answer: `Paulus weist einen Gesprächspartner zurecht, der meint, Gott sei ihm wegen seiner Abstammung etwas schuldig – nicht einen, der nach Gottes Güte fragt. Abraham durfte fragen: „Sollte der Richter aller Welt nicht recht richten?" (Gen 18,25), und Gott antwortete ihm. Wir rechten nicht mit Gott, sondern mit einer Auslegung, die Gott zum Urheber der Verdammnis macht – gegen sein eigenes Wort: „Ich habe keinen Gefallen am Tode des Gottlosen" (Ez 33,11).`,
              sources: [
                { kind: 'bibel', work: 'Hesekiel', ref: '33,11', quote: `So wahr als ich lebe, spricht der Herr HERR, ich habe keinen Gefallen am Tode des Gottlosen, sondern dass sich der Gottlose bekehre von seinem Wesen und lebe.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              followUps: [
                {
                  id: 'gottes-gerechtigkeit-anders',
                  objection: `„Gottes Liebe und Gerechtigkeit sind nicht an menschlichen Begriffen zu messen. Zu seiner Herrlichkeit gehört auch, dass er seinen Zorn an den Gefäßen des Zorns zeigt (9,22)."`,
                  objectionBy: 'John Piper',
                  answer: `Wenn „Liebe" und „Gerechtigkeit" bei Gott etwas völlig anderes bedeuten als bei uns, dann verlieren die Worte ihren Sinn – und Offenbarung wird unmöglich. Die Schrift appelliert aber an unser Verständnis von Gerechtigkeit: „Ist mein Weg nicht recht?" (Ez 18,25). Gottes Herrlichkeit zeigt sich nach dem Johannesevangelium vor allem am Kreuz, wo er sich für die Welt hingibt (Joh 12,23–32; 17,1) – nicht in der Verdammnis von Menschen, die nie eine Chance hatten.`,
                  voices: [
                    {
                      person: 'cs-lewis',
                      role: 'als christlicher Denker zur Güte Gottes',
                      text: `Lewis argumentiert, dass Gottes Güte zwar unendlich größer, aber nicht völlig anders als unsere sein kann. Wäre sie das Gegenteil dessen, was wir „gut" nennen, hätten wir keinen Grund mehr, Gott gut zu nennen, und kein Motiv, ihm zu gehorchen außer Furcht. Der Unterschied zwischen Gottes und unserer Güte ist wie der zwischen einer vollkommenen Kreiszeichnung und dem ersten Versuch eines Kindes – nicht wie der zwischen Weiß und Schwarz.`,
                      sources: [{ kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Problem of Pain (Über den Schmerz)', ref: 'Kap. 3 „Divine Goodness"', year: '1940', status: 'paraphrase' }],
                    },
                  ],
                  questionsBack: [`Wenn Gottes „Liebe" auch die ewige Vorherbestimmung zur Verdammnis umfassen kann – was meinst du dann, wenn du einem Ungläubigen sagst: „Gott liebt dich"?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'nicht-am-wollen-oder-laufen',
      objection: `„Röm 9,16: ‚So liegt es nun nicht an jemandes Wollen oder Laufen, sondern an Gottes Erbarmen.' Paulus schließt das menschliche Wollen ausdrücklich aus."`,
      objectionBy: 'Thomas R. Schreiner',
      answer: `Paulus schließt aus, dass der Mensch die **Bedingungen** des Erbarmens festlegt – Israel meinte, durch Abstammung und Gesetzeswerke Anspruch darauf zu haben. Gott allein bestimmt, wem er sich erbarmt, und er sagt es am Ende des Kapitels: den Glaubenden (9,30–32). Dass das „Laufen" als Antwort nicht verboten ist, zeigt Paulus selbst: „Laufet so, dass ihr es ergreifet" (1 Kor 9,24); „ich jage nach dem vorgesteckten Ziel" (Phil 3,14).`,
      detail: `Röm 9,16 handelt von Mose (9,15) und Gottes freiem Erbarmen nach dem Goldenen Kalb – Gott war Israel nichts schuldig. Der Vers sagt, wer der Herr des Erbarmens ist, nicht, dass der Mensch nicht antworten könne. Das Ziel von Röm 9–11 steht in 11,32: „Gott hat alle beschlossen unter den Unglauben, auf dass er sich **aller** erbarme."`,
      sources: [
        { kind: 'bibel', work: 'Römer', ref: '11,32', quote: `Denn Gott hat alle beschlossen unter den Unglauben, auf dass er sich aller erbarme.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'roemer-11-32-gruppen',
          objection: `„‚Sich aller erbarmen' in 11,32 heißt: Juden und Heiden als Gruppen – nicht jeder Einzelne."`,
          objectionBy: 'James White',
          answer: `Dann muss man konsequent sein: Wenn Röm 11 von Gruppen spricht, dann spricht auch Röm 9 von Gruppen – genau die korporative Lesart, die du vorher abgelehnt hast. Entweder handelt Röm 9–11 von Einzelnen; dann gilt auch 11,32 jedem Einzelnen. Oder es handelt von Völkern; dann lehrt Röm 9 keine individuelle Verwerfung. Beides zugleich – Röm 9 individuell, Röm 11 korporativ – passt nicht zu einem einzigen, zusammenhängenden Argument.`,
          questionsBack: [`Nach welchem Kriterium liest du „Jakob" und „Esau" in Röm 9 individuell, „alle" in Röm 11,32 aber kollektiv?`],
          followUps: [
            {
              id: 'augustinus-ad-simplicianum',
              objection: `„Augustinus hat Röm 9 seit ‚Ad Simplicianum' (396) genau so gelesen wie wir – und der Westen ist ihm gefolgt. Unsere Auslegung ist alt."`,
              objectionBy: 'Reformierter Kirchenhistoriker',
              answer: `Augustinus selbst bezeugt, dass er Röm 9 vorher anders gelesen hatte – als Vorherwissen des Glaubens – und seine Meinung änderte (Retractationes I,23). Vor ihm lasen Origenes, Chrysostomus, Ambrosiaster und Hieronymus Röm 9 nicht als individuelle Vorherbestimmung zum Verderben. Die Auslegung ist also nicht die älteste, sondern eine Wende rund 350 Jahre nach Paulus, die der Osten nie übernommen hat.`,
              sources: [
                { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Retractationes', ref: 'I,23', year: '426/427', status: 'paraphrase', note: 'Augustinus korrigiert hier seine frühere Römerbrief-Auslegung (Expositio quarundam propositionum, 394).' },
                { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Ad Simplicianum', ref: 'I,2', year: '396', status: 'paraphrase' },
              ],
              followUps: [
                {
                  id: 'vaeter-irrelevant-sola-scriptura',
                  objection: `„Mehrheiten unter den Vätern sind egal. Entscheidend ist allein die Schrift – sola scriptura."`,
                  objectionBy: 'James White',
                  answer: `Einverstanden, Mehrheiten entscheiden nicht. Aber die griechischen Väter lasen Paulus in seiner eigenen Sprache und Kultur, im Gottesdienst der Kirche, die er gegründet hatte. Wenn eine Auslegung erst Jahrhunderte später auftaucht und der früheren einmütigen Lesart widerspricht, liegt die Beweislast bei der Neuerung. Vinzenz von Lérins nannte das Kriterium: Was überall, immer und von allen geglaubt wurde.`,
                  voices: [
                    {
                      person: 'vinzenz-lerin',
                      role: 'als Theoretiker der kirchlichen Überlieferung',
                      text: `Vinzenz stellt fest, dass die Schrift wegen ihrer Tiefe nicht von allen gleich verstanden wird; deshalb braucht es die Richtschnur der kirchlichen Auslegung. Maßstab ist, was überall, immer und von allen geglaubt worden ist. Eine neue Auslegung, die der gemeinsamen Lesart der Väter widerspricht, ist für ihn gerade dadurch verdächtig.`,
                      sources: [{ kind: 'kirchenvater', author: 'Vinzenz von Lérins', work: 'Commonitorium', ref: '2', year: '434', status: 'paraphrase' }],
                    },
                  ],
                  questionsBack: [`Wenn dein Verständnis von Röm 9 richtig ist – kannst du einen griechischen Vater der ersten vier Jahrhunderte nennen, der es so gelesen hat?`],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welche Frage stellt Paulus in Röm 9,6 – und beantwortet Röm 9 sie, wenn man es ohne Röm 10–11 liest?`,
    `Wie erklärst du Röm 9,32 („darum dass sie es nicht aus dem Glauben suchen")?`,
    `Hat Esau persönlich je Jakob gedient? Und von wem spricht Mal 1,2–4?`,
    `Was bedeutet Röm 11,23 („so sie nicht bleiben in dem Unglauben") für eine feste Verwerfung?`,
    `Wer verhärtete Pharaos Herz zuerst – Gott oder Pharao?`,
  ],
  avoid: [
    `Nicht behaupten, Röm 9 habe „gar nichts" mit Heil zu tun. Paulus trauert um das Heil Israels; es geht um Heilsgeschichte, nicht nur um irdische Rollen.`,
    `Nicht nur einzelne Verse gegen einzelne Verse stellen. Die Stärke liegt im Zusammenhang Röm 9–11.`,
    `Nicht so tun, als gäbe es keine ernstzunehmenden calvinistischen Exegeten. Piper und Schreiner sind gelehrte Ausleger; begegne ihnen mit Argumenten.`,
  ],
  concessions: [
    `Röm 9 betont Gottes souveräne Freiheit sehr stark; der Mensch hat keinen Anspruch an Gott. Das muss man stehen lassen.`,
    `Die korporative Lesart beantwortet nicht jede Frage restlos; auch unter nicht-calvinistischen Exegeten gibt es unterschiedliche Akzente.`,
  ],
  furtherReading: [
    { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum Römerbrief, Hom. 16–19', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Origenes', work: 'De principiis, Buch III, Kap. 1', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Brian J. Abasciano', work: `Paul's Use of the Old Testament in Romans 9:1–9 (2005) und Romans 9:10–18 (2011)`, status: 'paraphrase', note: 'Gründliche exegetische Verteidigung der korporativen Lesart.' },
    { kind: 'gegner', author: 'John Piper', work: 'The Justification of God', year: '1983', status: 'paraphrase', note: 'Die stärkste calvinistische Exegese von Röm 9.' },
  ],
  difficulty: 3,
  tags: ['Calvinismus', 'Römerbrief', 'Exegese', 'Erwählung', 'Israel'],
  related: ['calvinismus/doppelte-praedestination', 'calvinismus/unwiderstehliche-gnade', 'sola-scriptura/jeder-legt-selbst-aus'],
};

export default claim;
