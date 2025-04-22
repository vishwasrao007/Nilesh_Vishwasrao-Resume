import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-xl font-heading font-bold">
              Nilesh Vishwasrao
            </a>
            <p className="mt-2 text-accent-foreground/80">
              Crafting digital experiences through code.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/vishwasrao007"
              target="_blank"
              rel="noreferrer"
              className="text-accent-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/nilesh-vishwasrao-12644063/"
              target="_blank"
              rel="noreferrer"
              className="text-accent-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:nilesh.vishwasrao@gmail.com"
              className="text-accent-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-accent-foreground/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-accent-foreground/80 text-sm">
            © {new Date().getFullYear()} Nilesh Vishwasrao. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
