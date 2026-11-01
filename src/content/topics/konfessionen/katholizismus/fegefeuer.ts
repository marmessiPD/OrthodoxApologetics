import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'fegefeuer',
  title: `„Es gibt ein Fegefeuer."`,
  proponents: [
    { name: 'Gregor der Große', role: 'Bischof von Rom (590–604)', work: 'Dialoge IV (über das reinigende Feuer)' },
    { name: 'Konzil von Florenz', role: 'Unionskonzil', work: 'Laetentur caeli (1439)' },
    { name: 'Konzil von Trient', role: 'Katholisches Reformkonzil', work: 'Dekret über das Purgatorium (25. Sitzung, 1563)' },
    { name: 'Katechismus der Katholischen Kirche', role: 'Lehrzusammenfassung', work: 'KKK 1030–1032' },
  ],
  steelman: `„Nichts Unreines wird hineinkommen" in das himmlische Jerusalem (Offb 21,27), und ohne Heiligung „wird niemand den Herrn sehen" (Hebr 12,14). Die meisten Christen sterben aber nicht als vollendete Heilige – sie sind mit Gott versöhnt, aber noch nicht ganz geläutert. Also muss es nach dem Tod eine Reinigung geben. Paulus spricht von einem, der „selig werden wird, doch so wie durchs Feuer" (1 Kor 3,15). Jesus sagt, eine Sünde werde „weder in dieser noch in jener Welt" vergeben (Mt 12,32) – also werden manche Sünden in der kommenden Welt vergeben. Judas der Makkabäer ließ für gefallene Soldaten ein Sühnopfer darbringen, „damit sie von der Sünde erlöst würden" (2 Makk 12,45–46) – ein Buch, das die Kopten selbst zur Bibel zählen. Auch ihr betet für die Verstorbenen. Wozu, wenn es keine Läuterung gibt? Wer im Himmel ist, braucht kein Gebet; wem in der Hölle ist, dem nützt es nicht. Das Gebet für die Toten setzt einen Zwischenzustand der Reinigung voraus – genau das meint „Fegefeuer".`,
  biblical: {
    summary: `Die Schrift bezeugt das **Gebet für die Verstorbenen** (2 Makk 12,43–46) und einen **Zwischenzustand** zwischen Tod und allgemeiner Auferstehung (Lk 16,19–31; Offb 6,9–11). Sie lehrt aber **keinen Ort zeitlicher Strafen**, an dem Schuldreste „abgebüßt" werden. 1 Kor 3,13–15 spricht vom **Feuer des Gerichtstages**, das die **Werke** der Diener Christi prüft, nicht von einem Läuterungsort für Seelen über lange Zeiträume. Der Schächer hört: „**Heute** wirst du mit mir im Paradiese sein" (Lk 23,43). Paulus will „abscheiden und bei Christus sein" (Phil 1,23). Das Blut Christi „macht uns rein von **aller** Sünde" (1 Joh 1,7), und „mit **einem** Opfer hat er in Ewigkeit vollendet, die geheiligt werden" (Hebr 10,14).`,
    detail: `**2 Makk 12,39–46:** Die gefallenen Soldaten trugen heidnische Amulette – nach katholischer Lehre eine schwere Sünde (Götzendienst), die im Fegefeuer gerade **nicht** gereinigt würde. Judas betet für sie im Blick auf die **Auferstehung** (12,43–44). Der Text belegt also das Gebet für die Verstorbenen und die Hoffnung auf Gottes Erbarmen – das teilt die koptische Kirche –, aber nicht die spätere Lehre von einem Reinigungsort mit zeitlichen Strafen.

**1 Kor 3,10–15:** Paulus spricht über Mitarbeiter, die auf dem Fundament Christus bauen – mit Gold, Silber, Edelsteinen oder Holz, Heu, Stroh. „Der Tag wird’s klar machen", denn er wird „durchs Feuer offenbar". Es geht um das Gericht am Jüngsten Tag, das die Qualität des Dienstes offenbart: Wessen Werk verbrennt, „wird Schaden leiden" (Lohn verlieren), er selbst wird aber gerettet, „wie durchs Feuer" – ein Sprichwort für knappe Rettung (vgl. Am 4,11).

**Mt 12,32:** „Weder in dieser noch in jener Welt" ist eine Redewendung für „niemals"; Markus gibt dasselbe Wort wieder mit „hat keine Vergebung ewiglich" (Mk 3,29). Aus einer verneinten Aussage lässt sich keine positive Lehre über Vergebung im Jenseits ableiten.`,
    sources: [
      { kind: 'bibel', work: '2. Makkabäer', ref: '12,43–46', quote: `Judas veranstaltete eine Sammlung und sandte sie nach Jerusalem, damit man ein Sündopfer darbringe – ein gutes und frommes Werk, weil er an die Auferstehung dachte; denn hätte er nicht gehofft, dass die Gefallenen auferstehen würden, so wäre es überflüssig gewesen, für die Toten zu beten.`, translation: 'sinngemäß', status: 'paraphrase', note: 'Deuterokanonisches Buch, in der koptischen Bibel enthalten. Belegt das Gebet für die Toten.' },
      { kind: 'bibel', work: '1. Korinther', ref: '3,13–15', quote: `… so wird eines jeglichen Werk offenbar werden; der Tag wird's klar machen. Denn es wird durchs Feuer offenbar werden; und welcherlei eines jeglichen Werk sei, wird das Feuer bewähren. Wird jemandes Werk bleiben, das er darauf gebaut hat, so wird er Lohn empfangen. Wird aber jemandes Werk verbrennen, so wird er des Schaden leiden; er selbst aber wird selig werden, so doch wie durchs Feuer.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '23,43', quote: `Wahrlich ich sage dir: Heute wirst du mit mir im Paradiese sein.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Philipper', ref: '1,23', quote: `Ich habe Lust abzuscheiden und bei Christo zu sein, was auch viel besser wäre.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Johannes', ref: '1,7', quote: `… und das Blut Jesu Christi, seines Sohnes, macht uns rein von aller Sünde.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hebräer', ref: '10,14', quote: `Denn mit einem Opfer hat er in Ewigkeit vollendet, die geheiligt werden.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Markus', ref: '3,29', quote: `Wer aber den heiligen Geist lästert, der hat keine Vergebung ewiglich.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche lehrt: Die Seelen der Verstorbenen warten bis zur allgemeinen Auferstehung und zum Gericht – die Gerechten im **Paradies** in Ruhe und Freude, die Gottlosen in Erwartung des Gerichts. Die Kirche **betet für die Entschlafenen** in jeder Liturgie, am dritten und vierzigsten Tag und an den Jahrestagen, und bittet Gott, ihnen Ruhe zu schenken und ihre Sünden zu vergeben. Sie lehrt aber **kein Fegefeuer**: keinen Ort, an dem zeitliche Sündenstrafen abgebüßt werden, und keine Satisfaktion nach dem Tod, denn Christus hat genuggetan. Das Gebet für die Verstorbenen ist Ausdruck der Liebe und der Gemeinschaft der Kirche über den Tod hinaus, kein Mittel zur Verkürzung von Strafzeiten.`,
    detail: `**Liturgie:** In der koptischen Liturgie folgt auf das Gedächtnis der Heiligen die Fürbitte für die Entschlafenen: Gott möge ihren Seelen Ruhe schenken im Schoß Abrahams, Isaaks und Jakobs, im Paradies der Freude. Die Kirche überlässt Gottes Erbarmen, was mit den Seelen geschieht, ohne dafür ein System zu entwerfen.

**Die Väter des Ostens:** Sie kennen das Gebet für die Toten von Anfang an (Inschriften, Tertullian, Kyrill von Jerusalem, Myst. Kat. 5,9–10). Die Vorstellung eines „reinigenden Feuers" für leichte Sünden nach dem Tod wird im Westen bei Augustinus vorsichtig erwogen („es ist nicht unglaublich", Enchiridion 69) und bei Gregor dem Großen (Dialoge IV) ausgebaut; der Osten hat sie nie übernommen.

**Florenz und die Kopten:** Auf dem Konzil von Florenz widersprach Markus von Ephesus 1438/39 der Lehre vom reinigenden Feuer. 1442 unterzeichnete in Florenz eine kleine Delegation aus Ägypten (aus dem Antoniuskloster) ein Unionsdekret mit Rom (*Cantate Domino*); die koptische Kirche hat diese Union jedoch nie angenommen.`,
    sources: [
      { kind: 'liturgie', work: 'Koptische Basilius-Liturgie, Fürbitte für die Entschlafenen', status: 'paraphrase', quote: `Gedenke, o Herr, unserer Väter und Brüder, die im rechten Glauben entschlafen sind; schenke ihren Seelen Ruhe im Schoß unserer heiligen Väter Abraham, Isaak und Jakob, an einem Ort des Grüns, am Wasser der Ruhe, im Paradies der Freude.` },
      { kind: 'kirchenvater', author: 'Kyrill von Jerusalem', work: 'Mystagogische Katechesen', ref: '5,9–10', year: 'um 350', status: 'paraphrase', note: 'Bezeugt das Gebet für die Entschlafenen in der eucharistischen Liturgie.' },
      { kind: 'kirchenvater', author: 'Augustinus', work: 'Enchiridion', ref: '69', status: 'paraphrase', quote: `Dass so etwas auch nach diesem Leben geschieht, ist nicht unglaublich; ob es so ist, kann man fragen.`, note: 'Augustinus formuliert ausdrücklich als Vermutung.' },
      { kind: 'gegner', work: 'Konzil von Florenz, Dekret für die Jakobiten (Cantate Domino)', year: '1442', status: 'paraphrase', note: 'Unionsdekret mit einer koptischen Delegation; in Ägypten nicht rezipiert.' },
    ],
  },
  quickAnswer: `Wir beten für unsere Verstorbenen – wie Judas der Makkabäer (2 Makk 12) und wie die Kirche seit den Aposteln. Aber die Bibel kennt keinen Ort, an dem Seelen zeitliche Strafen abbüßen: Der Schächer kam „heute" ins Paradies (Lk 23,43), und Christi Blut reinigt „von aller Sünde" (1 Joh 1,7). 1 Kor 3 spricht vom Feuer des Gerichtstages, das die Werke prüft. Wir befehlen die Entschlafenen in Liebe Gottes Erbarmen an – ohne ein System von Strafzeiten.`,
  keyPoints: [
    `**Gemeinsam:** Gebet für die Verstorbenen (2 Makk 12), Zwischenzustand bis zur Auferstehung, Gemeinschaft der Kirche über den Tod hinaus.`,
    `**Unterschied:** kein Ort zeitlicher Sündenstrafen, keine Satisfaktion nach dem Tod – Christus hat vollkommen genuggetan (Hebr 10,14; 1 Joh 1,7).`,
    `**1 Kor 3,13–15** handelt vom Gericht am „Tag", das die Werke der Diener Christi prüft, nicht von einem Läuterungsort.`,
    `**Mt 12,32** ist eine Redewendung für „niemals" (Mk 3,29).`,
    `**Historisch westlich:** Augustinus nur als Vermutung, Gregor der Große im 6. Jh., Dogma in Florenz (1439) und Trient (1563); der Osten hat es nie angenommen.`,
  ],
  voices: [
    {
      person: 'kyrill-alexandrien',
      role: 'als Ausleger der Erlösung',
      text: `Für Kyrill ist Christus der neue Adam, in dem die menschliche Natur vom Tod befreit und geheiligt wird. Die Vergebung, die er schenkt, ist vollständig: Er hat die Sünde der Welt getragen und durch sein lebendigmachendes Fleisch die Verderbnis besiegt. Eine Vorstellung, nach der die Erlösten nach dem Tod noch Strafen „abzahlen" müssten, ist der alexandrinischen Soteriologie fremd; sie denkt in Kategorien von Heilung und Leben, nicht von Schuldkonten.`,
      sources: [{ kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Kommentar zum Johannesevangelium', status: 'paraphrase' }],
    },
    {
      person: 'chrysostomus',
      role: 'als Prediger der Fürbitte für die Toten',
      text: `Chrysostomus ermutigt die Gläubigen, für ihre Verstorbenen zu beten und Almosen zu geben: Nicht umsonst hätten die Apostel angeordnet, in den heiligen Mysterien der Entschlafenen zu gedenken. Er spricht von Trost und Hilfe für die Verstorbenen durch die Gebete der Kirche – ohne ein Fegefeuer im späteren lateinischen Sinn zu lehren. Gerade er zeigt: Man kann für die Toten beten, ohne ein System zeitlicher Strafen anzunehmen.`,
      sources: [{ kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum Philipperbrief', ref: 'Hom. 3', status: 'paraphrase' }],
    },
    {
      person: 'kallistos-ware',
      role: 'als orthodoxer Theologe',
      text: `Ware beschreibt die orthodoxe Haltung als bewusste Zurückhaltung: Die Kirche betet für die Entschlafenen und glaubt, dass sie ihnen hilft, aber sie hat sich nie auf eine genaue Lehre über den Zustand der Seelen festgelegt. Abgelehnt werden die juristischen Kategorien von „Genugtuung" und „zeitlichen Strafen" sowie die Vorstellung eines materiellen Feuers. Einige orthodoxe Theologen sprechen von einem Wachstum der Seele in Gottes Liebe auch nach dem Tod – als Geheimnis, nicht als Dogma.`,
      sources: [{ kind: 'fachliteratur', author: 'Kallistos Ware', work: 'The Orthodox Church', year: '1963, überarb. 1993', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'zweites-makkabaeer',
      objection: `„2 Makk 12 – euer eigenes Buch! Judas bringt ein Sühnopfer für die Toten dar, ‚damit sie von der Sünde erlöst würden'. Das ist das Fegefeuer."`,
      objectionBy: 'Katholischer Apologet',
      answer: `Ja, wir nehmen das Buch an und beten deshalb für die Verstorbenen. Aber der Text spricht weder von einem Ort noch von einem Feuer noch von zeitlichen Strafen. Und die Soldaten trugen Götzenamulette – nach katholischer Lehre eine Todsünde, die gerade **nicht** im Fegefeuer gereinigt würde. 2 Makk 12 belegt die Hoffnung auf Gottes Erbarmen und das Gebet für die Toten, nicht das Fegefeuer.`,
      questionsBack: [`Nach katholischer Lehre kommen Menschen mit unbereuter Todsünde nicht ins Fegefeuer. Wie passt das zu Soldaten mit Götzenamuletten in 2 Makk 12,40?`],
      followUps: [
        {
          id: 'wozu-beten',
          objection: `„Wozu betet ihr dann für Tote? Im Himmel brauchen sie es nicht, in der Hölle nützt es nicht. Logisch bleibt nur ein Zwischenzustand der Reinigung."`,
          objectionBy: 'Katholischer Apologet',
          answer: `Wir beten, weil die Liebe nicht mit dem Tod endet und weil das Gericht noch aussteht: Die Entschlafenen sind noch nicht in der Vollendung, die mit der Auferstehung kommt. Wir bitten um Ruhe, Erbarmen und Vergebung und überlassen das Wie Gott. Die alten Liturgien gedenken in derselben Fürbitte sogar der Gottesmutter und der Heiligen, die niemand im Fegefeuer vermutet. Gebet für die Entschlafenen setzt also kein Fegefeuer voraus.`,
          followUps: [
            {
              id: 'nichts-unreines',
              objection: `„Aber nichts Unreines kommt in den Himmel (Offb 21,27). Die meisten sterben unvollkommen – also braucht es eine Reinigung."`,
              objectionBy: 'Katholischer Theologe',
              answer: `Dass Gott die Seinen vollendet, glauben auch wir – er ist es, der das gute Werk vollendet (Phil 1,6). Aber die Schrift schreibt diese Vollendung dem Blut Christi und der Gnade zu, nicht einer Abbüßung von Strafen. Der Schächer am Kreuz war gewiss nicht „vollendet" – und doch hörte er: „Heute wirst du mit mir im Paradiese sein." Gottes Gnade kann in einem Augenblick tun, wofür unser Denken Zeiträume braucht.`,
              sources: [
                { kind: 'bibel', work: 'Philipper', ref: '1,6', quote: `… daß, der in euch angefangen hat das gute Werk, der wird's auch vollführen bis an den Tag Jesu Christi.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'erster-korinther-3',
      objection: `„1 Kor 3,15: ‚Er selbst aber wird gerettet werden, doch so wie durchs Feuer.' Eine Rettung durch Feuer nach dem Tod – das ist das Purgatorium."`,
      objectionBy: 'Katholischer Apologet',
      answer: `Der Zusammenhang spricht von Mitarbeitern, die auf dem Fundament Christus bauen, und vom „Tag", der durchs Feuer offenbar wird – dem Gerichtstag. Das Feuer prüft die **Werke**, nicht die Seelen über Jahre hinweg. Wer schlecht gebaut hat, verliert seinen Lohn, wird aber gerettet – knapp, „wie durchs Feuer". Kein früher Vater hat aus diesem Vers ein kirchliches Dogma gemacht; die Auslegungen gingen weit auseinander.`,
      followUps: [
        {
          id: 'augustinus-gregor-lehrten',
          objection: `„Augustinus und Gregor der Große lehrten das reinigende Feuer. Das ist alte Tradition, nicht mittelalterliche Erfindung."`,
          objectionBy: 'Katholischer Kirchenhistoriker',
          answer: `Augustinus erwog es nur als Möglichkeit („nicht unglaublich"), Gregor der Große entfaltete es im 6. Jahrhundert mit Visionsgeschichten in seinen Dialogen. Das ist westliche Tradition, die im Osten keine Entsprechung fand. Als Florenz es 1439 dogmatisieren wollte, widersprach der griechische Vertreter Markus von Ephesus ausdrücklich. Eine Lehre, die die halbe ungeteilte Kirche nie kannte, kann nicht zum verbindlichen Glauben aller gehören.`,
          sources: [
            { kind: 'kirchenvater', author: 'Gregor der Große', work: 'Dialoge', ref: 'IV,41 (Zählung variiert)', year: 'um 593', status: 'paraphrase', quote: `Für gewisse leichte Schuld muss man glauben, dass es vor dem Gericht ein reinigendes Feuer gibt.` },
          ],
        },
      ],
    },
    {
      id: 'heute-anders-gelehrt',
      objection: `„Ihr kritisiert ein Zerrbild. Die Kirche lehrt heute keinen Ort mit Flammen. Benedikt XVI. schrieb, das reinigende Feuer könne Christus selbst sein, dessen Blick uns läutert."`,
      objectionBy: 'Katholischer Theologe',
      answer: `Das nehme ich dankbar zur Kenntnis – Benedikt XVI. hat in „Spe salvi" (2007, Nr. 47) eine personale Deutung vorgeschlagen, die der orthodoxen Sicht nahekommt: Begegnung mit Christus, die verwandelt. Je mehr die Lehre so verstanden wird, desto kleiner wird der Abstand. Was bleibt, ist die Verbindung mit den „zeitlichen Sündenstrafen" und den Ablässen – und dort liegt der eigentliche Unterschied.`,
      sources: [
        { kind: 'gegner', author: 'Benedikt XVI.', work: 'Enzyklika Spe salvi', ref: '47', year: '2007', status: 'paraphrase', quote: `Einige neuere Theologen meinen, das verbrennende und zugleich rettende Feuer sei Christus selbst, der Richter und Retter.` },
      ],
      followUps: [
        {
          id: 'kopten-unterschrieben-florenz',
          objection: `„In Florenz haben 1442 sogar Vertreter der Kopten die Union mit Rom unterschrieben – einschließlich des Fegefeuers."`,
          objectionBy: 'Katholischer Kirchenhistoriker',
          answer: `Eine kleine Delegation aus dem Antoniuskloster hat in Florenz unterschrieben, ja. Aber die koptische Kirche – ihr Patriarch und ihr Synod – hat diese Union nie angenommen, ebenso wenig wie die griechische Kirche die ihre. Ein Konzilsbeschluss, den die betroffene Kirche nicht empfängt, bindet sie nicht. Das ist übrigens genau das Prinzip der Rezeption, das die Alte Kirche kannte.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wo spricht die Schrift von „zeitlichen Sündenstrafen", die nach dem Tod abgebüßt werden müssen?`,
    `War der Schächer am Kreuz vollendet geläutert, als Jesus ihm das Paradies „heute" verhieß?`,
    `Warum gedenken die alten Liturgien in der Fürbitte auch der Heiligen und der Gottesmutter, wenn Gebet für Tote ein Fegefeuer voraussetzt?`,
    `Warum hat der christliche Osten das Fegefeuer nie gelehrt?`,
  ],
  avoid: [
    `Nicht das Gebet für Verstorbene ablehnen oder lächerlich machen – die koptische Kirche betet für sie.`,
    `Nicht protestantisch argumentieren, die Makkabäerbücher seien „Apokryphen". Sie gehören zur koptischen Bibel.`,
    `Nicht ein mittelalterliches Zerrbild (Seelen in Flammen, Ablasshandel) als heutige katholische Lehre darstellen.`,
  ],
  concessions: [
    `Das Gebet für die Verstorbenen ist uralt und biblisch; hier stehen Kopten und Katholiken gemeinsam gegen viele Protestanten.`,
    `Die heutige katholische Darstellung (KKK, Spe salvi) ist zurückhaltender und personaler als die spätmittelalterliche Frömmigkeit.`,
    `Auch die Orthodoxie kennt keinen festgelegten „Fahrplan" der Seele nach dem Tod; über den Zwischenzustand gibt es verschiedene Auffassungen.`,
  ],
  furtherReading: [
    { kind: 'kirchenvater', author: 'Kyrill von Jerusalem', work: 'Mystagogische Katechesen, Kap. 5', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Kallistos Ware', work: 'The Orthodox Church, Kap. „Die Entschlafenen"', status: 'paraphrase' },
    { kind: 'gegner', author: 'Benedikt XVI.', work: 'Spe salvi', year: '2007', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Fegefeuer', 'Purgatorium', 'Gebet für die Toten', 'Eschatologie', 'Florenz'],
  related: ['heilige-ikonen/gebet-fuer-verstorbene', 'katholizismus/ablass-verdienste', 'sola-scriptura/deuterokanonen-keine-bibel', 'hoelle'],
};

export default claim;
