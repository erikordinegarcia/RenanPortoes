import { useState } from "react";
import { X } from "lucide-react";
import project1 from '@/assets/project-1.png';
import project2 from "@/assets/project-2.jpeg";
import project3 from "@/assets/project-3.jpeg";
import project4 from "@/assets/project-4.jpeg";
import project5 from "@/assets/project-5.jpeg";
import project6 from "@/assets/project-6.jpeg";
import project7 from "@/assets/project-7.jpeg";

const projects = [
  { image: project1, title: 'Portão Residencial Automatizado' },
  { image: project2, title: 'Estrutura Metálica Industrial' },
  { image: project3, title: 'Escada Metálica Amarela de Segurança' },
  { image: project4, title: 'Galpão Industrial em Aço' },
  { image: project5, title: 'Guarda-Corpo em Vidro e Inox' },
  { image: project6, title: 'Cobertura Metálica Externa' },
  { image: project7, title: 'Porta de Enrolar Comercial' },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-accent font-heading font-semibold text-sm uppercase tracking-widest">
            Portfólio
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-4">
            Galeria de <span className="text-accent">Fotos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Confira alguns dos nossos trabalhos entregues com excelência.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-on-scroll group relative h-64 rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
              style={{ transitionDelay: `${index * 80}ms` }}
              onClick={() => setSelectedProject(index)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-all duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-center">
                  <h3 className="font-heading font-bold text-primary-foreground text-xl mb-2">
                    {project.title}
                  </h3>
                  <span className="text-accent text-sm font-semibold uppercase tracking-wide">
                    Ver Projeto
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-primary/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div className="relative max-w-4xl w-full animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute -top-12 right-0 text-primary-foreground hover:text-accent transition-colors"
              aria-label="Fechar"
            >
              <X size={32} />
            </button>
            <img
              src={projects[selectedProject].image}
              alt={projects[selectedProject].title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <p className="text-center text-primary-foreground font-heading font-bold text-xl mt-4">
              {projects[selectedProject].title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
