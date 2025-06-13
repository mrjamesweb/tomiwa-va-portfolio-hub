import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star, CheckCircle, Calendar, Mail, Database, Users } from "lucide-react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Your Reliable
                  <span className="text-pink-400 block">Virtual Assistant</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  I'm Oluwatomiwa Oyedele, a certified Virtual Assistant ready to streamline your business operations and boost your productivity.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-pink-500 hover:bg-pink-600 text-white">
                  <Link to="/contact">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-pink-500 text-pink-500 hover:bg-pink-50 hover:text-pink-600">
                  <Link to="/services">View Services</Link>
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4 justify-center lg:justify-start">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-300 text-sm sm:text-base">Certified ALX Graduate</span>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-full p-1">
                <img
                  src="/lovable-uploads/d1a1e302-6dff-4c61-916d-7e8be1d6e9ef.png"
                  alt="Oluwatomiwa Oyedele"
                  className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full object-cover object-top bg-white"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white text-slate-900 p-3 md:p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-semibold text-sm md:text-base">Available Now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Administrative Services I Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              From email management to project coordination, I provide comprehensive virtual assistance to help your business thrive.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
                <CardContent className="p-4 md:p-6 text-center">
                  <service.icon className="h-10 w-10 md:h-12 md:w-12 text-pink-500 mx-auto mb-4" />
                  <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Button asChild size="lg">
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
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
                    <span className="text-gray-700 text-sm md:text-base">{point}</span>
                  </div>
                ))}
              </div>
              <Button asChild className="mt-6 md:mt-8" size="lg">
                <Link to="/about">Learn More About Me</Link>
              </Button>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 md:p-8 rounded-2xl">
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6 text-sm md:text-base">
                  Let's discuss how I can help streamline your business operations and increase your productivity.
                </p>
                <Button asChild size="lg" className="bg-pink-500 hover:bg-pink-600 text-white">
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
