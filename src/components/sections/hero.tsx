import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary/10 via-background to-background py-20 md:py-32">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left animate-slide-up">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary">
            Revitalize Your Smile, <span className="text-accent">Refresh Your Life.</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80">
            Experience exceptional dental care at Yonsei Revive Dental. Our dedicated team provides comprehensive services in a modern, comfortable environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow bg-accent hover:bg-accent/90">
              <Link href="#appointment">Book an Appointment</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-md hover:shadow-lg transition-shadow border-primary text-primary hover:bg-primary/10">
              <Link href="#services">Explore Services</Link>
            </Button>
          </div>
        </div>
        <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl animate-fade-in animation-delay-300">
          <Image 
            src="https://placehold.co/600x400.png" 
            alt="Smiling patient at Yonsei Revive Dental"
            layout="fill"
            objectFit="cover"
            data-ai-hint="dental clinic interior"
            priority
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
