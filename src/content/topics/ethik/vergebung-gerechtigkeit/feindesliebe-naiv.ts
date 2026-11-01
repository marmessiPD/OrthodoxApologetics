import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'feindesliebe-naiv',
  title: `„Feindesliebe ist naiv und gefährlich."`,
  proponents: [
    { name: 'Friedrich Nietzsche', role: 'Philosoph', work: 'Zur Genealogie der Moral (1887), Erste Abhandlung, §§ 10–15' },
    { name: 'Sigmund Freud', role: 'Begründer der Psychoanalyse', work: 'Das Unbehagen in der Kultur (1930), Kap. V' },
    { name: 'Niccolò Machiavelli', role: 'Politischer Philosoph der Renaissance', work: 'Discorsi (um 1517), Buch II, Kap. 2' },
    { name: 'Sam Harris', role: 'Neurowissenschaftler und Autor', work: 'The End of Faith (2004), Kap. 6' },
  ],
  steelman: `„Liebet eure Feinde" klingt erhaben, ist aber entweder unmöglich oder gefährlich. Unmöglich, weil Liebe ein Gefühl ist, das man nicht befehlen kann – Freud nannte das Gebot einen Beweis dafür, wie wenig die Kultur von der menschlichen Natur versteht. Gefährlich, weil es die Schwachen den Starken ausliefert: Wer die andere Wange hinhält, ermutigt den Schläger; wer dem Tyrannen vergibt, verrät dessen Opfer. Nietzsche hat die Psychologie dahinter entlarvt: Die Ohnmacht, die sich nicht rächen kann, tauft sich in „Güte" und „Feindesliebe" um und verschiebt die Rache auf ein Jüngstes Gericht, in dem man den Verdammten zusieht. Machiavelli beobachtete, dass diese Moral die Welt „schwach" gemacht und den Verbrechern überlassen habe. Und Sam Harris argumentiert, dass konsequenter Pazifismus gegenüber Mördern schlicht unmoralisch ist. Wer Missbrauchsopfern Feindesliebe predigt, setzt sie neuer Gewalt aus. Eine reife Ethik kennt Selbstachtung, Grenzen und Gerechtigkeit – nicht Liebe für den, der dich vernichten will.`,
  biblical: {
    summary: `Jesus gebietet: „Liebet eure Feinde; segnet, die euch fluchen; tut wohl denen, die euch hassen; bittet für die, so euch beleidigen und verfolgen" (Mt 5,44). **Feindesliebe ist aber nicht Gefühlsduselei und nicht Passivität.** Biblische Liebe (*agapē*) ist der Wille zum wahren Wohl des anderen – auch des Feindes –, der sich im Gebet, im Segen und in konkreter Hilfe zeigt (Röm 12,20; Spr 25,21). Sie verzichtet auf **persönliche Rache** und überlässt das Urteil Gott (Röm 12,19), ohne dass Unrecht gutgeheißen würde: Dieselbe Bibel gibt der Obrigkeit das Schwert zum Schutz vor dem Bösen (Röm 13,4). Jesus selbst hielt nicht stumm hin, als er geschlagen wurde, sondern fragte: „Was schlägst du mich?" (Joh 18,23). Das Ziel der Feindesliebe ist nicht die Kapitulation vor dem Bösen, sondern sein Überwinden: „Überwinde das Böse mit Gutem" (Röm 12,21).`,
    detail: `**Mt 5,39 im Kontext.** Der Schlag „auf den rechten Backen" ist für einen Rechtshänder ein Schlag mit dem Handrücken – im antiken Orient eine Beleidigung, keine Lebensbedrohung. Jesus verbietet die Vergeltung von Kränkung mit Kränkung, nicht den Schutz von Leib und Leben anderer.

**„Feurige Kohlen".** Röm 12,20 zitiert Spr 25,21–22: Wohltaten am Feind sollen ihn beschämen und zur Umkehr führen. Feindesliebe zielt auf die Verwandlung des Feindes, nicht auf seine Demütigung.

**Gottes eigenes Wesen.** Jesus begründet das Gebot nicht mit Nützlichkeit, sondern mit dem Vater, der „seine Sonne aufgehen läßt über die Bösen und über die Guten" (Mt 5,45). Am Kreuz betet er für seine Henker (Lk 23,34) – und Paulus erinnert: Christus starb für uns, „da wir noch Feinde waren" (Röm 5,10).

**Vergebung und Versöhnung.** Jesus verlangt die innere Bereitschaft zu vergeben (Mk 11,25); die volle Versöhnung setzt aber Umkehr des Täters voraus (Lk 17,3). Wer vergibt, muss dem Täter nicht wieder vertrauen.`,
    sources: [
      { kind: 'bibel', work: 'Matthäus', ref: '5,44–45', quote: `Ich aber sage euch: Liebet eure Feinde; segnet, die euch fluchen; tut wohl denen, die euch hassen; bittet für die, so euch beleidigen und verfolgen, auf daß ihr Kinder seid eures Vaters im Himmel; denn er läßt seine Sonne aufgehen über die Bösen und über die Guten.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Römer', ref: '12,20–21', quote: `So nun deinen Feind hungert, so speise ihn; dürstet ihn, so tränke ihn. Wenn du das tust, so wirst du feurige Kohlen auf sein Haupt sammeln. Laß dich nicht das Böse überwinden, sondern überwinde das Böse mit Gutem.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '5,39', quote: `Ich aber sage euch, daß ihr nicht widerstreben sollt dem Übel; sondern, so dir jemand einen Streich gibt auf deinen rechten Backen, dem biete den andern auch dar.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '18,23', quote: `Habe ich übel geredet, so beweise es, daß es böse sei; habe ich aber recht geredet, was schlägst du mich?`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '17,3', quote: `Sündigt dein Bruder an dir, so strafe ihn; und so er sich bessert, vergib ihm.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptische Kirche lebt seit Jahrhunderten unter Bedrängnis und hat Feindesliebe nicht als Theorie, sondern als Überlebensform und Zeugnis gelernt. Die Wüstenväter lehrten, das Gebet für den Feind sei der Weg, das eigene Herz von Hass zu heilen. In jüngster Zeit haben koptische Familien – nach der Ermordung der 21 Märtyrer in Libyen (2015) und den Anschlägen am Palmsonntag 2017 – öffentlich für die Mörder gebetet; zugleich forderte die Kirche vom Staat Schutz und Gerechtigkeit. Papst Tawadros II. reagierte auf die Brandstiftungen an Dutzenden Kirchen im August 2013 nicht mit Aufrufen zur Vergeltung, sondern sinngemäß mit dem Satz, ein Vaterland ohne Kirchen sei besser als Kirchen ohne Vaterland. Feindesliebe heißt hier: kein Hass, keine Rache – aber auch kein Verzicht auf Wahrheit und Recht.`,
    sources: [
      { kind: 'koptisch', author: 'Papst Tawadros II.', work: 'Stellungnahmen nach den Kirchenbrandstiftungen im August 2013', year: '2013', quote: `Ein Vaterland ohne Kirchen ist besser als Kirchen ohne Vaterland.`, status: 'paraphrase', note: 'Vielfach zitierter Satz; genaue Quelle und Wortlaut vor wörtlicher Verwendung prüfen.' },
      { kind: 'koptisch', work: 'Apophthegmata Patrum (Sprüche der Wüstenväter), Sammlung über die Nächstenliebe und das Nicht-Urteilen', quote: `Die Väter lehren, für den Bedränger zu beten, ihn nicht zu richten und Böses nicht mit Bösem zu vergelten.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Feindesliebe heißt nicht, Gefühle zu heucheln oder sich alles gefallen zu lassen. Sie heißt: Ich will auch für meinen Feind das Gute, ich räche mich nicht selbst, und ich bete für ihn. Das schließt Grenzen, Anzeige und den Schutz anderer nicht aus – die Bibel gibt dem Staat ausdrücklich das Schwert gegen das Böse (Röm 13,4). Naiv ist eher das Gegenteil: Hass und Rache haben noch nie einen Kreislauf der Gewalt beendet. Martin Luther King hat es so gesagt: Hass kann Hass nicht vertreiben – nur Liebe kann das.`,
  keyPoints: [
    `**Liebe ist Wille, nicht Gefühl:** *Agapē* will das Wohl des anderen und zeigt sich im Tun, im Segnen und im Gebet (Mt 5,44; Röm 12,20).`,
    `**Feindesliebe ≠ Passivität:** Persönliche Rache ist verboten (Röm 12,19), der Schutz der Schwachen durch Recht und Obrigkeit geboten (Röm 13,4).`,
    `**Jesus war nicht ohnmächtig:** Er hätte „zwölf Legionen Engel" rufen können (Mt 26,53) – Feindesliebe ist Stärke, die sich nicht vom Bösen bestimmen lässt.`,
    `**Vergebung ≠ Vertrauen ≠ Versöhnung:** Man kann vergeben und sich trotzdem schützen; Versöhnung setzt Umkehr des Täters voraus (Lk 17,3).`,
    `**Sie wirkt:** Von der Bürgerrechtsbewegung bis zu koptischen Märtyrerfamilien hat Feindesliebe Kreisläufe der Gewalt durchbrochen; gewaltfreier Widerstand war im 20. Jahrhundert statistisch erfolgreicher als bewaffneter.`,
    `**Sie gründet in Gott:** Der Vater lässt seine Sonne über Böse und Gute aufgehen (Mt 5,45); Christus starb für uns, als wir Feinde waren (Röm 5,10).`,
  ],
  voices: [
    {
      person: 'martin-luther-king',
      role: 'als Prediger der Bürgerrechtsbewegung',
      text: `King hat die Feindesliebe nicht im Studierzimmer, sondern unter Bombendrohungen gepredigt. In der Predigt „Loving Your Enemies" (in *Strength to Love*, 1963) unterscheidet er die Liebe, die Jesus gebietet (*agapē*), von Zuneigung: Man muss den Gegner nicht „mögen", aber man muss sein Wohl wollen. Hass, so King, vervielfacht Hass; nur Liebe kann einen Feind in einen Freund verwandeln. Zugleich forderte King unnachgiebig Gerechtigkeit – Feindesliebe war für ihn die Kraft des Widerstands, nicht seine Aufgabe.`,
      sources: [{ kind: 'fachliteratur', author: 'Martin Luther King Jr.', work: 'Strength to Love', ref: 'Predigt „Loving Your Enemies"', year: '1963', quote: `Finsternis kann Finsternis nicht vertreiben; das kann nur das Licht. Hass kann Hass nicht vertreiben; das kann nur die Liebe.`, original: 'Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.', translation: 'eigene Übersetzung', status: 'verbatim', note: 'Vielfach belegter Satz Kings; er erscheint in Strength to Love und in späteren Reden.' }],
    },
    {
      person: 'dietrich-bonhoeffer',
      role: 'als Theologe im Widerstand',
      text: `Bonhoeffer legt in *Nachfolge* (1937) Mt 5,44 so aus: Der Feind ist für den Jünger nicht Gegenstand des Hasses, sondern der Fürbitte; im Gebet tritt der Jünger an die Seite des Feindes vor Gott. Bonhoeffer schrieb das unter dem NS-Regime, das ihn 1945 hinrichten ließ. Seine spätere Beteiligung am Widerstand zeigt, dass er Feindesliebe nicht als Gleichgültigkeit gegenüber dem Unrecht an anderen verstand.`,
      sources: [{ kind: 'fachliteratur', author: 'Dietrich Bonhoeffer', work: 'Nachfolge', ref: 'Auslegung zu Mt 5,43–48', year: '1937', status: 'paraphrase' }],
    },
    {
      person: 'corrie-ten-boom',
      role: 'als Überlebende von Ravensbrück',
      text: `Corrie ten Boom versteckte mit ihrer Familie Juden in Haarlem und überlebte das KZ Ravensbrück, in dem ihre Schwester Betsie starb. Nach dem Krieg trat ihr bei einem Vortrag in München ein ehemaliger Wärter entgegen und bat um Vergebung. Sie berichtet, dass sie aus eigener Kraft nichts fühlen konnte – und Gott um die Kraft bat, ihm die Hand zu reichen. Ihre Erfahrung: Feindesliebe ist nicht ein Gefühl, das man erzeugt, sondern eine Gabe, um die man bittet.`,
      sources: [{ kind: 'fachliteratur', author: 'Corrie ten Boom', work: '„I\'m Still Learning to Forgive", Guideposts', year: '1972', status: 'paraphrase' }],
    },
    {
      person: 'cs-lewis',
      role: 'als Ethiker des Alltags',
      text: `Lewis schreibt in *Mere Christianity*, christliche Liebe sei kein Zustand des Gefühls, sondern des Willens. Man solle nicht grübeln, ob man den Nächsten „liebt", sondern so handeln, als täte man es – dann wachse die Liebe. Feindesliebe heiße nicht, den Feind nett zu finden, sondern ihm Gutes zu wünschen, so wie man sich selbst trotz eigener Fehler das Gute wünscht. Sie schließe nicht aus, dass ein Verbrecher bestraft wird – wohl aber, dass man sich an seinem Leiden freut.`,
      sources: [{ kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Mere Christianity', ref: 'Buch III, Kap. 7 („Forgiveness") und Kap. 9 („Charity")', year: '1952', status: 'paraphrase' }],
    },
    {
      person: 'everett-worthington',
      role: 'als Vergebungsforscher',
      text: `Der Psychologe Everett Worthington hat die Vergebung jahrzehntelang empirisch erforscht und ein Modell entwickelt, das in vielen Studien geprüft wurde. Vergebung im Sinne eines inneren Loslassens von Rachewünschen ist mit geringerer Depressivität, weniger Angst und besserer körperlicher Gesundheit verbunden – Vergebung ist dabei nicht Verdrängung oder Vergessen. Worthingtons eigene Mutter wurde bei einem Einbruch ermordet; er hat beschrieben, wie er selbst darum rang, dem Täter zu vergeben.`,
      sources: [{ kind: 'wissenschaft', author: 'Everett L. Worthington Jr.', work: 'Forgiving and Reconciling: Bridges to Wholeness and Hope', year: '2003', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'sklavenmoral',
      objection: `Feindesliebe ist Sklavenmoral. Die Ohnmächtigen, die sich nicht rächen können, nennen ihre Schwäche „Güte" und ihre Feigheit „Vergebung".`,
      objectionBy: 'Friedrich Nietzsche',
      answer: `Jesus gebot die Feindesliebe nicht aus Ohnmacht. Er sagte bei seiner Verhaftung: „Meinst du, daß ich nicht könnte meinen Vater bitten, daß er mir zuschickte mehr denn zwölf Legionen Engel?" (Mt 26,53). Wer zurückschlagen könnte und es nicht tut, ist nicht schwach, sondern frei. Und die Menschen, die Feindesliebe gelebt haben – King, ten Boom, die koptischen Märtyrerfamilien – waren keine Feiglinge, sondern Menschen von ungewöhnlichem Mut.`,
      sources: [{ kind: 'gegner', author: 'Friedrich Nietzsche', work: 'Zur Genealogie der Moral', ref: 'I, § 14', year: '1887', quote: `Die Ohnmacht, die nicht vergilt, werde in „Güte" umgelogen, die ängstliche Niedrigkeit in „Demut", das Nicht-sich-rächen-Können in „Nicht-sich-rächen-Wollen", vielleicht sogar in Verzeihung und „Liebe zu seinen Feinden".`, status: 'paraphrase' }],
      followUps: [
        {
          id: 'rache-aufgeschoben',
          objection: `Ihr verschiebt die Rache nur: „Die Rache ist mein" (Röm 12,19). Tertullian hat sich darauf gefreut, im Jüngsten Gericht die Verfolger brennen zu sehen. Das ist Ressentiment mit Zahlungsaufschub.`,
          objectionBy: 'Friedrich Nietzsche',
          answer: `Du hast recht, dass Tertullian in *De spectaculis* eine solche Schadenfreude formuliert – und Nietzsche zitiert ihn zu Recht. Das ist eine Entgleisung, kein Maßstab. Paulus verbindet „Die Rache ist mein" sofort mit dem Gegenteil von Schadenfreude: „So nun deinen Feind hungert, so speise ihn" (Röm 12,20). Wer das Urteil Gott überlässt, will nicht den Untergang des Feindes, sondern ist frei, ihm Gutes zu tun und für seine Umkehr zu beten. Gott selbst hat „keinen Gefallen am Tode des Gottlosen" (Hes 33,11).`,
          sources: [
            { kind: 'kirchenvater', author: 'Tertullian', work: 'De spectaculis', ref: '30', year: 'um 200', status: 'paraphrase', note: 'Nietzsche zitiert die Stelle in Genealogie der Moral I, § 15. Tertullian ist keine Lehrautorität der koptischen Kirche.' },
            { kind: 'bibel', work: 'Hesekiel', ref: '33,11', quote: `So wahr als ich lebe, spricht der Herr HERR, ich habe keinen Gefallen am Tode des Gottlosen, sondern daß sich der Gottlose bekehre von seinem Wesen und lebe.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
          followUps: [
            {
              id: 'gewalttaetiger-gott-noetig',
              objection: `Also braucht ihr einen strafenden Gott, um selbst friedlich zu sein? Das ist eine bedenkliche Moral.`,
              objectionBy: 'Sam Harris',
              answer: `Miroslav Volf, der den Balkankrieg erlebte, hat genau das durchdacht: Wer Massaker gesehen hat, kann nur dann auf Rache verzichten, wenn er weiß, dass das Böse nicht ungestraft bleibt. Gottes Gericht ist nicht göttlicher Sadismus, sondern die Weigerung, dem Bösen das letzte Wort zu lassen. Ohne diese Hoffnung bleibt Opfern nur, selbst zu vergelten – oder zu resignieren.`,
              followUps: [
                {
                  id: 'atheisten-ohne-gericht',
                  objection: `Viele Atheisten kommen ganz ohne göttliches Gericht aus und sind trotzdem friedlich und vergebungsbereit.`,
                  objectionBy: 'Sam Harris',
                  answer: `Das stimmt, und ich respektiere das. Aber die Frage ist, welche Hoffnung du den Opfern geben kannst, deren Mörder nie gefasst wurden – den Millionen Toten der Gulags und Killing Fields. Der Philosoph Max Horkheimer, kein gläubiger Mensch, sagte, Theologie sei Ausdruck der Sehnsucht, dass der Mörder nicht über das unschuldige Opfer triumphieren möge. Diese Sehnsucht ist nicht Rachsucht, sondern Gerechtigkeitssinn – und sie weist auf Gott.`,
                  sources: [{ kind: 'fachliteratur', author: 'Max Horkheimer', work: 'Die Sehnsucht nach dem ganz Anderen (Gespräch mit Helmut Gumnior)', year: '1970', quote: `Theologie sei Ausdruck der Hoffnung, dass es bei dem Unrecht, durch das die Welt gekennzeichnet ist, nicht bleibe und dass der Mörder nicht über das unschuldige Opfer triumphieren möge.`, status: 'paraphrase', note: 'Horkheimer war Mitbegründer der Frankfurter Schule, kein Christ.' }],
                  questionsBack: [`Was sagst du einer Mutter, deren Kind ermordet wurde und deren Mörder nie gefunden wird? Gibt es für sie Gerechtigkeit?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'freud-unmoeglich',
      objection: `Freud hatte recht: Ein Gebot, das so unerfüllbar ist wie „Liebe deine Feinde", beweist nur, wie wenig die Kultur von der menschlichen Natur versteht. Credo quia absurdum.`,
      objectionBy: 'Sigmund Freud',
      answer: `Freud hat einen Punkt: Aus eigener Kraft ist Feindesliebe tatsächlich kaum möglich. Das sagt das Christentum auch: „Ohne mich könnt ihr nichts tun" (Joh 15,5). Feindesliebe ist keine Leistung der Natur, sondern Frucht der Gnade. Aber unerfüllbar ist sie nicht – unzählige Menschen haben sie gelebt, gerade auch unter Verfolgung. Ein Gebot, das größer ist als unsere Natur, zeigt nicht ein falsches Menschenbild, sondern ein Ziel, zu dem wir geschaffen sind.`,
      sources: [{ kind: 'gegner', author: 'Sigmund Freud', work: 'Das Unbehagen in der Kultur', ref: 'Kap. V', year: '1930', quote: `Freud hält das Gebot der Nächsten- und erst recht der Feindesliebe für unerfüllbar und für eine Überforderung der menschlichen Natur; er verweist auf das „credo quia absurdum".`, status: 'paraphrase' }],
      followUps: [
        {
          id: 'liebe-ist-gefuehl',
          objection: `Wie soll man jemanden lieben, den man hasst? Liebe ist ein Gefühl – entweder man hat es, oder nicht.`,
          answer: `Die Liebe, die Jesus gebietet, ist nicht zuerst ein Gefühl, sondern ein Wille: das Gute für den anderen wollen und tun. Lewis rät: Grüble nicht, ob du deinen Nächsten „liebst" – handle so, als ob du ihn liebtest, und du wirst merken, dass die Liebe wächst. Man kann jemanden nicht mögen und trotzdem für ihn beten, ihm nichts Böses wünschen und ihm in der Not helfen. Gefühle folgen oft dem Handeln, nicht umgekehrt.`,
          followUps: [
            {
              id: 'dann-heuchelei',
              objection: `Dann ist Feindesliebe Heuchelei: Man tut nett, hasst aber innerlich weiter.`,
              answer: `Heuchelei ist, etwas vorzutäuschen, um andere zu täuschen. Feindesliebe beginnt dagegen oft mit dem ehrlichen Gebet: „Herr, ich kann ihn nicht lieben – verändere mein Herz." Jesus verbindet Feindesliebe ausdrücklich mit dem Gebet für die Feinde (Mt 5,44), und wer regelmäßig für jemanden betet, wird ihn nicht lange hassen können. Das ist keine Maske, sondern eine Therapie des Herzens.`,
              followUps: [
                {
                  id: 'wut-gesuender',
                  objection: `Psychologisch ist es gesünder, die Wut zuzulassen, statt sie wegzubeten.`,
                  objectionBy: 'Psychotherapeutische Kritik',
                  answer: `Die Bibel lässt die Wut zu – die Klagepsalmen schreien Gott den Schmerz entgegen, sogar Ps 137 mit seinen erschreckenden Rachewünschen. Der Unterschied ist: Man bringt die Wut zu Gott, statt sie am Feind auszuleben. Und die Forschung zeigt: Echte Vergebung – nicht Verdrängung – ist mit weniger Depression, Angst und Bitterkeit verbunden. Wer nicht vergibt, bleibt innerlich an den Täter gekettet.`,
                  voices: [
                    {
                      person: 'everett-worthington',
                      role: 'als empirischer Forscher',
                      text: `Worthington unterscheidet „entscheidende" Vergebung (der Entschluss, auf Rache zu verzichten) von „emotionaler" Vergebung (der allmähliche Ersatz negativer Gefühle durch Wohlwollen). Beide sind kein Verdrängen; der Schmerz wird zuerst ehrlich erinnert. Studien zu seinem Ansatz zeigen positive Effekte auf das seelische Wohlbefinden.`,
                      sources: [{ kind: 'wissenschaft', author: 'Everett L. Worthington Jr.', work: 'Forgiveness and Reconciliation: Theory and Application', year: '2006', status: 'paraphrase' }],
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
      id: 'unschuldige-ausgeliefert',
      objection: `Wer seine Feinde liebt, überlässt die Unschuldigen den Schlägern. Pazifismus gegenüber Mördern ist schlicht unmoralisch.`,
      objectionBy: 'Sam Harris',
      answer: `Da stimme ich dir zu – Pazifismus, der Unschuldige preisgibt, wäre unmoralisch. Aber Feindesliebe ist nicht Pazifismus. Sie verbietet die persönliche Rache, nicht den Schutz der Schwachen. Wer einen Mörder aufhält, kann ihn dabei lieben – also sein wahres Wohl wollen, nicht seinen Tod um des Todes willen. Die Bibel gibt der Obrigkeit ausdrücklich das Schwert gegen das Böse (Röm 13,4). Die Frage nach Krieg und Gewalt wird im Claim „Jesus verbietet jede Gewalt" ausführlich behandelt.`,
      sources: [{ kind: 'gegner', author: 'Sam Harris', work: 'The End of Faith', ref: 'Kap. 6', year: '2004', quote: `Pazifismus gelte als moralisch unangreifbar, sei aber in Wahrheit unmoralisch: die Bereitschaft, zu sterben und andere sterben zu lassen, wie es den Schlägern der Welt beliebt.`, status: 'paraphrase' }],
      followUps: [
        {
          id: 'lieben-und-bekaempfen',
          objection: `Wie kannst du jemanden lieben und gleichzeitig bekämpfen? Das ist ein Widerspruch.`,
          answer: `Eltern, die ein gewalttätiges Kind aufhalten, lieben es gerade dadurch. Ein Polizist, der einen Amokläufer stoppt, kann ihm dennoch nichts Böses wünschen und ihn nach der Festnahme menschlich behandeln. Augustinus schrieb, man könne auch mit einer „wohlwollenden Strenge" handeln, die das Wohl des Bestraften im Blick behält. Lewis meinte: Selbst wenn wir einen Feind bekämpfen müssen, sollen wir ihn so ansehen, wie wir uns selbst ansehen – wir hassen das Böse, nicht den Menschen.`,
          sources: [{ kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Brief 138 an Marcellinus', ref: '2,14', year: '412', quote: `Auch im Strafen und Kämpfen könne man eine wohlwollende Strenge (benigna asperitas) üben, die das Wohl dessen sucht, gegen den man vorgeht.`, status: 'paraphrase' }],
          followUps: [
            {
              id: 'bonhoeffer-attentat',
              objection: `Bonhoeffer war an der Verschwörung gegen Hitler beteiligt. Damit hat er doch selbst gezeigt, dass Feindesliebe in der Realität nicht funktioniert.`,
              answer: `Bonhoeffer hat sich diese Entscheidung nicht leicht gemacht und sie nie als heldenhaften Sieg der Gewalt dargestellt. In seiner *Ethik* spricht er von verantwortlichem Handeln, das Schuld auf sich nimmt, um andere zu retten. Wie direkt er an Attentatsplänen beteiligt war, ist unter Historikern umstritten. Seine Haltung zeigt: Feindesliebe bedeutet nicht, den Mörder anderer gewähren zu lassen – aber sie bedeutet, auch im Widerstand nicht zum Hasser zu werden und die eigene Schuldfähigkeit nicht zu leugnen.`,
              voices: [
                {
                  person: 'dietrich-bonhoeffer',
                  role: 'als Verfasser der Ethik',
                  text: `In der *Ethik* (posthum 1949) entfaltet Bonhoeffer, dass verantwortliches Handeln in einer gefallenen Welt bereit sein muss, Schuld zu übernehmen, statt sich durch Untätigkeit eine reine Weste zu bewahren. Er rechtfertigt Gewalt nicht als gut, sondern sieht sie in äußersten Situationen als schuldbeladene Notwendigkeit, die der Gnade Gottes anheimgestellt wird.`,
                  sources: [{ kind: 'fachliteratur', author: 'Dietrich Bonhoeffer', work: 'Ethik', ref: 'Abschnitt „Die Struktur des verantwortlichen Lebens"', year: '1949 (posthum)', status: 'paraphrase' }],
                },
              ],
              followUps: [
                {
                  id: 'machiavelli-schwach',
                  objection: `Machiavelli hatte recht: Das Christentum hat die Welt schwach gemacht und sie den Verbrechern überlassen.`,
                  objectionBy: 'Niccolò Machiavelli',
                  answer: `Die Geschichte bestätigt das nicht: Gewaltfreie christliche Bewegungen haben Regime gestürzt und Gesetze verändert – von der Bürgerrechtsbewegung bis zu den Friedensgebeten in Leipzig 1989. Die Politikwissenschaftlerinnen Erica Chenoweth und Maria Stephan fanden in einer Untersuchung von Kampagnen zwischen 1900 und 2006, dass gewaltfreier Widerstand etwa doppelt so oft erfolgreich war wie bewaffneter. Ehrlich ist auch: Christen waren oft nicht zu schwach, sondern zu gewalttätig – das ist die größere Schuld der Kirchengeschichte.`,
                  sources: [
                    { kind: 'gegner', author: 'Niccolò Machiavelli', work: 'Discorsi sopra la prima deca di Tito Livio', ref: 'II, 2', year: 'um 1517', quote: `Die christliche Lebensweise habe die Welt schwach gemacht und sie den Verbrechern zur Beute gegeben.`, status: 'paraphrase' },
                    { kind: 'wissenschaft', author: 'Erica Chenoweth; Maria J. Stephan', work: 'Why Civil Resistance Works: The Strategic Logic of Nonviolent Conflict', year: '2011', quote: `In der Auswertung von Widerstandskampagnen 1900–2006 waren gewaltfreie Kampagnen rund doppelt so häufig erfolgreich wie gewaltsame.`, status: 'paraphrase' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'ermutigt-taeter',
      objection: `Feindesliebe ermutigt Täter. Wer immer die andere Wange hinhält, wird immer wieder geschlagen – frag eine Frau in einer gewalttätigen Ehe.`,
      answer: `Mt 5,39 spricht von einem Schlag auf die rechte Wange – im damaligen Kontext eine Beleidigung mit dem Handrücken, keine lebensbedrohliche Gewalt. Jesus verbietet, Kränkung mit Kränkung zu vergelten; er verlangt nicht, dass jemand sich misshandeln lässt. Jesus selbst protestierte, als er geschlagen wurde (Joh 18,23), und Paulus berief sich auf seine Bürgerrechte (Apg 22,25). Eine Frau in einer gewalttätigen Ehe soll sich schützen und Hilfe holen – das ist mit Feindesliebe vereinbar und oft ihr Gebot.`,
      followUps: [
        {
          id: 'kirche-missbrauch-schweigen',
          objection: `Genau mit diesen Sprüchen haben Kirchen Missbrauchsopfer zum Schweigen gebracht: „Vergib und schweig."`,
          answer: `Das ist wahr und eine Schande. Vergebung wurde missbraucht, um Täter zu schützen – das widerspricht dem Evangelium fundamental. Jesus sagt über den, der „einen dieser Kleinen" zu Fall bringt, es wäre ihm besser, mit einem Mühlstein im Meer versenkt zu werden (Mt 18,6). Er lehrt, Unrecht offen anzusprechen (Mt 18,15–17), und die Obrigkeit ist zum Schutz vor Bösem eingesetzt (Röm 13,4). Vergebung ersetzt nie die Anzeige.`,
          followUps: [
            {
              id: 'vergeben-ohne-reue',
              objection: `Muss ich auch vergeben, wenn der Täter nicht einmal bereut?`,
              answer: `Hier hilft eine Unterscheidung: Die innere Vergebung – der Verzicht auf Rachewünsche und Hass – ist ein Weg, den du für dich gehen kannst, auch ohne Reue des Täters (Mk 11,25). Die Versöhnung, also eine wiederhergestellte Beziehung, setzt dagegen Umkehr voraus: „So er sich bessert, vergib ihm" (Lk 17,3). Du musst niemandem wieder vertrauen, der nicht umgekehrt ist. Und dieser Weg braucht Zeit – niemand darf dich drängen.`,
            },
          ],
        },
      ],
    },
    {
      id: 'feindesliebe-wirkungslos',
      objection: `In der Praxis bringt Feindesliebe nichts. Der IS hat die 21 Kopten trotzdem geköpft.`,
      answer: `Feindesliebe ist keine Technik, die garantiert, dass einem nichts geschieht – Jesus wurde trotz seiner Feindesliebe gekreuzigt. Sie ist Nachahmung Gottes, nicht Erfolgsstrategie. Und doch: Die 21 Märtyrer und ihre Familien, die öffentlich für die Mörder beteten, haben Millionen Menschen bewegt, auch Muslime. Der Hass hatte das Video gedreht; die Liebe hat die Deutung gewonnen.`,
      followUps: [
        {
          id: 'nur-anekdoten',
          objection: `Das sind bewegende Anekdoten, aber keine Belege.`,
          answer: `Es gibt auch systematische Daten: Die Studie von Chenoweth und Stephan zeigt die höhere Erfolgsquote gewaltfreier Bewegungen; die Vergebungsforschung (Worthington u. a.) belegt positive Effekte von Vergebung auf die psychische Gesundheit. Und historisch hat kein Rachefeldzug je dauerhaften Frieden gebracht – während Versöhnungsprozesse, etwa zwischen Deutschland und Frankreich nach 1945, maßgeblich von Christen getragen wurden.`,
          questionsBack: [`Welche Alternative schlägst du vor – und wo hat sie einen Kreislauf der Gewalt beendet?`],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Was ist für dich der Unterschied zwischen Gerechtigkeit und Rache?`,
    `Kennst du ein Beispiel, wo Hass einen Konflikt dauerhaft beendet hat?`,
    `Wenn Liebe nur ein Gefühl ist – wie erklärst du dann Menschen, die für ihre Peiniger beten?`,
    `Ist ein Mensch, der zurückschlagen könnte und es nicht tut, wirklich schwach?`,
    `Was bleibt den Opfern, deren Täter nie bestraft werden, wenn es kein letztes Gericht gibt?`,
  ],
  avoid: [
    `Feindesliebe mit Pazifismus oder Wehrlosigkeit gleichsetzen – das bestätigt den Einwand.`,
    `Opfern von Gewalt sagen, sie müssten beim Täter bleiben oder schweigen.`,
    `Die Schuld der Kirchengeschichte (Kreuzzüge, Pogrome) verschweigen, wenn es um christliche Gewaltlosigkeit geht.`,
    `Vergebung als sofortiges Gefühl verlangen – sie ist ein Weg.`,
  ],
  concessions: [
    `Nietzsche hat recht, dass es bei Christen Ressentiment und Schadenfreude gibt – Tertullians *De spectaculis* ist ein peinliches Beispiel.`,
    `Christen haben Feindesliebe oft gepredigt und Gewalt geübt; die Geschichte ist voller Verrat an Mt 5,44.`,
    `Feindesliebe garantiert keinen Erfolg; sie kann das Leben kosten, wie bei Jesus und den Märtyrern.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Martin Luther King Jr.', work: 'Strength to Love', year: '1963', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Dietrich Bonhoeffer', work: 'Nachfolge', year: '1937', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Miroslav Volf', work: 'Exclusion and Embrace', year: '1996', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Corrie ten Boom', work: 'The Hiding Place (Die Zuflucht)', year: '1971', status: 'paraphrase' },
    { kind: 'wissenschaft', author: 'Erica Chenoweth; Maria J. Stephan', work: 'Why Civil Resistance Works', year: '2011', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Feindesliebe', 'Bergpredigt', 'Vergebung', 'Nietzsche', 'Gewaltlosigkeit', 'Martin Luther King'],
  related: [
    'umwelt-tiere-krieg/pazifismus-gerechter-krieg',
    'vergebung-gerechtigkeit/vergebung-ungerecht',
    'religion-gewalt/religion-verursacht-kriege',
    'psychologie/schuldgefuehle-schaedlich',
    'sinn-existenz/gott-ist-tot-nietzsche',
  ],
};

export default claim;
