import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'jesus-nur-apokalyptiker',
  title: `„Jesus war nur ein gescheiterter apokalyptischer Prophet."`,
  proponents: [
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, University of North Carolina', work: 'Jesus: Apocalyptic Prophet of the New Millennium (1999)' },
    { name: 'Albert Schweitzer', role: 'Theologe, Arzt, Begründer der „konsequenten Eschatologie"', work: 'Von Reimarus zu Wrede (1906)' },
    { name: 'Dale C. Allison', role: 'Neutestamentler, Princeton Theological Seminary (selbst Christ)', work: 'Jesus of Nazareth: Millenarian Prophet (1998); Constructing Jesus (2010)' },
    { name: 'Paula Fredriksen', role: 'Historikerin, Boston University / Hebrew University', work: 'Jesus of Nazareth, King of the Jews (1999)' },
  ],
  steelman: `Wenn man die ältesten Schichten der Evangelien ernst nimmt, verkündet Jesus nicht eine zeitlose Moral, sondern das unmittelbar bevorstehende Eingreifen Gottes: Der Menschensohn wird auf den Wolken kommen, die Bösen werden gerichtet, das Reich Gottes bricht an – und zwar bald. „Es stehen etliche hier, die werden den Tod nicht schmecken, bis daß sie sehen das Reich Gottes mit Kraft kommen" (Mk 9,1); „Dies Geschlecht wird nicht vergehen, bis daß dies alles geschehe" (Mk 13,30). Dieses Bild ist mehrfach bezeugt (Markus, Q, Sondergut), passt zu Johannes dem Täufer vorher und zu Paulus nachher, der erwartete, das Ende noch selbst zu erleben (1 Thess 4,15). Das Ende kam nicht. Die Kirche deutete die gescheiterte Naherwartung um – in eine geistliche Kirche, eine Himmelfahrt der Seele, einen fernen Jüngsten Tag. Der historische Jesus war ein jüdischer Endzeitprophet, der sich geirrt hat – nicht der präexistente Gottessohn des Nizänums. – So etwa Bart Ehrman im Anschluss an Albert Schweitzer.`,
  biblical: {
    summary: `Das NT verschweigt die endzeitliche Botschaft Jesu nicht – sie gehört zum Kern. Aber es zeigt ein **doppeltes** Reich: schon gegenwärtig in Jesu Wirken (Lk 11,20; 17,21) und noch zukünftig in Vollendung. Jesus nennt ausdrücklich **keinen Termin**: „Von dem Tage aber und der Stunde weiß niemand, auch die Engel nicht im Himmel, auch der Sohn nicht, sondern allein der Vater" (Mk 13,32). Gleichnisse rechnen mit Verzögerung (Mt 25,5; 24,48).`,
    detail: `**Die Kernstellen im Zusammenhang:**
- **Mk 9,1** – unmittelbar darauf folgt die Verklärung (Mk 9,2–8), in der drei Jünger „das Reich Gottes in Kraft" schauen; so lesen es viele Väter.
- **Mk 13,30** – die Rede beginnt mit der Frage nach der Zerstörung des Tempels (13,1–4). Diese geschah im Jahr 70, also innerhalb „dieses Geschlechts".
- **Mk 14,62** – das Kommen des Menschensohns „mit den Wolken des Himmels" zitiert Dan 7,13: dort kommt der Menschensohn **zu Gott** und empfängt Herrschaft – eine Inthronisation.
- **Lk 11,20** – „So ich aber durch Gottes Finger die Teufel austreibe, so kommt ja das Reich Gottes zu euch." Das Reich ist in Jesus bereits angebrochen.

Die prophetische Rede des AT verbindet oft Nahes und Fernes in einem Blick („prophetische Perspektive"): Der „Tag des HERRN" kommt über Babylon (Jes 13) und zugleich am Ende der Zeit.`,
    sources: [
      { kind: 'bibel', work: 'Markus', ref: '13,32', quote: `Von dem Tage aber und der Stunde weiß niemand, auch die Engel nicht im Himmel, auch der Sohn nicht, sondern allein der Vater.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Markus', ref: '9,1', quote: `Wahrlich ich sage euch: Es stehen etliche hier, die werden den Tod nicht schmecken, bis daß sie sehen das Reich Gottes mit Kraft kommen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '11,20', quote: `So ich aber durch Gottes Finger die Teufel austreibe, so kommt ja das Reich Gottes zu euch.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Daniel', ref: '7,13–14', quote: `Ich sah in diesem Gesicht des Nachts, und siehe, es kam einer in des Himmels Wolken wie eines Menschen Sohn bis zu dem Alten und ward vor ihn gebracht. Der gab ihm Gewalt, Ehre und Reich …`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche bekennt die Wiederkunft Christi „in Herrlichkeit, zu richten die Lebenden und die Toten" – die eschatologische Botschaft Jesu ist also nicht peinlich, sondern Glaubensgut. Zugleich lebt die Kirche im „Schon und Noch-nicht": In der Liturgie wird das kommende Reich bereits gegenwärtig gefeiert. Die Väter haben Mk 9,1 auf die Verklärung bezogen und Mk 13,32 christologisch erklärt: Der Sohn spricht hier nach seiner angenommenen Menschheit.`,
    detail: `Der hl. Athanasius erklärt gegen die Arianer, dass das „Nichtwissen" des Sohnes zur angenommenen menschlichen Natur gehöre, die der Logos sich zu eigen gemacht hat, nicht zu seiner Gottheit (Contra Arianos III,42–46). Die Kirche betet in der Agpeya und in der Liturgie täglich um das Kommen des Reiches und erwartet den Herrn „wie einen Dieb in der Nacht" (1 Thess 5,2) – Wachsamkeit statt Terminberechnung.`,
    sources: [
      { kind: 'konzil', work: 'Nizäno-Konstantinopolitanisches Glaubensbekenntnis', ref: 'Art. 7', year: '381', quote: `… und er wird wiederkommen in Herrlichkeit, zu richten die Lebenden und die Toten; seines Reiches wird kein Ende sein.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Orationes contra Arianos', ref: 'III,42–46', year: 'ca. 356–360', quote: `Das Nichtwissen der Stunde sagt der Sohn menschlich, wegen des Fleisches, das er trug – nicht als Logos, der alles weiß.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum Matthäusevangelium', ref: '56', year: 'ca. 390', quote: `Das Wort, einige würden den Tod nicht schmecken, bis sie den Menschensohn in seinem Reich kommen sähen, bezieht Chrysostomus auf die unmittelbar folgende Verklärung.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Dass Jesus eine **eschatologische** Botschaft verkündete, ist breiter Forschungskonsens seit Johannes Weiß (1892) und Albert Schweitzer (1906). Wie „apokalyptisch" im Sinne einer zeitlich fixierten Naherwartung, ist dagegen umstritten: Ehrman, Allison, Sanders und Fredriksen sehen einen Endzeitpropheten; das Jesus Seminar (Crossan, Borg) zeichnete einen nicht-apokalyptischen Weisheitslehrer; N. T. Wright deutet die Bildsprache stärker auf Ereignisse innerhalb der Geschichte (Tempelzerstörung, Inthronisation des Menschensohns).`,
    detail: `**Ehrlich:** Dale Allison, ein gläubiger Christ, hält Wrights Deutung für zu glatt und meint, Jesus habe eine baldige endgültige Wende erwartet – ohne daraus den Unglauben abzuleiten. Die Debatte ist also nicht „Gläubige gegen Kritiker", sondern läuft quer durch die Lager.

**Wichtig für das Gespräch:** Die Behauptung enthält zwei Teile: (1) Jesus war apokalyptisch, (2) er war **nur** ein Prophet, und er ist **gescheitert**. Teil 1 kann man weitgehend zugestehen. Teil 2 folgt daraus nicht. Gerade die Forscher, die Jesus apokalyptisch deuten, betonen oft seinen außergewöhnlichen Vollmachtsanspruch (Allison, Constructing Jesus, 2010; Ehrman selbst sieht Jesus als künftigen König im Reich Gottes).`,
    sources: [
      { kind: 'gegner', author: 'Bart D. Ehrman', work: 'Jesus: Apocalyptic Prophet of the New Millennium', year: '1999', quote: `Jesus erwartete, dass Gott in naher Zukunft eingreifen, die Mächte des Bösen besiegen und sein Reich auf Erden errichten werde.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Albert Schweitzer', work: 'Von Reimarus zu Wrede. Eine Geschichte der Leben-Jesu-Forschung', year: '1906', quote: `Schweitzer zeigte, dass die liberalen Leben-Jesu-Darstellungen Jesus nach dem eigenen Bild formten, und rekonstruierte einen ganz von der Naherwartung bestimmten Jesus.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Dale C. Allison', work: 'Constructing Jesus: Memory, Imagination, and History', year: '2010', quote: `Allison betont sowohl die apokalyptische Erwartung Jesu als auch dessen außergewöhnliches Selbstverständnis.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'N. T. Wright', work: 'Jesus and the Victory of God', year: '1996', quote: `Die apokalyptische Bildsprache verweist auf reale geschichtliche Ereignisse (Tempelgericht, Rechtfertigung des Menschensohns), nicht auf das Ende des Raum-Zeit-Universums.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Dass Jesus vom kommenden Reich Gottes und vom Gericht sprach, bestreitet die Kirche nicht – sie bekennt es im Glaubensbekenntnis. Aber Jesus hat **kein Datum** genannt; er sagte ausdrücklich, dass er „Tag und Stunde" nicht bekannt gebe (Mk 13,32). Was er für „dieses Geschlecht" ankündigte – die Zerstörung des Tempels – trat im Jahr 70 ein. Und ein „bloßer" Prophet war er nicht: Er vergab Sünden, stellte sich über den Sabbat und machte das Endgericht von der Haltung zu sich selbst abhängig.`,
  keyPoints: [
    `**Eschatologie zugestehen:** Jesus verkündete das kommende Reich – das ist christlicher Glaube, kein Gegenargument.`,
    `**Kein Termin:** Mk 13,32 – ein Satz, den die Kirche nie erfunden hätte, weil er christologisch unbequem war (Arianer nutzten ihn).`,
    `**Erfüllung in der Generation:** Die Rede in Mk 13 antwortet auf die Frage nach dem Tempel; dieser fiel im Jahr 70.`,
    `**Schon jetzt:** Das Reich ist in Jesu Wirken bereits angebrochen (Lk 11,20; 17,21); die Auferstehung ist „Erstling" der neuen Schöpfung (1 Kor 15,20).`,
    `**Mehr als ein Prophet:** Sündenvergebung (Mk 2,5–7), „Amen, ich sage euch", Herr über den Sabbat, Menschensohn nach Dan 7, Gericht nach der Haltung zu ihm (Lk 12,8–9).`,
    `**Die Forschung ist uneins:** Vom nicht-apokalyptischen Weisen (Crossan) bis zum Endzeitpropheten (Ehrman) – Schweitzers Warnung, Forscher fänden oft ihr eigenes Spiegelbild, gilt für alle Seiten.`,
  ],
  voices: [
    {
      person: 'chrysostomus',
      role: 'als Ausleger des Matthäusevangeliums',
      text: `Chrysostomus liest das Wort, einige würden den Tod nicht schmecken, bevor sie den Menschensohn in seinem Reich kommen sähen, im Zusammenhang mit der unmittelbar folgenden Verklärung: Sechs Tage später schauen Petrus, Jakobus und Johannes Christus in Herrlichkeit. Für ihn ist das kein nachträglicher Ausweg, sondern die naheliegende Lesart der Abfolge, die alle drei Synoptiker bieten – Ankündigung und Verklärung stehen jedes Mal direkt hintereinander.`,
      sources: [{ kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum Matthäusevangelium', ref: '56', year: 'ca. 390', status: 'paraphrase', quote: `Bezug von Mt 16,28 auf die Verklärung Mt 17,1–8.` }],
    },
    {
      person: 'athanasius',
      role: 'als Verteidiger der Gottheit Christi',
      text: `Für Athanasius ist Mk 13,32 kein Beweis für einen irrenden Propheten, sondern ein Zeugnis der echten Menschwerdung: Der Logos hat ein wirklich menschliches Leben mit menschlichem Wissen angenommen und spricht „als Mensch" über die Stunde. Gerade weil die Kirche diesen Satz nicht gestrichen hat, obwohl die Arianer ihn gegen die Gottheit Christi ins Feld führten, zeigt sich ihre Treue zum überlieferten Wortlaut.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Orationes contra Arianos', ref: 'III,42–46', year: 'ca. 356–360', status: 'paraphrase', quote: `Das Nichtwissen gehört zum Fleisch, das der Logos angenommen hat.` }],
    },
    {
      person: 'cs-lewis',
      role: 'als Literaturhistoriker und Apologet',
      text: `Lewis greift den Einwand frontal auf: Die Naherwartung der ersten Christen sei angeblich widerlegt – und Mt 24,34 / Mk 13,30 sei „der peinlichste Vers der Bibel". Doch unmittelbar daneben steht das Eingeständnis, dass selbst der Sohn die Stunde nicht kenne. Lewis folgert, dass die Evangelisten ein Interesse an Ehrlichkeit über Bequemlichkeit hatten: Beide Sätze wurden überliefert, obwohl sie Schwierigkeiten machten. Für ihn ist die Lehre von der Wiederkunft gerade deshalb nicht Terminprophetie, sondern Aufruf zur ständigen Bereitschaft.`,
      sources: [{ kind: 'fachliteratur', author: 'C. S. Lewis', work: `The World's Last Night (Essay)`, year: '1960', status: 'paraphrase', quote: `Lewis nennt den Vers über „dieses Geschlecht" den peinlichsten der Bibel und verweist auf das danebenstehende Eingeständnis des Nichtwissens.` }],
    },
    {
      person: 'nt-wright',
      role: 'als Historiker des Judentums des Zweiten Tempels',
      text: `Wright betont, dass jüdische apokalyptische Sprache („Sonne verfinstert", „Sterne fallen") in den Propheten meist politische Umwälzungen innerhalb der Geschichte beschreibt (vgl. Jes 13,10 über Babylon). Der „Menschensohn, der auf den Wolken kommt" (Dan 7,13) kommt zu Gott, nicht zur Erde, und empfängt die Herrschaft. Jesu Ankündigung vor dem Hohen Rat (Mk 14,62) ist daher ein Anspruch auf göttliche Rechtfertigung und Inthronisation – und die Tempelzerstörung innerhalb einer Generation erfüllte seine Warnung.`,
      sources: [{ kind: 'fachliteratur', author: 'N. T. Wright', work: 'Jesus and the Victory of God', year: '1996', status: 'paraphrase', quote: `Deutung von Mk 13 und Mk 14,62 im Licht von Dan 7.` }],
    },
  ],
  dialog: [
    {
      id: 'naechste-generation',
      objection: `Jesus sagt klar: „Dies Geschlecht wird nicht vergehen, bis daß dies alles geschehe" (Mk 13,30) und „Etliche hier werden den Tod nicht schmecken, bis sie das Reich Gottes kommen sehen" (Mk 9,1). Die Generation ist vergangen, das Reich ist nicht gekommen. Er hat sich geirrt.`,
      objectionBy: 'Bart Ehrman',
      answer: `Lies die Stellen im Zusammenhang: Mk 13 beginnt mit der Frage der Jünger, wann der Tempel zerstört werde (13,1–4) – das geschah im Jahr 70, innerhalb jener Generation. Unmittelbar nach Mk 9,1 folgt in allen drei Synoptikern die Verklärung, in der drei Jünger Jesus in seiner königlichen Herrlichkeit sehen. Und mitten in derselben Rede sagt Jesus, dass er Tag und Stunde des Endes **nicht** nennt (13,32). Ein Prophet, der den Zeitpunkt offenlässt, hat keinen Termin verfehlt.`,
      detail: `**Struktur von Mk 13:** Frage nach dem Tempel (V. 1–4) → Zeichen und Bedrängnis (V. 5–23) → kosmische Bildsprache und Kommen des Menschensohns (V. 24–27) → Feigenbaumgleichnis und „dieses Geschlecht" (V. 28–31) → „Tag und Stunde weiß niemand" (V. 32) → Mahnung zur Wachsamkeit (V. 33–37).

Viele Ausleger sehen in V. 30 den Bezug auf die Ereignisse um den Tempel und in V. 32 den Übergang zum unbekannten letzten Tag. Andere (Allison) halten die Rede für einheitlich auf ein baldiges Ende bezogen. Fair ist: Der Text selbst unterscheidet zwischen dem, was „dieses Geschlecht" erlebt, und einem Tag, den niemand kennt.

Mehr zur Prophetiefrage: Claim „Jesus kündigte seine Wiederkunft noch zu Lebzeiten der Jünger an" im Themenblock Prophetie.`,
      sources: [
        { kind: 'bibel', work: 'Markus', ref: '13,1–4', quote: `Siehst du wohl allen diesen großen Bau? Nicht ein Stein wird auf dem andern bleiben … Sage uns, wann wird das alles geschehen?`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
        { kind: 'bibel', work: 'Markus', ref: '13,30', quote: `Wahrlich ich sage euch: Dies Geschlecht wird nicht vergehen, bis daß dies alles geschehe.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      questionsBack: [
        `Wenn Jesus ein Datum setzen wollte – warum sagt er im selben Atemzug, dass er Tag und Stunde nicht kennt?`,
        `Was war die Frage, auf die Mk 13 antwortet?`,
      ],
      followUps: [
        {
          id: 'wright-ausrede',
          objection: `Wrights Umdeutung der kosmischen Bilder in politische Metaphern ist eine Notlösung. Die Menschen damals erwarteten ein reales Weltende – auch Paulus schreibt: „wir, die wir leben und übrig bleiben" (1 Thess 4,15). Selbst dein Glaubensgenosse Dale Allison lehnt Wrights Lesart ab.`,
          objectionBy: 'Dale Allison / Bart Ehrman',
          answer: `Zugestanden: Unter christlichen Forschern ist umstritten, wie viel der Bildsprache sich auf das Jahr 70 bezieht. Aber selbst wenn Jesus von der endgültigen Vollendung sprach, hat er sie nicht datiert – er sprach von Nähe und Wachsamkeit. Die Propheten Israels kündigten den „Tag des HERRN" ebenfalls als nahe an und sahen nahe und ferne Erfüllungen in einem Bild. Paulus' „wir" in 1 Thess 4,15 zeigt Hoffnung, kein Datum – im nächsten Kapitel sagt er, der Tag komme „wie ein Dieb in der Nacht" (5,2).`,
          detail: `**Prophetische Perspektive:** Joel 2 verbindet eine Heuschreckenplage mit dem endzeitlichen Geist-Ausgießen (vgl. Apg 2,16–21); Jes 13 kündigt den „Tag des HERRN" über Babylon an. Nähe ist in der Prophetie eine Qualität (Dringlichkeit), nicht primär eine Zeitangabe.

**Ehrlich:** Dale Allison zieht aus seiner Deutung nicht den Schluss, das Christentum sei widerlegt; er hält an Jesu Auferstehung fest. Die Frage der Naherwartung ist also eine exegetische, keine, die den Glauben als solchen entscheidet.`,
          sources: [
            { kind: 'bibel', work: '1. Thessalonicher', ref: '5,1–2', quote: `Von den Zeiten aber und Stunden, liebe Brüder, ist nicht not euch zu schreiben; denn ihr selbst wisset gewiß, daß der Tag des HERRN wird kommen wie ein Dieb in der Nacht.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
          followUps: [
            {
              id: 'mk-13-32-spaet',
              objection: `Mk 13,32 ist doch gerade eine spätere Einfügung der Gemeinde, um die Verzögerung der Wiederkunft zu entschärfen. Du verteidigst Jesus mit einem Satz, den er nie gesagt hat.`,
              objectionBy: 'Bart Ehrman (sinngemäß, verbreitet)',
              answer: `Das Kriterium der Peinlichkeit – das Ehrman selbst gern anwendet – spricht klar für die Echtheit: Kein frühchristlicher Schreiber hätte dem Sohn Gottes Unwissenheit zugeschrieben. Der Satz bereitete der Kirche später erhebliche Probleme; die Arianer nutzten ihn gegen die Gottheit Christi, Athanasius und andere mussten ihn ausführlich erklären. Matthäus übernimmt ihn, manche Handschriften von Mt 24,36 lassen „auch der Sohn nicht" weg – Schreiber fanden ihn anstößig. Ein Satz, den man abschwächen will, wird nicht erfunden.`,
              sources: [
                { kind: 'fachliteratur', author: 'Bruce M. Metzger', work: 'A Textual Commentary on the Greek New Testament', ref: 'zu Mt 24,36', year: '2. Aufl. 1994', quote: `Ein Teil der Handschriften lässt „auch der Sohn nicht" in Mt 24,36 aus – wohl wegen der dogmatischen Schwierigkeit.`, status: 'paraphrase' },
              ],
              questionsBack: [
                `Nach welchem Kriterium entscheidest du, welche Worte Jesu echt sind – und warum gilt das Peinlichkeitskriterium hier nicht?`,
              ],
              followUps: [
                {
                  id: 'mk-9-1-verklaerung-ausrede',
                  objection: `Und Mk 9,1 auf die Verklärung sechs Tage später zu beziehen, ist absurd: „Etliche, die hier stehen, werden den Tod nicht schmecken" setzt doch voraus, dass die meisten vorher sterben. Niemand sagt so etwas über eine Woche.`,
                  objectionBy: 'Dale Allison / Bart Ehrman',
                  answer: `Der Einwand ist berechtigt: Die Formulierung klingt nach einem längeren Zeitraum, und die Verklärungsdeutung ist nicht die einzige. Andere beziehen das „Kommen des Reiches in Kraft" auf Auferstehung und Pfingsten oder auf das Gericht über den Tempel im Jahr 70, das mehrere der Anwesenden – etwa Johannes – erlebten. Entscheidend ist aber: Schon die frühe Kirche las die Verklärung als Vorwegnahme der kommenden Herrlichkeit (2 Petr 1,16–18), und **keine** dieser Deutungen braucht einen Termin für das Weltende. Den hat Jesus ausdrücklich verweigert.`,
                  detail: `**Drei ernsthafte Deutungen von Mk 9,1:**
1. **Verklärung:** Alle drei Synoptiker stellen die Verklärung unmittelbar dahinter; Johannes Chrysostomus und viele Väter deuteten das Wort so. 2 Petr 1,16–18 verbindet die Verklärung ausdrücklich mit der „Kraft und Zukunft (Parusie)" Jesu.
2. **Auferstehung und Pfingsten:** Das Reich „kommt in Kraft" mit der Auferstehung und der Ausgießung des Geistes (Apg 1,8: „ihr werdet die Kraft empfangen").
3. **Gericht über Jerusalem (70):** In der Linie von Mk 13 – einige der Jünger lebten noch.

**Ehrlich:** Dale Allison hält alle drei für Verlegenheitslösungen und liest Mk 9,1 als enttäuschte Naherwartung. Das ist eine ernsthafte exegetische Position. Aber selbst Allison folgert daraus nicht, dass der christliche Glaube widerlegt sei – er hält an der Auferstehung fest.`,
                  sources: [
                    { kind: 'bibel', work: '2. Petrus', ref: '1,16–18', quote: `Denn wir sind nicht klugen Fabeln gefolgt, da wir euch kundgetan haben die Kraft und Zukunft unseres HERRN Jesu Christi; sondern wir haben seine Herrlichkeit selber gesehen … da wir mit ihm waren auf dem heiligen Berge.`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
                    { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum Matthäusevangelium', ref: '56', year: 'ca. 390', quote: `Chrysostomus bezieht das Wort von denen, die den Tod nicht schmecken werden, auf die Verklärung, in der drei Jünger die kommende Herrlichkeit vorab sahen.`, status: 'paraphrase' },
                  ],
                  questionsBack: [
                    `Welche der drei Deutungen setzt einen Termin für das Weltende voraus?`,
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'zweiter-petrus-verzoegerung',
          objection: `Schon 2 Petr 3 musste Spöttern antworten: „Wo ist die Verheißung seiner Zukunft?" Die Christen merkten selbst, dass etwas schiefgelaufen war, und erfanden die Ausrede „Ein Tag ist vor dem Herrn wie tausend Jahre".`,
          objectionBy: 'Bart Ehrman',
          answer: `2 Petr 3 zeigt, dass die Christen die Frage ehrlich aufnahmen – und mit einem Gedanken antworteten, der schon in Ps 90,4 steht und Jesu eigener Lehre entspricht: Gottes Geduld gibt Raum zur Umkehr (2 Petr 3,9). Die Gleichnisse Jesu rechnen bereits mit Verzögerung: der Bräutigam, der „verzog" (Mt 25,5), der Knecht, der denkt „Mein Herr kommt noch lange nicht" (Mt 24,48). Die Erwartung war nie: „Am Tag X", sondern: „Seid jederzeit bereit".`,
          sources: [
            { kind: 'bibel', work: '2. Petrus', ref: '3,8–9', quote: `… daß ein Tag vor dem HERRN ist wie tausend Jahre und tausend Jahre wie ein Tag. Der HERR verzieht nicht die Verheißung, wie es etliche für einen Verzug achten; sondern er hat Geduld mit uns und will nicht, daß jemand verloren werde …`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
            { kind: 'bibel', work: 'Matthäus', ref: '25,5', quote: `Da nun der Bräutigam verzog, wurden sie alle schläfrig und entschliefen.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
        },
      ],
    },
    {
      id: 'nur-prophet-keine-gottesansprueche',
      objection: `Der historische Jesus hat nie behauptet, Gott zu sein. In den Synoptikern predigt er das Reich Gottes, nicht sich selbst. Die großen „Ich bin"-Worte stehen nur im späten Johannesevangelium. Er war ein jüdischer Prophet – Punkt.`,
      objectionBy: 'Bart Ehrman',
      answer: `Auch in den ältesten Evangelien beansprucht Jesus Dinge, die über jeden Propheten hinausgehen: Er vergibt Sünden in eigener Vollmacht, worauf die Schriftgelehrten sagen „Wer kann Sünden vergeben denn allein Gott?" (Mk 2,7). Er ist „Herr auch über den Sabbat" (Mk 2,28), spricht „Amen, ich sage euch" statt „So spricht der HERR", wählt Zwölf als neues Israel und macht das Endgericht davon abhängig, wie Menschen sich zu **ihm** stellen (Lk 12,8–9). Propheten verwiesen auf Gott – Jesus stellt sich an Gottes Stelle.`,
      detail: `**Mehrfach bezeugt (Markus, Q, Sondergut, Johannes):**
- Vollmacht über Sünde (Mk 2,1–12; Lk 7,48).
- Neuauslegung der Tora: „Ich aber sage euch" (Mt 5,21–48).
- Der „Johanneische Donnerschlag" in Q: „Niemand kennt den Sohn denn nur der Vater; und niemand kennt den Vater denn nur der Sohn" (Mt 11,27; Lk 10,22).
- Menschensohn auf dem Thron, zur Rechten der Macht (Mk 14,62), was der Hohepriester als Gotteslästerung wertet.

**Zugeständnis der Gegenseite:** Ehrman hält es für wahrscheinlich, dass Jesus sich als künftigen König im kommenden Reich verstand – also als Messias. Allison spricht von einem außergewöhnlich hohen Selbstverständnis.`,
      sources: [
        { kind: 'bibel', work: 'Markus', ref: '2,5–7', quote: `Da aber Jesus ihren Glauben sah, sprach er zu dem Gichtbrüchigen: Mein Sohn, deine Sünden sind dir vergeben. … Wie redet dieser solche Gotteslästerung? Wer kann Sünden vergeben denn allein Gott?`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
        { kind: 'bibel', work: 'Lukas', ref: '12,8–9', quote: `Wer mich bekennet vor den Menschen, den wird auch des Menschen Sohn bekennen vor den Engeln Gottes. Wer mich aber verleugnet vor den Menschen, der wird verleugnet werden vor den Engeln Gottes.`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'bibel', work: 'Matthäus', ref: '11,27', quote: `Alle Dinge sind mir übergeben von meinem Vater. Und niemand kennt den Sohn denn nur der Vater; und niemand kennt den Vater denn nur der Sohn und wem es der Sohn will offenbaren.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      questionsBack: [
        `Welcher Prophet Israels hat je in eigenem Namen Sünden vergeben?`,
        `Warum wurde Jesus nach Mk 14,64 wegen Gotteslästerung verurteilt, wenn er nur ein Prophet war?`,
      ],
      followUps: [
        {
          id: 'kriterium-unaehnlichkeit',
          objection: `Diese Worte sind Gemeindebildungen. Nach dem Unähnlichkeitskriterium gilt nur als echt, was weder aus dem Judentum noch aus der späteren Kirche ableitbar ist – und die hohe Christologie ist typisch für die Kirche.`,
          objectionBy: 'John Dominic Crossan / Jesus Seminar',
          answer: `Das Unähnlichkeitskriterium wird heute selbst von kritischen Forschern weitgehend als untauglich angesehen: Es würde einen Jesus erzeugen, der weder Jude war noch irgendetwas mit seinen Anhängern gemein hatte – historisch absurd. Bessere Methoden fragen nach **wiederkehrenden Mustern** über alle Quellen hinweg (so Allison). Und Jesu Vollmachtsanspruch ist ein solches Muster: Er erscheint in Markus, Q, Matthäus- und Lukas-Sondergut und Johannes.`,
          followUps: [
            {
              id: 'menschensohn-nicht-er',
              objection: `Jesus sprach vom Menschensohn in der dritten Person, als von einer anderen, kommenden Figur: „Wer sich meiner schämt, dessen wird sich auch des Menschen Sohn schämen" (Mk 8,38). Er erwartete einen anderen – er hielt sich nicht selbst für den Weltenrichter.`,
              objectionBy: 'Bart Ehrman',
              answer: `In vielen Worten ist „Menschensohn" eindeutig Jesu Selbstbezeichnung: „Des Menschen Sohn hat nicht, wo er sein Haupt hinlege" (Lk 9,58), „des Menschen Sohn ist gekommen … zu dienen" (Mk 10,45), Vollmacht zur Sündenvergebung (Mk 2,10). Die frühe Kirche hat „Menschensohn" in ihren Bekenntnissen fast nie verwendet – der Ausdruck ist typisch für Jesus selbst. Und selbst in Mk 8,38 entscheidet die Haltung zu **Jesus** über das Urteil des Menschensohns. Wer so spricht, macht sich selbst zum Maßstab des Endgerichts.`,
              sources: [
                { kind: 'bibel', work: 'Lukas', ref: '9,58', quote: `Die Füchse haben Gruben, und die Vögel unter dem Himmel haben Nester; aber des Menschen Sohn hat nicht, da er sein Haupt hin lege.`, translation: 'Luther 1912', status: 'verbatim' },
                { kind: 'bibel', work: 'Markus', ref: '14,61–62', quote: `Bist du Christus, der Sohn des Hochgelobten? Jesus aber sprach: Ich bin's; und ihr werdet sehen des Menschen Sohn sitzen zur rechten Hand der Kraft und kommen mit des Himmels Wolken.`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
              ],
              followUps: [
                {
                  id: 'fredriksen-kein-messiasanspruch',
                  objection: `Jesus hat sich nicht einmal selbst als Messias bezeichnet. Die Pilger am Pessach haben ihn dazu gemacht; Pilatus kreuzigte ihn als „König der Juden", um eine aufgeheizte Menge zu beruhigen – deshalb wurden die Jünger gar nicht verfolgt. Die Selbstaussagen in den Evangelien sind nachösterlich.`,
                  objectionBy: 'Paula Fredriksen',
                  answer: `Fredriksen erklärt zu Recht, warum nur Jesus und nicht seine Jünger hingerichtet wurden: Pilatus hielt die Bewegung nicht für militärisch gefährlich. Aber dass die Menge Jesus als Messias feierte, fiel nicht vom Himmel: Er zog demonstrativ auf einem Esel in Jerusalem ein (Sach 9,9), griff im Tempel ein und berief zwölf Jünger als Kern des erneuerten Israel – Zeichenhandlungen, die ein Anspruch sind, auch ohne Titel. Die Kreuzesinschrift „König der Juden" ist kein christlicher Titel; sie zeigt, wofür Rom ihn hielt. Und Jesu Zurückhaltung mit dem Messiastitel passt gerade zu einem Anspruch, der über das politische Messiasbild hinausging.`,
                  detail: `**Fredriksens These (1999):** Jesus habe das baldige Reich Gottes verkündet und sei bei seinem letzten Pessach von Pilgern als Messias begrüßt worden; Pilatus habe ihn – nicht aber seine Anhänger – gekreuzigt, weil es um die Beruhigung der Menge ging. Die These ist scharfsinnig und erklärt einen echten Befund.

**Was sie nicht erklärt:**
- **Zeichenhandlungen:** Einzug auf dem Esel, Tempelaktion, Zwölferkreis, letztes Mahl mit Bundesworten – Handlungen, mit denen Jesus selbst eine Rolle beansprucht.
- **Vollmachtsmuster:** Sündenvergebung, „Ich aber sage euch", Gericht nach der Stellung zu ihm (Mk 8,38; Lk 12,8–9) – über alle Quellenschichten verteilt.
- **Der Titulus:** „König der Juden" (Mk 15,26; Joh 19,19) ist mehrfach bezeugt und kein christliches Bekenntnis – Christen nannten Jesus „Herr" und „Christus", nicht „König der Juden".

**Ehrlich:** Wie offen Jesus den Messiastitel für sich gebrauchte, ist in der Forschung umstritten; das „Messiasgeheimnis" bei Markus zeigt, dass er ihn eher mied. Ein hoher Anspruch zeigt sich bei ihm stärker im Handeln als in Titeln.`,
                  voices: [
                    {
                      person: 'nt-wright',
                      role: 'als Historiker des Judentums im 1. Jahrhundert',
                      text: `Wright liest den Einzug in Jerusalem, die Tempelaktion und das letzte Mahl als bewusst gewählte prophetische Zeichenhandlungen: Jesus inszeniert die Rückkehr Gottes zum Zion und beansprucht, dass sich in ihm und seinem Weg das Schicksal Israels entscheidet. Solche Handlungen sagen mehr als jeder Titel.`,
                      sources: [{ kind: 'fachliteratur', author: 'N. T. Wright', work: 'Jesus and the Victory of God', year: '1996', status: 'paraphrase', quote: `Die Zeichenhandlungen der letzten Woche als messianischer Anspruch.` }],
                    },
                  ],
                  sources: [
                    { kind: 'gegner', author: 'Paula Fredriksen', work: 'Jesus of Nazareth, King of the Jews: A Jewish Life and the Emergence of Christianity', year: '1999', quote: `Fredriksen erklärt die Kreuzigung Jesu als Reaktion des Pilatus auf die messianische Begeisterung der Pessachpilger, nicht auf Jesu eigenen Messiasanspruch.`, status: 'paraphrase' },
                    { kind: 'bibel', work: 'Markus', ref: '15,26', quote: `Und es war oben über ihn geschrieben, was man ihm schuld gab, nämlich: Ein König der Juden.`, translation: 'Luther 1912', status: 'paraphrase' },
                    { kind: 'bibel', work: 'Sacharja', ref: '9,9', quote: `Du Tochter Zion, freue dich sehr … siehe, dein König kommt zu dir, ein Gerechter und ein Helfer, arm und reitet auf einem Esel …`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
                  ],
                  questionsBack: [
                    `Warum reitet Jesus ausgerechnet auf einem Esel nach Jerusalem, wenn er keinen Anspruch erheben wollte?`,
                    `Wenn nur die Menge ihn zum Messias machte – warum haben seine Jünger nach seinem schmachvollen Tod an diesem Titel festgehalten?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'kirche-hat-umgedeutet',
      objection: `Alfred Loisy hat es auf den Punkt gebracht: „Jesus kündigte das Reich Gottes an, und gekommen ist die Kirche." Als das Ende ausblieb, haben die Christen alles umgedeutet – Reich Gottes wurde „Himmel", Endgericht wurde „ferne Zukunft", und aus dem Propheten wurde ein Gott.`,
      objectionBy: 'Paula Fredriksen / Bart Ehrman (mit Loisy)',
      answer: `Loisy meinte den Satz übrigens nicht als Spott, sondern als Beschreibung einer Entwicklung, die er für legitim hielt. Vor allem aber: Die ersten Christen deuteten nicht ein Ausbleiben um, sondern verkündeten ein **Ereignis**, das sie als Anbruch der Endzeit verstanden – die Auferstehung Jesu. Für Juden gehörte die Auferstehung zum Ende der Geschichte; dass sie nun an einem Menschen mitten in der Geschichte geschah, verstanden sie als „Erstling" (1 Kor 15,20) der kommenden Welt. Das ist keine Umdeutung, sondern eine Neuentdeckung, die niemand erwartet hatte.`,
      sources: [
        { kind: 'gegner', author: 'Alfred Loisy', work: `L'Évangile et l'Église`, year: '1902', quote: `Jesus kündigte das Reich an, und gekommen ist die Kirche.`, original: `Jésus annonçait le royaume, et c'est l'Église qui est venue.`, status: 'verbatim', note: 'Loisy verstand den Satz als Verteidigung der Kirche gegen Harnack, nicht als Spott.' },
        { kind: 'bibel', work: '1. Korinther', ref: '15,20', quote: `Nun aber ist Christus auferstanden von den Toten und der Erstling geworden unter denen, die da schlafen.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'kognitive-dissonanz',
          objection: `Das ist klassische kognitive Dissonanz: Wie Festingers Weltuntergangssekte (1956), die nach der gescheiterten Prophezeiung noch eifriger missionierte, haben die Jünger nach dem Scheitern am Kreuz ihren Glauben verstärkt und „Er lebt!" gerufen.`,
          objectionBy: 'Gerd Lüdemann / Robert M. Price (mit Festinger)',
          answer: `Festingers Gruppe zerfiel innerhalb weniger Monate – sie ist ein schlechtes Modell für eine Bewegung, die wuchs und Jahrhunderte überdauerte. Vor allem: Dissonanzreduktion erzeugt typischerweise **Umdeutungen** („Er ist geistlich bei uns", „Gott hat ihn erhöht"), nicht die Behauptung eines neuen, überprüfbaren Ereignisses – ein leeres Grab und leibliche Begegnungen mit konkreten Zeugen. Und unter den Zeugen waren Skeptiker wie Jakobus und ein Gegner wie Paulus, die keine Dissonanz abzubauen hatten.`,
          sources: [
            { kind: 'wissenschaft', author: 'Leon Festinger / Henry Riecken / Stanley Schachter', work: 'When Prophecy Fails', year: '1956', quote: `Fallstudie einer UFO-Endzeitgruppe, die nach dem Ausbleiben der Prophezeiung zunächst verstärkt missionierte.`, status: 'paraphrase' },
          ],
          questionsBack: [
            `Welche Dissonanz musste Paulus, der Verfolger, abbauen, als er plötzlich Jesus verkündigte?`,
          ],
          followUps: [
            {
              id: 'milleriten-adventisten',
              objection: `Dann nimm ein besseres Beispiel: Die Milleriten erwarteten Christus am 22. Oktober 1844. Nach der „großen Enttäuschung" entstanden daraus die Siebenten-Tags-Adventisten – heute viele Millionen Mitglieder. Gescheiterte Prophetie kann sehr wohl eine dauerhafte, wachsende Bewegung erzeugen.`,
              objectionBy: 'Robert M. Price',
              answer: `Das Beispiel bestätigt meinen Punkt. Die Adventisten deuteten das Datum um: Christus habe 1844 nicht die Erde betreten, sondern im **himmlischen** Heiligtum einen neuen Dienst begonnen – ein unsichtbares, unüberprüfbares Ereignis. Genau so sieht Dissonanzreduktion aus. Die Jünger behaupteten dagegen etwas **Öffentliches und Überprüfbares**: ein leeres Grab in Jerusalem, Begegnungen mit namentlich genannten Zeugen, darunter Skeptiker. Wer Dissonanz reduzieren will, flüchtet ins Unsichtbare – nicht in Behauptungen, die jeder Gegner im Nachbarviertel widerlegen könnte.`,
              detail: `**Die Milleriten:** William Miller berechnete aus Dan 8,14 die Wiederkunft für 1843/44; nach dem Ausbleiben am 22. Oktober 1844 zerfiel die Bewegung größtenteils. Eine Minderheit um Hiram Edson und Ellen G. White deutete die Prophezeiung auf einen himmlischen Vorgang um. Daraus erwuchs die Adventbewegung.

**Der strukturelle Unterschied:** Festingers Theorie sagt voraus, dass Anhänger eine gescheiterte Vorhersage **reinterpretieren**, typischerweise so, dass sie nicht mehr falsifizierbar ist. Die Osterbotschaft geht den umgekehrten Weg: Sie bindet sich an ein neues, prüfbares Ereignis in Raum und Zeit (1 Kor 15,3–8). Und sie entstand nicht aus einer enttäuschten Datumsberechnung – Jesus hatte kein Datum genannt –, sondern aus der Katastrophe einer Hinrichtung, die nach jüdischer Erwartung jeden Messiasanspruch beendete.`,
              sources: [
                { kind: 'fachliteratur', author: 'George R. Knight', work: 'Millennial Fever and the End of the World: A Study of Millerite Adventism', year: '1993', quote: `Darstellung der Millerbewegung, der „großen Enttäuschung" von 1844 und der anschließenden Umdeutungen.`, status: 'paraphrase' },
                { kind: 'bibel', work: '1. Korinther', ref: '15,5–8', quote: `… und daß er gesehen worden ist von Kephas, darnach von den Zwölfen. Darnach ist er gesehen worden von mehr denn fünfhundert Brüdern auf einmal … Darnach ist er gesehen worden von Jakobus, darnach von allen Aposteln. Am letzten nach allen ist er auch von mir … gesehen worden.`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
              ],
              questionsBack: [
                `Haben die Adventisten nach 1844 behauptet, Christus sei leiblich in Neuengland erschienen und Dutzende hätten ihn gesehen – oder haben sie das Ereignis in den Himmel verlegt?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'schweitzer-rad-der-welt',
      objection: `Schweitzer hat gezeigt: Jesus warf sich in das Rad der Welt, um die Endzeit herbeizuzwingen – und es zermalmte ihn. Das ist der historische Jesus; alles andere ist Theologie.`,
      objectionBy: 'Albert Schweitzer (rezipiert bei Ehrman)',
      answer: `Schweitzers großes Verdienst war der Nachweis, dass die liberalen Jesusbilder des 19. Jahrhunderts ihr eigenes Ideal in Jesus hineinlasen. Seine eigene Rekonstruktion stützte sich aber stark auf ein einziges Wort (Mt 10,23) und gilt in ihren Einzelheiten heute als überholt. Bezeichnend: Schweitzer selbst blieb Christ und folgte Jesu Ruf so radikal, dass er als Arzt nach Lambaréné ging. Die historische Frage, ob Jesus apokalyptisch dachte, entscheidet nicht die Frage, ob er recht hatte – und schon gar nicht, ob er auferstanden ist.`,
      detail: `**Ein Spiegel für alle Seiten:** Der katholische Modernist George Tyrrell spottete 1909, Harnacks Christus sei nur das Spiegelbild eines liberal-protestantischen Gesichts, gesehen auf dem Grund eines tiefen Brunnens. Diese Gefahr besteht für jeden Forscher – auch für den, der in Jesus einen gescheiterten Propheten sehen möchte.`,
      sources: [
        { kind: 'fachliteratur', author: 'George Tyrrell', work: 'Christianity at the Cross-Roads', year: '1909', quote: `Harnacks Christus sei nur das Spiegelbild eines liberal-protestantischen Gesichts auf dem Grund eines tiefen Brunnens.`, status: 'paraphrase' },
      ],
    },
    {
      id: 'kriterien-erledigt',
      objection: `Du argumentierst ständig mit dem „Kriterium der Peinlichkeit" und der „Mehrfachbezeugung". Diese Echtheitskriterien gelten in der Forschung inzwischen als gescheitert – Chris Keith und andere haben gezeigt, dass man mit ihnen keine echten Jesusworte herausfiltern kann. Damit fällt auch deine Verteidigung von Mk 13,32.`,
      objectionBy: 'Dan McClellan',
      answer: `Die Kritik an den Kriterien trifft beide Seiten gleich – auch die Rekonstruktion eines bloß apokalyptischen Jesus beruht auf ihnen. Die Alternative, die Forscher wie Dale Allison vorschlagen, ist ein Gedächtnis-Ansatz: Man fragt nach **wiederkehrenden Mustern** in der gesamten Überlieferung, statt einzelne Sätze zu „beglaubigen". Und dieser Ansatz führt zu einem bemerkenswerten Ergebnis: Zu den sichersten Mustern gehört, dass Jesus sich selbst eine zentrale Rolle im kommenden Gottesreich zuschrieb. Der Gedächtnis-Ansatz entzieht also dem Bild vom „bloßen Propheten" eher den Boden, als dass er ihn stützt.`,
      detail: `**Die Kriteriendebatte:** Der Sammelband von Chris Keith und Anthony Le Donne (2012) hat die klassischen Echtheitskriterien (Unähnlichkeit, Peinlichkeit, Mehrfachbezeugung) grundsätzlich kritisiert: Sie behandeln Jesusworte wie isolierte Bausteine und übersehen, dass jede Überlieferung bereits gedeutete Erinnerung ist. Diese Kritik ist ernst zu nehmen.

**Allisons Alternative:** In „Constructing Jesus" (2010) argumentiert Allison, dass wir den Gesamteindruck, den Jesus hinterließ, verlässlicher erfassen als einzelne Worte. Zu diesem Gesamteindruck gehören für ihn die apokalyptische Erwartung **und** ein außerordentlich hohes Selbstverständnis: Jesus habe sich als die zentrale Gestalt der Endzeit gesehen, über die das Gericht entscheidet.

**Für das Gespräch:** Wer die Kriterien verabschiedet, kann nicht zugleich mit ihnen „unechte" Hoheitsworte aussortieren. Er muss mit dem Gesamtbild arbeiten – und das zeigt einen Jesus, der mehr beanspruchte als ein Prophet.`,
      voices: [
        {
          person: 'keener',
          role: 'als Neutestamentler und Kenner antiker Biografie',
          text: `Keener betont, dass die Evangelien antike Biografien sind, deren Verfasser Erinnerungen an eine reale Person bewahren wollten. Statt Satz für Satz zu prüfen, fragt er, was die Gattung und der kurze Abstand zu den Ereignissen an Zuverlässigkeit erwarten lassen. Das Ergebnis: Der Gesamteindruck der Evangelien – Lehrer, Wundertäter, Vollmachtsanspruch, Kreuzigung – ist historisch gut begründet.`,
          sources: [{ kind: 'fachliteratur', author: 'Craig S. Keener', work: 'Christobiography: Memory, History, and the Reliability of the Gospels', year: '2019', status: 'paraphrase', quote: `Die Evangelien als antike Biografien mit Erinnerungsgehalt.` }],
        },
      ],
      sources: [
        { kind: 'fachliteratur', author: 'Chris Keith / Anthony Le Donne (Hg.)', work: 'Jesus, Criteria, and the Demise of Authenticity', year: '2012', quote: `Grundsätzliche Kritik an den klassischen Echtheitskriterien der Jesusforschung.`, status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Dale C. Allison', work: 'Constructing Jesus: Memory, Imagination, and History', year: '2010', quote: `Allison ersetzt die Einzelkriterien durch die Frage nach wiederkehrenden Mustern und findet darunter ein hohes Selbstverständnis Jesu.`, status: 'paraphrase' },
      ],
      questionsBack: [
        `Wenn die Kriterien nicht taugen – mit welcher Methode sortierst du dann die Hoheitsworte Jesu als unecht aus?`,
        `Welches Gesamtbild ergibt sich für dich, wenn du nach wiederkehrenden Mustern in allen Quellen fragst?`,
      ],
      followUps: [
        {
          id: 'hoher-anspruch-trotzdem-irrtum',
          objection: `Schön, dann hatte Jesus eben ein hohes Selbstverständnis – er hielt sich für den künftigen König oder Weltenrichter. Das haben viele Endzeitpropheten. Ein hohes Selbstbild macht ihn nicht zu Gott, sondern höchstens zu einem besonders kühnen Propheten, der sich geirrt hat.`,
          objectionBy: 'Bart Ehrman',
          answer: `Richtig – ein Anspruch allein beweist nichts; er stellt eine Frage. C. S. Lewis hat sie zugespitzt: Wer so spricht wie Jesus, ist entweder größenwahnsinnig, ein Betrüger oder der, für den er sich hält. Die Antwort hängt dann an dem Ereignis, das die Jünger als Gottes Bestätigung verstanden: der Auferstehung. Ein gescheiterter Prophet wird nicht auferweckt. Deshalb führt jedes ernsthafte Gespräch über den Anspruch Jesu am Ende zur Frage nach Ostern – und dort sind die Belege stark.`,
          detail: `**Andere Endzeitpropheten:** Josephus berichtet von Theudas und dem „Ägypter", die Zeichen ankündigten und von den Römern getötet wurden (Ant. 20,97–98.169–172). Ihre Bewegungen zerfielen nach ihrem Tod. Bei Jesus ist es umgekehrt: Nach seinem Tod entsteht eine Bewegung, die ihn als Herrn anbetet (Phil 2,6–11) – und zwar unter Juden, die strenge Monotheisten waren.

**Zum Trilemma:** Lewis' Argument ist kein Beweis, sondern eine Klärung der Alternativen; es setzt voraus, dass der Anspruch historisch ist – genau das zeigt der Gedächtnis-Ansatz.`,
          voices: [
            {
              person: 'cs-lewis',
              role: 'als Apologet',
              text: `Lewis argumentiert, dass Jesu Anspruch – Sünden zu vergeben, mit Gott eins zu sein, das Gericht zu halten – die bequeme Einordnung als „großer Morallehrer" ausschließt. Wer solche Dinge sagt und bloß ein Mensch ist, ist entweder krank oder ein Betrüger. Man müsse sich entscheiden, statt ihn herablassend zu loben.`,
              sources: [{ kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Pardon, ich bin Christ (Mere Christianity)', ref: 'Buch II, Kap. 3', year: '1952', status: 'paraphrase', quote: `Das sogenannte Trilemma: Jesus war entweder ein Lügner, ein Wahnsinniger oder der Herr.` }],
            },
          ],
          sources: [
            { kind: 'sonstiges', author: 'Flavius Josephus', work: 'Jüdische Altertümer', ref: '20,97–98; 20,169–172', year: 'ca. 93/94', quote: `Berichte über Theudas und den „Ägypter", die als Propheten Zeichen ankündigten und von den Römern niedergeschlagen wurden.`, status: 'paraphrase' },
          ],
          questionsBack: [
            `Welcher andere gescheiterte Endzeitprophet wurde nach seiner Hinrichtung von jüdischen Monotheisten als Herr angebetet?`,
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welches konkrete Datum hat Jesus für das Ende genannt?`,
    `Wie erklärst du Mk 13,32, wenn die Kirche die Worte Jesu ihrem Bedarf angepasst hat?`,
    `Ist ein Prophet, der den Fall des Tempels innerhalb einer Generation ankündigt, „gescheitert"?`,
    `Warum hätten Jünger eines gescheiterten Endzeitpropheten nicht einfach einen neuen Messias gesucht – wie nach anderen Bewegungen ihrer Zeit?`,
  ],
  avoid: [
    `Behaupten, Jesus habe überhaupt keine Naherwartung gehabt – die eschatologische Dringlichkeit ist im Text unübersehbar.`,
    `Mk 13,30 mit „Geschlecht = jüdisches Volk" wegerklären, ohne zu sagen, dass dies eine Minderheitsdeutung ist.`,
    `Eigene Endzeitberechnungen anstellen – genau das hat Jesus untersagt (Apg 1,7).`,
  ],
  concessions: [
    `Jesus verkündete das Reich Gottes mit großer Dringlichkeit; die apokalyptische Deutung ist eine ernstzunehmende Forschungsposition, die auch gläubige Christen wie Dale Allison vertreten.`,
    `Die genaue Deutung von Mk 9,1 und Mk 13,30 ist auch unter christlichen Exegeten umstritten.`,
    `Paulus hoffte offenbar, die Wiederkunft noch zu erleben (1 Thess 4,15) – ohne einen Termin zu nennen.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'N. T. Wright', work: 'Jesus and the Victory of God', year: '1996', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Dale C. Allison', work: 'Constructing Jesus: Memory, Imagination, and History', year: '2010', status: 'paraphrase', note: 'Ehrlich, anspruchsvoll, von einem christlichen Kritiker.' },
    { kind: 'gegner', author: 'Bart D. Ehrman', work: 'Jesus: Apocalyptic Prophet of the New Millennium', year: '1999', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Craig S. Keener', work: 'The Historical Jesus of the Gospels', year: '2009', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Apokalyptik', 'Naherwartung', 'Schweitzer', 'Menschensohn', 'Reich Gottes'],
  related: [
    'prophetie/wiederkunft-falsche-prophetie',
    'historischer-jesus/gottheit-jesu-spaet-erfunden',
    'islam-gottheit-christi/vater-groesser-stunde-unbekannt',
    'auferstehung/halluzinationen',
  ],
};

export default claim;
