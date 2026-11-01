import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'wunder-verletzen-naturgesetze',
  title: `„Wunder verletzen die Naturgesetze (Energieerhaltung)."`,
  proponents: [
    { name: 'David Hume (†1776)', role: 'Philosoph', work: 'An Enquiry concerning Human Understanding (1748), Abschnitt 10 „Of Miracles"' },
    { name: 'Sean Carroll', role: 'Theoretischer Physiker', work: 'The Big Picture (2016)' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe', work: 'The God Delusion (2006)' },
    { name: 'Rudolf Bultmann (†1976)', role: 'Evangelischer Neutestamentler, Marburg', work: 'Neues Testament und Mythologie (1941)' },
  ],
  steelman: `Ein Wunder ist, mit Hume gesagt, eine Verletzung der Naturgesetze. Die Naturgesetze gehören zum am besten bestätigten Wissen, das wir haben; der Energieerhaltungssatz ist in unzähligen Experimenten ohne Ausnahme bestätigt. Wenn Jesus Wasser in Wein verwandelt oder Brote vermehrt, muss Masse und Energie aus dem Nichts entstehen; wenn ein Toter aufersteht, müssen Milliarden von Zellen gegen den zweiten Hauptsatz der Thermodynamik geordnet werden. Gleichförmige Erfahrung steht gegen jedes Wunder; darum ist es immer wahrscheinlicher, dass sich Zeugen irren oder lügen, als dass ein Naturgesetz durchbrochen wurde. Bultmann zog daraus den Schluss, man könne nicht elektrisches Licht benutzen und zugleich an die Wunderwelt des Neuen Testaments glauben.`,
  biblical: {
    summary: `Die Bibel nennt Wunder „Zeichen" (*sēmeia*), „Machttaten" (*dynameis*) und „Wunder" (*terata*). Sie sind keine willkürlichen Durchbrechungen einer Ordnung, sondern zielgerichtete Handlungen des Schöpfers, die auf ihn und sein Reich hinweisen (Joh 2,11; 20,30–31). Dieselbe Bibel betont die Regelmäßigkeit der Natur als Gottes treue Ordnung (Gen 8,22; Jer 33,25). Wunder sind gerade deshalb erkennbar, weil die Natur normalerweise regelmäßig ist: Wer nicht wüsste, dass Jungfrauen nicht empfangen, könnte die Jungfrauengeburt nicht als Zeichen verstehen – Josef wusste es sehr wohl (Mt 1,19).`,
    detail: `- **Joh 2,11:** Das Weinwunder in Kana als „erstes Zeichen", das seine Herrlichkeit offenbart.
- **Joh 20,30–31:** Die Zeichen sind aufgeschrieben, „damit ihr glaubt".
- **Mk 4,39–41:** Die Jünger erschrecken, weil sie wissen, dass Wind und Wellen normalerweise nicht gehorchen.
- **Apg 2,22:** Jesus wurde durch Machttaten, Wunder und Zeichen von Gott ausgewiesen.
- **1 Kor 15,14:** Die Auferstehung ist das zentrale Wunder; ohne sie ist der Glaube vergeblich.`,
    sources: [
      { kind: 'bibel', work: 'Johannes', ref: '2,11', quote: `Das ist das erste Zeichen, das Jesus tat, geschehen zu Kana in Galiläa, und offenbarte seine Herrlichkeit. Und seine Jünger glaubten an ihn.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '20,30–31', quote: `Auch viele andere Zeichen tat Jesus vor seinen Jüngern, die nicht geschrieben sind in diesem Buch. Diese aber sind geschrieben, daß ihr glaubet, Jesus sei der Christus, der Sohn Gottes …`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '15,14', quote: `Ist aber Christus nicht auferstanden, so ist unsere Predigt vergeblich, so ist auch euer Glaube vergeblich.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Augustinus formulierte die klassische Unterscheidung: Ein Wunder geschieht nicht gegen die Natur, sondern gegen das, was uns von der Natur bekannt ist. Der hl. Athanasius sieht in den Wundern Christi Zeichen dafür, dass der im Leib Erschienene der Logos und Herr der Schöpfung ist (*De Incarnatione* 18). Die koptische Kirche lebt seit ihren Anfängen mit einer reichen Wunderüberlieferung – etwa der Tradition von der Versetzung des Mokattam-Berges unter Papst Abraham (Abraam ibn Zur'a) und Simon dem Gerber im 10. Jahrhundert, an die bis heute drei zusätzliche Fasttage vor Weihnachten erinnern. Solche Überlieferungen sind als **Tradition** zu kennzeichnen und mit historischer Sorgfalt zu behandeln; der Glaube gründet nicht auf ihnen, sondern auf der Auferstehung Christi.`,
    detail: `- **Augustinus, De civitate Dei XXI,8:** „Portentum ergo fit non contra naturam, sed contra quam est nota natura."
- **Athanasius, De Incarnatione 18:** Durch seine Werke im Leib – Heilungen, Brotvermehrung, Gehen auf dem Wasser – gab sich der Logos als Herr der Schöpfung zu erkennen.
- **Mokattam-Überlieferung:** Nach koptischer Tradition (u. a. in späteren Fassungen der *Geschichte der Patriarchen*) forderte der fatimidische Kalif al-Mu'izz den Patriarchen auf, Mt 17,20 zu beweisen; nach drei Tagen Fasten und Gebet habe sich der Berg bewegt. Die historische Quellenlage wird in der Forschung diskutiert.
- Zu den Erscheinungen von **Zeitoun** (1968) siehe den eigenen Claim im Themenblock „Medizin und Wunder".`,
    sources: [
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De civitate Dei', ref: 'XXI,8', year: 'ca. 426', quote: `Ein Wunderzeichen geschieht also nicht gegen die Natur, sondern gegen das, was uns von der Natur bekannt ist.`, original: `Portentum ergo fit non contra naturam, sed contra quam est nota natura.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '18', year: 'ca. 318', quote: `Durch die Werke, die er im Leib tat, gab der Logos sich als Herr der Schöpfung zu erkennen.`, status: 'paraphrase' },
      { kind: 'koptisch', work: 'Koptische Überlieferung zur Versetzung des Mokattam-Berges (u. a. spätere Fassungen der „Geschichte der Patriarchen von Alexandrien")', year: '10. Jh. (Ereignis nach Tradition um 979)', quote: `Unter Papst Abraham und durch das Gebet Simons des Gerbers habe sich der Mokattam-Berg nach drei Tagen Fasten bewegt; daran erinnern drei Fasttage vor dem Weihnachtsfasten.`, status: 'paraphrase', note: 'Kirchliche Überlieferung; Datierung und Quellenlage sind in der Forschung umstritten. Als Tradition kennzeichnen, nicht als historisch gesichertes Faktum präsentieren.' },
      { kind: 'bibel', work: 'Matthäus', ref: '17,20', quote: `… so ihr Glauben habt wie ein Senfkorn, so möget ihr sagen zu diesem Berge: Hebe dich von hinnen dorthin! so wird er sich heben; und euch wird nichts unmöglich sein.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  opposingView: {
    summary: `Physikalisch: Der Energieerhaltungssatz folgt nach dem Noether-Theorem (1918) aus der Zeitsymmetrie der Gesetze und gilt für **abgeschlossene Systeme**. In der Allgemeinen Relativitätstheorie ist eine globale Energieerhaltung für das expandierende Universum nicht allgemein definiert – das betont Sean Carroll selbst. Naturgesetze haben die Form „Wenn nichts von außen einwirkt, dann …". Philosophisch: Humes Argument gilt vielen als zirkulär; der säkulare Wissenschaftsphilosoph John Earman nannte es ein „klägliches Scheitern" (*Hume's Abject Failure*, 2000). Ob konkrete Wunder stattgefunden haben, ist eine historische, keine physikalische Frage.`,
    detail: `- **Abgeschlossene Systeme:** In jedem Labor wird Energie zugeführt oder entzogen, ohne dass der Erhaltungssatz „verletzt" wird – das System ist eben offen. Ein Wunder bedeutet: Das physikalische System ist für Gottes Wirken offen.
- **Alvin Plantinga** (*Where the Conflict Really Lies*, 2011, Kap. 3–4): Die klassischen Gesetze der Physik beschreiben, wie sich die Welt verhält, wenn sie kausal abgeschlossen ist; sie sagen nicht, dass sie es ist.
- **Methodischer Naturalismus:** Die Naturwissenschaft untersucht regelmäßige, wiederholbare Vorgänge; dass es nichts anderes gibt, folgt daraus nicht.
- **Historische Frage:** Ob z. B. die Auferstehung geschah, beurteilt man mit historischer Methode (siehe Themenblock „Die Auferstehung Jesu").`,
    sources: [
      { kind: 'gegner', author: 'David Hume', work: 'An Enquiry concerning Human Understanding', ref: 'Abschnitt 10, Teil 1', year: '1748', quote: `Ein Wunder ist eine Verletzung der Naturgesetze; und da eine feste und unveränderliche Erfahrung diese Gesetze begründet hat, ist der Beweis gegen ein Wunder … so vollständig, wie man sich ein Argument aus Erfahrung nur vorstellen kann.`, original: `A miracle is a violation of the laws of nature; and as a firm and unalterable experience has established these laws, the proof against a miracle, from the very nature of the fact, is as entire as any argument from experience can possibly be imagined.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'fachliteratur', author: 'John Earman', work: 'Hume’s Abject Failure: The Argument Against Miracles', year: '2000', quote: `Humes Argument gegen Wunder ist bei genauer probabilistischer Analyse weitgehend unoriginell und im Kern verfehlt.`, status: 'paraphrase', note: 'Earman ist säkularer Wissenschaftsphilosoph (Pittsburgh), kein christlicher Apologet.' },
      { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'Where the Conflict Really Lies: Science, Religion, and Naturalism', ref: 'Kap. 3–4', year: '2011', quote: `Die Gesetze der klassischen Physik beschreiben, wie sich abgeschlossene Systeme verhalten; dass das Universum kausal abgeschlossen ist, sagen sie nicht.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Sean Carroll', work: '„Energy Is Not Conserved"', year: '2010', quote: `Energieerhaltung folgt aus Zeittranslationssymmetrie; im expandierenden Universum ist Energie global nicht erhalten.`, status: 'paraphrase', url: 'https://preposterousuniverse.com/blog/2010/02/22/energy-is-not-conserved/' },
    ],
  },
  quickAnswer: `Naturgesetze beschreiben, was geschieht, wenn nichts von außen einwirkt. Der Energieerhaltungssatz gilt für abgeschlossene Systeme – ein Wunder heißt gerade, dass das System nicht abgeschlossen ist: Gott wirkt von außen. Wenn ich eine Billardkugel auf den Tisch lege, „verletze" ich Newtons Gesetze nicht; danach gehorcht sie ihnen sofort (C. S. Lewis). Die eigentliche Frage lautet also nicht „Können Gesetze gebrochen werden?", sondern „Gibt es einen Gott, der handeln kann?" – und das ist keine Frage der Physik.`,
  keyPoints: [
    `**Gesetze sind Wenn-dann-Sätze:** „Wenn nichts von außen eingreift, dann …" – ein Wunder erfüllt die Wenn-Bedingung nicht.`,
    `**Energieerhaltung gilt für abgeschlossene Systeme:** Jedes Labor ist ein offenes System, ohne dass die Physik zusammenbricht.`,
    `**Lewis' Formel:** Gott setzt die Muster der Natur nicht außer Kraft, sondern speist neue Ereignisse in sie ein.`,
    `**Augustinus:** Wunder geschehen nicht gegen die Natur, sondern gegen unsere Kenntnis der Natur.`,
    `**Hume ist zirkulär:** Er setzt voraus, dass alle Wunderberichte falsch sind – das ist zu beweisen. Selbst der säkulare Philosoph Earman nennt das Argument gescheitert.`,
    `**Die Frage ist historisch:** Ob ein Wunder geschah, entscheidet die Prüfung der Belege – vor allem bei der Auferstehung.`,
  ],
  voices: [
    {
      person: 'cs-lewis',
      role: 'als Philosoph des Wunders',
      text: `Lewis widmet in *Miracles* (1947) ein ganzes Kapitel dem Verhältnis von Wunder und Naturgesetz. Sein Beispiel: Wenn ich in eine Schublade mit Geld noch etwas hineinlege, verletze ich nicht die Gesetze der Arithmetik – ich füge nur ein neues Ereignis hinzu, und die Arithmetik gilt sofort wieder. Ebenso „bricht" Gott im Wunder nicht die Naturgesetze: Er schafft ein neues Ereignis, und von diesem Augenblick an gehorcht es den Gesetzen. Wird ein Kind wunderbar empfangen, folgen neun Monate gewöhnlicher Schwangerschaft. Die Naturgesetze sagen, was geschieht, wenn nichts von außen hinzukommt – sie können nicht sagen, ob etwas hinzukommt.`,
      sources: [{ kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Miracles', ref: 'Kap. 8 „Miracle and the Laws of Nature"', year: '1947', quote: `Die göttliche Kunst des Wunders ist nicht eine Kunst, das Muster aufzuheben, dem die Ereignisse folgen, sondern neue Ereignisse in dieses Muster einzuspeisen.`, original: `The divine art of miracle is not an art of suspending the pattern to which events conform but of feeding new events into that pattern.`, translation: 'eigene Übersetzung', status: 'verbatim' }],
    },
    {
      person: 'plantinga',
      role: 'als Erkenntnistheoretiker und Philosoph der Naturwissenschaft',
      text: `Plantinga analysiert in *Where the Conflict Really Lies* (2011), ob die Physik göttliches Handeln ausschließt. Sein Befund: Weder die klassische Physik noch die Quantenmechanik tun das. Die Newtonschen Gesetze beschreiben, wie sich ein abgeschlossenes System verhält; Energie- und Impulserhaltung gelten für abgeschlossene Systeme. Die Behauptung, das Universum sei kausal abgeschlossen, ist keine Aussage der Physik, sondern eine metaphysische Zusatzannahme. Wer sie macht, kann Wunder ausschließen – aber er hat sie nicht aus der Physik gelernt.`,
      sources: [{ kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'Where the Conflict Really Lies', ref: 'Kap. 3–4', year: '2011', quote: `Göttliches Handeln in der Welt widerspricht weder der klassischen noch der Quantenphysik; nur der Zusatz, die Welt sei kausal abgeschlossen, schließt es aus.`, status: 'paraphrase' }],
    },
    {
      person: 'hutchinson',
      role: 'als Kern- und Plasmaphysiker am MIT',
      text: `Hutchinson, Professor für Kernphysik am MIT, beantwortet in *Can a Scientist Believe in Miracles?* (2018) Hunderte Fragen von Studierenden. Seine Position als aktiver Physiker: Naturgesetze beschreiben das normale, gesetzmäßige Verhalten der Natur, das Gott in seiner Treue erhält. Ein Wunder ist eine ungewöhnliche Handlung Gottes, die von diesem Normalverhalten abweicht. Die Naturwissenschaft ist auf das Wiederholbare und Normale spezialisiert – sie kann nicht feststellen, dass es nichts anderes gibt. Wer behauptet, Wissenschaft habe Wunder widerlegt, verwechselt eine Methode mit einer Weltanschauung.`,
      sources: [{ kind: 'fachliteratur', author: 'Ian H. Hutchinson', work: 'Can a Scientist Believe in Miracles? An MIT Professor Answers Questions on God and Science', year: '2018', quote: `Naturgesetze beschreiben, wie Gott die Welt normalerweise erhält; Wunder sind ungewöhnliche Handlungen desselben Gottes, keine Widersprüche zur Wissenschaft.`, status: 'paraphrase' }],
    },
    {
      person: 'augustinus',
      role: 'als Kirchenvater',
      text: `Augustinus hat die Formel geprägt, die bis heute trägt: Ein Wunder geschieht nicht gegen die Natur, sondern gegen das, was uns von der Natur bekannt ist. Die Natur ist für ihn der Wille Gottes in seiner gewöhnlichen Gestalt; im Wunder zeigt sich derselbe Wille in ungewohnter Weise. Darum gibt es keinen Kampf zwischen Gott und den Gesetzen: Wer die Ordnung geschaffen hat, kann in ihr auch Neues wirken, ohne sich selbst zu widersprechen.`,
      sources: [{ kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De civitate Dei', ref: 'XXI,8', year: 'ca. 426', quote: `Portentum ergo fit non contra naturam, sed contra quam est nota natura.`, status: 'verbatim' }],
    },
    {
      person: 'polkinghorne',
      role: 'als Physiker und Priester',
      text: `Polkinghorne verglich Wunder mit dem Übergang in ein neues physikalisches Regime: Bei sehr tiefen Temperaturen verhalten sich manche Metalle plötzlich völlig anders – sie werden supraleitend –, ohne dass die Grundgesetze aufgehoben würden; es gilt eine neue Situation. Ebenso kann Gott in einer neuen, einmaligen Situation – etwa der Auferstehung als Beginn der neuen Schöpfung – auf neue Weise handeln, ohne launisch zu sein. Wunder sind für Polkinghorne nur dann glaubwürdig, wenn sie zum Charakter Gottes passen und einen tiefen Sinn haben – das unterscheidet sie von Zauberei.`,
      sources: [{ kind: 'fachliteratur', author: 'John Polkinghorne', work: 'Science and Providence', year: '1989', quote: `Wunder sind keine göttlichen Launen, sondern Ausdruck der Treue Gottes in einem neuen Regime, vergleichbar dem neuen Verhalten der Materie bei tiefen Temperaturen.`, status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'energieerhaltung-verletzt',
      objection: `Wunder würden den Energieerhaltungssatz verletzen – das am besten getestete Gesetz der Physik. Brotvermehrung heißt: Masse aus dem Nichts.`,
      objectionBy: 'Sean Carroll',
      answer: `Der Energieerhaltungssatz gilt für abgeschlossene Systeme. Ein Wunder bedeutet gerade, dass das System nicht abgeschlossen ist: Gott wirkt von außen. Jedes Labor ist ein offenes System – du führst Energie zu, und niemand sagt, du hättest die Physik verletzt. Und du selbst hast geschrieben, dass Energie im expandierenden Universum global nicht erhalten ist; der Satz ist kein metaphysisches Dogma, sondern folgt aus einer Symmetrie unter bestimmten Bedingungen.`,
      sources: [{ kind: 'gegner', author: 'Sean Carroll', work: '„Energy Is Not Conserved"', year: '2010', quote: `Energieerhaltung folgt aus Zeittranslationssymmetrie; wo diese fehlt, gilt sie nicht.`, status: 'paraphrase', url: 'https://preposterousuniverse.com/blog/2010/02/22/energy-is-not-conserved/' }],
      questionsBack: [`Gilt der Energieerhaltungssatz auch für offene Systeme? Woher weißt du, dass das Universum für Gott abgeschlossen ist?`],
      followUps: [
        {
          id: 'offenes-system-ad-hoc',
          objection: `„Offen für Gott" – das ist eine Ad-hoc-Ausrede, um Gott Platz zu machen.`,
          objectionBy: 'Sean Carroll',
          answer: `Nein. Jede Anwendung eines Erhaltungssatzes setzt voraus, dass man festlegt, welches System abgeschlossen ist. Die Frage, ob es außerhalb der physikalischen Welt etwas gibt, das in sie hineinwirken kann, ist genau die Streitfrage. Die Physik kann sie nicht durch den Erhaltungssatz entscheiden, ohne die Antwort vorauszusetzen.`,
          followUps: [
            {
              id: 'nie-beobachtet',
              objection: `Aber wir haben noch nie beobachtet, dass Energie aus dem Nichts in ein System kommt.`,
              objectionBy: 'Victor Stenger',
              answer: `Wunder sind ihrem Wesen nach selten und zielgerichtet; dass man sie im Labor nicht reproduziert, ist genau das, was der Theismus erwartet. Die Belege für Wunder sind historisch und zeugnisbasiert, nicht experimentell. Ob es sie gibt, muss man an den konkreten Berichten prüfen – allen voran an der Auferstehung Christi.`,
              detail: `Siehe die Themenblöcke „Die Auferstehung Jesu" und „Medizin und Wunder".`,
              followUps: [
                {
                  id: 'core-theory-schliesst-aus',
                  objection: `Es geht nicht um Labore. Die „Core Theory" – Quantenfeldtheorie plus Allgemeine Relativität – beschreibt die Physik des Alltags vollständig. Jede neue Kraft, die auf Atome im Alltagsmaßstab wirkt, hätten wir längst in Experimenten gesehen. Ein Gott, der Moleküle bewegt, ist damit ausgeschlossen.`,
                  objectionBy: 'Sean Carroll',
                  answer: `Die Core Theory beschreibt, wie Teilchen sich verhalten, *wenn* nichts außerhalb der Physik auf sie einwirkt – genau das prüfen Experimente. Was sie nicht prüfen und nicht prüfen können, ist, ob ein personaler Schöpfer in seltenen, zielgerichteten Augenblicken handelt. Gott ist kein zusätzliches Feld mit einer Kopplungskonstante, das man in Beschleunigern messen könnte, sondern der Grund aller Felder. Dass er nicht als neue Kraft im Teilchendetektor auftaucht, ist genau das, was der christliche Glaube erwartet.`,
                  detail: `Carroll formuliert in *The Big Picture* (2016) seine These, die Gesetze der Alltagsphysik seien vollständig bekannt; eine Seele oder ein Gott, der Materie bewegt, würde eine neue, messbare Wechselwirkung erfordern. Plantinga weist darauf hin, dass alle Naturgesetze einen stillschweigenden Vorbehalt enthalten: Sie beschreiben, was geschieht, *sofern das System kausal abgeschlossen ist*. Ob es das immer ist, ist keine Aussage der Physik, sondern der Metaphysik. Experimente zeigen die Verlässlichkeit der Natur im Normalfall – und die bestreitet niemand.`,
                  voices: [
                    { person: 'plantinga', role: 'als Wissenschaftsphilosoph', text: `Plantinga argumentiert, dass die klassische wie die Quantenphysik nirgends behaupten, das materielle Universum sei kausal abgeschlossen. Die Gesetze sagen, wie sich Materie verhält, wenn nichts von außen eingreift. Ein göttliches Handeln, das gelegentlich neue Ursachen setzt, verletzt deshalb kein Gesetz; es ändert nur die Ausgangsbedingungen, auf die die Gesetze angewendet werden.` },
                  ],
                  sources: [
                    { kind: 'gegner', author: 'Sean Carroll', work: 'The Big Picture: On the Origins of Life, Meaning, and the Universe Itself', year: '2016', quote: `Die Gesetze, die der Physik des Alltagslebens zugrunde liegen, seien vollständig bekannt; jede zusätzliche Einwirkung auf Materie wäre experimentell aufgefallen.`, status: 'paraphrase' },
                    { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'Where the Conflict Really Lies', ref: 'Kap. 3–4', year: '2011', quote: `Naturgesetze beschreiben, wie sich Systeme verhalten, sofern sie kausal abgeschlossen sind; dass sie es immer sind, ist kein Ergebnis der Physik.`, status: 'paraphrase' },
                  ],
                  questionsBack: [`Welches Experiment könnte zeigen, dass ein personaler Schöpfer niemals in seltenen, zielgerichteten Momenten handelt?`],
                },
              ],
            },
          ],
        },
        {
          id: 'lokal-erhaltung-exakt',
          objection: `Carrolls Blogbeitrag über das expandierende Universum hat nichts mit Wundern zu tun. Lokal gilt Energieerhaltung exakt.`,
          objectionBy: 'Physiker (Fachdiskussion)',
          answer: `Einverstanden – das gebe ich zu. Mein Punkt ist nur: Energieerhaltung ist keine metaphysische Notwendigkeit, sondern folgt aus einer Symmetrie für abgeschlossene Systeme. Lokal und abgeschlossen gilt sie exakt – und genau das bestreite ich nicht. Ein Wunder betrifft ein System, das in diesem Augenblick nicht abgeschlossen ist.`,
          followUps: [
            {
              id: 'gott-bricht-eigene-gesetze',
              objection: `Dann bricht Gott eben seine eigenen Gesetze. Ein Gesetzgeber, der seine Ordnung nach Belieben aussetzt, ist ein Willkürherrscher – und sein Gesetz ist nichts wert.`,
              objectionBy: 'Sean Carroll',
              answer: `Ein Wunder bricht kein Gesetz, es fügt der Natur ein neues Ereignis hinzu. C. S. Lewis' Beispiel: Wenn ich am Montag sechs Münzen in eine Schublade lege und am Dienstag noch sechs, sagen die Gesetze der Arithmetik, dass zwölf darin sind. Hat ein Dieb zwei herausgenommen, sind es zehn – aber die Arithmetik ist nicht gebrochen; es kam nur ein neuer Faktor hinzu. Und sobald das Neue in der Welt ist, folgt es denselben Gesetzen: Das vermehrte Brot wird verdaut wie jedes andere Brot.`,
              detail: `Lewis entwickelt diesen Gedanken in *Wunder* (Miracles, 1947, Kap. 8 „Das Wunder und die Naturgesetze"): Die Gesetze sagen, was geschieht, wenn nichts eingreift; sie sind nicht selbst Ursachen und verbieten nichts. Ein Wunder ist deshalb kein Widerspruch gegen die Ordnung, sondern ein Ereignis, das die Natur sofort „aufnimmt" und gesetzmäßig weiterführt. Für die Väter ist das Wunder zudem kein Fremdkörper: Augustinus nannte die gewöhnliche Ordnung der Natur ein beständiges Wunder, das uns nur durch Gewohnheit nicht mehr staunen lässt.`,
              voices: [
                { person: 'cs-lewis', role: 'als Philosoph der Wunder', text: `Lewis betont, dass Wunder nicht gegen die Naturgesetze, sondern mit ihnen arbeiten: Gott setzt ein neues Ereignis in die Kette, und die Gesetze übernehmen es augenblicklich. Wunder seien daher keine Unterbrechung der Natur aus Laune, sondern bedeutungsvolle Handlungen, die das Wesen des Schöpfers zeigen – oft im Kleinen und Schnellen, was er im Großen und Langsamen ständig tut, etwa Wasser in Wein verwandeln.` },
              ],
              sources: [{ kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Miracles: A Preliminary Study', ref: 'Kap. 8', year: '1947', quote: `Ein Wunder bricht nicht die Gesetze der Natur; es führt ein neues Ereignis ein, das sofort von der Natur aufgenommen und nach ihren Gesetzen weitergeführt wird.`, status: 'paraphrase' }],
              questionsBack: [`Bricht ein Dieb die Gesetze der Arithmetik, wenn er Münzen aus der Schublade nimmt?`],
            },
          ],
        },
      ],
    },
    {
      id: 'hume-gleichfoermige-erfahrung',
      objection: `Hume: Ein Wunder ist eine Verletzung der Naturgesetze. Weil gleichförmige Erfahrung die Gesetze stützt, ist der Beweis gegen ein Wunder immer überwältigend. Es ist immer wahrscheinlicher, dass die Zeugen sich irren.`,
      objectionBy: 'David Hume',
      answer: `Humes Argument ist zirkulär: „Gleichförmige Erfahrung gegen Wunder" setzt voraus, dass alle Wunderberichte falsch sind – genau das soll bewiesen werden. Der säkulare Wissenschaftsphilosoph John Earman hat Humes Argument mit Wahrscheinlichkeitstheorie geprüft und nennt es ein „klägliches Scheitern". Ob ein Wunder geschah, hängt von den Belegen und vom Hintergrundwissen ab – etwa davon, ob es einen Gott gibt.`,
      sources: [{ kind: 'fachliteratur', author: 'John Earman', work: 'Hume’s Abject Failure', year: '2000', quote: `Humes Argument gegen Wunder scheitert.`, status: 'paraphrase' }],
      followUps: [
        {
          id: 'aussergewoehnliche-belege-wunder',
          objection: `Außergewöhnliche Behauptungen erfordern außergewöhnliche Belege.`,
          objectionBy: 'Carl Sagan',
          answer: `Sie erfordern ausreichende Belege – gemessen an der Ausgangswahrscheinlichkeit. Wenn es einen Gott gibt, der sich offenbaren will, ist eine Auferstehung als Handlung Gottes nicht außergewöhnlich unwahrscheinlich. Die Ausgangswahrscheinlichkeit hängt von deiner Weltanschauung ab – und die muss man gesondert prüfen.`,
          detail: `Ausführlich im Claim „Außergewöhnliche Behauptungen erfordern außergewöhnliche Belege".`,
          followUps: [
            {
              id: 'zeugen-unzuverlaessig',
              objection: `Selbst dann: Augenzeugen sind unzuverlässig, religiöse erst recht.`,
              objectionBy: 'Richard Dawkins',
              answer: `Darum prüft man Zeugnisse mit historischer Methode: Mehrfachbezeugung, Nähe zum Ereignis, Zeugnisse von Gegnern, Kriterium der Peinlichkeit. Bei der Auferstehung gehören dazu die frühen Bekenntnisformeln (1 Kor 15,3–8), das leere Grab und die Bekehrung von Skeptikern wie Jakobus und Paulus.`,
              followUps: [
                {
                  id: 'historiker-koennen-nicht',
                  objection: `Historiker können ein Wunder per Definition nie als wahrscheinlichste Erklärung feststellen. Ein Wunder ist das Unwahrscheinlichste, was es gibt – also ist jede natürliche Erklärung, so unwahrscheinlich sie sein mag, immer wahrscheinlicher.`,
                  objectionBy: 'Bart Ehrman',
                  answer: `Das ist Humes Argument im Gewand des Historikers – und es entscheidet die Frage, bevor man die Quellen gelesen hat. Ein Wunder ist nur dann „das Unwahrscheinlichste", wenn man voraussetzt, dass es keinen Gott gibt, der handeln will. Ob es einen solchen Gott gibt, ist aber gerade die offene Frage. Eine Methode, die bestimmte Ergebnisse grundsätzlich ausschließt, ist keine neutrale Methode, sondern eine Weltanschauung.`,
                  detail: `Ehrman vertritt diese Position etwa in seiner Debatte mit William Lane Craig (2006). Michael Licona hat in *The Resurrection of Jesus: A New Historiographical Approach* (2010) argumentiert, dass Historiker den methodischen Naturalismus nicht ungeprüft voraussetzen dürfen. Craig Keener hat in *Miracles* (2011) zudem eine große Zahl moderner, teils medizinisch dokumentierter Augenzeugenberichte gesammelt – nicht um jeden als Wunder zu beweisen, sondern um zu zeigen, dass die Annahme „gleichförmiger Erfahrung gegen Wunder" empirisch nicht stimmt: Hunderte Millionen Menschen berichten von Erfahrungen, die sie als Wunder deuten.`,
                  voices: [
                    { person: 'keener', role: 'als Neutestamentler und Historiker', text: `Keener zeigt in seiner zweibändigen Studie, dass Wunderberichte kein Relikt der Antike sind, sondern weltweit von gebildeten wie einfachen Menschen, oft mit ärztlicher Dokumentation, berichtet werden. Wer behauptet, alle diese Berichte seien von vornherein falsch, urteilt nicht historisch, sondern weltanschaulich. Ob ein bestimmtes Ereignis ein Wunder war, muss man im Einzelfall an den Belegen prüfen.` },
                  ],
                  sources: [{ kind: 'fachliteratur', author: 'Craig S. Keener', work: 'Miracles: The Credibility of the New Testament Accounts', year: '2011', quote: `Zahlreiche zeitgenössische Augenzeugenberichte über außergewöhnliche Heilungen widerlegen die Annahme, die menschliche Erfahrung spreche einheitlich gegen Wunder.`, status: 'paraphrase' }],
                  questionsBack: [`Ist eine Methode neutral, die das Ergebnis „Gott hat gehandelt" schon vor jeder Quellenprüfung ausschließt?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'bultmann-elektrisches-licht',
      objection: `Bultmann hat es auf den Punkt gebracht: Man kann nicht elektrisches Licht und Radio benutzen und gleichzeitig an die Geister- und Wunderwelt des Neuen Testaments glauben.`,
      objectionBy: 'Rudolf Bultmann',
      answer: `Die Benutzung einer Glühbirne entscheidet keine metaphysische Frage. Viele, die die moderne Technik mitentwickelt haben, glauben an Wunder – vom Kernphysiker Ian Hutchinson am MIT über den Teilchenphysiker John Polkinghorne bis zum Genetiker Francis Collins. Und die Menschen der Antike waren nicht naiv: Josef wollte Maria verlassen, weil er sehr genau wusste, wie Kinder entstehen (Mt 1,19).`,
      sources: [{ kind: 'gegner', author: 'Rudolf Bultmann', work: 'Neues Testament und Mythologie', year: '1941', quote: `Man kann nicht elektrisches Licht und Radioapparat benutzen, in Krankheitsfällen moderne medizinische und klinische Mittel in Anspruch nehmen und gleichzeitig an die Geister- und Wunderwelt des Neuen Testaments glauben.`, status: 'verbatim' }],
      followUps: [
        {
          id: 'antike-wunderglaeubig',
          objection: `Die Antike war wundergläubig; Wunderberichte wurden leicht erfunden.`,
          objectionBy: 'Bart Ehrman',
          answer: `Es gab Wundergläubigkeit – und Skepsis. Die Evangelien selbst berichten von Zweiflern unter den Jüngern (Mt 28,17; Joh 20,25). Gerade die Auferstehung war für Juden wie Griechen anstößig (Apg 17,32). Ob ein konkreter Bericht glaubwürdig ist, muss man im Einzelfall prüfen, nicht durch ein Pauschalurteil über eine Epoche.`,
          followUps: [
            {
              id: 'wunder-aller-religionen',
              objection: `Alle Religionen berichten von Wundern – Heilungen bei Hindus, Muslimen, Katholiken, an Gräbern von Heiligen jeder Art. Wenn alle Wunder haben, heben sie sich gegenseitig auf. Keines beweist etwas.`,
              objectionBy: 'Richard Dawkins (nach David Hume)',
              answer: `Daraus, dass es viele Berichte gibt, folgt nicht, dass alle gleich gut belegt sind – man muss jeden einzeln prüfen, wie bei Zeugenaussagen vor Gericht. Und das Christentum behauptet nicht, Gott könne nur unter Christen handeln. Mein Glaube stützt sich nicht auf irgendein Heilungswunder, sondern auf ein bestimmtes, öffentlich behauptetes, früh bezeugtes Ereignis: die Auferstehung Jesu. Ob sie geschehen ist, entscheidet sich an den Belegen für genau dieses Ereignis, nicht an Berichten aus anderen Religionen.`,
              detail: `Humes Argument der „sich widersprechenden Wunder" setzt voraus, dass jedes Wunder eine bestimmte Religion als allein wahr beweisen soll und alle Berichte gleich stark sind. Beides stimmt nicht. Die Auferstehung ist in der Religionsgeschichte einzigartig belegt: durch eine Bekenntnisformel, die wenige Jahre nach dem Ereignis entstand (1 Kor 15,3–8), durch die Bekehrung von Gegnern (Paulus) und Skeptikern (Jakobus) und durch den Umstand, dass die Jünger für ihr Zeugnis Verfolgung auf sich nahmen. Siehe den Themenblock „Die Auferstehung Jesu".`,
              questionsBack: [`Sind alle Wunderberichte gleich gut bezeugt? Welcher andere Bericht hat Belege, die mit denen für die Auferstehung vergleichbar sind?`],
            },
          ],
        },
      ],
    },
    {
      id: 'wunder-machen-wissenschaft-unmoeglich',
      objection: `Wenn Gott jederzeit eingreifen kann, ist Wissenschaft unmöglich – jedes Experiment könnte durch ein Wunder verfälscht sein.`,
      objectionBy: 'Sean Carroll',
      answer: `Biblische Wunder sind selten, zielgerichtet und offenbarend – keine zufälligen Störungen. Gerade der Glaube an einen treuen Schöpfer, der die Welt in verlässlicher Ordnung erhält (Jer 33,25), war für Kepler, Boyle, Newton, Faraday und Maxwell der Grund, nach Gesetzen zu suchen. Sie alle glaubten an Wunder – und betrieben Wissenschaft von höchstem Rang.`,
      followUps: [
        {
          id: 'koptische-wunder-leichtglaeubig',
          objection: `Und die koptische Kirche erzählt bis heute von Wundern – der Mokattam-Berg, Zeitoun. Das ist Leichtgläubigkeit.`,
          objectionBy: 'Skeptiker',
          answer: `Ich unterscheide: Die Mokattam-Geschichte ist eine Überlieferung aus dem 10. Jahrhundert, deren Quellenlage Historiker diskutieren – ich stelle sie als Tradition dar, nicht als gesichertes Faktum. Zeitoun 1968 hatte zahlreiche Zeugen, darunter Muslime, und wurde fotografiert; das kann man prüfen. Mein Glaube hängt aber an keinem späteren Wunder, sondern an der Auferstehung Christi.`,
          detail: `Siehe den Claim „Die Marienerscheinungen von Zeitoun (1968) waren Massenhysterie".`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Gilt der Energieerhaltungssatz für offene Systeme?`,
    `Woher weißt du, dass das Universum für einen Gott abgeschlossen ist – aus der Physik oder aus einer Vorentscheidung?`,
    `Setzt Humes „gleichförmige Erfahrung" nicht voraus, dass alle Wunderberichte falsch sind?`,
    `Verletze ich Newtons Gesetze, wenn ich eine Kugel auf den Billardtisch lege?`,
    `Wenn es einen Gott gibt – warum sollte er nicht handeln können?`,
  ],
  avoid: [
    `Wunder durch „noch unbekannte Naturgesetze" wegerklären. Dann sind es keine Zeichen Gottes mehr.`,
    `Jede außergewöhnliche Geschichte als Wunder ausgeben. Unkritische Wundergläubigkeit schadet der Glaubwürdigkeit.`,
    `Traditionen wie den Mokattam-Berg als historisch gesichertes Faktum darstellen. Als Überlieferung kennzeichnen.`,
    `„Quantenmechanik erklärt Wunder." – Wunder sind Handlungen Gottes, keine Quanteneffekte.`,
  ],
  concessions: [
    `Die Naturwissenschaft arbeitet methodisch mit regelmäßigen, wiederholbaren Vorgängen; Wunder sind mit ihren Mitteln nicht direkt zu untersuchen.`,
    `Es gibt in allen Religionen und Epochen auch erfundene oder übertriebene Wunderberichte; Skepsis im Einzelfall ist berechtigt.`,
    `Lokal und für abgeschlossene Systeme gilt der Energieerhaltungssatz ausnahmslos.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Miracles', year: '1947', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'Where the Conflict Really Lies', year: '2011', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Ian H. Hutchinson', work: 'Can a Scientist Believe in Miracles?', year: '2018', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'John Earman', work: 'Hume’s Abject Failure', year: '2000', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Craig S. Keener', work: 'Miracles: The Credibility of the New Testament Accounts', year: '2011', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Wunder', 'Naturgesetze', 'Energieerhaltung', 'Hume', 'C. S. Lewis', 'Mokattam'],
  related: [
    'auferstehung/wunder-historisch-unmoeglich',
    'atheismus/aussergewoehnliche-belege',
    'medizin-wunder/keine-belegten-wunder',
    'medizin-wunder/zeitoun-erscheinungen',
    'physik/physik-kausal-geschlossen',
    'physik/naturgesetze-erklaeren-sich-selbst',
  ],
};

export default claim;
