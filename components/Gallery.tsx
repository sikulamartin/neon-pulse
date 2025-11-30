import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { GalleryItem } from '../types';

const galleryItems: GalleryItem[] = [
  { id: '1', src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070', alt: 'Party Crowd', category: 'VIBES' },
  { id: '2', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDQkAMy2o704KYmX7A0SbQAVoT7SF7DR3ZeA&s', alt: 'DJ Set', category: 'UMĚLCI' },
  { id: '3', src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070', alt: 'Lights', category: 'ATMOSFÉRA' },
  { id: '4', src: 'https://m.media-amazon.com/images/I/8134wUTy9LL.jpg', alt: 'Neon Sign', category: 'DETAILY' },
  { id: '5', src: 'https://images.stockcake.com/public/2/4/2/24216587-34a9-4a17-946a-ff9427afe708_large/neon-concert-future-stockcake.jpg', alt: 'Concert', category: 'HLAVNÍ STAGE' },
  { id: '6', src: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2070', alt: 'Crowd Hands', category: 'LIDÉ' },
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
                    MOMENTY
                </h2>
                <p className="text-gray-400 mt-2 font-mono text-sm uppercase tracking-widest text-neonPink">
                    // ZACHYCENÉ OKAMŽIKY
                </p>
            </div>
            <button className="hidden md:block px-6 py-2 border border-neonGreen/50 text-neonGreen font-mono text-xs hover:bg-neonGreen hover:text-black transition-colors">
                ZOBRAZIT ARCHIV
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative h-72 cursor-pointer overflow-hidden rounded-sm"
              onClick={() => setSelectedImage(item)}
            >
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <div className="border border-neonGreen p-4 rounded-full transform scale-50 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-8 h-8 text-neonGreen" />
                 </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-neonPink font-mono text-xs font-bold">{item.category}</span>
                <p className="text-white font-display font-bold uppercase">{item.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
        >
            <button 
                className="absolute top-4 right-4 text-gray-400 hover:text-white hover:rotate-90 transition-all duration-300"
                onClick={() => setSelectedImage(null)}
            >
                <X className="w-10 h-10" />
            </button>
            <div 
                className="relative max-w-5xl w-full h-full max-h-[85vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
            >
                <img 
                    src={selectedImage.src} 
                    alt={selectedImage.alt} 
                    className="max-w-full max-h-full object-contain shadow-[0_0_50px_rgba(57,255,20,0.15)] border-b-2 border-neonGreen"
                />
                <div className="absolute bottom-[-40px] left-0 text-white font-display text-xl">
                    {selectedImage.alt} <span className="text-neonPink text-sm font-mono ml-2">// {selectedImage.category}</span>
                </div>
            </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;