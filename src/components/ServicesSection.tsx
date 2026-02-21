import servicePortoes from "@/assets/service-portoes.jpg";
import serviceEstruturas from "@/assets/service-estruturas.jpg";
import serviceMezaninos from "@/assets/service-mezaninos.jpg";
import serviceEscadas from "@/assets/service-escadas.jpg";
import serviceGuardacorpo from "@/assets/service-guardacorpo.jpg";
import serviceCoberturas from "@/assets/service-coberturas.jpg";

const services = [
  {
    title: "Portões Automáticos",
    description: "Portões de correr, basculantes e pivotantes com automação de alta performance e design personalizado.",
    image: servicePortoes,
  },
  {
    title: "Estruturas Metálicas",
    description: "Projetos estruturais em aço para galpões, coberturas industriais e construções comerciais.",
    image: serviceEstruturas,
  },
  {
    title: "Mezaninos",
    description: "Mezaninos industriais e comerciais que otimizam o espaço com segurança e resistência.",
    image: serviceMezaninos,
  },
  {
    title: "Escadas Metálicas",
    description: "Escadas retas, caracol e em L com acabamento refinado para ambientes internos e externos.",
    image: serviceEscadas,
  },
  {
    title: "Guarda-corpo",
    description: "Guarda-corpos em aço inox, ferro e vidro temperado para sacadas, mezaninos e escadas.",
    image: serviceGuardacorpo,
  },
  {
    title: "Coberturas Metálicas",
    description: "Coberturas, pergolados e toldos metálicos para áreas de lazer, garagens e espaços comerciais.",
    image: serviceCoberturas,
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-accent font-heading font-semibold text-sm uppercase tracking-widest">
            Nossos Serviços
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-4">
            O que fazemos de <span className="text-accent">melhor</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Oferecemos soluções completas em serralheria com materiais de primeira linha e
            acabamento impecável.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="animate-on-scroll group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border flex flex-col h-full"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* IMAGEM */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-500" />
              </div>

              {/* CONTEÚDO */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-heading font-bold text-xl text-foreground mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
