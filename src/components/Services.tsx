import { Code, Palette, Zap, Globe, Shield, ArrowRight, TrendingUp } from "lucide-react";
import { useServiceFilter } from "@/contexts/ServiceFilterContext";
import { useRef } from "react";
import { useSectionReveal } from "@/hooks/use-section-reveal";

const services = [
  {
    icon: Palette,
    title: "SaaS Development",
    description: "We build scalable, cloud-based software tailored to your business — from architecture to deployment. Secure, subscription-ready, and built to grow with your users.",
    gradient: "from-purple-500/10 to-pink-500/10",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Code,
    title: "Website Development",
    description: "Custom websites that combine clean design with solid performance. Responsive, SEO-optimized, and built on modern frameworks to turn visitors into customers.",
    gradient: "from-blue-500/10 to-cyan-500/10",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Shield,
    title: "Quality Assurance (QA)",
    description: "Rigorous manual and automated testing to catch bugs before your users do. We ensure your product is stable, secure, and works flawlessly across every device.",
    gradient: "from-orange-500/10 to-red-500/10",
    image: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Zap,
    title: "UI/UX & Graphic Design",
    description: "Intuitive interfaces that delight users and enhance engagement. From wireframes to final pixel-perfect visuals, we craft designs that captivate.",
    gradient: "from-yellow-500/10 to-amber-500/10",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Globe,
    title: "App Development",
    description: "Native and cross-platform mobile apps designed for speed and simplicity. From concept to launch, we build apps your users will love to use.",
    gradient: "from-green-500/10 to-emerald-500/10",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Code,
    title: "AI Automation & Integration",
    description: "Smarter workflows powered by AI. We integrate chatbots, automation tools, and machine learning to help your business save time and scale efficiently.",
    gradient: "from-indigo-500/10 to-violet-500/10",
    image: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven strategies that get your brand seen. From SEO to paid ads and social campaigns, we help you reach the right audience and grow measurably.",
    gradient: "from-rose-500/10 to-orange-500/10",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: TrendingUp,
    title: "ML / AI Solutions",
    description: "Custom machine learning and AI models built around your data and goals. From predictive analytics to intelligent automation, we turn raw data into smart, actionable solutions that give your business a competitive edge..",
    gradient: "from-rose-500/10 to-orange-500/10",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=800&q=80",
  },
];

const Services = () => {
  const { setSelectedService } = useServiceFilter();
  const sectionRef = useRef<HTMLElement>(null);

  useSectionReveal(sectionRef);

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
    <section ref={sectionRef} id="services" className="relative bg-white pt-16 pb-8 md:pt-24 md:pb-10">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div data-parallax="70" className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        <div data-parallax="55" className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-16 relative z-10">
        {/* Header */}
        <div data-reveal className="max-w-2xl mb-12 md:mb-16 pl-4 sm:pl-6 lg:pl-8">
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

        {/* Sticky stacking card list */}
        <div className="space-y-6 max-w-5xl mx-auto pb-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="sticky bg-[hsl(175,55%,97%)] hover:bg-[hsl(175,50%,93%)] rounded-3xl border border-border/60 hover:border-primary/40 p-6 md:p-8 shadow-xl shadow-slate-900/5 transition-all duration-300 group"
              style={{
                top: `${95 + index * 12}px`,
                zIndex: index + 1,
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-start gap-4 md:gap-6 flex-1">
                  <span className="font-clash text-2xl md:text-3xl font-bold text-primary/30 group-hover:text-primary/60 transition-colors">
                    0{index + 1}
                  </span>
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-clash text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-light max-w-2xl">
                      {service.description}
                    </p>
                    <button
                      onClick={() => handleServiceClick(service.title)}
                      className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all duration-300 pt-1 cursor-pointer"
                    >
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="w-full md:w-64 aspect-[4/3] rounded-2xl overflow-hidden bg-muted flex-shrink-0 shadow-md relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} mix-blend-overlay`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;