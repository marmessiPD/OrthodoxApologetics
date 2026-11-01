import { Bookmark, Compass, Home, Info, LayoutGrid, Moon, Search, Sun, Users } from 'lucide-react';
import { NavLink, Outlet, ScrollRestoration, useLocation } from 'react-router';
import { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { Kbd } from '@/components/ui/misc';
import { useKBMaybe } from '@/lib/content';
import { categories } from '@/content/categories';
import { DynIcon } from '@/lib/icons';
import { useTheme } from '@/lib/storage';
import { cn } from '@/lib/utils';
import { LogoMark } from './Logo';
import { openSearch, SearchCommand, SearchHotkeys, SearchPrewarm } from './Search';
import { PageSkeleton } from './Loading';

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <Button variant="ghost" size="icon-sm" onClick={toggle} aria-label="Farbschema wechseln">
      {theme === 'dark' ? <Sun /> : <Moon />}
    </Button>
  );
}

const mainNav = [
  { to: '/', label: 'Start', icon: Home, end: true },
  { to: '/themen', label: 'Alle Themen', icon: LayoutGrid },
  { to: '/konzil', label: 'Konzil der Verteidiger', icon: Users },
  { to: '/gemerkt', label: 'Gemerkt', icon: Bookmark },
  { to: '/ueber', label: 'Methodik & Haltung', icon: Info },
];

function Sidebar() {
  const kb = useKBMaybe();
  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-[272px] flex-col border-r bg-card/60 backdrop-blur lg:flex">
      <NavLink to="/" className="flex items-center gap-3 px-5 pb-4 pt-5">
        <LogoMark />
        <div>
          <div className="font-serif text-lg font-semibold leading-none">Apologia</div>
          <div className="mt-1 text-[11px] text-muted-foreground">Koptisch-orthodoxe Apologetik</div>
        </div>
      </NavLink>
      <nav className="flex-1 overflow-y-auto px-3 pb-6">
        <ul className="space-y-0.5">
          {mainNav.map((n) => (
            <li key={n.to}>
              <NavLink
                to={n.to}
                end={n.end}
                className={({ isActive }) =>
                  cn('flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition', isActive ? 'bg-primary-soft text-primary' : 'text-foreground/80 hover:bg-muted')
                }
              >
                <n.icon className="size-4" />
                {n.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="mb-1 mt-6 px-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Themenfelder</div>
        <ul className="space-y-0.5">
          {categories.map((c) => (
            <li key={c.id}>
              <NavLink
                to={`/kategorie/${c.id}`}
                className={({ isActive }) => cn('flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition', c.accent, isActive ? 'bg-muted font-medium' : 'text-foreground/80 hover:bg-muted')}
              >
                <DynIcon name={c.icon} className="size-4 text-cat" />
                <span className="flex-1 truncate">{c.title}</span>
                <span className="text-[11px] tabular-nums text-muted-foreground">{kb ? (kb.stats.byCategory[c.id]?.claims ?? 0) : ''}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="border-t px-5 py-3 text-[11px] leading-snug text-muted-foreground">„Seid allezeit bereit zur Verantwortung …" – 1 Petr 3,15</div>
    </aside>
  );
}

function Header() {
  return (
    <header className="safe-top sticky top-0 z-20 border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center gap-2 px-4 md:h-16">
        <NavLink to="/" className="flex items-center gap-2.5 lg:hidden">
          <LogoMark className="size-8" />
          <span className="font-serif text-lg font-semibold">Apologia</span>
        </NavLink>
        <button
          onClick={() => openSearch()}
          className="ml-auto hidden h-10 w-full max-w-md items-center gap-2 rounded-xl border bg-card px-3 text-sm text-muted-foreground shadow-xs transition hover:border-primary/30 sm:flex lg:ml-0"
        >
          <Search className="size-4" />
          <span className="flex-1 text-left">Einwand, Thema oder Person suchen …</span>
          <Kbd>⌘K</Kbd>
        </button>
        <div className="ml-auto flex items-center gap-1">
          <Button variant="ghost" size="icon-sm" className="sm:hidden" onClick={() => openSearch()} aria-label="Suchen">
            <Search />
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

const mobileNav = [
  { to: '/', label: 'Start', icon: Home, end: true },
  { to: '/themen', label: 'Themen', icon: Compass },
  { to: '#suche', label: 'Suche', icon: Search },
  { to: '/konzil', label: 'Konzil', icon: Users },
  { to: '/gemerkt', label: 'Gemerkt', icon: Bookmark },
];

function BottomNav() {
  return (
    <nav className="safe-bottom fixed inset-x-0 bottom-0 z-30 border-t bg-background/90 backdrop-blur-md lg:hidden">
      <ul className="mx-auto grid max-w-md grid-cols-5">
        {mobileNav.map((n) =>
          n.to === '#suche' ? (
            <li key={n.to}>
              <button onClick={() => openSearch()} className="flex w-full flex-col items-center gap-0.5 py-2 text-[10.5px] font-medium text-muted-foreground">
                <span className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground shadow-md">
                  <n.icon className="size-[18px]" />
                </span>
              </button>
            </li>
          ) : (
            <li key={n.to}>
              <NavLink
                to={n.to}
                end={n.end}
                className={({ isActive }) => cn('flex flex-col items-center gap-1 py-2.5 text-[10.5px] font-medium', isActive ? 'text-primary' : 'text-muted-foreground')}
              >
                <n.icon className="size-5" />
                {n.label}
              </NavLink>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
}

export function Shell() {
  const loc = useLocation();
  return (
    <div className="min-h-dvh">
      <Sidebar />
      <div className="lg:pl-[272px]">
        <Header />
        <main className="mx-auto max-w-5xl px-4 pb-28 pt-6 lg:pb-16 lg:pt-8">
          <Suspense key={loc.pathname} fallback={<PageSkeleton />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
      <BottomNav />
      <SearchHotkeys />
      <SearchPrewarm />
      <SearchCommand />
      <ScrollRestoration getKey={(l) => l.pathname} />
    </div>
  );
}
