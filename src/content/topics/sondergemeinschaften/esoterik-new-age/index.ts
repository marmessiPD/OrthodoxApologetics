import type { Topic } from '../../../schema.ts';
import christusbewusstsein from './christusbewusstsein.ts';
import allesIstEnergieGott from './alles-ist-energie-gott.ts';
import reinkarnationInDerBibel from './reinkarnation-in-der-bibel.ts';
import astrologieHeilsteine from './astrologie-heilsteine.ts';

const topic: Topic = {
  id: 'esoterik-new-age',
  category: 'sondergemeinschaften',
  group: 'Esoterik & New Age',
  order: 1,
  title: `Esoterik & New Age`,
  subtitle: `Christusbewusstsein, „Alles ist Energie", Reinkarnation, Astrologie und Energieheilung`,
  icon: 'sparkles',
  overview: `Esoterik und New Age sind keine organisierte Religion, sondern ein weites Feld spiritueller Angebote: Meditation und „Erwachen", Engel- und Lichtarbeit, Astrologie, Reiki, Heilsteine, Rückführungen in frühere Leben, Manifestieren nach dem „Gesetz der Anziehung". Ihre Wurzeln liegen in der **Theosophie** Helena Blavatskys (ab 1875), in der **Anthroposophie** Rudolf Steiners – im deutschsprachigen Raum über Waldorfschulen, Demeter-Landbau und die Christengemeinschaft bis heute präsent –, in der Begegnung mit indischer Spiritualität und in der Gegenkultur der 1960er- und 1970er-Jahre. Bekannte heutige Stimmen sind Eckhart Tolle, Deepak Chopra und Bücher wie „The Secret".

Gemeinsam ist vielen Strömungen ein **monistisches** Weltbild: Alles ist eins, alles ist Energie, das Göttliche liegt im eigenen Inneren; Jesus gilt als erleuchteter Meister unter anderen, die Seele wandert durch viele Leben, und Heil ist Bewusstseinserweiterung statt Erlösung. Diese Spiritualität ist oft freundlich, individuell und unverbindlich – und gerade deshalb attraktiv für Menschen, die von Kirche enttäuscht sind, sich aber nach Sinn, Heilung und Transzendenz sehnen.

Die Kirchenväter kannten diese Fragen erstaunlich gut: Pantheismus und Seelenwanderung aus der griechischen Philosophie, Astrologie aus dem Alltag der Spätantike, die Trennung von „Jesus" und „Christus" aus der Gnosis. Athanasius, Basilius, Augustinus, Irenäus und Gregor von Nyssa haben darauf Antworten gegeben, die auch heute tragen – ergänzt durch empirische Tests der Moderne.`,
  strategy: `**1. Die Sehnsucht ernst nehmen.** Hinter Esoterik steht oft echte Suche nach Heilung, Sinn und Gotteserfahrung. Beginne mit Interesse: „Was hat dich angesprochen? Was suchst du?"

**2. Begriffe klären.** Wörter wie „Gott", „Christus", „Energie", „Seele" werden anders gebraucht. Frage freundlich nach: „Was meinst du mit Energie – das, was die Physik misst?" – „Ist Christus für dich eine Person oder ein Zustand?"

**3. Reihenfolge:** (a) Gottesbild: persönlicher Schöpfer statt All-Energie (Gen 1,1; Röm 1,25). (b) Wer ist Jesus? Nicht Meister unter vielen, sondern der einzigartige Sohn (Joh 14,6; 1 Joh 2,22). (c) Ein Leben, Gericht, Auferstehung statt Kreislauf (Hebr 9,27). (d) Praktiken: Astrologie und Energieheilung empirisch und biblisch prüfen.

**4. Fakten ruhig vorlegen.** Carlsons Astrologietest (*Nature* 1985), Emily Rosas Experiment (*JAMA* 1998), die Handschriften vor 553 – sachlich, ohne Spott.

**5. Fallen vermeiden:** Keine Pauschalurteile („alles Dämonen", „alles Betrug"); Meditation und Stille nicht verteufeln, sondern auf das christliche Gebet hinweisen; Waldorfeltern nicht angreifen. Biete statt einer Technik eine Beziehung an: den lebendigen Christus, der heilt und vergibt – und die Kirche mit Gebet, Sakramenten und Gemeinschaft.`,
  keyOpponents: [
    { name: 'Eckhart Tolle', role: 'Spiritueller Lehrer', work: 'The Power of Now (1997); A New Earth (2005)' },
    { name: 'Deepak Chopra', role: 'Arzt und spiritueller Autor', work: 'The Third Jesus (2008); Quantum Healing (1989)' },
    { name: 'Rudolf Steiner', role: 'Begründer der Anthroposophie (1861–1925)', work: 'Gesamtausgabe; Theosophie (1904); Die Geheimwissenschaft im Umriss (1910)' },
    { name: 'Shirley MacLaine', role: 'Schauspielerin und New-Age-Autorin', work: 'Out on a Limb (1983)' },
  ],
  claims: [christusbewusstsein, allesIstEnergieGott, reinkarnationInDerBibel, astrologieHeilsteine],
  newPeople: [
  ],
};

export default topic;
