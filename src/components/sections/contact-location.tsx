import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Image from "next/image";

export default function ContactLocation() {
  return (
    <section id="contact" className="bg-secondary/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Get In Touch</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            We're here to help with all your dental needs. Contact us today or visit our clinic.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card className="shadow-lg animate-slide-up">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-accent mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Address</h3>
                  <p className="text-foreground/80">123 Dental Street, Smileville, SV 45678</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-accent mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Phone</h3>
                  <a href="tel:+1234567890" className="text-foreground/80 hover:text-accent transition-colors">(123) 456-7890</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-accent mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <a href="mailto:info@yonseirevive.com" className="text-foreground/80 hover:text-accent transition-colors">info@yonseirevive.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-accent mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Office Hours</h3>
                  <ul className="text-foreground/80 list-none space-y-1">
                    <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                    <li>Saturday: 9:00 AM - 1:00 PM</li>
                    <li>Sunday: Closed</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="aspect-video bg-muted rounded-lg shadow-lg overflow-hidden animate-slide-up animation-delay-200">
            {/* Placeholder for map. Replace with actual map component if needed. */}
            <Image 
              src="https://placehold.co/600x400.png" 
              alt="Clinic location map" 
              width={600} 
              height={400} 
              className="w-full h-full object-cover"
              data-ai-hint="city map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
