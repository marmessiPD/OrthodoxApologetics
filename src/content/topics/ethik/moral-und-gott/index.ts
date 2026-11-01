import type { Topic } from '../../../schema.ts';
import gutOhneGott from './gut-ohne-gott.ts';
import euthyphronDilemma from './euthyphron-dilemma.ts';
import moralDurchEvolution from './moral-durch-evolution.ts';
import moralKulturellRelativ from './moral-kulturell-relativ.ts';
import wissenschaftBegruendetMoral from './wissenschaft-begruendet-moral.ts';

const topic: Topic = {
  id: 'moral-und-gott',
  category: 'ethik',
  group: 'Moral & Gott',
  order: 1,
  title: `Moral ohne Gott?`,
  subtitle: `Das moralische Argument, Euthyphron, Evolution, Relativismus und Sam Harris' „moralische Landschaft"`,
  icon: 'scale',
  overview: `Die Frage nach der Moral ist eines der stärksten Argumente *für* Gott – und zugleich eines der emotionalsten Gesprächsthemen. Viele Atheisten empfinden schon die Frage „Woher hast du deine Moral?" als Unterstellung, sie seien unmoralisch. Deshalb ist die wichtigste Unterscheidung dieses Themenblocks: Es geht **nicht** darum, ob Atheisten gut handeln oder das Gute erkennen können – das können sie, und die Bibel erwartet es (Röm 2,14–15). Es geht darum, was das Gute **objektiv begründet**.

Das **moralische Argument** (Kant, Newman, C. S. Lewis, heute W. L. Craig, Robert Adams, Paul Copan) sagt: Wenn es objektive moralische Werte und Pflichten gibt, ist Gott die beste Erklärung. Die Gegenseite antwortet auf vier Wegen: (1) Moral braucht keine Grundlage oder hat eine eigene, notwendige Grundlage (Wielenberg); (2) Gott hilft nicht weiter (Euthyphron-Dilemma); (3) Moral ist ein Produkt der Evolution (Ruse, de Waal) oder der Kultur (Benedict); (4) die Wissenschaft kann Moral begründen (Sam Harris).

Bemerkenswert ist, dass konsequente Atheisten selbst oft die erste Prämisse bestätigen: Nietzsche warnte, wer den christlichen Glauben aufgebe, ziehe sich das Recht zur christlichen Moral unter den Füßen weg; Mackie fand objektive Werte ohne Gott „seltsam"; Ruse und Wilson nannten die Ethik eine „Illusion" der Gene; Dawkins beschreibt ein Universum ohne „Gut und Böse". Die koptisch-orthodoxe Tradition sieht im Gewissen das Bild Gottes im Menschen, das ihn zur Gemeinschaft mit Gott ruft – Moral ist der Weg, auf dem dieses Bild wieder aufleuchtet.`,
  strategy: `**1. Zuerst zustimmen.** „Natürlich kannst du ohne Glauben ein guter Mensch sein." Das entwaffnet und ist biblisch (Röm 2,15). Wer diesen Schritt überspringt, verliert das Gespräch.

**2. Die Frage verschieben: von „ob" zu „warum".** „Ich frage nicht, *ob* du weißt, dass Folter falsch ist, sondern *was* sie objektiv falsch macht."

**3. Die Wahl offenlegen.** Der Gesprächspartner muss sich entscheiden: Gibt es objektive Moral (dann: Woher?) oder nicht (dann: War der Holocaust nur „anders"?). Beide Wege führen zu den Claims dieses Themenblocks.

**4. Die Fluchtwege kennen:** Euthyphron (→ Gottes Wesen als dritte Option), Evolution (→ Ursprung ≠ Wahrheit; Darwins Bienen), Relativismus (→ Reformer-Problem, Toleranz), Harris (→ Definition statt Begründung; Determinismus), Wielenberg (→ unerklärte Fakten, Erkenntnisproblem, Pflichten brauchen Personen).

**5. Mit Liebe enden.** Das moralische Argument zeigt einen Gesetzgeber – das Evangelium zeigt den Vater, der den Gesetzesbrecher sucht. Die Moral ist nicht das Ziel, sondern Christus.

**Fallen:** Nie andeuten, Atheisten seien schlechtere Menschen. Dostojewskis „alles ist erlaubt" nicht als wörtliches Zitat ausgeben. Keine Gefängnisstatistiken. Nicht in eine Debatte über „wer ist moralischer" abrutschen – das ist nicht das Argument.`,
  keyOpponents: [
    { name: 'Sam Harris', role: 'Neurowissenschaftler und Autor', work: 'The Moral Landscape (2010)' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The God Delusion (2006), Kap. 6–7' },
    { name: 'Erik Wielenberg', role: 'Philosoph, DePauw University', work: 'Robust Ethics (2014)' },
    { name: 'Walter Sinnott-Armstrong', role: 'Philosoph, Duke University', work: 'Morality Without God? (2009)' },
    { name: 'Michael Ruse', role: 'Wissenschaftsphilosoph', work: 'Taking Darwin Seriously (1986)' },
    { name: 'Steven Pinker', role: 'Kognitionspsychologe, Harvard', work: 'The Better Angels of Our Nature (2011); Enlightenment Now (2018)' },
    { name: 'Peter Singer', role: 'Ethiker, Princeton', work: 'Practical Ethics (1979)' },
  ],
  claims: [gutOhneGott, euthyphronDilemma, moralDurchEvolution, moralKulturellRelativ, wissenschaftBegruendetMoral],
  newPeople: [
    {
      id: 'robert-adams',
      name: 'Robert Merrihew Adams',
      years: 'geb. 1937',
      era: 'modern',
      tradition: 'christlich',
      title: 'Moralphilosoph (Yale, Oxford, UNC Chapel Hill)',
      fields: ['Metaethik', 'Göttliche Gebotstheorie', 'Religionsphilosophie'],
      bio: 'Einer der einflussreichsten analytischen Religions- und Moralphilosophen. Er entwickelte eine „modifizierte göttliche Gebotstheorie", nach der das Gute in Gott als dem höchsten Gut und die moralische Pflicht in den Geboten dieses guten Gottes gründet – eine Antwort auf das Euthyphron-Dilemma.',
      keyWorks: ['Finite and Infinite Goods (1999)', 'The Virtue of Faith (1987)'],
    },
    {
      id: 'martin-luther-king',
      name: 'Martin Luther King Jr.',
      years: '1929–1968',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Baptistischer Pastor und Bürgerrechtler',
      fields: ['Gerechtigkeit', 'Naturrecht', 'Gewaltlosigkeit', 'Bürgerrechte'],
      bio: 'Führende Gestalt der amerikanischen Bürgerrechtsbewegung, Friedensnobelpreisträger 1964. In seinem „Brief aus dem Gefängnis von Birmingham" (1963) begründete er den gewaltlosen Widerstand gegen ungerechte Gesetze mit Augustinus und Thomas von Aquin: Ein ungerechtes Gesetz widerspricht dem Gesetz Gottes. 1968 wurde er ermordet.',
      keyWorks: ['Letter from Birmingham Jail (1963)', 'Strength to Love (1963)'],
    },
  ],
};

export default topic;
