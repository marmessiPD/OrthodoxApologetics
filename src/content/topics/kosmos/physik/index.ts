import type { Topic } from '../../../schema.ts';
import quantenOhneUrsache from './quanten-ohne-ursache.ts';
import naturgesetzeErklaerenSichSelbst from './naturgesetze-erklaeren-sich-selbst.ts';
import wunderVerletzenNaturgesetze from './wunder-verletzen-naturgesetze.ts';
import physikKausalGeschlossen from './physik-kausal-geschlossen.ts';

const topic: Topic = {
  id: 'physik',
  category: 'kosmos',
  group: 'Physik',
  order: 1,
  title: `Physik, Naturgesetze und Wunder`,
  subtitle: `Quantenzufall, der Ursprung der Naturgesetze, Wunder und die These der kausalen Geschlossenheit`,
  icon: 'magnet',
  overview: `Die Physik gilt vielen als die Wissenschaft, die Gott endgültig überflüssig gemacht hat. Vier Argumente tauchen dabei immer wieder auf: Die **Quantenmechanik** zeige Ereignisse ohne Ursache und widerlege damit das Kausalprinzip; die **Naturgesetze** bräuchten keinen Gesetzgeber, weil sie bloße Beschreibungen seien oder aus Symmetrien und Mathematik folgten; **Wunder** würden die Naturgesetze – vor allem die Energieerhaltung – verletzen; und die Physik sei **kausal geschlossen**, sodass weder Gott noch eine Seele in der Welt wirken könnten. Prominente Stimmen sind Sean Carroll (*The Big Picture*), Lawrence Krauss, Victor Stenger und Peter Atkins; philosophisch stehen David Hume, Jaegwon Kim und David Papineau im Hintergrund.

Die christliche Antwort trennt sauber zwischen Physik und Weltanschauung. Die Quantenmechanik zeigt Unvorhersagbarkeit, nicht Ursachenlosigkeit – und ob sie überhaupt indeterministisch ist, hängt von der Interpretation ab (Carroll selbst vertritt die deterministische Viele-Welten-Deutung). Naturgesetze beschreiben, sie bewirken nichts; ihre Existenz, Universalität und mathematische Verstehbarkeit verlangen nach Erklärung (Wigner, Davies). Erhaltungssätze gelten für abgeschlossene Systeme; ob die Welt für Gott abgeschlossen ist, sagt die Physik nicht (Lewis, Plantinga). Und die kausale Geschlossenheit ist eine philosophische Annahme, kein Messergebnis (Hempels Dilemma).

Die Kirche hat die Ordnung der Natur nie als Gegnerin Gottes betrachtet: Sie ist Werk des Logos (Joh 1,1–3; Athanasius, *Contra Gentes*), Ausdruck seiner Treue (Jer 33,25), und Wunder geschehen nicht gegen die Natur, sondern gegen das, was uns von ihr bekannt ist (Augustinus). Die großen Physiker der Neuzeit – Kepler, Newton, Faraday, Maxwell, Planck – sahen in den Gesetzen die Handschrift des Schöpfers.`,
  strategy: `**1. Physik und Interpretation trennen.** Frage bei jeder Behauptung: „Ist das ein Messergebnis oder eine Deutung?" Fast immer ist der gottfeindliche Teil die Deutung.

**2. Bei Quanten: „unbestimmt" ist nicht „ursachenlos".** Kern, Felder, Gesetze sind Ursachen. Dann: Bohm und Everett sind deterministisch – und Carroll vertritt Everett.

**3. Bei Naturgesetzen das Dilemma stellen.** Bloße Beschreibung → Regelmäßigkeit unerklärt. Reale Ordnung → Grund gesucht. Lennox' Billardkugel als Bild.

**4. Bei Wundern die Wenn-Bedingung zeigen.** Gesetze gelten, „wenn nichts von außen eingreift". Lewis: Gott speist neue Ereignisse ein. Dann zur historischen Frage (Auferstehung) überleiten.

**5. Bei Geschlossenheit nach der Physik fragen.** „Welche Physik – die heutige oder eine künftige?" (Hempel). Und: „Hat jemand ein Gehirn aus der Core Theory berechnet?"

**6. Koptische Wundertradition ehrlich behandeln.** Überlieferungen wie den Mokattam-Berg als Tradition kennzeichnen; der Glaube gründet auf der Auferstehung.

**Fallen:** keine „Quanten-Esoterik" (Bewusstsein erschafft Realität); die Quantenmechanik nicht als „nur Theorie" abtun; Wunder nicht durch „unbekannte Naturgesetze" wegerklären; die Erfolge der Physik nie kleinreden.`,
  keyOpponents: [
    { name: 'Sean Carroll', role: 'Theoretischer Physiker (Johns Hopkins)', work: 'The Big Picture (2016); Something Deeply Hidden (2019)' },
    { name: 'Lawrence M. Krauss', role: 'Kosmologe', work: 'A Universe from Nothing (2012)' },
    { name: 'Victor J. Stenger (†2014)', role: 'Teilchenphysiker', work: 'God: The Failed Hypothesis (2007)' },
    { name: 'Peter Atkins', role: 'Physikochemiker, Oxford', work: 'Conjuring the Universe (2018)' },
    { name: 'David Papineau', role: 'Philosoph, King’s College London', work: 'Thinking about Consciousness (2002)' },
  ],
  claims: [quantenOhneUrsache, naturgesetzeErklaerenSichSelbst, wunderVerletzenNaturgesetze, physikKausalGeschlossen],
};

export default topic;
