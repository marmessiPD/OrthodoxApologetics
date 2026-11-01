import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'christentum-ohne-nutzen',
  title: `„Die Welt wäre ohne das Christentum besser dran."`,
  proponents: [
    { name: 'Bertrand Russell', role: 'Philosoph und Mathematiker, Literaturnobelpreisträger', work: 'Why I Am Not a Christian (1927)' },
    { name: 'Christopher Hitchens', role: 'Publizist und Religionskritiker', work: 'God Is Not Great (2007)' },
    { name: 'Steven Pinker', role: 'Kognitionspsychologe, Harvard', work: 'Enlightenment Now (2018)' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The God Delusion (2006)' },
  ],
  steelman: `Bertrand Russell schrieb 1927, die christliche Religion, wie sie in ihren Kirchen organisiert ist, sei der Hauptfeind des moralischen Fortschritts in der Welt gewesen und sei es noch. Die Bilanz scheint ihm recht zu geben: Die Kirche verurteilte Galilei, bekämpfte Darwin, verteidigte lange Sklaverei, Monarchie und Ständegesellschaft, verweigerte Frauen Rechte, verfolgte Homosexuelle und Andersgläubige. Fortschritt – Wissenschaft, Demokratie, Menschenrechte, Frauenrechte, Medizin – kam aus Renaissance, Aufklärung und säkularem Humanismus, meist gegen den Widerstand der Kirchen. Krankenhäuser und Wohltätigkeit gab es auch in buddhistischen, islamischen und anderen Kulturen. Wenn man Kreuzzüge, Inquisition, Religionskriege und Unterdrückung gegen ein paar karitative Einrichtungen aufrechnet, fällt die Bilanz klar aus: Ohne das Christentum wäre die Welt freier, vernünftiger und menschlicher.`,
  biblical: {
    summary: `Die Bibel legt die Grundsteine dessen, was wir heute als selbstverständlich ansehen: Jeder Mensch ist Gottes **Ebenbild** (Gen 1,27) – unabhängig von Stand, Volk, Geschlecht, Gesundheit oder Nutzen. Christus identifiziert sich mit den Geringsten: „Was ihr getan habt einem unter diesen meinen geringsten Brüdern, das habt ihr mir getan" (Mt 25,40). Das Gleichnis vom barmherzigen Samariter erweitert den Begriff des Nächsten über jede Volks- und Religionsgrenze hinaus (Lk 10,25–37). „Ein reiner und unbefleckter Gottesdienst vor Gott dem Vater ist der: die Waisen und Witwen in ihrer Trübsal besuchen" (Jak 1,27). Jesus beginnt sein Wirken mit der Ankündigung, den Armen das Evangelium zu bringen, den Gefangenen Befreiung und den Zerschlagenen Freiheit (Lk 4,18). Diese Texte haben eine Ethik hervorgebracht, die in der antiken Welt ohne Vorbild war.`,
    detail: `**Mt 25,31–46** ist vielleicht der folgenreichste Text der Sozialgeschichte: Wenn Christus im Hungrigen, Fremden, Nackten, Kranken und Gefangenen begegnet, dann wird die Sorge für sie zum Gottesdienst. Daraus entstanden Herbergen (*xenodocheia*), Krankenhäuser, Armenküchen, Waisenhäuser und Gefangenenbesuche.

**Lk 10,25–37**: Der Samariter gehörte zu einer verachteten Volks- und Religionsgruppe. Jesus macht ihn zum Vorbild und beantwortet die Frage „Wer ist mein Nächster?" mit „Jeder, der Hilfe braucht". Damit wird die antike Ethik der Gegenseitigkeit und Gruppensolidarität aufgebrochen.

**Gal 3,28** und **Phlm 16** stellen Sklaven, Frauen und Fremde vor Gott auf eine Stufe mit Freien, Männern und Einheimischen – eine Saat, die über Jahrhunderte aufging.`,
    sources: [
      { kind: 'bibel', work: 'Matthäus', ref: '25,35–36.40', quote: `Ich bin hungrig gewesen, und ihr habt mich gespeiset … Ich bin ein Gast gewesen, und ihr habt mich beherbergt … Was ihr getan habt einem unter diesen meinen geringsten Brüdern, das habt ihr mir getan.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jakobus', ref: '1,27', quote: `Ein reiner und unbefleckter Gottesdienst vor Gott dem Vater ist der: die Waisen und Witwen in ihrer Trübsal besuchen und sich von der Welt unbefleckt erhalten.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '4,18', quote: `Der Geist des HERRN ist bei mir, darum daß er mich gesalbt hat; er hat mich gesandt, zu verkündigen das Evangelium den Armen.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Kirche der ersten Jahrhunderte hat die Welt durch Liebe verändert, nicht durch Macht. Als in den 250er-Jahren eine Seuche Alexandria heimsuchte, schrieb der koptische Patriarch **Dionysius**, die Christen hätten die Kranken gepflegt, ohne an die eigene Gefahr zu denken, und seien dabei oft selbst gestorben, während die Heiden ihre Liebsten auf die Straße warfen und flohen. Tertullian berichtet, die Heiden sagten über die Christen: „Seht, wie sie einander lieben." **Basilius** gründete um 370 vor Caesarea die „Basilias" mit Herberge und Krankenhaus; die Römerin Fabiola eröffnete um 390 das erste öffentliche Krankenhaus Roms. Selbst Kaiser **Julian**, der das Heidentum wiederbeleben wollte, klagte, die „gottlosen Galiläer" versorgten nicht nur ihre eigenen Armen, sondern auch die der Heiden. Die koptische Kirche setzt diese Tradition bis heute fort: in Schulen, Kliniken, Waisenhäusern und der Fürsorge für die Ärmsten, etwa die Müllsammler am Mokattam-Berg in Kairo.`,
    sources: [
      { kind: 'kirchenvater', author: 'Dionysius von Alexandrien', work: 'Osterbrief, überliefert bei Eusebius, Kirchengeschichte', ref: 'VII,22,7–10', year: 'um 260', quote: `Die meisten unserer Brüder schonten sich in übergroßer Liebe nicht, besuchten furchtlos die Kranken, pflegten sie und starben mit ihnen … Die Heiden dagegen stießen die Erkrankten von sich, flohen vor ihren Liebsten und warfen sie halbtot auf die Straße.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Tertullian', work: 'Apologeticum', ref: '39,7', year: '197', quote: `„Seht", sagen sie, „wie sie einander lieben."`, original: 'vide, inquiunt, ut invicem se diligant', translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'sonstiges', author: 'Kaiser Julian („Apostata")', work: 'Brief an Arsakios, Oberpriester von Galatien (Ep. 22 Wright); überliefert bei Sozomenos, Kirchengeschichte V,16', year: '362', quote: `Es ist schändlich, dass … die gottlosen Galiläer nicht nur ihre eigenen Armen, sondern auch die unseren unterhalten, während die Unseren offensichtlich unsere Hilfe entbehren.`, status: 'paraphrase', note: 'Julian war ein Gegner des Christentums – sein Zeugnis wiegt daher schwer. Wortlaut geprüft (WebSearch 11/2026) gegen die englische Fassung von Ep. 22 (W. C. Wright, Loeb): „the impious Galilaeans support not only their own poor but ours as well". Ehrlich erwähnen: Peter van Nuffelen (2002) hält Ep. 22 für eine spätere christliche Fälschung; andere (u. a. Speerstra) verteidigen die Echtheit mit Parallelen in Ep. 20 und im Misopogon, wo Julian die heidnische Vernachlässigung der Armen ebenfalls beklagt.' },
      { kind: 'kirchenvater', author: 'Hieronymus', work: 'Brief 77 (an Oceanus, über Fabiola)', year: 'um 399', quote: `Fabiola gründete als Erste ein Krankenhaus (nosokomeion), in dem sie die Kranken von den Straßen sammelte und selbst pflegte.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Auch nichtchristliche Historiker betonen heute den tiefen Einfluss des Christentums auf die westlichen Werte. **Tom Holland** (*Dominion*, 2019) argumentiert, dass Vorstellungen wie die Gleichheit aller Menschen, die Sorge für die Schwachen und selbst der säkulare Humanismus christliche Wurzeln haben. **Larry Siedentop** (*Inventing the Individual*, 2014) sieht die Ursprünge des liberalen Individualismus in der christlichen Lehre von der moralischen Gleichheit aller Seelen vor Gott. **Kyle Harper** zeigt die Umwälzung der antiken Sexualmoral, **Rodney Stark** die soziale Wirkung christlicher Nächstenliebe in Seuchenzeiten. **Jürgen Habermas** nannte den egalitären Universalismus der Moderne ein Erbe der jüdischen Gerechtigkeits- und der christlichen Liebesethik. Wissenschaftshistoriker wie Peter Harrison halten die These vom ewigen Konflikt zwischen Wissenschaft und Religion für eine Konstruktion des 19. Jahrhunderts. Zugleich ist unbestritten, dass Kirchen Reformen auch behindert haben und dass andere Kulturen eigene Traditionen der Barmherzigkeit kennen (etwa buddhistische Stiftungen oder islamische Krankenhäuser).`,
    sources: [
      { kind: 'fachliteratur', author: 'Tom Holland', work: 'Dominion: The Making of the Western Mind', year: '2019', quote: `Die westlichen Grundwerte – Gleichheit, Menschenrechte, Mitgefühl mit den Schwachen – seien zutiefst christlich geprägt, auch dort, wo sie sich säkular verstehen.`, status: 'paraphrase', note: 'Holland schreibt als Fachhistoriker, nicht als Apologet.' },
      { kind: 'fachliteratur', author: 'Larry Siedentop', work: 'Inventing the Individual: The Origins of Western Liberalism', year: '2014', quote: `Der liberale Individualismus wurzele in der christlichen Überzeugung von der moralischen Gleichheit aller Menschen vor Gott.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Jürgen Habermas', work: 'Zeit der Übergänge (Suhrkamp)', ref: '„Ein Gespräch über Gott und die Welt", S. 174 f.', year: '2001', quote: `Der egalitäre Universalismus der Moderne sei unmittelbar ein Erbe der jüdischen Gerechtigkeits- und der christlichen Liebesethik; dazu gebe es bis heute keine Alternative.`, status: 'paraphrase', note: 'Habermas ist kein Christ. Eine im Internet kursierende englische Fassung („Christianity, and nothing else …") ist verfälscht – nicht verwenden.' },
      { kind: 'fachliteratur', author: 'Rodney Stark', work: 'The Rise of Christianity', ref: 'Kap. 4 („Epidemics, Networks, and Conversion")', year: '1996', status: 'paraphrase' },
      { kind: 'gegner', author: 'Bertrand Russell', work: 'Why I Am Not a Christian', year: '1927', quote: `Die christliche Religion, wie sie in ihren Kirchen organisiert ist, sei der Hauptfeind des moralischen Fortschritts in der Welt gewesen und sei es noch.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Stell dir die Welt ohne Christentum vor: Ohne die Überzeugung, dass jeder Mensch – auch der Sklave, das ausgesetzte Kind, der Kranke – Gottes Ebenbild ist, fehlte das Fundament der Menschenrechte. Christen pflegten in Seuchen die Kranken, als andere flohen, gründeten die ersten öffentlichen Krankenhäuser, beendeten Kindesaussetzung und Gladiatorenkämpfe und trugen die Abschaffung der Sklaverei. Selbst Kaiser Julian, ein Feind der Christen, gab zu, dass sie auch die heidnischen Armen versorgten. Christen haben auch viel Unrecht getan – aber unsere heutigen Maßstäbe, mit denen wir es verurteilen, haben wir größtenteils von Christus.`,
  keyPoints: [
    `**Menschenwürde:** Die Gottebenbildlichkeit jedes Menschen (Gen 1,27) ist das Fundament der Gleichheit – Habermas, Siedentop und Holland bestätigen die christliche Wurzel.`,
    `**Krankenpflege und Krankenhäuser:** Christen pflegten in Seuchen (Dionysius von Alexandrien), Basilius gründete die Basilias, Fabiola das erste öffentliche Krankenhaus Roms.`,
    `**Schutz der Schwächsten:** Ende der Kindesaussetzung (Didache 2,2), Ende der Gladiatorenkämpfe (Telemachus, 404), Fürsorge für Witwen und Waisen.`,
    `**Abschaffung der Sklaverei:** Von Gregor von Nyssa bis Wilberforce – getragen vom christlichen Menschenbild.`,
    `**Bildung und Wissenschaft:** Klosterschulen, Universitäten, Bibelübersetzungen und Alphabetisierung; viele Begründer der modernen Naturwissenschaft waren Christen.`,
    `**Ehrliche Bilanz:** Christen haben auch Unrecht getan – aber die Maßstäbe, mit denen wir es verurteilen, stammen weitgehend aus dem Evangelium.`,
  ],
  voices: [
    {
      person: 'dionysius-alexandrien',
      role: 'als Patriarch von Alexandrien in Seuchenzeiten',
      text: `Dionysius, Papst von Alexandrien im 3. Jahrhundert, erlebte eine verheerende Seuche, die die Stadt entvölkerte. In einem Osterbrief, den Eusebius überliefert, beschreibt er den Unterschied zwischen Christen und Heiden: Die Christen besuchten die Kranken ohne Furcht, pflegten sie, nahmen deren Krankheit auf sich und starben oft mit ihnen – darunter Presbyter, Diakone und Laien. Die Heiden dagegen stießen ihre Erkrankten von sich und flohen. Dieses Zeugnis aus dem koptischen Alexandria ist eines der frühesten Dokumente christlicher Krankenpflege – und es erklärt, warum Menschen in Scharen zur Kirche kamen.`,
      sources: [{ kind: 'kirchenvater', author: 'Dionysius von Alexandrien', work: 'Osterbrief, bei Eusebius, Kirchengeschichte', ref: 'VII,22', status: 'paraphrase' }],
    },
    {
      person: 'basilius',
      role: 'als Gründer der Basilias',
      text: `Basilius der Große ließ um 370 vor den Toren von Caesarea in Kappadokien eine ganze Siedlung der Barmherzigkeit errichten: Herberge für Fremde, Krankenhaus, Pflege für Aussätzige, Armenküche und Werkstätten, in denen Arme Arbeit fanden. Gregor von Nazianz nannte sie eine „neue Stadt" und stellte sie über die Weltwunder. Basilius pflegte die Aussätzigen selbst. Die Basilias wurde zum Vorbild unzähliger christlicher Hospitäler – die Wurzel dessen, was wir heute Krankenhaus nennen.`,
      sources: [
        { kind: 'kirchenvater', author: 'Gregor von Nazianz', work: 'Rede 43 (Grabrede auf Basilius)', ref: '63', year: '381', quote: `Geh ein wenig hinaus vor die Stadt und betrachte die neue Stadt, die Schatzkammer der Frömmigkeit …`, status: 'paraphrase' },
        { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Brief 94 (an Elias, den Statthalter)', year: 'um 372', status: 'paraphrase' },
      ],
    },
    {
      person: 'rodney-stark',
      role: 'als Religionssoziologe',
      text: `Stark hat in *The Rise of Christianity* (1996) untersucht, warum eine kleine, verachtete Bewegung in drei Jahrhunderten zur Mehrheitsreligion des Römischen Reiches werden konnte. Ein Schlüssel waren die Seuchen des 2. und 3. Jahrhunderts: Weil Christen ihre Kranken pflegten – mit Wasser, Nahrung und Zuwendung –, überlebten bei ihnen deutlich mehr Menschen, und viele Heiden, die von Christen gepflegt wurden, schlossen sich der Kirche an. Stark sieht darin die gesellschaftliche Kraft einer Lehre, die Nächstenliebe über Gruppengrenzen hinaus zur religiösen Pflicht machte.`,
      sources: [{ kind: 'fachliteratur', author: 'Rodney Stark', work: 'The Rise of Christianity', ref: 'Kap. 4', year: '1996', status: 'paraphrase' }],
    },
    {
      person: 'glen-scrivener',
      role: 'als Evangelist und Kulturkritiker',
      text: `Glen Scrivener zeigt in *The Air We Breathe* (2022), dass die Werte, die säkulare Westeuropäer für selbstverständlich halten – Gleichheit, Mitgefühl, Freiheit, Zustimmung, Aufklärung, Wissenschaft, Fortschritt –, nicht „natürlich" sind, sondern in der Geschichte erst durch das Christentum entstanden. Sie sind wie die Luft, die wir atmen: Man bemerkt sie nicht, bis sie fehlt. Scrivener lädt Skeptiker ein, sich zu fragen, woher ihre eigenen moralischen Instinkte stammen – und ob sie ohne ihre Wurzel auf Dauer überleben.`,
      sources: [{ kind: 'fachliteratur', author: 'Glen Scrivener', work: 'The Air We Breathe: How We All Came to Believe in Freedom, Kindness, Progress, and Equality', year: '2022', status: 'paraphrase' }],
    },
    {
      person: 'charles-malik',
      role: 'als Mitverfasser der Allgemeinen Erklärung der Menschenrechte',
      text: `Der libanesische Philosoph und Diplomat Charles Malik, ein orthodoxer Christ, war Berichterstatter der UN-Menschenrechtskommission und neben Eleanor Roosevelt, René Cassin und Peng Chun Chang einer der Hauptautoren der Allgemeinen Erklärung der Menschenrechte von 1948. Malik setzte sich dafür ein, dass die Erklärung die Würde der Person als vorstaatlich begründet – Rechte, die der Staat nicht verleiht, sondern anerkennen muss. Sein Wirken zeigt, dass die Menschenrechte nicht gegen das Christentum, sondern unter maßgeblicher Mitwirkung christlicher Denker – auch aus dem christlichen Orient – formuliert wurden.`,
      sources: [{ kind: 'sonstiges', work: 'Allgemeine Erklärung der Menschenrechte, Art. 1', year: '1948', quote: `Alle Menschen sind frei und gleich an Würde und Rechten geboren. Sie sind mit Vernunft und Gewissen begabt und sollen einander im Geist der Brüderlichkeit begegnen.`, status: 'verbatim' }],
    },
    {
      person: 'hart',
      role: 'als Kulturhistoriker',
      text: `David Bentley Hart beschreibt in *Atheist Delusions* (2009) das Christentum als die größte Revolution der Weltgeschichte: Es hat die heidnische Welt, in der der Wert eines Menschen von Stand, Stärke und Nutzen abhing, mit der Botschaft konfrontiert, dass Gott im Gekreuzigten, im Sklaven, im Kind und im Kranken gegenwärtig ist. Hart warnt, dass eine Gesellschaft, die diese Überzeugung aufgibt, nicht automatisch humaner wird, sondern zu einer Logik zurückkehren könnte, die den Schwachen nur nach seinem Nutzen bewertet.`,
      sources: [{ kind: 'fachliteratur', author: 'David Bentley Hart', work: 'Atheist Delusions', year: '2009', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'russell-feind-des-fortschritts',
      objection: `Russell hatte recht: Die organisierte christliche Religion war der Hauptfeind des moralischen Fortschritts – gegen Wissenschaft, gegen Frauenrechte, gegen Freiheit.`,
      objectionBy: 'Bertrand Russell',
      answer: `Dann schau auf die andere Seite der Bilanz: Christen beendeten die Aussetzung von Neugeborenen und die Gladiatorenkämpfe – der Mönch Telemachus starb 404 in der Arena, als er die Kämpfe unterbrach, danach wurden sie verboten. Christen pflegten in Seuchen die Kranken, als andere flohen, gründeten die ersten öffentlichen Krankenhäuser, trugen die Abschaffung der Sklaverei und brachten Bildung in unzählige Sprachen. Christen haben auch Fortschritt behindert, das gebe ich zu – aber „Hauptfeind des Fortschritts" ist eine Karikatur.`,
      sources: [
        { kind: 'kirchenvater', author: 'Theodoret von Kyrrhos', work: 'Kirchengeschichte', ref: 'V,26', year: 'um 450', quote: `Der Mönch Telemachus sprang in Rom in die Arena, um die Gladiatoren zu trennen, und wurde von der Menge gesteinigt; daraufhin verbot Kaiser Honorius die Gladiatorenkämpfe.`, status: 'paraphrase' },
      ],
      questionsBack: [
        `Wer hat in der Antike Krankenhäuser für Fremde gegründet, und warum?`,
        `Woher stammt die Überzeugung, dass ein ausgesetztes Kind oder ein Sklave dieselbe Würde hat wie ein Kaiser?`,
      ],
      followUps: [
        {
          id: 'andere-kulturen-auch',
          objection: `Krankenhäuser und Wohltätigkeit gab es auch anderswo – im Buddhismus, im Islam, bei den Römern gab es Militärlazarette. Das Christentum hat nichts Einzigartiges erfunden.`,
          objectionBy: 'Steven Pinker',
          answer: `Richtig, Barmherzigkeit gibt es in vielen Kulturen, und das ist schön – Christen behaupten kein Monopol auf das Gute. Aber in der griechisch-römischen Welt war die organisierte Fürsorge für Fremde, Arme und Kranke als religiöse Pflicht ohne Vorbild; römische Lazarette dienten den eigenen Soldaten. Kaiser Julian, der das Heidentum wiederbeleben wollte, sah das genau: Er klagte, die Christen versorgten auch die heidnischen Armen, und befahl seinen Priestern, sie nachzuahmen.`,
          followUps: [
            {
              id: 'werbung-mitglieder',
              objection: `Die Christen haben das doch nur getan, um Mitglieder zu werben. Das war Marketing.`,
              objectionBy: 'Christopher Hitchens',
              answer: `Wer pflegt Pestkranke als Marketing, wenn er dabei selbst stirbt? Dionysius von Alexandrien berichtet, dass viele Christen bei der Pflege starben – Presbyter, Diakone und Laien. Ihr Motiv war Mt 25: Christus begegnet im Kranken. Dass diese Liebe Menschen anzog, ist wahr – aber das ist keine Strategie, sondern die natürliche Folge echter Liebe. Julian selbst versuchte es mit Strategie und scheiterte.`,
              followUps: [
                {
                  id: 'julian-brief-faelschung',
                  objection: `Dein Julian-Brief an Arsakios ist umstritten – der Historiker Peter van Nuffelen hält ihn für eine spätere christliche Fälschung. Du baust auf Propaganda.`,
                  objectionBy: 'Christopher Hitchens',
                  answer: `Gut, dass du das ansprichst – die Echtheit von Brief 22 ist tatsächlich umstritten, das sollte man offen sagen. Andere Forscher verteidigen sie mit Parallelen in Julians unbestrittenen Schriften: Auch in Brief 20 und im *Misopogon* klagt er, die Heiden vernachlässigten ihre Armen. Und das Zeugnis steht nicht allein: Der heidnische Satiriker Lukian von Samosata spottet um 165 darüber, dass die Christen einander im Gefängnis versorgen, ihr Geld teilen und sich alle als Brüder betrachten. Ein Spötter bestätigt hier unfreiwillig, was die Christen über sich sagten.`,
                  detail: `Für dein Gespräch heißt das: Verwende den Arsakios-Brief mit dem Hinweis auf die Debatte, und stütze dich zusätzlich auf unabhängige Quellen – Lukians *Über das Lebensende des Peregrinus* (Kap. 12–13), die Berichte über die Pest unter Kaiser Gallienus bei Dionysius von Alexandrien (bei Eusebius, *Kirchengeschichte* VII,22) und die Vita Cyprians des Diakons Pontius. Zusammen ergeben sie ein Bild, das nicht an einem einzigen Dokument hängt.`,
                  sources: [
                    { kind: 'sonstiges', author: 'Lukian von Samosata', work: 'Über das Lebensende des Peregrinus (De morte Peregrini)', ref: '12–13', year: 'um 165', quote: `Die Christen versorgten den gefangenen Peregrinus mit allem, verachteten den Besitz, hielten ihn für Gemeingut und betrachteten einander alle als Brüder.`, status: 'paraphrase', note: 'Lukian war ein spöttischer Kritiker der Christen.' },
                    { kind: 'kirchenvater', author: 'Dionysius von Alexandrien', work: 'Osterbrief, überliefert bei Eusebius, Kirchengeschichte', ref: 'VII,22', year: 'um 260', status: 'paraphrase', note: 'Bericht über die Krankenpflege der Christen während der Pest.' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'aufklaerung-nicht-christentum',
      objection: `Unsere Werte – Menschenrechte, Demokratie, Wissenschaft – verdanken wir der Aufklärung, nicht dem Christentum. Die Aufklärung musste sich gegen die Kirche durchsetzen.`,
      objectionBy: 'Steven Pinker',
      answer: `Die Aufklärung hat Großes geleistet, aber sie schöpfte aus christlichen Quellen: Die Idee der gleichen Würde jedes Menschen, die Unterscheidung von Kirche und Staat, die Gewissensfreiheit und das Vertrauen in eine vernünftig geordnete, erforschbare Schöpfung sind christliche Erbstücke. Der Historiker Larry Siedentop sieht die Wurzeln des liberalen Individualismus in der christlichen Lehre von der Gleichheit aller Seelen vor Gott; selbst Jürgen Habermas nennt den Universalismus der Moderne ein Erbe der christlichen Liebesethik. Viele Gründer der modernen Wissenschaft – Kepler, Boyle, Newton, Faraday – waren gläubige Christen.`,
      followUps: [
        {
          id: 'holland-kein-theologe',
          objection: `Holland ist kein Theologe, und selbst er sagt, das Christentum habe viel Unheil angerichtet.`,
          objectionBy: 'Christopher Hitchens',
          answer: `Genau deshalb ist sein Urteil so stark: Ein Historiker ohne apologetische Absicht kommt nach jahrelanger Forschung zu dem Schluss, dass die westlichen Grundwerte zutiefst christlich geprägt sind. Und er beschönigt die dunklen Seiten nicht – ich auch nicht. Meine These ist nicht, dass Christen nur Gutes getan haben, sondern dass die Maßstäbe, mit denen wir heute Gutes und Böses unterscheiden – auch das Böse, das Christen getan haben –, zu einem großen Teil aus dem Evangelium stammen.`,
          followUps: [
            {
              id: 'stoiker-universalismus',
              objection: `Die Gleichheit aller Menschen haben schon die Stoiker gelehrt: Seneca schrieb, Sklaven seien Menschen wie wir, und „der Mensch ist dem Menschen etwas Heiliges". Das Christentum hat nur abgeschrieben.`,
              objectionBy: 'Christopher Hitchens',
              answer: `Die Stoiker hatten edle Gedanken, und die Kirchenväter haben sie geschätzt. Aber sie blieben Gedanken einer gebildeten Elite, ohne die Praxis zu verändern: Derselbe Seneca schreibt in *Über den Zorn* ganz selbstverständlich, man ertränke schwache und missgebildete Neugeborene – das sei Vernunft, nicht Zorn. Die Stoa hat weder die Kindesaussetzung noch die Gladiatorenspiele beendet. Das Christentum hat die Würde des Schwächsten zur Praxis einer ganzen Gemeinschaft gemacht – mit Findelkindern, Witwen, Kranken und Sklaven.`,
              detail: `Der entscheidende Unterschied liegt im Grund der Würde: Für die Stoa teilen Menschen die göttliche Vernunft – wer weniger Vernunft hat, hat auch weniger Anteil. Für das Christentum ist jeder Mensch als Ebenbild Gottes geschaffen und von Christus geliebt, gerade der Schwache, Kranke, Kleine. Darum hat Basilius in Caesarea ein ganzes „Armenviertel" mit Krankenhaus gebaut, und darum nahmen Christen ausgesetzte Kinder auf.`,
              sources: [
                { kind: 'sonstiges', author: 'Seneca', work: 'Über den Zorn (De ira)', ref: 'I,15,2', year: 'um 41', quote: `Missgeburten löschen wir aus, auch Kinder, wenn sie schwach und missgestaltet geboren werden, ertränken wir; es ist nicht Zorn, sondern Vernunft, das Untaugliche vom Gesunden zu trennen.`, original: 'portentosos fetus extinguimus, liberos quoque, si debiles monstrosique editi sunt, mergimus', status: 'paraphrase' },
                { kind: 'sonstiges', author: 'Seneca', work: 'Briefe an Lucilius', ref: '95,33', year: 'um 64', quote: `Der Mensch ist dem Menschen etwas Heiliges.`, original: 'homo, sacra res homini', status: 'verbatim' },
              ],
              followUps: [
                {
                  id: 'findelhaeuser-sterblichkeit',
                  objection: `Und die christlichen Findelhäuser? Im 18. Jahrhundert starben dort die meisten Kinder. Das war keine Barmherzigkeit, sondern ein Massengrab mit Kreuz darüber.`,
                  objectionBy: 'Christopher Hitchens',
                  answer: `Die Sterblichkeit in vielen Findelhäusern der frühen Neuzeit war tatsächlich erschreckend hoch – vor allem wegen Überfüllung, Seuchen und fehlender Ammen, in einer Zeit ohne Hygiene und Säuglingsmedizin. Das ist eine bittere Wahrheit. Aber die Alternative war nicht ein liebevolles Zuhause, sondern das Aussetzen auf der Straße oder den Tod. Die Findelhäuser entstanden, weil Christen die Überzeugung hatten, dass jedes Kind gerettet werden muss – und dieselbe Überzeugung trieb später die Reformen an, die die Sterblichkeit senkten.`,
                  detail: `Das ist ein gutes Beispiel für den Unterschied zwischen Motiv und Mitteln: Die Mittel waren oft unzulänglich, das Motiv war das richtige. Fortschritte in der Kinderfürsorge des 19. Jahrhunderts – etwa durch Thomas Barnardo in London oder die Arbeit katholischer und evangelischer Orden – kamen ebenfalls aus christlicher Motivation.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'menschenrechte-universell',
      objection: `Menschenwürde und Menschenrechte sind universell und vernünftig begründbar. Dafür braucht man kein Christentum.`,
      objectionBy: 'Steven Pinker',
      answer: `Historisch war das nicht selbstverständlich: Aristoteles hielt manche Menschen für Sklaven von Natur, Platon und Aristoteles befürworteten die Aussetzung schwacher Kinder. Erst die biblische Lehre, dass jeder Mensch Gottes Bild ist, hat die Gleichheit aller begründet. Bei der Allgemeinen Erklärung der Menschenrechte von 1948 war der orthodoxe Christ Charles Malik aus dem Libanon einer der Hauptautoren. Und Nietzsche, kein Freund des Christentums, erkannte genau, dass die Idee gleicher Rechte für alle ein christliches Erbe ist.`,
      followUps: [
        {
          id: 'braucht-keinen-glauben-mehr',
          objection: `Selbst wenn die Idee christliche Wurzeln hat – heute braucht sie keinen Glauben mehr. Wir können die Früchte behalten und die Wurzel abschneiden.`,
          objectionBy: 'Richard Dawkins',
          answer: `Schnittblumen blühen eine Weile weiter, auch wenn man sie von der Wurzel trennt – aber nicht für immer. Wenn der Mensch nur ein Produkt blinder Natur ist, warum sollte dann der Schwerkranke, das ungeborene Kind oder der Mensch mit Behinderung dieselbe Würde haben wie der Starke und Nützliche? Peter Singer zieht aus dem Naturalismus bereits Folgerungen, die die Würde schwerbehinderter Neugeborener relativieren. Habermas selbst sagte, zu diesem christlichen Erbe gebe es bis heute keine Alternative.`,
          sources: [
            { kind: 'gegner', author: 'Peter Singer', work: 'Practical Ethics', ref: 'Kap. 7', year: '3. Aufl. 2011', quote: `Singer bestreitet, dass die bloße Zugehörigkeit zur Spezies Mensch einen besonderen Lebenswert begründet, und hält in bestimmten Fällen die Tötung schwerbehinderter Neugeborener für vertretbar.`, status: 'paraphrase', note: 'Singer argumentiert ausdrücklich gegen die „Heiligkeit des menschlichen Lebens" der christlichen Tradition.' },
          ],
          followUps: [
            {
              id: 'harari-menschenrechte-fiktion',
              objection: `Seien wir ehrlich: Menschenrechte sind wie Götter, Nationen und Geld eine gemeinsame Fiktion. Biologisch gibt es keine Rechte. Aber Fiktionen sind nützlich, solange viele an sie glauben – dafür brauchen wir keinen Gott.`,
              objectionBy: 'Yuval Noah Harari',
              answer: `Ich schätze die Klarheit: Du gibst zu, dass Menschenrechte im naturalistischen Weltbild nicht wirklich existieren. Aber dann stellt sich die entscheidende Frage: Was geschieht, wenn eine andere Fiktion mehr Anhänger gewinnt – Rasse, Klasse, Nation? Das 20. Jahrhundert hat gezeigt, wie schnell eine Fiktion durch eine andere ersetzt werden kann. Christen behaupten etwas anderes: Die Würde des Menschen ist keine Erfindung, sondern eine Wirklichkeit – er ist Gottes Ebenbild, ob die Mehrheit das glaubt oder nicht.`,
              detail: `Harari schreibt in *Eine kurze Geschichte der Menschheit* (2011), außerhalb der gemeinsamen Vorstellungskraft der Menschen gebe es keine Götter, keine Nationen, kein Geld, keine Menschenrechte, keine Gesetze und keine Gerechtigkeit; die Gleichheit der Menschen sei eine christlich geprägte Vorstellung ohne biologische Grundlage. Er ist damit ehrlicher als viele, die die Menschenrechte für „selbstverständlich" halten. Die Frage an ihn ist: Wenn Würde nur eine Geschichte ist – woran soll sich eine verfolgte Minderheit halten, wenn die Mehrheit eine andere Geschichte erzählt?`,
              sources: [
                { kind: 'gegner', author: 'Yuval Noah Harari', work: 'Sapiens: A Brief History of Humankind (dt. Eine kurze Geschichte der Menschheit)', ref: 'Kap. 2 und 6', year: '2011', quote: `Außerhalb der gemeinsamen Vorstellung der Menschen gebe es keine Götter, keine Nationen, kein Geld, keine Menschenrechte, keine Gesetze und keine Gerechtigkeit.`, status: 'paraphrase' },
              ],
              followUps: [
                {
                  id: 'fiktion-funktioniert',
                  objection: `Fiktionen funktionieren erstaunlich gut. Geld ist auch eine Fiktion, und die Weltwirtschaft läuft. Solange genug Menschen an Menschenrechte glauben, sind sie wirksam.`,
                  objectionBy: 'Yuval Noah Harari',
                  answer: `Geld funktioniert, solange alle mitspielen – und stürzt in einer Inflation ins Bodenlose, sobald das Vertrauen schwindet. Genau das ist bei einer Würde, die nur auf Zustimmung beruht, die Gefahr. Die Menschen, die Menschenrechte am dringendsten brauchen, sind die, an deren Würde die Mehrheit gerade **nicht** glaubt: Sklaven, Juden im Dritten Reich, Christen unter dem IS, Ungeborene, Sterbende. Eine Würde, die von Mehrheiten abhängt, schützt genau diese Menschen nicht.`,
                  detail: `Die koptische Geschichte zeigt das eindrücklich: Eine Minderheit, die über Jahrhunderte an ihrer Würde vor Gott festhielt, auch wenn Herrscher und Mehrheiten sie anders behandelten. Die Märtyrer haben nicht für eine nützliche Fiktion ihr Leben gegeben. Wer Würde für eine Fiktion hält, kann sie würdigen – aber er kann sie nicht gegen die Mehrheit verteidigen.`,
                  questionsBack: [
                    `Wenn die Würde eines Menschen davon abhängt, dass andere an sie glauben – hatten die Opfer des Holocaust dann 1942 keine Würde?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'wissenschaft-behindert',
      objection: `Das Christentum hat die Wissenschaft behindert: Galilei, Bruno, der Widerstand gegen Darwin.`,
      objectionBy: 'Richard Dawkins',
      answer: `Der Fall Galilei war ein Unrecht, aber er ist eine Ausnahme, kein Muster – dazu gibt es ein eigenes Thema. Wissenschaftshistoriker wie Peter Harrison zeigen, dass die Vorstellung eines ewigen Krieges zwischen Wissenschaft und Glauben eine Konstruktion des 19. Jahrhunderts ist. Die moderne Naturwissenschaft entstand im christlichen Europa, oft in kirchlichen Universitäten, getragen von Menschen wie Kepler, Boyle, Newton, Pascal, Faraday, Maxwell, Mendel und Lemaître, die die Welt erforschten, weil sie sie als vernünftige Schöpfung eines vernünftigen Gottes verstanden.`,
      followUps: [
        {
          id: 'alexandria-hypatia',
          objection: `Christen haben die Bibliothek von Alexandria zerstört und die Philosophin Hypatia ermordet – damit begann das finstere Mittelalter. Und das alles unter eurem koptischen Patriarchen Kyrill.`,
          objectionBy: 'Carl Sagan',
          answer: `Hier muss man Mythos und Geschichte trennen. Die große Bibliothek verfiel über Jahrhunderte – Caesars Brand 48 v. Chr., Kriege unter Aurelian im 3. Jahrhundert; bei der Zerstörung des Serapeion-Tempels 391 berichten die antiken Quellen von Götterbildern, nicht von einer verbrannten Bibliothek. Die Ermordung Hypatias 415 durch einen christlichen Mob dagegen ist ein Verbrechen, das nichts beschönigt – und der christliche Historiker Sokrates Scholastikos verurteilte es damals scharf als Schande für die Kirche von Alexandria.`,
          detail: `Das Bild vom „finsteren Mittelalter", in dem die Kirche die Wissenschaft erstickt habe, gilt unter Wissenschaftshistorikern als überholt; James Hannam hat in *God's Philosophers* (2009) gezeigt, wie im Mittelalter Universitäten, Naturphilosophie und Technik entstanden. Alexandria selbst blieb bis ins 6. Jahrhundert ein Zentrum der Gelehrsamkeit – der christliche Philosoph Johannes Philoponos entwickelte dort Ansätze der Impetustheorie. Ehrlich bleibt: Hypatias Tod zeigt, wohin religiöse Parteienkämpfe in einer Stadt führen konnten.`,
          voices: [
            { person: 'sokrates-scholastikos', role: 'als zeitgenössischer Kirchenhistoriker', text: `Sokrates berichtet in seiner *Kirchengeschichte* (VII,15), Hypatia sei wegen ihrer Bildung und Besonnenheit hoch geachtet gewesen; ein Mob unter Führung eines Lektors namens Petrus habe sie ermordet. Er urteilt, die Tat habe Kyrill und der alexandrinischen Kirche große Schande gebracht, denn nichts sei dem Geist des Christentums fremder als Morde und Kämpfe.` },
            { person: 'james-hannam', role: 'als Wissenschaftshistoriker', text: `Hannam zeigt, dass die mittelalterliche Kirche Bildung, Universitäten und Naturforschung förderte und dass viele Grundlagen der wissenschaftlichen Revolution im Mittelalter gelegt wurden. Der Mythos vom „finsteren Mittelalter" stamme großenteils aus der Polemik der Aufklärung und des 19. Jahrhunderts.` },
          ],
          sources: [
            { kind: 'kirchenvater', author: 'Sokrates Scholastikos', work: 'Kirchengeschichte', ref: 'VII,15', year: 'um 440', quote: `Diese Tat brachte Kyrill und der Kirche von Alexandria nicht geringe Schande; denn nichts ist dem Geist des Christentums fremder als Morde, Kämpfe und dergleichen.`, status: 'paraphrase' },
            { kind: 'fachliteratur', author: 'James Hannam', work: 'God\'s Philosophers: How the Medieval World Laid the Foundations of Modern Science', year: '2009', status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'kyrill-schuld-hypatia',
              objection: `Kyrill war der Drahtzieher. Er hatte zuvor Juden vertreiben lassen und befand sich im Machtkampf mit dem Präfekten Orestes, dessen Beraterin Hypatia war. Ihr verehrt einen Mann, an dessen Händen Blut klebt.`,
              objectionBy: 'Christopher Hitchens',
              answer: `Kyrills Rolle in den Konflikten Alexandrias war nicht friedfertig, und das darf man nicht beschönigen. Aber dass er den Mord angeordnet habe, belegt keine zeitgenössische Quelle: Sokrates spricht von einem Mob und einer Schande für die Kirche, nicht von einem Befehl; der direkte Vorwurf stammt vom heidnischen Philosophen Damaskios, ein Jahrhundert später und aus erklärter Feindschaft. Der Historiker Edward Watts sieht den Mord als Folge eines eskalierten politischen Konflikts. Die Kirche verehrt Kyrill als Lehrer des Glaubens an den menschgewordenen Gott – nicht jede Handlung seines Lebens. Heilige sind keine fehlerlosen Menschen.`,
              detail: `Das ist für Kopten ein sensibler Punkt, bei dem Ehrlichkeit besonders wichtig ist: Kyrills Theologie (die Einheit Christi, die Theotokos) ist für die ganze Christenheit grundlegend geworden. Seine Kirchenpolitik war hart und wird auch von christlichen Historikern kritisch gesehen. Du kannst beides sagen, ohne die Heiligkeit seines Glaubenszeugnisses oder die Schuld der Täter zu relativieren: Mord ist Mord, und Christus hat seinen Jüngern das Schwert verwehrt.`,
              sources: [
                { kind: 'fachliteratur', author: 'Edward J. Watts', work: 'Hypatia: The Life and Legend of an Ancient Philosopher', year: '2017', status: 'paraphrase' },
                { kind: 'gegner', author: 'Damaskios', work: 'Leben des Isidor (Vita Isidori), Fragmente in der Suda', year: '6. Jh.', status: 'paraphrase', note: 'Heidnischer Neuplatoniker; macht Kyrill direkt verantwortlich.' },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Woher stammt deine Überzeugung, dass jeder Mensch – auch der Schwächste – gleiche Würde hat?`,
    `Warum hat ein Gegner des Christentums wie Kaiser Julian die christliche Armenfürsorge bewundert und kopieren wollen?`,
    `Wie stellst du dir eine Welt ohne Krankenhäuser für Fremde, ohne Verbot der Kindesaussetzung und ohne die Abolitionisten vor?`,
    `Können die Früchte einer Idee dauerhaft überleben, wenn man ihre Wurzel abschneidet?`,
  ],
  avoid: [
    `So tun, als hätten Christen nur Gutes getan – das macht jede Bilanz unglaubwürdig.`,
    `Behaupten, andere Kulturen kennten keine Barmherzigkeit; das ist falsch und herablassend.`,
    `Unbelegte Behauptungen wie „Das Konzil von Nizäa befahl Krankenhäuser in jeder Stadt" verwenden – die entsprechenden „arabischen Kanones" gelten als spätere Zusätze.`,
    `Das falsche englische „Habermas-Zitat" („Christianity, and nothing else …") benutzen.`,
  ],
  concessions: [
    `Kirchen haben Reformen wie Religionsfreiheit, Frauenrechte und manche wissenschaftliche Erkenntnisse zeitweise behindert.`,
    `Christen haben Kriege geführt, Andersgläubige verfolgt und Macht missbraucht.`,
    `Auch andere religiöse und philosophische Traditionen haben Barmherzigkeit und Menschenwürde hervorgebracht.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Tom Holland', work: 'Dominion: The Making of the Western Mind', year: '2019', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Larry Siedentop', work: 'Inventing the Individual', year: '2014', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'David Bentley Hart', work: 'Atheist Delusions', year: '2009', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Glen Scrivener', work: 'The Air We Breathe', year: '2022', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Rodney Stark', work: 'The Rise of Christianity', year: '1996', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Menschenwürde', 'Krankenhäuser', 'Diakonie', 'Julian', 'Habermas', 'Holland', 'Aufklärung'],
  related: [
    'christentum-gesellschaft/christentum-kolonialismus',
    'christentum-gesellschaft/kirche-heuchlerisch',
    'at-ethik/bibel-befuerwortet-sklaverei',
    'kirchengeschichte-mythen/galilei',
    'moral-und-gott/gut-ohne-gott',
    'bioethik/embryo-zellhaufen',
  ],
};

export default claim;
