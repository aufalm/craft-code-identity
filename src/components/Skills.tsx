
import React from 'react';
import { Badge } from '@/components/ui/badge';
import AnimatedSection from './AnimatedSection';

const Skills = () => {
  const cloudSkills = [
    'AWS', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Azure DevOps',
    'CloudWatch', 'Terraform', 'CDK TypeScript', 'Cloud Infrastructure', 'Nginx',
    'Load Balancing'
  ];
  
  const databaseSkills = [
    'MySQL', 'PostgreSQL', 'MariaDB', 'Aurora', 'RDS', 'MongoDB',
    'ProxySQL', 'Database Management', 'Data Migration'
  ];
  
  const devopsSkills = [
    'Git', 'GitHub', 'GitLab', 'Docker Swarm', 'ECS', 'Linux',
    'Bash Scripting', 'Monitoring', 'Grafana', 'Prometheus'
  ];
  
  const otherSkills = [
    'Web Development', 'Mobile Development', 'Performance Optimization', 
    'System Architecture', 'Technical Documentation', 'Problem Solving',
    'Team Management'
  ];

  return (
    <section id="skills" className="section">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection animation="fade-in-left" delay={150} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-6 text-primary">Cloud & Infrastructure</h3>
            <div className="flex flex-wrap gap-2">
              {cloudSkills.map((skill) => (
                <Badge key={skill} variant="outline" className="py-2 px-3 text-sm font-medium">
                  {skill}
                </Badge>
              ))}
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-right" delay={300} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-6 text-primary">Databases</h3>
            <div className="flex flex-wrap gap-2">
              {databaseSkills.map((skill) => (
                <Badge key={skill} variant="outline" className="py-2 px-3 text-sm font-medium">
                  {skill}
                </Badge>
              ))}
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-left" delay={450} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-6 text-primary">DevOps & Tooling</h3>
            <div className="flex flex-wrap gap-2">
              {devopsSkills.map((skill) => (
                <Badge key={skill} variant="outline" className="py-2 px-3 text-sm font-medium">
                  {skill}
                </Badge>
              ))}
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-right" delay={600} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-6 text-primary">Other Skills</h3>
            <div className="flex flex-wrap gap-2">
              {otherSkills.map((skill) => (
                <Badge key={skill} variant="outline" className="py-2 px-3 text-sm font-medium">
                  {skill}
                </Badge>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Skills;
