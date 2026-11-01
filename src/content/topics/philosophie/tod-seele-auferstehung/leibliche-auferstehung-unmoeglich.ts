import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'leibliche-auferstehung-unmoeglich',
  title: `„Die leibliche Auferstehung ist unmöglich – die Atome werden wiederverwertet."`,
  proponents: [
    { name: 'Kelsos (Celsus)', role: 'Platonischer Philosoph, 2. Jh.', work: '„Wahres Wort" (um 178), überliefert bei Origenes, Contra Celsum V,14 – „Hoffnung von Würmern"' },
    { name: 'Porphyrios', role: 'Neuplatonischer Philosoph (ca. 234–305)', work: 'Gegen die Christen (Fragmente); bei Augustinus: „Jeder Körper ist zu fliehen"' },
    { name: 'Derek Parfit', role: 'Philosoph, Oxford (1942–2017)', work: 'Reasons and Persons (1984), Teil III – Verdopplung und persönliche Identität' },
    { name: 'Michael Martin & Keith Augustine (Hg.)', role: 'Herausgeber', work: 'The Myth of an Afterlife: The Case against Life after Death (2015)' },
  ],
  steelman: `Die Atome eines Menschen bleiben nach seinem Tod nicht beisammen. Sie gehen in Erde, Pflanzen und Tiere über und werden Teil anderer Menschen. Ein Seemann ertrinkt, Fische fressen ihn, Fischer essen die Fische – wem gehören die Atome bei der Auferstehung? In Zeiten der Hungersnot haben Menschen sogar Menschen gegessen. Über Jahrtausende hinweg waren dieselben Kohlenstoffatome Teil unzähliger Körper. Eine Auferstehung „mit demselben Leib" ist daher physikalisch unmöglich. Und wenn Gott einfach einen neuen Körper aus neuem Material schafft, ist das eine Kopie, nicht der Verstorbene – Derek Parfit hat gezeigt: Gott könnte ebenso gut zwei solcher Kopien erschaffen; welche wäre dann „du"? Schon der Philosoph Kelsos spottete im 2. Jahrhundert, die Auferstehungshoffnung sei eine „Hoffnung von Würmern": Welcher völlig verweste Leib könnte je wiederkehren? Und Paulus selbst sagt: „Fleisch und Blut können das Reich Gottes nicht ererben" (1 Kor 15,50).`,
  biblical: {
    summary: `Paulus kennt den Einwand schon: „Wie werden die Toten auferstehen, und mit welchem Leibe werden sie kommen?" (1 Kor 15,35). Seine Antwort ist das Bild vom Samenkorn: Was gesät wird, ist nicht der Leib, der werden soll, sondern ein bloßes Korn – Gott gibt ihm einen Leib, wie er will. Es gibt Kontinuität (dasselbe Korn, dieselbe Pflanze) und Verwandlung (ein ganz neuer Zustand): „Es wird gesät verweslich und wird auferstehen unverweslich … gesät ein natürlicher Leib und auferstehen ein geistlicher Leib" (15,42–44). Der auferstandene Christus ist das Urbild: mit den Wundmalen, berührbar, er isst – und zugleich verwandelt, nicht mehr dem Tod unterworfen.`,
    detail: `- **1 Kor 15,36–38:** Kontinuität ohne Gleichheit der Materie – die Pflanze besteht nicht aus „denselben Atomen" wie das Samenkorn, und doch ist sie *seine* Pflanze.
- **„Geistlicher Leib" (sōma pneumatikon, 15,44):** nicht ein Leib *aus* Geist, sondern ein vom Geist Gottes ganz durchdrungener und belebter Leib – im Gegensatz zum „natürlichen" (*psychikon*) Leib, der nicht „aus Seele" besteht, sondern von der natürlichen Lebenskraft getragen wird.
- **„Fleisch und Blut" (15,50):** eine jüdische Redewendung für die sterbliche, vergängliche Menschennatur (vgl. Mt 16,17; Gal 1,16). Paulus fährt fort: „Dies Verwesliche muss anziehen die Unverweslichkeit" (15,53) – *dasselbe* wird verwandelt.
- **Lk 24,39–43:** Der Auferstandene sagt: „Ein Geist hat nicht Fleisch und Bein, wie ihr seht, dass ich habe" und isst vor ihren Augen.
- **Phil 3,21:** Christus wird „unseren nichtigen Leib verklären, dass er ähnlich werde seinem verklärten Leibe".`,
    sources: [
      { kind: 'bibel', work: '1. Korinther', ref: '15,35–38', quote: `Möchte aber jemand sagen: Wie werden die Toten auferstehen, und mit welchem Leibe werden sie kommen? Du Narr, was du säst, wird nicht lebendig, es sterbe denn. Und was du säst, ist ja nicht der Leib, der werden soll, sondern ein bloßes Korn, etwa Weizen oder der andern eines. Gott aber gibt ihm einen Leib, wie er will, und einem jeglichen von den Samen seinen eigenen Leib.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '15,42–44', quote: `Also auch die Auferstehung der Toten. Es wird gesät verweslich, und wird auferstehen unverweslich. … Es wird gesät ein natürlicher Leib, und wird auferstehen ein geistlicher Leib.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '15,53', quote: `Denn dies Verwesliche muß anziehen das Unverwesliche, und dies Sterbliche muß anziehen die Unsterblichkeit.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '24,39.42–43', quote: `Sehet meine Hände und meine Füße: ich bin's selber. Fühlet mich an und sehet; denn ein Geist hat nicht Fleisch und Bein, wie ihr seht, daß ich habe. … Und sie legten ihm vor ein Stück von gebratenem Fisch und Honigseim. Und er nahm's und aß vor ihnen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Philipper', ref: '3,21', quote: `… welcher unsern nichtigen Leib verklären wird, daß er ähnlich werde seinem verklärten Leibe nach der Wirkung, damit er kann auch alle Dinge sich untertänig machen.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Kirche bekennt in jeder Liturgie: „Wir erwarten die Auferstehung der Toten und das Leben der kommenden Welt." Der „Kannibalen-Einwand" ist dabei keine moderne Entdeckung: Schon Athenagoras von Athen behandelte im 2. Jahrhundert ausführlich die Frage, was geschieht, wenn Menschen von Tieren oder anderen Menschen verzehrt werden. Gregor von Nyssa erklärte, dass die Seele die „Gestalt" ihres Leibes bewahrt und ihn in der Auferstehung wiedererkennt. Die alexandrinische Tradition – Irenäus vor ihr, Kyrill in ihrer Mitte – sieht in der Eucharistie das Samenkorn der Auferstehung: Wer das lebenspendende Fleisch Christi empfängt, trägt den Keim der Unverweslichkeit in sich.`,
    detail: `Die koptische Kirche lehrt, dass die Seele zwischen Tod und Auferstehung fortlebt; es gibt also keine „Lücke" in der Existenz der Person. In der Auferstehung wird der Leib wiedergegeben – derselbe Mensch, nicht eine Kopie –, aber verklärt, unverweslich und vom Geist durchdrungen. Wie genau Gott die Kontinuität des Leibes bewirkt, ist nicht dogmatisch festgelegt; die Väter haben verschiedene Erklärungen angeboten. Fest steht: Gott verwirft seine Schöpfung nicht, er verwandelt sie.`,
    sources: [
      { kind: 'konzil', work: 'Glaubensbekenntnis von Nizäa-Konstantinopel', year: '381', quote: `Wir erwarten die Auferstehung der Toten und das Leben der kommenden Welt.`, status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien (Adversus Haereses)', ref: 'V,2,3', year: 'um 180', status: 'paraphrase', quote: 'Wie das Weizenkorn in die Erde fällt, sich auflöst und vielfältig aufersteht, so werden unsere Leiber, durch die Eucharistie genährt, in die Erde gelegt und zu ihrer Zeit auferstehen.' },
      { kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Kommentar zum Johannesevangelium', ref: 'Buch IV (zu Joh 6,54)', status: 'paraphrase', quote: 'Das Fleisch Christi ist lebenspendend, weil es das Fleisch des Lebens selbst ist; wer es empfängt, wird von ihm zur Unverweslichkeit umgestaltet und auferweckt.' },
    ],
  },
  quickAnswer: `Dieser Einwand ist fast 1900 Jahre alt – schon Athenagoras hat ihn im 2. Jahrhundert behandelt. Die Antwort: Deine Identität hängt nicht an bestimmten Atomen. Schon jetzt tauscht dein Körper im Lauf der Jahre einen großen Teil seiner Atome aus, und doch bist du derselbe. Paulus vergleicht die Auferstehung mit einem Samenkorn: Die Pflanze besteht nicht aus denselben Atomen wie das Korn und ist doch *seine* Pflanze. Nach koptisch-orthodoxem Glauben lebt die Seele zwischen Tod und Auferstehung fort – darum ist der Auferstandene keine Kopie, sondern derselbe Mensch mit verwandeltem Leib. Und der Gott, der die Welt aus dem Nichts erschaffen hat, ist nicht auf ein bestimmtes Kohlenstoffatom angewiesen.`,
  keyPoints: [
    `**Alter Einwand, alte Antwort:** Athenagoras (2. Jh.), Augustinus (De civ. Dei XXII) und Gregor von Nyssa kannten das Kannibalen-Problem.`,
    `**Identität ist nicht Atom-Identität:** Unser Körper tauscht ständig Material aus; was dich ausmacht, ist nicht ein Atomsatz, sondern die Person, die ihren Leib formt und belebt.`,
    `**Das Samenkorn (1 Kor 15):** Kontinuität und Verwandlung zugleich – dieselbe Pflanze, nicht dieselben Atome.`,
    `**Keine Lücke:** Die Seele lebt zwischen Tod und Auferstehung fort (Lk 23,43; Phil 1,23). Darum ist der Auferstandene keine Kopie.`,
    `**Auch Materialisten haben Modelle:** Peter van Inwagen (1978) und Dean Zimmerman (1999) zeigen, dass leibliche Auferstehung selbst ohne Seele logisch möglich ist.`,
    `**„Geistlicher Leib" ist kein Widerspruch:** ein vom Geist durchdrungener Leib, kein Leib aus Geist.`,
  ],
  voices: [
    {
      person: 'athenagoras',
      role: 'als Apologet des 2. Jahrhunderts',
      text: `Athenagoras von Athen, ein christlicher Philosoph aus der Zeit um 177, widmet eine eigene Schrift der Auferstehung. Ausführlich behandelt er den Einwand, Menschen würden von Fischen oder wilden Tieren gefressen, diese wiederum von Menschen, sodass die Teile eines Leibes in andere übergingen. Er argumentiert, dass Gott, der jeden Teil seines Werkes kennt, die zu einem Leib gehörenden Bestandteile auseinanderhalten und wiedervereinen kann; zudem werde nicht alles Gegessene zu einem dauerhaften Teil des Körpers. Seine biologischen Einzelheiten sind zeitgebunden – aber er zeigt, dass Christen den Einwand von Anfang an ernst nahmen und nicht vor ihm zurückwichen.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athenagoras von Athen', work: 'Über die Auferstehung der Toten (De resurrectione mortuorum)', ref: 'Kap. 3–8', year: 'um 177–180', status: 'paraphrase', quote: 'Antwort auf den Einwand der „Kettennahrung": Gott kennt und vereint die einem Leib eigenen Teile.', note: 'Die Echtheit der Schrift ist überwiegend anerkannt, wird aber von einigen Forschern bezweifelt; die biologischen Argumente sind zeitbedingt.' },
      ],
    },
    {
      person: 'gregor-nyssa',
      role: 'als Philosoph der Auferstehung',
      text: `In seinem Dialog mit seiner Schwester Makrina „Über die Seele und die Auferstehung" erklärt Gregor, dass die Seele nach dem Tod mit den Bestandteilen ihres Leibes verbunden bleibt, so wie ein Töpfer seine Gefäße an einem Zeichen wiedererkennt. Wichtiger als die Materie ist für ihn die „Gestalt" (*eidos*) des Menschen, die die Seele bewahrt. In der Auferstehung wird der Leib nicht in seinem früheren, gebrechlichen Zustand wiederhergestellt, sondern in einen herrlicheren verwandelt – so wie die Ähre etwas anderes ist als das Korn und doch aus ihm hervorgeht.`,
      sources: [
        { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Über die Seele und die Auferstehung (De anima et resurrectione)', year: 'um 380', status: 'paraphrase', quote: 'Die Seele erkennt und sammelt die Elemente ihres Leibes; der Auferstehungsleib ist wie die Ähre gegenüber dem Korn – verwandelt und doch derselbe.' },
        { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Über die Erschaffung des Menschen (De hominis opificio)', ref: '27', status: 'paraphrase', quote: 'Die Seele bewahrt die Gestalt ihres Leibes und erkennt sie in der Auferstehung wieder.' },
      ],
    },
    {
      person: 'kyrill-alexandrien',
      role: 'als Theologe des lebenspendenden Fleisches',
      text: `Kyrill legt Joh 6 („Wer mein Fleisch isst … den werde ich auferwecken am Jüngsten Tage") so aus, dass das Fleisch Christi lebenspendend ist, weil es das eigene Fleisch des Logos, des Lebens selbst, ist. Wer es in der Eucharistie empfängt, empfängt den Keim der Unverweslichkeit, der den sterblichen Leib verwandeln wird – wie ein wenig Sauerteig den ganzen Teig durchsäuert. Für Kyrill ist die Auferstehung daher keine Neuschöpfung aus dem Nichts, sondern die Vollendung eines Prozesses, der schon jetzt in den Gläubigen begonnen hat.`,
      sources: [
        { kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Kommentar zum Johannesevangelium', ref: 'Buch IV (zu Joh 6)', status: 'paraphrase', quote: 'Das lebenspendende Fleisch Christi wirkt in uns wie Sauerteig zur Unverweslichkeit.' },
      ],
    },
    {
      person: 'thomas-aquin',
      role: 'als Metaphysiker von Leib und Seele',
      text: `Thomas versteht die Seele als „Form" des Leibes: Sie macht die Materie zu *diesem* lebendigen menschlichen Leib. Darum hängt die Identität des Leibes nicht an der genauen Materie, sondern an der Seele, die ihn formt. In der Summa contra Gentiles geht er die Einwände gegen die Auferstehung einzeln durch – auch den, dass Menschen Menschenfleisch essen – und antwortet, dass für die Identität des Auferstehungsleibes nicht erforderlich ist, dass jedes Teilchen zurückkehrt. Auch im irdischen Leben bleibt der Mensch derselbe, obwohl sein Stoff sich wandelt.`,
      sources: [
        { kind: 'fachliteratur', author: 'Thomas von Aquin', work: 'Summa contra Gentiles', ref: 'IV,80–81', status: 'paraphrase', quote: 'Einwände gegen die Auferstehung (u. a. das Essen von Menschenfleisch) und ihre Lösung: Die Identität des Leibes beruht auf der Seele als Form, nicht auf jedem einzelnen Stoffteil.' },
      ],
    },
    {
      person: 'van-inwagen',
      role: 'als analytischer Metaphysiker',
      text: `Van Inwagen, der selbst den menschlichen Körper für das Wesentliche hält, fragte 1978, wie eine Auferstehung für einen Materialisten überhaupt möglich sei. Sein (bewusst spekulatives) Modell: Gott könnte im Augenblick des Todes den Leichnam bewahren und durch ein Abbild ersetzen, das dann verwest. Das Modell soll nicht beschreiben, was Gott tut, sondern zeigen, dass leibliche Auferstehung logisch möglich ist. Dean Zimmerman schlug später ein anderes Modell vor. Für den Dualisten – und für die koptische Kirche, die das Fortleben der Seele lehrt – stellt sich das Problem gar nicht in dieser Schärfe.`,
      sources: [
        { kind: 'fachliteratur', author: 'Peter van Inwagen', work: '„The Possibility of Resurrection", International Journal for Philosophy of Religion 9', year: '1978', status: 'paraphrase', quote: 'Ein Modell, das die logische Möglichkeit der Auferstehung auch für Materialisten zeigt.' },
        { kind: 'fachliteratur', author: 'Dean Zimmerman', work: '„The Compatibility of Materialism and Survival: The \'Falling Elevator\' Model", Faith and Philosophy 16', year: '1999', status: 'paraphrase', quote: 'Alternatives materialistisches Modell der Auferstehung.' },
      ],
    },
  ],
  dialog: [
    {
      id: 'kannibalen-einwand',
      objection: `„Ein Seemann ertrinkt, Fische fressen ihn, Menschen essen die Fische. In Hungersnöten haben Menschen sogar Menschen gegessen. Wem gehören diese Atome bei der Auferstehung? Es ist unmöglich, dass alle ihren Körper zurückbekommen."`,
      objectionBy: 'Porphyrios (antik) / Keith Augustine (modern)',
      answer: `Das ist einer der ältesten Einwände überhaupt – Athenagoras hat ihn schon um 177 behandelt, Augustinus um 420. Die Antwort: Deine Identität hängt nicht an bestimmten Atomen. Schon jetzt tauscht dein Körper im Lauf der Jahre einen großen Teil seines Materials aus, und du bist trotzdem derselbe Mensch. Paulus sagt: Wie die Pflanze aus dem Samenkorn hervorgeht, ohne aus denselben Teilchen zu bestehen, so gibt Gott dem Auferstandenen einen Leib, „wie er will".`,
      sources: [
        { kind: 'kirchenvater', author: 'Augustinus', work: 'Vom Gottesstaat (De civitate Dei)', ref: 'XXII,20', status: 'paraphrase', quote: 'Das Fleisch, das ein Hungernder von einem anderen Menschen gegessen hat, wird dem zurückgegeben, in dem es zuerst menschliches Fleisch war; was dem anderen fehlt, ergänzt der allmächtige Schöpfer.' },
      ],
      followUps: [
        {
          id: 'welcher-stoff-meiner',
          objection: `„Wenn es nicht dieselben Atome sein müssen – welcher Körper ist dann ‚deiner'? Dann tut es jedes beliebige Material, und das ist ein neuer Körper, nicht deiner."`,
          objectionBy: 'Derek Parfit / Keith Augustine (sinngemäß)',
          answer: `„Dein" Körper ist der, den *du* formst und belebst. Thomas von Aquin nennt die Seele die „Form" des Leibes: Sie macht Materie zu diesem lebendigen Menschen. Ein Fluss bleibt derselbe Fluss, obwohl das Wasser fließt; ein Mensch bleibt derselbe, obwohl sein Stoff wechselt. Weil die Seele den Tod überdauert, gibt es eine durchgehende Person, die in der Auferstehung wieder einen Leib „bekommt" – ihren eigenen, aber verklärt.`,
          followUps: [
            {
              id: 'parfit-verdopplung',
              objection: `„Dann könnte Gott ebenso gut zwei solcher Körper mit deinen Erinnerungen und deinem Charakter erschaffen. Welcher wäre dann du? Die Verdopplung zeigt: Es ist eine Kopie, kein Weiterleben."`,
              objectionBy: 'Derek Parfit (Reasons and Persons, 1984)',
              answer: `Das Verdopplungsproblem trifft Theorien, nach denen eine Person nur ein *Muster* aus Erinnerungen und Eigenschaften ist – Muster kann man kopieren. Nach christlichem Verständnis ist die Seele aber kein Muster, sondern ein einzelnes, unteilbares Subjekt; man kann sie nicht verdoppeln. Selbst wenn Gott zwei gleiche Körper machte, wäre nur einer von dir beseelt. Die Kopie wäre ein anderer Mensch – und genau deshalb lehrt die Kirche, dass dieselbe Seele mit ihrem Leib vereint wird.`,
              sources: [
                { kind: 'gegner', author: 'Derek Parfit', work: 'Reasons and Persons', year: '1984', ref: 'Teil III', status: 'paraphrase', quote: 'Gedankenexperimente zu Teleportation und Verdopplung: Persönliche Identität ist nicht das, worauf es ankommt.' },
              ],
              followUps: [
                {
                  id: 'seele-ad-hoc',
                  objection: `„Du ziehst die Seele aus dem Hut, nur um das Problem zu lösen. Das ist ad hoc."`,
                  objectionBy: 'Keith Augustine (sinngemäß)',
                  answer: `Die Seele ist keine Erfindung für dieses Problem. Die Kirche lehrt sie seit den Anfängen (Lk 23,43; Phil 1,23), und es gibt unabhängige philosophische Gründe für sie: das bewusste Erleben, die Einheit des Ich, die Bedeutung von Gedanken. Und selbst wer keine Seele annimmt, hat mit van Inwagen und Zimmerman logisch mögliche Modelle. Der Einwand zeigt also höchstens, dass der Materialismus es schwer hat – nicht die Auferstehung.`,
                  detail: `Siehe „Nach dem Tod ist nichts – das Bewusstsein erlischt" und „Ein körperloser Geist ist ein inkohärenter Begriff".`,
                },
              ],
            },
          ],
        },
        {
          id: 'leeres-grab-dann-unnoetig',
          objection: `„Wenn es auf die Atome nicht ankommt – warum besteht ihr dann auf dem leeren Grab? Gott hätte Jesus doch einen neuen Körper geben und den alten im Grab lassen können."`,
          objectionBy: 'John Dominic Crossan / liberale Theologie (sinngemäß)',
          answer: `Weil Gott seine Schöpfung nicht wegwirft, sondern verwandelt. Das leere Grab zeigt: Der Leib, der gekreuzigt wurde, ist nicht verloren, sondern verherrlicht – mit den Wundmalen (Joh 20,27). Dass die Identität nicht an jedem Atom hängt, heißt nicht, dass Materie gleichgültig ist. Bei Jesus, dessen Leib nicht verweste, ist die Kontinuität vollkommen sichtbar; bei uns, deren Leib zerfällt, wirkt Gott dieselbe Treue auf andere Weise.`,
        },
      ],
    },
    {
      id: 'tote-stehen-nicht-auf',
      objection: `„Tote stehen nicht auf – das ist die gleichförmigste Erfahrung der Menschheit. Schon Kelsos nannte die Auferstehungshoffnung eine ‚Hoffnung von Würmern'."`,
      objectionBy: 'Kelsos (bei Origenes, Contra Celsum V,14) / David Hume',
      answer: `Natürlich stehen Tote nicht *von selbst* auf – das behauptet niemand. Die Auferstehung ist kein natürlicher Vorgang, sondern eine Tat Gottes. Justin der Märtyrer antwortete schon im 2. Jahrhundert: Wer nicht wüsste, wie ein Mensch entsteht, würde nie glauben, dass aus einem winzigen Tropfen Samen Knochen, Sehnen und Fleisch werden. Der Gott, der uns einmal aus fast nichts gemacht hat, kann uns wieder ins Leben rufen.`,
      sources: [
        { kind: 'gegner', author: 'Kelsos', work: 'Wahres Wort (bei Origenes, Contra Celsum)', ref: 'V,14', year: 'um 178', status: 'paraphrase', quote: 'Die Hoffnung auf Auferstehung des Fleisches sei eine „Hoffnung von Würmern"; welcher völlig verweste Leib könnte wiederkehren?' },
        { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Erste Apologie', ref: '18–19', year: 'um 155', status: 'paraphrase', quote: 'Wer nicht wüsste, dass aus einem kleinen Tropfen menschlichen Samens ein Mensch wird, würde es nicht glauben; ebenso ist die Auferstehung für Gott nicht unmöglich.' },
      ],
      followUps: [
        {
          id: 'physik-verbietet',
          objection: `„Die Physik verbietet das. Ein zerfallener Körper kann sich nicht wieder zusammensetzen – das widerspricht dem zweiten Hauptsatz der Thermodynamik."`,
          objectionBy: 'Sean Carroll (sinngemäß)',
          answer: `Die Naturgesetze beschreiben, was geschieht, wenn nichts von außen eingreift – sie verbieten nicht, dass der Schöpfer selbst handelt. C. S. Lewis verglich es mit einem Billardtisch: Die Gesetze der Mechanik sagen, wie die Kugeln rollen, aber sie verbieten nicht, dass jemand eine Kugel in die Hand nimmt. Die Auferstehung ist ausdrücklich ein Wunder; wer sie für unmöglich hält, muss zeigen, dass es Gott nicht gibt – die Physik allein zeigt das nicht.`,
          sources: [
            { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Miracles (Wunder)', year: '1947', ref: 'Kap. 8', status: 'paraphrase', quote: 'Naturgesetze beschreiben den Lauf der Dinge, wenn nichts eingreift; ein Wunder bricht sie nicht, sondern speist ein neues Ereignis in die Natur ein.' },
          ],
          followUps: [
            {
              id: 'allmacht-erklaert-alles',
              objection: `„‚Gott kann alles' erklärt einfach alles und damit nichts. So kannst du jede beliebige Behauptung retten."`,
              objectionBy: 'Michael Martin (sinngemäß)',
              answer: `Nicht jede beliebige: Die christliche Hoffnung ist an ein konkretes, geschichtliches Ereignis gebunden – die Auferstehung Jesu, mit Grab, Zeugen und Datum. Wenn sie nicht geschah, ist der Glaube widerlegt (1 Kor 15,14). Und sie ist inhaltlich bestimmt: leiblich, verwandelt, unverweslich. Das ist das Gegenteil eines Freibriefs für Beliebiges.`,
              detail: `Siehe „Gott ist wie Flews unsichtbarer Gärtner – eine unfalsifizierbare Hypothese".`,
            },
          ],
        },
      ],
    },
    {
      id: 'geistlicher-leib-widerspruch',
      objection: `„Paulus spricht von einem ‚geistlichen Leib' – das ist ein Widerspruch in sich, wie ‚hölzernes Eisen'. Paulus hat in Wahrheit gar nicht an eine körperliche Auferstehung geglaubt."`,
      objectionBy: 'Bart Ehrman (How Jesus Became God, 2014, sinngemäß) / Zeugen Jehovas',
      answer: `„Geistlicher Leib" (*sōma pneumatikon*) heißt nicht „Leib aus Geist", sondern „vom Geist Gottes ganz belebter Leib". Paulus stellt ihn dem „natürlichen Leib" (*sōma psychikon*) gegenüber – und der besteht ja auch nicht „aus Seele", sondern wird von der natürlichen Lebenskraft getragen. Das Wort *sōma* bezeichnet bei Paulus immer einen Leib. Er spricht von Verwandlung, nicht von Auflösung.`,
      followUps: [
        {
          id: 'fleisch-und-blut',
          objection: `„Aber Paulus sagt ausdrücklich: ‚Fleisch und Blut können das Reich Gottes nicht ererben' (1 Kor 15,50). Deutlicher geht es nicht."`,
          objectionBy: 'Bart Ehrman / Zeugen Jehovas',
          answer: `„Fleisch und Blut" ist eine jüdische Redewendung für die sterbliche, schwache Menschennatur – so in Mt 16,17 („Fleisch und Blut hat dir das nicht offenbart") oder Gal 1,16. Paulus fährt im selben Atemzug fort: „Dies Verwesliche muss anziehen die Unverweslichkeit" (15,53) – *dasselbe* wird verwandelt, nicht ersetzt. Das Problem ist nicht der Leib, sondern seine Vergänglichkeit.`,
          followUps: [
            {
              id: 'paulus-vision',
              objection: `„Paulus' eigene Begegnung mit Jesus war eine Lichtvision vor Damaskus, und er stellt sie in dieselbe Liste wie die anderen Erscheinungen. Also waren alle Erscheinungen Visionen."`,
              objectionBy: 'Gerd Lüdemann / Bart Ehrman',
              answer: `Paulus unterscheidet selbst zwischen Visionen und Offenbarungen (2 Kor 12,1–4) und der einmaligen Erscheinung des Auferstandenen, die er als „zuletzt" bezeichnet (1 Kor 15,8). Für ihn als Pharisäer bedeutete „auferweckt" ein leibliches Geschehen – deshalb betont er „begraben" und „auferweckt am dritten Tag". Die Evangelien berichten zudem von Berühren und gemeinsamem Essen und vom leeren Grab, das keine Vision erklärt.`,
              detail: `Siehe „Die Jünger hatten Halluzinationen" und „Die Auferstehungserscheinungen waren Trauerhalluzinationen".`,
            },
          ],
        },
      ],
    },
    {
      id: 'warum-ueberhaupt-koerper',
      objection: `„Warum sollte man in der Ewigkeit überhaupt einen Körper wollen? Körper sind zum Essen, Verdauen und Fortpflanzen da. Ein reiner Geist ist doch edler – schon Porphyrios sagte: ‚Jeder Körper ist zu fliehen.'"`,
      objectionBy: 'Porphyrios (bei Augustinus, De civ. Dei XXII,26) / platonischer Einwand',
      answer: `Für das Christentum ist der Leib nicht ein Gefängnis, sondern gute Schöpfung Gottes (Gen 1,31). Der Mensch ist nicht eine Seele, die zufällig in einem Körper steckt, sondern eine Einheit aus Leib und Seele. Der stärkste Beweis: Der ewige Logos hat selbst Fleisch angenommen und ist mit seinem verklärten Leib aufgefahren. Athanasius sagt, Gott habe den Leib nicht verachtet, sondern ihn zum Werkzeug der Erlösung gemacht.`,
      sources: [
        { kind: 'kirchenvater', author: 'Augustinus', work: 'Vom Gottesstaat', ref: 'XXII,26', status: 'paraphrase', quote: 'Augustinus zitiert Porphyrios\' Grundsatz, jeder Körper sei zu fliehen, und widerlegt ihn mit der Auferstehung.' },
      ],
      followUps: [
        {
          id: 'organe-ohne-funktion',
          objection: `„Aber wozu Organe, wenn man nicht mehr essen, verdauen und sich fortpflanzen muss? Ein Auferstehungsleib wäre ein Körper ohne Funktion."`,
          objectionBy: 'Keith Augustine (sinngemäß)',
          answer: `Der Auferstandene *konnte* essen, auch wenn er es nicht *musste* (Lk 24,43). Jesus sagt, in der Auferstehung werde man nicht heiraten (Mt 22,30) – aber das heißt nicht, dass Mann und Frau aufhören, sie selbst zu sein. Vieles wissen wir nicht: „Es ist noch nicht erschienen, was wir sein werden" (1 Joh 3,2). Dass wir den künftigen Leib nicht im Detail beschreiben können, heißt nicht, dass er sinnlos wäre – so wenig wie ein Embryo verstehen könnte, wozu Augen gut sind.`,
          sources: [
            { kind: 'bibel', work: '1. Johannes', ref: '3,2', quote: `Meine Lieben, wir sind nun Gottes Kinder; und es ist noch nicht erschienen, was wir sein werden. Wir wissen aber, wenn es erscheinen wird, daß wir ihm gleich sein werden; denn wir werden ihn sehen, wie er ist.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
          followUps: [
            {
              id: 'welches-alter-behinderung',
              objection: `„Und in welchem Zustand? Als Greis, als Baby, mit meiner Behinderung? Das ganze Konzept ist absurd, sobald man es konkret denkt."`,
              objectionBy: 'Kelsos / populärer Einwand',
              answer: `Augustinus hat solche Fragen schon gestellt und vorsichtig vermutet, alle würden im Alter der Reife auferstehen. Die Kirche hat das nicht zum Dogma gemacht – aber sie lehrt klar: Der Auferstehungsleib ist heil, verklärt und frei von Gebrechen. Wer sein Leben mit einer Behinderung verbracht hat, wird nicht entstellt, sondern vollendet; die Wunden der Märtyrer werden nach Augustinus eher wie Ehrenzeichen leuchten, so wie die Wundmale Christi. Das ist nicht absurd, sondern Hoffnung.`,
              sources: [
                { kind: 'kirchenvater', author: 'Augustinus', work: 'Vom Gottesstaat', ref: 'XXII,15 und XXII,19', status: 'paraphrase', quote: 'Vermutung, die Auferstandenen hätten das Alter der vollen Reife; die Wunden der Märtyrer würden als Zeichen der Ehre sichtbar bleiben.' },
              ],
              detail: `**Pastoral:** Für Menschen mit Behinderung oder für Eltern, die ein Kind verloren haben, ist diese Frage oft tief persönlich. Die christliche Antwort ist Zusage, nicht Spekulation: „Gott wird abwischen alle Tränen von ihren Augen" (Offb 21,4).`,
            },
          ],
        },
      ],
    },
    {
      id: 'luecke-zwischen-tod-und-auferstehung',
      objection: `„Zwischen Tod und Auferstehung liegt eine Lücke von vielleicht Jahrtausenden, in der nichts von dir existiert. Was soll den Auferstandenen dann mit dir verbinden?"`,
      objectionBy: 'Peter van Inwagen (Problemstellung, 1978) / Trenton Merricks',
      answer: `Nach koptisch-orthodoxem Glauben gibt es diese Lücke nicht: Die Seele lebt zwischen Tod und Auferstehung fort – „heute wirst du mit mir im Paradiese sein" (Lk 23,43). Sie ist das Band zwischen dem Verstorbenen und dem Auferstandenen. Darum betet die Kirche für ihre Entschlafenen: Sie sind nicht ausgelöscht, sondern leben in Christus und erwarten die Auferstehung.`,
      followUps: [
        {
          id: 'seelenschlaf',
          objection: `„Die Bibel sagt doch, die Toten ‚schlafen'. Viele Christen – Adventisten, Zeugen Jehovas – lehren deshalb, die Toten seien bewusstlos, bis zur Auferstehung."`,
          objectionBy: 'Zeugen Jehovas / Siebenten-Tags-Adventisten',
          answer: `„Schlafen" ist ein Bild für den Tod der Gläubigen, aus dem man wieder erwacht – es sagt nichts über Bewusstlosigkeit der Seele. Jesus verspricht dem Schächer „heute" das Paradies (Lk 23,43); Paulus will „abscheiden und bei Christus sein, was viel besser wäre" (Phil 1,23) – Bewusstlosigkeit wäre kaum „viel besser"; die Seelen der Märtyrer rufen unter dem Altar zu Gott (Offb 6,9–10). Die alte Kirche hat einmütig ein bewusstes Leben der Seelen bei Christus bekannt.`,
          detail: `Siehe „Jesus starb an einem Pfahl; die Seele ist sterblich; es gibt keine Hölle" im Themenblock „Zeugen Jehovas".`,
          questionsBack: [`Warum sollte Paulus es „viel besser" finden, bewusstlos zu sein, als Christus im Leben zu dienen?`],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Bist du derselbe Mensch wie vor zehn Jahren – obwohl sich ein großer Teil deines Körpermaterials ausgetauscht hat? Was macht dich dann zu dir?`,
    `Besteht eine Pflanze aus denselben Atomen wie das Samenkorn? Ist sie trotzdem *seine* Pflanze?`,
    `Wenn Gott die Welt aus dem Nichts erschaffen kann – warum sollte er an einem bestimmten Kohlenstoffatom scheitern?`,
    `Ist das eigentliche Problem die Physik der Auferstehung – oder die Frage, ob es Gott gibt?`,
  ],
  avoid: [
    `„Gott sammelt jedes einzelne Atom wieder ein." – Das macht das Kannibalen-Problem unnötig schwer und ist weder biblisch noch kirchlich verlangt.`,
    `Die Auferstehung zu einem rein geistigen Weiterleben umdeuten – das widerspricht dem leeren Grab und dem Bekenntnis der Kirche.`,
    `Athenagoras' biologische Einzelargumente (unverdauliches Menschenfleisch) als moderne Wissenschaft ausgeben – sie sind zeitgebunden.`,
  ],
  concessions: [
    `Wie Gott die Kontinuität des Leibes genau bewirkt, ist nicht offenbart; die Väter boten verschiedene Erklärungen an, keine ist Dogma.`,
    `Für einen strikt materialistischen Christen ist die Identitätsfrage schwieriger; die verfügbaren Modelle (van Inwagen, Zimmerman) sind spekulativ.`,
    `Manche antiken Antworten auf den Kannibalen-Einwand beruhen auf überholter Biologie.`,
  ],
  furtherReading: [
    { kind: 'kirchenvater', author: 'Athenagoras von Athen', work: 'Über die Auferstehung der Toten', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Über die Seele und die Auferstehung', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Caroline Walker Bynum', work: 'The Resurrection of the Body in Western Christianity, 200–1336', year: '1995', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'N. T. Wright', work: 'The Resurrection of the Son of God', year: '2003', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Peter van Inwagen', work: '„The Possibility of Resurrection"', year: '1978', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Auferstehung', 'Identität', 'Kannibalen-Einwand', 'Athenagoras', 'Samenkorn', 'Seele'],
  related: [
    'tod-seele-auferstehung/nach-dem-tod-nichts',
    'sinn-existenz/tod-ist-das-ende',
    'auferstehung/halluzinationen',
    'auferstehung/wunder-historisch-unmoeglich',
    'zeugen-jehovas/pfahl-seele-hoelle',
    'sakramente',
  ],
};

export default claim;
