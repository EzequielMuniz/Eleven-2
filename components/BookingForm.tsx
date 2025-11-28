import React, { useState, useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

declare global {
  interface Window {
    Calendly: any;
    gtag: any;
  }
}

const BookingForm: React.FC = () => {
  const [widgetLoaded, setWidgetLoaded] = useState(false);
  const calendlyContainerRef = useRef<HTMLDivElement>(null);
  
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

  // 2. Load Calendly Widget Immediately
  useEffect(() => {
    // Safety timeout: force loader off after 3s if widget is slow
    const safetyTimer = setTimeout(() => {
      setWidgetLoaded(true);
    }, 3000);

    const loadCalendly = () => {
      const widgetUrl = "https://calendly.com/elevendigitaloficial/30min";
      const container = calendlyContainerRef.current;

      if (window.Calendly && container) {
        container.innerHTML = ''; // Clean previous instances
        
        window.Calendly.initInlineWidget({
          url: widgetUrl,
          parentElement: container,
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
  }, []);

  return (
    <section id="schedule" className="py-16 md:py-24 bg-gradient-to-b from-eleven-dark to-black relative">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="text-center mb-10 md:mb-12">
          <span className="text-red-600 font-bold tracking-widest text-xs md:text-sm uppercase">Agenda Aberta</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">
            Agende Sua Consultoria Estratégica
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Selecione o melhor horário abaixo para falarmos sobre o crescimento da sua empresa de House Cleaning.
          </p>
        </div>

        {/* 
          Main Card 
          overflow-visible is required for mobile calendly widgets to render popup elements correctly
        */}
        <div className="bg-eleven-gray rounded-2xl md:rounded-3xl shadow-2xl border border-white/5 flex flex-col md:flex-row min-h-[600px] overflow-visible">
          
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

          {/* Right Side - Calendar */}
          <div className="md:w-7/12 bg-zinc-950 relative p-0">
            <div className="flex flex-col fade-in bg-white rounded-b-xl md:rounded-r-xl md:rounded-bl-none overflow-hidden relative h-full">
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
          </div>

        </div>
      </div>
    </section>
  );
};

export default BookingForm;