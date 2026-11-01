import type { Topic } from '../../../schema.ts';
import jesusKommtAlsMuslim from './jesus-kommt-als-muslim.ts';
import mahdiDajjal from './mahdi-dajjal.ts';
import paradiesIslam from './paradies-islam.ts';

const topic: Topic = {
  id: 'islam-eschatologie',
  category: 'religionen',
  group: 'Islam',
  order: 13,
  title: `Endzeit und Paradies im Islam`,
  subtitle: `Die Wiederkunft Jesu als Muslim, Mahdi und Daddschal, das islamische Paradies – und die christliche Hoffnung auf den Gekreuzigten, der wiederkommt`,
  icon: 'sunset',
  overview: `Die islamische Eschatologie ist reich und farbig: Am Ende der Zeiten erscheint der **Mahdi**, ein Nachkomme des Propheten, der die Welt mit Gerechtigkeit erfüllt; der **Daddschal**, der einäugige Betrüger, verführt die Menschen; dann steigt **Jesus** in Damaskus herab, tötet den Daddschal, zerbricht das Kreuz, tötet das Schwein und schafft die Dschizya ab. Danach folgen Auferstehung, Gericht und die ewigen Wohnungen – das **Paradies** mit seinen Gärten, Flüssen und Gefährtinnen und, als höchste Gnade, der Schau Gottes. Prediger wie **Imran Hosein**, **Yasir Qadhi** und **Muhammad al-Arifi** präsentieren diese Szenarien oft als Beweis, dass der Prophet die Zukunft genau kannte.

Für Christen ist dieses Feld besonders interessant, weil die islamische Endzeit **auf Jesus zuläuft**: Nicht Mohammed kehrt zurück, sondern Jesus, der lebt; nicht der Mahdi besiegt den großen Verführer, sondern Jesus – mit dem Hauch seines Atems, wie es Jesaja 11,4 vom Messias sagt. Zugleich zeichnen die Hadithe ein Bild Jesu, das dem der ältesten Quellen widerspricht: Der Christus des Neuen Testaments kommt als Richter aller Völker, für alle sichtbar „wie der Blitz", und wird an seinen Kreuzeswunden erkannt (Offb 1,7).

Quellenkritisch gilt: Der Koran selbst erwähnt weder den Mahdi noch den Daddschal namentlich und ist über die Wiederkunft Jesu zurückhaltend; die ausgeführten Szenarien stammen aus Hadith-Sammlungen des 9. Jahrhunderts. Beim Paradies lohnt sich die ehrliche Frage nach der **Mitte**: Sind es die Gaben – oder der Geber? Die christliche Hoffnung ist leiblich und schöpfungsbejahend, aber ihr Herz ist Gott selbst: „Sie werden sein Angesicht sehen" (Offb 22,4).`,
  strategy: `**1. Gemeinsamkeit betonen.** Beide Religionen erwarten Jesus. Frag ehrlich: Warum erwartet der Islam am Ende nicht Mohammed, sondern Jesus?

**2. Quellen vergleichen.** Das Neue Testament stammt aus dem 1. Jahrhundert, die Hadith-Sammlungen aus dem 9. Jahrhundert. Wo sie sich widersprechen, wiegt historisch die frühere Quelle schwerer – ohne die islamische Hadith-Wissenschaft lächerlich zu machen.

**3. Die Spur zu Jesus verfolgen:**
- Der Wiederkommende trägt die Wunden des Kreuzes (Offb 1,7; Sach 12,10).
- Jesus besiegt den Verführer mit dem Hauch seines Mundes (Jes 11,4; 2 Thess 2,8 – und Muslim 2937).
- Jesus hat vor örtlichen „Hier ist er!"-Erscheinungen gewarnt (Mt 24,26–27).

**4. Beim Paradies:** Erst die eigene Hoffnung richtigstellen (Auferstehung des Leibes, neue Schöpfung, Festmahl), dann nach der Mitte fragen. Die Gottesschau als Gemeinsamkeit anerkennen.

**5. Typische Fallen:**
- Spott über „72 Jungfrauen" – nicht im Koran, der Haupthadith ist schwach.
- Muslime oder den Islam als „Antichrist" bezeichnen.
- Eigene Endzeitspekulationen (Daten, Nahostpolitik) ins Spiel bringen.
- Emotional reagieren, wenn vom „Zerbrechen des Kreuzes" die Rede ist. Ruhe ist dein Zeugnis.`,
  keyOpponents: [
    { name: 'Imran N. Hosein', role: 'Islamischer Eschatologie-Prediger aus Trinidad', work: 'Jerusalem in the Qur\'an (2002)' },
    { name: 'Yasir Qadhi', role: 'Islamischer Gelehrter, East Plano Islamic Center', work: 'Signs of the Day of Judgment; Vorträge über das Jenseits' },
    { name: 'Muhammad al-Arifi', role: 'Saudischer Prediger', work: 'Nihayat al-\'Alam (Das Ende der Welt), 2010' },
    { name: 'Omar Suleiman', role: 'Imam, Yaqeen Institute', work: 'Jannah: Home at Last' },
    { name: 'Ismail ibn Kathir', role: 'Klassischer Exeget (gest. 1373)', work: 'An-Nihaya fi l-Fitan wa-l-Malahim' },
    { name: 'Ibn Qayyim al-Dschauziyya', role: 'Klassischer Gelehrter (1292–1350)', work: 'Hadi al-Arwah ila Bilad al-Afrah' },
  ],
  claims: [jesusKommtAlsMuslim, mahdiDajjal, paradiesIslam],
};

export default topic;
