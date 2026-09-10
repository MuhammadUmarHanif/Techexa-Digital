import { useState, useRef } from "react";
import { ArrowRight, Zap } from "lucide-react";
import { useSectionReveal } from "@/hooks/use-section-reveal";
// import { FaLinkedin, FaGithub, FaBehance, FaEnvelope, FaGlobe } from "react-icons/fa";

const teamMembers = [
  {
    name: "Hamza Kayani",
    role: "CEO",
    image: "https://i.postimg.cc/LXRD14yK/Gemini-Generated-Image-rv7cpkrv7cpkrv7c.png",
    // socialLinks: [
    //   { icon: FaLinkedin, url: "https://www.linkedin.com/in/hamza-kayani-pod-expert/", label: "LinkedIn", color: "#000000" },
    //   { icon: FaEnvelope, url: "mailto:hamza@techexa.co.uk", label: "Email", color: "#000000" },
    // ],
  },
   {
    name: "Umar Hanif",
    role: "Front-End Developer & Designer",
    image: "https://i.postimg.cc/ry9hk4fw/Gemini-Generated-Image-8xpfcv8xpfcv8xpf.png",
    // socialLinks: [
    //   { icon: FaLinkedin, url: "https://www.linkedin.com/in/muhammad-umar-461b313a8/", label: "LinkedIn", color: "#000000" },
    //   { icon: FaGithub, url: "https://github.com/bunnybunnyy", label: "GitHub", color: "#000000" },
    //   { icon: FaGlobe, url: "https://muhammad-umar-developer.vercel.app/", label: "Portfolio", color: "#000000" },
    // ],
  },
  {
    name: "Farooq Khan",
    role: "Full-Stack Developer",
    image: "https://i.postimg.cc/xj48kJZS/Gemini-Generated-Image-jc8nezjc8nezjc8n.png",
    // socialLinks: [
    //   { icon: FaLinkedin, url: "https://www.linkedin.com/in/farooq-khan-1b881735b/", label: "LinkedIn", color: "#000000" },
    //   { icon: FaGithub, url: "https://github.com/arooqkhan/", label: "GitHub", color: "#000000" },
    //   { icon: FaEnvelope, url: "mailto:farooqkhan@techexa.co.uk", label: "Email", color: "#000000" },
    // ],
  },
 
  {
    name: "Suzanne Maryam",
    role: "Project Manager",
    image: "https://i.postimg.cc/rF13tffC/Suzanne.png",
    // socialLinks: [
    //   { icon: FaLinkedin, url: "https://www.linkedin.com/in/sozain-maryam-9b2a45297", label: "LinkedIn", color: "#000000" },
    //   { icon: FaEnvelope, url: "mailto:suzanne@techexa.co.uk", label: "Email", color: "#000000" },
    // ],
  },
  {
    name: "Shahzain Baloch",
    role: "Flutter Developer",
    image: "https://i.postimg.cc/cLJ3qyPW/Gemini-Generated-Image-v1svvv1svvv1svvv.png",
    // socialLinks: [
    //   { icon: FaLinkedin, url: "https://www.linkedin.com/in/shahzain-baloch-096893391", label: "LinkedIn", color: "#000000" },
    //   { icon: FaEnvelope, url: "mailto:shahzain@techexa.co.uk", label: "Email", color: "#000000" },
    //   { icon: FaGlobe, url: "https://balochcodes-dev.web.app/", label: "Portfolio", color: "#000000" },
    // ],
  },
  {
    name: "Umar Khalid",
    role: "Shopify Expert",
    image: "https://i.postimg.cc/B6wFQhD4/Gemini-Generated-Image-2wjq2o2wjq2o2wjq.png",
    // socialLinks: [
    //   { icon: FaLinkedin, url: "https://www.linkedin.com/in/umarkhalid0034/", label: "LinkedIn", color: "#000000" },
    //   { icon: FaBehance, url: "https://www.behance.net/hamzakayani3/", label: "Behance", color: "#000000" },
    //   { icon: FaEnvelope, url: "mailto:umarkhalid@techexa.co.uk", label: "Email", color: "#000000" },
    // ],
  },
  {
    name: "Shamshad Ali",
    role: "Graphic Designer",
    image: "https://i.postimg.cc/FHVkp1LK/Gemini-Generated-Image-j5vwr6j5vwr6j5vw.png",
    // socialLinks: [
    //   { icon: FaLinkedin, url: "https://www.linkedin.com/in/shamshad-ali-majeedi", label: "LinkedIn", color: "#000000" },
    //   { icon: FaBehance, url: "https://www.behance.net/shamshadalimajeedi", label: "Behance", color: "#000000" },
    //   { icon: FaEnvelope, url: "mailto:shamshadali@techexa.co.uk", label: "Email", color: "#000000" },
    // ],
  },
];

