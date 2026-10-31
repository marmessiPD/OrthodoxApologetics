/**
 * ============================================================================
 *  APOLOGIA – Datenschema der Wissensdatenbank
 * ============================================================================
 *
 *  Hierarchie:   Kategorie  →  Gruppe  →  Themenblock (Topic)  →  Claim  →  Dialogbaum
 *  Beispiel:     Medizin    →  Neurowissenschaften  →  "Geist = Gehirn"  →  "Bewusstsein ist nur Neuronenfeuer"  →  Einwand → Antwort → Einwand …
 *
 *  Autorenrichtlinien: siehe CONTENT_GUIDE.md im Projektstamm.
 *  Alle Texte auf Deutsch. Kirchliche/theologische Positionen aus koptisch-orthodoxer Sicht.
 *  Texte dürfen einfaches Markdown enthalten (**fett**, *kursiv*, Listen, > Zitat).
 */

/* ------------------------------------------------------------------------- */
/*  Quellen                                                                  */
/* ------------------------------------------------------------------------- */

export type SourceKind =
  | 'bibel' //          Heilige Schrift (AT/NT, inkl. Deuterokanonische Bücher)
  | 'koran' //          Koran (Sure:Vers)
  | 'hadith' //         Hadith-Sammlungen, Sira, Tafsir
  | 'juedisch' //       Talmud, Midrasch, Targum, Maimonides, Qumran
  | 'oestlich' //       Veden, Upanishaden, Bhagavad Gita, Pali-Kanon, Guru Granth Sahib …
  | 'kirchenvater' //   Väter & Schriftsteller der Alten Kirche
  | 'koptisch' //       Koptisch-orthodoxe Quellen: Päpste, Bischöfe, Synaxarium, Theologen
  | 'liturgie' //       Liturgien (Basilius, Gregorius, Kyrill), Agpeya, Psalmodie
  | 'konzil' //         Konzilsbeschlüsse, Glaubensbekenntnisse, Kanones
  | 'wissenschaft' //   Peer-reviewte Fachartikel, Fachbücher (Naturwissenschaft/Medizin)
  | 'fachliteratur' //  Theologische, philosophische, historische Fachliteratur
  | 'gegner' //         Werke der Gegenseite (Dawkins, Ehrman, Shabir Ally, Carrier …)
  | 'sonstiges';

/**
 * Zitierstatus – EHRLICHKEIT IST PFLICHT.
 *  - 'verbatim'    : wörtliches Zitat, dessen Wortlaut und Fundstelle sicher sind
 *                    (Bibel-/Koranverse, berühmte, gut belegte Zitate).
 *  - 'paraphrase'  : sinngemäße Wiedergabe der Position mit korrekter Fundstelle.
 *  - 'unverified'  : Wortlaut ODER genaue Fundstelle unsicher – muss vor Verwendung geprüft werden.
 *  Lieber 'paraphrase' als ein erfundenes Zitat! Ein Laie, der ein falsches Zitat bringt,
 *  verliert die Debatte sofort.
 */
export type QuoteStatus = 'verbatim' | 'paraphrase' | 'unverified';

export interface Source {
  kind: SourceKind;
  /** Autor, z. B. "Athanasius von Alexandrien", "James M. Tour", "Bart D. Ehrman". Bei Bibel/Koran weglassen. */
  author?: string;
  /** Werk, z. B. "Über die Menschwerdung des Logos (De Incarnatione)", "Johannes", "Sure 5 (al-Ma'ida)". */
  work: string;
  /** Fundstelle: Kapitel/Vers/Seite, z. B. "54,3", "1,1–3", "5:47", "S. 252". */
  ref?: string;
  /** Jahr/Datierung, z. B. "ca. 318", "2007", "um 180 n. Chr.". */
  year?: string;
  /** Zitat auf Deutsch (bei 'paraphrase' eine kurze sinngemäße Wiedergabe). */
  quote?: string;
  /** Optional: Originalwortlaut (Griechisch, Hebräisch, Arabisch, Koptisch, Englisch …). */
  original?: string;
  /** Übersetzung, z. B. "Elberfelder 1905", "Luther 1912", "Bubenheim/Elyas", "Paret", "eigene Übersetzung". */
  translation?: string;
  status: QuoteStatus;
  /** Optional: stabile URL (z. B. DOI, Archiv-Link, quran.com, sunnah.com, biblegateway). */
  url?: string;
  /** Kontext-Hinweis, z. B. "Ehrman ist Agnostiker – das Zugeständnis wiegt daher schwer." */
  note?: string;
}

/* ------------------------------------------------------------------------- */
/*  Personen (Verteidiger des Glaubens & Gegenspieler)                       */
/* ------------------------------------------------------------------------- */

