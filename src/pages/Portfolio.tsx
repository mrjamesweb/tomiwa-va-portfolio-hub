import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Calendar, FileText, BarChart, Mail, Users, CheckCircle } from "lucide-react";

export const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Employment Project Plan - Virtual Assistant Training",
      description: "Comprehensive project management plan developed during ALX Virtual Assistant training, showcasing detailed timeline management, milestone tracking, and resource allocation for career development.",
      image: "/lovable-uploads/5441599b-fe4e-43c8-8e54-a4629ad810fa.png",
      link: "https://docs.google.com/spreadsheets/d/17jahIZPVKxA4eocpLM4FmxZgUxSi_3VSr7lND1byYaU/edit?usp=drivesdk",
      category: "Project Management",
      tools: ["Google Sheets", "Project Planning", "Timeline Management"],
      status: "Completed",
      icon: Calendar
    },
    {
      id: 2,
      title: "Customer Database Management System",
      description: "Developed and maintained a comprehensive customer database for a local business, including contact information, purchase history, and communication logs. Improved client retention by 30%.",
      category: "Data Management",
      tools: ["Google Sheets", "Data Analysis", "CRM"],
      status: "Ongoing",
      icon: FileText
    },
    {
      id: 3,
      title: "Social Media Content Calendar",
      description: "Created and managed a 3-month social media content calendar for a healthcare organization, including post scheduling, engagement tracking, and performance analytics.",
      category: "Social Media Management",
      tools: ["Content Planning", "Social Media Tools", "Analytics"],
      status: "Completed",
      icon: BarChart
    },
    {
      id: 4,
      title: "Email Marketing Campaign Management",
      description: "Designed and executed email marketing campaigns for a nonprofit organization, achieving a 25% increase in engagement rates through strategic content planning and audience segmentation.",
      category: "Email Marketing",
      tools: ["Email Marketing", "Content Creation", "Analytics"],
      status: "Completed",
      icon: Mail
    },
    {
      id: 5,
      title: "Event Coordination & Administrative Support",
      description: "Provided comprehensive administrative support for a medical conference, including attendee registration, vendor coordination, and logistics management for 200+ participants.",
      category: "Event Management",
      tools: ["Event Planning", "Coordination", "Registration Management"],
      status: "Completed",
      icon: Users
    }
  ];

  const certifications = [
    {
      title: "ALX Virtual Assistant Certification",
      description: "8-week intensive program covering Virtual Assistance Skills in the Digital Age",
      image: "/lovable-uploads/1c075c01-d364-442c-b604-e3481815b32e.png",
      date: "March 2025",
      issuer: "ALX"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            My Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my work samples and certifications that demonstrate my expertise in virtual assistance, 
            administrative support, and project management.
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Featured Project</h2>
          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="aspect-video lg:aspect-auto">
                <img
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <projects[0].icon className="h-6 w-6 text-pink-500" />
                  <span className="text-sm font-medium text-pink-500 bg-pink-50 px-3 py-1 rounded-full">
                    {projects[0].category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {projects[0].title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {projects[0].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[0].tools.map((tool, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {tool}
                    </span>
                  ))}
                </div>
                <Button asChild className="w-fit">
                  <a href={projects[0].link} target="_blank" rel="noopener noreferrer">
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Other Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Additional Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.slice(1).map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <project.icon className="h-5 w-5 text-pink-500" />
                      <span className="text-sm font-medium text-pink-500 bg-pink-50 px-2 py-1 rounded">
                        {project.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-xs text-green-600">{project.status}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{cert.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{cert.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl text-white p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Skills Demonstrated</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              These projects showcase my expertise across various administrative and virtual assistance domains
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Project Management",
              "Data Analysis & Management",
              "Content Creation",
              "Client Communication",
              "Process Optimization",
              "Tool Proficiency",
              "Timeline Management",
              "Quality Assurance"
            ].map((skill, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-pink-400 flex-shrink-0" />
                <span className="text-gray-200">{skill}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button asChild size="lg" className="bg-pink-500 hover:bg-pink-600">
              <a href="/contact">Work With Me</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
