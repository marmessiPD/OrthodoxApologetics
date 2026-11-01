import { useCallback, useSyncExternalStore } from 'react';

/**
 * Kleine, robuste localStorage-Schicht (funktioniert auch, wenn Speicher blockiert ist).
 */
const PREFIX = 'apologia:';
const listeners = new Map<string, Set<() => void>>();
const memory = new Map<string, string>();

function read(key: string): string | null {
  try {
    const v = localStorage.getItem(PREFIX + key);
    return v ?? memory.get(key) ?? null;
  } catch {
    return memory.get(key) ?? null;
  }
}

function write(key: string, value: string) {
  memory.set(key, value);
  try {
    localStorage.setItem(PREFIX + key, value);
  } catch {
    /* privat/blockiert – Speicher im RAM reicht */
  }
  listeners.get(key)?.forEach((l) => l());
}

function subscribe(key: string, cb: () => void) {
  let set = listeners.get(key);
  if (!set) listeners.set(key, (set = new Set()));
  set.add(cb);
  const onStorage = (e: StorageEvent) => e.key === PREFIX + key && cb();
  window.addEventListener('storage', onStorage);
  return () => {
    set!.delete(cb);
    window.removeEventListener('storage', onStorage);
  };
}

const cache = new Map<string, { raw: string | null; value: unknown }>();

function useStored<T>(key: string, fallback: T): [T, (next: T | ((prev: T) => T)) => void] {
  const sub = useCallback((cb: () => void) => subscribe(key, cb), [key]);
  const snapshot = () => {
    const raw = read(key);
    const c = cache.get(key);
    if (c && c.raw === raw) return c.value as T;
    let value: T = fallback;
    if (raw != null) {
      try {
        value = JSON.parse(raw) as T;
      } catch {
        value = fallback;
      }
    }
    cache.set(key, { raw, value });
    return value;
  };
  const value = useSyncExternalStore(sub, snapshot, () => fallback);
  const set = useCallback(
    (next: T | ((prev: T) => T)) => {
      const prevRaw = read(key);
      let prev: T = fallback;
      try {
        if (prevRaw != null) prev = JSON.parse(prevRaw) as T;
      } catch {
        /* ignore */
      }
      const v = typeof next === 'function' ? (next as (p: T) => T)(prev) : next;
      write(key, JSON.stringify(v));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [key],
  );
  return [value, set];
}

/* ---------------- Lesezeichen ---------------- */
const EMPTY: string[] = [];

export function useBookmarks() {
  const [list, setList] = useStored<string[]>('bookmarks', EMPTY);
  const toggle = useCallback(
    (ref: string) => setList((prev) => (prev.includes(ref) ? prev.filter((r) => r !== ref) : [ref, ...prev])),
    [setList],
  );
  return { bookmarks: list, isBookmarked: (ref: string) => list.includes(ref), toggle };
}

/* ---------------- Zuletzt angesehen ---------------- */
export function useRecent() {
  const [list, setList] = useStored<string[]>('recent', EMPTY);
  const push = useCallback(
    (ref: string) => setList((prev) => [ref, ...prev.filter((r) => r !== ref)].slice(0, 12)),
    [setList],
  );
  return { recent: list, push };
}

/* ---------------- Theme ---------------- */
export type Theme = 'light' | 'dark';

export function useTheme() {
  const prefersDark = typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useStored<Theme>('theme-v', prefersDark ? 'dark' : 'light');
  const apply = useCallback(
    (t: Theme) => {
      document.documentElement.classList.toggle('dark', t === 'dark');
      try {
        localStorage.setItem(PREFIX + 'theme', t);
      } catch {
        /* ignore */
      }
      setTheme(t);
    },
    [setTheme],
  );
  return { theme, setTheme: apply, toggle: () => apply(theme === 'dark' ? 'light' : 'dark') };
}
