import type { Topic } from '../../../schema.ts';
import altruismusEvolutionaer from './altruismus-evolutionaer.ts';
import menschNurTier from './mensch-nur-tier.ts';

const topic: Topic = {
  id: 'evolutionaere-psychologie',
  category: 'mensch',
  group: 'Evolutionäre Psychologie & Anthropologie',
  order: 1,
  title: `Evolutionäre Psychologie`,
  subtitle: `Ist Liebe nur Genkalkül und der Mensch nur ein Tier?`,
  icon: 'footprints',
  overview: `Die Evolutionäre Psychologie deutet menschliches Verhalten als Ergebnis natürlicher Selektion: Elternliebe als Verwandtenselektion, Freundschaft als Gegenseitigkeit, Großzügigkeit als Investition in den guten Ruf, romantische Liebe als Paarbindungsstrategie. Dazu kommt die vergleichende Verhaltensforschung, die bei Tieren Werkzeuggebrauch, Kultur, Empathie und Planung entdeckt. Viele folgern: Liebe und Altruismus sind vollständig evolutionär erklärt, und der Mensch ist „nur ein Tier" – jede Sonderstellung ist religiöse Überheblichkeit.

Christen müssen diesen Forschungen nicht ausweichen. Die Bibel selbst betont die Gemeinsamkeit von Mensch und Tier (Gen 2,7; Pred 3,19), und Jesus benennt Verwandtenliebe und Gegenseitigkeit ausdrücklich als das Natürliche, das „auch die Zöllner" tun (Mt 5,46). Gerade deshalb tritt das Besondere umso schärfer hervor: Feindesliebe, anonymes Geben, Opfer für Fremde – eine Liebe, die die bekannten evolutionären Mechanismen nicht belohnen. Und die Kluft zwischen Mensch und Tier – rekursive Sprache, kumulative Kultur, Mathematik, Kunst, Moral, Religion – wird auch von säkularen Forschern wie Suddendorf, Tomasello, Berwick und Chomsky betont.

Der tiefste Punkt ist philosophisch: Selbst eine vollständige Erklärung, *woher* unsere moralischen Gefühle stammen, erklärt nicht, *warum* wir ihnen folgen *sollen*. Konsequente Naturalisten wie Michael Ruse geben zu, dass objektive Moral dann eine genetisch erzeugte Illusion wäre; Harari nennt Menschenrechte eine gemeinsame Fiktion. Christen setzen dem die Gottebenbildlichkeit entgegen, die jedem Menschen unabhängig von seinen Fähigkeiten Würde verleiht. Die allgemeine Debatte über Moral und Evolution führt A10 (‚moral-und-gott'); die genetischen und paläontologischen Fragen A14.`,
  strategy: `**1. Großzügig zugestehen.** „Ja, Verwandtenselektion und Gegenseitigkeit erklären viel. Jesus sagt das selbst – ‚tun das nicht auch die Zöllner?'" Damit zeigst du, dass das Evangelium diese Mechanismen kennt und über sie hinausgeht.

**2. Die Feindesliebe ins Zentrum stellen.** Frag: „Welcher evolutionäre Mechanismus belohnt anonyme Hilfe für einen Feind unter Lebensgefahr?" Nenne konkrete Beispiele: den barmherzigen Samariter, Maximilian Kolbe, die Angehörigen der koptischen Märtyrer von Libyen, die den Mördern vergaben.

**3. Herkunft und Geltung trennen.** „Selbst wenn wir wissen, woher ein Gefühl kommt, wissen wir nicht, ob wir ihm folgen sollen." Zitiere Dawkins genau: „Lasst uns Großzügigkeit lehren, denn wir sind egoistisch geboren" – und frage nach dem Maßstab.

**4. Beim Thema Mensch und Tier die Kluft benennen** – und den performativen Widerspruch: Wer argumentiert, der Mensch sei nur ein Tier, tut etwas, was kein Tier tut.

**5. Die ethischen Konsequenzen zeigen.** Wenn Würde an Fähigkeiten hängt, verlieren die Schwächsten ihren Schutz (Singer). Die Gottebenbildlichkeit schützt jeden.

**Fallen:**
- Tieren Empfindungen oder Intelligenz nicht absprechen.
- Dawkins nicht falsch zitieren – er sagt nicht, Menschen müssten egoistisch sein.
- Marc Hauser nicht als Autorität verwenden (wissenschaftliches Fehlverhalten).
- Die Herrschaft über die Schöpfung nicht als Ausbeutungslizenz darstellen.`,
  keyOpponents: [
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The Selfish Gene (1976)' },
    { name: 'Frans de Waal', role: 'Primatologe, Emory University (gest. 2024)', work: 'Primates and Philosophers (2006)' },
    { name: 'Steven Pinker', role: 'Kognitionspsychologe, Harvard', work: 'The Blank Slate (2002); The Better Angels of Our Nature (2011)' },
    { name: 'Peter Singer', role: 'Philosoph, Princeton', work: 'Animal Liberation (1975); Practical Ethics' },
    { name: 'Yuval Noah Harari', role: 'Historiker, Jerusalem', work: 'Sapiens (2011/2014)' },
    { name: 'Michael Ruse', role: 'Wissenschaftsphilosoph', work: 'Taking Darwin Seriously (1986)' },
  ],
  claims: [altruismusEvolutionaer, menschNurTier],
  newPeople: [
    {
      id: 'martin-nowak',
      name: 'Martin A. Nowak',
      years: 'geb. 1965',
      era: 'modern',
      tradition: 'katholisch',
      title: 'Professor für Mathematik und Biologie, Harvard University',
      fields: ['Evolution der Kooperation', 'Mathematische Biologie', 'Evolutionäre Spieltheorie'],
      bio: 'In Wien geborener mathematischer Biologe und einer der führenden Forscher zur Evolution der Kooperation; seine „fünf Regeln der Kooperation" (Science 2006) sind ein Standardtext des Fachs. Als katholischer Christ setzt er sich mit dem Verhältnis von Evolution und Glauben auseinander, u. a. in einem gemeinsam mit der Theologin Sarah Coakley herausgegebenen Band.',
      keyWorks: ['Five rules for the evolution of cooperation, Science 314 (2006)', 'SuperCooperators (mit R. Highfield, 2011)', 'Evolution, Games, and God (Hg. mit S. Coakley, 2013)'],
      caveat: 'Nowak vertritt eine theistische Sicht der Evolution; er steht damit für eine andere christliche Position als das Intelligent-Design-Lager.',
    },
  ],
};

export default topic;
