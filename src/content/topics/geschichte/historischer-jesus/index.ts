import type { Topic } from '../../../schema.ts';
import jesusHatNieExistiert from './jesus-hat-nie-existiert.ts';
import ausserbiblischeQuellenGefaelscht from './ausserbiblische-quellen-gefaelscht.ts';
import jesusNurApokalyptiker from './jesus-nur-apokalyptiker.ts';
import gottheitJesuSpaetErfunden from './gottheit-jesu-spaet-erfunden.ts';

const topic: Topic = {
  id: 'historischer-jesus',
  category: 'geschichte',
  group: 'Historischer Jesus',
  order: 1,
  title: `Der historische Jesus`,
  subtitle: `Hat Jesus gelebt? Was wissen Historiker über ihn – und seit wann gilt er als Gott?`,
  icon: 'user-round',
  overview: `In Gesprächen mit gebildeten Skeptikern fallen meist zwei ganz unterschiedliche Einwände: Der **radikale** behauptet, Jesus habe nie gelebt (Mythizismus – Richard Carrier, Robert M. Price). Der **akademische** – vertreten von Bart Ehrman, Paula Fredriksen oder Dale Allison – gesteht die Existenz Jesu zu, macht aber aus ihm einen jüdischen Endzeitpropheten, dessen Erwartung sich nicht erfüllte und der erst durch seine Anhänger zu einem Gott wurde.

Die gute Nachricht: Gegen den Mythizismus stehen fast alle Fachhistoriker, auch die Agnostiker. Ehrman selbst hat ein ganzes Buch gegen ihn geschrieben („Did Jesus Exist?", 2012). Die entscheidenden Quellen sind die Paulusbriefe (Paulus kannte Petrus und Jesu Bruder Jakobus), die Evangelien sowie Josephus und Tacitus.

Die eigentliche Debatte liegt beim zweiten Einwand. Hier hat sich die Forschung in den letzten Jahrzehnten deutlich zugunsten des christlichen Zeugnisses verschoben: Martin Hengel, Larry Hurtado und Richard Bauckham haben gezeigt, dass die Verehrung Jesu als Herr und die Einbeziehung in die Identität des einen Gottes **ganz am Anfang** stehen – in Texten aus den 50er Jahren, die noch ältere Hymnen und aramäische Gebete enthalten. Selbst Ehrman räumt inzwischen ein, dass Paulus Jesus als präexistentes göttliches Wesen sah.

Für die koptisch-orthodoxe Kirche ist die Geschichtlichkeit Jesu kein Randthema: Das Glaubensbekenntnis nennt bewusst Pontius Pilatus. Der Logos wurde wirklich Fleisch – in einer bestimmten Zeit, an einem bestimmten Ort. Der hl. Athanasius und der hl. Kyrill haben gegen Doketismus und Arianismus genau diese doppelte Wahrheit verteidigt: wirklicher Mensch in der Geschichte, wahrer Gott von Ewigkeit.`,
  strategy: `**1. Erst klären, welcher Einwand gemeint ist.** Frage: „Bezweifelst du, dass Jesus gelebt hat, oder bezweifelst du, dass er Gott ist?" Das sind zwei völlig verschiedene Gespräche.

**2. Beim Mythizisten:** Beginne mit Gal 1,19 – „Jakobus, der Bruder des Herrn". Paulus kannte den Bruder Jesu persönlich. Dann: Kein antiker Gegner (Kelsos, Talmud, Tryphon) bestritt Jesu Existenz. Erst danach Josephus und Tacitus. Verweise darauf, dass selbst Ehrman und Casey (Agnostiker) den Mythizismus widerlegt haben – das nimmt den Vorwurf „christliche Voreingenommenheit" vorweg.

**3. Quellen ehrlich sortieren.** Sag offen, dass das Testimonium Flavianum christlich überarbeitet ist und Thallus unsicher ist. Wer ehrlich gewichtet, gewinnt Vertrauen.

**4. Beim akademischen Kritiker (Ehrman-Typ):** Verlagere die Debatte auf die **frühesten Texte**. Nicht mit Johannes beginnen, sondern mit 1 Kor 8,6, Phil 2,6–11 und Maranatha. Frage: „Welcher Text ist älter als diese und zeigt eine niedrigere Christologie?"

**5. Falle vermeiden:** Lass dich nicht auf „Zeig mir, wo Jesus wörtlich ‚Ich bin Gott' sagt" festnageln. Zeige stattdessen, was er **tut** und **beansprucht** (Sündenvergebung, Sabbat, Gericht, Anbetung) – und wie die Evangelisten ihn mit Texten erzählen, die im AT Gott allein gelten.

**6. Apokalyptik zugestehen, „gescheitert" bestreiten.** Die Kirche bekennt die Wiederkunft. Jesus nannte kein Datum (Mk 13,32), und was er für „dieses Geschlecht" ankündigte – den Fall des Tempels –, geschah im Jahr 70.

**7. Ton:** Viele Mythizisten kommen aus enttäuschten religiösen Hintergründen. Bleib freundlich und sachlich; die Argumente sind stark genug.`,
  keyOpponents: [
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, UNC Chapel Hill; Agnostiker', work: 'How Jesus Became God (2014); Jesus: Apocalyptic Prophet (1999) – zugleich Kritiker des Mythizismus (Did Jesus Exist?, 2012)' },
    { name: 'Richard Carrier', role: 'Althistoriker, Mythizist', work: 'On the Historicity of Jesus (2014)' },
    { name: 'Robert M. Price', role: 'Neutestamentler, Mythizist', work: 'Deconstructing Jesus (2000)' },
    { name: 'Dale C. Allison', role: 'Neutestamentler, Princeton (ehrlicher christlicher Kritiker)', work: 'Constructing Jesus (2010)' },
    { name: 'Paula Fredriksen', role: 'Historikerin des antiken Judentums und Christentums', work: 'Jesus of Nazareth, King of the Jews (1999); When Christians Were Jews (2018)' },
    { name: 'Dan McClellan', role: 'Bibelwissenschaftler, Social Media', work: 'Beiträge zu göttlicher Agentschaft und antikem Monotheismus' },
    { name: 'John Dominic Crossan', role: 'Mitbegründer des Jesus Seminar', work: 'The Historical Jesus (1991)' },
  ],
  claims: [jesusHatNieExistiert, ausserbiblischeQuellenGefaelscht, jesusNurApokalyptiker, gottheitJesuSpaetErfunden],
  newPeople: [
    {
      id: 'simon-gathercole',
      name: 'Simon J. Gathercole',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Professor für Neues Testament und frühes Christentum, University of Cambridge',
      fields: ['Neues Testament', 'Christologie', 'Apokryphe Evangelien', 'Historischer Jesus'],
      bio: 'Britischer Neutestamentler, Spezialist für die Präexistenzchristologie der Evangelien und für außerkanonische Evangelien (Thomas, Judas). Mitautor der Antwort auf Bart Ehrman „How God Became Jesus" (2014).',
      keyWorks: ['The Preexistent Son (2006)', 'The Gospel of Thomas: Introduction and Commentary (2014)', 'The Gospel of Judas (2007)'],
    },
    {
      id: 'martin-hengel',
      name: 'Martin Hengel',
      years: '1926–2009',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Neutestamentler und Judaist, Universität Tübingen',
      fields: ['Antikes Judentum', 'Frühe Christologie', 'Evangelien', 'Kreuzigung in der Antike'],
      bio: 'Einer der einflussreichsten Neutestamentler des 20. Jahrhunderts. Zeigte die tiefe Hellenisierung auch des palästinischen Judentums und die frühe Entstehung der hohen Christologie. Verteidigte die frühe Entstehung der Evangelienüberschriften.',
      keyWorks: ['Judentum und Hellenismus (1969)', 'Der Sohn Gottes (1975)', 'Crucifixion in the Ancient World (1977)', 'Die vier Evangelien und das eine Evangelium von Jesus Christus (2008; engl. 2000)'],
    },
    {
      id: 'ignatius-antiochien',
      name: 'Ignatius von Antiochien',
      years: 'gest. ca. 110',
      era: 'patristisch',
      tradition: 'ungeteilt',
      title: 'Bischof von Antiochien, Märtyrer',
      fields: ['Christologie', 'Ekklesiologie', 'Antidoketismus'],
      bio: 'Bischof von Antiochien, der auf dem Weg zu seinem Martyrium in Rom sieben Briefe an Gemeinden und an Polykarp schrieb. Bezeugt um 110 die Gottheit und die wahre Menschheit Christi sowie die Eucharistie und das Bischofsamt.',
      keyWorks: ['Briefe an die Epheser, Magnesier, Trallianer, Römer, Philadelphier, Smyrnäer und an Polykarp'],
    },
  ],
};

export default topic;
