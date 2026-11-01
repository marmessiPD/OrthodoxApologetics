import type { Topic } from '../../../schema.ts';
import prophetenPsychischKrank from './propheten-psychisch-krank.ts';
import auferstehungTrauerhalluzination from './auferstehung-trauerhalluzination.ts';
import daemonenSindKrankheiten from './daemonen-sind-krankheiten.ts';

const topic: Topic = {
  id: 'psychiatrie',
  category: 'mensch',
  group: 'Psychiatrie',
  order: 1,
  title: `Psychiatrie und Offenbarung`,
  subtitle: `Waren Propheten krank, die Ostererscheinungen Halluzinationen und Dämonen nur Krankheiten?`,
  icon: 'activity',
  overview: `Die psychiatrische Religionskritik ist besonders wirkungsvoll, weil sie mit dem Anspruch medizinischer Sachlichkeit auftritt: Paulus habe an Temporallappen-Epilepsie gelitten, Jesus und die Propheten an Psychosen; die Auferstehungserscheinungen seien Trauerhalluzinationen gewesen, wie sie fast jeder zweite Verwitwete kennt; Dämonen seien unerkannte Epilepsien und dissoziative Störungen.

In jedem dieser Vorwürfe steckt ein wahrer Kern, den Christen offen zugeben sollten: Ekstatische Anfälle gibt es; Trauerwahrnehmungen sind häufig und normal; die meisten „Besessenen" der Geschichte waren krank. Gerade deshalb ist Genauigkeit entscheidend. Retrospektive Diagnosen widersprechen den Grundregeln der Psychiatrie; die biblischen Gestalten zeigen nicht den Funktionsverlust, der psychische Krankheit kennzeichnet; Trauerwahrnehmungen haben ein anderes Profil als die Ostererfahrungen (Einzelne statt Gruppen, Trauernde statt Gegner, kein leeres Grab, keine Deutung „auferstanden"); und die Evangelien selbst unterscheiden zwischen Krankheit und Besessenheit.

Die koptisch-orthodoxe Tradition bringt hier eine besondere Stärke mit: die jahrhundertealte Lehre der Wüstenväter von der **Unterscheidung der Geister**, die Visionen grundsätzlich misstraut, sowie die Ehrfurcht vor dem Arzt (Sir 38) und den heiligen Ärzten. Glaube und Psychiatrie sind keine Gegner.

Wichtig ist der Ton: Psychische Erkrankungen dürfen nie abwertend behandelt werden. Wer argumentiert, „Paulus war nicht verrückt", darf nicht den Eindruck erwecken, psychisch Kranke seien weniger wert oder könnten Gott nicht begegnen. Die historische Auferstehungsdebatte vertieft A16 (‚auferstehung'), hier liegt der Schwerpunkt auf den psychologischen und psychiatrischen Daten.`,
  strategy: `**1. Den wahren Kern anerkennen.** „Ja, es gibt ekstatische Anfälle. Ja, fast die Hälfte der Verwitweten nimmt ihre Verstorbenen wahr. Ja, viele ‚Besessene' waren krank." Das entwaffnet und zeigt Sachkenntnis.

**2. Nach den Kriterien fragen.** Bei Ferndiagnosen: „Nach welchen Kriterien – Leidensdruck, Funktionsverlust, Desorganisation – stellst du diese Diagnose?" Bei Halluzinationen: „Welche Merkmale haben Trauerwahrnehmungen – und welche die Ostererfahrungen?"

**3. Das Profil vergleichen.** Lerne die vier Unterschiede auswendig: (a) Einzelne vs. Gruppen, (b) Trauernde vs. Gegner und Skeptiker (Paulus, Jakobus), (c) kein Grab vs. leeres Grab, (d) „Ich spürte ihn" vs. „Er ist leiblich auferstanden".

**4. Bei 1 Kor 15 beginnen.** Wenn das Gegenüber die Evangelien als spät ablehnt, argumentiere mit der frühen Bekenntnisformel 1 Kor 15,3–8 und mit Gal 1 – das akzeptieren auch kritische Forscher.

**5. Medizin bejahen.** Bei Dämonen: Zuerst immer der Arzt. „Ehre den Arzt" (Sir 38,1). Wer das klar sagt, kann danach glaubwürdig über die seltenen Ausnahmen sprechen.

**Fallen:**
- Nie psychisch Kranke herabsetzen oder sagen, „echte Propheten" könnten nicht krank sein.
- Nicht behaupten, Gruppenhalluzinationen seien „unmöglich" – sondern „klinisch nicht belegt".
- Den Fall Anneliese Michel nicht verteidigen; ihn als Mahnung nennen.
- Wenn das Gegenüber zur Frage „Sind Wunder überhaupt möglich?" wechselt, benenne den Wechsel: Dann entscheiden nicht mehr die Daten, sondern die Weltanschauung.`,
  keyOpponents: [
    { name: 'Gerd Lüdemann', role: 'Neutestamentler, Göttingen', work: 'Die Auferstehung Jesu (1994)' },
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, UNC', work: 'How Jesus Became God (2014)' },
    { name: 'Robert Sapolsky', role: 'Neuroendokrinologe, Stanford', work: 'Vorlesung „Biology of Religiosity" (2010)' },
    { name: 'Evan D. Murray, Miles G. Cunningham, Bruce H. Price', role: 'Neuropsychiater, Harvard Medical School', work: 'J Neuropsychiatry Clin Neurosci (2012)' },
    { name: 'Carl Sagan', role: 'Astronom und Wissenschaftspublizist', work: 'The Demon-Haunted World (1995)' },
    { name: 'Michael Shermer', role: 'Herausgeber des „Skeptic"', work: 'The Believing Brain (2011)' },
  ],
  claims: [prophetenPsychischKrank, auferstehungTrauerhalluzination, daemonenSindKrankheiten],
  newPeople: [
    {
      id: 'm-scott-peck',
      name: 'M. Scott Peck',
      years: '1936–2005',
      era: 'modern',
      tradition: 'christlich',
      title: 'Psychiater und Autor',
      fields: ['Psychiatrie', 'Psychologie des Bösen', 'Besessenheit'],
      bio: 'US-amerikanischer Psychiater, bekannt durch den Bestseller „The Road Less Traveled" (1978). Wurde 1980 als Erwachsener Christ. In „People of the Lie" und „Glimpses of the Devil" beschrieb er, wie er als ursprünglich skeptischer Psychiater an Exorzismen teilnahm und Phänomene erlebte, die er psychiatrisch nicht erklären konnte.',
      keyWorks: ['The Road Less Traveled (1978)', 'People of the Lie (1983)', 'Glimpses of the Devil (2005)'],
      caveat: 'Peck vertrat theologisch eigenständige, teils unkonventionelle Ansichten und ist keine Lehrautorität; er wird hier nur als psychiatrischer Zeuge angeführt.',
    },
    {
      id: 'richard-gallagher',
      name: 'Richard Gallagher',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'katholisch',
      title: 'Psychiater, Professor für klinische Psychiatrie, New York Medical College',
      fields: ['Psychiatrie', 'Psychoanalyse', 'Besessenheit & Exorzismus'],
      bio: 'Facharzt für Psychiatrie und Psychoanalytiker, der seit Jahrzehnten im Auftrag von Seelsorgern Menschen begutachtet, die als besessen gelten. Er stuft die große Mehrheit dieser Fälle als psychische Erkrankungen ein, berichtet aber von seltenen Fällen mit Phänomenen, die er psychiatrisch nicht erklären kann.',
      keyWorks: ['„As a psychiatrist, I diagnose mental illness. Also, I help spot demonic possession.", The Washington Post (2016)', 'Demonic Foes (2020)'],
    },
  ],
};

export default topic;
