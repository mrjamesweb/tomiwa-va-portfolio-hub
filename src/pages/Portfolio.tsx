
import { PortfolioHeader } from "@/components/portfolio/PortfolioHeader";
import { FeaturedProject } from "@/components/portfolio/FeaturedProject";
import { ProjectGrid } from "@/components/portfolio/ProjectGrid";
import { CertificationGrid } from "@/components/portfolio/CertificationGrid";
import { SkillsSummary } from "@/components/portfolio/SkillsSummary";
import { projects, certifications } from "@/data/portfolioData";

export const Portfolio = () => {
  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-slate-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <PortfolioHeader />
        </div>
        <div className="animate-fade-in-up">
          <FeaturedProject project={projects[0]} />
        </div>
        <div className="animate-slide-in-right">
          <ProjectGrid projects={projects.slice(1)} />
        </div>
        <div className="animate-fade-in">
          <CertificationGrid certifications={certifications} />
        </div>
        <div className="animate-fade-in-up">
          <SkillsSummary />
        </div>
      </div>
    </div>
  );
};
