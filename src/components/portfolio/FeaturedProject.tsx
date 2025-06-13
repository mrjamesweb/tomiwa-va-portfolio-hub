
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

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

interface FeaturedProjectProps {
  project: Project;
}

export const FeaturedProject = ({ project }: FeaturedProjectProps) => {
  const IconComponent = project.icon;

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-slate-900 mb-8">Featured Project</h2>
      <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="grid lg:grid-cols-2 gap-0">
          <div className="aspect-video lg:aspect-auto">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <IconComponent className="h-6 w-6 text-pink-500" />
              <span className="text-sm font-medium text-pink-500 bg-pink-50 px-3 py-1 rounded-full">
                {project.category}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tools.map((tool, index) => (
                <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                  {tool}
                </span>
              ))}
            </div>
            {project.link && (
              <Button asChild className="w-fit">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};
