import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'nt-antisemitisch',
  title: `„Das Neue Testament ist antisemitisch – es hat jahrhundertelange Verfolgung verursacht."`,
  proponents: [
    { name: 'Jules Isaac', role: 'Französisch-jüdischer Historiker (1877–1963); verlor Frau und Tochter in Auschwitz', work: 'Jésus et Israël (1948); L\'enseignement du mépris (Die Lehre der Verachtung, 1962)' },
    { name: 'Rosemary Radford Ruether', role: 'Katholische Theologin (1936–2022)', work: 'Faith and Fratricide: The Theological Roots of Anti-Semitism (1974)' },
    { name: 'Hyam Maccoby', role: 'Britisch-jüdischer Religionswissenschaftler (1924–2004)', work: 'The Mythmaker (1986); Judas Iscariot and the Myth of Jewish Evil (1992)' },
    { name: 'John Dominic Crossan', role: 'Neutestamentler, Jesus Seminar', work: 'Who Killed Jesus? Exposing the Roots of Anti-Semitism in the Gospel Story of the Death of Jesus (1995)' },
  ],
  steelman: `Man muss nur lesen: Jesus sagt im Johannesevangelium zu „den Juden": „Ihr habt den Teufel zum Vater" (Joh 8,44). Bei Matthäus ruft „das ganze Volk": „Sein Blut komme über uns und über unsere Kinder" (Mt 27,25). Paulus schreibt, „die Juden" hätten „den Herrn Jesus getötet", sie „gefallen Gott nicht und sind allen Menschen feind" (1 Thess 2,15). Die Offenbarung spricht von der „Synagoge des Satans" (Offb 2,9). Die Pharisäer, die Väter des rabbinischen Judentums, sind bei Matthäus „Heuchler", „Schlangen" und „Otterngezücht" (Mt 23). Und diese Texte blieben nicht folgenlos: Schon um 160 klagte Melito von Sardes Israel an, Gott ermordet zu haben; Johannes Chrysostomus, ein Heiliger und Kirchenlehrer, nannte die Synagoge ein Bordell; die Kreuzfahrer ermordeten 1096 die Juden im Rheinland; Luther empfahl 1543, Synagogen anzuzünden. Jules Isaac nannte das die „Lehre der Verachtung", die den Boden für Auschwitz bereitete. Die katholische Theologin Rosemary Ruether urteilte: Der Antijudaismus ist „die linke Hand der Christologie". Ein Buch, das solche Früchte trägt, ist selbst das Problem.`,
  biblical: {
    summary: `Das Neue Testament ist ein **jüdisches** Buch: Jesus war Jude, ebenso Maria, die Zwölf, Paulus und – mit Ausnahme wohl des Lukas – alle Verfasser. Seine scharfen Worte sind **innerjüdische Polemik** in der Tradition der Propheten, die über das eigene Volk noch härter sprachen (Jes 1,4; 57,3–4; Jer 9). Dasselbe Neue Testament sagt: „Das Heil kommt von den Juden" (Joh 4,22); Jesus betet für seine Henker: „Vater, vergib ihnen" (Lk 23,34); Petrus sagt dem Volk: „Ihr habt's aus Unwissenheit getan" (Apg 3,17); und Paulus, der Jude, wünscht sich, verflucht zu sein, wenn er damit sein Volk retten könnte (Röm 9,3), und schärft den Heidenchristen ein: „Rühme dich nicht wider die Zweige … Gottes Gaben und Berufung können ihn nicht gereuen" (Röm 11,18.29).`,
    detail: `**1. Joh 8,44 im Zusammenhang.** Jesus spricht zu „den Juden, die an ihn gläubig geworden waren" (8,31), die ihn nun töten wollen (8,37.40). Es ist ein Streit um Abrahamskindschaft unter Juden, kein Urteil über ein Volk. Johannes gebraucht „die Juden" (Ioudaioi) oft für die Jerusalemer Autoritäten: Die Eltern des Blindgeborenen – selbst Juden – fürchten sich „vor den Juden" (9,22). Zugleich berichtet er: „Viele der Juden … glaubten an ihn" (11,45).

**2. Mt 27,25 im Zusammenhang.** Es ist der Ruf einer von den Hohenpriestern aufgewiegelten Menge (27,20), nicht Gottes Urteil. Der Gekreuzigte selbst bittet um Vergebung (Lk 23,34), und das Blut Christi ist im Neuen Testament Blut „zur Vergebung der Sünden" (Mt 26,28), nicht des Fluches.

**3. Konventionen antiker Polemik.** Der Neutestamentler Luke Timothy Johnson hat gezeigt, dass die Schärfe der neutestamentlichen Polemik der üblichen Streitkultur der Antike entspricht – Philosophen und jüdische Gruppen sprachen übereinander weit härter. Die Gemeinschaft von Qumran nannte andere Juden „Söhne der Finsternis" und „Gemeinde Belials".

**4. Paulus über Israel.** „Hat denn Gott sein Volk verstoßen? Das sei ferne!" (Röm 11,1). Israel ist „Geliebte um der Väter willen" (11,28), und „ganz Israel wird gerettet werden" (11,26).`,
    sources: [
      { kind: 'bibel', work: 'Johannes', ref: '8,31.37.40', quote: `Da sprach nun Jesus zu den Juden, die an ihn glaubten … Ich weiß wohl, daß ihr Abrahams Samen seid; aber ihr sucht mich zu töten … Nun aber sucht ihr mich zu töten, einen solchen Menschen, der ich euch die Wahrheit gesagt habe.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '4,22', quote: `Ihr wisset nicht, was ihr anbetet; wir wissen aber, was wir anbeten, denn das Heil kommt von den Juden.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '23,34', quote: `Jesus aber sprach: Vater, vergib ihnen; denn sie wissen nicht, was sie tun!`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Römer', ref: '9,2–5', quote: `… daß ich große Traurigkeit und Schmerzen ohne Unterlaß in meinem Herzen habe. Ich habe gewünscht, verbannt zu sein von Christo für meine Brüder, die meine Gefreundeten sind nach dem Fleisch, die da sind von Israel, welchen gehört die Kindschaft und die Herrlichkeit und der Bund und das Gesetz und der Gottesdienst und die Verheißungen; welcher auch sind die Väter, und aus welchen Christus herkommt nach dem Fleisch.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Römer', ref: '11,1.18.28–29', quote: `So sage ich nun: Hat denn Gott sein Volk verstoßen? Das sei ferne! … so rühme dich nicht wider die Zweige … Nach dem Evangelium halte ich sie für Feinde um euretwillen; aber nach der Wahl habe ich sie lieb um der Väter willen. Gottes Gaben und Berufung mögen ihn nicht gereuen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jesaja', ref: '1,4', quote: `O weh des sündigen Volks, des Volks von großer Missetat, des boshaften Samens, der verderbten Kinder, die den HERRN verlassen, den Heiligen in Israel lästern, weichen zurück!`, translation: 'Luther 1912', status: 'verbatim', note: 'Prophetische Selbstkritik Israels – schärfer als die meisten neutestamentlichen Worte.' },
    ],
  },
  church: {
    summary: `Die Kirche muss hier zuerst **bekennen**: Christen haben Juden über Jahrhunderte verachtet, verleumdet, vertrieben und ermordet – oft mit Berufung auf das Neue Testament. Das war Sünde gegen Gott und gegen Menschen. Zugleich lehrt die Kirche, dass Christus **freiwillig** und **für die Sünden aller Menschen** gestorben ist; keine Kollektivschuld eines Volkes, sondern „wir alle" sind für sein Leiden verantwortlich. Die koptische Liturgie bekennt, dass er „sich selbst hingab zur Erlösung für uns". Das Zweite Vatikanische Konzil hat 1965 (Nostra Aetate 4) erklärt, man könne die Ereignisse der Passion „weder allen damals lebenden Juden ohne Unterschied noch den heutigen Juden zur Last legen" – eine Aussage, die auch orthodoxe Christen aus der Schrift bejahen können.`,
    detail: `Auch die Geschichte Alexandriens und der orientalischen Kirchen ist nicht frei von Schuld: Nach dem Kirchenhistoriker Sokrates Scholastikos ließ Kyrill von Alexandrien im Jahr 415, nach einem nächtlichen Überfall jüdischer Gruppen auf Christen, die Synagogen besetzen und die Juden aus der Stadt vertreiben – eine kollektive Vergeltung, die Christen heute nicht rechtfertigen können, auch wenn die Einzelheiten unter Historikern umstritten sind. Die Kirche verehrt Kyrill als Lehrer des Glaubens an den menschgewordenen Logos, nicht als Vorbild in jeder seiner Handlungen. Die Heiligen sind geheilte Sünder, keine Unfehlbaren. Der Maßstab, mit dem wir ihr Versagen verurteilen, ist das Evangelium selbst.`,
    sources: [
      { kind: 'konzil', work: 'Zweites Vatikanisches Konzil, Erklärung Nostra Aetate', ref: '4', year: '1965', quote: `Obgleich die jüdischen Obrigkeiten mit ihren Anhängern auf den Tod Christi gedrungen haben, kann man dennoch die Ereignisse seines Leidens weder allen damals lebenden Juden ohne Unterschied noch den heutigen Juden zur Last legen … Die Kirche beklagt alle Hassausbrüche, Verfolgungen und Manifestationen des Antisemitismus, die sich zu irgendeiner Zeit und von irgendjemandem gegen die Juden gerichtet haben.`, status: 'paraphrase', note: 'Katholisches Dokument; hier als Zeugnis kirchlicher Umkehr angeführt, nicht als Lehrautorität für die koptische Kirche.' },
      { kind: 'kirchenvater', author: 'Sokrates Scholastikos', work: 'Kirchengeschichte (Historia Ecclesiastica)', ref: 'VII,13', year: 'um 440', quote: `Sokrates berichtet von Unruhen in Alexandria, bei denen Juden nachts Christen in einen Hinterhalt lockten und töteten; daraufhin habe Kyrill mit einer Menge die Synagogen eingenommen und die Juden aus der Stadt vertrieben.`, status: 'paraphrase', note: 'Umfang und Einzelheiten der Vertreibung sind in der Forschung umstritten.' },
      { kind: 'liturgie', work: 'Koptische Liturgie des hl. Basilius', quote: `… er gab sich selbst hin zur Erlösung für uns an den Tod.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die Forschung unterscheidet zwischen **Antijudaismus** (theologisch begründete Ablehnung des Judentums) und **Antisemitismus** (der rassistischen Judenfeindschaft des 19./20. Jahrhunderts). Dass christlicher Antijudaismus den modernen Antisemitismus mit vorbereitet hat, ist weithin anerkannt (Jules Isaac, James Parkes, Robert Wistrich). Ob das Neue Testament **selbst** antijüdisch ist, ist umstritten: Ruether und Maccoby bejahen es; viele jüdische und christliche Neutestamentler – etwa Amy-Jill Levine, Mitherausgeberin des *Jewish Annotated New Testament* (2011) – sehen die Texte als innerjüdische Auseinandersetzungen, die durch spätere heidenchristliche Lektüre antijüdisch gelesen wurden.`,
    detail: `Levine kritisiert scharf antijüdische Stereotype in christlicher Predigt (etwa den „gesetzlichen Pharisäer" als Folie für Jesus), hält aber fest, dass die neutestamentlichen Texte im Kontext ihres Judentums verstanden werden können und müssen. Bemerkenswert ist ein historischer Befund: Die NS-Ideologie musste das Neue Testament **umschreiben**, um es ihrer Rassenlehre anzupassen. Das 1939 in Eisenach gegründete „Institut zur Erforschung und Beseitigung des jüdischen Einflusses auf das deutsche kirchliche Leben" (Walter Grundmann) gab 1940 eine „entjudete" Fassung des Neuen Testaments heraus und stellte Jesus als Arier dar (Susannah Heschel, *The Aryan Jesus*, 2008). Die Nationalsozialisten wussten: Das Neue Testament ist in seiner Substanz jüdisch.`,
    sources: [
      { kind: 'gegner', author: 'Rosemary Radford Ruether', work: 'Faith and Fratricide: The Theological Roots of Anti-Semitism', year: '1974', quote: `Der Antijudaismus sei die „linke Hand der Christologie": Das Bekenntnis zu Jesus als Messias sei untrennbar mit der Abwertung des Judentums verbunden.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Jules Isaac', work: 'L\'enseignement du mépris (Die Lehre der Verachtung)', year: '1962', status: 'paraphrase', note: 'Isaac beeinflusste maßgeblich die Erklärung Nostra Aetate; er traf 1960 Papst Johannes XXIII.' },
      { kind: 'fachliteratur', author: 'Amy-Jill Levine', work: 'The Misunderstood Jew: The Church and the Scandal of the Jewish Jesus', year: '2006', status: 'paraphrase', note: 'Levine ist Jüdin und lehrt Neues Testament (Vanderbilt, später Hartford).' },
      { kind: 'fachliteratur', author: 'Luke Timothy Johnson', work: 'The New Testament\'s Anti-Jewish Slander and the Conventions of Ancient Polemic, Journal of Biblical Literature 108', ref: 'S. 419–441', year: '1989', status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Susannah Heschel', work: 'The Aryan Jesus: Christian Theologians and the Bible in Nazi Germany', year: '2008', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Ja, Christen haben Juden über Jahrhunderte verfolgt – das war schwere Sünde, und ich schäme mich dafür. Aber das Neue Testament ist ein jüdisches Buch, geschrieben von Juden über einen Juden. Seine scharfen Worte sind innerjüdischer Streit, wie die Propheten ihn führten – die über Israel noch härter sprachen. Derselbe Text sagt: „Das Heil kommt von den Juden", Jesus betet für seine Henker, und Paulus warnt die Heidenchristen: „Rühme dich nicht gegen die Zweige." Wer Juden verfolgt hat, hat das Neue Testament nicht befolgt, sondern verraten – die Nazis mussten es sogar umschreiben.`,
  keyPoints: [
    `**Schuld bekennen:** Melito, Chrysostomus' Reden gegen die Juden, Kyrills Vertreibung der Juden aus Alexandria 415, die Kreuzzugsmorde 1096, Luthers Spätschriften, die Mitschuld an der Schoah – nichts davon beschönigen.`,
    `**Ein jüdisches Buch:** Jesus, Maria, die Apostel, Paulus, fast alle Verfasser waren Juden. Ihre Polemik ist Familienstreit, nicht Hass auf ein fremdes Volk.`,
    `**Prophetische Tradition:** Jesaja, Jeremia und Hosea sprachen über Israel schärfer als Johannes; Qumran nannte andere Juden „Söhne der Finsternis".`,
    `**Der Zusammenhang entscheidet:** Joh 8,44 gilt Gesprächspartnern, die Jesus töten wollen; Mt 27,25 ist der Ruf einer aufgewiegelten Menge, nicht Gottes Urteil.`,
    `**Röm 9–11:** Gott hat sein Volk nicht verstoßen; seine Gaben und Berufung sind unwiderruflich; Heidenchristen dürfen sich nicht rühmen.`,
    `**Die Täter mussten das NT umschreiben:** Das „entjudete" Neue Testament des Eisenacher Instituts (1940) zeigt, dass die Substanz des Textes jüdisch ist.`,
  ],
  argument: {
    name: 'Missbrauch widerlegt nicht den Text',
    summary: 'Dass ein Text missbraucht wurde, macht ihn nicht selbst zum Urheber des Missbrauchs – entscheidend ist, was er im Zusammenhang sagt und gebietet.',
    premises: [
      { text: 'P1: Die neutestamentlichen Verfasser waren (fast) alle Juden, die über innerjüdische Konflikte schrieben.', support: 'Paulus (Phil 3,5), Matthäus, Johannes; Jesus selbst (Joh 4,9). Die Konflikte drehten sich um die Deutung von Tora und Messias.' },
      { text: 'P2: Scharfe innerjüdische Polemik ist in der Hebräischen Bibel und im antiken Judentum gut belegt und gilt dort nicht als Judenhass.', support: 'Jes 1,4; 57,3–4; Jer 9; Hos 4; Qumran (1QS). L. T. Johnson, JBL 1989.' },
      { text: 'P3: Das Neue Testament gebietet ausdrücklich Liebe zu Feinden, verbietet Rache und verbietet Heidenchristen den Hochmut gegenüber Israel.', support: 'Mt 5,44; Röm 12,14–21; Röm 11,18–29; Lk 23,34.' },
      { text: 'P4: Die Verfolgung von Juden durch Christen widersprach also den Geboten des Textes; die NS-Ideologie musste den Text sogar „entjuden".', support: 'Eisenacher Institut 1939/40; S. Heschel, The Aryan Jesus (2008).' },
    ],
    conclusion: 'Das Neue Testament ist nicht antisemitisch; christlicher Judenhass war ein Verrat an ihm. Die Kirche muss diese Schuld bekennen und die Texte in ihrem jüdischen Zusammenhang lehren.',
  },
  voices: [
    {
      person: 'paulus',
      role: 'als Jude und Apostel der Völker',
      text: `Paulus nennt sich „ein Hebräer aus Hebräern", aus dem Stamm Benjamin, Pharisäer (Phil 3,5). Sein reifstes Wort über Israel steht in Röm 9–11: unaufhörlicher Schmerz über sein Volk, die Gewissheit, dass Gott es nicht verstoßen hat, und die scharfe Warnung an die Heidenchristen, sich nicht über die „natürlichen Zweige" zu erheben. Für Paulus ist das Heil der Völker auf die Wurzel Israel gepfropft – nicht an ihre Stelle getreten.`,
      sources: [{ kind: 'bibel', work: 'Römer', ref: '9,1–5; 11,1–36', status: 'paraphrase' }],
    },
    {
      person: 'james-parkes',
      role: 'als Historiker des christlichen Antijudaismus',
      text: `Der anglikanische Priester James Parkes zeigte schon 1934, wie sich aus dem Konflikt zwischen Kirche und Synagoge in der Spätantike eine Tradition der Verachtung entwickelte, die in Gesetzgebung, Predigt und Volksfrömmigkeit Juden zu Fremden und Feinden machte. Er war einer der ersten Christen, die diese Geschichte schonungslos aufarbeiteten – nicht um das Christentum zu verwerfen, sondern um es von dieser Schuld zu reinigen.`,
      sources: [{ kind: 'fachliteratur', author: 'James Parkes', work: 'The Conflict of the Church and the Synagogue: A Study in the Origins of Antisemitism', year: '1934', status: 'paraphrase' }],
    },
    {
      person: 'luke-timothy-johnson',
      role: 'als Neutestamentler',
      text: `Johnson vergleicht die Polemik des Neuen Testaments mit den Streitkonventionen der Antike: Philosophenschulen, jüdische Gruppen wie die Gemeinschaft von Qumran und auch Josephus beschimpften ihre Gegner mit Worten, die heute schockieren. Gemessen daran sei das Neue Testament eher zurückhaltend. Das Problem entstehe, wenn Texte aus einem innerjüdischen Streit später von einer machtvollen heidenchristlichen Mehrheit gegen eine Minderheit gewendet werden.`,
      sources: [{ kind: 'fachliteratur', author: 'Luke Timothy Johnson', work: 'The New Testament\'s Anti-Jewish Slander and the Conventions of Ancient Polemic, JBL 108', year: '1989', status: 'paraphrase' }],
    },
    {
      person: 'michael-brown',
      role: 'als messianischer Jude',
      text: `Michael Brown hat in seinem Buch über die Geschichte der Kirche und des jüdischen Volkes die Verbrechen von Christen an Juden ohne jede Beschönigung dokumentiert und Christen zur Umkehr aufgerufen. Zugleich betont er als Jude, der an Jesus glaubt, dass diese Verbrechen nicht aus dem Evangelium kommen, sondern aus seiner Verfälschung: Der jüdische Messias wurde von einer Kirche verraten, die ihre jüdischen Wurzeln vergaß.`,
      sources: [{ kind: 'fachliteratur', author: 'Michael L. Brown', work: 'Our Hands Are Stained with Blood: The Tragic Story of the „Church" and the Jewish People', year: '1992', status: 'paraphrase' }],
    },
    {
      person: 'chrysostomus',
      role: 'als Ausleger von Röm 9 – mit ausdrücklichem Vorbehalt',
      text: `Chrysostomus ist hier zugleich Mahnung und Zeuge. Seine acht Reden „Gegen die Juden" (386/387) enthalten Schmähungen, die nicht zu rechtfertigen sind und Jahrhunderte nachwirkten. Derselbe Prediger legt in seinen Homilien zum Römerbrief eindringlich dar, wie sehr Paulus sein Volk liebte – so sehr, dass er für es verflucht sein wollte (Röm 9,3). Die Kirche muss beides festhalten: Chrysostomus' Auslegungskunst und das klare Urteil, dass seine Polemik gegen Juden falsch war.`,
      sources: [
        { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum Römerbrief', ref: 'Homilie 16 (zu Röm 9,1–5)', year: 'um 390', status: 'paraphrase' },
        { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Reden gegen die Juden (Adversus Judaeos)', ref: 'Reden I–VIII', year: '386/387', status: 'paraphrase', note: 'Gerichtet vor allem an Christen in Antiochia, die jüdische Feste mitfeierten; in der Form antiker Schmährede (psogos). Das erklärt den Kontext, entschuldigt den Inhalt nicht.' },
      ],
    },
  ],
  dialog: [
    {
      id: 'joh-8-44-teufel',
      objection: `In Joh 8,44 sagt Jesus zu „den Juden": „Ihr habt den Teufel zum Vater." Daraus entstand das mittelalterliche Bild vom Juden als Teufel – mit Hörnern, in Kirchenportalen gemeißelt. Wie kannst du das verteidigen?`,
      objectionBy: 'Hyam Maccoby',
      answer: `Das mittelalterliche Bild verteidige ich nicht – es war eine Sünde. Aber lies den Zusammenhang: Jesus spricht zu „den Juden, die an ihn gläubig geworden waren" (8,31) und die ihn nun töten wollen (8,37.40). Es ist ein Streit unter Juden darüber, wer wirklich Abrahams Kind ist. Derselbe Johannes sagt: „Das Heil kommt von den Juden" (4,22). Und die Propheten sprachen schärfer: Jesaja nennt Israel „boshaften Samen" (1,4) und „Kinder der Zauberin, Same des Ehebrechers" (57,3).`,
      followUps: [
        {
          id: 'spaeter-heidnisch-gelesen',
          objection: `Selbst wenn es ursprünglich innerjüdisch war: Sobald die Kirche heidenchristlich war, wurde der Text gegen Juden gelesen. Texte haben Wirkungen, und diese Wirkung war tödlich.`,
          objectionBy: 'Rosemary Radford Ruether',
          answer: `Das stimmt, und die Wirkungsgeschichte gehört zur Verantwortung der Kirche – deshalb muss sie diese Texte im Zusammenhang lehren. Aber die Schuld liegt bei Lesern, die zugleich Röm 11,18 („rühme dich nicht wider die Zweige") und Mt 5,44 („liebet eure Feinde") übergingen. Antisemiten haben auch Jeremia und Jesaja zitiert – deshalb nennen wir die Propheten nicht antisemitisch.`,
          followUps: [
            {
              id: 'propheten-waren-insider',
              objection: `Die Propheten standen im Volk und riefen es zur Umkehr. Die johanneische Gemeinde hatte sich bereits getrennt – das ist Polemik von außen, aus Feindschaft.`,
              objectionBy: 'Rosemary Radford Ruether',
              answer: `Die johanneische Gemeinde bestand wahrscheinlich großenteils aus Juden, die an Jesus glaubten und deshalb aus der Synagoge ausgeschlossen wurden (Joh 9,22; 16,2). Sie war eine bedrängte Minderheit, keine Macht. Die Polemik einer verfolgten kleinen Gruppe ist etwas anderes als die Rhetorik einer herrschenden Staatskirche Jahrhunderte später. Das Problem entstand, als die Machtverhältnisse sich umkehrten – und die Kirche das vergaß.`,
              followUps: [
                {
                  id: 'synagogenausschluss-anachronistisch',
                  objection: `Die These vom Synagogenausschluss – J. Louis Martyns Verbindung mit der Birkat ha-Minim um 85–90 – ist heute stark umstritten. Du baust auf Sand.`,
                  objectionBy: 'Neutestamentlicher Einwand',
                  answer: `Richtig, Martyns konkrete Verbindung mit der Birkat ha-Minim ist umstritten, und ich will mich nicht darauf stützen. Unabhängig davon ist das Gesamtbild breit anerkannt: Im 1. Jahrhundert waren die Jesusgläubigen eine kleine, oft angefeindete Gruppe ohne politische Macht. Mein Punkt bleibt: Die johanneische Polemik ist nicht die Stimme einer herrschenden Mehrheit, die eine Minderheit verfolgt.`,
                },
              ],
            },
          ],
        },
        {
          id: 'ioudaioi-pauschal',
          objection: `Johannes spricht über siebzigmal von „den Juden", meist negativ. Das ist eine pauschale Verurteilung eines ganzen Volkes.`,
          objectionBy: 'John Dominic Crossan',
          answer: `„Ioudaioi" heißt bei Johannes oft „die Judäer" oder die Jerusalemer Autoritäten: In 9,22 fürchten sich die Eltern des Blindgeborenen – selbst Juden – „vor den Juden". Johannes berichtet zugleich, dass „viele Juden" an Jesus glaubten (11,45; 12,11), dass Jesus ein Jude ist (4,9) und das Heil von den Juden kommt (4,22). Ehrlich gesagt: Der Sprachgebrauch ist missverständlich, und deshalb übersetzen manche heute an einzelnen Stellen „die jüdischen Autoritäten". Gerade darum braucht es sorgfältige Lektüre statt pauschaler Urteile – in beide Richtungen.`,
          followUps: [
            {
              id: 'euer-gesetz',
              objection: `Der johanneische Jesus spricht sogar von „eurem Gesetz" (Joh 8,17; 10,34) – er distanziert sich von der Tora wie ein Außenstehender.`,
              objectionBy: 'Hyam Maccoby',
              answer: `Im selben Atemzug sagt er: „Die Schrift kann doch nicht gebrochen werden" (10,35), und „Mose hat von mir geschrieben" (5,46). „Euer Gesetz" betont, dass seine Gegner selbst diese Autorität anerkennen – ein Argument aus ihrer eigenen Grundlage, keine Distanzierung von der Tora. Der johanneische Jesus feiert die jüdischen Feste, lehrt im Tempel und nennt den Tempel „das Haus meines Vaters" (2,16).`,
            },
          ],
        },
      ],
    },
    {
      id: 'mt-27-25-blutfluch',
      objection: `„Sein Blut komme über uns und über unsere Kinder" (Mt 27,25). Mit diesem Vers wurde der Vorwurf des Gottesmordes und der Kollektivschuld aller Juden für alle Zeiten begründet.`,
      objectionBy: 'Jules Isaac',
      answer: `Es ist der Ruf einer Menge, die von den Hohenpriestern aufgewiegelt wurde (27,20) – kein Urteil Gottes. Jesus selbst betet am Kreuz: „Vater, vergib ihnen" (Lk 23,34), und Petrus sagt wenig später: „Ich weiß, dass ihr's aus Unwissenheit getan habt" (Apg 3,17). Nach christlichem Glauben starb Christus freiwillig für die Sünden **aller** Menschen. Wer aus Mt 27,25 eine Kollektivschuld ableitet, macht aus dem Blut der Vergebung (Mt 26,28) ein Blut des Fluches.`,
      followUps: [
        {
          id: 'gottesmord-melito',
          objection: `Der Gottesmord-Vorwurf ist keine späte Verirrung. Schon Melito von Sardes schrieb um 160: „Gott ist ermordet worden … von einer israelitischen Hand." Das ist christliche Theologie von Anfang an.`,
          objectionBy: 'Rosemary Radford Ruether',
          answer: `Das stimmt, Melito hat das geschrieben (Peri Pascha 96), und als Anklage gegen ein Volk war es falsch. Ich gebe das ohne Ausflüchte zu. Melito schrieb in Sardes, wo eine große, angesehene jüdische Gemeinde neben einer kleinen christlichen lebte; seine Rhetorik spiegelt diese Konkurrenz. Aber das Neue Testament erhebt diese Anklage nicht gegen ein Volk – und die reife Lehre der Kirche lautet: Wir alle haben ihn durch unsere Sünden ans Kreuz gebracht, und er hat sein Leben freiwillig gegeben (Joh 10,18).`,
          sources: [
            { kind: 'kirchenvater', author: 'Melito von Sardes', work: 'Vom Passa (Peri Pascha)', ref: '96', year: 'um 160–170', quote: `Gott ist ermordet worden; der König Israels ist von einer israelitischen Hand beseitigt.`, original: 'ὁ θεὸς πεφόνευται', status: 'paraphrase', note: 'Frühester ausdrücklicher Gottesmord-Vorwurf gegen Israel; Melito ist kein Heiliger der koptischen Kirche.' },
          ],
          followUps: [
            {
              id: 'chrysostomus-hass',
              objection: `Und euer heiliger Johannes Chrysostomus, ein Kirchenlehrer, nannte die Synagoge ein Theater und ein Bordell, eine Höhle von Räubern. Das ist euer Heiliger!`,
              objectionBy: 'Jules Isaac',
              answer: `Ja – Chrysostomus' acht Reden gegen die Juden (386/387) enthalten Worte, die nicht zu rechtfertigen sind. Zur Erklärung, nicht zur Entschuldigung: Sie richteten sich vor allem an Christen in Antiochia, die zu jüdischen Festen gingen, und folgten der antiken Form der Schmährede. Die Kirche verehrt Chrysostomus für seine Auslegung, seine Liebe zu den Armen und seinen Mut gegenüber den Mächtigen – nicht für diese Reden. Heilige sind nicht unfehlbar. Heute müssen wir klar sagen: Diese Worte waren falsch.`,
              followUps: [
                {
                  id: 'kyrill-vertreibung',
                  objection: `Und euer großer Kyrill von Alexandrien, der Held der Kopten, hat 415 die Juden aus Alexandria vertrieben!`,
                  objectionBy: 'Historiker',
                  answer: `Auch das muss ich ehrlich zugeben. Der Kirchenhistoriker Sokrates berichtet, dass nach einem nächtlichen Überfall jüdischer Gruppen auf Christen Kyrill mit einer Menge die Synagogen besetzte und die Juden aus der Stadt vertrieb; die Einzelheiten sind umstritten. Selbst nach vorausgegangener Gewalt war eine kollektive Vertreibung Unrecht. Die koptische Kirche ehrt Kyrill als Lehrer des Glaubens an den menschgewordenen Gott – nicht jede seiner Taten. Das Evangelium, das er verkündete, verurteilt dieses Handeln.`,
                  followUps: [
                    {
                      id: 'kirche-unglaubwuerdig',
                      objection: `Wenn selbst eure größten Heiligen so gehandelt haben – warum sollte irgendjemand eurem Buch und eurer Kirche noch vertrauen?`,
                      objectionBy: 'Jüdischer Gesprächspartner',
                      answer: `Die Sünden der Kirche verurteilen die Kirche – nicht Christus. Und beachte: Der Maßstab, mit dem du Chrysostomus und Kyrill zu Recht verurteilst, stammt aus dem Neuen Testament selbst – „Segnet, die euch verfolgen" (Röm 12,14), „Rühme dich nicht wider die Zweige" (Röm 11,18). Die christliche Antwort auf Schuld ist Umkehr (metanoia). Ich bitte dich nicht, die Geschichte zu vergessen, sondern mir zu erlauben, dir zu zeigen, was das Buch tatsächlich sagt.`,
                      questionsBack: [
                        `Nach welchem Maßstab beurteilst du die Taten dieser Christen als Unrecht – und woher kommt er?`,
                      ],
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
      id: 'holocaust-christlicher-boden',
      objection: `Der Holocaust ist auf christlichem Boden gewachsen. Luther forderte 1543, Synagogen niederzubrennen; nach der Pogromnacht 1938 veröffentlichte ein lutherischer Bischof Luthers Judenschriften als Rechtfertigung. Ohne neunzehn Jahrhunderte christlicher Judenverachtung kein Auschwitz.`,
      objectionBy: 'Jules Isaac',
      answer: `Dass christlicher Antijudaismus den Boden mit bereitet hat, ist wahr, und Christen müssen das bekennen. Luthers Spätschriften waren entsetzlich; die lutherischen Kirchen haben sich inzwischen ausdrücklich von ihnen distanziert. Aber der nationalsozialistische Rassenantisemitismus war neuheidnisch – und er musste das Neue Testament **umschreiben**: Das Eisenacher „Entjudungsinstitut" gab 1940 ein Neues Testament ohne jüdische Bezüge heraus und machte Jesus zum Arier. Die Täter wussten, dass der Text in seiner Substanz jüdisch ist.`,
      sources: [
        { kind: 'fachliteratur', author: 'Susannah Heschel', work: 'The Aryan Jesus: Christian Theologians and the Bible in Nazi Germany', year: '2008', quote: `Das 1939 gegründete Institut zur Erforschung und Beseitigung des jüdischen Einflusses auf das deutsche kirchliche Leben (Eisenach) unter Walter Grundmann versuchte, das Christentum zu „entjuden", und veröffentlichte 1940 eine bereinigte Fassung des Neuen Testaments.`, status: 'paraphrase' },
        { kind: 'gegner', author: 'Martin Luther', work: 'Von den Juden und ihren Lügen', year: '1543', status: 'paraphrase', note: 'Luther empfahl u. a., Synagogen und Schulen anzuzünden. Er ist für die koptische Kirche keine Autorität; hier als Beispiel christlicher Schuld angeführt.' },
      ],
      followUps: [
        {
          id: 'kirchen-schwiegen',
          objection: `Die meisten Kirchen schwiegen oder machten mit – die „Deutschen Christen", die Bischöfe, der Vatikan. Wo war eure Kirche?`,
          objectionBy: 'Jüdischer Historiker',
          answer: `Viele haben versagt – das ist eine schmerzliche Wahrheit. Aber es gab auch die anderen: Dietrich Bonhoeffer, der 1945 hingerichtet wurde; die bulgarisch-orthodoxe Kirche, deren Metropoliten Stefan von Sofia und Kiril von Plowdiw 1943 die Deportation der bulgarischen Juden verhindern halfen; die orthodoxe Nonne Maria Skobtsova, die in Paris Juden versteckte und 1945 in Ravensbrück starb; das Dorf Le Chambon-sur-Lignon; Tausende Christen unter den „Gerechten unter den Völkern". Sie handelten ausdrücklich aus dem Evangelium.`,
          followUps: [
            {
              id: 'ausnahmen-beweisen-nichts',
              objection: `Ausnahmen beweisen nichts. Die Mehrheit der Christen war mitschuldig.`,
              objectionBy: 'Jüdischer Historiker',
              answer: `Einverstanden: Die Retter waren eine Minderheit, und ich benutze sie nicht, um die Schuld der Mehrheit kleinzureden. Aber die Frage war, ob das Neue Testament die Ursache ist. Die Retter beriefen sich auf das Evangelium; die Ideologen der Vernichtung mussten es entjuden. Das zeigt: Nicht das Neue Testament, sondern die Abkehr von ihm führte zum Verbrechen.`,
            },
          ],
        },
        {
          id: 'umkehr-erst-nach-auschwitz',
          objection: `Die Kirchen haben ihre Haltung erst nach Auschwitz geändert – Nostra Aetate kam 1965. Das ist zu spät und wirkt opportunistisch.`,
          objectionBy: 'Jüdischer Gesprächspartner',
          answer: `Ja, es kam beschämend spät. Aber Umkehr, die spät kommt, ist besser als keine. Und bemerkenswert: Die Erneuerung wurde nicht erfunden, sondern aus dem Neuen Testament selbst gewonnen – aus einer neuen, ernsthaften Lektüre von Röm 9–11 und der jüdischen Wurzeln Jesu. Das Buch, das angeblich die Ursache war, lieferte die Korrektur.`,
        },
      ],
    },
    {
      id: '1-thess-2-feind',
      objection: `Paulus schreibt in 1 Thess 2,15: Die Juden „haben den Herrn Jesus getötet … gefallen Gott nicht und sind allen Menschen feind". Das ist exakt das antike antisemitische Klischee vom menschenfeindlichen Juden, wie es Tacitus verbreitete.`,
      objectionBy: 'Hyam Maccoby',
      answer: `Paulus spricht von den Judäern, die die Gemeinden in Judäa verfolgten – parallel zu den Heiden in Thessalonich, die ihre eigenen Landsleute verfolgten (2,14). Paulus ist selbst Jude und schreibt später, er wünsche verflucht zu sein, wenn er dadurch sein Volk retten könnte (Röm 9,3), und: „Hat Gott sein Volk verstoßen? Das sei ferne!" (Röm 11,1). Ein Mann, der so über Israel spricht, ist kein Judenfeind.`,
      sources: [
        { kind: 'bibel', work: '1. Thessalonicher', ref: '2,14–16', quote: `Denn ihr seid Nachfolger geworden, liebe Brüder, der Gemeinden Gottes in Judäa in Christo Jesu, weil ihr ebendasselbe erlitten habt von euren Blutsfreunden, was jene von den Juden, welche auch den HERRN Jesus getötet haben und ihre eigenen Propheten, und haben uns verfolgt und gefallen Gott nicht und sind allen Menschen zuwider.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'interpolation-ausrede',
          objection: `Jetzt kommst du sicher damit, dass 1 Thess 2,14–16 eine spätere Einfügung sei. Das ist eine bequeme Ausrede.`,
          objectionBy: 'Hyam Maccoby',
          answer: `Einige Forscher (etwa Birger Pearson, 1971) halten den Abschnitt tatsächlich für eine spätere Einfügung; das ist eine Minderheitsmeinung, und ich stütze mich nicht darauf. Ich nehme den Text als paulinisch: einen prophetisch zugespitzten Ausbruch über konkrete Verfolger, vergleichbar mit Jesu Klage über Jerusalem (Mt 23,37) oder Elias Klage (1 Kön 19,10). Paulus' ausgereifte Theologie über Israel steht im später geschriebenen Römerbrief – und dort ist sie voller Liebe und Hoffnung.`,
          followUps: [
            {
              id: 'roemer-11-ersatz',
              objection: `Auch in Röm 11 nennt Paulus Israel „Feinde" (11,28) und „verstockt" (11,25). Das ist Ersatztheologie: Die Kirche hat Israel ersetzt.`,
              objectionBy: 'Rosemary Radford Ruether',
              answer: `Lies den Satz zu Ende: „Feinde um euretwillen; aber nach der Wahl Geliebte um der Väter willen. Denn Gottes Gaben und Berufung können ihn nicht gereuen" (11,28–29). Die Verstockung ist „zum Teil" und zeitlich begrenzt, „bis die Fülle der Heiden eingegangen ist; und also wird ganz Israel gerettet werden" (11,25–26). Paulus widerlegt die Ersatztheologie: Die Heiden sind in den Ölbaum Israel eingepfropft, nicht an seine Stelle getreten (11,17–18).`,
              questionsBack: [
                `Wie kann man aus „Gottes Gaben und Berufung sind unwiderruflich" (Röm 11,29) eine Verwerfung Israels ableiten?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'pharisaeer-heuchler',
      objection: `Matthäus 23 – „Wehe euch, Schriftgelehrte und Pharisäer, ihr Heuchler!" – hat das Bild vom gesetzlichen, heuchlerischen Juden geprägt. „Pharisäer" ist bis heute ein Schimpfwort. Dabei waren die Pharisäer die Väter des rabbinischen Judentums.`,
      objectionBy: 'Amy-Jill Levine (als Kritikerin christlicher Predigt)',
      answer: `Das stimmt: Christliche Predigt hat die Pharisäer karikiert, und das muss aufhören. Jesus stand den Pharisäern in vielem nahe (Auferstehung, Engel, Gebet); Pharisäer warnten ihn vor Herodes (Lk 13,31); Nikodemus und Gamaliel waren Pharisäer (Joh 3; Apg 5,34), Paulus nennt sich bis zuletzt einen (Apg 23,6). Mt 23 ist prophetische Kritik an Heuchelei – wie sie auch der Talmud kennt, der ironisch verschiedene Typen falscher Pharisäer aufzählt.`,
      sources: [
        { kind: 'juedisch', work: 'Babylonischer Talmud, Sota', ref: '22b', quote: `Der Talmud zählt sieben Arten von Pharisäern auf, von denen die meisten Heuchler und Selbstgerechte sind, und lobt nur den, der aus Liebe zu Gott handelt.`, status: 'unverified', note: 'Parallele in yBerakhot 9; Wortlaut und Zählung vor Verwendung prüfen.' },
      ],
      followUps: [
        {
          id: 'predigt-schadet-weiter',
          objection: `Aber Christen predigen bis heute „die gesetzlichen Pharisäer" als dunkle Folie für Jesus. Der Schaden geht weiter.`,
          objectionBy: 'Amy-Jill Levine',
          answer: `Da hast du recht, und Levine hat das zu Recht scharf kritisiert. Auch koptische und orthodoxe Prediger müssen lernen, die Texte im jüdischen Zusammenhang auszulegen: Jesus kritisiert Heuchelei, wie es jeder Prophet und jeder Rabbi tat – nicht das Judentum. Eine ehrliche Exegese ist Teil der Umkehr. Ich frage dich nur: Gestehst du zu, dass man diese Texte richtig lesen kann – so wie wir zugestehen, dass sie falsch gelesen wurden?`,
        },
      ],
    },
    {
      id: 'synagoge-des-satans',
      objection: `Die Offenbarung spricht zweimal von der „Synagoge des Satans" (Offb 2,9; 3,9). Deutlicher kann Judenfeindschaft nicht sein.`,
      objectionBy: 'Hyam Maccoby',
      answer: `Lies den ganzen Satz: „… die da sagen, sie seien Juden, und sind's nicht, sondern sind die Synagoge des Satans" (2,9). Der Verfasser, selbst ein Jude, bestreitet einer konkreten örtlichen Gruppe, die die Gemeinde in Smyrna verleumdete, das Recht auf den Ehrennamen „Jude" – er setzt also voraus, dass „Jude" ein Ehrentitel ist. Es ist die Sprache eines Streits um Identität unter Bedrängnis, keine Aussage über das jüdische Volk. Missbraucht wurde sie trotzdem – und das bedauere ich.`,
    },
  ],
  questionsToAsk: [
    `Würdest du die Propheten Jesaja und Jeremia antisemitisch nennen, weil sie Israel scharf kritisierten?`,
    `Wer schrieb das Neue Testament – und über wen?`,
    `Wie passen „Das Heil kommt von den Juden" (Joh 4,22) und „Gottes Gaben und Berufung sind unwiderruflich" (Röm 11,29) zu einem antisemitischen Buch?`,
    `Warum mussten die Nationalsozialisten das Neue Testament umschreiben, wenn es schon antisemitisch war?`,
    `Nach welchem Maßstab verurteilen wir die Verbrechen der Christen – und woher kommt dieser Maßstab?`,
  ],
  avoid: [
    `Nie die christliche Schuld relativieren („Das waren keine echten Christen", „Andere waren schlimmer"). Erst bekennen, dann erklären.`,
    `Nicht den Holocaust als Argument instrumentalisieren oder Opferzahlen vergleichen.`,
    `Keine Formulierungen wie „die Juden haben Jesus getötet" – historisch falsch (die Hinrichtung vollzog Rom) und theologisch irreführend (Christus starb für die Sünden aller).`,
    `Nicht so tun, als hätten alle Kirchenväter Juden geachtet. Melito und Chrysostomus beim Namen nennen – und Kyrills Vertreibung der Juden aus Alexandria nicht verschweigen.`,
  ],
  concessions: [
    `Christlicher Antijudaismus hat Jahrhunderte der Verfolgung genährt und den Boden für den modernen Antisemitismus mit bereitet.`,
    `Einzelne neutestamentliche Formulierungen (etwa der johanneische Gebrauch von „die Juden") sind missverständlich und wurden missbraucht.`,
    `Auch verehrte Väter – Melito, Chrysostomus, Kyrill von Alexandrien – haben gegenüber Juden schwer geirrt bzw. Unrecht getan.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Amy-Jill Levine, Marc Zvi Brettler (Hg.)', work: 'The Jewish Annotated New Testament', year: '2011 (2. Aufl. 2017)', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Michael L. Brown', work: 'Our Hands Are Stained with Blood', year: '1992', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'James Parkes', work: 'The Conflict of the Church and the Synagogue', year: '1934', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Susannah Heschel', work: 'The Aryan Jesus', year: '2008', status: 'paraphrase' },
    { kind: 'gegner', author: 'Rosemary Radford Ruether', work: 'Faith and Fratricide', year: '1974', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Antisemitismus', 'Antijudaismus', 'Johannes 8', 'Matthäus 27', 'Römer 9–11', 'Holocaust', 'Nostra Aetate', 'Kirchengeschichte'],
  related: [
    'judentum-dialog/juden-lehnten-ab',
    'judentum-dialog/zwei-wege-bund',
    'christentum-gesellschaft/kirche-heuchlerisch',
    'religion-gewalt/kreuzzuege',
    'judentum-messias/messias-kriterien-nicht-erfuellt',
  ],
};

export default claim;
