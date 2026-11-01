import type { Topic } from '../../../schema.ts';
import islamBefreiteFrau from './islam-befreite-frau.ts';
import aischaAlter from './aischa-alter.ts';
import polygamieGerecht from './polygamie-gerecht.ts';
import vers434 from './vers-4-34.ts';

const topic: Topic = {
  id: 'islam-frauen-familie',
  category: 'religionen',
  group: 'Islam',
  order: 10,
  title: `Frauen, Ehe und Familie im Islam`,
  subtitle: `Hat der Islam die Frau befreit – und wie verhält sich seine Ehe- und Familienordnung zum Evangelium?`,
  icon: 'users',
  overview: `Muslimische Apologeten betonen, der Islam habe die Frau vor 1.400 Jahren befreit: Er verbot die Tötung neugeborener Mädchen, gab Frauen ein Erbrecht, machte die Brautgabe zu ihrem Eigentum und stellte Mann und Frau vor Gott gleich (33:35). Kritiker – darunter auch muslimische Feministinnen – verweisen dagegen auf Verse und Hadithe, die eine dauerhafte Rangordnung festschreiben: den halben Erbteil (4:11), das halbe Zeugnis (2:282), das Züchtigungsrecht des Mannes (4:34), die Mehrehe mit bis zu vier Frauen und Sklavinnen (4:3) sowie die Ehe des Propheten mit der jungen Aischa (Bukhari 5133).

Die Debatte bewegt sich zwischen drei Positionen: der **traditionellen**, die die Ordnung als komplementär und gerecht verteidigt (Jamal Badawi, Yasir Qadhi); der **kontextualistischen**, die vieles als Fortschritt im 7. Jahrhundert erklärt (Jonathan Brown); und der **reformerisch-feministischen**, die patriarchale Auslegung zurückweist und einzelne Verse neu übersetzt (Amina Wadud, Asma Barlas, Laleh Bakhtiar).

Die christliche Antwort sollte die echten Verbesserungen gegenüber manchen vorislamischen Praktiken anerkennen und die eigene Geschichte nicht beschönigen. Ihr Kern ist positiv: Die Bibel begründet die Würde der Frau in der Gottebenbildlichkeit (Gen 1,27), Jesus machte Frauen zu den ersten Zeuginnen der Auferstehung, Paulus lehrt die Gleichheit in Christus (Gal 3,28) und die Gegenseitigkeit der Ehe (1 Kor 7,4), und die Ehe ist Abbild der hingebenden Liebe Christi zu seiner *einen* Kirche (Eph 5,25). In der orthodoxen Kirche ist der höchstverehrte Mensch eine Frau – die Gottesgebärerin.`,
  strategy: `**Reihenfolge im Gespräch:**
1. **Würdigen, was zu würdigen ist** („islam-befreite-frau"): Verbot der Tötung von Mädchen, Erbanteil, Brautgabe. Wer das leugnet, verliert sofort an Glaubwürdigkeit.
2. **Nach den Texten fragen, nicht nach Stereotypen:** 4:11, 2:282 mit Bukhari 2658, 4:34 mit Muslim 1218. Lass dein Gegenüber die Verse selbst lesen.
3. **Das Vorbild-Dilemma** („aischa-alter", „polygamie-gerecht"): Nicht „Mohammed war schlecht", sondern: „Ist das Vorbild für alle Zeiten?" Biete die Wahl an: zeitlos oder zeitgebunden.
4. **Die Sprachfrage zu 4:34** („vers-4-34") ruhig klären: Konstruktion von *ḍaraba*, Aufbau des Verses, Auslegung des Propheten.
5. **Das christliche Gegenbild zeigen:** Eph 5,25–29, 1 Petr 3,7, Gal 3,28, Jesus und die Frauen – als Einladung, nicht als Triumph.

**Ton und Fallen:**
- **Keine Schimpfwörter**, besonders nicht beim Thema Aischa. Sie verletzen Muslime, die ihren Propheten lieben, und beenden jedes Gespräch.
- Muslimische Frauen nicht als willenlose Opfer darstellen; viele leben ihren Glauben überzeugt.
- Die eigene Geschichte zugeben (Züchtigungsrecht in christlichen Ländern, frühe Ehen im Mittelalter, harte Väterworte) – und zeigen, dass Reform im Christentum *mit* dem Neuen Testament gegen die Praxis ging.
- Seelsorglich denken: Wenn eine Frau von Gewalt betroffen ist, geht ihre Sicherheit jeder Debatte vor.`,
  keyOpponents: [
    { name: 'Jamal Badawi', role: 'Islamischer Gelehrter, „Gender Equity in Islam"' },
    { name: 'Jonathan A. C. Brown', role: 'Islamwissenschaftler, Georgetown University' },
    { name: 'Yasir Qadhi', role: 'Islamischer Gelehrter, Dallas' },
    { name: 'Zakir Naik', role: 'Islamischer Prediger, Peace TV' },
    { name: 'Asma Barlas', role: 'Politikwissenschaftlerin, „Believing Women in Islam"' },
    { name: 'Laleh Bakhtiar', role: 'Übersetzerin, „The Sublime Quran" (2007)' },
  ],
  claims: [islamBefreiteFrau, aischaAlter, polygamieGerecht, vers434],
};

export default topic;
