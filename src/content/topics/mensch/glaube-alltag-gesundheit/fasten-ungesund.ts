import type { Claim, Source } from '../../../schema.ts';

const sarri2003: Source = {
  kind: 'wissenschaft',
  author: 'Katerina O. Sarri, Nikolaos E. Tzanakis, Manolis K. Linardakis, George D. Mamalakis, Anthony G. Kafatos',
  work: '„Effects of Greek Orthodox Christian Church fasting on serum lipids and obesity", BMC Public Health 3, 16',
  year: '2003',
  quote: `Auf Kreta hatten Erwachsene, die die orthodoxen Fastenzeiten einhielten, nach den Fastenperioden niedrigere Werte für Gesamt- und LDL-Cholesterin und einen etwas niedrigeren Body-Mass-Index als Nichtfaster derselben Region.`,
  status: 'paraphrase',
  note: 'Beobachtungsstudie; Einzelwerte (z. B. Verhalten des HDL) vor Detailzitierung im Original prüfen.',
};

const sarri2004: Source = {
  kind: 'wissenschaft',
  author: 'Katerina O. Sarri, Manolis K. Linardakis, Frosso N. Bervanaki, Nikolaos E. Tzanakis, Anthony G. Kafatos',
  work: '„Greek Orthodox fasting rituals: a hidden characteristic of the Mediterranean diet of Crete", British Journal of Nutrition 92, S. 277–284',
  year: '2004',
  quote: `Die Autoren beschreiben das orthodoxe Fasten als „verborgenes Merkmal" der traditionellen kretischen Mittelmeerkost: Während der Fastenzeiten sinkt die Aufnahme gesättigter Fette, die Zufuhr von Ballaststoffen und pflanzlichen Lebensmitteln steigt; zugleich achten sie auf mögliche Engpässe bei einzelnen Mikronährstoffen.`,
  status: 'paraphrase',
};

const trepanowski2010: Source = {
  kind: 'wissenschaft',
  author: 'John F. Trepanowski, Richard J. Bloomer',
  work: '„The impact of religious fasting on human health", Nutrition Journal 9, 57',
  year: '2010',
  quote: `Übersicht über Studien zu Ramadan-, griechisch-orthodoxem und „Daniel"-Fasten: Orthodoxes Fasten war mit günstigen Veränderungen von Blutfetten und Körpergewicht verbunden; die Autoren mahnen, auf ausreichende Zufuhr einzelner Nährstoffe zu achten.`,
  status: 'paraphrase',
};

const and2016: Source = {
  kind: 'wissenschaft',
  author: 'Vesanto Melina, Winston Craig, Susan Levin',
  work: '„Position of the Academy of Nutrition and Dietetics: Vegetarian Diets", Journal of the Academy of Nutrition and Dietetics 116, S. 1970–1980',
  year: '2016',
  quote: `Es ist die Position der Academy of Nutrition and Dietetics, dass gut geplante vegetarische, einschließlich veganer, Ernährungsweisen gesund und ernährungsphysiologisch angemessen sind und gesundheitliche Vorteile bei der Vorbeugung und Behandlung bestimmter Krankheiten bieten können.`,
  original: `It is the position of the Academy of Nutrition and Dietetics that appropriately planned vegetarian, including vegan, diets are healthful, nutritionally adequate, and may provide health benefits in the prevention and treatment of certain diseases.`,
  translation: 'eigene Übersetzung',
  status: 'verbatim',
  note: 'Die Stellungnahme hält solche Ernährungsweisen für alle Lebensphasen für geeignet, betont aber die Supplementierung von Vitamin B12.',
};

const dge: Source = {
  kind: 'wissenschaft',
  author: 'Deutsche Gesellschaft für Ernährung (DGE)',
  work: 'Positionspapiere zur veganen Ernährung (Ernährungs Umschau 2016; aktualisiert 2024)',
  year: '2016/2024',
  quote: `Die DGE hält eine vegane Ernährung für gesunde Erwachsene bei Supplementierung von Vitamin B12 und guter Planung für möglich; für Schwangere, Stillende, Kinder und Jugendliche sieht sie die Datenlage zurückhaltend bzw. empfiehlt besondere ärztliche und ernährungsfachliche Begleitung.`,
  status: 'paraphrase',
  note: 'Genaue Formulierungen der Fassung von 2024 vor Zitierung prüfen.',
};

const liu2022: Source = {
  kind: 'wissenschaft',
  author: 'Deying Liu u. a.',
  work: '„Calorie Restriction with or without Time-Restricted Eating in Weight Loss", New England Journal of Medicine 386, S. 1495–1504',
  year: '2022',
  quote: `In einer einjährigen randomisierten Studie brachte zeitlich begrenztes Essen zusätzlich zur Kalorienreduktion keinen signifikanten Zusatznutzen für Gewicht und Stoffwechselwerte.`,
  status: 'paraphrase',
};

