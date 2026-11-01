import type { Topic } from '../../../schema.ts';
import doppeltePraedestination from './doppelte-praedestination.ts';
import voelligeVerdorbenheit from './voellige-verdorbenheit.ts';
import begrenzteSuehne from './begrenzte-suehne.ts';
import unwiderstehlicheGnade from './unwiderstehliche-gnade.ts';
import roemer9 from './roemer-9.ts';

const topic: Topic = {
  id: 'calvinismus',
  category: 'konfessionen',
  group: 'Calvinismus & Reformierte',
  order: 1,
  title: `Calvinismus`,
  subtitle: `Prädestination, Verdorbenheit, Sühne und Gnade – die „fünf Punkte" im Licht der Schrift und der Väter`,
  icon: 'lock',
  overview: `Der Calvinismus (reformierte Theologie) geht auf **Johannes Calvin** (1509–1564) und seine *Institutio Christianae Religionis* (Endfassung 1559) zurück. Seine Gnadenlehre wurde auf der **Synode von Dordrecht** (1618/19) gegen die Remonstranten (Anhänger des Jacobus Arminius) in fünf Lehrsätzen festgeschrieben; im englischsprachigen Raum merkt man sie sich mit dem erst im 20. Jahrhundert gebildeten Kürzel **TULIP**: völlige Verdorbenheit (*Total Depravity*), bedingungslose Erwählung (*Unconditional Election*), begrenzte Sühne (*Limited Atonement*), unwiderstehliche Gnade (*Irresistible Grace*) und Beharrlichkeit der Heiligen (*Perseverance of the Saints*). Die **Westminster-Konfession** (1646/47) formuliert: Einige Menschen sind zum ewigen Leben vorherbestimmt, andere zum ewigen Tod verordnet (III,3).

Heute erlebt der Calvinismus unter jungen Evangelikalen eine Renaissance („Young, Restless, Reformed"), getragen von Predigern und Autoren wie **John Piper**, **R. C. Sproul**, **John MacArthur** und dem Apologeten **James White**. Ihre Stärke: großer Ernst gegenüber Gottes Souveränität, der Schwere der Sünde und der Gnade als reinem Geschenk – Anliegen, die die koptische Kirche teilt. Niemand wird ohne Gottes Gnade gerettet; der Mensch kann sich nicht selbst erlösen.

Die **koptisch-orthodoxe Kirche** widerspricht aber der Grundstruktur: Gott **will, dass alle Menschen gerettet werden** (1 Tim 2,4), Christus starb **für alle** (1 Joh 2,2), der Mensch bleibt **Bild Gottes** mit einem geschwächten, aber nicht ausgelöschten freien Willen, und die Gnade **wirbt, heilt und befähigt**, zwingt aber nicht (*Synergie*, Phil 2,12–13). Das ist kein späterer „Kompromiss", sondern die einmütige Lehre der Väter vor Augustinus – von Justin und Irenäus über Athanasius bis zu den ägyptischen Wüstenvätern, deren Lehre Johannes Cassian überliefert hat. Der Osten hat Augustins späte Prädestinationslehre nie übernommen.`,
  strategy: `**1. Gemeinsamkeiten zuerst.** Sag deinem calvinistischen Gesprächspartner, dass du seinen Ernst teilst: Gott ist souverän, die Sünde ist tödlich, die Gnade ist unverdient, niemand rettet sich selbst. So merkt er, dass du kein „Pelagianer" bist – das ist sein erster Reflex.

**2. Das Gespräch auf Gottes Charakter lenken, nicht auf Einzelverse.** Die stärkste Frage ist: „Will Gott, dass alle Menschen gerettet werden – ja oder nein?" (1 Tim 2,4; 2 Petr 3,9; Ez 33,11; Mt 23,37). Jede calvinistische Antwort (z. B. „alle Arten von Menschen", „zwei Willen in Gott") lässt sich ruhig prüfen.

**3. Die Väter als Zeugen.** Calvinisten berufen sich gern auf die Kirchengeschichte. Zeige, dass vor Augustinus **kein einziger** Kirchenvater eine bedingungslose Verwerfung lehrte und dass selbst die westliche Synode von Orange (529) eine Vorherbestimmung zum Bösen verwarf.

**4. Römer 9 im Zusammenhang.** Wenn Röm 9 kommt (und er kommt sicher), lies Röm 9–11 als Einheit: Es geht um Israel und die Heiden in der Heilsgeschichte, und das Kapitel endet mit dem Glauben (9,30–32) und der Hoffnung für alle (11,23.32).

**5. Fallen meiden.** Behaupte nicht, Calvinisten seien keine Christen oder Gott sei bei ihnen ein „Monster". Unterstelle nicht, sie lehrten „Gott zwingt zur Sünde" – sie bestreiten das ausdrücklich (Westminster III,1). Argumentiere mit ihren eigenen Texten, ruhig und respektvoll.`,
  keyOpponents: [
    { name: 'Johannes Calvin', role: 'Reformator in Genf (1509–1564)', work: 'Institutio Christianae Religionis (1559), Buch III, Kap. 21–24' },
    { name: 'John Piper', role: 'Reformierter Baptistenprediger und Autor, Desiring God', work: 'The Justification of God (1983); Are There Two Wills in God? (1995)' },
    { name: 'R. C. Sproul', role: 'Reformierter Theologe, Ligonier Ministries (1939–2017)', work: 'Chosen by God (1986)' },
    { name: 'James White', role: 'Reformierter Baptist, Alpha and Omega Ministries', work: `The Potter's Freedom (2000); Debatte mit Dave Hunt: Debating Calvinism (2004)` },
    { name: 'John MacArthur', role: `Pastor, Grace Community Church, The Master's Seminary`, work: `Predigten und Kommentare zur Erwählung` },
  ],
  claims: [doppeltePraedestination, voelligeVerdorbenheit, begrenzteSuehne, unwiderstehlicheGnade, roemer9],
  newPeople: [
    {
      id: 'kallistos-ware',
      name: 'Kallistos Ware',
      years: '1934–2022',
      era: 'modern',
      tradition: 'orthodox',
      title: 'Titularmetropolit von Diokleia, Patristiker in Oxford',
      fields: ['Orthodoxe Theologie', 'Patristik', 'Filioque', 'Synergie', 'Ökumene'],
      bio: 'Englischer Konvertit zur griechisch-orthodoxen Kirche, lehrte jahrzehntelang östlich-orthodoxe Studien an der Universität Oxford. Sein Buch „The Orthodox Church" ist die verbreitetste Einführung in die Orthodoxie im Westen; er war an den Dialogen mit Anglikanern und orientalischen Orthodoxen beteiligt.',
      keyWorks: ['The Orthodox Church (1963, überarb. 1993)', 'The Orthodox Way (1979)'],
      caveat: 'Byzantinisch-orthodoxer (chalcedonensischer) Theologe; in der Christologie spricht er die Sprache von Chalcedon, betont aber die Nähe zu den orientalischen Orthodoxen.',
    },
    {
      id: 'roger-olson',
      name: 'Roger E. Olson',
      years: 'geb. 1952',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Theologe, Baylor University (George W. Truett Theological Seminary)',
      fields: ['Arminianismus', 'Calvinismus-Kritik', 'Dogmengeschichte'],
      bio: 'Evangelikaler Baptist und Dogmenhistoriker, bekanntester gegenwärtiger Verteidiger der arminianischen Theologie. Seine Bücher prüfen den Calvinismus an Schrift, Tradition und Gottes Charakter.',
      keyWorks: ['Arminian Theology: Myths and Realities (2006)', 'Against Calvinism (2011)', 'The Story of Christian Theology (1999)'],
      caveat: 'Protestant – in Fragen wie Sakramente, Tradition und Kirche teilt die koptische Kirche seine Positionen nicht. Hier nur zur Kritik am Calvinismus.',
    },
  ],
};

export default topic;
