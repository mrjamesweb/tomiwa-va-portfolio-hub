
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, MessageCircle, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || "New Contact Form Submission");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:oyedeleoluwatomiwac@gmail.com?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    toast({
      title: "Message Prepared!",
      description: "Your email client has been opened with your message. Please send it to complete your contact request.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "oyedeleoluwatomiwac@gmail.com",
      link: "mailto:oyedeleoluwatomiwac@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone/WhatsApp",
      value: "+234 704 039 8610",
      link: "tel:+2347040398610"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Chat on WhatsApp",
      link: "https://wa.me/2347040398610?text=Hello! I'm interested in your Virtual Assistant services."
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect on LinkedIn",
      link: "https://www.linkedin.com/in/oluwatomiwa-oyedele-5081b3270/"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Nigeria",
      link: null
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Let's Work Together
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to streamline your business operations? I'm here to help you achieve your goals 
            with professional virtual assistance services. Get in touch today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-900">Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or how I can help you..."
                    rows={6}
                    className="mt-1"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-pink-500 hover:bg-pink-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Preparing Message..."
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Get In Touch
              </h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="bg-pink-100 p-3 rounded-full">
                      <info.icon className="h-6 w-6 text-pink-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          target={info.link.startsWith('http') ? "_blank" : undefined}
                          rel={info.link.startsWith('http') ? "noopener noreferrer" : undefined}
                          className="text-pink-500 hover:text-pink-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-gray-600">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <Card className="bg-gradient-to-r from-pink-50 to-purple-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Prefer Quick Communication?
                </h3>
                <div className="space-y-3">
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full justify-start border-pink-200 hover:bg-pink-50"
                  >
                    <a
                      href="https://wa.me/2347040398610?text=Hello! I'm interested in your Virtual Assistant services."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-3 h-5 w-5 text-green-500" />
                      WhatsApp Me
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full justify-start border-pink-200 hover:bg-pink-50"
                  >
                    <a href="mailto:oyedeleoluwatomiwac@gmail.com">
                      <Mail className="mr-3 h-5 w-5 text-pink-500" />
                      Send Email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <h3 className="text-xl font-bold text-slate-900">Available Now</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  I'm currently accepting new clients and projects. I typically respond to inquiries within 24 hours.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Response Time:</span>
                    <span className="font-medium">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Project Start:</span>
                    <span className="font-medium">1-3 business days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time Zone:</span>
                    <span className="font-medium">WAT (UTC+1)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-slate-900 rounded-2xl text-white p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Productivity?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help streamline your business operations and free up your time 
            to focus on what matters most to your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-pink-500 hover:bg-pink-600">
              <a
                href="https://wa.me/2347040398610?text=Hello! I'd like to discuss a project with you."
                target="_blank"
                rel="noopener noreferrer"
              >
                Start a Project
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
              <a href="mailto:oyedeleoluwatomiwac@gmail.com">
                Schedule a Call
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
