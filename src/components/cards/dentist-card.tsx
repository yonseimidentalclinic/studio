import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface DentistCardProps {
  imageSrc: string;
  name: string;
  specialization: string;
  bio: string;
  imageHint?: string;
}

export default function DentistCard({ imageSrc, name, specialization, bio, imageHint = "dentist portrait" }: DentistCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 h-full">
      <div className="relative w-full h-64 md:h-72">
        <Image
          src={imageSrc}
          alt={`Photo of ${name}`}
          layout="fill"
          objectFit="cover"
          className="bg-muted"
          data-ai-hint={imageHint}
        />
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-primary">{name}</CardTitle>
        <CardDescription className="text-accent font-semibold">{specialization}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-foreground/80 leading-relaxed">{bio}</p>
      </CardContent>
    </Card>
  );
}
