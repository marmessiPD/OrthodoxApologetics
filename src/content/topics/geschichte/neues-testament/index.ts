import type { Topic } from '../../../schema.ts';
import evangelienSpaetAnonym from './evangelien-spaet-anonym.ts';
import evangelienWidersprechenSich from './evangelien-widersprechen-sich.ts';
import nurKopienVonKopien from './nur-kopien-von-kopien.ts';
import kanonVonKonstantin from './kanon-von-konstantin.ts';
import paulusErfandChristentum from './paulus-erfand-christentum.ts';
import stillePost from './stille-post.ts';

const topic: Topic = {
  id: 'neues-testament',
  category: 'geschichte',
  group: 'Neues Testament',
  order: 1,
  title: `Zuverlässigkeit des Neuen Testaments`,
  subtitle: `Datierung, Verfasser, Widersprüche, Handschriften, Kanon, Paulus und mündliche Überlieferung`,
  icon: 'scroll',
  overview: `Wer über Jesus und die Auferstehung spricht, wird früher oder später gefragt: „Woher weißt du das überhaupt? Die Evangelien sind spät, anonym, widersprüchlich, verfälscht, von Konstantin ausgewählt, von Paulus umgedeutet und durch Stille Post entstellt." Diese Einwände werden von populären Autoren (Dan Brown), muslimischen Apologeten (Ahmed Deedat, Shabir Ally) und vor allem von Bart Ehrman vorgetragen, der als Textkritiker das Material sehr gut kennt.

Die ehrliche Antwort hat zwei Seiten. **Zugestehen** muss man: Die Originale sind verloren; die Handschriften weichen voneinander ab; die Evangelien nennen ihre Verfasser nicht im Text; sie erzählen manche Details unterschiedlich; über einige Bücher des Kanons wurde lange diskutiert; Paulus setzte eigene Akzente. **Aber**: Das Neue Testament ist der mit Abstand am besten bezeugte Text der Antike (rund 5.900 griechische Handschriften, frühe koptische, syrische und lateinische Übersetzungen); die Evangelien entstanden zu Lebzeiten der Augenzeugen; ihre Verfassernamen sind einheitlich überliefert; die Unterschiede betreffen Nebendetails, nicht den Kern; der Kanon wurde nicht von Konstantin, sondern im Leben der Kirche erkannt; Paulus gab weiter, was er empfangen hatte; und die Überlieferung war keine Stille Post, sondern ein gemeinschaftliches, von Augenzeugen begleitetes Weitergeben.

Für die koptisch-orthodoxe Kirche ist dieses Thema besonders nah: Sie führt sich auf den Evangelisten **Markus** zurück; Ägypten lieferte die meisten frühen Papyri; die **koptischen Übersetzungen** gehören zu den ältesten Textzeugen; **Ammonius von Alexandrien** schuf die erste Evangeliensynopse; **Origenes** und **Dionysius** betrieben Textkritik und Verfasserkritik; und der koptische Papst **Athanasius** verfasste 367 die erste vollständige Liste der 27 Bücher des Neuen Testaments.`,
  strategy: `**1. Den Einwand präzisieren.** Frage: „Meinst du, dass wir den Text nicht kennen, dass die Verfasser unbekannt sind, oder dass die Berichte sich widersprechen?" Jede Frage hat eine eigene Antwort.

**2. Mit Zugeständnissen beginnen.** Gib zu, was stimmt: Originale verloren, Varianten zahlreich, Details unterschiedlich, Kanon über einige Bücher diskutiert. Das nimmt dem Gegner die Überraschung und macht dich glaubwürdig.

**3. Dann die Größenordnung zeigen.** Handschriftenzahl und -alter im Vergleich zu anderen antiken Texten (ohne veraltete Zahlen zu übertreiben); Ehrmans eigenes Zugeständnis mit Metzger, dass keine Kernlehre an einer Variante hängt; Datierung zu Lebzeiten der Augenzeugen.

**4. Die Kernübereinstimmung betonen.** Bei Widersprüchen immer zurück zur Frage: „Betrifft das den Kern – Kreuzigung, Begräbnis, leeres Grab, Erscheinungen?" Zeige unbeabsichtigte Übereinstimmungen als positives Argument.

**5. Mythen entzaubern, ohne zu spotten.** Nizäa hat nicht über den Kanon abgestimmt; Konstantin ließ Bibeln abschreiben, nicht auswählen. Nenne den koptischen Papst Athanasius als Verfasser der ersten 27-Bücher-Liste – einen Gegner der kaiserlichen Kirchenpolitik.

**6. Paulus mit Paulus verteidigen.** Nicht mit der Apostelgeschichte beginnen, sondern mit Gal 1–2 und 1 Kor 15: Paulus befragte Petrus, wurde von den Säulen anerkannt und verfolgte die Christen, bevor er Christ wurde – ihr Glaube war älter als er.

**7. Fallen vermeiden:** keine Übertreibungen („99,5 % sicher", „P52 aus dem Jahr 125", „alle Väterzitate ergeben das ganze NT"), keine erzwungenen Harmonisierungen, keine Verwendung des Comma Johanneum. Ehrlichkeit ist hier die stärkste Waffe.`,
  keyOpponents: [
    { name: 'Bart D. Ehrman', role: 'Neutestamentler und Textkritiker, UNC Chapel Hill', work: 'Misquoting Jesus (2005); Jesus, Interrupted (2009); Forged (2011); Jesus Before the Gospels (2016)' },
    { name: 'Dan McClellan', role: 'Bibelwissenschaftler, Social Media', work: 'Kurzvideos zu Verfasserschaft, Widersprüchen und Monotheismus' },
    { name: 'Kipp Davis', role: 'Handschriftenforscher (Qumran), YouTube', work: 'Kritik an apologetischen Handschriften- und Datierungsargumenten' },
    { name: 'Gerd Lüdemann', role: 'Neutestamentler, Göttingen', work: 'Paul: The Founder of Christianity (2002)' },
    { name: 'Elaine Pagels', role: 'Religionshistorikerin, Princeton', work: 'The Gnostic Gospels (1979)' },
    { name: 'Shabir Ally', role: 'Muslimischer Apologet', work: 'Debatten zur Bibelüberlieferung und zu Paulus' },
    { name: 'Dan Brown', role: 'Romanautor', work: 'Sakrileg / The Da Vinci Code (2003)' },
  ],
  claims: [evangelienSpaetAnonym, evangelienWidersprechenSich, nurKopienVonKopien, kanonVonKonstantin, paulusErfandChristentum, stillePost],
  newPeople: [
    {
      id: 'papias',
      name: 'Papias von Hierapolis',
      years: 'ca. 60/70 – nach 130 (unsicher)',
      era: 'patristisch',
      tradition: 'ungeteilt',
      title: 'Bischof von Hierapolis in Phrygien',
      fields: ['Evangelienüberlieferung', 'Mündliche Tradition', 'Apostolische Zeit'],
      bio: 'Frühchristlicher Bischof, der Überlieferungen von Schülern der Apostel sammelte und die „lebendige und bleibende Stimme" der Zeugen schätzte. Sein fünfbändiges Werk ist verloren; Fragmente, u. a. über die Entstehung der Evangelien nach Markus und Matthäus, sind bei Irenäus und Eusebius erhalten.',
      keyWorks: ['Auslegung der Herrenworte (5 Bücher, nur in Fragmenten erhalten)'],
      caveat: 'Papias gibt neben wertvollen Nachrichten auch legendarische Erzählungen wieder (z. B. über den Tod des Judas); seine Notizen müssen kritisch gewichtet werden.',
    },
    {
      id: 'polykarp',
      name: 'Polykarp von Smyrna',
      years: 'ca. 69 – 155/156',
      era: 'patristisch',
      tradition: 'ungeteilt',
      title: 'Bischof von Smyrna, Märtyrer',
      fields: ['Apostolische Überlieferung', 'Märtyrertum'],
      bio: 'Nach Irenäus Schüler des Apostels Johannes und von Aposteln eingesetzter Bischof von Smyrna. Verfasser eines Briefes an die Philipper; starb hochbetagt als Märtyrer. Durch Irenäus, der ihn in seiner Jugend hörte, ist er ein wichtiges Glied zwischen Aposteln und Kirche des späten 2. Jahrhunderts.',
      keyWorks: ['Brief an die Philipper', 'Martyrium des Polykarp (Bericht der Gemeinde von Smyrna)'],
    },
    {
      id: 'ammonius-alexandrien',
      name: 'Ammonius von Alexandrien',
      years: '3. Jahrhundert',
      era: 'patristisch',
      tradition: 'ungeteilt',
      title: 'Christlicher Gelehrter in Alexandrien',
      fields: ['Evangeliensynopse', 'Bibelwissenschaft'],
      bio: 'Alexandrinischer Gelehrter, der dem Matthäusevangelium die Parallelabschnitte der übrigen Evangelien zur Seite stellte und so die erste bekannte Evangeliensynopse schuf. Eusebius baute darauf seine Kanontafeln auf, die über Jahrhunderte die Evangelienhandschriften einleiteten.',
      keyWorks: ['Evangeliensynopse („Diatessaron" nach Eusebius, Brief an Karpianus)'],
      caveat: 'Lebensdaten und Identität sind unsicher; die antike Überlieferung vermengt ihn teils mit dem Philosophen Ammonios Sakkas.',
    },
    {
      id: 'lydia-mcgrew',
      name: 'Lydia McGrew',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'christlich',
      title: 'Analytische Philosophin und Autorin',
      fields: ['Erkenntnistheorie', 'Wahrscheinlichkeitstheorie', 'Zuverlässigkeit der Evangelien', 'Unbeabsichtigte Übereinstimmungen'],
      bio: 'Philosophin mit Schwerpunkt Erkenntnis- und Wahrscheinlichkeitstheorie. Erneuerte das klassische Argument der „unbeabsichtigten Übereinstimmungen" (Paley, Blunt) und kritisiert Deutungen, die den Evangelisten bewusste Tatsachenveränderungen unterstellen.',
      keyWorks: ['Hidden in Plain View: Undesigned Coincidences in the Gospels and Acts (2017)', 'The Mirror or the Mask (2019)', 'The Eye of the Beholder (2021)'],
    },
    {
      id: 'michael-kruger',
      name: 'Michael J. Kruger',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Professor für Neues Testament und frühes Christentum, Reformed Theological Seminary (Charlotte)',
      fields: ['Kanongeschichte', 'Frühes Christentum', 'Textüberlieferung'],
      bio: 'Spezialist für die Entstehung des neutestamentlichen Kanons und die frühchristliche Schriftkultur. Kritisiert die These einer späten, machtpolitisch bestimmten Kanonbildung.',
      keyWorks: ['Canon Revisited (2012)', 'The Question of Canon (2013)', 'The Heresy of Orthodoxy (mit A. Köstenberger, 2010)', 'Christianity at the Crossroads (2018)'],
      caveat: 'Reformierter Theologe; in Fragen von Schrift und Tradition vertritt er nicht die orthodoxe Sicht – für die Kanongeschichte ist er dennoch ein wertvoller Zeuge.',
    },
    {
      id: 'brant-pitre',
      name: 'Brant Pitre',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'katholisch',
      title: 'Professor für Heilige Schrift, Augustine Institute',
      fields: ['Neues Testament', 'Jüdischer Hintergrund Jesu', 'Verfasserschaft der Evangelien'],
      bio: 'Katholischer Neutestamentler mit Schwerpunkt auf dem jüdischen Hintergrund Jesu und der Eucharistie. Verteidigt die frühe Überlieferung der Evangelientitel und die traditionelle Verfasserschaft.',
      keyWorks: ['Jesus and the Jewish Roots of the Eucharist (2011)', 'Jesus and the Last Supper (2015)', 'The Case for Jesus (2016)'],
      caveat: 'Römisch-katholischer Theologe – in Fragen, in denen die katholische von der koptischen Lehre abweicht, keine Autorität.',
    },
    {
      id: 'david-wenham',
      name: 'David Wenham',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'anglikanisch',
      title: 'Britischer Neutestamentler (u. a. Wycliffe Hall, Oxford)',
      fields: ['Paulus', 'Jesusüberlieferung', 'Evangelien'],
      bio: 'Britischer Neutestamentler, der das Verhältnis zwischen Jesus und Paulus untersuchte und zahlreiche Anspielungen auf Jesusüberlieferung in den Paulusbriefen nachwies. Mitherausgeber der Reihe „Gospel Perspectives".',
      keyWorks: ['Paul: Follower of Jesus or Founder of Christianity? (1995)', 'Paul and Jesus: The True Story (2002)'],
    },
    {
      id: 'kenneth-bailey',
      name: 'Kenneth E. Bailey',
      years: '1930–2016',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Neutestamentler und Nahostkenner',
      fields: ['Mündliche Überlieferung', 'Gleichnisse Jesu', 'Nahöstliche Kultur'],
      bio: 'Presbyterianischer Theologe, der in Ägypten aufwuchs und rund vierzig Jahre im Nahen Osten (Ägypten, Libanon, Jerusalem, Zypern) lehrte. Deutete die Evangelien im Licht nahöstlicher Dorfkultur und entwickelte das Modell der „informell kontrollierten" mündlichen Überlieferung.',
      keyWorks: ['Poet and Peasant (1976)', 'Informal Controlled Oral Tradition and the Synoptic Gospels (1991)', 'Jesus Through Middle Eastern Eyes (2008)'],
    },
    {
      id: 'birger-gerhardsson',
      name: 'Birger Gerhardsson',
      years: '1926–2013',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Neutestamentler, Universität Lund',
      fields: ['Mündliche Überlieferung', 'Antikes Judentum', 'Evangelientradition'],
      bio: 'Schwedischer lutherischer Neutestamentler, der die Weitergabe der Jesusüberlieferung mit den Memorier- und Lehrpraktiken des antiken Judentums verglich. Sein Hauptwerk prägte die Debatte über die Zuverlässigkeit der mündlichen Tradition.',
      keyWorks: ['Memory and Manuscript (1961)', 'Tradition and Transmission in Early Christianity (1964)', 'The Reliability of the Gospel Tradition (2001)'],
    },
    {
      id: 'alan-millard',
      name: 'Alan R. Millard',
      years: 'geb. 1937',
      era: 'modern',
      tradition: 'christlich',
      title: 'Emeritierter Rankin-Professor für Hebräisch und altsemitische Sprachen, University of Liverpool',
      fields: ['Altorientalistik', 'Epigraphik', 'Schriftkultur der Antike'],
      bio: 'Altorientalist und Epigraphiker, der zur Schriftkultur des Alten Orients und des antiken Palästina forscht. Zeigte, dass Lesen und Schreiben im Palästina des 1. Jahrhunderts verbreiteter waren als oft angenommen.',
      keyWorks: ['Reading and Writing in the Time of Jesus (2000)'],
    },
  ],
};

export default topic;
