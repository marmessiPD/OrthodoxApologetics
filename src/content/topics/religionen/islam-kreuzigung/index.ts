import type { Topic } from '../../../schema.ts';
import nichtGekreuzigt4157 from './nicht-gekreuzigt-4-157.ts';
import ersatztheorieTaeuschung from './ersatztheorie-taeuschung.ts';
import niemandTraegtLast from './niemand-traegt-last.ts';
import gottKannEinfachVergeben from './gott-kann-einfach-vergeben.ts';
import keineErbsuendeFitra from './keine-erbsuende-fitra.ts';

const topic: Topic = {
  id: 'islam-kreuzigung',
  category: 'religionen',
  group: 'Islam',
  order: 6,
  title: `Kreuz und Erlösung`,
  subtitle: `Wurde Jesus gekreuzigt – und warum musste er sterben?`,
  icon: 'cross',
  overview: `Ein einziger Koranvers trennt Islam und Christentum an ihrem tiefsten Punkt: „Sie haben ihn nicht getötet und sie haben ihn nicht gekreuzigt, sondern es erschien ihnen nur so" (4:157). Für Christen ist der Kreuzestod Christi die Mitte des Evangeliums (1 Kor 15,3), für die Mehrheit der Muslime ein Irrtum, den Gott durch eine Täuschung herbeiführte: Ein anderer sei an Jesu Stelle gestorben, Jesus selbst lebendig zu Gott erhoben worden (4:158).

Die Debatte hat zwei Ebenen. **Historisch**: Die Kreuzigung unter Pontius Pilatus gehört zu den bestbelegten Ereignissen der Antike; selbst skeptische Forscher wie Crossan, Lüdemann und Ehrman halten sie für sicher. Die Bestreitung erscheint 600 Jahre später, ohne Quelle – und die islamische Tradition ist sich über die Deutung von 4:157, 3:55 (*mutawaffīka*) und 19:33 selbst uneinig. **Theologisch**: Muslime fragen, warum Gott nicht einfach vergeben könne, warum ein Unschuldiger für Schuldige leiden solle (6:164) und ob es überhaupt eine Erbsünde gebe (Fitra).

Die koptisch-orthodoxe Antwort stützt sich auf **Athanasius' De Incarnatione**: Das Problem des Menschen ist nicht nur Schuld, sondern Tod und Verderbnis; Reue allein heilt die Natur nicht. Der Logos selbst nahm einen sterblichen Leib an, gab ihn für alle in den Tod und erneuerte die Menschheit durch seine Auferstehung – „er wurde Mensch, damit wir vergöttlicht würden".`,
  strategy: `**Reihenfolge im Gespräch:**
1. **Historie zuerst** (★ \`nicht-gekreuzigt-4-157\`): Frage, welche Quelle aus dem 1. oder 2. Jahrhundert eine Ersatzkreuzigung bezeugt. Stelle 1 Kor 15,3–5 (früh), Tacitus und Josephus (feindlich/neutral) und das Urteil skeptischer Forscher dagegen.
2. **Das Täuschungsdilemma** (\`ersatztheorie-taeuschung\`): Wer hat den Schein erzeugt? Gott hätte Maria, die Jünger und Jahrhunderte von Christen getäuscht. Verbinde dies mit 61:14 und 3:55 (Verweis auf das Jünger-Dilemma).
3. **Erst danach die Theologie:** Warum das Kreuz? Athanasius' „göttliches Dilemma" (Güte, Wahrhaftigkeit, Ohnmacht der Reue) – und dass Gott selbst den Preis trägt.
4. **Stellvertretung:** 6:164 und Ez 18 meinen Zwangshaftung; das Kreuz ist freiwillige Selbsthingabe Gottes. Der Koran selbst kennt Auslösung (37:107).
5. **Erbsünde vorsichtig:** Die koptische Lehre betont das Erbe der Folgen (Tod, Verderbnis, Neigung), nicht eine persönliche Schuld des Säuglings. Die islamischen Quellen (2:36–38; Bukhari 3431; 16:61) kennen ähnliche Folgen.

**Fallen:**
- Nicht behaupten, „alle Muslime" lehrten eine Ersatzperson – Ahmadiyya, Modernisten und einzelne Gelehrte denken anders.
- Das Testimonium Flavianum nur im Kern verwenden; die Talmudstelle nicht überbewerten.
- Kein Zerrbild eines zornigen Vaters, der seinen Sohn bestraft – das ist nicht die koptische Sühnelehre.
- Hadithe wie Sahih Muslim 2767 nur mit der muslimischen Deutung zitieren.`,
  keyOpponents: [
    { name: 'Ahmed Deedat', role: 'Islamischer Apologet (1918–2005), „Crucifixion or Cruci-fiction?"' },
    { name: 'Shabir Ally', role: 'Islamischer Apologet; Debatten mit Craig, Licona, Habermas' },
    { name: 'Hamza Andreas Tzortzis', role: 'Islamischer Apologet, „The Divine Reality"' },
    { name: 'Yasir Qadhi', role: 'Islamischer Gelehrter, Dallas' },
    { name: 'Ahmadiyya-Mission', role: 'Vertritt die Scheintod-These (Jesus überlebte das Kreuz)' },
  ],
  claims: [nichtGekreuzigt4157, ersatztheorieTaeuschung, niemandTraegtLast, gottKannEinfachVergeben, keineErbsuendeFitra],
};

export default topic;
