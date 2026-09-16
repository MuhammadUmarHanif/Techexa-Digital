import { ArrowRight } from "lucide-react";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { gsap, registerGsapPlugins } from "@/lib/gsap";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const marqueeTween = useRef<gsap.core.Tween | null>(null);

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const services = [
    "Shopify",
    "UI/UX Design",
    "Website Design",
    "App Design",
    "Wordpress",
    "Print on Demand",
    "Figma",
    "Amazon",
    "Product Design",
    "Brand Strategy",
    "E-commerce",
  ];

  const marqueeServices = [...services, ...services, ...services];

  useLayoutEffect(() => {
    registerGsapPlugins();

    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        "[data-hero-title-line]",
        { autoAlpha: 0, y: 40 },
        { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.15 }
      )
        .fromTo(
          "[data-badge]",
          { autoAlpha: 0, scale: 0.7 },
          { autoAlpha: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.7)" },
          "-=0.4"
        )
        .fromTo(
          "[data-hero-subtitle]",
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.7 },
          "-=0.3"
        )
        .fromTo(
          "[data-hero-actions]",
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 0.7 },
          "-=0.3"
        );

      // Gentle floating micro-animation for badges
      gsap.to("[data-badge-float-1]", {
        y: -6,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to("[data-badge-float-2]", {
        y: 6,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.4,
      });
      gsap.to("[data-badge-float-3]", {
        y: -5,
        duration: 3.0,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.8,
      });
      gsap.to("[data-badge-float-4]", {
        y: 5,
        duration: 3.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.2,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const ctx = gsap.context(() => {
      const moveDistance = scrollContainer.scrollWidth / 3;
      const duration = moveDistance / 50;

      marqueeTween.current = gsap.to(scrollContainer, {
        x: -moveDistance,
        duration: duration,
        ease: "none",
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (marqueeTween.current) {
      if (isHovered) {
        marqueeTween.current.pause();
      } else {
        marqueeTween.current.play();
      }
    }
  }, [isHovered]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen w-full flex flex-col justify-between overflow-hidden pt-32 sm:pt-40 md:pt-44 pb-8 select-none bg-white font-sora"
    >
      {/* Pure white base like reference image */}
      <div className="absolute inset-0 bg-white" />

      {/* Reference Image Style: Glowing side ambient orbs using custom color #1D4FD8 */}
      <div className="absolute top-[38%] -left-36 sm:-left-48 md:-left-64 -translate-y-1/2 w-[500px] sm:w-[680px] md:w-[850px] h-[500px] sm:h-[680px] md:h-[850px] bg-gradient-to-r from-[#1D4FD8]/35 via-[#60a5fa]/25 to-transparent rounded-full blur-[110px] sm:blur-[150px] pointer-events-none" />
      <div className="absolute top-[38%] -right-36 sm:-right-48 md:-right-64 -translate-y-1/2 w-[500px] sm:w-[680px] md:w-[850px] h-[500px] sm:h-[680px] md:h-[850px] bg-gradient-to-l from-[#1D4FD8]/35 via-[#60a5fa]/25 to-transparent rounded-full blur-[110px] sm:blur-[150px] pointer-events-none" />

      {/* Main Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex-1 flex flex-col items-center justify-center text-center">
        <div className="max-w-[1300px] mx-auto w-full flex flex-col items-center">
          
          {/* Main Big Headline with Interactive Floating Badges (in Sora Font) */}
          <h1 className="font-sora font-[800] text-neutral-950 tracking-[-0.04em] leading-[0.92] sm:leading-[0.88] text-[3.15rem] xs:text-[4.25rem] sm:text-7xl md:text-8xl lg:text-[7.25rem] xl:text-[9rem] 2xl:text-[10.25rem] flex flex-col items-center justify-center w-full">
            
            {/* Line 1: Innovative */}
            <div data-hero-title-line className="relative inline-block">
              <span
                className="font-sora font-[800] text-neutral-950 inline-block"
                style={{ fontWeight: 800, letterSpacing: "-0.04em" }}
              >
                Innovative
              </span>

              {/* Badge 1: Visual Design */}
              <div
                data-badge
                className="absolute -top-3 sm:-top-5 md:-top-7 lg:-top-8 left-[7%] sm:left-[9%] md:left-[11%] -rotate-[13deg] z-20 pointer-events-auto"
              >
                <div data-badge-float-1>
                  <div
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      letterSpacing: "0px",
                      lineHeight: "1.2",
                      fontWeight: 600,
                    }}
                    className="bg-white text-neutral-900 text-xs sm:text-sm md:text-base lg:text-[17px] px-3.5 py-1.5 sm:px-5 sm:py-2 md:px-6 md:py-2.5 rounded-full shadow-[0_12px_26px_-6px_rgba(0,0,0,0.14),0_4px_10px_-2px_rgba(0,0,0,0.06)] border border-neutral-200/90 whitespace-nowrap hover:scale-105 transition-transform duration-200 select-none font-sora"
                  >
                    Visual Design
                  </div>
                </div>
              </div>

              {/* Badge 2: Web development */}
              <div
                data-badge
                className="absolute -top-1 sm:-top-3 md:-top-5 lg:-top-6 right-[4%] sm:right-[6%] md:right-[7%] -rotate-[13deg] z-20 pointer-events-auto"
              >
                <div data-badge-float-2>
                  <div
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      letterSpacing: "0px",
                      lineHeight: "1.2",
                      fontWeight: 600,
                    }}
                    className="bg-white text-neutral-900 text-xs sm:text-sm md:text-base lg:text-[17px] px-3.5 py-1.5 sm:px-5 sm:py-2 md:px-6 md:py-2.5 rounded-full shadow-[0_12px_26px_-6px_rgba(0,0,0,0.14),0_4px_10px_-2px_rgba(0,0,0,0.06)] border border-neutral-200/90 whitespace-nowrap hover:scale-105 transition-transform duration-200 select-none font-sora"
                  >
                    Web development
                  </div>
                </div>
              </div>
            </div>

            {/* Line 2: Digital Studio */}
            <div data-hero-title-line className="relative inline-block mt-2 sm:mt-3 md:mt-4">
              <span
                className="font-sora font-[800] text-neutral-950 inline-block"
                style={{ fontWeight: 800, letterSpacing: "-0.04em" }}
              >
                Digital Studio
              </span>

              {/* Badge 3: Brand design */}
              <div
                data-badge
                className="absolute top-[34%] sm:top-[32%] md:top-[30%] left-[1%] sm:left-[2%] md:left-[3%] -rotate-[1deg] z-20 pointer-events-auto"
              >
                <div data-badge-float-3>
                  <div
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      letterSpacing: "0px",
                      lineHeight: "1.2",
                      fontWeight: 600,
                    }}
                    className="bg-white text-neutral-900 text-xs sm:text-sm md:text-base lg:text-[17px] px-3.5 py-1.5 sm:px-5 sm:py-2 md:px-6 md:py-2.5 rounded-full shadow-[0_12px_26px_-6px_rgba(0,0,0,0.14),0_4px_10px_-2px_rgba(0,0,0,0.06)] border border-neutral-200/90 whitespace-nowrap hover:scale-105 transition-transform duration-200 select-none font-sora"
                  >
                    Brand design
                  </div>
                </div>
              </div>

              {/* Badge 4: Product Design */}
              <div
                data-badge
                className="absolute top-[16%] sm:top-[14%] md:top-[12%] left-[54%] sm:left-[56%] md:left-[57%] -rotate-[13deg] z-20 pointer-events-auto"
              >
                <div data-badge-float-4>
                  <div
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      letterSpacing: "0px",
                      lineHeight: "1.2",
                      fontWeight: 600,
                    }}
                    className="bg-white text-neutral-900 text-xs sm:text-sm md:text-base lg:text-[17px] px-3.5 py-1.5 sm:px-5 sm:py-2 md:px-6 md:py-2.5 rounded-full shadow-[0_12px_26px_-6px_rgba(0,0,0,0.14),0_4px_10px_-2px_rgba(0,0,0,0.06)] border border-neutral-200/90 whitespace-nowrap hover:scale-105 transition-transform duration-200 select-none font-sora"
                  >
                    Product Design
                  </div>
                </div>
              </div>
            </div>
          </h1>

          {/* Subtitle requested by user */}
          <p
            data-hero-subtitle
            className="text-sm sm:text-base md:text-lg text-neutral-600 max-w-2xl mx-auto mt-6 sm:mt-8 mb-8 sm:mb-10 leading-relaxed font-normal px-4 font-sora"
          >
            A forward-thinking digital agency specializing in AI-driven brand strategy, web development, and creative solutions that deliver measurable results.
          </p>

          {/* Action Buttons: Book a call & Discover services */}
          <div
            data-hero-actions
            className="flex flex-row items-center justify-center gap-3 sm:gap-4 w-full px-4"
          >
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center justify-center gap-2 px-7 sm:px-9 py-3.5 sm:py-4 rounded-full bg-neutral-950 text-white text-sm sm:text-base font-semibold shadow-lg shadow-neutral-950/15 hover:bg-neutral-800 hover:scale-105 active:scale-95 transition-all duration-200 font-sora cursor-pointer"
            >
              <span>Book a call</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <button
              onClick={scrollToServices}
              className="group inline-flex items-center justify-center gap-2 px-7 sm:px-9 py-3.5 sm:py-4 rounded-full bg-white text-neutral-900 border border-neutral-200/90 text-sm sm:text-base font-semibold shadow-sm hover:bg-neutral-50 hover:border-neutral-300 hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200 font-sora cursor-pointer"
            >
              <span>Discover services</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Marquee ticker at the bottom of hero */}
      <div
        className="w-full bg-transparent py-4 sm:py-6 overflow-hidden relative z-10 border-t border-neutral-200/60 mt-12"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div ref={scrollRef} className="flex w-max gap-6 sm:gap-8 md:gap-12 whitespace-nowrap">
          {marqueeServices.map((service, index) => (
            <div key={`${service}-${index}`} className="flex items-center gap-6 sm:gap-8 md:gap-12 flex-shrink-0">
              <span className="text-neutral-800 text-sm sm:text-base md:text-lg font-semibold tracking-wide font-sora">
                {service}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#1D4FD8] inline-block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;