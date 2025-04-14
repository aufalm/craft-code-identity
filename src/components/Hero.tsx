
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
              Full Stack Developer
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm <span className="text-primary">Arda Putra Kusuma</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-md">
              Passionate Full Stack Developer experienced in creating elegant, efficient, and user-friendly web applications.
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
                  src="https://media.licdn.com/dms/image/D5603AQEUuQ_AFx0gKA/profile-displayphoto-shrink_800_800/0/1673421781821?e=1719446400&v=beta&t=tJoIEYxH-hJUSH0nWPeBHv8fcB-qvUgZqsYQx4EiUBs"
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
