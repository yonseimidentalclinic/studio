import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 bg-secondary">
      <div className="container py-8 text-center text-sm text-secondary-foreground">
        <p>&copy; {currentYear} 연세 리바이브 치과. 모든 권리 보유.</p>
        <p className="mt-1">
          당신의 미소를 위해 정성껏 디자인되었습니다.
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <Link href="/privacy-policy" className="hover:text-primary transition-colors">개인정보 처리방침</Link>
          <Link href="/terms-of-service" className="hover:text-primary transition-colors">서비스 이용약관</Link>
        </div>
      </div>
    </footer>
  );
}
