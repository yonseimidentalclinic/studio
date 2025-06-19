import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary/10 via-background to-background py-20 md:py-32">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left animate-slide-up">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary">
            당신의 미소를 되찾고, <span className="text-accent">당신의 삶을 새롭게 하세요.</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80">
            연세 미 치과에서 뛰어난 치과 진료를 경험하세요. 저희 전문 의료진은 현대적이고 편안한 환경에서 포괄적인 서비스를 제공합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow bg-accent hover:bg-accent/90">
              <Link href="#appointment">진료 예약하기</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-md hover:shadow-lg transition-shadow border-primary text-primary hover:bg-primary/10">
              <Link href="#services">서비스 둘러보기</Link>
            </Button>
          </div>
        </div>
        <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl animate-fade-in animation-delay-300">
          <Image
            src="https://storage.googleapis.com/YOUR_PROJECT_ID.appspot.com/site-images/clinic-entrance.jpeg" // Firebase Storage URL로 변경
            alt="연세 미 치과 전경"
            layout="fill"
            objectFit="cover"
            data-ai-hint="clinic modern building"
            priority
          />
        </div>
      </div>
    </section>
  );
}
