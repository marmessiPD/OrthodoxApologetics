import type { Claim, Source } from '../../../schema.ts';

const laneMartin2012: Source = {
  kind: 'gegner',
  author: 'Nick Lane, William F. Martin',
  work: '„The Origin of Membrane Bioenergetics", Cell 151, S. 1406–1416',
  year: '2012',
  quote: `Natürliche Protonengradienten an alkalischen Hydrothermalquellen könnten die erste Energiequelle des Lebens gewesen sein; frühe, „undichte" Membranen hätten diese Gradienten nutzen können.`,
  status: 'paraphrase',
};

const jackson2016: Source = {
  kind: 'wissenschaft',
  author: 'J. Baz Jackson',
  work: '„Natural pH Gradients in Hydrothermal Alkali Vents Were Unlikely to Have Played a Role in the Origin of Life", Journal of Molecular Evolution 83, S. 1–11',
  year: '2016',
  quote: `Ein Bioenergetiker argumentiert, dass natürliche pH-Gradienten über anorganische Wände ohne geeignete Kopplungsmechanismen keine Rolle bei der Entstehung des Lebens gespielt haben dürften.`,
  status: 'paraphrase',
};

const millerBada1988: Source = {
  kind: 'gegner',
  author: 'Stanley L. Miller, Jeffrey L. Bada',
  work: '„Submarine hot springs and the origin of life", Nature 334, S. 609–611',
  year: '1988',
  quote: `Die hohen Temperaturen an Hydrothermalquellen würden organische Verbindungen eher zerstören als aufbauen.`,
  status: 'paraphrase',
  note: 'Bezog sich vor allem auf heiße „Schwarze Raucher"; alkalische Quellen wie Lost City sind kühler.',
};

const damerDeamer2020: Source = {
  kind: 'gegner',
  author: 'Bruce Damer, David Deamer',
  work: '„The Hot Spring Hypothesis for an Origin of Life", Astrobiology 20, S. 429–452',
  year: '2020',
  quote: `Die Autoren bevorzugen heiße Quellen an Land mit Nass-Trocken-Zyklen, weil die Polymerisation in Meerwasser behindert sei.`,
  status: 'paraphrase',
  note: 'Zeigt den Dissens im Feld: Land- und Tiefsee-Hypothesen widerlegen sich teilweise gegenseitig.',
};

