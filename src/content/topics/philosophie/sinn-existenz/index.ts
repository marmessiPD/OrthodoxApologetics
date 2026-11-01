import type { Topic } from '../../../schema.ts';
import keinObjektiverSinn from './kein-objektiver-sinn.ts';
import todIstDasEnde from './tod-ist-das-ende.ts';
import gottIstTotNietzsche from './gott-ist-tot-nietzsche.ts';

const topic: Topic = {
  id: 'sinn-existenz',
  category: 'philosophie',
  group: 'Sinn & Existenz',
  order: 1,
  title: `Sinn und Existenz`,
  subtitle: `Wozu leben wir – und was kommt nach dem Tod?`,
  icon: 'compass',
  overview: `Die großen Fragen der Existenz – *Hat das Leben einen Sinn? Ist der Tod das Ende? Was bleibt, wenn Gott „tot" ist?* – sind keine akademischen Spielereien. Sie entscheiden darüber, wie Menschen leben, lieben, leiden und sterben. Die säkulare Antwort reicht von **Epikur** („Der Tod geht uns nichts an") über **Camus** (das Absurde und die Revolte) und **Sartre** (der Mensch entwirft sich selbst) bis zu **Russell** (die Seele auf „unnachgiebige Verzweiflung" bauen) und dem heutigen „poetischen Naturalismus" von **Sean Carroll**: Sinn wird gemacht, nicht gefunden.

Bemerkenswert ist, wie ehrlich die größten säkularen Denker die Konsequenzen benannt haben. **Nietzsche** sah, dass mit dem Gottesglauben auch die christliche Moral ihre Grundlage verliert; Russell nannte Verzweiflung das Fundament; Camus nannte den Selbstmord das einzige ernste philosophische Problem. Diese Ehrlichkeit ist für das Gespräch ein Geschenk: Sie zeigt, dass die Frage nach Gott keine Nebensache ist.

Die christliche Antwort verschweigt das Absurde nicht – das Buch Kohelet beschreibt es schärfer als Camus („Es ist alles ganz eitel"). Aber sie bezweifelt, dass es das letzte Wort hat. Ihr Zentrum ist kein Trostspruch, sondern ein Ereignis: die **Auferstehung Jesu**, auf die Paulus den ganzen Glauben setzt (1 Kor 15,14). Die koptische Kirche – Kirche der Märtyrer, deren Kalender mit der Verfolgung unter Diokletian (284) beginnt – lebt seit Jahrhunderten das Zeugnis, dass der Tod seinen Schrecken verloren hat, bis hin zu den 21 Märtyrern von Libyen (2015).`,
  strategy: `**1. Ehrlichkeit würdigen.** Beginne mit Respekt für Camus, Russell und Nietzsche – sie haben die Konsequenzen eines Lebens ohne Gott ernster genommen als viele bequeme Atheisten. Zitiere sie korrekt (Camus' erster Satz, Russells „unyielding despair", Nietzsches Götzen-Dämmerung).

**2. Unterscheiden: subjektiver Sinn vs. Begründung.** Bestreite nie, dass Atheisten ein erfülltes Leben führen können. Frage, ob ihr Weltbild diesen Sinn *begründen* kann: „Ist der Wert deiner Kinder etwas, das du ihnen gibst, oder das du entdeckst?"

**3. Die Sehnsucht als Hinweis.** Augustinus' „unruhiges Herz", Pascals „unendlicher Abgrund", Lewis' Argument aus der Sehnsucht – als Indizien, nicht als Beweise.

**4. Beim Tod: zur Auferstehung führen.** Epikur kurz entkräften (er tröstet über das Totsein, nicht über den Verlust – selbst Nagel lehnt ihn ab), dann zur historischen Frage gehen: Ist Jesus auferstanden?

**5. Bei Nietzsche: das Dilemma zeigen.** Wer „Gott ist tot" sagt und Menschenwürde behalten will, muss wählen – Nietzsche folgen, eine säkulare Begründung liefern oder die Wurzel neu prüfen.

**Pastoral:** Sinn- und Todesfragen sind oft persönlich. Wenn jemand trauert oder selbst in einer Krise steckt, gilt: zuerst zuhören und da sein, nicht argumentieren. Bei Suizidgedanken professionelle Hilfe vermitteln (Telefonseelsorge: Deutschland 0800 111 0 111, Österreich 142, Schweiz 143).

**Fallen:** Nicht behaupten, Atheisten seien unglücklich oder unmoralisch; Nietzsche nicht für die Nazis verantwortlich machen; Nahtoderfahrungen nicht zum Hauptargument machen; das Dostojewski-„Zitat" „Alles ist erlaubt" nicht als wörtlich ausgeben.`,
  keyOpponents: [
    { name: 'Albert Camus', role: 'Schriftsteller und Philosoph (1913–1960)', work: 'Der Mythos des Sisyphos (1942)' },
    { name: 'Jean-Paul Sartre', role: 'Existenzialist (1905–1980)', work: 'Der Existentialismus ist ein Humanismus (1946)' },
    { name: 'Friedrich Nietzsche', role: 'Philosoph (1844–1900)', work: 'Die fröhliche Wissenschaft (1882); Götzen-Dämmerung (1889)' },
    { name: 'Bertrand Russell', role: 'Philosoph (1872–1970)', work: 'A Free Man\'s Worship (1903)' },
    { name: 'Sean Carroll', role: 'Theoretischer Physiker', work: 'The Big Picture (2016)' },
    { name: 'Epikur', role: 'Griechischer Philosoph (341–270 v. Chr.)', work: 'Brief an Menoikeus' },
  ],
  claims: [keinObjektiverSinn, todIstDasEnde, gottIstTotNietzsche],
};

export default topic;
