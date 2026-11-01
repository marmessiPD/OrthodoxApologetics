import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Entfernt einfaches Markdown für Vorschauen und Suche. */
export function plain(md: string | undefined, max?: number): string {
  if (!md) return '';
  const s = md
    .replace(/\*\*|__|\*|_|`|>|#+\s/g, '')
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
  return max && s.length > max ? s.slice(0, max - 1).trimEnd() + '…' : s;
}

export function initials(name: string): string {
  let cleaned = name.replace(/\(.*?\)/g, '');
  const titles = /^(Hl\.|Papst|Vater|Bischof|Metropolit|Apostel|Evangelist|und|Sir|Die|Erzdiakon)\s+/i;
  while (titles.test(cleaned)) cleaned = cleaned.replace(titles, '');
  cleaned = cleaned
    .replace(/[^\p{L}\s-]/gu, ' ')
    .trim();
  const parts = cleaned.split(/\s+/).filter((p) => p.length > 1 && p[0] === p[0].toUpperCase());
  if (!parts.length) return name.slice(0, 2).toUpperCase();
  return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase();
}

export function pluralize(n: number, one: string, many: string) {
  return `${n.toLocaleString('de-DE')} ${n === 1 ? one : many}`;
}
