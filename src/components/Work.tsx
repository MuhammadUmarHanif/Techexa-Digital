import { ArrowUpRight, ExternalLink, Code, Hospital, Palette, ShoppingCart, TrendingUp, X } from "lucide-react";
import { useState, useEffect, useMemo, useRef } from "react";
import { useServiceFilter } from "@/contexts/ServiceFilterContext";
import { useSectionReveal } from "@/hooks/use-section-reveal";

const projects = [
  {
    title: "The Perfume World",
    category: " E-Commerce",
    description: "Scalable e-commerce solution with modern UX",
    image: "https://i.postimg.cc/PJYSJWnR/Gemini-Generated-Image-4tghjs4tghjs4tgh-(1).png",
    icon: ShoppingCart,
    color: "green",
    tags: ["Shopify", "React", "Payment"],
  },
   {
    title: "Human Resource Management",
    category: "HRM",
    description: "organizing, coordinating, and managing a company's employees. ",
    image: "https://i.postimg.cc/nVTLC60b/Gemini-Generated-Image-n0olqan0olqan0ol.png",
    icon:Code,
    color: "green",
    tags: ["Laravel", "React", "PHP"],
  },
  {
    title: "Web Spark Builder",
    category: "Web Application",
    description: "Create Your Website With Ai",
    image: "https://i.postimg.cc/yNkZ67FV/Chat-GPT-Image-Apr-22-2026-01-42-33-PM.png",
    icon:Code,
    color: "pink",
    tags: ["React.js", "PHP", "Laravel","My-Sql"],
  },
  {
    title: "NOMO",
    category: "Shoping",
    description: "Scalable Ring shoping Store for Android & IOS with modern UI/UX",
    image: "https://i.postimg.cc/850XFX6M/gold.png",
    icon: Code,
    color: "green",
    tags: ["Flutter", "Figma", "Payment"],
  },
 
  {
    title: "Mayfair Care Agency",
    category: "Care Agency",
    description: "we deliver elderly care, end of life care, and palliative care",
    image: "https://i.postimg.cc/2yJxDm8m/Gemini-Generated-Image-a8zbv9a8zbv9a8zb.png",
    icon: Hospital,
    color: "green",
    tags: ["Shopify", "React", "Payment"],
  },
  {
    title: "Lady Bosom",
    category: "Shoping",
    description: "We provide high-quality breast support products, body tape solutions.",
    image: "https://i.postimg.cc/RZvBtzLw/Gemini-Generated-Image-hxhrfuhxhrfuhxhr.png",
    icon: ShoppingCart,
    color: "green",
    tags: ["Shopify", "Payment"],
  },
  {
    title: "Q & P Furniture",
    category: "E-Commerce",
    description: "Modern Furniture Store",
    image: "https://i.postimg.cc/NF5zmBN1/Gemini-Generated-Image-rvty0yrvty0yrvty.png",
    icon: ShoppingCart,
    color: "green",
    tags: ["Shopify", "React", "Payment"],
  },
  {
    title: "Hungry Tails",
    category: "Pet Shop",
    description: "High-quality pet food, treats, and accessories for dogs and cats",
    image: "https://i.postimg.cc/28FfFfNL/Gemini-Generated-Image-g1828zg1828zg182.png",
    icon: ShoppingCart,
    color: "violet",
    tags: ["Shopify", "Payment"],
  },
  
  {
    title: "Patty Buns",
    category: "E-Commerce",
    description: "Modern Social Media Posts for Fast Food",
    image: "https://i.postimg.cc/ncV3g8Q7/Patty-Buns.png",
    icon: Palette,
    color: "green",
    tags: ["Photoshop", "Canva", "Illustrator"],
  },
  
  {
    title: "Hungry Tails",
    category: "E-Commerce",
    description: "Modern Social Media Posts for Pet Foods",
    image: "https://i.postimg.cc/4N4WqChz/Hungry-Tails-FB.png",
    icon: Palette,
    color: "green",
    tags: ["Photoshop", "Canva", "Illustrator"],
  },
];

const colorClasses = {
  blue: {
    gradient: "from-blue-500/10 via-cyan-500/10 to-blue-500/10",
    border: "border-blue-500/20",
    hover: "hover:border-blue-500/40",
    text: "text-blue-600",
    bg: "bg-blue-500/5",
  },
  pink: {
    gradient: "from-pink-500/10 via-rose-500/10 to-pink-500/10",
    border: "border-pink-500/20",
    hover: "hover:border-pink-500/40",
    text: "text-pink-600",
    bg: "bg-pink-500/5",
  },
  violet: {
    gradient: "from-violet-500/10 via-purple-500/10 to-violet-500/10",
    border: "border-violet-500/20",
    hover: "hover:border-violet-500/40",
    text: "text-violet-600",
    bg: "bg-violet-500/5",
  },
  green: {
    gradient: "from-green-500/10 via-emerald-500/10 to-green-500/10",
    border: "border-green-500/20",
    hover: "hover:border-green-500/40",
    text: "text-green-600",
    bg: "bg-green-500/5",
  },
};

