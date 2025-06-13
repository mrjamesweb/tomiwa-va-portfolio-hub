
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Mail, 
  Calendar, 
  Database, 
  Users, 
  Share2, 
  Plane, 
  Calculator, 
  CheckCircle,
  Clock,
  Target,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

export const Services = () => {
  const services = [
    {
      icon: Mail,
      title: "Email Management & Organization",
      description: "Professional email handling, inbox organization, response management, and email marketing support.",
      features: ["Inbox organization", "Email responses", "Filter setup", "Email marketing"]
    },
    {
      icon: Calendar,
      title: "Scheduling & Calendar Management",
      description: "Efficient appointment scheduling, calendar coordination, and deadline management across time zones.",
      features: ["Appointment scheduling", "Calendar coordination", "Reminder setup", "Meeting planning"]
    },
    {
      icon: Database,
      title: "Data Entry & Management",
      description: "Accurate data processing, spreadsheet creation, database management, and data analysis.",
      features: ["Data entry", "Spreadsheet creation", "Database management", "Data analysis"]
    },
    {
      icon: Users,
      title: "Customer Service & Support",
      description: "Professional customer support, query resolution, and client relationship management.",
      features: ["Customer support", "Query resolution", "Live chat support", "Client relations"]
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Content creation, social media scheduling, community management, and engagement strategies.",
      features: ["Content creation", "Post scheduling", "Community management", "Analytics reporting"]
    },
    {
      icon: Plane,
      title: "Travel Planning & Coordination",
      description: "Comprehensive travel arrangements, itinerary planning, and accommodation bookings.",
      features: ["Flight bookings", "Hotel reservations", "Itinerary planning", "Travel documentation"]
    },
    {
      icon: Calculator,
      title: "Expense Tracking & Reporting",
      description: "Financial record keeping, expense categorization, budget tracking, and financial reporting.",
      features: ["Expense tracking", "Budget management", "Financial reports", "Invoice processing"]
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Administrative Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive virtual assistance services designed to streamline your business operations 
            and boost your productivity. Let me handle the details while you focus on growing your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <service.icon className="h-12 w-12 text-pink-500 mx-auto mb-4" />
                <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            My Work Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-pink-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Target className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">1. Project Planning</h3>
              <p className="text-gray-600">
                I develop detailed project plans and timelines to ensure clear expectations and deliverables.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">2. Resource Identification</h3>
              <p className="text-gray-600">
                I identify all necessary tools and resources needed to complete your project efficiently.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">3. Execution & Delivery</h3>
              <p className="text-gray-600">
                I execute tasks with precision and provide regular updates until successful completion.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose My Services */}
        <div className="bg-gradient-to-r from-gray-50 to-pink-50 rounded-2xl p-12 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Why Choose My Administrative Services?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              My unique combination of healthcare training and virtual assistance expertise ensures 
              meticulous attention to detail and professional service delivery.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Certified Professional",
                description: "ALX-trained with proven administrative experience"
              },
              {
                title: "Detail-Oriented",
                description: "Healthcare background ensures precision in every task"
              },
              {
                title: "Proactive Approach",
                description: "Anticipate needs and solve problems before they arise"
              },
              {
                title: "Google Workspace Expert",
                description: "Proficient in all Google tools for maximum efficiency"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-slate-900 rounded-2xl text-white p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Streamline Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how my administrative services can help you save time, increase productivity, 
            and achieve your business goals more efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-pink-500 hover:bg-pink-600">
              <Link to="/contact">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-pink-500 text-pink-500 hover:bg-pink-50 hover:text-pink-600">
              <Link to="/portfolio">View My Portfolio</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
