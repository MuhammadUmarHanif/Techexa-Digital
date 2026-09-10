import { Suspense, lazy } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import { ServiceFilterProvider } from "@/contexts/ServiceFilterContext";

// Lazy load below-the-fold components
const Services = lazy(() => import("@/components/Services"));
const Work = lazy(() => import("@/components/Work"));
const About = lazy(() => import("@/components/About"));
const Team = lazy(() => import("@/components/Team"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

// Simple loading state for lazy components
const SectionLoader = () => (
  <div className="w-full h-48 flex items-center justify-center bg-background/50 animate-pulse">
    <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
  </div>
);

const Index = () => {
  return (
    <ServiceFilterProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <Services />
          <Work />
          <About />
          <Team />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </ServiceFilterProvider>
  );
};

export default Index;
