import type { Claim, Source } from '../../../schema.ts';

const raup1991: Source = {
  kind: 'gegner',
  author: 'David M. Raup',
  work: 'Extinction: Bad Genes or Bad Luck?',
  year: '1991',
  quote: `Raup schätzt, dass nur etwa eine von tausend Arten, die je gelebt haben, heute noch existiert – ein „Überlebensrekord" von rund 0,1 Prozent. Für die meisten Aussterbeereignisse hält er eher Pech (Katastrophen) als „schlechte Gene" für ausschlaggebend.`,
  status: 'paraphrase',
  note: 'Die gängige Zahl „über 99 %" (je nach Schätzung bis 99,9 %) ist eine Größenordnung, keine exakte Messung.',
};

const gould1989: Source = {
  kind: 'gegner',
  author: 'Stephen Jay Gould',
  work: 'Wonderful Life: The Burgess Shale and the Nature of History',
  year: '1989',
  quote: `Würde man das „Band des Lebens" zurückspulen und neu abspielen, käme nach Gould mit an Sicherheit grenzender Wahrscheinlichkeit nichts heraus, das dem Menschen gleicht – die Geschichte des Lebens sei radikal kontingent.`,
  status: 'paraphrase',
};

const conwayMorris2003: Source = {
  kind: 'wissenschaft',
  author: 'Simon Conway Morris',
  work: 'Life\'s Solution: Inevitable Humans in a Lonely Universe',
  year: '2003',
  quote: `Konvergenz ist allgegenwärtig: Ähnliche Lösungen (Linsenaugen, Delfin- und Ichthyosaurierform, Säbelzähne, soziale Insektenstaaten) entstehen in getrennten Linien immer wieder. Die Evolution bewegt sich in einem Raum begrenzter, „vorgezeichneter" Möglichkeiten.`,
  status: 'paraphrase',
  note: 'Conway Morris akzeptiert die Evolutionstheorie, lehnt aber eine rein zufallsbasierte Deutung ab.',
};

const losos2017: Source = {
  kind: 'gegner',
  author: 'Jonathan B. Losos',
  work: 'Improbable Destinies: Fate, Chance, and the Future of Evolution',
  year: '2017',
  quote: `Losos zeigt, dass Konvergenz bei nah verwandten Arten in ähnlicher Umwelt häufig ist (z. B. Anolis-Eidechsen), plädiert aber dafür, dass Kontingenz auf großen Skalen eine erhebliche Rolle spielt.`,
  status: 'paraphrase',
};

const alvarez1980: Source = {
  kind: 'wissenschaft',
  author: 'Luis W. Alvarez, Walter Alvarez, Frank Asaro, Helen V. Michel',
  work: '„Extraterrestrial Cause for the Cretaceous-Tertiary Extinction", Science 208, S. 1095–1108',
  year: '1980',
  quote: `Eine weltweite Iridium-Anomalie an der Kreide-Tertiär-Grenze deutet auf den Einschlag eines großen Asteroiden als Ursache des Massenaussterbens hin.`,
  status: 'paraphrase',
};

const white1967: Source = {
  kind: 'gegner',
  author: 'Lynn White Jr.',
  work: '„The Historical Roots of Our Ecologic Crisis", Science 155, S. 1203–1207',
  year: '1967',
  quote: `White macht die westlich-christliche Lesart des Herrschaftsauftrags (Gen 1,28) für eine ausbeuterische Haltung zur Natur mitverantwortlich – und schlägt zugleich Franz von Assisi als Schutzpatron der Ökologen vor.`,
  status: 'paraphrase',
  note: 'White war selbst Christ; er kritisierte eine Fehlform, nicht den Glauben insgesamt.',
};

const hull1991: Source = {
  kind: 'gegner',
  author: 'David L. Hull',
  work: '„The God of the Galápagos" (Rezension zu Phillip Johnsons „Darwin on Trial"), Nature 352, S. 485–486',
  year: '1991',
  quote: `Der Gott der Galápagos ist nachlässig, verschwenderisch, gleichgültig, fast teuflisch. Er ist gewiss nicht die Art Gott, zu der irgendjemand beten möchte.`,
  original: `The God of the Galapagos is careless, wasteful, indifferent, almost diabolical. He is certainly not the sort of God to whom anyone would be inclined to pray.`,
  translation: 'eigene Übersetzung',
  status: 'verbatim',
  note: 'Vielfach zitierte Passage; Hull war Wissenschaftsphilosoph und Agnostiker.',
};

const ross2016: Source = {
  kind: 'fachliteratur',
  author: 'Hugh Ross',
  work: 'Improbable Planet: How Earth Became Humanity\'s Home',
  year: '2016',
  quote: `Ross argumentiert, dass die lange Geschichte des Lebens die Erde schrittweise vorbereitet hat: Sauerstoffatmosphäre, Böden, Kalkstein, fossile Rohstoffe und stabile Ökosysteme seien Ergebnis von Milliarden Jahren Leben und Sterben.`,
  status: 'paraphrase',
  note: 'Ross vertritt eine alte Erde und einen „progressiven Kreationismus" – eine von mehreren christlichen Positionen.',
};

