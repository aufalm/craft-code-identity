
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Skills', href: '#skills' },
    { title: 'Experience', href: '#experience' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-primary">
          DevPortfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.title}
              href={link.href}
              className="font-medium text-sm hover:text-primary transition-colors"
            >
              {link.title}
            </a>
          ))}
          <Button size="sm">
            Download CV
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-900 py-4 px-6 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.title}
                href={link.href}
                className="font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.title}
              </a>
            ))}
            <Button size="sm" className="mt-2 w-full">
              Download CV
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
