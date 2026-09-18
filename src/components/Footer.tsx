import { Linkedin, Facebook, Video, Instagram, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    toast.success("Thank you for subscribing to TECHEXA updates!");
    setEmail("");
  };

  const services = [
    { name: "UI/UX Design", href: "#services" },
    { name: "Web Development", href: "#services", badge: "New" },
    { name: "E-Commerce & Shopify", href: "#services" },
    { name: "Mobile App Development", href: "#services", badge: "New" },
    { name: "Brand Strategy & AI", href: "#services" },
    { name: "Print on Demand", href: "#services" },
  ];

  const company = [
    { name: "About Us", href: "#about" },
    { name: "Why Techexa", href: "#about" },
    { name: "Our Work", href: "#work" },
    { name: "Meet the Team", href: "#team" },
    { name: "Careers", href: "https://www.linkedin.com/company/techexa-digital-services-smc-private-limited/jobs/", badge: "Hiring", isExternal: true },
    { name: "Contact Us", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/techexadigitalservice/",
      label: "Facebook",
    },
    {
      icon: Video,
      href: "https://seller-uk.tiktok.com/homepage/",
      label: "TikTok",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/techexa-digital-services-smc-private-limited/posts/?feedView=all/",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/",
      label: "Instagram",
    },
  ];

  return (
    <footer className="relative bg-white pt-20 pb-8 overflow-hidden font-sora border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top Brand Row (Same as reference image) */}
        <div className="mb-14">
          <Link to="/" className="inline-flex items-center gap-3 group select-none">
            <img
              src="/logo.png"
              alt="TECHEXA Logo"
              className="w-10 h-10 object-contain group-hover:scale-105 transition-transform"
            />
            <span className="font-sora font-[800] text-2xl sm:text-3xl tracking-tight text-neutral-950">
              TECHEXA
            </span>
          </Link>
        </div>

        {/* 3-Column Content Grid (Same as reference image) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 pb-16">
          
          {/* Column 1: Product / Services */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-6 font-sora">
              Services
            </h4>
            <ul className="space-y-3.5">
              {services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-neutral-950 transition-colors font-medium"
                  >
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#1D4FD8] border border-blue-100 leading-none">
                        {item.badge}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Company */}
          <div className="md:col-span-4 lg:col-span-4">
            <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-6 font-sora">
              Company
            </h4>
            <ul className="space-y-3.5">
              {company.map((item) => (
                <li key={item.name}>
                  {item.isRoute ? (
                    <Link
                      to={item.href}
                      className="inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-neutral-950 transition-colors font-medium"
                    >
                      <span>{item.name}</span>
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      target={item.isExternal ? "_blank" : undefined}
                      rel={item.isExternal ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-neutral-950 transition-colors font-medium"
                    >
                      <span>{item.name}</span>
                      {item.badge && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 leading-none">
                          {item.badge}
                        </span>
                      )}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Newsletter & Social Links (Same as reference image) */}
          <div className="md:col-span-4 lg:col-span-5">
            <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4 font-sora">
              Subscribe for Updates
            </h4>

            {/* Newsletter Form */}
            <form onSubmit={handleSubscribe} className="space-y-3 max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full h-12 px-5 rounded-2xl bg-neutral-900 text-white placeholder:text-neutral-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D4FD8] transition-all"
              />
              <button
                type="submit"
                className="w-full h-12 rounded-2xl bg-neutral-950 text-white font-semibold text-sm hover:bg-neutral-800 transition-colors shadow-sm cursor-pointer"
              >
                Subscribe
              </button>
            </form>

            <p className="text-xs text-neutral-500 mt-3 leading-relaxed max-w-md">
              Get the latest digital trends, design insights, and agency case studies delivered to your inbox.
            </p>

            {/* Find Us On Section */}
            <div className="mt-8">
              <h5 className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest mb-3 font-sora">
                Find Us On
              </h5>
              <div className="flex items-center gap-2.5">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="w-10 h-10 rounded-xl bg-neutral-900 text-white hover:bg-[#1D4FD8] flex items-center justify-center transition-all duration-200 hover:scale-105"
                  >
                    <item.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
{/* Bottom Giant Brand Wordmark (Hero Typography from reference image) */}
<div className="w-full select-none pointer-events-none pt-12 border-t border-neutral-100 flex items-start justify-center overflow-hidden h-[9vw] sm:h-[10.5vw] md:h-[11.5vw]">
  
  <h2 className="font-sora font-[800] text-[14vw] sm:text-[15vw] md:text-[13vw] leading-[0.85] tracking-[-0.03em] text-center uppercase text-gradient translate-y-[1%]">
    TECHEXA
  </h2>

</div>
        {/* Copyright & Sub-links Bar */}
        <div className="pt-6 mt-2 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-medium">
          <p>© {currentYear} TECHEXA Digital Services Pvt, Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-neutral-950 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-neutral-950 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;