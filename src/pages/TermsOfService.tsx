import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-6 py-32 max-w-4xl">
        <h1 className="font-clash text-4xl md:text-5xl font-bold mb-8 text-gradient">Terms of Service</h1>
        <p className="text-muted-foreground mb-12">Last Updated: April 16, 2026</p>

        <section className="space-y-8 prose prose-slate max-w-none">
          <div>
            <h2 className="font-clash text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using the services provided by Techexa Digital Services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
            </p>
          </div>

          <div>
            <h2 className="font-clash text-2xl font-semibold text-foreground mb-4">2. Services Provided</h2>
            <p className="text-muted-foreground leading-relaxed">
              We provide digital agency services including but not limited to web development, brand strategy, AI solutions, and UI/UX design. Specific project scopes, timelines, and deliverables are defined in individual service contracts.
            </p>
          </div>

          <div>
            <h2 className="font-clash text-2xl font-semibold text-foreground mb-4">3. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              Unless otherwise agreed in a written contract, all preliminary designs, assets, and source code remain the property of Techexa Digital Services until full payment is received, at which point ownership of final deliverables is transferred to the client.
            </p>
          </div>

          <div>
            <h2 className="font-clash text-2xl font-semibold text-foreground mb-4">4. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              In no event shall Techexa Digital Services be liable for any indirect, incidental, or consequential damages arising out of the use or inability to use our services, even if we have been advised of the possibility of such damages.
            </p>
          </div>

          <div>
            <h2 className="font-clash text-2xl font-semibold text-foreground mb-4">5. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These terms are governed by and construed in accordance with the laws of the jurisdiction in which our agency is registered, without regard to its conflict of law principles.
            </p>
          </div>

          <div>
            <h2 className="font-clash text-2xl font-semibold text-foreground mb-4">6. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these terms at any time. Your continued use of our services following any changes constitutes your acceptance of the new terms.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
