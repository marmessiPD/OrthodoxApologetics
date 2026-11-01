import type { Topic } from '../../../schema.ts';
import jesusSagteNieIchBinGott from './jesus-sagte-nie-ich-bin-gott.ts';
import jesusBeteteAssSchlief from './jesus-betete-ass-schlief.ts';
import vaterGroesserStundeUnbekannt from './vater-groesser-stunde-unbekannt.ts';
import sohnGottesHeisstDiener from './sohn-gottes-heisst-diener.ts';
import jesusNurEinProphet from './jesus-nur-ein-prophet.ts';

const topic: Topic = {
  id: 'islam-gottheit-christi',
  category: 'religionen',
  group: 'Islam',
  order: 5,
  title: `Die Gottheit Christi`,
  subtitle: `Hat Jesus beansprucht, Gott zu sein – und wer ist Jesus nach dem Koran?`,
  icon: 'crown',
  overview: `Für den Islam ist Jesus (ʿĪsā) einer der größten Propheten, vom Geist gestärkt, ohne Vater geboren, Wundertäter und kommender Zeichen der Stunde – aber „nur ein Diener Allahs" (19:30; 43:59). Die Behauptung, er sei Gott, gilt als der schwerste Irrtum der Christen (5:72). Muslimische Apologeten wie Ahmed Deedat, Zakir Naik und Shabir Ally haben daraus eine Reihe von Standard-Einwänden gemacht: Jesus habe nie „Ich bin Gott" gesagt; er habe gegessen, geschlafen und gebetet; er habe den Vater „größer" genannt und die Stunde nicht gekannt; „Sohn Gottes" heiße nur „gerechter Diener".

Diese Einwände sind nicht neu: Sie sind im Kern die Argumente des Arius aus dem 4. Jahrhundert, und die Väter von Alexandrien – **Athanasius** und **Kyrill** – haben sie ausführlich beantwortet. Die koptisch-orthodoxe Christologie („eine fleischgewordene Natur des Gott-Logos", ohne Vermischung und ohne Trennung) bietet dafür eine besonders klare Antwort: Es gibt nur **einen** Christus, den menschgewordenen Logos, der als Gott Wunder tut und als Mensch hungert, schläft und leidet.

Zugleich bietet der Koran selbst eine erstaunliche Brücke: Er nennt Jesus „Wort Allahs" und „Geist von Ihm" (4:171), sündlos (19:19), Schöpfer von Leben (3:49) und lebendig bei Gott (4:158). Die moderne Forschung (Hurtado, Bauckham) zeigt außerdem, dass die Anbetung Jesu nicht in Nizäa begann, sondern im frühesten jüdischen Christentum.`,
  strategy: `**Reihenfolge im Gespräch:**
1. **Die Formel-Forderung entschärfen** (★ \`jesus-sagte-nie-ich-bin-gott\`): Erkläre, warum „Ich bin Gott" für Juden „Ich bin der Vater" bedeutet hätte – und zeige dann, was Jesus tut und sagt: Sünden vergeben, „Ich bin" vor Abraham, Gottes Thron (Mk 14,62), Anbetung. Beginne mit **Markus**, damit der Einwand „Johannes ist spät" ins Leere läuft.
2. **Die Christologie klären**, sobald „aß, schlief, betete" kommt: ein Christus, wahrer Gott und wahrer Mensch. Nutze Gregor von Nazianz' Gegenüberstellungen – sie sind leicht zu merken.
3. **„Der Vater ist größer"** mit Phil 2,6–7 beantworten: Gleichheit des Wesens, Unterordnung in der Sendung.
4. **„Sohn Gottes"**: Zugestehen, dass der Begriff weit ist – dann Mk 12,6 und Mt 11,27 zeigen.
5. **Offensive Brücke** (\`jesus-nur-ein-prophet\`): Was sagt der Koran über Jesus, was über die anderen Propheten?

**Fallen:**
- Nicht behaupten, Jesus habe wörtlich „Ich bin Gott" gesagt.
- Nicht nestorianisch reden („Der Mensch Jesus betete, der Gott Jesus tat Wunder") – immer „derselbe Christus".
- Joh 10,30 nicht isoliert verwenden (Gegenargument Joh 17,21) – mit Kontext 10,28–33.
- Respekt bewahren: Muslime ehren Jesus aufrichtig. Knüpfe daran an, statt sie zu korrigieren.`,
  keyOpponents: [
    { name: 'Ahmed Deedat', role: 'Islamischer Apologet (1918–2005), IPCI Durban' },
    { name: 'Shabir Ally', role: 'Islamischer Apologet, Let the Quran Speak (Toronto)' },
    { name: 'Zakir Naik', role: 'Islamischer Prediger, Peace TV' },
    { name: 'Jamal Badawi', role: 'Islamischer Gelehrter, Halifax (Kanada)' },
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, UNC Chapel Hill – von Muslimen oft zitiert' },
  ],
  claims: [jesusSagteNieIchBinGott, jesusBeteteAssSchlief, vaterGroesserStundeUnbekannt, sohnGottesHeisstDiener, jesusNurEinProphet],
};

export default topic;
