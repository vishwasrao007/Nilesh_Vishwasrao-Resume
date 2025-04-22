import { cn } from "@/lib/utils";

type Experience = {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
  subtitle?: string;
};

export const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      title: "Senior Manager (UI Specialist)",
      company: "HDFC Bank",
      duration: "Sep 2022 - Present",
      description: [
        "Driving innovation by introducing smart, time-saving solutions and optimizing existing workflows using AI tools and modern development practices.",
        "Collaborating closely with external vendors such as TCS and BackBase, assisting in resolving technical issues and addressing queries efficiently.",
        "Overseeing project timelines and deliverables provided by vendors to ensure adherence to quality and schedule expectations.",
        "Providing technical support to both design and development teams, offering guidance on best practices and implementation strategies.",
        "Actively contributing to front-end development by writing clean, scalable code and creating new websites or microsites aligned with business goals and design standards.",
      ],
      technologies: ["AI", "HTML5", "CSS3", "JavaScript", "Multi-platform"],
      subtitle: "At HDFC Bank, I play a hybrid role that combines innovation, collaboration, and technical expertise to support both in-house and vendor-led digital initiatives. My key responsibilities include:"
    },
    {
      id: 2,
      title: "Interface Developer",
      company: "Catch Media Inc",
      duration: "May 2021 - Dec 2022",
      description: [
        "UI screen development for websites and multi-device apps (Desktop, Smart TVs)",
        "AngularJS integration for dynamic and interactive interfaces",
        "Modular component planning and development for reusable code",
      ],
      technologies: ["Angular", "HTML5", "CSS3", "JavaScript", "Multi-platform"],
    },
    {
      id: 3,
      title: "Senior Interface Developer",
      company: "Fractal Ink Consultancy",
      duration: "Oct 2011 - May 2021",
      description: [
        "Web app development with HTML5, CSS3, SASS, jQuery",
        "Full project lifecycle management from concept to deployment",
        "UI/UX design feasibility analysis and optimization for speed",
      ],
      technologies: ["HTML5", "CSS3", "SASS", "jQuery", "Responsive Design"],
    },
  ];

  return (
    <section id="experience" className="section bg-secondary/30">
      <div className="container-custom">
        <h2 className="section-title text-primary hacker-cursor">Work Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              className={cn(
                "grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-6 relative"
              )}
            >
              {/* Timeline for md screens and above */}
              {index < experiences.length - 1 && (
                <div className="hidden md:block absolute left-0 top-16 bottom-0 w-0.5 bg-primary/30"></div>
              )}
              
              {/* Experience details */}
              <div className="md:pr-8">
                <h3 className="text-xl font-semibold">{exp.company}</h3>
                <p className="text-muted-foreground">{exp.duration}</p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-primary">{exp.title}</h4>
                {exp.subtitle && (
                  <p className="text-muted-foreground italic">{exp.subtitle}</p>
                )}
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
