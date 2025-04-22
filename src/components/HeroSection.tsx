import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Github, Linkedin, FileText, Mail, Phone, MapPin } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
              <span className="block">Hi, I'm</span>
              <span className="text-primary">Nilesh Vishwasrao</span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground">
              Senior UI Developer with 9+ years of experience
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <div className="flex items-center text-foreground/80 gap-2 text-lg">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Navi Mumbai</span>
              </div>
              <div className="flex items-center text-foreground/80 gap-2 text-lg">
                <Phone className="h-5 w-5 text-primary" />
                <span>80821 74432</span>
              </div>
              <div className="flex items-center text-foreground/80 gap-2 text-lg">
                <Mail className="h-5 w-5 text-primary" />
                <span>nilesh.vishwasrao@gmail.com</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button className="btn-primary">
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button variant="outline" className="btn-outline">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
            <div className="flex space-x-4 pt-4">
              <a
                href="https://github.com/vishwasrao007"
                target="_blank"
                rel="noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/nilesh-vishwasrao-12644063/"
                target="_blank"
                rel="noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          <div className={cn("relative", "animate-fade-in")} style={{ animationDelay: "0.4s" }}>
            <div className="bg-gradient-to-br from-green-500/20 to-green-800/20 rounded-full w-[400px] h-[400px] md:w-[500px] md:h-[500px] mx-auto blur-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative aspect-square w-[350px] md:w-[450px] mx-auto overflow-hidden rounded-2xl">
              <img 
                src="/profile.svg"
                alt="Nilesh Vishwasrao"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
