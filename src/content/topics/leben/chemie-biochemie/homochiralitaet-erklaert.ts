import type { Claim, Source } from '../../../schema.ts';

const soai1995: Source = {
  kind: 'wissenschaft',
  author: 'Kenso Soai, Takanori Shibata, Hiroshi Morioka, Kaori Choji',
  work: '„Asymmetric autocatalysis and amplification of enantiomeric excess of a chiral molecule", Nature 378, S. 767–768',
  year: '1995',
  quote: `Ein Pyrimidylalkanol katalysiert seine eigene Bildung aus einem Pyrimidin-Aldehyd und Diisopropylzink und verstärkt dabei einen kleinen Enantiomerenüberschuss über mehrere Runden stark.`,
  status: 'paraphrase',
};

const viedma2005: Source = {
  kind: 'wissenschaft',
  author: 'Cristóbal Viedma',
  work: '„Chiral Symmetry Breaking During Crystallization: Complete Chiral Purity Induced by Nonlinear Autocatalysis and Recycling", Physical Review Letters 94, 065504',
  year: '2005',
  quote: `Durch fortgesetztes Mahlen einer Suspension von Natriumchlorat-Kristallen entsteht eine vollständig einhändige Kristallpopulation.`,
  status: 'paraphrase',
};

const blackmond2010: Source = {
  kind: 'wissenschaft',
  author: 'Donna G. Blackmond',
  work: '„The Origin of Biological Homochirality", Cold Spring Harbor Perspectives in Biology 2, a002147',
  year: '2010',
  quote: `Übersichtsarbeit: Mechanismen der Symmetriebrechung und Verstärkung werden diskutiert; der Ursprung der biologischen Homochiralität gilt als ungelöste Frage.`,
  status: 'paraphrase',
};

const ozturk2023: Source = {
  kind: 'gegner',
  author: 'S. Furkan Ozturk, Ziwei Liu, John D. Sutherland, Dimitar D. Sasselov',
  work: '„Origin of biological homochirality by crystallization of an RNA precursor on a magnetic surface", Science Advances 9',
  year: '2023',
  quote: `Ein RNA-Vorläufer (Ribo-Aminooxazolin) kristallisiert auf magnetisierten Magnetit-Oberflächen bevorzugt in einer Händigkeit; spinpolarisierte Elektronen sollen die Symmetrie brechen.`,
  status: 'paraphrase',
};

const joyce1984: Source = {
  kind: 'wissenschaft',
  author: 'Gerald F. Joyce, G. M. Visser, C. A. A. van Boeckel, J. H. van Boom, Leslie E. Orgel, J. van Westrenen',
  work: '„Chiral selection in poly(C)-directed synthesis of oligo(G)", Nature 310, S. 602–604',
  year: '1984',
  quote: `In racemischen Gemischen hemmt das jeweils andere Enantiomer die vorlagengesteuerte Verlängerung („enantiomere Kreuzhemmung"): Der Einbau eines falsch-händigen Nukleotids bricht die Kettenverlängerung ab.`,
  status: 'paraphrase',
};

