import type { Topic } from '../../../schema.ts';
import galilei from './galilei.ts';
import giordanoBruno from './giordano-bruno.ts';
import hypatiaBibliothek from './hypatia-bibliothek.ts';
import finsteresMittelalterFlacheErde from './finsteres-mittelalter-flache-erde.ts';
import konstantinVerfaelschte from './konstantin-verfaelschte.ts';
import reinkarnation553Gestrichen from './reinkarnation-553-gestrichen.ts';

const topic: Topic = {
  id: 'kirchengeschichte-mythen',
  category: 'geschichte',
  group: 'Kirchengeschichte & Mythen',
  order: 1,
  title: `Mythen der Kirchengeschichte`,
  subtitle: `Galilei, Giordano Bruno, Hypatia und die Bibliothek, flache Erde, Konstantin, Reinkarnation 553`,
  icon: 'landmark',
  overview: `Ein großer Teil der populären Religionskritik lebt von Geschichten: Galilei im Kerker, Bruno als Märtyrer der Wissenschaft, Christen, die die Bibliothek von Alexandrien verbrennen, ein Mittelalter, das an die flache Erde glaubte, ein Kaiser, der das Christentum erfand, ein Konzil, das die Reinkarnation aus der Bibel strich. Viele dieser Erzählungen gehen auf die „Konfliktthese" des 19. Jahrhunderts zurück (John William Draper 1874, Andrew Dickson White 1896) und wurden durch Carl Sagans „Cosmos" (1980), Neil deGrasse Tysons „Cosmos" (2014), den Film „Agora" (2009) und Dan Browns „Sakrileg" (2003) einem Millionenpublikum vermittelt.

Die heutige Wissenschaftsgeschichte – auch von Agnostikern und Atheisten wie Ronald Numbers, Stephen Jay Gould oder dem Blogger Tim O'Neill – hat die meisten dieser Mythen widerlegt oder stark relativiert. Das ist eine gute Nachricht für die Apologetik. Aber sie verpflichtet zur Ehrlichkeit: Galilei wurde Unrecht getan, Bruno wurde verbrannt, Hypatia wurde von Christen ermordet, Tempel wurden zerstört. Wer diese Schuld leugnet, verliert jede Glaubwürdigkeit; wer sie offen benennt und dann die Legenden korrigiert, gewinnt sie.

Zwei Themen berühren die **koptische Kirche** unmittelbar: die Zerstörung des Serapeums unter Papst Theophilus (391) und der Mord an Hypatia (415) im Umfeld des hl. Kyrill. Die koptische Kirche verehrt Kyrill wegen seiner Christologie – sie muss und kann zugleich klar sagen, dass Mord Sünde ist, wie es schon der christliche Historiker Sokrates tat. Auch die Reinkarnationsfrage hat einen koptischen Akzent: Die koptische Kirche erkennt das Konzil von 553 nicht an und lehnt die Seelenwanderung dennoch ab – aufgrund der Schrift und der Väter.`,
  strategy: `**Reihenfolge im Gespräch:**
1. **Zugeständnis zuerst:** „Ja, Galilei wurde Unrecht getan." – „Ja, Hypatia wurde von Christen ermordet." Das entwaffnet und zeigt, dass du nicht ideologisch argumentierst.
2. **Dann Fakten von Legende trennen:** keine Folter Galileis; Bruno vor allem wegen theologischer Häresien verurteilt; die große Bibliothek war 391 längst untergegangen; das Mittelalter kannte die Kugelgestalt; 313 war kein Staatsreligionsedikt; 553 wurde kein Bibelvers gestrichen.
3. **Säkulare Zeugen nennen:** Numbers, Gould, Russell, O'Neill, Heilbron, J. Z. Smith – wer die Gegenseite mit ihren eigenen Historikern konfrontiert, ist schwer zu widerlegen.
4. **Das Gesamtbild zeigen:** Kopernikus, Kepler, Galilei, Newton, Lemaître waren Christen; Universitäten entstanden im christlichen Europa; antike Texte überlebten durch christliche Abschreiber.
5. **Prüfbare Fragen stellen:** „Welche Quelle berichtet das?" – „Welcher Vers fehlt nach 553?"

**Fallen:** Nichts beschönigen (Bruno, Hypatia, Serapeum). Keine Gegenmythen (Umar-Legende gegen Muslime). Nicht pauschal alle Kritiker als Lügner darstellen – viele haben die Mythen in gutem Glauben übernommen.`,
  keyOpponents: [
    { name: 'Neil deGrasse Tyson', role: 'Astrophysiker, Moderator', work: 'Cosmos: A Spacetime Odyssey (2014)' },
    { name: 'Carl Sagan', role: 'Astronom (†1996)', work: 'Cosmos (1980)' },
    { name: 'John William Draper', role: 'Begründer der Konfliktthese (†1882)', work: 'History of the Conflict between Religion and Science (1874)' },
    { name: 'Andrew Dickson White', role: 'Historiker (†1918)', work: 'A History of the Warfare of Science with Theology in Christendom (1896)' },
    { name: 'Dan Brown', role: 'Romanautor', work: 'The Da Vinci Code (2003)' },
  ],
  claims: [galilei, giordanoBruno, hypatiaBibliothek, finsteresMittelalterFlacheErde, konstantinVerfaelschte, reinkarnation553Gestrichen],
  newPeople: [
    {
      id: 'sokrates-scholastikos',
      name: 'Sokrates Scholastikos',
      years: 'ca. 380 – nach 439',
      era: 'patristisch',
      tradition: 'christlich',
      title: 'Kirchenhistoriker in Konstantinopel',
      fields: ['Kirchengeschichte', 'Spätantike', 'Hypatia'],
      bio: 'Christlicher Laie und vermutlich Rechtsgelehrter aus Konstantinopel. Setzte die Kirchengeschichte des Eusebius für die Jahre 305 bis 439 fort und gilt als vergleichsweise maßvoller, um Ausgewogenheit bemühter Historiker. Sein Bericht ist die wichtigste zeitnahe Quelle zum Tod Hypatias.',
      keyWorks: ['Kirchengeschichte (Historia ecclesiastica), 7 Bücher'],
      caveat: 'Zeigte Sympathien für die Novatianer; kein Kirchenvater im Sinne einer Lehrautorität, sondern Historiker.',
    },
    {
      id: 'james-hannam',
      name: 'James Hannam',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'christlich',
      title: 'Wissenschaftshistoriker (promoviert in Geschichte und Philosophie der Wissenschaften, Cambridge)',
      fields: ['Wissenschaftsgeschichte', 'Mittelalter', 'Mythen über Religion und Wissenschaft'],
      bio: 'Britischer Historiker, dessen Buch über die mittelalterlichen Grundlagen der Naturwissenschaft für den Wissenschaftsbuchpreis der Royal Society nominiert wurde. Schrieb auch über das Schicksal der Bibliothek von Alexandrien und über das antike Weltbild.',
      keyWorks: ['God\'s Philosophers (2009; US-Titel: The Genesis of Science, 2011)', 'The Globe. How the Earth Became Round (2023)'],
    },
    {
      id: 'jeffrey-burton-russell',
      name: 'Jeffrey Burton Russell',
      years: '1934–2018',
      era: 'modern',
      tradition: 'christlich',
      title: 'Mediävist, University of California, Santa Barbara',
      fields: ['Mittelalter', 'Geistesgeschichte', 'Mythos der flachen Erde'],
      bio: 'Historiker des Mittelalters, bekannt für eine mehrbändige Geschichte der Vorstellungen vom Teufel und für den Nachweis, dass der Mythos vom mittelalterlichen Glauben an die flache Erde im 19. Jahrhundert entstand.',
      keyWorks: ['Inventing the Flat Earth. Columbus and Modern Historians (1991)', 'A History of Heaven (1997)'],
    },
    {
      id: 'peter-leithart',
      name: 'Peter J. Leithart',
      years: 'geb. 1959',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Theologe, Präsident des Theopolis Institute',
      fields: ['Konstantin', 'Kirchengeschichte', 'Politische Theologie'],
      bio: 'Presbyterianischer Theologe und Autor zahlreicher Bücher zu Bibelauslegung und Kirchengeschichte. Legte mit „Defending Constantine" eine viel diskutierte Neubewertung Konstantins vor, die sich gegen dessen Dämonisierung wie Verklärung wendet.',
      keyWorks: ['Defending Constantine (2010)'],
    },
  ],
};

export default topic;
