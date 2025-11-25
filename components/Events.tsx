import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Event } from '../types';

const events: Event[] = [
  {
    id: '1',
    title: 'CYBER NIGHT VOL. 4',
    date: '24.12.2025',
    location: 'Underground Bunker, Praha',
    description: 'Noc plná čistého techna a industriálních beatů.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/93/32/9f/main-club.jpg?w=900&h=500&s=1'
  },
  {
    id: '2',
    title: 'NEON DREAMS',
    date: '31.12.2025',
    location: 'Skyline Rooftop, Praha',
    description: 'Oslav příchod nového roku v rytmu synthwave.',
    image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'BASS DROP 2025',
    date: '15.01.2025',
    location: 'The Factory, Brno',
    description: 'Těžké basy, dubstep a drum & bass celou noc.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop'
  }
];

const Events: React.FC = () => {
  return (
    <section id="events" className="py-24 bg-background relative">
        {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-neonGreen/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            NADCHÁZEJÍCÍ <span className="text-neonGreen">AKCE</span>
          </h2>
          <div className="w-24 h-1 bg-neonPink mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div 
              key={event.id}
              className="group relative bg-[#151515] border border-gray-800 hover:border-neonGreen transition-all duration-500 overflow-hidden flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-neonPink/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20 bg-black/80 backdrop-blur-sm border border-neonGreen px-3 py-1">
                    <span className="font-mono text-neonGreen font-bold">{event.date}</span>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between relative z-20">
                <div>
                    <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-neonPink transition-colors">{event.title}</h3>
                    <div className="flex items-center gap-2 text-gray-400 mb-2 text-sm">
                        <MapPin className="w-4 h-4 text-neonGreen" />
                        <span>{event.location}</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        {event.description}
                    </p>
                </div>
                
                <button className="w-full py-3 border border-gray-600 text-white font-display font-bold uppercase tracking-wider hover:bg-neonGreen hover:text-black hover:border-neonGreen transition-all duration-300">
                    KOUPIT LÍSTKY
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;