const Team = () => {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);
  const displayedMembers = showAll ? teamMembers : teamMembers.slice(0, 8);

  useSectionReveal(sectionRef, {}, [displayedMembers.length]);

  // Helper to render a team member card
  const renderMemberCard = (member, index) => (
    <div
      key={member.name}
      data-reveal
      className="relative rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm will-change-transform"
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-full aspect-[4/5] object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 p-2.5 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0 flex-1 ml-2">
            <p className="font-clash text-2xl font-medium text-white truncate mb-1">
              {member.name}
            </p>
 <p className="text-[14px] text-white/70 truncate mb-5">
              {member.role}
            </p>
          </div>
          {/* <div className="flex items-center gap-1 flex-shrink-0">
            {member.socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-7 h-7 rounded-md transition-all duration-200 hover:opacity-80 hover:scale-110"
                style={{ backgroundColor: social.color }}
                aria-label={social.label}
              >
                <social.icon className="w-3.5 h-3.5 text-white" />
              </a>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );

  // Render CTA card (to be placed after Shamshad)
  const renderCtaCard = () => (
  <div
    key="cta-card"
    data-reveal
    className="relative rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm group hover:shadow-md transition-shadow duration-300 will-change-transform"
  >
    <div className="relative h-full min-h-[300px] sm:min-h-[350px] flex flex-col items-start justify-center p-6 text-left bg-gradient-to-br from-purple-50 via-white to-cyan-50">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-cyan-500/5 to-transparent" />
      <div className="relative z-10 space-y-4 w-full mt-8">
        <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-700 to-cyan-700 bg-clip-text text-transparent">
          Join Our Team
        </h3>
        <p className="text-slate-600 text-sm max-w-xs">
          We're always looking for talented individuals to push boundaries.
        </p>
         <div className="relative z-10 flex justify-center w-full pt-14 -ml-8">
        <a
          href="https://www.linkedin.com/company/techexa-digital-services-smc-private-limited/jobs/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-sm font-semibold transition-all hover:shadow-lg hover:scale-105"
        >
          Explore Careers
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
      </div>
    </div>
  </div>
);

  // Build the grid items: all members, then after Shamshad add CTA card
  const gridItems = [];
  displayedMembers.forEach((member, idx) => {
    gridItems.push(renderMemberCard(member, idx));
    // After rendering Shamshad's card (the last one), add the CTA card
    if (member.name === "Shamshad Ali") {
      gridItems.push(renderCtaCard());
    }
  });

  return (
    <section ref={sectionRef} id="team" className="py-16 md:py-24 relative overflow-hidden bg-white">
      {/* Decorative orbs */}
      <div data-parallax="70" className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      <div data-parallax="52" className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div data-parallax="34" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div data-reveal className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 mb-6 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-cyan-600" />
            <span className="text-sm text-slate-700 font-medium">Meet the Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight">
            <span className="font-clash font-semibold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent">
              Innovators Driving
            </span>
            <br />
            <span className="text-gradient font-bold bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Meet the creative minds behind our cutting-edge solutions
          </p>
        </div>

        {/* Team Grid with integrated CTA card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20">
          {gridItems}
        </div>
      </div>
    </section>
  );
};

export default Team;