const claim: Claim = {
  id: 'aussterben-99-prozent',
  title: `„99 % aller Arten sind ausgestorben – das widerlegt einen planenden Schöpfer."`,
  proponents: [
    { name: 'David M. Raup', role: 'Paläontologe, University of Chicago (1933–2015)', work: 'Extinction: Bad Genes or Bad Luck? (1991)' },
    { name: 'Stephen Jay Gould', role: 'Paläontologe, Harvard (1941–2002)', work: 'Wonderful Life (1989)' },
    { name: 'David L. Hull', role: 'Wissenschaftsphilosoph (1935–2010)', work: '„The God of the Galápagos", Nature 352 (1991)' },
    { name: 'Philip Kitcher', role: 'Philosoph, Columbia University', work: 'Living with Darwin: Evolution, Design, and the Future of Faith (2007)' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The Greatest Show on Earth (2009)' },
  ],
  steelman: `Ein Ingenieur, dessen Konstruktionen zu über 99 Prozent scheitern, wäre kein Genie, sondern ein Versager. Genau das zeigt der Fossilbericht: Von allen Arten, die je gelebt haben, existiert vielleicht eine von tausend noch. Fünf große Massenaussterben haben jeweils einen Großteil des Lebens ausgelöscht – das schlimmste am Ende des Perm vernichtete den allergrößten Teil der Meeresarten. Ob eine Linie überlebte, hing oft am blanken Zufall: Wer zur falschen Zeit am falschen Ort war, als der Asteroid einschlug, verschwand, egal wie „gut" er gebaut war. Warum sollte ein allwissender Planer Hunderte Millionen Jahre lang Arten erschaffen, nur um sie wieder zu vernichten? Der Prozess sieht nicht aus wie Planung, sondern wie ein blindes Experimentieren – oder mit David Hull: Der Gott der Galápagos wäre „nachlässig, verschwenderisch, gleichgültig, fast teuflisch".`,
  biblical: {
    summary: `Die Bibel stellt die Schöpfung nicht als statisches Museum dar, sondern als lebendiges Ganzes, in dem Gott Geschöpfe kommen und gehen lässt: „Du nimmst weg ihren Odem, so vergehen sie … Du lässest aus deinen Odem, so werden sie geschaffen, und erneuerst die Gestalt der Erde" (Ps 104,29–30). „Gut" (*tov*) in Gen 1 bedeutet: tauglich, dem Zweck Gottes entsprechend – nicht ewig unverändert. Auch „nach seiner Art" (*lemino*) beschreibt eine Ordnung der Fortpflanzung, keine Garantie, dass jede Art für immer besteht.`,
    detail: `- **Ps 104** ist der große Schöpfungspsalm: Er preist Gott gerade für ein dynamisches Gefüge aus Werden und Vergehen.
- **Hiob 38–39:** Gott freut sich an Geschöpfen, die dem Menschen nichts nützen – der Sinn der Schöpfung erschöpft sich nicht im Menschen.
- **Mt 10,29:** Kein Sperling fällt „ohne euren Vater" auf die Erde – die Vergänglichkeit der Geschöpfe geschieht nicht außerhalb von Gottes Fürsorge.
- **Gen 2,15:** Der Mensch soll den Garten „bebauen und bewahren" – Verantwortung für die Mitgeschöpfe ist biblischer Auftrag.`,
    sources: [
      { kind: 'bibel', work: 'Psalmen', ref: '104,29–30', quote: `Verbirgst du dein Angesicht, so erschrecken sie; du nimmst weg ihren Odem, so vergehen sie und werden wieder zu Staub. Du lässest aus deinen Odem, so werden sie geschaffen, und erneuerst die Gestalt der Erde.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalmen', ref: '104,24', quote: `HERR, wie sind deine Werke so groß und viel! Du hast sie alle weislich geordnet, und die Erde ist voll deiner Güter.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '10,29', quote: `Kauft man nicht zwei Sperlinge um einen Pfennig? Dennoch fällt deren keiner auf die Erde ohne euren Vater.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Über das Erdalter und die biologischen Mechanismen gibt es in der koptisch-orthodoxen Kirche **kein Dogma**. Fest steht: Gott schuf alles aus dem Nichts, erhält es fortwährend und führt es seinem Ziel zu. Die Väter dachten die Schöpfung bereits dynamisch: Basilius vergleicht das Schöpfungswort mit einem Kreisel, der nach dem ersten Anstoß weiterläuft; Augustinus spricht von „Keimgründen" (*rationes seminales*), die sich im Lauf der Zeit entfalten; Gregor von Nyssa von einer Schöpfung, in der alles der Möglichkeit nach im Anfang angelegt ist und sich in geordneter Folge entfaltet.`,
    sources: [
      { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Hexaemeron', ref: 'Homilie 5,10', quote: `Wie ein Kreisel nach dem ersten Anstoß weiterkreist, so durchzieht die Ordnung der Natur, die mit dem ersten Befehl ihren Anfang nahm, alle folgende Zeit.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De Genesi ad litteram', ref: 'VI,10–11; IX,17', quote: `Gott legte in die Schöpfung „Keimgründe" (rationes seminales), aus denen sich im Lauf der Zeiten entfaltet, was in ihnen angelegt ist.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Apologia in Hexaemeron (Verteidigung des Sechstagewerks)', quote: `Im Anfang legte Gott die Ursachen und Kräfte aller Dinge zugleich an; ihre Entfaltung geschah danach in geordneter Folge.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Dass die allermeisten Arten der Erdgeschichte ausgestorben sind, ist paläontologischer Konsens; die übliche Größenordnung ist „über 99 %". Die durchschnittliche Lebensdauer einer Art im Fossilbericht wird meist auf eine bis zehn Millionen Jahre geschätzt. Neben einem stetigen „Hintergrundaussterben" gab es fünf große Massenaussterben; das bekannteste am Ende der Kreidezeit wird auf einen Asteroideneinschlag zurückgeführt (Alvarez u. a. 1980). Nach Massenaussterben folgten jeweils Phasen neuer Vielfalt – das Ende der Dinosaurier eröffnete die Ausbreitung der Säugetiere. Umstritten ist, wie kontingent die Geschichte des Lebens ist: Gould betonte den Zufall, Conway Morris die Allgegenwart der Konvergenz.`,
    detail: `- **Pseudoextinktion:** Ein Teil der „ausgestorbenen" Arten verschwand nicht ohne Nachkommen, sondern ging (in der evolutionären Deutung) in Nachfolgearten über. Die 99-%-Zahl misst also nicht nur „Fehlschläge".
- **Leben als Ganzes ist nie ausgestorben:** Seit über drei Milliarden Jahren besteht eine ununterbrochene Biosphäre, die sich nach jeder Krise erholt hat.
- **Ökologische Funktion:** Artenwechsel ermöglicht Anpassung an veränderte Klimate, Kontinente und Atmosphären; Ökosysteme sind dynamische Gleichgewichte, keine Museen.
- **Erdgeschichtliche „Vorbereitung":** Sauerstoffatmosphäre, Kalkgestein, Böden, Kohle und Erdöl sind Produkte früheren Lebens.`,
    sources: [raup1991, gould1989, conwayMorris2003, losos2017, alvarez1980],
  },
  quickAnswer: `Die Zahl stimmt ungefähr – aber der Schluss nicht. Er setzt voraus, dass das Ziel eines Schöpfers ewig unveränderte Arten wären. Die Bibel beschreibt aber eine lebendige Schöpfung, in der Gott „die Gestalt der Erde erneuert" (Ps 104,30). Das Leben als Ganzes ist in über drei Milliarden Jahren nie erloschen, sondern hat sich nach jeder Krise neu entfaltet und die Erde Schritt für Schritt bewohnbar gemacht. Ein Orchester ist nicht gescheitert, weil die einzelnen Töne verklingen.`,
  keyPoints: [
    `**Falscher Maßstab:** „99 % gescheitert" setzt voraus, dass jede Art für immer bestehen sollte. Diesen Maßstab hat die Bibel nie aufgestellt – „gut" heißt zweckgemäß, nicht statisch.`,
    `**Das Leben als Ganzes triumphiert:** Seit über drei Milliarden Jahren gibt es eine ununterbrochene, sich immer wieder erneuernde Biosphäre.`,
    `**Pseudoextinktion:** Selbst im evolutionären Modell ist ein Teil der „ausgestorbenen" Arten in Nachfolgern aufgegangen – die Zahl misst keine Fehlschläge.`,
    `**Vorbereitung der Erde:** Sauerstoff, Böden, Kalkstein und Bodenschätze stammen von früherem Leben – die Erdgeschichte hat ein Zuhause für den Menschen geschaffen.`,
    `**Kontingenz ist nicht Ziellosigkeit:** Conway Morris zeigt, dass die Evolution immer wieder zu ähnlichen Lösungen findet; und auch „Zufälle" stehen biblisch unter Gottes Vorsehung (Spr 16,33).`,
    `**Die Väter dachten dynamisch:** Basilius (Kreisel), Augustinus (Keimgründe), Gregor von Nyssa – eine sich entfaltende Schöpfung ist kein modernes Zugeständnis.`,
  ],
  argument: {
    name: 'Das Argument aus dem Aussterben – geprüft',
    summary: 'Der Schluss gilt nur, wenn alle drei Prämissen stimmen.',
    premises: [
      {
        text: `P1 (Gegner): Über 99 % aller Arten sind ausgestorben.`,
        support: `Im Wesentlichen zutreffend (Größenordnung); zu beachten ist die Pseudoextinktion und die Unsicherheit der Schätzungen.`,
        sources: [raup1991],
      },
      {
        text: `P2 (Gegner): Ein planender Schöpfer würde Arten schaffen, die dauerhaft bestehen.`,
        support: `Diese Prämisse ist unbegründet. Weder Bibel noch Väter verlangen Unveränderlichkeit; Ps 104,29–30 beschreibt Vergehen und Neuschaffen als Gottes Werk. Ein Gärtner, dessen Pflanzen jedes Jahr vergehen, ist kein schlechter Gärtner.`,
      },
      {
        text: `P3 (Gegner): Ein Prozess mit Zufällen und Katastrophen kann nicht Teil eines Plans sein.`,
        support: `Kontingenz auf der Ebene der Einzelereignisse schließt Ordnung und Ziel auf höherer Ebene nicht aus (Konvergenz, Feinabstimmung, Vorsehung). Spr 16,33: Das Los wird geworfen, aber es fällt, wie der HERR will.`,
        sources: [conwayMorris2003],
      },
    ],
    conclusion: `Das Aussterben widerlegt nicht einen Schöpfer, sondern nur ein bestimmtes Bild von ihm – einen Konstrukteur unveränderlicher Museumsstücke, den die Bibel nicht lehrt.`,
  },
  voices: [
    {
      person: 'conway-morris',
      role: 'als Paläontologe (Konvergenz)',
      text: `Conway Morris, einer der führenden Kenner der kambrischen Fossilien, widerspricht Goulds These vom „zurückgespulten Band". Er sammelt Hunderte Beispiele von Konvergenz: Kamera-Augen bei Wirbeltieren und Tintenfischen, Stromlinienform bei Ichthyosauriern und Delfinen, Säbelzähne bei Raubsäugern und Beuteltieren. Nach Massenaussterben werden ökologische Rollen immer wieder ähnlich besetzt. Daraus schließt er: Die Geschichte des Lebens bewegt sich in einem Raum vorgezeichneter Möglichkeiten – Aussterben bedeutet nicht Ziellosigkeit.

*Hinweis:* Conway Morris akzeptiert die Evolutionstheorie; er argumentiert gegen eine rein zufallsbasierte Deutung, nicht gegen gemeinsame Abstammung.`,
      sources: [conwayMorris2003],
    },
    {
      person: 'basilius',
      role: 'als Ausleger des Sechstagewerks',
      text: `Basilius liest „Die Erde bringe hervor" (Gen 1,24) als einen Befehl, der nicht mit dem Augenblick seines Ausspruchs erlischt, sondern fortwirkt – wie ein Kreisel, der nach dem ersten Anstoß weiterläuft. Für ihn ist die Natur eine fortdauernde, von Gottes Wort getragene Ordnung, in der Geschöpfe entstehen, wachsen und vergehen. Ein Schöpfer, der eine solche lebendige Ordnung stiftet, ist größer als einer, der nur fertige Dinge hinstellt.`,
      sources: [{ kind: 'kirchenvater', author: 'Basilius der Große', work: 'Hexaemeron', ref: 'Homilie 5,10; 9,2', status: 'paraphrase' }],
    },
    {
      person: 'augustinus',
      role: 'als Theologe der Schöpfungszeit',
      text: `Augustinus fragte schon im 5. Jahrhundert, wie Gottes Schaffen und die Zeit zusammenhängen. Seine Antwort: Gott schuf im Anfang alles, aber vieles nur der Anlage nach – als „Keimgründe", die sich zu ihrer Zeit entfalten. Damit bietet er ein patristisches Modell für eine Schöpfung, die sich entwickelt, ohne dass Gott dadurch weniger Schöpfer wäre. Augustinus wollte damit keine moderne Biologie vorwegnehmen; er zeigt aber, dass die Kirche nie an eine statische Welt gebunden war.`,
      sources: [{ kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De Genesi ad litteram', ref: 'V,23; VI,10–11', status: 'paraphrase' }],
    },
    {
      person: 'hugh-ross',
      role: 'als Astrophysiker (alte Erde)',
      text: `Ross deutet die lange Geschichte des Lebens als Vorbereitung der Erde: Cyanobakterien bauten über Hunderte Millionen Jahre die Sauerstoffatmosphäre auf; Meereslebewesen lagerten gewaltige Kalksteinschichten ab, die das Klima mitregulieren; Pflanzen schufen Böden; abgestorbene Organismen wurden zu Kohle, Erdöl und Erdgas. Was der Kritiker als Verschwendung sieht, ist für Ross ein Aufbauprozess. Diese Sicht ist eine von mehreren christlichen Positionen; sie zeigt jedenfalls, dass „sinnlos" ein voreiliges Urteil ist.`,
      sources: [ross2016],
    },
    {
      person: 'gregor-nyssa',
      role: 'als Theologe der Entfaltung',
      text: `Gregor von Nyssa verteidigte das Sechstagewerk seines Bruders Basilius und deutete es so, dass Gott im Anfang die Kräfte und Ursachen aller Dinge zugleich anlegte, die sich danach in einer geordneten Abfolge entfalten. Die Schöpfung ist für ihn ein Weg, keine Momentaufnahme – und Gottes Weisheit zeigt sich gerade in der Ordnung dieser Folge.`,
      sources: [{ kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Apologia in Hexaemeron', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'raup-versagerquote',
      objection: `Über 99 Prozent aller Arten sind ausgestorben. Ein Ingenieur mit dieser Versagerquote wäre kein allwissender Planer.`,
      objectionBy: 'Richard Dawkins',
      targetsPremise: 2,
      answer: `Die Zahl bestreite ich nicht. Aber dein Vergleich setzt voraus, dass das Ziel jede einzelne Art für immer sein sollte. Denk an ein Orchester: Jeder Ton verklingt, und doch ist die Sinfonie nicht gescheitert. Die Biosphäre besteht seit über drei Milliarden Jahren ununterbrochen, erneuert sich nach jeder Krise und hat die Erde bewohnbar gemacht. Das ist keine Versagerquote, sondern ein lebendiges Ganzes.`,
      sources: [raup1991],
      questionsBack: [`Woher weißt du, dass ein Schöpfer unveränderliche Arten wollen müsste?`],
      followUps: [
        {
          id: 'pseudoextinktion-klein',
          objection: `Pseudoextinktion ist nur ein kleiner Teil. Die allermeisten Linien starben wirklich ohne Nachkommen aus.`,
          objectionBy: 'Jerry Coyne',
          targetsPremise: 1,
          answer: `Zugestanden – die meisten Linien endeten wirklich. Mein Punkt war nur, dass die Zahl keine Statistik von „Fehlschlägen" ist. Wirkliches Aussterben ist in einer Welt mit wandernden Kontinenten, Eiszeiten und sich ändernder Atmosphäre normaler Wechsel. Die Frage ist nicht, ob Arten vergehen, sondern ob ein Ganzes mit Werden und Vergehen einen Sinn haben kann. Ps 104 sagt: Ja.`,
          followUps: [
            {
              id: 'verschwendung',
              objection: `Milliarden Jahre Kommen und Gehen, ehe der Mensch erscheint – ein planender Gott hätte ihn direkt erschaffen. Diese Verschwendung passt nicht zu einem Ziel.`,
              objectionBy: 'Philip Kitcher',
              targetsPremise: 2,
              answer: `Das setzt zweierlei voraus: dass der Mensch Gottes einziges Ziel sei und dass Effizienz für einen ewigen Gott ein Wert ist. Beides lehrt die Bibel nicht. Gott nennt die Schöpfung „gut", bevor der Mensch da ist, freut sich an Geschöpfen, die dem Menschen nichts nützen (Hiob 38–39), und für ihn ist Zeit kein knappes Gut. Verschwendung gibt es nur, wo Ressourcen knapp sind.`,
              sources: [{ kind: 'gegner', author: 'Philip Kitcher', work: 'Living with Darwin: Evolution, Design, and the Future of Faith', year: '2007', status: 'paraphrase', quote: `Kitcher sieht in der von Leid, Verschwendung und Aussterben geprägten Geschichte des Lebens ein starkes Argument gegen einen vorsehenden Schöpfer.` }],
              followUps: [
                {
                  id: 'ressourcen-zynisch',
                  objection: `Zu sagen, Dinosaurier seien für unser Erdöl gestorben, ist zynisch und anthropozentrisch.`,
                  objectionBy: 'Philip Kitcher',
                  answer: `Einverstanden, als einzige Begründung wäre das zu eng. Aber du hast „sinnlose Verschwendung" behauptet – und ich zeige nur, dass wir sogar mit unserem begrenzten Blick Zwecke erkennen: Die Sauerstoffatmosphäre wurde von Mikroben aufgebaut, Kalkgestein und Böden stammen von früherem Leben. Und jedes Geschöpf hat einen Eigenwert vor Gott – kein Sperling fällt ohne den Vater. Beides zusammen ist das Gegenteil von Sinnlosigkeit.`,
                  voices: [
                    {
                      person: 'hugh-ross',
                      role: 'als Astrophysiker',
                      text: `Ross zeigt an der Geochemie, wie frühes Leben Atmosphäre, Ozeanchemie und Gestein umgebaut hat. Er betont zugleich, dass dies nicht der einzige Sinn früherer Geschöpfe ist – sie haben Wert in sich selbst.`,
                      sources: [ross2016],
                    },
                  ],
                  followUps: [
                    {
                      id: 'gott-ueberfluessig',
                      objection: `Wenn alles durch natürliche Prozesse abläuft – Sauerstoff, Böden, Erdöl –, dann ist Gott überflüssig.`,
                      objectionBy: 'Sean Carroll',
                      answer: `Gott ist kein Konkurrent natürlicher Ursachen, sondern ihr Grund. Athanasius vergleicht den Logos mit einem Musiker, der die Saiten stimmt – die Musik ist ganz natürlich und doch ganz sein Werk. Die Naturwissenschaft beschreibt *wie* die Erde bewohnbar wurde; sie erklärt nicht, warum es Naturgesetze gibt, warum sie verstehbar sind und warum sie so feinabgestimmt sind, dass all das möglich ist.`,
                      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Contra Gentes', ref: '42', status: 'paraphrase', quote: `Der Logos ordnet und verbindet die Schöpfung wie ein Musiker, der die Lyra stimmt.` }],
                      questionsBack: [`Erklärt die Beschreibung eines Prozesses auch, warum es diesen gesetzmäßigen Prozess überhaupt gibt?`],
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
      id: 'gould-band-zurueckspulen',
      objection: `Massenaussterben zeigen, dass die Geschichte des Lebens Zufall ist. Spul das Band zurück, und es entsteht kein Mensch – so Gould. Ein Plan sieht anders aus.`,
      objectionBy: 'Stephen Jay Gould',
      targetsPremise: 3,
      answer: `Goulds These ist unter Biologen nicht unumstritten. Simon Conway Morris hat Hunderte Beispiele gesammelt, wie die Evolution in getrennten Linien immer wieder zu ähnlichen Lösungen findet – Kamera-Augen, Delfinform, Säbelzähne. Nach Aussterben werden ökologische Rollen erneut ähnlich besetzt. Und selbst echte Zufälle schließen keinen Plan aus: „Das Los wird geworfen in den Schoß; aber es fällt, wie der HERR will" (Spr 16,33).`,
      sources: [gould1989, conwayMorris2003,
        { kind: 'bibel', work: 'Sprüche', ref: '16,33', quote: `Das Los wird geworfen in den Schoß; aber es fällt, wie der HERR will.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'konvergenz-ueberschaetzt',
          objection: `Konvergenz ist häufig, aber vor allem bei nahen Verwandten in ähnlicher Umwelt. Jonathan Losos zeigt, dass auf großen Skalen der Zufall dominiert.`,
          objectionBy: 'Jonathan Losos',
          targetsPremise: 3,
          answer: `Das ist eine faire innerbiologische Debatte, und ich muss sie nicht entscheiden. Denn selbst wenn Gould recht hätte, folgt daraus nur, dass die Geschichte des Lebens nicht durch Naturgesetze allein festgelegt ist. Die Bibel behauptet nie, dass sie das wäre. Sie sagt, dass Gott in der Geschichte wirkt – auch durch Ereignisse, die von unten betrachtet zufällig erscheinen. Josef sagt: „Ihr gedachtet's böse mit mir zu machen; aber Gott gedachte es gut zu machen" (Gen 50,20).`,
          sources: [losos2017,
            { kind: 'bibel', work: '1. Mose', ref: '50,20', quote: `Ihr gedachtet's böse mit mir zu machen; aber Gott gedachte es gut zu machen.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
          followUps: [
            {
              id: 'zufall-vorsehung-widerspruch',
              objection: `Zufall und Vorsehung schließen sich aus. Entweder ist der Prozess gelenkt oder er ist es nicht.`,
              objectionBy: 'Jerry Coyne',
              targetsPremise: 3,
              answer: `„Zufall" bedeutet in der Biologie: Die Mutation ist nicht auf den Nutzen hin ausgerichtet, das Ereignis ist für uns nicht vorhersagbar. Das ist eine Aussage über physikalische Korrelationen und unser Wissen – nicht der Nachweis, dass es keinen letzten Grund gibt. Darwin selbst schrieb an Gray von dem, „was wir Zufall nennen mögen". Ein Würfelwurf ist physikalisch erklärbar und kann doch Teil eines Spielplans sein.`,
              followUps: [
                {
                  id: 'vorsehung-unfalsifizierbar',
                  objection: `Dann ist deine Vorsehung unfalsifizierbar – und damit wissenschaftlich wertlos.`,
                  objectionBy: 'Jerry Coyne',
                  answer: `Vorsehung ist eine metaphysische Aussage – genauso wie deine Gegenbehauptung, dass es keine gibt. Auch „Die Natur ist alles, was existiert" lässt sich nicht im Labor prüfen. Nicht jede wahre Aussage ist eine naturwissenschaftliche; der Satz „Nur Wissenschaft liefert Wissen" ist selbst keine wissenschaftliche Erkenntnis. Lass uns die Gründe für und gegen Gott philosophisch abwägen – dafür reicht die Paläontologie allein nicht aus.`,
                  questionsBack: [`Welches Experiment würde deine Behauptung widerlegen, dass die Geschichte des Lebens keinen letzten Sinn hat?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'gut-heisst-statisch',
      objection: `Gen 1 nennt die Schöpfung „sehr gut" und lässt alles „nach seiner Art" entstehen. Die Bibel lehrt feste Arten. Eine Welt voller Aussterben widerspricht ihr direkt.`,
      objectionBy: 'John W. Loftus',
      targetsPremise: 2,
      answer: `„Nach seiner Art" (*lemino*) beschreibt, dass Geschöpfe sich ihrer Art gemäß fortpflanzen – nicht, dass jede Art ewig besteht. Und „gut" (*tov*) heißt: tauglich, dem Zweck entsprechend. Der Schöpfungspsalm 104 preist Gott ausdrücklich dafür, dass er Geschöpfe vergehen lässt und „die Gestalt der Erde erneuert". Die Bibel beschreibt eine lebendige, keine statische Schöpfung.`,
      followUps: [
        {
          id: 'vaeter-feste-arten',
          objection: `Die Kirchenväter glaubten an feste Arten. Du liest Darwin in die Väter hinein.`,
          objectionBy: 'Ronald Numbers',
          answer: `Fair: Die Väter lehrten keine Evolution, und ich behaupte das auch nicht. Aber sie banden Gottes Güte nie an die Unveränderlichkeit der Geschöpfe. Basilius sah das Schöpfungswort fortwirken wie einen Kreisel, Augustinus sprach von „Keimgründen", die sich zu ihrer Zeit entfalten. Eine sich entwickelnde Schöpfung ist also kein modernes Zugeständnis, sondern ein patristischer Gedanke.`,
          voices: [
            {
              person: 'augustinus',
              role: 'als Schöpfungstheologe',
              text: `Augustinus las Gen 1 so, dass Gott vieles im Anfang nur der Anlage nach schuf, damit es sich zu seiner Zeit entfalte. Für die Frage des Aussterbens heißt das: Ein Schöpfer, der Entfaltung in der Zeit will, ist mit Werden und Vergehen vereinbar.`,
              sources: [{ kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De Genesi ad litteram', ref: 'VI,10–11', status: 'paraphrase' }],
            },
          ],
          followUps: [
            {
              id: 'tod-vor-suendenfall',
              objection: `Aber Röm 5,12 sagt, der Tod kam durch die Sünde in die Welt. Massenaussterben vor Adam widersprechen der Bibel – das sagen auch viele Christen.`,
              objectionBy: 'Ken Ham',
              answer: `Das ist eine ernsthafte innerchristliche Position, die ich respektiere. Röm 5,12 spricht davon, dass der Tod „zu allen Menschen durchgedrungen" ist; viele Ausleger beziehen das vorrangig auf den Menschen. Die koptische Kirche hat über das Erdalter und Tierleben vor Adam kein Dogma. Fest steht für alle: Adam war eine reale Person, der Fall war real, und Christus hat den Tod besiegt.`,
              sources: [
                { kind: 'bibel', work: 'Römer', ref: '5,12', quote: `Derhalben, wie durch einen Menschen die Sünde ist gekommen in die Welt und der Tod durch die Sünde, und ist also der Tod zu allen Menschen durchgedrungen, dieweil sie alle gesündigt haben.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              followUps: [
                {
                  id: 'kompromiss-zeitgeist',
                  objection: `Das ist ein Kompromiss mit dem Zeitgeist. Wer Millionen Jahre zulässt, gibt die Autorität der Schrift preis.`,
                  objectionBy: 'Ken Ham',
                  answer: `Die Offenheit in dieser Frage ist älter als Darwin: Origenes und Augustinus lasen die Schöpfungstage nicht als gewöhnliche 24-Stunden-Tage, Basilius eher wörtlich – und alle blieben rechtgläubige Väter. Die Autorität der Schrift hängt an dem, was sie lehrt: Schöpfung aus dem Nichts, der Mensch als Gottes Bild, ein realer Fall, die Erlösung in Christus. Darüber gibt es keinen Kompromiss.`,
                  questionsBack: [`Waren Augustinus und Origenes in deinen Augen Kompromissler mit dem Zeitgeist des 5. bzw. 3. Jahrhunderts?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'christentum-artensterben',
      objection: `Und heute? Das Christentum mit seinem „Macht euch die Erde untertan" ist mitschuldig am gegenwärtigen Artensterben – das hat Lynn White 1967 in Science gezeigt.`,
      objectionBy: 'Lynn White Jr.',
      answer: `White kritisierte eine Fehlform – und war selbst Christ; er schlug Franz von Assisi als Schutzpatron der Ökologen vor. Der biblische Auftrag lautet, den Garten zu „bebauen und bewahren" (Gen 2,15). Herrschaft heißt im Alten Testament königliche Fürsorge, nicht Ausbeutung: „Der Gerechte erbarmt sich seines Viehes" (Spr 12,10).`,
      sources: [white1967,
        { kind: 'bibel', work: 'Sprüche', ref: '12,10', quote: `Der Gerechte erbarmt sich seines Viehes; aber das Herz der Gottlosen ist unbarmherzig.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'radah-niedertreten',
          objection: `Das hebräische *radah* heißt „niedertreten", *kabasch* „unterwerfen". Da steht Ausbeutung, keine Fürsorge.`,
          objectionBy: 'Lynn White Jr.',
          answer: `Die Wörter bezeichnen Herrschaft, das stimmt. Aber das Ideal des Königs im Alten Testament ist der Hirte, der die Schwachen schützt (Ps 72). Der Mensch herrscht als *Bild Gottes* – also so, wie Gott herrscht: schaffend, erhaltend, fürsorgend. Gen 2,15 präzisiert den Auftrag mit *abad* und *schamar*: dienen und bewahren.`,
          followUps: [
            {
              id: 'christliche-laender-zerstoeren',
              objection: `Empirisch haben gerade christlich geprägte Industrieländer die Natur am stärksten zerstört.`,
              objectionBy: 'Lynn White Jr.',
              answer: `Industrielle Naturzerstörung gab es unter allen Weltanschauungen – die Austrocknung des Aralsees geschah unter einem atheistischen Regime. Entscheidend waren Technik, Wirtschaft und Bevölkerungswachstum, nicht Theologie. Wo Christen gesündigt haben, ist das Umkehr wert, keine Widerlegung des Auftrags. Die orthodoxe Tradition sieht die Schöpfung als Gabe, die der Mensch Gott dankend zurückbringt.`,
              followUps: [
                {
                  id: 'neue-schoepfung-egal',
                  objection: `Wenn Gott ohnehin eine neue Schöpfung macht, ist Artenschutz für Christen doch egal.`,
                  objectionBy: 'Bill Maher',
                  answer: `Im Gegenteil. Paulus sagt, die Schöpfung selbst wird befreit (Röm 8,21) – sie wird erneuert, nicht weggeworfen. Was Gott erneuern will, darf ich nicht verachten. Der Mönchsvater Antonius bat nach seiner Lebensbeschreibung sogar die wilden Tiere, die seinen Garten verwüsteten, freundlich, ihn in Ruhe zu lassen – statt sie zu töten. Bewahrung der Schöpfung ist Gehorsam, keine Nebensache.`,
                  sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Leben des Antonius (Vita Antonii)', ref: '50', status: 'paraphrase', quote: `Als wilde Tiere seinen kleinen Garten beschädigten, fasste Antonius eines sanft und bat sie, nicht mehr zu kommen, da er ihnen nichts zuleide tue.` }],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Woher stammt die Annahme, ein Schöpfer müsse unveränderliche Arten wollen?`,
    `Ist eine Sinfonie gescheitert, weil ihre Töne verklingen?`,
    `Wie erklärst du, dass die Evolution nach Aussterben immer wieder zu ähnlichen Lösungen findet (Konvergenz)?`,
    `Wenn „Zufall" in der Biologie bedeutet, dass Mutationen nicht auf Nutzen ausgerichtet sind – woher weißt du, dass es keinen letzten Grund gibt?`,
    `Ist Effizienz für ein ewiges Wesen überhaupt ein sinnvoller Maßstab?`,
  ],
  avoid: [
    `Die 99-%-Zahl einfach bestreiten – sie ist im Wesentlichen korrekt.`,
    `„Alle Fossilien stammen aus der Sintflut" als einzige christliche Antwort präsentieren – das ist eine Minderheitsposition ohne kirchliche Verbindlichkeit.`,
    `Behaupten, jede ausgestorbene Art habe „nur" für den Menschen gelebt – das ist anthropozentrisch und biblisch zu eng.`,
  ],
  concessions: [
    `Die Geschichte des Lebens enthält viel Tod und Katastrophen; das ist eine ernsthafte Anfrage an jeden Schöpfungsglauben.`,
    `Wie kontingent die Evolution ist, ist eine offene wissenschaftliche Frage; Conway Morris' Sicht ist nicht unumstritten.`,
    `Christen haben die Bewahrung der Schöpfung oft vernachlässigt.`,
  ],
  furtherReading: [
    conwayMorris2003,
    raup1991,
    ross2016,
    { kind: 'fachliteratur', author: 'Michael J. Murray', work: 'Nature Red in Tooth and Claw', year: '2008', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Aussterben', 'Massenaussterben', 'Kontingenz', 'Konvergenz', 'Gould', 'Conway Morris', 'Ps 104', 'Schöpfungsbewahrung'],
  related: ['natur-grausamkeit-design/parasiten-grausames-design', 'theodizee/tierleid', 'palaeontologie/konvergenz-zufall', 'palaeontologie/kambrische-explosion-kein-problem', 'genesis/vaeter-lasen-woertlich', 'erdalter/erde-alt-bibel-widerlegt'],
};

export default claim;
