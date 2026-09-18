// import { Code, Palette, Megaphone, Zap, Globe, Shield, ArrowRight } from "lucide-react";
// import { useServiceFilter } from "@/contexts/ServiceFilterContext";
// import { useRef } from "react";
// import { useSectionReveal } from "@/hooks/use-section-reveal";

// const services = [
//   {
//     icon: Palette,
//     title: "Brand Strategy",
//     description: "Distinctive brand identities that resonate with your audience.",
//     gradient: "from-purple-500/5 to-pink-500/5",
//   },
//   {
//     icon: Code,
//     title: "Web & App Development",
//     description: "Cutting-edge websites and applications optimized for performance.",
//     gradient: "from-blue-500/5 to-cyan-500/5",
//   },
//   {
//     icon: Megaphone,
//     title: "Digital Marketing",
//     description: "Data-driven strategies that amplify reach and convert visitors.",
//     gradient: "from-orange-500/5 to-red-500/5",
//   },
//   {
//     icon: Zap,
//     title: "UI/UX & Graphic Design",
//     description: "Intuitive interfaces that delight users and enhance engagement.",
//     gradient: "from-yellow-500/5 to-amber-500/5",
//   },
//   {
//     icon: Globe,
//     title: "Ecommerce",
//     description: "Scalable online stores with seamless checkout experiences.",
//     gradient: "from-green-500/5 to-emerald-500/5",
//   },
//   {
//     icon: Shield,
//     title: "Maintenance & Support",
//     description: "Ongoing support to keep your digital presence secure.",
//     gradient: "from-indigo-500/5 to-violet-500/5",
//   },
// ];

// const Services = () => {
//   const { setSelectedService } = useServiceFilter();
//   const sectionRef = useRef<HTMLElement>(null);

//   useSectionReveal(sectionRef);

//   const handleServiceClick = (serviceTitle: string) => {
//     setSelectedService(serviceTitle);
//     // Scroll to work section
//     setTimeout(() => {
//       const workSection = document.getElementById("work");
//       if (workSection) {
//         workSection.scrollIntoView({ behavior: "smooth", block: "start" });
//       }
//     }, 100);
//   };
//   return (
//     <section ref={sectionRef} id="services" className="relative overflow-hidden bg-white">
//       {/* Minimal Background - Reduced height */}
//       <div data-parallax="70" className="absolute top-1/2 left-0 w-96 h-92 bg-primary/3 rounded-full blur-3xl -translate-y-1/2" />
//       <div data-parallax="55" className="absolute bottom-0 right-0 w-80 h-64 bg-primary/3 rounded-full blur-3xl" />

//       <div className="container mx-auto px-6 relative z-10">
//         {/* Header */}
//         <div data-reveal className="max-w-2xl mb-16">
//           <span className="text-primary font-normal text-xs tracking-wider uppercase mb-3 block font-light">
//             Services
//           </span>
//           <h2 className="font-clash text-3xl md:text-4xl lg:text-5xl font-medium mb-4 tracking-tight">
//             Solutions That <span className="text-gradient font-semibold font-clash">Drive Growth</span>
//           </h2>
//           <p className="text-muted-foreground text-sm md:text-base font-light leading-relaxed">
//             End-to-end digital solutions tailored to your unique business needs.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((service, index) => (
//             <div
//               key={service.title}
//               onClick={() => handleServiceClick(service.title)}
//               data-reveal
//               className="group relative p-8 rounded-3xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/40 hover:border-blue-500/70 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden min-h-[220px] cursor-pointer"
//             >
//               {/* Animated Background Gradient */}
//               <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-95 transition-all duration-500`} />

//               {/* Subtle glow effect */}
//               <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-blue-500/20 blur-3xl rounded-full" />
//               </div>

//               <div className="relative z-10">
//                 {/* Icon Container */}
//                 <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-5 group-hover:bg-blue-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-primary/5">
//                   <service.icon className="w-6 h-6 text-primary group-hover:text-blue-400 transition-colors duration-500" />
//                 </div>

