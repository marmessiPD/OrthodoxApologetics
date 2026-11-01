import type { Topic } from '../../../schema.ts';
import prophetWieMoseDtn18 from './prophet-wie-mose-dtn-18.ts';
import parakletIstMohammed from './paraklet-ist-mohammed.ts';
import weitereBibelstellenMohammed from './weitere-bibelstellen-mohammed.ts';
import mohammedWahrerProphet from './mohammed-wahrer-prophet.ts';
import paulusVerfaelschteJesusIslam from './paulus-verfaelschte-jesus-islam.ts';
import derselbeGott from './derselbe-gott.ts';

const topic: Topic = {
  id: 'islam-mohammed',
  category: 'religionen',
  group: 'Islam',
  order: 7,
  title: `Mohammed und die Bibel`,
  subtitle: `Wird Mohammed in der Bibel angekündigt – und besteht er die biblischen Prophetenkriterien?`,
  icon: 'user-search',
  overview: `Der Koran sagt, Juden und Christen fänden den Gesandten „bei sich in der Tora und im Evangelium aufgeschrieben" (7:157), und Jesus habe einen Gesandten namens „Ahmad" angekündigt (61:6). Daraus entstand schon früh eine eigene islamische Literaturgattung, die Bibelstellen auf Muhammad deutete – in der Moderne populär gemacht durch Ahmed Deedat und Zakir Naik: der „Prophet wie Mose" (Dtn 18), der Paraklet (Joh 14–16), *maḥᵃmaddîm* im Hohenlied, Paran bei Habakuk und im Deuteronomium.

Die christliche Antwort ist bemerkenswert alt: Schon **Johannes von Damaskus** (um 743) und **Timotheus I.** im Gespräch mit dem Kalifen al-Mahdi (781) haben diese Deutungen geprüft – mit großer Höflichkeit und ebenso großer Klarheit. Ihr Grundsatz gilt bis heute: Der Zusammenhang eines Textes entscheidet, wovon er spricht. Und wer die Bibel als Zeugin aufruft, muss sie ausreden lassen.

Die tiefere Frage ist die nach den **Kriterien**: Der Koran verweist selbst auf Tora und Evangelium als Maßstab (5:47; 10:94). Diese Schriften nennen Prüfsteine für Propheten (Dtn 13; 18; Gal 1,8; 1 Joh 4,1–3). Dazu kommen der islamische Vorwurf, Paulus habe die Lehre Jesu verfälscht, und die Frage, ob Christen und Muslime „denselben Gott" anbeten.`,
  strategy: `**Reihenfolge im Gespräch:**
1. **Kontext lesen** (\`prophet-wie-mose-dtn-18\`, \`paraklet-ist-mohammed\`, \`weitere-bibelstellen-mohammed\`): Lies jede Stelle gemeinsam mit dem Gesprächspartner im Zusammenhang – „aus deiner Mitte" (Dtn 18,15), „der Heilige Geist" (Joh 14,26), „Gott kam" (Hab 3,3). Lass den Text sprechen, statt zu dozieren.
2. **Die Kriterienfrage stellen** (★ \`mohammed-wahrer-prophet\`): Der Koran verweist auf Tora und Evangelium – was sagen sie über Propheten? Dtn 13,2–4 und 1 Joh 2,22–23 sind die Schlüsselstellen.
3. **Paulus-Vorwurf:** Gal 1,23 und Gal 2,9 – der Glaube war vor Paulus da, und die Apostel gaben ihm die Hand. Dann das Jünger-Dilemma (61:14; 3:55).
4. **„Derselbe Gott?"** differenziert beantworten: Bezug ja, Erkenntnis nein – und als Einladung formulieren.

**Ton und Fallen:**
- **Respekt vor Muhammad und den Muslimen** ist nicht verhandelbar. Keine Spottbilder, keine Herabsetzungen. Timotheus I. ist das Vorbild: würdigen, wo es möglich ist; klar bleiben, wo die Wahrheit es verlangt.
- Umstrittene Berichte (z. B. „satanische Verse") nie als Hauptargument, sondern mit der innerislamischen Debatte fair darstellen.
- Keine unhaltbaren Thesen verwenden („Allah war ein Mondgott", „Aorta-Argument" als K.-o.).
- Die eigenen schwachen Stellen kennen: „Brüder" kann verwandte Völker meinen (Dtn 2,4); *aḥmad* ist ein umstrittener Begriff; Christen haben Gewalt verübt.`,
  keyOpponents: [
    { name: 'Ahmed Deedat', role: 'Islamischer Apologet (1918–2005), „What the Bible Says about Muhammad"' },
    { name: 'Zakir Naik', role: 'Islamischer Prediger, Peace TV, „Muhammad in the Bible"' },
    { name: 'Shabir Ally', role: 'Islamischer Apologet, Let the Quran Speak' },
    { name: 'Yasir Qadhi', role: 'Islamischer Gelehrter, Vortragsreihe zur Sira' },
    { name: 'Hamza Andreas Tzortzis', role: 'Islamischer Apologet, „The Divine Reality"' },
    { name: 'Jamal Badawi', role: 'Islamischer Gelehrter, „Muhammad in the Bible"' },
  ],
  claims: [prophetWieMoseDtn18, parakletIstMohammed, weitereBibelstellenMohammed, mohammedWahrerProphet, paulusVerfaelschteJesusIslam, derselbeGott],
};

export default topic;
