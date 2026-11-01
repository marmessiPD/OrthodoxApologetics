import { Bookmark } from 'lucide-react';
import { Link } from 'react-router';
import { PageHeader } from '@/components/app/Bits';
import { useKB } from '@/lib/content';
import { useBookmarks } from '@/lib/storage';
import { ClaimRow } from './Browse';

export default function Bookmarks() {
  const kb = useKB();
  const { bookmarks } = useBookmarks();
  const items = bookmarks.map((r) => kb.claimByRef.get(r)).filter(Boolean);
  return (
    <div>
      <PageHeader eyebrow={<><Bookmark className="size-3.5" /> Deine Sammlung</>} title="Gemerkt" subtitle="Behauptungen, auf die du dich vorbereiten möchtest – gespeichert auf diesem Gerät." />
      {items.length === 0 ? (
        <div className="rounded-2xl border border-dashed p-10 text-center">
          <Bookmark className="mx-auto size-8 text-muted-foreground" />
          <p className="mt-3 font-medium">Noch nichts gemerkt</p>
          <p className="mt-1 text-sm text-muted-foreground">Tippe bei einer Behauptung auf das Lesezeichen-Symbol.</p>
          <Link to="/themen" className="mt-4 inline-block text-sm font-medium text-primary hover:underline">
            Themen entdecken →
          </Link>
        </div>
      ) : (
        <div className="grid gap-2.5">{items.map((c) => <ClaimRow key={c!.ref} c={c!} />)}</div>
      )}
    </div>
  );
}
