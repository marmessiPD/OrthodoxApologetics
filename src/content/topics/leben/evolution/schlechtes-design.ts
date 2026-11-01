import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'schlechtes-design',
  title: `„Schlechtes Design beweist Evolution (Auge, Kehlkopfnerv, Blinddarm)."`,
  proponents: [
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The Greatest Show on Earth (2009) – Kehlkopfnerv der Giraffe, „verkehrt verdrahtete" Netzhaut' },
    { name: 'Jerry A. Coyne', role: 'Evolutionsbiologe, University of Chicago', work: 'Why Evolution Is True (2009), Kap. 3 „Remnants: Vestiges, Embryos, and Bad Design"' },
    { name: 'Nathan H. Lents', role: 'Biologe, John Jay College (CUNY)', work: 'Human Errors: A Panorama of Our Glitches, from Pointless Bones to Broken Genes (2018)' },
    { name: 'Kenneth R. Miller', role: 'Zellbiologe, Brown University', work: 'Finding Darwin\'s God (1999)' },
    { name: 'Neil Shubin', role: 'Paläontologe, University of Chicago', work: 'Your Inner Fish (2008)' },
  ],
  steelman: `Ein allwissender Ingenieur hätte die Netzhaut nicht verkehrt herum eingebaut, sodass Licht erst durch Nervenfasern und Blutgefäße muss und ein blinder Fleck entsteht – Tintenfische haben ein „richtig" verdrahtetes Auge. Er hätte den Nerv zum Kehlkopf nicht vom Gehirn hinab in die Brust, um die Aorta herum und wieder hinauf geführt – bei der Giraffe ein Umweg von mehreren Metern, ein Erbe unserer Fischvorfahren, bei denen der Nerv zu den Kiemen lief. Wir tragen ein kaputtes Gen für Vitamin C, einen Blinddarm, der sich entzünden kann, Weisheitszähne, für die der Kiefer zu klein ist, und einen Geburtskanal, der Mütter und Kinder gefährdet. All das ergibt Sinn als Kompromiss einer Geschichte, die nur mit Vorhandenem bastelt. Als Werk eines vollkommenen Schöpfers ergibt es keinen Sinn.`,
  biblical: {
    summary: `Die Schrift lehrt, dass Gott eine **sehr gute** Schöpfung schuf (Gen 1,31), dass aber durch die Sünde Vergänglichkeit und Verderbnis in die Welt kamen: Die Schöpfung ist „der Vergänglichkeit unterworfen" und „sehnt sich" nach Befreiung (Röm 8,20–22). Ein Christ erwartet also keine perfekte, sondern eine gute, aber gebrochene Welt. Zugleich warnt Paulus davor, schwach erscheinende Glieder vorschnell für überflüssig zu halten (1 Kor 12,22) – eine geistliche Aussage über die Kirche, die zugleich eine kluge Regel für den Umgang mit vermeintlich nutzlosen Organen ist.`,
    sources: [
      { kind: 'bibel', work: 'Römer', ref: '8,21–22', translation: 'Luther 1912', status: 'verbatim', quote: `Denn auch die Kreatur wird frei werden vom Dienst des vergänglichen Wesens zu der herrlichen Freiheit der Kinder Gottes. Denn wir wissen, daß alle Kreatur sehnt sich mit uns und ängstet sich noch immerdar.` },
      { kind: 'bibel', work: '1. Korinther', ref: '12,22', translation: 'Luther 1912', status: 'verbatim', quote: `Sondern vielmehr die Glieder des Leibes, die uns dünken die schwächsten zu sein, sind die nötigsten;` },
      { kind: 'bibel', work: 'Psalmen', ref: '139,14', translation: 'Luther 1912', status: 'verbatim', quote: `Ich danke dir darüber, daß ich wunderbar gemacht bin; wunderbar sind deine Werke, und das erkennt meine Seele wohl.` },
    ],
  },
  church: {
    summary: `Athanasius lehrt, dass der Mensch durch die Abkehr von Gott der Verderbnis (*phthora*) anheimfiel, die vorher durch die Gnade abgewehrt war; Gregor von Nyssa preist die Gestalt des menschlichen Leibes – den aufrechten Gang, die Hände, die den Mund für die Sprache frei machen – als Ausdruck seiner vernünftigen Bestimmung. Die koptische Theologie hält beides zusammen: Der Leib ist gute, weise gestaltete Schöpfung **und** gezeichnet von Sterblichkeit und Verfall.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung (De Incarnatione)', ref: '4–5', status: 'paraphrase', quote: `Durch die Übertretung verloren die Menschen die Gnade, die sie vor der natürlichen Verderbnis bewahrte, und fielen dem Tod und dem Verfall anheim.` },
      { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Über die Erschaffung des Menschen (De hominis opificio)', ref: '8–9', status: 'paraphrase', quote: `Die aufrechte Gestalt und die Hände sind der vernünftigen Natur des Menschen angemessen; weil die Hände dem Leib dienen, wird der Mund für die Sprache frei.` },
    ],
  },
  opposingView: {
    summary: `Die meisten Biologen sehen in Strukturen wie dem Verlauf des Nervus laryngeus recurrens oder den Resten von Organen starke Belege für gemeinsame Abstammung und für die „Bastelei" der Evolution. Zugleich hat die Forschung manche Paradebeispiele korrigiert: Die Netzhaut besitzt Müller-Zellen, die als Lichtleiter wirken (Franze et al., PNAS 2007); der Blinddarm enthält lymphatisches Gewebe und dient vermutlich als Reservoir für Darmbakterien (Bollinger et al. 2007); er ist in der Säugetierevolution mehrfach unabhängig entstanden (Smith et al.). Die meisten Organe der historischen Rudimentlisten haben sich als funktional erwiesen.`,
    detail: `Ehrlich festhalten:
- Der Verlauf des Kehlkopfnervs folgt der Embryonalentwicklung: Er zieht unter den Abkömmlingen der Kiemenbogenarterien hindurch, die beim Abstieg des Herzens in die Brust wandern. Für die gemeinsame Abstammung ist das ein elegantes Indiz.
- Der Nerv gibt auf seinem Weg Äste an Luftröhre, Speiseröhre und Herzgeflecht ab; ob der Umweg „funktionslos" ist, ist daher umstritten.
- Der blinde Fleck existiert; er wird im normalen Sehen durch das zweite Auge und neuronale Verarbeitung kompensiert.
- Das „schlechtes Design"-Argument ist im Kern theologisch: Es setzt voraus, zu wissen, wie ein Schöpfer bauen müsste.`,
    sources: [
      { kind: 'wissenschaft', author: 'Kristian Franze u. a.', work: '„Müller cells are living optical fibers in the vertebrate retina", PNAS 104 (20)', ref: 'S. 8287–8292', year: '2007', status: 'paraphrase', quote: `Müller-Gliazellen leiten Licht mit geringer Streuung durch die Netzhaut zu den Photorezeptoren – vergleichbar Glasfaserkabeln.` },
      { kind: 'wissenschaft', author: 'R. Randal Bollinger u. a.', work: '„Biofilms in the large bowel suggest an apparent function of the human vermiform appendix", Journal of Theoretical Biology 249 (4)', ref: 'S. 826–831', year: '2007', status: 'paraphrase', quote: `Der Blinddarm könnte als geschützter Rückzugsort nützlicher Darmbakterien dienen, aus dem der Darm nach Durchfallerkrankungen wiederbesiedelt wird.` },
      { kind: 'wissenschaft', author: 'Heather F. Smith u. a.', work: '„Multiple independent appearances of the cecal appendix in mammalian evolution and an investigation of related ecological and anatomical factors", Comptes Rendus Palevol 12 (6)', ref: 'S. 339–354', year: '2013', status: 'paraphrase', quote: `Der Wurmfortsatz ist in der Säugetierevolution mehr als 30-mal unabhängig entstanden und selten verloren gegangen.` },
    ],
  },
  quickAnswer: `Mehrere Paradebeispiele haben sich als gutes Design erwiesen: Müller-Zellen leiten Licht durch die Netzhaut wie Glasfasern; der Blinddarm ist Immunorgan und Bakterienreservoir und ist bei Säugetieren über 30-mal unabhängig entstanden – nicht gerade das, was man von einem nutzlosen Überbleibsel erwartet. Wo es wirklich Mängel gibt, erwartet der christliche Glaube das ohnehin: eine gute Schöpfung, die durch den Fall Verfall und Tod kennt. Und vor allem: „Ein Schöpfer hätte es anders gemacht" ist keine biologische, sondern eine theologische Behauptung.`,
  keyPoints: [
    `**Die Netzhaut ist kein Fehler:** Müller-Zellen wirken als lebende Lichtleiter (Franze et al. 2007); die Anordnung erlaubt den engen Kontakt der Photorezeptoren zum Pigmentepithel, das sie versorgt und ihre Außensegmente täglich erneuert.`,
    `**Der Blinddarm ist kein Rudiment im alten Sinn:** lymphatisches Gewebe, Bakterienreservoir, mehrfach unabhängig entstanden (Bollinger 2007; Smith et al. 2009/2013).`,
    `**Die Rudimentlisten sind geschrumpft:** Wiedersheims Liste von 1893 (rund 86 Strukturen) enthielt u. a. Organe, deren Funktion heute bekannt ist.`,
    `**Der Kehlkopfnerv folgt der Entwicklung:** Ein einheitliches Bauprogramm aller Wirbeltiere kann Umwege in Kauf nehmen; der Nerv versorgt unterwegs weitere Organe.`,
    `**Unvollkommen ist nicht undesignt:** Ein Auto mit Schwachstellen ist trotzdem konstruiert. Design erkennt man an spezifizierter Funktion, nicht an Perfektion.`,
    `**Christliche Erwartung:** gute Schöpfung + Fall + Verfall durch Mutationen. Kaputte Gene (wie GULO) sind Spuren von Verlust, nicht von Neukonstruktion.`,
  ],
  voices: [
    {
      person: 'michael-behe',
      role: 'als Biochemiker',
      text: `Behe weist darauf hin, dass das Argument aus der Unvollkommenheit stillschweigend voraussetzt, ein Designer müsse jede Struktur nach unseren Maßstäben optimieren. Ein Designer könne aber mehrere Ziele verfolgen – Robustheit, Entwicklungsfähigkeit, ästhetische oder andere Gründe –, bei denen technische Optimalität im Einzelfall zurücktritt. Zudem sei es methodisch unsauber, aus der Behauptung, ein System sei „schlecht", auf seine Entstehung zu schließen: Ob etwas entworfen wurde, erkennt man an der funktionalen Anordnung seiner Teile, nicht daran, ob es unseren Vorstellungen von Perfektion entspricht.`,
      sources: [
        { kind: 'fachliteratur', author: 'Michael J. Behe', work: "Darwin's Black Box", ref: 'Kap. 10', year: '1996', status: 'paraphrase', quote: `Das Argument aus der Unvollkommenheit übersieht, dass ein Designer mehrere Motive haben kann, bei denen technische Exzellenz oft nur eine Nebenrolle spielt.` },
      ],
    },
    {
      person: 'casey-luskin',
      role: 'als Wissenschaftskommunikator der Design-Bewegung',
      text: `Luskin hat die klassischen „Bad Design"-Beispiele wiederholt aufgegriffen und auf neuere Forschung verwiesen: Funktionen des Blinddarms, die optischen Eigenschaften der Müller-Zellen, Funktionen vermeintlich nutzloser DNA. Sein Argument: Die Liste angeblich nutzloser Strukturen ist im Lauf der Forschung immer kürzer geworden. Eine Haltung, die vorschnell „Fehler" diagnostiziert, hat die Forschung historisch eher gebremst als gefördert.`,
      sources: [
        { kind: 'fachliteratur', author: 'Casey Luskin', work: 'Beiträge auf evolutionnews.org zu Netzhaut, Blinddarm und Rudimenten', status: 'unverified', note: 'Einzelne Artikel vor Zitierung heraussuchen.' },
      ],
    },
    {
      person: 'gregor-nyssa',
      role: 'als Anthropologe der Väterzeit',
      text: `Gregor betrachtet in seiner Schrift über die Erschaffung des Menschen den Leib mit großer Aufmerksamkeit: Der aufrechte Gang, die Hände und die Sprachorgane sind für ihn sinnvoll aufeinander bezogen und Ausdruck der vernünftigen Bestimmung des Menschen. Gregor zeigt eine Haltung, die heute wieder aktuell ist: zuerst nach dem Sinn einer Struktur zu fragen, bevor man sie für misslungen erklärt.`,
      sources: [
        { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Über die Erschaffung des Menschen (De hominis opificio)', ref: '8–10', status: 'paraphrase' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Theologe von Fall und Erlösung',
      text: `Für Athanasius ist der Mensch von Natur aus vergänglich, weil aus dem Nichts geschaffen; nur die Teilhabe am Logos bewahrte ihn vor dem Verfall. Mit der Abkehr von Gott setzte sich die Verderbnis durch. Christlich ist daher nicht die Erwartung, alles in der Natur müsse vollkommen sein, sondern die Hoffnung auf Erneuerung: Der Logos wurde Mensch, um die Verderbnis von innen zu überwinden.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung (De Incarnatione)', ref: '4–8', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'netzhaut-verkehrt',
      objection: `Die Netzhaut der Wirbeltiere ist verkehrt herum verdrahtet: Licht muss erst durch Nervenfasern und Blutgefäße, bevor es die Sinneszellen erreicht. Kein Ingenieur würde das tun – der Tintenfisch hat es richtig.`,
      objectionBy: 'Richard Dawkins',
      answer: `Die Forschung hat hier dazugelernt: Müller-Zellen durchziehen die Netzhaut und leiten das Licht wie Glasfasern gezielt zu den Sinneszellen (Franze et al., PNAS 2007). Die Anordnung erlaubt zudem den engen Kontakt der Photorezeptoren zum Pigmentepithel, das ihren enormen Stoffwechsel versorgt und ihre Außensegmente täglich erneuert. Das Ergebnis ist eines der leistungsfähigsten Augen der Natur – man denke an Greifvögel.`,
      sources: [
        { kind: 'wissenschaft', author: 'Kristian Franze u. a.', work: 'PNAS 104 (20), 8287–8292', year: '2007', status: 'paraphrase' },
        { kind: 'wissenschaft', author: 'Amichai M. Labin u. a.', work: '„Müller cells separate between wavelengths to improve day vision with minimal effect upon night vision", Nature Communications 5', year: '2014', status: 'paraphrase', quote: `Müller-Zellen bündeln vor allem grün-rotes Licht auf die Zapfen und verbessern so das Tagsehen.` },
        { kind: 'fachliteratur', author: 'Jonathan Wells', work: 'Zombie Science', year: '2017', status: 'paraphrase', quote: `Kritik am Argument der „verkehrten Netzhaut" unter Verweis auf die Müller-Zellen.`, note: 'Wells gehört der Vereinigungskirche (Moon-Bewegung) an; er wird hier nur als Quelle, nicht als Stimme der christlichen Tradition angeführt.' },
      ],
      followUps: [
        {
          id: 'blinder-fleck',
          objection: `Und der blinde Fleck? Wo der Sehnerv austritt, sehen wir nichts. Der Tintenfisch hat keinen.`,
          objectionBy: 'Nathan Lents',
          answer: `Der blinde Fleck liegt außerhalb der Stelle des schärfsten Sehens und wird durch das zweite Auge und die Verarbeitung im Gehirn vollständig ausgeglichen – im Alltag bemerkt ihn niemand. Jede Konstruktion hat Zielkonflikte; die Wirbeltier-Netzhaut erkauft mit dieser Anordnung Vorteile bei Versorgung und Regeneration. Das Tintenfischauge hat andere Anforderungen und eigene Kompromisse.`,
          followUps: [
            {
              id: 'allmaechtiger-keine-kompromisse',
              objection: `Ein allmächtiger Designer braucht keine Kompromisse. Trade-offs sind eine Ausrede.`,
              objectionBy: 'Jerry Coyne',
              answer: `Jetzt argumentierst du theologisch, nicht biologisch – das ist legitim, aber dann reden wir über Gottes Absichten. Wenn Gott eine Welt mit verlässlichen Naturgesetzen erschafft, dann gelten in ihr Optik, Stoffwechsel und Materialgrenzen – auch für seine Geschöpfe. Allmacht heißt nicht, Widersprüchliches zu tun, sondern innerhalb einer gewollten Ordnung zu wirken. Und ob ein Auge „schlecht" ist, kannst du nur sagen, wenn du ein besseres bauen könntest.`,
              questionsBack: [
                `Woher weißt du, welche Ziele ein Schöpfer bei der Gestaltung des Auges verfolgt hat?`,
              ],
            },
          ],
        },
        {
          id: 'mueller-zellen-reparatur',
          objection: `Die Müller-Zellen sind eine nachträgliche Notlösung für einen Konstruktionsfehler – eine Reparatur, kein gutes Design.`,
          objectionBy: 'Kenneth Miller',
          answer: `Das ist eine Deutung, kein Befund. Man kann die Müller-Zellen ebenso gut als integralen Bestandteil einer durchdachten Lösung sehen. Bemerkenswert ist: Wer sie als „Reparatur" bezeichnet, gibt zu, dass das Ergebnis funktioniert und sogar raffiniert ist – Lichtleiter mit Wellenlängentrennung. Ein Argument, das jede gute Lösung als Flickwerk umdeuten kann, ist nicht mehr prüfbar.`,
        },
      ],
    },
    {
      id: 'kehlkopfnerv-giraffe',
      objection: `Der Nervus laryngeus recurrens läuft vom Gehirn hinunter in die Brust, schlingt sich um die Aorta und wieder hinauf zum Kehlkopf – bei der Giraffe mehrere Meter Umweg. Das ist ein Erbe unserer Fischvorfahren.`,
      objectionBy: 'Richard Dawkins',
      answer: `Der Verlauf folgt der Embryonalentwicklung: Der Nerv zieht unter Gefäßen hindurch, die beim Abstieg des Herzens in die Brust wandern, und wird dabei „mitgenommen". Auf seinem Weg gibt er Äste an Luftröhre, Speiseröhre und Herzgeflecht ab. Ich gebe zu: Für gemeinsame Abstammung ist das ein elegantes Indiz. Es zeigt aber nicht, dass ein Designer unfähig war – ein einheitliches Entwicklungsprogramm für alle Wirbeltiere kann Umwege rechtfertigen.`,
      followUps: [
        {
          id: 'aeste-koennten-direkt-kommen',
          objection: `Die Äste könnten genauso gut direkt vom Vagusnerv abzweigen. Der Umweg bleibt sinnlos.`,
          objectionBy: 'Jerry Coyne',
          answer: `Vielleicht – aber „könnte anders sein" heißt nicht „ist schlecht". Um das zu behaupten, müsstest du zeigen, dass ein alternatives Bauprogramm alle Anforderungen – Entwicklung, Versorgung, Robustheit – besser erfüllt. Ich räume ein, dass die Abstammung hier eine schlichte Erklärung bietet; für einen Christen, der gemeinsame Abstammung des Leibes für möglich hält, ist das ohnehin kein Problem.`,
          followUps: [
            {
              id: 'design-unfalsifizierbar',
              objection: `Dann ist Design unfalsifizierbar: Gutes ist Design, Schlechtes ist „Zielkonflikt" oder „unbekannter Grund".`,
              objectionBy: 'Nathan Lents',
              answer: `Nein – Design wird nicht durch Perfektion, sondern durch positive Kennzeichen erkannt: hochspezifische, mehrteilige Funktion, Codes, Steuerlogik. Wenn ein System diese Kennzeichen hat, deutet es auf Design, auch wenn es Mängel aufweist – wie ein altes Auto. Umgekehrt widerlegt ein Mangel kein Design. Das „schlechtes Design"-Argument prüft also gar nicht die Design-Hypothese, sondern eine bestimmte Vorstellung davon, wie Gott bauen müsste.`,
            },
          ],
        },
      ],
    },
    {
      id: 'blinddarm-rudiment',
      objection: `Der Blinddarm ist ein klassisches Rudiment. Darwin hat ihn schon genannt, Menschen leben ohne ihn problemlos, und er kann sich lebensgefährlich entzünden.`,
      objectionBy: 'Jerry Coyne',
      answer: `Der Blinddarm enthält reichlich lymphatisches Gewebe und dient nach heutiger Forschung vermutlich als Reservoir für nützliche Darmbakterien (Bollinger et al. 2007). Klinische Daten deuten an, dass Menschen ohne Blinddarm häufiger Rückfälle bestimmter Darminfektionen erleiden. Und vergleichende Studien zeigen, dass der Wurmfortsatz bei Säugetieren über 30-mal unabhängig entstanden ist – ein nutzloses Überbleibsel würde man so nicht erwarten.`,
      sources: [
        { kind: 'wissenschaft', author: 'Heather F. Smith u. a.', work: '„Comparative anatomy and phylogenetic distribution of the mammalian cecal appendix", Journal of Evolutionary Biology 22', year: '2009', status: 'paraphrase' },
        { kind: 'wissenschaft', author: 'Gene Y. Im u. a.', work: '„The appendix may protect against Clostridium difficile recurrence", Clinical Gastroenterology and Hepatology 9 (12)', year: '2011', status: 'paraphrase', note: 'Beobachtungsstudie; der Zusammenhang ist nicht abschließend gesichert.' },
      ],
      followUps: [
        {
          id: 'rudiment-heisst-nicht-funktionslos',
          objection: `Du verwechselst die Definition. „Rudimentär" heißt nicht funktionslos, sondern reduziert gegenüber der Funktion beim Vorfahren.`,
          objectionBy: 'Jerry Coyne',
          answer: `Diese moderne Definition ist sachlich korrekt – aber sie verändert das Argument grundlegend. Früher hieß es: Nutzlose Organe beweisen, dass kein Schöpfer am Werk war. Wenn ein Organ dagegen eine Funktion hat, nur eine andere als beim vermuteten Vorfahren, spricht es nicht mehr gegen Design. Die historische Liste Robert Wiedersheims von 1893 mit rund 86 „rudimentären" Strukturen enthielt Organe wie die Thymusdrüse oder die Zirbeldrüse, deren Funktion heute gut bekannt ist.`,
          sources: [
            { kind: 'wissenschaft', author: 'Robert Wiedersheim', work: 'Der Bau des Menschen als Zeugniss für seine Vergangenheit (2. Aufl.)', year: '1893', status: 'paraphrase', note: 'Die genaue Zahl der aufgeführten Strukturen schwankt je nach Zählung und Auflage; im Scopes-Prozess 1925 wurde sogar von über 180 Rudimenten gesprochen.' },
          ],
          followUps: [
            {
              id: 'weisheitszaehne-gaensehaut',
              objection: `Und Weisheitszähne, für die der Kiefer zu klein ist? Gänsehaut ohne Fell? Das Steißbein?`,
              objectionBy: 'Nathan Lents',
              answer: `Das Steißbein ist Ansatzstelle für Muskeln und Bänder des Beckenbodens – also funktional. Zahnengstand ist in Bevölkerungen mit weicher, industriell verarbeiteter Nahrung deutlich häufiger als bei traditioneller Kost; der Kiefer wächst mit der Kaubelastung. Hier zeigt sich eher ein Wechselspiel von Bauplan und Lebensweise als ein Konstruktionsfehler. Bei manchen Merkmalen mag die Abstammung eine gute Erklärung sein – das ist mit dem Glauben vereinbar.`,
            },
          ],
        },
      ],
    },
    {
      id: 'koerper-voller-fehler',
      objection: `Unser Körper ist voller Fehler: ein kaputtes Vitamin-C-Gen, Rückenschmerzen, gefährliche Geburten, Krebs. Ein Designer wäre inkompetent oder grausam.`,
      objectionBy: 'Nathan Lents',
      answer: `Hier muss man zwei Dinge unterscheiden: ursprüngliches Design und späteren Verfall. Ein kaputtes Gen wie GULO ist per Definition ein Gen, das einmal funktionierte und dann beschädigt wurde – das ist Verlust, nicht Konstruktion. Der christliche Glaube erwartet genau das: eine gute Schöpfung, die durch den Fall Vergänglichkeit, Krankheit und Tod kennt (Röm 8,20–22). Und Krebs ist kein Bauplan, sondern der Zusammenbruch eines Bauplans.`,
      followUps: [
        {
          id: 'gutes-design-schlechtes-fall',
          objection: `Das ist bequem: Alles Gute ist Design, alles Schlechte ist Sündenfall. So kann man nie widerlegt werden.`,
          objectionBy: 'Richard Dawkins',
          answer: `Es ist keine willkürliche Zuordnung, sondern eine prüfbare Erwartung: Wenn Verfall real ist, sollten wir viele Funktionsverluste finden – und das tun wir, im Labor wie im Genom (Behe, Quarterly Review of Biology 2010). Umgekehrt müsste der Materialismus erklären, warum die Grundausstattung so erstaunlich leistungsfähig ist. Und ehrlich gesagt: Die Frage, warum Gott Leid und Verfall zulässt, ist eine echte theologische Frage – aber sie ist eine Frage der Theodizee, nicht der Genetik.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Woher weißt du, wie ein Schöpfer das Auge gebaut hätte – und könntest du ein besseres konstruieren?`,
    `Warum sollte ein nutzloses Organ mehr als 30-mal unabhängig entstehen?`,
    `Ist ein altes Auto mit Mängeln kein konstruiertes Auto mehr?`,
    `Ist das „schlechtes Design"-Argument eine biologische oder eine theologische Aussage?`,
  ],
  avoid: [
    `„Gott macht keine Fehler, also ist alles perfekt." – Die christliche Lehre kennt Fall und Verfall; die Leugnung jeder Unvollkommenheit ist unglaubwürdig.`,
    `Bei jedem Beispiel sofort eine Funktion behaupten, ohne Belege. Lieber sagen: „Das weiß ich nicht – aber die Liste der Fehldiagnosen ist lang."`,
    `Das Beispiel des Kehlkopfnervs bestreiten. Gestehe zu, dass es zur gemeinsamen Abstammung passt.`,
  ],
  concessions: [
    `Der Verlauf des Kehlkopfnervs ist durch gemeinsame Abstammung elegant erklärbar.`,
    `Der blinde Fleck ist real, und nicht jede Struktur des Körpers ist optimal.`,
    `Manche Merkmale (z. B. Reste von Muskeln wie dem Ohrmuskel) haben beim Menschen kaum oder keine erkennbare Funktion.`,
  ],
  furtherReading: [
    { kind: 'gegner', author: 'Nathan H. Lents', work: 'Human Errors', year: '2018', status: 'paraphrase' },
    { kind: 'wissenschaft', author: 'Kristian Franze u. a.', work: 'PNAS 104 (20), 8287–8292', year: '2007', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Michael J. Behe', work: "Darwin's Black Box", year: '1996', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Schlechtes Design', 'Netzhaut', 'Kehlkopfnerv', 'Blinddarm', 'Rudimente', 'Theodizee'],
  related: [
    'genetik/pseudogene-ervs',
    'genetik/junk-dna',
    'theodizee/natuerliche-uebel',
    'theodizee/tierleid',
    'evolution/id-keine-wissenschaft',
  ],
};

export default claim;
