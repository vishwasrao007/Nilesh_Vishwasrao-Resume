
import { cn } from "@/lib/utils";
import AnimatedSection from "./AnimatedSection";

export const AboutSection = () => {
  const skills = [
    { name: "AI Tools", level: 70 },
    { name: "HTML5/CSS3", level: 99 },
    { name: "jQuery", level: 80 },
    { name: "Bootstrap", level: 95 },
    { name: "SASS", level: 90 },
    { name: "Angular", level: 40 },
    { name: "Vue.js", level: 40 },
  ];

  const tools = ["Cursor AI", "Lovable AI","V0 AI","Trae AI","copilot AI","chatgpt","Gemini","Shopify", "VS Code", "Sublime Text", "Figma", "Adobe XD", "Photoshop", "Illustrator", "Git/SVN", "Zeplin"];

  return (
    <section id="about" className="section bg-secondary/30 matrix-bg">
      <AnimatedSection className="container-custom">
        <h2 className="section-title text-primary hacker-cursor">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg">Front-End Developer with a strong focus on leveraging AI technologies to enhance productivity and streamline development workflows. Experienced in using 8 to 10 advanced AI tools to accelerate tasks, reduce development time, and improve code quality.</p>
            <p className="text-lg">Bringing over 12 + years of expertise in building responsive, user-centric web applications using HTML5, CSS3, SASS, jQuery, and modern frameworks like Angular and Vue.js. Proficient in CSS frameworks such as Bootstrap and pre-processors like SASS, with a sharp eye for pixel-perfect UI and design precision.</p>
            <p className="text-lg">Proven ability to lead projects from concept to deployment, collaborating closely with cross-functional teams across UX, UI, and engineering. Skilled in translating design mockups into W3C-compliant HTML, building reusable components, optimizing for performance and scalability, and conducting thorough code reviews.</p>
            <div>
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between">
                    <span className="font-medium">Bachelor of Computer Application (BCA)</span>
                    <span className="text-muted-foreground">2008 - 2011</span>
                  </div>
                  <p>University of Pune</p>
                </div>
                <div>
                  <div className="flex justify-between">
                    <span className="font-medium">Secondary School</span>
                    <span className="text-muted-foreground">2010 - 2014</span>
                  </div>
                  <p>Saraswati Vidyalaya, Ratnagiri</p>
                </div>
              </div>
            </div>
          </div>
          <AnimatedSection delay={200} className="space-y-8">
            <h3 className="text-xl font-semibold">Technical Skills</h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-1">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {["JS Animations", "GSAP", "CSS Animations", "SEO", "Responsive Design", "Web Optimization", "AI Tools", "CSS Frameworks", "CSS Pre-processors", "Frameworks", "Version Control",].map(
                  (tech) => (
                    <span
                      key={tech}
                      className={cn(
                        "px-3 py-1 bg-secondary text-secondary-foreground",
                        "rounded-full text-sm font-medium"
                      )}
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map(
                  (tool) => (
                    <span
                      key={tool}
                      className={cn(
                        "px-3 py-1 bg-secondary text-secondary-foreground",
                        "rounded-full text-sm font-medium"
                      )}
                    >
                      {tool}
                    </span>
                  )
                )}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default AboutSection;
