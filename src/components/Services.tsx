import { Code, Palette, Megaphone, Zap, Globe, Shield, ArrowRight } from "lucide-react";
import { useServiceFilter } from "@/contexts/ServiceFilterContext";
import { useRef } from "react";
import { useSectionReveal } from "@/hooks/use-section-reveal";

const services = [
  {
    icon: Palette,
    title: "Brand Strategy",
    description: "Distinctive brand identities that resonate with your audience.",
    gradient: "from-purple-500/5 to-pink-500/5",
  },
  {
    icon: Code,
    title: "Web & App Development",
    description: "Cutting-edge websites and applications optimized for performance.",
    gradient: "from-blue-500/5 to-cyan-500/5",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Data-driven strategies that amplify reach and convert visitors.",
    gradient: "from-orange-500/5 to-red-500/5",
  },
  {
    icon: Zap,
    title: "UI/UX & Graphic Design",
    description: "Intuitive interfaces that delight users and enhance engagement.",
    gradient: "from-yellow-500/5 to-amber-500/5",
  },
  {
    icon: Globe,
    title: "Ecommerce",
    description: "Scalable online stores with seamless checkout experiences.",
    gradient: "from-green-500/5 to-emerald-500/5",
  },
  {
    icon: Shield,
    title: "Maintenance & Support",
    description: "Ongoing support to keep your digital presence secure.",
    gradient: "from-indigo-500/5 to-violet-500/5",
  },
];

const Services = () => {
  const { setSelectedService } = useServiceFilter();
  const sectionRef = useRef<HTMLElement>(null);

  useSectionReveal(sectionRef);

  const handleServiceClick = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    // Scroll to work section
    setTimeout(() => {
      const workSection = document.getElementById("work");
      if (workSection) {
        workSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };
  return (
    <section ref={sectionRef} id="services" className="relative overflow-hidden bg-white">
      {/* Minimal Background - Reduced height */}
      <div data-parallax="70" className="absolute top-1/2 left-0 w-96 h-92 bg-primary/3 rounded-full blur-3xl -translate-y-1/2" />
      <div data-parallax="55" className="absolute bottom-0 right-0 w-80 h-64 bg-primary/3 rounded-full blur-3xl" />

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

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              onClick={() => handleServiceClick(service.title)}
              data-reveal
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/40 hover:border-blue-500/70 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden min-h-[220px] cursor-pointer"
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-95 transition-all duration-500`} />

              {/* Subtle glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-blue-500/20 blur-3xl rounded-full" />
              </div>

              <div className="relative z-10">
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-5 group-hover:bg-blue-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-primary/5">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-blue-400 transition-colors duration-500" />
                </div>

                {/* Title */}
                <h3 className="font-clash text-xl font-medium mb-3 group-hover:text-blue-400 transition-all duration-500 tracking-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed font-light mb-4 group-hover:text-foreground/90 transition-colors duration-500 line-clamp-3">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:text-blue-400 mt-auto">
                  <span className="text-sm font-semibold">Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" />
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
