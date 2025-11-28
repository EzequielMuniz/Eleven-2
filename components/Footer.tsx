import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="text-2xl font-bold tracking-tighter text-white">
            ELEVEN <span className="text-red-600">DIGITAL</span>
          </span>
          <p className="text-gray-500 text-sm mt-2">
            © {new Date().getFullYear()} Eleven Digital Agency. Todos os direitos reservados.
          </p>
        </div>
        
        <div className="flex gap-6">
          <a 
            href="https://www.instagram.com/elevenn.digital/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </a>
          {/* Linkedin kept as placeholder or remove if not needed, currently just # */}
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;