import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'giordano-bruno',
  title: `„Giordano Bruno wurde für die Wissenschaft verbrannt."`,
  proponents: [
    { name: 'Neil deGrasse Tyson', role: 'Astrophysiker, Moderator', work: 'Cosmos: A Spacetime Odyssey, Episode 1 „Standing Up in the Milky Way" (2014)' },
    { name: 'Andrew Dickson White', role: 'Historiker (†1918)', work: 'A History of the Warfare of Science with Theology (1896)' },
    { name: 'Freidenkerbewegung des 19. Jh.', role: 'Errichtung des Bruno-Denkmals auf dem Campo de\' Fiori (1889)', work: 'Bruno als „Märtyrer des freien Denkens"' },
  ],
  steelman: `Giordano Bruno lehrte, dass das Universum unendlich ist, dass die Sterne ferne Sonnen sind, um die Planeten kreisen, und dass es unzählige bewohnte Welten gibt – Jahrhunderte, bevor die Astronomie Exoplaneten entdeckte. Dafür saß er sieben Jahre in den Kerkern der Inquisition und wurde am 17. Februar 1600 auf dem Campo de' Fiori in Rom lebendig verbrannt, mit einem Knebel im Mund. Die Kirche hat ihn nie rehabilitiert. Er ist das Urbild des Wissenschaftlers, den die Religion zum Schweigen bringen wollte – darum zeigt ihn „Cosmos" (2014) gleich in der ersten Folge.`,
  biblical: {
    summary: `Das Evangelium verbietet Gewalt im Namen des Glaubens: Jesus weist Petrus zurecht, der das Schwert zieht (Mt 26,52), und sagt: „Mein Reich ist nicht von dieser Welt" (Joh 18,36). Der Glaube wird durch Zeugnis und Überzeugung weitergegeben, nicht durch Zwang (2 Tim 2,24–25). Die Hinrichtung Brunos widerspricht diesem Geist. Zugleich ist ehrlich festzuhalten: Bruno vertrat Lehren, die das Herz des christlichen Glaubens bestritten – die Dreieinigkeit, die Gottheit Christi, die Menschwerdung.`,
    sources: [
      { kind: 'bibel', work: 'Matthäus', ref: '26,52', quote: `Da sprach Jesus zu ihm: Stecke dein Schwert an seinen Ort! denn wer das Schwert nimmt, der soll durchs Schwert umkommen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '18,36', quote: `Jesus antwortete: Mein Reich ist nicht von dieser Welt.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Timotheus', ref: '2,24–25', quote: `Ein Knecht des Herrn soll nicht zänkisch sein, sondern freundlich gegen jedermann … und mit Sanftmut die Widerspenstigen zurechtweisen.`, status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die Alte Kirche lehrte, dass der Glaube nicht erzwungen werden darf: Tertullian schrieb, es gehöre nicht zur Religion, Religion zu erzwingen; Laktanz, dass Religion durch Sterben, nicht durch Töten verteidigt werde. Die koptische Kirche, die über Jahrhunderte selbst Verfolgung erlitt, kennt das Märtyrertum aus der Perspektive der Opfer. Die Hinrichtung von Andersdenkenden durch kirchlich-staatliche Gewalt im frühneuzeitlichen Europa – katholisch wie protestantisch – ist ein Verrat am Evangelium und muss so benannt werden.`,
    sources: [
      { kind: 'kirchenvater', author: 'Tertullian', work: 'An Scapula (Ad Scapulam)', ref: '2', year: '212', quote: `Es ist nicht Sache der Religion, Religion zu erzwingen; sie muss freiwillig angenommen werden, nicht mit Gewalt.`, original: `nec religionis est cogere religionem, quae sponte suscipi debeat, non vi`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Laktanz', work: 'Göttliche Unterweisungen (Divinae Institutiones)', ref: 'V,19–20', year: 'ca. 305–310', quote: `Die Religion muss nicht durch Töten, sondern durch Sterben verteidigt werden, nicht durch Grausamkeit, sondern durch Geduld.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die Wissenschaftsgeschichte ist sich weitgehend einig: Bruno war kein Naturwissenschaftler im modernen Sinn und wurde nicht primär wegen kosmologischer Thesen verurteilt. Seit Frances Yates (1964) gilt er als hermetischer Philosoph und Magier, dessen Kopernikanismus Teil einer pantheistisch-magischen Weltsicht war. Die Anklagen umfassten die Leugnung der Dreieinigkeit, der Gottheit Christi und der Transsubstantiation, Zweifel an der Jungfräulichkeit Marias, Seelenwanderung und Magie – aber auch die Lehre unzähliger Welten. Die vollständigen Prozessakten sind verloren; eine Zusammenfassung (Sommario) wurde 1940 entdeckt. Einzelne Forscher (Hilary Gatti) betonen stärker die Bedeutung seiner Naturphilosophie.`,
    sources: [
      { kind: 'fachliteratur', author: 'Frances A. Yates', work: 'Giordano Bruno and the Hermetic Tradition', year: '1964', quote: `Bruno als Vertreter der hermetisch-magischen Tradition der Renaissance; sein Kopernikanismus diente einer religiös-magischen Weltdeutung.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Jole Shackelford', work: 'That Giordano Bruno Was the First Martyr of Modern Science. In: R. L. Numbers (Hg.), Galileo Goes to Jail', year: '2009', quote: `Bruno wurde wegen theologischer Häresien verurteilt; er war kein Märtyrer der modernen Naturwissenschaft.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Hilary Gatti', work: 'Giordano Bruno and Renaissance Science', year: '1999', quote: `Brunos Naturphilosophie habe für die Entwicklung des neuzeitlichen Denkens größere Bedeutung, als Yates annahm.`, status: 'paraphrase', note: 'Fairerweise nennen: eine Gegenstimme zur Yates-Linie.' },
      { kind: 'gegner', author: 'Neil deGrasse Tyson', work: 'Cosmos: A Spacetime Odyssey, Episode 1', year: '2014', quote: `Bruno sei kein Wissenschaftler gewesen; seine Vision des Kosmos sei eine glückliche Vermutung ohne Belege gewesen – dennoch stellt die Folge ihn als Opfer kirchlicher Unterdrückung des Denkens dar.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Brunos Hinrichtung war ein schweres Unrecht – das sage ich klar. Aber er wurde nicht „für die Wissenschaft" verbrannt. Er war ein Philosoph und Magier, der die Dreieinigkeit, die Gottheit Christi und die Eucharistie leugnete und Seelenwanderung lehrte; das waren die Hauptanklagen. Seine Idee unendlicher Welten war Spekulation, keine Beobachtung – sogar Tyson sagt in „Cosmos", Bruno sei kein Wissenschaftler gewesen, nur ein glücklicher Rater. Und der Kardinal Nikolaus von Kues hatte schon 150 Jahre vorher über ein grenzenloses Universum und bewohnte Sterne geschrieben – ohne verfolgt zu werden.`,
  keyPoints: [
    `**Zugeständnis:** Die Hinrichtung eines Menschen für seine Überzeugungen war Unrecht und widerspricht dem Evangelium.`,
    `**Hauptanklagen theologisch:** Leugnung von Dreieinigkeit, Gottheit Christi, Transsubstantiation, Jungfräulichkeit Marias; Seelenwanderung; Magie.`,
    `**Kein Naturwissenschaftler:** keine Beobachtungen, keine Mathematik, hermetisch-magische Weltsicht (Yates 1964).`,
    `**Die Idee vieler Welten war nicht neu und nicht per se verboten:** Nikolaus von Kues spekulierte im 15. Jh. darüber; die Pariser Verurteilungen von 1277 verwarfen sogar die These, Gott könne keine mehreren Welten erschaffen.`,
    `**Konfessionsübergreifende Intoleranz:** Bruno wurde auch von Calvinisten in Genf und Lutheranern in Helmstedt exkommuniziert – Zwang war ein Übel der frühneuzeitlichen Staatskirchen.`,
  ],
  voices: [
    {
      person: 'stanley-jaki',
      role: 'als Physiker, Wissenschaftshistoriker und Bruno-Übersetzer',
      text: `Jaki hat Brunos „Aschermittwochsmahl" (La Cena de le Ceneri) ins Englische übersetzt und eingeleitet. Sein Urteil ist nüchtern: Bruno verstand die mathematische Astronomie des Kopernikus kaum und benutzte sie als Bühne für eine pantheistische Metaphysik, in der die Welt beseelt und unendlich ist. Wer Bruno zum Vorläufer der modernen Physik macht, verwechselt poetische Spekulation mit Wissenschaft. Gerade deshalb hält Jaki fest: Brunos Verurteilung war ein Akt religiöser Intoleranz, kein Konflikt zwischen Kirche und Naturwissenschaft.`,
      sources: [
        { kind: 'fachliteratur', author: 'Stanley L. Jaki', work: 'Giordano Bruno, The Ash Wednesday Supper (Übersetzung und Einleitung)', year: '1975', quote: `Bruno als Spekulant ohne wissenschaftliche Methode; sein Kopernikanismus im Dienst einer pantheistischen Metaphysik.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'hart',
      role: 'als Kritiker der neuatheistischen Geschichtsschreibung',
      text: `Hart kritisiert in „Atheist Delusions", dass populäre Religionskritik historische Ereignisse zu moralischen Fabeln umformt: Bruno wird zum aufgeklärten Forscher stilisiert, obwohl er ein esoterischer Mystiker war, dessen Weltbild uns heute fremder wäre als das seiner Richter. Hart verteidigt das Urteil nicht – er nennt die Gewalt frühneuzeitlicher Staaten und Kirchen beim Namen –, aber er verlangt, dass man die Vergangenheit erzählt, wie sie war, nicht wie sie in eine Fortschrittserzählung passt.`,
      sources: [
        { kind: 'fachliteratur', author: 'David Bentley Hart', work: 'Atheist Delusions. The Christian Revolution and Its Fashionable Enemies', year: '2009', quote: `Kritik der Mythen populärer Religionskritik über Wissenschaftsfeindlichkeit der Kirche.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'tertullian',
      role: 'als früher Verteidiger der Religionsfreiheit',
      text: `Tertullian schrieb in einer Zeit, als Christen selbst verfolgt wurden, an den Statthalter Scapula: Jeder Mensch habe nach natürlichem Recht die Freiheit, zu verehren, was er für richtig hält; Religion lasse sich nicht erzwingen. Dieser Grundsatz der frühen Kirche verurteilt im Rückblick auch, was später christliche Obrigkeiten an Zwang ausübten. Der Fall Bruno ist ein Beispiel dafür, wie weit sich die Kirche des 16. Jahrhunderts von dieser eigenen Tradition entfernt hatte.`,
      sources: [
        { kind: 'kirchenvater', author: 'Tertullian', work: 'Ad Scapulam', ref: '2', year: '212', quote: `Religion darf nicht erzwungen werden.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'peter-harrison',
      role: 'als Wissenschaftshistoriker',
      text: `Harrison zeigt, dass Erzählungen wie die von Bruno im 19. Jahrhundert gezielt zur Untermauerung der Konfliktthese eingesetzt wurden – das Bruno-Denkmal auf dem Campo de' Fiori wurde 1889 von antiklerikalen Kreisen gegen den Papst errichtet. Die historische Figur Bruno passt nicht in die Rolle des „Märtyrers der Wissenschaft"; sie wurde ihm nachträglich übergestülpt.`,
      sources: [
        { kind: 'fachliteratur', author: 'Peter Harrison', work: 'The Territories of Science and Religion', year: '2015', quote: `Die Konfliktthese als Konstruktion des 19. Jahrhunderts.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'maertyrer-wissenschaft',
      objection: `Bruno lehrte, dass die Sterne Sonnen mit eigenen Planeten sind, und wurde dafür verbrannt. Er ist ein Märtyrer der Wissenschaft.`,
      objectionBy: 'Neil deGrasse Tyson',
      answer: `Seine Hinrichtung war Unrecht, ohne jede Einschränkung. Aber die Hauptanklagen waren theologisch: Er leugnete die Dreieinigkeit, die Gottheit Christi, die Eucharistie und lehrte Seelenwanderung und Magie. Die Lehre unzähliger Welten gehörte zwar zu den Vorwürfen – aber als Teil seiner pantheistischen Metaphysik, nicht als wissenschaftliche Beobachtung. Nikolaus von Kues, ein Kardinal, hatte schon im 15. Jahrhundert über ein grenzenloses All und bewohnte Sterne geschrieben.`,
      followUps: [
        {
          id: 'akten-verloren',
          objection: `Die Prozessakten sind verloren. Du kannst gar nicht wissen, dass die Kosmologie nicht entscheidend war.`,
          objectionBy: 'Neil deGrasse Tyson',
          answer: `Richtig, die vollständigen Akten sind verloren – das muss man ehrlich sagen. Erhalten sind aber die Anzeigen seines Gastgebers Mocenigo und eine 1940 entdeckte Zusammenfassung des Verfahrens. Sie zeigen, dass die theologischen Anklagen im Vordergrund standen. Darum kommen Historiker wie Frances Yates, Jole Shackelford und sogar der atheistische Blogger Tim O'Neill zum Schluss, dass Bruno kein Märtyrer der Naturwissenschaft war.`,
          followUps: [
            {
              id: 'gatti-gegenstimme',
              objection: `Hilary Gatti hat gezeigt, dass Brunos Naturphilosophie viel wichtiger war, als Yates meinte.`,
              objectionBy: 'Hilary Gatti',
              answer: `Gatti betont zu Recht Brunos Bedeutung für die Ideengeschichte, und ich verschweige ihre Position nicht. Aber auch sie macht aus ihm keinen empirischen Forscher – er beobachtete nicht, rechnete nicht und verband seine Kosmologie mit Magie und Weltseele. Mein Punkt bleibt: Eine Hinrichtung für irgendeine Überzeugung ist Unrecht. Nur das Etikett „für die Wissenschaft" stimmt nicht.`,
              followUps: [
                {
                  id: 'kopernikaner-bruno-1616',
                  objection: `Bruno verteidigte Kopernikus schon 1584 im „Aschermittwochsmahl". Und nur sechzehn Jahre nach seinem Tod setzte Rom Kopernikus auf den Index. Der Zusammenhang ist doch offensichtlich.`,
                  objectionBy: 'Neil deGrasse Tyson',
                  answer: `Bruno verteidigte Kopernikus tatsächlich – allerdings mit hermetisch-mystischen Argumenten, die selbst Kopernikaner wie Kepler befremdeten. Während seines Prozesses (1592–1600) war das heliozentrische System kirchlich nicht verurteilt; das Dekret von 1616 entstand im Streit um Galilei, nicht um Bruno. Dass die Entscheidung von 1616 ein Fehler war, gebe ich offen zu – das behandeln wir beim Fall Galilei. Aber man kann einen späteren Fehler nicht rückwirkend zum Grund einer früheren Verurteilung machen, deren Anklagepunkte wir kennen.`,
                  sources: [
                    { kind: 'sonstiges', author: 'Giordano Bruno', work: 'La cena de le ceneri (Das Aschermittwochsmahl)', year: '1584', quote: `Verteidigung des kopernikanischen Systems im Rahmen einer naturphilosophisch-hermetischen Weltdeutung.`, status: 'paraphrase' },
                    { kind: 'sonstiges', work: 'Dekret der Indexkongregation', year: '5. März 1616', quote: `Kopernikus' De revolutionibus wird „bis zur Korrektur" (donec corrigatur) suspendiert.`, status: 'paraphrase' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'cosmos-gedankenfreiheit',
      objection: `In „Cosmos" ging es nicht darum, ob Bruno Wissenschaftler war, sondern um Gedankenfreiheit. Die Kirche hat einen Menschen verbrannt, weil er anders dachte.`,
      objectionBy: 'Neil deGrasse Tyson',
      answer: `Da sind wir uns einig: Gedanken- und Gewissensfreiheit sind ein hohes Gut, und Brunos Hinrichtung verletzte sie. Dann sollten wir aber auch sagen: Er war ein Opfer religiöser Intoleranz, nicht ein Opfer von Wissenschaftsfeindlichkeit. Tyson sagt in derselben Folge selbst, Bruno sei kein Wissenschaftler gewesen und seine Vision eine glückliche Vermutung. Wer ihn trotzdem als Wissenschaftsmärtyrer inszeniert, erzählt eine Fabel.`,
      followUps: [
        {
          id: 'nie-rehabilitiert',
          objection: `Die Kirche hat Bruno bis heute nicht rehabilitiert.`,
          objectionBy: 'Populäre Darstellung',
          answer: `Der Vatikan hat sich zum 400. Jahrestag im Jahr 2000 von der Hinrichtung distanziert und sie bedauert, Brunos Lehren aber nicht übernommen – was niemand erwarten kann, da er die Dreieinigkeit und die Gottheit Christi leugnete. Man kann die Gewalt bedauern, ohne die Lehre gutzuheißen. Genau das ist die richtige Haltung.`,
          sources: [
            { kind: 'sonstiges', author: 'Kardinalstaatssekretär Angelo Sodano', work: 'Schreiben zum 400. Jahrestag der Hinrichtung Brunos, an den Dekan der Päpstlichen Theologischen Fakultät Süditaliens (zum Kongress in Neapel, 17.–18. Februar 2000)', ref: '14. Februar 2000', year: '2000', quote: `Brunos grausamer Tod wird als trauriges Kapitel bedauert; zugleich wird den damaligen Richtern zugutegehalten, sie hätten der Wahrheit dienen und sein Leben retten wollen. Eine Rehabilitierung der Lehren Brunos erfolgt nicht.`, status: 'paraphrase', url: 'https://www.vatican.va/roman_curia/secretariat_state/documents/rc_seg-st_doc_20000217_sodano-letter_fr.html', note: 'Existenz, Datum, Adressat und Grundtenor per Websuche bestätigt (Vatikan-Website, französische Fassung; Bulletin des Presseamts vom 17.2.2000). Wortlaut nicht im Original eingesehen – daher nur sinngemäß.' },
          ],
          followUps: [
            {
              id: 'sodano-verteidigt-richter',
              objection: `Schöne „Distanzierung": Sodano hat die Inquisitoren in demselben Schreiben sogar in Schutz genommen – sie hätten der Wahrheit dienen und Brunos Leben retten wollen. Das ist keine Entschuldigung, das ist Schönfärberei.`,
              objectionBy: "Tim O'Neill",
              answer: `Da hast du einen Punkt, und ich teile deine Kritik. Das Schreiben bedauert den Tod, verteidigt aber die Absichten der Richter – das überzeugt mich nicht. Keine gute Absicht rechtfertigt, einen Menschen wegen seiner Überzeugungen lebendig zu verbrennen. Als orthodoxer Christ messe ich das nicht an der Kirchenpolitik irgendeines Jahrhunderts, sondern an Christus, der Petrus das Schwert wegstecken ließ (Mt 26,52). Gemessen daran war Brunos Hinrichtung schlicht Sünde.`,
              detail: `Wichtig für dich: Du verteidigst nicht die römische Inquisition. Die koptische Kirche hatte nie eine Inquisition und war seit dem 5. Jahrhundert überwiegend selbst Minderheit. Dein Argument im Bruno-Fall ist ein historisches (wofür wurde er verurteilt?), kein moralisches Plädoyer für seine Richter. Wer beides trennt, gewinnt Glaubwürdigkeit.`,
              sources: [
                { kind: 'bibel', work: 'Matthäus', ref: '26,52', quote: `Da sprach Jesus zu ihm: Stecke dein Schwert an seinen Ort! denn wer das Schwert nimmt, der soll durchs Schwert umkommen.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              followUps: [
                {
                  id: 'orthodoxe-auch-scheiterhaufen',
                  objection: `Eure Orthodoxie ist nicht besser: Byzanz verbrannte um 1118 den Bogomilen Basileios auf dem Hippodrom, und Russland verbrannte 1682 den Altgläubigen Awwakum. Das ist dieselbe Logik.`,
                  objectionBy: 'Richard Dawkins',
                  answer: `Das stimmt, und ich verteidige es nicht: Beides war Unrecht. Wo immer sich Kirche mit Staatsmacht verband – im Westen wie im Osten –, wurde Gewalt gegen Abweichler gerechtfertigt. Die Lehre daraus ist nicht, dass das Evangelium Gewalt fordert, sondern dass Macht den Glauben verdirbt, wenn Christen zum Schwert greifen. Die Märtyrer der ersten drei Jahrhunderte – und die koptischen Märtyrer bis heute – zeigen, wie das Evangelium aussieht, wenn es nicht von Macht getragen wird.`,
                  sources: [
                    { kind: 'sonstiges', author: 'Anna Komnene', work: 'Alexias', ref: 'XV,8–10', year: 'ca. 1148', quote: `Bericht über die Verurteilung und Verbrennung des Bogomilenführers Basileios unter Kaiser Alexios I.`, status: 'paraphrase' },
                  ],
                  questionsBack: [`Folgt die Gewalt aus der Lehre Jesu – oder aus der Verbindung von Kirche und Staatsgewalt, die du in säkularen Diktaturen ebenso findest?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'bruno-hatte-recht',
      objection: `Bruno hatte recht: Es gibt Sonnen mit Planeten – seit 1995 kennen wir Exoplaneten. Die Kirche lag falsch.`,
      objectionBy: 'Neil deGrasse Tyson',
      answer: `Bruno lag mit einer Spekulation richtig – wie Tyson sagt, ein glücklicher Treffer ohne Belege. Er glaubte aber auch, dass Erde und Sterne beseelte Lebewesen sind, und verband seine Kosmologie mit Magie. Richtig zu raten ist noch keine Wissenschaft. Und die Idee vieler Welten war im christlichen Denken keineswegs tabu: Die Pariser Verurteilungen von 1277 verwarfen ausdrücklich die These, Gott könne keine mehreren Welten erschaffen.`,
      followUps: [
        {
          id: 'cusanus-kardinal',
          objection: `Nikolaus von Kues wurde nur verschont, weil er Kardinal war.`,
          objectionBy: 'Populäre Darstellung',
          answer: `Sein Rang mag geholfen haben. Aber sein Werk wurde gedruckt und gelesen, ebenso wie später der englische Protestant Thomas Digges, der 1576 ein unendliches Sternenall beschrieb. Die Vorstellung vieler Welten wurde im christlichen Raum über Jahrhunderte diskutiert. Bruno wurde nicht für diese Idee allein verurteilt, sondern für ein Bündel von Lehren, die den Kern des Glaubens bestritten.`,
          followUps: [
            {
              id: 'paris-1277-nur-allmacht',
              objection: `Die Pariser Verurteilung von 1277 sollte nur Gottes Allmacht schützen, nicht die Forschungsfreiheit. Duhems These, damit habe die moderne Wissenschaft begonnen, ist längst überholt.`,
              objectionBy: "Tim O'Neill",
              answer: `Einverstanden: Bischof Tempier ging es um Gottes Allmacht, und Pierre Duhems These war überzogen. Aber die Wirkung war real: Weil man nun nicht mehr sagen durfte, Gott *könne* keine anderen Welten oder kein Vakuum schaffen, diskutierten Pariser Gelehrte wie Johannes Buridan und Nikolaus von Oresme Hypothesen jenseits des Aristoteles – etwa eine sich drehende Erde. Das widerlegt zumindest die Behauptung, die Idee vieler Welten sei im christlichen Denken undenkbar gewesen.`,
              voices: [
                {
                  person: 'peter-harrison',
                  role: 'als Wissenschaftshistoriker',
                  text: `Harrison warnt vor beiden Vereinfachungen: vor der Konfliktthese ebenso wie vor der apologetischen Gegenlegende, das Christentum habe die Wissenschaft „erfunden". Er zeigt, dass theologische Annahmen – etwa über Gottes Freiheit und die Kontingenz der Schöpfung – die Naturforschung auf vielfältige Weise geprägt haben, ohne dass man eine einfache Ursache-Wirkungs-Linie ziehen könnte.`,
                  sources: [
                    { kind: 'fachliteratur', author: 'Peter Harrison', work: 'The Territories of Science and Religion', year: '2015', quote: `Die Kategorien „Wissenschaft" und „Religion" sind neuzeitliche Konstrukte; ihre Geschichte ist verwickelter als Konflikt- oder Harmoniethese.`, status: 'paraphrase' },
                  ],
                },
              ],
              sources: [
                { kind: 'fachliteratur', author: 'Edward Grant', work: 'The Foundations of Modern Science in the Middle Ages', year: '1996', quote: `Die Verurteilung von 1277 regte Gedankenexperimente über Möglichkeiten an, die Aristoteles ausgeschlossen hatte.`, status: 'paraphrase' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'katholische-intoleranz',
      objection: `Der Fall zeigt die besondere Intoleranz der katholischen Kirche.`,
      objectionBy: 'Andrew Dickson White',
      answer: `Bruno wurde auch von den Calvinisten in Genf (1579) und den Lutheranern in Helmstedt (1589) exkommuniziert, und Calvins Genf ließ 1553 Michael Servet wegen Leugnung der Dreieinigkeit verbrennen. Zwang in Glaubensfragen war ein Übel der frühneuzeitlichen Verbindung von Kirche und Staat, quer durch die Konfessionen. Das macht es nicht besser – aber es zeigt, dass das Problem die Macht war, nicht die Wissenschaft.`,
      followUps: [
        {
          id: 'christentum-intolerant',
          objection: `Dann ist eben das Christentum an sich intolerant.`,
          objectionBy: 'Richard Dawkins',
          answer: `Die Kirche der ersten Jahrhunderte lehrte das Gegenteil: Tertullian schrieb, Religion dürfe nicht erzwungen werden, Laktanz, sie werde durch Sterben verteidigt, nicht durch Töten. Zwang kam auf, als Kirche und Staatsmacht sich verbanden – und widersprach dem Wort Jesu an Petrus: „Stecke dein Schwert an seinen Ort." Die koptische Kirche, die über Jahrhunderte Verfolgte war, weiß, auf welcher Seite des Schwertes das Evangelium steht.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welche Beobachtungen oder Berechnungen hat Bruno angestellt?`,
    `Wusstest du, dass Bruno die Dreieinigkeit und die Gottheit Christi leugnete und Magie lehrte?`,
    `Warum wurde Nikolaus von Kues für ähnliche Ideen nicht verfolgt?`,
    `Ist es für dich ein Unterschied, ob jemand für Wissenschaft oder für religiöse Überzeugungen getötet wird – und welches Etikett passt hier?`,
  ],
  avoid: [
    `Die Hinrichtung rechtfertigen oder relativieren („damals normal").`,
    `Behaupten, Kosmologie habe im Prozess überhaupt keine Rolle gespielt – die Lehre unzähliger Welten gehörte zu den Anklagepunkten.`,
  ],
  concessions: [
    `Bruno wurde zu Unrecht hingerichtet; die Kirche hat Gewissensfreiheit verletzt.`,
    `Die Vielheit der Welten gehörte zu den Anklagepunkten; die vollständigen Akten sind verloren.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Frances A. Yates', work: 'Giordano Bruno and the Hermetic Tradition', year: '1964', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Ronald L. Numbers (Hg.)', work: 'Galileo Goes to Jail and Other Myths about Science and Religion', year: '2009', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Tim O\'Neill', work: 'History for Atheists (Blog): Beiträge zu Giordano Bruno', status: 'paraphrase', url: 'https://historyforatheists.com', note: 'Atheistischer Historiker, der populäre Mythen über Religion und Wissenschaft widerlegt.' },
  ],
  difficulty: 2,
  tags: ['Giordano Bruno', 'Inquisition', 'Konfliktthese', 'Cosmos', 'Religionsfreiheit'],
  related: ['kirchengeschichte-mythen/galilei', 'religion-gewalt/inquisition-hexen', 'kirchengeschichte-mythen/finsteres-mittelalter-flache-erde'],
};

export default claim;
