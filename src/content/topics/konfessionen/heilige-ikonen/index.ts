import type { Topic } from '../../../schema.ts';
import fuerbitteDerHeiligen from './fuerbitte-der-heiligen.ts';
import mariaWeitereKinder from './maria-weitere-kinder.ts';
import marienverehrungGoetzendienst from './marienverehrung-goetzendienst.ts';
import ikonenGoetzenbilder from './ikonen-goetzenbilder.ts';
import gebetFuerVerstorbene from './gebet-fuer-verstorbene.ts';

const topic: Topic = {
  id: 'heilige-ikonen',
  category: 'konfessionen',
  group: 'Protestantismus',
  order: 4,
  title: `Theotokos, Heilige und Ikonen`,
  subtitle: `Fürbitte der Heiligen, die Gottesgebärerin, Ikonen und das Gebet für die Entschlafenen`,
  icon: 'image',
  overview: `Wer eine koptische Kirche betritt, sieht die Ikonostase mit Christus, der Gottesgebärerin, den Aposteln und Märtyrern, riecht den Weihrauch und hört Hymnen an die Theotokos. Für viele Protestanten wirkt das wie ein Rückfall ins Heidentum: Gebete an Tote, Verehrung einer Frau, Niederwerfungen vor Bildern. Die schärfsten Kritiker – John MacArthur, James White – sprechen offen von Götzendienst; der gebildetere Gavin Ortlund argumentiert historisch, dass die Anrufung der Heiligen und die Ikonenverehrung erst spät entstanden und von frühen Stimmen (Synode von Elvira, Epiphanius, Eusebius) abgelehnt wurden.

Die koptische Antwort beginnt mit Christus: Weil der Logos wirklich Mensch wurde, ist Maria die **Gottesgebärerin** (Ephesus 431 unter dem hl. Kyrill), kann Christus **abgebildet** werden (Kol 1,15) und sind die Heiligen in ihm **lebendig** (Lk 20,38) und mit uns im einen Leib verbunden. Darum bitten wir sie um ihre Fürbitte, ehren ihre Ikonen und beten für die Entschlafenen – ohne sie anzubeten, ohne Fegefeuer und ohne unbefleckte Empfängnis. Die Unterscheidung von Anbetung (allein Gott) und Verehrung ist schon im Martyrium des Polykarp (um 156) bezeugt.

Ein wichtiger Hinweis: Die koptische Kirche erkennt nur drei ökumenische Konzilien an, also **nicht** Nizäa II (787). Ihre Ikonenverehrung stammt aus ihrer eigenen Überlieferung – von Bawit und den Fayum-Porträts bis zur Myronweihe der Ikonen. Und manches, was Protestanten an Rom kritisieren (Fegefeuer, unbefleckte Empfängnis, Mariendogmen von 1854/1950), lehnt die koptische Kirche ebenfalls ab.`,
  strategy: `**1. Mit Christus beginnen, nicht mit Maria.** Frage: „Ist Jesus Gott? Ist Maria seine Mutter?" – Daraus folgt Theotokos. Frage: „Ist Christus sichtbar Mensch geworden?" – Daraus folgt die Ikone. Frage: „Sind die Heiligen lebendig in Christus?" – Daraus folgt die Fürbitte.

**2. Die Unterscheidung Anbetung – Verehrung früh klären.** Beispiele aus der Schrift: Salomo verneigt sich vor Batseba (1 Kön 2,19), Jakob vor Esau (Gen 33,3), Offb 3,9. Und das Martyrium des Polykarp: „Christus beten wir an, die Märtyrer lieben wir."

**3. Die Schlüsselstellen im Zusammenhang lesen:** 1 Tim 2,1–5 (Fürbitte *wegen* des einen Mittlers); Ex 25,18 neben Ex 20,4; Mk 6,3 neben Mk 15,40; Lk 11,28 neben Lk 1,38.45.48; 2 Tim 1,18.

**4. Reformatorische Zugeständnisse nutzen:** Luther nannte Maria „Gottes Mutter" und bekannte ihre immerwährende Jungfräulichkeit (wie Zwingli und Wesley); er hielt das Gebet für Verstorbene für erlaubt; die lutherische Apologie gesteht zu, dass die Heiligen für die Kirche beten; Luther verteidigte Bilder gegen die Bilderstürmer.

**5. Ehrlich bleiben:** Ausdrückliche Anrufungen der Heiligen sind ab dem 3. Jahrhundert belegt; es gab bildkritische Stimmen (Elvira, Epiphanius, Eusebius); die Aufnahme Mariens ist erst ab dem 5./6. Jahrhundert erzählt; Volksfrömmigkeit kann entgleisen.

**Fallen:**
- Keine römischen Sonderlehren verteidigen (Fegefeuer, unbefleckte Empfängnis, Nizäa II als koptische Autorität).
- Keine Wundergeschichten als Hauptbeweis.
- Ez 44,2 und andere Typologien nicht als wörtliche Beweise ausgeben.
- Respekt zeigen: Für viele Protestanten ist die Angst vor Götzendienst Ausdruck echter Liebe zu Gottes Ehre.`,
  keyOpponents: [
    { name: 'James R. White', role: 'Reformierter Baptist, Alpha and Omega Ministries', work: 'Mary – Another Redeemer? (1998)' },
    { name: 'Gavin Ortlund', role: 'Baptistischer Theologe, „Truth Unites"; historische Kritik an Ikonen- und Heiligenverehrung', work: 'What It Means to Be Protestant (2024)' },
    { name: 'John MacArthur', role: 'Pastor, Grace Community Church', work: 'Predigten gegen Marien-, Heiligen- und Bilderverehrung' },
    { name: 'Wayne Grudem', role: 'Systematischer Theologe', work: 'Systematic Theology (1994)' },
    { name: 'Johannes Calvin', role: 'Reformator (1509–1564)', work: 'Institutio I,11; III,5; III,20 (1559)' },
    { name: 'John P. Meier', role: 'Katholischer Neutestamentler (historisch argumentierend)', work: 'A Marginal Jew, Bd. 1 (1991) – zu den Brüdern Jesu' },
  ],
  claims: [fuerbitteDerHeiligen, mariaWeitereKinder, marienverehrungGoetzendienst, ikonenGoetzenbilder, gebetFuerVerstorbene],
};

export default topic;
