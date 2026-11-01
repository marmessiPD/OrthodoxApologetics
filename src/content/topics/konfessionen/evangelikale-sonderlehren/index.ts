import type { Topic } from '../../../schema.ts';
import vorentrueckung from './vorentrueckung.ts';
import keineHierarchieNoetig from './keine-hierarchie-noetig.ts';
import sabbatStattSonntag from './sabbat-statt-sonntag.ts';

const topic: Topic = {
  id: 'evangelikale-sonderlehren',
  category: 'konfessionen',
  group: 'Evangelikale Sonderlehren',
  order: 1,
  title: `Evangelikale Sonderlehren`,
  subtitle: `Vorentrückung, Gemeindeunabhängigkeit und Sabbatpflicht – neuere Lehren im Licht der Schrift und der Alten Kirche`,
  icon: 'cloud-sun',
  overview: `Neben den klassischen reformatorischen Lehren (Sola Scriptura, Sola Fide) gibt es im evangelikalen und freikirchlichen Raum **Sonderlehren**, die erst im 18. und 19. Jahrhundert entstanden sind, heute aber von vielen als „biblische Selbstverständlichkeit" vertreten werden. Drei davon begegnen Kopten besonders häufig:

1. **Die Vorentrückung** (*Pre-Tribulation Rapture*): Die Gläubigen würden vor einer siebenjährigen großen Trübsal heimlich in den Himmel geholt. Diese Lehre wurde in den 1830er-Jahren von **John Nelson Darby** (Brüderbewegung) systematisiert, durch die **Scofield-Bibel** (1909) verbreitet und durch Bestseller wie „Alarmstufe Rot / Left Behind" populär.
2. **Gemeindeunabhängigkeit** (Kongregationalismus): Jede Ortsgemeinde sei selbstständig; Bischöfe und übergeordnete Kirchenleitung seien unbiblisch.
3. **Die Sabbatpflicht**: Die **Siebenten-Tags-Adventisten** (gegründet 1863, geprägt von Ellen G. White) und einige andere Gruppen lehren, dass Christen den Samstag statt des Sonntags halten müssen; der Sonntag sei eine Erfindung Roms oder Konstantins.

Die **koptische Kirche** kann diesen Lehren mit einem besonderen Vorteil begegnen: Sie ist eine Kirche, die in direkter Kontinuität zur Alten Kirche steht. Schon im 3. Jahrhundert hat ihr Papst **Dionysius von Alexandrien** in Ägypten eine endzeitliche Sonderlehre (den Chiliasmus des Bischofs Nepos) in einem vorbildlichen, geduldigen Gespräch geprüft und überwunden. Ihre Hierarchie geht auf den Evangelisten Markus zurück. Und sie ehrt den Samstag bis heute als Festtag, feiert aber den Sonntag als Tag der Auferstehung – wie die Kirche seit den Aposteln.`,
  strategy: `**1. Das Alter der Lehre ansprechen.** Frage freundlich: „Wer hat diese Lehre vor dem 19. Jahrhundert vertreten?" Bei der Vorentrückung und beim Adventismus führt das zu Darby (1830er) bzw. Ellen White (19. Jh.). Das beweist allein noch nicht, dass sie falsch sind – aber es zeigt, dass die Beweislast beim Gegenüber liegt.

**2. Die Schlüsseltexte im Zusammenhang lesen.** 1 Thess 4,17 mit 2 Thess 2,1–3 und Mt 24,29–31; Apg 15 und die Pastoralbriefe; Kol 2,16–17 und Apg 20,7.

**3. Die frühesten nachapostolischen Zeugen.** Didache, Ignatius, 1. Klemensbrief, Barnabasbrief und Justin sind um 96–155 entstanden – Jahrzehnte, bevor irgendein Papst oder Kaiser etwas „hätte ändern" können.

**4. Den koptischen Trumpf ausspielen.** Die koptische Kirche ist der lebendige Gegenbeweis gegen den Mythos, Rom habe Sonntag und Bischofsamt erfunden: Sie hat beides, aber nie unter Rom gestanden.

**5. Fallen meiden.** Nicht über Endzeit-Spekulationen spotten; viele Evangelikale lieben die Wiederkunft Christi aufrichtig. Bei Adventisten: Sie sind keine „Sekte" im Sinn einer Leugnung der Trinität; sie bekennen Christus als Gott. Bleib respektvoll.`,
  keyOpponents: [
    { name: 'John Nelson Darby', role: 'Mitbegründer der Brüderbewegung (1800–1882)', work: 'Begründer des Dispensationalismus und der Vorentrückungslehre' },
    { name: 'C. I. Scofield', role: 'Herausgeber der Scofield-Studienbibel (1843–1921)', work: 'The Scofield Reference Bible (1909, rev. 1917)' },
    { name: 'Tim LaHaye', role: 'Baptistischer Prediger und Autor (1926–2016)', work: 'Left Behind (mit Jerry B. Jenkins, 1995–2007)' },
    { name: 'Ellen G. White', role: 'Mitbegründerin der Siebenten-Tags-Adventisten (1827–1915)', work: 'Der große Kampf (The Great Controversy, 1888/1911)' },
    { name: 'Samuele Bacchiocchi', role: 'Adventistischer Kirchenhistoriker (1938–2008)', work: 'From Sabbath to Sunday (1977)' },
    { name: 'Mark Dever', role: 'Baptistischer Pastor, 9Marks', work: 'A Display of God’s Glory (2001) – Verteidigung des Kongregationalismus' },
  ],
  claims: [vorentrueckung, keineHierarchieNoetig, sabbatStattSonntag],
  newPeople: [
    {
      id: 'george-ladd',
      name: 'George Eldon Ladd',
      years: '1911–1982',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Neutestamentler, Fuller Theological Seminary',
      fields: ['Eschatologie', 'Reich Gottes', 'Neutestamentliche Theologie'],
      bio: 'Einer der einflussreichsten evangelikalen Neutestamentler des 20. Jahrhunderts. Er zeigte, dass die Vorentrückungslehre weder in der Schrift noch in der Alten Kirche begründet ist, und prägte das Verständnis des Reiches Gottes als „schon und noch nicht".',
      keyWorks: ['The Blessed Hope (1956)', 'A Theology of the New Testament (1974)', 'The Gospel of the Kingdom (1959)'],
      caveat: 'Evangelikaler Baptist; er vertrat einen historischen Prämillenarismus (ein künftiges Tausendjähriges Reich), den die koptische Kirche nicht teilt. Hier nur zur Kritik der Vorentrückung.',
    },
    {
      id: 'ignatius-antiochien',
      name: 'Ignatius von Antiochien',
      years: 'gest. um 110',
      era: 'patristisch',
      tradition: 'ungeteilt',
      title: 'Bischof von Antiochien, Märtyrer',
      fields: ['Kirchenordnung', 'Bischofsamt', 'Eucharistie', 'Christologie', 'Martyrium'],
      bio: 'Bischof von Antiochien in Syrien, der unter Kaiser Trajan nach Rom gebracht und dort den wilden Tieren vorgeworfen wurde. Auf dem Weg schrieb er sieben Briefe, die zu den ältesten Zeugnissen der nachapostolischen Kirche gehören: über die Gottheit und wahre Menschheit Christi, die Eucharistie und die Ordnung von Bischof, Presbytern und Diakonen.',
      keyWorks: ['Briefe an die Epheser, Magnesier, Trallianer, Römer, Philadelphier, Smyrnäer und an Polykarp'],
    },
  ],
};

export default topic;
