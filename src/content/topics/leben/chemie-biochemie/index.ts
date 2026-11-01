import type { Topic } from '../../../schema.ts';
import homochiralitaetErklaert from './homochiralitaet-erklaert.ts';
import genetischerCodeZufall from './genetischer-code-zufall.ts';
import dnaIstKeineInformation from './dna-ist-keine-information.ts';
import selbstorganisation from './selbstorganisation.ts';

const topic: Topic = {
  id: 'chemie-biochemie',
  category: 'leben',
  group: 'Chemie & Biochemie',
  order: 1,
  title: `Chemie und Biochemie des Lebens`,
  subtitle: `Homochiralität, genetischer Code, Information in der DNA und die Grenzen der Selbstorganisation`,
  icon: 'hexagon',
  overview: `Während der Themenblock „Ursprung des Lebens" die großen Szenarien behandelt (RNA-Welt, Tiefseequellen, Protozellen), geht es hier um vier Grundfragen der Lebenschemie, die in jeder Debatte auftauchen: **Warum sind die Moleküle des Lebens einhändig?** (Homochiralität) – **Woher kommt der genetische Code?** – **Ist DNA wirklich Information oder nur Chemie?** – **Kann Selbstorganisation biologische Ordnung erklären?**

Die Gegenseite verfügt über starke Teilantworten: elegante Verstärkungsreaktionen für Händigkeit (Soai, Viedma, Magnetit 2023), drei ausgearbeitete Theorien zum Code (Stereochemie, Koevolution, Selektion auf Fehlertoleranz), einen präzisen Informationsbegriff nach Shannon und die nobelpreisgekrönte Theorie dissipativer Strukturen (Prigogine). Die ehrliche Antwort lautet: Jede dieser Teilantworten ist echte Wissenschaft – und keine löst das Kernproblem. Die Fachliteratur selbst nennt den Ursprung der Homochiralität offen und den Ursprung des Codes ein „universelles Rätsel" (Koonin & Novozhilov 2009).

Der Dreh- und Angelpunkt ist die **Information**: Die Basenfolge der DNA ist chemisch nicht festgelegt und codiert über eine willkürliche Zuordnung Proteine – Information im strengen Sinn, wie selbst der Evolutionsbiologe John Maynard Smith betonte. Hier sprechen Stephen Meyer (Information), William Dembski (spezifizierte Komplexität), Marcos Eberlin (Voraussicht) und Robert Marks (evolutionäre Algorithmen) in ihrem Fach; Antony Flew nannte die DNA-Forschung einen Grund für seine Abkehr vom Atheismus. Theologisch ist der Rahmen entspannt: Die Väter (Basilius, Augustinus, Athanasius) bejahten von Gott verliehene Eigenkräfte der Natur und sahen die Ordnung der Welt als Werk des Logos.`,
  strategy: `**Reihenfolge im Gespräch:**
1. **Shannon sofort zugestehen:** Sag selbst, dass Shannon-Information keine Bedeutung misst und durch Mutation steigen kann. Dann wechselst du zur *funktionalen* Information (Szostak 2003; Hazen et al. 2007) – das nimmt dem Gegenüber sein stärkstes Argument.
2. **Tinte-und-Text-Bild:** „Die Chemie der Tinte bestimmt nicht den Text; die Chemie der Basen bestimmt nicht die Sequenz." Das versteht jeder.
3. **Code als echte Konvention:** Der Code wird über Adapter (tRNA) und Synthetasen umgesetzt, die selbst nach dem Code gebaut sind (Henne-Ei). „Eingefroren" erklärt Stabilität, nicht Entstehung.
4. **Ordnung vs. Information:** Bei Selbstorganisation zuerst zugestehen (offene Systeme bilden Ordnung), dann unterscheiden: Wirbel und Kristalle sind regelmäßig, Gene sind aperiodisch und funktional.
5. **Homochiralität als Teil des Gesamtbilds**, nicht als Einzelbeweis: jeder Mechanismus braucht Spezialbedingungen; Leben braucht L-Aminosäuren *und* D-Zucker dauerhaft.
6. **Schluss getrennt führen:** Erst Begriffe und Befunde klären, dann den Schluss auf die beste Erklärung (siehe „Gott der Lücken").

**Fallen:**
- Keine Vermischung von Shannon-Information und Bedeutung.
- Kein „Zweiter Hauptsatz verbietet Leben".
- Ps 139 nicht als „DNA-Prophezeiung" verwenden.
- Flew nicht als Christen darstellen (er wurde Deist); stütze dich auf sein Interview von 2004.`,
  keyOpponents: [
    { name: 'Eugene V. Koonin', role: 'Evolutionsbiologe, NCBI (NIH)', work: '„Origin and Evolution of the Genetic Code: The Universal Enigma" (2009)' },
    { name: 'Donna G. Blackmond', role: 'Chemikerin, Scripps Research', work: 'Ursprung der Homochiralität' },
    { name: 'Stuart Kauffman', role: 'Theoretischer Biologe', work: 'At Home in the Universe (1995)' },
    { name: 'Paul E. Griffiths', role: 'Wissenschaftsphilosoph, University of Sydney', work: '„Genetic Information: A Metaphor in Search of a Theory" (2001)' },
    { name: 'Jeffrey Shallit', role: 'Informatiker, University of Waterloo', work: 'Kritik an Dembskis spezifizierter Komplexität' },
    { name: 'Dave Farina', role: 'Wissenschafts-YouTuber („Professor Dave Explains")' },
  ],
  claims: [homochiralitaetErklaert, genetischerCodeZufall, dnaIstKeineInformation, selbstorganisation],
};

export default topic;
