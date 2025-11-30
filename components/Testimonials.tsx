import React from 'react';
import { Testimonial } from '../types';
import { Quote } from 'lucide-react';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Jakub S.',
    role: 'Pravidelný návštěvník',
    text: 'Nejlepší sound systém v Praze. Atmosféra na Cyber Night byla naprosto elektrizující. Nikdy jsem nic podobného nezažil.'
  },
  {
    id: '2',
    name: 'Veronika K.',
    role: 'Music Blogger',
    text: 'Vizuální stránka Neon Pulse eventů je z jiné planety. Světelná show v kombinaci s line-upem tvoří dokonalou synergii.'
  },
  {
    id: '3',
    name: 'Tomáš M.',
    role: 'DJ',
    text: 'Organizace na jedničku a crowd, který fakt reaguje. Pro mě jako DJe je radost tady hrát. VIP sekce je taky top.'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-background border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl font-bold text-white mb-12 uppercase tracking-widest">
            Hlasy <span className="text-neonGreen">Noci</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-[#111] p-8 rounded-tl-3xl rounded-br-3xl border-l-4 border-neonPink relative hover:bg-[#161616] transition-colors">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-gray-800" />
              <p className="text-gray-300 italic mb-6 leading-relaxed">
                "{item.text}"
              </p>
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 bg-gradient-to-br from-neonGreen to-blue-500 rounded-full"></div>
                 <div>
                    <p className="text-white font-bold font-display">{item.name}</p>
                    <p className="text-neonPink text-xs font-mono">{item.role}</p>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;