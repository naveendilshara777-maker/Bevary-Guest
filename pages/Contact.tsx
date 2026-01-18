import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Hotel, Building2 } from 'lucide-react';
import { useSite } from '../context/SiteContext';

export const Contact: React.FC = () => {
  const { settings } = useSite();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div className="pt-48 pb-32 bg-[#0D0D0D] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 reveal">
          <h4 className="text-[#C5A059] uppercase tracking-[0.4em] font-black text-xs mb-8">Personalized Service</h4>
          <h1 className="text-6xl md:text-8xl font-bold mb-10 serif text-white italic leading-tight">Connect with <span className="text-[#C5A059]">Excellence.</span></h1>
          <p className="text-stone-400 text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Our global concierge team is available around the clock to ensure your stay across our estates is nothing short of perfection.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-20 mb-32">
          {/* Property Details Columns */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            {/* Column 1: Bevary Guest */}
            <div className="bg-[#111] p-10 md:p-14 rounded-[3rem] border border-white/5 reveal hover:border-[#C5A059]/20 transition-all duration-700 luxury-shadow group">
              <div className="w-16 h-16 rounded-2xl bg-[#C5A059]/10 flex items-center justify-center text-[#C5A059] mb-10 group-hover:scale-110 transition-transform duration-500">
                <Building2 size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 serif text-white">Bevary Guest</h2>
              
              <div className="space-y-10">
                <div className="flex gap-6">
                  <MapPin className="text-[#C5A059] shrink-0" size={20} />
                  <div>
                    <h5 className="font-bold text-white mb-2 uppercase tracking-widest text-[10px]">Legacy Address</h5>
                    <p className="text-stone-400 font-light text-sm leading-relaxed">277 Godage Mawatha, 50000 Anuradhapura, Sri Lanka</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <Phone className="text-[#C5A059] shrink-0" size={20} />
                  <div>
                    <h5 className="font-bold text-white mb-2 uppercase tracking-widest text-[10px]">Elite Hotlines</h5>
                    <div className="space-y-1">
                      <p className="text-stone-400 font-light text-sm">025 222 3406</p>
                      <p className="text-stone-400 font-light text-sm">070 222 3406</p>
                      <p className="text-stone-400 font-light text-sm">077 484 7406</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6">
                  <Mail className="text-[#C5A059] shrink-0" size={20} />
                  <div>
                    <h5 className="font-bold text-white mb-2 uppercase tracking-widest text-[10px]">Direct Inquiry</h5>
                    <p className="text-stone-400 font-light text-sm underline underline-offset-4 decoration-[#C5A059]/30 hover:text-white transition-colors">bevaryguest@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Mandodari Villa */}
            <div className="bg-[#111] p-10 md:p-14 rounded-[3rem] border border-white/5 reveal stagger-1 hover:border-[#C5A059]/20 transition-all duration-700 luxury-shadow group">
              <div className="w-16 h-16 rounded-2xl bg-[#C5A059]/10 flex items-center justify-center text-[#C5A059] mb-10 group-hover:scale-110 transition-transform duration-500">
                <Hotel size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 serif text-white">Mandodari Villa</h2>
              
              <div className="space-y-10">
                <div className="flex gap-6">
                  <MapPin className="text-[#C5A059] shrink-0" size={20} />
                  <div>
                    <h5 className="font-bold text-white mb-2 uppercase tracking-widest text-[10px]">Sanctuary Address</h5>
                    <p className="text-stone-400 font-light text-sm leading-relaxed">395/12 A Mudhitha Mawatha, Anuradhapura 50000, Sri Lanka</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <Phone className="text-[#C5A059] shrink-0" size={20} />
                  <div>
                    <h5 className="font-bold text-white mb-2 uppercase tracking-widest text-[10px]">Concierge Lines</h5>
                    <div className="space-y-1">
                      <p className="text-stone-400 font-light text-sm">070 570 5060</p>
                      <p className="text-stone-400 font-light text-sm">071 754 9380</p>
                      <p className="text-stone-400 font-light text-sm">071 322 3525</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6">
                  <Mail className="text-[#C5A059] shrink-0" size={20} />
                  <div>
                    <h5 className="font-bold text-white mb-2 uppercase tracking-widest text-[10px]">Private Email</h5>
                    <p className="text-stone-400 font-light text-sm underline underline-offset-4 decoration-[#C5A059]/30 hover:text-white transition-colors">bevaryguest@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-1 max-w-4xl mx-auto">
          <div className="bg-[#141414] p-12 md:p-20 rounded-[4rem] border border-white/5 luxury-shadow reveal">
            {sent ? (
              <div className="text-center py-20 animate-in zoom-in fade-in duration-500">
                 <div className="w-24 h-24 bg-[#C5A059]/20 text-[#C5A059] rounded-full flex items-center justify-center mx-auto mb-10">
                    <Send size={40} />
                 </div>
                 <h3 className="text-4xl font-bold mb-4 serif text-white">Transmission Sent</h3>
                 <p className="text-stone-500 text-lg font-light">A concierge specialist will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="text-center mb-12">
                   <h3 className="text-3xl font-bold serif text-white">Direct Transmission</h3>
                   <p className="text-stone-500 text-sm mt-2">How may we serve you today?</p>
                </div>
                <div className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <label className="text-[10px] uppercase font-black text-stone-500 tracking-widest">Client Name</label>
                      <input required type="text" className="w-full bg-[#0D0D0D] border border-white/10 rounded-2xl p-6 text-white outline-none focus:border-[#C5A059] transition-all" placeholder="Enter full name" />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] uppercase font-black text-stone-500 tracking-widest">Electronic Mail</label>
                      <input required type="email" className="w-full bg-[#0D0D0D] border border-white/10 rounded-2xl p-6 text-white outline-none focus:border-[#C5A059] transition-all" placeholder="name@domain.com" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase font-black text-stone-500 tracking-widest">Inquiry Type</label>
                    <select className="w-full bg-[#0D0D0D] border border-white/10 rounded-2xl p-6 text-white outline-none focus:border-[#C5A059] appearance-none">
                      <option className="bg-[#141414]">Bespoke Stay Inquiry</option>
                      <option className="bg-[#141414]">Culinary Event Planning</option>
                      <option className="bg-[#141414]">Press & Media Inquiries</option>
                    </select>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase font-black text-stone-500 tracking-widest">The Message</label>
                    <textarea required rows={5} className="w-full bg-[#0D0D0D] border border-white/10 rounded-2xl p-6 text-white outline-none focus:border-[#C5A059] transition-all" placeholder="Tell us about your requirements..."></textarea>
                  </div>
                </div>
                <button className="w-full bg-[#C5A059] text-black py-6 rounded-full font-black uppercase tracking-[0.3em] hover:bg-white transition-all shadow-2xl shadow-[#C5A059]/10 flex items-center justify-center gap-4 group">
                  <MessageSquare size={20} /> Transmit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-40 rounded-[4rem] overflow-hidden shadow-2xl h-[600px] border border-white/10 grayscale hover:grayscale-0 transition-all duration-1000 luxury-shadow reveal">
           <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15783.504953715104!2d80.4079836!3d8.3155702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcf6f8d348a487%3A0xf63969968a356391!2sAnuradhapura!5e0!3m2!1sen!2slk!4v1710168434315!5m2!1sen!2slk" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};