const claim: Claim = {
  id: 'homochiralitaet-erklaert',
  title: `„Homochiralität lässt sich natürlich erklären."`,
  proponents: [
    { name: 'Donna G. Blackmond', role: 'Chemikerin, Scripps Research', work: 'Arbeiten zu Phasenverhalten und Verstärkung von Enantiomerenüberschüssen' },
    { name: 'Kenso Soai', role: 'Chemiker, Tokyo University of Science', work: 'Soai-Reaktion (Nature 1995)' },
    { name: 'Cristóbal Viedma', role: 'Kristallograph, Universidad Complutense Madrid', work: 'Viedma-Reifung (PRL 2005)' },
    { name: 'Dimitar Sasselov und John Sutherland', role: 'Astrophysiker (Harvard) und Chemiker (MRC LMB)', work: 'Ozturk et al., Science Advances 2023' },
  ],
  steelman: `Leben baut fast ausschließlich mit linkshändigen (L-)Aminosäuren und rechtshändigen (D-)Zuckern. Das ist kein Rätsel mehr, sondern ein Zwei-Stufen-Prozess: Zuerst entsteht ein kleiner Überschuss – durch zirkular polarisiertes Licht in Sternentstehungsgebieten, durch Mineraloberflächen oder einfach durch statistische Schwankung; in Meteoriten findet man tatsächlich L-Überschüsse bei manchen Aminosäuren. Dann wird der Überschuss verstärkt: Die Soai-Reaktion verstärkt winzige Überschüsse auf über 99 Prozent, Viedma-Reifung macht aus racemischen Kristallgemischen vollständig einhändige Populationen, Phasengleichgewichte reichern Aminosäuren in Lösung an. Und 2023 zeigten Ozturk, Sasselov und Sutherland, wie ein RNA-Vorläufer auf magnetischem Magnetit einhändig kristallisiert – eine geologisch plausible Lösung. Homochiralität ist ein gelöstes oder zumindest prinzipiell lösbares Problem.`,
  biblical: {
    summary: `Die Bibel spricht nicht über Molekülchiralität – man sollte keine moderne Chemie in sie hineinlesen. Sie bezeugt aber, dass die Welt mit Weisheit und Ordnung gegründet ist: „Der HERR hat die Erde durch Weisheit gegründet" (Spr 3,19); „du hast alles geordnet mit Maß, Zahl und Gewicht" (Weish 11,20). Die präzise Einhändigkeit der Lebensmoleküle ist ein schönes Beispiel solcher Ordnung – die Frage ist nur, ob ungelenkte Prozesse sie hervorbringen.`,
    sources: [
      { kind: 'bibel', work: 'Sprüche', ref: '3,19', quote: `Der HERR hat die Erde durch Weisheit gegründet und durch seinen Rat die Himmel bereitet.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Weisheit', ref: '11,20 (Luther-Zählung 11,22)', quote: `Aber du hast alles geordnet mit Maß, Zahl und Gewicht.`, translation: 'Luther 1912', status: 'verbatim', note: 'Deuterokanonisches Buch, in der koptischen Kirche kanonisch.' },
    ],
  },
  opposingView: {
    summary: `Der Ursprung der biologischen Homochiralität gilt in der Fachliteratur als offene Frage (Blackmond 2010). Es gibt mehrere echte, elegante Mechanismen der Symmetriebrechung und Verstärkung – aber jeder funktioniert nur für bestimmte Moleküle unter bestimmten Bedingungen: Die Soai-Reaktion braucht eine Organozinkverbindung in wasserfreiem Lösungsmittel; Viedma-Reifung braucht Konglomerat-Kristalle (eine Minderheit der chiralen Verbindungen), Racemisierung in Lösung und fortgesetztes Mahlen; zirkular polarisiertes Licht erzeugt kleine Überschüsse und zerstört dabei einen großen Teil des Materials. Die Magnetit-Hypothese (2023) ist vielversprechend, setzt aber einen speziellen, über gelenkte Chemie gewonnenen Vorläufer voraus. Außerdem müssen Aminosäuren *und* Zucker einhändig sein und es bleiben, obwohl sie in Wasser über die Zeit racemisieren.`,
    detail: `**Warum Homochiralität nötig ist:** Proteine aus gemischten L- und D-Aminosäuren falten sich nicht zu regelmäßigen α-Helices und β-Faltblättern. Bei RNA führt ein falsch-händiges Nukleotid zum Abbruch der vorlagengesteuerten Verlängerung (Joyce et al. 1984, „enantiomere Kreuzhemmung").

**Meteoriten:** In kohlenstoffreichen Meteoriten wurden L-Überschüsse bei einigen, vor allem nicht-proteinogenen Aminosäuren (z. B. Isovalin) gefunden – ein interessanter Befund, aber keine Erklärung für die vollständige Einhändigkeit aller biologischen Bausteine.

**Racemisierung:** Aminosäuren racemisieren in Wasser über Jahrtausende bis Jahrmillionen (das wird sogar zur Datierung genutzt); ein einmal erreichter Überschuss muss also aktiv erhalten werden.`,
    sources: [blackmond2010, soai1995, viedma2005, ozturk2023, joyce1984,
      { kind: 'wissenschaft', author: 'Jeremy Bailey u. a.', work: '„Circular Polarization in Star-Formation Regions: Implications for Biomolecular Homochirality", Science 281, S. 672–674', year: '1998', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Es gibt clevere Laborreaktionen, die einen kleinen Überschuss einer Händigkeit verstärken – aber jede funktioniert nur mit speziellen Molekülen unter speziellen, oft völlig unnatürlichen Bedingungen; die berühmte Soai-Reaktion braucht eine Zinkverbindung, die mit Wasser heftig reagiert. Das Leben braucht gleichzeitig L-Aminosäuren und D-Zucker, und zwar dauerhaft. Selbst führende Forscher nennen den Ursprung der Homochiralität ungelöst.`,
  keyPoints: [
    `**Ehrlich anerkennen:** Symmetriebrechung und Verstärkung sind real und elegant (Soai, Viedma, Blackmond, Magnetit 2023).`,
    `**Spezialfälle:** Soai funktioniert für ein künstliches Molekül mit Organozink in wasserfreiem Lösungsmittel – kein Biomolekül zeigt dasselbe Verhalten.`,
    `**Doppelte Aufgabe:** Biologie braucht L-Aminosäuren *und* D-Zucker – zwei unabhängige Händigkeitsprobleme, die zusammenpassen müssen.`,
    `**Ein falscher Baustein stört:** Enantiomere Kreuzhemmung (Joyce 1984) – ein falsch-händiges Nukleotid bricht die Kettenverlängerung ab.`,
    `**Erhaltung:** Racemisierung in Wasser arbeitet ständig gegen den Überschuss; Einhändigkeit ist ein Zustand niedriger Entropie, der aktiv erhalten werden muss.`,
    `**Einhändig ist noch nicht funktional:** Selbst reine L-Aminosäuren ergeben in zufälliger Reihenfolge keine Enzyme – das Informationsproblem bleibt.`,
  ],
  voices: [
    {
      person: 'pasteur',
      role: 'als Entdecker der molekularen Chiralität',
      text: `Pasteur trennte 1848 unter dem Mikroskop die spiegelbildlichen Kristalle des Natrium-Ammonium-Tartrats und entdeckte so, dass Moleküle „links" und „rechts" sein können. Er beobachtete, dass lebende Organismen chirale Stoffe einhändig herstellen, während Laborsynthesen ohne chirale Hilfsmittel Gemische beider Formen liefern. Die Dissymmetrie hielt er für ein Kennzeichen der Lebenschemie. Diese Beobachtung ist bis heute der Ausgangspunkt der Debatte.`,
      sources: [{ kind: 'wissenschaft', author: 'Louis Pasteur', work: 'Untersuchungen zur Weinsäure und Traubensäure (Comptes rendus der Pariser Akademie)', year: '1848', status: 'paraphrase', quote: `Trennung der spiegelbildlichen Kristalle von Tartrat-Salzen; Entdeckung der molekularen Asymmetrie.` }],
    },
    {
      person: 'james-tour',
      role: 'als synthetischer Chemiker',
      text: `Tour weist darauf hin, dass praktisch jede präbiotische Synthese ohne chirale Steuerung ein Racemat ergibt. Im Labor erhält ein Chemiker einhändige Produkte nur mit chiralen Katalysatoren, chiralen Hilfsstoffen oder durch aufwendige Trennung – also durch Eingriffe, die selbst schon Information voraussetzen. Die Verstärkungsreaktionen der Literatur betrachtet er als schöne Chemie, die aber jeweils maßgeschneiderte Moleküle und Bedingungen braucht. Und selbst eine perfekt einhändige Bausteinsammlung ist nur ein Schritt: Danach müssen die Bausteine in Wasser verknüpft und in der richtigen Reihenfolge angeordnet werden.`,
      sources: [{ kind: 'wissenschaft', author: 'James M. Tour', work: 'Vortragsreihe „Abiogenesis: The Origin of Life" (YouTube)', year: '2023', status: 'paraphrase', quote: `Tour bespricht das Problem der Homochiralität und die Grenzen der vorgeschlagenen Verstärkungsmechanismen.` }],
    },
    {
      person: 'brian-miller',
      role: 'als Physiker (Thermodynamik)',
      text: `Miller ordnet Homochiralität thermodynamisch ein: Ein racemisches Gemisch hat eine höhere Entropie als ein einhändiges. Ohne ständige Energiezufuhr und einen Mechanismus, der diese Energie gezielt zur Erhaltung der Einhändigkeit einsetzt, läuft ein System zur Racemisierung zurück. Lebende Zellen erhalten ihre Homochiralität durch Enzyme, die streng stereospezifisch arbeiten – also durch genau die Maschinerie, deren Herkunft erklärt werden soll.`,
      sources: [{ kind: 'fachliteratur', author: 'Brian Miller', work: 'Beitrag zur Thermodynamik in: The Mystery of Life\'s Origin: The Continuing Controversy', year: '2020', status: 'paraphrase' }],
    },
    {
      person: 'fazale-rana',
      role: 'als Biochemiker',
      text: `Rana behandelt die Homochiralität zusammen mit Hugh Ross als eines der Probleme, die naturalistische Ursprungsmodelle bisher nicht lösen. Er betont, dass die vorgeschlagenen Mechanismen meist nur geringe Überschüsse erzeugen oder auf spezielle Laborbedingungen angewiesen sind, und vergleicht dies mit der Präzision, mit der Zellen Chiralität kontrollieren.`,
      sources: [{ kind: 'fachliteratur', author: 'Fazale Rana, Hugh Ross', work: 'Origins of Life: Biblical and Evolutionary Models Face Off', year: '2004', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'soai-geloest',
      objection: `Die Soai-Reaktion verstärkt winzige Überschüsse auf fast 100 Prozent. Problem gelöst.`,
      objectionBy: 'Donna Blackmond',
      answer: `Die Soai-Reaktion ist echt und bemerkenswert – das erkenne ich an. Aber sie funktioniert mit einem speziellen Pyrimidin-Aldehyd und Diisopropylzink in wasserfreiem Lösungsmittel. Organozinkverbindungen reagieren mit Wasser heftig. Kein Biomolekül zeigt in Wasser ein vergleichbares Verhalten.`,
      sources: [soai1995],
      questionsBack: [`Welches biologische Molekül verstärkt in Wasser seinen eigenen Enantiomerenüberschuss wie in der Soai-Reaktion?`],
      followUps: [
        {
          id: 'proof-of-concept',
          objection: `Es ist ein Proof of Concept: Asymmetrische Autokatalyse ist prinzipiell möglich.`,
          objectionBy: 'Donna Blackmond',
          answer: `Prinzipiell möglich – für ein künstliches System. Für eine Erklärung des Lebens bräuchte man ein analoges System mit Biomolekülen unter präbiotischen Bedingungen. Die Soai-Reaktion gilt seit Jahrzehnten als einzigartig, gerade weil man kein solches Analogon gefunden hat.`,
          followUps: [
            {
              id: 'phasengleichgewichte',
              objection: `Dann eben andere nichtlineare Effekte – Phasengleichgewichte reichern Aminosäuren in Lösung an.`,
              objectionBy: 'Donna Blackmond',
              answer: `Ein echter Fortschritt für einige Aminosäuren in bestimmten Konzentrationsbereichen. Danach muss der Überschuss aber auf Polymere übertragen, auf Zucker abgestimmt und gegen Racemisierung erhalten werden. Das ist ein Baustein zu einer möglichen Lösung – keine Lösung.`,
              followUps: [
                {
                  id: 'racemisierung-langsam',
                  objection: `Dein Racemisierungs-Argument ist schwach. Bei kühlen Temperaturen racemisieren Aminosäuren über Jahrtausende bis Jahrmillionen. Ein einmal erreichter Überschuss bleibt also lange genug erhalten.`,
                  objectionBy: 'Donna Blackmond',
                  answer: `Dann entsteht eine Spannung im Modell: Die Viedma-Reifung *braucht* schnelle Racemisierung in Lösung, damit sie verstärken kann – und für die Erhaltung braucht man das Gegenteil. Beides zugleich am selben Ort geht nicht. Und das Leben selbst verlässt sich nicht auf langsame Racemisierung: Zellen besitzen eigene Korrekturenzyme, die versehentlich angehängte D-Aminosäuren wieder entfernen. Einhändigkeit wird aktiv verteidigt, nicht passiv bewahrt.`,
                  detail: `**Die Spannung:** Verstärkungsmechanismen wie die Viedma-Reifung funktionieren nur, wenn die Moleküle in Lösung rasch zwischen links und rechts wechseln; sonst kann die Kristallpopulation nicht „umkippen". Für die Weiterverwendung als Baustein will man dagegen, dass die Händigkeit stabil bleibt. Ein präbiotisches Szenario muss also erklären, wie die Bedingungen zur richtigen Zeit wechseln.

**Das Zeugnis der Zelle:** Die D-Aminoacyl-tRNA-Deacylase ist ein Enzym, das falsch beladene tRNAs mit D-Aminosäuren erkennt und korrigiert. Dass selbst moderne Zellen mit Hochpräzisions-Enzymen eine eigene „Chiralitäts-Qualitätskontrolle" brauchen, zeigt, wie aktiv Homochiralität erhalten werden muss.

Brian Miller fasst es thermodynamisch: Einhändigkeit ist ein Zustand niedriger Entropie; ohne gelenkte Energie strebt das System zum Racemat zurück.`,
                  voices: [
                    {
                      person: 'brian-miller',
                      role: 'als Physiker (Thermodynamik)',
                      text: `Miller betont, dass ein Zustand niedriger Entropie – wie vollständige Einhändigkeit – nur durch Mechanismen erhalten wird, die Energie gezielt einsetzen. In Zellen leisten das stereospezifische Enzyme und Korrektursysteme. Vor diesen Systemen fehlt der Erhalter; deshalb muss jedes präbiotische Szenario nicht nur die Entstehung, sondern auch die Erhaltung des Überschusses erklären.`,
                      sources: [{ kind: 'fachliteratur', author: 'Brian Miller', work: 'Beitrag zur Thermodynamik in: The Mystery of Life\'s Origin: The Continuing Controversy', year: '2020', status: 'paraphrase' }],
                    },
                  ],
                  questionsBack: [`Wie kann ein Szenario zugleich schnelle Racemisierung (für die Verstärkung) und langsame Racemisierung (für die Erhaltung) bieten?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'viedma-reifung',
      objection: `Viedma-Reifung erzeugt aus racemischen Kristallen hundertprozentige Reinheit – rein physikalisch.`,
      objectionBy: 'Cristóbal Viedma',
      answer: `Ja, unter drei Bedingungen: Die Substanz muss als Konglomerat kristallisieren (getrennte links- und rechtshändige Kristalle – das tut nur eine Minderheit chiraler Verbindungen), sie muss in Lösung racemisieren, und die Kristalle müssen fortgesetzt gemahlen werden. Außerdem ist die Richtung zufällig: In einem Tümpel links, im nächsten rechts.`,
      sources: [viedma2005],
      followUps: [
        {
          id: 'natuerliches-mahlen',
          objection: `Brandung und Strömungen auf der frühen Erde liefern natürliches Mahlen.`,
          answer: `Möglich – aber die meisten proteinogenen Aminosäuren kristallisieren als racemische Verbindungen, nicht als Konglomerate. Und die Kristalle müssten anschließend wieder gelöst und weiterverarbeitet werden, ohne dass der Überschuss durch Racemisierung verloren geht.`,
          followUps: [
            {
              id: 'cpl-photolyse',
              objection: `Dann liefert eben das All den Anfangsüberschuss: In Sternentstehungsgebieten gibt es zirkular polarisiertes Licht, das eine Händigkeit bevorzugt zerstört. Genau deshalb finden wir L-Überschüsse in Meteoriten.`,
              objectionBy: 'Dave Farina',
              answer: `Der Mechanismus ist real – aber er hat einen hohen Preis: Zirkular polarisiertes Licht erzeugt einen Überschuss, indem es den größten Teil des Materials zerstört. In klassischen Versuchen mit Leucin ergab sich ein Überschuss von nur rund zwei Prozent, nachdem schon mehr als die Hälfte der Substanz zersetzt war. Für größere Überschüsse muss fast alles zerstört werden. Und die Meteoritenüberschüsse betreffen vor allem Aminosäuren, die das Leben gar nicht nutzt.`,
              detail: `**Das Prinzip:** Zirkular polarisiertes UV-Licht wird von den beiden Spiegelbildformen geringfügig unterschiedlich stark absorbiert. Bestrahlt man ein Racemat lange genug, wird eine Form etwas schneller zerstört – es bleibt ein Überschuss der anderen. Weil der Unterschied in der Absorption klein ist, steigt der Überschuss nur langsam, während die Gesamtmenge stark sinkt.

**Klassischer Befund:** Flores, Bonner und Massey (1977) bestrahlten racemisches Leucin mit zirkular polarisiertem UV-Licht und erhielten einen Enantiomerenüberschuss von etwa 2 Prozent bei rund 59 Prozent Zersetzung.

**Weitere Hürden:** Die Richtung hängt von der Polarisationsrichtung ab, die in verschiedenen Himmelsregionen verschieden ist. Bailey und Kollegen (1998) fanden zirkulare Polarisation im Orionnebel – ein interessanter Hinweis, aber kein Nachweis, dass gerade unser Sonnensystem gleichmäßig in einer Richtung bestrahlt wurde.`,
              sources: [
                { kind: 'wissenschaft', author: 'Joseph J. Flores, William A. Bonner, Gail A. Massey', work: '„Asymmetric photolysis of (RS)-leucine with circularly polarized ultraviolet light", Journal of the American Chemical Society 99, S. 3622–3625', year: '1977', quote: `Bestrahlung von racemischem Leucin mit zirkular polarisiertem UV-Licht ergab einen Enantiomerenüberschuss von etwa 2 Prozent bei rund 59 Prozent Zersetzung.`, status: 'paraphrase' },
                { kind: 'wissenschaft', author: 'Jeremy Bailey u. a.', work: '„Circular Polarization in Star-Formation Regions: Implications for Biomolecular Homochirality", Science 281, S. 672–674', year: '1998', status: 'paraphrase' },
              ],
              questionsBack: [`Wie viel Material bleibt übrig, wenn man per Licht einen Überschuss von 50 Prozent erzeugt – und reicht das für die nächste Synthesestufe?`],
              followUps: [
                {
                  id: 'mechanismen-kombinieren',
                  objection: `Niemand sagt, ein Mechanismus allein reicht. Man kombiniert: Licht oder Mineralien liefern einen kleinen Überschuss, Kristallisation und Phasengleichgewichte verstärken ihn, und Aminosäuren übertragen ihn auf Zucker. Hein und Blackmond haben gezeigt, dass ein Aminosäure-Überschuss die Händigkeit von Zucker-Vorstufen der RNA lenken kann.`,
                  objectionBy: 'Donna Blackmond',
                  answer: `Das ist der stärkste Zug in dieser Debatte, und die Arbeit von Hein und Blackmond ist wirklich elegant: Sie verknüpft die Händigkeit der Aminosäuren mit der der Zucker. Aber sieh dir die Kette an: Jeder Schritt verlangt eigene Moleküle, eigene Bedingungen, eigene Reinigung – und die Verluste multiplizieren sich. Was im Labor in einem Kolben nach dem anderen gelingt, müsste auf der frühen Erde in der richtigen Reihenfolge und ohne Chemiker zusammenkommen.`,
                  detail: `**Die Arbeit:** Hein, Tse und Blackmond (Nature Chemistry 2011) zeigten, dass in einem Reaktionssystem mit nahezu racemischen Ausgangsstoffen ein kleiner Überschuss einer Aminosäure die Händigkeit einer Ribose-Vorstufe (aus Sutherlands Reaktionsweg) beeinflusst; durch Kristallisation lässt sich die Vorstufe anreichern. Das ist ein bedeutender Hinweis, wie die Händigkeit von Aminosäuren und Zuckern miteinander gekoppelt sein könnte.

**Was offen bleibt:**
- Die Vorstufen stammen aus einer gelenkten, mehrstufigen Synthese (siehe den Claim zur RNA-Welt).
- Jede Kristallisation erfordert Konzentration, passende Lösungsmittel und anschließend das Wiederauflösen ohne Verlust des Überschusses.
- Die Mechanismen müssen in derselben Umgebung zusammenwirken, obwohl sie teils gegensätzliche Bedingungen verlangen (schnelle vs. langsame Racemisierung, nass vs. trocken).

James Tour fasst das zusammen: Je mehr Einzelschritte erklärt werden, desto deutlicher wird, wie viel Steuerung die Gesamtkette braucht. Das ist kein Vorwurf an die Forscher – es ist der Befund ihrer eigenen Arbeiten.`,
                  voices: [
                    {
                      person: 'james-tour',
                      role: 'als synthetischer Chemiker',
                      text: `Tour verweist darauf, dass in präbiotischen Studien meist jeder Schritt einzeln mit gereinigten Ausgangsstoffen durchgeführt wird. Die Produkte eines Schrittes werden isoliert, gereinigt und dann im nächsten Schritt eingesetzt. Diese Arbeit des Chemikers – Auswahl, Reinigung, Timing – ist ein Teil der Erklärung, der in der Bilanz gern unter den Tisch fällt.`,
                      sources: [{ kind: 'wissenschaft', author: 'James M. Tour', work: '„Animadversions of a Synthetic Chemist", Inference: International Review of Science 2/2', year: '2016', status: 'paraphrase' }],
                    },
                  ],
                  sources: [{ kind: 'gegner', author: 'Jason E. Hein, Eric Tse, Donna G. Blackmond', work: '„A route to enantiopure RNA precursors from nearly racemic starting materials", Nature Chemistry 3, S. 704–706', year: '2011', quote: `Ein kleiner Aminosäure-Überschuss lenkt die Bildung einer Ribose-Vorstufe; durch Kristallisation lässt sich diese anreichern.`, status: 'paraphrase' }],
                  questionsBack: [`Welche dieser Stufen wurde schon gemeinsam in einem einzigen, nicht nachgesteuerten Ansatz durchlaufen?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'magnetit-2023',
      objection: `Ozturk, Sasselov und Sutherland haben es 2023 gelöst: Ein RNA-Vorläufer kristallisiert auf magnetischem Magnetit einhändig.`,
      objectionBy: 'Dimitar Sasselov',
      answer: `Eine der interessantesten Ideen der letzten Jahre – ich nehme sie ernst. Sie setzt aber einen speziellen Vorläufer voraus, der über Sutherlands gelenkte Synthese entsteht, eine bestimmte Mineral- und Magnetisierungssituation und Folgeschritte, die die Händigkeit erhalten und übertragen. Es ist eine Laborkette in einem definierten System.`,
      sources: [ozturk2023],
      followUps: [
        {
          id: 'du-forderst-mehr',
          objection: `Du verlangst immer mehr. Irgendwann ist es eben gelöst.`,
          answer: `Fair – ich behaupte nicht, dass es unmöglich ist. Ich widerspreche nur dem Satz „lässt sich natürlich erklären" im Präsens. Wenn ein robuster natürlicher Weg gezeigt wird, gestehe ich das chemische Teilproblem gern zu. Das Informationsproblem bleibt dann bestehen: Auch einhändige Zufallsketten sind Zufallsketten.`,
          followUps: [
            {
              id: 'kein-argument-fuer-gott',
              objection: `Also ist Homochiralität doch gar kein Argument für Gott.`,
              answer: `Richtig verstanden: Sie ist kein eigenständiger Gottesbeweis, sondern ein Teil des Gesamtbefunds, dass präbiotische Chemie an vielen Stellen intelligente Steuerung braucht. Der eigentliche Schluss auf einen Urheber stützt sich auf die Information – siehe den Claim „Gott der Lücken".`,
              followUps: [
                {
                  id: 'wunder-unwissenschaftlich',
                  objection: `Und was ist deine Alternative? Dass Gott jedes Molekül einzeln umgedreht hat? Das ist ein Wunder, und Wunder sind keine Wissenschaft.`,
                  objectionBy: 'Dave Farina',
                  answer: `Ich behaupte keinen bestimmten Mechanismus – und das muss ich auch nicht. Ein Brandermittler kann feststellen, dass ein Feuer gelegt wurde, ohne zu wissen, mit welchem Feuerzeug. Der Schluss auf eine intelligente Ursache betrifft die *Art* der Ursache, nicht die Technik. Und die christliche Tradition hat nie behauptet, Gott wirke nur durch Eingriffe: Die Väter sahen ihn auch in den Gesetzen und Kräften der Natur am Werk.`,
                  detail: `**Ursache vs. Methode:** In der Archäologie, Forensik oder bei SETI ist der Schluss auf Intelligenz legitim, sobald ein Befund Merkmale zeigt, die wir nur von intelligenten Ursachen kennen. Die Frage „Wie genau?" ist eine zweite, spätere Frage.

**Die Väter:** Augustinus spricht von „Keimgründen" (*rationes seminales*), die Gott bei der Schöpfung in die Welt gelegt habe und die sich zur rechten Zeit entfalten. Basilius sieht im Wort „Die Erde bringe hervor" ein bleibendes Gesetz der Natur. Für die Väter sind Gottes unmittelbares Schaffen und sein Wirken durch die Natur keine Gegensätze.

**Was das für dich heißt:** Du musst nicht wählen zwischen „Gott hat die Moleküle umgedreht" und „die Natur hat es allein geschafft". Du kannst sagen: Die Ordnung, die wir finden – ob durch besondere Ursachen oder durch fein angelegte Naturprozesse –, verweist auf einen ordnenden Geist. Dass ungelenkte Chemie es *nicht* zeigt, ist der empirische Teil; der Schluss auf den Logos ist der philosophische Teil.`,
                  voices: [
                    {
                      person: 'augustinus',
                      role: 'als Ausleger der Genesis',
                      text: `Augustinus deutet in *De Genesi ad litteram* die Schöpfung so, dass Gott alles zugleich schuf, manches aber in „Keimgründen" angelegt, die sich im Lauf der Zeit entfalten. Damit kann er Gottes Schöpferhandeln und natürliche Entwicklungsprozesse zusammendenken, ohne Gott zu einem bloßen Lückenbüßer zu machen.`,
                      sources: [{ kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De Genesi ad litteram', ref: 'V,23,44–45 und VI,10,17', status: 'paraphrase', quote: `Gott hat in die Schöpfung Keimgründe gelegt, aus denen sich die Geschöpfe zu ihrer Zeit entfalten.` }],
                    },
                    {
                      person: 'stephen-meyer',
                      role: 'als Wissenschaftsphilosoph',
                      text: `Meyer betont, dass der Designschluss in den historischen Wissenschaften eine Aussage über die *Ursache* eines Befunds ist, nicht über den genauen Ablauf. Ebenso wie ein Archäologe aus einer Inschrift auf einen Schreiber schließt, ohne dessen Werkzeuge zu kennen, schließt man aus spezifizierter Information auf Intelligenz.`,
                      sources: [{ kind: 'fachliteratur', author: 'Stephen C. Meyer', work: 'Signature in the Cell', ref: 'Kap. 15–18', year: '2009', status: 'paraphrase' }],
                    },
                  ],
                  questionsBack: [`Muss ein Brandermittler das Feuerzeug kennen, um festzustellen, dass ein Feuer gelegt wurde?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'chiralitaet-unwichtig',
      objection: `Warum ist Chiralität überhaupt so wichtig? Ein paar falsche Bausteine machen doch nichts.`,
      answer: `Doch: Proteine aus gemischten Händigkeiten falten sich nicht zu stabilen Helices und Faltblättern. Bei RNA bricht schon ein einziges falsch-händiges Nukleotid die vorlagengesteuerte Verlängerung ab – Joyce und Orgel nannten das enantiomere Kreuzhemmung.`,
      sources: [joyce1984],
      followUps: [
        {
          id: 'd-aminosaeuren-natur',
          objection: `Es gibt in der Natur Peptide mit D-Aminosäuren, etwa in bakteriellen Zellwänden.`,
          answer: `Stimmt – und sie werden von spezialisierten Enzymen gezielt hergestellt (Racemasen, nichtribosomale Synthese). Das bestätigt, dass Leben Chiralität präzise steuert, statt zufällige Gemische zu dulden.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welcher Verstärkungsmechanismus funktioniert mit biologischen Molekülen in Wasser unter präbiotischen Bedingungen?`,
    `Wie wurden L-Aminosäuren und D-Zucker aufeinander abgestimmt?`,
    `Was erhält den Überschuss gegen die Racemisierung über Jahrtausende?`,
    `Warum nennt die Fachliteratur den Ursprung der Homochiralität ungelöst, wenn er erklärt ist?`,
  ],
  avoid: [
    `„Homochiralität ist unmöglich" – überzogen; es gibt echte Teilmechanismen.`,
    `„Pasteur hat bewiesen, dass nur Gott Chiralität schaffen kann" – Pasteur hat das so nicht bewiesen.`,
    `Die Soai-Reaktion als „Fälschung" oder „irrelevant" abtun – sie ist solide Chemie; kritisiere ihre Übertragbarkeit.`,
  ],
  concessions: [
    `Symmetriebrechung und Verstärkung von Enantiomerenüberschüssen sind experimentell gut belegt.`,
    `In Meteoriten finden sich kleine L-Überschüsse bei manchen Aminosäuren.`,
  ],
  furtherReading: [
    blackmond2010,
    { kind: 'fachliteratur', author: 'Fazale Rana, Hugh Ross', work: 'Origins of Life: Biblical and Evolutionary Models Face Off', year: '2004', status: 'paraphrase' },
    ozturk2023,
  ],
  difficulty: 3,
  tags: ['Homochiralität', 'Chiralität', 'Soai-Reaktion', 'Viedma-Reifung', 'Pasteur'],
  related: ['ursprung-des-lebens/rna-welt', 'ursprung-des-lebens/miller-urey', 'ursprung-des-lebens/ool-nur-wissensluecke', 'chemie-biochemie/dna-ist-keine-information'],
};

export default claim;
