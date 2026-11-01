import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'wer-schuf-gott',
  title: `„Wer hat dann Gott erschaffen?"`,
  proponents: [
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The God Delusion (2006), Kap. 4 „Why There Almost Certainly Is No God" – „Ultimate Boeing 747 gambit"' },
    { name: 'Bertrand Russell', role: 'Philosoph und Logiker', work: 'Why I Am Not a Christian (Vortrag 1927)' },
    { name: 'David Hume', role: 'Philosoph der schottischen Aufklärung', work: 'Dialogues Concerning Natural Religion (postum 1779), Teil IV–V' },
    { name: 'Alex O\'Connor', role: 'Philosoph und Podcaster („Within Reason")', work: 'Debatten und Videos zur Kausalität und zum Special-Pleading-Vorwurf' },
  ],
  steelman: `Die Gottesbeweise behaupten, dass alles eine Ursache haben muss – und machen dann ausgerechnet bei Gott eine Ausnahme. Das ist Sonderbehandlung (special pleading). Bertrand Russell erzählt, wie ihn als Jugendlichen ein Satz von John Stuart Mill vom Glauben befreite: Die Frage „Wer hat mich gemacht?" lasse sich nicht beantworten, weil sie sofort die Frage nach sich ziehe: „Wer hat Gott gemacht?" Richard Dawkins verschärft das: Ein Designer, der ein so komplexes Universum entwirft, müsste selbst mindestens so komplex und damit mindestens so unwahrscheinlich sein wie das, was er erklären soll – „Gott ist die ultimative Boeing 747". Ein Erklärer, der mehr Erklärung braucht als das Erklärte, erklärt nichts. Wenn man irgendwo aufhören muss, warum nicht gleich beim Universum?`,
  biblical: {
    summary: `Die Bibel beschreibt Gott gerade nicht als etwas Entstandenes, sondern als den, der „von Ewigkeit zu Ewigkeit" ist (Ps 90,2), der „Erste und der Letzte" (Jes 44,6), der Seiende („Ich bin, der ich bin", Ex 3,14), der nichts bedarf und allen Leben gibt (Apg 17,25). Alles andere ist „durch ihn gemacht" (Joh 1,3). Die Frage „Wer schuf Gott?" verwechselt also den Schöpfer mit einem Geschöpf.`,
    detail: `- **Ex 3,14:** Die Septuaginta übersetzt *Egō eimi ho ōn* – „Ich bin der Seiende". Die Väter lasen darin, dass Gott sein Sein nicht empfängt, sondern *ist*.
- **Joh 1,1–3:** „Im Anfang *war* das Wort" (*ēn*, Dauer) – im Gegensatz zu „alle Dinge sind *geworden*" (*egeneto*). Johannes unterscheidet sprachlich zwischen dem, was ist, und dem, was wird.
- **Apg 17,24–25:** Paulus sagt den Athenern, Gott „bedarf" nichts – er ist nicht abhängig, sondern der Grund aller Abhängigen.
- **Missverständnis:** Die Bibel sagt nie „Alles hat eine Ursache", sondern „Alles, was gemacht ist, ist durch ihn gemacht" (Joh 1,3). Das Geschaffene braucht einen Schöpfer – nicht der Schöpfer.`,
    sources: [
      { kind: 'bibel', work: 'Psalmen', ref: '90,2', quote: `Ehe denn die Berge wurden und die Erde und die Welt geschaffen wurden, bist du, Gott, von Ewigkeit zu Ewigkeit.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '1,1.3', quote: `Im Anfang war das Wort, und das Wort war bei Gott, und Gott war das Wort. […] Alle Dinge sind durch dasselbe gemacht, und ohne dasselbe ist nichts gemacht, was gemacht ist.`, original: 'Ἐν ἀρχῇ ἦν ὁ λόγος … πάντα δι᾽ αὐτοῦ ἐγένετο', translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Mose (Exodus)', ref: '3,14', quote: `Gott sprach zu Mose: Ich werde sein, der ich sein werde.`, original: 'אֶהְיֶה אֲשֶׁר אֶהְיֶה; LXX: Ἐγώ εἰμι ὁ ὤν', translation: 'Luther 1912', status: 'verbatim', note: 'Die Septuaginta, die Bibel der Väter, übersetzt „Ich bin der Seiende".' },
      { kind: 'bibel', work: 'Jesaja', ref: '44,6', quote: `Ich bin der Erste, und ich bin der Letzte, und außer mir ist kein Gott.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '17,25', quote: `sein wird auch nicht von Menschenhänden gepflegt, als der jemandes bedürfe, so er selber jedermann Leben und Odem allenthalben gibt.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Unterscheidung zwischen dem Ungeschaffenen und dem Geschaffenen ist das Herzstück der alexandrinischen Theologie. Im Streit mit Arius bestand der hl. Athanasius darauf, dass der Logos *nicht* geschaffen ist – es gab keine Zeit, „da er nicht war". Gott allein ist ohne Anfang (*anarchos*), ungeschaffen und unveränderlich; alles andere hat sein Sein von ihm. Das Glaubensbekenntnis, das die koptische Kirche in jeder Liturgie betet, bekennt den Sohn als „gezeugt, nicht geschaffen".`,
    detail: `Arius' Formel „Es gab eine Zeit, da er nicht war" (*ēn pote hote ouk ēn*) wurde in Nizäa (325) verworfen. Athanasius argumentiert: Was geschaffen ist, kann nicht erschaffen, erlösen und vergöttlichen; nur der ungeschaffene Gott kann Geschöpfe mit sich vereinen. Johannes von Damaskus fasst zusammen, dass Gott ohne Anfang, ungeschaffen, unveränderlich und Ursache von allem ist (De fide orthodoxa I,8). Die Frage „Wer schuf Gott?" hätte für die Väter daher bedeutet: „Wer schuf das Ungeschaffene?" – ein Widerspruch in sich.`,
    sources: [
      { kind: 'konzil', work: 'Glaubensbekenntnis von Nizäa-Konstantinopel (325/381)', quote: `… gezeugt, nicht geschaffen, eines Wesens mit dem Vater; durch ihn ist alles geschaffen.`, translation: 'gebräuchliche deutsche Fassung', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Reden gegen die Arianer', ref: 'I,11–14', quote: `Gegen die arianische Formel „Es gab eine Zeit, da er nicht war": Der Sohn ist ewig beim Vater, nicht ein Geschöpf aus dem Nichts.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Johannes von Damaskus', work: 'Genaue Darlegung des orthodoxen Glaubens (De fide orthodoxa)', ref: 'I,8', quote: `Wir glauben an einen Gott, einen Ursprung, ohne Anfang, ungeschaffen, ungezeugt, unvergänglich und unsterblich, ewig, unbegrenzt …`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Die Frage setzt voraus, dass Gott geschaffen wurde – aber dann wäre er nicht Gott. Kein ernsthafter Gottesbeweis sagt „Alles hat eine Ursache", sondern „Alles, was *anfängt* zu existieren" oder „alles, was *nicht aus sich selbst* existiert, hat eine Ursache". Gott ist nach Definition ungeschaffen und ewig. Irgendwo muss jede Erklärungskette enden – entweder bei etwas Ewigem, Notwendigem oder bei „aus dem Nichts". Die Frage ist also nicht, *ob* es etwas Unverursachtes gibt, sondern *was* es ist: ein Universum mit Anfang oder ein ewiger Gott.`,
  keyPoints: [
    `**Strohmann:** Kein klassisches Argument (Thomas, Leibniz, Kalam) lautet „Alles hat eine Ursache". Sie sprechen von dem, was anfängt, was sich verändert oder was kontingent ist.`,
    `**Kein Special Pleading:** Eine Ausnahme ist legitim, wenn es einen sachlichen Grund gibt. Gott fängt nicht an, verändert sich nicht und existiert notwendig – das Universum zeigt die Merkmale des Kontingenten.`,
    `**Der Regress muss enden:** Eine unendliche Kette abgeleiteter Ursachen erklärt nichts. Auch der Atheist braucht einen Endpunkt – die Frage ist, welcher geeigneter ist.`,
    `**Erklärung der Erklärung:** Um eine Erklärung als die beste zu erkennen, muss man sie nicht selbst erklären können. Archäologen erkennen Pfeilspitzen als Werkzeuge, ohne zu wissen, wer die Hersteller waren.`,
    `**Dawkins' Komplexitätsargument** verwechselt Gott mit einem physikalischen System aus Teilen. Gott ist nach klassischer Lehre Geist, nicht zusammengesetzt – und seine „Unwahrscheinlichkeit" ist bei einem notwendigen Wesen keine sinnvolle Kategorie.`,
  ],
  argument: {
    name: 'Warum die Kette einen unverursachten Anfang braucht',
    summary: 'Jede Kette abhängiger Ursachen setzt etwas voraus, das nicht abhängig ist.',
    premises: [
      {
        text: 'P1: Alles, was zu existieren beginnt oder sein Dasein von etwas anderem empfängt, hat eine Ursache außerhalb seiner selbst.',
        support: `Das ist das Kausalprinzip in seiner klassischen Form (*ex nihilo nihil fit*). Es betrifft nicht „alles", sondern nur das Abhängige.`,
      },
      {
        text: 'P2: Eine Kette, in der jedes Glied sein Dasein von einem anderen empfängt, erklärt nicht, warum es die Kette überhaupt gibt – auch wenn sie unendlich lang wäre.',
        support: `Ein unendlicher Zug von Waggons ohne Lokomotive bewegt sich nicht; das Leihen von Dasein setzt jemanden voraus, der es nicht geliehen hat. Diese Überlegung findet sich bei Thomas von Aquin, Leibniz und schon bei Johannes von Damaskus.`,
        sources: [
          { kind: 'fachliteratur', author: 'Thomas von Aquin', work: 'Summa theologiae', ref: 'I, q. 2, a. 3', status: 'paraphrase', quote: 'In einer geordneten Reihe von Wirkursachen kann man nicht ins Unendliche gehen; also muss es eine erste Wirkursache geben.' },
        ],
      },
      {
        text: 'P3: Also existiert etwas, das sein Dasein nicht von etwas anderem empfängt – ein Unverursachtes.',
        support: `Dies folgt aus P1 und P2. Die Frage „Wer verursachte das Unverursachte?" ist dann so sinnvoll wie „Wer ist die Ehefrau des Junggesellen?"`,
      },
    ],
    conclusion: 'Die Frage ist nicht, ob es etwas Unverursachtes gibt, sondern was dieses Unverursachte ist – und dafür ist ein ewiger, notwendiger Geist ein besserer Kandidat als ein kontingentes Universum mit Anfang.',
  },
  voices: [
    {
      person: 'plantinga',
      role: 'als Rezensent von „The God Delusion"',
      text: `In seiner Rezension „The Dawkins Confusion" (2007) argumentiert Plantinga, dass Dawkins' Hauptargument an zwei Stellen scheitert. Erstens ist Gott nach klassischer Theologie kein aus Teilen zusammengesetztes Ding; Dawkins' eigene Definition von Komplexität (viele Teile, unwahrscheinlich angeordnet) trifft auf einen Geist gar nicht zu. Zweitens folgt aus der angeblichen Komplexität Gottes nicht seine Unwahrscheinlichkeit: Wenn Gott notwendig existiert, ist seine Wahrscheinlichkeit nicht gering, sondern maximal. Plantinga hält Dawkins' Argument deshalb für einen Fehlschluss, der die Philosophie der Religion nicht ernst nimmt.`,
      sources: [
        { kind: 'fachliteratur', author: 'Alvin Plantinga', work: '„The Dawkins Confusion: Naturalism ad absurdum", Books & Culture (März/April)', year: '2007', status: 'paraphrase', quote: 'Gott ist nach klassischer Lehre einfach und nicht aus Teilen zusammengesetzt; zudem folgt aus Komplexität nicht Unwahrscheinlichkeit, wenn Gott notwendig existiert.' },
      ],
    },
    {
      person: 'feser',
      role: 'als Thomist und Metaphysiker',
      text: `Feser betont, dass die Frage „Wer schuf Gott?" auf einem Missverständnis beruht, das die Neuen Atheisten von einem Lehrbuchklischee übernommen haben: Kein bedeutender Vertreter der klassischen Gottesbeweise habe je behauptet, „alles hat eine Ursache". Aristoteles, Thomas und Leibniz argumentieren, dass das, was aus Akt und Potenz zusammengesetzt, veränderlich oder kontingent ist, einen Grund braucht – und dass dieser Grund am Ende „reiner Akt", reines Sein sein muss, das gerade nicht verursacht werden kann. Wer fragt, was Gott verursacht hat, zeigt nur, dass er das Argument nicht verstanden hat.`,
      sources: [
        { kind: 'fachliteratur', author: 'Edward Feser', work: 'Five Proofs of the Existence of God', year: '2017', ref: 'Kap. 7 (Einwände)', status: 'paraphrase', quote: 'Die Einwand „Wenn alles eine Ursache hat, was verursachte Gott?" greift eine Prämisse an, die kein klassisches Argument enthält.' },
        { kind: 'fachliteratur', author: 'Edward Feser', work: 'The Last Superstition', year: '2008', status: 'paraphrase', quote: 'Kritik an den Neuen Atheisten, die die klassischen Argumente in Strohmann-Form angreifen.' },
      ],
    },
    {
      person: 'craig',
      role: 'als Philosoph und Debattierer',
      text: `Craig antwortet auf Dawkins mit einem wissenschaftstheoretischen Grundsatz: Um eine Erklärung als die beste anzuerkennen, muss man nicht auch die Erklärung erklären können – sonst entstünde ein unendlicher Regress, und nichts wäre je erklärt. Wenn Archäologen Töpferscherben und Pfeilspitzen finden, schließen sie zu Recht auf eine untergegangene Kultur, auch wenn sie nicht wissen, wer diese Menschen waren und woher sie kamen. Zudem sei ein göttlicher Geist, als nicht-physisches Wesen, bemerkenswert einfach: Er hat keine Teile, auch wenn seine Gedanken reich sind.`,
      sources: [
        { kind: 'fachliteratur', author: 'William Lane Craig', work: '„Dawkins\' Delusion", in: Craig & Meister (Hg.), God Is Great, God Is Good', year: '2009', status: 'paraphrase', quote: 'Eine beste Erklärung braucht keine Erklärung ihrer selbst; ein Geist ist nicht physisch zusammengesetzt.' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Verteidiger des ungeschaffenen Logos',
      text: `Für Athanasius ist die Grenze zwischen Schöpfer und Geschöpf die wichtigste Linie aller Theologie. Alles Geschaffene ist aus dem Nichts ins Sein gerufen und würde, sich selbst überlassen, ins Nichts zurückfallen; nur der Logos Gottes hält es im Dasein. Gerade deshalb kann der Logos selbst nicht geschaffen sein – sonst bräuchte auch er einen Halt und könnte die Welt nicht tragen. Die Frage, wer Gott erschaffen habe, verwechselt nach Athanasius genau die beiden Seiten dieser Grenze.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '3–4', status: 'paraphrase', quote: 'Die Welt ist aus dem Nichts geschaffen; sich selbst überlassen, würde sie ins Nichtsein zurücksinken.' },
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', ref: '41–42', status: 'paraphrase', quote: 'Der Logos trägt und ordnet die von Natur aus vergängliche Schöpfung.' },
      ],
    },
    {
      person: 'lennox',
      role: 'als Mathematiker im Streitgespräch mit Dawkins',
      text: `Lennox weist darauf hin, dass die Frage „Wer schuf Gott?" einen geschaffenen Gott voraussetzt – und an einen solchen glaube kein Christ. Wer einen geschaffenen Gott widerlegt, widerlegt einen Gott, an den niemand glaubt. Lennox ergänzt: Die Atheisten stehen vor derselben Frage, nur in anderer Form – auch sie müssen annehmen, dass etwas (die Naturgesetze, die Energie, das Multiversum) einfach ewig existiert oder aus dem Nichts kam.`,
      sources: [
        { kind: 'fachliteratur', author: 'John C. Lennox', work: 'Gunning for God', year: '2011', status: 'paraphrase', quote: 'Die Frage nach dem Schöpfer Gottes setzt einen geschaffenen Gott voraus, an den Christen nicht glauben.' },
      ],
    },
  ],
  dialog: [
    {
      id: 'alles-braucht-ursache',
      objection: `„Wenn alles eine Ursache braucht, dann braucht auch Gott eine Ursache."`,
      objectionBy: 'Bertrand Russell (Why I Am Not a Christian, 1927)',
      answer: `Das stimmt – *wenn* alles eine Ursache bräuchte. Aber kein ernsthaftes Argument sagt das. Das Kalam-Argument sagt: „Alles, was zu existieren *beginnt*, hat eine Ursache." Das Kontingenzargument sagt: „Alles, was nicht aus der Notwendigkeit seiner eigenen Natur existiert, hat einen Grund." Gott beginnt nicht und existiert notwendig – er fällt also gar nicht unter die Prämisse.`,
      sources: [
        { kind: 'gegner', author: 'Bertrand Russell', work: 'Why I Am Not a Christian', year: '1927', status: 'paraphrase', quote: 'Russell berichtet, John Stuart Mills Autobiografie habe ihn überzeugt: Die Frage „Wer hat mich gemacht?" führe sofort zur Frage „Wer hat Gott gemacht?"; wenn alles eine Ursache haben müsse, dann auch Gott.' },
      ],
      questionsBack: [`Kannst du mir ein klassisches Gottesargument nennen, das wirklich „alles hat eine Ursache" als Prämisse hat?`],
      followUps: [
        {
          id: 'special-pleading',
          objection: `„Das ist Special Pleading. Du definierst Gott einfach so, dass er die Regel nicht betrifft."`,
          objectionBy: 'Alex O\'Connor',
          answer: `Special Pleading liegt nur vor, wenn man eine Ausnahme ohne sachlichen Grund macht. Hier gibt es einen Grund: Die Prämisse betrifft Dinge, die anfangen oder abhängig sind – und das Argument schließt gerade darauf, dass es etwas geben muss, das nicht anfängt und nicht abhängig ist. Auch du machst eine Ausnahme: Für dich ist am Ende das Universum, die Energie oder die Naturgesetze einfach da. Wir streiten also nicht darüber, ob es etwas Unverursachtes gibt, sondern was es ist.`,
          followUps: [
            {
              id: 'warum-nicht-universum-unverursacht',
              objection: `„Gut, dann sage ich eben: Das Universum ist das Unverursachte. Warum einen Schritt weiter gehen?"`,
              objectionBy: 'Sean Carroll / Graham Oppy',
              answer: `Weil das Universum genau die Merkmale hat, die etwas zu einem *verursachten* Ding machen: Nach heutiger Kosmologie hat es einen Anfang; es verändert sich ständig; es besteht aus Teilen, die alle kontingent sind; und seine Gesetze und Konstanten hätten anders sein können. Ein Unverursachtes muss dagegen ewig, unveränderlich und notwendig sein – das passt auf Gott, nicht auf ein expandierendes Universum mit zunehmender Entropie.`,
              detail: `Hier münden die Gespräche in das Kalam-Argument (Anfang) und das Kontingenzargument (Abhängigkeit). Siehe „Das kosmologische Kalam-Argument ist widerlegt" und „Das Universum ist einfach da".`,
              followUps: [
                {
                  id: 'ewiges-multiversum',
                  objection: `„Vielleicht hat unser Universum einen Anfang, aber es ist Teil eines ewigen Multiversums oder eines ewigen Zyklus."`,
                  objectionBy: 'Sean Carroll',
                  answer: `Das Borde-Guth-Vilenkin-Theorem zeigt, dass ein Universum, das im Durchschnitt expandiert – auch ein inflationäres Multiversum –, nicht ewig in die Vergangenheit reichen kann. Zyklische Modelle kämpfen mit der Entropie, die sich von Zyklus zu Zyklus aufbaut. Und selbst ein ewiges Multiversum wäre noch immer eine Ansammlung veränderlicher, kontingenter Dinge, die keine Erklärung in sich trägt. Du verschiebst die Frage, statt sie zu beantworten.`,
                  detail: `Siehe „Das Universum ist ewig oder zyklisch" und „Das Multiversum erklärt die Feinabstimmung". Ehrlich: Die Kosmologie jenseits der Planck-Zeit ist offen; deshalb ist das Kontingenzargument wichtig, das auch bei einem ewigen Universum greift.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'boeing-747',
      objection: `„Ein Designer müsste mindestens so komplex sein wie das, was er entwirft – also noch unwahrscheinlicher. Gott ist die ultimative Boeing 747. Er erklärt nichts, er verschiebt das Problem nur."`,
      objectionBy: 'Richard Dawkins (The God Delusion, Kap. 4)',
      answer: `Das Argument hat zwei Lücken. Erstens: Um eine Erklärung als beste zu erkennen, muss man sie nicht selbst erklären können – sonst wäre nie irgendetwas erklärt. Zweitens: Gott ist kein physisches System aus vielen unwahrscheinlich angeordneten Teilen, sondern Geist. Und für ein *notwendiges* Wesen ist „Unwahrscheinlichkeit" gar keine sinnvolle Kategorie – Dawkins' Rechnung passt nur auf Dinge, die durch Zufall entstehen.`,
      sources: [
        { kind: 'gegner', author: 'Richard Dawkins', work: 'The God Delusion', year: '2006', ref: 'Kap. 4', quote: `However statistically improbable the entity you seek to explain by invoking a designer, the designer himself has got to be at least as improbable. God is the Ultimate Boeing 747.`, status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'allwissender-geist-komplex',
          objection: `„Ein Geist, der jedes Teilchen im Universum kennt und steuert, muss doch unvorstellbar komplex sein."`,
          objectionBy: 'Richard Dawkins',
          answer: `Hier werden zwei Dinge verwechselt: die Fülle dessen, was jemand *weiß*, und die Zusammensetzung dessen, was jemand *ist*. Dein Wissen über tausend Dinge macht dich nicht aus tausend Teilen. Die klassische Theologie – von den Vätern bis Thomas – lehrt, dass Gott nicht aus Teilen zusammengesetzt ist. Dawkins' Begriff von Komplexität (viele Teile, unwahrscheinlich angeordnet) trifft auf ihn schlicht nicht zu.`,
          followUps: [
            {
              id: 'einfachheit-inkohaerent',
              objection: `„Die Lehre von der göttlichen Einfachheit ist doch selbst unter christlichen Philosophen umstritten – sogar Plantinga hat sie kritisiert."`,
              objectionBy: 'Graham Oppy',
              answer: `Das stimmt – Plantinga hat 1980 die *starke* thomistische Einfachheitslehre kritisiert, und darüber wird ehrlich gestritten. Aber für meine Antwort brauche ich diese starke Fassung gar nicht: Es genügt, dass Gott als immaterieller Geist nicht aus physischen Teilen besteht, die durch Zufall zusammenkommen müssten. Dawkins' Argument beruht auf der Wahrscheinlichkeit physikalischer Anordnungen – und die betrifft einen ewigen, notwendigen Geist nicht.`,
              sources: [
                { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'Does God Have a Nature?', year: '1980', status: 'paraphrase', quote: 'Kritische Prüfung der starken Lehre von der göttlichen Einfachheit.' },
              ],
            },
          ],
        },
        {
          id: 'erklaerung-der-erklaerung',
          objection: `„Eine Erklärung, die selbst unerklärt bleibt, ist keine Erklärung."`,
          objectionBy: 'Richard Dawkins',
          answer: `Dann wäre auch der Urknall keine Erklärung für die kosmische Hintergrundstrahlung, solange wir nicht wissen, was den Urknall verursacht hat – und die Evolution keine Erklärung für die Arten, solange der Ursprung des Lebens offen ist. Jede Wissenschaft erklärt mit Dingen, die selbst noch Fragen aufwerfen. Und am Ende jeder Kette steht notwendig etwas, das nicht weiter durch anderes erklärt wird – die Frage ist nur, ob es ein blindes Faktum ist oder ein notwendiges Wesen.`,
          questionsBack: [`Wenn Archäologen eine Inschrift finden, müssen sie dann erst wissen, wer den Schreiber erschaffen hat, bevor sie auf einen Schreiber schließen dürfen?`],
        },
      ],
    },
    {
      id: 'woher-kam-gott',
      objection: `„Aber irgendwoher muss Gott doch kommen. Dass etwas schon immer da war, ist unvorstellbar."`,
      objectionBy: 'Häufiger Einwand im Alltagsgespräch',
      answer: `Etwas muss schon immer da gewesen sein – das gilt für dich genauso wie für mich. Denn wenn es einmal *absolut nichts* gegeben hätte, gäbe es auch heute nichts: Aus nichts wird nichts. Die einzigen Alternativen sind also: Entweder ist etwas Ewiges der Grund von allem, oder alles kam aus dem Nichts, ohne Ursache. Unvorstellbar ist beides für uns – aber nur das Erste ist vernünftig.`,
      followUps: [
        {
          id: 'energie-schon-immer-da',
          objection: `„Dann war eben die Energie schon immer da. Energie kann nicht erzeugt und nicht vernichtet werden."`,
          objectionBy: 'Lawrence Krauss (sinngemäß) / häufiger Einwand',
          answer: `Der Energieerhaltungssatz beschreibt, was *innerhalb* eines bestehenden physikalischen Systems geschieht; er sagt nichts darüber, warum es dieses System überhaupt gibt. Im expandierenden Universum der allgemeinen Relativitätstheorie ist globale Energieerhaltung ohnehin nicht im einfachen Sinn definiert. Und der zweite Hauptsatz der Thermodynamik spricht eher *gegen* eine ewige Vergangenheit: Ein ewiges Universum müsste längst den Wärmetod erreicht haben.`,
          followUps: [
            {
              id: 'materie-statt-geist',
              objection: `„Warum sollte das Ewige ein Geist sein und nicht einfach Materie oder Naturgesetze?"`,
              objectionBy: 'Graham Oppy',
              answer: `Weil Materie veränderlich, zusammengesetzt und kontingent ist – genau die Eigenschaften, die etwas erklärungsbedürftig machen. Naturgesetze sind abstrakte Beschreibungen; sie können nichts *bewirken*. Wenn eine ewige, zeitlose Ursache eine zeitliche Wirkung hervorbringt, ist das am besten durch einen freien Willen zu verstehen, der wählt, etwas zu tun. Darum schließen die Argumente auf einen personalen Schöpfer.`,
              detail: `Siehe „Gottesbeweise beweisen höchstens einen Deisten-Gott" (Ableitung der Eigenschaften) und „Die Naturgesetze erklären sich selbst".`,
            },
          ],
        },
      ],
    },
    {
      id: 'zeitloser-geist-inkohaerent',
      objection: `„Ein ungeschaffener, zeitloser Geist ist inkohärent. Denken, Abwägen, Wollen und Handeln sind Vorgänge – sie brauchen Zeit. Ein Geist ohne Zeit könnte nichts beschließen und nichts erschaffen. Dein ‚Unverursachtes' ist ein Wort ohne Inhalt."`,
      objectionBy: "Sean Carroll / Alex O'Connor",
      answer: `Menschliches Denken ist schrittweise, weil wir endlich sind: Wir müssen Schlüsse nacheinander ziehen und Wissen erst erwerben. Ein Geist, der alles Wahre auf einmal erfasst, muss nichts erschließen; und ein Wille, der nicht zögert, muss nicht abwägen. Zeitlosigkeit heißt nicht Starre, sondern Fülle: Boethius definierte Ewigkeit als den „ganzen und vollkommenen Besitz grenzenlosen Lebens zugleich". Und manche christliche Philosophen – etwa Craig – halten Gott ohnehin nur „ohne die Schöpfung" für zeitlos und seit der Schöpfung für zeitlich.`,
      detail: `Es gibt zwei ernsthafte christliche Modelle: (1) die klassische Lehre (Boethius, Augustinus, Thomas): Gott ist schlechthin zeitlos, sein eines ewiges Wollen hat zeitliche Wirkungen; (2) das Modell von William Lane Craig: Gott ist zeitlos ohne die Schöpfung und tritt mit dem ersten Augenblick der Schöpfung in die Zeit ein. Beide zeigen, dass der Vorwurf der Inkohärenz nicht zwingend ist. Wer behauptet, Denken *müsse* zeitlich sein, verallgemeinert von endlichen Gehirnen auf jeden möglichen Geist – das ist genau die Frage, um die es geht.`,
      voices: [
        {
          person: 'boethius',
          role: 'als Philosoph der Ewigkeit',
          text: `Boethius unterscheidet zwischen endloser Dauer in der Zeit und echter Ewigkeit: Diese ist das Besitzen des ganzen Lebens in einem einzigen Jetzt, ohne Vergangenheit, die verloren ist, und ohne Zukunft, die noch aussteht. Ein solcher Geist ist nicht weniger lebendig als ein zeitlicher, sondern vollkommener lebendig.`,
          sources: [{ kind: 'kirchenvater', author: 'Boethius', work: 'Der Trost der Philosophie (De consolatione philosophiae)', ref: 'V, Prosa 6', year: 'ca. 524', status: 'paraphrase', quote: 'Ewigkeit ist der ganze und vollkommene Besitz grenzenlosen Lebens zugleich.', original: 'aeternitas igitur est interminabilis vitae tota simul et perfecta possessio' }],
        },
        {
          person: 'craig',
          role: 'als Religionsphilosoph der Zeit',
          text: `Craig hält einen statischen, zeitlosen Zustand Gottes ohne Schöpfung für kohärent und vertritt, dass Gott mit dem freien Schöpfungsakt in Beziehung zur Zeit tritt. So vermeidet er sowohl den Vorwurf eines starren Gottes als auch den eines Gottes, der eine unendliche Zeit vor der Schöpfung „gewartet" hätte.`,
          sources: [{ kind: 'fachliteratur', author: 'William Lane Craig', work: 'Time and Eternity: Exploring God\'s Relationship to Time', year: '2001', status: 'paraphrase' }],
        },
      ],
      questionsBack: [
        `Woher weißt du, dass *jeder* mögliche Geist so funktionieren muss wie ein menschliches Gehirn?`,
        `Ist ein vollkommen wissender Geist, der nichts erst erschließen muss, logisch widersprüchlich – oder nur unvorstellbar für uns?`,
      ],
      followUps: [
        {
          id: 'ursache-vor-wirkung',
          objection: `„Ursachen gehen ihren Wirkungen zeitlich voraus. Eine Ursache ‚ohne Zeit' ist ein Widerspruch in sich – so funktioniert Kausalität einfach nicht."`,
          objectionBy: 'Adolf Grünbaum / Sean Carroll',
          answer: `Nicht jede Ursache geht ihrer Wirkung zeitlich voraus. Schon Kant nannte das Beispiel einer Kugel, die auf einem Kissen liegt und gleichzeitig eine Mulde verursacht. Eine Ursache muss ihrer Wirkung nicht zeitlich, sondern *seinsmäßig* vorausgehen: Die Wirkung hängt von ihr ab, nicht umgekehrt. Der erste Augenblick der Zeit kann von einer Ursache abhängen, die nicht selbst in einer früheren Zeit liegt.`,
          detail: `Gleichzeitige Verursachung ist in der Philosophie gut bekannt (Kant, *Kritik der reinen Vernunft*, Zweite Analogie; Thomas von Aquin zur Erhaltung der Welt). Zudem ist das Argument auch physikalisch heikel: Am Anfang der Zeit gibt es kein „Vorher", in dem eine natürliche Ursache stattfinden könnte. Wer „Ursachen müssen vorausgehen" absolut setzt, schließt damit jede Erklärung des Anfangs aus – auch jede naturalistische.`,
          followUps: [
            {
              id: 'warum-nicht-frueher',
              objection: `„Dann erklär mir: Wenn Gott ewig ist, warum hat er das Universum gerade vor 13,8 Milliarden Jahren erschaffen und nicht schon früher? Was hat er die ganze Ewigkeit davor getan?"`,
              objectionBy: "Alex O'Connor",
              answer: `Die Frage setzt eine Zeit *vor* der Zeit voraus, in der Gott gewartet hätte – die gibt es nicht. Schon Augustinus antwortete auf genau diese Frage: Wo keine Zeit war, gab es auch kein „damals". Es gibt also keinen früheren Zeitpunkt, den Gott hätte wählen können; „13,8 Milliarden Jahre" misst nur den Abstand vom Anfang bis heute.`,
              detail: `Augustinus behandelt den Einwand „Was tat Gott, bevor er Himmel und Erde schuf?" ausdrücklich und lehnt die spöttische Antwort ab, Gott habe für Neugierige die Hölle vorbereitet. Seine eigentliche Antwort: Gott hat die Zeit selbst mit der Welt geschaffen, darum gab es kein „Vorher". Auch Leibniz verwendete dieses Argument gegen Clarke: Eine leere Zeit vor der Welt, in der alle Augenblicke gleich wären, ist eine Fiktion.`,
              voices: [
                {
                  person: 'augustinus',
                  role: 'als Philosoph der Zeit',
                  text: `Augustinus erkannte, dass die Frage nach dem „Vorher" der Schöpfung einen Denkfehler enthält: Sie stellt sich Gott als jemanden vor, der in einer schon laufenden Zeit wartet. Gott ist aber Schöpfer auch der Zeit; seine Ewigkeit liegt nicht vor den Zeiten, sondern über ihnen.`,
                  sources: [{ kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Bekenntnisse (Confessiones)', ref: 'XI,12,14–13,16', year: 'ca. 397–401', status: 'paraphrase', quote: 'Es gab kein „damals", wo es keine Zeit gab; Gott ist der Schöpfer aller Zeiten.' }],
                },
              ],
              followUps: [
                {
                  id: 'ewige-ursache-ewige-wirkung',
                  objection: `„Dann bleibt das Problem trotzdem: Wenn Gottes Wille zu erschaffen ewig und unveränderlich ist, müsste auch seine Wirkung ewig sein. Eine ewige, hinreichende Ursache bringt eine ewige Welt hervor – genau das sagten Aristoteles und Proklos."`,
                  objectionBy: 'Graham Oppy',
                  answer: `Das gilt für mechanische Ursachen: Ist die Bedingung erfüllt, folgt die Wirkung automatisch. Ein freier Wille aber kann von Ewigkeit her wollen, dass eine Welt *mit einem Anfang* existiert. Darum schließt die Kombination „zeitlose Ursache, zeitliche Wirkung" gerade auf eine *personale* Ursache. Dieses Argument führte schon der alexandrinische Christ Johannes Philoponos im 6. Jahrhundert gegen Proklos.`,
                  detail: `Philoponos verfasste 529 seine Schrift *Gegen Proklos über die Ewigkeit der Welt* und argumentierte, dass eine Welt mit unendlicher Vergangenheit unmöglich sei und dass der ewige Schöpfer frei eine Welt mit Anfang hervorbringe. Später griffen al-Ghazali und Bonaventura diese Argumente auf; Craig hat sie im Kalam-Argument erneuert. Ein ewiger Wille, der *eine Welt mit Anfang* will, ist keine Veränderung in Gott – das, was er will, ist von Ewigkeit her dasselbe.`,
                  voices: [
                    {
                      person: 'johannes-philoponos',
                      role: 'als alexandrinischer Philosoph gegen die Ewigkeit der Welt',
                      text: `Philoponos, Schüler des Ammonios in Alexandrien, widersprach den Neuplatonikern Proklos und Aristoteles-Kommentatoren: Die Welt sei nicht ewig, sondern habe einen Anfang, weil eine tatsächlich unendliche Reihe vergangener Ereignisse nicht durchlaufen werden könne. Der Schöpfer bringe die Welt frei hervor, nicht wie die Sonne ihr Licht mit Naturnotwendigkeit.`,
                      sources: [{ kind: 'fachliteratur', author: 'Johannes Philoponos', work: 'De aeternitate mundi contra Proclum', year: '529', status: 'paraphrase', quote: 'Widerlegung der achtzehn Argumente des Proklos für die Ewigkeit der Welt.' }],
                    },
                  ],
                  questionsBack: [`Kann ein freier Wille, der unveränderlich ist, nicht von Ewigkeit her etwas wollen, das einen Anfang hat?`],
                },
              ],
            },
          ],
        },
        {
          id: 'notwendigkeit-definitionstrick',
          objection: `„‚Gott existiert notwendig' ist ein Definitionstrick. Man kann nichts in die Existenz hineindefinieren. Ich kann auch ein ‚notwendig existierendes Einhorn' definieren."`,
          objectionBy: 'Graham Oppy',
          answer: `Richtig – aus einer Definition folgt keine Existenz, und das behauptet das Argument hier auch nicht. Die Notwendigkeit wird nicht vorausgesetzt, sondern *erschlossen*: Die Welt besteht aus kontingenten Dingen, die eine Erklärung brauchen; die Erklärung kann nicht wieder kontingent sein; also gibt es ein notwendiges Sein. Ein „notwendiges Einhorn" scheitert, weil ein Einhorn körperlich, begrenzt und veränderlich ist – also gerade die Merkmale des Kontingenten trägt.`,
          detail: `Man muss das kosmologische vom ontologischen Argument unterscheiden. Das ontologische Argument schließt aus dem Begriff Gottes auf seine Existenz (siehe „Der ontologische Gottesbeweis ist ein Wortspiel"); das Kontingenzargument schließt aus der Existenz der Welt auf einen notwendigen Grund und fragt dann, welche Eigenschaften dieser Grund haben muss. Feser zeigt in *Five Proofs*, wie aus dem Begriff eines reinen, unzusammengesetzten Seins Einheit, Unveränderlichkeit, Ewigkeit und Geistigkeit folgen.`,
          voices: [
            {
              person: 'feser',
              role: 'als thomistischer Metaphysiker',
              text: `Feser betont, dass die klassischen Argumente nicht mit dem Begriff Gottes beginnen, sondern mit alltäglichen Tatsachen – Veränderung, Zusammensetzung, Kontingenz – und erst am Ende auf ein Sein schließen, dessen Wesen sein Sein ist. Ein körperliches, begrenztes Ding kann dieses Sein nicht sein, weil es aus Teilen zusammengesetzt ist und daher selbst erklärt werden muss.`,
              sources: [{ kind: 'fachliteratur', author: 'Edward Feser', work: 'Five Proofs of the Existence of God', year: '2017', status: 'paraphrase' }],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Glaubst du, dass irgendetwas ewig existiert – oder kam alles aus dem absoluten Nichts?`,
    `Wenn die Frage „Wer schuf Gott?" berechtigt ist: Wer schuf dann das, was du für den letzten Grund hältst?`,
    `Ist ein Gott, der erschaffen wurde, überhaupt noch Gott im Sinn der Bibel?`,
    `Muss man eine Erklärung erklären können, um sie als die beste zu erkennen?`,
  ],
  avoid: [
    `„Gott hat sich selbst erschaffen." – Das ist widersprüchlich (er müsste schon existieren, um sich zu erschaffen). Richtig: Gott ist ungeschaffen.`,
    `„Das kann man mit dem Verstand nicht erfassen, das muss man glauben." – Ein unnötiger Rückzug; die Antwort ist logisch klar.`,
    `„Vor dem Urknall war Gott." – Zeitliche Sprache ist hier irreführend; besser: „Gott ist der zeitlose Grund der Zeit."`,
  ],
  concessions: [
    `Die Frage ist für viele Menschen intuitiv und ehrlich gemeint – Kinder stellen sie ebenso wie Philosophen. Sie verdient eine geduldige Antwort, keinen Spott.`,
    `Wie ein zeitloser Gott eine zeitliche Welt hervorbringt, übersteigt unsere Vorstellungskraft; die Philosophie kann zeigen, dass es kohärent ist, aber nicht, wie es „von innen" ist.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Edward Feser', work: 'Five Proofs of the Existence of God', year: '2017', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Alvin Plantinga', work: '„The Dawkins Confusion", Books & Culture', year: '2007', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Alister & Joanna Collicutt McGrath', work: 'The Dawkins Delusion?', year: '2007', status: 'paraphrase' },
    { kind: 'gegner', author: 'Richard Dawkins', work: 'The God Delusion', year: '2006', ref: 'Kap. 4', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Kausalität', 'Regress', 'Dawkins', 'Notwendiges Wesen', 'Ungeschaffen'],
  related: [
    'gottesbeweise/kalam-widerlegt',
    'gottesbeweise/kontingenz-trugschluss',
    'gottesbeweise/hoechstens-deismus',
    'kosmologie/universum-ewig-zyklisch',
    'kosmologie/universum-aus-dem-nichts',
    'physik/naturgesetze-erklaeren-sich-selbst',
  ],
};

export default claim;
