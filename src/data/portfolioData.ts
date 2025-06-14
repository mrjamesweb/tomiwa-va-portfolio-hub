
import { Calendar, FileText, BarChart, ClipboardList, Database } from "lucide-react";

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
    title: "Team Meeting Agenda - Professional Documentation",
    description: "Comprehensive meeting agenda template showcasing professional document creation, structured planning, and team coordination capabilities for corporate environments.",
    image: "/lovable-uploads/942cae0a-4af3-4d32-a2f2-f31dd1cf6648.png",
    link: "https://docs.google.com/document/d/1-yeFnx07x5FPvGDKd870pE9CXWAbu2B9Y1971qAPX90/edit?tab=t.0",
    category: "Document Management",
    tools: ["Google Docs", "Meeting Planning", "Team Coordination"],
    status: "Completed",
    icon: ClipboardList
  },
  {
    id: 3,
    title: "Research on Parks and Cities in California",
    description: "Detailed research analysis and data compilation on California's parks and cities, demonstrating research skills, data organization, and analytical capabilities for location-based projects.",
    image: "/lovable-uploads/8e150a21-ba98-4be6-9c39-70c761d6697f.png",
    link: "https://docs.google.com/spreadsheets/d/140m9iirDXmO9dmHZSchtDf5nrdhDB8W3AzghFiZeBEU/edit?gid=0#gid=0",
    category: "Research & Analysis",
    tools: ["Google Sheets", "Data Analysis", "Research Skills"],
    status: "Completed",
    icon: BarChart
  },
  {
    id: 4,
    title: "VA Program - Skills Tracker",
    description: "Comprehensive skills assessment and tracking system developed for Virtual Assistant program, showcasing self-evaluation capabilities, progress monitoring, and professional development planning.",
    image: "/lovable-uploads/a61525e6-2599-406b-a5ac-54d20bef236f.png",
    link: "https://docs.google.com/spreadsheets/d/13I9EB-4gLuIeD5-oKCEVtz0JdcajZURzkzf4hJG18MQ/edit?gid=1499130837#gid=1499130837",
    category: "Skills Assessment",
    tools: ["Google Sheets", "Skills Tracking", "Professional Development"],
    status: "Completed",
    icon: Database
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
