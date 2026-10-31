# Autorenrichtlinien für die Wissensdatenbank „Apologia"

Diese Richtlinien gelten für alle, die Inhalte schreiben – Menschen wie KI-Agenten.
Schema: `src/content/schema.ts` (lies es vollständig, die JSDoc-Kommentare sind verbindlich).
Inhaltsplan mit allen IDs: `CONTENT_PLAN.md`. Personenregister: `src/content/people.ts`.

---

## 1. Auftrag und Zielgruppe

Die App soll einen **theologisch ungeschulten Laien** befähigen, im Gespräch mit **führenden Experten der Gegenseite** (Islamgelehrte, Rabbiner, Evolutionsbiologen, Neutestamentler, Philosophen …) standzuhalten. Dafür braucht er:

1. die **stärkste Fassung** des gegnerischen Arguments (Steelman) – damit ihn nichts überrascht,
2. eine **sofort verwendbare Antwort** (30 Sekunden),
3. den **Debattenverlauf**: Was sagt der Experte als Nächstes? Und was antworte ich dann? (Dialogbaum),
4. **saubere Belege** mit Fundstellen, die einer Überprüfung standhalten,
5. die Stimmen der großen Verteidiger des Glaubens – vom Apostel Paulus über Athanasius und Kyrill bis zu James Tour und Stephen Meyer – jeweils **in ihrem Fachgebiet**.

Leitvers: *„Seid allezeit bereit zur Verantwortung jedermann, der Grund fordert der Hoffnung, die in euch ist, und das mit Sanftmütigkeit und Furcht."* (1 Petr 3,15, Luther 1912)

## 2. Haltung – stark in der Sache, sanft im Ton

