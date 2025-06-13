
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  link?: string;
  category: string;
  tools: string[];
  status: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface ProjectGridProps {
  projects: Project[];
}

export const ProjectGrid = ({ projects }: ProjectGridProps) => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-slate-900 mb-8">Additional Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => {
          const IconComponent = project.icon;
          return (
            <Card key={project.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <IconComponent className="h-5 w-5 text-pink-500" />
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
          );
        })}
      </div>
    </div>
  );
};
