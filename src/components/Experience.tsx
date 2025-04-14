
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Experience = () => {
  const experiences = [
    {
      company: 'Google',
      position: 'Senior Software Engineer',
      period: 'Jan 2021 - Present',
      description: 'Lead development of key features for Google Cloud Platform. Optimized application performance resulting in 30% faster load times. Mentored junior engineers and led technical interviews.',
    },
    {
      company: 'Microsoft',
      position: 'Software Engineer II',
      period: 'Mar 2018 - Dec 2020',
      description: 'Developed and maintained core components of Microsoft Teams. Implemented new features that improved user experience and engagement. Collaborated with cross-functional teams to deliver high-quality software.',
    },
    {
      company: 'Amazon',
      position: 'Software Engineer',
      period: 'Jun 2016 - Feb 2018',
      description: 'Built and optimized backend services for Amazon\'s e-commerce platform. Improved API response times by 40% through code refactoring and optimizations. Participated in on-call rotations ensuring 24/7 service reliability.',
    },
    {
      company: 'Tesla',
      position: 'Software Engineering Intern',
      period: 'May 2015 - Aug 2015',
      description: 'Assisted in developing internal tools for manufacturing processes. Created dashboards for real-time monitoring of production systems. Participated in agile development practices including daily stand-ups and sprint planning.',
    },
  ];

  return (
    <section id="experience" className="section bg-secondary/50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </AnimatedSection>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 bg-primary text-white rounded-full p-2 z-10">
                    <Briefcase size={16} />
                  </div>
                  
                  {/* Content */}
                  <AnimatedSection 
                    animation={index % 2 === 0 ? 'fade-in-right' : 'fade-in-left'} 
                    delay={index * 150} 
                    className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}
                  >
                    <Card className="overflow-hidden transform transition-all hover:shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex md:hidden items-center gap-2 mb-4">
                          <div className="bg-primary text-white rounded-full p-2">
                            <Briefcase size={16} />
                          </div>
                          <span className="text-sm text-muted-foreground">{exp.period}</span>
                        </div>
                        <h3 className="text-xl font-bold">{exp.position}</h3>
                        <p className="text-primary font-medium mb-2">{exp.company}</p>
                        <p className="hidden md:block text-sm text-muted-foreground mb-4">{exp.period}</p>
                        <p className="text-muted-foreground">{exp.description}</p>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
