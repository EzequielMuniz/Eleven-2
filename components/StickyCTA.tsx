
import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Show only after scrolling past Hero (approx 600px)
    if (window.scrollY > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToSchedule = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('schedule');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 z-50 md:hidden bg-gradient-to-t from-black via-black to-transparent pt-8 fade-in">
      <button 
        onClick={scrollToSchedule}
        className="w-full bg-red-600 text-white font-bold py-4 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.6)] flex items-center justify-center gap-2 animate-bounce-subtle"
      >
        <Phone className="w-5 h-5 fill-current" />
        QUERO AGENDAR AGORA
      </button>
    </div>
  );
};

export default StickyCTA;
