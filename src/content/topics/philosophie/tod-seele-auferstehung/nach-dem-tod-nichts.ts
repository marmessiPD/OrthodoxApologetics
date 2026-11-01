import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'nach-dem-tod-nichts',
  title: `„Nach dem Tod ist nichts – das Bewusstsein erlischt."`,
  proponents: [
    { name: 'Bertrand Russell', role: 'Philosoph (1872–1970)', work: '„What I Believe" (1925); „Do We Survive Death?" (1936)' },
    { name: 'Sean Carroll', role: 'Theoretischer Physiker, Johns Hopkins University', work: '„Physics and the Immortality of the Soul", Scientific American (Blog, 2011); The Big Picture (2016)' },
    { name: 'Paul Edwards', role: 'Philosoph, Brooklyn College (1923–2004)', work: 'Immortality (Hg., 1992) – das „Alzheimer-Argument"' },
    { name: 'Corliss Lamont', role: 'Humanistischer Philosoph (1902–1995)', work: 'The Illusion of Immortality (1935)' },
    { name: 'Michael Shermer', role: 'Wissenschaftspublizist, Skeptic Society', work: 'Heavens on Earth (2018)' },
  ],
  steelman: `Alles, was wir über den Geist wissen, zeigt seine vollständige Abhängigkeit vom Gehirn. Eine Narkose schaltet das Bewusstsein ab; ein Schlaganfall raubt die Sprache; ein Tumor im Stirnlappen verändert den Charakter; die Alzheimer-Krankheit zerstört Stück für Stück Erinnerung, Persönlichkeit und Selbst. Paul Edwards fragt: Wenn eine *teilweise* Zerstörung des Gehirns den Geist *teilweise* zerstört – warum sollte eine *vollständige* Zerstörung ihn unversehrt lassen? Sean Carroll ergänzt: Die Physik des Alltags ist vollständig verstanden; es gibt kein Feld und kein Teilchen, das die Information eines Gehirns nach dem Tod tragen könnte – wir hätten es längst gemessen. Bertrand Russell zog die nüchterne Konsequenz: „Wenn ich sterbe, werde ich verwesen, und nichts von meinem Ich wird überleben." Der Glaube an ein Weiterleben ist verständlich – die Todesangst ist tief in uns verwurzelt –, aber er ist Wunschdenken. Sogar das Alte Testament wusste es: „Die Toten wissen nichts" (Koh 9,5).`,
  biblical: {
    summary: `Die Bibel nimmt den Tod bitter ernst: Er ist „der letzte Feind" (1 Kor 15,26), nicht ein freundlicher Übergang. Ihre Hoffnung gründet nicht in einer natürlichen Unsterblichkeit des Menschen, sondern in dem lebendigen Gott, der „nicht der Toten, sondern der Lebendigen Gott" ist (Lk 20,38), und in der Auferstehung Jesu als „Erstling" der Entschlafenen (1 Kor 15,20). Zugleich bezeugt das Neue Testament, dass der Mensch im Tod nicht ausgelöscht wird: Jesus verspricht dem Schächer „Heute wirst du mit mir im Paradiese sein" (Lk 23,43), und Paulus hat „Lust abzuscheiden und bei Christus zu sein" (Phil 1,23).`,
    detail: `- **Koh 9,5 („Die Toten wissen nichts"):** Kohelet beschreibt das Leben „unter der Sonne", aus der Sicht des irdischen Beobachters. Dasselbe Buch endet damit, dass „der Geist wieder zu Gott [kommt], der ihn gegeben hat" (Koh 12,7). Die Offenbarung über das Leben nach dem Tod entfaltet sich im AT schrittweise.
- **AT-Hoffnung:** Hiob 19,25–27 („Ich weiß, dass mein Erlöser lebt"), Ps 16,10; 49,16, Jes 26,19 und besonders Dan 12,2 („Viele, die unter der Erde schlafen, werden aufwachen") – die Auferstehungshoffnung ist jüdisch, nicht erst christlich oder griechisch (vgl. 2 Makk 7).
- **Jesus (Lk 20,37–38):** Gegen die Sadduzäer argumentiert Jesus: Gott nennt sich „Gott Abrahams, Isaaks und Jakobs" – er ist ein Gott der Lebenden, „denn sie leben ihm alle".
- **Mt 10,28:** „Fürchtet euch nicht vor denen, die den Leib töten und die Seele nicht können töten" – der Mensch ist nicht nur sein Leib.
- **Hebr 2,14–15:** Christus kam, um die zu befreien, „die durch Furcht des Todes im ganzen Leben Knechte sein mussten".`,
    sources: [
      { kind: 'bibel', work: 'Lukas', ref: '23,43', quote: `Und Jesus sprach zu ihm: Wahrlich ich sage dir: Heute wirst du mit mir im Paradiese sein.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Philipper', ref: '1,23', quote: `Denn es liegt mir beides hart an: ich habe Lust abzuscheiden und bei Christo zu sein, was auch viel besser wäre.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '20,38', quote: `Gott aber ist nicht der Toten, sondern der Lebendigen Gott; denn sie leben ihm alle.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '15,20', quote: `Nun aber ist Christus auferstanden von den Toten und der Erstling geworden unter denen, die da schlafen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '10,28', quote: `Und fürchtet euch nicht vor denen, die den Leib töten, und die Seele nicht können töten; fürchtet euch aber vielmehr vor dem, der Leib und Seele verderben mag in der Hölle.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Prediger (Kohelet)', ref: '9,5', quote: `Denn die Lebendigen wissen, daß sie sterben werden; die Toten aber wissen nichts, sie verdienen auch nichts mehr; denn ihr Gedächtnis ist vergessen.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche bekennt: Im Tod trennt sich die Seele vom Leib; die Seelen der Gerechten gehen ins Paradies, wo sie in Erwartung der allgemeinen Auferstehung bei Christus sind. Am Ende wird Christus wiederkommen, die Toten auferwecken und Leib und Seele wieder vereinen. Darum betet die Kirche für ihre Entschlafenen – in jeder Liturgie im Gedächtnis der Entschlafenen und besonders am dritten und vierzigsten Tag sowie am Jahrestag. Im Gebet für die Verstorbenen heißt es: „Denn es gibt keinen Tod für deine Knechte, sondern einen Übergang." Die Kirche der Märtyrer lebt von dieser Gewissheit.`,
    detail: `Die Unsterblichkeit der Seele ist nach orthodoxem Verständnis kein Besitz, den der Mensch aus eigener Natur hätte, sondern Gabe des Schöpfers: Athanasius lehrt, dass der Mensch, aus dem Nichts geschaffen, ohne die Gnade des Logos ins Nichts zurückfiele (De Inc. 4–5). Zugleich argumentiert er in „Gegen die Heiden" (Kap. 33), dass die vernünftige Seele, die Unsterbliches denkt und sich selbst bewegt, nicht mit dem Leib zugrunde geht. Die Kirche verbindet also beides: die Fortdauer der Seele und die Hoffnung auf die leibliche Auferstehung. Ein „Seelenschlaf" oder eine Auslöschung zwischen Tod und Auferstehung wird abgelehnt.`,
    sources: [
      { kind: 'liturgie', work: 'Koptisches Euchologion (Khulagi), Gebet für die Entschlafenen', status: 'verbatim', quote: 'Denn es gibt keinen Tod für deine Knechte, sondern einen Übergang.', original: 'For there is no death for Your servants, but a departure.', translation: 'aus dem Englischen der koptischen Liturgieausgaben', note: 'Fester Bestandteil der koptischen Gebete für Verstorbene; auch auf Traueranzeigen koptischer Gemeinden verwendet.' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', ref: '33', year: 'um 335', status: 'paraphrase', quote: 'Die vernünftige Seele, die Unsterbliches und Ewiges denkt und sich selbst bewegt, ist unsterblich und stirbt nicht mit dem Leib.' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '4–5', status: 'paraphrase', quote: 'Der Mensch, aus dem Nichts geschaffen, wäre von Natur vergänglich; durch die Teilhabe am Logos sollte er der Vergänglichkeit entgehen.' },
    ],
  },
  quickAnswer: `Zuerst: Diese Frage ist oft keine akademische, sondern eine Frage des Herzens – sie verdient Ernst und Mitgefühl. Inhaltlich: Dass der Geist im irdischen Leben eng mit dem Gehirn verbunden ist, bestreitet niemand. Aber Abhängigkeit ist nicht Identität – ein Pianist hängt von seinem Flügel ab und ist doch nicht der Flügel. Bewusstsein, Erleben und Denken lassen sich nicht auf Neuronenfeuer zurückführen; selbst atheistische Philosophen wie Thomas Nagel halten den Materialismus für unhaltbar. Vor allem aber gründet die christliche Hoffnung nicht auf einer Theorie über die Seele, sondern auf einem Ereignis: Jesus ist von den Toten auferstanden – und er hat gesagt: „Ich lebe, und ihr sollt auch leben" (Joh 14,19).`,
  keyPoints: [
    `**Abhängigkeit ist nicht Identität:** Dass Hirnschäden den Geist beeinträchtigen, zeigt eine enge Verbindung – nicht, dass der Geist nichts als das Gehirn ist (Pianist und Flügel, Licht und Fenster).`,
    `**Das „schwere Problem":** Kein physikalischer Vorgang erklärt, warum es sich überhaupt irgendwie *anfühlt*, ein Ich zu sein. Selbst Atheisten wie Thomas Nagel halten den Materialismus deshalb für unzureichend.`,
    `**Die Einheit des Ich:** Ich bin *einer*, der sieht, hört und denkt – keine Ansammlung von Teilen. Plantinga und Swinburne argumentieren, dass ich darum nicht mit meinem Körper identisch bin.`,
    `**Physik ist nicht zuständig:** Carrolls Argument setzt voraus, dass alles, was existiert, physikalisch ist – genau das ist die Frage.`,
    `**Der Grund der Hoffnung ist die Auferstehung Jesu**, ein historisch gut begründetes Ereignis – nicht eine Spekulation über Seelen oder Nahtoderfahrungen.`,
    `**Biblisch: Fortdauer und Auferstehung.** Heute im Paradies (Lk 23,43), bei Christus (Phil 1,23) – und am Ende die leibliche Auferstehung (1 Kor 15). „Es gibt keinen Tod für deine Knechte, sondern einen Übergang."`,
  ],
  argument: {
    name: 'Warum der Tod nicht das Ende sein muss – kumulativ',
    summary: 'Philosophische Gründe gegen den Materialismus plus der historische Grund der Auferstehung Jesu.',
    premises: [
      {
        text: 'P1: Wenn der menschliche Geist nicht mit dem Gehirn identisch ist, folgt aus dem Tod des Gehirns nicht das Ende der Person.',
        support: `Das ist eine einfache logische Folge: Was nicht identisch ist, kann getrennt fortbestehen, auch wenn es im irdischen Leben zusammenwirkt.`,
      },
      {
        text: 'P2: Es gibt starke Gründe, dass der Geist nicht mit dem Gehirn identisch ist.',
        support: `Bewusstes Erleben (Qualia), Bedeutung und „Gerichtetheit" von Gedanken (Intentionalität), die Einheit des Ich und vernünftiges Schließen lassen sich mit physikalischen Begriffen nicht erfassen (Nagel 1974; Plantinga 2006; Swinburne 2019; Moreland 2008).`,
        sources: [
          { kind: 'fachliteratur', author: 'Thomas Nagel', work: '„What Is It Like to Be a Bat?", The Philosophical Review 83', year: '1974', status: 'paraphrase', quote: 'Der subjektive Charakter der Erfahrung entzieht sich jeder rein physikalischen Beschreibung.', note: 'Nagel ist Atheist.' },
          { kind: 'fachliteratur', author: 'Alvin Plantinga', work: '„Against Materialism", Faith and Philosophy 23', year: '2006', status: 'paraphrase', quote: 'Argumente aus Ersetzbarkeit und Gedankeninhalt gegen den Materialismus.' },
        ],
      },
      {
        text: 'P3: Jesus von Nazareth ist von den Toten auferstanden und hat seinen Jüngern Anteil an seinem Leben verheißen.',
        support: `Historisch gut belegte Fakten – Tod durch Kreuzigung, leeres Grab, Erscheinungserfahrungen vieler Zeugen, plötzliche Verkündigung in Jerusalem, Bekehrung von Gegnern wie Paulus und Jakobus – werden am besten durch die Auferstehung erklärt (Habermas, Licona, Wright).`,
        sources: [
          { kind: 'fachliteratur', author: 'Gary R. Habermas & Michael R. Licona', work: 'The Case for the Resurrection of Jesus', year: '2004', status: 'paraphrase', quote: 'Die „Minimal-Facts"-Methode: von weithin anerkannten Fakten zur Auferstehung als bester Erklärung.' },
        ],
      },
    ],
    conclusion: 'Also ist die Behauptung „Nach dem Tod ist nichts" weder wissenschaftlich bewiesen noch philosophisch zwingend; die christliche Hoffnung hat gute Gründe.',
  },
  voices: [
    {
      person: 'paulus',
      role: 'als Zeuge der Auferstehung',
      text: `Paulus gründet die Hoffnung über den Tod hinaus nicht auf eine philosophische Seelenlehre, sondern auf den auferstandenen Christus, den er selbst gesehen hat. Christus ist der „Erstling" der Entschlafenen – wie die erste Garbe der Ernte die ganze Ernte verbürgt. Zugleich rechnet Paulus damit, im Tod nicht ausgelöscht zu werden: Er möchte „abscheiden und bei Christus sein" und lieber „außer dem Leibe wallen und daheim sein bei dem Herrn" (2 Kor 5,8). Den Thessalonichern schreibt er, sie sollten nicht trauern „wie die anderen, die keine Hoffnung haben" – Trauer ja, Verzweiflung nein.`,
      sources: [
        { kind: 'bibel', work: '2. Korinther', ref: '5,8', quote: `Wir sind aber getrost und haben vielmehr Lust, außer dem Leibe zu wallen und daheim zu sein bei dem HERRN.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Zeuge des Sieges über den Tod',
      text: `Athanasius verweist auf ein sichtbares Zeichen: Vor Christus fürchteten sich alle vor dem Tod; nun aber verachten selbst Kinder und Frauen den Tod, weil sie wissen, dass er besiegt ist. Wie man an einem Tyrannen, der verspottet wird, erkennt, dass er entmachtet ist, so erkennt man an der Furchtlosigkeit der Märtyrer, dass der Tod seine Macht verloren hat. Philosophisch argumentiert er in „Gegen die Heiden", dass die vernünftige Seele, die über den Körper hinaus Ewiges denkt, nicht mit dem Leib vergeht – theologisch, dass der Mensch seine Unsterblichkeit der Gemeinschaft mit dem Logos verdankt.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '27–29', status: 'paraphrase', quote: 'Christen verachten den Tod und gehen ihm freudig entgegen – ein Zeichen, dass er durch Christus entmachtet ist.' },
      ],
    },
    {
      person: 'swinburne',
      role: 'als Philosoph der Seele',
      text: `Swinburne verteidigt in „The Evolution of the Soul" (1986) und „Are We Bodies or Souls?" (2019) einen Substanzdualismus: Der Mensch besteht aus Leib und Seele, und die Seele ist der wesentliche Teil. Ein zentrales Argument: Man kann sich widerspruchsfrei vorstellen, dass ich weiter existiere, während mein Körper vernichtet wird, oder dass mein Bewusstsein in einen anderen Körper übergeht. Wenn das logisch möglich ist, bin ich nicht identisch mit meinem Körper. Swinburne betont zugleich ehrlich: Ob die Seele nach dem Tod tatsächlich weiter funktioniert, hängt nicht von ihrer Natur allein ab, sondern davon, ob Gott sie erhält – darum ist die Frage nach Gott entscheidend.`,
      sources: [
        { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Evolution of the Soul', year: '1986, überarb. 1997', status: 'paraphrase', quote: 'Verteidigung des Substanzdualismus; das Weiterleben der Seele hängt letztlich von Gott ab.' },
        { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'Are We Bodies or Souls?', year: '2019', status: 'paraphrase', quote: 'Allgemeinverständliche Darstellung der Argumente für die Seele.' },
      ],
    },
    {
      person: 'plantinga',
      role: 'als Kritiker des Materialismus',
      text: `Plantinga argumentiert, dass ich nicht mein Körper sein kann. Sein „Ersetzungsargument": Es ist möglich, dass mein Körper in einem Augenblick Teil für Teil durch andere Teile ersetzt wird, während ich bei vollem Bewusstsein bleibe; dann existiere ich weiter, mein ursprünglicher Körper aber nicht. Also bin ich nicht identisch mit ihm. Ein zweites Argument: Neuronale Vorgänge haben elektrische und chemische Eigenschaften, aber sie „handeln von" nichts – Gedanken dagegen haben einen Inhalt. Was Inhalt hat, ist mehr als Materie.`,
      sources: [
        { kind: 'fachliteratur', author: 'Alvin Plantinga', work: '„Against Materialism", Faith and Philosophy 23', year: '2006', status: 'paraphrase', quote: 'Ersetzungsargument und Argument aus dem Gedankeninhalt.' },
      ],
    },
    {
      person: 'schmemann',
      role: 'als orthodoxer Theologe',
      text: `Schmemann warnt davor, den Tod zu verharmlosen – weder durch säkulare Gleichgültigkeit („Der Tod ist natürlich") noch durch eine fromme Flucht in eine körperlose Seelenwelt. Das Christentum ist für ihn keine Versöhnung mit dem Tod, sondern die Verkündigung seiner Überwindung: Christus hat „den Tod durch den Tod zertreten", wie die Osterhymne singt. Die Kirche feiert darum nicht nur das Weiterleben der Seele, sondern die Auferstehung – und lebt diese Hoffnung in der Liturgie, in der Lebende und Entschlafene vor dem einen Herrn stehen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Alexander Schmemann', work: 'Für das Leben der Welt (For the Life of the World)', year: '1963', status: 'paraphrase', quote: 'Christentum ist nicht Versöhnung mit dem Tod, sondern Offenbarung des Lebens, das den Tod besiegt hat.' },
      ],
    },
  ],
  dialog: [
    {
      id: 'bewusstsein-ist-hirn',
      objection: `„Bewusstsein ist das, was das Gehirn tut – so wie Verdauung das ist, was der Magen tut. Wenn das Gehirn stirbt, hört das Bewusstsein auf. Russell hatte recht: ‚Wenn ich sterbe, werde ich verwesen.'"`,
      objectionBy: 'Bertrand Russell / Sean Carroll',
      answer: `Ich verstehe, dass das eine ernste und oft persönliche Frage ist. Aber der Vergleich hinkt: Verdauung ist vollständig durch chemische Vorgänge beschreibbar; beim Bewusstsein erklärt kein physikalischer Vorgang, warum es sich überhaupt *irgendwie anfühlt*, ein Ich zu sein. Dass der Geist im Leben eng mit dem Gehirn verbunden ist, zeigt Abhängigkeit, nicht Identität. Und die christliche Hoffnung gründet ohnehin nicht auf der Natur des Gehirns, sondern auf der Auferstehung Jesu.`,
      sources: [
        { kind: 'gegner', author: 'Bertrand Russell', work: '„What I Believe"', year: '1925', quote: `Ich glaube, dass ich verwesen werde, wenn ich sterbe, und dass nichts von meinem Ich überleben wird.`, original: 'I believe that when I die I shall rot, and nothing of my ego will survive.', translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'alzheimer-argument',
          objection: `„Bei Alzheimer zerstört der Abbau des Gehirns Stück für Stück Erinnerung, Persönlichkeit und Selbst. Wenn eine teilweise Zerstörung des Gehirns den Geist teilweise zerstört – wie soll eine vollständige Zerstörung ihn unversehrt lassen?"`,
          objectionBy: 'Paul Edwards (Immortality, 1992)',
          answer: `Das ist das stärkste Argument, und man sollte es nicht kleinreden. Aber es zeigt nur, dass der Geist im irdischen Leben das Gehirn als Werkzeug braucht, um sich zu äußern. Ein Pianist an einem zerstörten Flügel kann nicht mehr spielen – daraus folgt nicht, dass es den Pianisten nicht mehr gibt. William James nannte das schon 1898 die „Übertragungs"-Deutung: Das Gehirn könnte den Geist eher übermitteln und begrenzen als erzeugen.`,
          sources: [
            { kind: 'gegner', author: 'Paul Edwards (Hg.)', work: 'Immortality', year: '1992', ref: 'Einleitung', status: 'paraphrase', quote: 'Wenn Hirnschäden mentale Fähigkeiten zerstören, ist ein Fortbestehen des Geistes nach dem völligen Hirntod unplausibel.' },
            { kind: 'fachliteratur', author: 'William James', work: 'Human Immortality: Two Supposed Objections to the Doctrine', year: '1898', status: 'paraphrase', quote: 'Das Gehirn könnte eine übertragende oder begrenzende statt einer erzeugenden Funktion für das Bewusstsein haben.' },
          ],
          followUps: [
            {
              id: 'uebertragung-unfalsifizierbar',
              objection: `„Die ‚Gehirn als Empfänger'-Theorie ist unfalsifizierbar und unnötig kompliziert. Ockhams Rasiermesser: Die einfachste Erklärung ist, dass das Gehirn den Geist erzeugt."`,
              objectionBy: 'Michael Shermer / Sean Carroll',
              answer: `Das Pianisten-Bild ist kein Laborbefund, sondern zeigt nur: Aus der Abhängigkeit folgt logisch keine Identität. Die eigentlichen Gründe für die Verschiedenheit von Geist und Gehirn sind unabhängig davon – das Erleben, die Bedeutung von Gedanken, die Einheit des Ich. Und Ockhams Rasiermesser gilt nur zwischen Erklärungen, die gleich viel erklären. Eine Theorie, die das Bewusstsein selbst nicht erklärt, ist nicht einfacher, sondern unvollständig.`,
              followUps: [
                {
                  id: 'illusionismus',
                  objection: `„Vielleicht ist das ‚schwere Problem' gar keins. Bewusstsein, wie wir es uns vorstellen, ist eine Illusion, die das Gehirn erzeugt – das sagen Dennett und Frankish."`,
                  objectionBy: 'Daniel Dennett / Keith Frankish (Illusionismus)',
                  answer: `Eine Illusion setzt jemanden voraus, der sie erlebt – wer wird hier getäuscht? Gerade das Erleben ist das eine, was wir sicher wissen. Der Philosoph Galen Strawson, selbst kein Christ, hat die Leugnung des Bewusstseins als die vielleicht seltsamste Behauptung bezeichnet, die je aufgestellt wurde. Wenn man das Bewusstsein wegerklären muss, um den Materialismus zu retten, spricht das gegen den Materialismus.`,
                  sources: [
                    { kind: 'fachliteratur', author: 'Galen Strawson', work: '„The Consciousness Deniers", The New York Review of Books (NYR Daily)', year: '2018', status: 'paraphrase', quote: 'Die Leugnung des Bewusstseins sei die seltsamste Behauptung, die je aufgestellt wurde.', note: 'Strawson ist Naturalist (Panpsychist), kein Theist.' },
                  ],
                  questionsBack: [`Wenn dein Schmerz eine Illusion ist – wer erleidet dann die Illusion des Schmerzes?`],
                },
              ],
            },
            {
              id: 'demenz-persoenlich',
              objection: `„Meine Mutter ist an Demenz gestorben. Am Ende hat sie mich nicht mehr erkannt. Sag mir nicht, sie sei ‚noch da gewesen'."`,
              objectionBy: 'persönlicher Einwand eines Trauernden',
              answer: `Das tut mir sehr leid. Dieser Verlust auf Raten gehört zu den schwersten Erfahrungen überhaupt, und ich will ihn nicht mit einem Argument zudecken. Was der christliche Glaube sagt, ist dies: Deine Mutter war in dieser Zeit für Gott nie weniger sie selbst – auch wenn sie es nicht mehr zeigen konnte. Gott hat sie nicht vergessen, als sie vergaß. Und die Hoffnung der Auferstehung ist, dass er ihr wiedergibt, was die Krankheit genommen hat.`,
              detail: `**Pastoral:** Hier nicht weiter argumentieren, sondern zuhören. Manche Angehörige und Pflegekräfte berichten von kurzen Momenten unerwarteter Klarheit kurz vor dem Tod („terminale Luzidität"); die Forschung dazu (u. a. Nahm, Greyson u. a. 2012) ist jung und umstritten – sie sollte nicht als Beweis, höchstens als offene Frage erwähnt werden, und nur, wenn es dem Gegenüber hilft.`,
              sources: [
                { kind: 'wissenschaft', author: 'Michael Nahm, Bruce Greyson u. a.', work: '„Terminal lucidity: A review and a case collection", Archives of Gerontology and Geriatrics 55', year: '2012', status: 'paraphrase', quote: 'Fallsammlung zu unerwarteter geistiger Klarheit kurz vor dem Tod bei schweren Hirnerkrankungen.', note: 'Junges, methodisch schwieriges Forschungsfeld; nicht als Beweis verwenden.' },
              ],
            },
          ],
        },
        {
          id: 'narkose-wie-tod',
          objection: `„Unter Vollnarkose erlebst du nichts – kein Licht, keine Seele, nur Schwärze. So ist der Tod, nur für immer."`,
          objectionBy: 'Sean Carroll / populärer Einwand',
          answer: `Die Narkose zeigt, dass das Bewusstsein im irdischen Leben unterbrochen werden kann – nicht, dass das Subjekt ausgelöscht wird. Du wachst ja als *derselbe* Mensch auf, mit deinen Erinnerungen und deinem Charakter. Was hält diese Identität über die Lücke hinweg zusammen? Und die christliche Hoffnung beruht nicht darauf, dass das Bewusstsein von Natur aus weiterläuft, sondern darauf, dass Gott den Menschen hält – in der Narkose wie im Tod.`,
          followUps: [
            {
              id: 'ich-ist-buendel',
              objection: `„Es gibt kein ‚Subjekt', das zusammengehalten werden müsste. Das Ich ist ein Bündel von Wahrnehmungen und Erinnerungen, wie Hume, Parfit und der Buddhismus sagen."`,
              objectionBy: 'David Hume / Derek Parfit (Reasons and Persons, 1984)',
              answer: `Hume selbst hat im Anhang seines „Traktats" eingestanden, dass er mit dieser Theorie in ein „Labyrinth" geraten sei, weil er nicht erklären könne, was die Wahrnehmungen zu *einem* Bewusstsein verbindet. Wer bemerkt denn das Bündel? Wenn ich ein Konzert höre und zugleich den Saal sehe, erlebe *ich* beides als Einheit. Diese Einheit des Ich ist eines der stärksten Argumente gegen die Gleichsetzung mit einer Ansammlung von Hirnteilen.`,
              sources: [
                { kind: 'gegner', author: 'David Hume', work: 'Ein Traktat über die menschliche Natur (A Treatise of Human Nature), Anhang', year: '1740', status: 'paraphrase', quote: 'Hume gesteht, dass er in ein Labyrinth geraten sei, weil er die Verbindung der Wahrnehmungen zu einem Ich nicht erklären könne.' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'physik-kein-traeger',
      objection: `„Die Gesetze der Physik, die unserem Alltag zugrunde liegen, sind vollständig verstanden. Es gibt kein Feld und kein Teilchen, das nach dem Tod die Information deines Gehirns tragen könnte. Eine Seele, die mit Atomen wechselwirkt, hätten wir längst gemessen."`,
      objectionBy: 'Sean Carroll (Scientific American, 2011)',
      answer: `Das Argument setzt voraus, was es beweisen will: dass alles, was existiert, ein physikalisches Feld oder Teilchen ist. Die Seele ist aber kein unentdecktes Teilchen, sondern das Subjekt des Erlebens. Die Physik beschreibt, wie sich Materie verhält, nicht, ob es nur Materie gibt. Mit demselben Argument könnte man Zahlen, logische Gesetze und Gott ausschließen – einfach, weil man sie nicht in einem Teilchenbeschleuniger findet.`,
      sources: [
        { kind: 'gegner', author: 'Sean Carroll', work: '„Physics and the Immortality of the Soul", Scientific American (Guest Blog)', year: '2011', status: 'paraphrase', quote: 'Die Physik des Alltags sei vollständig verstanden; es gebe keinen Träger, der Information nach dem Tod bewahren könnte.' },
      ],
      followUps: [
        {
          id: 'wechselwirkung-energie',
          objection: `„Wenn die Seele das Gehirn beeinflusst, muss Energie übertragen werden – das würde den Energieerhaltungssatz verletzen."`,
          objectionBy: 'Sean Carroll / Daniel Dennett',
          answer: `Erhaltungssätze gelten für abgeschlossene Systeme; ob das Gehirn in diesem Sinn kausal abgeschlossen ist, ist gerade die Frage. Der Physiker und Philosoph Robin Collins hat gezeigt, dass Energieerhaltung in der allgemeinen Relativitätstheorie nicht global gilt und eine Wechselwirkung von Geist und Materie physikalisch nicht ausgeschlossen ist. Das Problem ist ernst, aber nicht entscheidend.`,
          detail: `Siehe „Die Physik ist kausal geschlossen – für Gott oder Seele ist kein Platz" und „Ein körperloser Geist ist ein inkohärenter Begriff".`,
          followUps: [
            {
              id: 'seele-der-luecken',
              objection: `„Die Seele ist ein ‚Seele-der-Lücken': Wo die Neurowissenschaft noch nicht weiterweiß, setzt ihr eine Seele ein."`,
              objectionBy: 'Patricia Churchland (sinngemäß)',
              answer: `Nein – die Gründe für die Seele stützen sich auf das, was wir *sicher wissen*: dass wir erleben, denken und als ein Ich wählen. Das sind keine Lücken, sondern die ersten Daten überhaupt. Der atheistische Philosoph Thomas Nagel schrieb 2012 sogar ein Buch mit dem Untertitel, die materialistische neodarwinistische Naturauffassung sei „fast sicher falsch" – nicht aus religiösen Gründen, sondern wegen des Bewusstseins.`,
              sources: [
                { kind: 'fachliteratur', author: 'Thomas Nagel', work: 'Mind and Cosmos: Why the Materialist Neo-Darwinian Conception of Nature Is Almost Certainly False', year: '2012', status: 'paraphrase', quote: 'Bewusstsein, Erkenntnis und Werte lassen sich im materialistischen Rahmen nicht erklären.', note: 'Nagel ist Atheist.' },
              ],
              questionsBack: [`Ist dein eigenes Erleben eine „Lücke" – oder das Erste, was du sicher weißt?`],
            },
          ],
        },
      ],
    },
    {
      id: 'vor-der-geburt-nichts',
      objection: `„Vor meiner Geburt war ich Milliarden Jahre lang nicht da, und es hat mich nicht gestört. Nach dem Tod ist es genauso – ein Spiegelbild. Warum sollte es nach dem Tod etwas geben, wenn es vorher nichts gab?"`,
      objectionBy: 'Lukrez (De rerum natura III) / Shelly Kagan (Death, 2012)',
      answer: `Der Vergleich übersieht einen Unterschied: Vor deiner Geburt gab es niemanden, der etwas verlieren konnte; nach deinem Tod gibt es jemanden, der gelebt, geliebt und Beziehungen hatte. Christen glauben nicht, dass die Seele vorher existierte, sondern dass Gott jeden Menschen ins Dasein ruft. Was angefangen hat, muss nicht von Natur aus fortdauern – aber es kann fortdauern, wenn der Schöpfer es will.`,
      detail: `Ausführlich zu Epikur und Lukrez in „Der Tod ist das Ende – und das ist in Ordnung".`,
      followUps: [
        {
          id: 'warum-sollte-gott-erhalten',
          objection: `„Selbst wenn es Gott gibt: Warum sollte er ausgerechnet unsere Bewusstseine aufbewahren? Vielleicht ist er mit sterblichen Wesen völlig zufrieden."`,
          objectionBy: 'Graham Oppy (sinngemäß)',
          answer: `Weil Liebe das Geliebte nicht ins Nichts fallen lässt. Ein Gott, der Menschen nach seinem Bild schafft, damit sie ihn erkennen und lieben, und sie dann für immer auslöscht, wäre wie ein Vater, der seine Kinder nach Belieben vernichtet. Jesus argumentiert genau so: Gott nennt sich „Gott Abrahams, Isaaks und Jakobs" – er ist ein Gott der Lebenden, „denn sie leben ihm alle" (Lk 20,38). Die Treue Gottes ist der Grund unserer Fortdauer.`,
          questionsBack: [`Würde ein liebender Vater seine Kinder für immer vergehen lassen, wenn er es verhindern könnte?`],
        },
      ],
    },
    {
      id: 'bibel-tote-wissen-nichts',
      objection: `„Sogar eure Bibel weiß es: ‚Die Toten wissen nichts' (Koh 9,5). Das Alte Testament kennt keinen Himmel, nur die Scheol – ein Schattenreich. Himmel und Hölle wurden erst später erfunden, unter griechischem und persischem Einfluss."`,
      objectionBy: 'Bart Ehrman (Heaven and Hell: A History of the Afterlife, 2020)',
      answer: `Kohelet beschreibt das Leben „unter der Sonne", aus der Sicht des irdischen Beobachters – und endet selbst mit dem Satz, dass „der Geist wieder zu Gott kommt, der ihn gegeben hat" (Koh 12,7). Die Offenbarung über das Jenseits entfaltet sich in der Bibel schrittweise: Hiob („Ich weiß, dass mein Erlöser lebt"), Psalm 49,16, Jesaja 26,19 und Daniel 12,2 sprechen von Leben und Auferstehung. Zur Zeit Jesu glaubten die meisten Juden – die Pharisäer – an die Auferstehung (2 Makk 7). Jesus hat diese Hoffnung bestätigt und erfüllt.`,
      sources: [
        { kind: 'bibel', work: 'Daniel', ref: '12,2', quote: `Und viele, so unter der Erde schlafen liegen, werden aufwachen: etliche zum ewigen Leben, etliche zu ewiger Schmach und Schande.`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'bibel', work: 'Hiob', ref: '19,25', quote: `Aber ich weiß, daß mein Erlöser lebt; und als der letzte wird er über dem Staube sich erheben.`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'gegner', author: 'Bart D. Ehrman', work: 'Heaven and Hell: A History of the Afterlife', year: '2020', status: 'paraphrase', quote: 'Die Vorstellungen von Himmel und Hölle hätten sich erst allmählich, unter anderem durch griechische Einflüsse, entwickelt.' },
      ],
      followUps: [
        {
          id: 'unsterbliche-seele-platon',
          objection: `„Und die unsterbliche Seele ist Platon, nicht Bibel. Selbst der Theologe Oscar Cullmann hat gezeigt: Die Bibel lehrt Auferstehung, nicht Unsterblichkeit der Seele."`,
          objectionBy: 'Oscar Cullmann (Unsterblichkeit der Seele oder Auferstehung der Toten?, 1962, sinngemäß)',
          answer: `Cullmann hat zu Recht betont, dass die christliche Hoffnung die Auferstehung ist, nicht die Flucht einer Seele aus dem Körpergefängnis wie bei Platon. Aber das Neue Testament kennt auch einen Zwischenzustand: „Heute wirst du mit mir im Paradiese sein" (Lk 23,43), „abscheiden und bei Christus sein" (Phil 1,23), die Seelen der Märtyrer unter dem Altar (Offb 6,9). Die koptische Kirche hält beides fest: Die Seele lebt bei Christus, und am Ende werden Leib und Seele in der Auferstehung vereint.`,
          followUps: [
            {
              id: 'christliche-physikalisten',
              objection: `„Sogar christliche Philosophen wie Peter van Inwagen und Nancey Murphy sind Materialisten und lehnen eine Seele ab. Also ist die Seele nicht einmal für Christen nötig."`,
              objectionBy: 'Nancey Murphy (Bodies and Souls, or Spirited Bodies?, 2006) als innerchristliche Position',
              answer: `Ehrlich: Es gibt diese innerchristliche Debatte. Aber für unsere Frage – „Ist nach dem Tod nichts?" – sagen auch diese Philosophen klar: Nein, denn Gott wird die Toten auferwecken. Die Lehre der koptischen Kirche (wie der ganzen alten Kirche) bekennt darüber hinaus eine Seele, die den Tod überdauert, gestützt auf Lk 23,43 und Phil 1,23. Und die philosophischen Gründe für den Dualismus sind stark genug, dass er unter Fachphilosophen eine ernsthaft vertretene Position ist.`,
              followUps: [
                {
                  id: 'neu-erschaffen-kopie',
                  objection: `„Wenn der Mensch nur Materie ist und Gott ihn neu zusammensetzt, dann ist das eine Kopie, nicht ich. Ich bleibe tot."`,
                  objectionBy: 'Peter van Inwagen (Problemstellung, 1978) / Derek Parfit',
                  answer: `Genau deshalb ist die Seele wichtig: Wenn die Person durch den Tod hindurch fortbesteht, ist der Auferstandene nicht eine Kopie, sondern derselbe Mensch mit verwandeltem Leib. Und selbst Materialisten wie van Inwagen haben Modelle vorgelegt, wie Gott die Identität bewahren könnte. Die Frage der Identität im Detail behandelt der nächste Claim.`,
                  detail: `Siehe „Die leibliche Auferstehung ist unmöglich – die Atome werden wiederverwertet".`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'wunschdenken-todesangst',
      objection: `„Der Glaube an ein Leben nach dem Tod ist Wunschdenken. Die Terror-Management-Forschung zeigt: Menschen klammern sich an Jenseitsvorstellungen, um ihre Todesangst zu dämpfen."`,
      objectionBy: 'Michael Shermer / Ernest Becker (The Denial of Death, 1973)',
      answer: `Dass ein Wunsch einen Glauben mitprägen kann, sagt nichts darüber, ob er wahr ist – das wäre ein genetischer Fehlschluss. Auch Durst beweist nicht, dass es kein Wasser gibt. Und Wünsche wirken in beide Richtungen: Der Atheist Thomas Nagel schrieb offen: „Ich hoffe, dass es keinen Gott gibt! Ich will nicht, dass es einen Gott gibt." Entscheidend sind die Gründe, nicht die Wünsche.`,
      sources: [
        { kind: 'gegner', author: 'Thomas Nagel', work: 'The Last Word', year: '1997', ref: 'Kap. 7', quote: `Ich hoffe, dass es keinen Gott gibt! Ich will nicht, dass es einen Gott gibt; ich will nicht, dass das Universum so ist.`, original: 'I hope there is no God! I don\'t want there to be a God; I don\'t want the universe to be like that.', translation: 'eigene Übersetzung', status: 'verbatim', note: 'Nagel spricht hier ehrlich von seiner eigenen Furcht vor der Religion.' },
      ],
      followUps: [
        {
          id: 'christlicher-glaube-unbequem',
          objection: `„Trotzdem: Ein Jenseits, in dem man seine Lieben wiedersieht, ist einfach zu schön, um wahr zu sein."`,
          objectionBy: 'Sigmund Freud (Die Zukunft einer Illusion, 1927, sinngemäß)',
          answer: `Das christliche Jenseits ist nicht nur tröstlich, sondern auch ernst: Es gibt ein Gericht, Verantwortung für jedes Wort, die Möglichkeit, sich Gott endgültig zu verweigern. Eine Wunschprojektion sähe anders aus. Und „zu schön, um wahr zu sein" ist kein Argument – manches Schöne ist wahr. Ob es wahr ist, entscheidet sich an der Frage, ob Jesus auferstanden ist.`,
          detail: `Siehe „Religion ist infantile Wunscherfüllung und kollektive Neurose (Freud)" und „Der Glaube an ein Wiedersehen ist tröstliche Selbsttäuschung".`,
        },
      ],
    },
    {
      id: 'nur-nahtoderfahrungen',
      objection: `„Euer einziger ‚Beleg' sind Nahtoderfahrungen – und das sind Halluzinationen eines Gehirns unter Sauerstoffmangel."`,
      objectionBy: 'Susan Blackmore / Kevin Nelson',
      answer: `Nahtoderfahrungen sind nicht mein Hauptargument. Sie sind interessant – es gibt Berichte über nachprüfbare Wahrnehmungen während des Herzstillstands –, aber die Deutung ist umstritten, und Halluzinationen sind eine ernsthafte Alternative. Mein Hauptgrund ist ein anderer: Jesus von Nazareth ist nach gut begründeten historischen Befunden von den Toten auferstanden. Darauf gründet die christliche Hoffnung seit Paulus.`,
      detail: `Siehe „Nahtoderfahrungen sind Halluzinationen eines sterbenden Gehirns".`,
      followUps: [
        {
          id: 'jesu-auferstehung-nicht-meine',
          objection: `„Selbst wenn Jesus auferstanden wäre – was beweist das für mich? Er war vielleicht eine Ausnahme."`,
          objectionBy: 'Graham Oppy (sinngemäß)',
          answer: `Jesus war keine zufällige Ausnahme, sondern hat seine Auferstehung mit einer Verheißung verbunden: „Ich lebe, und ihr sollt auch leben" (Joh 14,19); „Ich bin die Auferstehung und das Leben" (Joh 11,25). Wenn er auferstanden ist, hat Gott seinen Anspruch bestätigt – und damit auch seine Verheißung. Paulus nennt ihn deshalb den „Erstling": Die erste Garbe verbürgt die ganze Ernte (1 Kor 15,20–23).`,
          sources: [
            { kind: 'bibel', work: 'Johannes', ref: '14,19', quote: `Es ist noch um ein kleines, so wird mich die Welt nicht mehr sehen; ihr aber sollt mich sehen; denn ich lebe, und ihr sollt auch leben.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
          followUps: [
            {
              id: 'auferstehung-nicht-historisch',
              objection: `„Aber die Auferstehung ist doch gar nicht historisch belegt. Das sind Legenden aus Evangelien, die Jahrzehnte später geschrieben wurden."`,
              objectionBy: 'Bart Ehrman / Richard Carrier',
              answer: `Die Grundfakten sind unter Historikern weithin anerkannt, auch bei Skeptikern: Jesus starb am Kreuz; seine Jünger hatten kurz darauf Erfahrungen, die sie als Begegnungen mit dem Auferstandenen deuteten; sie verkündeten das in Jerusalem; der Verfolger Paulus und der skeptische Herrenbruder Jakobus wurden durch solche Erfahrungen gewonnen. Das Bekenntnis in 1 Kor 15,3–7 stammt nach Mehrheitsmeinung aus den ersten Jahren nach Jesu Tod. Die Auferstehung erklärt diese Fakten besser als jede Alternative.`,
              detail: `Ausführlich im Themenblock „Die Auferstehung Jesu", besonders „Die Jünger hatten Halluzinationen" und „Die Auferstehung ist eine Legende, die sich über Jahrzehnte entwickelte".`,
              questionsBack: [`Wie erklärst du, dass der Verfolger Paulus und der skeptische Jakobus zu Zeugen der Auferstehung wurden?`],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn ein Pianist an einem zerstörten Flügel nicht mehr spielen kann – folgt daraus, dass es den Pianisten nicht mehr gibt?`,
    `Welcher physikalische Vorgang erklärt, warum es sich *anfühlt*, du zu sein?`,
    `Woran würdest du erkennen, dass es nach dem Tod doch etwas gibt – oder hast du dich vorher festgelegt?`,
    `Was hältst du von den historischen Befunden zur Auferstehung Jesu?`,
    `Wenn es wahr wäre, dass der Tod nicht das Ende ist – würdest du es wollen?`,
  ],
  avoid: [
    `Nahtoderfahrungen als Hauptbeweis anführen – sie sind umstritten und lenken vom eigentlichen Grund (Auferstehung Jesu) ab.`,
    `Die Abhängigkeit des Geistes vom Gehirn leugnen oder kleinreden. Sie ist real; der Punkt ist, dass sie keine Identität beweist.`,
    `Trauernden mit Argumenten begegnen, bevor man ihren Schmerz gehört hat.`,
    `So tun, als lehre die Bibel eine rein platonische Seelenunsterblichkeit ohne Auferstehung – das stimmt nicht und ist leicht angreifbar.`,
  ],
  concessions: [
    `Die Neurowissenschaft zeigt eine sehr enge Abhängigkeit des Geistes vom Gehirn im irdischen Leben; das ist der stärkste Einwand und verdient Respekt.`,
    `Das Alte Testament entfaltet die Hoffnung über den Tod hinaus erst schrittweise; frühe Texte sprechen zurückhaltend von der Scheol.`,
    `Unter christlichen Philosophen gibt es eine ernsthafte Debatte über Dualismus und christlichen Materialismus.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'Are We Bodies or Souls?', year: '2019', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'J. P. Moreland', work: 'The Soul: How We Know It\'s Real and Why It Matters', year: '2014', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Mark C. Baker & Stewart Goetz (Hg.)', work: 'The Soul Hypothesis', year: '2011', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'N. T. Wright', work: 'Surprised by Hope', year: '2008', status: 'paraphrase' },
    { kind: 'gegner', author: 'Paul Edwards (Hg.)', work: 'Immortality', year: '1992', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Tod', 'Seele', 'Bewusstsein', 'Dualismus', 'Auferstehung', 'Trauer'],
  related: [
    'sinn-existenz/tod-ist-das-ende',
    'neurowissenschaften/nahtoderfahrungen-halluzination',
    'neurowissenschaften/geist-gleich-gehirn',
    'naturalismus/bewusstsein-materiell-erklaerbar',
    'tod-seele-auferstehung/leibliche-auferstehung-unmoeglich',
    'tod-seele-auferstehung/wiedersehen-selbsttaeuschung',
    'religionskritik/freud-wunscherfuellung',
    'auferstehung/halluzinationen',
  ],
};

export default claim;
