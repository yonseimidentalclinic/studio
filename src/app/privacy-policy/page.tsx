import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container py-12 md:py-20">
        <h1 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none text-foreground/80 space-y-4">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <h2 className="font-headline text-2xl text-primary/90">Introduction</h2>
          <p>
            Welcome to Yonsei Revive Dental ("us", "we", or "our"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at info@yonseirevive.com.
          </p>
          <h2 className="font-headline text-2xl text-primary/90">Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website or otherwise when you contact us.
          </p>
          <p>
            The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use. The personal information we collect may include the following: name, phone number, email address, mailing address, and other similar information.
          </p>
          <h2 className="font-headline text-2xl text-primary/90">How We Use Your Information</h2>
          <p>
            We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
          </p>
          <ul className="list-disc pl-6">
            <li>To facilitate account creation and logon process.</li>
            <li>To post testimonials.</li>
            <li>Request feedback.</li>
            <li>To manage user accounts.</li>
            <li>To send administrative information to you.</li>
            <li>To protect our Services.</li>
            <li>To respond to user inquiries/offer support to users.</li>
          </ul>
          <h2 className="font-headline text-2xl text-primary/90">Will Your Information Be Shared With Anyone?</h2>
          <p>
            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
          </p>
          <h2 className="font-headline text-2xl text-primary/90">Changes to This Privacy Policy</h2>
          <p>
            We may update this privacy policy from time to time. The updated version will be indicated by an updated "Last updated" date and the updated version will be effective as soon as it is accessible.
          </p>
          <h2 className="font-headline text-2xl text-primary/90">Contact Us</h2>
          <p>
            If you have questions or comments about this policy, you may email us at info@yonseirevive.com or by post to:
            <br />
            Yonsei Revive Dental
            <br />
            123 Dental Street, Smileville, SV 45678
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
