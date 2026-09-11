import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Eye, ArrowUpRight, Zap } from "lucide-react";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { gsap, registerGsapPlugins, ScrollTrigger } from "@/lib/gsap";

const Hero = () => {
  const [counts, setCounts] = useState({ projects: 0, clients: 0, years: 0, satisfaction: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const marqueeTween = useRef<gsap.core.Tween | null>(null);
  const hasAnimated = useRef(false);

  const scrollToWork = () => {
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({
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
    "UI/UX Design",
    "Website Design",
    "App Design",
    "E-commerce",
  ];

  const marqueeServices = [...services, ...services, ...services];

  useLayoutEffect(() => {
    registerGsapPlugins();

    if (!heroRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      const badge = heroRef.current?.querySelector("[data-hero-badge]");
      if (badge) {
        tl.fromTo(badge, { autoAlpha: 0, y: -24 }, { autoAlpha: 1, y: 0, duration: 0.6 });
      }

      tl.fromTo("[data-hero-title]", { autoAlpha: 0, y: 64 }, { autoAlpha: 1, y: 0, duration: 0.9 }, badge ? "-=0.2" : 0)
        .fromTo("[data-hero-copy]", { autoAlpha: 0, y: 42 }, { autoAlpha: 1, y: 0, duration: 0.75 }, "-=0.45")
        .fromTo("[data-hero-actions]", { autoAlpha: 0, y: 36 }, { autoAlpha: 1, y: 0, duration: 0.75 }, "-=0.45")
        .fromTo("[data-hero-stats]", { autoAlpha: 0, y: 32 }, { autoAlpha: 1, y: 0, duration: 0.7 }, "-=0.4")
        .fromTo("[data-hero-marquee]", { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.7 }, "-=0.35");

      const floatingShapes = gsap.utils.toArray<HTMLElement>("[data-hero-orb]");
      if (floatingShapes.length > 0) {
        floatingShapes.forEach((shape, index) => {
          gsap.to(shape, {
            y: index % 2 === 0 ? -24 : 24,
            x: index % 2 === 0 ? 12 : -12,
            duration: 4 + index,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!glowRef.current || !spotRef.current) {
      return;
    }

    const moveGlowX = gsap.quickTo(glowRef.current, "x", { duration: 0.45, ease: "power3.out" });
    const moveGlowY = gsap.quickTo(glowRef.current, "y", { duration: 0.45, ease: "power3.out" });
    const moveSpotX = gsap.quickTo(spotRef.current, "x", { duration: 0.25, ease: "power2.out" });
    const moveSpotY = gsap.quickTo(spotRef.current, "y", { duration: 0.25, ease: "power2.out" });

    const handleMouseMove = (event: MouseEvent) => {
      window.requestAnimationFrame(() => {
        moveGlowX(event.clientX - 90);
        moveGlowY(event.clientY - 90);
        moveSpotX(event.clientX - 40);
        moveSpotY(event.clientY - 40);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) {
      return;
    }

    const ctx = gsap.context(() => {
      const moveDistance = scrollContainer.scrollWidth / 3;
      const duration = moveDistance / 50;

      marqueeTween.current = gsap.to(scrollContainer, {
        x: -moveDistance,
        duration: duration,
        ease: "none",
        repeat: -1,
        onReverseComplete: () => {
          marqueeTween.current?.totalTime(marqueeTween.current?.duration() || 0);
        }
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

  useEffect(() => {
    registerGsapPlugins();

    if (!statsRef.current || hasAnimated.current) {
      return;
    }

    const targetValues = {
      projects: 150,
      clients: 50,
      years: 4,
      satisfaction: 100,
    };

    const projectsCounter = { value: 0 };
    const clientsCounter = { value: 0 };
    const yearsCounter = { value: 0 };
    const satisfactionCounter = { value: 0 };

    const trigger = ScrollTrigger.create({
      trigger: statsRef.current,
      start: "top 95%",
      once: true,
      onEnter: () => {
        hasAnimated.current = true;

        gsap.to(projectsCounter, {
          value: targetValues.projects,
          duration: 2.5,
          ease: "power3.out",
          onUpdate: () => {
            setCounts(prev => ({
              ...prev,
              projects: Math.floor(projectsCounter.value)
            }));
          },
          onComplete: () => {
            setCounts(prev => ({ ...prev, projects: 150 }));
          }
        });

        gsap.to(clientsCounter, {
          value: targetValues.clients,
          duration: 2.5,
          ease: "power3.out",
          delay: 0.2,
          onUpdate: () => {
            setCounts(prev => ({
              ...prev,
              clients: Math.floor(clientsCounter.value)
            }));
          },
          onComplete: () => {
            setCounts(prev => ({ ...prev, clients: 50 }));
          }
        });

        gsap.to(yearsCounter, {
          value: targetValues.years,
          duration: 2.5,
          ease: "power3.out",
          delay: 0.4,
          onUpdate: () => {
            setCounts(prev => ({
              ...prev,
              years: Math.floor(yearsCounter.value)
            }));
          },
          onComplete: () => {
            setCounts(prev => ({ ...prev, years: 4 }));
          }
        });

        gsap.to(satisfactionCounter, {
          value: targetValues.satisfaction,
          duration: 2.5,
          ease: "power3.out",
          delay: 0.4,
          onUpdate: () => {
            setCounts(prev => ({
              ...prev,
              satisfaction: Math.floor(satisfactionCounter.value)
            }));
          },
          onComplete: () => {
            setCounts(prev => ({ ...prev, satisfaction: 100 }));
          }
        });
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        className="fixed left-0 top-0 pointer-events-none z-50 mix-blend-multiply"
        style={{
          width: "180px",
          height: "180px",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(59, 130, 246, 0.03) 40%, transparent 75%)",
          borderRadius: "50%",
          filter: "blur(25px)",
          opacity: 0.5,
          willChange: "transform",
        }}
      />

      <div
        ref={spotRef}
        className="fixed left-0 top-0 pointer-events-none z-50"
        style={{
          width: "80px",
          height: "80px",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.15) 20%, rgba(59, 130, 246, 0.07) 90%, transparent 80%)",
          borderRadius: "90%",
          filter: "blur(10px)",
          opacity: 1.5,
          willChange: "transform",
        }}
      />

      {/* Responsive width & spacing */}
      <section
        ref={heroRef}
        className="relative min-h-[100vh] w-full flex flex-col items-center overflow-hidden pt-36 md:pt-42 lg:pt-48 pb-16 md:pb-24 mt-0 sm:mt-0 "
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#00c4c9] to-[#FFFFFF]" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col justify-center">
          <div className="max-w-5xl mx-auto text-center">
            <h1
              data-hero-title
              className="font-clash text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[1.1] mb-6 tracking-tight px-4"
            >
              We Build{" "}
              <span className="font-clash font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600">
                Digital
              </span>
              <br />
              Experiences
            </h1>

            <p
              data-hero-copy
              className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-light px-2"
            >
              A forward-thinking digital agency specializing in AI-driven brand strategy,
              web development, and creative solutions that deliver measurable results.
            </p>

            <div data-hero-actions className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="group w-full sm:w-auto px-5 sm:px-6 py-5 sm:py-6 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white overflow-hidden border-0 shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all duration-300"
              >
                <span className="relative flex items-center gap-2 text-xs sm:text-sm font-semibold font-clash">
                  <Sparkles className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                  Work With Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={scrollToWork}
                className="group w-full sm:w-auto px-5 sm:px-6 py-5 sm:py-6 rounded-xl border border-gray-300 bg-white/80 backdrop-blur-sm hover:border-blue-400 hover:bg-white transition-all duration-300 shadow-sm"
              >
                <span className="flex items-center gap-2 text-xs sm:text-sm font-semibold font-clash">
                  <Eye className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  View Our Work
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </span>
              </Button>
            </div>

            {/* Responsive stats grid */}
            <div
              ref={statsRef}
              data-hero-stats
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-10 sm:mt-12 py-6 sm:py-8 border-t border-gray-200"
            >
              <div className="text-center">
                <div className="font-clash text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mb-1">
                  {counts.projects >= 150 ? "150+" : counts.projects}
                </div>
                <div className="text-[11px] sm:text-xs text-gray-500 font-light">Projects</div>
              </div>
              <div className="text-center">
                <div className="font-clash text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mb-1">
                  {counts.clients >= 50 ? "50+" : counts.clients}
                </div>
                <div className="text-[11px] sm:text-xs text-gray-500 font-light">Clients</div>
              </div>
              <div className="text-center">
                <div className="font-clash text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mb-1">
                  {counts.years}+
                </div>
                <div className="text-[11px] sm:text-xs text-gray-500 font-light">Years</div>
              </div>
              <div className="text-center">
                <div className="font-clash text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mb-1">
                  {counts.satisfaction}%
                </div>
                <div className="text-[11px] sm:text-xs text-gray-500 font-light">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive marquee */}
        <div
          data-hero-marquee
          className="w-full bg-transparent py-14 overflow-hidden relative z-10 border-t border-gray-200"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div ref={scrollRef} className="flex w-max gap-4 sm:gap-6 md:gap-8 whitespace-nowrap">
            {marqueeServices.map((service, index) => (
              <div key={`${service}-${index}`} className="flex items-center gap-4 sm:gap-6 md:gap-8 flex-shrink-0">
                <span className="text-gray-700 text-base sm:text-lg md:text-xl font-medium tracking-wide">
                  {service}
                </span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="flex-shrink-0 sm:w-4 sm:h-4"
                >
                  <rect
                    x="8"
                    y="8"
                    width="11.31"
                    height="11.31"
                    transform="rotate(45 8 8)"
                    fill="#3b82f6"
                    className="opacity-60"
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;