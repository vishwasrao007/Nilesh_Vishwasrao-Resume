import { useState } from "react";
import { cn } from "@/lib/utils";
import { ExternalLink, Github, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "./AnimatedSection";

type ProjectCategory = "All" | "Web Development" | "Mobile Apps" | "E-commerce" | "Banking" | "Insurance";

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  category: ProjectCategory;
};

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Aditya Birla Customer Portal",
      description: "B2C portal for construction tracking & payment history built with Ionic Framework.",
      tags: ["HTML5", "CSS3", "JavaScript", "Ionic Framework"],
      imageUrl: "https://wealth.adityabirlacapital.com/static/media/aboutus_Newlogo.128a6ba0.webp",
      liveUrl: "https://www.google.com/search?q=birla+estates+my+home+mobile+app&sca_esv=53b49960daf18915&sxsrf=AHTn8zref6Mp-JOxlyoCYb_wUT4-p4oouw%3A1745326545651&ei=0ZEHaPzFJ6-evr0PgLKToAE&ved=0ahUKEwi88pSG2OuMAxUvj68BHQDZBBQQ4dUDCBI&uact=5&oq=birla+estates+my+home+mobile+app&gs_lp=Egxnd3Mtd2l6LXNlcnAiIGJpcmxhIGVzdGF0ZXMgbXkgaG9tZSBtb2JpbGUgYXBwMggQABiABBiiBDIIEAAYgAQYogQyCBAAGIAEGKIEMgUQABjvBTIIEAAYgAQYogRIsQdQqwRYqwRwAngAkAEAmAG4AaABuAGqAQMwLjG4AQPIAQD4AQGYAgOgAr8BwgILEAAYgAQYsAMYogTCAggQABiwAxjvBZgDAIgGAZAGBZIHAzIuMaAH_gSyBwMwLjG4B7sB&sclient=gws-wiz-serp",
      category: "Mobile Apps",
    },
    {
      id: 2,
      title: "ICICI",
      description: "Banking website with 200+ products showcased, built with HTML5, CSS3, jQuery with SEO-focused implementation and legacy browser support up to IE9.",
      tags: ["HTML5", "CSS3", "jQuery", "SEO", "IE9 Support"],
      imageUrl: "https://i.pinimg.com/736x/ea/68/0c/ea680c8cc632984b0a72aa0973fb436f.jpg",
      liveUrl: "https://www.iciciprulife.com/",
      category: "Banking",
    },
    {
      id: 3,
      title: "Edelweiss Tokio",
      description: "Insurance website featuring micro-interaction lead forms using SVG animations for enhanced user experience.",
      tags: ["HTML5", "CSS3", "SVG Animations", "Micro-interactions"],
      imageUrl: "https://5.imimg.com/data5/TT/RR/DG/SELLER-87796312/edelweiss-tokio-life-insurance.jpg",
      // liveUrl: "#",
      category: "Insurance",
    },
    {
      id: 4,
      title: "CROMA",
      description: "E-commerce website built with React-based templates ensuring seamless cross-browser compatibility.",
      tags: ["React", "Cross-browser", "E-commerce"],
      imageUrl: "https://logowik.com/content/uploads/images/croma9414.logowik.com.webp",
      liveUrl: "https://www.croma.com/",
      category: "E-commerce",
    },
    {
      id: 5,
      title: "Play Anywhere - CatchMedia",
      description: "Betting application with AngularJS, featuring modular components and multi-platform support across Desktop, Mobile, and TV.",
      tags: ["AngularJS", "Modular Components", "Multi-platform"],
      imageUrl: "https://images.seeklogo.com/logo-png/48/1/catchmedia-logo-png_seeklogo-485761.png",
      liveUrl: "https://playanywhere.com/",
      category: "Web Development",
    },
    {
      id: 6,
      title: "AXIS ATM",
      description: "HTML implementation for ATM screens with backward compatibility considerations for older systems.",
      tags: ["HTML", "Backward Compatibility", "UI/UX"],
      imageUrl: "https://images.seeklogo.com/logo-png/1/2/axis-bank-logo-png_seeklogo-14775.png",
      category: "Banking",
    },
  ];
  
  const categories: ProjectCategory[] = ["All", "Web Development", "Mobile Apps", "E-commerce", "Banking", "Insurance"];
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section relative py-24 matrix-bg">
      <div className="container-custom">
        <AnimatedSection>
          <h2 className="section-title text-primary hacker-cursor mb-12">Projects</h2>
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-md border-2 transition-all duration-300",
                  activeCategory === category 
                    ? "bg-primary text-primary-foreground border-primary" 
                    : "bg-transparent text-foreground border-border hover:border-primary"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredProjects.map((project, index) => (
            <AnimatedSection 
              key={project.id}
              delay={300 + index * 100}
            >
              <div 
                className={cn(
                  "group rounded-lg overflow-hidden bg-card border border-border",
                  "hover:border-primary shadow-lg shadow-primary/10",
                  "transition-all duration-500 transform hover:-translate-y-2"
                )}
              >
                <div className="relative h-48 overflow-hidden bg-[#ffffff]">
                  <div className="absolute inset-0 bg-black/50 z-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Badge variant="outline" className="text-primary border-primary flex items-center gap-1">
                      <Tag className="h-3 w-3" />
                      {project.category}
                    </Badge>
                  </div>
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-mono font-semibold text-primary">{project.title}</h3>
                  <p className="text-foreground/80">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-normal bg-secondary text-secondary-foreground">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center pt-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-foreground hover:text-primary flex items-center gap-1 transition-colors"
                      >
                        <Github className="h-5 w-5" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-foreground hover:text-primary flex items-center gap-1 transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={600} className="mt-16">
          <h3 className="text-2xl font-bold text-primary mb-8">Other Projects</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              "Bajaj Finserv", "TATA International", "Ashiana Housing", "Reliance Digital", 
              "Bigrock", "Syska", "Goqii", "Axis Bank", "HDFC Bank", 
              "ICICI Prudential", "ICrushiFlush"
            ].map((name) => (
              <Badge 
                key={name} 
                className="bg-secondary/50 text-foreground hover:bg-primary/20 transition-colors text-sm py-2 px-4"
              >
                {name}
              </Badge>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProjectsSection;
