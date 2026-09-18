import { Link, useLocation } from "react-router-dom";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { gsap } from "@/lib/gsap";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const location = useLocation();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useLayoutEffect(() => {
    if (!navRef.current) return;

    gsap.fromTo(
      navRef.current,
      { y: -100, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.7, ease: "power3.out" }
    );
  }, []);

  const navLinks = [
    { name: "About us", id: "about" },
    { name: "Services", id: "services" },
    { name: "Projects", id: "work" },
    { name: "Team", id: "team" },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 backdrop-blur-md border-b border-neutral-200/50 shadow-sm py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Left: Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group select-none">
          <img
            src="/logo.png"
            alt="Techexa Logo"
            className="w-8 h-8 sm:w-9 sm:h-9 object-contain group-hover:scale-105 transition-transform"
          />
          <span className="font-sora font-extrabold text-lg sm:text-xl tracking-tight text-neutral-950">
            TECHEXA
          </span>
        </Link>

        {/* Center: Desktop Navigation Links (same as reference image) */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-lg font-medium text-neutral-700 hover:text-neutral-950 transition-colors font-sora cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Right: Contact Button (same as reference image) */}
        <div className="hidden md:flex items-center">
          <button
  onClick={() => scrollToSection("contact")}
  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-primary text-white text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm font-sora cursor-pointer"
>
  <span>Contact</span>
  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-neutral-900 rounded-lg hover:bg-neutral-100"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 px-6 py-4 shadow-lg animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  scrollToSection(link.id);
                  setIsMobileMenuOpen(false);
                }}
                className="text-left py-2 text-base font-medium text-neutral-700 hover:text-neutral-950 font-sora"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => {
                scrollToSection("contact");
                setIsMobileMenuOpen(false);
              }}
              className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-neutral-950 text-white text-sm font-semibold font-sora"
            >
              <span>Contact</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;