
import React, { useState } from 'react';
import { Camera, Share2, Eye } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Suites', 'Dining', 'Architecture', 'Grounds', 'Moments'];
  
  // Dense image set with varying aspect ratios for masonry effect
  const images = [
    { url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb', category: 'Architecture', title: 'The Grand Entrance', height: 'h-80' },
    { url: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39', category: 'Suites', title: 'Imperial Master Suite', height: 'h-64' },
    { url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427', category: 'Suites', title: 'The Pavilion Lounge', height: 'h-96' },
    { url: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371', category: 'Dining', title: 'Signature Gold Risotto', height: 'h-72' },
    { url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd', category: 'Architecture', title: 'Stone Corridor', height: 'h-96' },
    { url: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9', category: 'Grounds', title: 'The Reflection Pool', height: 'h-64' },
    { url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945', category: 'Architecture', title: 'Main Villa Vista', height: 'h-80' },
    { url: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2', category: 'Dining', title: 'Wagyu Carpaccio', height: 'h-96' },
    { url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d', category: 'Suites', title: 'Bedroom Sanctuary', height: 'h-72' },
    { url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4', category: 'Grounds', title: 'Dawn at Bevary', height: 'h-80' },
    { url: 'https://images.unsplash.com/photo-1544124499-58912cbddaad', category: 'Dining', title: 'The Cellar Selection', height: 'h-64' },
    { url: 'https://images.unsplash.com/photo-1551882547-ff43c63efe81', category: 'Moments', title: 'Evening Serenity', height: 'h-96' },
    { url: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7', category: 'Suites', title: 'En-suite Luxury', height: 'h-72' },
    { url: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6', category: 'Grounds', title: 'Tropical Canopy', height: 'h-96' },
    { url: 'https://images.unsplash.com/photo-1535827841776-24af38d40a3a', category: 'Architecture', title: 'Detailing', height: 'h-64' },
    { url: 'https://images.unsplash.com/photo-1591088398332-8a77d399e80c', category: 'Moments', title: 'Twilight Glow', height: 'h-80' }
  ];

  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

  return (
    <div className="pt-40 pb-40 bg-[#0D0D0D]">
      <div className="max-w-[1800px] mx-auto px-6">
        <div className="text-center mb-24 reveal">
          <h4 className="text-[#C5A059] uppercase tracking-[0.6em] font-black text-[9px] mb-6">Visual Anthology</h4>
          <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-bold serif text-white italic tracking-tighter leading-[0.85]">A Glimpse of <br /> <span className="text-[#C5A059]">Perfection.</span></h1>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-20 reveal stagger-1 px-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] transition-all duration-700 pb-3 border-b-2 ${
                filter === cat ? 'text-[#C5A059] border-[#C5A059]' : 'text-stone-600 border-transparent hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Collage Grid */}
        <div className="columns-2 md:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {filteredImages.map((img, idx) => (
            <div 
              key={idx} 
              className="break-inside-avoid reveal group relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] luxury-shadow cursor-pointer transition-all duration-700 hover:z-20 bg-stone-900 photo-glow"
            >
              <div className="blur-[40px] -mr-10 -mt-10 transition-opacity group-hover:opacity-100 bg-orange-500/10 opacity-50 w-32 h-32 rounded-full absolute top-0 right-0 z-10 pointer-events-none"></div>
              
              <div className={`${img.height} relative overflow-hidden`}>
                <img 
                  src={`${img.url}?auto=format&fit=crop&q=80&w=800`} 
                  alt={img.title}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-4 md:p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                    <span className="text-[#C5A059] text-[7px] md:text-[9px] font-black uppercase tracking-[0.5em] mb-1 md:mb-2 block">{img.category}</span>
                    <h3 className="text-white text-sm md:text-xl font-bold serif mb-2 md:mb-4">{img.title}</h3>
                    <div className="flex items-center gap-4 md:gap-6">
                      <button className="flex items-center gap-2 text-white/60 hover:text-white text-[7px] md:text-[8px] font-black uppercase tracking-widest transition-colors">
                        <Eye size={12} className="md:w-[14px] md:h-[14px]" /> View
                      </button>
                      <button className="flex items-center gap-2 text-white/60 hover:text-white text-[7px] md:text-[8px] font-black uppercase tracking-widest transition-colors">
                        <Share2 size={12} className="md:w-[14px] md:h-[14px]" /> Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Gallery Statement */}
        <div className="mt-40 text-center reveal">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-[#141414] rounded-2xl flex items-center justify-center mx-auto mb-10 text-[#C5A059] border border-white/5 shadow-xl">
            <Camera size={28} strokeWidth={1.5} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold serif text-white mb-6 italic">Capturing the Eternal.</h2>
          <p className="text-stone-500 max-w-xl mx-auto font-light leading-relaxed text-base md:text-lg px-6">
            Our estate is a living gallery of moments. Every frame presented here is an unedited window into the Bevary Guest experience.
          </p>
          <div className="mt-12">
            <button className="text-[#C5A059] border-b border-[#C5A059]/30 pb-2 font-black uppercase tracking-[0.3em] text-[9px] hover:text-white hover:border-white transition-all">
              Request Full Press Kit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
