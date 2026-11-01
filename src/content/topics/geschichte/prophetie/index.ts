import type { Topic } from '../../../schema.ts';
import danielSpaetdatierung from './daniel-spaetdatierung.ts';
import prophezeiungenVage from './prophezeiungen-vage.ts';
import jesusInszenierteErfuellung from './jesus-inszenierte-erfuellung.ts';
import wiederkunftFalscheProphetie from './wiederkunft-falsche-prophetie.ts';

const topic: Topic = {
  id: 'prophetie',
  category: 'geschichte',
  group: 'Prophetie',
  order: 1,
  title: `Prophetie`,
  subtitle: `Daniel, messianische Weissagungen, inszenierte Erfüllung, Wiederkunft`,
  icon: 'telescope',
  overview: `Der Beweis aus der Prophetie ist eines der ältesten Argumente der Kirche: Jesus selbst legte den Emmausjüngern „Mose und alle Propheten" aus (Lk 24,27), Justin der Märtyrer, Irenäus, Athanasius und Eusebius bauten darauf ganze Apologien. Die moderne Kritik setzt an drei Stellen an: **Datierung** (Daniel sei nach den Ereignissen geschrieben, Jes 40–55 im Exil), **Auslegung** (die Evangelisten hätten Texte aus dem Zusammenhang gerissen) und **Erfüllung** (Jesus habe inszeniert oder sich selbst geirrt, etwa beim Zeitpunkt seiner Wiederkunft).

Wer hier bestehen will, braucht Ehrlichkeit und Unterscheidungsvermögen. Nicht jedes „damit erfüllt würde" ist eine Vorhersage – vieles ist Typologie, eine Lesart, die gerade der alexandrinischen Tradition vertraut ist. Die starken Fälle sind die, die schon das Judentum vor Jesus messianisch las und die konkrete Inhalte haben: Bethlehem (Mi 5,1), der leidende Knecht (Jes 53, vorchristlich in Qumran bezeugt), das Zeitfenster vor der Zerstörung des Tempels (Dan 9). Schwache Fälle (Tyrus, Kyrus, lange Wahrscheinlichkeitsrechnungen) lässt man besser beiseite.

Die Wiederkunftsfrage berührt die Christologie: Wenn Jesus „Tag und Stunde" nicht kannte (Mk 13,32), spricht er nach der Lehre des hl. Athanasius und des hl. Kyrill gemäß seiner Menschheit – der eine Christus, ohne Vermischung und ohne Trennung.`,
  strategy: `**Reihenfolge im Gespräch:**
1. **Vorannahmen offenlegen:** Viele Spätdatierungen (Daniel, Jesaja) beginnen mit dem Prinzip „echte Vorhersage gibt es nicht". Frage freundlich, ob das ein Befund oder eine Voraussetzung ist.
2. **Kategorien unterscheiden:** direkte Vorhersage – Typologie – Anklang. Gib offen zu, dass Mt 2,15 Typologie ist. Das schafft Vertrauen für die starken Fälle.
3. **Mit den robusten Fällen arbeiten:** Jes 53 (Qumran), Mi 5,1 (Targum, Joh 7,42), Dan 9 (Zeitfenster vor 70 n. Chr.) – und das „Restprophetie-Argument": Selbst bei einer Datierung Daniels um 165 v. Chr. bleiben Rom, der Tod des Gesalbten und die Zerstörung des Tempels als spätere Ereignisse.
4. **Kontext lesen:** Bei Mk 9,1 und 13,30 immer den nächsten bzw. übernächsten Vers zeigen (Verklärung; „niemand weiß den Tag").
5. **Nicht steuerbare Elemente nennen:** Geburtsort, Abstammung, römische Hinrichtung, Losen um die Kleider, Zeitpunkt.

**Fallen:** keine exakten Datumsrechnungen auf den Tag genau; keine Liste mit „300 Prophezeiungen"; Lewis' „peinlichster Vers" nicht verschweigen; Tyrus nicht als Beweis verwenden.`,
  keyOpponents: [
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, UNC Chapel Hill', work: 'Jesus: Apocalyptic Prophet of the New Millennium (1999)' },
    { name: 'John J. Collins', role: 'Alttestamentler, Yale', work: 'Daniel (Hermeneia, 1993)' },
    { name: 'Tovia Singer', role: 'Rabbiner, Outreach Judaism', work: 'Let\'s Get Biblical' },
    { name: 'Richard Carrier', role: 'Althistoriker, Mythizist', work: 'On the Historicity of Jesus (2014)' },
    { name: 'Dan McClellan', role: 'Bibelwissenschaftler, Wissenschaftskommunikator', work: 'Data Over Dogma' },
  ],
  claims: [danielSpaetdatierung, prophezeiungenVage, jesusInszenierteErfuellung, wiederkunftFalscheProphetie],
};

export default topic;