export type Era =
  | 'biblisch' //      Propheten, Apostel (bis ca. 100)
  | 'patristisch' //   ca. 100–750
  | 'mittelalter' //   ca. 750–1500
  | 'neuzeit' //       ca. 1500–1900
  | 'modern'; //       ab 1900

export type Tradition =
  | 'koptisch' //            Koptisch-orthodox
  | 'orientalisch' //        Andere orientalisch-orthodoxe (syrisch, armenisch, äthiopisch …)
  | 'ungeteilt' //           Väter der ungeteilten Kirche (vor 451), von Kopten verehrt
  | 'orthodox' //            Byzantinisch/östlich-orthodox (chalcedonensisch)
  | 'katholisch'
  | 'evangelisch' //         Protestantisch (alle Richtungen)
  | 'anglikanisch'
  | 'messianisch' //         Messianisch-jüdisch
  | 'ostsyrisch' //          Kirche des Ostens (z. B. Timotheus I.)
  | 'christlich' //          Christ, Konfession nicht festgelegt/bekannt
  | 'theistisch'; //         Theist ohne christliches Bekenntnis (z. B. Antony Flew spät)

export interface Person {
  /** kebab-case, eindeutig, z. B. "athanasius", "james-tour". */
  id: string;
  name: string;
  /** Lebensdaten, z. B. "ca. 296–373", "geb. 1959". */
  years: string;
  era: Era;
  tradition: Tradition;
  /** z. B. "20. Papst von Alexandrien", "Professor für Chemie, Rice University". */
  title: string;
  /** Fachgebiete, in denen die Person im "Konzil" spricht. */
  fields: string[];
  /** 2–4 Sätze Kurzbiografie. */
  bio: string;
  /** Hauptwerke (für Zitate & Weiterlesen). */
  keyWorks?: string[];
  /** Ehrlicher Hinweis, z. B. "Origenes ist in der koptischen Kirche nicht als Heiliger anerkannt; seine apologetischen Werke bleiben wertvoll." */
  caveat?: string;
}

/** Vertreter der Gegenseite – werden NICHT im Personenregister geführt, sondern direkt angegeben. */
export interface Proponent {
  name: string;
  /** z. B. "Evolutionsbiologe, Oxford", "Islamischer Apologet", "Neutestamentler, UNC". */
  role: string;
  /** Wichtigstes Werk/Debatte, in der das Argument vorgebracht wird. */
  work?: string;
}

/* ------------------------------------------------------------------------- */
/*  Konzil der Verteidiger: eine Stimme                                       */
/* ------------------------------------------------------------------------- */

export interface Voice {
  /** ID aus dem Personenregister (src/content/people.ts) oder aus `newPeople` des Topics. */
  person: string;
  /** In welcher Eigenschaft die Person spricht, z. B. "als synthetischer Chemiker". */
  role?: string;
  /**
   * Das Argument dieser Person in IHREM Fachgebiet – sachlich rekonstruiert aus ihren
   * tatsächlichen Werken (KEINE erfundenen Ich-Zitate). 1–3 Absätze.
   */
  text: string;
  /** Belege. Echte Zitate hier mit status:'verbatim'. */
  sources?: Source[];
}

/* ------------------------------------------------------------------------- */
/*  Formale Argumente (z. B. Islamisches Dilemma, Kalam, Feinabstimmung)      */
/* ------------------------------------------------------------------------- */

export interface Premise {
  /** "P1: Der Koran bestätigt Tora und Evangelium als Offenbarung Gottes." */
  text: string;
  /** Begründung der Prämisse (warum der Gegner sie nicht ablehnen kann). */
  support: string;
  sources?: Source[];
}

export interface FormalArgument {
  name: string;
  /** Einzeilige Beschreibung. */
  summary?: string;
  premises: Premise[];
  /** Zwischenschritte/Folgerungen (optional). */
  inferences?: string[];
  conclusion: string;
  /** Bei Dilemmata: die Hörner (z. B. "Horn A: Die Bibel war zur Zeit Mohammeds zuverlässig …"). */
  horns?: { label: string; text: string }[];
}

/* ------------------------------------------------------------------------- */
/*  Dialogbaum – die Debatte                                                  */
/* ------------------------------------------------------------------------- */

export interface DialogNode {
  /** kebab-case, eindeutig innerhalb des Claims. */
  id: string;
  /** Was das Gegenüber (der Experte der Gegenseite) als Nächstes sagt – im O-Ton, stark formuliert. */
  objection: string;
  /** Wer diesen Einwand typischerweise vorbringt, z. B. "Shabir Ally", "Bart Ehrman", "Richard Dawkins". */
  objectionBy?: string;
  /** Falls sich der Einwand gegen eine Prämisse des formalen Arguments richtet (1-basiert). */
  targetsPremise?: number;
  /** Die Kernantwort: 2–5 Sätze, präzise, sofort verwendbar. */
  answer: string;
  /** Ausführliche Begründung (Markdown erlaubt). */
  detail?: string;
  /** Welche Verteidiger hier antworten. */
  voices?: Voice[];
  sources?: Source[];
  /** Rückfragen, die man dem Gegenüber an dieser Stelle stellen sollte. */
  questionsBack?: string[];
  /** Mögliche nächste Züge des Gegenübers (Baum, empfohlen 2–4 Ebenen tief). */
  followUps?: DialogNode[];
}

