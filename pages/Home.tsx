import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Coffee, Wifi, Car, ShieldCheck, Star, Quote, Hotel, Maximize2, Camera, Eye, X, Check, MapPin, Phone, Mail } from 'lucide-react';
import { useSite } from '../context/SiteContext';
import { Room } from '../types';

export const Home: React.FC = () => {
  const { testimonials, rooms } = useSite();
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  const galleryPreview = [
    { url: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9', size: 'md:col-span-2 md:row-span-2', title: 'The Azure Basin' },
    { url: 'https://images.unsplash.com/photo-1544124499-58912cbddaad', size: 'md:col-span-2 md:row-span-1', title: 'Vintage Reserves' },
    { url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd', size: 'md:col-span-1 md:row-span-1', title: 'Monolithic Paths' },
    { url: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39', size: 'md:col-span-1 md:row-span-1', title: 'Imperial Silence' },
  ];

  return (
    <div className="overflow-hidden bg-[#0D0D0D]">
      {/* Immersive Villa Hero Section */}
      <section className="relative h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-stone-900">
          <img 
            src="https://res.cloudinary.com/dxplhh55e/image/upload/v1768608868/617365671_viusxc.jpg" 
            className="w-full h-full object-cover"
            alt="Bevary Guest Signature Estate"
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
              Bevary
            </h1>
            <h2 className="reveal active stagger-2 absolute -bottom-6 md:-bottom-10 left-[58%] -translate-x-1/2 text-[#C5A059] text-4xl md:text-7xl lg:text-[7rem] italic serif font-medium opacity-95">
              Guest
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

      {/* Brand Ethos */}
      <section className="py-16 md:py-24 bg-[#0D0D0D] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 md:gap-24 items-center">
            <div className="md:col-span-5 reveal">
              <h4 className="text-[#C5A059] uppercase tracking-[0.6em] font-black text-[9px] mb-4 md:mb-8">Our Philosophy</h4>
              <h2 className="text-4xl md:text-6xl lg:text-8xl serif text-white leading-[1.05] tracking-tight">The Art of <br /><span className="italic text-[#C5A059] font-medium">Service.</span></h2>
            </div>
            <div className="md:col-span-7 reveal stagger-2">
              <p className="text-xl md:text-3xl lg:text-5xl font-extralight text-stone-400 leading-[1.3] italic">
                "Luxury is not about excess, but about the profound <span className="text-white font-normal">tranquility</span> of having every desire anticipated. At Bevary Guest, we don't just host; we curate a legacy."
              </p>
              <div className="mt-8 md:mt-16 w-16 md:w-32 h-[1px] bg-[#C5A059]/30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Suites Section */}
      <section className="py-16 md:py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 reveal">
            <div className="max-w-2xl">
              <h4 className="text-[#C5A059] uppercase tracking-[0.6em] font-black text-[9px] mb-6">Accommodations</h4>
              <h2 className="text-4xl md:text-7xl serif text-white leading-tight">Private <br /><span className="italic text-[#C5A059] font-medium">Sanctuaries.</span></h2>
            </div>
            <Link to="/villa" className="mt-6 md:mt-0 text-[#C5A059] border-b border-[#C5A059]/30 pb-2 font-black uppercase tracking-[0.3em] text-[9px] hover:text-white hover:border-white transition-all">
              Explore All Suites
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            {rooms.map((room, i) => (
              <div key={room.id} className={`reveal stagger-${i + 1} group`}>
                <div className="aspect-[16/10] overflow-hidden rounded-[2rem] md:rounded-[3rem] luxury-shadow mb-6 md:mb-10 bg-stone-900 relative photo-glow">
                   <img src={room.image} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" alt={room.name} />
                </div>
                <div className="px-4 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[#C5A059] font-black text-[8px] tracking-[0.4em] uppercase">Imperial Collection</span>
                    <div className="h-[1px] w-6 bg-[#C5A059]/30"></div>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold serif text-white group-hover:text-[#C5A059] transition-colors">{room.name}</h3>
                  <div className="flex flex-wrap gap-4">
                    {room.amenities.slice(0, 3).map(a => (
                      <span key={a} className="flex items-center gap-2 text-stone-500 text-[8px] font-black uppercase tracking-widest">
                        <div className="w-1 h-1 rounded-full bg-[#C5A059]"></div> {a}
                      </span>
                    ))}
                  </div>
                  
                  <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-8">
                    <div>
                      <p className="text-[#C5A059] text-3xl font-bold serif">LKR {room.price.toLocaleString()}</p>
                      <p className="text-[10px] font-black text-stone-600 uppercase tracking-widest mt-2">Per Night / Inclusive of Taxes</p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                      <button 
                        onClick={() => setSelectedRoom(room)}
                        className="text-[#C5A059] text-[8px] font-black uppercase tracking-[0.3em] border-b border-[#C5A059]/30 pb-1 hover:border-white hover:text-white transition-all w-fit"
                      >
                        View Full Specs
                      </button>
                      <Link 
                        to="/booking" 
                        className="glow-button bg-white text-black px-10 py-4 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-[#C5A059] transition-all shadow-2xl text-center w-full sm:w-auto"
                      >
                        Book Suite
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estate Location & Contact Info Section - NEW */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#111] rounded-[3rem] border border-white/5 p-12 md:p-20 luxury-shadow reveal overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 blur-[100px] rounded-full"></div>
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 relative z-10">
              <div className="space-y-10">
                <div>
                  <h4 className="text-[#C5A059] uppercase tracking-[0.6em] font-black text-[9px] mb-6">The Headquarters</h4>
                  <h2 className="text-4xl md:text-5xl serif text-white leading-tight">Bevary Guest <br /><span className="italic font-medium text-[#C5A059]">Legacy Estate.</span></h2>
                </div>
                
                <div className="space-y-8">
                  <div className="flex gap-6 items-start">
                    <MapPin className="text-[#C5A059] shrink-0 w-6 h-6" strokeWidth={1.5} />
                    <div>
                      <p className="text-white text-lg font-bold serif mb-2">Legacy Address</p>
                      <p className="text-stone-400 font-light leading-relaxed">277 Godage Mawatha, 50000 Anuradhapura, Sri Lanka</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-6 items-start">
                    <Mail className="text-[#C5A059] shrink-0 w-6 h-6" strokeWidth={1.5} />
                    <div>
                      <p className="text-white text-lg font-bold serif mb-2">Electronic Mail</p>
                      <p className="text-stone-400 font-light underline decoration-[#C5A059]/30 underline-offset-4">bevaryguest@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#161616] p-10 md:p-14 rounded-[2rem] border border-white/5">
                <h4 className="text-[#C5A059] uppercase tracking-[0.4em] font-black text-[9px] mb-8 text-center">Elite Hotlines</h4>
                <div className="space-y-8">
                  {[
                    { label: 'General Reservations', number: '025 222 3406' },
                    { label: 'Concierge Direct', number: '070 222 3406' },
                    { label: 'Executive Line', number: '077 484 7406' }
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

      {/* Testimonials Section */}
      <section className="py-16 md:py-36 bg-[#0D0D0D] overflow-hidden">
        <div className="text-center mb-16 md:mb-28 reveal px-6">
          <h4 className="text-[#C5A059] uppercase tracking-[0.7em] font-black text-[9px] mb-6 md:mb-8">Testimonials</h4>
          <h2 className="text-4xl md:text-6xl lg:text-[8rem] serif text-white italic font-medium leading-none tracking-tighter">The Bevary Impression</h2>
        </div>

        <div className="relative flex">
          <div className="animate-marquee whitespace-nowrap flex gap-10 md:gap-20 py-10">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="group relative w-[280px] md:w-[450px] lg:w-[650px] bg-[#111]/50 backdrop-blur-3xl p-8 md:p-16 border border-white/5 rounded-[2.5rem] md:rounded-[4rem] flex flex-col justify-between shrink-0 luxury-shadow hover:border-[#C5A059]/30 transition-all duration-1000 overflow-hidden">
                <div className="blur-[40px] -mr-10 -mt-10 transition-opacity group-hover:opacity-100 bg-orange-500/10 opacity-50 w-20 h-20 md:w-28 md:h-28 rounded-full absolute top-0 right-0"></div>
                
                <div className="relative z-10">
                  <div className="flex text-[#C5A059] gap-2 md:gap-3 mb-6 md:mb-10">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                  <Quote className="text-[#C5A059]/5 mb-4 md:mb-8 w-12 h-12 md:w-20 md:h-20" strokeWidth={0.5} />
                  <p className="text-base md:text-2xl lg:text-3xl serif italic text-stone-200 leading-[1.3] break-words whitespace-normal font-light">
                    "{t.content}"
                  </p>
                </div>
                <div className="mt-8 md:mt-16 flex items-center gap-4 md:gap-6 relative z-10">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-tr from-[#C5A059] to-[#E5C079] flex items-center justify-center font-black text-black text-lg md:text-xl shadow-lg shadow-[#C5A059]/20">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-black uppercase tracking-[0.5em] text-[7px] md:text-[8px]">{t.author}</h4>
                    <p className="text-[#C5A059] text-[6px] md:text-[7px] uppercase tracking-[0.6em] font-black mt-1 md:mt-2">Elite Circle Member</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Poetry Gallery Preview */}
      <section className="py-16 md:py-32 bg-[#0D0D0D]">
        <div className="max-w-[1800px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 md:mb-24 reveal">
            <div>
              <h4 className="text-[#C5A059] uppercase tracking-[0.6em] font-black text-[9px] mb-6">Atmosphere</h4>
              <h2 className="text-4xl md:text-7xl serif text-white leading-tight">Visual <span className="italic text-[#C5A059] font-medium">Poetry.</span></h2>
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

      {/* Final CTA */}
      <section className="py-16 md:py-48 px-6">
        <div className="max-w-[1500px] mx-auto bg-stone-950/80 backdrop-blur-3xl rounded-[2.5rem] md:rounded-[5rem] p-10 md:p-40 text-center border border-white/10 relative overflow-hidden luxury-shadow reveal">
           <div className="absolute -top-[150px] md:-top-[300px] -right-[150px] md:-right-[300px] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[#C5A059]/5 blur-[120px] md:blur-[200px] rounded-full"></div>
           <div className="absolute -bottom-[150px] md:-bottom-[300px] -left-[150px] md:-left-[300px] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[#C5A059]/5 blur-[120px] md:blur-[200px] rounded-full"></div>
           
           <div className="relative z-10">
            <h2 className="text-3xl md:text-6xl lg:text-[10rem] font-bold mb-8 md:mb-16 serif leading-[0.8] text-white tracking-tighter">Secure Your <br /><span className="text-[#C5A059] italic font-medium">Legacy.</span></h2>
            <p className="text-stone-400 text-base md:text-2xl max-w-3xl mx-auto mb-12 md:mb-20 font-extralight leading-relaxed tracking-wide">
              Exclusivity is our promise. Limited availability for the current season. Experience the pinnacle of Anuradhapura hospitality.
            </p>
            <Link 
                to="/booking" 
                className="glow-button inline-block bg-[#C5A059] text-black px-10 md:px-32 py-4 md:py-7 rounded-full font-black uppercase tracking-[0.5em] text-[9px] md:text-[10px] hover:bg-white transition-all duration-1000 transform shadow-[0_25px_50px_rgba(197,160,89,0.3)] md:shadow-[0_40px_100px_rgba(197,160,89,0.5)]"
              >
                REQUEST AVAILABILITY
              </Link>
           </div>
        </div>
      </section>

      {/* Full Specs Modal Overlay */}
      {selectedRoom && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-500">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-2xl cursor-pointer" 
            onClick={() => setSelectedRoom(null)}
          ></div>
          
          <div className="relative bg-[#0D0D0D] w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-[3rem] border border-white/10 luxury-shadow flex flex-col md:flex-row animate-in zoom-in slide-in-from-bottom-10 duration-700">
            <button 
              onClick={() => setSelectedRoom(null)}
              className="absolute top-8 right-8 z-[110] text-stone-400 hover:text-white transition-colors"
            >
              <X size={32} strokeWidth={1.5} />
            </button>

            {/* Left: Visual Content */}
            <div className="md:w-[45%] h-[400px] md:h-auto shrink-0 relative">
              <img 
                src={selectedRoom.image} 
                className="w-full h-full object-cover" 
                alt={selectedRoom.name} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10">
                <p className="text-[#C5A059] text-[10px] font-black tracking-[0.4em] uppercase mb-2">Signature Asset</p>
                <h2 className="text-4xl font-bold serif text-white italic">{selectedRoom.name}</h2>
              </div>
            </div>

            {/* Right: Detailed Content */}
            <div className="p-10 md:p-20 flex-grow space-y-12">
              <div className="space-y-6">
                <h4 className="text-[#C5A059] uppercase tracking-[0.6em] font-black text-[9px]">Technical Specifications</h4>
                <p className="text-stone-400 text-lg md:text-xl font-light leading-relaxed italic">
                  "{selectedRoom.description}"
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/5">
                <div>
                  <p className="text-stone-500 text-[9px] uppercase tracking-widest font-black mb-2">Max Occupancy</p>
                  <p className="text-white text-xl font-bold serif">{selectedRoom.capacity} Elite Guests</p>
                </div>
                <div>
                  <p className="text-stone-500 text-[9px] uppercase tracking-widest font-black mb-2">Pricing Standard</p>
                  <p className="text-[#C5A059] text-xl font-bold serif">LKR {selectedRoom.price.toLocaleString()} <span className="text-[10px] text-stone-600">/ Night</span></p>
                </div>
              </div>

              <div className="space-y-8">
                <h4 className="text-white uppercase tracking-[0.4em] font-black text-[10px]">Included Amenities</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
                  {selectedRoom.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-4 group">
                      <div className="w-2 h-2 rounded-full bg-[#C5A059] shadow-lg shadow-[#C5A059]/20 group-hover:scale-125 transition-transform"></div>
                      <span className="text-stone-400 text-[11px] font-black uppercase tracking-widest group-hover:text-white transition-colors">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <Link 
                  to="/booking"
                  onClick={() => setSelectedRoom(null)}
                  className="glow-button w-full bg-[#C5A059] text-black py-6 rounded-full font-black uppercase tracking-[0.4em] text-[10px] shadow-2xl transition-all"
                >
                  Request Reservation
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};