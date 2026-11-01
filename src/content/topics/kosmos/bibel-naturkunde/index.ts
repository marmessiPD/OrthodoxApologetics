import type { Topic } from '../../../schema.ts';
import bibelFlacheErdeFirmament from './bibel-flache-erde-firmament.ts';
import sternVonBetlehem from './stern-von-betlehem.ts';
import finsternisKreuzigung from './finsternis-kreuzigung.ts';
import josuaSonnenstillstand from './josua-sonnenstillstand.ts';

const topic: Topic = {
  id: 'bibel-naturkunde',
  category: 'kosmos',
  group: 'Bibel & Naturkunde',
  order: 1,
  title: `Bibel und Naturkunde`,
  subtitle: `Firmament und flache Erde, der Stern von Betlehem, die Finsternis bei der Kreuzigung und Josuas Sonnenstillstand`,
  icon: 'telescope',
  overview: `Wo die Bibel von Himmel und Erde, Sonne und Sternen spricht, sehen Kritiker oft den Beweis, dass sie ein Buch antiker Irrtümer ist: Sie lehre eine flache Erde unter einer festen Kuppel (*rāqîaʿ*), erzähle von einem wandernden Stern, behaupte eine unmögliche Sonnenfinsternis bei Vollmond und lasse die Sonne über Gibeon stillstehen. Manche dieser Einwände kommen von Skeptikern wie Thomas Paine oder Richard Carrier, andere von gläubigen Bibelwissenschaftlern wie Paul Seely oder Peter Enns, die betonen, dass die biblischen Autoren im Weltbild des Alten Orients lebten.

Die Antwort beginnt mit einer alten Einsicht der Kirche: Die Schrift will nicht lehren, *wie der Himmel geht*, sondern *wie man in den Himmel kommt* (Galilei, nach Kardinal Baronius). Schon Basilius und Augustinus lehnten es im 4. Jahrhundert ab, die Bibel als Naturkundebuch zu lesen. Die Bibel spricht phänomenologisch – wie wir heute vom „Sonnenaufgang" – und benutzt die Bildsprache ihrer Zeit, um Wahrheiten über Gott auszusagen. Sie legt sich auf kein kosmologisches Modell fest: neben „Säulen" der Erde steht ihr Hängen „über dem Nichts" (Hiob 26,7).

Zugleich verlangt Ehrlichkeit Zugeständnisse: Die biblischen Autoren teilten wohl Vorstellungen des antiken Weltbilds; einige Kirchenväter (Laktanz, Kosmas Indikopleustes) lehrten tatsächlich eine flache Erde; es gibt keinen sicheren außerbiblischen Beleg für den Stern oder die Finsternis; und manche christliche „Belege" – der „fehlende Tag der NASA", Jes 40,22 als Beweis der Kugelerde, Tertullians „römische Archive" – sollte man nie verwenden. Wer das offen sagt, kann umso überzeugender zeigen, dass die Texte genauer gelesen werden wollen, als ihre Kritiker es tun – und dass ein Gott, der die Natur geschaffen hat, in ihr auch Zeichen setzen kann.`,
  strategy: `**1. Zuerst die Wissenschaft anerkennen.** „Du hast recht: Bei Vollmond gibt es keine Sonnenfinsternis." „Ja, die Erde ist eine Kugel." Wer der Physik widerspricht, verliert sofort.

**2. Dann den Text genau lesen.** Was steht wirklich da? *Skotos* statt Eklipse; ein Zitat aus einem Liederbuch statt eines astronomischen Berichts; ein Stern, den Herodes nicht einmal bemerkt hatte; poetische Bilder, die sich als Physik widersprechen würden.

**3. Die Väter zitieren.** Basilius (Hex. 9,1), Augustinus (De Gen. ad litt. I,19,39; II,9,20), Julius Africanus (Vollmond-Argument), Origenes (Kometen, Textkritik), Philoponos (gegen Kosmas). Sie zeigen, dass die Kirche diese Fragen seit 1700 Jahren kennt und ehrlich diskutiert.

**4. Ehrlich zugestehen.** Antikes Weltbild der Autoren, Ausnahmen unter den Vätern, fehlende außerbiblische Belege, unsichere Hypothesen (Konjunktion, Komet, Mondfinsternis, Omen).

**5. Die eigentliche Frage stellen.** Sind Wunder grundsätzlich ausgeschlossen? Wenn ja, ist das eine Weltanschauung, keine Physik. Wenn nein, geht es um Belege – und um den Gekreuzigten und Auferstandenen, auf den alle diese Zeichen hinweisen.

**Fallen:** Keine „Wissenschaftswunder" konstruieren (Jes 40,22, Hiob 26,7). Kein NASA-Märchen. Keine Hypothese als bewiesen darstellen. Nicht behaupten, kein einziger Vater habe an eine flache Erde geglaubt.`,
  keyOpponents: [
    { name: 'Paul H. Seely', role: 'Autor zur altorientalischen Kosmologie', work: '„The Firmament and the Water Above" (WTJ 1991/92)' },
    { name: 'Peter Enns', role: 'Alttestamentler', work: 'Inspiration and Incarnation (2005)' },
    { name: 'Richard Carrier', role: 'Althistoriker', work: '„Thallus and the Darkness at Christ\'s Death" (2011–2012)' },
    { name: 'Aaron Adair', role: 'Physiker und Autor', work: 'The Star of Bethlehem: A Skeptical View (2013)' },
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, UNC Chapel Hill', work: 'Jesus, Interrupted (2009)' },
    { name: 'Thomas Paine', role: 'Publizist und Deist', work: 'The Age of Reason (1794–1807)' },
  ],
  claims: [bibelFlacheErdeFirmament, sternVonBetlehem, finsternisKreuzigung, josuaSonnenstillstand],
  newPeople: [
    {
      id: 'colin-humphreys',
      name: 'Sir Colin J. Humphreys',
      years: 'geb. 1941',
      era: 'modern',
      tradition: 'christlich',
      title: 'Materialwissenschaftler, emeritierter Professor an der University of Cambridge',
      fields: ['Materialwissenschaft', 'Astronomische Chronologie biblischer Ereignisse', 'Wissenschaft und Glaube'],
      bio: 'Humphreys ist ein international anerkannter Materialwissenschaftler und wurde 2010 zum Ritter geschlagen. Daneben hat er naturwissenschaftliche Methoden auf biblische Ereignisse angewandt: die Datierung der Kreuzigung (Nature 1983, mit W. G. Waddington), den Stern von Betlehem (QJRAS 1991) und die Exodus-Erzählung. Seine Hypothesen werden in der Fachwelt diskutiert und teils kritisiert.',
      keyWorks: ['The Miracles of Exodus (2003)', 'The Mystery of the Last Supper (2011)', '„Dating the Crucifixion", Nature 306 (1983, mit W. G. Waddington)'],
      caveat: 'Seine astronomischen Deutungen biblischer Texte sind Hypothesen, keine gesicherten Ergebnisse.',
    },
    {
      id: 'julius-africanus',
      name: 'Sextus Julius Africanus',
      years: 'ca. 160–240',
      era: 'patristisch',
      tradition: 'ungeteilt',
      title: 'Christlicher Gelehrter und erster christlicher Weltchronist',
      fields: ['Chronologie', 'Geschichte', 'Apologetik'],
      bio: 'Julius Africanus verfasste mit den *Chronographiae* die erste christliche Weltchronik von der Schöpfung bis ins 3. Jahrhundert, die nur in Fragmenten (u. a. bei Eusebius und Georgios Synkellos) erhalten ist. Er korrespondierte mit Origenes und setzte sich kritisch mit heidnischen Historikern wie Thallus auseinander. Sein Argument, dass bei Vollmond keine Sonnenfinsternis möglich sei, zeigt seine astronomische Bildung.',
      keyWorks: ['Chronographiae (Fragmente)', 'Brief an Origenes über die Susanna-Erzählung', 'Brief an Aristides über die Genealogien Jesu'],
    },
  ],
};

export default topic;