/* ------------------------------------------------------------------------- */
/*  Claim – eine typische Behauptung/Frage der Gegenseite                     */
/* ------------------------------------------------------------------------- */

export interface Position {
  /** 2–5 Sätze Zusammenfassung. */
  summary: string;
  /** Optionale Vertiefung (Markdown). */
  detail?: string;
  sources: Source[];
}

export interface Claim {
  /** kebab-case, eindeutig innerhalb des Topics. */
  id: string;
  /** Die Behauptung/Frage so, wie sie in Debatten fällt: "Die Bibel wurde verfälscht." */
  title: string;
  /** Führende Vertreter dieses Arguments. */
  proponents: Proponent[];
  /** Die STÄRKSTE, fairste Fassung des Einwands (Steelman) – so, wie ein Top-Experte ihn bringen würde. */
  steelman: string;
  /** Was sagt der biblische Text tatsächlich? (Exegese, Kontext, Missverständnisse aufklären) */
  biblical: Position;
  /** Lehre der koptisch-orthodoxen Kirche / Kirchenväter zu diesem Punkt. */
  church?: Position;
  /** Was die Wissenschaft / Gegenseite tatsächlich sagt (ehrlich, inkl. Datenlage, Konsens, offene Fragen). */
  opposingView?: Position;
  /** 30-Sekunden-Antwort für den Laien – klar, sofort einsetzbar. */
  quickAnswer: string;
  /** 3–7 Kernargumente. */
  keyPoints: string[];
  /** Das formale Argument, falls sinnvoll (Syllogismus, Dilemma, Abduktion …). */
  argument?: FormalArgument;
  /** Konzil der Verteidiger – mehrere Stimmen aus verschiedenen Epochen & Fachgebieten. */
  voices: Voice[];
  /** Der Debattenverlauf: erwartete Einwände und Antworten (Baum). */
  dialog: DialogNode[];
  /** Sokratische Fragen, die man dem Gegenüber stellen sollte. */
  questionsToAsk?: string[];
  /** Schwache/falsche Argumente, die Christen NICHT benutzen sollten (sonst verliert man). */
  avoid?: string[];
  /** Was man ehrlich zugestehen muss – erhöht die Glaubwürdigkeit. */
  concessions?: string[];
  /** Weiterführende Literatur. */
  furtherReading?: Source[];
  /** 1 = Einstieg, 2 = Fortgeschritten, 3 = Experten-Debatte. */
  difficulty: 1 | 2 | 3;
  tags?: string[];
  /** Querverweise auf andere Claims/Topics: "topic-id/claim-id" oder "topic-id" (IDs aus CONTENT_PLAN.md). */
  related?: string[];
}

/* ------------------------------------------------------------------------- */
/*  Themenblock                                                               */
/* ------------------------------------------------------------------------- */

export type CategoryId =
  | 'religionen'
  | 'konfessionen'
  | 'sondergemeinschaften'
  | 'philosophie'
  | 'ethik'
  | 'kosmos'
  | 'leben'
  | 'mensch'
  | 'geschichte';

export interface Topic {
  /** kebab-case, global eindeutig, z. B. "islam-dilemma". */
  id: string;
  category: CategoryId;
  /** Gruppe innerhalb der Kategorie, z. B. "Islam", "Neurowissenschaften", "Evolutionsbiologie". */
  group: string;
  title: string;
  subtitle: string;
  /** Name eines lucide-Icons in kebab-case, z. B. "moon-star", "atom", "dna", "brain". */
  icon: string;
  /** Überblick über die Debattenlandschaft (Markdown, 1–4 Absätze). */
  overview: string;
  /** Gesamtstrategie für Gespräche in diesem Themenblock (Markdown). */
  strategy: string;
  /** Führende Experten der Gegenseite in diesem Bereich. */
  keyOpponents: Proponent[];
  claims: Claim[];
  /** Personen, die im zentralen Register fehlen (werden automatisch zusammengeführt). */
  newPeople?: Person[];
  /** Reihenfolge innerhalb der Gruppe (klein = weiter oben). */
  order?: number;
}

/* ------------------------------------------------------------------------- */
/*  Kategorien                                                                */
/* ------------------------------------------------------------------------- */

export interface Category {
  id: CategoryId;
  title: string;
  subtitle: string;
  icon: string;
  /** Tailwind-kompatibler Akzent (Name eines CSS-Tokens). */
  accent: string;
  /** Gruppen in gewünschter Reihenfolge. */
  groups: string[];
}
