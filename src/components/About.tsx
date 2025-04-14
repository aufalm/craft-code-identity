
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
              I'm a dedicated software engineer with a passion for creating clean, efficient, and user-friendly applications. With over 5 years of experience in web and mobile development, I specialize in building robust solutions that solve real-world problems.
            </p>
            <p className="text-lg">
              My journey in tech began when I built my first website at 15. Since then, I've worked with startups and established companies alike, helping them achieve their technical goals and create meaningful digital experiences.
            </p>
            <p className="text-lg">
              When I'm not coding, I enjoy contributing to open-source projects, mentoring junior developers, and staying up-to-date with the latest technology trends through continuous learning.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold">Name</h3>
                <p className="text-muted-foreground">John Doe</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Email</h3>
                <p className="text-muted-foreground">email@example.com</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Location</h3>
                <p className="text-muted-foreground">San Francisco, CA</p>
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
                  <p className="font-medium">Master of Science in Computer Science</p>
                  <p className="text-muted-foreground">Stanford University (2018-2020)</p>
                </div>
                <div className="border-l-2 border-primary pl-4 py-2">
                  <p className="font-medium">Bachelor of Science in Software Engineering</p>
                  <p className="text-muted-foreground">MIT (2014-2018)</p>
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
