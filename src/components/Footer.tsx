import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contato" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading font-extrabold text-2xl mb-4">
              SP<span className="text-accent">PORTÕES</span>
            </h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Soluções completas em serralheria com qualidade, segurança e compromisso com o
              cliente.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {['#inicio', '#servicos', '#sobre', '#galeria'].map((href) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-primary-foreground/60 hover:text-accent transition-colors text-sm capitalize"
                  >
                    {href.replace('#', '')}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://api.whatsapp.com/send/?phone=5511958624537&"
                  className="flex items-center gap-3 text-primary-foreground/60 hover:text-accent transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-accent" />
                  (11) 95862-4537
                </a>
              </li>

              <li>
                <a
                  href="mailto:contato@metalforge.com.br"
                  className="flex items-center gap-3 text-primary-foreground/60 hover:text-accent transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-accent" />
                  contato@metalforge.com.br
                </a>
              </li>

              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Rua+das+Indústrias,+123,+São+Paulo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-primary-foreground/60 hover:text-accent transition-colors text-sm"
                >
                  <MapPin className="w-4 h-4 text-accent mt-0.5" />
                  Rua das Indústrias, 123 - São Paulo, SP
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Fale com um especialista</h4>

            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6">
              Atendimento técnico e personalizado para seu projeto em portões automáticos e
              estruturas metálicas.
            </p>

            <a
              href="https://wa.me/5511958624537?"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent-hover text-accent-foreground font-semibold text-sm uppercase tracking-wide px-6 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg w-full inline-flex items-center justify-center"
            >
              Entre em contato
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} SP Portões Automáticos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