//                 {/* Title */}
//                 <h3 className="font-clash text-xl font-medium mb-3 group-hover:text-blue-400 transition-all duration-500 tracking-tight">
//                   {service.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-muted-foreground text-sm leading-relaxed font-light mb-4 group-hover:text-foreground/90 transition-colors duration-500 line-clamp-3">
//                   {service.description}
//                 </p>

//                 {/* Learn More Link */}
//                 <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:text-blue-400 mt-auto">
//                   <span className="text-sm font-semibold">Learn more</span>
//                   <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" />
//                 </div>
//               </div>

//               {/* Corner accent */}
//               <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
import { Code, Palette, Megaphone, Zap, Globe, Shield, ArrowRight } from "lucide-react";
import { useServiceFilter } from "@/contexts/ServiceFilterContext";
import { useRef, useEffect, useLayoutEffect, useState } from "react";
import { useSectionReveal } from "@/hooks/use-section-reveal";

const services = [
  {
    icon: Palette,
    title: "SaaS Development",
    description: "We build scalable, cloud-based software tailored to your business — from architecture to deployment. Secure, subscription-ready, and built to grow with your users.",
    gradient: "from-purple-500/10 to-pink-500/10",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Code,
    title: "Website Development",
    description: "Custom websites that combine clean design with solid performance. Responsive, SEO-optimized, and built on modern frameworks to turn visitors into customers.",
    gradient: "from-blue-500/10 to-cyan-500/10",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Megaphone,
    title: "Quality Assurance (QA)",
    description: "Rigorous manual and automated testing to catch bugs before your users do. We ensure your product is stable, secure, and works flawlessly across every device.",
    gradient: "from-orange-500/10 to-red-500/10",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Zap,
    title: "UI/UX & Graphic Design",
    description: "Intuitive interfaces that delight users and enhance engagement.",
    gradient: "from-yellow-500/10 to-amber-500/10",
    image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Globe,
    title: "App Development",
    description: "Native and cross-platform mobile apps designed for speed and simplicity. From concept to launch, we build apps your users will love to use.",
    gradient: "from-green-500/10 to-emerald-500/10",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Shield,
    title: "AI Automation & Integration",
    description: "Smarter workflows powered by AI. We integrate chatbots, automation tools, and machine learning to help your business save time and scale efficiently.",
    gradient: "from-indigo-500/10 to-violet-500/10",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Shield,
    title: "Digital Marketing",
    description: "Data-driven strategies that get your brand seen. From SEO to paid ads and social campaigns, we help you reach the right audience and grow measurably.",
    gradient: "from-indigo-500/10 to-violet-500/10",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  },
];

// Height of any sticky site header above this section, in px. Set to 0 if none.
const STICKY_NAV_OFFSET = 85;

