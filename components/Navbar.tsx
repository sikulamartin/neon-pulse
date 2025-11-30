import React, { useState, useEffect } from 'react';
import { Menu, X, Music } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O Nás', href: '#about' },
    { name: 'Akce', href: '#events' },
    { name: 'Lineup', href: '#lineup' },
    { name: 'VIP', href: '#vip' },
    { name: 'Galerie', href: '#gallery' },
    { name: 'Merch', href: '#merch' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md border-b border-neonGreen/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <Music className="h-8 w-8 text-neonGreen animate-pulse" />
            <span className="font-display font-bold text-2xl tracking-wider text-white">
              NEON<span className="text-neonPink">PULSE</span>
            </span>
          </div>
          
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-display text-gray-300 hover:text-neonGreen px-2 py-2 rounded-md text-xs font-bold tracking-widest transition-colors duration-200 hover:shadow-[0_0_8px_rgba(57,255,20,0.4)]"
                >
                  {link.name.toUpperCase()}
                </a>
              ))}
              <a 
                href="#events"
                className="bg-neonGreen text-black font-display font-bold px-6 py-2 rounded-full hover:bg-neonPink hover:text-white transition-all duration-300 hover:shadow-neon-pink transform hover:scale-105"
              >
                REZERVACE
              </a>
            </div>
          </div>

          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-neonGreen focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'} bg-black/95 backdrop-blur-xl border-b border-neonPink/30`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-neonGreen block px-3 py-3 rounded-md text-base font-bold font-display text-center border-b border-gray-800"
            >
              {link.name.toUpperCase()}
            </a>
          ))}
           <a 
                href="#events"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-neonGreen mt-4 text-black font-display font-bold px-6 py-4 rounded-md hover:bg-neonPink hover:text-white transition-all duration-300"
              >
                REZERVACE
              </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;