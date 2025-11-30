import React from 'react';
import { Zap, Volume2, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="text-neonPink font-mono tracking-widest text-sm mb-4 block">// NAŠE VIZE</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              VÍCE NEŽ JEN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonGreen to-white">PARTY.</span> <br />
              TOHLE JE <span className="text-neonPink decoration-neonGreen underline decoration-4 underline-offset-8">HNUTÍ.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
              Neon Pulse vznikl z touhy propojit technologii, vizuální umění a nekompromisní elektronickou hudbu. 
              Vytváříme prostory, kde realita ustupuje do pozadí a jediné, co existuje, je přítomný okamžik, basy a světlo.
            </p>

            <div className="grid grid-cols-3 gap-4 border-t border-gray-800 pt-8">
              <div className="text-center">
                <Zap className="w-8 h-8 text-neonGreen mx-auto mb-2" />
                <p className="font-display font-bold text-white text-xl">50kW</p>
                <p className="text-xs text-gray-500 font-mono">SOUND SYSTEM</p>
              </div>
              <div className="text-center border-l border-gray-800">
                <Volume2 className="w-8 h-8 text-neonPink mx-auto mb-2" />
                <p className="font-display font-bold text-white text-xl">120dB</p>
                <p className="text-xs text-gray-500 font-mono">ENERGIE</p>
              </div>
              <div className="text-center border-l border-gray-800">
                <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="font-display font-bold text-white text-xl">5K+</p>
                <p className="text-xs text-gray-500 font-mono">KOMUNITA</p>
              </div>
            </div>
          </div>

          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-neonGreen to-neonPink opacity-20 blur-3xl animate-pulse-slow"></div>
             <div className="relative border border-gray-800 bg-[#111] p-2 rotate-3 hover:rotate-0 transition-all duration-500">
                <img 
                    src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070&auto=format&fit=crop" 
                    alt="Atmosphere" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
             </div>
             <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-black border border-neonGreen flex items-center justify-center rounded-full animate-spin-slow hidden md:flex">
                <svg viewBox="0 0 100 100" width="100" height="100">
                  <defs>
                    <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                  </defs>
                  <text fontSize="12" fill="#39FF14" fontFamily="monospace" letterSpacing="2">
                    <textPath xlinkHref="#circle">
                      FEEL THE PULSE • NEON PULSE •
                    </textPath>
                  </text>
                </svg>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;