import type { Topic } from '../../../schema.ts';
import jesusKopieHorusMithras from './jesus-kopie-horus-mithras.ts';
import jungfrauengeburtHeidnisch from './jungfrauengeburt-heidnisch.ts';
import sterbendeAuferstehendeGoetter from './sterbende-auferstehende-goetter.ts';
import christlicheFesteHeidnisch from './christliche-feste-heidnisch.ts';

const topic: Topic = {
  id: 'antike-parallelen',
  category: 'geschichte',
  group: 'Antike Parallelen',
  order: 1,
  title: `Antike Parallelen`,
  subtitle: `Horus, Mithras, Dionysos, Jungfrauengeburt, sterbende Götter, Weihnachten und Ostern`,
  icon: 'copy',
  overview: `„Jesus ist nur eine Kopie älterer Götter" – diese Behauptung begegnet in Internetfilmen wie „Zeitgeist" (2007), in Büchern des 19. Jahrhunderts (Kersey Graves, Gerald Massey) und in einer akademischeren Form bei Mythizisten wie Richard Carrier. Die Fachwissenschaft – Ägyptologie, Religionswissenschaft, Altphilologie – weist die populären Listen fast einhellig zurück: Für einen von einer Jungfrau am 25. Dezember geborenen, gekreuzigten Horus mit zwölf Jüngern gibt es keine Quelle. Selbst der Agnostiker Bart Ehrman hat die Mythizisten-Parallelen scharf kritisiert, und der Religionswissenschaftler Jonathan Z. Smith nannte die Kategorie der „sterbenden und auferstehenden Götter" 1987 weitgehend eine Fehlbezeichnung.

Ehrlichkeit bedeutet hier aber auch: Die Antike selbst sah Ähnlichkeiten. Justin der Märtyrer, Tertullian und der Heide Kelsos diskutierten sie im 2. Jahrhundert. Allgemeine Motive – Kultmahl, göttliche Abkunft, Rückkehr aus dem Tod – kommen in vielen Religionen vor; Tryggve Mettinger hat für einige altorientalische Götter eine Art Wiederkehr nachgewiesen. Entscheidend ist der Unterschied zwischen **Ähnlichkeit** und **Abhängigkeit**: Eine Kopie setzt eine echte, spezifische Parallele, zeitliche Priorität und einen Übertragungsweg voraus.

Für die koptische Kirche hat das Thema eine besondere Note: Die Kopten sind die Nachfahren der alten Ägypter. Ihre Kirche kennt die Religion von Isis, Osiris und Horus aus erster Hand – und ihre Märtyrer starben, weil sie sich weigerten, diesen Göttern zu opfern. Die koptische Zeitrechnung beginnt mit der „Ära der Märtyrer" (284).`,
  strategy: `**Reihenfolge im Gespräch:**
1. **Ruhig nach der Quelle fragen:** „Aus welchem ägyptischen Text stammt das?" Die meisten Behauptungen fallen an dieser Stelle.
2. **Den Mythos korrekt erzählen:** Isis empfängt vom toten Osiris; Mithras kommt aus dem Felsen und tötet einen Stier; Dionysos ist Sohn des Zeus und der Semele. Die echten Geschichten sind die beste Widerlegung.
3. **Chronologie prüfen:** Römischer Mithraskult ab Ende des 1. Jh., Attis- und Adonis-Auferstehung in nachchristlichen Quellen – Paulus schrieb in den 50er-Jahren.
4. **Das jüdische Milieu betonen:** Die ersten Christen waren toratreue Juden, die heidnische Kulte verabscheuten.
5. **Ehrliche Zugeständnisse:** Justin sah Ähnlichkeiten; allgemeine Motive gibt es; Bildformen wurden teilweise übernommen; die Kirche hat manche Bräuche christianisiert.
6. **Genetischen Fehlschluss benennen:** Selbst wenn ein Datum oder Brauch einen heidnischen Vorläufer hätte, wäre der Inhalt (Menschwerdung, Auferstehung) nicht widerlegt.

**Fallen:** Nicht behaupten, es gebe „keinerlei" Ähnlichkeit; nicht spotten; keine eigenen Gegenmythen aufstellen („Weihnachten ist sicher das echte Datum").`,
  keyOpponents: [
    { name: 'Peter Joseph', role: 'Filmemacher', work: 'Zeitgeist (2007)' },
    { name: 'Acharya S (Dorothy M. Murdock)', role: 'Autorin (†2015)', work: 'The Christ Conspiracy (1999)' },
    { name: 'Richard Carrier', role: 'Althistoriker, Mythizist', work: 'On the Historicity of Jesus (2014)' },
    { name: 'Robert M. Price', role: 'Bibelwissenschaftler, Mythizist', work: 'Deconstructing Jesus (2000)' },
    { name: 'Timothy Freke, Peter Gandy', role: 'Autoren', work: 'The Jesus Mysteries (1999)' },
  ],
  claims: [jesusKopieHorusMithras, jungfrauengeburtHeidnisch, sterbendeAuferstehendeGoetter, christlicheFesteHeidnisch],
  newPeople: [
    {
      id: 'ronald-nash',
      name: 'Ronald H. Nash',
      years: '1936–2006',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Philosoph und Theologe',
      fields: ['Antike Parallelen', 'Mysterienreligionen', 'Religionsphilosophie'],
      bio: 'Lehrte Philosophie und Theologie u. a. an der Western Kentucky University und am Reformed Theological Seminary. Untersuchte systematisch die These, das Neue Testament habe von hellenistischer Philosophie und den Mysterienkulten geborgt.',
      keyWorks: ['The Gospel and the Greeks. Did the New Testament Borrow from Pagan Thought? (1992, 2. Aufl. 2003)'],
    },
    {
      id: 'raymond-brown',
      name: 'Raymond E. Brown',
      years: '1928–1998',
      era: 'modern',
      tradition: 'katholisch',
      title: 'Neutestamentler, Union Theological Seminary (New York)',
      fields: ['Kindheitsgeschichten', 'Johannesevangelium', 'Passionsgeschichten'],
      bio: 'Sulpizianerpriester und einer der einflussreichsten Neutestamentler des 20. Jahrhunderts. Seine umfassenden Kommentare zu den Kindheits- und Passionsgeschichten verbinden historisch-kritische Methode mit kirchlichem Glauben.',
      keyWorks: ['The Birth of the Messiah (1977, erw. 1993)', 'The Death of the Messiah (1994)', 'The Gospel According to John (1966/1970)'],
      caveat: 'Katholischer Exeget mit historisch-kritischer Methode; wird hier für religionsgeschichtliche Fragen herangezogen, nicht als Lehrautorität.',
    },
  ],
};

export default topic;
