import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ServiceCardProps {
  icon: LucideIcon | React.ElementType;
  title: string;
  description: string;
  link?: string;
}

export default function ServiceCard({ icon: Icon, title, description, link = "#appointment" }: ServiceCardProps) {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      <CardHeader className="flex flex-row items-center gap-4 pb-4">
        <div className="bg-primary/10 p-3 rounded-full">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <CardTitle className="font-headline text-2xl text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-foreground/80 leading-relaxed">{description}</p>
      </CardContent>
      <div className="p-6 pt-0">
        <Button asChild variant="link" className="p-0 text-accent hover:text-accent/80">
          <Link href={link}>더 알아보기 &rarr;</Link>
        </Button>
      </div>
    </Card>
  );
}
