import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "Proprietário Residencial",
    text: "Excelente trabalho! O portão automático ficou perfeito, com acabamento impecável. Equipe super profissional e pontual na entrega.",
    rating: 5,
  },
  {
    name: "Ana Paula Souza",
    role: "Arquiteta",
    text: "Trabalho com a SpPortões há 3 anos em diversos projetos. A qualidade do acabamento e o cumprimento de prazos são diferenciais únicos.",
    rating: 5,
  },
  {
    name: "Roberto Silva",
    role: "Empresário",
    text: "Contratei para fazer o mezanino do meu galpão e o resultado superou as expectativas. Estrutura sólida e preço justo. Recomendo!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-accent font-heading font-semibold text-sm uppercase tracking-widest">
            Depoimentos
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-4">
            O que nossos clientes <span className="text-accent">dizem</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="animate-on-scroll bg-card p-8 rounded-lg shadow-md border border-border hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="font-heading font-bold text-accent text-lg">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground">{t.name}</p>
                  <p className="text-muted-foreground text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
