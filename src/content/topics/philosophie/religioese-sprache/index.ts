import type { Topic } from '../../../schema.ts';
import gaertnerParabel from './gaertner-parabel.ts';
import religioeseSaetzeSinnlos from './religioese-saetze-sinnlos.ts';
import glaubeAlsSprachspiel from './glaube-als-sprachspiel.ts';

const topic: Topic = {
  id: 'religioese-sprache',
  category: 'philosophie',
  group: 'Erkenntnistheorie',
  order: 2,
  title: `Religiöse Sprache und Falsifikation`,
  subtitle: `Ist „Gott existiert" eine echte Behauptung – oder leeres Gerede, Gefühl oder Sprachspiel?`,
  icon: 'message-square',
  overview: `Im 20. Jahrhundert verlagerte sich die Religionskritik von der Frage „Ist der Gottesglaube wahr?" zur Frage „Hat er überhaupt einen Sinn?". Der **logische Positivismus** des Wiener Kreises (Carnap, Schlick) und sein britischer Wortführer **A. J. Ayer** („Language, Truth and Logic", 1936) erklärten religiöse Sätze für kognitiv sinnlos, weil sie weder analytisch noch empirisch überprüfbar seien. **Antony Flew** setzte 1950 mit seiner berühmten **Gärtner-Parabel** nach: Eine Behauptung, die mit jeder denkbaren Beobachtung vereinbar ist, sagt nichts aus – sie stirbt „den Tod der tausend Einschränkungen". Im Gegenzug deuteten Philosophen in der Nachfolge **Wittgensteins** (D. Z. Phillips) und nicht-realistische Theologen (Don Cupitt) den Glauben als „Sprachspiel" oder Lebensform ohne Tatsachenanspruch – eine Rettung, die den Glauben vor Kritik schützt, aber seinen Wahrheitsanspruch preisgibt.

Diese Debatte ist philosophiegeschichtlich weitgehend entschieden: Das **Verifikationsprinzip widerlegt sich selbst**, alle Versuche einer sauberen Formulierung scheiterten (Hempel 1950), und Ayer selbst räumte 1978 ein, dass „nahezu alles" in seinem Buch falsch gewesen sei. Die christliche Religionsphilosophie erlebte seit den 1960er-Jahren eine Renaissance (Plantinga, Swinburne, Alston). Im Alltag lebt der Positivismus jedoch als Szientismus weiter („Was man nicht messen kann, gibt es nicht"), und Flews Frage „Was würde deinen Glauben widerlegen?" ist in Debatten nach wie vor beliebt – zu Recht, denn sie verdient eine klare Antwort.

Das Christentum kann diese Frage ungewöhnlich offen beantworten: Paulus nennt selbst die Bedingung, unter der der Glaube falsch wäre – „Ist aber Christus nicht auferstanden, so ist euer Glaube vergeblich" (1 Kor 15,14). Zugleich kennt die orthodoxe Tradition die Grenzen der Sprache über Gott (Apophatik, Gregor von Nyssa) – nicht als Leere, sondern als Überfülle an Sinn.`,
  strategy: `**1. Flews Frage direkt beantworten.** Wenn jemand fragt „Was würde deinen Glauben widerlegen?", antworte ohne Zögern mit 1 Kor 15,14–17: der Leichnam Jesu, der Nachweis, dass die Erscheinungen erfunden waren. Das überrascht und schafft Glaubwürdigkeit.

**2. Das Verifikationsprinzip auf sich selbst anwenden.** „Ist der Satz ‚Nur überprüfbare Sätze sind sinnvoll' selbst überprüfbar?" – das genügt meist.

**3. Unterscheiden: unfalsifizierbar ≠ sinnlos.** Viele sinnvolle Sätze sind nicht falsifizierbar (andere Bewusstseine, Naturgesetze als allgemeine Sätze, der Naturalismus selbst). Popper wollte Wissenschaft abgrenzen, nicht Sinn definieren.

**4. Flews Gärtner umdrehen.** Gott ist kein Gärtner im Garten, sondern der Grund, warum es einen Garten gibt. Man erkennt ihn wie einen Autor an seinem Werk.

**5. Gegen die „Sprachspiel"-Rettung: Realismus.** Bedanke dich für Wittgensteins Einsicht, dass religiöse Sprache Gebet und Lob ist – und zeige dann: Lob und Dank richten sich an jemanden. Das Christentum steht und fällt mit Tatsachen.

**Fallen:** „Glaube ist eben unbeweisbar" (bestätigt Flew); „Über Gott kann man nichts sagen" (bestätigt Ayer); Ayers Zitat „nahezu alles falsch" ohne seinen Nachsatz bringen; Flews späte Wende als Bekehrung zum Christentum darstellen (er wurde Deist).`,
  keyOpponents: [
    { name: 'A. J. Ayer', role: 'Philosoph, Oxford (1910–1989)', work: 'Language, Truth and Logic (1936)' },
    { name: 'Antony Flew (bis 2004)', role: 'Philosoph, damals führender Atheist', work: '„Theology and Falsification" (1950)' },
    { name: 'Rudolf Carnap', role: 'Philosoph, Wiener Kreis', work: '„Überwindung der Metaphysik durch logische Analyse der Sprache" (1931)' },
    { name: 'Kai Nielsen', role: 'Religionsphilosoph, University of Calgary', work: 'Contemporary Critiques of Religion (1971)' },
    { name: 'D. Z. Phillips', role: 'Religionsphilosoph (wittgensteinsche Richtung)', work: 'Religion without Explanation (1976)' },
    { name: 'Carl Sagan', role: 'Astronom und Wissenschaftsautor', work: 'The Demon-Haunted World (1995)' },
  ],
  claims: [gaertnerParabel, religioeseSaetzeSinnlos, glaubeAlsSprachspiel],
  newPeople: [
    {
      id: 'basil-mitchell',
      name: 'Basil Mitchell',
      years: '1917–2011',
      era: 'modern',
      tradition: 'anglikanisch',
      title: 'Nolloth-Professor für Philosophie der christlichen Religion, Oxford',
      fields: ['Religiöse Sprache', 'Vernünftigkeit des Glaubens', 'Kumulative Argumente'],
      bio: 'Oxforder Religionsphilosoph und Mitglied des Socratic Club um C. S. Lewis. Antwortete Antony Flew 1950 mit der Parabel vom Partisanen und dem Fremden. In „The Justification of Religious Belief" (1973) entwickelte er das Modell eines kumulativen, nicht-zwingenden, aber vernünftigen Arguments für den Glauben.',
      keyWorks: ['Beitrag zu „Theology and Falsification" (1950/1955)', 'The Justification of Religious Belief (1973)', 'Faith and Criticism (1994)'],
    },
    {
      id: 'john-hick',
      name: 'John Hick',
      years: '1922–2012',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Religionsphilosoph, Birmingham und Claremont',
      fields: ['Religiöse Sprache', 'Eschatologische Verifikation', 'Theodizee'],
      bio: 'Einflussreicher britischer Religionsphilosoph. Entwickelte 1960 den Gedanken der „eschatologischen Verifikation" gegen den Positivismus und schrieb das Standardwerk „Evil and the God of Love" (1966) zur irenäischen Theodizee.',
      keyWorks: ['Faith and Knowledge (1957)', '„Theology and Verification" (1960)', 'Evil and the God of Love (1966)'],
      caveat: 'Hick vertrat später einen religiösen Pluralismus und eine nicht-wörtliche Deutung der Menschwerdung („The Myth of God Incarnate", 1977), die die koptische Kirche entschieden ablehnt. Er wird hier nur für sein frühes Argument zur Sinnhaftigkeit religiöser Sprache herangezogen.',
    },
  ],
};

export default topic;
