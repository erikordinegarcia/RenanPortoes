import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Contato', href: '#contato' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Esconde header ao rolar
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
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-500 ${
          showHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between py-3">
          {/* LOGO */}
          <a href="#inicio">
            <img src="/RenanPortoes/logo.png" alt="SP Portões" className="h-14 w-auto" />
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="relative text-primary font-semibold text-sm uppercase tracking-wide transition-all hover:text-accent after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* HAMBURGUER */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5"
            aria-label="Menu"
          >
            <span
              className={`w-7 h-[2px] bg-primary transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-[6px]' : ''
              }`}
            />
            <span
              className={`w-7 h-[2px] bg-primary transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-7 h-[2px] bg-primary transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-[6px]' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* MENU MOBILE (AGORA COMEÇA ABAIXO DO HEADER) */}
      <div
        className={`fixed left-0 w-full bg-white z-40 transition-all duration-500 overflow-hidden ${
          isOpen ? 'opacity-100 py-10' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: '72px' }} // altura do header
      >
        <div className="container mx-auto px-6">
          {/* LINKS */}
          <nav className="flex flex-col gap-8 text-center mt-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="text-primary text-lg font-semibold uppercase tracking-wide transition hover:text-accent"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
