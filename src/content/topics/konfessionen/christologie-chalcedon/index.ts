import type { Topic } from '../../../schema.ts';
import koptenSindMonophysiten from './kopten-sind-monophysiten.ts';
import chalcedonMassDerOrthodoxie from './chalcedon-mass-der-orthodoxie.ts';
import nestoriusHatteRecht from './nestorius-hatte-recht.ts';
import dioskurHaeretiker from './dioskur-haeretiker.ts';

const topic: Topic = {
  id: 'christologie-chalcedon',
  category: 'konfessionen',
  group: 'Christologie & Konzilien',
  order: 1,
  title: `Christologie und Chalcedon`,
  subtitle: `„Eine fleischgewordene Natur des Gott-Logos" – der Glaube des hl. Kyrill, das Konzil von 451 und die Frage, ob die Kopten „Monophysiten" sind`,
  icon: 'merge',
  overview: `Kaum ein Vorwurf trifft Kopten so oft wie dieser: „Ihr seid Monophysiten – ihr leugnet die menschliche Natur Christi." Er steht in Lexika, in Predigten und in Gesprächen mit östlich-orthodoxen, katholischen und evangelischen Christen. Wer ihn nicht beantworten kann, kann die eigene Kirche nicht erklären. Deshalb ist dieses Thema für die koptische Identität zentral.

**Die Vorgeschichte:** Im 5. Jahrhundert stritt die Kirche darüber, wie Gottheit und Menschheit in Christus vereint sind. **Nestorius** von Konstantinopel lehnte den Titel *Theotokos* (Gottesgebärerin) ab und sprach so, dass man in Christus zwei Subjekte annehmen musste. Der heilige **Kyrill von Alexandrien** verteidigte den einen Christus: Der ewige Logos selbst ist Fleisch geworden; es gibt „**eine fleischgewordene Natur (Physis) des Gott-Logos**" (*mia physis tou theou logou sesarkōmenē*). Das Konzil von **Ephesus (431)** bestätigte Kyrill. 433 versöhnte sich Kyrill mit Johannes von Antiochien (Unionsformel). Danach lehrte der Mönch **Eutyches**, Christi Menschheit sei nicht wesensgleich mit unserer – die Kopten verurteilen ihn bis heute.

**Chalcedon (451)** formulierte, Christus sei „**in zwei Naturen**" zu erkennen, „unvermischt, unverwandelt, ungetrennt, ungesondert", nahm den **Tomus Leos** an und setzte den alexandrinischen Papst **Dioskur** ab. Die Kirchen Ägyptens, Syriens, Armeniens und Äthiopiens lehnten das Konzil ab: Sie sahen in der Formel „in zwei Naturen" und im Tomus eine Öffnung zum Nestorianismus und hielten an Kyrills Sprache fest. So entstand die Trennung zwischen den **orientalisch-orthodoxen** (Kopten, Syrer, Armenier, Äthiopier, Eritreer, Malankara) und den **östlich-orthodoxen** bzw. westlichen Kirchen.

**Die Wende im 20. Jahrhundert:** In offiziellen Dialogen erkannten beide Seiten, dass der Streit weitgehend **terminologisch** war. Paul VI. und Schenuda III. (1973), die koptisch-katholische Formel (1988) und vor allem die Erklärungen der gemeinsamen Kommission der östlich- und orientalisch-orthodoxen Kirchen (**Anba-Bischoi-Kloster 1989, Chambésy 1990**) bekennen: Beide Familien haben „immer treu denselben authentischen orthodoxen christologischen Glauben bewahrt" – in unterschiedlicher Terminologie. Die koptische Kirche ist **miaphysitisch** (eine vereinte Natur aus zwei), **nicht monophysitisch** (eine einzige Natur, in der die Menschheit verschwindet).`,
  strategy: `**1. Zuerst den Glauben bekennen, dann die Terminologie erklären.** Beginne mit dem Bekenntnis am Ende der koptischen Liturgie: Christus hat sein Fleisch „eins gemacht mit seiner Gottheit ohne Vermischung, ohne Vermengung und ohne Verwandlung", und seine Gottheit hat sich „nicht einen Augenblick" von seiner Menschheit getrennt. Damit ist der Vorwurf inhaltlich schon widerlegt.

**2. „Mia" ist nicht „monē".** Erkläre den Unterschied: „Eine vereinte Natur" (wie Leib und Seele einen Menschen bilden) ist nicht „eine einzige Natur". Wir verurteilen Eutyches.

**3. Die gemeinsamen Erklärungen zitieren.** 1973, 1988, 1989, 1990 – offizielle Dokumente, die dein Gegenüber prüfen kann.

**4. Die Begriffe klären.** „Physis" bedeutete bei Kyrill oft das konkrete Sein (nahe an „Hypostase"), in Chalcedon das Wesen („Usia"). Wer das weiß, versteht, warum beide Seiten 1500 Jahre aneinander vorbeiredeten.

**5. Fair bleiben.** Gib zu, dass es auf beiden Seiten Gewalt, Politik und Polemik gab (Ephesus 449, Chalcedon, die Verfolgungen danach). Sprich mit Respekt von Papst Leo und dem Konzil von Chalcedon; die koptische Kirche erkennt es nicht als ökumenisch an, aber sie verketzert die östlich-orthodoxen Christen heute nicht.

**6. Fallen meiden.** Sag nie „Christus hatte nur eine Natur" ohne Erklärung – das ist genau die Aussage, die man dir vorwirft. Und behaupte nicht, Chalcedon sei „nestorianisch"; die Dialoge haben gezeigt, dass es orthodox verstanden werden kann.`,
  keyOpponents: [
    { name: 'Papst Leo I. von Rom', role: 'Bischof von Rom (440–461)', work: 'Tomus ad Flavianum (Brief 28, 449); Brief 95 („latrocinium")' },
    { name: 'Konzil von Chalcedon', role: '4. ökumenisches Konzil der byzantinischen und lateinischen Kirche (451)', work: 'Glaubensdefinition „in zwei Naturen"' },
    { name: 'Johannes von Damaskus', role: 'Byzantinischer Kirchenvater (8. Jh.)', work: 'De haeresibus 83 („Ägypter, auch Monophysiten genannt")' },
    { name: 'Traditionalistische östlich-orthodoxe Kritiker', role: 'u. a. Stimmen vom Berg Athos', work: 'Ablehnung der Dialogerklärungen von 1989/90' },
    { name: 'Nestorius / Kirche des Ostens', role: 'Erzbischof von Konstantinopel (428–431) und seine Verehrer', work: 'Liber Heraclidis (Bazar des Heraklides)' },
  ],
  claims: [koptenSindMonophysiten, chalcedonMassDerOrthodoxie, nestoriusHatteRecht, dioskurHaeretiker],
  newPeople: [
    {
      id: 'v-c-samuel',
      name: 'V. C. Samuel',
      years: '1912–1998',
      era: 'modern',
      tradition: 'orientalisch',
      title: 'Priester und Theologe der Malankara-Orthodoxen Syrischen Kirche (Indien)',
      fields: ['Christologie', 'Konzil von Chalcedon', 'Ökumenischer Dialog'],
      bio: 'Indischer orientalisch-orthodoxer Theologe, der u. a. in Äthiopien und Indien lehrte und an den inoffiziellen Konsultationen zwischen östlich- und orientalisch-orthodoxen Theologen (ab 1964) mitwirkte. Sein Hauptwerk untersucht Chalcedon aus nicht-chalcedonensischer Sicht anhand der Quellen.',
      keyWorks: ['The Council of Chalcedon Re-Examined (1977)'],
    },
    {
      id: 'john-meyendorff',
      name: 'John Meyendorff',
      years: '1926–1992',
      era: 'modern',
      tradition: 'orthodox',
      title: 'Orthodoxer Priester, Patristiker und Byzantinist; Dekan des St. Vladimir’s Seminary (New York)',
      fields: ['Byzantinische Theologie', 'Christologie', 'Kirchengeschichte', 'Ost-West-Beziehungen'],
      bio: 'Einer der bedeutendsten orthodoxen Theologen des 20. Jahrhunderts. Er zeigte, dass die byzantinische Christologie nach Chalcedon (Neuchalcedonismus, Konzil von 553) bewusst an Kyrill anknüpfte, und untersuchte die politischen Faktoren der Kirchenspaltungen.',
      keyWorks: ['Christ in Eastern Christian Thought (1969)', 'Imperial Unity and Christian Divisions: The Church 450–680 A.D. (1989)', 'Byzantine Theology (1974)'],
      caveat: 'Byzantinisch-orthodoxer (chalcedonensischer) Theologe; er verteidigt Chalcedon, würdigt aber die kyrillische Christologie der orientalischen Orthodoxen.',
    },
  ],
};

export default topic;
