
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const skills = [
  "Project Management",
  "Data Analysis & Management",
  "Content Creation",
  "Client Communication",
  "Process Optimization",
  "Tool Proficiency",
  "Timeline Management",
  "Quality Assurance"
];

export const SkillsSummary = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl text-white p-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Skills Demonstrated</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          These projects showcase my expertise across various administrative and virtual assistance domains
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
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
  );
};
