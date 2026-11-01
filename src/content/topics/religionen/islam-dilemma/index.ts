import type { Topic } from '../../../schema.ts';
import dasIslamischeDilemma from './das-islamische-dilemma.ts';
import injilIstNichtDasNt from './injil-ist-nicht-das-nt.ts';
import tahrifVerse from './tahrif-verse.ts';
import muhaymin548 from './muhaymin-5-48.ts';
import nurKoranGeschuetzt from './nur-koran-geschuetzt.ts';
import juengerWarenMuslime from './juenger-waren-muslime.ts';

const topic: Topic = {
  id: 'islam-dilemma',
  category: 'religionen',
  group: 'Islam',
  order: 1,
  title: `Das Islamische Dilemma`,
  subtitle: `Der Koran bestätigt die Schrift, die ihm widerspricht – und jeder Fluchtweg führt zurück`,
  icon: 'scale',
  overview: `Fast jedes Gespräch mit Muslimen über Jesus endet an derselben Stelle: „Eure Bibel ist verfälscht." Damit scheint jedes Bibelargument entwertet. Das **Islamische Dilemma** dreht diese Situation um. Es fragt nicht, was Christen über die Bibel glauben, sondern was der **Koran** über sie sagt: Tora und Evangelium sind Offenbarung Gottes, „Rechtleitung und Licht" (5:44–46); die Juden und Christen zur Zeit Mohammeds *hatten* sie und sollten danach richten (5:43; 5:47; 5:68); wer zweifelt, soll die fragen, „die vor dir die Schrift lesen" (10:94); und „niemand kann Allahs Worte abändern" (6:115; 18:27).

Die Bibel, die Christen im 7. Jahrhundert lasen, kennen wir aus Handschriften und Übersetzungen, die **vor** Mohammed entstanden – vom Codex Vaticanus und Sinaiticus bis zu den sahidischen und bohairischen Übersetzungen unserer eigenen koptischen Kirche. Sie lehrt Kreuzigung, Auferstehung und Gottessohnschaft. Daraus folgt: Entweder war sie Gottes zuverlässiges Wort – dann widerspricht ihr der Koran. Oder sie war verfälscht – dann irrt der Koran, wenn er sie bestätigt. Beides schließt aus, dass der Koran von Gott stammt.

Muslimische Gelehrte haben auf dieses Problem seit über tausend Jahren unterschiedlich reagiert: mit der Lehre der Textverfälschung (Ibn Hazm), der Sinnverfälschung (die Erläuterung in al-Bukharis Kitab at-Tawhid, ar-Razi), einem Mittelweg (Ibn Taymiyya) oder der These, das Injil sei ein verlorenes Buch. Dass die Tradition hier keine einheitliche Antwort gefunden hat, ist selbst ein Hinweis darauf, wie ernst das Problem ist. Dieser Themenblock behandelt jeden dieser Wege – und das „zweite Dilemma": Der Koran verheißt den Nachfolgern Jesu den Sieg (61:14; 3:55), aber siegreich wurde die Kirche, die das Kreuz verkündet.`,
  strategy: `**Ziel:** Nicht „gewinnen", sondern deinen Gesprächspartner selbst entdecken lassen, dass der Koran die Bibel bestätigt, die er bekämpft. Das Dilemma wirkt nur, wenn er jede Prämisse **selbst** ausgesprochen hat. Bleib freundlich, neugierig und geduldig (1 Petr 3,15) – du redest mit einem Menschen, der seinen Glauben liebt.

**Schritt 1 – Sokratisch beginnen (keine Behauptungen, nur Fragen):**
1. „Glaubst du, dass Allah die Tora und das Evangelium herabgesandt hat?" → Ja (Glaubensartikel). *P1 ist bestätigt.*
2. „Kann ein Mensch Allahs Worte ändern?" → Lass ihn 6:115 oder 18:27 selbst nennen oder lies sie gemeinsam. *P3 ist bestätigt.*
3. „Hatten die Christen zur Zeit Mohammeds das Evangelium?" → Wenn er zögert: Lies 5:47 und 7:157 gemeinsam. Frage: „Hätte Allah ihnen befohlen, nach etwas zu richten, das sie nicht hatten?" *P2 ist bestätigt.*
4. „Weißt du, dass wir vollständige Bibeln aus der Zeit vor Mohammed besitzen?" → Nenne Codex Vaticanus (ca. 300–325), Sinaiticus (ca. 330–360) und die koptischen Übersetzungen. *P4.*
5. „Was steht in diesen Bibeln über den Tod Jesu?" → Joh 19,30; 1 Kor 15,3–4. *P5.*

**Schritt 2 – Das Dilemma schließen:** Erst jetzt die Frage: „War diese Bibel, die die Christen zur Zeit Mohammeds hatten, Gottes zuverlässiges Wort – ja oder nein?" Beide Antworten führen zum selben Ergebnis. Formuliere es nicht triumphierend, sondern als gemeinsames Problem: „Siehst du, warum mich das beschäftigt?"

**Schritt 3 – Fluchtwege erkennen:** Jeder Ausweg gehört zu einem der beiden Hörner. Frage bei jedem Ausweg: *„Wann genau wurde die Bibel verfälscht – vor oder nach Mohammed?"* Vorher → Horn B (der Koran irrt). Nachher → die Handschriften widerlegen es (Horn A). Diese eine Frage schließt fast jeden Fluchtweg.

**Fallen:**
- Lass dich nicht in eine Trinitätsdebatte ziehen, bevor das Dilemma geschlossen ist – die **Kreuzigung** ist der klarste Widerspruch, weil sie ein Ereignis ist.
- Behaupte nie, *alle* Muslime hätten immer an Sinnverfälschung geglaubt. Gib offen zu, dass Ibn Abbas (Bukhari 7363) und Ibn Hazm anders dachten – und führe zum Koran zurück.
- Wenn ein Hadith angeführt wird: Ein einzelner Hadith kann klare Koranverse (5:43; 5:47; 10:94) nicht aufheben.
- Wenn der Gesprächspartner Bibelstellen für Mohammed anführt (Dtn 18,18; Joh 14–16): Freue dich – er benutzt die Bibel als zuverlässiges Zeugnis (Horn A).
- Beende das Gespräch nie mit Spott. Ein gutes Schlusswort: „Ich möchte dich nicht beschämen. Ich möchte, dass du das Evangelium liest, auf das dein eigenes Buch dich verweist."`,
  keyOpponents: [
    { name: 'Shabir Ally', role: 'Islamischer Apologet, Let the Quran Speak (Toronto)', work: 'Zahlreiche Debatten mit James White, David Wood u. a.' },
    { name: 'Yasir Qadhi', role: 'Islamischer Gelehrter, Dallas', work: 'An Introduction to the Sciences of the Qur\'aan' },
    { name: 'Mohammed Hijab', role: 'Islamischer Debattierer, London', work: 'Antworten auf das „Islamic Dilemma"' },
    { name: 'Ali Ataie', role: 'Islamwissenschaftler, Zaytuna College', work: 'Debatten über Injil und Neues Testament' },
    { name: 'Ibn Hazm', role: 'Andalusischer Gelehrter (994–1064)', work: 'al-Fisal fi l-milal wa-l-ahwa wa-n-nihal' },
    { name: 'Rahmatullah Kairanawi', role: 'Indischer Gelehrter (1818–1891)', work: 'Izhar al-Haqq (1864)' },
  ],
  claims: [dasIslamischeDilemma, injilIstNichtDasNt, tahrifVerse, muhaymin548, nurKoranGeschuetzt, juengerWarenMuslime],
  newPeople: [
    {
      id: 'gordon-nickel',
      name: 'Gordon D. Nickel',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Islamwissenschaftler (Kanada)',
      fields: ['Tahrif', 'Frühe Korankommentare', 'Koran & Bibel'],
      bio: 'Kanadischer Islamwissenschaftler, der die Deutung der koranischen Verfälschungsverse in den frühesten erhaltenen Korankommentaren untersucht hat. Er zeigt, dass die frühen Ausleger überwiegend von Verbergen und Falschdeutung erzählen, nicht von einer flächendeckenden Textverfälschung.',
      keyWorks: ['Narratives of Tampering in the Earliest Commentaries on the Qur\'an (2011)', 'The Gentle Answer to the Muslim Accusation of Biblical Falsification (2015)'],
    },
  ],
};

export default topic;
