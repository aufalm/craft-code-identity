
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
              I'm a dedicated Full Stack Developer with 3 years of experience in web development. I specialize in crafting modern web applications with React, TypeScript, and Next.js in the frontend, and Node.js, Express, and MongoDB in the backend.
            </p>
            <p className="text-lg">
              My goal is to create impactful digital experiences that solve real-world problems. I'm experienced in developing frontend interfaces, integrating with APIs, implementing authentication systems, and deploying scalable applications.
            </p>
            <p className="text-lg">
              When I'm not coding, I enjoy learning new technologies, contributing to open-source projects, and staying current with the latest development trends to continuously improve my skills.
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
                <p className="text-muted-foreground">Depok, West Java, Indonesia</p>
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
                  <p className="font-medium">Associate's degree, Public Health</p>
                  <p className="text-muted-foreground">Universitas Terbuka (2024)</p>
                </div>
                <div className="border-l-2 border-primary pl-4 py-2">
                  <p className="font-medium">Full Stack Development Training</p>
                  <p className="text-muted-foreground">Harisenin.com and Binar Academy (2021)</p>
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
