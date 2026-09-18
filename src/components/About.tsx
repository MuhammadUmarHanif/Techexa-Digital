import { CheckCircle, TrendingUp, Users, Award, ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";
import { useSectionReveal } from "@/hooks/use-section-reveal";

const highlights = [
  { text: "Award-winning design team", icon: Award, description: "Recognized for excellence" },
  { text: "Agile development process", icon: CheckCircle, description: "Fast & efficient delivery" },
  { text: "24/7 dedicated support", icon: Users, description: "Always here to help" },
  { text: "Global client base", icon: TrendingUp, description: "Trusted worldwide" },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useSectionReveal(sectionRef);

  return (
    <section ref={sectionRef} id="about" className="py-16 md:py-24 relative overflow-hidden bg-white ">
      {/* Minimal Background Elements */}
      <div data-parallax="60" className="absolute top-40 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div data-parallax="48" className="absolute bottom-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-primary/3 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-6 ">
        <div className="max-w-6xl mx-auto ">
          {/* Header - Left Aligned with accent */}
          <div data-reveal className="mb-12 mr-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary text-xs font-medium tracking-wide">About Us</span>
            </div>
            <h2 className="font-clash-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 tracking-tight">
              We're a Team of <br />
              <span className="text-gradient font-semibold">Passionate Creators</span>
            </h2>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Left Column - Content */}
            <div data-reveal className="space-y-8">
              {/* Description */}
              <div className="space-y-4">
                <p className="text-gray-600 text-base leading-relaxed">
                  Founded in 2021, <span className="font-semibold text-primary">TECHEXA</span> has grown from a small studio into a full-service 
                  digital agency. We combine creativity with technology to deliver exceptional results.
                </p>
                <p className="text-gray-600 text-base leading-relaxed">
                  Our diverse team of designers, developers, and strategists work 
                  collaboratively to transform ideas into impactful digital experiences.
                </p>
              </div>

              {/* Highlights Grid - Redesigned */}
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
  {highlights.map((item) => (
    <div 
      key={item.text} 
      data-reveal
      className="group flex items-center gap-2.5 p-3 rounded-lg bg-white border border-gray-100 
                 hover:border-primary/40 hover:shadow-md hover:bg-primary/5 transition-all duration-300 
                 cursor-pointer relative overflow-hidden text-left"
    >
      {/* Simplified background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 
                      translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
      
      {/* Icon - Smaller and cleaner */}
      <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center 
                      flex-shrink-0 group-hover:bg-primary/20 z-10 transition-all duration-300
                      group-hover:scale-110">
        <item.icon className="w-3.5 h-3.5 text-primary transition-transform duration-300" />
      </div>
      
      {/* Text - More compact (underline removed) */}
      <div className="z-10 text-left flex-1">
        <span className="text-gray-700 text-xs font-medium leading-tight 
                         group-hover:text-primary transition-colors duration-300">
          {item.text}
        </span>
      </div>
    </div>
  ))}
</div>

              {/* Quote Card - Redesigned */}
              <div data-reveal className="relative p-6 rounded-2xl bg-gradient-to-br from-[#E7F7FC] to-white 
                                         border border-primary/10 shadow-sm overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="text-4xl text-primary/20 mb-2">"</div>
                  <p className="text-gray-700 text-sm leading-relaxed italic mb-3">
                    We believe in the power of collaboration and innovation. Every project 
                    is an opportunity to push boundaries and create something extraordinary.
                  </p>
                  <div className="flex items-center gap-2 text-primary/80">
                    <span className="text-xs font-medium">— Techexa Team</span>
                  </div>
                </div>
              </div>

         
            </div>

            {/* Right Column - Visual */}
            <div data-reveal className="relative lg:order-2">
              {/* Main Image Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-square ">
                  <img
                    src="https://images.unsplash.com/photo-1563461660947-507ef49e9c47?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Our Team"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
              
              {/* Floating Stats Card - Redesigned */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 p-4 rounded-xl bg-white/95 backdrop-blur-md 
                              border border-gray-100 shadow-xl max-w-[180px] sm:max-w-[220px] group hover:shadow-2xl 
                              transition-all duration-300 z-20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex -space-x-2">
                    {[
                      "/images/about/about-1.png",
                      "/images/about/about-2.png",
                      "/images/about/about-3.png",
                      "/images/about/about-4.png"
                    ].map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`Team member ${i + 1}`}
                        className="w-9 h-9 rounded-full border-2 border-white shadow-sm object-cover 
                                   group-hover:scale-105 transition-transform duration-300"
                        style={{ transitionDelay: `${i * 50}ms` }}
                        loading="lazy"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.onerror = null;
                          target.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><circle cx="18" cy="18" r="18" fill="%233b82f6"/><text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" fill="white" font-family="system-ui, sans-serif" font-size="12" font-weight="600">${i + 1}</text></svg>`;
                        }}
                      />
                    ))}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <p className="text-gray-800 text-base font-bold mb-0.5">10+ Team Members</p>
                <p className="text-gray-500 text-xs font-light">
                  Creative minds working together
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;