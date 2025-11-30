import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=2070&auto=format&fit=crop" 
          alt="Neon Nightlife" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
      </div>

      {/* Animated Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neonPink/20 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neonGreen/10 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-4 inline-block">
            <span className="py-1 px-3 border border-neonGreen rounded-full text-neonGreen text-xs font-mono tracking-widest uppercase bg-neonGreen/10 backdrop-blur-sm">
                Další akce: 24.12.2024
            </span>
        </div>
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter mb-6 relative">
          <span className="relative inline-block hover:text-neonGreen transition-colors duration-500 cursor-default">
            ZAŽIJ
          </span>{' '}
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-neonGreen to-neonPink animate-float">
            TEN
          </span>{' '}
          <span className="relative inline-block hover:text-neonPink transition-colors duration-500 cursor-default">
            TEP
          </span>
        </h1>
        <p className="font-sans text-gray-300 text-lg md:text-2xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Ultimátní zážitek z nočního života. Ponoř se do zvuku, světla a nespoutané energie.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#events"
            className="group relative px-8 py-4 bg-neonGreen text-black font-display font-bold text-lg rounded-none skew-x-[-10deg] hover:bg-white hover:shadow-[0_0_20px_#39FF14] transition-all duration-300"
          >
            <span className="inline-block skew-x-[10deg] flex items-center gap-2">
              REZERVACE <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a 
            href="#gallery"
            className="group relative px-8 py-4 bg-transparent border border-white text-white font-display font-bold text-lg rounded-none skew-x-[-10deg] hover:border-neonPink hover:text-neonPink hover:shadow-[0_0_20px_#FF00FF] transition-all duration-300"
          >
            <span className="inline-block skew-x-[10deg]">
              PROZKOUMAT
            </span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-70">
        <span className="text-xs font-mono tracking-widest text-gray-400">SCROLL</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-neonGreen to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;