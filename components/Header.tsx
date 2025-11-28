import React from 'react';
import { Menu, Phone } from 'lucide-react';

const Header: React.FC = () => {

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Logo representation - Red Bird Concept */}
          <div className="h-10 w-10 relative flex items-center justify-center">
             <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-red-600" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
             </svg>
          </div>
          <span className="text-xl font-bold tracking-tighter text-white">
            ELEVEN <span className="text-red-600">DIGITAL</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#hero" onClick={(e) => handleScroll(e, 'hero')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Início</a>
          <a href="#pain" onClick={(e) => handleScroll(e, 'pain')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Soluções</a>
          <a href="#testimonials" onClick={(e) => handleScroll(e, 'testimonials')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Resultados</a>
        </nav>

        <a 
          href="#schedule" 
          onClick={(e) => handleScroll(e, 'schedule')}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-[0_0_15px_rgba(220,38,38,0.5)] hover:shadow-[0_0_25px_rgba(220,38,38,0.7)] flex items-center gap-2"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">AGENDAR CONSULTA</span>
          <span className="sm:hidden">AGENDAR</span>
        </a>
      </div>
    </header>
  );
};

export default Header;