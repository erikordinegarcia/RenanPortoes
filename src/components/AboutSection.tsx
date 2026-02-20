import { Shield, Clock, Users, Award } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const differentials = [
  { icon: Clock, label: "+10 Anos de Experiência" },
  { icon: Users, label: "Equipe Especializada" },
  { icon: Shield, label: "Garantia de Qualidade" },
  { icon: Award, label: "Atendimento Rápido" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="animate-on-scroll relative">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src={aboutTeam}
                alt="Equipe SpPortoes"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            {/* Accent decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-lg -z-10 hidden lg:block" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-accent/30 rounded-lg -z-10 hidden lg:block" />
          </div>

          {/* Content */}
          <div className="animate-on-scroll">
            <span className="text-accent font-heading font-semibold text-sm uppercase tracking-widest">
              Sobre Nós
            </span>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mt-3 mb-6">
              Tradição e inovação em cada <span className="text-accent">projeto</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              A SpPortões Serralheria nasceu da paixão por transformar metal em
              soluções funcionais e esteticamente impecáveis. Com mais de uma
              década de atuação, nos tornamos referência em qualidade e
              compromisso no segmento.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nossa equipe de profissionais altamente qualificados utiliza
              equipamentos de última geração para entregar projetos sob medida
              que atendem às mais exigentes necessidades dos nossos clientes.
            </p>

            {/* Differentials */}
            <div className="grid grid-cols-2 gap-4">
              {differentials.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 bg-card p-4 rounded-lg border border-border"
                >
                  <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-heading font-semibold text-sm text-foreground">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
