
import React from 'react';
import { TrendingUp, MessageCircle, BarChart3 } from 'lucide-react';

const ResultsGallery: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-900 border-b border-white/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-green-500 font-bold tracking-widest text-sm uppercase flex items-center justify-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Contra Fatos Não Há Argumentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Bastidores de Quem <span className="text-red-600">Vende Todo Dia</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Não é mágica, é tráfego pago bem feito. Veja o que acontece no Messenger e no gerenciador dos nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Messenger Leads */}
          <div className="bg-white rounded-3xl p-4 shadow-2xl transform rotate-[-2deg] hover:rotate-0 transition-transform duration-300 border-4 border-black/50">
            <div className="bg-gray-100 rounded-2xl p-4 h-full relative overflow-hidden">
              <div className="flex items-center gap-2 mb-4 border-b border-gray-300 pb-2">
                <MessageCircle className="w-6 h-6 text-blue-600" />
                <span className="font-bold text-gray-800">Messenger</span>
              </div>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-blue-500">
                  <p className="text-xs text-gray-500 mb-1">Hoje, 09:42 AM</p>
                  <p className="text-sm font-bold text-gray-800">Lead: Orçamento Deep Cleaning</p>
                  <p className="text-xs text-gray-600">"Olá, vi no Google. Gostaria de saber o preço para 3 quartos..."</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-blue-500">
                  <p className="text-xs text-gray-500 mb-1">Hoje, 10:15 AM</p>
                  <p className="text-sm font-bold text-gray-800">Lead: Move-out Cleaning</p>
                  <p className="text-xs text-gray-600">"Hi, do you have availability for this Friday? Need urgent..."</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-blue-500">
                  <p className="text-xs text-gray-500 mb-1">Hoje, 11:30 AM</p>
                  <p className="text-sm font-bold text-gray-800">Lead: Recurring Service</p>
                  <p className="text-xs text-gray-600">"Looking for bi-weekly cleaning for my house in..."</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-100 to-transparent"></div>
            </div>
          </div>

          {/* Card 2: Growth Graph */}
          <div className="bg-eleven-black rounded-3xl p-4 shadow-2xl z-10 scale-105 border border-red-900/50">
            <div className="bg-zinc-900 rounded-2xl p-6 h-full flex flex-col justify-between border border-white/10">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-400 text-sm">Faturamento Mensal</p>
                  <h3 className="text-3xl font-bold text-white mt-1">$12,450.00</h3>
                  <span className="text-green-500 text-xs font-bold flex items-center mt-1">
                    <TrendingUp className="w-3 h-3 mr-1" /> +24% vs mês anterior
                  </span>
                </div>
                <BarChart3 className="w-8 h-8 text-red-600" />
              </div>
              
              <div className="mt-8 flex items-end justify-between gap-2 h-32">
                <div className="w-full bg-red-900/20 rounded-t-sm h-[40%] relative group">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">$4k</div>
                </div>
                <div className="w-full bg-red-900/40 rounded-t-sm h-[60%] relative group">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">$6k</div>
                </div>
                <div className="w-full bg-red-800/60 rounded-t-sm h-[75%] relative group">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">$8.5k</div>
                </div>
                <div className="w-full bg-red-600 rounded-t-sm h-[100%] relative group">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-2 py-1 rounded opacity-100">$12.4k</div>
                </div>
              </div>
              <p className="text-center text-xs text-gray-500 mt-4">Crescimento Consistente em 4 meses</p>
            </div>
          </div>

          {/* Card 3: Google Ads */}
          <div className="bg-white rounded-3xl p-4 shadow-2xl transform rotate-[2deg] hover:rotate-0 transition-transform duration-300 border-4 border-black/50">
            <div className="bg-gray-50 rounded-2xl p-4 h-full">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">G</div>
                <span className="font-bold text-gray-700">Google Ads Summary</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                  <p className="text-xs text-gray-500">Impressões</p>
                  <p className="text-lg font-bold text-gray-800">14.2k</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                  <p className="text-xs text-gray-500">Cliques</p>
                  <p className="text-lg font-bold text-blue-600">842</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 col-span-2">
                  <p className="text-xs text-gray-500">Conversões (Leads)</p>
                  <div className="flex justify-between items-end">
                    <p className="text-2xl font-bold text-green-600">127</p>
                    <p className="text-xs text-gray-400">Custo/Lead: $12.40</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ResultsGallery;
