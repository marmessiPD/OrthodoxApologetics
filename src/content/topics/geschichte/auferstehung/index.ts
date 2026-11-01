import type { Topic } from '../../../schema.ts';
import halluzinationen from './halluzinationen.ts';
import leichnamGestohlenFalschesGrab from './leichnam-gestohlen-falsches-grab.ts';
import scheintod from './scheintod.ts';
import legendeEntwickelteSich from './legende-entwickelte-sich.ts';
import wunderHistorischUnmoeglich from './wunder-historisch-unmoeglich.ts';

const topic: Topic = {
  id: 'auferstehung',
  category: 'geschichte',
  group: 'Auferstehung',
  order: 1,
  title: `Die Auferstehung Jesu`,
  subtitle: `Halluzination, Grabraub, Scheintod, Legende – oder ist Christus wahrhaft auferstanden?`,
  icon: 'sunrise',
  overview: `„Ist aber Christus nicht auferstanden, so ist euer Glaube eitel" (1 Kor 15,17). Paulus macht das ganze Christentum von einem einzigen geschichtlichen Ereignis abhängig. Darum ist die Auferstehung zugleich der verwundbarste und der stärkste Punkt des Glaubens: verwundbar, weil sie überprüfbar ist; stark, weil die Belege bemerkenswert gut sind.

In der heutigen Forschung hat sich ein breiter Grundbestand an Tatsachen herausgebildet, die auch skeptische Historiker anerkennen (Gary Habermas nennt sie „Minimal Facts"): Jesus starb durch Kreuzigung; seine Jünger hatten kurz danach Erlebnisse, die sie als Begegnungen mit dem Auferstandenen verstanden; sie verkündeten dies von Anfang an, auch unter Lebensgefahr; der skeptische Herrenbruder Jakobus und der Verfolger Paulus wurden bekehrt. Eine Mehrheit hält auch das leere Grab für historisch. Gerd Lüdemann, Bart Ehrman, E. P. Sanders und Paula Fredriksen räumen den Kern der Erscheinungserlebnisse ausdrücklich ein – die Frage ist ihre Erklärung.

Die Gegenseite bietet fünf Hauptstrategien an: **Halluzination** (Lüdemann, Ehrman), **Diebstahl oder falsches Grab** (Reimarus, Lake – heute selten), **Scheintod** (Paulus, Ahmadiyya, Deedat – in der Wissenschaft erledigt), **Legende** (Price, Carrier) und – philosophisch am stärksten – den **methodischen Einwand**, dass Historiker grundsätzlich kein Wunder feststellen können (Hume, Ehrman). Jede natürliche Erklärung scheitert an mindestens einem Teil der Daten; die meisten Skeptiker kombinieren deshalb mehrere.

Für die koptisch-orthodoxe Kirche ist die Auferstehung die Mitte des Glaubens und des Kirchenjahres: Nach dem großen Fasten folgt die fünfzigtägige Osterzeit, und der Ostergruß „Christus ist auferstanden – er ist wahrhaft auferstanden" bekennt ein Ereignis, keine Idee. Der Halluzinationsvorwurf ist übrigens alt: Schon der Philosoph Kelsos erhob ihn im 2. Jahrhundert, und Origenes von Alexandrien hat ihm geantwortet.`,
  strategy: `**1. Mit den Zugeständnissen der Gegner beginnen.** Frage: „Stimmst du zu, dass Jesus gekreuzigt wurde und seine Jünger danach überzeugt waren, ihn gesehen zu haben?" Fast jeder informierte Skeptiker sagt Ja – Lüdemann, Ehrman und Sanders tun es auch. Damit hast du ein gemeinsames Fundament.

**2. Die Daten auflisten, dann die Erklärungen prüfen.** Leeres Grab, Erscheinungen vor Einzelnen und Gruppen, Jakobus, Paulus, frühes Credo (1 Kor 15,3–7). Dann jede Alternative nacheinander: Erklärt sie **alle** Daten? Halluzination erklärt nicht das Grab; Diebstahl nicht die Erscheinungen; Scheintod nicht den Glauben an den Sieg über den Tod; Legende nicht das frühe Credo.

**3. Die Frühdatierung ins Zentrum stellen.** Das Credo stammt aus den ersten Jahren; Paulus traf Petrus und Jakobus (Gal 1,18–19). Für eine Legende fehlt schlicht die Zeit.

**4. Den Wunder-Einwand offenlegen.** Wenn der Gesprächspartner sagt „Das kann einfach nicht sein", benenne freundlich: Das ist eine philosophische Vorannahme, kein historisches Ergebnis. Biete an, über die Gottesfrage zu sprechen.

**5. Fallen vermeiden:** Keine überzogenen Behauptungen („alle Apostel starben als Märtyrer", „das Grabtuch beweist …", „97 % Wahrscheinlichkeit"). Ehrlich die Unterschiede in den Berichten zugestehen – sie zeigen, dass die Zeugen nicht voneinander abschrieben.

**6. Psychiatrische Detailfragen** (Trauerhalluzinationen, Gruppenphänomene) findest du im Themenblock Psychiatrie; die Frage nach dem Islam (Sure 4:157) im Themenblock „Kreuz und Erlösung".

**7. Am Ende die Frage persönlich machen:** Wenn Christus auferstanden ist, ist das nicht nur eine historische Kuriosität, sondern die Antwort auf die Frage nach Tod und Hoffnung.`,
  keyOpponents: [
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, UNC; Agnostiker', work: 'How Jesus Became God (2014); Debatte mit W. L. Craig (2006)' },
    { name: 'Gerd Lüdemann', role: 'Neutestamentler, Göttingen', work: 'Die Auferstehung Jesu (1994)' },
    { name: 'Richard Carrier', role: 'Althistoriker', work: 'The Empty Tomb (Mitautor, 2005); Proving History (2012)' },
    { name: 'Robert M. Price', role: 'Neutestamentler', work: 'The Empty Tomb (Hg., 2005)' },
    { name: 'John Dominic Crossan', role: 'Jesus Seminar', work: 'Jesus: A Revolutionary Biography (1994)' },
    { name: 'Dale C. Allison', role: 'Neutestamentler, Princeton (ehrlicher christlicher Kritiker)', work: 'The Resurrection of Jesus: Apologetics, Polemics, History (2021)' },
    { name: 'Ahmed Deedat', role: 'Muslimischer Apologet', work: 'Crucifixion or Cruci-fiction? (1984)' },
  ],
  claims: [halluzinationen, leichnamGestohlenFalschesGrab, scheintod, legendeEntwickelteSich, wunderHistorischUnmoeglich],
  newPeople: [
    {
      id: 'tim-mcgrew',
      name: 'Timothy McGrew',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'christlich',
      title: 'Professor für Philosophie, Western Michigan University',
      fields: ['Erkenntnistheorie', 'Wahrscheinlichkeitstheorie', 'Wunder', 'Geschichte der Apologetik'],
      bio: 'Philosoph mit Schwerpunkt Wahrscheinlichkeitstheorie und Wissenschaftsgeschichte. Verfasste zusammen mit Lydia McGrew eine viel diskutierte bayesianische Analyse der Belege für die Auferstehung und arbeitet zur Geschichte der Evidenzapologetik.',
      keyWorks: ['The Argument from Miracles (mit Lydia McGrew, in: Blackwell Companion to Natural Theology, 2009)'],
    },
  ],
};

export default topic;
