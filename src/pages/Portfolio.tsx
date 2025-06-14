
import { PortfolioHeader } from "@/components/portfolio/PortfolioHeader";
import { FeaturedProject } from "@/components/portfolio/FeaturedProject";
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
        
        {/* Featured Projects Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 font-playfair">Featured Projects</h2>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div key={project.id} className={`animate-fade-in-up`} style={{ animationDelay: `${index * 200}ms` }}>
                <FeaturedProject project={project} />
              </div>
            ))}
          </div>
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
