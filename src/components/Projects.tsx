
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Projects = () => {
  const projects = [
    {
      title: 'Patient Management System',
      description: 'A comprehensive healthcare platform for managing patient records, appointments, and medical history. Features include real-time notifications and secure data storage.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=600',
      technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Express'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/ardaunified',
    },
    {
      title: 'E-Learning Platform',
      description: 'Interactive learning platform with course management, video lectures, quizzes, and progress tracking. Supports both instructors and students with different role-based interfaces.',
      image: 'https://images.unsplash.com/photo-1481487196290-c152efe083f5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/ardaunified',
    },
    {
      title: 'Inventory Management System',
      description: 'Enterprise solution for tracking inventory, managing suppliers, and generating real-time reports. Includes barcode scanning functionality and automated reorder notifications.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=600',
      technologies: ['Next.js', 'TypeScript', 'Firebase', 'Redux'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/ardaunified',
    },
    {
      title: 'Financial Dashboard',
      description: 'Interactive financial analytics dashboard with real-time data visualization, transaction tracking, and budget planning tools. Supports multiple currencies and customizable views.',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=600',
      technologies: ['React', 'Express', 'MongoDB', 'D3.js'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/ardaunified',
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each represents different challenges and solutions in web development.
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={index} animation="zoom-in" delay={index * 150}>
              <Card className="overflow-hidden transform transition-all hover:shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-all hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