// Service to project category/tag mapping
const serviceToFilter: Record<string, (project: typeof projects[0]) => boolean> = {
  "Brand Strategy": (project) => ["E-Commerce", "Shoping", "Care Agency", "Pet Shop", "HRM"].includes(project.category.trim()),
  "Web & App Development": (project) => ["Web Application", "HRM"].includes(project.category.trim()),
  "Digital Marketing": (project) => ["E-Commerce", "Shoping", "Care Agency", "Pet Shop"].includes(project.category.trim()),
  "UI/UX & Graphic Design": (project) => {
    const designTags = ["Photoshop", "Canva", "Illustrator", "Figma"];
    return project.tags.some(tag => designTags.includes(tag));
  },
  "Ecommerce": (project) => ["E-Commerce", "Shoping"].includes(project.category.trim()),
  "Maintenance & Support": () => true, // Show all projects
};

const Work = () => {
  const { selectedService, clearFilter } = useServiceFilter();
  const [visibleProjects, setVisibleProjects] = useState(6);
  const sectionRef = useRef<HTMLElement>(null);

  // Filter projects based on selected service
  const filteredProjects = useMemo(() => {
    if (!selectedService) {
      return projects;
    }
    const filterFn = serviceToFilter[selectedService];
    if (!filterFn) {
      return projects;
    }
    return projects.filter(filterFn);
  }, [selectedService]);

  // Reset visible projects when filter changes
  useEffect(() => {
    setVisibleProjects(6);
  }, [selectedService]);

  const projectsToShow = filteredProjects.slice(0, visibleProjects);
  const hasMore = filteredProjects.length > visibleProjects;

  useSectionReveal(sectionRef, {}, [projectsToShow.length, selectedService]);

  const handleViewMore = () => {
    setVisibleProjects(prev => prev + 3);
  };

  return (
    <section ref={sectionRef} id="work" className="py-16 md:py-24 relative overflow-hidden bg-white">
      {/* Minimal Background - Reduced size */}
      <div data-parallax="60" className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/3 rounded-full blur-3xl" />
      <div data-parallax="45" className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-primary/3 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header - Reduced spacing */}
        <div data-reveal className="mb-12">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              <span className="text-primary font-normal text-xs tracking-wider uppercase mb-2 block font-light">
                Our Work
              </span>
              {/* Fixed: Added proper Clash Display font classes */}
              <h2 className="font-clash-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 tracking-tight">
                Featured <span className="text-gradient font-clash-display font-semibold">Projects</span>
              </h2>
              <p className="text-muted-foreground text-sm md:text-base font-light leading-relaxed mb-8">
                {selectedService 
                  ? `Showing projects for "${selectedService}" (${filteredProjects.length} found)`
                  : "Showcasing innovative solutions that drive business growth."
                }
              </p>
            </div>
            {selectedService && (
              <button
                onClick={clearFilter}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors text-sm font-medium mt-8"
              >
                <span>Clear Filter</span>
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid - Reduced heights */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg mb-4">No projects found for this service.</p>
            <button
              onClick={clearFilter}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors text-sm font-medium"
            >
              <span>View All Projects</span>
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-5 ">
            {projectsToShow.map((project, index) => {
            const colors = colorClasses[project.color as keyof typeof colorClasses];
            return (
              <div
                key={project.title}
                className="group relative block"
              >
                <div className={`relative rounded-xl overflow-hidden border ${colors.border} ${colors.hover} transition-all duration-500 hover:-translate-y-1 hover:shadow-lg backdrop-blur-sm`}>
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Image Container - Reduced height */}
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Icon Badge - Smaller */}
                    <div className={`absolute top-3 left-3 w-8 h-8 rounded-lg ${colors.bg} flex items-center justify-center backdrop-blur-sm border ${colors.border} group-hover:scale-110 transition-transform duration-300`}>
                      <project.icon className={`w-4 h-4 ${colors.text}`} />
                    </div>

                    {/* Hover Arrow - Smaller */}
                    <div className="absolute top-3 right-3 w-7 h-7 rounded-md bg-background/90 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border border-border/30">
                      <ArrowUpRight className="w-3 h-3 text-foreground" />
                    </div>
                  </div>

                  {/* Content - Reduced padding */}
                  <div className="p-4 md:p-5 relative z-10">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex-1">
                        <div className={`inline-block px-2 py-0.5 rounded ${colors.bg} mb-1.5`}>
                          <span className={`text-xs font-medium ${colors.text}`}>{project.category}</span>
                        </div>
                        {/* Fixed: Added Clash Display font to project title */}
                        <h3 className="font-clash-display text-lg md:text-xl font-medium mb-1.5 group-hover:text-black transition-all duration-300">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-xs font-light leading-relaxed mb-3 line-clamp-2">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Tags - Smaller */}
                    <div className="flex flex-wrap items-center gap-1.5 mb-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-muted/50 text-xs text-muted-foreground font-light border border-border/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        )}

        {/* CTA - View More Button */}
        {hasMore && (
          <div data-reveal className="text-center mt-10">
            <button
              onClick={handleViewMore}
              className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors group text-xs font-light cursor-pointer"
            >
              View More Projects
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Work;