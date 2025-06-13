
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Users, Target, CheckCircle, Download } from "lucide-react";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div className="min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="mb-6 md:mb-8">
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-full p-1 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto">
              <img
                src="/lovable-uploads/d1a1e302-6dff-4c61-916d-7e8be1d6e9ef.png"
                alt="Oluwatomiwa Oyedele"
                className="w-full h-full rounded-full object-cover object-top bg-white"
              />
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Meet Oluwatomiwa Christianah Oyedele
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A dedicated Virtual Assistant with a unique blend of healthcare precision and administrative excellence, 
            committed to helping businesses achieve their goals through efficient support services.
          </p>
        </div>

        {/* About Me Content */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">My Story</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
              <p>
                I'm Oyedele Oluwatomiwa, a certified Virtual Assistant who recently completed comprehensive training 
                from ALX. My journey into virtual assistance is built on a solid foundation of administrative experience 
                through voluntary work with various organizations.
              </p>
              <p>
                As a graduate of Nursing Science from the prestigious Ladoke Akintola University of Technology (LAUTECH), 
                Ogbomoso, Nigeria, I bring the same attention to detail, organization, and care that healthcare demands 
                to my virtual assistance services.
              </p>
              <p>
                My background in administrative skills has naturally enhanced my capabilities in scheduling appointments, 
                managing calendars, and handling data entry with precision. I've discovered my passion for helping 
                businesses streamline their operations and achieve greater efficiency.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">My Approach</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Detailed Project Planning",
                  description: "I ensure comprehensive project plans and timelines for every task"
                },
                {
                  title: "Resource Identification",
                  description: "Proactive identification of tools and resources needed for project success"
                },
                {
                  title: "Proactive Problem-Solving",
                  description: "Anticipating challenges and providing solutions before they become issues"
                },
                {
                  title: "Effective Communication",
                  description: "Clear, timely communication to keep all stakeholders informed and aligned"
                }
              ].map((approach, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm md:text-base">{approach.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base">{approach.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Credentials */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-8 md:mb-12">
            Education & Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 md:p-8 text-center">
                <GraduationCap className="h-12 w-12 md:h-16 md:w-16 text-pink-500 mx-auto mb-6" />
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                  Bachelor of Nursing Science
                </h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  Ladoke Akintola University of Technology (LAUTECH)
                </p>
                <p className="text-gray-700 text-sm md:text-base">
                  Ogbomoso, Nigeria - A prestigious institution known for academic excellence
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 md:p-8 text-center">
                <Award className="h-12 w-12 md:h-16 md:w-16 text-pink-500 mx-auto mb-6" />
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                  ALX Virtual Assistant Certification
                </h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  8-week intensive program in Virtual Assistance Skills
                </p>
                <Button variant="outline" size="sm" className="mt-2">
                  <Download className="h-4 w-4 mr-2" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Skills & Expertise */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-8 md:mb-12">
            Core Competencies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card>
              <CardContent className="p-4 md:p-6">
                <Target className="h-10 w-10 md:h-12 md:w-12 text-pink-500 mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">Administrative Excellence</h3>
                <ul className="space-y-2 text-gray-600 text-sm md:text-base">
                  <li>• Email Management & Organization</li>
                  <li>• Calendar & Appointment Scheduling</li>
                  <li>• Data Entry & Management</li>
                  <li>• Document Preparation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 md:p-6">
                <Users className="h-10 w-10 md:h-12 md:w-12 text-pink-500 mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">Client Relations</h3>
                <ul className="space-y-2 text-gray-600 text-sm md:text-base">
                  <li>• Customer Service & Support</li>
                  <li>• Professional Communication</li>
                  <li>• Client Relationship Management</li>
                  <li>• Conflict Resolution</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 md:p-6">
                <GraduationCap className="h-10 w-10 md:h-12 md:w-12 text-pink-500 mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">Technical Skills</h3>
                <ul className="space-y-2 text-gray-600 text-sm md:text-base">
                  <li>• Google Workspace Proficiency</li>
                  <li>• Social Media Management</li>
                  <li>• Project Management Tools</li>
                  <li>• Expense Tracking & Reporting</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
            I'm confident that I can provide top-notch support to help your organization achieve its goals. 
            Let's discuss how I can enhance your productivity and streamline your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-pink-500 hover:bg-pink-600 text-white">
              <Link to="/contact">Get In Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
              <Link to="/portfolio">View My Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
