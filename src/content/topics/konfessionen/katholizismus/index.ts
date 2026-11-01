import type { Topic } from '../../../schema.ts';
import papstprimatUnfehlbarkeit from './papstprimat-unfehlbarkeit.ts';
import filioque from './filioque.ts';
import fegefeuer from './fegefeuer.ts';
import unbefleckteEmpfaengnis from './unbefleckte-empfaengnis.ts';
import ablassVerdienste from './ablass-verdienste.ts';

const topic: Topic = {
  id: 'katholizismus',
  category: 'konfessionen',
  group: 'Katholizismus',
  order: 1,
  title: `Katholizismus`,
  subtitle: `Papstprimat, Filioque, Fegefeuer, Unbefleckte Empfängnis und Ablass – das Gespräch mit der Schwesterkirche Rom`,
  icon: 'key-round',
  overview: `Die römisch-katholische Kirche ist die größte christliche Kirche der Welt. Mit ihr teilt die koptisch-orthodoxe Kirche mehr als mit jeder anderen westlichen Konfession: die sieben Sakramente, die wirkliche Gegenwart Christi in der Eucharistie, das Priestertum in apostolischer Nachfolge, die Verehrung der Gottesmutter und der Heiligen, das Gebet für die Verstorbenen, die deuterokanonischen Bücher und die Autorität der Väter. Rom und Alexandrien waren in der Alten Kirche enge Verbündete: Papst Julius I. nahm den verbannten Athanasius auf, Papst Kyrill und Papst Coelestin verteidigten gemeinsam den Titel „Gottesgebärerin" gegen Nestorius.

Seit dem Konzil von Chalcedon (451) sind die beiden Kirchen getrennt. Die **Gemeinsame Erklärung von Papst Paul VI. und Papst Schenuda III.** (10. Mai 1973) bekannte erstmals wieder gemeinsam den Glauben an Christus, „vollkommener Gott in seiner Gottheit, vollkommener Mensch in seiner Menschheit", und setzte eine gemeinsame Kommission ein. 2017 unterzeichneten **Papst Franziskus und Papst Tawadros II.** in Kairo eine weitere Erklärung, und 2023 nahm Franziskus die **21 koptischen Märtyrer von Libyen** in das römische Martyrologium auf. Seit 2003 arbeitet eine internationale Dialogkommission zwischen der katholischen Kirche und den orientalisch-orthodoxen Kirchen.

Die verbleibenden Unterschiede sind dennoch ernst: der **universale Jurisdiktionsprimat und die Unfehlbarkeit des Papstes** (Vatikanum I, 1870), das **Filioque** im Glaubensbekenntnis, das **Fegefeuer** mit der Lehre von zeitlichen Sündenstrafen, die **Unbefleckte Empfängnis** Mariens (1854) und die **Ablässe** aus dem „Schatz der Verdienste". Diese Lehren sind – so die koptische Sicht – nicht Teil des Glaubens der ungeteilten Kirche des ersten Jahrtausends, sondern westliche Entwicklungen.`,
  strategy: `**1. Als Geschwister sprechen.** Katholiken sind unsere nächsten Verwandten im Westen. Beginne mit dem Gemeinsamen (Sakramente, Väter, Maria, Märtyrer) und erwähne die gemeinsamen Erklärungen von 1973 und 2017.

**2. Das erste Jahrtausend als Maßstab.** Der stärkste Ansatz ist historisch: Was hat die ungeteilte Kirche geglaubt und praktiziert? Selbst Joseph Ratzinger (später Benedikt XVI.) schlug vor, Rom solle vom Osten nicht mehr an Primatslehre verlangen, als im ersten Jahrtausend formuliert und gelebt wurde.

**3. Nicht protestantisch argumentieren.** Kopten bestreiten nicht die Tradition, die Sakramente oder die Autorität der Kirche. Unsere Frage ist nicht „Bibel gegen Tradition", sondern „alte gemeinsame Tradition gegen spätere westliche Entwicklung". Vermeide protestantische Polemik (z. B. „Petros heißt kleiner Stein").

**4. Ehrlich mit eigenen Grenzen.** Gib zu, wo die katholische Seite starke Argumente hat (z. B. dass Petrus in Mt 16,18 der Fels genannt wird, dass Rom einen Ehrenvorrang hatte, dass die Kirche für Verstorbene betet).

**5. Fallen meiden.** Keine Verschwörungstheorien über den Vatikan, keine Verwechslung von Unfehlbarkeit mit Sündlosigkeit, keine Gleichsetzung des heutigen Katholizismus mit den Missbräuchen des Spätmittelalters.`,
  keyOpponents: [
    { name: 'Erstes Vatikanisches Konzil', role: 'Konzil der katholischen Kirche (1869/70)', work: 'Pastor Aeternus (18. Juli 1870): Jurisdiktionsprimat und Unfehlbarkeit' },
    { name: 'Thomas von Aquin', role: 'Kirchenlehrer (1225–1274)', work: 'Summa Theologiae; Contra errores Graecorum' },
    { name: 'Scott Hahn', role: 'Katholischer Theologe und Apologet, Franciscan University of Steubenville', work: 'Rome Sweet Home (1993); Hail, Holy Queen (2001)' },
    { name: 'Erick Ybarra', role: 'Katholischer Apologet zur Ost-West-Frage', work: 'The Papacy: Revisiting the Debate Between Catholics and Orthodox (2022)' },
    { name: 'Katechismus der Katholischen Kirche', role: 'Offizielle Lehrzusammenfassung (1992/1997)', work: 'KKK 246–248, 491–492, 880–892, 1030–1032, 1471–1479' },
  ],
  claims: [papstprimatUnfehlbarkeit, filioque, fegefeuer, unbefleckteEmpfaengnis, ablassVerdienste],
  newPeople: [
    {
      id: 'cyprian',
      name: 'Cyprian von Karthago',
      years: 'ca. 200/210–258',
      era: 'patristisch',
      tradition: 'ungeteilt',
      title: 'Bischof von Karthago, Märtyrer',
      fields: ['Ekklesiologie', 'Einheit der Kirche', 'Bischofsamt', 'Buße'],
      bio: 'Rhetor, der um 246 Christ und bald darauf Bischof von Karthago wurde. In der Verfolgung unter Decius und im Streit um die Wiederaufnahme der Abgefallenen prägte er die Lehre von der Einheit der Kirche im Bischofsamt. Im Ketzertaufstreit widersprach er Papst Stephan von Rom. Er starb 258 unter Valerian als Märtyrer.',
      keyWorks: ['De ecclesiae catholicae unitate (Über die Einheit der katholischen Kirche, 251)', 'De lapsis (Über die Gefallenen, 251)', 'Briefe'],
    },
  ],
};

export default topic;
