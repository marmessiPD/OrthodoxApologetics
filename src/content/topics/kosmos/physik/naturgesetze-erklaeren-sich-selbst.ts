import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'naturgesetze-erklaeren-sich-selbst',
  title: `„Die Naturgesetze erklären sich selbst – kein Gesetzgeber nötig."`,
  proponents: [
    { name: 'Sean Carroll', role: 'Theoretischer Physiker', work: 'The Big Picture: On the Origins of Life, Meaning, and the Universe Itself (2016)' },
    { name: 'Max Tegmark', role: 'Kosmologe, MIT', work: 'Our Mathematical Universe (2014) – Hypothese des mathematischen Universums' },
    { name: 'Peter Atkins', role: 'Physikochemiker, Oxford', work: 'Conjuring the Universe: The Origins of the Laws of Nature (2018)' },
    { name: 'Stephen Hawking & Leonard Mlodinow', role: 'Physiker', work: 'The Grand Design (2010)' },
  ],
  steelman: `Die Vorstellung eines „Gesetzgebers" stammt aus einer Zeit, in der man Naturgesetze nach dem Vorbild königlicher Erlasse dachte. Heute gibt es zwei Möglichkeiten, und beide kommen ohne Gott aus. Entweder sind Naturgesetze bloß Zusammenfassungen von Regelmäßigkeiten im Weltgeschehen (die humesche Sicht, die auch Carroll vertritt): Dann gibt es nichts zu erklären, weil das Gesetz nur beschreibt, was ohnehin geschieht. Oder die Gesetze folgen aus tieferen Prinzipien – Symmetrien, aus denen nach dem Noether-Theorem Erhaltungssätze folgen, oder sogar aus reiner Mathematik, wie Tegmark meint. Atkins argumentiert, viele Gesetze ergäben sich aus der „Trägheit" der Natur und aus dem Fehlen jeder Vorgabe. In keinem Fall braucht es jemanden, der die Gesetze „erlässt". Die Frage „Warum diese Gesetze?" ist wie die Frage, warum 2 + 2 = 4 ist.`,
  biblical: {
    summary: `Die Schrift spricht von den „Ordnungen des Himmels und der Erde", die Gott gesetzt hat und an denen er seine Treue zeigt (Jer 33,25; 31,35–36). Die Regelmäßigkeit der Natur ist biblisch ein Ausdruck des Bundes Gottes mit seiner Schöpfung (Gen 8,22). Der Johannesprolog nennt den Schöpfer „Logos" (Joh 1,1–3) – Wort, Vernunft, Sinn. Dass die Welt geordnet und verstehbar ist, folgt aus der Vernunft dessen, der sie geschaffen hat.`,
    detail: `- **Gen 8,22:** Saat und Ernte, Frost und Hitze, Sommer und Winter, Tag und Nacht sollen nicht aufhören – Regelmäßigkeit als Verheißung.
- **Jer 33,25:** Die „Ordnung des Himmels und der Erde" als Bürgschaft für Gottes Treue.
- **Ps 148,6:** Er gab eine Ordnung, die nicht vergehen wird.
- **Joh 1,1–3:** Der Logos als Grund aller Dinge – die griechische Philosophie verstand unter Logos die vernünftige Ordnung der Welt.
- **Weish 11,20:** „Maß, Zahl und Gewicht".`,
    sources: [
      { kind: 'bibel', work: 'Jeremia', ref: '33,25', quote: `So spricht der HERR: Halte ich meinen Bund nicht mit Tag und Nacht noch die Ordnung des Himmels und der Erde …`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Mose', ref: '8,22', quote: `Solange die Erde steht, soll nicht aufhören Same und Ernte, Frost und Hitze, Sommer und Winter, Tag und Nacht.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '1,1–3', quote: `Im Anfang war das Wort, und das Wort war bei Gott, und Gott war das Wort. … Alle Dinge sind durch dasselbe gemacht …`, original: `Ἐν ἀρχῇ ἦν ὁ λόγος`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die alexandrinische Logos-Theologie ist im Kern eine Theologie der Naturordnung. Der hl. Athanasius beschreibt in *Contra Gentes* den Logos als den, der die Schöpfung bewegt, ordnet und zusammenhält – wie ein Musiker, der eine Leier stimmt und aus vielen Saiten eine Harmonie hervorbringt, oder wie ein Chorleiter, der viele Stimmen zu einem Lied vereint. Der hl. Basilius sieht im Schöpfungsbefehl „Die Erde bringe hervor" ein bleibendes Naturgesetz, das Gottes Wort gesetzt hat.`,
    detail: `- **Athanasius, Contra Gentes 42–43:** Die Ordnung des Kosmos ist das Werk des einen Logos, der allem seine Bewegung und seinen Platz gibt.
- **Basilius, Hexaemeron 5,10:** Der kurze Befehl wurde zum großen Naturgesetz.
- **Clemens von Alexandrien** verstand Christus als den Logos, der auch die Vernunft der Welt ist, die die Philosophen suchten.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Contra Gentes', ref: '42–43', year: 'ca. 318', quote: `Wie ein Musiker die Leier stimmt und aus hohen und tiefen Tönen eine Harmonie macht, so hält der Logos das All zusammen und ordnet es.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Hexaemeron', ref: 'Homilie 5,10', year: 'ca. 370', quote: `Der kurze Befehl Gottes wurde zu einem großen Naturgesetz.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `In der Philosophie gibt es keinen Konsens darüber, was Naturgesetze sind. Die Hauptpositionen: (1) **Regularitätstheorie** (Hume, David Lewis): Gesetze sind die einfachsten Zusammenfassungen der Ereignisse; (2) **Notwendigkeitstheorie** (Armstrong, Dretske, Tooley): Gesetze sind reale Beziehungen zwischen Universalien; (3) **Dispositionalismus** (Bird): Gesetze folgen aus den Kräften der Dinge; (4) **Primitivismus** (Maudlin). Physikalisch erklärt das Noether-Theorem (1918) Erhaltungssätze aus Symmetrien – aber nicht, warum gerade diese Symmetrien, Felder und Konstanten gelten.`,
    detail: `Der Physiker Eugene Wigner sprach 1960 von der „unvernünftigen Wirksamkeit der Mathematik". Der Physiker Paul Davies, kein Christ, schrieb 2007 in der *New York Times*, die Wissenschaft beruhe auf dem Glauben an eine rationale, gesetzmäßige Ordnung, deren Ursprung sie selbst nicht erklärt; der Begriff des Naturgesetzes habe theologische Wurzeln. Historiker wie Peter Harrison haben gezeigt, dass der Begriff „Naturgesetz" im 17. Jahrhundert eng mit der Vorstellung eines göttlichen Gesetzgebers verbunden war.`,
    sources: [
      { kind: 'sonstiges', author: 'Paul Davies', work: '„Taking Science on Faith", The New York Times (Op-Ed)', year: '24.11.2007', quote: `Die Wissenschaft hat ihr eigenes, auf Glauben beruhendes Fundament: den Glauben an eine rationale, unveränderliche Gesetzesordnung, deren Ursprung sie nicht erklärt; der Begriff des Naturgesetzes ist ursprünglich ein theologischer.`, status: 'paraphrase', note: 'Davies ist kein Christ; seine These löste heftige Reaktionen aus. Titel und Erscheinungsdatum per Sekundärquellen bestätigt (Prüfung 11/2026); der Originalwortlaut war nicht einsehbar, daher sinngemäß.' },
      { kind: 'fachliteratur', author: 'Peter Harrison', work: 'The Territories of Science and Religion', year: '2015', quote: `Der neuzeitliche Begriff des Naturgesetzes entstand im Rahmen theologischer Vorstellungen von einem göttlichen Gesetzgeber.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Sean Carroll', work: 'The Big Picture', year: '2016', quote: `Naturgesetze sind Muster, die wir in der Welt entdecken, keine Befehle von außen; das Universum braucht keinen Grund.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Peter Atkins', work: 'Conjuring the Universe', year: '2018', quote: `Viele Naturgesetze ergeben sich aus der „Faulheit" der Natur und aus dem Fehlen jeder besonderen Vorgabe.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Naturgesetze beschreiben, was geschieht – sie bewirken nichts. Newtons Gesetze haben noch nie eine einzige Billardkugel bewegt (Lennox). Sind Gesetze nur Beschreibungen, dann ist die durchgängige Regelmäßigkeit des ganzen Universums ein unerklärter kosmischer Zufall. Sind sie reale, verbindliche Ordnungen, muss man fragen, was sie begründet. In beiden Fällen ist „die Gesetze erklären sich selbst" keine Erklärung, sondern ein Abbruch der Frage. Selbst der Nichtchrist Paul Davies sagt: Die Wissenschaft setzt den Glauben an eine rationale Ordnung voraus.`,
  keyPoints: [
    `**Beschreiben ist nicht Bewirken:** Gesetze sagen, was geschieht, wenn etwas da ist und wirkt – sie erschaffen nichts.`,
    `**Das Dilemma:** Bloße Beschreibung → Regelmäßigkeit unerklärt; reale Ordnung → Grund der Ordnung gesucht.`,
    `**Symmetrien verschieben die Frage:** Das Noether-Theorem erklärt Erhaltungssätze aus Symmetrien – aber nicht, warum diese Symmetrien gelten.`,
    `**Mathematische Verstehbarkeit ist erstaunlich:** Wigners „unvernünftige Wirksamkeit"; der Logos des Johannesprologs.`,
    `**Historisch:** Kepler, Newton, Boyle, Maxwell suchten Gesetze, weil sie an einen rationalen Gesetzgeber glaubten.`,
  ],
  argument: {
    name: 'Das Dilemma der Naturgesetze',
    summary: 'Ob Naturgesetze bloße Beschreibungen oder reale Ordnungen sind – in beiden Fällen bleibt eine Erklärungslücke, die der Theismus füllt.',
    premises: [
      {
        text: 'P1: Naturgesetze sind entweder bloße Beschreibungen von Regelmäßigkeiten oder reale, die Ereignisse bestimmende Ordnungen.',
        support: `Das ist die Grundunterscheidung der Philosophie der Naturgesetze (Regularitätstheorie gegenüber Notwendigkeits- bzw. Dispositionstheorien).`,
      },
      {
        text: 'P2: Sind sie bloße Beschreibungen, dann ist die universelle, ausnahmslose Regelmäßigkeit der Natur unerklärt – und Induktion unbegründet.',
        support: `Wenn nichts die Elektronen zwingt, sich überall und immer gleich zu verhalten, ist ihre Gleichförmigkeit über 13,8 Milliarden Jahre ein unerklärter Zufall. Hume selbst sah, dass sich die Zuverlässigkeit der Induktion so nicht begründen lässt.`,
      },
      {
        text: 'P3: Sind sie reale Ordnungen, dann stellt sich die Frage, was diese Ordnungen begründet und warum gerade diese gelten.',
        support: `Reale, abstrakte Ordnungen mit Wirkkraft sind selbst erklärungsbedürftig; dass sie mathematisch elegant und für Menschen verstehbar sind, verstärkt die Frage (Wigner).`,
      },
    ],
    conclusion: 'Die Behauptung „Die Naturgesetze erklären sich selbst" trägt in keinem Fall. Ein rationaler Schöpfer, dessen Treue die Ordnung der Welt verbürgt (Jer 33,25), ist eine gute Erklärung für beides: die Existenz und die Verstehbarkeit der Ordnung.',
  },
  voices: [
    {
      person: 'lennox',
      role: 'als Mathematiker',
      text: `Lennox illustriert den Unterschied zwischen Gesetz und Ursache mit Beispielen aus dem Alltag: Die Gesetze der Arithmetik haben noch nie Geld auf ein Konto gebracht; Newtons Bewegungsgesetze haben nie eine Billardkugel angestoßen – das tut der Spieler mit dem Queue. Gesetze beschreiben, was geschieht, wenn eine Ursache wirkt. Wer die Gesetze zur letzten Erklärung macht, verwechselt die Landkarte mit dem Land und das Drehbuch mit dem Autor.`,
      sources: [{ kind: 'fachliteratur', author: 'John C. Lennox', work: 'God’s Undertaker: Has Science Buried God?', year: '2009', quote: `Naturgesetze sind keine Akteure; sie beschreiben, was unter bestimmten Bedingungen geschieht, verursachen aber selbst nichts.`, status: 'paraphrase' }],
    },
    {
      person: 'athanasius',
      role: 'als Theologe des Logos',
      text: `Athanasius sieht in der geordneten Bewegung des Kosmos – den Bahnen der Gestirne, dem Wechsel der Jahreszeiten, der Harmonie der Elemente – den Abdruck des einen Logos, der alles durchwaltet. Er vergleicht ihn mit einem Musiker, der viele Saiten zu einem Klang stimmt, und mit einem Chorleiter, der viele Stimmen zu einem Lied vereint. Die Ordnung der Welt ist für ihn nicht selbstverständlich, sondern Gabe: Sie hängt an der Vernunft dessen, der sie trägt.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Contra Gentes', ref: '42–43', year: 'ca. 318', quote: `Der Logos Gottes ordnet und durchwaltet das All wie ein Chorleiter, der aus vielen Stimmen ein Lied macht.`, status: 'paraphrase' }],
    },
    {
      person: 'kepler',
      role: 'als Astronom, der die Planetengesetze fand',
      text: `Kepler suchte die Gesetze der Planetenbewegung, weil er überzeugt war, dass Gott die Welt nach mathematischen Prinzipien geschaffen hat, die der menschliche Geist erkennen kann. In seiner *Weltharmonik* (1619) beschreibt er die Geometrie als gleichewig mit dem göttlichen Geist und als Urbild der Welt. Dass der Mensch diese Ordnung erkennen kann, deutete er als Teilhabe an Gottes Gedanken. Für Kepler erklären die Gesetze sich nicht selbst – sie sind die Handschrift des Schöpfers.`,
      sources: [{ kind: 'wissenschaft', author: 'Johannes Kepler', work: 'Harmonices Mundi (Weltharmonik)', ref: 'Buch IV, Kap. 1', year: '1619', quote: `Die Geometrie ist vor der Entstehung der Dinge gleichewig mit dem göttlichen Geist und hat Gott die Urbilder für die Erschaffung der Welt geliefert.`, status: 'paraphrase' }],
    },
    {
      person: 'maxwell',
      role: 'als Physiker der Feldtheorie',
      text: `Maxwell, der die Gesetze des Elektromagnetismus in vier Gleichungen fasste, wies in seinem Vortrag „Molecules" (1873) darauf hin, dass alle Moleküle einer Art – überall im Universum – exakt gleich sind. Das sah er als Hinweis darauf, dass sie nicht aus einem allmählichen Prozess hervorgegangen, sondern gleichsam „hergestellte Artikel" seien. Über dem Eingang des Cavendish-Laboratoriums in Cambridge, das er als Erster leitete, ließ er Psalm 111,2 anbringen: „Groß sind die Werke des Herrn; wer sie erforscht, hat Freude daran." Für Maxwell war die Gesetzmäßigkeit der Natur kein Selbstläufer, sondern Werk eines Schöpfers.`,
      sources: [
        { kind: 'wissenschaft', author: 'James Clerk Maxwell', work: '„Molecules", Vortrag vor der British Association, Nature 8', year: '1873', quote: `Die völlige Gleichheit aller Moleküle einer Art gibt ihnen den Charakter hergestellter Artikel.`, status: 'paraphrase' },
        { kind: 'bibel', work: 'Psalm', ref: '111,2', quote: `Groß sind die Werke des HERRN; wer ihrer achtet, der hat eitel Lust daran.`, original: `Magna opera Domini, exquisita in omnes voluntates eius`, translation: 'Luther 1912', status: 'verbatim', note: 'Lateinisch über dem Eingang des alten Cavendish-Laboratoriums in Cambridge.' },
      ],
    },
    {
      person: 'swinburne',
      role: 'als Religionsphilosoph',
      text: `Swinburne baut aus der Gesetzmäßigkeit der Natur ein eigenes Argument, das „Argument aus der zeitlichen Ordnung": Dass sich alle materiellen Dinge überall und jederzeit nach denselben einfachen Gesetzen verhalten, ist eine erstaunliche Tatsache, die nach Erklärung verlangt. Die Wissenschaft kann Gesetze nur durch allgemeinere Gesetze erklären; am Ende steht entweder eine unerklärte Tatsache oder eine personale Erklärung – ein Wille, der die Ordnung will und erhält. Swinburne hält die zweite Option für die einfachere und bessere.`,
      sources: [{ kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Existence of God', ref: '2. Aufl., Kap. 8', year: '2004', quote: `Die durchgängige Gesetzmäßigkeit der Natur ist am besten dadurch erklärt, dass ein personaler Gott sie hervorbringt und erhält.`, status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'nur-beschreibungen',
      objection: `Naturgesetze sind nur Beschreibungen von Regelmäßigkeiten. Da gibt es nichts zu erklären – das Gesetz sagt nur, was ohnehin passiert.`,
      objectionBy: 'Sean Carroll',
      targetsPremise: 2,
      answer: `Dann bleibt die Regelmäßigkeit selbst unerklärt: Warum verhält sich jedes Elektron im ganzen Universum seit 13,8 Milliarden Jahren exakt gleich? Wenn nichts es dazu bringt, ist das ein unfassbarer Zufall. Und dann hast du auch keinen Grund zu erwarten, dass es morgen so bleibt – Humes Induktionsproblem. Der Theismus erklärt die Regelmäßigkeit mit der Treue Gottes (Jer 33,25).`,
      questionsBack: [`Warum sollten sich alle Elektronen im Universum gleich verhalten, wenn nichts sie dazu bringt?`],
      followUps: [
        {
          id: 'regelmaessigkeit-einfach-so',
          objection: `Die Frage „Warum Regelmäßigkeit?" ist sinnlos. Das Universum ist einfach so.`,
          objectionBy: 'Sean Carroll',
          answer: `Das ist eine Entscheidung, an dieser Stelle aufzuhören – keine Erkenntnis. Die Wissenschaft lebt davon, nach Erklärungen zu fragen. Paul Davies, selbst kein Christ, hat geschrieben, dass die Wissenschaft auf dem Glauben an eine rationale Ordnung beruht, deren Ursprung sie nicht erklärt.`,
          followUps: [
            {
              id: 'induktion-pragmatisch',
              objection: `Induktion funktioniert eben. Pragmatisch reicht das völlig.`,
              objectionBy: 'Gesprächspartner',
              answer: `Dass sie bisher funktioniert hat, ist genau das, was zu begründen wäre. Bertrand Russell erzählte vom Huhn, das jeden Tag gefüttert wird und fest erwartet, dass es so weitergeht – bis zu dem Tag, an dem ihm der Bauer den Hals umdreht. Der Theismus gibt einen Grund, warum die Ordnung verlässlich ist; der bloße Pragmatismus nicht. Historisch war genau diese Überzeugung ein Motor der neuzeitlichen Naturwissenschaft.`,
              sources: [{ kind: 'gegner', author: 'Bertrand Russell', work: 'The Problems of Philosophy', ref: 'Kap. 6 „On Induction"', year: '1912', quote: `Das Huhn, das täglich gefüttert wurde, wird schließlich vom Mann, der es fütterte, geschlachtet – bloße Gewöhnung begründet keine Erwartung.`, status: 'paraphrase' }],
              followUps: [
                {
                  id: 'gott-loest-induktion-nicht',
                  objection: `Gott löst das Induktionsproblem auch nicht. Woher weißt du, dass Gott morgen noch derselbe ist und die Welt weiter so trägt? Auch das schließt du nur aus der Vergangenheit – also wieder Induktion.`,
                  objectionBy: 'Sean Carroll (nach David Hume)',
                  answer: `Nicht ganz. Ich schließe nicht aus vielen Beobachtungen auf eine Regel, sondern aus dem Wesen dessen, der die Welt trägt: Wenn Gott vernünftig, unveränderlich und treu ist, dann ist die Gleichförmigkeit der Natur Ausdruck seines Charakters und seiner Zusage – „Solange die Erde steht, soll nicht aufhören Saat und Ernte, Frost und Hitze" (1 Mo 8,22). Der Theismus beweist die Gleichförmigkeit nicht mathematisch, aber er macht sie *erwartbar*. Im Naturalismus ist sie bloß eine Gewohnheit, für die es keinen Grund gibt.`,
                  detail: `Das ist ein Vergleich von Weltbildern: Welches lässt eine dauerhaft gesetzmäßige Natur erwarten? Im Theismus gibt es einen Grund – einen vernünftigen Schöpfer, der eine verlässliche Welt will, damit Geschöpfe handeln und verstehen können. Im Naturalismus ist die Gleichförmigkeit das letzte, unerklärte Faktum. Jeremia vergleicht Gottes Bundestreue ausdrücklich mit der Beständigkeit seiner „Ordnungen des Himmels und der Erde" (Jer 33,25). Die frühen Naturforscher – Kepler, Boyle, Newton – sahen darin den Grund, Naturgesetze überhaupt zu suchen.`,
                  sources: [{ kind: 'bibel', work: '1. Mose', ref: '8,22', quote: `Solange die Erde steht, soll nicht aufhören Same und Ernte, Frost und Hitze, Sommer und Winter, Tag und Nacht.`, translation: 'Luther 1912', status: 'paraphrase' }],
                  questionsBack: [`Welches Weltbild lässt eine dauerhaft gleichförmige Natur erwarten – eines mit einem treuen, vernünftigen Schöpfer oder eines ohne jeden Grund?`],
                  followUps: [
                    {
                      id: 'humesche-gesetze',
                      objection: `Nach David Lewis' humescher Sicht sind Gesetze nichts als die beste, einfachste Zusammenfassung des gesamten Mosaiks der Tatsachen. Nichts „bewirkt" die Regelmäßigkeit – sie *ist* einfach das Muster. Also gibt es nichts weiter zu erklären.`,
                      objectionBy: 'Sean Carroll (nach David Lewis)',
                      answer: `Dann ist die Ordnung des Mosaiks selbst ein kosmischer Zufall. Unter allen möglichen Verteilungen von Tatsachen sind die allermeisten chaotisch und lassen sich durch keine einfachen Gesetze zusammenfassen. Dass unser Mosaik sich durch wenige, elegante Gleichungen beschreiben lässt – über 13,8 Milliarden Jahre und Milliarden Lichtjahre hinweg –, ist dann ein unerklärtes Wunder ohne Wundertäter. Auch säkulare Philosophen wie David Armstrong haben eingewandt, dass die humesche Sicht die Regelmäßigkeit gerade unerklärt lässt.`,
                      detail: `Armstrong (*What Is a Law of Nature?*, 1983) argumentierte, dass reine Regelmäßigkeitstheorien Gesetze nicht von zufälligen Allgemeinheiten unterscheiden können und die Voraussagekraft der Wissenschaft unerklärt lassen. Er selbst war kein Theist, sondern vertrat eine realistische Sicht von Gesetzen als Beziehungen zwischen Universalien. Für das Gespräch genügt: Wer Gesetze zur bloßen Zusammenfassung erklärt, hat die Ordnung nicht erklärt, sondern sie zum rohen Faktum gemacht – und zwar zum unwahrscheinlichsten aller rohen Fakten.`,
                      sources: [{ kind: 'fachliteratur', author: 'David M. Armstrong', work: 'What Is a Law of Nature?', year: '1983', quote: `Regelmäßigkeitstheorien könnten Gesetze nicht von zufälligen Allgemeinheiten unterscheiden und ließen die Gleichförmigkeit der Natur unerklärt.`, status: 'paraphrase', note: 'Armstrong war Naturalist; seine Kritik der humeschen Sicht ist dennoch einschlägig.' }],
                      questionsBack: [`Unter allen möglichen „Mosaiken" von Tatsachen – wie viele lassen sich durch wenige elegante Gesetze zusammenfassen? Ist es kein Rätsel, dass unseres dazugehört?`],
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
      id: 'symmetrien-noether',
      objection: `Die Gesetze folgen aus Symmetrien. Das Noether-Theorem zeigt: Energieerhaltung folgt aus der Zeitsymmetrie, Impulserhaltung aus der Raumsymmetrie. Das ist keine Willkür, sondern Mathematik.`,
      objectionBy: 'Peter Atkins / Sean Carroll',
      targetsPremise: 3,
      answer: `Das ist großartige Physik. Aber es verschiebt die Frage: Warum gelten genau diese Symmetrien? Warum lässt sich die Welt überhaupt durch Wirkungsprinzipien und Symmetriegruppen beschreiben? Warum hat das Standardmodell gerade die Symmetriegruppen, die es hat, und rund zwei Dutzend frei wählbare Konstanten mit genau diesen Werten? Symmetrien erklären einiges – aber sie erklären sich nicht selbst.`,
      followUps: [
        {
          id: 'atkins-faulheit',
          objection: `Atkins zeigt in „Conjuring the Universe", wie Gesetze aus der „Faulheit" der Natur und dem Nichts entstehen.`,
          objectionBy: 'Peter Atkins',
          answer: `Auch Atkins' Herleitungen setzen einen mathematischen Rahmen voraus – etwa, dass die Dynamik durch eine Wirkung beschrieben wird, aus der Symmetrien Erhaltungssätze machen. „Faulheit" ist eine Metapher, keine Erklärung. Und die Werte der Konstanten erklärt er damit nicht.`,
          followUps: [
            {
              id: 'gesetze-aus-indifferenz',
              objection: `Atkins' Pointe ist tiefer: Am Anfang war keine Struktur, nur Indifferenz – kein bevorzugter Ort, keine bevorzugte Zeit, keine bevorzugte Richtung. Aus dieser „Anarchie" folgen die Erhaltungssätze von selbst. Die Gesetze sind das, was übrig bleibt, wenn nichts vorgeschrieben ist.`,
              objectionBy: 'Peter Atkins',
              answer: `„Indifferenz" ist selbst eine sehr bestimmte Struktur: Zu sagen, kein Ort und keine Zeit seien bevorzugt, heißt, bestimmte Symmetrien vorauszusetzen – und dass es Raum, Zeit und eine Dynamik gibt, auf die sie sich beziehen. Mit dieser Methode lassen sich einige Erhaltungssätze herleiten, aber nicht die Stärke der Kräfte, die Massen der Teilchen oder die Quantenmechanik selbst. Und das „Nichts", aus dem Atkins startet, enthält Logik und Mathematik. Ein Nichts, aus dem man Gleichungen ableiten kann, ist kein Nichts.`,
              detail: `Atkins hat das Verdienst, die Frage nach dem Ursprung der Gesetze ernst zu nehmen. Doch gerade seine Herleitung zeigt, wie viel vorausgesetzt ist: die Beschreibbarkeit der Welt durch eine Wirkungsfunktion, differenzierbare Mannigfaltigkeiten, die Gültigkeit der Logik. Die klassische christliche Antwort sieht in dieser rationalen Grundstruktur der Welt den Abdruck des Logos – nicht einen Ersatz für ihn.`,
              questionsBack: [`Wenn am Anfang „nichts" war – woher kamen dann Logik, Mathematik und Symmetrie, aus denen du die Gesetze herleitest?`],
            },
          ],
        },
      ],
    },
    {
      id: 'tegmark-mathematisches-universum',
      objection: `Tegmark: Das Universum IST eine mathematische Struktur. Mathematische Strukturen existieren notwendig – also auch die Gesetze. Kein Gesetzgeber nötig.`,
      objectionBy: 'Max Tegmark',
      answer: `Dann ist zu erklären, warum gerade diese Struktur die ist, in der wir leben, und warum abstrakte Mathematik physikalisch wirklich wird. Tegmark selbst folgert, dass alle mathematischen Strukturen existieren – damit gibt es unzählige chaotische Welten, und das Maßproblem wird unlösbar. Und dass Mathematik ewig und notwendig ist, passt hervorragend dazu, dass sie in einem ewigen Geist gründet – so dachten Augustinus und Kepler.`,
      followUps: [
        {
          id: 'wigner-selektionseffekt',
          objection: `Wigners „unvernünftige Wirksamkeit" ist nur ein Auswahleffekt: Wir verwenden eben die Mathematik, die passt, und vergessen den Rest.`,
          objectionBy: 'Gesprächspartner',
          answer: `Das erklärt nicht, warum Mathematik, die rein aus innermathematischem Interesse entwickelt wurde, Jahrzehnte später genau die Struktur der Natur beschreibt: komplexe Zahlen in der Quantenmechanik, Riemanns Geometrie in Einsteins Gravitationstheorie, Gruppentheorie in der Teilchenphysik. Wigner nannte das ein Geschenk, das wir weder verstehen noch verdienen.`,
          sources: [{ kind: 'wissenschaft', author: 'Eugene P. Wigner', work: '„The Unreasonable Effectiveness of Mathematics in the Natural Sciences", Communications on Pure and Applied Mathematics 13, 1–14', year: '1960', quote: `The miracle of the appropriateness of the language of mathematics for the formulation of the laws of physics is a wonderful gift which we neither understand nor deserve.`, status: 'verbatim' }],
          detail: `Ausführlich im Claim „Dass die Welt mathematisch beschreibbar ist, ist Zufall".`,
          followUps: [
            {
              id: 'gleichungen-sagen-voraus',
              objection: `Mathematik ist eine menschliche Erfindung, die wir an der Erfahrung entwickelt haben. Natürlich passt sie zur Welt – wir haben sie ja für die Welt gemacht.`,
              objectionBy: 'Sean Carroll',
              answer: `Dann dürften Gleichungen nicht mehr enthalten, als wir hineingesteckt haben. Sie tun es aber ständig. Dirac schrieb 1928 eine Gleichung für das Elektron – und sie verlangte ein Teilchen, das niemand kannte: das Positron, 1932 entdeckt. Peter Higgs und andere folgerten 1964 aus der Mathematik ein Teilchen, das 2012 am CERN gefunden wurde. Einstein sagte aus seinen Gleichungen Gravitationswellen voraus, die 2015 gemessen wurden. Eine bloße Erfindung, die die Natur Jahrzehnte im Voraus kennt, ist erklärungsbedürftig.`,
              detail: `Die Mathematik als menschliche Tätigkeit ist zweifellos von Erfahrung angeregt. Aber ihre Strukturen entwickeln eine Eigendynamik, die weit über das Erfahrene hinausführt – und die Natur folgt ihnen. Christlich gedeutet ist das nicht überraschend: Der menschliche Verstand ist nach dem Bild des Logos geschaffen, und die Welt ist durch den Logos geordnet. Kepler sprach davon, dass der Mensch Gottes Gedanken nachdenkt.`,
              voices: [
                { person: 'kepler', role: 'als Mathematiker und Astronom', text: `Kepler war überzeugt, dass Gott die Welt nach mathematischen Urbildern geschaffen und dem menschlichen Geist dieselben Urbilder eingeprägt hat. Darum könne der Mensch die Harmonie der Himmel erkennen: Geometrie sei „gleich ewig mit dem Geist Gottes" und im Menschen als Bild Gottes angelegt. Seine Entdeckung der Planetengesetze verstand er als Bestätigung dieser Überzeugung.` },
              ],
              questionsBack: [`Wie kann eine menschliche Erfindung ein Teilchen vorhersagen, das erst Jahrzehnte später entdeckt wird?`],
            },
          ],
        },
      ],
    },
    {
      id: 'gesetzgeber-erklaert-nichts',
      objection: `Ein Gesetzgeber erklärt gar nichts. „Gott wollte es so" passt zu jedem beliebigen Gesetz.`,
      objectionBy: 'Sean Carroll',
      answer: `Nicht zu jedem. Der Theismus lässt eine geordnete, universell gültige, mathematisch elegante und für vernünftige Geschöpfe erkennbare Welt erwarten – denn ihr Urheber ist vernünftig und will erkannt werden. Der Naturalismus hat keinen Grund, so etwas zu erwarten. Historisch suchten Kepler, Newton, Boyle und Maxwell nach Gesetzen, weil sie an einen rationalen Gesetzgeber glaubten.`,
      followUps: [
        {
          id: 'christentum-wissenschaft-these',
          objection: `Die These „Das Christentum hat die Wissenschaft hervorgebracht" lehnen viele Historiker als zu simpel ab.`,
          objectionBy: 'Wissenschaftshistoriker',
          answer: `Zu Recht, wenn sie monokausal formuliert wird; die Wissenschaft hat viele Wurzeln, auch griechische und arabische. Aber Historiker wie Peter Harrison zeigen, dass der Begriff des „Naturgesetzes" im 17. Jahrhundert eng mit der Vorstellung eines göttlichen Gesetzgebers verbunden war. Das genügt für meinen Punkt: Die Idee universeller Gesetze passte zum Schöpfungsglauben.`,
          followUps: [
            {
              id: 'religion-stoppt-wissenschaft',
              objection: `Religion ist ein Wissenschaftsstopper. Sobald jemand sagt „Hier wirkt Gott", hört er auf zu forschen. In der islamischen Welt blühte die Wissenschaft, bis Theologen wie al-Ghazali lehrten, Gott verursache alles unmittelbar – danach war Schluss.`,
              objectionBy: 'Neil deGrasse Tyson',
              answer: `Die Wissenschaftsgeschichte gibt diese Erzählung nicht her. Gerade nach al-Ghazali entstanden einige der bedeutendsten Leistungen der islamischen Astronomie, etwa an der Sternwarte von Maragha im 13. Jahrhundert und bei Ibn al-Shatir im 14. Jahrhundert, dessen Planetenmodelle später bei Kopernikus wiederkehren. Und in der christlichen Welt war es umgekehrt: Der Glaube an einen vernünftigen Gesetzgeber war für Kepler, Boyle, Newton und Maxwell der Antrieb zum Forschen, nicht sein Ende. „Gott wirkt hier" heißt für sie: Hier gibt es eine Ordnung zu entdecken.`,
              detail: `Historiker wie George Saliba haben die These vom „Niedergang durch al-Ghazali" als zu einfach kritisiert; die Gründe für die späteren Entwicklungen sind vielfältig (politische, wirtschaftliche, institutionelle). Fairness gegenüber muslimischen Gelehrten gehört dazu: Viele von ihnen haben Großes für Mathematik, Optik und Astronomie geleistet. Für die christliche Seite gilt: Der Unterschied zwischen Gott als Erstursache und den Naturursachen als Zweitursachen erlaubt es, Gottes Wirken zu bekennen *und* die Naturursachen vollständig zu erforschen.`,
              voices: [
                { person: 'boyle', role: 'als Chemiker und Naturphilosoph', text: `Boyle, ein Begründer der modernen Chemie, verstand die Naturforschung als Gottesdienst: Wer die kunstvolle Ordnung der Schöpfung erforscht, ehrt ihren Urheber. Gerade weil Gott die Welt frei und vernünftig geschaffen habe, müsse man ihre Gesetze durch Experiment und Beobachtung herausfinden, statt sie aus Prinzipien abzuleiten.` },
              ],
              sources: [{ kind: 'fachliteratur', author: 'George Saliba', work: 'Islamic Science and the Making of the European Renaissance', year: '2007', quote: `Die These, die islamische Wissenschaft sei nach al-Ghazali niedergegangen, werde durch die bedeutenden astronomischen Arbeiten des 13. bis 15. Jahrhunderts widerlegt.`, status: 'paraphrase' }],
              questionsBack: [`Warum haben Kepler, Boyle, Newton und Maxwell ihren Glauben als Antrieb zur Forschung beschrieben, wenn Religion ein Wissenschaftsstopper ist?`],
            },
          ],
        },
        {
          id: 'wer-schuf-gesetzgeber',
          objection: `Und wer hat den Gesetzgeber gemacht? Ein Gott, der die Gesetze und ihre Feinabstimmung erklären kann, müsste noch komplexer sein als das, was er erklärt. Damit hast du das Problem nur vergrößert.`,
          objectionBy: 'Richard Dawkins / Sean Carroll',
          answer: `Zwei Antworten. Erstens: Eine Erklärung ist auch dann gut, wenn man die Erklärung nicht wieder erklären kann – ein Archäologe, der eine Inschrift einer unbekannten Kultur zuschreibt, muss nicht erst wissen, wer diese Kultur hervorgebracht hat. Zweitens: Gott ist in der klassischen Lehre kein zusammengesetztes Ding aus vielen Teilen, sondern einfach, ewig und notwendig – er hat keinen Anfang und braucht keinen Urheber. Die Frage „Wer schuf Gott?" setzt voraus, dass Gott zu den Dingen gehört, die zu existieren beginnen. Genau das bestreiten Christen.`,
          detail: `Dawkins' „ultimative Boeing 747" (*The God Delusion*, 2006, Kap. 4) nimmt an, ein Geist, der komplexe Dinge entwerfen kann, müsse selbst physisch komplex sein. Plantinga hat in seiner Rezension („The Dawkins Confusion", 2007) eingewandt, dass Gott nach klassischer Lehre gerade nicht aus Teilen besteht; Komplexität im Sinne von Zusammengesetztheit trifft auf ihn nicht zu. Die Lehre von der Einfachheit Gottes ist bei den Vätern fest verankert: Gott ist nicht aus Teilen zusammengesetzt, sondern das eine, ungeteilte Sein.`,
          voices: [
            { person: 'plantinga', role: 'als Religionsphilosoph', text: `Plantinga hält Dawkins entgegen, dass Gott kein materielles Objekt ist und daher nicht aus Teilen besteht; nach klassischer Lehre ist er einfach. Zudem müsse eine Erklärung nicht selbst erklärt sein, um eine gute Erklärung zu sein – sonst wäre jede wissenschaftliche Erklärung unmöglich, weil jede Erklärungskette irgendwo endet.` },
          ],
          sources: [{ kind: 'fachliteratur', author: 'Alvin Plantinga', work: '„The Dawkins Confusion: Naturalism ad absurdum", Books & Culture', year: '2007', quote: `Gott sei nach klassischer Lehre einfach und nicht aus Teilen zusammengesetzt; Dawkins' Komplexitätsargument treffe daher nicht.`, status: 'paraphrase' }],
          questionsBack: [`Muss man den Urheber einer Inschrift erklären können, um zu erkennen, dass sie einen Urheber hat?`, `Beginnt Gott nach christlicher Lehre zu existieren? Wenn nicht – warum fragst du nach seiner Ursache?`],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Haben Newtons Gesetze jemals eine Billardkugel bewegt?`,
    `Warum verhält sich jedes Elektron im Universum gleich, wenn Gesetze nur Beschreibungen sind?`,
    `Warum gelten gerade diese Symmetrien und nicht andere?`,
    `Warum ist abstrakte Mathematik, die ohne Blick auf die Natur entwickelt wurde, auf die Natur anwendbar?`,
  ],
  avoid: [
    `Naturgesetze als „Gottes Befehle, die er jederzeit ändern kann" darstellen, als wäre die Natur launisch. Die Bibel betont Gottes Treue in der Ordnung.`,
    `Die Physik der Symmetrien kleinreden. Das Noether-Theorem ist eine der schönsten Einsichten der Physik.`,
    `Behaupten, nur Christen hätten Wissenschaft betrieben. Das ist historisch falsch.`,
  ],
  concessions: [
    `Was Naturgesetze sind, ist unter Philosophen umstritten; die humesche Sicht ist eine respektable Position.`,
    `Einige Gesetze lassen sich tatsächlich aus Symmetrien herleiten; nicht jedes Gesetz ist „willkürlich".`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'John C. Lennox', work: 'God’s Undertaker', year: '2009', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Peter Harrison', work: 'The Territories of Science and Religion', year: '2015', status: 'paraphrase' },
    { kind: 'wissenschaft', author: 'Eugene P. Wigner', work: '„The Unreasonable Effectiveness of Mathematics in the Natural Sciences"', year: '1960', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Existence of God', year: '2004', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Naturgesetze', 'Logos', 'Wigner', 'Noether', 'Tegmark', 'Davies'],
  related: [
    'kosmologie/universum-aus-dem-nichts',
    'mathematik/effektivitaet-der-mathematik-zufall',
    'mathematik/mathematik-menschliche-erfindung',
    'gottesbeweise/kontingenz-trugschluss',
    'erkenntnistheorie/nur-wissenschaft-liefert-wissen',
    'physik/wunder-verletzen-naturgesetze',
  ],
};

export default claim;
