import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Check, ArrowRight } from 'lucide-react';

declare global {
  interface Window {
    Calendly: any;
    gtag: any;
  }
}

interface LeadData {
  name: string;
  email: string;
  phone: string;
  revenue: string;
}

const BookingForm: React.FC = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [savedData, setSavedData] = useState<LeadData | null>(null);
  const [widgetLoaded, setWidgetLoaded] = useState(false);
  const calendlyContainerRef = useRef<HTMLDivElement>(null);
  
  const { register, handleSubmit, formState: { errors } } = useForm<LeadData>();

  // 1. Listen for Calendly Success Event for Google Ads Tracking
  useEffect(() => {
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data.event && e.data.event === 'calendly.event.scheduled') {
        console.log("Calendly Event: Scheduled! Firing Google Ads Conversion.");
        
        // Fire Google Ads Conversion Event ONLY when booking is confirmed
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'conversion', {
              send_to: 'AW-16692273493/i5T5CObDicgbENXCv5c-',
              value: 1.0,
              currency: 'USD'
          });
        }
      }
    };

    window.addEventListener('message', handleCalendlyEvent);
    return () => window.removeEventListener('message', handleCalendlyEvent);
  }, []);

  // 2. Load Calendly Widget when Step 2 is active
  useEffect(() => {
    if (step === 2) {
      // Safety timeout: force loader off after 2s if widget is slow
      const safetyTimer = setTimeout(() => {
        setWidgetLoaded(true);
      }, 2000);

      const loadCalendly = () => {
        const widgetUrl = "https://calendly.com/elevendigitaloficial/30min";
        const container = calendlyContainerRef.current;

        if (window.Calendly && container) {
          container.innerHTML = ''; // Clean previous instances
          
          window.Calendly.initInlineWidget({
            url: widgetUrl,
            parentElement: container,
            prefill: {
              name: savedData?.name,
              email: savedData?.email,
              customAnswers: {
                a1: savedData?.phone, 
                a2: savedData?.revenue 
              }
            },
            utm: {} 
          });
        }
      };

      if (window.Calendly) {
        loadCalendly();
      } else {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        script.onload = () => {
          loadCalendly();
        };
        script.onerror = () => console.error("Failed to load Calendly script");
        document.body.appendChild(script);
      }
      
      return () => clearTimeout(safetyTimer);
    }
  }, [step, savedData]);

  const onSubmit = (data: LeadData) => {
    // Save data to state to prefill Calendly
    setSavedData(data);
    // Move immediately to Step 2 (Calendly)
    setStep(2);
  };

  return (
    <section id="schedule" className="py-16 md:py-24 bg-gradient-to-b from-eleven-dark to-black relative">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="text-center mb-10 md:mb-12">
          <span className="text-red-600 font-bold tracking-widest text-xs md:text-sm uppercase">Passo Final</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">
            Agende Sua Consultoria Estratégica
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            {step === 1 
              ? "Preencha seus dados abaixo para liberar o calendário. Vamos analisar seu mercado local e montar um plano de ação."
              : "Excelente! Agora escolha o melhor horário abaixo para falarmos."}
          </p>
        </div>

        {/* 
          Main Card 
          CRITICAL FIX: overflow-visible on step 2 for mobile compatibility
        */}
        <div className={`bg-eleven-gray rounded-2xl md:rounded-3xl shadow-2xl border border-white/5 flex flex-col md:flex-row min-h-[600px] ${step === 2 ? 'overflow-visible' : 'overflow-hidden'}`}>
          
          {/* Left Side - Info */}
          <div className="md:w-5/12 bg-zinc-900 p-6 md:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/5">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">O que você vai receber:</h3>
              <ul className="space-y-4 md:space-y-6">
                {[
                  "Análise de concorrência na sua região (City/County)",
                  "Estratégia personalizada de Google Ads & LSA",
                  "Projeção de Investimento vs. Retorno (ROI)",
                  "Plano para captar contratos recorrentes"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="bg-red-600/20 p-1 rounded-full mt-1 shrink-0">
                      <Check className="w-3 h-3 md:w-4 md:h-4 text-red-500" />
                    </div>
                    <span className="text-gray-300 font-medium text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8 md:mt-12 p-4 md:p-6 bg-black/50 rounded-xl border border-red-900/30">
              <p className="text-red-400 text-sm font-bold flex items-center gap-2 mb-2">
                <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                ATENÇÃO
              </p>
              <p className="text-gray-400 text-xs md:text-sm">
                Reservamos um número limitado de análises gratuitas por semana. Garanta seu horário agora.
              </p>
            </div>
          </div>

          {/* Right Side - Form or Calendar */}
          <div className={`md:w-7/12 bg-zinc-950 relative ${step === 2 ? 'p-0' : 'p-6 md:p-12'}`}>
            {step === 1 ? (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6 max-w-md mx-auto fade-in">
                
                <div className="space-y-1 md:space-y-2">
                  <label className="text-sm font-medium text-gray-300">Nome da Empresa (ou Seu Nome)</label>
                  <input 
                    {...register("name", { required: true })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
                    placeholder="Ex: Maria's Cleaning"
                  />
                  {errors.name && <span className="text-red-500 text-xs">Campo obrigatório</span>}
                </div>

                <div className="space-y-1 md:space-y-2">
                  <label className="text-sm font-medium text-gray-300">Email Comercial</label>
                  <input 
                    type="email"
                    {...register("email", { required: true })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
                    placeholder="contato@suaempresa.com"
                  />
                  {errors.email && <span className="text-red-500 text-xs">Campo obrigatório</span>}
                </div>

                <div className="space-y-1 md:space-y-2">
                  <label className="text-sm font-medium text-gray-300">Telefone (WhatsApp)</label>
                  <input 
                    type="tel"
                    {...register("phone", { required: true })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                  {errors.phone && <span className="text-red-500 text-xs">Campo obrigatório</span>}
                </div>

                <div className="space-y-1 md:space-y-2">
                  <label className="text-sm font-medium text-gray-300">Faturamento Mensal Atual?</label>
                  <div className="relative">
                    <select 
                      {...register("revenue", { required: true })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors appearance-none"
                    >
                      <option value="" className="bg-zinc-900">Selecione uma opção...</option>
                      <option value="start" className="bg-zinc-900">Começando agora ($0 - $2k)</option>
                      <option value="growth" className="bg-zinc-900">Crescimento ($2k - $10k)</option>
                      <option value="scale" className="bg-zinc-900">Escalando ($10k - $30k)</option>
                      <option value="enterprise" className="bg-zinc-900">Consolidado (+$30k)</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                  {errors.revenue && <span className="text-red-500 text-xs">Selecione o faturamento para melhor análise</span>}
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 md:py-4 rounded-lg shadow-lg hover:shadow-red-600/20 transition-all flex items-center justify-center gap-2 mt-4 text-sm md:text-base"
                >
                  AVANÇAR PARA AGENDAMENTO
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            ) : (
              <div className="flex flex-col fade-in bg-white rounded-xl overflow-hidden relative">
                 {/* Calendly Inline Widget Container */}
                 <div 
                    id="calendly-container"
                    ref={calendlyContainerRef}
                    className="w-full"
                    style={{ height: '1100px', minHeight: '1100px' }} 
                  />
                  {/* Only show loader if we haven't marked widget as loaded */}
                  {!widgetLoaded && (
                     <div className="absolute inset-0 flex items-center justify-center bg-white z-10 h-96">
                        <div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
                     </div>
                  )}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default BookingForm;