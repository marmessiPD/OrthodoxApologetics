import type { Topic } from '../../../schema.ts';
import keinSelbstAnatta from './kein-selbst-anatta.ts';
import schoepfergottUnnoetig from './schoepfergott-unnoetig.ts';
import erloesungDurchEigeneKraft from './erloesung-durch-eigene-kraft.ts';
import nirvanaHoechstesZiel from './nirvana-hoechstes-ziel.ts';
import meditationWissenschaftlich from './meditation-wissenschaftlich.ts';
import buddhismusPhilosophieFriedlich from './buddhismus-philosophie-friedlich.ts';

const topic: Topic = {
  id: 'buddhismus',
  category: 'religionen',
  group: 'Buddhismus',
  order: 1,
  title: `Buddhismus`,
  subtitle: `Nicht-Selbst, bedingtes Entstehen, Nirvana und Achtsamkeit – im Gespräch mit dem Evangelium`,
  icon: 'circle-dot',
  overview: `Der Buddhismus gilt im Westen als die sympathischste Religion: ohne Dogma, ohne strafenden Gott, friedlich, wissenschaftsnah und mit einer erprobten Praxis der Meditation. Diese Wahrnehmung verdankt sich vor allem dem **Buddhismus der Moderne**: dem Dalai Lama, Thich Nhat Hanh, säkularen Lehrern wie Stephen Batchelor und Neurowissenschaftlern wie Sam Harris („Waking Up"), die Achtsamkeit ohne Religion propagieren. In Asien dagegen ist der Buddhismus für rund eine halbe Milliarde Menschen eine Religion im vollen Sinn – mit Wiedergeburt, Karma, Göttern, Reliquien und Ritualen. Die Traditionen sind vielfältig: Theravada (Sri Lanka, Thailand, Myanmar), Mahayana (China, Japan, Korea, Vietnam) mit Zen und Reinem Land, Vajrayana (Tibet).

Die philosophischen Kernfragen sind tief: Gibt es ein Selbst (Anatta)? Braucht das bedingte Entstehen einen unbedingten Grund? Kann der Mensch sich selbst befreien? Ist das Erlöschen (Nirvana) das höchste Ziel? Buddhistische Denker wie Nagarjuna, Vasubandhu und Dharmakirti gehören zu den schärfsten Köpfen der Menschheitsgeschichte. Wer mit gebildeten Buddhisten spricht, muss sich auf hohem Niveau vorbereiten.

Für das Gespräch gilt: Auch hier kommen wertvolle Gegenargumente **aus dem Buddhismus selbst** – Udana 8,3 spricht von einem „Ungeborenen, Unbedingten"; der Buddha schwieg auf die Frage, ob es kein Selbst gebe (SN 44,10); die Pudgalavadins lehrten eine „Person"; Shinrans Reine-Land-Buddhismus erkannte die Ohnmacht der eigenen Kraft. Und der Buddhologe Paul Williams, der nach zwanzig Jahren Praxis Christ wurde, ist ein unschätzbarer Zeuge. Die alexandrinische Kirche wiederum kannte den Buddha bereits um 200 (Clemens, Stromata I,15) – und die koptischen Wüstenväter haben eine eigene, tiefe Tradition der Kontemplation geschaffen.`,
  strategy: `**1. Würdige die Diagnose.** Vergänglichkeit, Ichbezogenheit und ungeordnetes Begehren als Wurzel des Leids – hier sind Buddha und Bibel einander nahe (Ps 103,15; Jak 1,14–15; Mt 16,25). Beginne mit dieser Gemeinsamkeit.

**2. Stelle die Frage nach dem Subjekt.** „Wer wird wiedergeboren? Wer erlangt das Nirvana? Wem erscheint die Illusion des Ich?" Diese Fragen sind nicht polemisch, sondern führen ins Zentrum (siehe den ★-Claim zu Anatta).

**3. Stelle die Frage nach dem Grund.** „Warum gibt es überhaupt etwas?" Das bedingte Entstehen beschreibt das Wie, nicht das Warum. Udana 8,3 ist deine Brücke.

**4. Unterscheide Buddhismus und Achtsamkeitsindustrie.** Wer „Buddhismus ist wissenschaftlich" sagt, meint meist säkulare Achtsamkeit. Kläre, über welchen Buddhismus ihr redet, und zeige, dass Wirkung nicht Wahrheit ist.

**5. Zeige das christliche Ziel:** nicht Erlöschen, sondern Gemeinschaft der Liebe; nicht Selbstbefreiung, sondern Gnade, die zur Mitwirkung befähigt; nicht Technik, sondern Begegnung mit Christus. Bring die koptische Kontemplation ins Spiel – Wüstenväter, Jesusgebet, Agpeya.

**Fallen:** (a) „Buddhisten sind Nihilisten" – falsch. (b) „Buddhismus ist Götzendienst" – verletzend und ungenau. (c) Gewalt in Myanmar polemisch ausschlachten – nur zur Korrektur der Idealisierung nennen, mit gleichem Maßstab für christliches Versagen. (d) Die eigene kontemplative Tradition verschweigen.`,
  keyOpponents: [
    { name: 'Tenzin Gyatso, der 14. Dalai Lama', role: 'Oberhaupt des tibetischen Buddhismus, Friedensnobelpreis 1989', work: 'The Universe in a Single Atom (2005); Toward a True Kinship of Faiths (2010)' },
    { name: 'Thich Nhat Hanh', role: 'Vietnamesischer Zen-Mönch, Begründer von Plum Village (1926–2022)', work: 'Living Buddha, Living Christ (1995)' },
    { name: 'Stephen Batchelor', role: 'Säkularer buddhistischer Lehrer und Autor', work: 'Buddhism Without Beliefs (1997); Confession of a Buddhist Atheist (2010)' },
    { name: 'Sam Harris', role: 'Neurowissenschaftler, Autor', work: 'Waking Up: A Guide to Spirituality Without Religion (2014)' },
    { name: 'Walpola Rahula', role: 'Sri-lankischer Mönch und Gelehrter (1907–1997)', work: 'What the Buddha Taught (1959)' },
    { name: 'Jon Kabat-Zinn', role: 'Begründer der Mindfulness-Based Stress Reduction', work: 'Full Catastrophe Living (1990)' },
  ],
  claims: [keinSelbstAnatta, schoepfergottUnnoetig, erloesungDurchEigeneKraft, nirvanaHoechstesZiel, meditationWissenschaftlich, buddhismusPhilosophieFriedlich],
};

export default topic;
