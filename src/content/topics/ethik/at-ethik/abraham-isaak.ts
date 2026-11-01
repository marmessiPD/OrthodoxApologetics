import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'abraham-isaak',
  title: `„Gott verlangte von Abraham ein Kindesopfer."`,
  proponents: [
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The God Delusion (2006), Kap. 7' },
    { name: 'Christopher Hitchens', role: 'Publizist und Religionskritiker', work: 'God Is Not Great (2007)' },
    { name: 'Immanuel Kant', role: 'Philosoph der Aufklärung', work: 'Der Streit der Fakultäten (1798)' },
    { name: 'Sam Harris', role: 'Neurowissenschaftler und Autor', work: 'The End of Faith (2004)' },
  ],
  steelman: `Gen 22 erzählt, wie Gott von Abraham verlangt, seinen geliebten Sohn auf einem Berg zu schlachten und zu verbrennen. Abraham widerspricht nicht – anders als bei Sodom –, sondern steht früh auf, spaltet Holz, fesselt seinen Sohn und hebt das Messer. Dass ein Engel im letzten Moment eingreift, ändert nichts daran, dass der Gott der Bibel einen Mordbefehl erteilt hat und dass Abrahams Bereitschaft, ihn auszuführen, als Vorbild des Glaubens gepriesen wird – in Judentum, Christentum und Islam. Nach heutigen Maßstäben ist die Geschichte, wie Dawkins sagt, zugleich Kindesmissbrauch und die erste Berufung auf „Ich habe nur Befehle befolgt". Kant hatte recht: Wenn eine Stimme verlangt, das eigene Kind zu töten, ist es sicherer, dass sie nicht von Gott kommt, als dass man ihr gehorchen müsste. Eine Religion, die blinden Gehorsam bis zur Tötung des eigenen Kindes zum Ideal erhebt, ist gefährlich.`,
  biblical: {
    summary: `Der Erzähler sagt dem Leser gleich im ersten Vers, worum es geht: „Gott **versuchte** (prüfte) Abraham" (Gen 22,1). Die Geschichte spielt in einer Welt, in der Kinderopfer an Götter verbreitet waren (Dtn 12,31; 2 Kön 3,27), und ihr Höhepunkt ist, dass Israels Gott das Opfer **verhindert** und selbst ein Ersatztier stellt. Später lässt Gott durch Jeremia sagen, Kinderopfer seien etwas, „welches ich nie geboten noch in den Sinn genommen habe" (Jer 7,31; 19,5). Abraham handelt nicht in blindem Gehorsam, sondern in Vertrauen auf die Verheißung: Er sagt den Knechten „wir wollen wiederkommen" (22,5) und zu Isaak „Gott wird sich ersehen ein Schaf" (22,8). Der Hebräerbrief deutet: Abraham „dachte, Gott kann auch wohl von den Toten erwecken" (Hebr 11,19).`,
    detail: `**„Versuchen" (*nissāh*).** Das Verb bezeichnet eine Prüfung, die offenlegt, was in einem Menschen ist (vgl. Ex 20,20; Dtn 8,2). Der Leser weiß von Anfang an: Es ist ein Test, kein Wunsch nach Isaaks Tod.

**Die Verheißung.** Gott hatte zugesagt: „In Isaak soll dir der Same genannt werden" (Gen 21,12). Abraham steht vor einem scheinbaren Widerspruch zwischen Befehl und Verheißung – und löst ihn im Vertrauen, dass Gott seine Verheißung halten wird, selbst über den Tod hinaus (Hebr 11,17–19).

**Isaaks Alter.** Isaak trägt das Holz für ein Brandopfer einen Berg hinauf (22,6) – das ist kein Kleinkind. Josephus gibt sein Alter mit 25 Jahren an (Ant. 1,227); die jüdische Tradition betont, dass er sich freiwillig binden ließ. „Und gingen die beiden miteinander" (22,6.8) – der Vers wird zweimal wiederholt.

**Der Ort und die Typologie.** Gott verlangt „deinen einzigen Sohn, den du lieb hast" (22,2) – Worte, die im NT bei Jesu Taufe und in Joh 3,16 nachklingen. Paulus schreibt in Röm 8,32 über den Vater: „der seines eigenen Sohnes nicht verschont hat" – das griechische Verb (*ouk epheisato*) greift genau die Septuaginta-Formulierung von Gen 22,16 auf. Was Gott Abraham erspart, tut er selbst.`,
    sources: [
      { kind: 'bibel', work: 'Genesis', ref: '22,1', quote: `Nach diesen Geschichten versuchte Gott Abraham.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Genesis', ref: '22,5', quote: `Bleibt ihr hier mit dem Esel; ich und der Knabe wollen dorthin gehen, und wenn wir angebetet haben, wollen wir wieder zu euch kommen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Genesis', ref: '22,8', quote: `Mein Sohn, Gott wird sich ersehen ein Schaf zum Brandopfer.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jeremia', ref: '19,5', quote: `…ihre Kinder mit Feuer zu verbrennen dem Baal zu Brandopfern, welches ich ihnen weder geboten noch davon geredet habe, dazu in mein Herz nie gekommen ist.`, translation: 'nach Luther 1912', status: 'paraphrase' },
      { kind: 'bibel', work: 'Hebräer', ref: '11,17–19', quote: `Durch den Glauben opferte Abraham den Isaak, da er versucht ward … und dachte, Gott kann auch wohl von den Toten erwecken.`, translation: 'nach Luther 1912', status: 'paraphrase' },
      { kind: 'bibel', work: 'Römer', ref: '8,32', quote: `…welcher auch seines eigenen Sohnes nicht hat verschont, sondern hat ihn für uns alle dahingegeben.`, original: 'ὅς γε τοῦ ἰδίου υἱοῦ οὐκ ἐφείσατο', translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'juedisch', author: 'Flavius Josephus', work: 'Jüdische Altertümer', ref: '1,227', quote: `Isaak war damals 25 Jahre alt.`, status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die Väter lesen Gen 22 als eine der großen Vorabbildungen Christi: Isaak trägt das Holz wie Christus das Kreuz, der Vater gibt den geliebten Sohn, der Widder im Gestrüpp wird an Stelle des Sohnes geopfert. Für den hl. Kyrill von Alexandrien zeigt die Szene, dass im Opfer Christi der Logos leidensunfähig bleibt, während er in seinem Fleisch leidet – wie Isaak lebend zurückkehrt und der Widder geopfert wird. In der koptischen Tradition ist Abraham der „Vater der Gläubigen", und die Bindung Isaaks wird in der Karwoche im Licht des Kreuzes gelesen.`,
    sources: [
      { kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Glaphyra zur Genesis', ref: 'Buch III (zu Gen 22)', quote: `Isaak, der lebend zurückkehrt, und der Widder, der geopfert wird, sind gemeinsam ein Bild Christi: Der Logos bleibt leidensunfähig, während sein eigenes Fleisch leidet.`, status: 'paraphrase', note: 'Sinngemäß; genaue Abschnittsangabe vor Verwendung prüfen.' },
      { kind: 'kirchenvater', author: 'Origenes', work: 'Homilien zur Genesis', ref: 'Hom. 8', year: 'um 240', quote: `Abraham glaubte an die Auferstehung; dass Isaak das Holz trägt, ist ein Bild Christi, der sein Kreuz trägt.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'IV,5,4', year: 'um 180', quote: `Wie Abraham dem Wort Gottes folgte und seinen Sohn hingab, so sollen auch wir, wie Isaak das Holz trug, unser Kreuz tragen.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Die Geschichte sagt im ersten Vers, dass es eine Prüfung war – und ihr Höhepunkt ist, dass Gott das Opfer verhindert. In einer Welt, in der man Göttern Kinder opferte, ist die Botschaft: Dieser Gott will keine Kinderopfer; Jeremia sagt später, das sei Gott „nie in den Sinn gekommen". Abraham hat nicht blind gehorcht, sondern darauf vertraut, dass Gott seine Verheißung hält – „wir wollen wiederkommen", sagt er den Knechten. Und was Gott Abraham erspart, tut er selbst: Er gibt seinen eigenen Sohn.`,
  keyPoints: [
    `**Eine Prüfung, kein Mordwunsch:** „Gott versuchte Abraham" (Gen 22,1) – der Leser weiß es von Anfang an.`,
    `**Der Höhepunkt ist das Verbot:** Gott verhindert das Opfer und stellt den Widder – gegen die Kinderopfer der Umwelt (Dtn 12,31; Jer 7,31).`,
    `**Vertrauen statt Kadavergehorsam:** „Wir wollen wiederkommen" (22,5); Abraham glaubte, Gott könne Isaak von den Toten erwecken (Hebr 11,19).`,
    `**Isaak war kein Kleinkind:** Er trägt das Holz den Berg hinauf; Josephus nennt 25 Jahre.`,
    `**Heute gilt keine solche „Stimme":** Gottes Wille ist in Christus offenbart; ein Befehl zum Töten Unschuldiger kommt nicht von Gott (Jer 7,31; Gal 1,8).`,
    `**Die Typologie:** Der Vater, der „seines eigenen Sohnes nicht verschont hat" (Röm 8,32), tut selbst, was er Abraham erspart.`,
  ],
  voices: [
    {
      person: 'kierkegaard',
      role: 'als Philosoph des Glaubens',
      text: `In *Furcht und Zittern* (1843) lässt Kierkegaard seinen Pseudonym-Autor Johannes de Silentio immer wieder um Gen 22 kreisen. Er weigert sich, die Geschichte zu verharmlosen: Wer Abraham bewundert, ohne die Angst zu spüren, hat nichts verstanden. Er spricht von einer „teleologischen Suspension des Ethischen" – Abrahams Glaube steht in einem unmittelbaren Verhältnis zu Gott, das sich nicht in allgemeine Regeln übersetzen lässt.

Wichtig ist, was Kierkegaard *nicht* sagt: Er leitet daraus keine Erlaubnis für irgendjemanden ab, Gewalt im Namen Gottes zu üben; Johannes de Silentio betont, dass er Abraham nicht verstehen und schon gar nicht nachahmen kann. Kierkegaards Pointe ist, dass Glaube das Vertrauen ist, Isaak „kraft des Absurden" zurückzubekommen.`,
      sources: [{ kind: 'fachliteratur', author: 'Søren Kierkegaard (Johannes de Silentio)', work: 'Furcht und Zittern', year: '1843', status: 'paraphrase' }],
    },
    {
      person: 'kyrill-alexandrien',
      role: 'als alexandrinischer Ausleger und Christologe',
      text: `In seinen *Glaphyra* zur Genesis liest Kyrill die Bindung Isaaks als Bild des Geheimnisses Christi. Isaak, der geliebte und einzige Sohn, trägt das Holz und wird gebunden – aber er stirbt nicht; an seiner Stelle wird der Widder geopfert. Für Kyrill zeigt das, wie im einen Christus der göttliche Logos leidensunfähig bleibt und doch das Leiden seines eigenen Fleisches sich zu eigen macht. Die Erzählung ist für ihn keine Verherrlichung des Kinderopfers, sondern eine Prophetie des einen Opfers, das alle anderen beendet.`,
      sources: [{ kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Glaphyra zur Genesis', ref: 'Buch III', status: 'paraphrase' }],
    },
    {
      person: 'origenes',
      role: 'als Prediger',
      text: `Origenes betont in seiner 8. Genesis-Homilie, dass Abraham nicht gegen jede Hoffnung handelte: Er glaubte, dass Gott Isaak von den Toten erwecken könne, und sagte darum „wir wollen wiederkommen". Den Leser fordert er auf, Abrahams Ringen ernst zu nehmen – der Text betont mit „dein Sohn, dein einziger, den du liebst" die Schwere der Prüfung. Zugleich sieht Origenes im holztragenden Isaak und im Widder Christus, den Gott selbst für uns gegeben hat.`,
      sources: [{ kind: 'kirchenvater', author: 'Origenes', work: 'Homilien zur Genesis', ref: 'Hom. 8', status: 'paraphrase' }],
    },
    {
      person: 'paulus',
      role: 'als Ausleger der Abrahamsgeschichte',
      text: `Paulus macht Abraham zum Urbild des Glaubens (Röm 4): Er „glaubte dem, der die Toten lebendig macht" (Röm 4,17). In Röm 8,32 nimmt er die Sprache von Gen 22 auf: Gott hat „seines eigenen Sohnes nicht verschont". Die Pointe: Was Gott von Abraham nicht zu Ende verlangte, hat er selbst vollzogen. Die Akedah ist nicht das Modell für menschliche Opfer, sondern die Ankündigung, dass Gott selbst das Opfer stellt.`,
      sources: [
        { kind: 'bibel', work: 'Römer', ref: '4,17', quote: `…vor Gott, dem er geglaubt hat, der da lebendig macht die Toten.`, translation: 'nach Luther 1912', status: 'paraphrase' },
      ],
    },
    {
      person: 'tim-keller',
      role: 'als Seelsorger',
      text: `Keller deutet Gen 22 in *Counterfeit Gods* (2009) seelsorgerlich: Isaak war für Abraham die Erfüllung aller Hoffnungen – die Gefahr war, dass das Geschenk wichtiger wurde als der Geber. Die Prüfung legt offen, ob Abraham Gott um Gottes willen liebt. Und die Geschichte endet nicht mit Verlust, sondern damit, dass Abraham seinen Sohn zurückerhält, nun als reines Geschenk. Keller betont: Gott hat Abraham das Opfer erspart, sich selbst aber nicht.`,
      sources: [{ kind: 'fachliteratur', author: 'Timothy Keller', work: 'Counterfeit Gods', ref: 'Kap. 1', year: '2009', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'kindesmissbrauch-befehle',
      objection: `Nach heutigen Maßstäben ist diese Geschichte Kindesmissbrauch und die erste Berufung auf „Ich habe nur Befehle befolgt". Und sie wird als Vorbild des Glaubens gepriesen!`,
      objectionBy: 'Richard Dawkins',
      answer: `Gepriesen wird nicht die Bereitschaft zu töten, sondern das Vertrauen, dass Gott seine Verheißung hält – Abraham sagt den Knechten „wir wollen wiederkommen". Der Höhepunkt der Geschichte ist, dass Gott das Opfer verhindert. Für die ersten Hörer, die von Nachbarvölkern wussten, die ihre Kinder opferten, war die Botschaft unmissverständlich: Dieser Gott will keine Kinderopfer. Jeremia sagt später, das sei Gott „nie in den Sinn gekommen".`,
      sources: [
        { kind: 'gegner', author: 'Richard Dawkins', work: 'The God Delusion', ref: 'Kap. 7', year: '2006', quote: `Nach modernen Maßstäben sei die Geschichte zugleich Kindesmissbrauch, Schikane in zwei asymmetrischen Machtverhältnissen und die erste Berufung auf die „Nürnberger Verteidigung".`, status: 'paraphrase' },
        { kind: 'bibel', work: '2. Könige', ref: '3,27', quote: `Der König von Moab nahm seinen erstgeborenen Sohn und opferte ihn zum Brandopfer auf der Mauer.`, status: 'paraphrase', note: 'Beleg für Kinderopfer in Israels Umwelt.' },
      ],
      followUps: [
        {
          id: 'jer-widerspruch',
          objection: `Jer 7,31 sagt, Gott habe Kinderopfer nie geboten. Aber Gen 22 sagt genau das: Gott gebietet es. Die Bibel widerspricht sich.`,
          objectionBy: 'Hector Avalos',
          answer: `Jeremia spricht von Kinderopfern als Kultpraxis – Eltern, die im Tal Hinnom regelmäßig ihre Kinder verbrannten. Gen 22 ist dagegen ausdrücklich eine Prüfung (22,1), die nie vollzogen werden sollte und von Gott selbst abgebrochen wird. Ein Befehl, dessen Ausführung Gott verhindert, ist das Gegenteil eines Kults, der Kinderopfer verlangt. Gen 22 ist gerade die Erzählung, die solche Opfer für Israel ausschließt.`,
          followUps: [
            {
              id: 'psychoterror-isaak',
              objection: `Ein „Test", bei dem ein Vater seinen Sohn fesselt und das Messer hebt, ist Psychoterror. Was ist mit dem Trauma für Isaak?`,
              objectionBy: 'Christopher Hitchens',
              answer: `Isaak war kein Kleinkind: Er trägt das Holz für ein Brandopfer einen Berg hinauf. Josephus nennt ihn 25 Jahre alt, und die jüdische Tradition betont, dass er sich freiwillig binden ließ – ein alter Vater hätte einen jungen Mann nicht gegen dessen Willen fesseln können. Der Text wiederholt zweimal: „Und gingen die beiden miteinander." Es ist eine Geschichte über das Vertrauen von Vater und Sohn, nicht über Gewalt gegen ein wehrloses Kind.`,
              followUps: [
                {
                  id: 'typologie-nachtraeglich',
                  objection: `Die Deutung auf Christus ist eine nachträgliche christliche Umdeutung, um eine peinliche Geschichte zu retten.`,
                  objectionBy: 'Bart Ehrman',
                  answer: `Die Verbindung steht schon im Neuen Testament selbst: Paulus schreibt in Röm 8,32, Gott habe „seines eigenen Sohnes nicht verschont" – mit genau dem Verb, das die Septuaginta in Gen 22,16 verwendet. Auch das Judentum sieht in der Bindung Isaaks ein Grunddatum seiner Geschichte und erinnert an sie in der Liturgie zum Neujahrsfest. Die christliche Lesart ist also keine Notlösung, sondern ein bewusstes Echo, das die Texte selbst anlegen.`,
                  followUps: [
                    {
                      id: 'akeda-juedisch-vorchristlich',
                      objection: `Paulus und der Hebräerbrief sind christliche Quellen. Natürlich lesen sie Christus hinein. Das beweist nichts über den Text.`,
                      objectionBy: 'Bart Ehrman',
                      answer: `Dann schau in jüdische Quellen derselben Zeit: Das 4. Makkabäerbuch (1. Jh.) erinnert daran, dass Isaak sich „um der Frömmigkeit willen opfern ließ" (4 Makk 13,12), und die aramäischen Targume schildern, wie Isaak selbst darum bittet, gut gebunden zu werden, damit das Opfer gültig sei. Das Judentum hat die *Akeda* – die „Bindung Isaaks" – also schon unabhängig vom Christentum als Bild freiwilliger Hingabe und als Grund für Gottes Erbarmen gelesen. Die christliche Deutung greift diese Linie auf und sieht sie in Christus erfüllt.`,
                      detail: `Bis heute wird im jüdischen Neujahrsgottesdienst (Rosch ha-Schana) Gen 22 gelesen und Gott gebeten, der Bindung Isaaks zu gedenken. Die Verbindung von Gen 22 mit Opfer, Stellvertretung und Erbarmen ist also keine christliche Erfindung, sondern gemeinsames Erbe. Das Neue Testament fügt die entscheidende Pointe hinzu: Was Abraham nicht tun musste, hat Gott selbst getan – „der auch seines eigenen Sohnes nicht hat verschont" (Röm 8,32).`,
                      sources: [
                        { kind: 'bibel', work: '4. Makkabäer', ref: '13,12', quote: `Denkt daran, woher ihr stammt und durch welche Vaterhand Isaak sich um der Frömmigkeit willen opfern ließ.`, status: 'paraphrase', note: '4 Makk gehört in einigen orthodoxen Bibeln zum Anhang; jüdische Schrift des 1. Jh.' },
                        { kind: 'juedisch', work: 'Targum Neofiti / Pseudo-Jonathan zu Genesis 22', ref: '22,10', quote: `Isaak bittet seinen Vater, ihn gut zu binden, damit er sich nicht wehre und das Opfer untauglich werde.`, status: 'paraphrase' },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: 'mescha-zorn-2-koen-3',
              objection: `In 2 Kön 3,27 opfert der König von Moab seinen Sohn auf der Mauer – und sofort kommt „großer Zorn über Israel", die Israeliten ziehen ab. Der Text setzt voraus, dass das Kinderopfer gewirkt hat. So viel zur Abscheu der Bibel vor Kinderopfern.`,
              objectionBy: 'Hector Avalos',
              answer: `Der Text sagt nicht, wessen Zorn es war, und die Ausleger sind sich uneins: Es kann der Zorn der entsetzten Moabiter sein, die nun verzweifelt kämpften, oder das Entsetzen in Israel selbst über das, was es mit angesehen hatte. Nirgends behauptet die Bibel, der moabitische Gott Kemosch habe Macht gehabt – an vielen anderen Stellen spottet sie über ihn (1 Kön 11,7: „der Gräuel der Moabiter"). Eine dunkle, knappe Notiz kann die klaren Verbote der Tora nicht aufheben.`,
              detail: `Für die Debatte: Gib zu, dass der Vers schwierig ist und verschieden gedeutet wird. Aber eine Erzählung, die berichtet, was geschah, ist keine Billigung. Die Bibel erzählt auch Davids Ehebruch und Mord, ohne ihn gutzuheißen. Die normativen Texte sind eindeutig: Kinderopfer ist ein „Gräuel, den der HERR hasst" (Dtn 12,31).`,
              sources: [
                { kind: 'bibel', work: '2. Könige', ref: '3,26–27', status: 'paraphrase' },
                { kind: 'bibel', work: '5. Mose (Deuteronomium)', ref: '12,31', quote: `Denn sie haben ihren Göttern getan alles, was dem HERRN ein Gräuel ist und was er hasst; denn sie haben ihren Göttern auch ihre Söhne und Töchter mit Feuer verbrannt.`, status: 'paraphrase' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'kant-stimme',
      objection: `Kant hatte recht: Wenn eine Stimme dir befiehlt, dein Kind zu töten, ist es sicherer, dass sie nicht von Gott kommt, als dass du gehorchen musst. Jeder, der heute so handelt, gehört in die Psychiatrie.`,
      objectionBy: 'Immanuel Kant / Sam Harris',
      answer: `Für heute stimme ich zu: Wer eine Stimme hört, die ihm befiehlt, sein Kind zu töten, soll ihr nicht gehorchen – nicht weil ich über Gott stünde, sondern weil Gott sich in Christus endgültig offenbart hat und gesagt hat, dass er Kinderopfer nicht will. Abrahams Lage war einmalig: eine jahrzehntelange Beziehung mit Gott, eine Verheißung, die an Isaak hing, und das Vertrauen, dass Gott sie auch über den Tod hinaus erfüllt. Gen 22 ist kein Rezept, sondern Heilsgeschichte.`,
      sources: [
        { kind: 'gegner', author: 'Immanuel Kant', work: 'Der Streit der Fakultäten', year: '1798', quote: `Abraham hätte der vermeintlich göttlichen Stimme antworten müssen: Dass ich meinen guten Sohn nicht töten soll, ist ganz gewiss; dass du, der du mir erscheinst, Gott bist, davon bin ich nicht gewiss.`, status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'du-stehst-ueber-gott',
          objection: `Dann gibst du zu: Wenn Gott es heute befähle, würdest du nicht gehorchen. Also stellst du deine Moral über deinen Gott.`,
          objectionBy: 'Sam Harris',
          answer: `Nein. Ich weiß aus Gottes eigener Offenbarung in Christus, dass er so etwas nicht befiehlt – das ist Treue zu Gott, nicht Rebellion gegen ihn. Die Schrift selbst lehrt, Geister zu prüfen (1 Joh 4,1) und jede Botschaft zu verwerfen, die dem Evangelium widerspricht, selbst wenn ein Engel sie brächte (Gal 1,8). Meine Moral steht nicht über Gott; sie stammt aus dem, was er über sich selbst gesagt hat.`,
          followUps: [
            {
              id: 'kierkegaard-gefaehrlich',
              objection: `Euer eigener Kierkegaard sprach von einer „teleologischen Suspension des Ethischen" – Glaube über Moral. Genau das ist die Logik jedes religiösen Terroristen.`,
              objectionBy: 'Christopher Hitchens',
              answer: `Kierkegaard wollte das Paradox des Glaubens zeigen, nicht Gewalt erlauben; sein Erzähler sagt immer wieder, er könne Abraham nicht verstehen und schon gar nicht nachahmen. Und die orthodoxe Kirche liest Gen 22 anders als Kierkegaard: Glaube und Güte Gottes stehen nicht gegeneinander. Abraham vertraute darauf, dass Gott gut ist und stärker als der Tod – deshalb glaubte er, Isaak zurückzubekommen (Hebr 11,19). Ein Terrorist dagegen glaubt an einen Gott, der den Tod anderer will.`,
            },
          ],
        },
      ],
    },
    {
      id: 'blinder-gehorsam',
      objection: `Was lernt man aus dieser Geschichte? Dass Gott blinden Gehorsam will, auch wenn er Unmoralisches verlangt. Das ist die Moral eines Sekten-Gurus.`,
      objectionBy: 'Christopher Hitchens',
      answer: `Der biblische Glaube ist kein blinder Gehorsam: Derselbe Abraham hat mit Gott um Sodom gefeilscht (Gen 18), Mose hat für Israel Fürbitte eingelegt, Hiob hat Gott herausgefordert, die Psalmen klagen Gott an. Gen 22 zeigt kein Muster, sondern eine einmalige Prüfung innerhalb einer langen Vertrauensgeschichte – und ihr Ergebnis ist, dass Gott selbst sorgt: „Der HERR sieht" (22,14).`,
      followUps: [
        {
          id: 'schweigen-fuer-den-sohn',
          objection: `Gerade das macht es schlimmer: Für die Fremden in Sodom hat Abraham mit Gott gefeilscht – für seinen eigenen Sohn sagt er kein Wort. Er geht einfach los. Das ist kein Vertrauen, das ist moralische Kapitulation.`,
          objectionBy: 'Richard Dawkins',
          answer: `Sein Schweigen ist nicht leer – es ist mit Vertrauen gefüllt, und der Text zeigt das zweimal. Zu den Knechten sagt er: „Wir wollen wieder zu euch kommen" (Gen 22,5), und zu Isaak: „Gott wird sich ersehen ein Schaf zum Brandopfer" (22,8). Der Hebräerbrief deutet es so: Abraham „dachte, Gott kann auch wohl von den Toten erwecken" (Hebr 11,19). Er stand vor einem Widerspruch zwischen Gottes Befehl und Gottes Verheißung, dass durch Isaak die Nachkommenschaft kommen werde (Gen 21,12) – und er vertraute, dass Gott seine Verheißung nicht bricht.`,
          detail: `Der Unterschied zu Sodom: Dort ging es um ein angekündigtes Gericht über Schuldige, bei dem Abraham für mögliche Gerechte eintrat. Hier steht Gottes eigenes Wort gegen Gottes eigenes Wort. Abraham löst die Spannung nicht durch Ungehorsam und nicht durch Zynismus, sondern durch die Hoffnung auf Auferstehung. Gerade deshalb nennen die Väter ihn den „Vater der Glaubenden": Er glaubte an den Gott, „der die Toten lebendig macht" (Röm 4,17).`,
          sources: [
            { kind: 'bibel', work: 'Hebräer', ref: '11,17–19', quote: `Durch den Glauben opferte Abraham den Isaak, da er versucht ward … und dachte, Gott kann auch wohl von den Toten erwecken.`, translation: 'Luther 1912', status: 'paraphrase' },
            { kind: 'bibel', work: 'Genesis', ref: '22,8', quote: `Abraham antwortete: Mein Sohn, Gott wird sich ersehen ein Schaf zum Brandopfer.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
          followUps: [
            {
              id: 'auferstehungsglaube-gefaehrlich',
              objection: `Das ist ja noch beunruhigender: Eltern, die ihre Kinder töteten, weil Gott sie „schon wieder auferwecken" werde, gibt es wirklich – in den Nachrichten. Dein Abraham ist ihr Vorbild.`,
              objectionBy: 'Sam Harris',
              answer: `Solche Tragödien sind real, und wer so etwas hört, braucht sofort Schutz für das Kind und medizinische Hilfe – das sage ich ohne Einschränkung. Aber Abraham ist kein Vorbild für ein solches Handeln: Seine Situation war einmalig, Gott selbst hat das Opfer verhindert, und seitdem steht unmissverständlich fest, dass Gott Menschenopfer verabscheut (Dtn 12,31; Jer 7,31). In Christus hat Gott das einzige Opfer, das je nötig war, selbst gebracht. Nach christlicher Lehre ist jede „Stimme", die ein Kind zu töten befiehlt, darum mit Sicherheit nicht Gottes Stimme.`,
              detail: `Seelsorgerlich ist das wichtig: Die Kirche lehrt, „die Geister zu prüfen" (1 Joh 4,1), und gibt mit der geistlichen Vaterschaft und der Gemeinde eine Prüfinstanz. In der koptischen Tradition wird niemand mit solchen inneren Eingebungen allein gelassen; der Beichtvater würde jemanden mit solchen Gedanken sofort zu ärztlicher Hilfe begleiten. Die Gefahr liegt nicht in der Geschichte Abrahams, sondern in einer Religiosität ohne Schrift, ohne Kirche und ohne Christus als Maßstab.`,
            },
          ],
        },
      ],
    },
    {
      id: 'aeltere-fassung',
      objection: `Manche Forscher meinen, in einer älteren Fassung habe Abraham Isaak tatsächlich geopfert – in Gen 22,19 kehrt nur Abraham zurück, Isaak wird nicht erwähnt.`,
      objectionBy: 'Hector Avalos',
      answer: `Das ist eine Spekulation ohne Textgrundlage: Es gibt keine Handschrift und keine Tradition mit einer solchen Fassung. Dass Isaak in 22,19 nicht genannt wird, ist erzählerische Verkürzung; er erscheint in Gen 24 und 25 lebendig und heiratet Rebekka. Und selbst wenn man über Vorstufen spekuliert: Der überlieferte Text, den Juden und Christen lesen, sagt das Gegenteil eines Kinderopfers.`,
      followUps: [
        {
          id: 'erstgeburt-ex-22',
          objection: `Ex 22,28 sagt ohne Einschränkung: „Deinen ersten Sohn sollst du mir geben." Forscher wie Jon Levenson zeigen, dass Kinderopfer dem frühen Israel nicht fremd waren. Gen 22 ist die Spur eines älteren, blutigeren Gottes.`,
          objectionBy: 'Hector Avalos',
          answer: `Levenson ist ein ausgezeichneter Gewährsmann – aber er zeigt gerade, wie die Bibel diese Welt **verwandelt**: Das Erstgeburtsrecht Gottes wird durch Auslösung erfüllt. „Alle Erstgeburt deiner Söhne sollst du lösen" (Ex 13,13; 34,20), stellvertretend durch ein Tier oder durch den Dienst der Leviten (Num 3,12). Gen 22 erzählt genau diesen Übergang: Der Sohn gehört Gott – und Gott selbst stellt den Ersatz. Die Linie läuft vom Moloch-Kult über den Widder bis zum Lamm Gottes.`,
          detail: `Jon D. Levenson (Harvard, selbst jüdisch) argumentiert in *The Death and Resurrection of the Beloved Son* (1993), dass das Motiv der Hingabe des geliebten Sohnes tief in Israels Überlieferung liegt und im Judentum wie im Christentum in Riten der Auslösung und in Erzählungen von Opfer und Rettung verwandelt wurde. Man kann also offen zugeben, dass die Umwelt Israels Kinderopfer kannte. Die Frage ist, wohin der biblische Text führt – und er führt weg vom Kinderopfer, hin zur Stellvertretung, die Gott selbst übernimmt.`,
          sources: [
            { kind: 'bibel', work: '2. Mose (Exodus)', ref: '13,13', quote: `Alle Erstgeburt unter deinen Kindern sollst du lösen.`, translation: 'Luther 1912', status: 'paraphrase' },
            { kind: 'fachliteratur', author: 'Jon D. Levenson', work: 'The Death and Resurrection of the Beloved Son: The Transformation of Child Sacrifice in Judaism and Christianity', year: '1993', status: 'paraphrase', note: 'Schon der Untertitel benennt die These: Verwandlung, nicht Fortsetzung des Kinderopfers.' },
          ],
          followUps: [
            {
              id: 'jiftach-tochter',
              objection: `Und Jiftach in Richter 11? Er opfert seine Tochter für ein Gelübde, und der Text verurteilt ihn mit keinem Wort. Im Hebräerbrief steht er sogar in der Liste der Glaubenshelden.`,
              objectionBy: 'Hector Avalos',
              answer: `Das Richterbuch ist eine Erzählung vom moralischen Niedergang, deren Refrain lautet: „Ein jeglicher tat, was ihn recht deuchte" (Ri 21,25). Es erzählt viel, was es nicht billigt. Das Gesetz hatte Kinderopfer ausdrücklich als Gräuel verboten (Lev 18,21; Dtn 12,31) – Jiftach handelt gegen Gottes Gebot, nicht auf Gottes Befehl, und anders als bei Abraham greift Gott hier ein, indem er es **nicht** verlangt. Dass Jiftach in Hebr 11 steht, ehrt seinen Glauben im Kampf, nicht sein Gelübde – in derselben Liste stehen auch Samson und David, deren Sünden die Schrift ungeschönt erzählt.`,
              detail: `Die Erzählung endet mit der Klage: Die Töchter Israels beweinen jedes Jahr die Tochter Jiftachs (Ri 11,40) – der Text stellt sie als Opfer, nicht als Vorbild dar. Johannes Chrysostomus deutet die Geschichte als Warnung vor unbedachten Gelübden: Gott habe das Geschehen zugelassen, damit spätere Generationen nie wieder so etwas geloben.`,
              sources: [
                { kind: 'bibel', work: 'Richter', ref: '21,25', quote: `Zu der Zeit war kein König in Israel; ein jeglicher tat, was ihn recht deuchte.`, translation: 'Luther 1912', status: 'verbatim' },
                { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien über die Bildsäulen (De statuis)', ref: 'Homilie 14', year: '387', quote: `Gott ließ das Opfer der Tochter Jiftachs zu, damit niemand nach ihm mehr solche Gelübde ablege.`, status: 'paraphrase', note: 'Geprüft (WebSearch 11/2026): Homilie XIV über die Bildsäulen (über Eide); Chrysostomus kontrastiert dort Jiftach mit Isaak, bei dem Gott das Opfer ausdrücklich verhinderte – ein Zeichen, dass er an solchen Opfern keinen Gefallen hat. Wortlaut nach BKV/NPNF prüfen.' },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn die Geschichte Kinderopfer gutheißen wollte, warum verhindert Gott dann das Opfer?`,
    `Wie verstehst du Abrahams Satz „wir wollen wieder zu euch kommen" (Gen 22,5)?`,
    `Kennst du einen anderen antiken Text, der einen Gott zeigt, der Kinderopfer ausdrücklich abbricht und ablehnt?`,
    `Was wäre für dich der Unterschied zwischen einem Gott, der Opfer verlangt, und einem Gott, der selbst das Opfer bringt?`,
  ],
  avoid: [
    `„Gott darf alles verlangen, und Abraham hat richtig gehandelt, weil Gehorsam alles ist." Das bestätigt genau das Zerrbild des Gegners.`,
    `„Isaak war ein Erwachsener, also ist alles in Ordnung." Das Alter ist ein Detail, nicht die Hauptantwort.`,
    `Die Geschichte als Beispiel für heutige „Prüfungen" verwenden, bei denen Menschen meinen, Gott verlange etwas Unmoralisches.`,
  ],
  concessions: [
    `Die Geschichte ist verstörend, und das soll sie auch sein – Juden und Christen ringen seit Jahrtausenden mit ihr.`,
    `Kants Warnung ist berechtigt: Niemand darf heute eine „innere Stimme" zum Töten als göttlich ansehen.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Søren Kierkegaard', work: 'Furcht und Zittern', year: '1843', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Timothy Keller', work: 'Counterfeit Gods', year: '2009', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Origenes', work: 'Homilien zur Genesis', ref: 'Hom. 8', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Jon D. Levenson', work: 'The Death and Resurrection of the Beloved Son', year: '1993', status: 'paraphrase', note: 'Jüdischer Bibelwissenschaftler zur Bindung Isaaks und zur Typologie des „geliebten Sohnes".' },
  ],
  difficulty: 2,
  tags: ['Abraham', 'Isaak', 'Akedah', 'Kinderopfer', 'Kierkegaard', 'Typologie'],
  related: [
    'at-ethik/at-gott-monster',
    'at-ethik/kanaaniter-voelkermord',
    'moral-und-gott/euthyphron-dilemma',
  ],
};

export default claim;
