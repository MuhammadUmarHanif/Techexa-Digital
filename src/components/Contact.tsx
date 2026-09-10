import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { useRef } from "react";
import ContactForm from "./ContactForm";
import { useSectionReveal } from "@/hooks/use-section-reveal";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useSectionReveal(sectionRef);

  return (
    <section ref={sectionRef} id="contact" className="py-16 md:py-24 relative overflow-hidden  bg-white">
      {/* Minimal Background */}
      <div data-parallax="65" className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl" />
      <div data-parallax="48" className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div data-reveal className="text-center mb-12">
            <span className="text-primary font-normal text-xs tracking-wider uppercase mb-3 block font-light">
              Get In Touch
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 tracking-tight">
              Let's Build Something <span className="text-gradient font-bold">Great</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
              Ready to transform your digital presence? We'd love to hear about your project.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Side - Contact Info */}
            <div className="space-y-4">
              {/* Contact Cards */}
              <div className="grid gap-4">
                {[
                  { 
                    icon: Mail, 
                    label: "Email", 
                    value: "contact@techexa.co.uk",
                  },
                  { 
                    icon: Phone, 
                    label: "Phone", 
                    value: "+44 7873 877971",
                  },
                  { 
                    icon: MapPin, 
                    label: "Location", 
                    value: "B8 1QW, Poplar Dr, Saltley, Birmingham, United Kingdom.",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    data-reveal
                    className="group p-4 rounded-xl bg-card/50 border border-border/30 hover:border-primary/40 transition-all duration-300 backdrop-blur-sm"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors flex-shrink-0">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-muted-foreground text-xs mb-1 font-light">{item.label}</p>
                        <p className="text-foreground text-sm font-medium font-clash">{item.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Response Time Card */}
              {/* <div className="p-4 rounded-xl bg-card/50 border border-border/30 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-medium mb-1 text-sm">Response Time</h3>
                    <p className="text-muted-foreground text-xs font-light leading-relaxed">
                      We typically respond within 24 hours during business days.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Right Side - Contact Form */}
            <div data-reveal className="lg:sticky lg:top-24 lg:h-fit">
              <div className="p-6 rounded-2xl bg-card/50 border border-border/30 backdrop-blur-sm">
                <div className="mb-6">
                  <h3 className="font-display text-xl font-semibold mb-2 tracking-tight">
                    Send us a Message
                  </h3>
                  <p className="text-muted-foreground text-sm font-light">
                    Fill out the form below and we'll get back to you soon.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
