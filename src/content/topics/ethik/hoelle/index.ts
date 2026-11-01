import type { Topic } from '../../../schema.ts';
import ewigeStrafeUngerecht from './ewige-strafe-ungerecht.ts';
import liebenderGottKeineHoelle from './liebender-gott-keine-hoelle.ts';
import hoelleAngstmache from './hoelle-angstmache.ts';

const topic: Topic = {
  id: 'hoelle',
  category: 'ethik',
  group: 'Hölle & Gericht',
  order: 1,
  title: `Hölle und Gericht`,
  subtitle: `Ewige Strafe, Gottes Liebe und die Freiheit des Menschen`,
  icon: 'flame-kindling',
  overview: `Kaum eine christliche Lehre stößt heute auf so viel Widerspruch wie die Lehre von der Hölle. Der Einwand kommt von außen – Bertrand Russell sah im Glauben Jesu an die Hölle einen Mangel seines Charakters, Christopher Hitchens und Richard Dawkins halten die Höllenlehre für ein Instrument der Angst und Kontrolle – und zunehmend von innen: **David Bentley Hart**, ein orthodoxer Religionsphilosoph, vertritt in *That All Shall Be Saved* (2019) die Allversöhnung; evangelikale Theologen wie **Edward Fudge** und (vorsichtig) **John Stott** haben die endgültige Vernichtung der Verlorenen (Annihilationismus) vertreten; **Rob Bell** löste mit *Love Wins* (2011) eine breite Debatte aus.

Die koptisch-orthodoxe Kirche bekennt mit der ganzen Tradition die Wiederkunft Christi, das Gericht, das ewige Leben und die ewige Strafe. Sie lehrt **keine Allversöhnung** als Dogma und **kein Fegefeuer**, betet aber für die Entschlafenen und erklärt niemanden für verdammt. Die Lehre des Origenes von der Wiederherstellung aller (*Apokatastasis*) hat sie nicht übernommen – schon Papst Theophilus von Alexandrien ließ um 400 die origenistischen Lehren verurteilen. Zugleich ist ehrlich anzuerkennen, dass bedeutende Väter wie Gregor von Nyssa und Isaak der Syrer (in seinen späteren Schriften) die Hoffnung auf die Rettung aller geäußert haben.

Die östliche Tradition hat eine tiefe Deutung der Hölle bewahrt, die viele Einwände entschärft: Die Hölle ist nicht eine Folterkammer, in der Gott Rache übt, sondern die Erfahrung der Gegenwart des liebenden Gottes durch einen Menschen, der diese Liebe endgültig zurückweist. Dieselbe Liebe ist für die einen Licht, für die anderen Feuer (Isaak der Syrer: die „Geißel der Liebe"; Basilius: das geteilte Feuer). C. S. Lewis hat diese Sicht für den Westen formuliert: Die Türen der Hölle sind von innen verschlossen.`,
  strategy: `**1. Nicht drohen, sondern erklären.** Wer mit der Hölle droht, bestätigt den Vorwurf der Angstmache. Sprich von der Hölle als Warnung, die du zuerst auf dich selbst beziehst, und als Möglichkeit, die Gottes Liebe respektiert.

**2. Missbrauch zugeben.** Höllenpredigten wurden zur Einschüchterung missbraucht; der westliche Ablasshandel ist ein Beispiel. Die koptische Kirche kennt weder Ablässe noch Fegefeuer.

**3. Das Bild korrigieren.** Die Hölle ist nicht eine Rechnung, bei der Gott für endliche Taten unendliche Folter verhängt, sondern die andauernde, frei gewählte Abwendung von der Quelle allen Lebens. Kern: „ewiges Verderben, vom Angesicht des HERRN" (2 Thess 1,9). Nutze das östliche Bild: dieselbe Liebe – Licht oder Feuer.

**4. Exegetisch präzise sein.** Mt 25,46: dasselbe *aiōnios* für Leben und Strafe (Augustinus, Basilius). Offb 14,11; 20,10. Die „Müllkippen-Gehenna" ist erst um 1200 bezeugt. Die Höllenlehre ist nicht mittelalterlich (Ignatius, Justin, Polykarp).

**5. Gegenpositionen fair darstellen.** Allversöhnung und Annihilationismus werden von ernsthaften Christen vertreten. Erkenne die Hoffnung von Gregor von Nyssa und Isaak dem Syrer an; erkläre, warum die Kirche sie nicht zur Lehre gemacht hat.

**6. Mit dem Kreuz enden.** Gott hat seinen Sohn gegeben, damit niemand verloren gehen muss. Wer verloren geht, geht an einem ausgestreckten Arm vorbei.

**Fallen:** Niemanden für verdammt erklären. Dante nicht mit Dogma verwechseln. Hart, Bell oder Stott nicht als Ketzer beschimpfen. Die Schwere der Frage nicht kleinreden – Lewis' Ehrlichkeit („keine Lehre würde ich lieber entfernen") überzeugt mehr als Gleichgültigkeit.`,
  keyOpponents: [
    { name: 'Bertrand Russell', role: 'Philosoph (1872–1970)', work: 'Why I Am Not a Christian (1927)' },
    { name: 'David Bentley Hart', role: 'Orthodoxer Religionsphilosoph, Universalist', work: 'That All Shall Be Saved (2019)' },
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, UNC', work: 'Heaven and Hell (2020)' },
    { name: 'Christopher Hitchens', role: 'Journalist und Autor (1949–2011)', work: 'God Is Not Great (2007)' },
    { name: 'Rob Bell', role: 'Autor, ehemaliger Pastor', work: 'Love Wins (2011)' },
    { name: 'Edward W. Fudge', role: 'Theologe, Annihilationist (1944–2017)', work: 'The Fire That Consumes (1982)' },
  ],
  claims: [ewigeStrafeUngerecht, liebenderGottKeineHoelle, hoelleAngstmache],
  newPeople: [
    {
      id: 'theophilus-alexandrien',
      name: 'Theophilus von Alexandrien',
      years: 'gest. 412',
      era: 'patristisch',
      tradition: 'koptisch',
      title: '23. Papst von Alexandrien',
      fields: ['Kirchenpolitik', 'Auseinandersetzung mit dem Origenismus', 'Festbriefe'],
      bio: 'Papst von Alexandrien von 385 bis 412 und Onkel und Vorgänger des hl. Kyrill. Ließ um 400 auf einer Synode in Alexandrien die Lehren des Origenes verurteilen; seine Synodal- und Festbriefe sind teilweise in lateinischer Übersetzung des Hieronymus erhalten.',
      keyWorks: ['Synodalbrief gegen die Origenisten (um 400)', 'Festbriefe (teilweise bei Hieronymus überliefert)'],
      caveat: 'Sein Vorgehen gegen die origenistischen Mönche („Lange Brüder") und gegen Johannes Chrysostomus (Eichensynode 403) war auch kirchenpolitisch motiviert und wird in der Kirchengeschichte kritisch beurteilt.',
    },
  ],
};

export default topic;
