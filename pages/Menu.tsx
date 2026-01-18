import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { MenuItem as MenuItemType } from '../types';

const MenuItem: React.FC<{ item: MenuItemType }> = ({ item }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const fallbackImage = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800";
  
  // Specific image overrides as requested
  let itemImage = item.image;
  if (item.name === 'Vegetable Biriyani') {
    itemImage = "https://www.whiskaffair.com/wp-content/uploads/2020/08/Veg-Biryani-2-3.jpg";
  } else if (item.name === 'Prawns Biriyani') {
    itemImage = "https://ministryofcurry.com/wp-content/uploads/2017/06/Shirmp-Biryani-2.jpg";
  } else if (item.name === 'Signature Mixed Fried Rice') {
    itemImage = "https://www.kannammacooks.com/wp-content/uploads/mixed-fried-rice-recipe-1-4.jpg";
  } else if (item.name === 'Signature Chicken Fried Rice') {
    itemImage = "https://static.wixstatic.com/media/7d8c70_b2b20de1df88490e91d06e85c4903bae~mv2.jpg/v1/fill/w_980,h_1225,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/7d8c70_b2b20de1df88490e91d06e85c4903bae~mv2.jpg";
  } else if (item.name === 'Seafood Rice') {
    itemImage = "https://images.aws.nestle.recipes/original/cf8d0e138c0c69440cea564037e5f301_seafood-nai-miris-fried-rice.jpg";
  } else if (item.name === 'Nasi Goreng Rice') {
    itemImage = "https://www.chilipeppermadness.com/wp-content/uploads/2020/11/Nasi-Goreng-Indonesian-Fried-Rice-SQ.jpg";
  } else if (item.name === 'Sea Food Kottu') {
    itemImage = "https://static2.kapruka.com/product-image/width=700,quality=93,f=auto/shops/specialGifts/additionalImages/large/1628680214376_dsc07985_m.jpg";
  } else if (item.name === 'Mandodari Special Chicken Kottu') {
    itemImage = "https://www.maggi.lk/sites/default/files/styles/home_stage_944_531/public/srh_recipes/de0a5945fe8e322a4d7711389c7a4830.jpg?h=4f5b30f1&itok=mCvylZbE";
  } else if (item.name === 'Cheese Kottu') {
    itemImage = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYFC_orpBMpyo8iPfKR9E345IuazesTl1HiFlDSORYoAL73krPiFQHQluJukltxXEK-CPwxYl2h1fxZQCr0cC0kZeU1WChRGdSw61z3JeU-Bm1mRqx3UWrlVskSjsIVjJI_TNyWWl8XogFFnr8IiC6uogJNzCiy6MKZoYM3uGQBtAVpWxZ1EKwW2OdI6I/s16000/IMG_7473.HEIC";
  } else if (item.name === 'Mix Kottu') {
    itemImage = "https://thumbs.dreamstime.com/z/hot-spicy-sri-lankan-kottu-roti-close-up-shot-steaming-plate-dish-flavorful-mix-chopped-chicken-scrambled-egg-418362986.jpg";
  } else if (item.name === 'Chef’s Signature Pasta') {
    itemImage = "https://s.lightorangebean.com/media/20240914160809/Spicy-Penne-Pasta_-done.png";
  } else if (item.name === 'Chicken Salad') {
    itemImage = "https://www.giverecipe.com/wp-content/uploads/2019/05/Turkish-Chicken-Salad-Featured-2.jpg";
  } else if (item.name === 'Vegetable Salad') {
    itemImage = "https://images.immediate.co.uk/production/volatile/sites/2/2023/06/Courgette-and-chimichurri-salad-b77053f.jpg?quality=90&resize=708,643";
  } else if (item.name === 'Vegetable Soup') {
    itemImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvS3NYAZRy6CFK8qsTZBlcEIhJb4tCJvrsrQ&s";
  } else if (item.name === 'Chicken Soup') {
    itemImage = "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2023/10/Chicken-Soup-main-2.jpg";
  } else if (item.name === 'Mix Grill') {
    itemImage = "https://lh3.googleusercontent.com/S3XngXxRQhYUmIBiIBZUmK7ITv0LxonNBoh68NJ-hw3VF7RMK4_uWL7WNSzA_XeDwdavkHA8Bkpl4HOWqMjDQTQTb4voKbWjCBWLleeqni10shvj-HWLGZo0othj08jqLIRqS48";
  } else if (item.name === 'Sea Food Grill') {
    itemImage = "https://getfish.com.au/cdn/shop/articles/f4e29a2e0f009ae5c14aad1ea0e83fb7.png?v=1768268370";
  } else if (item.name === 'Cuttlefish Dish') {
    itemImage = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwLO-iFtxeERs_fEw4VMowTlK1UtO6VtBT7DfNvZRJWXjQVNW9XuFNMyNiPc-J3pBIA54ptR_MeBZD0R2Nt87Ia-qJ5PzGon875K_Y8-2Hng6Wx0krXYOswwzZEE27eS7vb2RJ_rEw_q4/s1600/CLNzPwDVEAA62cR.jpg";
  } else if (item.name === 'Prawns Dish') {
    itemImage = "https://i.guim.co.uk/img/media/8b04fd8b83760988484a2be762158d66d345bf00/0_316_3074_3073/master/3074.jpg?width=465&dpr=1&s=none&crop=none";
  } else if (item.name === 'Watalappam') {
    itemImage = "https://www.hungrylankan.com/wp-content/uploads/2025/09/Sri-Lankan-watalappam-3.jpg";
  }

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
          src={imgError ? fallbackImage : itemImage} 
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