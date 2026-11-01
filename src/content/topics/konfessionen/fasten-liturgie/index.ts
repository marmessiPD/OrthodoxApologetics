import type { Topic } from '../../../schema.ts';
import fastenGesetzlichkeit from './fasten-gesetzlichkeit.ts';
import liturgieToteRituale from './liturgie-tote-rituale.ts';

const topic: Topic = {
  id: 'fasten-liturgie',
  category: 'konfessionen',
  group: 'Protestantismus',
  order: 5,
  title: `Fasten, Liturgie und Frömmigkeit`,
  subtitle: `Fastenzeiten, Agpeya, Liturgie, Weihrauch und Kreuzzeichen`,
  icon: 'flame',
  overview: `Die koptische Frömmigkeit ist körperlich und rhythmisch: rund 200 Fastentage im Jahr, das Stundengebet der Agpeya, die stundenlange Liturgie mit Weihrauch, Gesang und Kreuzzeichen. Für viele evangelikale und pfingstliche Christen wirkt das fremd – wie „Gesetzlichkeit" und „tote Rituale" im Gegensatz zu einer freien, spontanen, „vom Geist geleiteten" Frömmigkeit. Die Zürcher Reformation begann 1522 sogar mit einem demonstrativen Wurstessen in der Fastenzeit.

Dabei ist der Protestantismus auch hier nicht einheitlich: Luther nannte das Fasten „eine feine äußerliche Zucht" und empfahl das Kreuzzeichen; Calvin empfahl öffentliches und privates Fasten; John Wesley fastete jeden Mittwoch und Freitag; die Anglikaner beten täglich das Stundengebet. Die Ablehnung ist vor allem eine Haltung des modernen freikirchlichen Evangelikalismus.

Die koptische Antwort ist biblisch und historisch: Jesus setzt das Fasten voraus („*wenn* ihr fastet", Mt 6,16; „dann werden sie fasten", Mt 9,15), die Apostel fasteten und beteten zu festen Stunden (Apg 3,1; 13,2–3), die Didache (um 100) ordnet Fasten am Mittwoch und Freitag und dreimaliges tägliches Gebet an, und der Gottesdienst im Himmel ist voller Liturgie (Offb 4–5; 8). Formen werden nicht durch ihr Dasein tot, sondern durch ein abwesendes Herz – das gilt für jede Gemeinde.`,
  strategy: `**1. Gemeinsamkeit suchen:** Viele Evangelikale fasten privat oder bei besonderen Anlässen und haben feste „Stille Zeiten". Knüpfe daran an: „Du hast also auch feste Zeiten mit Gott – warum sollte die ganze Gemeinde das nicht gemeinsam tun?"

**2. Mit Jesu Worten beginnen:** Mt 6,16 („wenn ihr fastet"), Mt 9,15 („dann werden sie fasten"), Lk 11,2 („wenn ihr betet, so sprecht"), Mt 26,44 (dreimal dieselben Worte).

**3. Die Gegenstellen im Zusammenhang erklären:** Kol 2 und 1 Tim 4 richten sich gegen die Lehre, Speisen seien unrein; Lk 18,12 verurteilt den Stolz, nicht das Fasten; Joh 4,24 handelt vom Ort, nicht von der Form; Mt 6,7 vom heidnischen Wortgeklingel.

**4. Den Himmel zeigen:** Offb 4–5 und 8 – Gewänder, Altar, Weihrauch, Niederwerfungen, Wiederholung. Wer das „tot" nennt, nennt den Himmel tot.

**5. Reformatorische Zeugen nennen:** Luthers Katechismus (Fasten als „feine äußerliche Zucht", Kreuzzeichen am Morgen), Calvin, Wesley, das anglikanische Stundengebet.

**Fallen:**
- Gib ehrlich zu, dass frühe Christen Weihrauch mieden und dass die Sprache der Liturgie für viele ein echtes Hindernis ist.
- Benutze Mt 17,21 und 1 Kor 7,5 nicht als Fastenbelege (textkritisch unsicher).
- Rechne nie die eigene Fastenleistung vor; das bestätigt das Vorurteil der Gesetzlichkeit.
- Respektiere freie Gebetsformen – auch die koptische Kirche kennt und schätzt das freie Gebet.`,
  keyOpponents: [
    { name: 'Huldrych Zwingli', role: 'Reformator in Zürich (1484–1531)', work: 'Von Erkiesen und Freiheit der Speisen (1522)' },
    { name: 'Frank Viola / George Barna', role: 'Hauskirchenbewegung', work: 'Pagan Christianity? (2008)' },
    { name: 'John MacArthur', role: 'Pastor, Grace Community Church', work: 'Predigten gegen Ritualismus und Werkfrömmigkeit' },
    { name: 'Westminster-Bekenntnis', role: 'Reformiertes Bekenntnis (1647)', work: 'Kap. 21 – Regulatives Prinzip des Gottesdienstes' },
  ],
  claims: [fastenGesetzlichkeit, liturgieToteRituale],
};

export default topic;
