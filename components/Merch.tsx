import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { MerchItem } from '../types';

const merchItems: MerchItem[] = [
  {
    id: '1',
    name: 'Pulse Hoodie [Limitovaná Edice]',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Neon Cap 2024',
    price: 650,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Cyber Tote Bag',
    price: 450,
    image: 'https://png.pngtree.com/png-clipart/20231101/original/pngtree-cyber-monday-with-neon-shopping-bag-png-image_13468020.png'
  }
];

const Merch: React.FC = () => {
  return (
    <section id="merch" className="py-24 bg-background relative overflow-hidden">
        {/* Decorative Ring */}
       <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 w-96 h-96 border border-neonPink/20 rounded-full"></div>
       <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 w-80 h-80 border border-neonGreen/10 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-2">
            OFICIÁLNÍ <span className="text-neonPink">MERCH</span>
          </h2>
          <p className="text-gray-400">Obleč si noc.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {merchItems.map((item) => (
            <div key={item.id} className="group bg-[#111] p-4 rounded-lg hover:shadow-[0_0_15px_rgba(255,0,255,0.15)] transition-all duration-300">
              <div className="relative aspect-square overflow-hidden rounded-md mb-4 bg-gray-900">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button className="absolute bottom-4 right-4 bg-neonGreen text-black p-3 rounded-full shadow-lg transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white">
                    <ShoppingBag className="w-5 h-5" />
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-white font-bold font-display text-lg tracking-wide">{item.name}</h3>
                    <p className="text-gray-500 text-sm">Skladem</p>
                </div>
                <span className="text-neonPink font-mono font-bold text-lg">{item.price} Kč</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Merch;