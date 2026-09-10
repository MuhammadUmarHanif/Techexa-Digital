import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-6 py-32 max-w-4xl">
        <h1 className="font-clash text-4xl md:text-5xl font-bold mb-8 text-gradient">Privacy Policy</h1>
        <p className="text-muted-foreground mb-12">Last Updated: April 16, 2026</p>

        <section className="space-y-8 prose prose-slate max-w-none">
          <div>
            <h2 className="font-clash text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Techexa Digital Services ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our digital services.
            </p>
          </div>

          <div>
            <h2 className="font-clash text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may collect information about you in a variety of ways, including:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Personal Data:</strong> Name, email address, and company details provided when contacting us.</li>
              <li><strong>Usage Data:</strong> Information automatically collected when accessing our site, such as IP address, browser type, and operating system.</li>
              <li><strong>Cookies:</strong> We use cookies to enhance your browsing experience and analyze site traffic.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-clash text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use the information we collect to operate our website, provide professional digital services, communicate with you regarding projects, and fulfill our legal obligations. We do not sell your personal data to third parties.
            </p>
          </div>

          <div>
            <h2 className="font-clash text-2xl font-semibold text-foreground mb-4">4. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="font-clash text-2xl font-semibold text-foreground mb-4">5. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at:
              <br />
              <span className="font-medium text-primary mt-2 block">contact@techexa.co.uk</span>
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
