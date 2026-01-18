import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { Waves, Utensils, Wifi, Users, MapPin, Shield, Car, ArrowRight, Maximize2, Coffee, Camera, Eye, X, Check, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Room } from '../types';

export const Villa: React.FC = () => {
  const { rooms } = useSite();
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  const galleryPreview = [
    { url: 'https://images.unsplash.com/photo-1613977257363-707ba9348227', size: 'md:col-span-2 md:row-span-2', title: 'Estate Grounds' },
    { url: 'https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e', size: 'md:col-span-2 md:row-span-1', title: 'Artisan Bath' },
    { url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0', size: 'md:col-span-1 md:row-span-1', title: 'Evening Lounge' },
    { url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d', size: 'md:col-span-1 md:row-span-1', title: 'Poolside Bliss' },
  ];

  return (
    <div className="bg-[#0D0D0D]">
      {/* Immersive Villa Hero Section */}
      <section className="relative h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-stone-900">
          <img 
            src="https://res.cloudinary.com/dxplhh55e/image/upload/v1768611243/Mandodari_Villa_Anuradhapura-39_Copy_wbxwhu.jpg" 
            className="w-full h-full object-cover"
            alt="The Mandodari Villa Estate"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80"></div>
        </div>

        <div className="relative z-10 text-center px-6 w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
          <h4 className="reveal active text-[#C5A059] text-[9px] md:text-xs font-light tracking-[0.6em] uppercase mb-4 md:mb-6 serif">
            SIGNATURE ACCOMMODATION
          </h4>
          
          <div className="relative mb-6">
            <h1 className="reveal active stagger-1 text-white text-5xl md:text-9xl lg:text-[11rem] font-bold serif leading-none tracking-tight">
              Mandodari
            </h1>
            <h2 className="reveal active stagger-2 absolute -bottom-6 md:-bottom-10 left-[58%] -translate-x-1/2 text-[#C5A059] text-4xl md:text-7xl lg:text-[7rem] italic serif font-medium opacity-95">
              Villa
            </h2>
          </div>

          <div className="reveal active stagger-3 mt-16 md:mt-24 mb-10 md:mb-14">
            <p className="text-white text-[8px] md:text-[12px] font-bold tracking-[0.4em] uppercase opacity-90">
              ANURADHAPURA • LUXURY COLLECTIVE
            </p>
          </div>

          <div className="reveal active stagger-3 flex flex-col md:flex-row items-center justify-center gap-5 md:gap-8 w-full">
            <Link 
              to="/booking" 
              className="glow-button bg-[#C5A059] text-black px-10 md:px-14 py-4 md:py-5 rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] shadow-2xl w-full md:w-auto text-center transition-all duration-500 hover:scale-105"
            >
              INQUIRE FOR STAY
            </Link>
            <Link 
              to="/menu" 
              className="glow-button bg-transparent border border-white/30 text-white hover:bg-white hover:text-black px-10 md:px-14 py-4 md:py-5 rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] shadow-2xl backdrop-blur-md transition-all duration-500 w-full md:w-auto text-center hover:scale-105"
            >
              VIEW MENU
            </Link>
          </div>
        </div>
      </section>

      {/* Intro & Specs */}
      <section className="py-20 md:py-40 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-32 items-center">
            <div className="space-y-8 md:space-y-12">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold serif leading-tight text-white">Ancient Soul. <br /> Modern <span className="text-[#C5A059]">Elegance.</span></h2>
              <p className="text-stone-400 leading-relaxed text-lg md:text-xl font-light">
                Designed for the world’s most elite travelers, Mandodari Villa is a sanctuary of quiet luxury. Located in the shadow of history, we offer a retreat that honors the past while providing every modern convenience.
              </p>
              <div className="grid grid-cols-2 gap-1">
                {[
                  { icon: <Users size={18} />, label: 'Up to 25 Guests' },
                  { icon: <Waves size={18} />, label: 'Heated Pool' },
                  { icon: <Shield size={18} />, label: 'Discreet Security' },
                  { icon: <MapPin size={18} />, label: 'Sacred Proximity' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 md:gap-5 p-6 md:p-10 bg-[#141414] border border-white/5">
                    <span className="text-[#C5A059]">{item.icon}</span>
                    <span className="font-black text-[8px] md:text-[10px] uppercase tracking-[0.1em] md:tracking-[0.2em] text-stone-400">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative group reveal stagger-2">
              <div className="aspect-[3/4] overflow-hidden luxury-shadow rounded-[2rem] md:rounded-[3rem] bg-stone-900 photo-glow">
                <img src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-[#C5A059] p-8 md:p-12 rounded-2xl hidden lg:block luxury-shadow">
                <p className="text-black serif text-xl md:text-3xl italic leading-tight">"The finest stay in <br /> South Asia."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Villa Location & Contact Info Section - NEW */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#111] rounded-[3rem] border border-white/5 p-12 md:p-20 luxury-shadow reveal overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 blur-[100px] rounded-full"></div>
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 relative z-10">
              <div className="space-y-10">
                <div>
                  <h4 className="text-[#C5A059] uppercase tracking-[0.6em] font-black text-[9px] mb-6">The Sanctuary Details</h4>
                  <h2 className="text-4xl md:text-5xl serif text-white leading-tight">Mandodari Villa <br /><span className="italic font-medium text-[#C5A059]">Private Retreat.</span></h2>
                </div>
                
                <div className="space-y-8">
                  <div className="flex gap-6 items-start">
                    <MapPin className="text-[#C5A059] shrink-0 w-6 h-6" strokeWidth={1.5} />
                    <div>
                      <p className="text-white text-lg font-bold serif mb-2">Sanctuary Address</p>
                      <p className="text-stone-400 font-light leading-relaxed">395/12 A Mudhitha Mawatha, Anuradhapura 50000, Sri Lanka</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-6 items-start">
                    <Mail className="text-[#C5A059] shrink-0 w-6 h-6" strokeWidth={1.5} />
                    <div>
                      <p className="text-white text-lg font-bold serif mb-2">Inquiry Portal</p>
                      <p className="text-stone-400 font-light underline decoration-[#C5A059]/30 underline-offset-4">bevaryguest@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#161616] p-10 md:p-14 rounded-[2rem] border border-white/5">
                <h4 className="text-[#C5A059] uppercase tracking-[0.4em] font-black text-[9px] mb-8 text-center">Concierge Hotlines</h4>
                <div className="space-y-8">
                  {[
                    { label: 'Primary Contact', number: '070 570 5060' },
                    { label: 'Guest Relations', number: '071 754 9380' },
                    { label: 'Private Bookings', number: '071 322 3525' }
                  ].map((phone, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-6 last:border-0 last:pb-0 group">
                      <span className="text-stone-500 text-[10px] font-black uppercase tracking-widest">{phone.label}</span>
                      <a href={`tel:${phone.number.replace(/\s/g, '')}`} className="text-white font-bold text-xl serif group-hover:text-[#C5A059] transition-colors">{phone.number}</a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REFINED: Room Section (The Mandodari Sanctuary) */}
      <section className="py-24 md:py-56 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 md:mb-40 reveal">
             <h4 className="text-[#C5A059] uppercase tracking-[0.6em] font-black text-[9px] mb-6 md:mb-8">Accommodations</h4>
             <h2 className="text-4xl md:text-7xl lg:text-9xl font-bold serif text-white leading-[0.9] tracking-tighter">The Mandodari <br /><span className="italic text-[#C5A059] font-medium">Sanctuary.</span></h2>
          </div>

          <div className="grid gap-20 md:gap-40">
            {rooms.map((room, i) => (
              <div key={room.id} className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 md:gap-24 items-center reveal`}>
                <div className="lg:w-1/2 relative group">
                  <div className="aspect-[16/10] overflow-hidden rounded-[2rem] md:rounded-[4rem] luxury-shadow photo-glow bg-stone-900">
                    <img src={room.image} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" alt={room.name} />
                  </div>
                  <div className="absolute top-10 left-10 flex gap-2">
                    <span className="bg-black/40 backdrop-blur-md px-6 py-2 rounded-full text-[8px] font-black uppercase tracking-widest text-white border border-white/10">0{i+1}</span>
                  </div>
                </div>
                
                <div className="lg:w-1/2 space-y-8 md:space-y-12">
                  <div className="space-y-6">
                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold serif text-white">{room.name}</h3>
                    <p className="text-stone-500 text-lg md:text-xl font-light italic leading-relaxed">
                      "{room.description}"
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6 md:gap-10">
                    {room.amenities.map((a, idx) => (
                      <div key={idx} className="flex items-center gap-4 group">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059] group-hover:scale-150 transition-transform"></div>
                        <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-stone-400 group-hover:text-white transition-colors">{a}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 md:pt-12 flex items-center justify-between border-t border-white/5">
                    <div>
                      <p className="text-stone-600 text-[10px] font-black uppercase tracking-widest mb-2">Private Rate</p>
                      <p className="text-[#C5A059] text-3xl md:text-4xl font-bold serif">LKR {room.price.toLocaleString()}</p>
                    </div>
                    <Link 
                      to="/booking" 
                      className="glow-button bg-white text-black px-10 md:px-14 py-4 md:py-6 rounded-full font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-[#C5A059] transition-all"
                    >
                      Book Suite
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Poetry Gallery Preview */}
      <section className="py-24 md:py-48 bg-[#0D0D0D]">
        <div className="max-w-[1800px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 md:mb-24 reveal">
            <div>
              <h4 className="text-[#C5A059] uppercase tracking-[0.6em] font-black text-[9px] mb-6">Atmosphere</h4>
              <h2 className="text-4xl md:text-7xl serif text-white leading-tight">Estate <span className="italic text-[#C5A059] font-medium">Glimpses.</span></h2>
            </div>
            <Link to="/gallery" className="mt-8 md:mt-0 glow-button inline-flex items-center gap-4 bg-white/5 border border-white/10 text-white px-10 py-4 rounded-full font-black uppercase tracking-[0.3em] text-[9px] hover:bg-[#C5A059] hover:text-black transition-all duration-700">
               <Camera size={14} /> View All Moments
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[900px]">
            {galleryPreview.map((img, i) => (
              <div key={i} className={`reveal stagger-${i+1} group relative overflow-hidden rounded-[2.5rem] luxury-shadow photo-glow ${img.size}`}>
                <img 
                  src={`${img.url}?auto=format&fit=crop&q=80&w=1200`} 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" 
                  alt={img.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-10">
                  <h3 className="text-white text-2xl font-bold serif mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">{img.title}</h3>
                  <div className="flex items-center gap-2 text-[#C5A059] text-[9px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all delay-150">
                    <Eye size={12} /> Explore Detail
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};