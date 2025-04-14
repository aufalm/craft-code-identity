
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Experience = () => {
  const experiences = [
    {
      company: 'IDN Media',
      position: 'Senior Infrastructure Engineer',
      period: 'Feb 2024 - Present',
      description: 'Contribute to reducing infrastructure cost on AWS environment. Create CI/CD pipeline with Github Action to deploy services, run automated testing and reduce deployment time. Create infrastructure code with CDK TypeScript to build infrastructure on AWS. Manage Docker swarm cluster and ECS cluster. Manage databases like Aurora MySQL, Aurora PostgreSQL, and RDS MariaDB. Create system monitoring with CloudWatch, Grafana, and Prometheus.',
    },
    {
      company: 'IDN',
      position: 'Infrastructure Engineer',
      period: 'Aug 2021 - Aug 2024',
      description: 'Managed Docker swarm cluster in staging and production environments. Created CI/CD pipeline to deploy applications with Azure pipeline. Collaborated with development teams to deploy applications and solve issues. Managed databases including MySQL, MariaDB, and ProxySQL for split read/write processes. Migrated servers from on-premises to AWS. Configured web servers with Nginx. Implemented monitoring solutions with Grafana.',
    },
    {
      company: 'Vascomm',
      position: 'DevOps Engineer',
      period: 'Mar 2019 - Dec 2024',
      description: 'Deployed applications in development, testing, and production environments both on client and internal company servers. Created promote PR documents. Operated and maintained internal GitLab. Set up Cyco configuration in GitLab. Created user guides for internal company use. Researched tools needed for DevOps. Configured Nginx for web services.',
    },
    {
      company: 'Vascomm',
      position: 'Software Quality Assurance',
      period: 'May 2018 - Feb 2019',
      description: 'Created test cases for functional application testing. Performed stress testing with JMeter. Tested functionality of Community and eRdkk applications. Created testing documentation and analyzed results.',
    },
    {
      company: 'BNI',
      position: 'Computer Operations Specialist',
      period: 'Nov 2016 - May 2018',
      description: 'Operated and maintained BNI 46 Agency Application. Created daily reports for the Agency Application. Performed data log and transaction retention every 3 months. Coordinated with clients to resolve Agency Application issues. Monitored Agency Application performance.',
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
