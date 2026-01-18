
import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { MenuItem as MenuItemType } from '../types';

const MenuItem: React.FC<{ item: MenuItemType }> = ({ item }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const fallbackImage = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800";

  return (
    <div className="group relative flex flex-col md:flex-row gap-6 md:gap-8 items-start p-5 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-700 cubic-bezier(0.22, 1, 0.36, 1) hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_30px_70px_-20px_rgba(197,160,89,0.15)] h-full">
      {/* Decorative glow effect */}
      <div className="blur-[40px] -mr-10 -mt-10 transition-opacity group-hover:opacity-100 bg-orange-500/10 opacity-50 w-24 h-24 md:w-32 md:h-32 rounded-full absolute top-0 right-0 pointer-events-none"></div>
      
      <div className="w-full md:w-56 h-48 md:h-56 shrink-0 overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border border-white/5 relative z-10 photo-glow bg-stone-900">
        {!imgLoaded && !imgError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-[#C5A059]/30 border-t-[#C5A059] rounded-full animate-spin"></div>
          </div>
        )}
        <img 
          src={imgError ? fallbackImage : item.image} 
          className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`} 
          alt={item.name}
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgError(true)}
          loading="lazy"
        />
      </div>
      <div className="flex-grow pt-1 md:pt-2 relative z-10 w-full">
        <div className="mb-3 md:mb-4">
          <h3 className="text-xl md:text-3xl font-bold serif text-white group-hover:text-[#C5A059] transition-colors duration-500">{item.name}</h3>
        </div>
        <p className="text-stone-500 text-xs md:text-base leading-relaxed font-light mb-4 md:mb-6 opacity-80 group-hover:opacity-100 transition-opacity line-clamp-2 md:line-clamp-3">
          {item.description}
        </p>
        <div className="h-[1px] w-0 group-hover:w-full bg-[#C5A059]/30 transition-all duration-1000"></div>
      </div>
    </div>
  );
};

export const Menu: React.FC = () => {
  const { menu } = useSite();
  
  // Defined strict ordering as requested by the user
  const orderedCategories = [
    'Biriyani', 
    'Rice',
    'Kottu',
    'Noodles / Pasta', 
    'Salads', 
    'Soup', 
    'Special Dishes', 
    'Other Favourite Dishes', 
    'Desserts'
  ] as const;

  return (
    <div className="pt-48 pb-32 px-6 bg-[#0D0D0D]">
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      <div className="max-w-[1800px] mx-auto">
        <div className="text-center mb-24 md:mb-28 reveal">
          <h4 className="text-[#C5A059] uppercase tracking-[0.4em] font-bold text-xs mb-6">Culinary Artistry</h4>
          <h1 className="text-6xl md:text-8xl font-bold mb-10 serif text-white">The Tasting Room</h1>
          <p className="max-w-2xl mx-auto text-stone-400 font-light text-lg">
            A fusion of exotic Sri Lankan spices and avant-garde international techniques. Every dish tells a story of heritage and innovation.
          </p>
        </div>

        {orderedCategories.map((cat) => {
          const itemsInCategory = menu.filter(item => item.category === cat);
          
          if (itemsInCategory.length === 0) return null;

          return (
            <div key={cat} className="mb-14 md:mb-20">
              <div className="flex items-center gap-6 md:gap-10 mb-6 md:mb-8 reveal px-2 md:px-4">
                <h2 className="text-3xl md:text-4xl font-bold serif text-white whitespace-nowrap italic">{cat}</h2>
                <div className="h-[1px] w-full bg-white/10"></div>
                <div className="hidden md:flex gap-4">
                  <span className="text-stone-600 text-[10px] font-black uppercase tracking-widest whitespace-nowrap">Swipe to Explore</span>
                </div>
              </div>
              
              <div 
                className="flex overflow-x-auto gap-5 md:gap-12 pb-8 md:pb-10 snap-x snap-mandatory no-scrollbar -mx-6 px-6 scroll-smooth"
              >
                {itemsInCategory.map(item => (
                  <div 
                    key={item.id} 
                    className="w-[75vw] md:w-[650px] shrink-0 snap-center first:pl-2 last:pr-2"
                  >
                    <MenuItem item={item} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        <div className="mt-16 md:mt-24 bg-[#141414] rounded-[2.5rem] md:rounded-[3rem] p-10 md:p-32 text-center border border-white/5 relative luxury-shadow reveal mx-2 md:mx-4">
          <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-[#C5A059]/5 blur-[60px] md:blur-[80px] rounded-full"></div>
          <h2 className="text-3xl md:text-6xl font-bold mb-6 serif text-white">Private Banquets</h2>
          <p className="text-stone-400 mb-10 md:mb-12 max-w-xl mx-auto font-light leading-relaxed text-sm md:text-base">
            Elevate your special moments with a bespoke menu crafted by our Executive Chef. From intimate candlelit dinners to grand celebrations.
          </p>
          <button className="glow-button bg-[#C5A059] text-black px-10 md:px-12 py-4 md:py-5 rounded-full font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl text-[10px] md:text-xs">
            Inquire for Events
          </button>
        </div>
      </div>
    </div>
  );
};