const deCabo2019: Source = {
  kind: 'wissenschaft',
  author: 'Rafael de Cabo, Mark P. Mattson',
  work: '„Effects of Intermittent Fasting on Health, Aging, and Disease", New England Journal of Medicine 381, S. 2541–2551',
  year: '2019',
  quote: `Übersichtsarbeit: Intermittierendes Fasten löst im Tiermodell und in ersten Humanstudien günstige Stoffwechselanpassungen aus; viele Fragen zur langfristigen Wirkung beim Menschen sind offen.`,
  status: 'paraphrase',
};

const claim: Claim = {
  id: 'fasten-ungesund',
  title: `„Das koptische Fasten ist ungesund."`,
  proponents: [
    { name: 'Ernährungswissenschaftliche Kritiker veganer Kost', role: 'u. a. Hinweise der DGE zu Risikogruppen', work: 'DGE-Position zur veganen Ernährung (2016, aktualisiert 2024)' },
    { name: 'Rudolph M. Bell', role: 'Historiker, Rutgers University', work: 'Holy Anorexia (1985) – religiöses Fasten und Essstörungen' },
    { name: 'Christopher Hitchens', role: 'Publizist (1949–2011)', work: 'God Is Not Great (2007) – Kritik an religiösen Speisevorschriften' },
    { name: 'Shawn Baker', role: 'Orthopäde und Autor, Vertreter der „Carnivore"-Ernährung', work: 'The Carnivore Diet (2019)' },
  ],
  steelman: `Die koptische Kirche verlangt an über 200 Tagen im Jahr eine Ernährung ohne Fleisch, Milchprodukte und Eier, oft verbunden mit völligem Nahrungsverzicht bis zum Mittag oder Nachmittag. Ernährungswissenschaftlich ist das riskant: Vegane Kost kann zu Mängeln an Vitamin B12, Kalzium, Eisen, Jod, Zink und Omega-3-Fettsäuren führen; die Deutsche Gesellschaft für Ernährung rät für Schwangere, Stillende und Kinder zu besonderer Vorsicht. Für Diabetiker und Menschen, die Medikamente nehmen, können lange Essenspausen gefährlich sein. Religiöses Fasten steht historisch im Verdacht, Essstörungen zu begünstigen – Historiker sprechen von „heiliger Anorexie". Und die modischen Gesundheitsversprechen des Intervallfastens sind wissenschaftlich weit schwächer als behauptet: Eine Studie im New England Journal of Medicine fand keinen Zusatznutzen gegenüber einfacher Kalorienreduktion. Kurz: Ein uraltes Ritual wird nicht dadurch gesund, dass es heilig ist.`,
  biblical: {
    summary: `Fasten ist in der Bibel selbstverständliche Praxis – Mose, Elia, Daniel, Jesus selbst (Mt 4,2) und die Urkirche (Apg 13,2–3) fasten. Jesus setzt voraus, dass seine Jünger fasten werden („Wenn ihr fastet …", Mt 6,16), warnt aber vor äußerlicher Frömmigkeit. Daniel und seine Freunde baten um zehn Tage pflanzliche Kost und Wasser – und waren danach gesünder als die anderen (Dan 1,12–15). Jesaja zeigt, dass das wahre Fasten mit Gerechtigkeit und Teilen verbunden ist (Jes 58,6–7). Der Leib ist „ein Tempel des Heiligen Geistes" (1 Kor 6,19) – Fasten darf ihn nicht zerstören.`,
    detail: `- **Mk 2,27:** „Der Sabbat ist um des Menschen willen gemacht" – das Prinzip gilt auch für Fastenregeln: Sie dienen dem Menschen.
- **1 Tim 5,23:** Paulus rät Timotheus wegen seines Magens zu ein wenig Wein – Rücksicht auf die Gesundheit ist apostolisch.
- **Mt 6,16–18:** Fasten ist Begegnung mit dem Vater im Verborgenen, keine Leistungsschau.`,
    sources: [
      { kind: 'bibel', work: 'Daniel', ref: '1,12–15', quote: `Daniel bat, man möge ihm und seinen Freunden zehn Tage lang Gemüse zu essen und Wasser zu trinken geben; nach den zehn Tagen sahen sie gesünder und kräftiger aus als alle, die von der Speise des Königs aßen.`, status: 'paraphrase' },
      { kind: 'bibel', work: 'Matthäus', ref: '6,16', quote: `Wenn ihr fastet, sollt ihr nicht sauer sehen wie die Heuchler.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Markus', ref: '2,27', quote: `Der Sabbat ist um des Menschen willen gemacht, und nicht der Mensch um des Sabbats willen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '6,19', quote: `Oder wisset ihr nicht, daß euer Leib ein Tempel des heiligen Geistes ist, der in euch ist, welchen ihr habt von Gott, und seid nicht euer selbst?`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche kennt je nach Jahr über 200 Fastentage: die Große Fastenzeit vor Ostern, das Advents- (Geburts-)fasten, das Apostelfasten, das Fasten der Jungfrau, das Jona-Fasten sowie Mittwoch und Freitag. Gefastet wird durch eine pflanzliche Kost ohne Fleisch, Milchprodukte und Eier (in einigen Fastenzeiten ist Fisch erlaubt) und durch eine Zeit völliger Enthaltsamkeit bis zu einer bestimmten Stunde. In den fünfzig Tagen nach Ostern und an bestimmten Festen wird nicht gefastet. **Entscheidend:** Fasten geschieht unter Begleitung des Beichtvaters und nach dem Maß der eigenen Kraft. Kranke, Schwangere, Stillende, kleine Kinder und Gebrechliche werden ganz oder teilweise freigestellt; niemand soll seine Gesundheit gefährden. Papst Schenuda III. betonte, dass Fasten ein geistliches Werk von Leib und Seele ist – verbunden mit Gebet, Umkehr und Barmherzigkeit –, nicht bloßer Verzicht auf Speisen.`,
    sources: [
      { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Die Spiritualität des Fastens (The Spirituality of Fasting)', quote: `Fasten ist nicht nur Enthaltung von Speise, sondern eine Zeit, in der Leib und Seele sich Gott zuwenden – mit Gebet, Reue und Werken der Liebe; es geschieht in Gehorsam und unter geistlicher Führung.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Johannes Cassian', work: 'De institutis coenobiorum', ref: 'V,5–9', quote: `Nicht alle können auf gleiche Weise fasten; das Maß richtet sich nach der Kraft des Körpers, dem Alter und der Gesundheit – entscheidend ist, sich nicht zu übersättigen und das Ziel nicht aus den Augen zu verlieren.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien über die Statuen', ref: '3', quote: `Der Wert des Fastens liegt nicht in der Enthaltung von Speisen allein, sondern in der Abkehr von der Sünde.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Studien zum griechisch-orthodoxen Fasten, das dem koptischen sehr ähnlich ist, zeigen überwiegend günstige Effekte: niedrigere Werte von Gesamt- und LDL-Cholesterin und ein etwas niedrigeres Körpergewicht bei Fastenden (Sarri u. a. 2003; Übersicht: Trepanowski & Bloomer 2010). Sarri u. a. (2004) nennen das Fasten ein „verborgenes Merkmal" der berühmten kretischen Mittelmeerkost. Zugleich mahnen die Studien, auf einzelne Nährstoffe zu achten (u. a. Kalzium, Vitamin B12). Fachgesellschaften halten gut geplante vegane Kost für gesund (Academy of Nutrition and Dietetics 2016); die DGE ist bei Schwangeren und Kindern zurückhaltender. Zum Intervallfasten ist die Datenlage gemischt: Übersichten zeigen günstige Stoffwechselreaktionen (de Cabo & Mattson 2019), eine randomisierte Studie fand aber keinen Zusatznutzen gegenüber reiner Kalorienreduktion (Liu u. a. 2022). Für Menschen mit Diabetes, bestimmten Medikamenten oder Essstörungen kann Fasten riskant sein und braucht ärztliche Begleitung.`,
    detail: `- **Koptisches Fasten ≠ Dauerveganismus:** Fastenzeiten wechseln mit Festzeiten; in mehreren Fastenzeiten ist Fisch erlaubt.
- **Traditionelle ägyptische Fastenküche** – Ful (Saubohnen), Linsen, Koshari, Ta'amiya, Tahina (Sesam, reich an Kalzium), Gemüse – ist eiweiß- und ballaststoffreich.
- **Offene Punkte:** Langzeitdaten speziell zum koptischen Fasten sind rar; Beobachtungsstudien können Störfaktoren (z. B. insgesamt gesünderer Lebensstil) nicht ganz ausschließen.`,
    sources: [sarri2003, sarri2004, trepanowski2010, and2016, dge, deCabo2019, liu2022],
  },
  quickAnswer: `Die Studien sprechen eher für das Gegenteil: Bei orthodoxen Christen auf Kreta, die ganz ähnlich fasten wie Kopten, waren nach den Fastenzeiten Cholesterin und Gewicht niedriger; Forscher nennen das Fasten ein „verborgenes Merkmal" der gesunden Mittelmeerkost. Koptisches Fasten ist kein Dauerveganismus, sondern ein Wechsel von Fasten- und Festzeiten, oft mit Fisch. Und die Kirche befreit Kranke, Schwangere, Stillende und Kinder ganz oder teilweise – der Beichtvater begleitet das Maß. Ehrlich ist: Wer fastet, sollte auf B12 und Kalzium achten. Aber vor allem ist Fasten kein Diätprogramm, sondern Gebet mit dem ganzen Leib.`,
  keyPoints: [
    `**Die Daten sind günstig:** Orthodoxes Fasten senkte in Studien auf Kreta Cholesterin und Gewicht (Sarri 2003, 2004).`,
    `**Kein Dauerveganismus:** Fasten- und Festzeiten wechseln; 50 Tage nach Ostern wird nicht gefastet; mehrere Fastenzeiten erlauben Fisch.`,
    `**Ausnahmen sind kirchliche Praxis:** Kranke, Schwangere, Stillende, Kinder und Alte fasten nach ihrem Maß oder gar nicht – unter Begleitung des Beichtvaters.`,
    `**Gut geplante Pflanzenkost ist gesund:** So die Academy of Nutrition and Dietetics; Vitamin B12 und Kalzium im Blick behalten.`,
    `**Die Väter warnten vor Übermaß:** Antonius und Cassian lehrten Unterscheidung (*discretio*); übertriebenes Fasten gilt ihnen als ebenso schädlich wie Völlerei.`,
    `**Der Sinn ist geistlich:** Fasten ist Demut, Gebet, Solidarität mit den Armen – nicht Diät und nicht Leistung.`,
  ],
  voices: [
    {
      person: 'shenouda-iii',
      role: 'als Patriarch und geistlicher Lehrer',
      text: `Papst Schenuda III. widmete dem Fasten ein eigenes Buch. Für ihn ist Fasten eine Schule der Selbstbeherrschung, in der der Geist über die Begierden des Leibes zu herrschen lernt – nicht aus Verachtung des Leibes, sondern um den ganzen Menschen Gott zuzuwenden. Fasten ohne Gebet, Reue und Barmherzigkeit nennt er leer. Zugleich betont er den Gehorsam gegenüber dem geistlichen Vater: Das Maß des Fastens wird nicht eigenmächtig bestimmt, sondern in geistlicher Begleitung – was Rücksicht auf Krankheit und Schwäche einschließt.`,
      sources: [{ kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Die Spiritualität des Fastens', status: 'paraphrase' }],
    },
    {
      person: 'antonius',
      role: 'als Vater der Mönche',
      text: `Die Sprüche der Wüstenväter überliefern von Antonius eine eindringliche Warnung: Manche haben ihren Leib durch Askese aufgerieben, aber weil ihnen die Unterscheidung fehlte, blieben sie fern von Gott. Und als ein Jäger sich wunderte, dass Antonius mit den Brüdern entspannt beisammensaß, ließ er ihn den Bogen immer weiter spannen, bis der Jäger sagte, er würde brechen. Ebenso, so Antonius, würden die Brüder zerbrechen, wenn man sie über das Maß hinaus spanne. Das ist die Haltung der Kirche zum Fasten: ernsthaft, aber mit Maß.`,
      sources: [{ kind: 'kirchenvater', author: 'Apophthegmata Patrum (Sprüche der Väter)', work: 'Antonius', ref: '8 und 13', status: 'paraphrase' }],
    },
    {
      person: 'johannes-cassian',
      role: 'als Lehrer der ägyptischen Askese',
      text: `Cassian überliefert die Lehre des Abba Moses über die Unterscheidung: Übermäßiges Fasten und Völlerei führen beide zum selben Ziel – sie schaden. Er betont, dass nicht alle gleich fasten können; das Maß richte sich nach Kraft, Alter und Gesundheit. Und er erzählt von einem alten Mönch, der sein Fasten brach, um Gäste zu bewirten: Das Fasten habe er immer bei sich, die Brüder aber nicht. Die Liebe steht über der Regel.`,
      sources: [
        { kind: 'kirchenvater', author: 'Johannes Cassian', work: 'Collationes', ref: 'II (Abba Moses über die Unterscheidung)', status: 'paraphrase' },
        { kind: 'kirchenvater', author: 'Johannes Cassian', work: 'De institutis coenobiorum', ref: 'V,5–9; vgl. V,24', status: 'paraphrase' },
      ],
    },
    {
      person: 'basilius',
      role: 'als Prediger über das Fasten',
      text: `In seinen Homilien über das Fasten beschreibt Basilius das Fasten als Hüter der Seele und als gut auch für den Leib: Mäßigkeit, wie sie auch Ärzte empfehlen, bewahre die Gesundheit besser als Übersättigung. Er erinnert daran, dass schon im Paradies das erste Gebot ein Speisegebot war, und warnt zugleich: Wer sich der Speisen enthält, aber sich am Unrecht mästet, fastet vergeblich.`,
      sources: [{ kind: 'kirchenvater', author: 'Basilius der Große', work: 'Über das Fasten (De ieiunio homiliae)', ref: 'Homilie 1', status: 'paraphrase' }],
    },
    {
      person: 'chrysostomus',
      role: 'als Prediger der Barmherzigkeit',
      text: `Chrysostomus mahnt seine Gemeinde in Antiochia: Der Wert des Fastens liegt nicht im Verzicht auf Speisen, sondern in der Abkehr von der Sünde. Wenn du fastest, sollen auch Mund, Augen und Hände fasten – vom bösen Wort, vom neidischen Blick, vom Unrecht. Wer fastet und dem Armen nichts gibt, hat den Sinn verfehlt. Für Chrysostomus ist das Fasten eine Übung der Liebe.`,
      sources: [{ kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien über die Statuen', ref: '3', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'naehrstoffmangel',
      objection: `Über 200 Tage im Jahr ohne tierische Produkte – das führt zu Mangel an Vitamin B12, Kalzium, Eisen und Eiweiß. Die DGE rät Schwangeren und Kindern sogar von veganer Ernährung ab.`,
      objectionBy: 'Ernährungsmedizinische Kritik (u. a. in Anlehnung an die DGE)',
      answer: `Koptisches Fasten ist kein Dauerveganismus: Fasten- und Festzeiten wechseln, nach Ostern wird fünfzig Tage nicht gefastet, und in mehreren Fastenzeiten ist Fisch erlaubt. Der Vitamin-B12-Speicher reicht zudem lange. Studien zum ganz ähnlichen orthodoxen Fasten auf Kreta fanden niedrigere Cholesterinwerte und ein etwas niedrigeres Gewicht. Und gerade Schwangere, Stillende und Kinder werden von der Kirche ganz oder teilweise freigestellt.`,
      sources: [sarri2003, dge],
      questionsBack: [`Kennst du die Ausnahmen, die die Kirche für Kranke, Schwangere und Kinder vorsieht?`],
      followUps: [
        {
          id: 'mikronaehrstoffe-defizite',
          objection: `Aber die Studien zum orthodoxen Fasten weisen selbst auf mögliche Defizite hin, etwa bei Kalzium und manchen Vitaminen.`,
          objectionBy: 'Ernährungswissenschaftler',
          answer: `Das stimmt, und das nehme ich ernst. Die Antwort ist nicht, das Fasten abzuschaffen, sondern es klug zu gestalten: Hülsenfrüchte, Sesam und Tahina, grünes Gemüse, Nüsse – die traditionelle ägyptische Fastenküche ist dafür gut geeignet – und wo nötig Vitamin B12. Die Academy of Nutrition and Dietetics hält gut geplante pflanzliche Kost ausdrücklich für gesund.`,
          sources: [sarri2004, and2016],
          followUps: [
            {
              id: 'kinder-fasten',
              objection: `Koptische Kinder werden aber schon früh zum Fasten angehalten. Das ist in der Wachstumsphase gefährlich.`,
              objectionBy: 'Kinderärztliche Kritik',
              answer: `Kinder fasten in der Kirche schrittweise und nach ihrem Vermögen – oft nur teilweise, ohne lange Nahrungspausen. Wachsende Kinder brauchen genug Eiweiß, Kalzium und Energie; deshalb sollen Eltern den Kinderarzt einbeziehen. Das widerspricht der Kirche nicht, sondern entspricht ihrer Lehre: Das Maß des Fastens richtet sich nach der Kraft.`,
              followUps: [
                {
                  id: 'arzt-gegen-beichtvater',
                  objection: `Und wenn der Beichtvater anders entscheidet als der Arzt?`,
                  objectionBy: 'Kinderärztliche Kritik',
                  answer: `Dann gilt der Grundsatz Jesu: Die Regel ist um des Menschen willen da. Kein Beichtvater darf verlangen, dass jemand seine Gesundheit aufs Spiel setzt – das wäre gegen die Lehre der Väter, die Unterscheidung über alles stellten. Wo es um Gesundheit geht, gehört die ärztliche Einschätzung auf den Tisch, und ein guter Beichtvater richtet sich danach.`,
                  sources: [{ kind: 'bibel', work: 'Markus', ref: '2,27', quote: `Der Sabbat ist um des Menschen willen gemacht, und nicht der Mensch um des Sabbats willen.`, translation: 'Luther 1912', status: 'verbatim' }],
                  followUps: [
                    {
                      id: 'verzicht-sinnlos',
                      objection: `Wenn Fasten nicht medizinisch begründet ist, ist es doch nur sinnloser Verzicht.`,
                      objectionBy: 'Christopher Hitchens',
                      answer: `Fasten ist kein Gesundheitsprogramm, sondern geistliche Übung: Es lehrt Selbstbeherrschung, macht das Gebet wach, verbindet mit dem Leiden Christi und mit den Hungernden. Jesaja sagt, das wahre Fasten sei, „dem Hungrigen dein Brot zu brechen". Was man beim Fasten spart, gehört den Armen. Sinnlos ist das nur, wenn man den Menschen auf seinen Stoffwechsel reduziert.`,
                      sources: [{ kind: 'bibel', work: 'Jesaja', ref: '58,7', quote: `Brich dem Hungrigen dein Brot, und die, so im Elend sind, führe ins Haus.`, translation: 'Luther 1912', status: 'verbatim' }],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'intervallfasten-hype',
      objection: `Die Gesundheitsversprechen des Fastens sind übertrieben. Eine Studie im New England Journal of Medicine fand beim Intervallfasten keinen Zusatznutzen gegenüber einfacher Kalorienreduktion.`,
      objectionBy: 'Ernährungsepidemiologe',
      answer: `Einverstanden – ich verspreche keine Wunder. Die Studie von 2022 zeigt, dass zeitlich begrenztes Essen nicht mehr bringt als weniger Kalorien. Aber die Behauptung war ja, koptisches Fasten sei *ungesund*. Dafür gibt es keine Belege – im Gegenteil: Es ist vor allem eine Umstellung auf pflanzliche Kost, und die ist nach Studienlage eher herzfreundlich.`,
      sources: [liu2022, deCabo2019],
      followUps: [
        {
          id: 'aha-2024',
          objection: `2024 wurde auf einem Kongress der American Heart Association eine Studie vorgestellt: Ein Essensfenster von acht Stunden ging mit einem um 91 % höheren Risiko für Herz-Kreislauf-Tod einher.`,
          objectionBy: 'Medienberichte über einen AHA-Kongressbeitrag',
          answer: `Das war ein Kongress-Abstract, keine begutachtete Veröffentlichung, und es beruhte auf zwei Tagesprotokollen der Ernährung – eine Beobachtung, die keine Ursache belegen kann; Fachleute haben es scharf kritisiert. Zudem passt es nicht auf das koptische Fasten: Die Zeit der Enthaltsamkeit gilt nicht jeden Tag des Jahres, an Samstagen und Sonntagen wird sie gelockert, und Festzeiten unterbrechen das Fasten.`,
          sources: [{ kind: 'wissenschaft', author: 'Victor Wenze Zhong u. a.', work: 'Kongressbeitrag zu 8-Stunden-Essensfenstern und kardiovaskulärer Sterblichkeit, AHA Epidemiology and Prevention | Lifestyle and Cardiometabolic Scientific Sessions', year: '2024', status: 'paraphrase', note: 'Nicht begutachtetes Abstract; Ergebnisse nur vorläufig und methodisch umstritten. Autoren und Titel vor Zitierung prüfen.' }],
          followUps: [
            {
              id: 'essstoerung',
              objection: `Religiöses Fasten kann Essstörungen fördern. Der Historiker Rudolph Bell spricht von „heiliger Anorexie" bei mittelalterlichen Heiligen.`,
              objectionBy: 'Rudolph Bell',
              answer: `Das ist ein ernstes Risiko für gefährdete Menschen, und ich will es nicht kleinreden. Gerade deshalb warnten die Väter vor Übermaß: Antonius sagte, manche hätten ihren Leib durch Askese zerrieben und seien doch fern von Gott geblieben, weil ihnen die Unterscheidung fehlte. Wer zu einer Essstörung neigt, sollte vom Beichtvater vom Fasten befreit und ärztlich begleitet werden. Das orthodoxe Fasten ist Gemeinschaftsrhythmus mit Maß, kein Wettbewerb im Hungern.`,
              sources: [{ kind: 'gegner', author: 'Rudolph M. Bell', work: 'Holy Anorexia', year: '1985', status: 'paraphrase' }, { kind: 'kirchenvater', author: 'Apophthegmata Patrum', work: 'Antonius', ref: '8', status: 'paraphrase', quote: `Manche haben ihren Leib in der Askese aufgerieben; weil ihnen aber die Unterscheidung fehlte, blieben sie fern von Gott.` }],
              followUps: [
                {
                  id: 'askese-koerperfeindlich',
                  objection: `Askese ist letztlich Körperfeindlichkeit. Das Christentum verachtet den Leib.`,
                  objectionBy: 'Friedrich Nietzsche',
                  answer: `Die orthodoxe Kirche verachtet den Leib nicht – sie glaubt an die Menschwerdung Gottes und an die Auferstehung des Fleisches. Der Leib ist ein Tempel des Heiligen Geistes. Fasten ordnet den Leib, statt ihn zu hassen, und auf das Fasten folgt das Fest: fünfzig Tage Osterfreude ohne Fasten. Athanasius berichtet, dass Antonius mit über hundert Jahren noch klare Augen und einen gesunden Leib hatte – kein Gesundheitsbeweis, aber ein Hinweis, dass maßvolle Askese nicht zerstört.`,
                  sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Leben des Antonius', ref: '93', status: 'paraphrase', quote: `Antonius starb mit etwa 105 Jahren; seine Augen waren ungetrübt, und er hatte bis zuletzt einen gesunden Leib.` }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'chronisch-kranke',
      objection: `Für Diabetiker und Menschen, die Medikamente nehmen, sind lange Nahrungspausen gefährlich. Die Kirche gefährdet Kranke.`,
      objectionBy: 'Diabetologe',
      answer: `Genau deshalb sind Kranke von der Enthaltsamkeit ganz oder teilweise befreit – das ist kirchliche Praxis, nicht meine Erfindung. Wer Insulin oder andere Medikamente nimmt, bespricht mit Arzt und Beichtvater, was möglich ist; oft bleibt es bei der Umstellung auf pflanzliche Kost ohne Nahrungspause, manchmal entfällt das Fasten ganz. Niemand muss seine Gesundheit riskieren, um Gott zu gefallen.`,
      followUps: [
        {
          id: 'ausnahmen-theorie',
          objection: `Die Ausnahmen gibt es auf dem Papier. In der Praxis fühlen sich Kranke schuldig, wenn sie nicht fasten.`,
          objectionBy: 'Diabetologe',
          answer: `Wo das so ist, liegt ein seelsorgerliches Problem vor, das man ansprechen muss. Die Lehre ist klar: Wer aus Gehorsam und Notwendigkeit nicht fastet, sündigt nicht. Cassian erzählt von einem alten Mönch, der sein Fasten brach, um Brüder zu bewirten: Das Fasten habe er immer bei sich, die Brüder nicht. Die Liebe – auch zum eigenen Leib, den Gott anvertraut hat – steht über der Regel.`,
          sources: [{ kind: 'kirchenvater', author: 'Johannes Cassian', work: 'De institutis coenobiorum', ref: 'V,24 (vgl.)', status: 'paraphrase', quote: `Ein alter Mönch unterbrach sein Fasten, um Gäste zu bewirten, und sagte, das Fasten habe er immer bei sich, die Brüder aber nicht.` }],
          followUps: [
            {
              id: 'dann-beliebig',
              objection: `Wenn jeder Ausnahmen bekommt, ist das Fasten beliebig.`,
              objectionBy: 'Christopher Hitchens',
              answer: `Nicht beliebig, sondern persönlich: Die gemeinsame Regel gilt für die Gesunden; wer schwach ist, fastet nach seinem Maß – und dieses Maß bestimmt man nicht nach Laune, sondern in Begleitung. Schon Cassian schrieb, dass nicht alle gleich fasten können, weil Kraft, Alter und Gesundheit verschieden sind. Eine Regel, die Rücksicht kennt, ist nicht schwach, sondern menschlich.`,
              followUps: [
                {
                  id: 'wozu-feste-regeln',
                  objection: `Warum dann überhaupt feste Fastenzeiten? Jeder könnte doch fasten, wann er will.`,
                  objectionBy: 'Christopher Hitchens',
                  answer: `Weil Fasten in der Kirche gemeinsam geschieht. Die Fastenzeiten folgen dem Leben Christi – vierzig Tage wie er in der Wüste, Mittwoch im Gedenken an den Verrat, Freitag an die Kreuzigung. Der gemeinsame Rhythmus schützt vor Stolz („ich faste mehr als du"), verbindet Familien und Gemeinden und lässt das Fest umso heller leuchten. Wer allein fastet, wann er will, macht es leicht zum Privatprojekt.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'tierisches-eiweiss-noetig',
      objection: `Der Mensch braucht tierisches Eiweiß. Pflanzenkost ist minderwertig – manche leben heute sogar nur von Fleisch und fühlen sich besser denn je.`,
      objectionBy: 'Shawn Baker',
      answer: `Einzelne Erfahrungsberichte mit reiner Fleischkost sind keine Studie. Pflanzliche Eiweiße aus Hülsenfrüchten und Getreide ergänzen sich zu einem vollständigen Aminosäureprofil – Ful mit Brot ist ein klassisches Beispiel. Und die berühmte Mittelmeerkost, die als besonders herzgesund gilt, war auf Kreta stark vom orthodoxen Fasten geprägt; Forscher nannten das Fasten ihr „verborgenes Merkmal".`,
      sources: [sarri2004],
      followUps: [
        {
          id: 'kreta-veraltet',
          objection: `Die Kreta-Daten aus der Seven-Countries-Studie stammen aus den 1960ern. Heute essen Kreter Fast Food.`,
          objectionBy: 'Ernährungsepidemiologe',
          answer: `Richtig – und genau das stützt meinen Punkt: Als sich die Ernährung auf Kreta verwestlichte und das Fasten nachließ, verschlechterten sich viele Gesundheitswerte. Die Studien von Sarri und Kollegen stammen übrigens aus den 2000er-Jahren und vergleichen heutige Faster mit Nichtfastern derselben Region.`,
          followUps: [
            {
              id: 'korrelation-kausalitaet',
              objection: `Korrelation ist keine Kausalität. Wer fastet, raucht vielleicht weniger und lebt insgesamt gesünder.`,
              objectionBy: 'Ernährungsepidemiologe',
              answer: `Ein berechtigter Einwand. Die kretischen Studien haben Werte vor und nach den Fastenzeiten verglichen, was Störfaktoren teilweise ausgleicht – aber nicht ganz. Deshalb behaupte ich auch nicht, Fasten sei eine bewiesene Therapie. Ich sage nur: Für „ungesund" gibt es keine Belege, und die vorhandenen Daten sind eher günstig.`,
              followUps: [
                {
                  id: 'gesund-also-wahr',
                  objection: `Und selbst wenn das Fasten gesund wäre – das beweist nichts über Gott.`,
                  objectionBy: 'Richard Dawkins',
                  answer: `Völlig einverstanden, und ich behaupte das auch nicht. Gesundheitlicher Nutzen ist kein Wahrheitsbeweis. Hier ging es nur um den Vorwurf, das koptische Fasten sei ungesund – und der trägt nicht. Ob Gott existiert und ob Christus auferstanden ist, entscheidet sich an anderen Gründen, über die ich gern mit dir spreche.`,
                  questionsBack: [`Wollen wir über die Gründe sprechen, die tatsächlich für oder gegen den Glauben sprechen?`],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Kennst du die Ausnahmen, die die koptische Kirche für Kranke, Schwangere, Stillende und Kinder vorsieht?`,
    `Welche Studie zeigt, dass orthodoxes Fasten gesundheitlich schadet?`,
    `Warum gilt die kretische Mittelmeerkost als gesund – und welche Rolle spielte dabei das Fasten?`,
    `Ist ein Rhythmus aus Fasten- und Festzeiten dasselbe wie dauerhafte Mangelernährung?`,
    `Muss jede Übung medizinisch begründet sein, um sinnvoll zu sein?`,
  ],
  avoid: [
    `„Fasten heilt Krebs" oder andere medizinische Wunderversprechen.`,
    `Behaupten, Kopten könnten durch Fasten keinen Nährstoffmangel bekommen – mit schlechter Planung ist das möglich.`,
    `Kranke oder Schwangere zum Fasten drängen – das widerspricht der Lehre der Kirche.`,
    `Aus gesundheitlichem Nutzen auf die Wahrheit des Glaubens schließen.`,
  ],
  concessions: [
    `Langzeitstudien speziell zum koptischen Fasten sind rar; die meisten Daten stammen vom sehr ähnlichen griechisch-orthodoxen Fasten.`,
    `Pflanzliche Kost erfordert Aufmerksamkeit für Vitamin B12, Kalzium und Eisen.`,
    `Für Menschen mit Essstörungen oder bestimmten Erkrankungen kann Fasten riskant sein; nicht überall werden die kirchlichen Ausnahmen gut kommuniziert.`,
  ],
  furtherReading: [
    sarri2004,
    trepanowski2010,
    { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Die Spiritualität des Fastens', status: 'paraphrase' },
    and2016,
  ],
  difficulty: 1,
  tags: ['Fasten', 'Koptisches Fasten', 'Vegane Ernährung', 'Mittelmeerkost', 'Intervallfasten', 'Gesundheit', 'Askese'],
  related: ['glaube-alltag-gesundheit/glaube-statt-therapie', 'glaube-alltag-gesundheit/gebet-selbstgespraech', 'psychologie/religion-schadet-psyche', 'medizin-wunder/kirche-gegen-medizin'],
};

export default claim;
