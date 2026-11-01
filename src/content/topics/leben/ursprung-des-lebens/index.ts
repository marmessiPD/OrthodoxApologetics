import type { Topic } from '../../../schema.ts';
import millerUrey from './miller-urey.ts';
import rnaWelt from './rna-welt.ts';
import genugZeit from './genug-zeit.ts';
import hydrothermaleQuellen from './hydrothermale-quellen.ts';
import protozellenImLabor from './protozellen-im-labor.ts';
import panspermie from './panspermie.ts';
import oolNurWissensluecke from './ool-nur-wissensluecke.ts';

const topic: Topic = {
  id: 'ursprung-des-lebens',
  category: 'leben',
  group: 'Ursprung des Lebens',
  order: 1,
  title: `Der Ursprung des Lebens`,
  subtitle: `Miller-Urey, RNA-Welt, Tiefseequellen, Protozellen – und warum führende Chemiker sagen: Wir wissen es nicht`,
  icon: 'flask-conical',
  overview: `Wie wurde aus unbelebter Chemie die erste lebende Zelle? Seit Stanley Millers Funkenexperiment (1953) gilt diese Frage vielen als im Prinzip gelöst. Tatsächlich gibt es bis heute **keinen Konsens** – weder über den Ort (Tiefseequellen, heiße Tümpel an Land, Mineraloberflächen, Mars) noch über die Reihenfolge (RNA zuerst, Stoffwechsel zuerst, alles gleichzeitig) noch über einen Mechanismus. Die Forschung hat beeindruckende Teilerfolge erzielt: präbiotische Synthesen von Nukleotiden (Sutherland), sich selbst erhaltende RNA-Replikation aus vorgefertigten Bausteinen (Joyce), Fettsäure-Protozellen (Szostak), ein synthetisches Genom in einer lebenden Zelle (Venter).

Die zentrale christliche Stimme in diesem Feld ist der synthetische Chemiker **James Tour** (Rice University). Seine Kritik ist präzise und lässt sich in einer Kette zusammenfassen: (1) Präbiotische Synthesen liefern racemische Gemische und Teer („Asphaltierung") und gelingen nur mit gereinigten Reagenzien und Eingriffen des Experimentators; (2) die Verknüpfung zu Ketten ist in Wasser thermodynamisch bergauf; (3) die Händigkeit muss einheitlich sein; (4) die Sequenz muss stimmen – Information; (5) selbst mit allen Komponenten kann niemand eine Zelle zusammenbauen; (6) Zeit ist in der Chemie der Feind, nicht der Freund; (7) Medien und Pressemitteilungen übertreiben systematisch. Tour debattierte u. a. mit Lee Cronin (Unbelievable? 2020; Harvard, November 2023) und Dave Farina („Professor Dave", Rice University, Mai 2023).

Wichtig: Tour sagt als Wissenschaftler ehrlich „Wir haben keine Ahnung" – nicht „also Gott". Der Schluss auf einen Schöpfer ist ein eigener, zweiter Schritt, den Stephen Meyer als Schluss auf die beste Erklärung aus bekannten Ursachen formuliert. Die koptisch-orthodoxe Kirche lehrt, dass Gott der Geber des Lebens ist; über biologische Mechanismen gibt es kein Dogma. Die Väter sahen in den Worten „Die Erde bringe hervor" Gottes Wirken *durch* die Natur – ein Christ muss daher keine Chemie fürchten, nur falsche Behauptungen über sie.`,
  strategy: `**Reihenfolge im Gespräch:**
1. **Begriffe klären:** „Was meinst du genau mit ‚erklärt'? Einen gezeigten Weg unter realistischen Bedingungen – oder eine Hypothese?" Die meisten Behauptungen fallen schon hier auf das richtige Maß zurück.
2. **Zugeständnisse zuerst:** Erkenne an, was gelungen ist (Miller, Sutherland, Joyce, Szostak, Venter). Das macht dich glaubwürdig und zeigt, dass du die Literatur kennst.
3. **Tours Kette abfragen:** Gehe die Stufen durch – Bausteine in reiner Form, Händigkeit, Polymerisation in Wasser, Sequenz/Information, Zusammenbau, Zeit. Frage bei jedem Laborerfolg: *Wer war auf der Urerde der Chemiker?* (gereinigte Reagenzien, Reihenfolge, Zusatzstoffe, Entfernen von Nebenprodukten).
4. **Diagnose und Schluss trennen:** Stelle zuerst fest „Niemand weiß es" (Tour). Führe dann *separat* den positiven Schluss: Information entsteht nach aller Erfahrung aus Intelligenz (Meyer). Nie „wir wissen es nicht, also Gott".
5. **Glauben entlasten:** Sag offen, dass dein Glaube nicht an der Lücke hängt, sondern an Christus. Das nimmt dem Gegenüber den Vorwurf des Lückenbüßers.

**Fallen:**
- Keine erfundenen Riesenzahlen („1 zu 10 hoch 40.000") – nenne lieber konkrete Befunde aus der Fachliteratur.
- Kein „Der Zweite Hauptsatz verbietet Leben" – für offene Systeme falsch.
- Forscher nicht als unehrlich hinstellen; kritisiere Übertragung und Übertreibung, nicht Personen.
- Tour nicht als ID-Vertreter oder Gottesbeweisführer darstellen – er lehnt das ab.
- Debattendaten korrekt nennen: Tour–Cronin an der Harvard University im November 2023, Tour–Farina an der Rice University im Mai 2023.`,
  keyOpponents: [
    { name: 'Lee Cronin', role: 'Regius Professor of Chemistry, University of Glasgow', work: 'Assembly Theory (Nature 2023); Debatten mit James Tour' },
    { name: 'Dave Farina', role: 'Wissenschafts-YouTuber („Professor Dave Explains")', work: 'Debatte mit Tour, Rice University (Mai 2023)' },
    { name: 'Jack W. Szostak', role: 'Nobelpreisträger 2009, Protozellen und nichtenzymatische RNA-Replikation' },
    { name: 'John D. Sutherland', role: 'Chemiker, MRC Laboratory of Molecular Biology, Cambridge', work: 'Präbiotische Nukleotidsynthese (Nature 2009), cyanosulfidische Protometabolismus (Nature Chemistry 2015)' },
    { name: 'Nick Lane', role: 'Evolutionsbiochemiker, University College London', work: 'The Vital Question (2015)' },
    { name: 'Steven A. Benner', role: 'Chemiker, Foundation for Applied Molecular Evolution', work: '„Paradoxes in the Origin of Life" (2014); Borat-Stabilisierung der Ribose' },
    { name: 'Eugene V. Koonin', role: 'Evolutionsbiologe, NCBI (NIH)', work: 'Biology Direct 2:15 (2007); The Logic of Chance (2011)' },
    { name: 'Gerald F. Joyce', role: 'Biochemiker, Salk Institute', work: 'Lincoln & Joyce, Science 323 (2009)' },
  ],
  claims: [millerUrey, rnaWelt, genugZeit, hydrothermaleQuellen, protozellenImLabor, panspermie, oolNurWissensluecke],
  newPeople: [
    {
      id: 'fazale-rana',
      name: 'Fazale Rana',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Biochemiker, Reasons to Believe',
      fields: ['Biochemie', 'Ursprung des Lebens', 'Synthetische Biologie'],
      bio: 'Biochemiker bei der christlichen Organisation Reasons to Believe. Argumentiert, dass die Ergebnisse der präbiotischen Chemie und der synthetischen Biologie die Notwendigkeit intelligenter Steuerung aufzeigen, und vertritt ein Alte-Erde-Schöpfungsmodell.',
      keyWorks: [
        'Origins of Life: Biblical and Evolutionary Models Face Off (2004, mit Hugh Ross)',
        'The Cell\'s Design (2008)',
        'Creating Life in the Lab (2011)',
      ],
      caveat: 'Vertritt das Alte-Erde-Modell von Reasons to Believe; dies ist eine von mehreren christlichen Positionen und keine verbindliche Lehre der koptischen Kirche.',
    },
    {
      id: 'change-laura-tan',
      name: 'Change Laura Tan',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'christlich',
      title: 'Biochemikerin und Zellbiologin',
      fields: ['Zellbiologie', 'Biochemie', 'Ursprung des Lebens'],
      bio: 'Biochemikerin, die gemeinsam mit dem Biomedizintechniker Rob Stadler eine systematische Bestandsaufnahme der Origin-of-Life-Forschung verfasste. Darin wird der Weg von einfachen Molekülen zur ersten Zelle als Treppe mit vielen notwendigen Stufen dargestellt und für jede Stufe der experimentelle Stand geprüft.',
      keyWorks: ['The Stairway to Life: An Origin-of-Life Reality Check (2020, mit Rob Stadler)'],
    },
  ],
};

export default topic;
