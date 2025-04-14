
import React from 'react';
import { Badge } from '@/components/ui/badge';
import AnimatedSection from './AnimatedSection';

const Skills = () => {
  const frontendSkills = [
    'React', 'TypeScript', 'JavaScript', 'Next.js', 'HTML5', 'CSS3', 'Redux', 
    'Tailwind CSS', 'Material UI', 'SCSS', 'Styled Components'
  ];
  
  const backendSkills = [
    'Node.js', 'Express', 'MongoDB', 'Firebase', 'REST APIs', 'GraphQL',
    'JWT Authentication', 'Mongoose', 'Socket.io', 'Serverless'
  ];
  
  const devopsSkills = [
    'Git', 'GitHub', 'Docker', 'AWS', 'CI/CD', 'Vercel', 'Netlify',
    'Linux', 'Nginx', 'Digital Ocean'
  ];
  
  const otherSkills = [
    'Agile', 'Scrum', 'UI/UX Design', 'Responsive Design', 'Figma',
    'Performance Optimization', 'Testing', 'PWA', 'SEO'
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
            <h3 className="text-xl font-bold mb-6 text-primary">Frontend Development</h3>
            <div className="flex flex-wrap gap-2">
              {frontendSkills.map((skill) => (
                <Badge key={skill} variant="outline" className="py-2 px-3 text-sm font-medium">
                  {skill}
                </Badge>
              ))}
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-right" delay={300} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-6 text-primary">Backend Development</h3>
            <div className="flex flex-wrap gap-2">
              {backendSkills.map((skill) => (
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
