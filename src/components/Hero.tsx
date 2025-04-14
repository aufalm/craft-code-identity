
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              DevOps & Infrastructure Engineer
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm <span className="text-primary">Arda Putra Kusuma</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-md">
              Senior Infrastructure Engineer at IDN Media with expertise in AWS, Docker, CI/CD pipelines, and cloud infrastructure management.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </div>
            <div className="flex gap-4 pt-2">
              <a 
                href="https://github.com/ardaunified" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/arda-putra-kusuma-52b537170/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:ardaputrakusuma@gmail.com"
                className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl opacity-30"></div>
              <div className="relative rounded-full overflow-hidden border-8 border-white shadow-xl aspect-square max-w-md mx-auto">
                <img 
                  src="public/lovable-uploads/4f922bc4-acd9-4e83-b006-e6fa9abbb4ba.png"
                  alt="Arda Putra Kusuma" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
