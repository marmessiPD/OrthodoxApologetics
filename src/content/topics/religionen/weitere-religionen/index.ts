import type { Topic } from '../../../schema.ts';
import sikhismusEinGottOhneInkarnation from './sikhismus-ein-gott-ohne-inkarnation.ts';
import bahaiProgressiveOffenbarung from './bahai-progressive-offenbarung.ts';
import daoStattPerson from './dao-statt-person.ts';
import religionAusAnimismus from './religion-aus-animismus.ts';

const topic: Topic = {
  id: 'weitere-religionen',
  category: 'religionen',
  group: 'Weitere Religionen',
  order: 1,
  title: `Sikhismus, Bahai, Daoismus & Naturreligionen`,
  subtitle: `Ein Gott ohne Menschwerdung, fortschreitende Offenbarung, das namenlose Dao und der Ursprung der Religion`,
  icon: 'landmark',
  overview: `Dieser Themenblock versammelt Gesprächspartner, denen Christen im Alltag oft begegnen, auf die sie aber selten vorbereitet sind. **Sikhs** bekennen einen strengen Monotheismus mit hoher Wertschätzung der Gnade, lehnen aber jede Menschwerdung Gottes ab. **Bahai** sehen in Baha'u'llah die Wiederkunft Christi und in allen Religionen Stufen einer fortschreitenden Offenbarung. Das **Daodejing** fasziniert viele westliche Leser als Weisheit eines namenlosen, unpersönlichen Ursprungs – popularisiert von Alan Watts und Fritjof Capra. Und hinter vielen religionskritischen Gesprächen steht die Behauptung, Religion habe sich vom **Animismus** zum Monotheismus entwickelt.

Gemeinsam ist diesen Positionen, dass sie oft sehr sympathisch auftreten: Sikhs mit gelebter Gleichheit und Gastfreundschaft, Bahai mit Idealen der Einheit und des Friedens, Daoisten mit Gelassenheit und Demut. Christen sollten diese Stärken ehrlich würdigen. Bahai werden zudem im Iran schwer verfolgt und verdienen Solidarität.

Der rote Faden für das christliche Gespräch ist die **Person Jesu Christi**: Er ist nicht ein Avatar und kein Bote unter vielen, sondern das ewige Wort, das Fleisch wurde – nach der chinesischen Bibel: „Das Dao wurde Fleisch" (Joh 1,14). Die alexandrinische Tradition bietet dafür die besten Werkzeuge: Athanasius' Lehre vom Logos, der im Leib war, ohne darin eingeschlossen zu sein; Justins „Samen des Logos" in allen Völkern; und Athanasius' Deutung der Religionsgeschichte als Abstieg von der ursprünglichen Gotteserkenntnis.`,
  strategy: `**1. Beginne mit der Gemeinsamkeit.** Sikhs: ein Gott, Schöpfer, ungeboren, gnädig. Bahai: Einheit der Menschheit, Gleichheit, Frieden. Daoisten: Unbegreiflichkeit des Ursprungs, Demut, Sanftmut. Wer anerkannt wird, hört zu.

**2. Kläre Missverständnisse über die Menschwerdung.** Viele Einwände (Sikhismus, Daoismus) richten sich gegen einen Gott, der „der Geburt unterliegt" oder zu einem begrenzten Wesen wird. Erkläre: Der ewige Sohn nimmt eine menschliche Natur an, ohne aufzuhören, Gott zu sein (Athanasius, De Inc. 17).

**3. Prüfe Ansprüche an Jesu eigenen Worten.** Bei den Bahai: Mt 24,23–27 und Apg 1,11 – die Wiederkunft ist sichtbar, weltweit und betrifft „diesen Jesus". Bei allen: Ist Jesus leiblich auferstanden? Diese Frage ist historisch prüfbar.

**4. Entlarve überholte Schemata.** „Vom Animismus zum Monotheismus" ist ein Modell des 19. Jahrhunderts; gib aber ehrlich zu, dass auch ein Urmonotheismus nicht streng beweisbar ist.

**Fallen:** (a) Sikhismus als „Mischung aus Hinduismus und Islam" bezeichnen. (b) Bahai abwertend behandeln. (c) Chinesische Schriftzeichen als „verschlüsselte Genesis" deuten. (d) Schmidts Urmonotheismus als bewiesen ausgeben.`,
  keyOpponents: [
    { name: 'Nikky-Guninder Kaur Singh', role: 'Sikh-Religionswissenschaftlerin, Colby College', work: 'Sikhism: An Introduction (2011)' },
    { name: 'Pashaura Singh', role: 'Sikh-Gelehrter, University of California, Riverside', work: 'The Guru Granth Sahib: Canon, Meaning and Authority (2000)' },
    { name: 'Moojan Momen', role: 'Bahai-Gelehrter', work: 'The Baha\'i Faith: A Beginner\'s Guide (2008)' },
    { name: 'Alan Watts', role: 'Popularisierer östlicher Philosophie (1915–1973)', work: 'Tao: The Watercourse Way (1975)' },
    { name: 'Fritjof Capra', role: 'Physiker und Autor', work: 'Das Tao der Physik (1975)' },
    { name: 'Robert Wright', role: 'Wissenschaftsjournalist', work: 'The Evolution of God (2009)' },
  ],
  newPeople: [
    {
      id: 'wilhelm-schmidt',
      name: 'P. Wilhelm Schmidt SVD',
      years: '1868–1954',
      era: 'modern',
      tradition: 'katholisch',
      title: 'Ethnologe und Sprachwissenschaftler, Gründer der Zeitschrift „Anthropos"',
      fields: ['Ethnologie', 'Religionsgeschichte', 'Urmonotheismus'],
      bio: 'Steyler Missionar und Ethnologe, der überwiegend in Österreich wirkte. Gründete 1906 die ethnologische Zeitschrift „Anthropos" und prägte die Wiener kulturhistorische Schule. In seinem zwölfbändigen Werk „Der Ursprung der Gottesidee" sammelte er Belege für den Glauben an einen Hochgott bei schriftlosen Völkern.',
      keyWorks: ['Der Ursprung der Gottesidee (12 Bde., 1912–1955)'],
      caveat: 'Seine kulturhistorische Methode und manche Schlussfolgerungen (ein streng bewiesener Urmonotheismus) gelten heute als überholt bzw. umstritten; die gesammelten Befunde zu Hochgöttern bleiben beachtenswert.',
    },
    {
      id: 'james-legge',
      name: 'James Legge',
      years: '1815–1897',
      era: 'neuzeit',
      tradition: 'evangelisch',
      title: 'Missionar und Sinologe, erster Professor für Chinesisch in Oxford',
      fields: ['Sinologie', 'Konfuzianismus', 'Daoismus'],
      bio: 'Schottischer kongregationalistischer Missionar in Malakka und Hongkong, ab 1876 Professor für Chinesisch in Oxford. Übersetzte die konfuzianischen Klassiker (The Chinese Classics) und daoistische Texte für die Reihe „Sacred Books of the East". Vertrat die Auffassung, dass der Shangdi der ältesten chinesischen Klassiker dem Gott der Bibel entspricht.',
      keyWorks: ['The Chinese Classics (1861–1872)', 'The Notions of the Chinese concerning God and Spirits (1852)', 'The Religions of China (1880)'],
    },
    {
      id: 'matteo-ricci',
      name: 'Matteo Ricci SJ',
      years: '1552–1610',
      era: 'neuzeit',
      tradition: 'katholisch',
      title: 'Jesuitenmissionar in China',
      fields: ['China-Mission', 'Konfuzianismus', 'Inkulturation'],
      bio: 'Italienischer Jesuit, kam 1582 nach Macau und wirkte ab 1583 im chinesischen Kaiserreich; starb 1610 in Peking. In seinem Dialog „Die wahre Bedeutung des Herrn des Himmels" (1603) argumentierte er gegenüber konfuzianischen Gelehrten, dass der Shangdi der alten Klassiker der eine Gott sei.',
      keyWorks: ['Tianzhu Shiyi (Die wahre Bedeutung des Herrn des Himmels, 1603)'],
    },
  ],
  claims: [sikhismusEinGottOhneInkarnation, bahaiProgressiveOffenbarung, daoStattPerson, religionAusAnimismus],
};

export default topic;
