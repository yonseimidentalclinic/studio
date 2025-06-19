import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero";
import ServiceShowcase from "@/components/sections/service-showcase";
import DentistProfiles from "@/components/sections/dentist-profiles";
import TestimonialCarousel from "@/components/sections/testimonial-carousel";
import AppointmentForm from "@/components/sections/appointment-form";
import ContactLocation from "@/components/sections/contact-location";
import SmartDentalAssistant from "@/components/chatbot/smart-dental-assistant";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServiceShowcase />
        <DentistProfiles />
        <TestimonialCarousel />
        <AppointmentForm />
        <ContactLocation />
      </main>
      <Footer />
      <SmartDentalAssistant />
    </div>
  );
}

// Dummy pages for privacy policy and terms of service to avoid 404s from footer links
// In a real app, these would be actual pages.
export function PrivacyPolicyPage() {
  return (
    <div className="container py-12">
      <h1 className="font-headline text-3xl mb-4">개인정보 처리방침</h1>
      <p>이것은 개인정보 처리방침을 위한 임시 내용입니다.</p>
    </div>
  );
}

export function TermsOfServicePage() {
  return (
    <div className="container py-12">
      <h1 className="font-headline text-3xl mb-4">서비스 이용약관</h1>
      <p>이것은 서비스 이용약관을 위한 임시 내용입니다.</p>
    </div>
  );
}
