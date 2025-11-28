import React from 'react';
import { ScanSearch, Paintbrush, Rocket, ArrowRight } from 'lucide-react';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      icon: <ScanSearch className="w-10 h-10 text-white" />,
      title: "1. Diagnóstico Profundo",
      desc: "Analisamos sua região, concorrentes e o que está impedindo você de crescer. É um Raio-X completo do seu negócio."
    },
    {
      icon: <Paintbrush className="w-10 h-10 text-white" />,
      title: "2. Estrutura de Vendas",
      desc: "Arrumamos sua 'casa digital'. Otimizamos seu Google Meu Negócio e criamos campanhas focadas em clientes que pagam bem."
    },
    {
      icon: <Rocket className="w-10 h-10 text-white" />,
      title: "3. Aceleração & Escala",
      desc: "Ligamos a máquina de leads. Monitoramos diariamente e ajustamos para reduzir o custo por cliente e encher sua agenda."
    }
  ];

  return (
    <section className="py-20 bg-black border-b border-white/5 relative overflow-hidden">
      {/* Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-600/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-red-600 font-bold tracking-widest text-sm uppercase">O Nosso Método</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">
            Como Transformamos Seu <br className="hidden md:block" /> Negócio em <span className="text-red-600">3 Passos</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-red-900/0 via-red-600/50 to-red-900/0 z-0"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 group">
              <div className="bg-eleven-gray border border-white/10 p-8 rounded-2xl hover:border-red-600/50 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col items-center text-center shadow-lg hover:shadow-red-900/20">
                <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-900 rounded-full flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(220,38,38,0.4)] group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
             <p className="text-gray-500 text-sm mb-4">Sem "mágica", apenas processos validados nos EUA.</p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;