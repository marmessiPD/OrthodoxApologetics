import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'inquisition-hexen',
  title: `„Inquisition und Hexenverbrennungen beweisen, wie gefährlich das Christentum ist."`,
  proponents: [
    { name: 'Christopher Hitchens', role: 'Publizist und Religionskritiker', work: 'God Is Not Great (2007)' },
    { name: 'Karlheinz Deschner', role: 'Schriftsteller und Kirchenkritiker', work: 'Kriminalgeschichte des Christentums (10 Bände, 1986–2013)' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The God Delusion (2006), Vorwort („keine Hexenjagden")' },
    { name: 'Matilda Joslyn Gage', role: 'Frauenrechtlerin des 19. Jh.', work: 'Woman, Church and State (1893) – Ursprung der „neun Millionen"' },
  ],
  steelman: `Jahrhundertelang verfolgte die Kirche Andersdenkende mit Folter und Scheiterhaufen. Die Inquisition machte Jagd auf Katharer, Waldenser, Juden, Muslime, Protestanten und Freidenker; in Spanien wurden Tausende Juden und Muslime zwangsgetauft und ihre Nachkommen jahrhundertelang auf „Rückfall" überwacht. Galileo wurde zum Widerruf gezwungen, Giordano Bruno verbrannt. Noch schlimmer: die Hexenverfolgung. Auf Grundlage des *Hexenhammers* und einer päpstlichen Bulle von 1484 wurden in Europa unzählige Menschen – überwiegend Frauen – als Hexen gefoltert und lebendig verbrannt. Das alles geschah nicht trotz, sondern wegen des Christentums: Eine Religion, die absolute Wahrheit beansprucht und den Teufel überall sieht, muss früher oder später Ketzer und Hexen jagen. Gewaltlos wurde das Christentum erst, als die Aufklärung ihm die Macht nahm.`,
  biblical: {
    summary: `Das Neue Testament kennt keine Gewalt gegen Irrlehrer oder Ungläubige. Als die Jünger Feuer vom Himmel auf ein samaritanisches Dorf herabrufen wollen, weist Jesus sie zurecht (Lk 9,54–55); im Gleichnis vom Unkraut verbietet er, das Unkraut vor der Ernte auszureißen (Mt 13,29–30). Die schärfste Maßnahme der Gemeinde gegen Irrlehre ist der Ausschluss aus der Gemeinschaft (Mt 18,17; Tit 3,10), nicht körperliche Strafe. Paulus schreibt: „Ein Knecht des Herrn soll nicht zänkisch sein, sondern freundlich gegen jedermann … und mit Sanftmut die Widerspenstigen strafen" (2 Tim 2,24–25). Glaube ist Antwort auf Gottes Liebe und kann nicht erzwungen werden.`,
    detail: `**Mt 13,24–30** ist in der Kirchengeschichte immer wieder gegen die Ketzerverfolgung angeführt worden: Der Herr des Ackers verbietet seinen Knechten, das Unkraut auszureißen, „damit ihr nicht zugleich den Weizen mit ausraufet". Das Gericht gehört Gott am Ende der Zeit.

**Ex 22,17** („Die Zauberinnen sollst du nicht leben lassen") wurde in der frühen Neuzeit von Hexenverfolgern zitiert. Dieses Gesetz gehörte zum Zivilrecht Israels, das die Kirche nie als ihr Recht übernommen hat (siehe „Die Bibel fordert grausame Strafen"). Zudem meinte es Praktiken wie Wahrsagerei und Totenbeschwörung, nicht die frühneuzeitliche Vorstellung eines Teufelspaktes mit Hexenflug und Hexensabbat.`,
    sources: [
      { kind: 'bibel', work: 'Matthäus', ref: '13,29–30', quote: `Nein! auf daß ihr nicht zugleich den Weizen mit ausraufet, so ihr das Unkraut ausjätet. Lasset beides miteinander wachsen bis zu der Ernte.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '9,54–55', quote: `Herr, willst du, so wollen wir sagen, daß Feuer vom Himmel falle … Jesus aber wandte sich um und bedrohte sie.`, translation: 'nach Luther 1912', status: 'paraphrase' },
      { kind: 'bibel', work: '2. Timotheus', ref: '2,24–25', quote: `Ein Knecht aber des Herrn soll nicht zänkisch sein, sondern freundlich gegen jedermann, lehrhaft, der die Bösen tragen kann mit Sanftmut und strafe die Widerspenstigen.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die frühen Väter haben jeden Glaubenszwang abgelehnt. **Tertullian** schrieb, es gehöre nicht zur Religion, Religion zu erzwingen, und sprach als erster von der „Freiheit der Religion" (*libertas religionis*). **Laktanz** forderte, die Religion durch Sterben, nicht durch Töten zu verteidigen. Der koptische Papst **Athanasius**, selbst fünfmal verbannt, schrieb, es sei Kennzeichen wahrer Frömmigkeit, nicht zu zwingen, sondern zu überzeugen. Die koptische Kirche kannte weder Inquisition noch Hexenprozesse; sie selbst wurde nach 451 von der byzantinischen Reichskirche verfolgt – Papst Benjamin I. musste sich jahrelang verbergen, sein Bruder wurde nach koptischer Überlieferung gefoltert und ertränkt. Die Kopten wissen aus eigener Geschichte, was geschieht, wenn Staatsmacht und Kirche sich vermischen. Ehrlich ist zuzugeben: Augustinus' Rechtfertigung staatlichen Zwangs gegen die Donatisten (*compelle intrare*, Lk 14,23) hat im Westen verhängnisvoll nachgewirkt.`,
    sources: [
      { kind: 'kirchenvater', author: 'Tertullian', work: 'Ad Scapulam', ref: '2', year: 'um 212', quote: `Es gehört nicht zur Religion, Religion zu erzwingen; sie muss freiwillig angenommen werden, nicht mit Gewalt.`, original: 'nec religionis est cogere religionem, quae sponte suscipi debeat, non vi', translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Laktanz', work: 'Divinae Institutiones', ref: 'V,19–20', year: 'um 305–310', quote: `Die Religion muss durch Sterben, nicht durch Töten verteidigt werden, durch Geduld, nicht durch Grausamkeit.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Historia Arianorum', ref: '67', year: 'um 358', quote: `Es ist Sache der Frömmigkeit, nicht zu zwingen, sondern zu überzeugen.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Augustinus', work: 'Brief 93 (an Vincentius)', year: 'um 408', quote: `Rechtfertigung staatlichen Zwangs gegen die Donatisten unter Berufung auf Lk 14,23 („Nötige sie hereinzukommen").`, status: 'paraphrase', note: 'Als ehrliches Zugeständnis: Diese Linie hat im Westen fatal nachgewirkt.' },
    ],
  },
  opposingView: {
    summary: `Die historische Forschung der letzten Jahrzehnte hat die Zahlen stark korrigiert. Für die **Spanische Inquisition** (1478–1834) schätzen Historiker wie Henry Kamen die Zahl der Hinrichtungen auf insgesamt etwa 3.000 bis 5.000, die meisten in den ersten Jahrzehnten gegen Konvertiten jüdischer Herkunft; Gustav Henningsen und Jaime Contreras werteten rund 44.000 Verfahren aus den Jahren 1540–1700 aus und fanden eine Hinrichtungsquote von unter 2 %. Für die **Hexenverfolgung** (ca. 1450–1750) schätzt Brian Levack rund 90.000 Prozesse und etwa 45.000 Hinrichtungen; heutige Schätzungen liegen meist zwischen 40.000 und 60.000. Die Mehrzahl der Opfer waren Frauen, aber ein erheblicher Teil (je nach Region 20–25 % oder mehr) Männer. Die meisten Hexenprozesse wurden vor **weltlichen** und lokalen Gerichten geführt, besonders im zersplitterten Heiligen Römischen Reich; die Spanische und die Römische Inquisition gehörten dagegen zu den zurückhaltendsten Instanzen. Die Zahl „neun Millionen" geht auf eine Hochrechnung von 1784 zurück und gilt als widerlegt.`,
    detail: `Der spanische Inquisitor Alonso de Salazar Frías untersuchte nach dem Hexenprozess von Logroño (1610) die angeblichen Hexereien im Baskenland und kam zu dem Ergebnis, dass es keine Beweise für Hexerei gebe – danach wurden in Spanien kaum noch Hexen hingerichtet. Der *Hexenhammer* (1486/87) des Dominikaners Heinrich Kramer war nie ein offizielles Kirchendokument; Kramer war zuvor nach einem gescheiterten Prozess in Innsbruck vom Bischof von Brixen des Landes verwiesen worden. Die Bulle *Summis desiderantes* Innozenz' VIII. (1484) hatte ihm allerdings Vollmachten gegeben – ein schwerer Fehler.

Im Frühmittelalter hatte die Kirche den Hexenglauben selbst als Aberglauben bekämpft: Der *Canon Episcopi* (um 906) erklärte nächtliche Hexenflüge zur Täuschung, und eine Bestimmung Karls des Großen für Sachsen (um 782/785) drohte jedem die Todesstrafe an, der eine vermeintliche Hexe verbrannte.`,
    sources: [
      { kind: 'fachliteratur', author: 'Henry Kamen', work: 'The Spanish Inquisition: A Historical Revision', year: '1997 (4. Aufl. 2014)', quote: `Die Zahl der Hinrichtungen durch die Spanische Inquisition war weit geringer als in der Legende; die meisten fielen in die ersten Jahrzehnte nach 1480.`, status: 'paraphrase', note: 'Gesamtschätzungen in der Forschung meist ca. 3.000–5.000 Hinrichtungen für 1478–1834.' },
      { kind: 'fachliteratur', author: 'Gustav Henningsen; Jaime Contreras', work: '„Forty-Four Thousand Cases of the Spanish Inquisition (1540–1700)", in: G. Henningsen; J. Tedeschi (Hg.), The Inquisition in Early Modern Europe', year: '1986', quote: `Auswertung von rund 44.000 Verfahren: Hinrichtungsquote unter 2 %.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Brian P. Levack', work: 'The Witch-Hunt in Early Modern Europe', year: '4. Aufl. 2016', quote: `Schätzung von etwa 90.000 Prozessen und rund 45.000 Hinrichtungen in Europa zwischen 1450 und 1750.`, status: 'paraphrase' },
      { kind: 'sonstiges', work: 'Capitulatio de partibus Saxoniae', ref: 'Kap. 6', year: 'um 782/785', quote: `Wer, vom Teufel getäuscht, nach heidnischer Art glaubt, ein Mann oder eine Frau sei eine Hexe, und sie deshalb verbrennt, soll mit dem Tod bestraft werden.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Inquisition und Hexenverfolgung waren schweres Unrecht, und jedes Opfer ist eines zu viel. Aber die Zahlen der Legende stimmen nicht: Historiker schätzen für die Spanische Inquisition in 350 Jahren etwa 3.000 bis 5.000 Hinrichtungen, für die Hexenverfolgung in ganz Europa etwa 40.000 bis 60.000 – nicht Millionen. Die meisten Hexen wurden von weltlichen Gerichten verurteilt, und ausgerechnet die Spanische Inquisition hielt Hexerei bald für Einbildung. Vor allem: Jesus verbot, das Unkraut auszureißen, die frühen Väter lehnten jeden Glaubenszwang ab, und die Christen Friedrich Spee und Alonso de Salazar haben die Hexenjagd bekämpft.`,
  keyPoints: [
    `**Unrecht klar benennen:** Folter, Scheiterhaufen, Zwangstaufen und Überwachung von Konvertiten widersprechen Christus.`,
    `**Die Zahlen korrigieren:** Spanische Inquisition ca. 3.000–5.000 Hinrichtungen (1478–1834); Hexenverfolgung ca. 40.000–60.000 (1450–1750) – keine „neun Millionen".`,
    `**Hexenprozesse meist weltlich:** Vor allem lokale Gerichte im Heiligen Römischen Reich; die Spanische Inquisition war nach Salazar (um 1612) auffallend skeptisch.`,
    `**Die frühe Kirche lehnte Zwang ab:** Tertullian („nicht Religion, Religion zu erzwingen"), Laktanz, Athanasius.`,
    `**Christliche Gegenstimmen:** Friedrich Spee (*Cautio Criminalis*, 1631), Johann Weyer, Adam Tanner, Alonso de Salazar.`,
    `**Die Kopten kannten keine Inquisition:** Sie waren selbst Opfer der byzantinischen Reichskirche – ein Lehrstück über die Vermischung von Kirche und Staatsmacht.`,
  ],
  voices: [
    {
      person: 'friedrich-spee',
      role: 'als Beichtvater verurteilter „Hexen"',
      text: `Der Jesuit Friedrich Spee begleitete als junger Priester in Franken zum Tod verurteilte „Hexen" und wurde dabei überzeugt, dass sie unschuldig waren. 1631 veröffentlichte er anonym die *Cautio Criminalis* („Rechtliches Bedenken"), eine der schärfsten Anklagen gegen die Hexenprozesse. Er zeigte, dass die Folter jedes gewünschte Geständnis erzwingt und jeder, auch ein Richter oder Bischof, unter der Folter gestehen würde, eine Hexe zu sein. Spee argumentierte als Christ: Die Prozesse widersprachen der Gerechtigkeit und der Nächstenliebe. Sein Buch trug wesentlich zum Ende der Hexenverfolgung bei.`,
      sources: [{ kind: 'sonstiges', author: 'Friedrich Spee von Langenfeld', work: 'Cautio Criminalis, seu de processibus contra sagas liber', year: '1631', quote: `Unter der Folter würde jeder alles gestehen; daher sind die so gewonnenen Geständnisse wertlos, und viele Unschuldige werden verbrannt.`, status: 'paraphrase' }],
    },
    {
      person: 'athanasius',
      role: 'als verfolgter Bischof',
      text: `Athanasius wurde fünfmal aus Alexandria verbannt, weil er sich weigerte, sich der kaiserlichen Kirchenpolitik zugunsten der Arianer zu beugen. In seiner *Geschichte der Arianer* klagt er die Gewalt an, mit der der Staat Bischöfe absetzte und Gläubige verfolgte, und hält fest: Die Wahrheit wird nicht mit Schwertern, Speeren und Soldaten verkündet, sondern durch Überzeugung und Rat. Wahre Frömmigkeit zwingt nicht, sie überzeugt. Damit steht der große koptische Kirchenvater am Anfang einer Tradition, die Glaubenszwang grundsätzlich verwirft.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Historia Arianorum', ref: '33; 67', status: 'paraphrase' }],
    },
    {
      person: 'tertullian',
      role: 'als Anwalt der Religionsfreiheit',
      text: `Tertullian, Jurist aus Karthago, schrieb in einer Zeit, in der Christen verfolgt wurden, an den Prokonsul Scapula: Es sei ein Menschenrecht und eine natürliche Befugnis, dass jeder verehrt, was er für richtig hält; es gehöre nicht zur Religion, Religion zu erzwingen. Im *Apologeticum* spricht er als erster lateinischer Autor von der „Freiheit der Religion". Diese Einsicht wurde später, als Christen selbst an die Macht kamen, vielfach vergessen – aber sie ist ein christliches Erbe, auf das sich die moderne Religionsfreiheit berufen kann.`,
      sources: [
        { kind: 'kirchenvater', author: 'Tertullian', work: 'Ad Scapulam', ref: '2', year: 'um 212', status: 'paraphrase' },
        { kind: 'kirchenvater', author: 'Tertullian', work: 'Apologeticum', ref: '24,6', year: '197', quote: `…die Freiheit der Religion zu nehmen …`, original: 'adimere libertatem religionis', status: 'paraphrase' },
      ],
    },
    {
      person: 'rodney-stark',
      role: 'als Religionssoziologe',
      text: `Stark fasst in *Bearing False Witness* (2016) die Forschung zur Spanischen Inquisition zusammen: Sie war ein Gericht mit Verfahrensregeln, das im Vergleich zu weltlichen Gerichten seiner Zeit selten folterte und selten hinrichtete; ihre Gefängnisse galten manchen als erträglicher als die königlichen. Die „schwarze Legende" der Inquisition sei wesentlich ein Produkt protestantischer und später aufklärerischer Propaganda gegen Spanien. Stark betont zugleich, dass die Inquisition Unrecht war – ihm geht es um die Korrektur übertriebener Zahlen.`,
      sources: [{ kind: 'fachliteratur', author: 'Rodney Stark', work: 'Bearing False Witness: Debunking Centuries of Anti-Catholic History', year: '2016', status: 'paraphrase' }],
    },
    {
      person: 'hart',
      role: 'als Kulturhistoriker',
      text: `David Bentley Hart weist in *Atheist Delusions* (2009) darauf hin, dass die große Hexenverfolgung kein Phänomen des „finsteren Mittelalters" war, sondern der frühen Neuzeit – der Epoche von Renaissance, wissenschaftlicher Revolution und aufkommendem Staat. Das Mittelalter hatte den Hexenglauben weithin als Aberglauben behandelt. Die Verfolgungen waren am heftigsten dort, wo die zentrale kirchliche Autorität schwach und lokale weltliche Gerichte stark waren. Für Hart widerlegt das die Erzählung, die Kirche habe aus Glaubenseifer Hexen gejagt, bis die Vernunft sie bremste.`,
      sources: [{ kind: 'fachliteratur', author: 'David Bentley Hart', work: 'Atheist Delusions', year: '2009', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'millionen-opfer',
      objection: `Die Inquisition hat Millionen Menschen gefoltert und verbrannt. Allein die Hexenverbrennungen kosteten Millionen Frauen das Leben.`,
      objectionBy: 'Karlheinz Deschner',
      answer: `Jedes Opfer ist eines zu viel – aber die Zahlen der Legende stimmen nicht. Für die Spanische Inquisition schätzen Historiker in 350 Jahren etwa 3.000 bis 5.000 Hinrichtungen; eine Auswertung von rund 44.000 Verfahren fand eine Hinrichtungsquote von unter 2 %. Für die Hexenverfolgung in ganz Europa schätzt Brian Levack etwa 45.000 Hinrichtungen. Ich nenne diese Zahlen nicht, um das Unrecht kleinzureden, sondern weil die Wahrheit auch für die Opfer zählt.`,
      questionsBack: [
        `Woher stammt die Zahl der Millionen – und hast du sie einmal überprüft?`,
      ],
      followUps: [
        {
          id: 'zynisch-zahlen',
          objection: `„Nur" 45.000? Das ist zynisch. Als ob Massenmord durch kleinere Zahlen besser würde.`,
          objectionBy: 'Christopher Hitchens',
          answer: `Du hast völlig recht, das Unrecht wird durch kleinere Zahlen nicht kleiner – und ich sage auch nicht „nur". Jede dieser Frauen und Männer wurde gefoltert und getötet, und Christen tragen dafür Schuld. Ich korrigiere die Zahlen, weil wir einander die Wahrheit schulden. Und die Wahrheit ist: Diese Verfolgungen widersprechen Jesus, der seine Jünger tadelte, als sie Feuer vom Himmel auf ein Dorf herabrufen wollten (Lk 9,54–55).`,
          followUps: [
            {
              id: 'augustinus-compelle',
              objection: `Die Kirche hat die Verfolgung aber theologisch begründet – Augustinus mit „Nötige sie hereinzukommen" (Lk 14,23). Das war keine Entgleisung, sondern Lehre.`,
              objectionBy: 'Karlheinz Deschner',
              answer: `Das ist ein wichtiger und richtiger Punkt: Augustinus' Rechtfertigung staatlichen Zwangs gegen die Donatisten hat im Westen verhängnisvoll nachgewirkt – das ist ein ehrliches Zugeständnis. Aber sie war nicht die Lehre der ganzen Kirche: Tertullian schrieb, es gehöre nicht zur Religion, Religion zu erzwingen; Laktanz forderte, den Glauben durch Sterben, nicht durch Töten zu verteidigen; der koptische Papst Athanasius lehrte, wahre Frömmigkeit zwinge nicht, sondern überzeuge. Die koptische Kirche ist dieser Linie gefolgt.`,
              followUps: [
                {
                  id: 'thomas-ketzer-tod',
                  objection: `Nicht nur Augustinus: Thomas von Aquin, euer größter Theologe, lehrte ausdrücklich, dass rückfällige Ketzer der weltlichen Gewalt zur Hinrichtung übergeben werden sollen. Die Inquisition war keine Entgleisung, sondern konsequente Theologie.`,
                  objectionBy: 'Karlheinz Deschner',
                  answer: `Das stimmt: Thomas verteidigte in der *Summa* (II-II, q. 11, a. 3) die Todesstrafe für hartnäckige Ketzer – das ist ein schwerer Irrtum, und ich beschönige ihn nicht. Aber Thomas ist für die koptische Kirche keine Lehrautorität, und er steht gegen eine ältere Stimme: Johannes Chrysostomus sagte in seiner Auslegung des Gleichnisses vom Unkraut, einen Ketzer zu töten heiße, einen unversöhnlichen Krieg in die Welt zu bringen – man dürfe Irrlehrer zum Schweigen bringen, aber nicht töten. Jesus selbst verbot, das Unkraut auszureißen (Mt 13,29–30).`,
                  detail: `Thomas argumentierte, wer den Glauben verfälsche, tue Schlimmeres als ein Falschmünzer, der nach damaligem Recht hingerichtet wurde. Das zeigt, wie sehr er in den Rechtsvorstellungen seiner Zeit dachte. Die katholische Kirche selbst hat diese Lehre mit dem Zweiten Vatikanischen Konzil (*Dignitatis humanae*, 1965) aufgegeben, und Johannes Paul II. bat im Jahr 2000 öffentlich um Vergebung für Gewalt im Dienst der Wahrheit. Für dein Gespräch: Gib den Irrtum offen zu – und zeig, dass das Gleichnis Jesu selbst die Alternative ist.`,
                  voices: [
                    { person: 'chrysostomus', role: 'als Ausleger des Unkraut-Gleichnisses', text: `Chrysostomus deutet in seiner 46. Matthäus-Homilie das Verbot, das Unkraut auszureißen, als Verbot, Häretiker zu töten. Man dürfe ihre Versammlungen hindern und ihnen widersprechen, aber Blut zu vergießen hieße, dass mit dem Unkraut auch der Weizen ausgerissen werde – denn viele, die heute irren, könnten morgen umkehren.` },
                  ],
                  sources: [
                    { kind: 'fachliteratur', author: 'Thomas von Aquin', work: 'Summa theologiae', ref: 'II-II, q. 11, a. 3', year: '1265–1273', quote: `Ketzer verdienten nicht nur den Ausschluss aus der Kirche, sondern auch durch den Tod aus der Welt ausgeschlossen zu werden.`, status: 'paraphrase' },
                    { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum Matthäusevangelium', ref: 'Homilie 46 (47), zu Mt 13,24–30', year: 'um 390', quote: `Einen Häretiker zu töten hieße, einen unversöhnlichen Krieg in die Welt zu bringen.`, status: 'paraphrase' },
                  ],
                  followUps: [
                    {
                      id: 'byzanz-bogomilen',
                      objection: `Und eure östliche Orthodoxie? Kaiser Alexios I. ließ um 1118 den Bogomilen Basilius in Konstantinopel öffentlich verbrennen. Die Ostkirche war nicht besser.`,
                      objectionBy: 'Christopher Hitchens',
                      answer: `Das stimmt, Anna Komnene berichtet es selbst, und es war Unrecht. Ich behaupte nicht, dass östliche Christen frei von dieser Sünde waren. Die koptische Kirche kennt allerdings die andere Seite: Sie wurde vom byzantinischen Reich selbst verfolgt, weil sie das Konzil von Chalkedon ablehnte – Patriarchen wurden vertrieben, Gläubige drangsaliert. Die Lehre daraus ist dieselbe wie im Westen: Wo Kirche und Staatsmacht verschmelzen, wird aus dem Zeugnis ein Zwang. Das Evangelium selbst gibt der Kirche kein Schwert.`,
                      detail: `Die Kopten erinnern an diese Zeit etwa mit dem Patriarchen Benjamin I., der sich im 7. Jahrhundert vor dem byzantinischen Statthalter Kyros jahrelang in der Wüste verbergen musste, während sein Bruder Menas gefoltert und ertränkt wurde (nach der *Geschichte der Patriarchen*). Das gibt der koptischen Stimme in dieser Debatte besondere Glaubwürdigkeit: Sie spricht als Kirche der Verfolgten, nicht der Verfolger.`,
                      sources: [
                        { kind: 'sonstiges', author: 'Anna Komnene', work: 'Alexias', ref: 'XV,8–10', year: 'um 1148', status: 'paraphrase', note: 'Bericht über den Prozess und die Verbrennung des Bogomilen Basilius.' },
                        { kind: 'koptisch', author: 'Severus ibn al-Muqaffa (zugeschrieben)', work: 'Geschichte der Patriarchen der koptischen Kirche von Alexandrien', ref: 'Vita Benjamins I.', status: 'paraphrase' },
                      ],
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
      id: 'neun-millionen-hexen',
      objection: `Neun Millionen Frauen wurden als Hexen verbrannt – ein Genozid der Kirche an Frauen, ein „Frauenholocaust".`,
      objectionBy: 'Matilda Joslyn Gage',
      answer: `Diese Zahl ist widerlegt. Sie geht auf eine Hochrechnung des Quedlinburger Gelehrten Gottfried Christian Voigt von 1784 zurück, wurde im 19. Jahrhundert von Matilda Joslyn Gage verbreitet und später von der NS-Propaganda gegen die Kirche benutzt. Die heutige Forschung schätzt etwa 40.000 bis 60.000 Hinrichtungen, davon ein erheblicher Teil Männer. Und die meisten Urteile fällten weltliche Gerichte, nicht die Inquisition – die Spanische Inquisition hielt Hexerei nach den Untersuchungen Alonso de Salazars sogar weitgehend für Einbildung.`,
      followUps: [
        {
          id: 'hexenhammer-bulle',
          objection: `Aber der *Hexenhammer* eines Dominikaners und die päpstliche Bulle von 1484 haben die Verfolgung doch erst angeheizt.`,
          objectionBy: 'Karlheinz Deschner',
          answer: `Die Bulle *Summis desiderantes* Innozenz' VIII. gab Heinrich Kramer tatsächlich Vollmachten – ein schwerer Fehler. Aber sein *Hexenhammer* war nie ein offizielles Kirchenbuch; Kramer war kurz zuvor vom Bischof von Brixen nach einem gescheiterten Prozess in Innsbruck des Landes verwiesen worden. Und die Kirche hatte im Frühmittelalter den Hexenglauben selbst bekämpft: Der *Canon Episcopi* nannte Hexenflüge Einbildung, und Karl der Große drohte jedem die Todesstrafe an, der eine vermeintliche Hexe verbrannte.`,
          followUps: [
            {
              id: 'christen-verbrannten',
              objection: `Am Ende waren es trotzdem Christen, die die Scheiterhaufen anzündeten – katholische wie protestantische.`,
              objectionBy: 'Christopher Hitchens',
              answer: `Ja, das ist christliche Schuld, katholische wie protestantische, und ich nenne sie beim Namen. Aber auch die Stimmen, die die Hexenjagd beendeten, waren christlich: der Jesuit Friedrich Spee, der als Beichtvater die Unschuld der Verurteilten erkannte und 1631 die *Cautio Criminalis* schrieb; der protestantische Arzt Johann Weyer; der Jesuit Adam Tanner; der Inquisitor Alonso de Salazar. Sie beriefen sich auf Gerechtigkeit und Nächstenliebe – also auf das Evangelium gegen seine Verfälschung.`,
              followUps: [
                {
                  id: 'federici-hebammen-frauenkrieg',
                  objection: `Die Hexenjagd war ein Krieg gegen Frauen: gegen Hebammen, Heilerinnen, weibliches Wissen über Körper und Geburt. Eine patriarchale Kirche hat die Kontrolle über Frauenkörper mit Feuer durchgesetzt.`,
                  objectionBy: 'Silvia Federici',
                  answer: `Frauenfeindliche Vorurteile spielten eine Rolle – im *Hexenhammer* sind sie unübersehbar, und rund drei Viertel der Opfer waren Frauen. Aber die Forschung zeichnet ein differenzierteres Bild: In manchen Regionen, etwa Island, Estland oder der Normandie, waren die meisten Angeklagten Männer. Hebammen waren unter den Opfern nicht überdurchschnittlich vertreten – der Medizinhistoriker David Harley nennt die „Hebammen-Hexe" einen Mythos. Die meisten Anklagen kamen aus Nachbarschaftskonflikten im Dorf, und die meisten Prozesse führten weltliche Gerichte.`,
                  detail: `Auffällig ist, dass gerade kirchliche Institutionen mit eigener Gerichtsbarkeit oft bremsten: Die Spanische Inquisition kam nach den Untersuchungen des Inquisitors Alonso de Salazar Frías (1611–1614) zu dem Schluss, es gebe keine Beweise für Hexerei, und verhinderte danach weitgehend Hexenverbrennungen in Spanien. Die schlimmsten Verfolgungen fanden in zersplitterten Territorien des Reiches mit schwacher Zentralgewalt statt. Das entschuldigt nichts – aber wer die Hexenjagd als Plan „der Kirche" gegen „die Frauen" darstellt, vereinfacht eine komplexe Tragödie.`,
                  sources: [
                    { kind: 'gegner', author: 'Silvia Federici', work: 'Caliban and the Witch: Women, the Body and Primitive Accumulation', year: '2004', status: 'paraphrase' },
                    { kind: 'wissenschaft', author: 'David Harley', work: '„Historians as Demonologists: The Myth of the Midwife-Witch", Social History of Medicine 3', year: '1990', status: 'paraphrase' },
                    { kind: 'fachliteratur', author: 'Gustav Henningsen', work: 'The Witches\' Advocate: Basque Witchcraft and the Spanish Inquisition (1609–1614)', year: '1980', status: 'paraphrase', note: 'Zur Rolle des Inquisitors Alonso de Salazar Frías.' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'absolute-wahrheit-verfolgung',
      objection: `Inquisition zeigt: Wer absolute Wahrheit beansprucht, wird zwangsläufig zum Verfolger. Nur die Aufklärung hat uns davor bewahrt.`,
      objectionBy: 'Christopher Hitchens',
      answer: `Das eigentliche Problem war die Verbindung von kirchlicher Wahrheit und staatlicher Gewalt. Die koptische Kirche kennt das als Opfer: Nach 451 verfolgte die byzantinische Reichskirche die Kopten; Papst Benjamin I. musste sich jahrelang verstecken. Jesus hat Gott und Kaiser unterschieden (Mt 22,21) und sein Reich „nicht von dieser Welt" genannt. Und säkulare absolute Wahrheiten haben ebenfalls verfolgt – die Jakobiner in der Französischen Revolution oder die sowjetischen Geheimdienste. Der Wahrheitsanspruch ist nicht das Problem, sondern der Griff zur Macht.`,
      followUps: [
        {
          id: 'religionsfreiheit-aufklaerung',
          objection: `Religionsfreiheit verdanken wir der Aufklärung, nicht der Kirche. Die Kirche hat sie bis ins 20. Jahrhundert bekämpft.`,
          objectionBy: 'Steven Pinker',
          answer: `Die Aufklärung hat Religionsfreiheit politisch durchgesetzt, das ist richtig – und manche Kirchen haben sich lange dagegen gesträubt. Aber die Idee ist älter: Tertullian sprach um 200 von der „Freiheit der Religion", Laktanz verteidigte sie, und in der Neuzeit kämpften Christen wie Roger Williams und William Penn für Gewissensfreiheit, bevor sie zum Programm der Aufklärer wurde. Die Gewissensfreiheit wurzelt in der christlichen Überzeugung, dass Glaube eine freie Antwort auf Gott ist.`,
          followUps: [
            {
              id: 'nur-als-verfolgte',
              objection: `Tertullian und Laktanz haben Religionsfreiheit gefordert, solange Christen verfolgt wurden. Kaum waren sie an der Macht, machte Theodosius Ketzerei zum Staatsverbrechen. Toleranz war nur die Taktik der Schwachen.`,
              objectionBy: 'Steven Pinker',
              answer: `Da hast du einen unbequemen Punkt, den ich zugebe: Mit der Reichskirche kamen Zwangsgesetze, und viele Bischöfe haben sie begrüßt. Aber das Prinzip ging nicht verloren, und es waren wieder Christen, die es gegen die Kirche ihrer Zeit erneuerten: Sebastian Castellio protestierte 1554 nach der Verbrennung Servets in Genf mit dem Satz: „Einen Menschen töten heißt nicht, eine Lehre verteidigen, sondern einen Menschen töten." Roger Williams gründete Rhode Island als Zuflucht der Gewissensfreiheit, mit biblischen Argumenten.`,
              detail: `Die Täufer und später die Baptisten forderten die Trennung von Kirche und Staat lange vor den meisten Aufklärern – und bezahlten dafür oft mit dem Leben. Auch die Väter, die sich auf der Seite der Macht befanden, kannten die Alternative: Athanasius schrieb, die Wahrheit werde nicht mit Schwertern und Soldaten verkündet, sondern durch Überzeugung. Die Geschichte zeigt also nicht, dass Christen nur aus Schwäche tolerant waren, sondern dass Christen mit Macht ihre eigenen Prinzipien verraten haben – und von anderen Christen daran erinnert wurden.`,
              sources: [
                { kind: 'sonstiges', author: 'Sebastian Castellio', work: 'Contra libellum Calvini', year: '1554', quote: `Einen Menschen töten heißt nicht, eine Lehre verteidigen, sondern einen Menschen töten.`, original: 'Hominem occidere, non est doctrinam tueri, sed est hominem occidere.', status: 'verbatim', note: 'Geschrieben nach der Hinrichtung Michael Servets in Genf (1553); erst 1612 gedruckt.' },
                { kind: 'sonstiges', author: 'Roger Williams', work: 'The Bloudy Tenent of Persecution for Cause of Conscience', year: '1644', status: 'paraphrase' },
                { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Geschichte der Arianer (Historia Arianorum)', ref: '33', year: 'um 357', quote: `Die Wahrheit wird nicht mit Schwertern und Pfeilen noch durch Soldaten verkündet, sondern durch Überzeugung und Rat.`, status: 'paraphrase' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'galilei-bruno',
      objection: `Und Galilei? Und Giordano Bruno, der verbrannt wurde? Die Inquisition hat die Wissenschaft unterdrückt.`,
      objectionBy: 'Richard Dawkins',
      answer: `Beide Fälle haben eigene Themen, weil sie oft verzerrt dargestellt werden: Bruno wurde 1600 vor allem wegen theologischer Lehren (etwa zur Trinität und zur Gottheit Christi) verurteilt, nicht wegen Astronomie – was seine Hinrichtung nicht weniger falsch macht. Galilei wurde zum Widerruf gezwungen und unter Hausarrest gestellt, aber nicht gefoltert oder hingerichtet; der Konflikt hatte viele politische und persönliche Ursachen. Beide Fälle sind Unrecht, aber sie belegen keinen grundsätzlichen Krieg der Kirche gegen die Wissenschaft.`,
    },
    {
      id: 'limpieza-de-sangre',
      objection: `Die Spanische Inquisition hat getaufte Juden – die Conversos – jahrhundertelang verdächtigt und verfolgt. Mit den Statuten der „Reinheit des Blutes" erfand das katholische Spanien den rassischen Antisemitismus: Selbst die Taufe half nicht mehr.`,
      objectionBy: 'Ibram X. Kendi',
      answer: `Das ist ein schweres und berechtigtes Kapitel. Die Blutreinheits-Statuten (*limpieza de sangre*), erstmals 1449 in Toledo, schlossen Christen jüdischer Herkunft von Ämtern aus – ein Verrat an der Taufe. Aber sie wurden sofort als unchristlich verurteilt: Papst Nikolaus V. erklärte noch im selben Jahr in der Bulle *Humani generis inimicus*, alle Getauften seien ein Leib in Christus, und der Bischof Alonso de Cartagena, selbst jüdischer Herkunft, verteidigte in einer eigenen Schrift die Einheit der Christen. Die Statuten waren kein Ausdruck des Glaubens, sondern seine Leugnung.`,
      detail: `Theologisch ist der Fall eindeutig: „Hier ist nicht Jude noch Grieche … denn ihr seid allesamt einer in Christo Jesu" (Gal 3,28). Eine Kirche, die Getaufte nach ihrer Abstammung sortiert, widerspricht ihrer eigenen Taufe. Kendi hat recht, dass hier Herkunft zur unauslöschlichen Kategorie gemacht wurde – ein Vorläufer späteren Rassedenkens. Aber er übersieht, dass der Widerspruch dagegen aus der christlichen Theologie selbst kam.`,
      sources: [
        { kind: 'sonstiges', author: 'Papst Nikolaus V.', work: 'Bulle „Humani generis inimicus"', year: '1449', quote: `Verurteilung der Toledaner Ausschlussbestimmungen gegen Neuchristen; alle Getauften bildeten einen Leib in Christus.`, status: 'paraphrase' },
        { kind: 'sonstiges', author: 'Alonso de Cartagena', work: 'Defensorium unitatis christianae', year: '1449/1450', status: 'paraphrase', note: 'Bischof von Burgos, Sohn eines konvertierten Rabbiners.' },
        { kind: 'bibel', work: 'Galater', ref: '3,28', quote: `Hier ist kein Jude noch Grieche, hier ist kein Knecht noch Freier, hier ist kein Mann noch Weib; denn ihr seid allzumal einer in Christo Jesu.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'bulle-folgenlos',
          objection: `Die päpstliche Bulle blieb folgenlos: Die Statuten galten in Spanien bis ins 19. Jahrhundert, und die Inquisition hat sie mitgetragen. Papier ist geduldig.`,
          objectionBy: 'Hector Avalos',
          answer: `Das stimmt, und es ist beschämend: Die Statuten setzten sich durch, auch in kirchlichen Orden, und Rom hat sie später geduldet. Gegen diesen Verrat gab es aber bis zuletzt Widerstand – Ignatius von Loyola etwa lehnte es ab, Bewerber jüdischer Herkunft auszuschließen, und sein Nachfolger Diego Laínez stammte selbst aus einer Converso-Familie. Ich verteidige nicht, was Christen taten, sondern den Maßstab, an dem sie scheiterten. Und dieser Maßstab ist eindeutig: Taufe vor Abstammung.`,
          detail: `Die Gesellschaft Jesu führte erst 1593 – nach dem Tod des Ignatius und gegen seinen erklärten Willen – selbst eine Herkunftsbeschränkung ein, die später wieder gelockert wurde. Die Geschichte ist also nicht eine von „der Kirche gegen die Juden", sondern ein Kampf innerhalb der Kirche zwischen dem Evangelium und dem Geist der Zeit, den das Evangelium nicht immer gewann.`,
          sources: [
            { kind: 'fachliteratur', author: 'Robert Aleksander Maryks', work: 'The Jesuit Order as a Synagogue of Jews: Jesuits of Jewish Ancestry and Purity-of-Blood Laws in the Early Society of Jesus', year: '2010', status: 'paraphrase' },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Woher stammt die Zahl von „Millionen" Hexen – und weißt du, was die heutige Forschung sagt?`,
    `Weißt du, dass die meisten Hexenprozesse vor weltlichen Gerichten stattfanden?`,
    `Kennst du Friedrich Spee oder Alonso de Salazar – Christen, die die Hexenjagd bekämpften?`,
    `An welchem Maßstab misst du die Inquisition – und widerspricht nicht gerade Jesu Lehre ihrem Vorgehen?`,
  ],
  avoid: [
    `Die Inquisition verharmlosen oder „verteidigen". Zahlen korrigieren heißt nicht, das Unrecht zu relativieren.`,
    `Behaupten, nur Katholiken hätten Hexen verfolgt. Auch protestantische Gebiete führten Hexenprozesse.`,
    `Die Opfer gegeneinander aufrechnen („die Atheisten haben mehr getötet") – das wirkt kalt und lenkt ab.`,
  ],
  concessions: [
    `Kirchliche Gerichte haben Andersgläubige verfolgt, gefoltert und an weltliche Behörden zur Hinrichtung übergeben.`,
    `Eine päpstliche Bulle (1484) stärkte den Hexenverfolger Heinrich Kramer; Christen beider Konfessionen haben Hexen verbrannt.`,
    `Die Spanische Inquisition verfolgte besonders Konvertiten jüdischer und muslimischer Herkunft – im Zusammenhang mit Zwangstaufen und der Vertreibung der Juden 1492.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Henry Kamen', work: 'The Spanish Inquisition: A Historical Revision', year: '4. Aufl. 2014', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Brian P. Levack', work: 'The Witch-Hunt in Early Modern Europe', year: '4. Aufl. 2016', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Edward Peters', work: 'Inquisition', year: '1988', status: 'paraphrase' },
    { kind: 'sonstiges', author: 'Friedrich Spee', work: 'Cautio Criminalis', year: '1631', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Inquisition', 'Hexenverfolgung', 'Friedrich Spee', 'Religionsfreiheit', 'Schwarze Legende', 'Zahlen'],
  related: [
    'religion-gewalt/religion-verursacht-kriege',
    'religion-gewalt/kreuzzuege',
    'kirchengeschichte-mythen/galilei',
    'kirchengeschichte-mythen/giordano-bruno',
    'at-ethik/grausame-gesetze',
  ],
};

export default claim;
