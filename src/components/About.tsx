
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              When I'm not on the job, I love hiking, gaming, watching movies, and exploring new places. If you have a project I can help with, please get in touch.
            </p>
            <p className="text-lg">
              Currently, I'm a Senior Infrastructure Engineer at IDN Media that focuses on creating and maintaining cloud infrastructure on AWS. My skills also include frontend development and mobile apps.
            </p>
            <p className="text-lg">
              I specialize in AWS infrastructure, Docker containerization, CI/CD pipelines with GitHub Actions, and monitoring systems. I'm passionate about optimizing infrastructure costs and improving application performance.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold">Name</h3>
                <p className="text-muted-foreground">Arda Putra Kusuma</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Email</h3>
                <p className="text-muted-foreground">ardaputrakusuma@gmail.com</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Location</h3>
                <p className="text-muted-foreground">Indonesia</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Availability</h3>
                <p className="text-muted-foreground">Open to opportunities</p>
              </div>
            </div>
            
            <div className="pt-4">
              <h3 className="font-semibold mb-4">Education</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4 py-2">
                  <p className="font-medium">High School Diploma, Information Technology</p>
                  <p className="text-muted-foreground">Universitas Negeri Surabaya (2012-2016)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
