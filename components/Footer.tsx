import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-600 font-mono text-xs">
          © 5 NEON PULSE EVENTS. VŠECHNA PRÁVA VYHRAZENA.
        </p>
        <div className="mt-2 flex justify-center gap-4 text-xs text-gray-700">
            <a href="#" className="hover:text-white transition-colors">Soukromí</a>
            <a href="#" className="hover:text-white transition-colors">Podmínky</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;