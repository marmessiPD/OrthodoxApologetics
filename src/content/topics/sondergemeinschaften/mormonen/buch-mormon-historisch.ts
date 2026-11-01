import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'buch-mormon-historisch',
  title: `„Das Buch Mormon ist ein historisch wahres Zeugnis."`,
  proponents: [
    { name: 'John L. Sorenson', role: 'Anthropologe, Brigham Young University (1924–2021)', work: 'An Ancient American Setting for the Book of Mormon (1985) – Theorie der begrenzten Geographie in Mesoamerika' },
    { name: 'John W. Welch', role: 'Jurist und HLT-Gelehrter, BYU', work: 'Entdeckung des Chiasmus im Buch Mormon (1967); Reexploring the Book of Mormon (1992)' },
    { name: 'Daniel C. Peterson', role: 'Islamwissenschaftler und HLT-Apologet, BYU', work: 'Interpreter: A Journal of Latter-day Saint Faith and Scholarship' },
    { name: 'Warren P. Aston', role: 'HLT-Forscher', work: 'Lehi and Sariah in Arabia (2015) – Nahom und Bountiful' },
    { name: 'Kirche Jesu Christi der HLT', role: 'Offizielle Lehre', work: 'Gospel Topics Essays „Book of Mormon and DNA Studies" und „Book of Mormon Translation"' },
  ],
  steelman: `Joseph Smith, ein kaum gebildeter Farmerssohn von 23 Jahren, diktierte das über 500 Seiten umfassende Buch Mormon 1829 in weniger als drei Monaten – ohne Notizen, ohne zurückzublättern, wie seine Schreiber bezeugen. Das Buch enthält komplexe Chiasmen (etwa Alma 36), die man damals in Amerika kaum kannte, sowie hebräisch klingende Satzstrukturen. 1 Nephi 16,34 nennt einen Ort „Nahom" auf der arabischen Halbinsel – und im Jemen wurden Altäre mit dem Stammesnamen NHM aus der Zeit um 600 v. Chr. gefunden. Elf Zeugen haben die goldenen Platten gesehen; keiner von ihnen hat sein Zeugnis je widerrufen, auch nicht diejenigen, die sich später mit Joseph Smith überwarfen. Die vermeintlichen Anachronismen lassen sich erklären: Nach der Theorie der begrenzten Geographie lebten die Nephiten als kleine Gruppe in Mesoamerika unter vielen anderen Völkern; „Pferd" kann ein Lehnwort für ein einheimisches Tier sein; eine domestizierte Gerste (*Hordeum pusillum*) ist in Nordamerika archäologisch belegt. DNA-Befunde widerlegen nichts, weil eine kleine eingewanderte Gruppe genetisch in einer großen Bevölkerung verschwinden kann. Abwesenheit von Belegen ist kein Beleg für Abwesenheit.`,
  biblical: {
    summary: `Der biblische Glaube ist an **öffentlich überprüfbare Geschichte** gebunden: Lukas recherchiert bei Augenzeugen (Lk 1,1–4), Paulus verweist auf über 500 noch lebende Zeugen des Auferstandenen (1 Kor 15,6), Petrus betont: „Wir sind nicht klugen Fabeln gefolgt" (2 Petr 1,16). Die Orte der Bibel – Jerusalem, Betlehem, Kafarnaum, die Teiche Betesda und Schiloach – sind archäologisch greifbar; Statthalter wie Pontius Pilatus sind inschriftlich belegt. Der Maßstab, den die Bibel an sich selbst anlegt, gilt auch für ein Buch, das beansprucht, eine weitere Heilige Schrift zu sein (1 Thess 5,21).`,
    detail: `**Biblisches Textmaterial im Buch Mormon:** Das Buch übernimmt lange Abschnitte aus der englischen King-James-Bibel (1611): Jes 2–14 in 2 Nephi 12–24, Jes 48–49 in 1 Nephi 20–21, die Bergpredigt (Mt 5–7) in 3 Nephi 12–14, Mal 3–4 in 3 Nephi 24–25 – jeweils im Wortlaut der KJV, einschließlich deren Eigenheiten. Die Nephiten sollen Jerusalem um 600 v. Chr. verlassen haben; einen Text in einer englischen Übersetzung von 1611 (mit kursiv gesetzten Ergänzungen der Übersetzer) konnten sie nicht besitzen.

**Weitere Anachronismen:** Das Buch verwendet im 6. Jahrhundert v. Chr. den griechischen Titel „Christus" (2 Nephi 10,3) und lässt Jesus zu den Nephiten sagen, er sei „das Alpha und Omega" (3 Nephi 9,18) – griechische Buchstaben für ein Volk, das nach eigener Darstellung Hebräisch und „reformiertes Ägyptisch" schrieb.`,
    sources: [
      { kind: 'bibel', work: 'Lukas', ref: '1,1–4', quote: `Sintemal sich's viele unterwunden haben, Bericht zu geben von den Geschichten, so unter uns ergangen sind, wie uns das gegeben haben, die es von Anfang selbst gesehen und Diener des Worts gewesen sind …`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Petrus', ref: '1,16', quote: `Denn wir sind nicht klugen Fabeln gefolgt, da wir euch kundgetan haben die Kraft und Zukunft unsers HERRN Jesu Christi; sondern wir haben seine Herrlichkeit selber gesehen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Thessalonicher', ref: '5,21', quote: `Prüfet aber alles, und das Gute behaltet.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'gegner', work: 'Buch Mormon', ref: '2 Nephi 12–24; 3 Nephi 12–14', quote: `Weitgehend wörtliche Übernahme von Jes 2–14 und Mt 5–7 im Wortlaut der King-James-Bibel.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Der Stand der nicht-mormonischen Forschung ist eindeutig: Archäologie, Linguistik und Genetik haben keine Spuren der im Buch Mormon beschriebenen Völker gefunden. Die Vorfahren der amerikanischen Ureinwohner kamen nach genetischen Befunden überwiegend aus Nordostasien; die HLT-Kirche räumt in ihrem Essay „Book of Mormon and DNA Studies" (2014) ein, dass die Ureinwohner Amerikas großteils asiatische DNA tragen. Im Buch beschriebene Tiere, Pflanzen und Technologien (Pferde, Elefanten, Weizen, Stahl, Streitwagen, Seide) sind für das präkolumbische Amerika der fraglichen Zeit nicht belegt.`,
    detail: `**Archäologie:** Der Yale-Archäologe und Maya-Spezialist Michael D. Coe schrieb 1973 in einer mormonischen Zeitschrift, kein nicht-mormonischer Fachkollege sehe eine wissenschaftliche Grundlage für die Geschichtlichkeit des Buches; nichts aus amerikanischen Ausgrabungen deute darauf hin. Die Maya-Schrift ist heute weitgehend entziffert – Namen wie Zarahemla, Nephi oder Lamanen erscheinen nicht.

**Tiere und Technik:** Pferde starben in Amerika am Ende der Eiszeit (vor etwa 10.000 Jahren) aus und kamen erst mit den Spaniern zurück; im Buch ziehen Pferde Streitwagen (Alma 18,9.12). Mammuts und Mastodonten (Ether 9,19 nennt „Elefanten") waren ebenso lange ausgestorben. Räder sind in Mesoamerika nur an Spielzeugfiguren belegt.

**Bevölkerung und Schlachten:** Ether 15,2 spricht von zwei Millionen gefallenen Kriegern, Mormon 6 von Hunderttausenden Toten am Hügel Cumorah (heute im Staat New York) – dort wurden keine entsprechenden Funde gemacht.

**Ehrliche Zugeständnisse:** Die Theorie der begrenzten Geographie ist ernst gemeint; *Hordeum pusillum* („Little Barley") wurde in Nordamerika tatsächlich kultiviert; der Name NHM im Jemen ist ein interessanter Befund. Die Ausgrabungslage in Mesoamerika ist unvollständig. Aber einzelne Treffer ändern das Gesamtbild nicht.`,
    sources: [
      { kind: 'fachliteratur', author: 'Michael D. Coe', work: 'Mormons and Archaeology: An Outside View', ref: 'Dialogue: A Journal of Mormon Thought 8,2 (1973)', year: '1973', quote: `Nichts, absolut nichts aus Ausgrabungen in der Neuen Welt deute für einen unvoreingenommenen Beobachter darauf hin, dass das Buch Mormon ein historisches Dokument über frühe Einwanderer sei.`, status: 'paraphrase', note: 'Englischer Wortlaut und genaue Seitenzahl vor wörtlichem Zitat prüfen.' },
      { kind: 'gegner', author: 'Kirche Jesu Christi der HLT', work: 'Gospel Topics Essay „Book of Mormon and DNA Studies"', year: '2014', quote: `Die bisherigen Befunde deuten darauf hin, dass die Mehrheit der amerikanischen Ureinwohner überwiegend asiatische DNA trägt; das Buch Mormon behaupte nicht, die einzigen Einwanderer zu beschreiben.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Simon G. Southerton', work: 'Losing a Lost Tribe: Native Americans, DNA, and the Mormon Church', year: '2004', quote: `Molekularbiologische Analyse: Keine Hinweise auf israelitische Abstammung der amerikanischen Ureinwohner.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'John L. Sorenson', work: 'An Ancient American Setting for the Book of Mormon', year: '1985', quote: `Begrenzte Geographie in Mesoamerika; „Pferd" und andere Begriffe als Lehnbezeichnungen.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Bei der Bibel kann ich dir Städte, Könige und Inschriften zeigen – beim Buch Mormon nicht eine einzige Stadt, Münze oder Inschrift. Es beschreibt Millionen Menschen, Pferde, Streitwagen und Stahl in Amerika, wo es all das damals nicht gab, und die Genetik zeigt eine asiatische Herkunft der Ureinwohner, wie selbst die HLT-Kirche einräumt. Und warum zitieren Nephiten, die 600 v. Chr. Jerusalem verließen, Jesaja im Wortlaut einer englischen Bibel von 1611?`,
  keyPoints: [
    `**Keine archäologische Spur:** Kein Ort, keine Inschrift, kein Name aus dem Buch Mormon ist identifiziert – trotz entzifferter Maya-Schrift.`,
    `**Anachronismen:** Pferde mit Streitwagen, Elefanten, Weizen, Stahl, Seide.`,
    `**DNA:** Asiatische Herkunft der Ureinwohner – von der HLT-Kirche selbst eingeräumt (2014).`,
    `**King-James-Texte:** Jesaja, Bergpredigt und Maleachi im Wortlaut der KJV von 1611.`,
    `**Geänderte Einleitung:** Die Lamaniten waren laut Einleitung „die Hauptvorfahren" der Indianer; seit 2006/07 nur noch „unter den Vorfahren".`,
    `**Biblischer Maßstab:** Der Glaube der Bibel ruht auf überprüfbarer Geschichte (Lk 1,1–4; 1 Kor 15,6).`,
  ],
  voices: [
    {
      person: 'kitchen',
      role: 'als Ägyptologe und Kenner des Alten Orients',
      text: `Kitchen hat in „On the Reliability of the Old Testament" gezeigt, wie man antike Texte prüft: Man vergleicht ihre Angaben – Preise, Vertragsformen, Personennamen, politische Verhältnisse – mit dem datierbaren Befund ihrer Epoche. Die biblischen Berichte bestehen diese Prüfung in bemerkenswertem Maß. Wendet man denselben methodischen Maßstab auf das Buch Mormon an, fehlt jede Vergleichsbasis: Es gibt keinen datierbaren außerbiblischen Befund, an dem sich seine Angaben bewähren könnten.`,
      sources: [{ kind: 'fachliteratur', author: 'Kenneth A. Kitchen', work: 'On the Reliability of the Old Testament', year: '2003', quote: `Methode: Abgleich biblischer Angaben mit datierbarem Material des Alten Orients.`, status: 'paraphrase', note: 'Die Anwendung auf das Buch Mormon ist eine methodische Übertragung, keine Aussage Kitchens selbst.' }],
    },
    {
      person: 'pj-williams',
      role: 'als Neutestamentler (Orts- und Namenskenntnis der Evangelien)',
      text: `Williams zeigt, dass die Evangelien eine erstaunlich genaue Kenntnis Palästinas im 1. Jahrhundert verraten: Ortsnamen, Entfernungen, lokale Gepflogenheiten und die Häufigkeit von Personennamen passen zu dem, was wir aus anderen Quellen wissen. Solche „unauffälligen Übereinstimmungen" kann ein späterer Autor kaum erfinden. Genau diese Art von Überprüfbarkeit fehlt beim Buch Mormon vollständig – seine Orte und Namen lassen sich mit keiner außerhalb des Buches bekannten Welt abgleichen.`,
      sources: [{ kind: 'fachliteratur', author: 'Peter J. Williams', work: 'Can We Trust the Gospels?', year: '2018', quote: `Orts- und Namenskenntnis der Evangelien als Indiz für historische Verlässlichkeit.`, status: 'paraphrase' }],
    },
    {
      person: 'bauckham',
      role: 'als Neutestamentler (Augenzeugenschaft)',
      text: `Bauckham hat gezeigt, dass die Häufigkeitsverteilung der Personennamen in den Evangelien genau der Namensstatistik jüdischer Palästinenser jener Zeit entspricht, wie sie aus Ossuarien und anderen Quellen bekannt ist. Das spricht für Überlieferung aus erster Hand. Für ein historisches Dokument ist ein solcher Abgleich mit externen Daten der Normalfall – das Buch Mormon bietet dafür kein Material.`,
      sources: [{ kind: 'fachliteratur', author: 'Richard Bauckham', work: 'Jesus and the Eyewitnesses', year: '2006 (2. Aufl. 2017)', quote: `Namensstatistik der Evangelien entspricht dem palästinischen Judentum des 1. Jahrhunderts.`, status: 'paraphrase' }],
    },
    {
      person: 'walter-martin',
      role: 'als Kenner der HLT-Geschichte',
      text: `Martin wies auf die Abhängigkeit des Buches Mormon von der King-James-Bibel und auf die Ähnlichkeiten mit populären Theorien des frühen 19. Jahrhunderts hin, wonach die Indianer von den verlorenen Stämmen Israels abstammten. Er betonte, dass die Glaubwürdigkeit des Buches nicht an Gefühlen, sondern an überprüfbaren Tatsachen gemessen werden muss.`,
      sources: [{ kind: 'fachliteratur', author: 'Walter Martin', work: 'The Kingdom of the Cults', year: '1965', ref: 'Kapitel über den Mormonismus', quote: `Analyse der Quellen und Anachronismen des Buches Mormon.`, status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'abwesenheit-kein-beweis',
      objection: `Abwesenheit von Belegen ist kein Beleg für Abwesenheit. Auch für den Exodus gibt es kaum archäologische Funde, und ihr glaubt trotzdem daran.`,
      objectionBy: 'Daniel C. Peterson / FAIR',
      answer: `Das ist ein berechtigter Grundsatz – bei einzelnen Ereignissen. Aber das Buch Mormon beschreibt keine Wüstenwanderung von Nomaden, sondern große Städte, Millionen Einwohner, Metallverarbeitung, Pferde und Streitwagen über tausend Jahre. Wir kennen die Kulturen Mesoamerikas gut, ihre Schrift ist entziffert – und von Nephiten keine Spur. Die Welt der Bibel dagegen ist durch Tausende Funde belegt, auch wenn nicht jedes Ereignis Spuren hinterließ.`,
      followUps: [
        {
          id: 'begrenzte-geographie',
          objection: `Die Nephiten waren eine kleine Gruppe in einem begrenzten Gebiet Mesoamerikas, umgeben von vielen anderen Völkern. Sie konnten leicht übersehen werden.`,
          objectionBy: 'John L. Sorenson',
          answer: `Das widerspricht dem, was Joseph Smith und die HLT-Kirche lange lehrten: Smith bezeichnete Indianer in New York und Missouri als Lamaniten (LuB 28,8–9; 54,8), und die Einleitung des Buches nannte die Lamaniten bis 2006/07 „die Hauptvorfahren der amerikanischen Indianer". Erst als die Belege fehlten, wurde das Gebiet verkleinert. Und das Buch selbst spricht von Millionen Kriegern (Ether 15,2) – kaum eine „kleine Gruppe".`,
          followUps: [
            {
              id: 'pferd-lehnwort',
              objection: `„Pferd" kann ein Lehnwort für Tapir oder Hirsch sein – so wie die Spanier unbekannte Tiere mit bekannten Namen bezeichneten.`,
              objectionBy: 'John L. Sorenson',
              answer: `Im Buch Mormon ziehen die Pferde Streitwagen (Alma 18,9.12; 3 Nephi 3,22). Weder Tapire noch Hirsche wurden je angeschirrt, und Wagenräder fehlen archäologisch. Wenn jedes problematische Wort „eigentlich etwas anderes" bedeutet, kann der Text nichts mehr behaupten – und auch nicht widerlegt werden.`,
              followUps: [
                {
                  id: 'gerste-gefunden',
                  objection: `Aber Gerste wurde gefunden – *Hordeum pusillum* wurde in Nordamerika domestiziert. Die Kritiker lagen falsch!`,
                  objectionBy: 'FAIR (HLT-Apologetik)',
                  answer: `Das stimme ich zu – das ist ein echter Fund, und Kritiker sollten ihn nicht verschweigen. Aber er betrifft eine einzige Pflanze, und zwar vor allem in Nordamerika, nicht im mesoamerikanischen Kerngebiet der begrenzten Geographie. Weizen, Pferde, Elefanten, Streitwagen, Stahl und Seide bleiben ohne Beleg. Ein Treffer macht viele Fehlanzeigen nicht wett.`,
                  questionsBack: [`Wenn ein Fund wie die Gerste so wichtig ist – was bedeutet dann das Fehlen aller anderen Belege?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'dna-erklaert',
      objection: `Die DNA-Argumente sind überholt: Gründereffekt, genetischer Flaschenhals, Vermischung – die Kirche hat das in ihrem Essay erklärt.`,
      objectionBy: 'Kirche Jesu Christi der HLT (Gospel Topics Essay 2014)',
      answer: `Der Essay räumt ein, dass die Ureinwohner Amerikas großteils asiatische DNA tragen – das ist ein wichtiges Zugeständnis. Die Erklärungen sind möglich, aber sie machen das Buch unprüfbar. Und sie widersprechen der früheren Lehre der Kirche selbst, die Lamaniten seien die Hauptvorfahren der Indianer. Die Wissenschaft hat hier nichts verändert – die Lehre hat sich angepasst.`,
      followUps: [
        {
          id: 'dna-auch-adam',
          objection: `Mit derselben Logik müsstest du auch Adam und Eva aufgeben – die Populationsgenetik schließt sie angeblich aus.`,
          objectionBy: 'HLT-Apologeten',
          answer: `Ein guter Einwand, aber der Fall ist verschieden: Adam und Eva liegen in ferner Vorzeit, und es gibt ernsthafte Modelle, die sie mit den genetischen Daten vereinbaren; die koptische Kirche hat zudem kein Dogma über die biologischen Mechanismen. Das Buch Mormon behauptet dagegen eine Einwanderung um 600 v. Chr., die zu großen Völkern führte – jung, konkret und genau die Art Ereignis, die Genetik gut erfassen kann.`,
        },
      ],
    },
    {
      id: 'smith-konnte-das-nicht',
      objection: `Ein ungebildeter Bauernjunge konnte unmöglich in 90 Tagen über 500 Seiten mit Chiasmen und Hebraismen diktieren. Das ist das eigentliche Wunder.`,
      objectionBy: 'HLT-Missionare / John W. Welch',
      answer: `Joseph Smith war ungewöhnlich begabt, redegewandt und mit der King-James-Bibel tief vertraut – und deren Sprache ist voller Chiasmen und Hebraismen, weil sie aus dem Hebräischen übersetzt ist. Große Teile des Buches übernehmen KJV-Texte wörtlich. Nach dem HLT-Essay zur Übersetzung diktierte Smith oft mit einem Seherstein in einem Hut, ohne die Platten zu benutzen. Eine erstaunliche Leistung ist kein Beweis für göttlichen Ursprung – auch der Koran wird so begründet.`,
      followUps: [
        {
          id: 'elf-zeugen',
          objection: `Elf Zeugen sahen die goldenen Platten, und keiner hat sein Zeugnis je widerrufen – auch die nicht, die die Kirche verließen.`,
          objectionBy: 'HLT-Missionare',
          answer: `Das ist bemerkenswert, und ich nehme es ernst. Aber Martin Harris sprach davon, die Platten mit „geistigen Augen" gesehen zu haben; die acht Zeugen stammten überwiegend aus den Familien Whitmer und Smith. Mehrere Zeugen folgten später anderen Visionären mit eigenen Offenbarungen; David Whitmer schrieb 1887, Gott habe ihm befohlen, sich von den Heiligen der Letzten Tage zu trennen. Aufrichtigkeit beweist nicht, dass das Gesehene objektiv war.`,
          sources: [{ kind: 'fachliteratur', author: 'David Whitmer', work: 'An Address to All Believers in Christ', year: '1887', quote: `Whitmer hält an seinem Zeugnis fest, ruft aber zur Trennung von der Kirche Joseph Smiths auf.`, status: 'paraphrase' }],
          followUps: [
            {
              id: 'wuerden-fuer-luege-leiden',
              objection: `Würden diese Männer für eine Lüge Verfolgung erleiden? Das Argument benutzt ihr doch selbst für die Apostel!`,
              objectionBy: 'HLT-Apologeten',
              answer: `Ein fairer Vergleich – aber die Fälle unterscheiden sich. Die Apostel bezeugten, den gekreuzigten Jesus leiblich lebend gesehen, berührt und mit ihm gegessen zu haben, und zwar mehrere Gruppen unabhängig; viele starben dafür. Die Zeugen der Platten berichten visionäre Erlebnisse in einem kleinen Kreis. Und auch James Strang ließ Zeugen für seine eigenen „Platten" unterschreiben, die ebenso aufrichtig wirkten. Ich halte die Zeugen nicht für Lügner – aber Aufrichtigkeit allein beweist nichts.`,
            },
          ],
        },
        {
          id: 'nahom',
          objection: `Nahom (1 Nephi 16,34) wurde im Jemen als Stammesname NHM auf Altären aus der Zeit um 600 v. Chr. gefunden. Das konnte Joseph Smith nicht wissen.`,
          objectionBy: 'Warren P. Aston / Daniel C. Peterson',
          answer: `Das ist der stärkste Befund der HLT-Apologetik, und ich gebe zu: Er ist interessant. Aber NHM ist eine Konsonantenfolge, die man verschieden vokalisieren kann, und ein Ort „Nehhm" erschien bereits auf europäischen Karten Arabiens des 18. Jahrhunderts. Ob Smith davon wusste, ist offen. Vor allem: Ein einzelner möglicher Treffer in Arabien kann das Fehlen jeder Spur in Amerika, wo 99 % des Buches spielen, nicht ausgleichen.`,
          questionsBack: [`Wenn ein einziger Name in Arabien so schwer wiegt – was sagt es, dass in Amerika kein einziger Name gefunden wurde?`],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Kannst du mir eine einzige Stadt aus dem Buch Mormon auf einer Landkarte zeigen?`,
    `Warum zitieren Nephiten des 6. Jahrhunderts v. Chr. Jesaja im Wortlaut der King-James-Bibel von 1611?`,
    `Warum wurde die Einleitung des Buches 2006/07 von „Hauptvorfahren" zu „unter den Vorfahren" geändert?`,
    `Welche Funde würden dich davon überzeugen, dass das Buch nicht historisch ist?`,
  ],
  avoid: [
    `„Das Smithsonian-Institut hat das Buch Mormon offiziell widerlegt." – Stützt sich auf ältere Standardbriefe; argumentiere lieber mit Fachliteratur (Coe, Southerton) und dem HLT-DNA-Essay.`,
    `„Joseph Smith hat das Buch von Solomon Spaulding abgeschrieben." – Die Spaulding-Theorie ist umstritten und schwer belegbar; sie lenkt nur ab.`,
    `Die Gerste- und Nahom-Befunde verschweigen – ein informierter Mormone kennt sie und wird dir mangelnde Fairness vorwerfen.`,
  ],
  concessions: [
    `Domestizierte Gerste (*Hordeum pusillum*) ist im präkolumbischen Nordamerika belegt.`,
    `Der Stammesname NHM im Jemen ist ein bemerkenswerter Befund.`,
    `Die Zeugen der Platten haben ihr Zeugnis tatsächlich nicht widerrufen; die archäologische Erforschung Mesoamerikas ist unvollständig.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Michael D. Coe', work: 'Mormons and Archaeology: An Outside View', ref: 'Dialogue 8,2 (1973)', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Simon G. Southerton', work: 'Losing a Lost Tribe', year: '2004', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Richard Lyman Bushman', work: 'Joseph Smith: Rough Stone Rolling', year: '2005', status: 'paraphrase', note: 'Wohlwollende, aber ehrliche Biografie eines HLT-Historikers.' },
    { kind: 'gegner', author: 'Terryl L. Givens', work: 'By the Hand of Mormon: The American Scripture that Launched a New World Religion', year: '2002', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Mormonen', 'Buch Mormon', 'Archäologie', 'DNA', 'Anachronismen'],
  related: [
    'mormonen/brennen-im-herzen',
    'mormonen/buch-abraham',
    'at-archaeologie/exodus-nie-passiert',
    'genetik/adam-eva-genetisch-unmoeglich',
    'islam-koran/koran-herausforderung',
  ],
};

export default claim;
