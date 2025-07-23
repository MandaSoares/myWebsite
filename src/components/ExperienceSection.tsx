import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Tipo definido com period opcional
type Experience = {
  title: string;
  role: string;
  image: string;
  url: string;
  period?: string;
};

export const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      title: "Força Meninas",
      role: "Software Developer | STEAM Leader",
      image: "/images/frmeninas.jpg",
      url: "https://frmeninas.com.br/"
    },
    {
      title: "Projeto ConsCientistas",
      role: "Co-founder and Executive Director",
      image: "/images/conscientistas.jpg",
      url: "https://www.instagram.com/projeto_conscientistas/"
    },
    {
      title: "Equipe Maia",
      role: "Management Leader",
      image: "/images/maia.jpg",
      url: "https://www.instagram.com/maiafacens/"
    },
    {
      title: "Projeto Sem Parar",
      role: "Astronomy Teacher",
      image: "/images/semparar.jpg",
      url: "https://www.instagram.com/sempararprojeto/"
    },
    {
      title: "Centro Universitário Facens",
      role: "Full-time Student | Scientific Initiation Student",
      image: "/images/facens.jpg",
      url: "https://www.facens.br/"
    },
    {
      title: "Instituto Semear",
      role: "Jovem Semente",
      image: "/images/jovemsemente.jpg",
      url: "https://www.isemear.org.br"
    },
    {
      title: "LALA - Latin American Leadership Academy",
      role: "LALA Alumni | Data Analyst",
      image: "/images/lala.jpg",
      url: "https://latinamericanleadershipacademy.org"
    },
    {
      title: "Instituto Federal do Sul de Minas Gerais",
      role: "Computer Technician Student",
      image: "/images/if.jpg",
      url: "https://www.ifsuldeminas.edu.br/"
    },
    {
      title: "InSpace",
      role: "Member",
      image: "/images/inspace.jpg",
      url: "https://www.instagram.com/inspace_group/"
    },
    {
      title: "The Climate Reality Leadership Corps",
      role: "Climate Leader",
      image: "/images/tcrp.jpg",
      url: "https://www.climaterealityproject.org/"
    },
    {
      title: "The Wellbeing Project - Ecological Belonging",
      role: "Student Ambassador",
      image: "/images/twp.jpg",
      url: "https://wellbeing-project.org/",
      //period: "2023"
    },
    {
      title: "Aspire Leaders Program",
      role: "Young Global Leader",
      image: "/images/aspire.jpg",
      url: "https://www.aspireleaders.org",
      //period: "2023"
    }
  ];

  const handleExperienceClick = (url: string) => {
    if (url !== "#") {
      window.open(url, '_blank');
    }
  };

  const handleCVClick = () => {
    window.open(
      'https://docs.google.com/document/d/e/2PACX-1vRrCBZcPK87hAFRL3x-5JoFKV3iq_WeIpqJM3-X6syYz7kxtk5Jkb75qLDTutjfa6LUwPLgXPlLRvCq/pub'
    );
  };

  return (
    <section id="experience" className="py-20 px-6 bg-[#4F6D4F]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-luckiest text-white text-center mb-16 animate-slide-up">
          Some of my experiences
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((experience, index) => (
            <Card 
            key={index} 
            className="bg-[#F1E9DB] border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleExperienceClick(experience.url)}
            >
              <div className="p-6">
                <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-earth-100">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="text-lg font-bold text-earth-800 mb-2">
                  {experience.title}
                </h3>
                <p className="text-earth-600 text-sm mb-2">
                  {experience.role}
                </p>
                {experience.period && (
                  <p className="text-earth-500 text-xs">
                    {experience.period}
                  </p>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-600 mb-4 animate-bounce-gentle">
          <span className="text-white text-xl">↓</span>
        </div>
          <div>
          <Button 
            onClick={handleCVClick}
            className="bg-white text-brown-800 hover:bg-brown-300 border-2 border-white font-semibold text-base md:text-lg px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            You can find out more here in my CV
          </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

