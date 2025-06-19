import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 bg-secondary">
      <div className="container py-8 text-center text-sm text-secondary-foreground">
        <p>&copy; {currentYear} Yonsei Revive Dental. All rights reserved.</p>
        <p className="mt-1">
          Designed with care for your smile.
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
