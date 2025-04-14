
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Experience = () => {
  const experiences = [
    {
      company: 'PT. Pavestar Mediatech Indonesia',
      position: 'Full Stack Developer',
      period: 'Sep 2022 - Present',
      description: 'Developing web applications using React, Next.js, and TypeScript. Managing MongoDB databases, implementing authentication with JWT, and developing REST APIs with Express. Working on Third Party API integration and Payment Gateway integration.',
    },
    {
      company: 'SEVEN INC',
      position: 'Freelance Full Stack Developer',
      period: 'May 2022 - Sep 2022',
      description: 'Developed fullstack websites for clients using Next.js, TypeScript, and Express. Implemented REST APIs, integrated MongoDB, and deployed applications to cloud platforms for optimal performance and scalability.',
    },
    {
      company: 'Wisemanor Corps',
      position: 'Full Stack Developer',
      period: 'Dec 2021 - May 2022',
      description: 'Created web-based internal company tools using React.js, Node.js, and MongoDB. Built e-commerce features including product browsing, cart systems, and secure checkout processes. Integrated authentication and authorization systems.',
    },
    {
      company: 'Binar Academy x Harisenin Bootcamp',
      position: 'Full Stack Developer Student',
      period: 'Aug 2021 - Dec 2021',
      description: 'Completed intensive full stack web development bootcamp focusing on modern JavaScript frameworks and tools. Developed projects using React, Node.js, Express and MongoDB. Learned industry best practices, version control with Git, and agile development methodology.',
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
