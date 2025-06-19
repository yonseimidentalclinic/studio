import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Image from "next/image";

export default function ContactLocation() {
  return (
    <section id="contact" className="bg-secondary/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">문의하기</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            여러분의 모든 치과 관련 필요를 돕기 위해 저희가 여기 있습니다. 오늘 저희에게 연락하시거나 저희 병원을 방문해주세요.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card className="shadow-lg animate-slide-up">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">연락처 정보</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-accent mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">주소</h3>
                  <p className="text-foreground/80">123 Dental Street, Smileville, SV 45678</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-accent mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">전화</h3>
                  <a href="tel:+1234567890" className="text-foreground/80 hover:text-accent transition-colors">(123) 456-7890</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-accent mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">이메일</h3>
                  <a href="mailto:info@yonseimidental.com" className="text-foreground/80 hover:text-accent transition-colors">info@yonseimidental.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-accent mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">진료 시간</h3>
                  <ul className="text-foreground/80 list-none space-y-1">
                    <li>월요일 - 금요일: 오전 9:00 - 오후 6:00</li>
                    <li>토요일: 오전 9:00 - 오후 1:00</li>
                    <li>일요일: 휴무</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="aspect-video bg-muted rounded-lg shadow-lg overflow-hidden animate-slide-up animation-delay-200">
            <Image
              src="https://storage.googleapis.com/YOUR_PROJECT_ID.appspot.com/site-images/clinic-entrance.jpeg" // Firebase Storage URL로 변경
              alt="연세 미 치과 지도 위치"
              width={600}
              height={400}
              className="w-full h-full object-cover"
              data-ai-hint="map location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
