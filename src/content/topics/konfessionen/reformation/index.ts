import type { Topic } from '../../../schema.ts';
import reformationNoetig from './reformation-noetig.ts';
import imputierteGerechtigkeit from './imputierte-gerechtigkeit.ts';
import beziehungStattReligion from './beziehung-statt-religion.ts';
import kirchenvaeterIrrelevant from './kirchenvaeter-irrelevant.ts';

const topic: Topic = {
  id: 'reformation',
  category: 'konfessionen',
  group: 'Protestantismus',
  order: 7,
  title: `Reformation und Kirche`,
  subtitle: `Hat Luther das Evangelium wiederentdeckt? Rechtfertigung, „Beziehung statt Religion" und die Autorität der Väter – ein orthodoxer Blick auf das Erbe des 16. Jahrhunderts`,
  icon: 'book-open',
  overview: `Für viele evangelische Christen ist die Reformation die große Wende der Kirchengeschichte: Nach Jahrhunderten der Verdunkelung habe Martin Luther 1517 das Evangelium der freien Gnade wiederentdeckt, die Bibel dem Volk zurückgegeben und die Gewissen befreit. Daraus folgen Grundüberzeugungen, die Kopten in Gesprächen ständig begegnen: Rechtfertigung sei ein rein gerichtlicher Freispruch; Christsein sei eine persönliche Beziehung zu Jesus, keine „Religion"; und die Kirchenväter seien fromme, aber unverbindliche Menschen.

Die orthodoxe Antwort beginnt mit einem **ehrlichen Zugeständnis**: Die lateinische Kirche des Spätmittelalters litt unter schweren Missständen – Ablasshandel, Ämterkauf, Verdienstfrömmigkeit. Luthers Protest dagegen war berechtigt. Aber die Orthodoxie kannte diese Missstände in ihrer Lehre nie: keinen Ablass, kein Fegefeuer, keinen Papst über der ganzen Kirche, keinen Pflichtzölibat, keine Kelchverweigerung, keine Liturgie in fremder Sprache. **Die Reformation war die Antwort auf ein westliches Problem.**

Das zeigt auch ein wenig bekanntes Kapitel: Von **1573 bis 1581** schrieben lutherische Theologen aus Tübingen (Jakob Andreae, Martin Crusius, vermittelt durch Stephan Gerlach) an den Ökumenischen Patriarchen **Jeremias II.** und schickten ihm das Augsburger Bekenntnis auf Griechisch. Der Patriarch antwortete dreimal ausführlich aus Schrift und Vätern: Zustimmung, wo die Lutheraner mit der alten Kirche übereinstimmten; Widerspruch bei „allein durch den Glauben", den Sakramenten, den Heiligen, der Überlieferung und dem Filioque. 1581 bat er, künftig nur noch in Freundschaft, nicht mehr über Lehrfragen zu schreiben.

Für Kopten hat das Thema eine eigene Geschichte: Seit 1854 wirkten amerikanische presbyterianische Missionare in Ägypten. Die koptische Kirche antwortete mit Erneuerung von innen – Papst Kyrill IV., die Sonntagsschulbewegung des hl. Habib Girgis, Papst Schenuda III. Sie zeigte, dass persönlicher Glaube, Bibelliebe und orthodoxe Kirchlichkeit zusammengehören.`,
  strategy: `**1. Mit Zugeständnis beginnen.** Sag offen: „Die Missstände, gegen die Luther protestierte, waren real." Das öffnet das Gespräch und nimmt den Verdacht, du wolltest alles verteidigen.

**2. Den Rahmen verschieben: West – Ost.** Erkläre, dass die Orthodoxie Ablass, Fegefeuer, Papstherrschaft und Verdienstschatz nie kannte. Die Frage ist dann nicht „Rom oder Luther?", sondern: „Was glaubte die ungeteilte Kirche?"

**3. Mit der Schrift argumentieren.** Röm 5,19; 2 Kor 5,21; 1 Kor 6,11 (Rechtfertigung); Jak 1,27; Apg 2,42; Eph 5,25–32 (Kirche); Hebr 13,7; 2 Thess 2,15 (Überlieferung). Dein Gegenüber respektiert die Bibel – nutze das.

**4. Unbewusste Gemeinsamkeiten aufdecken.** Kanon (Athanasius 367), Dreieinigkeit (Nizäa), Christologie (Ephesus) – Protestanten übernehmen das Urteil der Väter, oft ohne es zu merken. Auch die Reformatoren beriefen sich auf die Väter.

**5. Fragen stellen statt Vorwürfe machen.** „Wo sagt Paulus wörtlich, dass Christi Gerechtigkeit uns zugerechnet wird?" – „Warum nennt Jakobus den Glauben ‚reine Religion'?" – „Woher weißt du, welche Bücher zur Bibel gehören?"

**6. Fallen meiden.** Beschimpfe Luther nicht; vereinfache Protestanten nicht zu „Werke-egal-Christen"; nenne keine umstrittenen Zahlen („33.000 Denominationen"); und behaupte nicht, die Orthodoxie habe nie Reform gebraucht.`,
  keyOpponents: [
    { name: 'Martin Luther', role: 'Reformator (1483–1546)', work: '95 Thesen (1517); Von der Freiheit eines Christenmenschen (1520); Kleiner Katechismus (1529)' },
    { name: 'Philipp Melanchthon', role: 'Reformator (1497–1560)', work: 'Confessio Augustana (1530); Apologie (1531)' },
    { name: 'Johannes Calvin', role: 'Reformator (1509–1564)', work: 'Institutio Christianae Religionis (1559)' },
    { name: 'John Piper', role: 'Reformierter Prediger und Autor', work: 'Counted Righteous in Christ (2002); The Future of Justification (2007)' },
    { name: 'Jefferson Bethke', role: 'Evangelikaler Autor', work: 'Jesus > Religion (2013)' },
  ],
  claims: [reformationNoetig, imputierteGerechtigkeit, beziehungStattReligion, kirchenvaeterIrrelevant],
  newPeople: [
    {
      id: 'jeremias-ii',
      name: 'Jeremias II. (Tranos)',
      years: 'ca. 1536–1595',
      era: 'neuzeit',
      tradition: 'orthodox',
      title: 'Ökumenischer Patriarch von Konstantinopel (mehrfach zwischen 1572 und 1595)',
      fields: ['Ost-West-Beziehungen', 'Reformation', 'Kirchenordnung'],
      bio: 'Patriarch von Konstantinopel unter osmanischer Herrschaft. Führte 1573–1581 den Briefwechsel mit den lutherischen Theologen aus Tübingen über das Augsburger Bekenntnis und antwortete in drei ausführlichen Schreiben aus Schrift, Konzilien und Vätern. 1589 erhob er in Moskau den Metropoliten Hiob zum ersten Patriarchen der russischen Kirche.',
      keyWorks: ['Drei Antworten an die Tübinger Theologen (1576, 1579, 1581)'],
      caveat: 'Byzantinisch-orthodoxer (chalcedonensischer) Patriarch; er wird hier als Zeuge der gemeinsamen orthodoxen Haltung gegenüber der Reformation angeführt.',
    },
  ],
};

export default topic;
