import type { Topic } from '../../../schema.ts';
import religionNebenprodukt from './religion-nebenprodukt.ts';
import gottesGen from './gottes-gen.ts';
import kinderIndoktrination from './kinder-indoktrination.ts';

const topic: Topic = {
  id: 'kognitive-religionswissenschaft',
  category: 'mensch',
  group: 'Kognitive Religionswissenschaft',
  order: 1,
  title: `Kognitive Religionswissenschaft`,
  subtitle: `Ist Glaube ein Fehlalarm des Gehirns, ein Gen oder Indoktrination?`,
  icon: 'network',
  overview: `Seit den 1990er-Jahren erforscht die Kognitive Religionswissenschaft (KRW), warum religiöse Vorstellungen dem menschlichen Geist so leichtfallen. Ihre Befunde sind solide: Wir erkennen überall Akteure und Absichten, Kinder deuten die Natur spontan zweckhaft, wir trennen intuitiv Geist und Körper, und „minimal kontraintuitive" Konzepte prägen sich gut ein. Populäre Autoren wie Dawkins, Dennett und Boyer folgern daraus: Religion ist ein Nebenprodukt von Denkwerkzeugen, die für anderes entstanden sind – ein Fehlalarm des Gehirns. Dazu kommen die Schlagzeile vom „Gottes-Gen" und der Vorwurf, Kinder würden nur durch Indoktrination gläubig.

Für Christen ist dieses Feld überraschend günstig. Die Bibel erwartet eine natürliche Gotteserkenntnis und zugleich ihre Verzerrung (Röm 1,19–23); die Väter – allen voran Athanasius in „Gegen die Heiden" – lehrten, dass der Mensch Gott durch seine Seele und durch die Schöpfung erkennen kann. Einer der Pioniere der KRW, Justin Barrett, ist selbst Christ und sieht in den Befunden eine Bestätigung des biblischen Menschenbildes.

Der zentrale logische Punkt ist der **genetische Fehlschluss**: Eine Erklärung, *wie* Menschen zu einer Überzeugung kommen, entscheidet nicht, *ob* sie wahr ist. Wer Gottesglauben durch kognitive Mechanismen „entlarvt", entlarvt mit derselben Logik den Glauben an andere Personen – und setzt im Übrigen voraus, dass es keinen Gott gibt. Das „Gottes-Gen" war ein Buchtitel ohne Fachveröffentlichung, und der Indoktrinationsvorwurf übersieht, dass alle Eltern eine Weltanschauung weitergeben und Kinder Gott teils von sich aus vermuten.`,
  strategy: `**1. Die Befunde anerkennen.** Sag: „Die Kognitive Religionswissenschaft hat recht: Unser Geist ist für Gottesglauben empfänglich. Genau das sagt auch die Bibel (Röm 1,19–20)." Damit drehst du das Argument um.

**2. Den Fehlschluss benennen.** „Wie eine Überzeugung entsteht, sagt nichts über ihre Wahrheit." Benutze das Paritätsargument: „Dieselben Mechanismen lassen dich glauben, dass ich Gedanken habe. Ist das deshalb ein Fehlalarm?"

**3. Den Zirkel aufzeigen.** „Um zu wissen, dass ‚Gott' ein Fehlalarm des Akteursdetektors ist, musst du schon wissen, dass es Gott nicht gibt."

**4. Justin Barrett nennen.** Dass ein Pionier des Feldes Christ ist und die Befunde glaubensfreundlich deutet, entkräftet den Eindruck, die Wissenschaft habe den Glauben erledigt.

**5. Zu den Gründen überleiten.** Die KRW ist neutral; die Gottesfrage entscheidet sich an Argumenten (Kosmologie, Feinabstimmung, Moral, Auferstehung).

**Fallen:**
- Nicht behaupten, „weil Religion natürlich ist, ist sie wahr" – das ist der umgekehrte Fehlschluss.
- Kein „Gottes-Gen" oder „Gottesmodul" als Beweis anführen.
- Beim Indoktrinationsvorwurf angstbasierte Erziehung nicht verteidigen, sondern ehrlich verurteilen.`,
  keyOpponents: [
    { name: 'Pascal Boyer', role: 'Anthropologe, Washington University in St. Louis', work: 'Religion Explained (2001)' },
    { name: 'Daniel Dennett', role: 'Philosoph, Tufts University (gest. 2024)', work: 'Breaking the Spell (2006)' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The God Delusion (2006), Kap. 5 und 9' },
    { name: 'Scott Atran', role: 'Anthropologe, CNRS / University of Michigan', work: 'In Gods We Trust (2002)' },
    { name: 'Paul Bloom', role: 'Psychologe, Yale / University of Toronto', work: '„Is God an Accident?" (2005)' },
    { name: 'Dean Hamer', role: 'Genetiker', work: 'The God Gene (2004)' },
  ],
  claims: [religionNebenprodukt, gottesGen, kinderIndoktrination],
  newPeople: [
    {
      id: 'justin-barrett',
      name: 'Justin L. Barrett',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'christlich',
      title: 'Psychologe, Pionier der Kognitiven Religionswissenschaft (u. a. Oxford, Fuller Theological Seminary)',
      fields: ['Kognitive Religionswissenschaft', 'Entwicklungspsychologie', 'Religionspsychologie'],
      bio: 'Einer der Begründer der Kognitiven Religionswissenschaft; führte den Begriff der „hypersensiblen Akteurserkennung" (HADD) in die Religionsforschung ein und erforschte die natürliche Religiosität von Kindern. Als bekennender Christ argumentiert er, dass die Natürlichkeit des Glaubens kein Argument gegen, sondern eher eines für seine Vernünftigkeit ist.',
      keyWorks: ['Why Would Anyone Believe in God? (2004)', 'Cognitive Science, Religion, and Theology (2011)', 'Born Believers: The Science of Children\'s Religious Belief (2012)'],
    },
  ],
};

export default topic;
