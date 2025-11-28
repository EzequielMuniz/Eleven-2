import React from 'react';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-30 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-red-600 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-900 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6 md:mb-8 backdrop-blur-sm animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
            <span className="text-[10px] md:text-xs font-semibold tracking-wide text-gray-300 uppercase">Especialistas em House Cleaning nos EUA</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6">
            <span className="block text-red-600 text-lg md:text-2xl font-bold mb-3 md:mb-4 tracking-widest uppercase">[Donos de House Cleaning]</span>
            Descubra Como Captar <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">$5K+</span> em Novos Contratos Este Mês.
          </h1>

          <p className="text-base md:text-xl text-gray-400 mb-8 md:mb-10 max-w-2xl leading-relaxed px-2 md:px-0">
            Agência especializada em marketing digital para empresas de limpeza. Chega de leads frios. Transformamos seu investimento em Google Ads e LSA em clientes reais e qualificados.
            <br/><strong className="text-white mt-2 block">100% de Suporte em Português.</strong>
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4 sm:px-0">
            <a 
              href="#schedule" 
              onClick={(e) => handleScroll(e, 'schedule')}
              className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(220,38,38,0.4)] flex items-center justify-center gap-2 group"
            >
              QUERO MINHA ANÁLISE GRÁTIS
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm text-gray-400">
             <div className="flex items-center gap-1">
                <div className="flex text-yellow-500">
                   {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="font-bold text-white ml-2">4.9/5</span>
                <span className="hidden sm:inline ml-1">- Avaliação Média</span>
             </div>
             <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full"></div>
             <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Resultados Comprovados</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;