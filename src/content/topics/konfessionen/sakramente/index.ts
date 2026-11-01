import type { Topic } from '../../../schema.ts';
import abendmahlSymbolisch from './abendmahl-symbolisch.ts';
import taufeNurSymbol from './taufe-nur-symbol-keine-kindertaufe.ts';
import beichteUnbiblisch from './beichte-unbiblisch.ts';
import keinBesonderesPriestertum from './kein-besonderes-priestertum.ts';
import myronKrankensalbung from './myron-krankensalbung-erfunden.ts';

const topic: Topic = {
  id: 'sakramente',
  category: 'konfessionen',
  group: 'Protestantismus',
  order: 3,
  title: `Die heiligen Sakramente`,
  subtitle: `Eucharistie, Taufe, Beichte, Priestertum, Myron und Krankensalbung`,
  icon: 'wine',
  overview: `Die koptisch-orthodoxe Kirche lebt aus sieben Sakramenten: Taufe, Myronsalbung, Eucharistie, Buße und Beichte, Krankensalbung, Ehe und Priestertum. In ihnen handelt Christus selbst durch sichtbare Zeichen und den Dienst der Kirche – nach der Logik der Menschwerdung, in der Gott Materie annahm, um den ganzen Menschen zu heilen. Für viele Protestanten, besonders Baptisten, Pfingstler und Freikirchler, sind dagegen nur zwei „Verordnungen" geblieben, und beide gelten als Symbole: Das Abendmahl ist ein Erinnerungsmahl, die Taufe ein öffentliches Bekenntnis des bereits Gläubigen.

Wichtig für das Gespräch: Der Protestantismus ist hier nicht einheitlich. **Luther** hielt an der realen Gegenwart Christi im Abendmahl, an der Kindertaufe und an der Privatbeichte fest; das Augsburger Bekenntnis verlangt einen „ordentlichen Beruf" für Predigt und Sakrament. **Calvin** lehrte eine geistliche Gegenwart und taufte Kinder. Erst **Zwingli** und die **Täufer** vertraten die rein symbolische Sicht und die Ablehnung der Kindertaufe – die heute in weiten Teilen des Evangelikalismus vorherrscht (John MacArthur, Wayne Grudem, Baptist Faith and Message).

Die orthodoxe Antwort stützt sich auf drei Säulen: die Schrift (Joh 6; 1 Kor 10–11; Joh 3,5; Joh 20,23; Jak 5,14), die einmütige Praxis der frühen Kirche (Didache, Ignatius, Justin, Irenäus, Kyrill von Jerusalem) und das Zeugnis der koptischen Liturgie, die seit Jahrhunderten bekennt: „Ich glaube, ich glaube, ich glaube … dass dies der lebendigmachende Leib ist." Selbst protestantische Historiker wie J. N. D. Kelly bestätigen, dass die frühe Eucharistielehre „fraglos realistisch" war.`,
  strategy: `**1. Mit der Eucharistie beginnen.** Sie ist das stärkste Thema: Joh 6 (Jesus lässt die Jünger lieber gehen, als die „harte Rede" zurückzunehmen), 1 Kor 11,27–30 (Schuld an Leib und Blut, Krankheit und Tod) und Ignatius (um 110) sind schwer zu entkräften.

**2. Den Protestantismus differenzieren.** Frag: „Bist du eher lutherisch, reformiert oder baptistisch?" Dann zeige, dass Luther selbst Realpräsenz, Kindertaufe und Beichte vertrat – die rein symbolische Sicht ist eine Minderheitsposition der Reformationszeit.

**3. Die Logik der Menschwerdung erklären.** Gott wirkt durch Sichtbares: Wasser, Brot, Wein, Öl, Handauflegung, menschliche Worte. Wer die Sakramente „nur symbolisch" nennt, trennt Geist und Materie – genau das hat die Menschwerdung überwunden.

**4. Die Bibelstellen in ihrem Zusammenhang lesen:** Joh 6,63 („das Fleisch", nicht „mein Fleisch"); Jak 5,14–16 (die Presbyter!); 1 Petr 2,9 mit Ex 19,6; Apg 8,14–17.

**5. Ehrlich zugestehen**, was stimmt: Das NT nennt Amtsträger nicht *hiereus*; es enthält keinen ausdrücklichen Bericht einer Säuglingstaufe; die Siebenzahl der Sakramente ist eine spätere Zusammenfassung; die Form der Beichte hat sich entwickelt; die „Letzte Ölung" war eine westliche Verengung.

**Fallen:**
- Keine lateinische Scholastik („Transsubstantiation", „Substanz und Akzidenzien") – die koptische Kirche bekennt das Geheimnis mit den Vätern.
- Keine Mirakelgeschichten (blutende Hostien) als Beweis.
- Nicht sagen, ungetauft verstorbene Kinder seien verloren.
- Geschwisterlich bleiben: Viele Evangelikale empfangen das Abendmahl mit tiefer Ehrfurcht und Liebe zu Christus.`,
  keyOpponents: [
    { name: 'Huldrych Zwingli', role: 'Reformator in Zürich (1484–1531)', work: 'Kommentar über die wahre und falsche Religion (1525)' },
    { name: 'John MacArthur', role: 'Pastor, Grace Community Church; Cessationist', work: 'Predigten zu Joh 6, 1 Kor 11, Taufe' },
    { name: 'Wayne Grudem', role: 'Systematischer Theologe, Phoenix Seminary', work: 'Systematic Theology (1994), Kap. 48–50' },
    { name: 'James R. White', role: 'Reformierter Baptist, Alpha and Omega Ministries', work: 'The Roman Catholic Controversy (1996)' },
    { name: 'Kurt Aland', role: 'Neutestamentler, Münster (1915–1994)', work: 'Die Säuglingstaufe im Neuen Testament und in der alten Kirche (1961)' },
    { name: 'Johannes Calvin', role: 'Reformator in Genf (1509–1564)', work: 'Institutio IV (1559)' },
  ],
  claims: [abendmahlSymbolisch, taufeNurSymbol, beichteUnbiblisch, keinBesonderesPriestertum, myronKrankensalbung],
  newPeople: [
    {
      id: 'joachim-jeremias',
      name: 'Joachim Jeremias',
      years: '1900–1979',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Neutestamentler (lutherisch), Göttingen',
      fields: ['Neues Testament', 'Abendmahl', 'Kindertaufe', 'Jüdischer Hintergrund'],
      bio: 'Einer der bedeutendsten Neutestamentler des 20. Jahrhunderts, aufgewachsen in Jerusalem. In „Die Abendmahlsworte Jesu" (1935) und „Die Kindertaufe in den ersten vier Jahrhunderten" (1958) untersuchte er den jüdischen Hintergrund von Abendmahl und Taufe; seine Debatte mit Kurt Aland über die Kindertaufe gilt als klassisch.',
      keyWorks: ['Die Abendmahlsworte Jesu (1935)', 'Die Kindertaufe in den ersten vier Jahrhunderten (1958)'],
      caveat: 'Lutherischer Exeget; seine These von der apostolischen Herkunft der Kindertaufe wurde von Kurt Aland bestritten.',
    },
    {
      id: 'schmemann',
      name: 'Alexander Schmemann',
      years: '1921–1983',
      era: 'modern',
      tradition: 'orthodox',
      title: 'Priester und Liturgiewissenschaftler, Dekan des St. Vladimir\'s Seminary (New York)',
      fields: ['Liturgie', 'Sakramente', 'Eucharistie', 'Fasten'],
      bio: 'Einflussreichster orthodoxer Liturgietheologe des 20. Jahrhunderts. Er zeigte, dass die Liturgie keine Andachtsform neben dem Glauben ist, sondern sein Ausdruck und seine Quelle, und kritisierte sowohl scholastische als auch rein symbolische Verkürzungen des Sakraments.',
      keyWorks: ['Für das Leben der Welt (For the Life of the World, 1963)', 'Great Lent (1969)', 'Of Water and the Spirit (1974)', 'The Eucharist (1988)'],
      caveat: 'Östlich-orthodox (chalcedonensisch).',
    },
  ],
};

export default topic;
