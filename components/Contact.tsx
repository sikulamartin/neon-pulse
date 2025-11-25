import React from 'react';
import { Mail, Instagram, Facebook, Twitter, Music2 } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#050505] relative border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Newsletter / Info */}
          <div>
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              PŘIDEJ SE K <span className="text-neonGreen">HNUTÍ</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Zaregistruj se pro přednostní přístup k lístkům, exkluzivním DJ setům a VIP akcím. Nezmeškej ten rytmus.
            </p>
            
            <form className="space-y-4 max-w-md" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input 
                  type="email" 
                  placeholder="ZADEJ SVŮJ EMAIL" 
                  className="w-full bg-[#111] border border-gray-800 text-white px-6 py-4 focus:outline-none focus:border-neonGreen focus:ring-1 focus:ring-neonGreen transition-all placeholder-gray-600 font-mono text-sm"
                />
              </div>
              <button className="w-full bg-white text-black font-display font-black text-lg py-4 hover:bg-neonPink hover:text-white transition-colors duration-300 uppercase tracking-wider">
                ODEBÍRAT
              </button>
            </form>

            <div className="mt-12">
                <h4 className="text-white font-bold mb-4 font-mono text-sm uppercase">SLEDUJ NÁS</h4>
                <div className="flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-neonGreen hover:scale-110 transition-all"><Instagram className="w-6 h-6" /></a>
                    <a href="#" className="text-gray-400 hover:text-neonPink hover:scale-110 transition-all"><Facebook className="w-6 h-6" /></a>
                    <a href="#" className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all"><Twitter className="w-6 h-6" /></a>
                    <a href="#" className="text-gray-400 hover:text-red-500 hover:scale-110 transition-all"><Music2 className="w-6 h-6" /></a>
                </div>
            </div>
          </div>

          {/* Location / RSVP */}
          <div className="bg-[#111] p-8 border border-gray-800 relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-32 h-32 bg-neonGreen/5 rounded-full blur-3xl group-hover:bg-neonGreen/10 transition-all duration-500"></div>
             
             <h3 className="font-display text-2xl text-white mb-6">DALŠÍ VELKÁ AKCE</h3>
             
             <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="text-neonPink font-mono text-xl">01</div>
                    <div>
                        <p className="text-white font-bold">DATUM</p>
                        <p className="text-gray-400">24. Prosince, 2025</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="text-neonPink font-mono text-xl">02</div>
                    <div>
                        <p className="text-white font-bold">LOKACE</p>
                        <p className="text-gray-400">Underground Bunker, Sektor 7</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="text-neonPink font-mono text-xl">03</div>
                    <div>
                        <p className="text-white font-bold">LINEUP</p>
                        <p className="text-gray-400">DJ Void, Neon Sisters, Bassbot</p>
                    </div>
                </div>
             </div>

             <div className="mt-10 pt-8 border-t border-gray-800">
                <p className="text-gray-500 text-sm mb-4">Jsi na seznamu?</p>
                <button className="text-neonGreen font-bold border-b border-neonGreen hover:text-white hover:border-white transition-colors pb-1 uppercase tracking-widest text-sm">
                    OVĚŘIT GUESTLIST
                </button>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;