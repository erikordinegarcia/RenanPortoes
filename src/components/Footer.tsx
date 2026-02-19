import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contato" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading font-extrabold text-2xl mb-4">
              METAL<span className="text-accent">FORGE</span>
            </h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Soluções completas em serralheria com qualidade, segurança e
              compromisso com o cliente.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {["#inicio", "#servicos", "#sobre", "#projetos"].map((href) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-primary-foreground/60 hover:text-accent transition-colors text-sm capitalize"
                  >
                    {href.replace("#", "")}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-primary-foreground/60 text-sm">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                (11) 99999-9999
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/60 text-sm">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                contato@metalforge.com.br
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/60 text-sm">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                Rua das Indústrias, 123 - São Paulo, SP
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Redes Sociais</h4>
            <div className="flex gap-3">
              {["Facebook", "Instagram", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-md bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-all duration-200 text-primary-foreground/60 hover:text-accent-foreground text-xs font-bold"
                  aria-label={social}
                >
                  {social.charAt(0)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} MetalForge Serralheria. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
