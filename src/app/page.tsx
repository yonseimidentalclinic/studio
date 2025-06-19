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
      <h1 className="font-headline text-3xl mb-4">Privacy Policy</h1>
      <p>This is a placeholder for the Privacy Policy.</p>
    </div>
  );
}

export function TermsOfServicePage() {
  return (
    <div className="container py-12">
      <h1 className="font-headline text-3xl mb-4">Terms of Service</h1>
      <p>This is a placeholder for the Terms of Service.</p>
    </div>
  );
}

