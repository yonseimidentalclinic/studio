import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Stethoscope } from 'lucide-react';

const navLinks = [
  { href: '#services', label: '서비스' },
  { href: '#team', label: '의료진' },
  { href: '#testimonials', label: '고객 후기' },
  { href: '#contact', label: '문의하기' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="연세 리바이브 치과 홈">
          <Stethoscope className="h-8 w-8 text-primary" />
          <span className="font-headline text-2xl font-semibold text-primary">연세 리바이브 치과</span>
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild variant="default" size="sm" className="shadow-md hover:shadow-lg transition-shadow">
            <Link href="#appointment">예약하기</Link>
          </Button>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">네비게이션 메뉴 토글</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="grid gap-6 text-lg font-medium mt-8">
            <Link href="/" className="flex items-center gap-2 mb-4" aria-label="연세 리바이브 치과 홈">
              <Stethoscope className="h-7 w-7 text-primary" />
              <span className="font-headline text-xl font-semibold text-primary">연세 리바이브 치과</span>
            </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground/70 transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild variant="default" className="mt-4 shadow-md hover:shadow-lg transition-shadow">
                <Link href="#appointment">예약하기</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
