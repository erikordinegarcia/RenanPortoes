import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-primary/80" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center py-32">
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <div className="inline-block bg-accent/20 border border-accent/40 rounded-full px-4 py-1.5 mb-6">
            <span className="text-accent font-heading font-semibold text-sm uppercase tracking-widest">
              Excelência em Serralheria
            </span>
          </div>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
            Soluções em Serralheria com{" "}
            <span className="text-accent">Qualidade</span> e{" "}
            <span className="text-accent">Segurança</span>
          </h1>
          <p className="text-primary-foreground/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Há mais de 10 anos transformando metal em soluções sob medida para
            residências, comércios e indústrias. Projetos personalizados com
            garantia de qualidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo("#contato")}
              className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold py-4 px-8 rounded-md transition-all duration-200 text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Solicitar Orçamento
            </button>
            <button
              onClick={() => scrollTo("#servicos")}
              className="border-2 border-primary-foreground/30 text-primary-foreground hover:border-accent hover:text-accent font-bold py-4 px-8 rounded-md transition-all duration-200 text-lg"
            >
              Ver Serviços
            </button>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
