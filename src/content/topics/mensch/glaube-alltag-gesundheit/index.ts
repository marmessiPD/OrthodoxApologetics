import type { Topic } from '../../../schema.ts';
import glaubeStattTherapie from './glaube-statt-therapie.ts';
import fastenUngesund from './fasten-ungesund.ts';
import gebetSelbstgespraech from './gebet-selbstgespraech.ts';

const topic: Topic = {
  id: 'glaube-alltag-gesundheit',
  category: 'mensch',
  group: 'Psychologie',
  order: 2,
  title: `Glaube, Therapie und Gesundheit`,
  subtitle: `Ersetzt der Glaube die Psychotherapie? Ist das koptische Fasten ungesund? Ist Gebet nur ein Selbstgespräch?`,
  icon: 'heart-pulse',
  overview: `Der christliche Alltag – Beten, Fasten, Beichten, geistliche Begleitung – begegnet heute einer psychologisch und medizinisch geprägten Öffentlichkeit. Drei Vorwürfe sind besonders häufig: Glaube und Psychotherapie schlössen sich aus (entweder brauche ein „richtiger" Christ keine Therapie, oder Therapie habe die Seelsorge ersetzt); das koptische Fasten mit seinen über 200 überwiegend pflanzlichen Fastentagen sei ungesund; und Gebet sei nur ein psychologisches Selbstgespräch ohne Gegenüber.

Die Datenlage ist für den Glauben überwiegend günstig, verlangt aber Genauigkeit. Religiös integrierte Therapien wirken mindestens so gut wie Standardtherapien (Koenig; Metaanalysen); regelmäßige religiöse Praxis geht im Durchschnitt mit weniger Depression und Suizid einher (VanderWeele). Studien zum sehr ähnlichen griechisch-orthodoxen Fasten zeigen niedrigere Cholesterinwerte und ein etwas niedrigeres Gewicht; Forscher nennen es ein „verborgenes Merkmal" der kretischen Mittelmeerkost. Und die Psychologie des Gebets beschreibt reale Wirkungen – ohne dass daraus folgt, dass niemand zuhört.

Die koptische Tradition hat für all das starke Grundlagen: Basilius nannte die Heilkunst eine Gabe Gottes; die Väter unterschieden körperliche, dämonische und geistliche Ursachen seelischer Leiden; das Fasten geschieht nach dem Maß der Kraft unter Begleitung des Beichtvaters, mit Ausnahmen für Kranke, Schwangere, Stillende und Kinder; und die Agpeya lehrt, mit Gottes eigenen Worten zu ihm zu sprechen. Ehrlich bleibt: Stigma gegenüber psychischer Krankheit gibt es auch in Gemeinden, und Nutzen beweist keine Wahrheit. Die grundsätzliche Frage „Schadet Religion der Psyche?" behandelt der Themenblock „Glaube und Psyche".`,
  strategy: `**1. Das falsche Dilemma auflösen.** „Weder Glaube statt Therapie noch Therapie statt Glaube – beides." Das Bild: Elia unter dem Wacholder (1 Kön 19) bekommt zuerst Schlaf und Brot, dann begegnet er Gott.

**2. Mit Daten und Tradition antworten.** Koenig und die Metaanalysen zu glaubensintegrierter Therapie; Basilius' Regel zur Heilkunst; Larchets Darstellung der Väter.

**3. Beim Fasten die Fakten nennen.** Kein Dauerveganismus, sondern Rhythmus von Fasten und Fest; Studien aus Kreta (Sarri 2003, 2004); kirchliche Ausnahmen; B12 und Kalzium im Blick.

**4. Beim Gebet den genetischen Fehlschluss benennen.** „Auch ein Gespräch mit einem Freund beruhigt – das macht den Freund nicht imaginär." Dann Ps 42,6: Der Beter unterscheidet selbst zwischen Selbstgespräch und Gebet.

**5. Wahrheit und Nutzen trennen.** Am Ende jedes Gesprächs: „Dass Glaube guttut, beweist ihn nicht. Lass uns über die Gründe sprechen."

**Fallen:**
- Nie behaupten, wahre Christen würden nicht depressiv; nie jede Krankheit dämonisch deuten.
- Keine medizinischen Wunderversprechen fürs Fasten; niemanden zum Fasten drängen, der krank, schwanger oder gefährdet ist.
- Luhrmann und andere Forscher nicht verzerren; das Stigma in Gemeinden ehrlich zugeben.`,
  keyOpponents: [
    { name: 'Albert Ellis', role: 'Psychologe, Begründer der REBT (1913–2007)', work: '„Psychotherapy and atheistic values" (1980)' },
    { name: 'Jay E. Adams', role: 'Begründer der nouthetischen Seelsorge (innerchristliche Gegenposition)', work: 'Competent to Counsel (1970)' },
    { name: 'Ludwig Feuerbach', role: 'Philosoph (1804–1872)', work: 'Das Wesen des Christentums (1841)' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The God Delusion (2006)' },
    { name: 'Sam Harris', role: 'Neurowissenschaftler und Autor', work: 'Waking Up (2014)' },
    { name: 'Rudolph M. Bell', role: 'Historiker, Rutgers University', work: 'Holy Anorexia (1985)' },
  ],
  claims: [glaubeStattTherapie, fastenUngesund, gebetSelbstgespraech],
  newPeople: [
    {
      id: 'jean-claude-larchet',
      name: 'Jean-Claude Larchet',
      years: 'geb. 1949',
      era: 'modern',
      tradition: 'orthodox',
      title: 'Orthodoxer Patrologe und Philosoph (Frankreich)',
      fields: ['Patristik', 'Seelsorge und Psychiatrie', 'Theologie der Krankheit'],
      bio: 'Französischer orthodoxer Theologe, promoviert in Philosophie und Theologie, Verfasser zahlreicher Werke über die Lehre der östlichen Väter. Er stellte systematisch dar, wie die Väter seelische und geistliche Krankheiten verstanden: Sie unterschieden körperliche, dämonische und geistliche Ursachen und befürworteten bei körperlichen Ursachen ausdrücklich ärztliche Behandlung. Seine Bücher sind ein Standardwerk für das Gespräch zwischen orthodoxer Seelsorge und moderner Psychiatrie.',
      keyWorks: ['Thérapeutique des maladies spirituelles (1991)', 'Thérapeutique des maladies mentales (1992; engl.: Mental Disorders and Spiritual Healing, 2005)', 'The Theology of Illness (2002)'],
      caveat: 'Byzantinisch-orthodoxer (chalcedonensischer) Theologe; in Fragen der Väterlehre zur Seelsorge stimmt er mit der koptischen Tradition weitgehend überein.',
    },
  ],
};

export default topic;
