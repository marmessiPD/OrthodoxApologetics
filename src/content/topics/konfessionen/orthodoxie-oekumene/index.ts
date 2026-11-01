import type { Topic } from '../../../schema.ts';
import nurByzantinischeOrthodoxie from './nur-byzantinische-orthodoxie.ts';
import siebenKonzilienVerbindlich from './sieben-konzilien-verbindlich.ts';
import koptenSpaltetenVierhunderteinundfuenfzig from './kopten-spalteten-451.ts';
import alleKirchenGleich from './alle-kirchen-gleich.ts';

const topic: Topic = {
  id: 'orthodoxie-oekumene',
  category: 'konfessionen',
  group: 'Orthodoxie & Ökumene',
  order: 1,
  title: `Orthodoxie und Ökumene`,
  subtitle: `Wer ist „orthodox"? Die sieben Konzilien, die Trennung von 451, die Dialoge von 1989/1990 – und warum Liebe zu allen Christen nicht heißt, dass Konfessionen egal sind`,
  icon: 'merge',
  overview: `Kopten begegnen in Gesprächen zwei entgegengesetzten Einwänden. Die einen – oft östlich-orthodoxe (griechische, russische, rumänische, serbische) Christen oder westliche Konvertiten zur byzantinischen Orthodoxie – sagen: „Ihr seid gar nicht wirklich orthodox. Ihr nehmt nur drei der sieben ökumenischen Konzilien an und habt 451 die Kirche gespalten." Die anderen – häufig evangelikale oder liberale Christen – sagen das Gegenteil: „Konfessionen sind egal. Hauptsache, man glaubt an Jesus."

**Die gemeinsame Geschichte:** Bis 451 gab es eine Kirche des Ostens mit den großen Sitzen Alexandrien, Antiochien, Konstantinopel und Jerusalem, verbunden mit Rom. Die Väter Athanasius und Kyrill – beide Päpste von Alexandrien – sind Lehrer *aller* orthodoxen Christen. Am Konzil von Chalcedon (451) zerbrach diese Einheit: Die Kirchen Ägyptens, Syriens, Armeniens und später Äthiopiens lehnten die neue Formel „in zwei Naturen", den Tomus Leos und die Absetzung Dioskurs ab. Daraus entstanden zwei Kirchenfamilien: die **östlich-orthodoxen** (chalcedonensischen) Kirchen mit sieben ökumenischen Konzilien und die **orientalisch-orthodoxen** Kirchen (koptisch, syrisch, armenisch, äthiopisch, eritreisch, Malankara) mit drei.

**Die Wende:** Nach inoffiziellen Konsultationen seit 1964 stellte die offizielle Gemeinsame Kommission beider Familien in den Erklärungen vom **Anba-Bischoi-Kloster (1989)** und von **Chambésy (1990)** fest, dass beide „immer treu denselben authentischen orthodoxen christologischen Glauben" bewahrt haben – mit unterschiedlicher Terminologie. Sie hielt fest, dass die Ikonenlehre des 7. Konzils (787) mit der alten Praxis der orientalischen Orthodoxen übereinstimmt, und empfahl, die gegenseitigen Anathemata aufzuheben (Vorschläge 1993). Die volle Gemeinschaft ist bis heute nicht wiederhergestellt; nicht alle Synoden haben die Erklärungen ratifiziert, und es gibt Widerstand, etwa vom Berg Athos.

**Die koptische Haltung** verbindet beides: Liebe zu allen Christen, ökumenisches Engagement und Verzicht auf Urteile über das Heil anderer – und zugleich Treue zum ganzen apostolischen Glauben. Ökumene ist für die Kopten Suche nach Wahrheit, nicht Gleichgültigkeit.`,
  strategy: `**Gegenüber östlich-orthodoxen Gesprächspartnern:**

1. **Mit dem Gemeinsamen beginnen.** Athanasius und Kyrill, dieselbe Liturgie des hl. Basilius, dieselben Sakramente, dasselbe Credo ohne Filioque, Mönchtum aus Ägypten.
2. **Die offiziellen Erklärungen zitieren.** 1989 (Anba-Bischoi-Kloster), 1990 (Chambésy): „derselbe authentische orthodoxe christologische Glaube". Gib ehrlich zu, dass die Rezeption unvollständig ist.
3. **Das Kriterium klären.** Orthodoxie ist der rechte Glaube, nicht eine Zahl von Konzilien. Synoden wie Ephesus 449 und Hieria 754 zeigen, dass Einberufung und Anspruch allein nicht genügen.
4. **Fair über 451 sprechen.** Politik (Markian, Pulcheria), geänderter Entwurf, Gewalt auf beiden Seiten (auch Proterius 457), das Akakianische Schisma unter den Chalcedonensern selbst.
5. **Keine Retourkutsche.** Nenne die Byzantiner nie „Nestorianer" und behaupte nicht, nur die Kopten seien orthodox – das widerspricht dem Ergebnis der Dialoge.

**Gegenüber „Konfessionen sind egal":**

1. **Liebe bezeugen.** Sag klar, dass du alle Christen als Geschwister liebst und nicht über ihr Heil urteilst.
2. **Die Wahrheitsfrage stellen.** „Welcher Jesus?" (2 Kor 11,4) – „Einheit in der Wahrheit" (Joh 17,17–21) – „ein Glaube, eine Taufe" (Eph 4,5).
3. **Konkret werden.** Kindertaufe, Eucharistie, Gottheit Christi – sind das wirklich Nebensachen?
4. **Pastoral sein.** Bei gemischten Familien zuerst das Gemeinsame würdigen und auf den Priester verweisen.`,
  keyOpponents: [
    { name: 'Johannes von Damaskus', role: 'Byzantinischer Kirchenvater (8. Jh.)', work: 'De haeresibus 83' },
    { name: 'Traditionalistische Mönche vom Berg Athos', role: 'Kritiker des Dialogs (1990er-Jahre)', work: 'Ablehnung der Erklärungen von 1989/1990' },
    { name: 'Papst Leo I. von Rom', role: 'Bischof von Rom (440–461)', work: 'Tomus ad Flavianum (449)' },
    { name: 'Evagrius Scholastikos', role: 'Chalcedonensischer Kirchenhistoriker', work: 'Kirchengeschichte (um 594)' },
    { name: 'Liberale und überkonfessionelle Ökumene', role: 'Breite Strömung in westlichen Kirchen', work: '„Versöhnte Verschiedenheit" ohne Klärung der Lehrfragen; „Hauptsache Jesus"' },
  ],
  claims: [nurByzantinischeOrthodoxie, siebenKonzilienVerbindlich, koptenSpaltetenVierhunderteinundfuenfzig, alleKirchenGleich],
};

export default topic;