const Services = () => {
  const { setSelectedService } = useServiceFilter();
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [offsets, setOffsets] = useState<number[]>([]);

  useSectionReveal(sectionRef);

  // Measure each header row's real rendered height and stack the next row
  // exactly at that boundary — this is what keeps the cutoff clean (fully
  // shown or fully hidden) instead of slicing through the middle of text.
  useLayoutEffect(() => {
    const measure = () => {
      let sum = STICKY_NAV_OFFSET;
      const next: number[] = [];
      headerRefs.current.forEach((el, i) => {
        next[i] = sum;
        sum += el?.offsetHeight ?? 0;
      });
      setOffsets(next);
    };

    measure();

    const ro = new ResizeObserver(measure);
    headerRefs.current.forEach((el) => el && ro.observe(el));
    window.addEventListener("resize", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    const items = itemRefs.current.filter((el): el is HTMLDivElement => el !== null);

    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-active"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-active");
          } else if (entry.boundingClientRect.top > 0) {
            // scrolled back above the viewport: reset so it replays on the way down again
            entry.target.classList.remove("is-active");
          }
        });
      },
      { threshold: 0, rootMargin: "-30% 0px -35% 0px" }
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const handleServiceClick = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setTimeout(() => {
      const workSection = document.getElementById("work");
      if (workSection) {
        workSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <section ref={sectionRef} id="services" className="relative bg-white h-full ">
      {/* Decorative background — isolated in its own overflow-hidden layer.
          IMPORTANT: overflow-hidden cannot live on the same ancestor chain
          as the sticky stack below, or position: sticky stops working. */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div data-parallax="70" className="absolute top-1/2 left-0 w-96 h-92 bg-primary/3 rounded-full blur-3xl -translate-y-1/2" />
        <div data-parallax="55" className="absolute bottom-0 right-0 w-80 h-64 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div data-reveal className="max-w-2xl mb-16">
          <span className="text-primary font-normal text-xs tracking-wider uppercase mb-3 block font-light">
            Services
          </span>
          <h2 className="font-clash text-3xl md:text-4xl lg:text-5xl font-medium mb-4 tracking-tight">
            Solutions That <span className="text-gradient font-semibold font-clash">Drive Growth</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base font-light leading-relaxed">
            End-to-end digital solutions tailored to your unique business needs.
          </p>
        </div>

        {/* Sticky stacking services */}
        <div className="services-stack relative pb-[20vh]">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => (itemRefs.current[index] = el)}
              className="services-stack-item group relative border-t border-border/40 bg-white"
              style={{
                position: "sticky",
                top: `${offsets[index] ?? STICKY_NAV_OFFSET}px`,
                zIndex: index + 1,
                minHeight: `calc(${offsets[index] ?? STICKY_NAV_OFFSET}px + 80vh)`,
              }}
            >
              {/* Row: number + title, always visible once pinned. Measured
                  by ResizeObserver above — its height IS the next row's
                  sticky offset, so the cutoff lands exactly at this edge. */}
              <div
                ref={(el) => (headerRefs.current[index] = el)}
                className="flex items-baseline gap-6 md:gap-10 py-2 md:py-3 cursor-pointer leading-none"
                onClick={() => handleServiceClick(service.title)}
              >
                <h3 className="font-clash text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-none group-hover:text-primary transition-colors duration-500">
                  {service.title}
                </h3>
                <ArrowRight className="ml-auto w-5 h-5 md:w-6 md:h-6 text-muted-foreground/40 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500 hidden md:block" />
              </div>

              {/* Detail: image + icon + description + CTA, fades/expands in once active */}
              <div className="services-stack-body grid md:grid-cols-[180px_auto_1fr] gap-6 md:gap-8 pb-10 md:pb-14 items-start">
                <div className="services-stack-image relative w-full max-w-[220px] md:max-w-none aspect-[4/3] rounded-2xl overflow-hidden bg-muted order-1 md:order-none">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} mix-blend-overlay`} />
                </div>

                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg shadow-primary/5 flex-shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <service.icon className="w-6 h-6 text-primary" />
                </div>

                <div className="max-w-xl">
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-light mb-4">
                    {service.description}
                  </p>
                  <button
                    onClick={() => handleServiceClick(service.title)}
                    className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all duration-300"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .services-stack-item .services-stack-body {
          opacity: 0;
          transform: translateY(16px);
          max-height: 0;
          overflow: hidden;
          padding-top: 0;
          padding-bottom: 0;
          transition: opacity 0.5s ease, transform 0.5s ease, max-height 0.5s ease;
        }
        .services-stack-item.is-active .services-stack-body {
          opacity: 1;
          transform: translateY(0);
          max-height: 420px;
        }
        .services-stack-image {
          clip-path: inset(0 100% 0 0);
          transition: clip-path 0.8s cubic-bezier(0.65, 0, 0.35, 1);
        }
        .services-stack-item.is-active .services-stack-image {
          clip-path: inset(0 0 0 0);
        }
        @media (prefers-reduced-motion: reduce) {
          .services-stack-item .services-stack-body {
            transition: none;
            opacity: 1;
            transform: none;
            max-height: none;
          }
          .services-stack-item .services-stack-image {
            clip-path: none;
            transition: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;