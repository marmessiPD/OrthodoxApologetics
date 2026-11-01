import type { Topic } from '../../../schema.ts';
import entmythologisierung from './entmythologisierung.ts';
import jesusNurMorallehrer from './jesus-nur-morallehrer.ts';
import bibelNurMenschlicheErfahrung from './bibel-nur-menschliche-erfahrung.ts';

const topic: Topic = {
  id: 'liberale-theologie',
  category: 'konfessionen',
  group: 'Liberale Theologie',
  order: 1,
  title: `Liberale Theologie`,
  subtitle: `Entmythologisierung, der „bloße Morallehrer" Jesus und die Bibel als menschliche Erfahrung – Antworten auf das Christentum ohne Wunder`,
  icon: 'feather',
  overview: `Die **liberale Theologie** entstand im 19. Jahrhundert im deutschen Protestantismus, als Theologen versuchten, den christlichen Glauben mit dem Weltbild der Aufklärung und der modernen Naturwissenschaft zu versöhnen. **Friedrich Schleiermacher** (1768–1834) verlegte die Religion in das Gefühl („schlechthinnige Abhängigkeit"); **Adolf von Harnack** (1851–1930) fasste das „Wesen des Christentums" (1900) in der Vaterschaft Gottes, dem Wert der Menschenseele und dem Liebesgebot zusammen – die Lehre von der Gottheit Christi galt ihm als spätere Hellenisierung. Im 20. Jahrhundert forderte **Rudolf Bultmann** (1884–1976), das Neue Testament zu „entmythologisieren": Wunder, Engel, Dämonen und die leibliche Auferstehung seien Ausdruck eines antiken Weltbildes; der Kern sei der existentielle Anruf zur Entscheidung.

Diese Denkweise prägt bis heute viele Universitätsfakultäten, Kirchenleitungen und Religionsbücher im Westen. Ein koptischer Christ begegnet ihr im Studium, im Religionsunterricht oder bei Pfarrern und Theologen, die die Auferstehung „symbolisch" verstehen. Das Gegenüber ist dann kein Atheist, sondern ein gebildeter Christ, der meint, der „moderne Mensch" könne nicht mehr an Wunder glauben.

Die Antwort hat drei Ebenen: **philosophisch** (der Ausschluss von Wundern ist eine Vorentscheidung, kein Ergebnis der Wissenschaft), **historisch** (die frühesten Quellen bezeugen einen auferstandenen und angebeteten Jesus, keinen bloßen Morallehrer) und **kirchlich** (die alexandrinische Tradition liest die Schrift wörtlich **und** geistlich – sie braucht keine Entmythologisierung, um die tiefe Bedeutung der Ereignisse zu sehen).`,
  strategy: `**1. Respekt vor der Absicht.** Viele liberale Theologen wollten den Glauben für moderne Menschen verständlich machen; Bultmann gehörte zur Bekennenden Kirche. Erkenne das an.

**2. Die Vorentscheidung offenlegen.** Frag: „Ist es ein Ergebnis der Forschung, dass Wunder nicht geschehen, oder eine Voraussetzung, mit der du an die Texte gehst?" Die meisten geben zu, dass es eine Voraussetzung ist (Bultmann: „geschlossener Wirkungszusammenhang").

**3. Die Geschichte sprechen lassen.** 1 Kor 15,3–8, Phil 2,6–11 und die frühe Anbetung Jesu (Hurtado, Bauckham) zeigen: Der angebetete, auferstandene Christus steht am Anfang, nicht am Ende einer Entwicklung.

**4. Das Trilemma richtig einsetzen.** Jesus beanspruchte, Sünden zu vergeben und Gottes Platz einzunehmen. Ein bloßer Morallehrer tut das nicht. Ergänze das Trilemma um die vierte Option („Legende") und beantworte sie historisch.

**5. Die alexandrinische Stärke.** Die koptische Tradition kennt seit Origenes und Kyrill den geistlichen Sinn der Schrift – aber nie auf Kosten der Ereignisse selbst. Wir lesen Wunder als wirkliche Ereignisse **und** als Zeichen.

**6. Fallen meiden.** Keine Wissenschaftsfeindlichkeit; nicht jede historisch-kritische Beobachtung ist Unglaube. Unterscheide Methode und Weltanschauung.`,
  keyOpponents: [
    { name: 'Rudolf Bultmann', role: 'Neutestamentler, Marburg (1884–1976)', work: 'Neues Testament und Mythologie (1941); Jesus (1926)' },
    { name: 'Friedrich Schleiermacher', role: 'Theologe und Philosoph, Berlin (1768–1834)', work: 'Über die Religion (1799); Der christliche Glaube (1821/22, 2. Aufl. 1830/31)' },
    { name: 'Adolf von Harnack', role: 'Kirchenhistoriker, Berlin (1851–1930)', work: 'Das Wesen des Christentums (1900); Lehrbuch der Dogmengeschichte' },
    { name: 'Marcus Borg', role: 'Neutestamentler, Jesus Seminar (1942–2015)', work: 'Reading the Bible Again for the First Time (2001)' },
    { name: 'John Shelby Spong', role: 'Episkopaler Bischof (1931–2021)', work: 'Rescuing the Bible from Fundamentalism (1991)' },
  ],
  claims: [entmythologisierung, jesusNurMorallehrer, bibelNurMenschlicheErfahrung],
  newPeople: [
    {
      id: 'eta-linnemann',
      name: 'Eta Linnemann',
      years: '1926–2009',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Neutestamentlerin, Schülerin Rudolf Bultmanns',
      fields: ['Neues Testament', 'Kritik der historisch-kritischen Methode', 'Synoptische Frage'],
      bio: 'Studierte bei Rudolf Bultmann und Ernst Fuchs und lehrte als historisch-kritische Neutestamentlerin; ihr Buch über die Gleichnisse Jesu wurde ein Standardwerk. Nach einer Glaubenswende in den 1970er-Jahren distanzierte sie sich öffentlich von ihren früheren Werken und kritisierte die weltanschaulichen Voraussetzungen der historisch-kritischen Theologie.',
      keyWorks: ['Gleichnisse Jesu (1961)', 'Wissenschaft oder Meinung? Anfragen und Alternativen (1986)', 'Gibt es ein synoptisches Problem? (1992)'],
      caveat: 'Evangelikale Protestantin; ihre Ablehnung jeder historisch-kritischen Arbeit geht über die koptische Haltung hinaus, die historische Forschung nicht grundsätzlich verwirft.',
    },
  ],
};

export default topic;
