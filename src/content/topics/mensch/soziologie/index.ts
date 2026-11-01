import type { Topic } from '../../../schema.ts';
import saekularisierungUnaufhaltsam from './saekularisierung-unaufhaltsam.ts';
import saekulareGesellschaftenGluecklicher from './saekulare-gesellschaften-gluecklicher.ts';

const topic: Topic = {
  id: 'soziologie',
  category: 'mensch',
  group: 'Soziologie',
  order: 1,
  title: `Religion und Gesellschaft (empirisch)`,
  subtitle: `Stirbt der Glaube aus? Sind säkulare Gesellschaften glücklicher? Was die Daten wirklich zeigen`,
  icon: 'users',
  overview: `Zwei Behauptungen prägen die öffentliche Debatte: Religion verschwinde mit Wohlstand und Bildung, und säkulare Gesellschaften wie Skandinavien seien glücklicher und moralischer. Beide klingen nach Wissenschaft – und beide enthalten einen wahren Kern: Im wohlhabenden Westen verlieren die Kirchen tatsächlich Mitglieder, und die nordischen Länder schneiden in Glücksranglisten hervorragend ab.

Die Religionssoziologie zeichnet aber ein deutlich vielschichtigeres Bild. Peter Berger, einst Hauptvertreter der Säkularisierungsthese, widerrief sie 1999: Die Welt sei „so leidenschaftlich religiös wie eh und je". Grace Davie beschreibt Europa als Ausnahmefall, Philip Jenkins die Verlagerung des Christentums nach Afrika, Lateinamerika und Asien, Eric Kaufmann den demografischen Vorsprung religiöser Familien. Zugleich zeigt die jüngste Pew-Bestandsaufnahme (2025), dass der christliche Anteil an der Weltbevölkerung 2010–2020 leicht gesunken ist – ehrliche Zahlen gehören dazu.

Beim Glück lohnt der genaue Blick: Ländervergleiche (Gregory Paul 2005) sind methodisch schwach; Individualdaten aus vielen Ländern zeigen überwiegend positive Zusammenhänge zwischen religiöser Praxis, Wohlbefinden und Gemeinsinn; die Global Flourishing Study (2025) misst neben Zufriedenheit auch Sinn und Beziehungen; und die Stärken Skandinaviens sind historisch aus christlicher Kultur gewachsen.`,
  strategy: `**Gesprächsführung:**
1. **Daten zugeben, die gegen dich sprechen.** Kirchenschwund im Westen, leichter Rückgang des christlichen Anteils 2010–2020, hohe Lebenszufriedenheit in Skandinavien. Wer hier ausweicht, verliert sofort.
2. **Regional statt global denken.** Europa ist nicht die Welt: Berger, Davie, Jenkins und die Pew-Projektionen.
3. **Gegenbeispiele nennen.** Südkoreas Christentum wuchs mit der Industrialisierung; in Russland stieg die orthodoxe Selbstzuordnung nach 1991; in den USA sind Gebildete nicht seltener in der Kirche.
4. **Methodik ansprechen.** Ländervergleiche ≠ Individualdaten (ökologischer Fehlschluss); Lebenszufriedenheit ≠ umfassendes Gedeihen.
5. **Wurzeln zeigen.** Skandinaviens Sozialstaat und Vertrauenskultur haben lutherische Wurzeln (Kahl, Holland); Böckenförde-Diktum.
6. **Zur Wahrheitsfrage zurückführen.** Weder Wachstum noch Schwund, weder Glück noch Unglück beweisen oder widerlegen Gott. Soziologie kann nur Mythen über Unausweichlichkeit entkräften.

**Fallen:** Keine geschönten Zahlen, keine Abwertung säkularer Gesellschaften, kein „Ohne Gott kann man nicht gut sein", keine Relativierung kirchlicher Skandale.`,
  keyOpponents: [
    { name: 'Steve Bruce', role: 'Religionssoziologe, Aberdeen', work: 'God Is Dead (2002); Secularization (2011)' },
    { name: 'Pippa Norris & Ronald Inglehart', role: 'Politikwissenschaftler', work: 'Sacred and Secular (2004)' },
    { name: 'Phil Zuckerman', role: 'Religionssoziologe, Pitzer College', work: 'Society without God (2008)' },
    { name: 'Gregory S. Paul', role: 'Gesellschaftsforscher', work: 'Journal of Religion & Society 7 (2005)' },
    { name: 'Steven Pinker', role: 'Psychologe, Harvard', work: 'Enlightenment Now (2018)' },
  ],
  claims: [saekularisierungUnaufhaltsam, saekulareGesellschaftenGluecklicher],
  newPeople: [
    {
      id: 'peter-berger',
      name: 'Peter L. Berger',
      years: '1929–2017',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Religionssoziologe, Boston University',
      fields: ['Religionssoziologie', 'Säkularisierung', 'Wissenssoziologie', 'Pluralismus'],
      bio: 'In Wien geborener, lutherischer Soziologe, Mitbegründer der Wissenssoziologie („Die gesellschaftliche Konstruktion der Wirklichkeit", 1966, mit Thomas Luckmann). Prägte zunächst die Säkularisierungstheorie und widerrief sie später öffentlich: Die Moderne führe nicht notwendig zur Säkularisierung, sondern zu religiöser Pluralität.',
      keyWorks: ['The Sacred Canopy (1967)', 'The Desecularization of the World (Hg., 1999)', 'The Many Altars of Modernity (2014)'],
    },
    {
      id: 'philip-jenkins',
      name: 'Philip Jenkins',
      years: 'geb. 1952',
      era: 'modern',
      tradition: 'christlich',
      title: 'Historiker, Baylor University (Institute for Studies of Religion)',
      fields: ['Weltchristentum', 'Kirchengeschichte', 'Religionsgeschichte'],
      bio: 'In Wales geborener Historiker, der die Verlagerung des Christentums in den globalen Süden beschrieben und die vergessene Geschichte der Kirchen Asiens und Afrikas – darunter der orientalischen Kirchen – einem breiten Publikum zugänglich gemacht hat.',
      keyWorks: ['The Next Christendom (2002)', 'The Lost History of Christianity (2008)'],
    },
  ],
};

export default topic;
