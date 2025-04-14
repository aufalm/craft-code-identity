
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
      title: 'AWS Infrastructure with CDK',
      description: 'Implemented cloud infrastructure using AWS CDK with TypeScript, creating reusable components for deployment pipelines, networking, and application hosting environments.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=600',
      technologies: ['AWS', 'CDK', 'TypeScript', 'CloudFormation'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/ardaunified',
    },
    {
      title: 'Docker Swarm Monitoring',
      description: 'Developed comprehensive monitoring solution for Docker Swarm clusters using Grafana, Prometheus, and cAdvisor to provide real-time insights into container performance and resource utilization.',
      image: 'https://images.unsplash.com/photo-1481487196290-c152efe083f5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=600',
      technologies: ['Docker', 'Grafana', 'Prometheus', 'cAdvisor'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/ardaunified',
    },
    {
      title: 'CI/CD Pipeline with GitHub Actions',
      description: 'Created automated CI/CD pipelines using GitHub Actions for seamless testing, building, and deployment of applications to multiple environments, reducing deployment time by 40%.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=600',
      technologies: ['GitHub Actions', 'Docker', 'AWS', 'Testing'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/ardaunified',
    },
    {
      title: 'Database Migration System',
      description: 'Designed and implemented a system for migrating databases from on-premises servers to AWS RDS, ensuring zero downtime during transitions and maintaining data integrity throughout the process.',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=600',
      technologies: ['AWS RDS', 'MySQL', 'PostgreSQL', 'Data Migration'],
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
            Here are some projects that showcase my skills in infrastructure engineering, DevOps, and cloud technologies.
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
