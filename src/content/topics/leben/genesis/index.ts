import type { Topic } from '../../../schema.ts';
import genesis1Und2Widerspruch from './genesis-1-und-2-widerspruch.ts';
import genesisVonBabylonKopiert from './genesis-von-babylon-kopiert.ts';
import vaeterLasenWoertlich from './vaeter-lasen-woertlich.ts';

const topic: Topic = {
  id: 'genesis',
  category: 'leben',
  group: 'Schöpfung & Genesis',
  order: 1,
  title: `Schöpfung und Genesis`,
  subtitle: `Zwei Schöpfungsberichte? Babylonische Vorlagen? Und wie lasen die Kirchenväter wirklich?`,
  icon: 'sunrise',
  overview: `Die ersten Kapitel der Bibel stehen unter Dreifachbeschuss: Literarisch sollen sich Genesis 1 und 2 widersprechen (zwei Quellen, zwei Reihenfolgen), religionsgeschichtlich soll die Genesis von babylonischen Mythen abgeschrieben sein (Enuma Elisch, Atrahasis, Gilgamesch), und kirchengeschichtlich sollen die Väter die Genesis naiv wörtlich gelesen haben, sodass heutige Christen nur noch Rückzugsgefechte führen.

Die Antworten sind solide: Genesis 2,4 eröffnet mit der *Toledot*-Formel einen neuen Abschnitt – Genesis 1 ist der kosmische Überblick, Genesis 2 die Nahaufnahme des Menschen; Jesus zitiert beide in einem Satz (Mt 19,4–5). Der Vergleich mit den babylonischen Texten zeigt keine Kopie, sondern eine bewusste Gegenrede: keine Götterkämpfe, keine hungrigen Götter, Sonne und Mond als „Lichter" entgöttert (Gerhard Hasel 1974), der Mensch als Gottes Ebenbild statt als Arbeitssklave. Führende Assyriologen (Lambert, Heidel) verneinten eine direkte Abhängigkeit vom Enuma Elisch. Und die Väter lasen die Genesis keineswegs einheitlich: Basilius und Ephräm wörtlich, Clemens, Origenes und Augustinus nicht als gewöhnliche Tage – lange vor jeder modernen Wissenschaft.

Die koptisch-orthodoxe Kirche steht in der **alexandrinischen Auslegungstradition**: wörtlicher und geistlicher Sinn zusammen, christozentrisch (Kyrill, *Glaphyra*). Verbindlich sind die Schöpfung aus dem Nichts, die Gottebenbildlichkeit des Menschen, die Realität von Adam und Eva und des Sündenfalls; offen sind Erdalter und naturkundliche Details. Stimmen: Kitchen und Walton (Alter Orient), Hasel (Polemik), Kline (Gen 2,5), die Väter in ihrer ganzen Vielfalt und Tadros Malaty als koptischer Patristiker.`,
  strategy: `**Reihenfolge im Gespräch:**
1. **Gattung klären:** Frag, was „wörtlich" bedeutet – das, was der Autor sagen wollte. Genesis 1 ist feierlich gegliedert, Genesis 2 erzählt; beides ist ernst gemeint, aber nicht Naturkunde im modernen Sinn.
2. **Gen 1/2:** Toledot-Formel (Gen 2,4) zeigen, dann Gen 2,5 genau lesen (Feldpflanzen, Regen, Bauer), Gen 2,19 bei Luther („gemacht hatte") und Mt 19,4–5.
3. **Babylon:** Parallelen *zuerst zugeben*, dann die Unterschiede-Tabelle durchgehen (Gottesbild, Menschenbild, Flutmotiv, Arche). Mit Lambert/Heidel das Fachurteil nennen.
4. **Väter:** Ehrlich sagen, dass viele Väter wörtlich lasen und die Welt für jung hielten – dann Origenes, Clemens, Augustinus als Gegenbeispiele *vor* jeder Geologie; Vinzenz' Kriterium für den echten Konsens.
5. **Zum Kern führen:** Schöpfung aus dem Nichts, Würde des Menschen als Bild Gottes, Fall und Erlösung in Christus.

**Fallen:**
- Keine Behauptung „es gibt keine Unterschiede/keine Parallelen".
- Nicht behaupten, die Väter hätten alles symbolisch gelesen – oder alle wörtlich.
- Origenes nicht als Lehrautorität, Augustinus mit seinen westlichen Akzenten vorsichtig zitieren.
- Keine erfundenen Zitate: Basilius „Für mich ist Gras Gras" (Hex. 9,1), Augustinus DGaL I,19,39 und Civ. Dei XI,6 sind belegt – frei kursierende „Väterzitate" ohne Fundstelle meiden.`,
  keyOpponents: [
    { name: 'Richard Elliott Friedman', role: 'Bibelwissenschaftler', work: 'Who Wrote the Bible? (1987)' },
    { name: 'Francesca Stavrakopoulou', role: 'Professorin für Hebräische Bibel und antike Religion, University of Exeter', work: 'God: An Anatomy (2021)' },
    { name: 'Dan McClellan', role: 'Bibelwissenschaftler, populärer YouTuber' },
    { name: 'Hermann Gunkel', role: 'Alttestamentler (1862–1932)', work: 'Schöpfung und Chaos in Urzeit und Endzeit (1895)' },
    { name: 'Jerry Coyne', role: 'Evolutionsbiologe', work: 'Faith vs. Fact (2015)' },
  ],
  claims: [genesis1Und2Widerspruch, genesisVonBabylonKopiert, vaeterLasenWoertlich],
  newPeople: [
    {
      id: 'john-walton',
      name: 'John H. Walton',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Alttestamentler, Wheaton College',
      fields: ['Altes Testament', 'Altorientalistik', 'Genesis'],
      bio: 'Untersucht das Alte Testament vor dem Hintergrund der altorientalischen Gedankenwelt („kognitive Umwelt"). Zeigt, dass Israel viele Vorstellungen seiner Umwelt teilte, sie aber theologisch grundlegend umformte.',
      keyWorks: [
        'Ancient Near Eastern Thought and the Old Testament (2006)',
        'The Lost World of Genesis One (2009)',
        'The Lost World of the Flood (2018, mit Tremper Longman III)',
      ],
      caveat: 'Seine These, Genesis 1 beschreibe vor allem funktionale und nicht materielle Ursprünge, ist umstritten; die Schöpfung aus dem Nichts bejaht er theologisch.',
    },
    {
      id: 'gerhard-hasel',
      name: 'Gerhard F. Hasel',
      years: '1935–1994',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Alttestamentler, Andrews University',
      fields: ['Altes Testament', 'Genesis-Kosmologie', 'Theologie des Alten Testaments'],
      bio: 'Alttestamentler, der in einem vielzitierten Aufsatz (1974) zeigte, dass die Schöpfungsgeschichte von Genesis 1 sich bewusst und polemisch von den Mythen ihrer Umwelt absetzt, statt von ihnen abhängig zu sein.',
      keyWorks: ['„The Polemic Nature of the Genesis Cosmology", The Evangelical Quarterly 46 (1974)', 'Old Testament Theology: Basic Issues in the Current Debate'],
      caveat: 'Siebenten-Tags-Adventist mit Junge-Erde-Position – beides keine koptische Lehrautorität; seine philologische Analyse wird konfessionsübergreifend zitiert.',
    },
  ],
};

export default topic;
