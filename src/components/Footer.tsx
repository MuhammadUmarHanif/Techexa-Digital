import { Github, Linkedin, Facebook, Video, Briefcase, Instagram, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { useSectionReveal } from "@/hooks/use-section-reveal";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);

  useSectionReveal(footerRef, { start: "top 92%", y: 32 });

  const links = {
    company: [
      { name: "About", href: "#about" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Press", href: "#" },
      { name: "Team", href: "#team" },
    ],
    services: [
      { name: "Web Development", href: "#services" },
      { name: "Brand Strategy", href: "#services" },
      { name: "UI/UX Design", href: "#services" },
      { name: "Digital Marketing", href: "#services" },
      { name: "Mobile Apps", href: "#services" },
    ],
    
    social: [
      { icon: Video, href: "https://seller-uk.tiktok.com/homepage/", label: "Tiktok" },
      { icon: Linkedin, href: "https://www.linkedin.com/company/techexa-digital-services-smc-private-limited/posts/?feedView=all/", label: "LinkedIn" },
      { icon: Facebook, href: "https://www.facebook.com/techexadigitalservice/", label: "Facebook" },
      // { icon: Github, href: "#", label: "GitHub" },
      // { icon: Instagram, href: "#", label: "Instagram" },
      // { icon: Briefcase, href: "#", label: "Behance" },
    ],
  };

  return (
    <footer ref={footerRef} className="relative overflow-hidden bg-gradient-to-b from-[#FFFFFF] to-[#00c4c9]">
      <div data-parallax="50" className="absolute top-0 left-0 w-96 h-96 bg-primary/2 rounded-full blur-3xl" />
      <div data-parallax="42" className="absolute bottom-0 right-0 w-96 h-96 bg-primary/2 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div data-reveal className="text-center mb-16">
          <a
            href="#"
            className="font-clash text-5xl md:text-6xl font-semibold text-[#093b79] inline-block mb-4 tracking-tighter transition-all"
          >
            <img src="/logo.png" alt="TECHEXA Logo" className="w-16 h-16 inline-block mr-2 -mt-1" />
            TECHEXA<span className="text-gradient animate-gradient font-medium"> .</span>
          </a>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed font-light">
            Crafting exceptional digital experiences that drive business growth and innovation.
          </p>

          <div className="flex gap-3 justify-center mt-6">
            {links.social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="w-12 h-12 rounded-xl bg-muted/40 hover:bg-[#093b79] flex items-center justify-center text-muted-foreground hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary/30 active:scale-95"
              >
                <item.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div
          data-reveal
          className="grid grid-cols-2 gap-8 mb-16 justify-items-center"
        >
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6 text-base uppercase tracking-wider text-center">
              Company
            </h4>
            <ul className="space-y-3 text-center">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-white transition-colors text-sm font-light inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-6 text-base uppercase tracking-wider text-center">
              Services
            </h4>
            <ul className="space-y-3 text-center">
              {links.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-white transition-colors text-sm font-light inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div data-reveal className="pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm font-light text-center md:text-left">
            &copy; {currentYear} TECHEXA DIGITAL AGENCY. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors font-light hover:underline">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-muted-foreground hover:text-foreground transition-colors font-light hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;