# Apologia – Verteidigung des Glaubens

**Koptisch-orthodoxe Wissensdatenbank und App**, die einem theologisch ungeschulten Laien hilft, im Gespräch mit führenden Experten der Gegenseite standzuhalten – mit ehrlich belegten Argumenten, vorausgedachten Gesprächsverläufen und den Stimmen der großen Verteidiger des Glaubens: vom Apostel Paulus über Athanasius, Kyrill und Origenes bis zu Newton, James Tour und Stephen Meyer.

> „Seid aber allezeit bereit zur Verantwortung jedermann, der Grund fordert der Hoffnung, die in euch ist, und das mit Sanftmütigkeit und Furcht." – 1 Petr 3,15

## Was die App kann

| Funktion | Beschreibung |
|---|---|
| **Live-Suche** | Stichworte dessen tippen, was das Gegenüber gerade gesagt hat (⌘K / Suche) – direkt zur passenden Antwort im Gesprächsverlauf. |
| **30-Sekunden-Antwort** | Jede Behauptung mit merkbarer Kurzantwort, Kernargumenten, Rückfragen, Fallen und ehrlichen Zugeständnissen. |
| **Debatten-Simulator** | Gespräch Zug um Zug durchspielen: Was sagt der Experte als Nächstes? Was antwortet das Konzil? |
| **Gesprächsbaum** | Übersicht aller vorausgedachten Züge zur Vorbereitung. |
| **Formale Argumente** | z. B. das Islamische Dilemma mit Prämissen, Hörnern und allen Angriffen auf jede Prämisse. |
| **Konzil der Verteidiger** | Personenregister mit allen Beiträgen jeder Person quer durch die Datenbank. |
| **Quellen mit Zitierstatus** | Jede Quelle ist als *wörtlich*, *sinngemäß* oder *zu prüfen* markiert. |
| **Offline & installierbar** | Progressive Web App für Desktop (Chrome/Edge: „Installieren") und Mobil (iOS: „Zum Home-Bildschirm", Android: „App installieren"). |

## Themenfelder

Weltreligionen (Islam, Judentum, Hinduismus, Buddhismus, weitere, Pluralismus) · Christliche Konfessionen (Protestantismus, Calvinismus, Pfingstbewegung, Katholizismus, Chalcedon, liberale Theologie) · Sondergemeinschaften & Esoterik · Philosophie & Weltanschauung · Ethik, Moral & Leid · Kosmos, Physik & Mathematik · Leben, Chemie & Evolution · Mensch, Medizin & Psyche · Geschichte, Bibel & Archäologie.

Die vollständige Gliederung mit allen IDs steht in [`CONTENT_PLAN.md`](CONTENT_PLAN.md).

## Entwicklung

```bash
npm install
npm run dev          # Entwicklungsserver
npm run build        # Typprüfung + Produktions-Build (PWA) nach dist/
npm run validate     # Wissensdatenbank prüfen (IDs, Personen, Quellen, Dialogtiefe)
npm run stats        # Statistik der Wissensdatenbank
npm run check -- religionen/islam-dilemma   # einzelnen Themenblock prüfen
```

**Technik:** React 19, TypeScript, Vite, Tailwind CSS v4, Komponenten im shadcn/ReUI-Stil (Radix UI, cmdk), MiniSearch (Volltextsuche), vite-plugin-pwa (offline, installierbar).

## Inhalte schreiben und erweitern

- Datenschema: [`src/content/schema.ts`](src/content/schema.ts)
- Autorenrichtlinien (Haltung, koptische Perspektive, Zitierregeln, Dialogbäume): [`CONTENT_GUIDE.md`](CONTENT_GUIDE.md)
- Personenregister: [`src/content/people.ts`](src/content/people.ts)
- Inhalte: `src/content/topics/<kategorie>/<topic-id>/index.ts` + eine Datei pro Claim

Jede Behauptung enthält: Steelman der Gegenseite, biblische Position, koptisch-orthodoxe Lehre, Forschungsstand, 30-Sekunden-Antwort, Kernargumente, optional ein formales Argument, das Konzil der Stimmen, einen mehrstufigen Dialogbaum, Rückfragen, zu vermeidende Argumente, Zugeständnisse und Literatur.

## Veröffentlichen

Der Workflow `.github/workflows/ci.yml` validiert die Inhalte, baut die App und veröffentlicht sie bei jedem Push auf `main` über GitHub Pages (in den Repository-Einstellungen unter *Pages → Source: GitHub Actions* aktivieren). Danach ist die App unter der Pages-URL auf jedem Gerät installierbar. Für App-Store-Versionen kann der `dist/`-Build später mit Capacitor (iOS/Android) bzw. Tauri (Desktop) verpackt werden.

## Hinweis

Die Wissensdatenbank wurde mit Unterstützung künstlicher Intelligenz recherchiert und folgt strengen Zitierregeln (keine erfundenen Zitate; unsichere Angaben sind markiert). Sie ersetzt nicht das Urteil der Kirche. Wichtige Zitate bitte vor öffentlicher Verwendung an der Originalquelle prüfen.
