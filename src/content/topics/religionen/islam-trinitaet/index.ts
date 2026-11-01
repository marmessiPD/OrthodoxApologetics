import type { Topic } from '../../../schema.ts';
import trinitaetIstSchirk from './trinitaet-ist-schirk.ts';
import koranMissverstehtTrinitaet from './koran-missversteht-trinitaet.ts';
import trinitaetUnlogisch from './trinitaet-unlogisch.ts';
import gottBrauchtKeineTrinitaet from './gott-braucht-keine-trinitaet-um-zu-lieben.ts';

const topic: Topic = {
  id: 'islam-trinitaet',
  category: 'religionen',
  group: 'Islam',
  order: 4,
  title: `Trinität und Tauhid`,
  subtitle: `Ist der dreieinige Gott Vielgötterei – und kennt der Koran die Trinität überhaupt?`,
  icon: 'triangle',
  overview: `Für Muslime ist der **Tauhid** – die absolute Einheit Gottes – das Herz des Glaubens, und der **Schirk** – Gott etwas beizugesellen – die schwerste Sünde (4:48). Aus dieser Perspektive erscheint die Trinität als Rückfall in die Vielgötterei. Der Koran verwirft ausdrücklich, Gott sei „der Dritte von dreien" (5:73), und lässt Gott Jesus fragen, ob er gelehrt habe, ihn und seine Mutter „als zwei Götter neben Allah" zu nehmen (5:116).

Christen bekennen ebenso entschieden: „Wir glauben an den einen Gott." Die Kirche versteht die Trinität nicht als Zahlenspiel, sondern als Bekenntnis zu dem einen Gott, der von Ewigkeit her sein Wort und seinen Geist hat. Genau damit haben arabischsprachige Christen – Kopten, Syrer, Melkiten und Ostsyrer – seit dem 8. Jahrhundert auf den Schirk-Vorwurf geantwortet: Johannes von Damaskus, Timotheus I., Abu Ra'ita, Yahya ibn Adi, Severus ibn al-Muqaffa' und Paulus al-Buschi. Ihre Gesprächspartner waren die Theologen des Kalam, die selbst über Gottes ewige Eigenschaften und das ungeschaffene Wort Allahs stritten.

Die Debatte hat drei Ebenen: (1) **Was** sagt die Trinitätslehre tatsächlich – und was nicht? (2) **Beschreibt der Koran** die christliche Lehre korrekt? (3) Ist die Trinität **logisch kohärent** und hat sie **Erklärungskraft** (Liebe, Rede Gottes vor der Schöpfung)?`,
  strategy: `**Reihenfolge im Gespräch:**
1. **Begriffe klären, bevor du argumentierst.** Frage: „Was glaubst du, was Christen mit Trinität meinen?" Meist kommt: drei Götter, oder Gott – Jesus – Maria. Erkläre dann: ein Wesen, drei Hypostasen; Vater, Sohn, Heiliger Geist; Maria ist Geschöpf.
2. **Den Koran-Test stellen** (★ \`koran-missversteht-trinitaet\`): Wer sind die „drei" in 5:73? Warum argumentiert 5:75, Jesus und seine Mutter hätten Speise gegessen? Lass den Gesprächspartner sich festlegen – Horn A oder Horn B.
3. **Den Schirk-Vorwurf mit dem ungeschaffenen Wort beantworten:** Ist Gottes Wort geschaffen? Diese Frage kennt jeder sunnitische Muslim. Sie zeigt, dass ewige Wirklichkeit in Gott nicht automatisch Schirk ist.
4. **Logik:** Nicht „gleiche Hinsicht" – ein „Was", drei „Wer".
5. **Liebe und Rede:** Erst am Ende, als positives Argument, warum der dreieinige Gott einleuchtet.

**Fallen:**
- Keine schlechten Analogien (Wasser–Eis–Dampf); sie werden sofort als Modalismus entlarvt.
- Nicht in die Falle tappen, die Trinität „beweisen" zu wollen. Sie ist offenbart; du verteidigst nur, dass sie nicht widersprüchlich ist und der Koran sie nicht widerlegt.
- Marienverehrung nicht verschweigen, sondern selbst ansprechen und den Unterschied zwischen Verehrung und Anbetung erklären.
- Ruhig bleiben: Für Muslime ist der Schirk-Vorwurf keine Provokation, sondern echte Sorge um Gottes Ehre. Zeige, dass du diese Sorge teilst.`,
  keyOpponents: [
    { name: 'Shabir Ally', role: 'Islamischer Apologet, Let the Quran Speak (Toronto)' },
    { name: 'Hamza Andreas Tzortzis', role: 'Islamischer Apologet, Autor von „The Divine Reality"' },
    { name: 'Mohammed Hijab', role: 'Islamischer Apologet, Speakers\' Corner London' },
    { name: 'Zakir Naik', role: 'Islamischer Prediger, Peace TV' },
    { name: 'Yasir Qadhi', role: 'Islamischer Gelehrter, East Plano Islamic Center' },
    { name: 'Ahmed Deedat', role: 'Islamischer Apologet (1918–2005), IPCI Durban' },
  ],
  newPeople: [
    {
      id: 'sidney-griffith',
      name: 'Sidney H. Griffith',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'katholisch',
      title: 'Professor emeritus für Semitistik, Catholic University of America (Washington)',
      fields: ['Arabisch-christliche Literatur', 'Christlich-islamische Beziehungen', 'Syrisches Christentum'],
      bio: 'Führender Historiker der arabischsprachigen Christenheit unter islamischer Herrschaft. Seine Arbeiten zeigen, wie Melkiten, Syrisch-Orthodoxe und Ostsyrer Trinität und Menschwerdung in arabischer Sprache gegenüber dem Islam erklärten.',
      keyWorks: ['The Church in the Shadow of the Mosque (2008)', 'The Bible in Arabic (2013)'],
    },
  ],
  claims: [trinitaetIstSchirk, koranMissverstehtTrinitaet, trinitaetUnlogisch, gottBrauchtKeineTrinitaet],
};

export default topic;
