import React from 'react';
import { Artist } from '../types';
import { Instagram, Music } from 'lucide-react';

const artists: Artist[] = [
  {
    id: '1',
    name: 'DJ VOID',
    genre: 'INDUSTRIAL TECHNO',
    image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1974&auto=format&fit=crop',
    instagram: '@djvoid_official'
  },
  {
    id: '2',
    name: 'NEON SISTERS',
    genre: 'CYBER PUNK / SYNTH',
    image: 'https://i.pinimg.com/736x/6f/66/f6/6f66f6379f01eab05b47e239d90844d8.jpg',
    instagram: '@neonsisters'
  },
  {
    id: '3',
    name: 'KINETIC',
    genre: 'DRUM & BASS',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1e/02/95/c7/caption.jpg?w=1200&h=-1&s=1',
    instagram: '@kinetic_dnb'
  },
  {
    id: '4',
    name: 'ECHO PROTOCOL',
    genre: 'DEEP HOUSE',
    image: 'https://images.unsplash.com/photo-1525253604620-23ac591dbea0?q=80&w=2074&auto=format&fit=crop',
    instagram: '@echoprotocol'
  }
];

const Lineup: React.FC = () => {
  return (
    <section id="lineup" className="py-24 bg-background border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-2">
              LINEUP <span className="text-neonGreen text-xl align-top">2024</span>
            </h2>
            <p className="text-gray-400 font-mono">MASTERS OF SOUND.</p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-neonPink hover:text-white transition-colors uppercase font-bold text-sm tracking-widest">
            <Music className="w-4 h-4" /> Poslechnout Playlist
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {artists.map((artist) => (
            <div key={artist.id} className="group relative">
              <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                <img 
                  src={artist.image} 
                  alt={artist.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-neonGreen font-mono text-xs mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {artist.genre}
                  </p>
                  <h3 className="text-white font-display font-bold text-2xl uppercase italic leading-none mb-2">
                    {artist.name}
                  </h3>
                  <div className="h-[2px] w-0 group-hover:w-full bg-neonPink transition-all duration-500"></div>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="#" className="bg-black/50 backdrop-blur-md p-2 rounded-full text-white hover:text-neonPink hover:bg-black block">
                        <Instagram className="w-5 h-5" />
                    </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm font-mono uppercase tracking-widest">+ DALŠÍ BRZY</p>
        </div>
      </div>
    </section>
  );
};

export default Lineup;