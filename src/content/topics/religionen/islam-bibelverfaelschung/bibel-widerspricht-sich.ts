import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'bibel-widerspricht-sich',
  title: `„Die Bibel widerspricht sich – also kann sie nicht Gottes Wort sein."`,
  proponents: [
    { name: 'Ahmed Deedat', role: 'Islamischer Apologet (1918–2005)', work: 'Is the Bible God\'s Word? (1980); Contradictions in the Bible' },
    { name: 'Zakir Naik', role: 'Islamischer Prediger, Mumbai', work: 'Debatte „The Qur\'an and the Bible in the Light of Science" (2000)' },
    { name: 'Rahmatullah Kairanawi', role: 'Indischer Gelehrter (1818–1891)', work: 'Izhar al-Haqq (1864)' },
  ],
  steelman: `„Gottes Wort kann keinen Widerspruch enthalten (vgl. 4:82). Die Bibel aber widerspricht sich ständig: Wer verleitete David zur Volkszählung – Gott (2 Sam 24,1) oder Satan (1 Chr 21,1)? War Ahasja bei Regierungsantritt 22 Jahre alt (2 Kön 8,26) oder 42 (2 Chr 22,2)? Hatte Salomo 40.000 Pferdeställe (1 Kön 5,6 bzw. 4,26) oder 4.000 (2 Chr 9,25)? Hat Judas sich erhängt (Mt 27,5) oder ist er gestürzt und zerborsten (Apg 1,18)? Die Stammbäume Jesu bei Matthäus und Lukas haben verschiedene Großväter. Ahmed Deedat hat solche Listen Tausenden vorgelegt, und kein Pastor konnte sie widerlegen. Ein Buch voller Widersprüche ist Menschenwerk."`,
  biblical: {
    summary: `Die angeführten Stellen fallen in drei Gruppen: (1) **verschiedene Perspektiven** auf dasselbe Ereignis (Gott und Satan bei Davids Volkszählung, vgl. Hiob 1–2), (2) **Abschreibfehler** bei Zahlen in einzelnen Handschriften (Ahasja, Salomos Ställe – oft bewahren alte Übersetzungen die richtige Zahl), und (3) **sich ergänzende Berichte** (Judas; die Stammbäume). Ein echter Widerspruch liegt nur vor, wenn zwei Aussagen im selben Sinn und in derselben Hinsicht nicht zugleich wahr sein können. Das ist bei keiner dieser Stellen nachgewiesen. Abschreibfehler bei Zahlen betreffen die Überlieferung, nicht die Inspiration und keine einzige Lehre.`,
    detail: `**2 Sam 24,1 / 1 Chr 21,1:** Samuel nennt die letzte Ursache (Gottes Zorn über Israel, der Davids Stolz zulässt und gebraucht), die Chronik das Werkzeug (Satan). So zeigt es auch Hiob 1–2: Satan handelt, aber nur mit Gottes Zulassung.

**2 Kön 8,26 / 2 Chr 22,2:** 42 Jahre ist im hebräischen Text der Chronik unmöglich, weil sein Vater mit 40 starb (2 Chr 21,20). Die Septuaginta (in einigen Handschriften) und die syrische Übersetzung lesen 22 – ein typischer Zahlenfehler beim Abschreiben.

**Judas:** Mt 27,5 berichtet das Erhängen, Apg 1,18 das spätere Herabstürzen und Aufbersten – beides kann zugleich wahr sein (der Leichnam fiel). Den Acker kauften die Priester mit Judas' Geld (Mt 27,7); Lukas schreibt es ironisch Judas zu, weil es sein Geld war.

**Stammbäume:** Seit Julius Africanus (3. Jh., bei Eusebius) werden Leviratsehe und rechtliche vs. leibliche Abstammung zur Erklärung herangezogen; eine andere alte Erklärung sieht bei Lukas die Linie Marias.`,
    sources: [
      { kind: 'bibel', work: '2. Samuel', ref: '24,1', quote: `Und der Zorn des HERRN ergrimmte abermals wider Israel und reizte David wider sie, daß er sprach: Gehe hin, zähle Israel und Juda!`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Chronik', ref: '21,1', quote: `Und der Satan stand wider Israel und gab David ein, daß er Israel zählen ließe.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hiob', ref: '1,12', quote: `Gott erlaubt Satan, Hiob zu prüfen, setzt ihm aber eine Grenze.`, translation: 'Luther 1912', status: 'paraphrase' },
      { kind: 'bibel', work: '2. Chronik', ref: '21,20 und 22,2', quote: `Joram war 32 Jahre alt, als er König wurde, und regierte acht Jahre; sein Sohn Ahasja folgt ihm nach – die Angabe „42 Jahre" ist im hebräischen Text daher ein Abschreibfehler.`, status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die Väter haben scheinbare Widersprüche nie verschwiegen, sondern ausführlich behandelt. Julius Africanus schrieb über die Stammbäume, Augustinus verfasste ein ganzes Werk über die Übereinstimmung der Evangelisten, Origenes und Johannes Chrysostomus erklärten Unterschiede als Zeichen unabhängiger Zeugen. Chrysostomus betont: Würden die Evangelisten in allem wörtlich übereinstimmen, würde man sie der Absprache verdächtigen; ihre Übereinstimmung im Wesentlichen bei Unterschieden in Nebensachen ist ein Zeichen ihrer Wahrhaftigkeit.`,
    sources: [
      { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum Matthäusevangelium', ref: '1,6', year: 'um 390', quote: `Die kleinen Unterschiede zwischen den Evangelisten bezeugen, dass sie nicht abgesprochen schrieben; in den Hauptsachen stimmen sie überein.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Eusebius von Caesarea (nach Julius Africanus)', work: 'Kirchengeschichte', ref: 'I,7', year: 'um 325', quote: `Erklärung der beiden Stammbäume Jesu durch Leviratsehe und die Unterscheidung von natürlicher und gesetzlicher Abstammung.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Ein Widerspruch liegt nur vor, wenn zwei Aussagen nicht zugleich wahr sein können. Gott und Satan bei Davids Volkszählung sind zwei Ebenen derselben Wahrheit – wie in Hiob 1. Die Zahlenunterschiede sind Abschreibfehler einzelner Handschriften, die die alten Übersetzungen oft korrekt bewahren, und keiner berührt eine Lehre. Und nach demselben strengen Maßstab müsstest du auch den Koran prüfen – etwa die sechs Schöpfungstage in 7:54 und die Tage in 41:9–12.`,
  keyPoints: [
    `**Was ein Widerspruch ist:** A und Nicht-A in derselben Hinsicht. Verschiedene Perspektiven oder Detailtiefen sind keine Widersprüche.`,
    `**Ursache und Werkzeug:** Gott lässt zu, Satan führt aus (2 Sam 24 / 1 Chr 21; Hiob 1–2).`,
    `**Abschreibfehler bei Zahlen** sind real, durch Handschriftenvergleich erkennbar und lehrmäßig bedeutungslos.`,
    `**Unterschiede sind Zeichen unabhängiger Zeugen** – abgesprochene Aussagen klingen identisch (Chrysostomus).`,
    `**Gleicher Maßstab:** Muslimische Gelehrte harmonisieren scheinbare Spannungen im Koran (etwa 4:78 und 4:79) auf dieselbe Weise.`,
  ],
  voices: [
    {
      person: 'chrysostomus',
      role: 'als Prediger und Ausleger',
      text: `Chrysostomus beantwortet in seinen Matthäushomilien den Einwand, die Evangelisten würden sich in Einzelheiten unterscheiden. Für ihn ist das kein Mangel, sondern ein Beweis der Wahrhaftigkeit: Hätten sie sich abgesprochen, würden sie Wort für Wort übereinstimmen und man würde ihnen Verschwörung vorwerfen. Dass sie im Wesentlichen einig sind und in Nebensachen verschieden erzählen, zeigt unabhängige Zeugen.`,
      sources: [
        { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum Matthäusevangelium', ref: '1,6', year: 'um 390', quote: `Unterschiede in Nebensachen als Beweis unabhängiger, nicht abgesprochener Zeugen.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'licona',
      role: 'als Historiker antiker Biografien',
      text: `Licona hat untersucht, wie antike Biografen wie Plutarch dieselben Ereignisse in verschiedenen Werken unterschiedlich erzählen: Sie verdichten, verschieben zeitlich, heben einzelne Personen hervor. Diese anerkannten Konventionen erklären viele Unterschiede in den Evangelien. Wer die Evangelien wie moderne Protokolle liest, erzeugt Widersprüche, die ein antiker Leser nicht gesehen hätte.`,
      sources: [
        { kind: 'fachliteratur', author: 'Michael R. Licona', work: 'Why Are There Differences in the Gospels? What We Can Learn from Ancient Biography', year: '2017', quote: `Kompositionstechniken antiker Biografen erklären viele Unterschiede zwischen den Evangelien.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'blomberg',
      role: 'als Neutestamentler',
      text: `Blomberg zeigt, dass die meisten angeblichen Widersprüche seit Jahrhunderten bekannt und plausibel erklärt sind. Er unterscheidet sorgfältig zwischen echten Schwierigkeiten (die er offen benennt) und konstruierten Widersprüchen, die verschwinden, sobald man den Zusammenhang liest.`,
      sources: [
        { kind: 'fachliteratur', author: 'Craig L. Blomberg', work: 'The Historical Reliability of the Gospels', year: '2. Aufl. 2007', quote: `Systematische Behandlung der Unterschiede zwischen den Evangelien.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'augustinus',
      role: 'als Verfasser von „De consensu evangelistarum" (mit Vorbehalt, s. Personenregister)',
      text: `Augustinus schrieb ein ganzes Werk über die Übereinstimmung der Evangelisten, weil Gegner des Christentums schon damals Widersprüche behaupteten. Seine Grundregel: Die Evangelisten geben denselben Sinn oft mit unterschiedlichen Worten und in unterschiedlicher Reihenfolge wieder; entscheidend ist die Wahrheit der Sache, nicht der identische Wortlaut.`,
      sources: [
        { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De consensu evangelistarum', ref: 'Buch II', year: 'um 400', quote: `Unterschiedlicher Wortlaut bei gleichem Sinn ist kein Widerspruch.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'gott-oder-satan',
      objection: `2 Samuel 24,1 sagt, der HERR reizte David zur Volkszählung; 1 Chronik 21,1 sagt, Satan. Was denn nun? Gott oder der Teufel?`,
      objectionBy: 'Ahmed Deedat',
      answer: `Beides – auf zwei Ebenen. Gott war über Israel zornig und ließ zu, dass Satan David zum Stolz verführte; Satan war das Werkzeug. Genau so beschreibt es das Buch Hiob: Satan handelt, aber nur, soweit Gott es erlaubt (Hiob 1,12). Zwei Berichte, die verschiedene Ebenen derselben Wirklichkeit nennen, widersprechen sich nicht.`,
      followUps: [
        {
          id: 'gott-verfuehrt-nicht',
          objection: `Aber Jakobus 1,13 sagt, Gott versucht niemanden. Also widerspricht sich die Bibel trotzdem.`,
          objectionBy: 'Zakir Naik',
          answer: `Gott verführt niemanden zum Bösen in dem Sinn, dass er Lust zur Sünde weckt – das tut Satan, und die Begierde des Menschen (Jak 1,14). Aber Gott kann eine Prüfung zulassen und in seinem Gericht den Menschen seinem eigenen Willen überlassen (Röm 1,24). 2 Sam 24 beginnt ausdrücklich mit Gottes Zorn über Israel: Es ist ein Gerichtszusammenhang.`,
          followUps: [
            {
              id: 'schoenrederei',
              objection: `Das ist doch nur Schönrederei. Mit solchen Erklärungen kann man jeden Widerspruch wegreden.`,
              objectionBy: 'Ahmed Deedat',
              answer: `Dann prüfe denselben Maßstab am Koran: 4:78 sagt „Alles ist von Allah", und 4:79 direkt danach: „Was dich an Bösem trifft, ist von dir selbst." Muslimische Gelehrte erklären das mit zwei Ebenen – Allahs Bestimmung und menschliche Verantwortung. Das ist keine Schönrederei, sondern genau die Unterscheidung, die ich bei 2 Sam 24 mache. Wenn sie für den Koran gilt, gilt sie auch für die Bibel.`,
              sources: [
                { kind: 'koran', work: 'Sure 4 (an-Nisa\')', ref: '4:78–79', quote: `Sag: Alles ist von Allah … Was dich an Gutem trifft, ist von Allah, und was dich an Bösem trifft, ist von dir selbst.`, original: `qul kullun min ʿindi llāh … wa-mā aṣābaka min sayyiʾatin fa-min nafsik`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/4/78-79' },
              ],
              followUps: [
                {
                  id: 'chronist-aenderte-bewusst',
                  objection: `Die Bibelwissenschaft sagt doch selbst: Der Chronist hat die Samuel-Stelle bewusst umgeschrieben, weil er Gott nicht mehr als Urheber des Bösen sehen wollte. Das ist eine Textänderung aus theologischen Gründen – also Tahrif.`,
                  objectionBy: 'Paul Williams (Blogging Theology)',
                  answer: `Ein späterer Autor, der eine Geschichte mit anderem Akzent neu erzählt, ist kein Fälscher – er hat ja das Samuelbuch nicht verändert. Beide Bücher stehen nebeneinander im Kanon, und Juden wie Christen haben sie über Jahrtausende *unverändert nebeneinander* abgeschrieben, ohne den Unterschied zu glätten. Das ist das Gegenteil von Tahrif: Wer fälscht, beseitigt Spannungen. Und der Koran erzählt ebenfalls Geschichten mehrfach mit anderen Details: Der Stab Moses wird zur „Schlange" (*thuʿbān*, 7:107), zur „gleitenden Schlange" (*ḥayya*, 20:20) und bewegt sich „wie ein *jānn*" (27:10).`,
                  detail: `Die Chronik ist eine bewusst theologische Nacherzählung der Königsgeschichte für die Gemeinde nach dem Exil. Dass sie den Satan als Werkzeug nennt, wo Samuel den Zorn Gottes betont, ist eine Deutung, die beide Ebenen zusammenhält – so wie Hiob 1–2. Muslimische Gelehrte erklären die unterschiedlichen Schlangenbegriffe des Korans mit verschiedenen Aspekten desselben Ereignisses. Dasselbe Recht steht der Bibel zu.`,
                  sources: [
                    { kind: 'koran', work: 'Sure 7 (al-A\'raf)', ref: '7:107', quote: `Da warf er seinen Stock hin, und sogleich war er eine deutliche Schlange.`, original: `fa-idhā hiya thuʿbānun mubīn`, translation: 'Bubenheim/Elyas (sinngemäß)', status: 'paraphrase', url: 'https://quran.com/7/107' },
                    { kind: 'koran', work: 'Sure 27 (an-Naml)', ref: '27:10', quote: `Als er ihn sich regen sah, als wäre er eine flinke Schlange (jānn), wandte er sich ab.`, original: `ka-annahā jānnun`, translation: 'Bubenheim/Elyas (sinngemäß)', status: 'paraphrase', url: 'https://quran.com/27/10' },
                  ],
                  questionsBack: [
                    `Wenn Juden und Christen fälschen wollten – warum haben sie die Spannung zwischen Samuel und Chronik zweitausend Jahre lang stehen lassen?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'zahlenwidersprueche',
      objection: `Ahasja war 22 Jahre alt (2 Kön 8,26) – oder 42 (2 Chr 22,2)? Salomo hatte 40.000 Ställe – oder 4.000? Gott kann sich nicht verrechnen.`,
      objectionBy: 'Ahmed Deedat',
      answer: `Gott hat sich nicht verrechnet – ein Abschreiber hat sich verschrieben. Das sieht man an der Chronik selbst: Ahasjas Vater starb mit 40 (2 Chr 21,20), sein Sohn kann nicht 42 gewesen sein. Alte Übersetzungen wie die syrische lesen 22. Solche Zahlenfehler sind bekannt, durch Handschriftenvergleich erkennbar und berühren keine einzige Lehre. Christen glauben nicht, dass jeder Abschreiber unfehlbar war.`,
      followUps: [
        {
          id: 'zahlen-dann-auch-lehre',
          objection: `Wenn Gott sein Wort nicht einmal vor Zahlenfehlern schützt – wie willst du dann wissen, dass die Lehren nicht auch verändert wurden?`,
          objectionBy: 'Mohammed Hijab',
          answer: `Eine Zahl, die an einer Stelle steht und von einem einzigen Abschreiber abhängt, kann leicht falsch kopiert werden. Eine Lehre wie die Kreuzigung steht in vier Evangelien, in Briefen und Predigten, in Tausenden Handschriften und Sprachen. Ein einzelner Fehler fällt im Vergleich auf; eine Lehre müsste man überall gleichzeitig ändern. Gerade der erkannte Zahlenfehler zeigt, wie gut die Kontrolle funktioniert.`,
          followUps: [
            {
              id: 'kein-einziger-fehler',
              objection: `Gottes Wort darf überhaupt keinen Fehler enthalten. Der Koran hat keinen einzigen.`,
              objectionBy: 'Zakir Naik',
              answer: `Auch der Koran wurde von Menschen abgeschrieben, und frühe Koranhandschriften enthalten Korrekturen und abweichende Lesarten (siehe die Forschungen von Keith Small und Daniel Brubaker). Muslime unterscheiden deshalb zwischen dem offenbarten Wort und seiner menschlichen Abschrift. Dieselbe Unterscheidung treffe ich: Inspiriert ist das Wort Gottes, nicht die Hand jedes Kopisten.`,
              detail: `Siehe Claim „Der Koran ist Buchstabe für Buchstabe perfekt bewahrt" im Topic „Der Koran auf dem Prüfstand".`,
              followUps: [
                {
                  id: 'inspiration-nur-original',
                  objection: `Wenn nur das Original inspiriert ist und ihr das Original nicht habt, dann ist eure Inspiration wertlos. Ihr glaubt an ein Buch, das es nicht gibt.`,
                  objectionBy: 'Mohammed Hijab',
                  answer: `Ein Original muss man nicht in der Hand halten, um seinen Inhalt zu kennen – es genügt, dass es zuverlässig abgeschrieben wurde und man Fehler erkennen kann. Das gilt für jedes Buch der Antike und auch für den Koran: Die Handschriften in Istanbul und Taschkent, die oft „Uthman-Koran" genannt werden, sind nach der Forschung – auch muslimischer Forscher wie Tayyar Altıkulaç – nicht Uthmans eigene Exemplare. Niemand besitzt Uthmans Kodizes. Trotzdem sagst du zu Recht, dass du weißt, was darin stand – durch die Abschriften.`,
                  detail: `Der Unterschied zwischen „inspiriertem Original" und „treuer Abschrift" ist keine christliche Ausflucht, sondern eine Unterscheidung, die jede Schriftreligion treffen muss, sobald ein Text kopiert wird. Entscheidend ist die Frage, ob der ursprüngliche Wortlaut durch die Überlieferung erreichbar bleibt. Beim Neuen Testament ist das dank Tausender Handschriften, früher Übersetzungen und Väterzitate in außergewöhnlichem Maß der Fall.`,
                  voices: [
                    {
                      person: 'keith-small',
                      role: 'als Erforscher der Koranhandschriften',
                      text: `Small zeigt, dass auch die frühesten erhaltenen Koranhandschriften kein „Autograph" sind, sondern Abschriften mit eigener Orthografie, Korrekturen und Varianten. Die Rede vom „Original" ist beim Koran ebenso eine Rekonstruktion aus Abschriften wie bei der Bibel – nur mit dem Unterschied, dass beim Koran die Vielfalt früh durch Vereinheitlichung verringert wurde.`,
                      sources: [
                        { kind: 'fachliteratur', author: 'Keith E. Small', work: 'Textual Criticism and Qur\'an Manuscripts', year: '2011', quote: `Auch für den Koran ist der ursprüngliche Text nur über Abschriften zugänglich.`, status: 'paraphrase' },
                      ],
                    },
                  ],
                  questionsBack: [
                    `Besitzt du Uthmans Originalkodex? Und wenn nicht – woher weißt du, was darin stand?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'judas-tod',
      objection: `Matthäus sagt, Judas erhängte sich; die Apostelgeschichte sagt, er stürzte und sein Leib barst. Und wer kaufte den Acker – Judas oder die Priester?`,
      objectionBy: 'Ahmed Deedat',
      answer: `Beides kann zugleich wahr sein: Judas erhängte sich, und sein Leichnam stürzte später herab und zerbarst – Matthäus nennt die Todesart, Lukas das grausige Ende. Den Acker kauften die Priester mit Judas' Geld (Mt 27,7); Lukas sagt mit bitterer Ironie, Judas habe mit dem Lohn seines Verrats einen Acker erworben. Zwei Berichte mit verschiedenem Blickwinkel, keine Unvereinbarkeit.`,
      followUps: [
        {
          id: 'harmonisierung-unehrlich',
          objection: `Solche Harmonisierungen sind unehrlich. Ein Historiker würde einfach sagen: zwei Überlieferungen, die sich widersprechen.`,
          objectionBy: 'Bart D. Ehrman (Methode), aufgegriffen von Muslimen',
          answer: `Historiker harmonisieren ständig, wenn zwei Quellen über dasselbe Ereignis berichten – etwa bei verschiedenen antiken Berichten über den Tod eines Kaisers. Harmonisierung ist unehrlich, wenn sie erzwungen ist, nicht wenn sie naheliegt. Und selbst wenn du zwei unabhängige Überlieferungen annimmst: Sie bestätigen beide, dass Judas tot war – nicht, dass er an Jesu Stelle gekreuzigt wurde.`,
        },
      ],
    },
    {
      id: 'stammbaeume-jesu',
      objection: `Nach Matthäus heißt Josefs Vater Jakob, nach Lukas Eli. Und Matthäus lässt Könige aus seiner Liste weg. Das ist ein klarer Widerspruch.`,
      objectionBy: 'Zakir Naik',
      answer: `Das wurde schon im 3. Jahrhundert diskutiert: Julius Africanus erklärte es mit der Leviratsehe – ein Vater rechtlich, der andere leiblich. Eine andere alte Erklärung sieht bei Lukas die Linie Marias. Und Matthäus gliedert bewusst in dreimal vierzehn Generationen (Mt 1,17); in jüdischen Stammbäumen ist „zeugte" oft „war Vorfahre von". Ein Autor, der Könige aus 1 Chr 3 auslässt, kannte sie offensichtlich – er wollte eine Struktur, keine vollständige Liste.`,
      sources: [
        { kind: 'bibel', work: 'Matthäus', ref: '1,17', quote: `Alle Glieder von Abraham bis auf David sind vierzehn Glieder. Von David bis auf die babylonische Gefangenschaft sind vierzehn Glieder. Von der babylonischen Gefangenschaft bis auf Christum sind vierzehn Glieder.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
    },
  ],
  questionsToAsk: [
    `Was genau ist für dich ein Widerspruch – und erfüllt diese Stelle die Definition?`,
    `Wie erklären muslimische Gelehrte das Verhältnis von 4:78 und 4:79?`,
    `Betrifft irgendeiner dieser Unterschiede eine Lehre – oder nur Zahlen und Details?`,
    `Würdest du dieselben Maßstäbe an den Koran anlegen, etwa an 7:54 und 41:9–12?`,
  ],
  avoid: [
    `Nicht jede Schwierigkeit mit einer gekünstelten Erklärung „lösen". Gib Abschreibfehler offen zu, wo sie offensichtlich sind.`,
    `Nicht behaupten, die Bibel habe „nicht einen einzigen Unterschied". Die Evangelisten erzählen bewusst verschieden.`,
    `Nicht sofort mit Gegenlisten zum Koran antworten. Erst die Bibelstelle sachlich klären, dann nach dem gleichen Maßstab fragen.`,
  ],
  concessions: [
    `Bei einigen Zahlen in den Königs- und Chronikbüchern liegen Abschreibfehler im überlieferten hebräischen Text vor.`,
    `Manche Harmonisierungen bleiben Vorschläge; nicht jede Schwierigkeit ist mit Sicherheit gelöst – aber keine betrifft eine Glaubenslehre.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Michael R. Licona', work: 'Why Are There Differences in the Gospels?', year: '2017', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Craig L. Blomberg', work: 'The Historical Reliability of the Gospels', year: '2007', status: 'paraphrase' },
    { kind: 'gegner', author: 'Ahmed Deedat', work: 'Is the Bible God\'s Word?', year: '1980', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Bibel', 'Widersprüche', 'Deedat', 'Islam'],
  related: [
    'islam-bibelverfaelschung/bibel-textvarianten',
    'islam-koran/koran-widerspruchsfrei',
    'neues-testament/evangelien-widersprechen-sich',
  ],
};

export default claim;
