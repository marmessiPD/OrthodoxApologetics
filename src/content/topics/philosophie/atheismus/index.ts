import type { Topic } from '../../../schema.ts';
import keineBeweiseFuerGott from './keine-beweise-fuer-gott.ts';
import beweislastMangelAnGlauben from './beweislast-mangel-an-glauben.ts';
import werSchufGott from './wer-schuf-gott.ts';
import teekanneSpaghettimonster from './teekanne-spaghettimonster.ts';
import einGottWeiter from './ein-gott-weiter.ts';
import aussergewoehnlicheBelege from './aussergewoehnliche-belege.ts';

const topic: Topic = {
  id: 'atheismus',
  category: 'philosophie',
  group: 'Atheismus & Gottesbeweise',
  order: 1,
  title: `Atheismus`,
  subtitle: `Beweislast, „Wer schuf Gott?", Teekanne, Zeus und die Frage nach den Belegen`,
  icon: 'circle-off',
  overview: `Im Gespräch mit Atheisten begegnen dir zwei sehr verschiedene Gegenüber. Auf der einen Seite stehen die **populären Slogans** des „Neuen Atheismus" (Dawkins, Hitchens, Harris, Dennett) und der Debattierszene (Matt Dillahunty, Ricky Gervais): „Es gibt keine Beweise", „Wer schuf Gott?", „Russells Teekanne", „Ich gehe nur einen Gott weiter", „Außergewöhnliche Behauptungen erfordern außergewöhnliche Belege". Sie sind rhetorisch stark, philosophisch aber oft erstaunlich dünn – viele beruhen auf einem falschen Bild davon, was Christen mit „Gott" meinen, oder auf einer stillschweigenden Umdefinition von Begriffen.

Auf der anderen Seite stehen **akademische Atheisten** wie Graham Oppy, Jeffery Jay Lowder, J. L. Schellenberg oder Paul Draper. Sie bestreiten selten, dass es *irgendwelche* Belege für Gott gibt; sie argumentieren, dass die Gesamtheit der Belege den Naturalismus stütze, dass der Naturalismus sparsamer sei oder dass Gottes Verborgenheit gegen ihn spreche. Mit ihnen lohnt ein ernsthaftes Gespräch über Abwägung, Erklärungskraft und die Kosten unerklärter Grundtatsachen.

Dieser Themenblock legt das Fundament: Was ist ein Beleg? Wer trägt die Beweislast? Was meinen Christen eigentlich mit „Gott" – ein Wesen in der Welt wie Zeus oder den ungeschaffenen Grund allen Seins? Die einzelnen Gottesargumente (Kalam, Kontingenz, ontologisches Argument) werden im Themenblock „Gottesbeweise unter Beschuss" vertieft, die naturwissenschaftlichen Detailfragen (Urknall, Feinabstimmung, Gehirn) in den Kategorien Kosmos und Mensch.

Für Kopten ist diese Debatte nicht neu: Die ersten Christen wurden selbst als „Atheisten" angeklagt, weil sie die Götter verweigerten. Justin, Athenagoras, Clemens und Origenes von Alexandrien und der hl. Athanasius haben die Frage nach Gott mit Vernunftgründen und mit dem Zeugnis von Christus beantwortet – diesen Weg gehen wir weiter.`,
  strategy: `**1. Begriffe klären, bevor du argumentierst.** Frag freundlich: „Was meinst du mit ‚Beweis'? Was meinst du mit ‚Gott'? Behauptest du, dass es keinen Gott gibt, oder bist du nur nicht überzeugt?" Die Hälfte der Slogans löst sich auf, sobald die Begriffe klar sind.

**2. Unterscheide Beweis und Beleg.** Niemand hat einen mathematischen Gottesbeweis, wie niemand einen mathematischen Beweis für die Existenz anderer Menschen mit Bewusstsein hat. Sprich von guten Gründen und der besten Erklärung – das ist der Maßstab von Geschichte, Medizin und Naturwissenschaft.

**3. Kategorienfehler aufdecken.** Teekanne, Spaghettimonster, Zeus und „Wer schuf Gott?" setzen alle voraus, dass Gott ein Ding *in* der Welt ist. Erkläre: Christen meinen den ungeschaffenen, notwendigen Grund, warum es überhaupt eine Welt gibt.

**4. Die Beweislast fair verteilen.** Nimm deine eigene Begründungspflicht an (1 Petr 3,15) – und bitte das Gegenüber, seine Behauptungen ebenfalls zu begründen. „Nur die Natur existiert" ist keine Nullhypothese.

**5. Kumulativ argumentieren.** Biete nicht ein einziges „Killer-Argument" an, sondern eine Kette von Indizien: Existenz – Anfang – Ordnung – Bewusstsein – Moral – Auferstehung. Wenn ein Glied bestritten wird, trägt die Kette trotzdem.

**6. Zur Person Jesu kommen.** Die philosophischen Argumente führen zum Schöpfer; die Auferstehung zeigt, wer dieser Schöpfer ist. Ziel des Gesprächs ist nicht ein Punktsieg, sondern die Einladung, Christus kennenzulernen.

**Fallen:** Lass dich nicht in einen Etikettenstreit („Atheismus ist auch ein Glaube!") verwickeln. Überziehe nicht („Ich kann Gott beweisen wie 2 + 2 = 4"). Und wenn hinter der Frage persönliches Leid steht, höre zuerst zu – „Wer schuf Gott?" klingt manchmal intellektuell und ist in Wahrheit ein Schmerz.`,
  keyOpponents: [
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The God Delusion (2006)' },
    { name: 'Christopher Hitchens', role: 'Publizist (1949–2011)', work: 'God Is Not Great (2007)' },
    { name: 'Graham Oppy', role: 'Religionsphilosoph, Monash University', work: 'Arguing about Gods (2006); Atheism: The Basics (2019)' },
    { name: 'Jeffery Jay Lowder', role: 'Mitbegründer der Secular Web', work: 'Evidenzbasierte Argumente für den Naturalismus' },
    { name: 'Matt Dillahunty', role: 'Atheistischer Debattierer', work: 'The Atheist Experience; zahlreiche Debatten' },
    { name: 'Alex O\'Connor', role: 'Philosoph und Podcaster', work: 'Within Reason (Podcast)' },
    { name: 'Bertrand Russell', role: 'Philosoph (1872–1970)', work: 'Why I Am Not a Christian (1927); „Is There a God?" (1952)' },
  ],
  claims: [keineBeweiseFuerGott, beweislastMangelAnGlauben, werSchufGott, teekanneSpaghettimonster, einGottWeiter, aussergewoehnlicheBelege],
};

export default topic;
