
import { Card, CardContent } from "@/components/ui/card";

interface Certification {
  title: string;
  description: string;
  image: string;
  date: string;
  issuer: string;
}

interface CertificationGridProps {
  certifications: Certification[];
}

export const CertificationGrid = ({ certifications }: CertificationGridProps) => {
  return (
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
  );
};
