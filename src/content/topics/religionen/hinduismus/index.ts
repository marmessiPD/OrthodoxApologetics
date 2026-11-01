import type { Topic } from '../../../schema.ts';
import karmaGerechterAlsGnade from './karma-gerechter-als-gnade.ts';
import reinkarnationErklaertLeid from './reinkarnation-erklaert-leid.ts';
import atmanIstBrahman from './atman-ist-brahman.ts';
import jesusWarAvatar from './jesus-war-avatar.ts';
import alleWegeZumGipfel from './alle-wege-zum-gipfel.ts';
import vedenAelter from './veden-aelter.ts';

const topic: Topic = {
  id: 'hinduismus',
  category: 'religionen',
  group: 'Hinduismus',
  order: 1,
  title: `Hinduismus`,
  subtitle: `Karma, Wiedergeburt, Advaita und Avatare – Weisheit Indiens im Gespräch mit dem Evangelium`,
  icon: 'flower-2',
  overview: `„Den Hinduismus" gibt es nicht als einheitliche Lehre. Unter diesem Namen versammelt sich eine Familie von Traditionen: die vedische Opferreligion, die Upanishaden, die großen philosophischen Schulen (Advaita Shankaras, Vishishtadvaita Ramanujas, Dvaita Madhvas), die innige Gottesliebe der Bhakti zu Vishnu, Krishna, Shiva und der Göttin sowie moderne Reformbewegungen. Im Westen begegnet dir vor allem eine bestimmte Form: der **Neo-Vedanta** Swami Vivekanandas und des Ramakrishna-Ordens (heute etwa Swami Sarvapriyananda in New York), popularisiert von Autoren wie Deepak Chopra und Paramahansa Yogananda. Seine Kernsätze: Karma ist gerecht, Wiedergeburt erklärt das Leid, dein wahres Selbst ist Gott, Jesus war ein Avatar, alle Wege führen zum Gipfel.

Diese Positionen werden meist nicht aggressiv, sondern freundlich und tolerant vertreten – das macht sie überzeugend. Wer widerspricht, wirkt schnell engstirnig. Die Gesprächspartner sind oft hochgebildet, meditativ erfahren und kennen die Bibel besser als manche Christen.

Für den Christen ist entscheidend: Die stärksten Gegenargumente kommen oft **aus Indien selbst**. Ramanuja und Madhva haben Shankaras Advaita jahrhundertelang kritisiert; die Bhakti-Traditionen bezeugen die Sehnsucht nach Gnade; B. R. Ambedkar, Vater der indischen Verfassung, hat die sozialen Folgen der Karma-Kasten-Verbindung angeprangert. Die alexandrinische Kirche wiederum kannte die Weisheit Indiens schon um 200 (Clemens erwähnt die Brahmanen und den Buddha) und hat sie gewürdigt, ohne Christus zu relativieren.`,
  strategy: `**1. Mit Achtung beginnen.** Würdige die Tiefe der indischen Gottsuche ehrlich (Apg 17,22–23). Frag nach der persönlichen Praxis deines Gegenübers. Ein Hindu, der sich respektiert fühlt, hört zu.

**2. Kläre, welchen Hinduismus du vor dir hast.** Advaita (alles ist eins), Bhakti (Liebe zu einem persönlichen Gott) oder populäre Mischformen? Gegen einen Krishna-Verehrer argumentierst du anders als gegen einen Advaita-Mönch. Eine gute Einstiegsfrage: „Ist Gott für dich letztlich persönlich oder überpersönlich?"

**3. Nutze die innerindischen Stimmen.** Ramanujas Frage „Wer ist getäuscht?", Shankaras eigenes Eingeständnis, dass Karma einen Verwalter braucht (Brahma-Sutra 3,2,38), Ambedkars Kritik am Kastenwesen, die Bhakti-Sehnsucht nach Gnade. So wird das Gespräch nicht „Westen gegen Osten".

**4. Bring alles auf Christus zurück.** Der Unterschied ist nicht ein besseres System, sondern eine Person: der Gott, der wirklich Mensch wurde, für seine Feinde starb und leiblich auferstand. Die Auferstehung ist historisch prüfbar – lade dazu ein, die Evangelien zu lesen.

**Fallen:** (a) Den Hinduismus als „Götzendienst" abtun – du verlierst sofort. (b) Christliche Mystik verleugnen – die Wüstenväter und die Theosis sind deine stärkste Brücke, wenn du den Unterschied klar machst. (c) Sich in Datierungsdebatten verlieren – Alter beweist nichts. (d) Unbelegte Zitate (Gandhi: „Ich mag euren Christus …") verwenden.`,
  keyOpponents: [
    { name: 'Swami Vivekananda', role: 'Begründer der Ramakrishna-Mission, Redner beim Weltparlament der Religionen 1893 (1863–1902)', work: 'Jnana-Yoga; Karma-Yoga' },
    { name: 'Swami Sarvapriyananda', role: 'Mönch des Ramakrishna-Ordens, Leiter der Vedanta Society of New York', work: 'Vorträge zur Mandukya-Upanishad und zum Advaita' },
    { name: 'Sarvepalli Radhakrishnan', role: 'Philosoph, Oxford-Professor, Staatspräsident Indiens (1888–1975)', work: 'The Hindu View of Life (1927)' },
    { name: 'Deepak Chopra', role: 'Arzt und Bestsellerautor', work: 'How to Know God (2000); The Third Jesus (2008)' },
    { name: 'Paramahansa Yogananda', role: 'Gründer der Self-Realization Fellowship (1893–1952)', work: 'Autobiographie eines Yogi (1946); The Second Coming of Christ' },
    { name: 'Mohandas K. Gandhi', role: 'Führer der indischen Unabhängigkeitsbewegung (1869–1948)', work: 'Hind Swaraj (1909); Autobiographie' },
  ],
  claims: [karmaGerechterAlsGnade, reinkarnationErklaertLeid, atmanIstBrahman, jesusWarAvatar, alleWegeZumGipfel, vedenAelter],
};

export default topic;
