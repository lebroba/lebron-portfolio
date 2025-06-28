
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Twitter, Instagram } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@enlebron.design",
      href: "mailto:contact@enlebron.design"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/enlebron",
      color: "hover:text-blue-400"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/enlebron",
      color: "hover:text-blue-400"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/enlebron.design",
      color: "hover:text-pink-400"
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-20 bg-gradient-to-b from-background to-tactical-dark relative"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 
            id="contact-heading"
            className="text-4xl md:text-5xl font-orbitron font-bold text-foreground mb-4 tracking-wider"
          >
            Establish Contact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground font-rajdhani max-w-2xl mx-auto">
            Ready to deploy tactical design solutions for your mission objectives
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-8">
              <h3 className="text-2xl font-orbitron font-bold text-foreground mb-6 tracking-wide">
                Mission Brief
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-rajdhani font-medium text-foreground mb-2 uppercase tracking-wider"
                  >
                    Call Sign
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-primary/30 focus:border-primary text-foreground font-rajdhani"
                    placeholder="Your name or organization"
                    aria-describedby="name-help"
                  />
                  <p id="name-help" className="sr-only">Enter your name or organization name</p>
                </div>

                {/* Email Field */}
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-rajdhani font-medium text-foreground mb-2 uppercase tracking-wider"
                  >
                    Communications Channel
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-primary/30 focus:border-primary text-foreground font-rajdhani"
                    placeholder="your.email@domain.com"
                    aria-describedby="email-help"
                  />
                  <p id="email-help" className="sr-only">Enter your email address for communication</p>
                </div>

                {/* Subject Field */}
                <div>
                  <label 
                    htmlFor="subject" 
                    className="block text-sm font-rajdhani font-medium text-foreground mb-2 uppercase tracking-wider"
                  >
                    Mission Type
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-primary/30 focus:border-primary text-foreground font-rajdhani"
                    placeholder="Project type or service needed"
                    aria-describedby="subject-help"
                  />
                  <p id="subject-help" className="sr-only">Describe the type of project or service you need</p>
                </div>

                {/* Message Field */}
                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-rajdhani font-medium text-foreground mb-2 uppercase tracking-wider"
                  >
                    Mission Details
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-background/50 border-primary/30 focus:border-primary text-foreground font-rajdhani resize-none"
                    placeholder="Provide detailed information about your project requirements, timeline, and objectives..."
                    aria-describedby="message-help"
                  />
                  <p id="message-help" className="sr-only">Provide detailed information about your project</p>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  size="lg" 
                  className="tactical-btn w-full py-6 text-lg"
                  aria-label="Send mission brief"
                >
                  Transmit Mission Brief
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Direct Contact */}
            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-8">
              <h3 className="text-2xl font-orbitron font-bold text-foreground mb-6 tracking-wide">
                Direct Communication
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 bg-primary/5 border border-primary/20 rounded-lg hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 group"
                    aria-label={`Contact via ${info.label}: ${info.value}`}
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                      <info.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-sm font-rajdhani font-medium text-muted-foreground uppercase tracking-wider">
                        {info.label}
                      </div>
                      <div className="font-rajdhani text-foreground group-hover:text-primary transition-colors duration-300">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-8">
              <h3 className="text-2xl font-orbitron font-bold text-foreground mb-6 tracking-wide">
                Social Channels
              </h3>
              
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-primary/20 border border-primary/30 rounded-lg flex items-center justify-center hover:bg-primary/30 hover:border-primary transition-all duration-300 ${social.color}`}
                    aria-label={`Visit ${social.label} profile`}
                  >
                    <social.icon className="w-6 h-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-8">
              <h3 className="text-2xl font-orbitron font-bold text-foreground mb-4 tracking-wide">
                Operational Status
              </h3>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-tactical-pulse" aria-hidden="true"></div>
                <span className="font-rajdhani text-foreground">
                  Available for new missions
                </span>
              </div>
              <p className="text-muted-foreground font-rajdhani mt-2">
                Typical response time: 24-48 hours
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 military-grid opacity-5" aria-hidden="true"></div>
    </section>
  );
};

export default ContactSection;
