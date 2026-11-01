import type { Topic } from '../../../schema.ts';
import neuapostolischeKirche from './neuapostolische-kirche.ts';
import adventistenEllenWhite from './adventisten-ellen-white.ts';
import christlicheWissenschaft from './christliche-wissenschaft.ts';
import scientology from './scientology.ts';
import vereinigungskirche from './vereinigungskirche.ts';

const topic: Topic = {
  id: 'weitere-sondergemeinschaften',
  category: 'sondergemeinschaften',
  group: 'Weitere Sondergemeinschaften',
  order: 1,
  title: `Neuapostolische, Adventisten, Christian Science, Scientology & Vereinigungskirche`,
  subtitle: `Neue Apostel, das Datum 1844, Krankheit als Illusion, der Thetan und ein „gescheiterter" Jesus`,
  icon: 'shield-alert',
  overview: `Die fünf Gemeinschaften dieses Themenblocks entstanden zwischen 1832 und 1954 und berufen sich alle auf eine **neue Offenbarung oder Vollmacht**, die über das hinausgeht, was die Kirche seit den Aposteln glaubt: neu berufene Apostel mit einem Stammapostel an der Spitze (Neuapostolische Kirche), eine Prophetin, die eine neue Deutung von 1844 bestätigt (Siebenten-Tags-Adventisten), eine „Wissenschaft", nach der Materie und Krankheit unwirklich sind (Christian Science), eine Technik zur Befreiung des ewigen Geistwesens (Scientology) und ein neuer Messias, der vollendet, woran Jesus angeblich scheiterte (Vereinigungskirche).

Die Unterschiede sind groß und müssen fair benannt werden. **Neuapostolische und Adventisten bekennen die Dreieinigkeit und die Gottheit Christi**; sie sind Mitchristen mit problematischen Sonderlehren, und die NAK hat sich in den letzten Jahrzehnten deutlich geöffnet und 2013 für die gescheiterte „Botschaft" ihres Stammapostels Bischoff entschuldigt. **Christian Science, Scientology und Vereinigungskirche** dagegen deuten Menschwerdung, Kreuz und Auferstehung grundlegend um – bei aller Achtung vor den aufrichtigen Menschen, die ihnen angehören.

Die koptische Kirche bringt in dieses Gespräch etwas Besonderes ein: Sie ist eine Kirche in **ununterbrochener apostolischer Nachfolge** seit dem Evangelisten Markus, sie hat den Sonntag nie aus Rom empfangen, sie bekennt mit Kyrill das wirklich fleischgewordene Wort, sie hat Ärzte unter ihren Heiligen (Kyros und Johannes) und singt in der Karwoche dem Gekreuzigten: „Dein ist die Kraft und die Herrlichkeit." Ihre Väter – Athanasius, Kyrill, und vor ihnen Irenäus und Clemens von Rom – haben die Antworten auf diese Fragen schon formuliert, als ähnliche Ansprüche zum ersten Mal auftraten.`,
  strategy: `**1. Unterscheide zuerst.** Kläre, mit wem du sprichst: Mitchristen mit Sonderlehren (NAK, Adventisten) oder Gemeinschaften mit einem anderen Evangelium (Christian Science, Scientology, Vereinigungskirche). Der Ton bleibt in jedem Fall respektvoll.

**2. Frage nach der Quelle der neuen Autorität.** Wer hat die neuen Apostel berufen? Woher weiß Ellen White von 1844? Woher weiß Mary Baker Eddy, dass Materie unwirklich ist? Woher hat Hubbard seine Kosmologie? Wer hat Moon zum Messias eingesetzt? Dann: Jud 3 – der Glaube ist „einmal" übergeben.

**3. Prüfe am Text.** NAK: Apg 1,21–22; 1 Kor 15,8; Eph 2,20. Adventisten: Hebr 6,19–20; 9,12.24; Dan 8,9. Christian Science: Joh 1,14; Lk 24,39; 1 Joh 4,2–3. Scientology: Hebr 9,27; Mt 10,8; Apg 8,20; Joh 18,20. Vereinigungskirche: Mk 8,31; Mt 16,23; Joh 19,30; Apg 1,11; Mt 24,23.

**4. Nutze die Prüfsteine der Schrift.** Erfüllte oder gescheiterte Prophetie (Dtn 18,22: Bischoff 1951, Miller 1844); öffentliche statt geheimer Lehre (Irenäus); Gnade statt Kauf (Apg 8,20).

**5. Biete die Alternative an.** Die Kirche der Apostel, die Gewissheit in Christus, das wirkliche Fleisch des Erlösers, die unentgeltliche Gnade, den vollendeten Sieg am Kreuz.

**Fallen:** (a) Pauschal von „Sekten" sprechen. (b) Übertriebene Zahlen oder Gerüchte verwenden (z. B. „90 % abgeschrieben" bei White, unbelegte Hubbard-Zitate). (c) Laufende Verfahren als erwiesene Schuld darstellen. (d) Über Xenu oder Massenhochzeiten spotten. (e) Die positive Entwicklung der NAK oder die Rechtgläubigkeit der Adventisten in den Kernlehren verschweigen.`,
  keyOpponents: [
    { name: 'Jean-Luc Schneider', role: 'Stammapostel der Neuapostolischen Kirche International seit 2013' },
    { name: 'Ellen G. White', role: 'Mitbegründerin und Prophetin der Siebenten-Tags-Adventisten (1827–1915)', work: 'Der große Kampf (1888/1911)' },
    { name: 'Mary Baker Eddy', role: 'Gründerin der Christian Science (1821–1910)', work: 'Science and Health with Key to the Scriptures (1875)' },
    { name: 'L. Ron Hubbard', role: 'Gründer der Scientology (1911–1986)', work: 'Dianetics (1950)' },
    { name: 'David Miscavige', role: 'Führungsfigur der Scientology seit Ende der 1980er-Jahre' },
    { name: 'Sun Myung Moon', role: 'Gründer der Vereinigungskirche (1920–2012)', work: 'Das Göttliche Prinzip (1966)' },
    { name: 'Hak Ja Han Moon', role: 'Leiterin der Familienföderation für Weltfrieden und Vereinigung' },
  ],
  newPeople: [
    {
      id: 'desmond-ford',
      name: 'Desmond Ford',
      years: '1929–2019',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Adventistischer Theologe (Avondale College, Australien; Pacific Union College, USA)',
      fields: ['Hebräerbrief', 'Danielauslegung', 'Adventistische Theologie'],
      bio: 'Australischer Theologe der Siebenten-Tags-Adventisten, der 1979 die exegetische Grundlage der Lehre vom Untersuchungsgericht (1844) öffentlich in Frage stellte. Nach der Konferenz von Glacier View (1980) wurde ihm die Beglaubigung als Prediger entzogen; er wirkte danach mit einem eigenen Dienst weiter und betonte die Rechtfertigung aus Gnade.',
      keyWorks: ['Daniel 8:14, the Day of Atonement, and the Investigative Judgment (1980)'],
      caveat: 'Ford blieb in seinem Selbstverständnis Adventist; er wird hier als Kritiker einer adventistischen Sonderlehre von innen zitiert.',
    },
    {
      id: 'kurt-hutten',
      name: 'Kurt Hutten',
      years: '1901–1979',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Evangelischer Theologe, Leiter der Evangelischen Zentralstelle für Weltanschauungsfragen (Stuttgart)',
      fields: ['Sondergemeinschaften', 'Weltanschauungsfragen', 'Kirchenkunde'],
      bio: 'Württembergischer Theologe und Publizist, der als Leiter der Evangelischen Zentralstelle für Weltanschauungsfragen die Sondergemeinschaften im deutschsprachigen Raum gründlich und um Fairness bemüht beschrieb. Sein Handbuch wurde über Jahrzehnte immer wieder neu aufgelegt und gilt als Standardwerk.',
      keyWorks: ['Seher, Grübler, Enthusiasten. Sekten und religiöse Sondergemeinschaften der Gegenwart (1950, zahlreiche Neuauflagen)'],
    },
  ],
  claims: [neuapostolischeKirche, adventistenEllenWhite, christlicheWissenschaft, scientology, vereinigungskirche],
};

export default topic;
