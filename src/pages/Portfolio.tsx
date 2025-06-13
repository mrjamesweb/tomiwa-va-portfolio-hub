
import { PortfolioHeader } from "@/components/portfolio/PortfolioHeader";
import { FeaturedProject } from "@/components/portfolio/FeaturedProject";
import { ProjectGrid } from "@/components/portfolio/ProjectGrid";
import { CertificationGrid } from "@/components/portfolio/CertificationGrid";
import { SkillsSummary } from "@/components/portfolio/SkillsSummary";
import { projects, certifications } from "@/data/portfolioData";

export const Portfolio = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PortfolioHeader />
        <FeaturedProject project={projects[0]} />
        <ProjectGrid projects={projects.slice(1)} />
        <CertificationGrid certifications={certifications} />
        <SkillsSummary />
      </div>
    </div>
  );
};
