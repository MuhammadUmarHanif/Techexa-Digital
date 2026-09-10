import { Link, useLocation } from "react-router-dom";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { gsap } from "@/lib/gsap";

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const navRef = useRef<HTMLElement>(null);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current < 50) {
        setIsVisible(true);
      } else if (current > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!navRef.current) return;

    gsap.to(navRef.current, {
      y: isVisible ? 0 : -120,
      duration: 0.4,
      ease: "power2.out",
    });
  }, [isVisible]);

  useLayoutEffect(() => {
    if (!navRef.current) return;

    gsap.fromTo(
      navRef.current,
      { y: -120, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.8 }
    );
  }, []);

  const navLinks = ["Home", "Services", "Work", "About", "Team", "Contact"];

  return (
    <nav
      ref={navRef}
      className="fixed top-4 left-0 right-0 w-[97%] mx-auto px-2 sm:px-2 z-50"
    >
      <div className="bg-white/90 backdrop-blur-xl border border-gray-200 shadow-md rounded-xl px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-semibold text-lg">
          <img src="/logo.png" className="w-8 h-8" />
          TECHEXA
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-gray-600 hover:text-black transition"
            >
              {link}
            </a>
          ))}

          <Button
            onClick={scrollToContact}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm shadow"
          >
            Start a Project
          </Button>
        </div>

        {/* Mobile */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-3 bg-white border rounded-xl p-4 shadow">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-2 text-gray-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;