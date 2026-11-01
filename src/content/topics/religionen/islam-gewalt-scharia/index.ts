import type { Topic } from '../../../schema.ts';
import islamHeisstFrieden from './islam-heisst-frieden.ts';
import dschihadInnererKampf from './dschihad-innerer-kampf.ts';
import schwertverseKontext from './schwertverse-kontext.ts';
import schariaGerecht from './scharia-gerecht.ts';
import bibelGewalttaetiger from './bibel-gewalttaetiger.ts';

const topic: Topic = {
  id: 'islam-gewalt-scharia',
  category: 'religionen',
  group: 'Islam',
  order: 9,
  title: `Dschihad, Gewalt und Scharia`,
  subtitle: `Ist der Islam eine Religion des Friedens – und wie verhalten sich Koran und Bibel zur Gewalt?`,
  icon: 'swords',
  overview: `Kaum ein Thema ist so aufgeladen wie die Frage nach Islam und Gewalt. Auf der einen Seite stehen fast zwei Milliarden Muslime, von denen die allermeisten friedlich leben, und viele Gelehrte, die Terror klar verurteilen. Auf der anderen Seite stehen Koranverse wie 9:5 und 9:29, Hadithe wie Bukhari 6922 („Wer seine Religion wechselt, den tötet") und ein klassisches Recht, das den offensiven Dschihad als Gemeinschaftspflicht und die Todesstrafe für Apostasie kannte.

Muslimische Gesprächspartner antworten meist auf drei Ebenen: (1) **sprachlich** – „Islam heißt Frieden", „Dschihad heißt Anstrengung"; (2) **kontextuell** – die Schwertverse gälten nur für die Kriege des 7. Jahrhunderts; (3) **vergleichend** – die Bibel sei gewalttätiger als der Koran, und Christen hätten Kreuzzüge geführt. Dazu kommt die Verteidigung der Scharia als gerechte, von hohen Beweishürden geschützte Ordnung.

Die christliche Antwort muss zweierlei leisten: Sie muss **ehrlich** sein – die harten Texte des Alten Testaments und die Gewalt in der Kirchengeschichte zugeben – und sie muss **präzise** sein: zwischen Erzählung und Gebot, zwischen begrenzten und offenen Befehlen, zwischen Muslimen und klassischem Recht unterscheiden. Der entscheidende Gedanke ist die **Richtung der Offenbarung**: In der Bibel ist das letzte Wort der gekreuzigte Christus, der das Schwert verbietet; im Koran gehört Sure 9 zu den letzten Offenbarungen. Die koptische Kirche, die seit 1.300 Jahren unter islamischer Herrschaft lebt und 2015 21 Märtyrer in Libyen verlor, bringt in dieses Gespräch die Erfahrung einer Kirche ein, die durch Zeugnis, nicht durch das Schwert überlebt hat.`,
  strategy: `**Reihenfolge im Gespräch:**
1. **Respekt und Unterscheidung zuerst:** Sag ausdrücklich, dass du Muslime nicht für gewalttätig hältst. Es geht um Texte und klassisches Recht, nicht um deinen Nachbarn.
2. **Sprachliche Einwände klären** („islam-heisst-frieden", „dschihad-innerer-kampf"): kurz, sachlich, ohne Triumph. Islam = Hingabe; das Hadith vom „großen Dschihad" ist nach muslimischen Maßstäben schwach.
3. **Den Kontext gemeinsam lesen** (★ „schwertverse-kontext"): Lies 9:1–7 und 9:29 vollständig. Frage: Womit endet der Kampf in 9:5? Welche Kriterien nennt 9:29?
4. **Die Richtung der Offenbarung zeigen:** Altes Testament → Evangelium (Mt 26,52) gegenüber Mekka → Medina → Sure 9.
5. **Tu-quoque-Einwände ehrlich beantworten** („bibel-gewalttaetiger"): Gib Dtn 20 und die Kreuzzüge zu. Dann: Erzählung vs. Gebot, begrenzt vs. offen, Handeln gegen oder gemäß dem Gründer. Und: Der Koran billigt die Landnahme (5:21).
6. **Scharia** („scharia-gerecht"): Mit der Religionsfreiheit beginnen – „Darf ein Muslim Christ werden?" Das ist die menschlich verständlichste Frage.

**Ton und Fallen:**
- Niemals Muslime pauschal mit Terroristen gleichsetzen. Erkenne die Verurteilung des IS durch muslimische Gelehrte ausdrücklich an.
- Keine Verse ohne Zusammenhang zitieren – der Zusammenhang stützt das Argument ohnehin.
- Die christliche Gewaltgeschichte nicht beschönigen. Glaubwürdig ist, wer zuerst die eigenen Fehler benennt.
- Denk an die Kopten und andere verfolgte Christen: Rede so, dass du jedem Muslim danach noch in die Augen sehen kannst (1 Petr 3,15–16).`,
  keyOpponents: [
    { name: 'Shabir Ally', role: 'Islamischer Apologet, Let the Quran Speak' },
    { name: 'Jonathan A. C. Brown', role: 'Islamwissenschaftler, Georgetown University; „Misquoting Muhammad"' },
    { name: 'Javed Ahmad Ghamidi', role: 'Pakistanischer Reformgelehrter, Al-Mawrid; Lehre vom itmām al-ḥujja' },
    { name: 'Muhammad Abdel Haleem', role: 'Koranübersetzer, SOAS London' },
    { name: 'Mohammed Hijab', role: 'Islamischer Apologet, London' },
    { name: 'Mustafa Akyol', role: 'Publizist, „Islam without Extremes"' },
    { name: 'Zakir Naik', role: 'Islamischer Prediger, Peace TV' },
  ],
  claims: [islamHeisstFrieden, dschihadInnererKampf, schwertverseKontext, schariaGerecht, bibelGewalttaetiger],
  newPeople: [
    {
      id: 'johannes-nikiu',
      name: 'Johannes von Nikiu',
      years: '7. Jh.',
      era: 'patristisch',
      tradition: 'koptisch',
      title: 'Koptischer Bischof von Nikiu im Nildelta, Chronist',
      fields: ['Geschichte der arabischen Eroberung Ägyptens', 'Kirchengeschichte'],
      bio: 'Koptischer Bischof des späten 7. Jahrhunderts. Seine Weltchronik ist nur in einer äthiopischen Übersetzung erhalten und gehört zu den wichtigsten zeitnahen Quellen über die arabische Eroberung Ägyptens aus christlicher Sicht.',
      keyWorks: ['Chronik (äthiopische Übersetzung; engl. von R. H. Charles, 1916)'],
    },
  ],
};

export default topic;
