import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectModal } from "./ProjectModal";
import { useState } from "react";

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: "NutriAção",
      description: "A digital platform aimed at promoting healthy eating habits, combining artificial intelligence and educational content.",
      fullDescription: "NutriAção is a university project created by me and my classmates with the aim of encouraging healthier eating habits. The platform brings together educational content, personalized suggestions and practical guidance to help users adopt a balanced diet. We want to make health care simple, accessible and part of everyone's routine.",
      image: "/images/nutriacao.jpg",         // capa do card
      video: "/videos/nutriacao-demo.webm",         // vídeo para exibir no modal
      tags: ["React", "Next.js", "Convex", "AI/ML"],
      liveUrl: "https://nutri-view.vercel.app"
    },
    {
      title: "SilentCare",
      description: "Assistive Technology for Deaf Mothers in the Home Environment.",
      fullDescription: "Accessibility is a fundamental right, and technology plays an essential role in the inclusion of people with disabilities. Deaf mothers and housewives face daily challenges, such as not being able to hear their baby's cries or alarms, which can cause insecurity. The lack of accessible, low-cost solutions compromises their autonomy and quality of life. With this in mind, the SilentCare project proposes an innovative solution that uses integrated hardware and software to notify them of important sounds in the environment.",
      image: "/images/silentcare.jpg",
      video: "/videos/silentcare-demo.webm",
      tags: ["ESP32", "C++", "Max9814", "IoT", "Mobile App"],
      liveUrl: "https://website-silentcare.vercel.app",
      youtubeUrl: "https://www.youtube.com/watch?v=hghULhCYtaw"
    },
    {
      title: "MultiDownloader",
      description: "MultiDownloader is a web application that allows you to perform simultaneous downloads of multiple files from public URLs.",
      fullDescription: "MultiDownloader is a web application built with React and TailwindCSS that allows users to download multiple files simultaneously from public URLs. Using native browser technologies like the Fetch API and Blob API, it manages downloads in parallel while limiting the number of concurrent downloads to ensure better performance and stability.",
      image: "/images/multidownloader.jpg",
      video: "/videos/demo_Multidownloader.webm",
      tags: ["React Hooks", "Fetch API", "Blob API"],
      liveUrl: "https://multi-downloader.vercel.app"
    }
  ];

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-20 px-6 bg-bege">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-luckiest text-center mb-16 animate-slide-up">
          Latest Projects
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-[#5B2C06] backdrop-blur-sm border-white/20 hover:bg-[#a1765b] cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => handleProjectClick(project)}
            >
              <div className="p-6">
                <div className="aspect-video mb-6 rounded-lg overflow-hidden bg-moss-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-white mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-moss-700 text-moss-100 hover:bg-moss-600"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </section>
  );
};

