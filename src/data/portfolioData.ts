
import { Calendar, FileText, BarChart, Mail, Users } from "lucide-react";

export const projects = [
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

export const certifications = [
  {
    title: "ALX Virtual Assistant Certification",
    description: "8-week intensive program covering Virtual Assistance Skills in the Digital Age",
    image: "/lovable-uploads/1c075c01-d364-442c-b604-e3481815b32e.png",
    date: "March 2025",
    issuer: "ALX"
  }
];
