import type { Topic } from '../../../schema.ts';
import nazarethExistierteNicht from './nazareth-existierte-nicht.ts';
import zensusQuirinius from './zensus-quirinius.ts';
import kindermordErfunden from './kindermord-erfunden.ts';
import pilatusFalschDargestellt from './pilatus-falsch-dargestellt.ts';
import grabtuchTurin from './grabtuch-turin.ts';

const topic: Topic = {
  id: 'nt-archaeologie',
  category: 'geschichte',
  group: 'Historischer Jesus',
  order: 2,
  title: `Neues Testament und Archäologie`,
  subtitle: `Nazareth, Zensus des Quirinius, Kindermord, Pilatus, Turiner Grabtuch`,
  icon: 'pickaxe',
  overview: `Wer die Evangelien als Legende abtun will, greift gern zu konkreten historischen Einzelfragen: Nazareth habe es nie gegeben, der Zensus des Quirinius sei ein Datierungsfehler, der Kindermord von Betlehem erfunden, Pilatus von den Christen weißgewaschen. Umgekehrt benutzen manche Christen das Turiner Grabtuch als „Beweis" der Auferstehung – und verlieren damit Debatten, die sie gar nicht hätten führen müssen.

Die Lage ist je nach Frage sehr verschieden – und genau das muss man wissen. **Nazareth** ist archäologisch klar bezeugt; die Gegenthese ist eine Randposition des Mythizismus, die auch der Agnostiker Bart Ehrman zurückweist. **Pilatus** ist durch Philo, Josephus, Tacitus und die Inschrift von Caesarea (1961) gesichert; die Frage ist nur, ob die Evangelien ihn verzerren – und dabei zeigt sich, dass ihr Bild gut zu Josephus passt. Beim **Kindermord** steht ein plausibler, aber nur einmal bezeugter Bericht gegen das Schweigen des Josephus. Beim **Zensus des Quirinius** liegt ein echtes, ungelöstes Problem vor, das die Mehrheit der kritischen Forschung als Irrtum des Lukas wertet und für das es mehrere ernsthafte, aber unbewiesene Lösungsvorschläge gibt. Beim **Grabtuch** schließlich hat die koptische Kirche keine Position – die Radiokarbondatierung spricht für das Mittelalter, und der Glaube hängt nicht daran.

Für Kopten hat dieser Themenblock einen eigenen Klang: Die Flucht der Heiligen Familie nach Ägypten (Mt 2,13–15) steht im Zusammenhang der Kindermord-Erzählung, und Lukas, der „Historiker" unter den Evangelisten, wird in der Kirche als Arzt, Evangelist und – nach der Überlieferung – erster Ikonenmaler verehrt.`,
  strategy: `**Unterscheide die Fälle** – das ist die wichtigste Regel:
1. **Wo die Faktenlage klar ist** (Nazareth, Existenz und Amt des Pilatus): selbstbewusst die Belege nennen – Wohnhäuser des 1. Jahrhunderts, Inschrift von Caesarea, Pilatus-Inschrift, Philo, Josephus, Tacitus.
2. **Wo nur eine Quelle berichtet** (Kindermord): Plausibilität zeigen (Größe Betlehems, Charakter des Herodes), ohne Gewissheit vorzutäuschen.
3. **Wo ein echtes Problem besteht** (Quirinius): das Problem offen zugeben, die Lösungsvorschläge als Möglichkeiten nennen, dann auf Lukas' Gesamtbilanz und auf Apg 5,37 verweisen. Wer hier „längst gelöst" sagt, verliert.
4. **Wo der Glaube gar nicht betroffen ist** (Grabtuch): die Frage offenlassen und auf das eigentliche Fundament – Zeugen und leeres Grab – umlenken.

**Gesprächsführung:** Frage früh, welche Quelle oder welcher Fund gemeint ist. Viele Einwände (z. B. „Nazareth gab es nicht") beruhen auf veralteten Informationen. Nenne Nichtchristen, die zustimmen (Ehrman zu Nazareth und Pilatus).

**Fallen:** Kein „Haus Jesu gefunden", keine 14.000 Kinder, kein Grabtuch als Auferstehungsbeweis, keine Sejanus-These als Tatsache, keine „Nazareth-Inschrift" als Beleg für den Ort. Und beim Thema Pilatus nie vergessen, die antijüdische Wirkungsgeschichte der Passionstexte ehrlich zu benennen.`,
  keyOpponents: [
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, UNC (zu Quirinius und Kindermord kritisch; gegen den Mythizismus)', work: 'Jesus, Interrupted (2009); Did Jesus Exist? (2012)' },
    { name: 'Raymond E. Brown', role: 'Katholischer Exeget (†1998)', work: 'The Birth of the Messiah (1993); The Death of the Messiah (1994)' },
    { name: 'René Salm', role: 'Mythizist', work: 'The Myth of Nazareth (2008)' },
    { name: 'Géza Vermes', role: 'Jüdischer Religionshistoriker (†2013)', work: 'The Nativity. History and Legend (2006)' },
    { name: 'Joe Nickell', role: 'Skeptischer Ermittler', work: 'Inquest on the Shroud of Turin (1998)' },
  ],
  claims: [nazarethExistierteNicht, zensusQuirinius, kindermordErfunden, pilatusFalschDargestellt, grabtuchTurin],
  newPeople: [
    {
      id: 'stanley-porter',
      name: 'Stanley E. Porter',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Neutestamentler, Präsident und Dekan des McMaster Divinity College (Hamilton, Kanada)',
      fields: ['Griechisch des Neuen Testaments', 'Papyrologie', 'Lukas und Apostelgeschichte', 'Historischer Jesus'],
      bio: 'Einer der produktivsten Gelehrten für die griechische Sprache des Neuen Testaments und die Papyri. Arbeitete über die Kriterien der Jesusforschung, über Paulus in der Apostelgeschichte und über den lukanischen Zensus im Licht der römischen Verwaltungspraxis.',
      keyWorks: ['Verbal Aspect in the Greek of the New Testament (1989)', 'The Criteria for Authenticity in Historical-Jesus Research (2000)', 'The Reasons for the Lukan Census (2002)'],
    },
    {
      id: 'rt-france',
      name: 'R. T. France',
      years: '1938–2012',
      era: 'modern',
      tradition: 'anglikanisch',
      title: 'Neutestamentler, ehem. Rektor des Wycliffe Hall (Oxford)',
      fields: ['Matthäusevangelium', 'Markusevangelium', 'Historischer Jesus'],
      bio: 'Britischer Neutestamentler und anglikanischer Geistlicher, Verfasser bedeutender Kommentare zu Matthäus und Markus. Untersuchte in einem Fachaufsatz die Geschichtlichkeit des Kindermords von Betlehem im Licht der Quellen über Herodes.',
      keyWorks: ['Herod and the Children of Bethlehem (Novum Testamentum 21, 1979)', 'The Gospel of Mark (NIGTC, 2002)', 'The Gospel of Matthew (NICNT, 2007)'],
    },
    {
      id: 'paul-maier',
      name: 'Paul L. Maier',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Althistoriker, Western Michigan University (emeritiert)',
      fields: ['Alte Geschichte', 'Josephus', 'Pilatus', 'Herodes'],
      bio: 'Lutherischer Althistoriker, der Josephus und Eusebius für ein breites Publikum übersetzt und kommentiert hat. Schrieb über Pilatus, über Herodes und den Kindermord sowie über die Chronologie des Lebens Jesu.',
      keyWorks: ['Pontius Pilate (Roman, 1968)', 'Herod and the Infants of Bethlehem (1998)', 'Josephus. The Essential Works (Übers./Hg., 1988)'],
    },
  ],
};

export default topic;
