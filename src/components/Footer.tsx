
import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-900 py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-primary">DevPortfolio</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Creating elegant software solutions
            </p>
          </div>
          
          <div className="flex gap-4 mb-6 md:mb-0">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="mailto:email@example.com"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} John Doe. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
