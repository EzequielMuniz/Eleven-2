import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      location: "Boston, MA",
      quote: "Eu gastava $1000 no Google e não voltava nada. Com a Eleven, no primeiro mês fechei 4 casas fixas. O suporte em português fez toda a diferença.",
      roi: "+$3.2k/mês"
    },
    {
      name: "Maria Santos",
      location: "Orlando, FL",
      quote: "Eles configuraram meu Local Services Ads e agora meu telefone toca todo dia. Pensei que era impossível competir com as empresas grandes.",
      roi: "+$5.5k/mês"
    },
    {
      name: "João Oliveira",
      location: "New Jersey, NJ",
      quote: "A análise de mercado deles abriu meus olhos. Eu estava cobrando muito barato. Ajustamos os preços e o marketing, tripliquei meu lucro.",
      roi: "3x Lucro"
    },
    {
      name: "Ricardo Mendes",
      location: "Miami, FL",
      quote: "Focamos em limpeza comercial e a Eleven trouxe leads de escritórios. Fechei 2 contratos de $3k/mês cada na primeira semana de campanha.",
      roi: "+$6k Recorrente"
    },
    {
      name: "Fernanda Costa",
      location: "Atlanta, GA",
      quote: "Eu estava quase desistindo, trabalhando 14h por dia. Com os leads certos, contratei minha primeira equipe e agora só gerencio o negócio.",
      roi: "Liberdade de Tempo"
    },
    {
      name: "Lucas Pereira",
      location: "San Francisco, CA",
      quote: "Meu Google Meu Negócio não aparecia em lugar nenhum. Eles otimizaram tudo e agora sou o #1 da minha cidade nas buscas locais.",
      roi: "Top #1 Google"
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Resultados de Quem <span className="text-red-600">Acredita</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Empresários brasileiros de limpeza que pararam de reclamar do mercado e começaram a dominá-lo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-eleven-gray p-6 md:p-8 rounded-2xl border border-white/5 hover:border-red-600/30 transition-all relative group flex flex-col justify-between h-full">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
              </div>
              
              <div className="mb-6">
                <div className="flex text-yellow-500 mb-2">
                   {[1,2,3,4,5].map(i => <span key={i} className="text-sm">★</span>)}
                </div>
                <p className="text-gray-300 italic relative z-10 text-sm md:text-base">"{t.quote}"</p>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
                <div>
                  <h4 className="text-white font-bold text-sm md:text-base">{t.name}</h4>
                  <span className="text-gray-500 text-xs md:text-sm">{t.location}</span>
                </div>
                <div className="text-green-500 font-bold bg-green-900/20 px-3 py-1 rounded-full text-xs md:text-sm whitespace-nowrap">
                  {t.roi}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;