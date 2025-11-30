import React from 'react';

const Partners: React.FC = () => {
  // Using text placeholders for logos to simulate sponsors
  const partners = [
    "AUDIO TECH", "RED BULL", "PIONEER DJ", "ABSOLUT", "SPOTIFY", "TICKETMASTER"
  ];

  return (
    <section className="py-12 bg-black border-y border-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-600 font-mono text-xs uppercase tracking-[0.2em] mb-8">Oficiální Partneři</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50">
           {partners.map((partner, index) => (
             <span 
                key={index} 
                className="text-xl md:text-2xl font-black font-display text-gray-500 hover:text-white transition-colors cursor-default select-none hover:shadow-[0_0_10px_rgba(255,255,255,0.3)]"
             >
                {partner}
             </span>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;