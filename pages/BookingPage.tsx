
import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
// Added Star to the imports from lucide-react to fix the errors on lines 153, 159, and 165
import { Calendar, Users, Hotel, ChevronRight, CheckCircle, Star } from 'lucide-react';

export const BookingPage: React.FC = () => {
  const { rooms, addBooking } = useSite();
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    roomId: rooms[0]?.id || ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedRoom = rooms.find(r => r.id === formData.roomId);
    addBooking({
      ...formData,
      totalPrice: (selectedRoom?.price || 0) * 1 
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-48 flex items-center justify-center px-6 bg-[#0D0D0D]">
        <div className="max-w-xl w-full bg-[#141414] p-16 rounded-[3rem] border border-white/5 text-center luxury-shadow">
          <div className="w-24 h-24 bg-[#C5A059]/20 text-[#C5A059] rounded-full flex items-center justify-center mx-auto mb-10">
            <CheckCircle className="w-12 h-12" />
          </div>
          <h2 className="text-4xl font-bold mb-6 serif text-white">Reservation Request Received</h2>
          <p className="text-stone-400 mb-12 font-light leading-relaxed text-lg">
            A member of our concierge team will review your request and contact you shortly at <span className="text-white">{formData.customerEmail}</span> to finalize the details.
          </p>
          <button 
            onClick={() => window.location.hash = '/'}
            className="w-full bg-[#C5A059] text-black py-5 rounded-full font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl"
          >
            Return to Gallery
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-48 pb-32 px-6 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 serif text-white leading-tight">Secure Your Stay</h1>
          <p className="text-stone-400 font-light text-xl tracking-wide uppercase tracking-[0.3em] text-xs font-bold">Bevary Guest Anuradhapura</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-3 bg-[#141414] p-10 md:p-16 rounded-[3rem] border border-white/5 luxury-shadow">
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C5A059] block flex items-center gap-2">
                    <Calendar size={12} /> Check-In
                  </label>
                  <input 
                    type="date" required 
                    className="w-full bg-[#0D0D0D] border border-white/10 rounded-2xl p-5 text-white focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/20 transition-all outline-none"
                    onChange={(e) => setFormData({...formData, checkIn: e.target.value})}
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C5A059] block flex items-center gap-2">
                    <Calendar size={12} /> Check-Out
                  </label>
                  <input 
                    type="date" required 
                    className="w-full bg-[#0D0D0D] border border-white/10 rounded-2xl p-5 text-white focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/20 transition-all outline-none"
                    onChange={(e) => setFormData({...formData, checkOut: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C5A059] block flex items-center gap-2">
                    <Users size={12} /> Guests
                  </label>
                  <select 
                    className="w-full bg-[#0D0D0D] border border-white/10 rounded-2xl p-5 text-white focus:border-[#C5A059] outline-none"
                    onChange={(e) => setFormData({...formData, guests: parseInt(e.target.value)})}
                  >
                    {[1,2,3,4,5,6].map(n => <option key={n} value={n} className="bg-[#141414]">{n} Guests</option>)}
                  </select>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C5A059] block flex items-center gap-2">
                    <Hotel size={12} /> Selection
                  </label>
                  <select 
                    className="w-full bg-[#0D0D0D] border border-white/10 rounded-2xl p-5 text-white focus:border-[#C5A059] outline-none"
                    onChange={(e) => setFormData({...formData, roomId: e.target.value})}
                  >
                    {rooms.map(room => (
                      <option key={room.id} value={room.id} className="bg-[#141414]">{room.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="h-[1px] bg-white/5 my-10"></div>

              <div className="space-y-10">
                <h3 className="font-bold text-2xl serif text-white italic">Personal Information</h3>
                <div className="space-y-6">
                  <input 
                    type="text" placeholder="Full Legal Name" required 
                    className="w-full bg-[#0D0D0D] border border-white/10 rounded-2xl p-5 text-white focus:border-[#C5A059] outline-none"
                    onChange={(e) => setFormData({...formData, customerName: e.target.value})}
                  />
                  <div className="grid md:grid-cols-2 gap-6">
                    <input 
                      type="email" placeholder="Email Address" required 
                      className="w-full bg-[#0D0D0D] border border-white/10 rounded-2xl p-5 text-white focus:border-[#C5A059] outline-none"
                      onChange={(e) => setFormData({...formData, customerEmail: e.target.value})}
                    />
                    <input 
                      type="tel" placeholder="Phone Number" required 
                      className="w-full bg-[#0D0D0D] border border-white/10 rounded-2xl p-5 text-white focus:border-[#C5A059] outline-none"
                      onChange={(e) => setFormData({...formData, customerPhone: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#C5A059] text-black py-6 rounded-full font-black uppercase tracking-[0.3em] hover:bg-white transition-all flex items-center justify-center gap-3 group shadow-2xl shadow-[#C5A059]/10"
              >
                Inquire for Availability <ChevronRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>

          <div className="lg:col-span-2 space-y-10">
            <div className="bg-gradient-to-tr from-[#1A1A1A] to-[#252525] p-12 rounded-[3rem] border border-white/5 luxury-shadow">
              <h3 className="text-3xl font-bold mb-8 serif text-white">Privileged Access</h3>
              <ul className="space-y-6 text-stone-400">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#C5A059]/20 flex items-center justify-center shrink-0">
                    <Star size={12} className="text-[#C5A059]" fill="currentColor" />
                  </div>
                  <span className="text-sm font-light leading-relaxed">Early Access to Seasonal Culinary Menus.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#C5A059]/20 flex items-center justify-center shrink-0">
                    <Star size={12} className="text-[#C5A059]" fill="currentColor" />
                  </div>
                  <span className="text-sm font-light leading-relaxed">Priority Private Concierge Service.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#C5A059]/20 flex items-center justify-center shrink-0">
                    <Star size={12} className="text-[#C5A059]" fill="currentColor" />
                  </div>
                  <span className="text-sm font-light leading-relaxed">Complimentary Hand-Crafted Welcome Amenities.</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#141414] p-12 rounded-[3rem] border border-white/5">
              <h3 className="font-bold mb-4 serif text-xl text-white">Direct Assistance</h3>
              <p className="text-stone-500 text-sm mb-10 font-light italic">Our global reservation team is standing by to curate your experience.</p>
              <div className="space-y-6">
                <a href="tel:+94705705060" className="flex items-center gap-4 text-[#C5A059] font-bold text-lg hover:underline underline-offset-8">
                  +94 70 570 5060
                </a>
                <p className="text-stone-500 text-xs uppercase tracking-widest font-black">Open 24/7 Globally</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
