import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'jesus-inszenierte-erfuellung',
  title: `„Jesus hat die Prophezeiungen absichtlich inszeniert."`,
  proponents: [
    { name: 'Hugh J. Schonfield', role: 'Jüdischer Bibelgelehrter (†1988)', work: 'The Passover Plot (1965)' },
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, UNC Chapel Hill', work: 'Jesus, Interrupted (2009)' },
    { name: 'Richard Carrier', role: 'Althistoriker, Mythizist', work: 'On the Historicity of Jesus (2014)' },
  ],
  steelman: `Jesus kannte die Schriften gut. Er wusste, was man vom Messias erwartete, und richtete sein Handeln danach aus: Er ritt bewusst auf einem Esel in Jerusalem ein (Sach 9,9), reinigte demonstrativ den Tempel, wählte zwölf Jünger als Symbol der zwölf Stämme und provozierte die Obrigkeit so lange, bis sie ihn verhaftete. Hugh Schonfield ging noch weiter: Jesus habe sogar seine Kreuzigung und sein Überleben mit Verbündeten geplant. Was Jesus nicht selbst steuern konnte, haben die Evangelisten ergänzt – etwa das Losen um die Kleider oder die Geburt in Bethlehem. „Erfüllte Prophetie" ist also entweder Inszenierung oder Erfindung, aber kein Beweis für göttliches Wirken.`,
  biblical: {
    summary: `Die Evangelien verschweigen nicht, dass Jesus manche Prophetien bewusst aufgriff: Er schickte Jünger, um den Esel zu holen (Mk 11,1–7), und deutete sein Handeln mit der Schrift. Das ist prophetische **Zeichenhandlung**, wie sie Jeremia (Jer 19) und Ezechiel (Ez 4) vollzogen – eine öffentliche Ankündigung, kein Betrug. Viele andere Elemente aber lagen völlig außerhalb seiner Kontrolle: Abstammung, Geburtsort, Zeitpunkt, die Hinrichtungsart der Römer, das Handeln der Soldaten, der Preis des Verrats, das Begräbnis – und vor allem die Auferstehung.`,
    detail: `**Nicht steuerbar waren u. a.:**
- **Abstammung** aus dem Haus David (2 Sam 7,12–16; Röm 1,3)
- **Geburtsort** Bethlehem (Mi 5,1)
- **Zeitfenster** vor der Zerstörung des Tempels (Dan 9,26; Hag 2,9; Mal 3,1)
- **Hinrichtungsart:** Kreuzigung durch die Römer, nicht Steinigung durch die jüdische Obrigkeit (vgl. Ps 22,17; Sach 12,10; Joh 18,31–32)
- **Losen um die Kleider** durch die Soldaten (Ps 22,19; Mk 15,24; Joh 19,23–24)
- **Kein Bein gebrochen** (Ex 12,46; Ps 34,21; Joh 19,33–36)
- **Begräbnis** im Grab eines reichen Ratsherrn (Jes 53,9; Mt 27,57–60)
- **Dreißig Silberlinge** als Preis, festgesetzt von den Hohepriestern (Sach 11,12–13; Mt 26,15)`,
    sources: [
      { kind: 'bibel', work: 'Psalm', ref: '22,19', quote: `Sie teilen meine Kleider unter sich und werfen das Los um mein Gewand.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalm', ref: '22,17', quote: `Denn Hunde haben mich umgeben, und der Bösen Rotte hat mich umringt; sie haben meine Hände und Füße durchgraben.`, translation: 'Luther 1912', status: 'verbatim', note: 'Textkritisch umstritten, siehe Dialog.' },
      { kind: 'bibel', work: 'Markus', ref: '11,1–7', quote: `Jesus sendet zwei Jünger, um ein Füllen zu holen, auf dem noch kein Mensch gesessen hat, und reitet darauf nach Jerusalem.`, status: 'paraphrase', note: 'Markus erzählt das ohne Erfüllungszitat – das Ereignis steht vor der Deutung.' },
      { kind: 'bibel', work: 'Johannes', ref: '18,31–32', quote: `Die Juden sagten zu Pilatus: Wir dürfen niemand töten – damit das Wort Jesu erfüllt würde, mit dem er andeutete, welchen Todes er sterben werde.`, status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die Kirche bekennt, dass Christus freiwillig in sein Leiden ging: „Niemand nimmt es von mir, sondern ich selbst lasse es" (Joh 10,18). Diese Freiwilligkeit ist kein Theater, sondern Hingabe aus Liebe. Die Väter betonen zugleich, dass Gott die Geschichte lenkte – auch durch Menschen, die nicht wussten, dass sie die Schrift erfüllten (Pilatus, die Soldaten, die Hohepriester). Die koptische Liturgie der Karwoche stellt die Prophetien des AT stundenweise neben die Passionsberichte, um diese göttliche Führung der Geschichte sichtbar zu machen.`,
    sources: [
      { kind: 'bibel', work: 'Johannes', ref: '10,18', quote: `Niemand nimmt es von mir, sondern ich lasse es von mir selber.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Erste Apologie', ref: '35', year: 'ca. 155', quote: `Die Durchbohrung der Hände und Füße und das Losen um die Kleider seien vorausgesagt und unter Pontius Pilatus geschehen; man könne es in den Akten nachprüfen.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Schonfields „Passover Plot" wird von keinem Fachhistoriker ernsthaft vertreten. In der Forschung ist dagegen weithin anerkannt, dass Jesus bewusst symbolische Handlungen vollzog (Einzug, Tempelaktion, Abendmahl) – das betonen auch christliche Forscher wie N. T. Wright. Kritische Exegeten vermuten zudem, dass manche Details der Passionsberichte aus der Lektüre der Psalmen gestaltet wurden („prophecy historicized"). Unbestritten ist die Kreuzigung unter Pontius Pilatus – sie gilt als eine der sichersten Tatsachen der Antike.`,
    sources: [
      { kind: 'gegner', author: 'Hugh J. Schonfield', work: 'The Passover Plot', year: '1965', quote: `Jesus habe seine Kreuzigung und sein Überleben bewusst geplant, um die messianischen Weissagungen zu erfüllen.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'John Dominic Crossan', work: 'Jesus: A Revolutionary Biography', year: '1994', quote: `Dass er gekreuzigt wurde, ist so sicher, wie irgendetwas Historisches nur sein kann.`, original: `That he was crucified is as sure as anything historical can ever be.`, translation: 'eigene Übersetzung', status: 'verbatim', note: 'Crossan ist ein sehr kritischer Jesusforscher (Jesus Seminar).' },
    ],
  },
  quickAnswer: `Manches hat Jesus tatsächlich bewusst getan – den Einzug auf dem Esel zum Beispiel. Das war eine öffentliche Ankündigung wie bei den Propheten, kein Trick. Aber vieles konnte er unmöglich steuern: in welcher Familie und in welchem Ort er geboren wurde, dass ihn die Römer kreuzigten statt die Juden ihn steinigten, dass Soldaten um seine Kleider losten, dass ihm kein Bein gebrochen wurde, dass ein reicher Ratsherr ihn begrub. Und vor allem: Die Auferstehung kann niemand inszenieren.`,
  keyPoints: [
    `**Zugeständnis:** Jesus vollzog bewusst prophetische Zeichenhandlungen (Einzug, Tempel, Abendmahl) – das ist Ankündigung, nicht Betrug.`,
    `**Nicht steuerbar:** Abstammung, Geburtsort, Zeitfenster vor 70 n. Chr., römische Hinrichtungsart, Handeln der Soldaten, Begräbnis, Verratspreis.`,
    `**Zwei Hypothesen widersprechen sich:** Entweder hat Jesus inszeniert (dann geschah es) oder die Evangelisten haben erfunden (dann hat Jesus nichts inszeniert). Der Kritiker muss sich entscheiden.`,
    `**Ein gekreuzigter Messias war unerwünscht:** Niemand, der Messias sein wollte, hätte freiwillig den verfluchten Kreuzestod (Dtn 21,23) gewählt – er war ein „Ärgernis" (1 Kor 1,23).`,
    `**Die Auferstehung** ist nicht inszenierbar; Schonfields Überlebenstheorie vertritt kein Historiker.`,
  ],
  voices: [
    {
      person: 'nt-wright',
      role: 'als Historiker des Judentums zur Zeit Jesu',
      text: `Wright betont, dass Jesus seine Sendung bewusst in Zeichenhandlungen ausdrückte: Der Einzug in Jerusalem nach Sach 9,9 und die Aktion im Tempel waren gezielte Ankündigungen, dass Israels Gott als König nach Zion zurückkehrt – und dass das Gericht über den Tempel bevorsteht. Das sei historisch hochplausibel und kein Problem für den Glauben: Ein Messias, der seine Berufung kannte, musste so handeln. Entscheidend ist für Wright, dass Jesus die Messiasrolle radikal neu definierte – durch Leiden statt Krieg. Dass dieser Weg ans Kreuz und durch das Grab hindurch zur Auferstehung führte, konnte kein Mensch arrangieren.`,
      sources: [
        { kind: 'fachliteratur', author: 'N. T. Wright', work: 'Jesus and the Victory of God', year: '1996', quote: `Jesu Einzug und Tempelaktion als bewusste messianische Zeichenhandlungen; Neudeutung des Messiasamtes durch das Leiden.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'justin',
      role: 'als früher Apologet',
      text: `Justin argumentiert gegenüber dem Kaiser, dass die entscheidenden Ereignisse öffentlich und überprüfbar waren: die Kreuzigung unter Pontius Pilatus, das Durchbohren von Händen und Füßen, das Losen um die Kleider. Diese Dinge wurden von Römern getan, die die jüdischen Schriften nicht kannten. Für Justin liegt gerade darin die Kraft des Prophetiebeweises: Die Ausführenden handelten ohne jede Absicht, eine Prophetie zu erfüllen.`,
      sources: [
        { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Erste Apologie', ref: '35; 38', year: 'ca. 155', quote: `Kreuzigung, Durchbohrung und Losen um die Kleider wurden von Menschen vollzogen, die von der Prophetie nichts wussten.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'michael-brown',
      role: 'als Semitist',
      text: `Brown verweist zur Debatte um Ps 22,17 darauf, dass die vorchristliche griechische Übersetzung (Septuaginta) „sie haben durchgraben" liest und dass eine Psalmenhandschrift aus Nahal Hever eine verbale Form bezeugt. Die christliche Lesart ist also keine Erfindung, sondern hat jüdische Textzeugen vor und neben dem Neuen Testament. Wichtiger noch: Psalm 22 als Ganzes – der Ruf der Gottverlassenheit, der Spott, der Durst, das Losen um die Kleider, die Wende zum Lob – bildet die Passion als Ganzes ab.`,
      sources: [
        { kind: 'fachliteratur', author: 'Michael L. Brown', work: 'Answering Jewish Objections to Jesus, Bd. 3', year: '2003', quote: `Zur Lesart von Ps 22,17 und zur Passion im Licht von Psalm 22.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'passover-plot',
      objection: `Jesus kannte die Schrift und hat sein Leben danach gestaltet – Esel, Tempel, sogar die Verhaftung. Schonfield zeigt: Er plante selbst die Kreuzigung und wollte sie mit Hilfe eines Betäubungstranks überleben.`,
      objectionBy: 'Hugh J. Schonfield',
      answer: `Einiges hat Jesus bewusst getan – den Einzug auf dem Esel etwa. Das war eine öffentliche Zeichenhandlung, wie Propheten sie vollzogen. Aber Schonfields Plan setzt voraus, dass Jesus römische Soldaten, Pilatus, die Hohepriester und den Zeitpunkt des Passafestes kontrollierte. Und kein Historiker vertritt heute, dass Jesus die Kreuzigung überlebte.`,
      followUps: [
        {
          id: 'ueberleben-mit-trank',
          objection: `Der Essigschwamm enthielt ein Betäubungsmittel; Jesus wurde scheintot abgenommen und erschien danach als „Auferstandener".`,
          objectionBy: 'Hugh J. Schonfield',
          answer: `Römische Henker waren Fachleute des Tötens, und Johannes berichtet den Lanzenstich in die Seite (Joh 19,34). Selbst der radikale Kritiker David Friedrich Strauß sah das Hauptproblem: Ein halbtoter, gepflegter Mann hätte die Jünger nie überzeugt, dass er der Sieger über den Tod ist – er hätte eher Mitleid geweckt als Anbetung.`,
          sources: [
            { kind: 'gegner', author: 'David Friedrich Strauß', work: 'Das Leben Jesu für das deutsche Volk bearbeitet', year: '1864', quote: `Ein halbtot aus dem Grab Hervorgekrochener, der ärztliche Pflege braucht, hätte auf die Jünger nicht den Eindruck des Siegers über Tod und Grab machen können.`, status: 'paraphrase', note: 'Strauß lehnte die Auferstehung ab – sein Argument gegen die Scheintodthese wiegt deshalb schwer.' },
          ],
          followUps: [
            {
              id: 'helfer-im-hintergrund',
              objection: `Mit Verbündeten wie Josef von Arimathäa und Lazarus ließ sich viel arrangieren – das Grab, die Abnahme, die Pflege.`,
              objectionBy: 'Hugh J. Schonfield',
              answer: `Verbündete können keine römischen Soldaten steuern, keine Lanze umlenken und nicht festlegen, dass die Hohepriester genau dreißig Silberlinge zahlen. Und eine Verschwörung macht das Verhalten der Jünger unerklärlich: Sie hätten gewusst, dass alles Betrug war – und sind trotzdem für die Verkündigung der Auferstehung in Verfolgung und Tod gegangen.`,
              questionsBack: [`Wer stirbt für eine Auferstehung, von der er weiß, dass sie inszeniert war?`],
            },
          ],
        },
      ],
    },
    {
      id: 'evangelisten-erfanden',
      objection: `Jesus musste gar nichts inszenieren – die Evangelisten haben es erfunden. Matthäus verstand den hebräischen Parallelismus in Sach 9,9 nicht und lässt Jesus auf zwei Tieren zugleich reiten (Mt 21,7)!`,
      objectionBy: 'Bart Ehrman',
      answer: `Zuerst: Inszenierung und Erfindung sind zwei verschiedene Hypothesen, die sich gegenseitig ausschließen – man muss sich entscheiden. Zu Matthäus: Er erwähnt eine Eselin mit ihrem Füllen, das mitläuft; „er setzte sich darauf" bezieht sich naheliegend auf die Kleider. Ein jüdischer Schriftgelehrter wie Matthäus kannte den Parallelismus. Und Markus, das älteste Evangelium, erzählt den Einzug ganz ohne Erfüllungszitat – das Ereignis stand vor seiner Deutung.`,
      followUps: [
        {
          id: 'losen-erfunden',
          objection: `Johannes hat das Losen um den Rock erfunden, damit es zu Ps 22,19 passt.`,
          objectionBy: 'Bart Ehrman',
          answer: `Dass die Henker die Kleider der Hingerichteten unter sich aufteilten, war römische Praxis; das römische Recht regelte später ausdrücklich, was mit diesen Kleidern geschehen durfte. Alle vier Evangelien berichten die Aufteilung, Markus sogar ohne ausdrückliches Psalmzitat (Mk 15,24). Ein historisch plausibler Vorgang, der erst nachträglich als Erfüllung erkannt wurde – das ist die einfachere Erklärung.`,
          sources: [
            { kind: 'sonstiges', work: 'Digesten Justinians', ref: '48,20,6', year: '533 (zitiert ältere Rechtsquellen)', quote: `Regelung über die Kleider (pannicularia) der Verurteilten, auf die die Vollstrecker Anspruch erhoben.`, status: 'unverified', note: 'Fundstelle vor Verwendung prüfen; der Sachverhalt der Kleideraufteilung als römische Praxis ist in der Forschung anerkannt.' },
          ],
          followUps: [
            {
              id: 'psalm-22-loewe',
              objection: `Ps 22,17 heißt im Hebräischen „wie ein Löwe meine Hände und Füße" – nicht „durchbohrt". Das ist eine christliche Fehlübersetzung.`,
              objectionBy: 'Tovia Singer',
              answer: `Der masoretische Text liest kaʾarî („wie ein Löwe"), aber die vorchristliche jüdische Septuaginta übersetzt „sie haben durchgraben", und eine Psalmenhandschrift aus Nahal Hever bezeugt eine verbale Form. Es ist also eine echte textkritische Frage mit jüdischen Zeugen auf beiden Seiten, keine christliche Erfindung. Und selbst ohne diesen Vers bildet Psalm 22 die Passion ab: Gottverlassenheit, Spott, Durst, Losen um die Kleider.`,
            },
          ],
        },
      ],
    },
    {
      id: 'andere-messiasse',
      objection: `Es gab viele jüdische Messiasprätendenten, die Prophezeiungen erfüllen wollten – Theudas ließ den Jordan teilen, der „Ägypter" die Mauern Jerusalems einstürzen. Jesus war nur einer von ihnen.`,
      objectionBy: 'Richard Carrier',
      answer: `Genau der Vergleich zeigt den Unterschied: Theudas und der Ägypter suchten politisch-militärische Machtzeichen; nach ihrem Tod zerfielen ihre Bewegungen. Jesus wählte einen Weg, den kein Messiasanwärter gewählt hätte – den Tod am römischen Kreuz, nach Dtn 21,23 ein Fluchtod. Und seine Bewegung zerfiel nach seinem Tod nicht, sondern begann erst richtig – wegen der Auferstehungsbotschaft.`,
      sources: [
        { kind: 'juedisch', author: 'Flavius Josephus', work: 'Jüdische Altertümer', ref: '20,97–98; 20,169–172', year: 'ca. 93 n. Chr.', quote: `Berichte über Theudas, der den Jordan teilen wollte, und über den „Ägypter", der die Mauern Jerusalems zum Einsturz bringen wollte.`, status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'leidender-messias-bekannt',
          objection: `Ein leidender Messias war im Judentum durchaus bekannt. Jesus konnte bewusst diese Rolle wählen.`,
          objectionBy: 'Dan McClellan',
          answer: `Wenn das so selbstverständlich gewesen wäre, hätten die Jünger es erwartet. Stattdessen widerspricht Petrus heftig (Mk 8,32), und die Emmausjünger sagen enttäuscht: „Wir hofften, er sei es, der Israel erlösen sollte" (Lk 24,21). Der Targum deutet die Leiden in Jes 53 von der Messiasgestalt weg. Ein gekreuzigter Messias war für die meisten Juden ein Widerspruch in sich – Paulus nennt ihn ein „Ärgernis".`,
        },
      ],
    },
    {
      id: 'nur-christliche-quellen',
      objection: `Alle „Erfüllungen" kennen wir nur aus den Evangelien, die Gläubige geschrieben haben. Das ist ein Zirkelschluss.`,
      objectionBy: 'Dan McClellan',
      answer: `Die zentralen Punkte sind auch außerhalb belegt: die Kreuzigung unter Pontius Pilatus bei Tacitus und Josephus, die Zerstörung des Tempels im Jahr 70 bei Josephus, die davidische Abstammung der Familie Jesu bei Hegesipp, der berichtet, dass Verwandte Jesu als Davidsnachkommen vor Kaiser Domitian gebracht wurden. Ort, Zeit und Art seines Todes sind öffentliche Tatsachen.`,
      sources: [
        { kind: 'sonstiges', author: 'Tacitus', work: 'Annalen', ref: '15,44', year: 'ca. 116 n. Chr.', quote: `Christus sei unter Tiberius vom Prokurator Pontius Pilatus hingerichtet worden.`, status: 'paraphrase' },
        { kind: 'kirchenvater', author: 'Eusebius von Caesarea', work: 'Kirchengeschichte', ref: 'III,20', year: 'ca. 325', quote: `Nach Hegesipp wurden Enkel des Judas, eines Bruders des Herrn, als Nachkommen Davids vor Domitian gebracht.`, status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'tacitus-wiederholt-christen',
          objection: `Tacitus wiederholt nur, was Christen erzählten.`,
          objectionBy: 'Richard Carrier',
          answer: `Tacitus war den Christen feindlich gesinnt und nennt ihren Glauben einen „verderblichen Aberglauben" – kaum jemand, der christliche Behauptungen ungeprüft übernimmt. Aber selbst wenn man das offenlässt: Die Kreuzigung Jesu unter Pilatus wird auch von sehr kritischen Forschern wie Crossan und Ehrman als gesichert betrachtet. Gerade dieser Tod war kein Element, das man sich als Messias selbst aussucht.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wie hätte Jesus steuern sollen, in welcher Stadt und in welcher Familie er geboren wird?`,
    `Wie konnte er dafür sorgen, dass die Römer ihn kreuzigten und nicht die jüdische Obrigkeit ihn steinigte?`,
    `Vertrittst du nun die Inszenierungs- oder die Erfindungshypothese – beide zugleich gehen nicht?`,
    `Warum sollte jemand, der Messias sein will, freiwillig den Fluchtod am Kreuz wählen?`,
  ],
  avoid: [
    `Leugnen, dass Jesus manche Prophetien bewusst aufgriff – das ist historisch plausibel und theologisch unproblematisch.`,
    `Jedes Detail der Passion als „unmöglich steuerbar" zählen, ohne die starken Fälle von den schwächeren zu unterscheiden.`,
  ],
  concessions: [
    `Jesus hat einige messianische Zeichen bewusst vollzogen (Einzug, Tempelaktion).`,
    `Die Lesart von Ps 22,17 ist textkritisch umstritten.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'N. T. Wright', work: 'Jesus and the Victory of God', year: '1996', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Michael L. Brown', work: 'Answering Jewish Objections to Jesus, Bd. 3', year: '2003', status: 'paraphrase' },
    { kind: 'gegner', author: 'Hugh J. Schonfield', work: 'The Passover Plot', year: '1965', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Prophetie', 'Passion', 'Psalm 22', 'Messias'],
  related: ['prophetie/prophezeiungen-vage', 'auferstehung/scheintod', 'judentum-messias/messias-kriterien-nicht-erfuellt'],
};

export default claim;
