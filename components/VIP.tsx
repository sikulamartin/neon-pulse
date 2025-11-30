import React from 'react';
import { Crown, Check, Star } from 'lucide-react';
import { VIPPackage } from '../types';

const packages: VIPPackage[] = [
  {
    id: '1',
    name: 'SILVER ACCESS',
    price: '1 500 Kč',
    features: ['Přednostní vstup', 'Welcome Drink', 'Přístup na balkon', 'Vlastní bar'],
    recommended: false
  },
  {
    id: '2',
    name: 'GOLD TABLE',
    price: '5 000 Kč',
    features: ['Vše ze Silver', 'Soukromý stůl pro 4', 'Láhev dle výběru', 'Obsluha u stolu', 'VIP Šatna'],
    recommended: true
  },
  {
    id: '3',
    name: 'DIAMOND BOX',
    price: '15 000 Kč',
    features: ['All Inclusive Drinky', 'Soukromý Box pro 8', 'Setkání s Umělci', 'Limuzína Odvoz', 'Osobní Security'],
    recommended: false
  }
];

const VIP: React.FC = () => {
  return (
    <section id="vip" className="py-24 bg-[#080808] relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neonPink/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Crown className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            VIP <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">ZÓNA</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Zažij Neon Pulse z té nejlepší perspektivy. Exkluzivní servis, soukromí a komfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {packages.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`relative bg-[#121212] border ${pkg.recommended ? 'border-yellow-500 shadow-[0_0_30px_rgba(234,179,8,0.15)] scale-105 z-10' : 'border-gray-800'} p-8 rounded-xl transition-all duration-300 hover:border-neonPink`}
            >
              {pkg.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-black font-bold px-4 py-1 rounded-full text-xs uppercase tracking-widest flex items-center gap-1">
                    <Star className="w-3 h-3 fill-black" /> Doporučeno
                </div>
              )}
              
              <h3 className="font-display text-2xl font-bold text-white mb-2 text-center">{pkg.name}</h3>
              <div className="text-center mb-8">
                <span className="text-3xl font-bold text-neonGreen">{pkg.price}</span>
                <span className="text-gray-500 text-sm"> / noc</span>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300 text-sm">
                        <Check className="w-5 h-5 text-neonPink flex-shrink-0" />
                        {feature}
                    </li>
                ))}
              </ul>

              <button className={`w-full py-4 font-bold uppercase tracking-wider rounded-lg transition-all ${
                  pkg.recommended 
                  ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black hover:brightness-110' 
                  : 'bg-transparent border border-gray-600 text-white hover:bg-white hover:text-black'
              }`}>
                Vybrat Balíček
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VIP;