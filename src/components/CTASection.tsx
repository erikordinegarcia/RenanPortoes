import { MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-28 bg-section-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-on-scroll">
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-section-dark-foreground mb-6">
            Precisa de um projeto em metal <span className="text-accent">sob medida?</span>
          </h2>
          <p className="text-section-dark-foreground/70 text-lg mb-10 max-w-xl mx-auto">
            Entre em contato agora mesmo e receba um orçamento sem compromisso. Atendemos com
            agilidade e qualidade.
          </p>
          <a
            href="https://wa.me/5511958624537?text=Olá! Gostaria de solicitar um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent hover:bg-accent-hover text-accent-foreground font-bold py-4 px-10 rounded-md transition-all duration-200 text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <MessageCircle className="w-6 h-6" />
            Solicitar Orçamento via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
