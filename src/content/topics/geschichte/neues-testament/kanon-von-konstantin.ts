import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'kanon-von-konstantin',
  title: `„Der Kanon wurde von Konstantin bzw. auf dem Konzil von Nizäa festgelegt – unbequeme Evangelien wurden unterdrückt."`,
  proponents: [
    { name: 'Dan Brown', role: 'Romanautor', work: 'Sakrileg / The Da Vinci Code (2003)' },
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, UNC', work: 'Lost Christianities: The Battles for Scripture and the Faiths We Never Knew (2003)' },
    { name: 'Elaine Pagels', role: 'Religionshistorikerin, Princeton', work: 'The Gnostic Gospels (1979)' },
    { name: 'Walter Bauer', role: 'Neutestamentler, Göttingen', work: 'Rechtgläubigkeit und Ketzerei im ältesten Christentum (1934)' },
  ],
  steelman: `Im frühen Christentum gab es Dutzende Evangelien – nach Thomas, Maria, Philippus, Judas, Petrus – und ganz unterschiedliche Christentümer. Walter Bauer zeigte, dass in manchen Regionen die später „ketzerisch" genannten Gruppen älter und stärker waren als die „Rechtgläubigen". Welche Bücher heilig wurden, entschied am Ende die Partei, die gewann – und die sich mit der Macht verbündete. Kaiser Konstantin ließ 325 in Nizäa die Kirche vereinheitlichen und bestellte bei Eusebius fünfzig Prachtbibeln; was nicht hineinkam, verschwand. Eine endgültige Liste der 27 Bücher taucht erst 367 auf, bei Athanasius, einem machtbewussten Bischof. Die gnostischen Schriften, die ein anderes Jesusbild zeigten, wurden verboten und mussten in Ägypten vergraben werden – erst 1945 kamen sie bei Nag Hammadi wieder ans Licht. Der Kanon ist das Produkt kirchlicher Politik, nicht göttlicher Offenbarung. – Populär so bei Dan Brown, wissenschaftlich vorsichtiger bei Ehrman und Pagels.`,
  biblical: {
    summary: `Das NT selbst zeigt, dass apostolische Schriften schon zur Zeit der Apostel gesammelt, ausgetauscht und als Schrift gelesen wurden: Paulus' Briefe sollen in mehreren Gemeinden gelesen werden (Kol 4,16; 1 Thess 5,27); 2 Petr 3,15–16 stellt die Paulusbriefe neben „die anderen Schriften"; 1 Tim 5,18 zitiert ein Jesuswort (Lk 10,7) zusammen mit Dtn 25,4 als „Schrift". Die Kirche hat den Kanon nicht erfunden, sondern die Schriften anerkannt, die sie von den Aposteln empfangen hatte.`,
    detail: `**1 Tim 5,18:** „Denn es spricht die Schrift: Du sollst dem Ochsen nicht das Maul verbinden, der da drischt (Dtn 25,4), und: Ein Arbeiter ist seines Lohnes wert (vgl. Lk 10,7)." – Ein Jesuswort steht hier gleichrangig neben der Tora.

**2 Petr 3,15–16:** Die Paulusbriefe werden von manchen verdreht „wie auch die andern Schriften" – sie gelten also bereits als Schrift. (Die Verfasserschaft des 2. Petrusbriefes ist in der Forschung umstritten; als Zeugnis für eine frühe Sammlung der Paulusbriefe bleibt der Text bedeutsam.)`,
    sources: [
      { kind: 'bibel', work: '2. Petrus', ref: '3,15–16', quote: `… wie auch unser lieber Bruder Paulus nach der Weisheit, die ihm gegeben ist, euch geschrieben hat, wie er auch in allen Briefen davon redet, in welchen sind etliche Dinge schwer zu verstehen, welche verdrehen die Ungelehrigen und Leichtfertigen, wie auch die andern Schriften, zu ihrer eigenen Verdammnis.`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
      { kind: 'bibel', work: '1. Timotheus', ref: '5,18', quote: `Denn es spricht die Schrift: „Du sollst dem Ochsen nicht das Maul verbinden, der da drischt", und: „Ein Arbeiter ist seines Lohnes wert."`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Thessalonicher', ref: '5,27', quote: `Ich beschwöre euch bei dem HERRN, daß ihr diesen Brief lesen lasset vor allen heiligen Brüdern.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Es ist ein koptischer Papst, der als Erster genau die 27 Bücher des Neuen Testaments auflistete: der hl. **Athanasius** von Alexandrien in seinem 39. Osterfestbrief (367) an die Kirchen Ägyptens. Er formulierte damit nicht eine neue Entscheidung, sondern die Überlieferung, die die Kirche „von Anfang an" empfangen hatte, und schützte die Gläubigen vor apokryphen Schriften. Teile dieses Briefes sind auch in koptischer Sprache erhalten. Die koptisch-orthodoxe Kirche bekennt die 27 Bücher des NT und – für das AT – auch die deuterokanonischen Bücher.`,
    detail: `**Wichtig gegen den Mythos:** Athanasius stand zur Zeit seines Briefes nicht im Bund mit der kaiserlichen Macht, sondern hatte unter Kaisern, die die Arianer förderten, mehrfach in der Verbannung gelebt. Sein Kanon ist kein Staatsdekret, sondern die Weisung eines Hirten an seine Herde. Er unterscheidet sorgfältig: kanonische Bücher, Bücher, die man Katechumenen zur Erbauung lesen darf (z. B. Didache, Hirt des Hermas), und Apokryphen, die man meiden soll.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: '39. Osterfestbrief', year: '367', quote: `Dies sind die Quellen des Heils, damit, wer dürstet, sich an den Worten in ihnen sättige. In ihnen allein wird die Lehre der Frömmigkeit verkündet. Niemand füge etwas hinzu, noch nehme er etwas davon weg.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: '39. Osterfestbrief', year: '367', quote: `Daneben gibt es Bücher, die nicht in den Kanon gehören, die aber von den Vätern dazu bestimmt wurden, denen vorgelesen zu werden, die neu hinzukommen – etwa die Lehre der Apostel und der Hirt.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Der Mythos „Nizäa bzw. Konstantin bestimmte den Kanon" wird von **keinem** Fachhistoriker vertreten – auch nicht von Ehrman. Das Konzil von Nizäa (325) befasste sich mit Arius, dem Ostertermin und kirchlicher Disziplin; in seinen Kanones und Berichten ist von einer Bücherliste keine Rede. Die Forschung sieht den Kanon als Ergebnis eines **Prozesses**: Ein Kern (vier Evangelien, Paulusbriefe, Apostelgeschichte, 1 Petr, 1 Joh) war um 180–200 weithin anerkannt; über einige kleinere Schriften (Hebr, Jak, 2 Petr, 2–3 Joh, Jud, Offb) wurde bis ins 4. Jahrhundert diskutiert.`,
    detail: `**Die ehrlichen Punkte der Gegenseite:**
- Es gab tatsächlich viele weitere Evangelien und Schriften; manche wurden in einzelnen Gemeinden gelesen.
- Die vollständige Liste von 27 Büchern erscheint erstmals 367 bei Athanasius.
- Im Osten blieb die Offenbarung lange umstritten; die syrische Peschitta umfasst bis heute nur 22 Bücher des NT.
- Das Muratorische Fragment wird meist ins späte 2. Jahrhundert datiert, einige Forscher (Sundberg, Hahneman) setzen es ins 4. Jahrhundert.

**Die Bauer-These** (1934) wurde intensiv diskutiert und in vielen Punkten kritisiert (H. E. W. Turner, The Pattern of Christian Truth, 1954; Köstenberger/Kruger, The Heresy of Orthodoxy, 2010).

**Konstantins 50 Bibeln:** Eusebius berichtet, dass Konstantin bei ihm fünfzig Abschriften der heiligen Schriften für die neuen Kirchen Konstantinopels bestellte (Vita Constantini IV,36). Das war ein Herstellungsauftrag – über den Inhalt sagt der Bericht nichts, und Eusebius hatte die in der Kirche anerkannten Bücher schon vorher in seiner Kirchengeschichte beschrieben (KG III,25).`,
    sources: [
      { kind: 'kirchenvater', author: 'Eusebius von Caesarea', work: 'Vita Constantini', ref: 'IV,36', year: 'ca. 339', quote: `Konstantin bittet Eusebius, fünfzig Abschriften der göttlichen Schriften auf gut bearbeitetem Pergament von geübten Schreibern anfertigen zu lassen, für die Kirchen in Konstantinopel.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Eusebius von Caesarea', work: 'Kirchengeschichte', ref: 'III,25', year: 'vor 325 (Erstfassung)', quote: `Eusebius unterscheidet allgemein anerkannte Schriften (vier Evangelien, Apostelgeschichte, Paulusbriefe, 1 Joh, 1 Petr), umstrittene (Jak, Jud, 2 Petr, 2–3 Joh), unechte (z. B. Hirt des Hermas, Didache) und häretische (z. B. Evangelien des Petrus, Thomas, Matthias).`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Bart D. Ehrman', work: 'Lost Christianities', year: '2003', quote: `Ehrman beschreibt die Kanonbildung als Ergebnis von Auseinandersetzungen zwischen verschiedenen frühchristlichen Gruppen, bei denen die „proto-orthodoxe" Richtung siegte.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Andreas J. Köstenberger / Michael J. Kruger', work: 'The Heresy of Orthodoxy', year: '2010', quote: `Kritik der Bauer-These und Darstellung der frühen Einheit im Kern des Glaubens und des Kanons.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Das Konzil von Nizäa hat überhaupt nicht über den Kanon gesprochen – es ging um Arius und den Ostertermin. Die vier Evangelien waren schon 150 Jahre vor Konstantin anerkannt: Irenäus schreibt um 180, es könne nur vier Evangelien geben, und lehnt das Judasevangelium ausdrücklich ab. Die erste vollständige Liste der 27 Bücher stammt vom koptischen Papst Athanasius (367) – einem Mann, der von Kaisern fünfmal verbannt wurde, also kein Werkzeug der Macht. Konstantin ließ 50 Bibeln **abschreiben**, er bestimmte nicht ihren Inhalt.`,
  keyPoints: [
    `**Nizäa und Kanon:** Kein Kanon, keine Bücherliste, keine Abstimmung über Evangelien in den Akten von Nizäa – der Mythos stammt aus späteren Legenden und Romanen.`,
    `**Früher Kern:** Vier Evangelien und Paulusbriefe sind um 180 weithin anerkannt (Irenäus, Muratorisches Fragment, Tatians Diatessaron, Clemens von Alexandrien, Tertullian).`,
    `**Gnostische Evangelien sind später:** Thomas, Maria, Judas, Philippus stammen aus dem 2.–3. Jahrhundert; Irenäus verwarf das Judasevangelium schon um 180.`,
    `**Athanasius, der koptische Papst:** erste Liste der 27 Bücher (367) – von einem Bischof, der gegen die kaiserliche Politik stand.`,
    `**Konstantins 50 Bibeln:** ein Herstellungsauftrag für Konstantinopel, keine Inhaltsentscheidung (Vita Constantini IV,36).`,
    `**Anerkennung, nicht Erfindung:** Die Kirche erkannte, was sie von den Aposteln empfangen hatte – Kriterien waren apostolischer Ursprung, Übereinstimmung mit der Glaubensregel und allgemeiner Gebrauch.`,
  ],
  voices: [
    {
      person: 'athanasius',
      role: 'als koptischer Papst und Verfasser der ersten 27-Bücher-Liste',
      text: `Athanasius schrieb 367 seinen jährlichen Osterbrief an die Kirchen Ägyptens. Anlass war, dass manche Gruppen apokryphe Bücher unter die heiligen Schriften mischten. Er zählte deshalb auf, welche Bücher „überliefert und als göttlich geglaubt" sind – darunter genau die 27 Schriften des NT – und betont, er schreibe nichts Neues, sondern was die Väter seit Anfang überliefert haben. Er unterscheidet nüchtern zwischen kanonischen Büchern, erbaulichen Schriften für Katechumenen und Apokryphen. Ein Kaiser kommt in seiner Begründung nicht vor.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: '39. Osterfestbrief', year: '367', status: 'paraphrase', quote: `Aufzählung der kanonischen Bücher als von den Vätern überliefert.` }],
    },
    {
      person: 'irenaeus',
      role: 'als Zeuge der Vier-Evangelien-Sammlung um 180',
      text: `Irenäus kämpfte gegen gnostische Gruppen, die eigene Evangelien verbreiteten. Er erklärt, die Kirche habe genau vier Evangelien – nicht mehr und nicht weniger – und vergleicht sie mit den vier Himmelsrichtungen und den vier Lebewesen vor Gottes Thron. Er kennt das Judasevangelium und weist es als Erfindung einer gnostischen Gruppe zurück. Das ist rund 145 Jahre vor Nizäa und lange bevor ein Kaiser Christ wurde.`,
      sources: [
        { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'III,11,8', year: 'ca. 180', quote: `Es ist nicht möglich, dass die Evangelien mehr oder weniger an Zahl sind, als sie sind; denn da es vier Weltgegenden gibt, in denen wir leben, und vier Hauptwinde …`, status: 'paraphrase' },
        { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'I,31,1', year: 'ca. 180', quote: `Irenäus berichtet von einer Gruppe, die ein erdichtetes Werk verbreite, das sie „Evangelium des Judas" nenne.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'eusebius',
      role: 'als Kirchenhistoriker (mit Vorbehalt)',
      text: `Eusebius hat in seiner Kirchengeschichte die Schriften nach ihrer Anerkennung in den Kirchen geordnet – allgemein anerkannt, umstritten, unecht, häretisch. Diese Einteilung beschreibt den Gebrauch der Kirchen, nicht einen Erlass. Bemerkenswert ist, dass er die umstrittenen Bücher offen als umstritten bezeichnet: ein Zeichen dafür, dass hier nicht von oben dekretiert, sondern gemeinsam geprüft wurde.`,
      sources: [{ kind: 'kirchenvater', author: 'Eusebius von Caesarea', work: 'Kirchengeschichte', ref: 'III,25', year: 'ca. 325', status: 'paraphrase', quote: `Einteilung der Schriften nach ihrer Anerkennung in den Kirchen.` }],
    },
    {
      person: 'michael-kruger',
      role: 'als Kanonforscher',
      text: `Kruger zeigt, dass die Vorstellung, der Kanon sei erst im 4. Jahrhundert „entstanden", Kanon als **Liste** mit Kanon als **Autorität** verwechselt. Schon im 2. Jahrhundert wurden die Evangelien und Paulusbriefe als Schrift gelesen, zitiert und kommentiert. Er argumentiert außerdem, dass die neutestamentlichen Schriften von Anfang an mit apostolischem Anspruch auftraten und die Kirche diesen Anspruch erkannte – der Kanon ist nach ihm im Kern „selbstbeglaubigend", nicht kirchlich verliehen.`,
      sources: [{ kind: 'fachliteratur', author: 'Michael J. Kruger', work: 'The Question of Canon: Challenging the Status Quo in the New Testament Debate', year: '2013', status: 'paraphrase', quote: `Kritik an der Annahme einer späten Kanonentstehung; Unterscheidung von Kanon als Liste und Kanon als Autorität.` }],
    },
    {
      person: 'metzger',
      role: 'als Kanonhistoriker',
      text: `Metzger fasst in seinem Standardwerk zusammen, dass die Kirche den Kanon nicht geschaffen, sondern die Autorität bestimmter Schriften erkannt, angenommen und bestätigt hat, die sich in ihrem Leben bereits durchgesetzt hatten. Kein Konzil des Altertums habe den Kanon für die ganze Kirche „gemacht"; regionale Synoden (Hippo 393, Karthago 397) bestätigten nur, was längst in Gebrauch war.`,
      sources: [{ kind: 'fachliteratur', author: 'Bruce M. Metzger', work: 'The Canon of the New Testament: Its Origin, Development, and Significance', year: '1987', status: 'paraphrase', quote: `Die Kirche hat den Kanon nicht geschaffen, sondern anerkannt.` }],
    },
  ],
  dialog: [
    {
      id: 'nizaea-kanon',
      objection: `Konstantin hat 325 in Nizäa die Bischöfe abstimmen lassen, welche Bücher in die Bibel kommen. Evangelien, die Jesus als Menschen zeigten, wurden verboten und verbrannt.`,
      objectionBy: 'Dan Brown („Sakrileg") / verbreitete Populärliteratur',
      answer: `Davon steht nichts in irgendeiner Quelle über Nizäa. Das Konzil behandelte die Lehre des Arius, den Ostertermin und Fragen der Kirchenordnung; seine zwanzig Kanones und das Glaubensbekenntnis enthalten keine Bücherliste. Übrigens zeigen gerade die kanonischen Evangelien Jesus sehr menschlich – er hungert, weint, ist müde und stirbt –, während viele gnostische Schriften ihn eher entrückt und körperlos darstellen. Die These dreht die Wirklichkeit um.`,
      questionsBack: [
        `Welche antike Quelle berichtet von einer Abstimmung über Bücher in Nizäa?`,
        `Welches Evangelium zeigt Jesus menschlicher als Markus, wo er müde schläft, zornig wird und am Kreuz schreit?`,
      ],
      followUps: [
        {
          id: 'fuenfzig-bibeln',
          objection: `Aber Konstantin ließ nachweislich fünfzig Bibeln anfertigen. Wer die Bibeln bezahlt, bestimmt, was drinsteht.`,
          objectionBy: 'Verbreiteter Einwand',
          answer: `Eusebius berichtet tatsächlich, dass Konstantin bei ihm fünfzig Abschriften „der göttlichen Schriften" für die neuen Kirchen Konstantinopels bestellte (Vita Constantini IV,36). Das war ein Herstellungsauftrag – der Kaiser brauchte Bibeln für neue Kirchen. Welche Bücher dazugehörten, bestimmte die bestehende kirchliche Praxis, die Eusebius schon vorher in seiner Kirchengeschichte beschrieben hatte. Kein Wort deutet darauf hin, dass Konstantin den Inhalt festlegte.`,
          followUps: [
            {
              id: 'eusebius-hofbischof',
              objection: `Eusebius war Konstantins Hofbischof und Lobredner. Natürlich hat er im Sinn des Kaisers ausgewählt.`,
              objectionBy: 'Verbreiteter Einwand',
              answer: `Eusebius' Einteilung der Schriften steht in seiner Kirchengeschichte, deren erste Fassung vor 325 entstand – vor seiner Nähe zum Kaiser. Und die erste vollständige 27-Bücher-Liste stammt nicht von ihm, sondern von Athanasius, der unter Konstantins Nachfolgern mehrfach verbannt wurde, weil er sich der kaiserlich geförderten arianischen Richtung widersetzte. Wäre der Kanon ein kaiserliches Produkt, hätte ihn ausgerechnet der größte Gegner der Hofpolitik formuliert.`,
              followUps: [
                {
                  id: 'athanasius-machtpolitik',
                  objection: `Dann eben nicht Konstantin, sondern Athanasius. Sein Osterfestbrief von 367 war ein Machtinstrument: Er wollte unabhängige Lehrer und Studienzirkel in Ägypten unter bischöfliche Kontrolle bringen. David Brakke hat das gezeigt. Der Kanon ist Kirchenpolitik.`,
                  objectionBy: 'Bart Ehrman / David Brakke (rezipiert)',
                  answer: `Brakke hat recht, dass der Brief auch eine pastorale und kirchenpolitische Absicht hatte: Athanasius wollte die Gemeinden vor Schriften schützen, die Irrlehrer verbreiteten. Aber er erfindet keine Liste, sondern sagt ausdrücklich, er zähle auf, was „überliefert und als göttlich geglaubt" sei. Seine 27 Bücher entsprechen dem, was Origenes und die alexandrinische Kirche längst lasen. Und er verbietet nicht alles Übrige: Die Didache und den Hirten des Hermas empfiehlt er ausdrücklich für Taufbewerber – nur eben nicht als kanonische Schrift. Wer Machtpolitik sucht, findet hier einen Bischof, der Bewährtes festhält.`,
                  detail: `**Der 39. Osterfestbrief (367):** Athanasius nennt die Bücher des Alten und Neuen Testaments und schreibt, dies seien „die Quellen des Heils"; niemand solle etwas hinzufügen oder wegnehmen. Daneben nennt er Schriften, die „nicht kanonisiert" sind, aber von den Vätern für die Unterweisung Neubekehrter bestimmt wurden (u. a. Weisheit Salomos, Sirach, Ester, Judit, Tobit, Didache, Hirt des Hermas). Apokryphen im engeren Sinn – Schriften, die Häretiker unter alten Namen verbreiteten – lehnt er ab.

**Koptisch-orthodoxe Lesart:** Der Brief ist eine Frucht der alexandrinischen Tradition, nicht ihr Anfang. Die Einteilung in kanonische und zur Unterweisung empfohlene Schriften spiegelt den liturgischen Gebrauch der ägyptischen Kirche. (Zur Stellung der deuterokanonischen Bücher in der koptischen Kirche siehe den Themenblock Sola Scriptura.)

**Ehrlich:** Kirchliche Autorität spielte bei der Kanonbildung eine Rolle – die Kirche hat ihre Schriften nicht im luftleeren Raum gelesen. Der Punkt ist, dass sie bestätigte, was sich im Gebrauch der Gemeinden über Generationen durchgesetzt hatte.`,
                  voices: [
                    {
                      person: 'athanasius',
                      role: 'als Bischof von Alexandrien und Verfasser des 39. Osterfestbriefs',
                      text: `Athanasius versteht sich nicht als Gesetzgeber, sondern als Zeuge: Er will aufschreiben, was die Kirche von Anfang an empfangen hat, damit die Gläubigen nicht durch Schriften mit erfundenen apostolischen Namen getäuscht werden. Seine Unterscheidung zwischen kanonischen und zur Unterweisung nützlichen Büchern zeigt Augenmaß, nicht Zensur.`,
                      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: '39. Osterfestbrief', year: '367', status: 'paraphrase', quote: `Dies sind die Quellen des Heils … Niemand füge etwas hinzu oder nehme etwas davon weg.` }],
                    },
                  ],
                  sources: [
                    { kind: 'fachliteratur', author: 'David Brakke', work: `Canon Formation and Social Conflict in Fourth-Century Egypt: Athanasius of Alexandria's Thirty-Ninth Festal Letter. Harvard Theological Review 87`, year: '1994', quote: `Brakke deutet den Osterfestbrief auch als Versuch, unabhängige Lehrerkreise der bischöflichen Autorität zu unterstellen.`, status: 'paraphrase' },
                  ],
                  questionsBack: [
                    `Welches der 27 Bücher bei Athanasius war vor ihm in Alexandrien unbekannt?`,
                    `Warum empfiehlt ein angeblicher Zensor ausdrücklich die Didache und den Hirten des Hermas zur Lektüre?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'kanon-erst-367',
      objection: `Selbst wenn nicht Nizäa – der Kanon stand bis 367 nicht fest. Erst Athanasius nennt die 27 Bücher. Davor war alles offen; jede Gemeinde las, was sie wollte.`,
      objectionBy: 'Bart Ehrman',
      answer: `Eine abschließende **Liste** ist nicht dasselbe wie anerkannte **Autorität**. Lange vor 367 waren die vier Evangelien, die Paulusbriefe, die Apostelgeschichte, der 1. Petrus- und der 1. Johannesbrief in der ganzen Kirche anerkannt – bezeugt von Irenäus, Clemens von Alexandrien, Tertullian, Origenes und dem Muratorischen Fragment. Diskutiert wurde über einige kurze Schriften am Rand. Die Kirche las also nicht „was sie wollte", sondern einen gemeinsamen Kern; Athanasius schrieb fest, was längst Konsens war.`,
      followUps: [
        {
          id: 'muratori-spaet',
          objection: `Das Muratorische Fragment stammt nach Sundberg und Hahneman vielleicht erst aus dem 4. Jahrhundert. Dann fällt dein frühester Kanonzeuge weg.`,
          objectionBy: 'Geoffrey Hahneman / Albert Sundberg (rezipiert)',
          answer: `Die Spätdatierung ist eine Minderheitsmeinung; die meisten Forscher bleiben beim späten 2. Jahrhundert, weil das Fragment den Hirten des Hermas als „ganz kürzlich, zu unserer Zeit" in Rom verfasst bezeichnet. Aber selbst ohne das Fragment ändert sich wenig: Irenäus um 180 bezeugt ausdrücklich genau vier Evangelien, Tatian fasst um 170 dieselben vier in seinem Diatessaron zusammen, und Clemens von Alexandrien und Tertullian zitieren sie als Schrift.`,
          followUps: [
            {
              id: 'irenaeus-vier-winde',
              objection: `Irenäus' Begründung für genau vier Evangelien ist lächerlich: Es gebe vier Winde und vier Himmelsrichtungen, also müsse es vier Evangelien geben. Das zeigt, dass die Auswahl willkürlich war – und Irenäus war der Ketzerjäger, der die „Orthodoxie" überhaupt erst erfunden hat.`,
              objectionBy: 'Bart Ehrman / Elaine Pagels',
              answer: `Die vier Winde sind eine Veranschaulichung, keine Begründung – Irenäus erklärt eine **bestehende** Tatsache mit einem schönen Bild, wie es antike Rhetorik liebte. Die Tatsache selbst ist älter als er: Justin berichtet um 150, dass im Sonntagsgottesdienst die „Denkwürdigkeiten der Apostel, die Evangelien genannt werden", gelesen wurden; sein Schüler Tatian verwob um 170 genau diese vier zu einer Evangelienharmonie. Irenäus schuf den Vier-Evangelien-Kanon nicht, er verteidigte ihn gegen Gruppen, die ihn verkürzen (Markion) oder erweitern wollten.`,
              detail: `**Irenäus, Adv. Haer. III,11,8:** Da es vier Weltgegenden und vier Hauptwinde gebe und die Kirche über die ganze Erde verbreitet sei, sei es passend, dass sie vier Säulen habe – die vier Evangelien. Das Argument ist theologische Symbolik.

**Wichtiger ist III,1,1:** Dort gibt Irenäus die Entstehung der Evangelien an – Matthäus unter den Hebräern, Markus als Dolmetscher des Petrus, Lukas als Begleiter des Paulus, Johannes in Ephesus. Das ist eine historische Aussage, die er aus älterer Überlieferung (u. a. Papias, Polykarp) bezieht.

**Ehrlich:** Irenäus war ein entschiedener Polemiker, und seine Darstellung der Gnostiker ist nicht neutral. Aber die Funde von Nag Hammadi haben gezeigt, dass er ihre Lehren im Wesentlichen zutreffend beschrieben hat.`,
              voices: [
                {
                  person: 'irenaeus',
                  role: 'als Zeuge der Vier-Evangelien-Überlieferung',
                  text: `Irenäus, der in seiner Jugend noch Polykarp – einen Schüler des Apostels Johannes – gehört hatte, legt Wert auf die Kette der Überlieferung: Die Evangelien stammen von Aposteln und Apostelschülern und wurden in den Gemeinden, die die Apostel gegründet hatten, von Anfang an gelesen. Gegen Markion, der nur ein gekürztes Lukasevangelium gelten ließ, und gegen Gruppen mit eigenen Geheimevangelien verteidigt er den überlieferten Bestand.`,
                  sources: [{ kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'III,1,1; III,11,8', year: 'ca. 180', status: 'paraphrase', quote: `Herkunft der vier Evangelien und ihre symbolische Deutung als vier Säulen der Kirche.` }],
                },
              ],
              sources: [
                { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: '1. Apologie', ref: '66,3; 67,3', year: 'ca. 150–155', quote: `Die Apostel haben in den von ihnen verfassten Denkwürdigkeiten, die Evangelien genannt werden, überliefert …; am sogenannten Sonntag werden die Denkwürdigkeiten der Apostel oder die Schriften der Propheten vorgelesen.`, status: 'paraphrase' },
              ],
              questionsBack: [
                `Wenn Irenäus die vier Evangelien erst ausgewählt hat – warum fasst Tatian schon zehn Jahre vor ihm genau diese vier zusammen?`,
              ],
              followUps: [
                {
                  id: 'justin-memoiren-unbestimmt',
                  objection: `Justin nennt nie einen Evangelisten beim Namen, und seine Zitate weichen oft von unseren Texten ab. Seine „Denkwürdigkeiten" können alles Mögliche gewesen sein – vielleicht eine Evangelienharmonie oder auch nichtkanonische Texte.`,
                  objectionBy: 'Bart Ehrman / Helmut Koester (rezipiert)',
                  answer: `Richtig, Justin nennt keine Namen, und er zitiert frei, oft harmonisierend – wie viele antike Autoren aus dem Gedächtnis. Aber seine Zitate stammen überwiegend aus Matthäus und Lukas, und an einer Stelle erwähnt er die „Denkwürdigkeiten des Petrus" und dass Jesus den Zebedäussöhnen den Namen „Boanerges" gab – ein Detail, das nur bei Markus steht (Mk 3,17). Er spricht von Denkwürdigkeiten, die von Aposteln **und** deren Nachfolgern verfasst wurden – genau zwei Apostel und zwei Apostelschüler. Und sein Schüler Tatian harmonisierte eben diese vier. Die einfachste Erklärung: Justin kannte unsere Evangelien.`,
                  detail: `**Justin, Dialog 103,8:** Die Denkwürdigkeiten seien „von seinen Aposteln und ihren Nachfolgern" verfasst – das passt auffällig zur kirchlichen Zuschreibung (Matthäus und Johannes als Apostel; Markus und Lukas als Apostelschüler).

**Justin, Dialog 106,3:** Erwähnt die Namensgebung „Boanerges, das heißt Donnersöhne" in den „Denkwürdigkeiten" des Petrus – eine Stelle, die nur Mk 3,17 kennt, und eine Bestätigung der alten Überlieferung, dass das Markusevangelium auf Petrus zurückgeht.

**Ehrlich:** Justin zitiert gelegentlich Formen, die nicht in unseren Evangelien stehen, und benutzte vielleicht eine eigene Harmonie. Seine Kenntnis von Johannes ist umstritten. Das Gesamtbild spricht aber für eine Vier-Evangelien-Sammlung im Rom der Mitte des 2. Jahrhunderts.`,
                  sources: [
                    { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Dialog mit dem Juden Tryphon', ref: '103,8; 106,3', year: 'ca. 155–160', quote: `Die Denkwürdigkeiten wurden von den Aposteln und ihren Nachfolgern verfasst; in den Denkwürdigkeiten des Petrus steht, dass er die Zebedäussöhne Boanerges, das heißt Donnersöhne, nannte.`, status: 'paraphrase' },
                    { kind: 'bibel', work: 'Markus', ref: '3,17', quote: `… und Jakobus, den Sohn des Zebedäus, und Johannes, den Bruder des Jakobus, und gab ihnen den Namen Bnehargem, das ist gesagt: Donnerskinder;`, translation: 'Luther 1912', status: 'paraphrase' },
                  ],
                  questionsBack: [
                    `Woher hatte Justin das Detail „Boanerges", das nur bei Markus steht, wenn nicht aus dem Markusevangelium?`,
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'offenbarung-umstritten',
          objection: `Und selbst die Kirchen sind sich bis heute nicht einig: Die syrische Peschitta hat nur 22 Bücher, die Offenbarung war im Osten jahrhundertelang umstritten. So viel zur göttlich geführten Einheit.`,
          objectionBy: 'Kipp Davis',
          answer: `Das ist richtig und zeigt gerade, dass der Kanon **nicht** zentral von oben verordnet wurde – sonst gäbe es keine Unterschiede. Die Kirchen haben die Schriften in einem langen gemeinsamen Prozess geprüft; Unterschiede betreffen einige kleinere Schriften am Rand, nicht den Kern. Die koptische Kirche hat die Offenbarung angenommen; ihr Papst Dionysius von Alexandrien bezweifelte zwar, dass sie vom Evangelisten Johannes stamme, verwarf sie aber nicht. Einheit im Wesentlichen und ehrliche Diskussion an den Rändern – das ist kein Zeichen von Manipulation.`,
        },
      ],
    },
    {
      id: 'verlorene-evangelien',
      objection: `Es gab Dutzende Evangelien – Thomas, Maria, Philippus, Judas, Petrus. Die „Rechtgläubigen" haben gewonnen und die anderen unterdrückt. Walter Bauer hat gezeigt, dass die Ketzerei in manchen Regionen älter war als die Orthodoxie. Geschichte wird von den Siegern geschrieben – auch die Bibel.`,
      objectionBy: 'Bart Ehrman / Elaine Pagels (mit Walter Bauer)',
      answer: `Die gnostischen und apokryphen Evangelien stammen fast alle aus dem 2. und 3. Jahrhundert, also deutlich nach den kanonischen, und setzen diese oft schon voraus. Die Kirche hat sie nicht nach Belieben ausgeschieden, sondern nach nachvollziehbaren Kriterien: Stammt die Schrift aus dem Kreis der Apostel? Stimmt sie mit dem überlieferten Glauben überein? Wird sie in der ganzen Kirche gelesen? Bauers These wurde in der Forschung vielfach kritisiert; die frühesten Quellen – Paulus, die Apostolischen Väter – zeigen einen gemeinsamen Kern des Glaubens, nicht ein beliebiges Nebeneinander.`,
      sources: [
        { kind: 'gegner', author: 'Walter Bauer', work: 'Rechtgläubigkeit und Ketzerei im ältesten Christentum', year: '1934', quote: `Bauer vertrat, dass in einigen Regionen die später als häretisch geltenden Formen des Christentums die ursprünglichen gewesen seien.`, status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'H. E. W. Turner', work: 'The Pattern of Christian Truth', year: '1954', quote: `Kritische Antwort auf Bauer: ein fester Kern des Glaubens bei gleichzeitiger Vielfalt an den Rändern.`, status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'thomas-frueh',
          objection: `Das Thomasevangelium könnte im Kern aus dem 1. Jahrhundert stammen und unabhängig von den Synoptikern sein – das sagen Forscher wie Stephen Patterson und April DeConick. Es zeigt einen Jesus der Weisheit, ohne Kreuz und Auferstehung.`,
          objectionBy: 'Elaine Pagels / Stephen Patterson',
          answer: `Das ist umstritten. Simon Gathercole hat in seinem großen Kommentar dargelegt, dass Thomas Matthäus und Lukas kennt und wohl ins 2. Jahrhundert gehört. Und selbst wer frühe Schichten annimmt, kommt nicht an einem Problem vorbei: Thomas ist eine Spruchsammlung ohne Geschichte – ohne Kreuz, ohne Auferstehung –, und manche Sprüche zeigen eine klar gnostisierende Tendenz; im letzten Spruch soll Maria „männlich gemacht" werden, um ins Himmelreich einzugehen (Logion 114). Das ist kein alternativer Ur-Jesus, sondern eine spätere Umdeutung.`,
          detail: `Mehr zu den gnostischen Evangelien im Themenblock „Gnosis & Geheimlehren".`,
          sources: [
            { kind: 'fachliteratur', author: 'Simon Gathercole', work: 'The Gospel of Thomas: Introduction and Commentary', year: '2014', quote: `Gathercole argumentiert für die Abhängigkeit des Thomasevangeliums von Matthäus und Lukas und eine Datierung ins 2. Jahrhundert.`, status: 'paraphrase' },
            { kind: 'sonstiges', work: 'Thomasevangelium (koptisch, Nag Hammadi Codex II)', ref: 'Logion 114', quote: `Simon Petrus sagt, Maria solle weggehen, denn Frauen seien des Lebens nicht würdig; Jesus antwortet, er werde sie führen, um sie männlich zu machen.`, status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'nag-hammadi-versteckt',
              objection: `Die Nag-Hammadi-Schriften wurden in Ägypten vergraben – vermutlich von Mönchen, nachdem Athanasius 367 die Apokryphen verboten hatte. Das ist der Beweis für die Unterdrückung!`,
              objectionBy: 'Elaine Pagels (vorsichtig als Möglichkeit)',
              answer: `Wer die Codices vergrub und warum, wissen wir nicht – die Verbindung zu Athanasius' Brief ist eine Vermutung. Aber bemerkenswert ist: Diese Texte sind **koptische** Abschriften des 4. Jahrhunderts – ägyptische Christen haben sie gelesen und kopiert. Ein Bischof, der seiner Gemeinde sagt, welche Bücher im Gottesdienst gelesen werden, tut, was jeder verantwortliche Lehrer tut. Und die Kirche lehnte diese Schriften nicht erst 367 ab, sondern schon Irenäus um 180 – aus inhaltlichen Gründen, nicht auf kaiserlichen Befehl.`,
            },
          ],
        },
      ],
    },
    {
      id: 'menschen-entschieden',
      objection: `Am Ende haben doch Menschen entschieden, welche Bücher zur Bibel gehören. Woher weißt du, dass sie richtig lagen? Dann ist die Bibel Menschenwerk.`,
      objectionBy: 'Muslimische und skeptische Gesprächspartner',
      answer: `Die Kirche versteht den Kanon nicht als Erfindung, sondern als **Anerkennung**: Sie erkannte die Schriften, die sie von den Aposteln empfangen hatte und in denen sie die Stimme ihres Herrn hörte. Aus koptisch-orthodoxer Sicht geschah das unter der Führung des Heiligen Geistes, den Christus der Kirche verheißen hat, damit er sie „in alle Wahrheit leite" (Joh 16,13). Historisch kann man nachvollziehen, warum gerade diese Bücher: Sie stammen aus dem apostolischen Kreis, sind die ältesten Zeugnisse und wurden überall gelesen. Übrigens wurde auch der Koran durch Menschen gesammelt und unter Uthman vereinheitlicht – die Frage „Wer hat gesammelt?" stellt sich jeder Schriftreligion.`,
      sources: [
        { kind: 'bibel', work: 'Johannes', ref: '16,13', quote: `Wenn aber jener, der Geist der Wahrheit, kommen wird, der wird euch in alle Wahrheit leiten.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
    },
  ],
  questionsToAsk: [
    `Welche Quelle berichtet, dass in Nizäa über die Bücher der Bibel abgestimmt wurde?`,
    `Warum nennt Irenäus schon um 180 genau vier Evangelien, wenn Konstantin sie erst 325 ausgewählt haben soll?`,
    `Welches gnostische Evangelium ist älter als die kanonischen – und welcher Beleg zeigt das?`,
    `Warum formulierte gerade Athanasius, ein Gegner der kaiserlichen Kirchenpolitik, die erste vollständige Liste?`,
  ],
  avoid: [
    `Behaupten, der Kanon sei „von Anfang an" in Listenform festgelegt gewesen – über einige Bücher wurde lange diskutiert.`,
    `Alle apokryphen Schriften pauschal als „Fälschungen von Ketzern" abtun – manche (z. B. Didache, Hirt des Hermas) wurden in der Kirche geschätzt.`,
    `Das Muratorische Fragment als unumstritten aus dem 2. Jahrhundert ausgeben.`,
  ],
  concessions: [
    `Eine vollständige Liste der 27 Bücher erscheint erst 367 bei Athanasius; über einige Schriften wurde bis ins 4. Jahrhundert diskutiert.`,
    `Es gab im 2. und 3. Jahrhundert viele weitere Evangelien und eine Vielfalt christlicher Gruppen.`,
    `Bis heute gibt es kleine Unterschiede im NT-Kanon (z. B. syrische Peschitta).`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Bruce M. Metzger', work: 'The Canon of the New Testament', year: '1987', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Michael J. Kruger', work: 'Canon Revisited: Establishing the Origins and Authority of the New Testament Books', year: '2012', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Charles E. Hill', work: 'Who Chose the Gospels? Probing the Great Gospel Conspiracy', year: '2010', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Andreas J. Köstenberger / Michael J. Kruger', work: 'The Heresy of Orthodoxy', year: '2010', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Kanon', 'Nizäa', 'Konstantin', 'Athanasius', 'gnostische Evangelien', 'Nag Hammadi', 'Irenäus'],
  related: [
    'gnosis/gnostische-evangelien-wahres-christentum',
    'kirchengeschichte-mythen/konstantin-verfaelschte',
    'antitrinitarier/trinitaet-in-nizaa-erfunden',
    'sola-scriptura/deuterokanonen-keine-bibel',
    'neues-testament/nur-kopien-von-kopien',
  ],
};

export default claim;
