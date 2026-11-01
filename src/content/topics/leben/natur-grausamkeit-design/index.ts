import type { Topic } from '../../../schema.ts';
import parasitenGrausamesDesign from './parasiten-grausames-design.ts';
import aussterben99Prozent from './aussterben-99-prozent.ts';
import krankheitserregerDesign from './krankheitserreger-design.ts';

const topic: Topic = {
  id: 'natur-grausamkeit-design',
  category: 'leben',
  group: 'Evolutionsbiologie',
  order: 2,
  title: `Grausamkeit der Natur und Design`,
  subtitle: `Schlupfwespen, Massenaussterben, Krankheitserreger – widerlegt die dunkle Seite der Natur einen guten Schöpfer?`,
  icon: 'bug',
  overview: `Seit Darwins Brief an Asa Gray (1860) gehört die „Grausamkeit der Natur" zu den wirkungsvollsten Einwänden gegen einen guten Schöpfer. Er tritt in drei Formen auf: **Parasiten** wie die Schlupfwespe, deren Larven Raupen von innen fressen; das **Aussterben** von über 99 Prozent aller Arten, die je lebten; und **Krankheitserreger** wie Malaria, Pest und Pocken. Der Einwand richtet sich besonders gegen das Intelligent-Design-Argument: Je raffinierter man biologische Systeme als „entworfen" beschreibt, desto direkter scheint man den Designer für ihre schlimmen Folgen verantwortlich zu machen. Evolutionsbiologen wie Francisco Ayala sehen deshalb in der ungelenkten Evolution sogar ein „Geschenk" an die Religion.

Die Antwort beginnt mit einer Unterscheidung: Ob ein System Planung zeigt, ist eine empirische Frage; ob sein heutiger Einsatz gut ist, eine moralische. Dann helfen die Fakten: Die allermeisten Mikroben sind harmlos oder lebensnotwendig; Viren sind Teil der Infrastruktur der Biosphäre; viele Parasiten und Krankheitserreger sind biologisch nachweisbar „entgleiste" Formen – sie stammen von frei lebenden oder symbiotischen Vorfahren ab, haben Gene verloren oder Gift-Gene über Viren aufgenommen. Das Aussterben schließlich widerlegt nur einen Schöpfer unveränderlicher Museumsstücke, den die Bibel nicht lehrt: Ps 104 preist Gott dafür, dass er Geschöpfe vergehen lässt und „die Gestalt der Erde erneuert".

Ehrlich bleibt: Hinter allen drei Einwänden steht die Theodizee-Frage. Sie betrifft jede Form des Theismus – auch die theistische Evolution – und wird im Christentum nicht durch Verharmlosung beantwortet, sondern durch die Hoffnung einer Schöpfung, die „auf Hoffnung" der Vergänglichkeit unterworfen wurde (Röm 8,20–22), durch den Gott, der in Christus selbst gelitten hat, und durch die tätige Liebe, die Krankheiten bekämpft. Die koptische Kirche hat über Erdalter und biologische Mechanismen kein Dogma; sie bekennt eine gute Schöpfung, einen realen Fall und die Erneuerung in Christus. Die philosophische Seite des Tierleids behandelt der Themenblock „Theodizee".`,
  strategy: `**1. Zuerst Mitgefühl, dann Argumente.** Das Leid in der Natur ist real. Sag offen: „Das ist für mich auch eine schwere Frage." Wer mit einem flotten Gegenargument beginnt, verliert.

**2. Die Unterscheidung einführen:** „Ob etwas entworfen ist, und ob uns sein Ergebnis gefällt, sind zwei Fragen." Beispiel: Auch eine Mausefalle ist entworfen.

**3. Proportionen zeigen.** Rund 1.400 bekannte menschliche Erregerarten – gegen Millionen harmloser und lebensnotwendiger Mikroben. Wir tragen etwa so viele Bakterien wie eigene Zellen. Viren steuern die Ozeane mit, ein Virus-Gen baut die Plazenta.

**4. Entgleisung belegen.** Cholera wird erst durch einen Phagen giftig; der Malariaerreger ist mit einer Korallen-Partneralge verwandt und hat seine Photosynthese verloren. Das passt zu Röm 8,20–22.

**5. Den Maßstab hinterfragen.** „Grausam" und „verschwenderisch" sind Wertbegriffe. Frage freundlich: „Gibt es in deinem Weltbild objektives Gut und Böse?" Dawkins selbst sagt: nein.

**6. Theodizee benennen und an den Themenblock „Theodizee" übergeben.** Die Frage betrifft jeden Theisten, auch die theistische Evolution. Die christliche Antwort ist nicht eine Formel, sondern Kreuz, Auferstehung und Hoffnung.

**Fallen:**
- Nie behaupten, Tiere spürten nichts.
- Nie Krankheit als Strafe deuten (Joh 9,3).
- Nicht so tun, als gäbe es nur eine christliche Position zu Tod vor dem Sündenfall – kein Dogma.
- Darwin nicht karikieren; sein Ringen nach dem Tod seiner Tochter verdient Respekt.`,
  keyOpponents: [
    { name: 'Charles Darwin', role: 'Naturforscher (1809–1882)', work: 'Brief an Asa Gray, 22. Mai 1860' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'River Out of Eden (1995)' },
    { name: 'Francisco J. Ayala', role: 'Evolutionsbiologe, UC Irvine', work: 'Darwin\'s Gift to Science and Religion (2007)' },
    { name: 'Jerry A. Coyne', role: 'Evolutionsbiologe, University of Chicago', work: 'Faith vs. Fact (2015)' },
    { name: 'Stephen Jay Gould', role: 'Paläontologe, Harvard', work: 'Wonderful Life (1989); „Nonmoral Nature" (1982)' },
    { name: 'Paul Draper', role: 'Religionsphilosoph, Purdue University', work: '„Darwin\'s Argument from Evil" (2012)' },
  ],
  claims: [parasitenGrausamesDesign, aussterben99Prozent, krankheitserregerDesign],
};

export default topic;
