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
