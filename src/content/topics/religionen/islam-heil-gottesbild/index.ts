import type { Topic } from '../../../schema.ts';
import allahBarmherziger from './allah-barmherziger.ts';
import heilDurchWerkeGerecht from './heil-durch-werke-gerecht.ts';
import islamEinfacherVernuenftiger from './islam-einfacher-vernuenftiger.ts';
import allahLiebtDieGuten from './allah-liebt-die-guten.ts';

const topic: Topic = {
  id: 'islam-heil-gottesbild',
  category: 'religionen',
  group: 'Islam',
  order: 12,
  title: `Heil und Gottesbild im Islam`,
  subtitle: `Barmherzigkeit ohne Opfer? Waagschalen und Heilsgewissheit, Fitra und „einfacher Monotheismus", Allahs Liebe zu den Guten`,
  icon: 'moon-star',
  overview: `Viele Gespräche mit Muslimen kreisen nicht um Textkritik oder Geschichte, sondern um das **Gottesbild**: Ist der Gott des Islam nicht barmherziger, weil er ohne Blutopfer vergibt? Ist ein Heil durch Glauben und gute Taten nicht gerechter als ein Heil durch den Tod eines Unschuldigen? Ist der islamische Monotheismus nicht einfacher und vernünftiger als Trinität und Inkarnation? Und ist eine Liebe, die nur den Guten gilt, nicht moralisch ernster als die christliche „bedingungslose Liebe"?

Diese Einwände sind stark, weil sie an echte Werte appellieren – Barmherzigkeit, Gerechtigkeit, Vernunft, moralische Verantwortung. Muslimische Apologeten wie **Shabir Ally**, **Yasir Qadhi**, **Mohammed Hijab** und **Hamza Tzortzis** tragen sie oft mit großer Überzeugung vor. Zugleich ist die islamische Theologie selbst differenzierter als ihre populäre Darstellung: Der Prophet sagt nach Sahih al-Bukhari, niemand werde durch seine Taten gerettet, „nicht einmal ich, es sei denn, Allah umhüllt mich mit Seiner Barmherzigkeit"; die sunnitische Theologie kennt eigene Geheimnisse (die unerschaffene Rede Gottes, „bi-la kaifa"); und al-Ghazali hat tief über die Liebe nachgedacht.

Das christliche Gegenangebot ist nicht „weniger Gerechtigkeit" oder „billige Gnade", sondern ein Gott, in dem **Gerechtigkeit und Barmherzigkeit sich küssen** (Ps 85,11): der selbst die Kosten der Vergebung trägt, dessen Liebe dem Menschen vorausgeht, der von Ewigkeit her Liebe ist und der dem Menschen eine **gewisse Hoffnung** schenkt. Aus koptisch-orthodoxer Sicht gehört dazu ausdrücklich: Werke sind wichtig – als Frucht und Mitwirkung mit der Gnade, nicht als Gewichte auf einer Waage.`,
  strategy: `**1. Gemeinsames zuerst.** Beide Religionen preisen Gottes Barmherzigkeit und nehmen das Gericht ernst. Sag das ausdrücklich – es nimmt dem Gespräch die Schärfe.

**2. Keine Strohmänner.** Behaupte nicht, Muslime wollten sich das Paradies „verdienen". Zitiere lieber selbst Bukhari 6463 („nicht einmal ich …") – und frage dann: Worauf gründet diese Barmherzigkeit, und kannst du wissen, ob sie dir gilt?

**3. Empfohlene Reihenfolge:**
- **Gerechtigkeit:** Ist ein Gericht gerecht, in dem gute Taten schlechte aufwiegen? (Richter-Beispiel)
- **Barmherzigkeit:** Vergebung kostet immer den, der vergibt – im Kreuz trägt Gott selbst die Kosten.
- **Gewissheit:** 46:9 und 19:71 gegenüber 1 Joh 5,13 und Röm 8,38–39.
- **Liebe:** Liebt Gott zuerst – oder erst, wenn ich gut bin?
- **Gottesbild:** Nur der dreieinige Gott ist von Ewigkeit her Liebe.

**4. Typische Fallen:**
- Protestantische Formeln („Werke spielen keine Rolle", „einmal gerettet, immer gerettet") – sie sind nicht koptisch und bestätigen den Vorwurf der billigen Gnade.
- Das Bild vom zornigen Vater, der durch den Sohn besänftigt wird – das ist die Karikatur, die der Einwand angreift.
- Schiefe Trinitäts-Analogien (Wasser–Eis–Dampf).

**5. Ton:** Frag nach der Hoffnung deines Gegenübers. Die stärkste Frage ist oft die einfachste: „Weißt du, wie Gott dich am Ende richten wird?" – und dann hör zu.`,
  keyOpponents: [
    { name: 'Shabir Ally', role: 'Islamischer Apologet, Let the Quran Speak (Toronto)', work: 'Debatten zu Sühne, Vergebung und Erlösung' },
    { name: 'Yasir Qadhi', role: 'Islamischer Gelehrter, East Plano Islamic Center', work: 'Vortragsreihen über das Jenseits' },
    { name: 'Mohammed Hijab', role: 'Britischer muslimischer Apologet', work: 'Debatten über Gnade, Liebe und Trinität' },
    { name: 'Hamza Andreas Tzortzis', role: 'Britischer muslimischer Apologet', work: 'The Divine Reality (2016)' },
    { name: 'Zakir Naik', role: 'Indischer Prediger, Peace TV', work: 'Vorträge zur „Logik" des Islam' },
    { name: 'Ahmed Deedat', role: 'Südafrikanischer Debattierer (1918–2005)', work: 'Crucifixion or Cruci-Fiction?; Christ in Islam' },
  ],
  claims: [allahBarmherziger, heilDurchWerkeGerecht, islamEinfacherVernuenftiger, allahLiebtDieGuten],
};

export default topic;