- **Wasserdicht heißt ehrlich.** Ein Argument ist nur dann unangreifbar, wenn jeder mögliche Gegenzug bereits bedacht ist. Deshalb: Gegenpositionen fair und in ihrer stärksten Form darstellen, nichts verschweigen, nichts übertreiben.
- **Keine Polemik, kein Spott, keine Herabsetzung von Personen.** Muslime, Juden, Atheisten, Protestanten usw. sind Ebenbilder Gottes. Die koptische Kirche lebt seit Jahrhunderten unter schwierigen Bedingungen ein Zeugnis der Liebe – diesen Geist tragen die Texte. Hart darf die **Logik** sein, nie der Ton.
- **Zugeständnisse machen** (`concessions`), wo die Gegenseite recht hat. Das erhöht die Glaubwürdigkeit enorm.
- **Schwache Argumente benennen** (`avoid`), die Christen oft benutzen und mit denen sie Debatten verlieren (z. B. „Evolution ist nur eine Theorie", „NASA hat einen fehlenden Tag gefunden", „Darwin hat auf dem Sterbebett widerrufen").
- Bei sensiblen Themen (Sexualethik, Abtreibung, Leid) immer auch die **pastorale** Dimension: Die Wahrheit wird in Liebe gesagt (Eph 4,15).

## 3. Koptisch-orthodoxe Perspektive (verbindlich)

Alles Kirchliche und Theologische wird aus Sicht der **koptisch-orthodoxen Kirche** dargestellt. Kernpunkte:

- **Dreieinigkeit:** ein Gott, ein Wesen (Usia), drei Hypostasen. Nizäno-Konstantinopolitanum **ohne Filioque** – der Geist geht vom Vater aus (Joh 15,26).
- **Christologie (miaphysitisch):** Nach dem hl. Kyrill „eine fleischgewordene Natur des Gott-Logos" – Gottheit und Menschheit sind geeint *ohne Vermischung, ohne Verwandlung, ohne Vermengung und ohne Trennung* (Bekenntnis am Ende der Liturgie). Die Kirche verwirft Nestorius (zwei Personen) **und** Eutyches (Aufgehen der Menschheit). Sie ist **nicht monophysitisch**. Die gemeinsamen Erklärungen mit den östlich-orthodoxen Kirchen (1989/1990) zeigen den gleichen Glauben in unterschiedlicher Terminologie.
- **Theotokos:** Maria ist Gottesgebärerin (Ephesus 431), immerwährende Jungfrau, hoch verehrt; aber **keine** unbefleckte Empfängnis im römisch-katholischen Sinn.
- **Ökumenische Konzilien:** Die koptische Kirche anerkennt **Nizäa (325), Konstantinopel (381) und Ephesus (431)**.
- **Heil:** Durch Menschwerdung, Kreuz und Auferstehung Christi. Es wird empfangen durch Glauben, Taufe und das Leben in der Kirche (Sakramente, Buße, gute Werke als Frucht und Mitwirkung) – **Synergie** von Gnade und freiem Willen, Wachstum in der Vereinigung mit Gott (Athanasius: „Er wurde Mensch, damit wir vergöttlicht würden", De Inc. 54). Weder „allein durch den Glauben" noch Verdienst aus eigener Kraft. Grundlegend: Papst Schenuda III., *Das Heil im orthodoxen Verständnis*.
- **Sieben Sakramente:** Taufe (dreimaliges Untertauchen), Myronsalbung, Eucharistie (wahrer Leib und wahres Blut), Buße und Beichte, Krankensalbung, Ehe, Priestertum.
- **Schrift und Tradition:** Die Heilige Schrift ist das inspirierte Wort Gottes und wird in der Kirche, mit den Vätern, der Liturgie und den Konzilien gelesen. Der Kanon umfasst die **deuterokanonischen Bücher**.
- **Erbsünde:** Alle Menschen erben die Folgen der Sünde Adams (Tod, Verderbnis, Neigung zur Sünde); deshalb werden auch Kinder getauft. Akzente unterscheiden sich vom augustinisch-westlichen Schuldverständnis – vorsichtig formulieren.
- **Eschatologie:** Wiederkunft Christi, allgemeine Auferstehung, Gericht, ewiges Leben und ewige Strafe. **Kein Fegefeuer**, aber Gebet für die Entschlafenen. **Keine Allversöhnung** als Dogma.
- **Heilige, Ikonen, Reliquien, Fasten** (ca. 200 Fastentage im Jahr, Mittwoch/Freitag), Stundengebet der **Agpeya**.
- **Schöpfung:** Gott schuf alles aus dem Nichts; der Mensch ist nach Gottes Bild mit vernunftbegabter Seele geschaffen; **Adam und Eva sind reale Personen**, der Sündenfall ist real. Über **Erdalter und biologische Mechanismen** gibt es **kein Dogma**; die Väter lasen Genesis unterschiedlich (Basilius eher wörtlich, Augustinus und die Alexandriner auch geistlich). Hauptlinie der App: Kritik am **ungelenkten, materialistischen** Darwinismus und an naturalistischen Ursprungstheorien (Tour, Meyer, Behe, Axe, Bechly …). Dabei fair kennzeichnen, wo Christen unterschiedlicher Meinung sind (z. B. theistische Evolution) und was Dogma vs. offene Frage ist.
- **Schriftauslegung:** Alexandrinische Tradition – wörtlicher **und** geistlicher Sinn, christozentrisch.
- **Väter mit Vorbehalt:** Origenes und Tertullian dürfen für Apologetik zitiert werden, nicht als Lehrautorität. Westliche Theologen (Augustinus mit Einschränkung, Thomas, Anselm) und protestantische/katholische Apologeten werden für Philosophie, Wissenschaft und Geschichte herangezogen – in Fragen, in denen ihre Konfession von der koptischen Lehre abweicht, **nicht** als Autorität.
- Arabischsprachige Christen (auch Kopten) nennen Gott „Allah". Das Gottes**verständnis** von Islam und Christentum unterscheidet sich trotzdem grundlegend.

## 4. Zitier- und Quellenregeln (das Wichtigste!)

Ein Laie, der ein **erfundenes oder falsch zugeordnetes Zitat** bringt, hat die Debatte sofort verloren. Deshalb:

- **Niemals Zitate erfinden.** Kein erfundener Wortlaut, keine erfundenen Seitenzahlen, keine erfundenen URLs.
- `status: 'verbatim'` **nur**, wenn Wortlaut **und** Fundstelle sicher sind (Bibel- und Koranverse, berühmte, vielfach belegte Zitate).
- `status: 'paraphrase'` für sinngemäße Wiedergaben (Normalfall bei modernen Autoren). Fundstelle so genau wie sicher möglich (Werk + Kapitel; Seite nur, wenn sicher).
- `status: 'unverified'`, wenn Wortlaut oder Fundstelle unsicher sind. Lieber so markieren als raten.
- **Prüfen mit WebSearch/WebFetch:** Verifiziere gezielt wichtige oder unsichere Zitate, Zahlen, Daten und Hadith-Nummern (ca. 10–30 Suchen pro Paket). Was nicht verifizierbar ist, wird `paraphrase` oder `unverified`.
- **Bibel:** Fundstelle immer (`work: 'Johannes', ref: '1,1–3'`, deutsche Schreibweise mit Komma). Wörtlich bevorzugt aus gemeinfreien Übersetzungen: **Luther 1912**, **Elberfelder 1905**, **Schlachter 1951** – `translation` angeben. Wenn du den genauen Wortlaut einer Übersetzung nicht sicher weißt: sinngemäß + `status: 'paraphrase'`.
- **Koran:** `work: 'Sure 5 (al-Ma\'ida)', ref: '5:47'`. Übersetzung angeben (Bubenheim/Elyas, Paret, Khoury) oder sinngemäß. Schlüsselbegriffe arabisch transliteriert in `original` (z. B. „yuḥarrifūna l-kalima ʿan mawāḍiʿihi"). URL-Muster: `https://quran.com/5/47`.
- **Hadith:** Sammlung + Nummer nach sunnah.com-Zählung (z. B. „Sahih al-Bukhari 4987"), URL-Muster `https://sunnah.com/bukhari:4987`. Nummer nur, wenn sicher (sonst Buch/Kapitel nennen und `unverified`).
- **Kirchenväter:** Werk + Buch/Kapitel/Abschnitt (z. B. „De Incarnatione 54,3", „Contra Celsum II,56", „Adversus Haereses III,11,8").
- **Moderne Fachliteratur:** Autor, Titel, Jahr; Fachartikel mit Zeitschrift/Jahrgang (DOI, wenn sicher).
- **Gegner korrekt zitieren:** Werke der Gegenseite mit `kind: 'gegner'`. Ihre Position nie verzerren.
- Originalsprache (`original`) ist erwünscht bei Schlüsselstellen (Griechisch, Hebräisch, Arabisch, Koptisch, Englisch).
- Kurze Zitate (Zitatrecht) – keine langen urheberrechtlich geschützten Passagen.

## 5. Das Konzil der Verteidiger (`voices`)

- Jede Stimme ist eine **reale Person** aus `people.ts` (oder neu in `newPeople` des Topics – mit korrekten, nachprüfbaren Daten; im Zweifel `years: 'zeitgenössisch'`).
- Jede Person spricht **in ihrem Fachgebiet**: Tour zur Chemie, Meyer zur Information, Athanasius zur Inkarnation, Kyrill zur Christologie, Origenes gegen Kelsos, Zakaria Botros zum Koran, Lukas als Historiker …
- `text` ist eine **sachliche Rekonstruktion ihres tatsächlichen Arguments** aus ihren Werken – **keine erfundenen Ich-Zitate**. Formuliere in der dritten Person oder neutral („Tour weist darauf hin, dass …", „Für Athanasius ist entscheidend …"). Echte Zitate gehören in `sources` mit `status: 'verbatim'`.
- Mische die Epochen: Ideal sind 3–6 Stimmen pro Claim, z. B. ein Apostel/Kirchenvater + ein koptischer Theologe + ein moderner Fachexperte.
- Die Debatte soll klingen, als hätten sich die größten Köpfe des Christentums zusammengesetzt, um gemeinsam auf jede Frage zu antworten.

## 6. Der Dialogbaum (`dialog`) – das Herzstück

- Simuliere eine **echte Debatte mit einem Top-Experten**. Jeder `objection` ist so formuliert, wie z. B. Shabir Ally, Bart Ehrman, Richard Dawkins, Jerry Coyne, Lee Cronin, Tovia Singer, Yasir Qadhi, Mohammed Hijab, Sean Carroll, Graham Oppy oder Robert Sapolsky es tatsächlich sagen würde (`objectionBy`).
- `answer`: 2–5 Sätze, **präzise und sofort sprechbar**. Danach `detail` mit der vollständigen Begründung.
- `followUps`: die **nächsten realistischen Züge** des Gegenübers nach dieser Antwort. Denke „Schachzüge" voraus.
- **Tiefe:** Jeder Claim mindestens 3 Einstiegs-Einwände, jeweils mit Folgezügen; Ziel **2–4 Ebenen**. Kernargumente (★ im Plan) **≥ 4 Ebenen und ≥ 15 Knoten**.
- `questionsBack`: Rückfragen, die das Gegenüber in Erklärungsnot bringen (sokratisch, fair).
- Bei formalen Argumenten: `targetsPremise` angeben, welche Prämisse angegriffen wird – so sieht der Nutzer, dass **jede** Prämisse verteidigt ist.
- Für Dilemmata (z. B. Islamisches Dilemma) müssen **alle bekannten Fluchtwege** als Knoten auftauchen und geschlossen werden.

## 7. Feldanforderungen pro Claim

| Feld | Anforderung |
|---|---|
| `title` | Die Behauptung im O-Ton der Gegenseite (aus `CONTENT_PLAN.md`) |
| `proponents` | 2–5 reale Vertreter mit Rolle und Werk |
| `steelman` | 1 starker Absatz – so überzeugend, wie der beste Gegner es sagen würde |
| `biblical` | Was sagt der Text wirklich? Kontext, Ursprache, Missverständnisse. ≥ 2 Quellen |
| `church` | Koptisch-orthodoxe Lehre / Väter (bei theologischen Themen Pflicht) |
| `opposingView` | Bei wissenschaftlichen/historischen Themen Pflicht: ehrlicher Stand der Forschung inkl. Konsens und offener Fragen |
| `quickAnswer` | 2–4 Sätze, die ein Laie auswendig sagen kann |
| `keyPoints` | 4–7 Kernargumente, je 1–2 Sätze |
| `argument` | Wo sinnvoll: formales Argument mit Prämissen und Begründung |
| `voices` | 3–6 Stimmen aus verschiedenen Epochen/Fächern |
| `dialog` | siehe Abschnitt 6 |
| `questionsToAsk` | 3–6 Fragen |
| `avoid` | 2–4 schwache Argumente |
| `concessions` | 1–3 ehrliche Zugeständnisse |
| `furtherReading` | 2–5 Titel |
| `difficulty` | 1 Einstieg · 2 Fortgeschritten · 3 Experten |
| `related` | Querverweise `topic-id/claim-id` auf andere Claims aus dem Plan |

Topic-Felder: `overview` (Debattenlandschaft, 2–4 Absätze), `strategy` (Gesprächsstrategie für diesen Themenblock, konkrete Reihenfolge, Fallen), `keyOpponents` (die führenden Köpfe der Gegenseite).

## 8. Technisches Format

```
src/content/topics/<kategorie>/<topic-id>/
  index.ts          ← export default Topic (importiert alle Claims)
  <claim-id>.ts     ← export default Claim (eine Datei pro Claim)
```

**Claim-Datei:**

```ts
import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'beispiel-claim',
  title: `„Die Behauptung im O-Ton."`,
  // …
};

export default claim;
```

**Topic-Datei (`index.ts`):**

```ts
import type { Topic } from '../../../schema.ts';
import beispielClaim from './beispiel-claim.ts';

const topic: Topic = {
  id: 'topic-id',
  category: 'religionen',
  group: 'Islam',
  order: 1,
  title: `…`,
  subtitle: `…`,
  icon: 'scale',
  overview: `…`,
  strategy: `…`,
  keyOpponents: [{ name: 'Shabir Ally', role: 'Islamischer Apologet, Let the Quran Speak' }],
  claims: [beispielClaim],
};

export default topic;
```

**Schreibregeln:**
- Verwende für **alle** Texte **Backtick-Template-Strings** (`` `…` ``). Darin **keine Backticks** und **kein `${`**. So sind Anführungszeichen und Apostrophe (al-Ma'ida, Mu'tazila) problemlos.
- Deutsche Anführungszeichen „…" und ‚…', Gedankenstrich –, Bibelstellen „Joh 1,1".
- Markdown erlaubt (**fett**, *kursiv*, Listen, `>` Zitat). Keine Überschriften der Ebene 1–2 in Texten.
- Ansprache des Nutzers (Strategie, Tipps) in der **Du-Form**; Rückfragen an das Gegenüber ebenfalls in Du-Form.
- Eine Claim-Datei hat typischerweise 250–700 Zeilen. Schreibe **eine Datei pro Write-Aufruf**.

**Prüfen (Pflicht, bevor du fertig bist):**

```bash
npm run check -- <kategorie>/<topic-id> [<kategorie>/<topic-id> …]
```

Behebe alle Fehler; Warnungen (zu wenige Stimmen, zu flacher Dialog) möglichst ebenfalls. Bearbeite **nur deine eigenen Ordner**. Ändere niemals `schema.ts`, `people.ts`, `categories.ts`, `package.json` oder Dateien anderer Pakete. Fehlende Personen gehören in `newPeople` deines Topics.

## 9. Qualitäts-Checkliste

- [ ] Jede Prämisse, jeder Fluchtweg des Gegners hat eine Antwort.
- [ ] Kein erfundenes Zitat; Status ehrlich gesetzt; wichtige Angaben per WebSearch geprüft.
- [ ] Koptisch-orthodoxe Lehre korrekt (Christologie, Heil, Sakramente, kein Filioque).
- [ ] Steelman ist wirklich stark; Zugeständnisse sind ehrlich.
- [ ] Antworten sind für einen Laien sofort sprechbar.
- [ ] `npm run check` für deine Topics ohne Fehler.
