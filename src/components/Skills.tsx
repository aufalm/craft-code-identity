
import React from 'react';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const frontendSkills = [
    'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Redux', 'Next.js', 
    'Tailwind CSS', 'Material UI', 'SCSS'
  ];
  
  const backendSkills = [
    'Node.js', 'Python', 'Java', 'Spring Boot', 'Express', 'Django', 'GraphQL',
    'RESTful APIs', 'MySQL', 'PostgreSQL', 'MongoDB'
  ];
  
  const devopsSkills = [
    'Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Git', 'GitHub Actions', 'Jenkins',
    'Terraform', 'Linux', 'Nginx'
  ];
  
  const otherSkills = [
    'Agile', 'Scrum', 'UI/UX Design', 'Test-Driven Development', 'System Design',
    'Performance Optimization', 'Microservices Architecture'
  ];

  return (
    <section id="skills" className="section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-6 text-primary">Frontend Development</h3>
            <div className="flex flex-wrap gap-2">
              {frontendSkills.map((skill) => (
                <Badge key={skill} variant="outline" className="py-2 px-3 text-sm font-medium">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-6 text-primary">Backend Development</h3>
            <div className="flex flex-wrap gap-2">
              {backendSkills.map((skill) => (
                <Badge key={skill} variant="outline" className="py-2 px-3 text-sm font-medium">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-6 text-primary">DevOps & Tooling</h3>
            <div className="flex flex-wrap gap-2">
              {devopsSkills.map((skill) => (
                <Badge key={skill} variant="outline" className="py-2 px-3 text-sm font-medium">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-6 text-primary">Other Skills</h3>
            <div className="flex flex-wrap gap-2">
              {otherSkills.map((skill) => (
                <Badge key={skill} variant="outline" className="py-2 px-3 text-sm font-medium">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
