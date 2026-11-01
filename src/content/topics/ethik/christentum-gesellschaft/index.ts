import type { Topic } from '../../../schema.ts';
import christentumKolonialismus from './christentum-kolonialismus.ts';
import kircheHeuchlerisch from './kirche-heuchlerisch.ts';
import keinePriesterinnen from './keine-priesterinnen.ts';
import christentumOhneNutzen from './christentum-ohne-nutzen.ts';

const topic: Topic = {
  id: 'christentum-gesellschaft',
  category: 'ethik',
  group: 'Christentum & Gesellschaft',
  order: 1,
  title: `Christentum und Gesellschaft`,
  subtitle: `Kolonialismus, Heuchelei, Frauen im Priesteramt und die Frage, was die Welt dem Christentum verdankt`,
  icon: 'building-2',
  overview: `Viele Einwände gegen das Christentum sind heute nicht philosophisch, sondern **gesellschaftlich**: Die Kirche habe Kolonialismus und Unterdrückung gerechtfertigt, sie sei reich und heuchlerisch, sie diskriminiere Frauen, und die Welt wäre ohne sie ohnehin besser dran. Diese Einwände sind oft persönlich gefärbt – durch Erfahrungen mit Kirchenvertretern, durch Berichte über Missbrauch, durch das Bild eines mächtigen, weltfremden Apparats.

Die christliche Antwort beginnt mit **Ehrlichkeit**: Päpstliche Bullen haben Eroberung und Versklavung legitimiert, kirchliche Internatsschulen haben indigenen Kindern schweres Unrecht zugefügt, Kirchenführer haben in Luxus gelebt und Missbrauch vertuscht. Wer das beschönigt, verliert jede Glaubwürdigkeit. Zugleich gehört zur ganzen Wahrheit, was Historiker – oft ohne christliche Absicht – heute wieder betonen: Die Idee der gleichen Würde aller Menschen, Krankenhäuser für Fremde, die Abschaffung der Sklaverei, Bildung für alle und selbst die Menschenrechte haben tiefe christliche Wurzeln (Tom Holland, Larry Siedentop, Kyle Harper, Jürgen Habermas). Der Politikwissenschaftler Robert Woodberry zeigte, dass Missionare Bildung und Demokratie in vielen Ländern entscheidend förderten.

Die koptische Kirche bringt eine besondere Perspektive ein: Sie hat **nie kolonisiert**, sondern war 1.500 Jahre lang selbst eine Kirche unter fremder Herrschaft. Sie erhebt keine Kirchensteuer, lebt von freiwilligen Gaben und setzt eine Tradition der Diakonie fort, die bis zu Dionysius von Alexandrien, dem hl. Antonius und Schenute zurückreicht. Sie hält am apostolischen Priestertum fest und ehrt zugleich Frauen als Diakonissen, Lehrerinnen und Heilige – allen voran die Theotokos.`,
  strategy: `**1. Den berechtigten Kern anerkennen.** Fast jeder dieser Einwände hat einen wahren Kern. Beginne mit einem klaren Zugeständnis: „Da hast du recht, und das ist eine Schande."

**2. Mit Jesus gegen die Missstände argumentieren.** Heuchelei, Gier und Machtmissbrauch verurteilt niemand schärfer als Jesus selbst (Mt 23). Zeige: Die Kritik misst die Kirche an Christus – und das ist der richtige Maßstab.

**3. Die ganze Bilanz zeigen.** Nenne konkrete, belegte Beispiele: Dionysius in der Seuche, die Basilias, Telemachus, Las Casas, Wilberforce, Woodberrys Studie, Charles Malik und die Menschenrechte. Kein „Christen haben nur Gutes getan", sondern „Christen haben auch – und oft entscheidend – Gutes getan".

**4. Die Wurzelfrage stellen.** „Woher stammt deine Überzeugung, dass jeder Mensch gleiche Würde hat?" Die meisten Kritiker teilen christliche Werte, ohne es zu wissen (Glen Scrivener: „die Luft, die wir atmen").

**5. Das koptische Zeugnis einbringen.** Nie Kolonialmacht, sondern verfolgte Minderheit; Diakonie ohne Kirchensteuer; Frauen als Diakonissen und Heilige.

**Fallen:** Missbrauch nie relativieren. Keine falschen Zitate (das englische „Habermas-Zitat", unsichere Zuschreibungen wie „Bibel und Land"). Frauen nicht abwerten, wenn du das Priestertum begründest. Andere Kulturen nicht herabsetzen.`,
  keyOpponents: [
    { name: 'Bertrand Russell', role: 'Philosoph', work: 'Why I Am Not a Christian (1927)' },
    { name: 'Christopher Hitchens', role: 'Publizist und Religionskritiker', work: 'God Is Not Great (2007)' },
    { name: 'Steven Pinker', role: 'Kognitionspsychologe, Harvard', work: 'Enlightenment Now (2018)' },
    { name: 'Karlheinz Deschner', role: 'Schriftsteller und Kirchenkritiker', work: 'Kriminalgeschichte des Christentums (1986–2013)' },
    { name: 'R. S. Sugirtharajah', role: 'Postkolonialer Bibelwissenschaftler', work: 'Postcolonial Criticism and Biblical Interpretation (2002)' },
    { name: 'Elisabeth Schüssler Fiorenza', role: 'Feministische Neutestamentlerin', work: 'In Memory of Her (1983)' },
  ],
  claims: [christentumKolonialismus, kircheHeuchlerisch, keinePriesterinnen, christentumOhneNutzen],
  newPeople: [
    {
      id: 'robert-woodberry',
      name: 'Robert D. Woodberry',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'christlich',
      title: 'Religionssoziologe und Politikwissenschaftler',
      fields: ['Mission und Demokratie', 'Religionssoziologie', 'Koloniale Geschichte'],
      bio: 'Amerikanischer Sozialwissenschaftler, der über viele Jahre Daten zur Wirkung protestantischer Missionen in ehemaligen Kolonien zusammentrug. Seine Studie in der American Political Science Review (2012) zeigt einen starken Zusammenhang zwischen missionarischem Wirken und der späteren Entwicklung von Bildung, Zivilgesellschaft und Demokratie.',
      keyWorks: ['„The Missionary Roots of Liberal Democracy", American Political Science Review 106 (2012)'],
    },
    {
      id: 'lamin-sanneh',
      name: 'Lamin Sanneh',
      years: '1942–2019',
      era: 'modern',
      tradition: 'katholisch',
      title: 'Missions- und Religionshistoriker, Yale University',
      fields: ['Weltchristentum', 'Mission und Kultur', 'Afrikanisches Christentum', 'Islam in Afrika'],
      bio: 'In Gambia geboren und in einer muslimischen Familie aufgewachsen, wurde er Christ und lehrte als Professor in Harvard und Yale. Er zeigte, dass die Übersetzung der Bibel in Volkssprachen afrikanische Kulturen gestärkt hat, und betonte, dass das Christentum seinem Wesen nach keiner Kultur – auch nicht der westlichen – allein gehört.',
      keyWorks: ['Translating the Message (1989)', 'Whose Religion Is Christianity? (2003)', 'Disciples of All Nations (2008)'],
    },
    {
      id: 'las-casas',
      name: 'Bartolomé de las Casas',
      years: 'ca. 1484–1566',
      era: 'neuzeit',
      tradition: 'katholisch',
      title: 'Dominikaner, Bischof von Chiapas, „Verteidiger der Indios"',
      fields: ['Rechte der Ureinwohner', 'Kritik der Conquista', 'Menschenwürde'],
      bio: 'Spanischer Kolonist, der sich zum Anwalt der Ureinwohner Amerikas bekehrte, Dominikaner wurde und jahrzehntelang gegen ihre Versklavung und Ausbeutung kämpfte. In der Disputation von Valladolid (1550–1551) widersprach er der Lehre von den „Sklaven von Natur". Einen frühen Vorschlag, afrikanische Sklaven einzusetzen, bereute er später ausdrücklich.',
      keyWorks: ['Brevísima relación de la destrucción de las Indias (1552)', 'Historia de las Indias'],
    },
    {
      id: 'glen-scrivener',
      name: 'Glen Scrivener',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'anglikanisch',
      title: 'Evangelist und Autor, Speak Life',
      fields: ['Christentum und westliche Kultur', 'Apologetik', 'Evangelisation'],
      bio: 'Britischer anglikanischer Geistlicher und Evangelist, der zeigt, dass Werte wie Gleichheit, Mitgefühl, Freiheit und Fortschritt, die säkulare Menschen für selbstverständlich halten, historisch aus dem Christentum hervorgegangen sind.',
      keyWorks: ['The Air We Breathe (2022)'],
    },
    {
      id: 'charles-malik',
      name: 'Charles Malik',
      years: '1906–1987',
      era: 'modern',
      tradition: 'orthodox',
      title: 'Libanesischer Philosoph und Diplomat, Mitverfasser der Allgemeinen Erklärung der Menschenrechte',
      fields: ['Menschenrechte', 'Philosophie der Person', 'Christentum und Politik'],
      bio: 'Orthodoxer Christ aus dem Libanon, Philosoph und Diplomat. Als Berichterstatter der UN-Menschenrechtskommission gehörte er zu den Hauptautoren der Allgemeinen Erklärung der Menschenrechte von 1948 und setzte sich dafür ein, die Würde der Person als dem Staat vorgegeben zu begründen. Später war er Präsident der UN-Generalversammlung.',
      keyWorks: ['Man in the Struggle for Peace (1963)', 'The Two Tasks (1980)'],
    },
  ],
};

export default topic;
