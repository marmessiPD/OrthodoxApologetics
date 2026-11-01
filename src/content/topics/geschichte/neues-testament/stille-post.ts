import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'stille-post',
  title: `„Mündliche Überlieferung ist wie Stille Post – nach Jahrzehnten kommt etwas ganz anderes heraus."`,
  proponents: [
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, UNC', work: 'Jesus Before the Gospels: How the Earliest Christians Remembered, Changed, and Invented Their Stories of the Savior (2016)' },
    { name: 'Rudolf Bultmann', role: 'Neutestamentler, Begründer der Formgeschichte', work: 'Die Geschichte der synoptischen Tradition (1921)' },
    { name: 'Theodore J. Weeden', role: 'Neutestamentler', work: `Kenneth Bailey's Theory of Oral Tradition: A Theory Contested by Its Evidence. Journal for the Study of the Historical Jesus 7 (2009)` },
    { name: 'Robert M. Price', role: 'Neutestamentler', work: 'Deconstructing Jesus (2000)' },
  ],
  steelman: `Jeder kennt das Kinderspiel: Ein Satz wird von Ohr zu Ohr geflüstert, und am Ende kommt etwas völlig anderes heraus. Genau so lief die Jesusüberlieferung: Jahrzehntelang wurden Geschichten mündlich weitergegeben – von Galiläa nach Jerusalem, Antiochia, Ephesus und Rom, von Aramäisch ins Griechische, von Erzählern, die Jesus nie gesehen hatten und ihre eigenen Anliegen einbrachten. Die moderne Gedächtnisforschung zeigt, dass schon Augenzeugen sich irren und Erinnerungen bei jedem Abruf neu konstruiert werden (Elizabeth Loftus). Gemeinden formen ihre Erinnerung nach ihren aktuellen Bedürfnissen (Maurice Halbwachs). Das Modell von Kenneth Bailey, das eine „kontrollierte" Überlieferung behauptet, beruht auf Anekdoten, die Theodore Weeden als unzuverlässig nachgewiesen hat. Was die Evangelisten nach 40 bis 65 Jahren aufschrieben, ist deshalb nicht, was Jesus sagte und tat, sondern was spätere Christen glaubten, dass er gesagt und getan habe. – So etwa Bart Ehrman.`,
  biblical: {
    summary: `Das NT beschreibt die Überlieferung nicht als anonymes Weiterflüstern, sondern als **verantwortetes Weitergeben** durch benannte Zeugen und Lehrer. Paulus gebraucht die Fachbegriffe jüdischer Traditionsweitergabe – „empfangen" und „überliefern" (1 Kor 11,23; 15,3). Lukas beruft sich auf „Augenzeugen und Diener des Wortes" (Lk 1,2). Jesus selbst lehrte in einprägsamen Formen und verhieß den Jüngern den Geist, der sie „erinnern" werde (Joh 14,26). Die Gemeinde in Jerusalem „blieb beständig in der Apostel Lehre" (Apg 2,42) – unter den Augen der Zeugen.`,
    detail: `**Unterschiede zur Stillen Post:**
- **Viele statt einer Kette:** Die Überlieferung lief parallel durch viele Erzähler und wurde in Gemeinschaft wiederholt, nicht nur einmal von Ohr zu Ohr.
- **Öffentlich statt geflüstert:** in Gottesdienst, Katechese und Predigt, wo Abweichungen auffielen.
- **Mit Kontrollinstanz:** Die Augenzeugen – Petrus, Jakobus, Johannes – leiteten jahrzehntelang die Gemeinden (Gal 2,9).
- **Mit Ernst statt als Spiel:** Für die Überliefernden ging es um Leben und Tod; sie waren bereit, dafür zu leiden.
- **Mit Merkformen:** Parallelismen, Gegensätze, Gleichnisse, kurze Sprüche – Jesu Lehre war zum Behalten gemacht.

**Joh 14,26:** „Aber der Tröster, der Heilige Geist, welchen mein Vater senden wird in meinem Namen, der wird euch alles lehren und euch erinnern alles des, das ich euch gesagt habe."`,
    sources: [
      { kind: 'bibel', work: '1. Korinther', ref: '15,3', quote: `Denn ich habe euch zuvörderst gegeben, was ich empfangen habe:`, original: `παρέδωκα … ὃ καὶ παρέλαβον (hebr. Entsprechung: masar – qibbel)`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '1,2', quote: `wie uns das gegeben haben, die es von Anfang selbst gesehen und Diener des Worts gewesen sind:`, original: `αὐτόπται καὶ ὑπηρέται γενόμενοι τοῦ λόγου`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '14,26', quote: `Aber der Tröster, der Heilige Geist, welchen mein Vater senden wird in meinem Namen, der wird euch alles lehren und euch erinnern alles des, das ich euch gesagt habe.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '2,42', quote: `Sie blieben aber beständig in der Apostel Lehre und in der Gemeinschaft und im Brotbrechen und im Gebet.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche ist selbst eine lebendige Überlieferungsgemeinschaft: Liturgie, Psalmodie und Hymnen werden seit Jahrhunderten auswendig gesungen und mündlich gelehrt – viele Melodien der koptischen Kirchenmusik wurden über Generationen ohne Noten weitergegeben. „Paradosis" (Überlieferung) ist für die Kirche nicht Störquelle, sondern der Weg, auf dem der Glaube der Apostel bewahrt wird (2 Thess 2,15). Die Väter beschreiben eindrücklich, wie lebendig die Erinnerung an die Apostelschüler war.`,
    detail: `**Ein Beispiel aus dem 2. Jahrhundert:** Irenäus schreibt an Florinus, er erinnere sich an die Reden Polykarps aus seiner Jugend besser als an jüngste Ereignisse – wo Polykarp saß, wie er ging, wie er von seinem Umgang mit Johannes und den anderen, die den Herrn gesehen hatten, erzählte; er habe dies „nicht auf Papier, sondern in meinem Herzen" bewahrt (bei Eusebius, KG V,20,6–7). Papias zog „die lebendige und bleibende Stimme" der Zeugen den Büchern vor (KG III,39,4).`,
    sources: [
      { kind: 'kirchenvater', author: 'Irenäus von Lyon (bei Eusebius)', work: 'Brief an Florinus, zitiert in Kirchengeschichte', ref: 'V,20,6–7', year: 'ca. 190', quote: `Ich erinnere mich an das, was damals geschah, besser als an das, was jüngst geschah … ich kann den Ort beschreiben, wo der selige Polykarp saß und lehrte, … wie er von seinem Umgang mit Johannes und den anderen erzählte, die den Herrn gesehen hatten … Ich bewahrte es nicht auf Papier, sondern in meinem Herzen.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Papias von Hierapolis (bei Eusebius)', work: 'Kirchengeschichte', ref: 'III,39,4', year: 'ca. 110–130', quote: `Ich glaubte, dass mir das aus Büchern nicht so viel nütze wie das aus der lebendigen und bleibenden Stimme.`, original: `ζώσης φωνῆς καὶ μενούσης`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die Forschung zur mündlichen Jesusüberlieferung kennt drei Modelle (nach Kenneth Bailey): **informell und unkontrolliert** (Formgeschichte, Bultmann: Gemeinden schufen und veränderten Überlieferung frei), **formell und kontrolliert** (Harald Riesenfeld, Birger Gerhardsson: Auswendiglernen nach rabbinischem Vorbild) und **informell kontrolliert** (Bailey: Gemeinde bewahrt den Kern, lässt Spielraum im Detail). James D. G. Dunn (Jesus Remembered, 2003) und Richard Bauckham (Jesus and the Eyewitnesses, 2006) haben das Bild weiterentwickelt. Neuerdings werden Erkenntnisse der Gedächtnisforschung einbezogen – kritisch bei Ehrman (2016), differenziert bei Robert McIver (2011) und Dale Allison (2010).`,
    detail: `**Ehrlich:** Theodore Weeden hat Baileys Anekdoten 2009 scharf kritisiert und gezeigt, dass manche seiner Beispiele gerade größere Veränderungen enthalten; Dunn antwortete im selben Jahr. Gerhardssons Modell wurde vorgeworfen, spätere rabbinische Verhältnisse auf die Zeit Jesu zu übertragen (früh vor allem von Jacob Neusner, der seine Kritik später relativierte). Die Gedächtnisforschung zeigt reale Verzerrungen bei Details.

**Was die Gedächtnisforschung auch zeigt:** Der **Kern** (gist) bedeutsamer, oft wiederholter Ereignisse wird deutlich zuverlässiger erinnert als Einzelheiten. McIver kommt nach Sichtung der Forschung zu dem Schluss, dass die Evangelien in ihren Grundzügen auf zuverlässige Erinnerung zurückgehen dürften. Allison empfiehlt, sich auf wiederkehrende Gesamteindrücke zu stützen – und diese umfassen Jesu Vollmachtsanspruch, Wunder, Lehre und Kreuzigung.`,
    sources: [
      { kind: 'fachliteratur', author: 'Kenneth E. Bailey', work: 'Informal Controlled Oral Tradition and the Synoptic Gospels. Asia Journal of Theology 5 (1991); Nachdruck in Themelios 20.2 (1995)', year: '1991/1995', quote: `Bailey beschreibt aus der Erfahrung nahöstlicher Dorfgemeinschaften eine Überlieferung, in der die Gemeinschaft den Kern einer Erzählung bewahrt und Spielraum für Details lässt.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Theodore J. Weeden', work: `Kenneth Bailey's Theory of Oral Tradition: A Theory Contested by Its Evidence. Journal for the Study of the Historical Jesus 7`, year: '2009', quote: `Weeden bestreitet, dass Baileys Beispiele eine kontrollierte Überlieferung belegen.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'James D. G. Dunn', work: `Kenneth Bailey's Theory of Oral Tradition: Critiquing Theodore Weeden's Critique. Journal for the Study of the Historical Jesus 7`, year: '2009', quote: `Dunn verteidigt den Kern von Baileys Modell gegen Weeden.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Robert K. McIver', work: 'Memory, Jesus, and the Synoptic Gospels', year: '2011', quote: `Anwendung der Gedächtnisforschung auf die Evangelien mit dem Ergebnis, dass der Kern der Überlieferung zuverlässig sein dürfte, Details aber variieren.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Bart D. Ehrman', work: 'Jesus Before the Gospels', year: '2016', quote: `Ehrman betont mithilfe der Gedächtnisforschung, wie Erinnerungen an Jesus verändert und teils erfunden wurden.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Stille Post ist darauf angelegt zu scheitern: eine einzige Kette, einmal geflüstert, keine Rückfrage, kein Interesse an Genauigkeit. Die Jesusüberlieferung war das Gegenteil: viele Erzähler gleichzeitig, öffentlich wiederholt, mit den Augenzeugen – Petrus, Jakobus, Johannes – als Leitern der Gemeinden, in einer Kultur des Auswendiglernens und mit Menschen, die bereit waren, für diese Botschaft zu sterben. Und Jesus lehrte in einprägsamen Sprüchen und Gleichnissen. Die ersten Texte entstanden zu Lebzeiten der Zeugen: Paulus' Briefe nach 20, die Evangelien nach 40 bis 65 Jahren.`,
  keyPoints: [
    `**Gemeinschaft statt Kette:** Überlieferung lief parallel durch viele, wurde öffentlich wiederholt und konnte korrigiert werden.`,
    `**Lebende Kontrollinstanz:** Augenzeugen leiteten die Gemeinden über Jahrzehnte (Gal 2,9; Lk 1,2; Papias).`,
    `**Fachsprache der Überlieferung:** „empfangen – überliefern" (1 Kor 15,3) entspricht jüdischer Lehrweitergabe.`,
    `**Merkformen:** Parallelismus, Antithese, Gleichnis, Rhythmus – Jesu Lehre war zum Behalten gemacht (Riesner).`,
    `**Gedächtnisforschung differenziert:** Details verblassen, der Kern bedeutsamer Ereignisse bleibt (McIver).`,
    `**Zurückhaltung der Gemeinden:** Die drängenden Streitfragen der Urkirche (Beschneidung, Zungenrede, Ämter) werden Jesus in den Evangelien nicht in den Mund gelegt – ein Zeichen, dass Überlieferung nicht frei erfunden wurde.`,
  ],
  voices: [
    {
      person: 'kenneth-bailey',
      role: 'als Kenner nahöstlicher Dorfkultur',
      text: `Kenneth Bailey verbrachte rund vierzig Jahre im Nahen Osten, wuchs in Ägypten auf und lehrte unter anderem in Ägypten und im Libanon. Er beobachtete in Dorfgemeinschaften die abendlichen Zusammenkünfte, bei denen Gedichte, Sprichwörter und Geschichten der Gemeinschaft erzählt werden. Die Gemeinschaft achtet darauf, dass der Kern einer Erzählung, besonders Pointe und Schlüsselsätze, unverändert bleibt; Ausschmückungen im Detail sind erlaubt, Verfälschungen des Kerns werden korrigiert. Dieses „informell kontrollierte" Modell passt nach Bailey zu dem, was wir in den Evangelien sehen: Übereinstimmung im Wesentlichen, Variation in der Ausführung.`,
      sources: [{ kind: 'fachliteratur', author: 'Kenneth E. Bailey', work: 'Informal Controlled Oral Tradition and the Synoptic Gospels', year: '1991', status: 'paraphrase', quote: `Beschreibung der informell kontrollierten Überlieferung in nahöstlichen Gemeinschaften.` }],
    },
    {
      person: 'birger-gerhardsson',
      role: 'als Erforscher antiker Lehrüberlieferung',
      text: `Gerhardsson untersuchte, wie im antiken Judentum Lehre weitergegeben wurde: durch Auswendiglernen, Wiederholen und Rezitieren unter Aufsicht eines Lehrers. Die Mischna lobt einen Schüler als „verputzte Zisterne, die keinen Tropfen verliert" (Avot 2,8). Gerhardsson folgerte, dass Jesus als Lehrer mit Schülern (mathētai, „Lernende") seine Lehre ähnlich einprägte und die Apostel sie als heiliges Gut bewahrten. Auch wenn man die Parallele zu späteren Rabbinenschulen nicht überziehen darf, zeigt seine Arbeit: Antike Lehrgemeinschaften waren Gedächtniskulturen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Birger Gerhardsson', work: 'Memory and Manuscript: Oral Tradition and Written Transmission in Rabbinic Judaism and Early Christianity', year: '1961', status: 'paraphrase', quote: `Modell einer kontrollierten, auf Memorieren gestützten Lehrüberlieferung.` },
        { kind: 'juedisch', work: 'Mischna, Avot', ref: '2,8', quote: `Rabbi Eliezer ben Hyrkanos ist eine verputzte Zisterne, die keinen Tropfen verliert.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'bauckham',
      role: 'als Neutestamentler',
      text: `Bauckham betont, dass die Formgeschichte die Augenzeugen „vergessen" hat. Die Augenzeugen verschwanden nach Ostern nicht, sondern blieben über Jahrzehnte bekannte Gewährsleute der Überlieferung – Lukas nennt sie „Augenzeugen und Diener des Wortes", Papias suchte gezielt ihre Schüler auf. Die Evangelien stehen deshalb näher an der Form von Zeugenaussagen als an anonymer Gemeindeüberlieferung.`,
      sources: [{ kind: 'fachliteratur', author: 'Richard Bauckham', work: 'Jesus and the Eyewitnesses', year: '2. Aufl. 2017', status: 'paraphrase', quote: `Die Augenzeugen blieben als Gewährsleute der Überlieferung aktiv.` }],
    },
    {
      person: 'alan-millard',
      role: 'als Altorientalist und Schriftforscher',
      text: `Millard zeigt, dass Schreiben im Palästina des 1. Jahrhunderts viel verbreiteter war, als oft angenommen: Inschriften, Ossuare, Papyri, Ostraka und die Qumranrollen belegen eine Kultur, in der Lesen und Schreiben – auch auf Wachstafeln und in Notizbüchern – alltäglich vorkam. Es ist daher gut denkbar, dass schon zu Jesu Lebzeiten oder bald danach Hörer Notizen seiner Worte anfertigten. Mündlichkeit und Schriftlichkeit standen nebeneinander, nicht gegeneinander.`,
      sources: [{ kind: 'fachliteratur', author: 'Alan Millard', work: 'Reading and Writing in the Time of Jesus', year: '2000', status: 'paraphrase', quote: `Schreiben war im Palästina des 1. Jahrhunderts verbreitet; Notizen von Jesusworten sind denkbar.` }],
    },
    {
      person: 'papias',
      role: 'als Sammler mündlicher Überlieferung',
      text: `Papias beschreibt im frühen 2. Jahrhundert, wie er vorging: Kam jemand, der den „Ältesten" gefolgt war, fragte er nach ihren Worten – was Andreas, Petrus, Philippus, Thomas, Jakobus, Johannes oder Matthäus gesagt hatten. Diese gezielte Befragung von Gewährsleuten zeigt, dass man in der frühen Kirche sehr bewusst auf die Herkunft der Überlieferung achtete – das Gegenteil eines anonymen Weiterflüsterns.`,
      sources: [{ kind: 'kirchenvater', author: 'Papias von Hierapolis (bei Eusebius)', work: 'Kirchengeschichte', ref: 'III,39,3–4', year: 'ca. 110–130', status: 'paraphrase', quote: `Papias fragte gezielt nach den Worten der Apostel bei denen, die ihnen gefolgt waren.` }],
    },
  ],
  dialog: [
    {
      id: 'telefonspiel',
      objection: `Jeder, der Stille Post gespielt hat, weiß, was mit mündlicher Weitergabe passiert. Nach Jahrzehnten, über Sprachgrenzen und Kontinente hinweg – da bleibt vom Original nichts übrig.`,
      objectionBy: 'Bart Ehrman',
      answer: `Stille Post ist ein Spiel, das darauf angelegt ist, schiefzugehen: eine einzige Kette, ein einziges Flüstern, keine Rückfrage, Spaß an der Verzerrung. Die frühe Kirche funktionierte umgekehrt: Viele erzählten gleichzeitig, öffentlich, immer wieder; die Augenzeugen leiteten die Gemeinden und konnten korrigieren; die Lehre wurde bewusst eingeprägt; und es ging den Überliefernden um Leben und Tod. Das ist eher wie ein Gemeindelied, das alle auswendig können – wer eine falsche Zeile singt, fällt sofort auf.`,
      questionsBack: [
        `Würde Stille Post auch funktionieren, wenn alle Mitspieler die Botschaft laut hören, wiederholen und der ursprüngliche Sprecher danebensteht?`,
        `Kennst du einen Fall, in dem eine Gemeinschaft, deren Gründungszeugen noch leben, deren Geschichte völlig verändert?`,
      ],
      followUps: [
        {
          id: 'bailey-widerlegt',
          objection: `Kenneth Baileys „informell kontrollierte Überlieferung" beruht auf Anekdoten, die Theodore Weeden 2009 gründlich zerpflückt hat. Baileys eigene Beispiele zeigen erhebliche Veränderungen. Das Modell ist erledigt.`,
          objectionBy: 'Bart Ehrman (mit Weeden)',
          answer: `Weedens Kritik ist ernst zu nehmen – manche von Baileys Beispielen sind weniger eindeutig, als er meinte. James Dunn hat im selben Jahr geantwortet, dass der Kern des Modells dadurch nicht widerlegt ist: Gemeinschaften bewahren das für sie Wesentliche und variieren Details. Vor allem hängt mein Argument nicht allein an Bailey. Es ruht auf den Quellen selbst – Paulus' Überlieferungssprache, der Rolle der Augenzeugen, der Kultur des Memorierens und der frühen Verschriftlichung.`,
          followUps: [
            {
              id: 'gerhardsson-anachronistisch',
              objection: `Gerhardssons Modell des Auswendiglernens ist auch nicht besser – es überträgt die Verhältnisse rabbinischer Schulen nach 70 auf Jesus und seine galiläischen Fischer. Das ist anachronistisch.`,
              objectionBy: 'Bart Ehrman / frühe Kritik Jacob Neusners',
              answer: `Die Kritik hat einen wahren Kern: Formalisierte Rabbinenschulen sind vor allem nach 70 belegt. Aber Lehrer, die ihre Schüler Merksätze auswendig lernen ließen, gab es in der ganzen antiken Welt – bei Philosophenschulen ebenso wie im Judentum. Jesus wurde „Rabbi" genannt, hatte „Schüler", sandte sie mit seiner Botschaft aus (Mk 6,7–13) und lehrte in Formen, die zum Behalten gemacht sind. Bezeichnend: Jacob Neusner, Gerhardssons früher Kritiker, hat seine Ablehnung später ausdrücklich relativiert.`,
              sources: [
                { kind: 'fachliteratur', author: 'Jacob Neusner', work: 'Vorwort zur Neuausgabe von B. Gerhardsson, Memory and Manuscript (mit Tradition and Transmission in Early Christianity)', year: '1998', quote: `Neusner würdigt Gerhardssons Werk und relativiert seine frühere scharfe Kritik.`, status: 'paraphrase', note: 'Wortlaut und Umfang der Relativierung vor Zitierung prüfen.' },
                { kind: 'fachliteratur', author: 'Rainer Riesner', work: 'Jesus als Lehrer. Eine Untersuchung zum Ursprung der Evangelien-Überlieferung', year: '1981', quote: `Riesner zeigt Jesu Lehrweise in einprägsamen Formen und die Bedeutung des Memorierens im antiken Judentum.`, status: 'paraphrase' },
              ],
            },
          ],
        },
        {
          id: 'gedaechtnisforschung',
          objection: `Die Gedächtnisforschung ist eindeutig: Augenzeugen erinnern sich oft falsch, Erinnerungen werden bei jedem Abruf neu zusammengesetzt und lassen sich leicht verfälschen – Elizabeth Loftus hat das in zahllosen Experimenten gezeigt.`,
          objectionBy: 'Bart Ehrman (Jesus Before the Gospels)',
          answer: `Die Forschung zeigt vor allem, dass **Details** unzuverlässig werden – Farben, genaue Wörter, Reihenfolgen. Der **Kern** bedeutsamer, emotional prägender und oft wiederholter Ereignisse wird dagegen meist zuverlässig behalten. Robert McIver hat die Gedächtnisforschung speziell auf die Evangelien angewandt und kommt zu dem Schluss, dass ihre Grundzüge auf zuverlässiger Erinnerung beruhen dürften. Genau das sehen wir: Übereinstimmung im Kern, Variation in Details. Und eine Gruppenerinnerung mit vielen Augenzeugen ist robuster als die eines Einzelnen im Labor.`,
          sources: [
            { kind: 'wissenschaft', author: 'Elizabeth F. Loftus', work: 'Eyewitness Testimony', year: '1979', quote: `Experimente zur Beeinflussbarkeit und Rekonstruktion von Augenzeugenerinnerungen.`, status: 'paraphrase' },
            { kind: 'fachliteratur', author: 'Robert K. McIver', work: 'Memory, Jesus, and the Synoptic Gospels', year: '2011', quote: `Kernaussagen bedeutsamer Erinnerungen sind deutlich stabiler als Details.`, status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'kollektives-gedaechtnis-erfindet',
              objection: `Und das kollektive Gedächtnis formt die Vergangenheit nach den Bedürfnissen der Gegenwart – das hat schon Maurice Halbwachs gezeigt. Die Gemeinden haben sich den Jesus erinnert und erfunden, den sie brauchten.`,
              objectionBy: 'Bart Ehrman',
              answer: `Wenn das so wäre, müssten die Evangelien voller Jesusworte zu den brennenden Fragen der Urkirche sein: Müssen Heiden beschnitten werden? Was gilt für Speisegebote unter Heidenchristen? Wie steht es mit der Zungenrede, mit Ämtern, mit Götzenopferfleisch? Genau darüber stritt die Kirche heftig (Apg 15; 1 Kor 8–14) – aber die Evangelien legen Jesus dazu keine passenden Worte in den Mund. Paulus unterscheidet sogar ausdrücklich, wo er ein Herrenwort hat und wo nicht (1 Kor 7,10.12). Das ist das Gegenteil einer Gemeinde, die sich ihren Jesus erfindet.`,
              questionsBack: [
                `Warum gibt es in den Evangelien kein Jesuswort zur Beschneidungsfrage, wenn die Gemeinden frei erfanden, was sie brauchten?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'jahrzehnte-luecke',
      objection: `Zwischen Jesus und dem ersten Evangelium liegen rund 40 Jahre, in denen niemand kontrollierte, was erzählt wurde. Wer sollte das überwachen – in Dutzenden Gemeinden im ganzen Reich?`,
      objectionBy: 'Robert M. Price',
      answer: `Die Kontrolle hatte Namen und Gesichter: Petrus, Jakobus und Johannes leiteten die Jerusalemer Gemeinde und wurden als „Säulen" anerkannt (Gal 2,9); Paulus prüfte sein Evangelium bei ihnen; Lukas nennt die „Diener des Wortes" als Hüter der Überlieferung; Papias suchte die Schüler der Apostel gezielt auf. Und 40 Jahre sind eine Spanne, in der Zeitzeugen noch leben – so wie heute viele Menschen lebendige, genaue Erinnerungen an die Ereignisse der 1980er Jahre haben und Falschdarstellungen widersprechen würden.`,
      followUps: [
        {
          id: 'schreiben-unwahrscheinlich',
          objection: `In einer Gesellschaft, in der vielleicht 3 bis 10 Prozent lesen und schreiben konnten, hat niemand Notizen gemacht. Es gab nur mündliche Überlieferung.`,
          objectionBy: 'Bart Ehrman',
          answer: `Die allgemeine Lesefähigkeit war niedrig, das stimmt – aber Schreiben war in Handel, Verwaltung und Religion alltäglich, und es genügten wenige Schreibkundige. Ein Zöllner wie Matthäus musste schreiben und rechnen. Wachstafeln waren verbreitet: Zacharias verlangt in Lk 1,63 ein Schreibtäfelchen. Alan Millard hat gezeigt, wie verbreitet Schriftlichkeit im Palästina des 1. Jahrhunderts war. Ich behaupte nicht, dass wir Notizen beweisen können – aber die Annahme, es habe nur Mündlichkeit gegeben, ist ebenso wenig bewiesen.`,
          sources: [
            { kind: 'bibel', work: 'Lukas', ref: '1,63', quote: `Und er forderte ein Täfelein und schrieb also: Er heißt Johannes. Und sie verwunderten sich alle.`, translation: 'Luther 1912', status: 'verbatim' },
            { kind: 'fachliteratur', author: 'William V. Harris', work: 'Ancient Literacy', year: '1989', quote: `Harris schätzt die Lese- und Schreibfähigkeit im Römischen Reich auf etwa 10–15 %.`, status: 'paraphrase' },
          ],
        },
      ],
    },
    {
      id: 'worte-nicht-woertlich',
      objection: `Selbst wenn die Grundgeschichten überlebt haben – Jesu Worte wurden nie wörtlich bewahrt. Vergleich nur die langen Reden bei Johannes mit den kurzen Sprüchen bei Markus: Das klingt wie zwei verschiedene Menschen.`,
      objectionBy: 'Bart Ehrman',
      answer: `Richtig ist: Die Evangelisten geben Jesu Worte nicht immer wortgetreu wieder, sondern oft sinngemäß – das war antiker Standard. Johannes formuliert stärker in seiner eigenen Sprache. Aber auch bei ihm stehen Worte, die den Synoptikern eng entsprechen („Wer sein Leben lieb hat, der wird's verlieren", Joh 12,25; vgl. Mk 8,35; „Der Knecht ist nicht größer denn sein Herr", Joh 13,16; vgl. Mt 10,24). Und Jesu Lehrweise – Parallelismen, Gegensätze, Bilder, Gleichnisse – war gerade darauf angelegt, behalten zu werden.`,
      sources: [
        { kind: 'bibel', work: 'Johannes', ref: '12,25', quote: `Wer sein Leben liebhat, der wird's verlieren; und wer sein Leben auf dieser Welt hasset, der wird's erhalten zum ewigen Leben.`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'bibel', work: 'Markus', ref: '8,35', quote: `Denn wer sein Leben will erhalten, der wird's verlieren; und wer sein Leben verliert um meinet- und des Evangeliums willen, der wird's erhalten.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'sinngemaess-zugestaendnis',
          objection: `Dann gibst du ja zu, dass wir nicht wissen, was Jesus wirklich gesagt hat.`,
          objectionBy: 'Bart Ehrman',
          answer: `Ich gebe zu, dass wir nicht immer seinen genauen Wortlaut haben – wohl aber seine Stimme, seinen Sinn. Antike Historiker arbeiteten genauso: Thukydides schreibt, er habe die Reden so wiedergegeben, wie die Redner nach seiner Meinung hätten sprechen müssen, sich dabei aber möglichst eng an den Gesamtsinn des tatsächlich Gesagten gehalten. Niemand hält deshalb Perikles' Politik für erfunden. Treue Wiedergabe des Sinns ist keine Verfälschung, sondern Überlieferung – und vier Zeugen, die denselben Sinn in verschiedenen Worten bewahren, sind eine starke Bestätigung.`,
          sources: [
            { kind: 'sonstiges', author: 'Thukydides', work: 'Der Peloponnesische Krieg', ref: '1,22,1', year: 'ca. 400 v. Chr.', quote: `Die Reden habe er so wiedergegeben, wie jeder Redner nach seiner Ansicht das Erforderliche sagen musste, wobei er sich möglichst eng an den Gesamtsinn des wirklich Gesagten hielt.`, status: 'paraphrase' },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Worin unterscheidet sich Stille Post von einer Gemeinschaft, die eine Geschichte öffentlich und gemeinsam wiederholt, während die Zeugen noch leben?`,
    `Warum legen die Evangelien Jesus keine Worte zu den großen Streitfragen der Urkirche in den Mund?`,
    `Wer hätte in Jerusalem eine falsche Jesusgeschichte durchsetzen können, solange Petrus und Jakobus die Gemeinde leiteten?`,
    `Bedeutet „nicht wortwörtlich" für dich automatisch „erfunden"?`,
  ],
  avoid: [
    `Behaupten, die Jünger hätten alle Worte Jesu wörtlich auswendig gelernt – das lässt sich nicht belegen.`,
    `Baileys Anekdoten als unangreifbar darstellen – Weedens Kritik ist bekannt; nenne sie.`,
    `Die Gedächtnisforschung pauschal abtun – sie zeigt reale Verzerrungen, nur nicht im Kern bedeutsamer Ereignisse.`,
  ],
  concessions: [
    `Mündliche Überlieferung verändert Details; die Evangelien geben Jesu Worte nicht immer wortgetreu wieder.`,
    `Die Modelle von Bailey und Gerhardsson sind in der Forschung umstritten und wurden zu Recht kritisiert.`,
    `Die Gedächtnisforschung zeigt, dass auch Augenzeugen sich in Einzelheiten irren.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Richard Bauckham', work: 'Jesus and the Eyewitnesses', year: '2. Aufl. 2017', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'James D. G. Dunn', work: 'Jesus Remembered', year: '2003', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Birger Gerhardsson', work: 'Memory and Manuscript', year: '1961', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Robert K. McIver', work: 'Memory, Jesus, and the Synoptic Gospels', year: '2011', status: 'paraphrase' },
    { kind: 'gegner', author: 'Bart D. Ehrman', work: 'Jesus Before the Gospels', year: '2016', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['mündliche Überlieferung', 'Gedächtnis', 'Bailey', 'Gerhardsson', 'Augenzeugen', 'Papias'],
  related: [
    'neues-testament/evangelien-spaet-anonym',
    'auferstehung/legende-entwickelte-sich',
    'neues-testament/paulus-erfand-christentum',
    'sola-scriptura/tradition-menschenlehre',
  ],
};

export default claim;
