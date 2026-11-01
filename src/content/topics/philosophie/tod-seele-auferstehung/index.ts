import type { Topic } from '../../../schema.ts';
import nachDemTodNichts from './nach-dem-tod-nichts.ts';
import leiblicheAuferstehungUnmoeglich from './leibliche-auferstehung-unmoeglich.ts';
import ewigesLebenLangweilig from './ewiges-leben-langweilig.ts';
import wiedersehenSelbsttaeuschung from './wiedersehen-selbsttaeuschung.ts';

const topic: Topic = {
  id: 'tod-seele-auferstehung',
  category: 'philosophie',
  group: 'Sinn & Existenz',
  order: 2,
  title: `Tod, Seele und Auferstehung`,
  subtitle: `Erlischt das Bewusstsein? Ist die Auferstehung möglich? Wäre Ewigkeit langweilig – und sehen wir uns wieder?`,
  icon: 'hourglass',
  overview: `Die Frage nach dem Tod ist die persönlichste aller philosophischen Fragen. Die säkulare Antwort hat heute drei Säulen: die **Neurowissenschaft** (Bewusstsein ist, was das Gehirn tut – stirbt das Gehirn, erlischt das Ich; Paul Edwards' „Alzheimer-Argument"), die **Physik** (Sean Carroll: Es gibt kein Feld, das die Information eines Gehirns nach dem Tod tragen könnte) und die **Psychologie** (Freud, Feuerbach, Terror-Management-Theorie: Jenseitsglaube ist Wunschdenken). Dazu kommen zwei philosophische Spezialeinwände: Die leibliche Auferstehung sei unmöglich, weil die Atome wiederverwertet werden – ein Einwand, den schon Kelsos und Porphyrios kannten und auf den Athenagoras im 2. Jahrhundert antwortete –, und ewiges Leben wäre unerträglich langweilig (**Bernard Williams**, „The Makropulos Case", 1973).

Die christliche Antwort beginnt nicht mit einem Argument, sondern mit Mitgefühl: Jesus weinte am Grab seines Freundes (Joh 11,35). Inhaltlich stützt sie sich auf drei Pfeiler: (1) **philosophische Gründe gegen den Materialismus** – das „schwere Problem" des Bewusstseins, die Einheit des Ich, der Gehalt von Gedanken (Swinburne, Plantinga, Moreland; sogar der Atheist Thomas Nagel); (2) die **historisch gut begründete Auferstehung Jesu**, auf die Paulus die ganze Hoffnung setzt (1 Kor 15); (3) eine **reiche Theologie des ewigen Lebens**, die Williams' Einwand schon 1600 Jahre vor ihm beantwortet: Gregor von Nyssas Lehre vom ewigen Wachstum in den unendlichen Gott (*Epektasis*).

Die koptisch-orthodoxe Kirche bekennt die Fortdauer der Seele bei Christus zwischen Tod und Auferstehung, die leibliche Auferstehung aller Toten und die Gemeinschaft der Heiligen, in der Lebende und Entschlafene eine Kirche bilden. Sie betet für ihre Verstorbenen am dritten und vierzigsten Tag und am Jahrestag und bekennt im Gebet für die Entschlafenen: „Es gibt keinen Tod für deine Knechte, sondern einen Übergang." Als Kirche der Märtyrer hat sie diese Hoffnung über Jahrhunderte gelebt.`,
  strategy: `**1. Zuerst Mensch, dann Argument.** Frage behutsam, ob hinter der Frage ein persönlicher Verlust steht. Wenn ja: zuhören, dasein, mitfühlen. Hiobs Freunde taten das Beste, als sie schwiegen (Hiob 2,13). Bei Suizidgedanken professionelle Hilfe vermitteln (Telefonseelsorge Deutschland 0800 111 0 111, Österreich 142, Schweiz 143).

**2. Abhängigkeit ist nicht Identität.** Gegen die Neurowissenschaft: Die enge Verbindung von Geist und Gehirn zugeben – und zeigen, dass daraus keine Identität folgt (Pianist und Flügel). Dann das „schwere Problem" des Bewusstseins.

**3. Zur Auferstehung Jesu führen.** Die christliche Hoffnung steht und fällt nicht mit Nahtoderfahrungen oder einer Seelentheorie, sondern mit dem leeren Grab und den Erscheinungen (1 Kor 15,14–20). Das ist eine historische Frage, die man prüfen kann.

**4. Spezialeinwände gelassen beantworten.** Kannibalen-Einwand: 1900 Jahre alt; Identität hängt nicht an Atomen (Samenkorn, 1 Kor 15). Langeweile: Williams beschreibt ein endloses Leben in einer endlichen Welt; die christliche Hoffnung ist Gemeinschaft mit dem Unendlichen (Gregor von Nyssa).

**5. Trost und Wahrheit verbinden.** Trost macht nichts falsch; aber Trost ohne Wahrheit wäre Täuschung. Paulus: „So wir glauben, dass Jesus gestorben und auferstanden ist …" (1 Thess 4,14).

**Fallen:** Nahtoderfahrungen zum Hauptargument machen; die Abhängigkeit des Geistes vom Gehirn leugnen; über das ewige Geschick verstorbener Nichtchristen urteilen; den Himmel als endlosen Gottesdienst beschreiben; Trauernden mit Floskeln begegnen.`,
  keyOpponents: [
    { name: 'Bertrand Russell', role: 'Philosoph (1872–1970)', work: '„What I Believe" (1925)' },
    { name: 'Sean Carroll', role: 'Theoretischer Physiker', work: '„Physics and the Immortality of the Soul" (2011); The Big Picture (2016)' },
    { name: 'Paul Edwards', role: 'Philosoph (1923–2004)', work: 'Immortality (Hg., 1992)' },
    { name: 'Bernard Williams', role: 'Moralphilosoph (1929–2003)', work: '„The Makropulos Case" (1973)' },
    { name: 'Derek Parfit', role: 'Philosoph, Oxford (1942–2017)', work: 'Reasons and Persons (1984)' },
    { name: 'Sigmund Freud', role: 'Begründer der Psychoanalyse', work: 'Die Zukunft einer Illusion (1927)' },
    { name: 'Michael Shermer', role: 'Wissenschaftspublizist', work: 'Heavens on Earth (2018)' },
  ],
  claims: [nachDemTodNichts, leiblicheAuferstehungUnmoeglich, ewigesLebenLangweilig, wiedersehenSelbsttaeuschung],
};

export default topic;
