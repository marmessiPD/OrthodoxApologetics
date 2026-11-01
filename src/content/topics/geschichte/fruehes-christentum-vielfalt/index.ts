import type { Topic } from '../../../schema.ts';
import vieleChristentuemerBauer from './viele-christentuemer-bauer.ts';
import christentumDurchGewaltVerbreitet from './christentum-durch-gewalt-verbreitet.ts';
import mariaMagdalenaApostelin from './maria-magdalena-apostelin.ts';
import aramaeischUebersetzung from './aramaeisch-uebersetzung.ts';

const topic: Topic = {
  id: 'fruehes-christentum-vielfalt',
  category: 'geschichte',
  group: 'Kirchengeschichte & Mythen',
  order: 2,
  title: `Frühes Christentum: Einheit oder Vielfalt?`,
  subtitle: `Bauer-These, Ausbreitung ohne Gewalt, Maria Magdalena, Aramäisch und Übersetzung`,
  icon: 'git-fork',
  overview: `Seit Walter Bauers Buch „Rechtgläubigkeit und Ketzerei im ältesten Christentum" (1934) und seiner Popularisierung durch Bart Ehrman („Lost Christianities", 2003) ist eine Erzählung weit verbreitet: Es habe im frühen Christentum viele gleichberechtigte „Christentümer" gegeben; die Orthodoxie sei nur die Partei gewesen, die mit römischem Geld und später mit kaiserlicher Macht siegte, die Bücher der Verlierer vernichtete, die Frauen der Jesusbewegung verdrängte und die ursprünglichen aramäischen Worte Jesu durch griechische Deutungen ersetzte. Romane wie „Sakrileg" und Dokumentationen über die „verbotenen Evangelien" haben dieses Bild einem Millionenpublikum vermittelt.

Die Forschung zeichnet ein differenzierteres Bild. Ja, es gab früh Vielfalt und Streit – das bezeugt schon das Neue Testament. Aber der Kern des orthodoxen Glaubens steht in Bekenntnisformeln aus den ersten Jahrzehnten, gnostische Systeme sind jünger, und Bauers regionale Rekonstruktionen – allen voran sein Paradebeispiel **Ägypten** – haben der Überprüfung nicht standgehalten. Das Christentum wuchs drei Jahrhunderte lang ohne Staatsmacht und unter Verfolgung; später haben Christen tatsächlich Zwang ausgeübt, was ehrlich benannt werden muss. Maria Magdalena wurde in den Evangelien nicht getilgt, sondern zur ersten Osterzeugin gemacht – die westliche Fehldeutung als Prostituierte hat die Ostkirche nie geteilt. Und dass die Worte Jesu in griechischer Übersetzung überliefert sind, ist kein Makel, sondern Ausdruck eines Glaubens, der jede Sprache für würdig hält.

Für Kopten ist dieser Block besonders wichtig: Bauer wählte Alexandria als Beleg dafür, dass die Orthodoxie spät gekommen sei. Die Antwort führt mitten in die Geschichte der eigenen Kirche – zu den frühen Papyri aus Ägypten, zur Katechetenschule, zu Irenäus' Zeugnis über die Kirchen Ägyptens und zu Athanasius, der 367 als Erster genau die 27 Bücher des Neuen Testaments auflistete.`,
  strategy: `**Reihenfolge im Gespräch:**
1. **Vielfalt zugeben:** „Ja, es gab im 2. Jahrhundert verschiedene Gruppen." Das nimmt dem Gegenüber den Wind aus den Segeln.
2. **Dann die eigentliche Frage stellen:** Waren sie gleich alt? Verweise auf 1 Kor 15,3–5 und Phil 2,6–11 – Texte aus den ersten zwei Jahrzehnten.
3. **Ägypten als Testfall:** frühe Papyri überwiegend biblisch, Irenäus nennt um 180 die Kirchen Ägyptens, Pantänus und Clemens vor Demetrius, die Überlieferungslücke durch den jüdischen Aufstand 115–117.
4. **Macht-Frage klären:** Bis 313 hatte die Orthodoxie keine Staatsmacht – und war trotzdem die Mehrheit.
5. **Ehrlich zur Schuld:** Spätere Gewalt gegen Heiden und Häretiker, Gregors Fehldeutung Maria Magdalenas, Junia/Junias.

**Fallen:** Keine Behauptung, es habe nie Streit gegeben. Keine Markus-Gründung als „bewiesen". Keine Peschitta als „Urtext". Keine Überheblichkeit gegenüber Muslimen in der Sprachfrage – der Vergleich mit dem Koran wird respektvoll und sachlich geführt.`,
  keyOpponents: [
    { name: 'Walter Bauer', role: 'Neutestamentler (†1960)', work: 'Rechtgläubigkeit und Ketzerei im ältesten Christentum (1934)' },
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, UNC', work: 'Lost Christianities (2003); Misquoting Jesus (2005)' },
    { name: 'Elaine Pagels', role: 'Religionshistorikerin, Princeton', work: 'The Gnostic Gospels (1979)' },
    { name: 'Karen L. King', role: 'Religionshistorikerin, Harvard', work: 'The Gospel of Mary of Magdala (2003)' },
    { name: 'Catherine Nixey', role: 'Autorin', work: 'The Darkening Age (2017)' },
  ],
  claims: [vieleChristentuemerBauer, christentumDurchGewaltVerbreitet, mariaMagdalenaApostelin, aramaeischUebersetzung],
  newPeople: [
    {
      id: 'laktanz',
      name: 'Laktanz (Lucius Caecilius Firmianus Lactantius)',
      years: 'ca. 250 – ca. 325',
      era: 'patristisch',
      tradition: 'ungeteilt',
      title: 'Lateinischer Rhetor und Apologet, Erzieher von Konstantins Sohn Crispus',
      fields: ['Apologetik', 'Religionsfreiheit', 'Christenverfolgung'],
      bio: 'Nordafrikanischer Rhetoriklehrer, den Diokletian nach Nikomedien berief; nach seiner Bekehrung verlor er in der Großen Verfolgung sein Amt. Schrieb die „Göttlichen Unterweisungen", eine der ersten systematischen Darstellungen des christlichen Glaubens in Latein, mit einem frühen Plädoyer für Religionsfreiheit, sowie eine Schrift über die Todesarten der Verfolger.',
      keyWorks: ['Divinae Institutiones (Göttliche Unterweisungen)', 'De mortibus persecutorum (Über die Todesarten der Verfolger)'],
      caveat: 'Kein Heiliger des koptischen Kalenders; als Apologet und Zeitzeuge der Verfolgung wertvoll, in Einzelfragen (z. B. Kosmologie) ohne Autorität.',
    },
  ],
};

export default topic;
