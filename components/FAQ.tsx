import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Preciso falar inglês fluente para usar seus serviços?",
      answer: "Absolutamente não. Nossa equipe é brasileira e todo o suporte é em português. Nós configuramos os anúncios e automações para que você receba os leads já filtrados, e fornecemos scripts prontos em inglês para você apenas copiar e colar se precisar responder mensagens de americanos."
    },
    {
      question: "Existe contrato de fidelidade? Posso cancelar quando quiser?",
      answer: "Nós confiamos tanto no nosso resultado que NÃO amarramos você em contratos longos e abusivos. Trabalhamos com renovação mensal. Se você não estiver feliz (o que duvidamos), você é livre para encerrar sem multas."
    },
    {
      question: "Quanto preciso investir em anúncios (Google Ads)?",
      answer: "Isso depende da sua região e objetivos. Porém, recomendamos começar com um orçamento que seja confortável para você. Diferente de outras agências, nós focamos em otimizar seu dinheiro para ter o maior retorno possível, mesmo começando pequeno."
    },
    {
      question: "Serve para quem está começando agora?",
      answer: "Com certeza. Na verdade, é o melhor momento. Começar do jeito certo, com o Google Meu Negócio otimizado e anúncios profissionais, vai fazer você pular a fase de 'bater cabeça' e crescer muito mais rápido que a concorrência antiga."
    },
    {
      question: "Quanto tempo demora para ter resultados?",
      answer: "O Google Ads e LSA são ferramentas de resposta rápida. Muitos clientes começam a receber as primeiras chamadas na primeira semana de campanha ativa. O processo de otimização contínua melhora esses resultados mês a mês."
    }
  ];

  return (
    <section className="py-20 bg-eleven-dark border-b border-white/5">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Perguntas Frequentes</h2>
          <p className="text-gray-400">Tire suas dúvidas antes de agendar sua consultoria.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`bg-eleven-gray border ${openIndex === idx ? 'border-red-600/50 bg-white/5' : 'border-white/5'} rounded-xl overflow-hidden transition-all duration-300`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`font-bold text-lg ${openIndex === idx ? 'text-white' : 'text-gray-300'}`}>
                  {faq.question}
                </span>
                {openIndex === idx ? (
                  <Minus className="w-5 h-5 text-red-500 shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500 shrink-0" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;