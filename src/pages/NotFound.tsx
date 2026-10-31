import { Link } from 'react-router';

export default function NotFound() {
  return (
    <div className="py-20 text-center">
      <p className="font-serif text-5xl font-semibold text-primary">404</p>
      <p className="mt-3 text-lg font-medium">Diese Seite gibt es (noch) nicht.</p>
      <p className="mt-1 text-sm text-muted-foreground">Vielleicht wird der Inhalt gerade erarbeitet.</p>
      <Link to="/" className="mt-5 inline-block text-sm font-medium text-primary hover:underline">
        Zur Startseite →
      </Link>
    </div>
  );
}
