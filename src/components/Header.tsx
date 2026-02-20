import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Contato', href: '#contato' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      } ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'}`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#inicio"
          className="font-heading font-extrabold text-2xl text-primary-foreground tracking-tight"
        >
          {/* logo imagem */}
          <div className="bg-white px-3 py-2 rounded-lg shadow-sm">
            <img src="/RenanPortoes/logo.png" alt="Logo" className="h-20 w-auto" />
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="relative text-primary font-semibold text-sm uppercase tracking-wide transition-all hover:text-primary after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleClick('#contato')}
            className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold py-2.5 px-6 rounded-md transition-all duration-200 text-sm uppercase tracking-wide shadow-lg hover:shadow-xl"
          >
            Solicitar Orçamento
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary-foreground p-2"
          aria-label="Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-primary px-4 pb-6 pt-2 flex flex-col gap-3">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-primary-foreground/80 hover:text-accent transition-colors font-medium text-left py-2 border-b border-primary-foreground/10 uppercase text-sm tracking-wide"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleClick('#contato')}
            className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold py-3 px-6 rounded-md transition-all mt-2 text-sm uppercase tracking-wide"
          >
            Solicitar Orçamento
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
