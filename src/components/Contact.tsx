
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real app, you would send this data to an API
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="section bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential collaboration? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a href="mailto:email@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                    email@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a href="tel:+11234567890" className="text-muted-foreground hover:text-primary transition-colors">
                    +1 (123) 456-7890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-muted-foreground">
                    San Francisco, CA, United States
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Connect With Me</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-background p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-background p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-background p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Textarea 
                  name="message" 
                  placeholder="Your Message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full min-h-[150px]"
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
