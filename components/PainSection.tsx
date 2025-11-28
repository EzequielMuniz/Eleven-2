import React from 'react';
import { Clock, AlertTriangle, MessageSquareOff, TrendingUp } from 'lucide-react';

const PainSection: React.FC = () => {
  const pains = [
    {
      icon: <Clock className="w-8 h-8 text-red-500" />,
      title: "Trabalha 12h por dia?",
      desc: "Você limpa casas o dia todo e não sobra tempo para fazer o marketing crescer o seu negócio."
    },
    {
      icon: <MessageSquareOff className="w-8 h-8 text-red-500" />,
      title: "Barreira do Idioma",
      desc: "Agências americanas não te entendem e freelancers brasileiros não entendem o mercado americano."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
      title: "Leads Frios & Ruins",
      desc: "Cansado de pagar por leads que só querem preço baixo ou nem respondem suas mensagens?"
    }
  ];

  return (
    <section id="pain" className="py-20 bg-eleven-dark border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Você é excelente na limpeza, <br/>
              <span className="text-gray-500">mas na hora de crescer...</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Enquanto seus concorrentes americanos dominam a primeira página do Google, você está em desvantagem técnica e linguística. 
              Chega de jogar dinheiro fora com estratégias que não foram feitas para a realidade do imigrante brasileiro nos EUA.
            </p>
            <div className="p-6 bg-red-900/10 border border-red-900/30 rounded-xl">
              <h3 className="text-red-500 font-bold text-xl mb-2 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                O Diferencial Eleven Digital
              </h3>
              <p className="text-gray-300">
                Unimos a expertise de mercado americano com o suporte caloroso brasileiro. 
                Nós enchemos sua agenda de clientes de alto valor (Recurring Cleaning & Move-in/out).
              </p>
            </div>
          </div>

          <div className="md:w-1/2 grid gap-4">
            {pains.map((pain, idx) => (
              <div key={idx} className="bg-black/40 p-6 rounded-xl border border-white/10 hover:border-red-600/50 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="bg-white/5 p-3 rounded-lg group-hover:bg-red-600/10 transition-colors">
                    {pain.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">{pain.title}</h4>
                    <p className="text-gray-400 text-sm">{pain.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default PainSection;