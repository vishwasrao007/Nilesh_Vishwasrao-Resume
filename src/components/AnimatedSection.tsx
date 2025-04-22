
import React, { useEffect, useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  parallax?: boolean;
  parallaxSpeed?: number;
}

export const AnimatedSection = ({ 
  children, 
  className,
  delay = 0,
  parallax = false,
  parallaxSpeed = 0.2
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!parallax) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (sectionRef.current) {
        const sectionPos = sectionRef.current.getBoundingClientRect().top + scrollY;
        const offset = (scrollY - sectionPos) * parallaxSpeed;
        setOffset(offset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [parallaxSpeed, parallax]);

  return (
    <div 
      ref={sectionRef}
      className={cn(
        "transition-all duration-1000 ease-in-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        className
      )}
      style={{ 
        transitionDelay: `${delay}ms`,
        transform: parallax ? `translateY(${offset}px)` : undefined 
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
