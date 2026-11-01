import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'ewiges-leben-langweilig',
  title: `„Ewiges Leben wäre unerträglich langweilig (Bernard Williams)."`,
  proponents: [
    { name: 'Bernard Williams', role: 'Moralphilosoph, Cambridge und Oxford (1929–2003)', work: '„The Makropulos Case: Reflections on the Tedium of Immortality", in: Problems of the Self (1973)' },
    { name: 'Martha Nussbaum', role: 'Philosophin, University of Chicago', work: 'The Therapy of Desire (1994), Kap. „Mortal Immortals"' },
    { name: 'Samuel Scheffler', role: 'Philosoph, New York University', work: 'Death and the Afterlife (2013)' },
    { name: 'Shelly Kagan', role: 'Philosoph, Yale University', work: 'Death (2012)' },
  ],
  steelman: `Bernard Williams knüpft an Karel Čapeks Theaterstück „Die Sache Makropulos" an: Elina Makropulos hat durch ein Elixier ihr Leben verlängert – nach Williams' Darstellung ist sie 342 Jahre alt, körperlich aber 42. Sie ist kalt, gleichgültig und unendlich gelangweilt; am Ende verzichtet sie auf das Elixier und stirbt. Williams' Argument: Was uns weiterleben lässt, sind „kategorische Wünsche" – Projekte, Beziehungen, Leidenschaften. Ein endliches Wesen mit festem Charakter wird diese irgendwann erschöpfen; dann bleibt nur Leere. Ändert sich der Charakter aber so stark, dass immer neue Wünsche entstehen, dann ist der Mensch nach Jahrmillionen nicht mehr er selbst – und es ist nicht *sein* Weiterleben. Martha Nussbaum ergänzt: Mut, Opfer, Großzügigkeit – die menschlichen Tugenden – setzen Verletzlichkeit und Sterblichkeit voraus. Samuel Scheffler zeigt, dass der Wert vieler Dinge an der Knappheit der Zeit hängt. Ein ewiges Leben wäre also kein Geschenk, sondern ein Fluch – und der christliche Himmel mit seinem endlosen Lobgesang erst recht.`,
  biblical: {
    summary: `Die Bibel beschreibt das ewige Leben nicht als endlose Verlängerung des jetzigen Lebens, sondern als Gemeinschaft mit dem unendlichen Gott: „Das ist das ewige Leben, dass sie dich, der du allein wahrer Gott bist, und den du gesandt hast, Jesus Christus, erkennen" (Joh 17,3). Vor ihm ist „Freude die Fülle … ewiglich" (Ps 16,11). Es ist ein Leben des Wachstums: „von einer Klarheit zu der andern" (2 Kor 3,18), ein Leben, das „kein Auge gesehen und kein Ohr gehört hat" (1 Kor 2,9) – und eine erneuerte Schöpfung: „Siehe, ich mache alles neu" (Offb 21,5).`,
    detail: `- **Joh 17,3:** „Ewiges Leben" (*zōē aiōnios*) bezeichnet zuerst eine Qualität – Leben in der Erkenntnis Gottes –, nicht bloß Dauer.
- **2 Kor 3,18:** Verwandlung „von Herrlichkeit zu Herrlichkeit" – ein fortschreitendes Geschehen.
- **Phil 3,13:** Paulus „streckt sich aus nach dem, was vorne ist" (*epekteinomenos*) – Gregor von Nyssa macht daraus seine Lehre von der *Epektasis*, dem ewigen Wachstum in Gott.
- **Offb 21,1–5.24–26:** Neuer Himmel und neue Erde; die Völker bringen ihre Herrlichkeit in die heilige Stadt – kein leerer Himmel, sondern eine verklärte Schöpfung.
- **Hebr 4,9:** „Es ist noch eine Ruhe vorhanden dem Volke Gottes" – Ruhe im biblischen Sinn ist Sabbat-Freude, nicht Untätigkeit.`,
    sources: [
      { kind: 'bibel', work: 'Johannes', ref: '17,3', quote: `Das ist aber das ewige Leben, daß sie dich, der du allein wahrer Gott bist, und den du gesandt hast, Jesum Christum, erkennen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalmen', ref: '16,11', quote: `Du tust mir kund den Weg zum Leben: vor dir ist Freude die Fülle und liebliches Wesen zu deiner Rechten ewiglich.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Korinther', ref: '3,18', quote: `Nun aber spiegelt sich in uns allen des HERRN Klarheit mit aufgedecktem Angesicht, und wir werden verklärt in dasselbe Bild von einer Klarheit zu der andern als vom Geist des HERRN.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Philipper', ref: '3,13', quote: `Ich vergesse, was dahinten ist, und strecke mich zu dem, das da vorne ist …`, original: 'τοῖς δὲ ἔμπροσθεν ἐπεκτεινόμενος', translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '2,9', quote: `Was kein Auge gesehen hat und kein Ohr gehört hat und in keines Menschen Herz gekommen ist, was Gott bereitet hat denen, die ihn lieben.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Gregor von Nyssa, einer der großen kappadokischen Väter, hat genau Williams' Frage beantwortet – 1600 Jahre vor ihm: Weil Gott unendlich ist, kann die Seele ihn nie ausschöpfen. Das ewige Leben ist darum ein ewiges Voranschreiten (*Epektasis*): Jede Erfüllung öffnet die Seele für eine größere. „Das ist wahrhaft die Schau Gottes: niemals satt zu werden in der Sehnsucht, ihn zu sehen." Die koptische Kirche betet für ihre Entschlafenen um den „Ort der Ruhe" im „Paradies der Freude" – Ruhe und Freude, nicht Stillstand und Leere. Die Wüstenväter Ägyptens kannten die Langeweile sehr gut – als *Akedia*, eine Krankheit der Seele, die sich von Gott abwendet, nicht als Eigenschaft der Gemeinschaft mit ihm.`,
    sources: [
      { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Das Leben des Mose (De vita Moysis)', ref: 'II,239', year: 'um 390', quote: `Das ist wahrhaft die Schau Gottes: niemals satt zu werden in der Sehnsucht, ihn zu sehen.`, original: 'This truly is the vision of God: never to be satisfied in the desire to see him.', translation: 'nach der engl. Übersetzung von A. Malherbe & E. Ferguson (1978)', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Johannes Cassian', work: 'Von den Einrichtungen der Klöster (De institutis coenobiorum)', ref: 'Buch X', year: 'um 420', status: 'paraphrase', quote: 'Die Akedia – Überdruss und Unruhe des Herzens – ist ein Laster, das den Mönch von Gebet und Arbeit forttreibt.' },
      { kind: 'liturgie', work: 'Koptische Fürbitte für die Entschlafenen', status: 'paraphrase', quote: 'Gedenke, Herr, derer, die entschlafen sind; lass ihre Seelen ruhen im Schoß Abrahams, Isaaks und Jakobs, im Paradies der Freude.' },
    ],
  },
  quickAnswer: `Williams hat recht: Ein endloses Weiterleben in *dieser* begrenzten Welt würde irgendwann leer – wie bei Elina Makropulos. Aber das ist nicht die christliche Hoffnung. Christen hoffen auf Gemeinschaft mit dem *unendlichen* Gott – und ein unendliches Gegenüber kann man nie ausschöpfen. Gregor von Nyssa sagte: Die wahre Schau Gottes heißt, „niemals satt zu werden in der Sehnsucht, ihn zu sehen". Und Langeweile entsteht nicht aus zu viel Gutem, sondern aus zu wenig Liebe – oder hast du dich je gelangweilt, weil du zu lange mit jemandem zusammen warst, den du von Herzen liebst?`,
  keyPoints: [
    `**Williams beschreibt das Falsche:** Elina Makropulos verlängert ein endliches Leben in einer endlichen Welt. Die christliche Hoffnung ist Gemeinschaft mit dem Unendlichen.`,
    `**Epektasis (Gregor von Nyssa):** Weil Gott unendlich ist, gibt es ewiges Wachstum – jede Erfüllung öffnet für mehr. Das löst beide Hörner von Williams' Dilemma: Es gibt immer Neues, und es ist immer *derselbe* Mensch, der wächst.`,
    `**Wachstum ist nicht Ersatz:** Du bist ein ganz anderer als mit fünf Jahren – und doch derselbe. Verwandlung „von Herrlichkeit zu Herrlichkeit" (2 Kor 3,18) zerstört die Identität nicht, sondern erfüllt sie.`,
    `**Wiederholbare Güter:** John Martin Fischer zeigt, dass viele Güter – Musik, Freundschaft, Gebet – nicht verbraucht werden, sondern sich vertiefen.`,
    `**Knappheit ist nicht die Quelle des Werts:** Wir lieben unsere Kinder nicht, *weil* sie sterben werden.`,
    `**Langeweile ist ein Symptom, kein Naturgesetz:** Die Wüstenväter nannten sie *Akedia*, eine Krankheit der Seele. Chesterton: Gott hat den „ewigen Appetit der Kindheit" – wir sind alt geworden, nicht die Welt.`,
  ],
  argument: {
    name: 'Williams\' Dilemma – und seine Auflösung',
    summary: 'Entweder gleichbleibender Charakter (dann Langeweile) oder radikale Veränderung (dann nicht mehr ich).',
    premises: [
      {
        text: 'Horn 1 (Williams): Bleibt mein Charakter gleich, erschöpfe ich irgendwann alle Wünsche, die mein Leben tragen – Langeweile.',
        support: `**Antwort:** Das gilt nur, wenn das Gegenüber meiner Wünsche endlich ist. Ist es der unendliche Gott, gibt es kein Ende des Entdeckens. Gregor von Nyssa: Die Seele wird nie satt, weil Gott unerschöpflich ist.`,
        sources: [
          { kind: 'gegner', author: 'Bernard Williams', work: '„The Makropulos Case: Reflections on the Tedium of Immortality", in: Problems of the Self', year: '1973', status: 'paraphrase', quote: 'Ein unendliches Leben würde entweder in Langeweile enden oder eine so große Veränderung verlangen, dass es nicht mehr das Leben derselben Person wäre.' },
        ],
      },
      {
        text: 'Horn 2 (Williams): Verändert sich mein Charakter radikal, damit neue Wünsche entstehen, bin ich irgendwann nicht mehr ich.',
        support: `**Antwort:** Wachstum ist nicht dasselbe wie Ersetzung. Ein Mensch, der von der Kindheit bis ins Alter tiefgreifend reift, bleibt derselbe. Das ewige Leben ist Reifung in Gottes Bild hinein – die Erfüllung dessen, was ich bin, nicht seine Auslöschung.`,
      },
    ],
    conclusion: 'Williams\' Dilemma trifft ein endloses Leben in einer endlichen Welt, nicht das christliche ewige Leben in der Gemeinschaft mit dem unendlichen Gott.',
  },
  voices: [
    {
      person: 'gregor-nyssa',
      role: 'als Theologe des ewigen Fortschreitens',
      text: `Gregor deutet das Leben des Mose als Bild des geistlichen Aufstiegs: Mose sieht Gott im brennenden Dornbusch, dann in der Wolke, dann im Dunkel – und bittet doch immer wieder, Gott zu sehen. Gregor folgert: Weil Gott unbegrenzt ist, kann auch die Sehnsucht nach ihm keine Grenze haben. Die Vollkommenheit des Menschen besteht nicht in einem Endzustand, an dem nichts mehr zu entdecken ist, sondern in einem ewigen Wachstum im Guten. Was Williams als Problem sieht – dass man irgendwann alles erlebt hat –, ist bei Gott unmöglich: Er ist das Unerschöpfliche selbst.`,
      sources: [
        { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Das Leben des Mose', ref: 'II,219–239', status: 'paraphrase', quote: 'Die Vollkommenheit der menschlichen Natur besteht im immerwährenden Wachstum im Guten; die Sehnsucht nach Gott findet nie ein Ende, weil Gott unbegrenzt ist.' },
      ],
    },
    {
      person: 'augustinus',
      role: 'als Theologe der ewigen Ruhe',
      text: `Augustinus beschließt sein Riesenwerk „Vom Gottesstaat" mit einer Beschreibung des ewigen Lebens: Es ist der Sabbat, der kein Ende hat. Dort werden wir ruhen und schauen, schauen und lieben, lieben und loben – „siehe, das wird sein am Ende ohne Ende". Für Augustinus ist die Ruhe in Gott nicht Untätigkeit, sondern die erfüllte Tätigkeit des Erkennens und Liebens, die nicht mehr durch Mühe, Mangel und Tod unterbrochen wird. Sein berühmter Satz aus den Bekenntnissen – „unruhig ist unser Herz, bis es ruht in dir" – zeigt, dass gerade die Ruhe in Gott das ist, wonach das Herz sich sehnt.`,
      sources: [
        { kind: 'kirchenvater', author: 'Augustinus', work: 'Vom Gottesstaat (De civitate Dei)', ref: 'XXII,30', year: 'um 426', quote: `Dort werden wir ruhen und schauen, schauen und lieben, lieben und loben. Siehe, das wird sein am Ende ohne Ende.`, original: 'Ibi vacabimus et videbimus, videbimus et amabimus, amabimus et laudabimus. Ecce quod erit in fine sine fine.', translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
    },
    {
      person: 'cs-lewis',
      role: 'als Erzähler und Apologet',
      text: `Lewis schließt seine Narnia-Chroniken mit einem Bild, das Williams' Einwand vorwegnimmt: Alles bisherige Leben und alle Abenteuer waren nur der Umschlag und das Titelblatt; jetzt beginnt das erste Kapitel der großen Geschichte, „die ewig weitergeht und in der jedes Kapitel besser ist als das vorige". Der Ruf der Figuren lautet: „Weiter hinauf und weiter hinein!" Für Lewis ist der Himmel nicht ein Endpunkt, an dem alles erledigt ist, sondern der Anfang einer Wirklichkeit, die immer größer wird, je tiefer man in sie eindringt.`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Last Battle (Der letzte Kampf)', year: '1956', ref: 'Schluss', quote: `… Kapitel Eins der großen Geschichte, die noch niemand auf Erden gelesen hat: die ewig weitergeht und in der jedes Kapitel besser ist als das vorige.`, original: 'Chapter One of the Great Story which no one on earth has read: which goes on for ever: in which every chapter is better than the one before.', translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
    },
    {
      person: 'chesterton',
      role: 'als Philosoph des Staunens',
      text: `Chesterton dreht das Argument um: Kinder werden der Wiederholung nicht müde – sie rufen „Noch einmal!", wenn sie etwas Schönes erleben. Erwachsene sind nicht stark genug, sich an Monotonie zu freuen. Vielleicht, so Chesterton, sagt Gott jeden Morgen zur Sonne „Noch einmal!" und jeden Abend zum Mond. Vielleicht hat er „den ewigen Appetit der Kindheit; denn wir haben gesündigt und sind alt geworden, und unser Vater ist jünger als wir". Langeweile ist nach Chesterton nicht ein Merkmal des Guten, sondern ein Zeichen unserer Ermüdung.`,
      sources: [
        { kind: 'fachliteratur', author: 'G. K. Chesterton', work: 'Orthodoxy', year: '1908', ref: 'Kap. 4 „The Ethics of Elfland"', quote: `Vielleicht hat er den ewigen Appetit der Kindheit; denn wir haben gesündigt und sind alt geworden, und unser Vater ist jünger als wir.`, original: 'It may be that He has the eternal appetite of infancy; for we have sinned and grown old, and our Father is younger than we.', translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
    },
    {
      person: 'thomas-aquin',
      role: 'als Theologe der Seligkeit',
      text: `Thomas fragt, worin die letzte Glückseligkeit des Menschen besteht, und prüft nacheinander Reichtum, Ehre, Ruhm, Macht, Lust und Wissen. Keines davon kann den menschlichen Geist endgültig erfüllen, weil jedes begrenzt ist und der Geist auf das unbegrenzte Gute hin angelegt ist. Die letzte Erfüllung liegt in der Schau des göttlichen Wesens selbst. Darin ruht das Verlangen, ohne zu erlöschen – denn es gibt nichts Größeres, wonach es noch streben könnte, und zugleich kann der endliche Geist das Unendliche nie ganz umfassen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Thomas von Aquin', work: 'Summa theologiae', ref: 'I-II q.2–3, bes. q.3 a.8', status: 'paraphrase', quote: 'Die letzte und vollkommene Glückseligkeit kann nur in der Schau des göttlichen Wesens bestehen.' },
      ],
    },
  ],
  dialog: [
    {
      id: 'makropulos-langeweile',
      objection: `„Denk an Elina Makropulos: Nach über 300 Jahren hat sie alles erlebt, alles gesehen, ist kalt und unendlich gelangweilt. Genau so wäre jedes ewige Leben – nach ein paar Millionen Jahren hättest du jedes Buch gelesen, jedes Gespräch geführt."`,
      objectionBy: 'Bernard Williams (The Makropulos Case, 1973)',
      answer: `Williams beschreibt ein endloses Weiterleben in einer endlichen Welt – mit begrenzten Büchern und Gesprächen. Das wäre tatsächlich irgendwann leer. Die christliche Hoffnung ist etwas anderes: Gemeinschaft mit dem *unendlichen* Gott. Ein unendliches Gegenüber kann man nicht „durchlesen". Gregor von Nyssa sagte im 4. Jahrhundert: Die wahre Schau Gottes heißt, „niemals satt zu werden in der Sehnsucht, ihn zu sehen".`,
      followUps: [
        {
          id: 'wachstum-zerstoert-identitaet',
          objection: `„Dann trifft dich das andere Horn: Wenn du unendlich wächst und dich veränderst, bist du nach Milliarden Jahren ein völlig anderes Wesen – nicht mehr du. Dann ist es nicht dein Weiterleben."`,
          objectionBy: 'Bernard Williams',
          answer: `Wachstum ist nicht Ersetzung. Du bist heute tiefgreifend anders als mit fünf Jahren – andere Interessen, anderes Wissen, anderer Charakter – und doch derselbe Mensch. Was dich verbindet, ist nicht ein eingefrorener Wunschzettel, sondern deine Person, die reift. Paulus beschreibt das ewige Leben als Verwandlung „von einer Klarheit zu der andern" (2 Kor 3,18) – du wirst nicht ausgetauscht, sondern immer mehr du selbst, so wie Gott dich gemeint hat.`,
          followUps: [
            {
              id: 'kategorische-wuensche-erschoepft',
              objection: `„Aber auch die Liebe zu Gott ist ein Wunsch, der irgendwann befriedigt ist. Wenn du ihn gesehen hast, hast du ihn gesehen. Was dann?"`,
              objectionBy: 'Bernard Williams / Shelly Kagan (sinngemäß)',
              answer: `Einen endlichen Gegenstand kann man „gesehen haben" – einen unendlichen nie ganz. Ein endlicher Geist wird den unendlichen Gott niemals ausschöpfen; darum gibt es immer mehr zu erkennen, zu lieben, zu bestaunen. Augustinus beschreibt den Himmel so: „Wir werden ruhen und schauen, schauen und lieben, lieben und loben – am Ende ohne Ende." Selbst unter Menschen erleben wir das im Kleinen: Wer einen Menschen tief liebt, ist nach fünfzig Jahren nicht „fertig" mit ihm.`,
              followUps: [
                {
                  id: 'unersaettlich-wie-tantalus',
                  objection: `„Eine Sehnsucht, die nie gestillt wird, klingt nicht nach Himmel, sondern nach Tantalus-Qual."`,
                  objectionBy: 'Shelly Kagan (sinngemäß)',
                  answer: `Gregor meint keinen frustrierten Hunger, sondern eine Fülle, die jeden Augenblick erfüllt und zugleich weiter macht – wie ein Gespräch mit einem geliebten Menschen, das gerade *weil* es so reich ist, nie zu Ende sein soll. Tantalus wird das Ersehnte vorenthalten; im ewigen Leben wird es geschenkt, und zwar immer mehr. C. S. Lewis' Bild dafür ist der Ruf „Weiter hinauf und weiter hinein!" – Freude, die wächst, nicht Mangel, der quält.`,
                  questionsBack: [`Ist ein Gespräch mit einem geliebten Menschen eine Qual, weil man nie „fertig" ist?`],
                },
              ],
            },
          ],
        },
        {
          id: 'endloser-lobgesang',
          objection: `„Und der christliche Himmel: endlos Harfe spielen und Hymnen singen? Ein ewiger Gottesdienst wäre für mich die Hölle."`,
          objectionBy: 'Mark Twain (Letters from the Earth, sinngemäß) / Christopher Hitchens',
          answer: `Das ist eine Karikatur, keine christliche Lehre. Die Bibel spricht von einem neuen Himmel und einer neuen Erde, in die die Völker „ihre Herrlichkeit" bringen (Offb 21,24–26) – Schöpfung, Kultur, Gemeinschaft, verklärt. Lob ist dort nicht eine Pflichtveranstaltung, sondern das, was spontan aus Freude entsteht – so wie man ein großartiges Konzert nicht aus Pflicht bejubelt.`,
          followUps: [
            {
              id: 'gottesdienst-schon-jetzt-langweilig',
              objection: `„Ehrlich gesagt langweilt mich schon die Kirche jetzt. Eine Ewigkeit davon wäre für mich unerträglich."`,
              objectionBy: 'persönlicher Einwand',
              answer: `Danke für die Ehrlichkeit – das empfinden auch viele Christen manchmal. Aber der Himmel ist nicht „mehr Kirche", sondern die Begegnung mit der Quelle von allem, was du je geliebt hast: jeder Musik, die dich berührt hat, jeder Landschaft, jedem Menschen. Und niemand wird dorthin gezwungen. C. S. Lewis schrieb, die Türen der Hölle seien „von innen verschlossen". Gott respektiert, wenn jemand ihn nicht will.`,
              sources: [
                { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Problem of Pain (Über den Schmerz)', year: '1940', ref: 'Kap. 8 „Hell"', quote: `… dass die Türen der Hölle von innen verschlossen sind.`, original: 'the doors of hell are locked on the inside', translation: 'eigene Übersetzung', status: 'verbatim' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'knappheit-schafft-wert',
      objection: `„Der Wert unseres Lebens hängt an seiner Begrenztheit. Weil die Zeit knapp ist, zählen unsere Entscheidungen. In einem endlosen Leben wäre nichts dringlich, alles beliebig aufschiebbar."`,
      objectionBy: 'Samuel Scheffler (Death and the Afterlife, 2013) / Martha Nussbaum',
      answer: `Dringlichkeit ist nicht dasselbe wie Wert. Wir lieben unsere Kinder nicht, *weil* sie sterben werden; eine Freundschaft wird nicht wertvoller, wenn der Freund todkrank ist – nur schmerzlicher. Der Wert der Liebe liegt in dem Geliebten selbst. Übrigens bleibt für Christen die Zeit dieses Lebens sehr wohl entscheidend: Hier wird die Richtung unseres Herzens geformt. Und das ewige Leben ist nicht leere Zeit, sondern „Freude die Fülle" (Ps 16,11).`,
      sources: [
        { kind: 'gegner', author: 'Samuel Scheffler', work: 'Death and the Afterlife', year: '2013', status: 'paraphrase', quote: 'Viele unserer Werte hängen von der zeitlichen Begrenztheit des Lebens ab.' },
      ],
      followUps: [
        {
          id: 'tugenden-brauchen-sterblichkeit',
          objection: `„Mut, Opferbereitschaft, Großzügigkeit setzen Verletzlichkeit und Sterblichkeit voraus. Unsterbliche Wesen könnten diese Tugenden nicht haben – sie wären keine Menschen mehr, sondern Götter ohne Charakter."`,
          objectionBy: 'Martha Nussbaum (The Therapy of Desire, 1994)',
          answer: `Die Tugenden, die in diesem Leben gewachsen sind, gehen nicht verloren – sie sind die Frucht, die bleibt. Mut wird nicht mehr gebraucht, wo keine Gefahr ist, aber der Mensch, der mutig geworden ist, bleibt dieser Mensch. Und das Größte bleibt: „Nun aber bleiben Glaube, Hoffnung, Liebe … die Liebe ist die größte unter ihnen" (1 Kor 13,13). Bezeichnend ist: Der auferstandene Christus trägt seine Wundmale – das Zeichen seiner Hingabe wird nicht ausgelöscht, sondern verklärt.`,
          sources: [
            { kind: 'gegner', author: 'Martha C. Nussbaum', work: 'The Therapy of Desire: Theory and Practice in Hellenistic Ethics', year: '1994', ref: 'Kap. „Mortal Immortals"', status: 'paraphrase', quote: 'Menschliche Tugenden und Werte sind an Endlichkeit und Verletzlichkeit gebunden; ein unsterbliches Leben wäre kein menschliches mehr.' },
          ],
          followUps: [
            {
              id: 'dann-keine-menschen-mehr',
              objection: `„Also gibst du zu: Die Auferstandenen sind keine Menschen mehr, sondern ‚vergöttlichte' Wesen. Das Christentum verachtet die menschliche Natur."`,
              objectionBy: 'Martha Nussbaum (sinngemäß)',
              answer: `Im Gegenteil: Der Auferstandene ist der Mensch Jesus mit Leib, Wunden und Freundschaften – er isst mit seinen Jüngern am See (Joh 21). Die Vergöttlichung (*Theosis*), von der Athanasius spricht („Er wurde Mensch, damit wir vergöttlicht würden"), hebt die menschliche Natur nicht auf, sondern vollendet sie, so wie Feuer das Eisen durchglüht, ohne dass es aufhört, Eisen zu sein. Das Christentum ist die einzige Religion, die sagt, dass Gott selbst für immer Mensch geblieben ist.`,
              sources: [
                { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '54,3', quote: `Er wurde Mensch, damit wir vergöttlicht würden.`, original: 'αὐτὸς γὰρ ἐνηνθρώπησεν, ἵνα ἡμεῖς θεοποιηθῶμεν', translation: 'eigene Übersetzung', status: 'verbatim' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'achtzig-jahre-genug',
      objection: `„Ich will kein ewiges Leben. Achtzig gute Jahre sind genug. Ein erfülltes, endliches Leben ist schöner als eine endlose Existenz."`,
      objectionBy: 'Shelly Kagan (Death, 2012) / Epikureer',
      answer: `Ich respektiere das. Aber stell dir die Frage für die Menschen, die du liebst: Wenn sie in Freude weiterleben könnten – würdest du ihnen den Tod wünschen? Die meisten Menschen wünschen sich am Grab eines geliebten Menschen nicht, dass es „genug" war, sondern mehr Zeit. Und das christliche ewige Leben ist nicht die Verlängerung von Alter und Erschöpfung, sondern Erneuerung.`,
      detail: `Siehe „Der Tod ist das Ende – und das ist in Ordnung".`,
      followUps: [
        {
          id: 'muede-vom-leben',
          objection: `„Meine Großmutter ist 95. Sie sagt, sie ist lebenssatt und will, dass es endlich vorbei ist. Das ist doch ehrlicher als eure Ewigkeitsversprechen."`,
          objectionBy: 'persönlicher Einwand',
          answer: `Das ist sehr ehrlich, und die Bibel kennt es: Abraham starb „alt und lebenssatt" (Gen 25,8). Aber die Müdigkeit eines erschöpften Leibes ist etwas anderes als die Müdigkeit der Freude. Was deine Großmutter satt hat, sind Schmerzen, Gebrechen, Abschiede – nicht die Liebe. Die christliche Hoffnung ist genau das Gegenteil von „mehr davon": „Die auf den HERRN harren, kriegen neue Kraft, dass sie auffahren mit Flügeln wie Adler" (Jes 40,31).`,
          sources: [
            { kind: 'bibel', work: 'Jesaja', ref: '40,31', quote: `… aber die auf den HERRN harren, kriegen neue Kraft, daß sie auffahren mit Flügeln wie Adler, daß sie laufen und nicht matt werden, daß sie wandeln und nicht müde werden.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
          detail: `**Pastoral:** Alte und kranke Menschen, die sich den Tod wünschen, brauchen zuerst Nähe, Schmerzlinderung und Würde – nicht eine Debatte über Ewigkeit. Die Hoffnung auf Ruhe (Hebr 4,9) und Erneuerung darf ihnen behutsam zugesprochen werden.`,
        },
      ],
    },
    {
      id: 'unendlichkeit-wiederholt-sich',
      objection: `„Unendlichkeit ist unvorstellbar lang. Nach 10^100 Jahren fängt alles von vorne an, unendlich oft. Jedes endliche Repertoire muss sich wiederholen – und Wiederholung ohne Ende ist die Hölle."`,
      objectionBy: 'Shelly Kagan / Jorge Luis Borges („Der Unsterbliche", 1947, literarisch)',
      answer: `Ein endliches Repertoire würde sich wiederholen – aber Gott ist unendlich, und die Gemeinschaft mit ihm ist unerschöpflich. Außerdem werden viele Güter durch Wiederholung nicht schal, sondern tiefer: Der Philosoph John Martin Fischer unterscheidet „sich erschöpfende" Freuden (einen Berg zum ersten Mal besteigen) von „wiederholbaren" (Musik, Freundschaft, ein gutes Essen, Gebet). Niemand ist es leid, geliebt zu werden.`,
      sources: [
        { kind: 'fachliteratur', author: 'John Martin Fischer', work: '„Why Immortality Is Not So Bad", International Journal of Philosophical Studies 2', year: '1994', status: 'paraphrase', quote: 'Wiederholbare Freuden können ein unsterbliches Leben lebenswert machen; Williams\' Argument überzeugt nicht.', note: 'Fischer argumentiert philosophisch, nicht theologisch.' },
      ],
      followUps: [
        {
          id: 'wiederholung-wird-schal',
          objection: `„Fischer überzeugt mich nicht. Auch die schönste Symphonie wird beim billionsten Mal schal. Wir sind einfach nicht gemacht für die Ewigkeit."`,
          objectionBy: 'Bernard Williams (sinngemäß)',
          answer: `Dass Wiederholung uns ermüdet, liegt vielleicht nicht am Guten, sondern an uns. Kinder rufen „Noch einmal!", wenn etwas schön ist. G. K. Chesterton meinte: Gott sagt vielleicht jeden Morgen zur Sonne „Noch einmal!" – er hat „den ewigen Appetit der Kindheit; denn wir haben gesündigt und sind alt geworden, und unser Vater ist jünger als wir". Die Wüstenväter kannten die Langeweile als *Akedia*, eine Krankheit der Seele – nicht als Gesetz des Seins. Im ewigen Leben wird die Seele geheilt.`,
          followUps: [
            {
              id: 'nietzsche-ewige-wiederkunft',
              objection: `„Nietzsche hat den Gedanken umgekehrt: Der höchste Test, ob du das Leben liebst, ist, ob du seine ewige Wiederkehr wollen kannst – genau dieses Leben, unendlich oft. Das ist die einzige Ewigkeit, die es gibt."`,
              objectionBy: 'Friedrich Nietzsche (Die fröhliche Wissenschaft, 1882, § 341)',
              answer: `Nietzsches ewige Wiederkunft ist das Gegenteil der christlichen Ewigkeit: ein Kreis, in dem dasselbe Leid unendlich oft wiederkehrt. Die christliche Hoffnung ist nicht Kreis, sondern Vollendung: „Siehe, ich mache alles neu" (Offb 21,5), und Gott „wird abwischen alle Tränen" (Offb 21,4). Die Frage ist also nicht, ob du dein Leben mit allem Leid unendlich wiederholen willst, sondern ob du willst, dass es geheilt und vollendet wird.`,
              questionsBack: [`Würdest du das schlimmste Leid deines Lebens unendlich oft wiederholen wollen – oder lieber, dass es einmal geheilt wird?`],
            },
          ],
        },
      ],
    },
    {
      id: 'himmel-starr-zeitlos',
      objection: `„Ihr sagt doch, Gott sei zeitlos. Wenn der Himmel Teilhabe an Gottes Ewigkeit ist, dann ist er ein eingefrorener Augenblick – keine Bewegung, kein Wachstum, kein Leben."`,
      objectionBy: 'Charles Hartshorne / philosophischer Einwand',
      answer: `Man muss unterscheiden: Gottes Ewigkeit ist der „ganze, zugleich und vollkommene Besitz" des Lebens (Boethius) – das gehört nur Gott. Geschöpfe werden nie zu Gott; sie bleiben endlich und empfangen sein Leben in einem unendlichen Fortschreiten. Darum spricht Gregor von Nyssa vom ewigen *Wachstum* der Seele. Der Himmel ist nicht Erstarrung, sondern Leben, das nicht mehr vom Tod bedroht ist.`,
      followUps: [
        {
          id: 'hoelle-ewig-schlimmer',
          objection: `„Und die Hölle? Wenn schon der Himmel langweilig wäre, dann ist eine ewige Hölle die grausamste Vorstellung, die sich Menschen je ausgedacht haben."`,
          objectionBy: 'Bertrand Russell (Why I Am Not a Christian, 1927, sinngemäß)',
          answer: `Das ist eine ernste, eigene Frage, die eine sorgfältige Antwort verdient. Kurz: Nach christlicher Lehre ist die Hölle nicht Gottes Folterkammer, sondern die endgültige Gottesferne derer, die Gott nicht wollen – Gott zwingt niemanden in seine Gemeinschaft. Ausführlich wird das im Themenblock „Hölle und Gericht" behandelt.`,
          detail: `Siehe „Ewige Strafe für endliche Sünden ist ungerecht" und „Ein liebender Gott würde niemanden in die Hölle schicken".`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Hast du dich je gelangweilt, weil du zu lange mit jemandem zusammen warst, den du von Herzen liebst?`,
    `Wenn das Gegenüber unendlich ist – kann man es dann „ausgeschöpft" haben?`,
    `Bist du noch derselbe Mensch wie mit fünf Jahren, obwohl du dich enorm verändert hast?`,
    `Lieben wir unsere Kinder, *weil* sie sterben werden?`,
  ],
  avoid: [
    `Den Himmel als endlosen Gottesdienst oder als Wolkenidylle mit Harfen beschreiben – das bestätigt die Karikatur.`,
    `Williams' Argument als dumm abtun. Es ist eines der klügsten Argumente der Gegenwartsphilosophie und trifft viele säkulare Unsterblichkeitsträume (z. B. Transhumanismus).`,
    `Behaupten, wir wüssten genau, wie der Himmel aussieht. „Es ist noch nicht erschienen, was wir sein werden" (1 Joh 3,2).`,
  ],
  concessions: [
    `Williams' Argument trifft ein endloses Weiterleben in dieser Welt durchaus – etwa transhumanistische Träume einer technischen Lebensverlängerung.`,
    `Wir können uns das ewige Leben nur in Bildern vorstellen; viele populäre Himmelsvorstellungen sind tatsächlich eintönig.`,
  ],
  furtherReading: [
    { kind: 'gegner', author: 'Bernard Williams', work: '„The Makropulos Case", in: Problems of the Self', year: '1973', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Das Leben des Mose', ref: 'Buch II', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'John Martin Fischer', work: '„Why Immortality Is Not So Bad"', year: '1994', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Die große Scheidung (The Great Divorce)', year: '1945', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'N. T. Wright', work: 'Surprised by Hope', year: '2008', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Ewiges Leben', 'Langeweile', 'Bernard Williams', 'Epektasis', 'Gregor von Nyssa', 'Himmel'],
  related: [
    'sinn-existenz/tod-ist-das-ende',
    'tod-seele-auferstehung/nach-dem-tod-nichts',
    'informatik-ki/transhumanismus',
    'hoelle/ewige-strafe-ungerecht',
    'sehnsucht-schoenheit-wette/sehnsucht-beweist-nichts',
  ],
};

export default claim;
