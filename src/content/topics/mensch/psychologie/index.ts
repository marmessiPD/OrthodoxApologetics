import type { Topic } from '../../../schema.ts';
import religionSchadetPsyche from './religion-schadet-psyche.ts';
import glaeubigeWenigerIntelligent from './glaeubige-weniger-intelligent.ts';
import bekehrungManipulation from './bekehrung-manipulation.ts';
import schuldgefuehleSchaedlich from './schuldgefuehle-schaedlich.ts';

const topic: Topic = {
  id: 'psychologie',
  category: 'mensch',
  group: 'Psychologie',
  order: 1,
  title: `Glaube und Psyche`,
  subtitle: `Macht Religion krank, dumm oder abhängig? Was die psychologische Forschung tatsächlich zeigt`,
  icon: 'smile',
  overview: `Seit Freud gilt Religion vielen als psychologisches Problem: als Neurose, als Wahn (Dawkins), als Produkt mangelnden Denkens, als Ergebnis von Manipulation, als Quelle krankhafter Schuld. Diese Vorwürfe klingen wissenschaftlich, stammen aber oft aus der Zeit vor der empirischen Forschung oder beruhen auf Einzelfällen und nicht-repräsentativen Umfragen.

Die heutige Datenlage ist differenzierter – und für den Glauben überwiegend günstig: Große prospektive Kohortenstudien (VanderWeele, Harvard) und systematische Übersichten (Koenig, Duke) zeigen, dass regelmäßige religiöse Praxis im Durchschnitt mit weniger Depression, Suizid und Sucht und mit höherem Wohlbefinden verbunden ist. Zugleich zeigt die Forschung ehrlich die Schattenseiten: Ein strafendes, angstbesetztes Gottesbild („negative religiöse Bewältigung") geht mit schlechterer Gesundheit einher; Skrupulosität und religiöser Missbrauch sind real; zwischen Intelligenz und Religiosität besteht eine kleine negative Korrelation.

Für die Apologetik heißt das: Mit Daten antworten, Zugeständnisse machen, wo sie fällig sind – und nie den Fehler begehen, aus gesundheitlichem Nutzen die Wahrheit des Glaubens abzuleiten. Die Daten widerlegen „Religion macht krank"; sie beweisen nicht „Gott existiert". Wer das sauber trennt, gewinnt Glaubwürdigkeit.

Die klassische Religionskritik Freuds und Feuerbachs behandelt der Themenblock ‚religionskritik' (A9); die psychiatrischen Fragen (Propheten, Halluzinationen, Dämonen) der Block ‚psychiatrie'.`,
  strategy: `**1. Mit dem Fachbegriff beginnen.** Wenn jemand „Wahn" sagt, frag freundlich nach der psychiatrischen Definition. Das DSM-5 schließt kulturell geteilte religiöse Überzeugungen ausdrücklich aus. Damit ist die Rhetorik entschärft.

**2. Drei Zahlen kennen.** (a) Rund 33 % geringere Sterblichkeit bei mehr als wöchentlichem Gottesdienstbesuch (Li u. a. 2016); (b) etwa fünffach niedrigeres Suizidrisiko bei Frauen mit wöchentlichem Gottesdienstbesuch (VanderWeele u. a. 2016); (c) die Mehrheit der Studien zu Depression zeigt einen positiven Zusammenhang mit Religiosität (Koenig 2012).

**3. Zugeständnisse aktiv anbieten.** „Ja, ein strafendes Gottesbild macht krank – das sagt auch die Bibel: Die Liebe treibt die Furcht aus (1 Joh 4,18)." „Ja, es gibt eine kleine negative Korrelation mit dem IQ." Das macht dich glaubwürdig.

**4. Den genetischen Fehlschluss benennen.** Ob eine Überzeugung aus einer Krise, einer Freundschaft oder einer Erziehung stammt, sagt nichts über ihre Wahrheit – das gilt für Gläubige und Atheisten gleichermaßen.

**5. Die Wahrheitsfrage zurückholen.** Am Ende jedes Gesprächs: „Wir sind uns einig, dass Nutzen keine Wahrheit beweist. Lass uns über die Gründe reden – den Anfang des Universums, die Moral, die Auferstehung."

**Fallen:**
- Nie behaupten, wahre Christen würden nicht depressiv. Depression ist Krankheit, keine Glaubensschwäche.
- Nie mit Schuld oder Angst argumentieren – das bestätigt den Vorwurf.
- Nicht die eigenen Erfahrungen gegen Daten ausspielen; Betroffenen von religiösem Missbrauch zuerst zuhören.`,
  keyOpponents: [
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The God Delusion (2006)' },
    { name: 'Sigmund Freud', role: 'Begründer der Psychoanalyse', work: 'Die Zukunft einer Illusion (1927)' },
    { name: 'Christopher Hitchens', role: 'Publizist', work: 'God Is Not Great (2007)' },
    { name: 'Darrel Ray', role: 'Psychologe, „Recovering from Religion"', work: 'The God Virus (2009)' },
    { name: 'Marlene Winell', role: 'Psychologin', work: 'Leaving the Fold (1993)' },
    { name: 'Miron Zuckerman', role: 'Psychologe, University of Rochester', work: 'Metaanalyse Intelligenz und Religiosität (2013)' },
  ],
  claims: [religionSchadetPsyche, glaeubigeWenigerIntelligent, bekehrungManipulation, schuldgefuehleSchaedlich],
  newPeople: [
    {
      id: 'everett-worthington',
      name: 'Everett L. Worthington Jr.',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'christlich',
      title: 'Psychologe, Professor emeritus, Virginia Commonwealth University',
      fields: ['Vergebungsforschung', 'Positive Psychologie', 'Religion & Psychotherapie'],
      bio: 'Einer der weltweit führenden Forscher zur Psychologie der Vergebung; entwickelte das REACH-Modell zur Förderung von Vergebung und war an maßgeblichen Metaanalysen zu Vergebungsinterventionen beteiligt. Bekennender Christ, der nach der Ermordung seiner Mutter öffentlich über seinen eigenen Weg der Vergebung schrieb.',
      keyWorks: ['Forgiving and Reconciling: Bridges to Wholeness and Hope (2003)', 'Wade, Hoyt, Kidwell & Worthington, Journal of Consulting and Clinical Psychology 82 (2014)'],
    },
  ],
};

export default topic;