const claim: Claim = {
  id: 'hydrothermale-quellen',
  title: `„In hydrothermalen Quellen der Tiefsee entstand das Leben."`,
  proponents: [
    { name: 'Nick Lane', role: 'Evolutionsbiochemiker, University College London', work: 'The Vital Question (2015)' },
    { name: 'William F. Martin', role: 'Evolutionsbiologe, Heinrich-Heine-Universität Düsseldorf', work: 'Lane & Martin, Cell 151 (2012); Weiss et al., Nature Microbiology (2016)' },
    { name: 'Michael J. Russell', role: 'Geochemiker (u. a. NASA JPL)', work: 'Hypothese der alkalischen Hydrothermalquellen (seit den 1980er/90er-Jahren)' },
    { name: 'Günter Wächtershäuser', role: 'Chemiker und Patentanwalt', work: 'Eisen-Schwefel-Welt (1988)' },
  ],
  steelman: `An alkalischen Hydrothermalquellen wie dem 2000 entdeckten Feld „Lost City" strömt warmes, wasserstoffreiches, basisches Wasser in den sauren Urozean. An den dünnen, eisen- und nickelhaltigen Wänden der porösen Schlote entstehen natürliche Protonengradienten – genau die Energieform, die alle heutigen Zellen über ihre Membranen nutzen (Chemiosmose). Wasserstoff und Kohlendioxid reagieren an Metallsulfiden ähnlich wie im ältesten bekannten Stoffwechselweg (Wood-Ljungdahl); Experimente haben Formiat, Acetat und Pyruvat aus H2 und CO2 an Mineralien erzeugt. Die Poren wirken als natürliche Reaktionskammern, und Temperaturgradienten konzentrieren Moleküle tausendfach (Thermophorese). Stammbaumrekonstruktionen des letzten gemeinsamen Vorfahren (LUCA) zeigen einen wasserstoffverwertenden, wärmeliebenden Anaerobier – passend zu genau diesem Milieu. Hier treffen Geologie, Bioenergetik und Phylogenetik zusammen. Ein Schöpfer ist nicht nötig, wenn der Planet selbst eine Brutstätte des Lebens bereitstellt.`,
  biblical: {
    summary: `Wo das Leben entstand, ist theologisch neutral. Die Genesis verbindet Wasser und Leben selbst: „Es errege sich das Wasser mit webenden und lebendigen Tieren" (Gen 1,20). Ein Christ muss also keine bestimmte Umgebung ablehnen. Entscheidend ist die Unterscheidung zwischen **Ort** und **Ursache**: Ein günstiger Ort ist noch keine Erklärung dafür, wie aus Chemie geordnete, informationstragende Systeme werden.`,
    sources: [
      { kind: 'bibel', work: 'Genesis', ref: '1,20', quote: `Und Gott sprach: Es errege sich das Wasser mit webenden und lebendigen Tieren, und Gevögel fliege auf Erden unter der Feste des Himmels.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hiob', ref: '38,16', quote: `Gott fragt Hiob, ob er bis zu den Quellen des Meeres gekommen sei und auf dem Grund der Tiefe gewandelt habe.`, status: 'paraphrase', note: 'Die Tiefsee als Bereich, der dem Menschen verborgen und Gott bekannt ist.' },
    ],
  },
  church: {
    summary: `Basilius sieht im Befehl „Die Erde bringe hervor" bzw. „Das Wasser errege sich" ein Wort Gottes, das der Natur eine bleibende Fruchtbarkeit einprägt. Die Väter hätten also kein Problem mit der Vorstellung, dass Gott durch natürliche Umgebungen wirkt – sie bestanden aber darauf, dass die Ordnung aus Gottes Wort stammt, nicht aus dem Stoff selbst.`,
    sources: [
      { kind: 'kirchenvater', author: 'Basilius von Caesarea', work: 'Hexaemeron', ref: '5,10', quote: `Der kurze Befehl Gottes wurde zu einem bleibenden Gesetz der Natur, das der Erde ihre Fruchtbarkeit verleiht.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die Hypothese alkalischer Hydrothermalquellen ist eine ernsthafte, aber umstrittene Option. Ihre Stärken: realistische Energiequelle, Metallkatalysatoren, Kompartimente. Ihre bekannten Probleme: Verdünnung im offenen Ozean, Hydrolyse (Polymerisation ist in Wasser bergauf), fehlende Kopplung zwischen natürlichem pH-Gradienten und Synthese (Jackson 2016), sehr geringe Ausbeuten in Experimenten (einfachste Säuren, keine Nukleotide). Viele OOL-Forscher halten die Tiefsee gerade wegen des Wasserproblems für ungeeignet und bevorzugen Landtümpel mit Nass-Trocken-Zyklen (Damer & Deamer) oder UV-getriebene Oberflächenchemie (Sutherland). Das Feld ist sich also schon über den *Ort* uneinig.`,
    detail: `**Experimente:** Mineralische Katalysatoren (Eisen, Nickel, Greigit, Awaruit) erzeugen aus H2 und CO2 bzw. aus kleinen Säuren Formiat, Acetat, Pyruvat und einige Zwischenprodukte des Zitronensäurezyklus (u. a. Arbeiten der Gruppen Martin, Moran). Das sind die ersten Kohlenstoffbausteine des Stoffwechsels – nicht Enzyme, Membranen oder Gene.

**Konzentration:** Braun und Kollegen zeigten im Labor, dass Temperaturgradienten in engen Poren Nukleotide stark anreichern. In einer realen Quelle würden aber alle gelösten Stoffe angereichert, auch Störenfriede.

**Temperatur:** Der frühe Einwand von Miller & Bada (1988) richtete sich vor allem gegen heiße Schwarze Raucher (um 350 °C). Alkalische Quellen wie Lost City sind deutlich kühler (etwa 40–90 °C).`,
    sources: [laneMartin2012, jackson2016, millerBada1988, damerDeamer2020,
      { kind: 'wissenschaft', author: 'Philipp Baaske, Franz M. Weinert, Stefan Duhr, Kono H. Lemke, Michael J. Russell, Dieter Braun', work: '„Extreme accumulation of nucleotides in simulated hydrothermal pore systems", PNAS 104, S. 9346–9351', year: '2007', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Hydrothermalquellen sind eine interessante Energiequelle – aber in Experimenten entstehen dort nur Spuren der einfachsten Moleküle. Der offene Ozean verdünnt, und Wasser spaltet genau die Ketten, die Leben braucht. Darum halten andere führende Forscher (Deamer, Sutherland) die Tiefsee für ungeeignet. Ein Ort ist keine Erklärung: Die eigentlichen Hürden – Information, Code, Zellbau – bleiben unberührt.`,
  keyPoints: [
    `**Ort ≠ Ursache:** Ein energiereiches Milieu erklärt nicht, wie Ordnung und Information entstehen.`,
    `**Gradient ohne Turbine:** Zellen nutzen Protonengradienten über die ATP-Synthase, eine komplexe Rotationsmaschine. Ein natürlicher Gradient ohne Kopplungsmaschine ist wie ein Wasserfall ohne Turbine.`,
    `**Wasserproblem:** Polymerisation ist in Wasser thermodynamisch bergauf; die Tiefsee bietet keine Trocknungsphasen.`,
    `**Verdünnung:** Offene Strömung trägt Produkte fort; Anreicherung in Poren betrifft alle Stoffe, auch Störenfriede.`,
    `**Magere Ausbeuten:** Bisher Formiat, Acetat, Pyruvat in kleinen Mengen – keine Nukleotide, keine Proteine.`,
    `**Uneinigkeit im Feld:** Land- und Tiefsee-Vertreter halten die jeweils andere Umgebung für ungeeignet – ein Zeichen dafür, wie offen die Frage ist.`,
  ],
  voices: [
    {
      person: 'james-tour',
      role: 'als synthetischer Chemiker',
      text: `Tour verweist auf zwei Grundprobleme: Erstens die **Konzentration**. Synthesechemie braucht ausreichend hohe Konzentrationen der richtigen Partner; ein offenes, strömendes Meer verdünnt jedes Produkt sofort. Zweitens die **Hydrolyse**: Die Bindungen, die Aminosäuren zu Proteinen und Nukleotide zu RNA verknüpfen, werden von Wasser gespalten. Im Labor arbeitet man für solche Kupplungen gerade unter Wasserausschluss oder mit aktivierten Reagenzien. Eine Umgebung, die zu fast 100 Prozent aus Wasser besteht, ist für den Aufbau langer Ketten denkbar ungünstig.

Tour betont zudem, dass selbst die Herstellung einfacher Stoffwechselsäuren wie Pyruvat noch nichts über die Herkunft von Enzymen, Membranen und genetischer Information sagt.`,
      sources: [{ kind: 'wissenschaft', author: 'James M. Tour', work: 'Vortragsreihe „Abiogenesis: The Origin of Life" (YouTube)', year: '2023', status: 'paraphrase', quote: `Tour bespricht die Probleme von Konzentration, Hydrolyse und Massentransfer für präbiotische Szenarien.` }],
    },
    {
      person: 'brian-miller',
      role: 'als Physiker (Thermodynamik)',
      text: `Brian Miller erläutert, dass ein Energiegefälle allein keine Arbeit leistet. Zellen koppeln den Protonenfluss über die ATP-Synthase an die Bildung von ATP – eine hochpräzise molekulare Maschine. Ein natürlicher pH-Gradient an einer Mineralwand ist wie ein Fluss, der einen Abhang hinabfließt: Ohne Wasserrad wird kein Getreide gemahlen. Die Hypothese setzt also bereits voraus, was erklärt werden muss: eine Maschine, die Energie in gezielte chemische Arbeit umsetzt.`,
      sources: [{ kind: 'fachliteratur', author: 'Brian Miller', work: 'Beitrag zur Thermodynamik in: The Mystery of Life\'s Origin: The Continuing Controversy', year: '2020', status: 'paraphrase' }],
    },
    {
      person: 'marcos-eberlin',
      role: 'als Chemiker',
      text: `Eberlin betont in *Foresight*, dass zelluläre Membranen und ihre Energiesysteme von Anfang an aufeinander abgestimmt sein müssen: Eine Membran, die Protonen durchlässt, kann keinen Gradienten halten; eine dichte Membran ohne Transporter schneidet die Zelle von Nährstoffen ab. Dieses gleichzeitige Erfordernis mehrerer Komponenten deutet er als „Voraussicht" – ein Merkmal planender Intelligenz.`,
      sources: [{ kind: 'fachliteratur', author: 'Marcos Eberlin', work: 'Foresight: How the Chemistry of Life Reveals Planning and Purpose', year: '2019', status: 'paraphrase' }],
    },
    {
      person: 'basilius',
      role: 'als Ausleger des Sechstagewerks',
      text: `Basilius liest die Worte „Das Wasser errege sich" und „Die Erde bringe hervor" nicht als Hinweis darauf, dass Wasser oder Erde aus eigener Kraft Leben hervorbringen, sondern als Befehl Gottes, der der Natur ihre Fähigkeit verleiht. Für die heutige Debatte heißt das: Selbst wenn das Leben an einer Tiefseequelle begann, wäre dies kein Gegenbeweis gegen den Schöpfer – die Frage ist nur, woher die Ordnung kommt, die dort wirksam wurde.`,
      sources: [{ kind: 'kirchenvater', author: 'Basilius von Caesarea', work: 'Hexaemeron', ref: '5,10 und 7,1', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'protonengradient-kein-zufall',
      objection: `Alkalische Quellen liefern genau den Protonengradienten, den alle Zellen nutzen. Das ist kein Zufall – hier liegt der Ursprung der Bioenergetik.`,
      objectionBy: 'Nick Lane',
      answer: `Die Analogie ist elegant. Aber Zellen nutzen den Gradienten über die ATP-Synthase und eine Membran, die für Protonen nahezu dicht ist. Ein natürlicher Gradient über eine Mineralwand ohne Kopplungsmaschine leistet keine gezielte chemische Arbeit – wie ein Staudamm ohne Turbine keinen Strom erzeugt.`,
      questionsBack: [`Welche konkrete Reaktion wird in deinem Modell vom natürlichen Gradienten angetrieben – und wodurch gekoppelt?`],
      followUps: [
        {
          id: 'undichte-membranen',
          objection: `Lane und Martin haben gezeigt, dass frühe, undichte Membranen den natürlichen Gradienten gerade deshalb nutzen konnten.`,
          objectionBy: 'William Martin',
          answer: `Das ist ein Rechenmodell, kein Experiment – und es setzt Protein-Transporter (Antiporter) voraus, also genau die Art komplexer Moleküle, deren Herkunft offen ist. Der Bioenergetiker Baz Jackson hat 2016 ausführlich begründet, warum natürliche pH-Gradienten wohl keine Rolle spielten.`,
          sources: [laneMartin2012, jackson2016],
          followUps: [
            {
              id: 'experimente-folgen',
              objection: `Modelle sind der erste Schritt. Experimente mit Mineralien liefern bereits Formiat, Acetat und Pyruvat aus H2 und CO2.`,
              objectionBy: 'William Martin',
              answer: `Das sind echte Befunde – die ersten Kohlenstoffbausteine des Stoffwechsels. Aber zwischen Pyruvat und einer Zelle liegen Enzyme, Membranen, genetische Information und ein Code. Tour würde sagen: Man hat den ersten Ziegel und spricht schon über die Kathedrale.`,
              followUps: [
                {
                  id: 'eisen-netzwerke-moran',
                  objection: `Es ist mehr als ein Ziegel. Eisen und Mineralien treiben ohne Enzyme ein ganzes Reaktionsnetz an, das dem Kern des Zitronensäurezyklus ähnelt; an Greigit und Awaruit entstehen aus H2 und CO2 Formiat, Acetat und Pyruvat in nennenswerten Mengen. Die Grundzüge des Stoffwechsels sind in der Chemie selbst angelegt.`,
                  objectionBy: 'William Martin',
                  answer: `Diese Arbeiten aus den Gruppen Moran und Martin sind beeindruckend, und ich nehme den Befund ernst: Einige Kernmoleküle des Stoffwechsels sind chemisch „bevorzugt". Aber die Netzwerke starten mit vom Chemiker gewählten Ausgangsstoffen wie Glyoxylat und Pyruvat in hoher Konzentration, sie bilden keinen sich selbst erhaltenden Zyklus, und sie erzeugen weder Information noch Vererbung. Und dass die Chemie so auffällig auf das Leben zugeschnitten ist, ist für einen Schöpfungsglauben eher ein Argument als ein Problem.`,
                  detail: `**Die Befunde:** Muchowska, Varma und Moran (Nature 2019) zeigten, dass Fe²⁺ in Wasser aus Glyoxylat und Pyruvat ein Netzwerk von Reaktionen antreibt, das viele Zwischenprodukte des Zitronensäurezyklus enthält. Preiner und Kollegen (Nature Ecology & Evolution 2020) erhielten aus H2 und CO2 an Mineralien wie Greigit, Magnetit und Awaruit Formiat, Acetat und Pyruvat unter quellenähnlichen Bedingungen.

**Die offene Lücke:** Leslie Orgel, einer der Pioniere des Feldes, warnte 2008, ein sich selbst erhaltender Stoffwechselzyklus verlange eine Reihe hochselektiver Katalysatoren, die genau die richtigen Reaktionen beschleunigen und alle Nebenreaktionen unterdrücken; ihre zufällige Verfügbarkeit grenze an ein Wunder. Bis heute wurde kein solcher geschlossener, autokatalytischer Zyklus unter präbiotischen Bedingungen gezeigt.

**Der Perspektivwechsel:** Marcos Eberlin deutet gerade solche „Vorlieben" der Chemie für lebenswichtige Moleküle als Hinweis auf Voraussicht in der Beschaffenheit der Materie. Du musst nicht wählen zwischen „Chemie" und „Gott" – die Frage ist, warum die Chemie so beschaffen ist und woher die Information kommt, die über einfache Säuren hinausgeht.`,
                  sources: [
                    { kind: 'gegner', author: 'Kamila B. Muchowska, Sreejith J. Varma, Joseph Moran', work: '„Synthesis and breakdown of universal metabolic precursors promoted by iron", Nature 569, S. 104–107', year: '2019', quote: `Eisen(II) fördert in Wasser ein Reaktionsnetz, das zahlreiche Zwischenprodukte des Zitronensäurezyklus aus Glyoxylat und Pyruvat erzeugt.`, status: 'paraphrase' },
                    { kind: 'gegner', author: 'Martina Preiner u. a. (Gruppen Joseph Moran und William F. Martin)', work: '„A hydrogen-dependent geochemical analogue of primordial carbon and energy metabolism", Nature Ecology & Evolution 4, S. 534–542', year: '2020', quote: `An Mineralien wie Greigit, Magnetit und Awaruit entstehen aus H2 und CO2 Formiat, Acetat und Pyruvat.`, status: 'paraphrase' },
                    { kind: 'gegner', author: 'Leslie E. Orgel', work: '„The Implausibility of Metabolic Cycles on the Prebiotic Earth", PLoS Biology 6 (1), e18', year: '2008', quote: `Ein sich selbst erhaltender Zyklus erfordere eine Reihe hochspezifischer Katalysatoren; deren zufällige Verfügbarkeit auf der frühen Erde sei äußerst unwahrscheinlich.`, status: 'paraphrase', note: 'Orgel war kein ID-Vertreter, sondern einer der Begründer der RNA-Welt-Hypothese; sein Artikel erschien postum.' },
                  ],
                  voices: [
                    {
                      person: 'marcos-eberlin',
                      role: 'als Chemiker (Massenspektrometrie)',
                      text: `Eberlin argumentiert in *Foresight*, dass die Chemie des Lebens an vielen Stellen „vorausdenkt": Moleküle und Reaktionen sind so beschaffen, dass sie erst im späteren Gesamtsystem ihren Sinn entfalten. Wenn Mineralien bevorzugt genau die Säuren bilden, die der Stoffwechsel später braucht, ist das für ihn ein weiteres Beispiel für eine auf das Leben hin angelegte Schöpfung.`,
                      sources: [{ kind: 'fachliteratur', author: 'Marcos Eberlin', work: 'Foresight: How the Chemistry of Life Reveals Planning and Purpose', year: '2019', status: 'paraphrase' }],
                    },
                  ],
                  questionsBack: [
                    `Welcher dieser Versuche zeigt einen geschlossenen Zyklus, der sich selbst erhält und seine Katalysatoren selbst nachliefert?`,
                    `Woher stammen Glyoxylat und Pyruvat in der Konzentration, mit der die Netzwerke gestartet wurden?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'thermophorese',
      objection: `Die Poren der Schlote konzentrieren Moleküle durch Thermophorese tausendfach. Das Verdünnungsproblem ist gelöst.`,
      objectionBy: 'Dieter Braun',
      answer: `Ein echter, schöner Effekt – im Labor mit definierten Nukleotiden. In einer realen Quelle würden alle gelösten Stoffe angereichert, auch die störenden. Und angereicherte Nukleotide stehen immer noch in Wasser, das ihre Verknüpfung rückgängig macht.`,
      followUps: [
        {
          id: 'hydrolyse-langsam',
          objection: `Bei moderaten Temperaturen ist Hydrolyse langsam. Das ist kein ernstes Problem.`,
          answer: `Dann ist auch die Verknüpfung langsam – und das Gleichgewicht liegt in Wasser auf der Seite der Einzelbausteine. Das ist Thermodynamik, nicht nur Kinetik. Genau deshalb schlagen Deamer und andere Landtümpel mit Trocknungsphasen vor: Die Vertreter der verschiedenen Hypothesen widerlegen sich hier gegenseitig.`,
          sources: [damerDeamer2020],
        },
      ],
    },
    {
      id: 'luca-thermophil',
      objection: `Der letzte gemeinsame Vorfahre (LUCA) war ein wärmeliebender Wasserstoffverwerter. Die Phylogenetik zeigt auf Hydrothermalquellen.`,
      objectionBy: 'William Martin',
      answer: `LUCA war nach diesen Rekonstruktionen bereits eine komplexe Zelle mit Ribosomen, genetischem Code und Hunderten Genen. Er sagt uns etwas über eine frühe Lebensform, aber nichts darüber, wie Chemie zur ersten Zelle wurde. Zudem sind solche Rekonstruktionen methodisch umstritten.`,
      sources: [{ kind: 'gegner', author: 'Madeline C. Weiss, Filipa L. Sousa, Natalia Mrnjavac u. a. (Gruppe William Martin)', work: '„The physiology and habitat of the last universal common ancestor", Nature Microbiology 1, Art. 16116', year: '2016', status: 'paraphrase' }],
      followUps: [
        {
          id: 'zeigt-die-richtung',
          objection: `Es zeigt immerhin die Richtung.`,
          answer: `Als Hypothese: einverstanden. Aber man darf „wo lebte eine frühe Zelle?" nicht mit „wie entstand Leben?" verwechseln. Die Wärmeliebe könnte auch eine spätere Anpassung sein.`,
          followUps: [
            {
              id: 'luca-sehr-frueh',
              objection: `Neue Analysen datieren LUCA auf rund 4,2 Milliarden Jahre – nur wenige hundert Millionen Jahre nach der Entstehung der Erde. Das Leben war also da, sobald es konnte. Das spricht für einen natürlichen, fast zwangsläufigen Prozess.`,
              objectionBy: 'Nick Lane',
              answer: `Dieselbe Studie beschreibt LUCA als bereits hochkomplexe Zelle mit rund 2600 Proteinen und sogar einem frühen Abwehrsystem gegen Viren. Je früher eine so komplexe Zelle existierte, desto kürzer wird das Zeitfenster für die gesamte präbiotische Chemie davor. Ein früher Beginn ist mit einem Schöpfer genauso vereinbar wie mit einem leichten Naturprozess – nur dem Argument „Wir hatten Milliarden Jahre Zeit" nimmt er die Grundlage.`,
              detail: `**Die Studie:** Moody und Kollegen (Nature Ecology & Evolution 2024) schätzen das Alter von LUCA mit molekularen Uhren auf etwa 4,2 Milliarden Jahre und rekonstruieren ein Genom von rund 2,5 Millionen Basen mit etwa 2600 Proteinen, einschließlich Hinweisen auf ein CRISPR-ähnliches Abwehrsystem. Die Unsicherheiten solcher Datierungen sind groß, aber die Tendenz der Forschung geht zu einem frühen und komplexen LUCA.

**Warum das wichtig ist:** Zwischen einer abgekühlten Erde mit flüssigem Wasser (ab etwa 4,4 Milliarden Jahren) und einer Zelle mit Ribosomen, Code und Hunderten Enzymen bleibt nach dieser Rechnung wenig Zeit. Wer „genug Zeit" als Erklärung anführt (siehe den Claim „Mit genug Zeit ist alles möglich"), gerät hier in Spannung mit der eigenen Datierung.

**Fair bleiben:** Ein schneller Ursprung *beweist* keinen Schöpfer. Er zeigt nur, dass die Zeit kein Freund des Zufallsarguments ist.`,
              sources: [{ kind: 'gegner', author: 'Edmund R. R. Moody, Sandra Álvarez-Carretero u. a.', work: '„The nature of the last universal common ancestor and its impact on the early Earth system", Nature Ecology & Evolution 8', year: '2024', quote: `LUCA wird auf etwa 4,2 Milliarden Jahre datiert und als komplexer Organismus mit rund 2600 Proteinen und einem frühen Immunsystem rekonstruiert.`, status: 'paraphrase' }],
              questionsBack: [`Wie viel Zeit bleibt nach dieser Datierung für den gesamten Weg von einfachen Molekülen bis zu einer Zelle mit Ribosomen und Code?`],
            },
          ],
        },
      ],
    },
    {
      id: 'miller-bada-veraltet',
      objection: `Der Einwand von Miller und Bada ist veraltet: Alkalische Quellen sind nicht 350 °C heiß, sondern moderat warm.`,
      objectionBy: 'Michael Russell',
      answer: `Das stimmt, und ich gebe es gern zu: Lost City ist deutlich kühler als ein Schwarzer Raucher. Das Temperaturargument fällt also für diesen Quelltyp weitgehend weg. Verdünnung, Hydrolyse, fehlende Kopplung und vor allem das Informationsproblem bleiben.`,
      sources: [millerBada1988],
      followUps: [
        {
          id: 'nur-noch-information',
          objection: `Dann bleibt nur noch das Informationsproblem – und das löst die Selektion.`,
          answer: `Selektion braucht Vermehrung mit Vererbung, also schon ein informationstragendes System. Die Frage ist gerade, wie das erste entstand. Siehe die Claims zur RNA-Welt und zur Information in der DNA.`,
          followUps: [
            {
              id: 'stoffwechsel-zuerst-gene-spaeter',
              objection: `Du denkst „Gene zuerst". Ich denke „Stoffwechsel zuerst": Zuerst gab es sich selbst verstärkende Reaktionsnetze in den Poren, und RNA kam später als Speicher für das, was schon funktionierte. Information ist das Ergebnis, nicht der Anfang.`,
              objectionBy: 'Nick Lane',
              answer: `Das ist eine ernsthafte Alternative, aber sie hat ein bekanntes Problem: Reaktionsnetze ohne genetisches Gedächtnis können sich kaum weiterentwickeln. Der Evolutionsbiologe Eörs Szathmáry und Kollegen haben 2010 gezeigt, dass solche Netze wenig vererbbare Variation haben und keine Anpassungen ansammeln. Und selbst wenn sie es könnten, bliebe der entscheidende Schritt offen: der Übergang zu einem Code, in dem eine Abfolge eine andere festlegt.`,
              detail: `**Vasas, Szathmáry & Santos (PNAS 2010)** untersuchten Modelle „kompositioneller Vererbung", in denen ein Tropfen seine Zusammensetzung an Tochtertropfen weitergibt. Ergebnis: Die Netzwerke konvergieren auf wenige Zustände, Variation wird nicht zuverlässig weitergegeben, und Selektion kann kaum ansetzen. Die Autoren folgern, dass „Stoffwechsel zuerst"-Szenarien deutlich eingeschränkt sind.

**Das Code-Problem:** Selbst ein gut funktionierender Stoffwechsel müsste irgendwann in RNA- oder DNA-Sequenzen „übersetzt" werden. Dafür braucht es Zuordnungsregeln (tRNAs, Synthetasen, Ribosom) – ein Symbol-System. Die Chemie eines Stoffwechselnetzes enthält keine solche Zuordnung.

So wirst du nicht zum Gegner der Forschung: Du zeigst, dass die führenden Hypothesen sich an genau den Stellen gegenseitig in Frage stellen, an denen Information ins Spiel kommt.`,
              sources: [{ kind: 'wissenschaft', author: 'Vera Vasas, Eörs Szathmáry, Mauro Santos', work: '„Lack of evolvability in self-sustaining autocatalytic networks constraints metabolism-first scenarios for the origin of life", PNAS 107 (4), S. 1470–1475', year: '2010', quote: `Selbsterhaltende autokatalytische Netzwerke zeigen kaum Evolvierbarkeit; das schränkt Szenarien „Stoffwechsel zuerst" ein.`, status: 'paraphrase' }],
              questionsBack: [`Wie würde ein Reaktionsnetz eine erfolgreiche Variante zuverlässig an die nächste Generation weitergeben – ohne Gene?`],
              followUps: [
                {
                  id: 'kompositionelle-vererbung',
                  objection: `Auch ohne Gene gibt es Vererbung: Ein Kompartiment, das sich teilt, gibt seine Zusammensetzung an die Tochterkompartimente weiter. Das reicht für den Anfang.`,
                  objectionBy: 'William Martin',
                  answer: `Genau dieses Modell haben Szathmáry und Kollegen geprüft – mit dem Ergebnis, dass die Vererbung zu ungenau ist, um Anpassungen anzusammeln. Eine Zusammensetzung „weiterzugeben" ist etwas anderes, als eine Bauanleitung zu kopieren. Und es gibt kein Experiment, in dem ein solches Kompartiment über viele Teilungen hinweg neue Funktionen gewonnen hätte.`,
                  detail: `Hier lohnt es sich, ruhig auf den Unterschied zwischen **analoger Zusammensetzung** und **digitaler Information** hinzuweisen. Ein Tropfen, der sich teilt, gibt ungefähr die gleiche Mischung weiter – wie eine Suppe, die man auf zwei Teller verteilt. Eine Zelle gibt dagegen eine Sequenz weiter, die präzise festlegt, was gebaut wird. Nur digitale Information erlaubt kumulative Verbesserung über viele Generationen.

Stephen Meyer weist darauf hin, dass gerade dieser Übergang von Chemie zu Code das ist, was in unserer Erfahrung nur Intelligenz leistet. Das ist kein Lückenargument, sondern ein Schluss aus dem, was wir über die Entstehung von Codes wissen.`,
                  voices: [
                    {
                      person: 'stephen-meyer',
                      role: 'als Wissenschaftsphilosoph',
                      text: `Meyer unterscheidet zwischen Ordnung, die aus Gesetzmäßigkeiten folgt (wie Kristalle), und spezifizierter Information, die eine bestimmte, nicht durch Chemie erzwungene Abfolge verlangt. Stoffwechselnetze können Ordnung erzeugen; die Entstehung eines Codes, der Sequenzen in Funktionen übersetzt, ist für ihn das eigentliche Rätsel – und die einzige bekannte Ursache dafür ist Intelligenz.`,
                      sources: [{ kind: 'fachliteratur', author: 'Stephen C. Meyer', work: 'Signature in the Cell', ref: 'Kap. 11–12 (Selbstorganisation, Stoffwechsel-zuerst-Modelle)', year: '2009', status: 'paraphrase' }],
                    },
                  ],
                  sources: [{ kind: 'wissenschaft', author: 'Vera Vasas, Eörs Szathmáry, Mauro Santos', work: '„Lack of evolvability in self-sustaining autocatalytic networks …", PNAS 107 (4)', year: '2010', status: 'paraphrase' }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'uneinigkeit-ist-gesund',
      objection: `Dass Forscher über den Ort streiten – Tiefsee, heiße Quellen an Land, UV-beschienene Tümpel –, ist kein Zeichen von Schwäche. So funktioniert Wissenschaft: Mehrere Hypothesen konkurrieren, und die Daten entscheiden.`,
      objectionBy: 'Bill Nye',
      answer: `Einverstanden: Wettbewerb von Hypothesen ist gesund. Aber auffällig ist *die Art* des Streits: Jedes Lager hat starke Einwände gegen die anderen – die Tiefsee hat das Wasserproblem, Landtümpel kämpfen mit UV-Zerstörung und fehlenden Gradienten, die Oberflächenchemie braucht wechselnde Spezialbedingungen. Die Argumente *gegen* jede Hypothese sind stark, die Argumente *für* sie bisher schwach. Das spricht nicht für Details, die noch fehlen, sondern für ein ungelöstes Grundproblem.`,
      detail: `Zeige die Lage so, wie die Forscher selbst sie beschreiben:
- **Damer und Deamer** halten die Tiefsee für ungeeignet, weil Polymerisation in Meerwasser behindert ist.
- **Lane und Martin** halten Landtümpel für ungeeignet, weil dort kein natürlicher Protonengradient existiert.
- **Sutherland** setzt auf UV-Licht und Cyanid-Chemie an der Oberfläche – eine Umgebung, die für die Tiefsee-Hypothese gerade nicht passt.

Ein Laie kann sagen: „Ich nehme jede dieser Gruppen ernst – auch in dem, was sie gegen die anderen sagen."`,
      sources: [damerDeamer2020, laneMartin2012],
      questionsBack: [`Welcher Einwand des jeweils anderen Lagers ist deiner Meinung nach falsch – und warum?`],
      followUps: [
        {
          id: 'szenarien-kombinieren',
          objection: `Dann kombinieren wir eben: Cyanid-Chemie an der Oberfläche liefert die Bausteine, Quellen liefern die Energie, Tümpel die Trocknungsphasen. Die frühe Erde hatte all diese Umgebungen gleichzeitig.`,
          objectionBy: 'John Sutherland',
          answer: `Das ist ehrlich gedacht – auch Sutherlands eigene Szenarien sehen Bäche vor, die Stoffe aus verschiedenen Quellen nacheinander zusammenführen. Aber jede Kombination vervielfacht die Logistik: Die Produkte müssen zur richtigen Zeit, in der richtigen Reihenfolge, ausreichend rein und konzentriert von einem Ort zum nächsten gelangen, ohne unterwegs zu zerfallen. Genau das nennt James Tour das Problem des Massentransfers – im Labor erledigt es der Chemiker.`,
          detail: `Sutherlands Gruppe beschreibt eine „cyanosulfidische Protometabolismus"-Chemie, in der aus Cyanwasserstoff, Schwefelwasserstoff und UV-Licht Vorstufen von Nukleotiden, Aminosäuren und Lipiden entstehen (Patel et al., Nature Chemistry 2015). Das ist eine der eindrucksvollsten Leistungen des Feldes. Die Autoren selbst schlagen ein geologisches Szenario vor, in dem verschiedene Reagenzien nacheinander durch Wasserläufe zusammengeführt werden.

Tour fragt an dieser Stelle konkret: Wer startet und stoppt die Reaktionen, wer entfernt die Nebenprodukte, wer sorgt dafür, dass Reagenz B erst ankommt, wenn Reaktion A abgeschlossen ist? Jede dieser Bedingungen ist für sich plausibel; ihr geordnetes Zusammentreffen ist das, was erklärt werden müsste.`,
          voices: [
            {
              person: 'james-tour',
              role: 'als synthetischer Chemiker',
              text: `Tour bezeichnet das Zusammenführen der Zwischenprodukte als einen der am wenigsten beachteten Engpässe: In der Synthese arbeitet man Schritt für Schritt, reinigt nach jedem Schritt und fügt das nächste Reagenz erst zum richtigen Zeitpunkt hinzu. Ein Szenario, das mehrere Umgebungen verbindet, muss erklären, wie diese Choreografie ohne Choreografen zustande kommt.`,
              sources: [{ kind: 'wissenschaft', author: 'James M. Tour', work: '„Time Out", Inference: International Review of Science 4/4', year: '2019', status: 'paraphrase', quote: `Tour nennt u. a. den Massentransfer der Ausgangsstoffe als ungelöstes Problem.` }],
            },
          ],
          sources: [{ kind: 'gegner', author: 'Bhavesh H. Patel, Claudia Percivalle, Dougal J. Ritson, Colm D. Duffy, John D. Sutherland', work: '„Common origins of RNA, protein and lipid precursors in a cyanosulfidic protometabolism", Nature Chemistry 7, S. 301–307', year: '2015', quote: `Aus Cyanwasserstoff, Schwefelwasserstoff und UV-Licht entstehen Vorstufen von Nukleotiden, Aminosäuren und Lipiden; ein geologisches Szenario mit nacheinander zusammenfließenden Reagenzien wird vorgeschlagen.`, status: 'paraphrase' }],
          questionsBack: [`Wer oder was sorgt im kombinierten Szenario dafür, dass die Produkte in der richtigen Reihenfolge und rein genug am nächsten Ort ankommen?`],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welche Reaktion koppelt den natürlichen Gradienten an den Aufbau komplexer Moleküle?`,
    `Wie entstehen in einem wässrigen Milieu lange Ketten, wenn das Gleichgewicht auf der Seite der Einzelbausteine liegt?`,
    `Warum halten Deamer und Sutherland die Tiefsee für ungeeignet – und wer hat recht?`,
    `Welches Experiment hat an einer simulierten Quelle Nukleotide oder Proteine hervorgebracht?`,
  ],
  avoid: [
    `„In der Tiefsee gibt es keine Energie" – falsch; Hydrothermalquellen sind energiereich.`,
    `Die Hypothese als „lächerlich" abtun – sie wird von angesehenen Forschern vertreten und hat echte Stärken.`,
  ],
  concessions: [
    `Alkalische Quellen bieten Energie, Metallkatalysatoren und Kompartimente; der Temperatureinwand von 1988 gilt für sie kaum.`,
    `Die Ähnlichkeit zwischen natürlichen Gradienten und zellulärer Chemiosmose ist bemerkenswert.`,
  ],
  furtherReading: [
    { kind: 'gegner', author: 'Nick Lane', work: 'The Vital Question: Energy, Evolution, and the Origins of Complex Life', year: '2015', status: 'paraphrase', note: 'Beste populäre Darstellung der Gegenseite.' },
    jackson2016,
    { kind: 'fachliteratur', author: 'Marcos Eberlin', work: 'Foresight', year: '2019', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Hydrothermalquellen', 'Lost City', 'Chemiosmose', 'Nick Lane'],
  related: ['ursprung-des-lebens/rna-welt', 'ursprung-des-lebens/genug-zeit', 'chemie-biochemie/selbstorganisation', 'chemie-biochemie/dna-ist-keine-information'],
};

export default claim;
