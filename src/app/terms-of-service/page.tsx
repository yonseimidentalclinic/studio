import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container py-12 md:py-20">
        <h1 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-8">Terms of Service</h1>
        <div className="prose prose-lg max-w-none text-foreground/80 space-y-4">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <h2 className="font-headline text-2xl text-primary/90">1. Agreement to Terms</h2>
          <p>
            By accessing or using our website and services, you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of the terms, then you may not access the service.
          </p>
          <h2 className="font-headline text-2xl text-primary/90">2. Services</h2>
          <p>
            Yonsei Revive Dental provides dental information and appointment booking services. The information provided on this website is for general informational purposes only and does not constitute medical advice.
          </p>
          <h2 className="font-headline text-2xl text-primary/90">3. User Responsibilities</h2>
          <p>
            You are responsible for providing accurate information when booking appointments or using our services. You agree not to use the website for any unlawful purpose.
          </p>
          <h2 className="font-headline text-2xl text-primary/90">4. Intellectual Property</h2>
          <p>
            The content, layout, design, data, databases and graphics on this website are protected by intellectual property laws and are owned by Yonsei Revive Dental, unless otherwise stated.
          </p>
          <h2 className="font-headline text-2xl text-primary/90">5. Limitation of Liability</h2>
          <p>
            Yonsei Revive Dental will not be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
          </p>
          <h2 className="font-headline text-2xl text-primary/90">6. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page.
          </p>
           <h2 className="font-headline text-2xl text-primary/90">7. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at info@yonseirevive.com.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
