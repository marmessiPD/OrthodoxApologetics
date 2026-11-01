import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'saekularisierung-unaufhaltsam',
  title: `„Religion stirbt mit Wohlstand und Bildung aus."`,
  proponents: [
    { name: 'Steve Bruce', role: 'Religionssoziologe, University of Aberdeen', work: 'God Is Dead: Secularization in the West (2002)' },
    { name: 'Pippa Norris & Ronald Inglehart', role: 'Politikwissenschaftler (Harvard bzw. Michigan, Inglehart gest. 2021)', work: 'Sacred and Secular: Religion and Politics Worldwide (2004)' },
    { name: 'Ronald Inglehart', role: 'Politikwissenschaftler, World Values Survey', work: 'Religion\'s Sudden Decline (2021)' },
    { name: 'David Voas & Mark Chaves', role: 'Religionssoziologen', work: '„Is the United States a Counterexample to the Secularization Thesis?", American Journal of Sociology 121 (2016)' },
  ],
  steelman: `In fast allen wohlhabenden Gesellschaften nimmt die Religiosität von Generation zu Generation ab: Jede jüngere Kohorte geht seltener in die Kirche, betet weniger und glaubt weniger als ihre Eltern. Selbst die USA, lange das große Gegenbeispiel, folgen inzwischen diesem Muster (Voas & Chaves 2016). Norris und Inglehart erklären das mit „existenzieller Sicherheit": Wo Menschen vor Hunger, Krankheit und Gewalt geschützt sind, verliert Religion ihre Funktion als Trost. Bildung und Wissenschaft ersetzen religiöse Erklärungen. Nach einer Pew-Analyse von 2025 ist der Anteil der Christen an der Weltbevölkerung zwischen 2010 und 2020 gesunken, der Anteil der Konfessionslosen gestiegen. Das Wachstum in Afrika ist nur eine Frage der Zeit – sobald diese Länder reich werden, säkularisieren sie ebenfalls, wie Südkorea schon heute zeigt.`,
  biblical: {
    summary: `Die Bibel kündigt beides an: weltweites Wachstum und Abfall. Das Reich Gottes gleicht einem Senfkorn, das zum Baum wird, und einem Sauerteig, der den ganzen Teig durchsäuert (Mt 13,31–33); die Pforten der Hölle werden die Kirche nicht überwältigen (Mt 16,18); in der Vollendung steht eine Schar „aus allen Heiden und Völkern und Sprachen" vor dem Thron (Offb 7,9). Zugleich warnt Jesus: „Wenn des Menschen Sohn kommen wird, meinst du, daß er auch werde Glauben finden auf Erden?" (Lk 18,8), und „die Liebe wird in vielen erkalten" (Mt 24,12). Christen sollten also weder triumphieren noch verzagen: Der Glaube schwindet an manchen Orten und blüht an anderen auf – so war es von Anfang an.`,
    detail: `- **Apg 1,8**: „Ihr werdet meine Zeugen sein zu Jerusalem und in ganz Judäa und Samarien und bis an das Ende der Erde" – das Christentum ist von Anfang an eine wandernde, missionarische Bewegung, deren Zentren sich verschieben (Jerusalem, Antiochien, Alexandrien, Rom, Konstantinopel, Europa, heute Afrika und Asien).
- **Pred 3,11**: Gott hat „die Ewigkeit in ihr Herz gelegt" (so Elberfelder) – die religiöse Frage gehört zum Menschsein und verschwindet nicht mit Wohlstand.
- **Lk 12,16–21**: Das Gleichnis vom reichen Kornbauern zeigt, dass Wohlstand Gott vergessen lassen kann – ein biblischer Hinweis auf den Zusammenhang, den die Säkularisierungsforschung beobachtet.`,
    sources: [
      { kind: 'bibel', work: 'Matthäus', ref: '13,31–32', quote: `Das Himmelreich ist gleich einem Senfkorn, das ein Mensch nahm und säte es auf seinen Acker; welches das kleinste ist unter allem Samen; wenn es aber erwächst, so ist es das größte unter dem Kohl und wird ein Baum.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '16,18', quote: `… und auf diesen Felsen will ich bauen meine Gemeinde, und die Pforten der Hölle sollen sie nicht überwältigen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '18,8', quote: `Doch wenn des Menschen Sohn kommen wird, meinst du, daß er auch werde Glauben finden auf Erden?`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Offenbarung', ref: '7,9', quote: `Darnach sah ich, und siehe, eine große Schar, welche niemand zählen konnte, aus allen Heiden und Völkern und Sprachen, vor dem Stuhl stehend und vor dem Lamm.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Prediger', ref: '3,11', quote: `Er hat alles schön gemacht zu seiner Zeit; auch hat er die Ewigkeit in ihr Herz gelegt.`, translation: 'Elberfelder 1905', status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die koptische Kirche ist selbst ein lebendiges Gegenbeispiel zur These vom unaufhaltsamen Niedergang: Sie hat fast zwei Jahrtausende überlebt, davon den größten Teil als bedrängte Minderheit. Im 20. Jahrhundert erlebte sie gerade unter gebildeten, städtischen jungen Menschen eine Erneuerung: Die Sonntagsschulbewegung (Erzdiakon Habib Girgis) prägte eine Generation, aus der Universitätsabsolventen hervorgingen, die Mönche wurden und die Klöster erneuerten – darunter der spätere Papst Schenuda III., ein Geschichtsabsolvent der Universität Kairo. Heute ist die koptische Kirche durch Auswanderung auf allen Kontinenten präsent. Tertullian schrieb schon um 200: „Das Blut der Christen ist ein Same."`,
    sources: [
      { kind: 'kirchenvater', author: 'Tertullian', work: 'Apologeticum', ref: '50,13', year: '197', quote: `Wir werden zahlreicher, sooft wir von euch niedergemäht werden: Ein Same ist das Blut der Christen.`, original: 'Plures efficimur, quotiens metimur a vobis: semen est sanguis Christianorum.', translation: 'eigene Übersetzung', status: 'verbatim', note: 'Tertullian ist keine Lehrautorität, aber ein früher Zeuge.' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '46–55', quote: `Obwohl Philosophen, Herrscher und Götterkulte sich dem Glauben widersetzten, breitete sich die Lehre Christi überall aus – ein Zeichen, dass er lebt und wirkt.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `**Forschungsstand:** Die klassische Säkularisierungsthese – Modernisierung führt zwangsläufig zum Verschwinden der Religion – gilt heute als zu einfach. Ihr früherer Hauptvertreter Peter L. Berger widerrief sie 1999: Die Welt sei, mit Ausnahmen, „so leidenschaftlich religiös wie eh und je". Die Soziologin Grace Davie beschreibt Europa als „Ausnahmefall" (2002), nicht als Modell für die Welt. Unbestritten ist allerdings ein deutlicher, anhaltender Rückgang kirchlicher Bindung in Westeuropa, Nordamerika, Australien und Teilen Ostasiens.`,
    detail: `**Globale Zahlen (Pew Research Center):**
- Projektion 2015: Die Zahl der Christen wächst von rund 2,2 Mrd. (2010) auf rund 2,9 Mrd. (2050); bis 2050 leben rund 4 von 10 Christen in Subsahara-Afrika; der Anteil der Konfessionslosen an der Weltbevölkerung sinkt wegen niedriger Geburtenraten.
- Bestandsaufnahme 2025 (für 2010–2020): Der Anteil der Christen an der Weltbevölkerung sank leicht (auf knapp 29 %), vor allem durch Abwanderung aus den Kirchen in Europa und Amerika; die Zahl der Konfessionslosen stieg; Subsahara-Afrika hat Europa als Region mit den meisten Christen überholt (Angaben gerundet).
- USA: Nach jahrzehntelangem Rückgang scheint sich der christliche Bevölkerungsanteil seit etwa 2019 stabilisiert zu haben (Pew Religious Landscape Study 2023–24).

**Gegenbeispiele zur „Gesetzes"-These:** Südkorea erlebte während seiner rasanten Industrialisierung ein enormes christliches Wachstum (2015: knapp 28 % Christen), auch wenn es inzwischen stagniert; in Russland stieg der Anteil der Menschen, die sich als orthodox bezeichnen, nach 1991 stark an (Pew 2017); in den USA geht höhere Bildung nicht mit weniger Kirchgang einher (Schwadel 2011). Eric Kaufmann (2010) zeigt zudem: Religiöse Familien haben mehr Kinder, was langfristig die Säkularisierung bremst.`,
    sources: [
      { kind: 'fachliteratur', author: 'Peter L. Berger (Hg.)', work: 'The Desecularization of the World: Resurgent Religion and World Politics', ref: 'S. 2', year: '1999', quote: `Die Annahme, wir lebten in einer säkularisierten Welt, ist falsch. Die heutige Welt ist, mit einigen Ausnahmen, auf die ich gleich zu sprechen komme, so leidenschaftlich religiös wie eh und je, an manchen Orten mehr denn je.`, original: 'The assumption that we live in a secularized world is false. The world today, with some exceptions to which I will come presently, is as furiously religious as it ever was, and in some places more so than ever.', translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'fachliteratur', author: 'Grace Davie', work: 'Europe: The Exceptional Case. Parameters of Faith in the Modern World', year: '2002', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Pew Research Center', work: 'The Future of World Religions: Population Growth Projections, 2010–2050', year: '2015', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Pew Research Center', work: 'How the Global Religious Landscape Changed From 2010 to 2020', year: '2025', status: 'paraphrase', note: 'Ehrlich nennen: Der christliche Anteil an der Weltbevölkerung ist in diesem Zeitraum leicht gesunken.' },
      { kind: 'fachliteratur', author: 'Eric Kaufmann', work: 'Shall the Religious Inherit the Earth? Demography and Politics in the Twenty-First Century', year: '2010', status: 'paraphrase', note: 'Kaufmann ist selbst säkular.' },
      { kind: 'gegner', author: 'Pippa Norris & Ronald Inglehart', work: 'Sacred and Secular: Religion and Politics Worldwide', year: '2004', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Sogar der einstige Hauptvertreter der Säkularisierungsthese, Peter Berger, hat sie 1999 widerrufen: Die Welt sei „so leidenschaftlich religiös wie eh und je". Das Christentum wächst vor allem in Afrika und Teilen Asiens; Europa ist die Ausnahme, nicht das Vorbild (Grace Davie). Pew rechnet bis 2050 mit rund 2,9 Milliarden Christen, und religiöse Familien haben mehr Kinder (Eric Kaufmann). Ehrlich gesagt: Im wohlhabenden Westen ist der Rückgang der Kirchen real – aber das ist eine regionale Entwicklung, kein Naturgesetz der Geschichte.`,
  keyPoints: [
    `**Berger hat widerrufen:** Der bekannteste Säkularisierungstheoretiker nannte seine eigene frühere These 1999 „im Wesentlichen falsch".`,
    `**Europa ist der Sonderfall:** Weltweit bleibt die große Mehrheit der Menschen religiös; Subsahara-Afrika ist heute die Region mit den meisten Christen.`,
    `**Gegenbeispiele zur „Gesetzmäßigkeit":** Südkoreas Christentum wuchs mit der Industrialisierung; in Russland stieg die orthodoxe Selbstzuordnung nach 1991; in den USA sind Gebildete nicht seltener in der Kirche.`,
    `**Demografie:** Religiöse Menschen haben im Schnitt mehr Kinder; Kaufmann (selbst säkular) erwartet deshalb langfristig eher einen religiöseren Westen.`,
    `**Ehrlich bleiben:** Der Anteil der Christen ist 2010–2020 leicht gesunken, und im Westen verlieren die Kirchen Mitglieder. Christen sollten das als Ruf zur Umkehr und Mission lesen, nicht schönreden.`,
    `**Mehrheit ist kein Wahrheitsbeweis** – in beide Richtungen. Soziologie widerlegt nur die Behauptung der Unausweichlichkeit; über Wahrheit entscheiden andere Gründe.`,
  ],
  voices: [
    {
      person: 'peter-berger',
      role: 'als Religionssoziologe, der seine Theorie revidierte',
      text: `Berger hatte in den 1960er-Jahren mit *The Sacred Canopy* die Säkularisierungstheorie mitgeprägt. Dreißig Jahre später revidierte er sie öffentlich: Die Moderne habe nicht notwendig zur Säkularisierung geführt, sondern in vielen Weltregionen zu kraftvollen religiösen Gegenbewegungen. Später formulierte er, die Moderne bringe nicht Säkularität, sondern Pluralität hervor – das Nebeneinander vieler Weltanschauungen, unter denen sich Menschen bewusst entscheiden müssen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Peter L. Berger', work: 'The Desecularization of the World', year: '1999', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Peter L. Berger', work: 'The Many Altars of Modernity', year: '2014', status: 'paraphrase' },
      ],
    },
    {
      person: 'rodney-stark',
      role: 'als Religionssoziologe',
      text: `Stark erklärte die Säkularisierungsthese 1999 in einem vielzitierten Aufsatz für tot („Secularization, R.I.P."). Er argumentierte, dass Religiosität vor allem vom religiösen „Angebot" abhängt: Wo Kirchen staatlich privilegiert und träge sind (wie in vielen Ländern Europas), schwindet die Beteiligung; wo lebendige Gemeinschaften um Menschen werben, bleibt sie hoch. Zudem zeigte er in historischen Studien, dass auch im Mittelalter die Frömmigkeit der breiten Masse oft überschätzt wird – ein „Zeitalter des Glaubens", von dem der Abstieg begonnen hätte, hat es so nie gegeben.`,
      sources: [
        { kind: 'fachliteratur', author: 'Rodney Stark', work: 'Secularization, R.I.P.', ref: 'Sociology of Religion 60 (1999), 249–273', year: '1999', status: 'paraphrase' },
      ],
    },
    {
      person: 'philip-jenkins',
      role: 'als Historiker des globalen Christentums',
      text: `Jenkins hat in *The Next Christendom* (2002) gezeigt, dass sich der Schwerpunkt des Christentums nach Süden verlagert: Der typische Christ des 21. Jahrhunderts ist eher eine Frau in Nigeria oder Brasilien als ein Mann in Deutschland. In *The Lost History of Christianity* erinnert er zugleich an die Kirchen Asiens und Afrikas – darunter die koptische –, die über Jahrhunderte unter schwierigen Bedingungen den Glauben bewahrten. Wer nur auf Westeuropa schaut, verwechselt eine Provinz mit der Welt.`,
      sources: [
        { kind: 'fachliteratur', author: 'Philip Jenkins', work: 'The Next Christendom: The Coming of Global Christianity', year: '2002', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Philip Jenkins', work: 'The Lost History of Christianity', year: '2008', status: 'paraphrase' },
      ],
    },
    {
      person: 'shenouda-iii',
      role: 'als Zeuge der koptischen Erneuerung',
      text: `Papst Schenuda III. (als Nazir Gayed Absolvent der Universität Kairo) gehörte zur Generation der Sonntagsschulbewegung, die im modernen, städtischen Ägypten des 20. Jahrhunderts eine geistliche Erneuerung trug: Gebildete junge Männer und Frauen engagierten sich in Katechese, viele traten ins Kloster ein. Als Papst baute er die Sonntagsschularbeit aus, hielt jahrzehntelang wöchentliche Vorträge vor Tausenden und gründete Gemeinden in der weltweiten koptischen Diaspora. Seine Biografie widerlegt die Gleichung „Bildung = Glaubensverlust".`,
      sources: [
        { kind: 'koptisch', work: 'Biografie Papst Schenudas III. (Koptisch-orthodoxes Patriarchat)', status: 'paraphrase' },
      ],
    },
    {
      person: 'tertullian',
      role: 'als Apologet der verfolgten Kirche',
      text: `Tertullian hielt den römischen Behörden entgegen, dass Verfolgung das Christentum nicht auslöscht, sondern ausbreitet: „Das Blut der Christen ist ein Same." Die Geschichte gab ihm recht – eine kleine, verachtete Bewegung wurde innerhalb von drei Jahrhunderten zur prägenden Religion des Reiches. Sein Satz ist für Kopten, die bis heute Märtyrer haben, keine Rhetorik, sondern Erfahrung.`,
      sources: [
        { kind: 'kirchenvater', author: 'Tertullian', work: 'Apologeticum', ref: '50,13', status: 'paraphrase', note: 'Tertullian ist keine Lehrautorität.' },
      ],
    },
  ],
  dialog: [
    {
      id: 'europa-zeigt-zukunft',
      objection: `Schau nach Europa: leere Kirchen, wachsende Konfessionslosigkeit. Das ist die Zukunft der ganzen Welt.`,
      objectionBy: 'Steve Bruce',
      answer: `Grace Davie hat gezeigt, dass Europa der Ausnahmefall ist, nicht das Modell. Weltweit bleibt die große Mehrheit religiös, und der Schwerpunkt des Christentums hat sich nach Afrika, Lateinamerika und Asien verlagert. Selbst Peter Berger, der die Säkularisierungsthese einst prägte, hat sie 1999 als im Wesentlichen falsch widerrufen.`,
      followUps: [
        {
          id: 'afrika-holt-auf',
          objection: `Sobald Afrika reich wird, säkularisiert es auch – siehe Südkorea, wo die Kirchen jetzt schrumpfen.`,
          objectionBy: 'Ronald Inglehart',
          answer: `Möglich – Prognosen sind unsicher. Aber gerade Südkorea zeigt, dass Wohlstand und Glaube nicht automatisch Gegensätze sind: Das Christentum wuchs dort während der rasanten Industrialisierung von einer kleinen Minderheit auf knapp 28 % der Bevölkerung (2015). Dass es heute stagniert, ist ehrlich zu sagen – ein „Gesetz" ist das trotzdem nicht.`,
          followUps: [
            {
              id: 'usa-auch',
              objection: `Auch die USA säkularisieren inzwischen, das haben Voas und Chaves 2016 gezeigt.`,
              objectionBy: 'David Voas & Mark Chaves',
              answer: `Das stimmt für die vergangenen Jahrzehnte, und ich gebe es zu. Der Rückgang betraf vor allem nominelle Mitglieder; nach der jüngsten großen Pew-Studie scheint sich der christliche Anteil seit etwa 2019 stabilisiert zu haben. Wenn bloße Kulturchristen wegfallen, ist das nicht das Ende des Glaubens, sondern oft seine Klärung.`,
              sources: [
                { kind: 'wissenschaft', author: 'Pew Research Center', work: 'Religious Landscape Study 2023–24', year: '2025', status: 'paraphrase' },
              ],
              followUps: [
                {
                  id: 'kohortenersatz-motor',
                  objection: `Eine Stabilisierung ist nur ein Plateau. Der Motor der Säkularisierung ist der Generationenwechsel: Jede jüngere Kohorte ist weniger religiös als ihre Eltern, und religiöse Eltern geben ihren Glauben nur noch mit etwa halber Wahrscheinlichkeit weiter. Das läuft langsam, aber sicher.`,
                  objectionBy: 'Steve Bruce / David Voas',
                  answer: `Für Westeuropa beschreibt das die Entwicklung der letzten Jahrzehnte zutreffend – das gebe ich offen zu. Aber es ist eine Beschreibung, kein Naturgesetz: Ob eine Generation den Glauben weitergibt, hängt davon ab, wie er gelebt wird – nicht vom Bruttoinlandsprodukt. Global wirkt zudem die Gegenkraft der Demografie und der Bekehrungen: Die Mehrheit der Christen lebt heute im globalen Süden, wo die Gemeinden jung sind. Und die Soziologie hat schon einmal ein „Gesetz" verkündet und musste es widerrufen.`,
                  detail: `Voas spricht von „fuzzy fidelity": Viele Menschen in Europa sind weder überzeugt religiös noch entschieden säkular, und diese lose Bindung wird schwächer weitergegeben. Daraus folgt eine ernste Aufgabe für Kirchen: Glauben nicht nur als Herkunft, sondern als gelebte Beziehung weiterzugeben – in der Familie, in der Liturgie, im Unterricht. Die koptische Kirche hat in Ägypten und in der Diaspora mit der Sonntagsschulbewegung (Habib Girgis, 20. Jahrhundert) genau darauf geantwortet und gilt als bemerkenswert lebendige Kirche mit vielen jungen Mitgliedern.

Peter Berger, der die Säkularisierungsthese in den 1960ern selbst vertreten hatte, schloss später: Moderne führt nicht notwendig zu Säkularität, sondern zu **Pluralität** – Glaube wird weniger selbstverständlich und mehr zur bewussten Entscheidung.`,
                  voices: [
                    {
                      person: 'peter-berger',
                      role: 'als Religionssoziologe',
                      text: `Berger argumentiert in *The Many Altars of Modernity* (2014), dass Modernisierung nicht zwangsläufig Religion verdrängt, sondern Pluralismus erzeugt: Menschen leben inmitten vieler Weltanschauungen, und Glaube wird zur Wahl statt zum Schicksal. Das schwächt ererbte, unreflektierte Religiosität – kann aber bewussten, persönlichen Glauben stärken.`,
                      sources: [
                        { kind: 'fachliteratur', author: 'Peter L. Berger', work: 'The Many Altars of Modernity: Toward a Paradigm for Religion in a Pluralist Age', year: '2014', status: 'paraphrase' },
                      ],
                    },
                  ],
                  sources: [
                    { kind: 'gegner', author: 'David Voas', work: '„The Rise and Fall of Fuzzy Fidelity in Europe", European Sociological Review 25 (2)', year: '2009', status: 'paraphrase' },
                  ],
                  questionsBack: [
                    `Ist der Generationenwechsel ein Naturgesetz – oder hängt er davon ab, wie Eltern und Gemeinden den Glauben leben?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'bildung-vertreibt-glauben',
      objection: `Je gebildeter ein Mensch, desto weniger religiös. Die meisten Wissenschaftler sind Atheisten.`,
      objectionBy: 'Richard Dawkins',
      answer: `Im Ländervergleich gibt es einen solchen Zusammenhang teilweise – aber innerhalb der USA gehen Gebildete eher häufiger zur Kirche als weniger Gebildete (Schwadel 2011). Und eine weltweite Studie unter Wissenschaftlern (Ecklund u. a., *Secularity and Science*, 2019) fand, dass in vielen Ländern – etwa Indien, Italien, Türkei oder Taiwan – die Mehrheit der Wissenschaftler religiös ist. „Wissenschaftler sind Atheisten" ist vor allem ein Bild aus britischen und amerikanischen Elite-Universitäten.`,
      sources: [
        { kind: 'wissenschaft', author: 'Elaine Howard Ecklund, David R. Johnson u. a.', work: 'Secularity and Science: What Scientists Around the World Really Think About Religion', year: '2019', status: 'paraphrase' },
        { kind: 'wissenschaft', author: 'Philip Schwadel', work: 'The Effects of Education on Americans\' Religious Practices, Beliefs, and Affiliations', ref: 'Review of Religious Research 53 (2011)', year: '2011', status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'nationale-akademie',
          objection: `Unter den Mitgliedern der US-Akademie der Wissenschaften glauben nur etwa 7 % an einen persönlichen Gott (Larson & Witham, Nature 1998).`,
          objectionBy: 'Larson & Witham',
          answer: `Das ist ein echter Befund. Er sagt aber mehr über Auswahl und Milieu einer kleinen Elite als über die Wahrheit des Glaubens – ein Argument aus Autorität. Viele herausragende Wissenschaftler waren und sind gläubig: Francis Collins leitete das Humangenomprojekt, John Polkinghorne war Teilchenphysiker in Cambridge, Georges Lemaître begründete die Urknalltheorie.`,
          sources: [
            { kind: 'wissenschaft', author: 'Edward J. Larson & Larry Witham', work: 'Leading scientists still reject God', ref: 'Nature 394 (1998), 313', year: '1998', status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'ausnahmen-bestaetigen-regel',
              objection: `Collins, Polkinghorne und Lemaître sind Ausnahmen, die die Regel bestätigen. Wer wirklich tief in die Wissenschaft eindringt, verliert den Glauben.`,
              objectionBy: 'Richard Dawkins',
              answer: `Die Zahlen zeigen etwas anderes. Ecklunds weltweite Befragung fand, dass in mehreren Ländern die Mehrheit der Wissenschaftler religiös ist, und dass die meisten Wissenschaftler – auch nichtreligiöse – keinen grundsätzlichen Konflikt zwischen Wissenschaft und Religion sehen. Und historisch waren die Begründer der modernen Naturwissenschaft – Kopernikus, Kepler, Galilei, Boyle, Newton, Faraday, Maxwell, Mendel – überwiegend gläubige Christen. Das sind keine Ausnahmen, sondern ein großer Teil der Wissenschaftsgeschichte.`,
              detail: `Ecklund und Kollegen befragten über 20.000 Biologen und Physiker in acht Regionen (u. a. Indien, Italien, Taiwan, Türkei, Hongkong, USA, Großbritannien, Frankreich) und führten zahlreiche Interviews. Ergebnis: Das Bild vom atheistischen Wissenschaftler stimmt vor allem für Teile der angelsächsischen und französischen Eliten; in anderen Ländern sind Wissenschaftler oft ähnlich religiös wie die Gesamtbevölkerung. Wichtig: Selbst wenn alle Wissenschaftler Atheisten wären, wäre das ein Argument aus Autorität – die Frage nach Gott ist keine naturwissenschaftliche Messfrage.`,
              followUps: [
                {
                  id: 'experten-wissen-es-besser',
                  objection: `Aber wenn die klügsten Köpfe einer Gesellschaft mehrheitlich nicht glauben, sollte dir das zu denken geben. Wir vertrauen Experten doch sonst auch.`,
                  objectionBy: 'Steven Pinker',
                  answer: `Wir vertrauen Experten **in ihrem Fach**. Einem Physiker glaube ich, was er über Quarks sagt – aber die Frage, ob es einen Grund des Seins gibt, ist eine philosophische Frage, in der er kein größerer Experte ist als ein Philosoph oder Theologe. Interessant ist: Unter Fachphilosophen, die sich beruflich mit der Gottesfrage beschäftigen (Religionsphilosophen), sind Theisten deutlich häufiger als unter Philosophen insgesamt. Die Kompetenz liegt also nicht eindeutig auf einer Seite.`,
                  detail: `Nach der PhilPapers-Umfrage (Bourget & Chalmers) sind die meisten Philosophen insgesamt Atheisten, unter den Spezialisten für Religionsphilosophie aber bildet der Theismus eine Mehrheit. Skeptiker erklären das mit Selbstauswahl (Gläubige wählen das Fach), Theisten mit Sachkenntnis (wer die Argumente genau kennt, findet sie stärker). Für dich genügt: Expertenstatistiken entscheiden diese Frage nicht – die Argumente tun es. Darum lohnt es sich, sie kennenzulernen.`,
                  sources: [
                    { kind: 'wissenschaft', author: 'David Bourget & David J. Chalmers', work: '„What Do Philosophers Believe?", Philosophical Studies 170', year: '2014', status: 'paraphrase', note: 'Befragung 2009; eine Folgeumfrage erschien 2023. Zahlen nach Fachgebiet unterscheiden sich deutlich.' },
                  ],
                  questionsBack: [
                    `Ist ein Molekularbiologe automatisch ein Experte für die Frage, warum es überhaupt etwas gibt?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'existenzielle-sicherheit',
      objection: `Norris und Inglehart haben es erklärt: Religion ist eine Antwort auf Unsicherheit. Wo existenzielle Sicherheit wächst, braucht man sie nicht mehr.`,
      objectionBy: 'Pippa Norris & Ronald Inglehart',
      answer: `Der statistische Zusammenhang ist teilweise real. Aber er sagt etwas über die Funktion, nicht über die Wahrheit von Religion – das wäre ein genetischer Fehlschluss. Zudem breitete sich das frühe Christentum gerade auch unter gebildeten Städtern aus (Rodney Stark), und reiche, sichere Gesellschaften leiden auffällig an Sinnkrisen: Die Global Flourishing Study (2025) fand in wohlhabenden Ländern hohe finanzielle Sicherheit, aber vergleichsweise wenig erlebten Lebenssinn.`,
      followUps: [
        {
          id: 'nur-trost',
          objection: `Also ist Religion eben doch nur Trost für Unsichere.`,
          objectionBy: 'Karl Marx (sinngemäß)',
          answer: `Das Christentum ist ein schlechter Trostspender: Es verlangt Selbstverleugnung, Feindesliebe und Verzicht (Lk 9,23). Und wenn Sicherheit den Glauben schwächt, kann das auch heißen, dass Wohlstand von den großen Fragen ablenkt – Jesus warnt im Gleichnis vom reichen Kornbauern genau davor (Lk 12,16–21). Ob Gott existiert, entscheidet weder Unsicherheit noch Wohlstand.`,
          followUps: [
            {
              id: 'soziale-bedingtheit-gegen-wahrheit',
              objection: `Die Soziologie zeigt, dass Glaube von Herkunft, Milieu und Lebenslage abhängt. Wer in Kairo geboren wird, wird Kopte oder Muslim, wer in Stockholm aufwächst, wird säkular. Eine Überzeugung, die so offensichtlich sozial bedingt ist, kann keinen Wahrheitsanspruch erheben.`,
              objectionBy: 'Steve Bruce',
              answer: `Dann gilt das auch für den Säkularismus: Wer in Stockholm aufwächst, wird eben säkular – ist der Unglaube deshalb falsch? Peter Berger nannte das „die Relativierer relativieren": Die Wissenssoziologie zeigt, wie Überzeugungen entstehen, aber sie gilt für alle Weltanschauungen gleichermaßen und entscheidet nicht, welche wahr ist. Die Wahrheitsfrage muss man mit Gründen prüfen – genau dazu lade ich ein.`,
              detail: `Berger entwickelte diesen Gedanken in *A Rumor of Angels* (1969): Wenn alle Überzeugungen durch ihre soziale Umgebung „plausibel" gemacht werden, dann auch die moderne säkulare Weltsicht. Die Soziologie befreit uns damit von der Arroganz, die eigene Zeit für den Maßstab aller Wahrheit zu halten. Berger sprach von „Signalen der Transzendenz" im Alltag – Ordnung, Spiel, Hoffnung, Empörung über das Böse, Humor –, die über die rein natürliche Welt hinausweisen.

Außerdem: Das frühe Christentum wuchs gerade **gegen** sein Milieu – in einer feindlichen Umwelt, unter Verfolgung. Die koptische Kirche hat ihren Glauben über Jahrhunderte als Minderheit unter Druck bewahrt; das passt schlecht zu der Vorstellung, Glaube sei bloßes Mitschwimmen in der Umgebung.`,
              voices: [
                {
                  person: 'peter-berger',
                  role: 'als Wissenssoziologe',
                  text: `Berger zeigt in *A Rumor of Angels*, dass die Wissenssoziologie ein zweischneidiges Schwert ist: Sie relativiert nicht nur die Religion, sondern auch die Relativierer selbst. Wer die soziale Bedingtheit des Glaubens betont, muss die soziale Bedingtheit seines eigenen Unglaubens zugeben – und dann bleibt nur die ehrliche Prüfung der Gründe.`,
                  sources: [
                    { kind: 'fachliteratur', author: 'Peter L. Berger', work: 'A Rumor of Angels: Modern Society and the Rediscovery of the Supernatural', year: '1969', status: 'paraphrase' },
                  ],
                },
              ],
              questionsBack: [
                `Wenn soziale Bedingtheit eine Überzeugung widerlegt – was folgt dann für deinen eigenen Säkularismus?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'nur-durch-geburten',
      objection: `Ihr wachst nur durch hohe Geburtenraten, nicht durch Überzeugung. Das ist kein Argument für euren Glauben.`,
      objectionBy: 'Säkularer Soziologe',
      answer: `Einverstanden: Demografie beweist keine Wahrheit – genauso wenig wie Säkularisierung eine Widerlegung ist. Ich führe die Zahlen nur gegen die Behauptung an, Religion sterbe zwangsläufig aus. Und es gibt sehr wohl Wachstum durch Bekehrung, etwa in Afrika und in Teilen Asiens; Afrika zählte um 1900 schätzungsweise rund zehn Millionen Christen, heute weit über 600 Millionen.`,
      followUps: [
        {
          id: 'pew-2025-rueckgang',
          objection: `Pew zeigt 2025 aber: Der Anteil der Christen an der Weltbevölkerung ist gesunken, die Konfessionslosen sind gewachsen.`,
          objectionBy: 'Pew Research Center (2025)',
          answer: `Das stimmt, und ich verschweige es nicht: Zwischen 2010 und 2020 ging der christliche Anteil leicht zurück, vor allem durch Austritte in Europa und Amerika. Zugleich stieg die absolute Zahl der Christen, und Subsahara-Afrika hat Europa als Region mit den meisten Christen überholt. Das Bild ist gemischt – genau das widerlegt die Vorstellung eines einheitlichen, unaufhaltsamen Verfalls.`,
          sources: [
            { kind: 'wissenschaft', author: 'Pew Research Center', work: 'How the Global Religious Landscape Changed From 2010 to 2020', year: '2025', status: 'paraphrase', note: 'Per Websuche geprüft (2026): Christen 2020 rund 2,3 Mrd. (+122 Mio.), Anteil 28,8 % (−1,8 Prozentpunkte); Konfessionslose 24,2 % (2010: 23,3 %); Subsahara-Afrika 30,7 % aller Christen, Europa 22,3 %.' },
          ],
          followUps: [
            {
              id: 'austritte-ueberwiegen',
              objection: `Und Pew zeigt auch, warum: Das Christentum verliert durch Religionswechsel mehr Menschen, als es gewinnt – vor allem junge Erwachsene. Das ist kein demografischer Zufall, sondern eine Abstimmung mit den Füßen.`,
              objectionBy: 'Steve Bruce / Phil Zuckerman',
              answer: `Das ist richtig für viele Länder in Europa, Amerika und Ostasien, und Kirchen sollten das selbstkritisch hören: Wo der Glaube nur Gewohnheit war, verliert er an Kraft. Aber Austritte sind kein Beweis gegen die Wahrheit – sie zeigen, dass Glaube heute eine bewusste Entscheidung geworden ist. Und in Afrika und Teilen Asiens wächst die Kirche auch durch Erwachsene, die sich bewusst taufen lassen. Die Frage, die bleibt, ist nicht „Wer gewinnt die Statistik?", sondern „Was ist wahr?"`,
              detail: `Philip Jenkins beschreibt in *The Next Christendom*, wie sich der Schwerpunkt des Christentums nach Süden verlagert hat: Der „typische" Christ des 21. Jahrhunderts ist eher eine junge Frau in Nigeria oder Brasilien als ein älterer Mann in Europa. Diese Kirchen sind oft charismatisch, bibelorientiert und sozial engagiert – und sie wachsen trotz Armut und Verfolgung. Für die koptische Kirche ist diese Lage vertraut: Sie hat seit dem 7. Jahrhundert als Minderheit überlebt und erlebt in der Diaspora (Nordamerika, Australien, Europa) eine bemerkenswerte Ausbreitung.

Ehrlich bleibt: Die Austritte in den reichen Ländern sind real, und keine Statistik tröstet darüber hinweg. Die christliche Antwort ist nicht Marketing, sondern ein Leben, das die Wahrheit des Evangeliums glaubwürdig macht – „dabei wird jedermann erkennen, daß ihr meine Jünger seid, so ihr Liebe untereinander habt" (Joh 13,35).`,
              voices: [
                {
                  person: 'philip-jenkins',
                  role: 'als Religionshistoriker',
                  text: `Jenkins zeigt in *The Next Christendom* (3. Aufl. 2011), dass die europäische Erfahrung der Säkularisierung global nicht typisch ist. Er warnt davor, die Zukunft des Christentums aus europäischer Perspektive zu beurteilen, und betont das enorme Wachstum in Afrika südlich der Sahara, wo die Zahl der Christen im 20. Jahrhundert explosionsartig gestiegen ist.`,
                  sources: [
                    { kind: 'fachliteratur', author: 'Philip Jenkins', work: 'The Next Christendom: The Coming of Global Christianity', year: '3. Aufl. 2011', status: 'paraphrase' },
                  ],
                },
              ],
              sources: [
                { kind: 'bibel', work: 'Johannes', ref: '13,35', quote: `Dabei wird jedermann erkennen, daß ihr meine Jünger seid, so ihr Liebe untereinander habt.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              questionsBack: [
                `Wenn Afrika wächst und Europa schrumpft – welches von beiden ist nach deiner These „die Zukunft"?`,
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn Säkularisierung ein Gesetz ist – warum hat ihr bekanntester Vertreter Peter Berger sie widerrufen?`,
    `Wie erklärst du das Wachstum des Christentums in Südkorea während der Industrialisierung?`,
    `Ist Europa das Modell der Welt – oder der Sonderfall?`,
    `Selbst wenn der Glaube in reichen Ländern schwindet: Was sagt das über seine Wahrheit?`,
  ],
  avoid: [
    `Den Rückgang der Kirchen im Westen leugnen – er ist gut belegt.`,
    `Mit Wachstum als Wahrheitsbeweis argumentieren – auch der Islam wächst.`,
    `Unbelegte Zahlen über „Massenbekehrungen" in China oder Iran nennen – die Schätzungen sind sehr unsicher.`,
  ],
  concessions: [
    `In Westeuropa, Nordamerika und Teilen Ostasiens nimmt die kirchliche Bindung deutlich ab.`,
    `Der Anteil der Christen an der Weltbevölkerung ist 2010–2020 leicht gesunken.`,
    `Wohlstand und Bildung hängen in vielen Ländervergleichen tatsächlich mit geringerer Religiosität zusammen.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Peter L. Berger (Hg.)', work: 'The Desecularization of the World', year: '1999', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Philip Jenkins', work: 'The Next Christendom', year: '2002', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Eric Kaufmann', work: 'Shall the Religious Inherit the Earth?', year: '2010', status: 'paraphrase' },
    { kind: 'gegner', author: 'Steve Bruce', work: 'Secularization: In Defence of an Unfashionable Theory', year: '2011', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Säkularisierung', 'Religionssoziologie', 'Weltchristentum', 'Demografie'],
  related: [
    'soziologie/saekulare-gesellschaften-gluecklicher',
    'religionskritik/opium-des-volkes',
    'pluralismus/nur-christ-wegen-geburt',
    'psychologie/glaeubige-weniger-intelligent',
  ],
};

export default claim;
