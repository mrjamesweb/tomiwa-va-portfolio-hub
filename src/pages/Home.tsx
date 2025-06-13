
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star, CheckCircle, Calendar, Mail, Database, Users } from "lucide-react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Your Reliable
                  <span className="text-pink-400 block">Virtual Assistant</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  I'm Oluwatomiwa Oyedele, a certified Virtual Assistant ready to streamline your business operations and boost your productivity.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-pink-500 hover:bg-pink-600">
                  <Link to="/contact">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                  <Link to="/services">View Services</Link>
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-300">Certified ALX Graduate</span>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-full p-1">
                <img
                  src="/lovable-uploads/d1a1e302-6dff-4c61-916d-7e8be1d6e9ef.png"
                  alt="Oluwatomiwa Oyedele"
                  className="w-80 h-80 rounded-full object-cover object-top bg-white"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white text-slate-900 p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-semibold">Available Now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Administrative Services I Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From email management to project coordination, I provide comprehensive virtual assistance to help your business thrive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Mail,
                title: "Email Management",
                description: "Professional email organization, response management, and inbox optimization."
              },
              {
                icon: Calendar,
                title: "Calendar Management",
                description: "Efficient scheduling, appointment coordination, and deadline tracking."
              },
              {
                icon: Database,
                title: "Data Entry & Management",
                description: "Accurate data processing, spreadsheet management, and database organization."
              },
              {
                icon: Users,
                title: "Customer Support",
                description: "Professional customer service and client communication management."
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <service.icon className="h-12 w-12 text-pink-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Why Choose Me as Your Virtual Assistant?
              </h2>
              <div className="space-y-4">
                {[
                  "ALX-certified Virtual Assistant with proven track record",
                  "Nursing science background bringing attention to detail",
                  "Proficient in Google Workspace and productivity tools",
                  "Strong communication and problem-solving skills",
                  "Proactive approach to project management",
                  "Dedicated to helping clients achieve their goals"
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
              <Button asChild className="mt-8" size="lg">
                <Link to="/about">Learn More About Me</Link>
              </Button>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6">
                  Let's discuss how I can help streamline your business operations and increase your productivity.
                </p>
                <Button asChild size="lg" className="bg-pink-500 hover:bg-pink-600">
                  <Link to="/contact">Contact Me Today</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
