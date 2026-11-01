import type { Topic } from '../../../schema.ts';
import kambrischeExplosionKeinProblem from './kambrische-explosion-kein-problem.ts';
import uebergangsformen from './uebergangsformen.ts';
import menschlicheEvolutionBelegt from './menschliche-evolution-belegt.ts';
import konvergenzZufall from './konvergenz-zufall.ts';
import lueckenWerdenGeschlossen from './luecken-werden-geschlossen.ts';

const topic: Topic = {
  id: 'palaeontologie',
  category: 'leben',
  group: 'Paläontologie',
  order: 1,
  title: `Fossilbericht`,
  subtitle: `Kambrische Explosion, Übergangsformen, menschliche Herkunft – was die Steine erzählen`,
  icon: 'bone',
  overview: `Der Fossilbericht ist das Archiv der Lebensgeschichte. Für Paläontologen wie Donald Prothero, Neil Shubin oder Charles Marshall belegt er die Evolution eindrucksvoll: Tiktaalik zwischen Fisch und Landwirbeltier, Archaeopteryx und gefiederte Dinosaurier, die Reihe früher Wale, Tausende Homininen-Fossilien. Christen, die behaupten, es gebe „keine einzige Übergangsform", verlieren diese Debatte zu Recht.

Zugleich zeigt der Fossilbericht ein Muster, das schon Darwin beunruhigte und das sich bis heute nicht aufgelöst hat: **abruptes Auftreten neuer Baupläne und lange Stasis**. Das bekannteste Beispiel ist die kambrische Explosion vor rund 538 Millionen Jahren, in der die meisten Tierstämme in geologisch kurzer Zeit erscheinen; Darwin nannte sie einen „gültigen Einwand" gegen seine Theorie. Stephen Jay Gould und Niles Eldredge entwickelten das Modell des „unterbrochenen Gleichgewichts", um Abruptheit und Stasis evolutionär zu erklären. Stephen Meyer („Darwin's Doubt", 2013) sieht darin einen Hinweis auf Design – sein Buch wurde von Marshall in *Science* scharf kritisiert; der Kambrium-Experte Simon Conway Morris, der Evolution akzeptiert, betont dennoch die Realität der Explosion und die allgegenwärtige Konvergenz.

Die koptisch-orthodoxe Kirche hat **kein Dogma über die Erdgeschichte**. Sie bekennt Gott als Ursprung aller Lebensformen und den Menschen als Geschöpf nach Gottes Bild; Adam und Eva sind reale Personen. Die eigentliche Frage ist deshalb nicht, ob es Mosaikformen gab, sondern **Mechanismus und Tempo**: Konnten ungelenkte Prozesse die riesigen Umbauten in den verfügbaren Zeitfenstern leisten?`,
  strategy: `**1. Zugestehen, was belegt ist.** Übergangsformen zwischen Großgruppen existieren (Gould: „reichlich vorhanden"). Sag das offen – es macht dich glaubwürdig.

**2. Von der Form zum Mechanismus lenken.** Fossilien zeigen das Was, nicht das Wie. Frage nach Tempo und Generationen: Wal-Umbau in grob zehn Millionen Jahren, kambrische Baupläne in grob 20 Millionen Jahren. Verbinde mit dem Wartezeitproblem und der Seltenheit funktionaler Proteine.

**3. Das Kambrium als Hauptargument nutzen.** Darwins eigenes Eingeständnis (vollständig zitiert, mit seiner Erklärung!), das Fehlen plausibler Vorfahren trotz hervorragender Erhaltung, die Diskrepanz zu molekularen Uhren, die Störanfälligkeit früher Entwicklungsprogramme (Davidson & Erwin).

**4. Beim Menschen auf die Ebene des Geistes wechseln.** Das Gottesbild hinterlässt keine Knochen. Neandertaler waren Menschen – vereinbar mit frühen Adam-Modellen.

**5. Konvergenz umdrehen.** Wenn Selektion immer wieder dieselben komplexen Lösungen findet, ist der Möglichkeitsraum geordnet – das verweist auf Ordnung, nicht auf Zufall.

**Fallen:** Gould und Raup aus dem Zusammenhang reißen; „keine Übergangsformen" behaupten; Piltdown als Totschlagargument; Archaeopteryx als Fälschung; Genesis 1 als Vorhersage des Kambriums verkaufen.`,
  keyOpponents: [
    { name: 'Donald Prothero', role: 'Paläontologe', work: 'Evolution: What the Fossils Say and Why It Matters (2007, 2. Aufl. 2017)' },
    { name: 'Charles R. Marshall', role: 'Paläontologe, UC Berkeley', work: '„When Prior Belief Trumps Scholarship", Science 341 (2013)' },
    { name: 'Neil Shubin', role: 'Paläontologe, University of Chicago', work: 'Your Inner Fish (2008)' },
    { name: 'Nicholas J. Matzke', role: 'Evolutionsbiologe, University of Auckland', work: 'Kritiken an „Darwin\'s Doubt" (2013)' },
    { name: 'Jerry A. Coyne', role: 'Evolutionsbiologe, University of Chicago', work: 'Why Evolution Is True (2009)' },
    { name: 'Lee R. Berger', role: 'Paläoanthropologe, University of the Witwatersrand', work: 'Homo naledi (eLife 2015)' },
    { name: 'Jonathan B. Losos', role: 'Evolutionsbiologe, Washington University in St. Louis', work: 'Improbable Destinies (2017)' },
  ],
  claims: [
    kambrischeExplosionKeinProblem,
    uebergangsformen,
    menschlicheEvolutionBelegt,
    konvergenzZufall,
    lueckenWerdenGeschlossen,
  ],
};

export default topic;
