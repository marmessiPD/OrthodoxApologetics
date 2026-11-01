import type { Topic } from '../../../schema.ts';
import alleReligionenGleichWahr from './alle-religionen-gleich-wahr.ts';
import arrogantNurJesus from './arrogant-nur-jesus.ts';
import nieVonJesusGehoert from './nie-von-jesus-gehoert.ts';
import nurChristWegenGeburt from './nur-christ-wegen-geburt.ts';
import alleLehrenGoldeneRegel from './alle-lehren-goldene-regel.ts';

const topic: Topic = {
  id: 'pluralismus',
  category: 'religionen',
  group: 'Religiöser Pluralismus',
  order: 1,
  title: `Religiöser Pluralismus`,
  subtitle: `Sind alle Religionen gleich wahr? Arroganz, Geburtsort, Goldene Regel – und die, die nie von Jesus hörten`,
  icon: 'git-fork',
  overview: `In westlichen Gesellschaften ist der religiöse Pluralismus die selbstverständliche Hintergrundüberzeugung: Alle Religionen seien im Kern gleich, verschiedene Wege zum selben Ziel, und wer etwas anderes sagt, sei intolerant. Philosophisch am gründlichsten hat das **John Hick** ausgearbeitet: Die Religionen seien kulturell geprägte Antworten auf das eine „Reale an sich". Populär wird die Idee durch das Gleichnis von den Blinden und dem Elefanten, durch Karen Armstrongs Betonung des Mitgefühls als gemeinsamem Kern und durch das „Weltethos". Dazu kommen persönliche Einwände: Ist es nicht arrogant, Jesus für den einzigen Weg zu halten? Was ist mit denen, die nie von ihm hörten? Bist du nicht nur Christ, weil deine Eltern es waren?

Diese Einwände sind ernst zu nehmen – sie kommen oft aus echter Sorge um andere Menschen und aus der berechtigten Scham über Gewalt im Namen der Religion. Zugleich enthält der Pluralismus eine innere Spannung: Er beansprucht den Überblick, den er allen Religionen abspricht (der Erzähler sieht den Elefanten), und er widerspricht in Wahrheit allen Religionen in ihrem Selbstverständnis. Der Satz vom Widerspruch gilt auch für Religionen: Jesus ist am Kreuz gestorben – oder nicht.

Die koptisch-orthodoxe Perspektive verbindet zwei Dinge, die der Pluralismus für unvereinbar hält: **Klarheit über Christus** als einzigen Erlöser und **Demut im Urteil** über einzelne Menschen. Die Kirche weiß, wo das Heil ist; über das Schicksal derer außerhalb ihrer sichtbaren Grenzen urteilt sie nicht, sondern vertraut auf den gerechten und barmherzigen Richter (Gen 18,25). Die alexandrinische Tradition hat schon gegen den antiken Pluralisten Kelsos (Origenes) argumentiert und zugleich mit Justin und Clemens die „Samen des Logos" in allen Völkern gewürdigt. Und die koptische Kirche hat in vierzehn Jahrhunderten als Minderheit vorgelebt, wie man mit Andersgläubigen in Frieden lebt, ohne die Wahrheit aufzugeben.`,
  strategy: `**1. Unterscheide die Fragen.** „Sind alle Religionen gleich wahr?" (Wahrheitsfrage), „Ist es arrogant, das zu bestreiten?" (Haltungsfrage), „Was geschieht mit Nichtchristen?" (Gerichtsfrage), „Woher kommt mein Glaube?" (Ursprungsfrage). Viele Gespräche scheitern, weil diese Fragen vermischt werden.

**2. Beginne mit Zustimmung.** Ja, Religionen enthalten viel Wahres und Gutes; ja, Christen waren oft arrogant; ja, Herkunft prägt. Diese Zugeständnisse öffnen Türen.

**3. Stelle die Schlüsselfragen freundlich.** „Wer sieht den ganzen Elefanten?" – „Ist Jesus am Kreuz gestorben, ja oder nein?" – „Hältst du meinen Exklusivismus für falsch? Ist das nicht auch exklusiv?" – „Gilt das Geburtsort-Argument auch für dich?"

**4. Bring das Gespräch zu Jesus und zur Auferstehung.** Der Pluralismus wird erst dann überflüssig, wenn klar ist, dass Gott gesprochen hat. Die Auferstehung ist der öffentliche, prüfbare Anspruch des Christentums.

**5. Bleibe pastoral.** Hinter der Frage nach den Nichtevangelisierten steht oft die Sorge um geliebte Menschen. Antworte mit Gen 18,25 und Lk 13,23–24, nicht mit Urteilen über Einzelne.

**Fallen:** (a) „Alle anderen kommen in die Hölle" – lehrt die orthodoxe Kirche so nicht. (b) „Am Ende werden alle gerettet" – ebenfalls kein Dogma. (c) Gereizt oder rechthaberisch reagieren – bestätigt den Arroganzvorwurf. (d) Unbelegte Zitate verwenden (etwa den Satz „Wir wissen, wo die Kirche ist …" als wörtliches Zitat einer bestimmten Person).`,
  keyOpponents: [
    { name: 'John Hick', role: 'Religionsphilosoph, Birmingham und Claremont (1922–2012)', work: 'An Interpretation of Religion (1989); God and the Universe of Faiths (1973)' },
    { name: 'Karen Armstrong', role: 'Religionshistorikerin', work: 'A History of God (1993); The Case for God (2009)' },
    { name: 'Huston Smith', role: 'Religionswissenschaftler (1919–2016)', work: 'The World\'s Religions (1991)' },
    { name: 'Paul F. Knitter', role: 'Katholischer Theologe, Union Theological Seminary', work: 'No Other Name? (1985)' },
    { name: 'Hans Küng', role: 'Katholischer Theologe, Initiator des Weltethos (1928–2021)', work: 'Projekt Weltethos (1990)' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The God Delusion (2006)' },
  ],
  newPeople: [
    {
      id: 'lesslie-newbigin',
      name: 'Lesslie Newbigin',
      years: '1909–1998',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Missionar und Bischof der Kirche von Südindien',
      fields: ['Religiöser Pluralismus', 'Mission', 'Evangelium und westliche Kultur'],
      bio: 'Britischer Theologe, der rund vier Jahrzehnte in Indien wirkte, zuletzt als Bischof von Madras in der Kirche von Südindien. Nach seiner Rückkehr nach England analysierte er die pluralistische westliche Kultur aus der Sicht eines Missionars und wurde zu einem der einflussreichsten Kritiker des religiösen Relativismus.',
      keyWorks: ['The Gospel in a Pluralist Society (1989)', 'Foolishness to the Greeks (1986)'],
    },
  ],
  claims: [alleReligionenGleichWahr, arrogantNurJesus, nieVonJesusGehoert, nurChristWegenGeburt, alleLehrenGoldeneRegel],
};

export default topic;
