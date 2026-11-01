import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'heilung-garantiert',
  title: `„Heilung ist garantiert, wenn du genug glaubst."`,
  proponents: [
    { name: 'F. F. Bosworth', role: 'Heilungsevangelist (1877–1958)', work: 'Christ the Healer (1924)' },
    { name: 'Kenneth E. Hagin', role: 'Word-of-Faith-Lehrer', work: 'Lehre von der Heilung im Sühnopfer' },
    { name: 'Benny Hinn', role: 'Heilungsevangelist', work: 'Heilungskreuzzüge' },
    { name: 'Bill Johnson', role: 'Pastor, Bethel Church Redding', work: 'When Heaven Invades Earth (2003)' },
  ],
  steelman: `„Durch seine Wunden sind wir geheilt" (Jes 53,5). Matthäus bestätigt ausdrücklich, dass sich dieser Vers in Jesu **körperlichen** Heilungen erfüllt: „Er hat unsre Schwachheiten auf sich genommen, und unsre Seuchen hat er getragen" (Mt 8,17). Heilung ist also Teil des Sühnopfers – genauso wie die Vergebung. Jesus hat **alle** geheilt, die zu ihm kamen (Mt 8,16; 12,15); nie hat er einem Kranken gesagt: „Es ist Gottes Wille, dass du krank bleibst." Wo er nicht heilen konnte, lag es am Unglauben (Mk 6,5–6). „Das Gebet des Glaubens wird dem Kranken helfen" (Jak 5,15). Jesus sagt: „Alles, was ihr bittet in eurem Gebet, glaubt nur, dass ihr’s empfangt, so wird’s euch werden" (Mk 11,24). Gott ist derselbe gestern, heute und in Ewigkeit (Hebr 13,8). Wenn Christen heute krank bleiben, liegt das nicht an Gott, sondern an mangelndem Glauben, an Sünde oder an falscher Lehre, die Krankheit als „Gottes Willen" verklärt.`,
  biblical: {
    summary: `Die Schrift bezeugt, dass Christus heilt – damals und heute – und dass Gebet für Kranke geboten ist (Jak 5,14–15). Sie lehrt aber **keine Heilungsgarantie** in diesem Leben. Paulus wurde von seinem „Pfahl im Fleisch" nicht befreit (2 Kor 12,7–10), Timotheus hatte ein chronisches Magenleiden und sollte Wein als Medizin nehmen (1 Tim 5,23), Trophimus ließ Paulus krank zurück (2 Tim 4,20), Epaphroditus war „todkrank" (Phil 2,27). Die vollständige Heilung des Leibes steht noch aus: Wir „warten auf unseres Leibes Erlösung" (Röm 8,23). Jesus wies die Gleichung „Krankheit = Schuld" zurück (Joh 9,3). Und er heilte auch Menschen ohne Glauben (Joh 5,13; Lk 22,51).`,
    detail: `**Jes 53,5 und 1 Petr 2,24:** Petrus zitiert Jes 53 im Zusammenhang der **Sünde**: „welcher unsre Sünden selbst hinaufgetragen hat … auf dass wir, der Sünde abgestorben, der Gerechtigkeit leben; durch welches Wunden ihr seid heil geworden" (1 Petr 2,24). Die Heilung ist hier zuerst Heilung von der Sünde.

**Mt 8,17:** Matthäus wendet Jes 53,4 tatsächlich auf körperliche Heilungen an – das muss man zugeben. Aber er sagt, dass sich das Wort in Jesu irdischem Wirken **erfüllte**. Die Heilungen sind Zeichen des anbrechenden Reiches; die volle Erfüllung kommt mit der Auferstehung, wenn „der Tod nicht mehr sein wird, noch Leid noch Geschrei noch Schmerz" (Offb 21,4).

**Mk 6,5–6:** In Nazareth konnte Jesus „nicht eine einzige Tat tun" wegen ihres Unglaubens – aber er heilte trotzdem einige. Es geht um eine Stadt, die ihn ablehnte, nicht um eine Regel, dass jede ausbleibende Heilung Unglaube des Kranken beweist. Lazarus wurde auferweckt, obwohl er tot war und gar nicht glauben konnte.

**Jak 5,14–16:** Gerade der Lieblingsvers der Heilungsbewegung beschreibt einen kirchlichen Ritus: Die **Ältesten** (Presbyter) der Gemeinde beten über dem Kranken und **salben ihn mit Öl**; es geht um Heilung **und** Sündenvergebung. Das ist die biblische Grundlage des koptischen Sakraments der Krankensalbung.`,
    sources: [
      { kind: 'bibel', work: '1. Petrus', ref: '2,24', quote: `… welcher unsre Sünden selbst hinaufgetragen hat an seinem Leibe auf das Holz, auf daß wir, der Sünde abgestorben, der Gerechtigkeit leben; durch welches Wunden ihr seid heil geworden.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '8,17', quote: `… auf daß erfüllet würde, was gesagt ist durch den Propheten Jesaja, der da spricht: »Er hat unsre Schwachheiten auf sich genommen, und unsre Seuchen hat er getragen.«`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Korinther', ref: '12,7–9', quote: `Und auf daß ich mich nicht der hohen Offenbarung überhebe, ist mir gegeben ein Pfahl ins Fleisch … Dafür ich dreimal zum HERRN gefleht habe, daß er von mir wiche. Und er hat zu mir gesagt: Laß dir an meiner Gnade genügen; denn meine Kraft ist in den Schwachen mächtig.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Timotheus', ref: '5,23', quote: `Trinke nicht mehr Wasser, sondern brauche ein wenig Wein um deines Magens willen und weil du oft krank bist.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Timotheus', ref: '4,20', quote: `Erastus blieb zu Korinth; Trophimus aber ließ ich zu Milet krank.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Römer', ref: '8,23', quote: `Nicht allein aber sie, sondern auch wir selbst, die wir haben des Geistes Erstlinge, sehnen uns auch bei uns selbst nach der Kindschaft und warten auf unsers Leibes Erlösung.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jakobus', ref: '5,14–15', quote: `Ist jemand krank, der rufe zu sich die Ältesten von der Gemeinde, daß sie über ihm beten und salben mit Öl in dem Namen des HERRN. Und das Gebet des Glaubens wird dem Kranken helfen, und der HERR wird ihn aufrichten; und so er hat Sünden getan, werden sie ihm vergeben sein.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '9,2–3', quote: `Meister, wer hat gesündigt, dieser oder seine Eltern, daß er ist blind geboren? Jesus antwortete: Es hat weder dieser gesündigt noch seine Eltern; sondern daß die Werke Gottes offenbar würden an ihm.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche glaubt fest an Heilung: Sie feiert das Sakrament der **Krankensalbung** (Jak 5,14–15), betet in jeder Liturgie für die Kranken, und ihre Geschichte ist reich an Heilungswundern durch Heilige. Zugleich ehrt sie den **Arzt** und die Medizin als Gabe Gottes (Sir 38 – ein deuterokanonisches Buch, das zur koptischen Bibel gehört) und verehrt heilige Ärzte wie die alexandrinischen Märtyrer **Kyros und Johannes**. Sie lehrt, dass Gott immer hört, aber nicht immer so antwortet, wie wir es erwarten; Krankheit kann Prüfung, Läuterung und Teilnahme am Kreuz sein, und die endgültige Heilung ist die Auferstehung.`,
    detail: `**Krankensalbung:** Die koptische Kirche feiert sie mit sieben Gebeten, Lesungen und Salbungen; sie dient der Heilung von Leib **und** Seele und ist mit Buße und Sündenvergebung verbunden – ganz wie Jak 5,15–16 es beschreibt. Niemand wird danach beschuldigt, zu wenig geglaubt zu haben, wenn die körperliche Heilung ausbleibt.

**Sirach 38:** „Ehre den Arzt … denn der Herr hat ihn geschaffen"; „Der Herr lässt die Arznei aus der Erde wachsen, und ein Vernünftiger verachtet sie nicht"; der Kranke soll beten, Buße tun **und** den Arzt rufen (Sir 38,1–15). Glaube und Medizin sind keine Gegensätze.

**Heilige Ärzte:** Die Märtyrer Kyros und Johannes aus Alexandrien heilten nach der Überlieferung umsonst (als „Anargyroi", die kein Geld nahmen) und mit Gebet. Der Evangelist Lukas war Arzt (Kol 4,14).

**Leiden in der koptischen Spiritualität:** Die Wüstenväter sahen Krankheit oft als Gelegenheit zur Demut und Geduld. Der heilige Paulus wurde in der Schwachheit stark (2 Kor 12,10). Krankheit ist ein Übel, gegen das wir beten und kämpfen – aber sie kann durch Gottes Gnade zum Weg der Heiligung werden.`,
    sources: [
      { kind: 'bibel', work: 'Jesus Sirach', ref: '38,1.4', quote: `Ehre den Arzt mit gebührlicher Verehrung, daß du ihn habest zur Not; denn der HERR hat ihn geschaffen. … Der HERR läßt die Arznei aus der Erde wachsen, und ein Vernünftiger verachtet sie nicht.`, translation: 'Luther 1912 (sinngemäß)', status: 'paraphrase', note: 'Deuterokanonisches Buch, in der koptischen Bibel enthalten.' },
      { kind: 'bibel', work: 'Kolosser', ref: '4,14', quote: `Es grüßt euch Lukas, der Arzt, der Geliebte.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'liturgie', work: 'Ritus der Krankensalbung (Sakrament des Öllämpchens, „Qandil")', status: 'paraphrase', note: 'Sieben Gebetsabschnitte mit Lesungen; Heilung von Leib und Seele, Vergebung der Sünden.' },
    ],
  },
  quickAnswer: `Wir glauben, dass Gott heilt – deshalb salben wir Kranke mit Öl und beten für sie, wie Jakobus es lehrt (Jak 5,14). Aber die Bibel garantiert keine Heilung in diesem Leben: Paulus behielt seinen „Pfahl im Fleisch", Timotheus war oft krank, Trophimus blieb krank in Milet (2 Kor 12,7–9; 1 Tim 5,23; 2 Tim 4,20). Hatten sie zu wenig Glauben? Die volle Heilung kommt mit der Auferstehung (Röm 8,23).`,
  keyPoints: [
    `**Gott heilt heute** – die Kirche betet um Heilung und feiert die Krankensalbung (Jak 5,14–15).`,
    `**Keine Garantie:** Paulus (2 Kor 12,7–9), Timotheus (1 Tim 5,23), Trophimus (2 Tim 4,20), Epaphroditus (Phil 2,27) – alle gläubig, alle zeitweise oder dauerhaft krank.`,
    `**Jes 53 / 1 Petr 2,24** handelt zuerst von der Sünde; die volle leibliche Heilung gehört zur Auferstehung (Röm 8,23; Offb 21,4).`,
    `**Krankheit ist nicht automatisch Unglaube oder Sünde** (Joh 9,3); Jesus heilte auch Menschen ohne Glauben (Joh 5,13; Lk 22,51).`,
    `**Medizin ist Gottes Gabe:** Sir 38; Lukas der Arzt; Paulus’ Rat an Timotheus.`,
    `**Die Lehre von der garantierten Heilung schadet:** Sie lädt Kranken eine zweite Last auf – die Schuld, nicht genug geglaubt zu haben.`,
  ],
  voices: [
    {
      person: 'paulus',
      role: 'als Apostel mit einem Pfahl im Fleisch',
      text: `Paulus wirkte selbst Heilungen (Apg 14,8–10; 19,11–12; 28,8) – und doch nahm Gott seinen eigenen „Pfahl im Fleisch" trotz dreimaligen Flehens nicht weg. Die Antwort war nicht „Glaube mehr", sondern: „Lass dir an meiner Gnade genügen." Er schrieb an die Galater, dass er ihnen „in Schwachheit des Fleisches" das Evangelium gepredigt habe (Gal 4,13). Sein Leben zeigt: Derselbe Gott, der heilt, kann aus guten Gründen nicht heilen.`,
      sources: [{ kind: 'bibel', work: 'Galater', ref: '4,13', quote: `Denn ihr wisset, daß ich euch in Schwachheit nach dem Fleisch das Evangelium gepredigt habe zum ersten Mal.`, translation: 'Luther 1912', status: 'verbatim' }],
    },
    {
      person: 'keener',
      role: 'als Neutestamentler und Wunderforscher',
      text: `Keener hat in seinem zweibändigen Werk Hunderte gut bezeugter Heilungsberichte aus aller Welt gesammelt und verteidigt die Glaubwürdigkeit von Wundern gegen die Skepsis Humes. Zugleich betont er, dass das Neue Testament keine Formel kennt, mit der man Gott zur Heilung zwingen könnte: Heilungen sind Zeichen des kommenden Reiches, Gaben der Gnade – nicht Belohnungen für eine bestimmte Glaubensmenge. Er weiß aus seiner eigenen Familiengeschichte von Wundern und von Gebeten, die nicht so beantwortet wurden, wie man hoffte.`,
      sources: [{ kind: 'fachliteratur', author: 'Craig S. Keener', work: 'Miracles: The Credibility of the New Testament Accounts', year: '2011', status: 'paraphrase' }],
    },
    {
      person: 'basilius',
      role: 'als Kirchenvater und Gründer eines Krankenhauses',
      text: `Basilius gründete in Caesarea eine große Einrichtung für Kranke, Arme und Fremde (die „Basilias"), in der Ärzte arbeiteten. In seinen Mönchsregeln erklärt er, die ärztliche Kunst sei von Gott geschenkt; man solle sie nicht verachten, aber auch nicht alle Hoffnung auf sie setzen. Manche Krankheiten schickt Gott zur Prüfung oder Läuterung – dann soll der Kranke sie mit Geduld tragen. Gebet und Medizin schließen sich nicht aus.`,
      sources: [{ kind: 'kirchenvater', author: 'Basilius der Große', work: 'Regulae fusius tractatae (Ausführliche Regeln)', ref: 'Frage 55', status: 'paraphrase' }],
    },
    {
      person: 'shenouda-iii',
      role: 'als Papst und Seelsorger',
      text: `Papst Schenuda III. litt in seinen letzten Lebensjahren an schweren Krankheiten und ließ sich ärztlich behandeln, auch im Ausland – ohne dass jemand in der koptischen Kirche dies als Mangel an Glauben verstanden hätte. In seinen Predigten über Prüfungen und Leiden lehrte er, dass Gott in jeder Lage Gutes wirken kann und dass der Christ in Krankheit Geduld und Dankbarkeit lernt.`,
      sources: [{ kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Predigten und Schriften über Prüfungen und Leiden', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'jesus-heilte-alle',
      objection: `„Jesus hat **alle** geheilt, die zu ihm kamen (Mt 8,16). Nie hat er jemanden krank weggeschickt. Und Jesus ist derselbe gestern, heute und in Ewigkeit (Hebr 13,8)."`,
      objectionBy: 'Bill Johnson',
      answer: `Jesus heilte viele – aber nicht alle Kranken seiner Zeit. Am Teich Betesda lagen „viele Kranke" (Joh 5,3), und er heilte einen einzigen. Christus ist derselbe, aber er handelt nicht immer gleich: Er weckte Lazarus auf, aber nicht jeden Toten in Judäa; er befreite Petrus aus dem Gefängnis (Apg 12), aber Jakobus wurde hingerichtet (Apg 12,2). Hebr 13,8 spricht von seiner Treue, nicht von einer Heilungsgarantie.`,
      sources: [
        { kind: 'bibel', work: 'Johannes', ref: '5,3–5', quote: `In den Hallen lagen viele Kranke, Blinde, Lahme, Dürre … Es war aber ein Mensch daselbst, achtunddreißig Jahre krank gelegen.`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'bibel', work: 'Apostelgeschichte', ref: '12,2', quote: `Er tötete aber Jakobus, den Bruder des Johannes, mit dem Schwert.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      questionsBack: [`Warum heilte Jesus am Teich Betesda nur einen von vielen Kranken?`, `Hatte Jakobus weniger Glauben als Petrus?`],
      followUps: [
        {
          id: 'nazareth-unglaube',
          objection: `„Aber in Nazareth ‚konnte er nicht eine einzige Tat tun' wegen ihres Unglaubens (Mk 6,5–6). Unglaube blockiert Heilung – das steht da!"`,
          objectionBy: 'Kenneth Hagin',
          answer: `Es steht da – und es ist ernst: Unglaube kann Gottes Wirken verhindern. Aber Nazareth lehnte Jesus als Person ab („Ist er nicht der Zimmermann?"); es ging nicht um Kranke, die ihm vertrauten und deren Glaube „nicht ausreichte". Und Markus fügt hinzu, dass er dennoch „wenige Sieche" heilte. Aus einem Bericht über eine ablehnende Stadt eine Regel zu machen, dass jeder nicht geheilte Kranke zu wenig glaubt, geht weit über den Text hinaus.`,
          followUps: [
            {
              id: 'paulus-pfahl-war-keine-krankheit',
              objection: `„Der Pfahl im Fleisch war keine Krankheit, sondern ein Engel Satans, also Verfolgung (2 Kor 12,7). Und Timotheus’ Magen kam vom schlechten Wasser."`,
              objectionBy: 'Word-of-Faith-Lehrer',
              answer: `Ob der Pfahl eine Krankheit, ein Augenleiden (vgl. Gal 4,13–15) oder Verfolgung war, ist offen – aber Paulus nennt ihn „Schwachheit" und Gott nahm ihn trotz Gebet nicht weg. Bei Timotheus spricht Paulus ausdrücklich von „häufigen Krankheiten" (1 Tim 5,23) und empfiehlt ein Heilmittel statt einer Glaubensformel. Und Trophimus ließ er „krank" zurück (2 Tim 4,20) – derselbe Paulus, durch dessen Schweißtücher Kranke gesund wurden (Apg 19,12).`,
              sources: [
                { kind: 'bibel', work: 'Apostelgeschichte', ref: '19,11–12', quote: `Und Gott wirkte nicht geringe Taten durch die Hände des Paulus, also daß sie auch von seiner Haut die Schweißtüchlein und Binden über die Kranken hielten, und die Seuchen von ihnen wichen.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              questionsBack: [`Warum hat Paulus, durch den Gott so viele heilte, Trophimus nicht geheilt?`],
            },
          ],
        },
      ],
    },
    {
      id: 'heilung-im-suehnopfer',
      objection: `„Heilung ist im Sühnopfer enthalten, genau wie Vergebung (Jes 53,4–5; Mt 8,17). Wenn du für Vergebung nicht zweifelst, warum dann für Heilung?"`,
      objectionBy: 'F. F. Bosworth',
      answer: `Ja, Christi Werk umfasst auch die Heilung des Leibes – aber nicht alles auf einmal. Auch der Tod ist im Kreuz besiegt, und trotzdem sterben Christen noch. Die Vergebung empfangen wir jetzt; die Erlösung des Leibes erwarten wir bei der Auferstehung (Röm 8,23; 1 Kor 15,42–44). Heilungen heute sind Vorschuss und Zeichen dieser kommenden Vollendung – kostbare Gaben, aber keine Rechtsansprüche.`,
      followUps: [
        {
          id: 'dann-sterben-christen-unnoetig',
          objection: `„Dann gibst du ja zu, dass Heilung zum Sühnopfer gehört. Also müssen wir sie im Glauben jetzt in Anspruch nehmen!"`,
          objectionBy: 'Heilungsprediger',
          answer: `Dann müsstest du auch Unsterblichkeit jetzt „in Anspruch nehmen" – denn auch der Sieg über den Tod gehört zum Kreuz. Kein Heilungsprediger ist bisher davon ausgenommen worden zu sterben. Die Schrift unterscheidet zwischen dem, was schon geschenkt ist, und dem, was noch aussteht. Wer diese Spannung leugnet, muss am Ende jedem sterbenden Christen Unglauben vorwerfen.`,
          questionsBack: [`Werden die Heilungsprediger, die du kennst, eines Tages sterben? War dann ihr Glaube zu klein?`],
        },
      ],
    },
    {
      id: 'medizin-ist-unglaube',
      objection: `„Wer zum Arzt geht, zeigt, dass er Gott nicht vertraut. König Asa ‚suchte nicht den HERRN, sondern die Ärzte' (2 Chr 16,12) – und starb."`,
      objectionBy: 'Radikaler Heilungsprediger',
      answer: `Asa wird getadelt, weil er **nur** die Ärzte und **nicht** den Herrn suchte – nicht, weil er Ärzte aufsuchte. Die Schrift ehrt den Arzt (Sir 38,1–4), Lukas war Arzt (Kol 4,14), Paulus verordnete Timotheus ein Heilmittel (1 Tim 5,23), und Jesus selbst sagt: „Die Starken bedürfen des Arztes nicht, sondern die Kranken" (Mt 9,12). Die koptische Kirche betet **und** schickt zum Arzt.`,
      sources: [
        { kind: 'bibel', work: '2. Chronik', ref: '16,12', quote: `Und Asa ward krank an seinen Füßen im neununddreißigsten Jahr seines Königreichs, und seine Krankheit nahm sehr zu; und suchte auch in seiner Krankheit den HERRN nicht, sondern die Ärzte.`, translation: 'Luther 1912 (sinngemäß)', status: 'paraphrase' },
        { kind: 'bibel', work: 'Matthäus', ref: '9,12', quote: `Die Starken bedürfen des Arztes nicht, sondern die Kranken.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'pastoraler-schaden',
          objection: `„Du redest Krankheit schön. Gott ist gut – Krankheit kommt vom Teufel. Ich werde nie sagen, dass Krankheit Gottes Wille ist."`,
          objectionBy: 'Bill Johnson',
          answer: `Krankheit ist ein Übel, Folge des Falls, und wir bekämpfen sie mit Gebet und Medizin – darin sind wir einig. Aber wenn du lehrst, dass jede Heilung kommen *muss*, wenn der Glaube stark genug ist, dann sagst du einer Mutter am Sterbebett ihres Kindes, dass sie schuld ist. Es gibt tragische Fälle, in denen Menschen auf Medizin verzichteten und starben. Die Wahrheit ist barmherziger: Gott ist gut, auch wenn er nicht heilt, und er ist im Leiden gegenwärtig (Ps 23,4).`,
          sources: [
            { kind: 'bibel', work: 'Psalm', ref: '23,4', quote: `Und ob ich schon wanderte im finstern Tal, fürchte ich kein Unglück; denn du bist bei mir, dein Stecken und Stab trösten mich.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
          questionsBack: [`Was sagst du einem Menschen, der treu geglaubt und gebetet hat und trotzdem nicht geheilt wurde?`],
        },
      ],
    },
    {
      id: 'jak-5-15-gebet-des-glaubens',
      objection: `„Jak 5,15: ‚Das Gebet des Glaubens wird dem Kranken helfen, und der Herr wird ihn aufrichten.' Da steht ‚wird', nicht ‚kann'. Das ist eine Verheißung ohne Bedingung."`,
      objectionBy: 'Kenneth E. Hagin',
      answer: `Wir nehmen Jak 5 so ernst, dass die koptische Kirche daraus ein Sakrament feiert: die **Krankensalbung** durch die Priester (das „Gebet der Lampe" mit sieben Gebeten). Jakobus spricht vom Gebet der **Ältesten**, nicht vom Glaubensmaß des Kranken. „Aufrichten" (*egerei*) und „helfen/retten" (*sōsei*) umfassen Leib und Seele – im selben Satz: „hat er Sünden getan, so werden sie ihm vergeben sein". Die letzte Erfüllung ist die Auferstehung, für die Jakobus dasselbe Verb gebraucht wie die Evangelien für Christus.`,
      detail: `Derselbe Jakobus spricht im gleichen Kapitel von der Geduld der Propheten und Hiobs im Leiden (Jak 5,7–11). Er kennt also Leiden, das nicht sofort weggenommen wird. Jak 5,15 ist eine wirkliche Verheißung: Gott antwortet immer auf das Gebet der Kirche – mit Heilung, mit Kraft im Leiden, mit Vergebung oder mit einem seligen Heimgang.`,
      sources: [
        { kind: 'bibel', work: 'Jakobus', ref: '5,14–15', quote: `Ist jemand krank, der rufe zu sich die Ältesten von der Gemeinde, dass sie über ihm beten und salben ihn mit Öl in dem Namen des Herrn. Und das Gebet des Glaubens wird dem Kranken helfen, und der Herr wird ihn aufrichten; und so er hat Sünden getan, werden sie ihm vergeben sein.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'trophimus-krank-zurueckgelassen',
          objection: `„Wenn ihr ein Heilungssakrament habt – warum bleiben dann die meisten Gesalbten krank? Eure niedrige Erwartung ist das Problem. Wir dürfen uns nie mit weniger zufriedengeben."`,
          objectionBy: 'Bill Johnson',
          answer: `Wir erwarten Heilung und erleben sie – die koptische Kirche ist voller Heilungsberichte. Aber das Neue Testament zeigt, dass selbst die Apostel nicht jeden geheilt sahen: Paulus schreibt: „Trophimus ließ ich zu Milet krank" (2 Tim 4,20); Epaphroditus war „todkrank" und Gott erbarmte sich erst nach langer Zeit (Phil 2,27); Timotheus soll wegen seines Magens etwas Wein nehmen (1 Tim 5,23). Wer das Ergebnis zum Maßstab des Glaubens macht, müsste Paulus Kleinglauben vorwerfen.`,
          sources: [
            { kind: 'bibel', work: '2. Timotheus', ref: '4,20', quote: `Trophimus aber ließ ich zu Milet krank.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
          followUps: [
            {
              id: 'trophimus-hatte-keinen-glauben',
              objection: `„Vielleicht hatte Trophimus eben nicht genug Glauben."`,
              objectionBy: 'Wort-des-Glaubens-Lehrer',
              answer: `Der Text sagt davon kein Wort – diese Schuldzuweisung wird erfunden, um das System zu retten. Genau diese Logik weist Jesus beim Blindgeborenen zurück: „Es hat weder dieser gesündigt noch seine Eltern" (Joh 9,3). Und Hiobs Freunde, die sein Leiden mit seiner Schuld erklärten, wurden von Gott getadelt: „Ihr habt nicht recht von mir geredet wie mein Knecht Hiob" (Hi 42,7).`,
              followUps: [
                {
                  id: 'hiob-durch-furcht',
                  objection: `„Hiob hat sein Unglück selbst angezogen – durch Furcht: ‚Was ich gefürchtet habe, ist über mich gekommen' (Hi 3,25). Negatives Bekenntnis öffnet dem Satan die Tür."`,
                  objectionBy: 'Kenneth Copeland',
                  answer: `Gott selbst widerspricht dieser Deutung: Er nennt Hiob „schlecht und recht, gottesfürchtig und meidet das Böse" (Hi 1,8) und sagt nach dem ersten Unglück zum Satan: „Du hast mich bewogen, dass ich ihn ohne Ursache verderbt habe" (2,3). „Ohne Ursache" – das heißt: nicht wegen Hiobs Furcht oder Schuld. Hi 3,25 ist die Klage eines Leidenden, keine Erklärung für die Ursache des Leidens.`,
                  detail: `Wer Hiob die Schuld gibt, stellt sich auf die Seite der Freunde, die Gott am Ende zurechtweist. Das Buch Hiob ist die biblische Antwort auf jede Theologie, die Leiden automatisch als Folge von Sünde oder Unglauben deutet. Pastoral heißt das: Einem Kranken nie sagen, er sei selbst schuld, weil er nicht genug geglaubt oder „negativ bekannt" habe.`,
                  sources: [
                    { kind: 'bibel', work: 'Hiob', ref: '2,3', quote: `Hast du nicht achtgehabt auf meinen Knecht Hiob? … und hält noch fest an seiner Frömmigkeit; du aber hast mich bewogen, dass ich ihn ohne Ursache verderbt habe.`, translation: 'Luther 1912', status: 'paraphrase' },
                    { kind: 'bibel', work: 'Hiob', ref: '42,7', quote: `Ihr habt nicht recht von mir geredet wie mein Knecht Hiob.`, translation: 'Luther 1912', status: 'verbatim' },
                  ],
                  questionsBack: [`Wenn Gott sagt, er habe Hiob „ohne Ursache" leiden lassen – woher nimmst du dann die Ursache „Furcht"?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'krankheit-immer-vom-teufel',
      objection: `„Apg 10,38: Jesus ‚machte gesund alle, die vom Teufel überwältigt waren'. Krankheit ist immer Werk des Teufels. Jesus hat nie gesagt, dass eine Krankheit Gottes Wille sei."`,
      objectionBy: 'Bill Johnson',
      answer: `Manche Krankheit hat dämonische Ursachen (Lk 13,16) – aber nicht jede. Über den Blindgeborenen sagt Jesus: „… sondern dass die Werke Gottes offenbar würden an ihm" (Joh 9,3), und über Lazarus: „Die Krankheit ist nicht zum Tode, sondern zur Ehre Gottes" (Joh 11,4). Paulus predigte den Galatern zuerst „in Schwachheit des Fleisches" (Gal 4,13). Gott verursacht das Böse nicht, aber er lässt es zu und kann es zum Guten wenden (Röm 8,28).`,
      detail: `Die Väter unterscheiden zwischen Gottes eigentlichem Willen (Wohlgefallen) und seiner Zulassung (*synchōrēsis*). Krankheit ist nicht Gottes ursprünglicher Plan, sondern Folge des Falls; dennoch kann Gott sie zur Läuterung, zur Demut oder zum Zeugnis gebrauchen. Diese Unterscheidung bewahrt vor zwei Fehlern: Gott zum Urheber des Leids zu machen – oder zu behaupten, alles Leid sei bloß Folge mangelnden Glaubens.`,
      sources: [
        { kind: 'bibel', work: 'Johannes', ref: '11,4', quote: `Die Krankheit ist nicht zum Tode, sondern zur Ehre Gottes, dass der Sohn Gottes dadurch geehrt werde.`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'kirchenvater', author: 'Johannes von Damaskus', work: 'Darlegung des orthodoxen Glaubens (Expositio fidei)', ref: 'II,29', year: '8. Jh.', status: 'paraphrase', note: 'Unterscheidung von Gottes vorausgehendem Willen und seiner Zulassung (Prüfung, Läuterung).' },
      ],
      followUps: [
        {
          id: 'dann-gegen-gottes-willen-beten',
          objection: `„Wenn Gott Krankheit gebrauchen kann, dann kämpft man ja gegen Gottes Willen, wenn man um Heilung betet. Das ist absurd."`,
          objectionBy: 'Bill Johnson',
          answer: `Nicht absurd, sondern biblisch: Paulus bat dreimal um Befreiung von seinem Pfahl – und erhielt die Antwort: „Lass dir an meiner Gnade genügen" (2 Kor 12,8–9). Jesus betete in Gethsemane: „Ist's möglich, so gehe dieser Kelch von mir; doch nicht wie ich will, sondern wie du willst" (Mt 26,39). Wir beten mutig um Heilung und vertrauen Gott die Antwort an. Das ist nicht Kampf gegen Gott, sondern Gebet zu ihm.`,
          followUps: [
            {
              id: 'wenn-es-dein-wille-ist-toetet-glauben',
              objection: `„‚Wenn es dein Wille ist' zerstört den Glauben. Jesus betete das nur einmal – für das Kreuz. Für Heilung kennen wir Gottes Willen."`,
              objectionBy: 'Wort-des-Glaubens-Lehrer',
              answer: `Die Apostel lehren die Kirche, genau so zu beten: „Und das ist die Freudigkeit, die wir haben zu ihm, dass, so wir etwas bitten **nach seinem Willen**, so hört er uns" (1 Joh 5,14). Jakobus mahnt: „Ihr solltet sagen: So der Herr will und wir leben" (Jak 4,15). Sich Gottes Willen zu unterwerfen, ist nicht das Gegenteil des Glaubens, sondern sein Herz – das Vaterunser beginnt damit: „Dein Wille geschehe."`,
              sources: [
                { kind: 'bibel', work: '1. Johannes', ref: '5,14', quote: `Und das ist die Freudigkeit, die wir haben zu ihm, dass, so wir etwas bitten nach seinem Willen, so hört er uns.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              followUps: [
                {
                  id: 'warum-dann-erwartungsvoll-beten',
                  objection: `„Wozu dann noch erwartungsvoll beten? Ihr senkt nur die Erwartung und nennt es Demut."`,
                  objectionBy: 'Charismatischer Gebetsleiter',
                  answer: `Die Heiligen der Kirche beteten mit brennender Erwartung – und starben doch selbst an Krankheiten. Papst Kyrillos VI., dem unzählige Heilungen zugeschrieben werden, war in seinen letzten Lebensjahren selbst krank und starb 1971; Papst Schenuda III. trug jahrelang schwere Krankheit. Erwartungsvoll beten heißt: Gottes Güte erwarten, nicht ein bestimmtes Ergebnis vorschreiben. Für den Christen ist auch das Sterben im Glauben ein Sieg: „Christus ist mein Leben, und Sterben ist mein Gewinn" (Phil 1,21).`,
                  voices: [
                    {
                      person: 'kyrillos-vi',
                      role: 'als Beter und Wundertäter des 20. Jahrhunderts',
                      text: `Papst Kyrillos VI. feierte fast täglich die Liturgie und wurde von Tausenden um Gebet für Kranke gebeten; viele Heilungen werden ihm zugeschrieben. Zugleich lebte er selbst in Krankheit und Schwachheit, ohne dies als Mangel an Glauben zu deuten. Sein Leben zeigt die koptische Haltung: kühnes Vertrauen auf Gottes Wirken und demütige Annahme seines Willens.`,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Warum ließ Paulus Trophimus krank in Milet zurück (2 Tim 4,20)?`,
    `Warum empfahl Paulus Timotheus Wein für seinen Magen statt eines Glaubensgebets?`,
    `Wenn Heilung garantiert ist – warum sterben auch Heilungsprediger an Krankheiten?`,
    `Wer ist nach Jak 5,14 zu rufen, wenn jemand krank ist – und was sollen sie tun?`,
  ],
  avoid: [
    `Nicht leugnen, dass Gott heute heilt. Das widerspricht der koptischen Tradition und den Erfahrungen vieler Gläubiger.`,
    `Nicht jede Heilungsveranstaltung pauschal als Betrug abtun.`,
    `Nicht ins Fatalistische kippen („Krankheit ist immer Gottes Wille, beten bringt nichts"). Wir sollen für die Kranken beten.`,
  ],
  concessions: [
    `Mt 8,17 wendet Jes 53 tatsächlich auf körperliche Heilungen an; Christi Erlösungswerk umfasst auch den Leib.`,
    `Unglaube kann Gottes Wirken hindern (Mk 6,5–6); die Heilungsbewegung erinnert zu Recht an die Kraft des Gebets.`,
    `Viele traditionelle Christen beten zu wenig und zu zaghaft für Kranke.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Craig S. Keener', work: 'Miracles: The Credibility of the New Testament Accounts', year: '2011', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Joni Eareckson Tada', work: 'A Place of Healing: Wrestling with the Mysteries of Suffering, Pain, and God’s Sovereignty', year: '2010', status: 'paraphrase', note: 'Seit 1967 querschnittsgelähmt; schildert ehrlich ihre Erfahrungen mit Heilungsgottesdiensten.' },
    { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Ausführliche Regeln, Frage 55 (über die Heilkunst)', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Heilung', 'Krankensalbung', 'Leid', 'Glaube', 'Medizin', 'Pfingstbewegung'],
  related: ['pfingstbewegung/wohlstandsevangelium', 'sakramente/myron-krankensalbung-erfunden', 'theodizee', 'medizin-wunder'],
};

export default claim;
