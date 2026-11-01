import type { Topic } from '../../../schema.ts';
import gnostischeEvangelienWahresChristentum from './gnostische-evangelien-wahres-christentum.ts';
import jesusInIndien from './jesus-in-indien.ts';
import geheimesWissenElite from './geheimes-wissen-elite.ts';

const topic: Topic = {
  id: 'gnosis',
  category: 'sondergemeinschaften',
  group: 'Gnosis & Geheimlehren',
  order: 1,
  title: `Gnosis & Geheimlehren`,
  subtitle: `Nag Hammadi, Thomas- und Judasevangelium, Jesus in Indien und das Versprechen geheimen Wissens`,
  icon: 'eye',
  overview: `„Gnosis" (griech. Erkenntnis) bezeichnet religiöse Bewegungen des 2. und 3. Jahrhunderts, die Erlösung durch geheimes Wissen versprachen: Der Mensch trage einen göttlichen Funken in sich, der in der Materie gefangen sei; die sichtbare Welt sei das Werk eines unwissenden oder bösen Schöpfers (Demiurgen); Christus bringe als himmlischer Bote die befreiende Erkenntnis. Seit dem Fund von **Nag Hammadi** (Dezember 1945, Oberägypten) und der Veröffentlichung des Judasevangeliums (2006) sind diese Texte populär geworden – durch Bestseller wie Elaine Pagels' „The Gnostic Gospels", Bart Ehrmans „Lost Christianities" und Dan Browns „Sakrileg".

Für koptische Christen ist das Thema besonders nah: Die Nag-Hammadi-Kodizes sind in **koptischer Sprache** geschrieben, wurden in der Nähe der pachomianischen Klöster gefunden und liegen heute im Koptischen Museum in Kairo. Die Auseinandersetzung mit der Gnosis ist Teil der eigenen Kirchengeschichte – von Clemens von Alexandrien, der den „wahren Gnostiker" in der Kirche beschrieb, über den 39. Osterfestbrief des hl. Athanasius (367) bis zum hl. Schenute, der in Oberägypten gegen häretische Bücher predigte.

In moderner Form lebt die Idee geheimen Wissens weiter: in der Theosophie, in esoterischen Schulen und in Legenden wie der von **Jesus in Indien** (Notovitch 1894, Ahmadiyya, Holger Kersten), die Jesus zu einem Schüler östlicher Weisheit oder zu einem Überlebenden der Kreuzigung machen.`,
  strategy: `**1. Daten vor Deutungen.** Frage zuerst: Wann wurde der Text geschrieben? Die kanonischen Evangelien stammen aus dem 1. Jahrhundert, die gnostischen meist aus dem 2. und 3. Jahrhundert. Das allein entzieht vielen populären Behauptungen den Boden.

**2. Die Texte selbst lesen lassen.** Viele Gesprächspartner kennen die gnostischen Evangelien nur aus Zusammenfassungen. Thomas 114 (Frauen müssen „männlich werden"), der böse Demiurg im Apokryphon des Johannes oder Judas als „dreizehnter Dämon" überraschen oft.

**3. Ehrlich zugestehen,** dass das frühe Christentum vielfältig war und dass manche Thesen (etwa zur Vergrabung der Kodizes) Hypothesen sind – dann wirkt deine Antwort umso glaubwürdiger.

**4. Koptisches Erbe nutzen.** Irenäus, Athanasius, Schenute und Clemens zeigen: Die Kirche kannte diese Texte und lehnte sie nicht aus Machtgier ab, sondern weil sie die gute Schöpfung, die Menschwerdung und die leibliche Auferstehung leugnen.

**5. Bei Indien-Legenden:** Freundlich nach Quellen fragen. Notovitchs Handschrift hat nie jemand gesehen; der Name „Yuz Asaf" geht auf die Buddha-Legende zurück. Respekt gegenüber Ahmadis und Muslimen wahren.

**6. Das positive Ziel:** Christus ist nicht Lehrer eines Geheimnisses für wenige, sondern selbst das offenbarte Geheimnis Gottes für alle (Kol 1,26–28; 2,3).`,
  keyOpponents: [
    { name: 'Elaine Pagels', role: 'Religionshistorikerin, Princeton University', work: 'The Gnostic Gospels (1979); Beyond Belief (2003)' },
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, University of North Carolina', work: 'Lost Christianities (2003)' },
    { name: 'Karen L. King', role: 'Kirchenhistorikerin, Harvard Divinity School', work: 'The Gospel of Mary of Magdala (2003)' },
    { name: 'Holger Kersten', role: 'Sachbuchautor', work: 'Jesus lebte in Indien (1983)' },
  ],
  claims: [gnostischeEvangelienWahresChristentum, jesusInIndien, geheimesWissenElite],
  newPeople: [
    {
      id: 'simon-gathercole',
      name: 'Simon J. Gathercole',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'christlich',
      title: 'Neutestamentler, University of Cambridge',
      fields: ['Thomasevangelium', 'Apokryphe Evangelien', 'Frühe Christologie'],
      bio: 'Professor für Neues Testament und frühes Christentum in Cambridge. Verfasser der umfassendsten neueren Studien zum Thomasevangelium, in denen er dessen Abhängigkeit von den synoptischen Evangelien und seine Entstehung im 2. Jahrhundert begründet.',
      keyWorks: ['The Composition of the Gospel of Thomas (2012)', 'The Gospel of Thomas: Introduction and Commentary (2014)', 'The Gospel of Judas: Rewriting Early Christianity (2007)'],
    },
    {
      id: 'max-mueller',
      name: 'Friedrich Max Müller',
      years: '1823–1900',
      era: 'neuzeit',
      tradition: 'evangelisch',
      title: 'Indologe und Religionswissenschaftler, Oxford',
      fields: ['Indologie', 'Religionsgeschichte', 'Buddhistische Literatur'],
      bio: 'In Dessau geborener Sprachwissenschaftler, Sohn des Dichters Wilhelm Müller, lehrte in Oxford. Herausgeber des Rigveda und der Reihe „Sacred Books of the East". Prüfte 1894 die Behauptungen Nicolas Notovitchs über eine tibetische Handschrift zum Leben Jesu kritisch.',
      keyWorks: ['The Sacred Books of the East (Hg., 1879–1910)', '„The Alleged Sojourn of Christ in India" (The Nineteenth Century, 1894)'],
      caveat: 'Liberal-protestantischer Religionswissenschaftler; zitiert wird er als Fachmann für indische und buddhistische Literatur, nicht als theologische Autorität.',
    },
  ],
};

export default topic;
