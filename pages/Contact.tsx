
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
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
        <div className="grid lg:grid-cols-2 gap-32">
          <div className="space-y-20">
            <div>
              <h4 className="text-[#C5A059] uppercase tracking-[0.4em] font-black text-xs mb-8">Personalized Service</h4>
              <h1 className="text-6xl md:text-8xl font-bold mb-10 serif text-white italic leading-[0.85]">Let us <br /> curate your <br /> journey.</h1>
              <p className="text-stone-400 text-xl font-light leading-relaxed max-w-md">
                Our global concierge team is available around the clock to ensure your stay at Bevary Guest is nothing short of perfection.
              </p>
            </div>

            <div className="space-y-12">
              <div className="flex gap-8 group">
                <div className="w-16 h-16 rounded-2xl bg-[#141414] border border-white/5 flex items-center justify-center text-[#C5A059] transition-all group-hover:border-[#C5A059]/30">
                  <MapPin size={28} />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-2 uppercase tracking-widest text-sm">Legacy Location</h5>
                  <p className="text-stone-500 font-light">{settings.address}</p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <div className="w-16 h-16 rounded-2xl bg-[#141414] border border-white/5 flex items-center justify-center text-[#C5A059] transition-all group-hover:border-[#C5A059]/30">
                  <Phone size={28} />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-2 uppercase tracking-widest text-sm">Elite Hotline</h5>
                  <p className="text-stone-500 font-light">{settings.phone}</p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <div className="w-16 h-16 rounded-2xl bg-[#141414] border border-white/5 flex items-center justify-center text-[#C5A059] transition-all group-hover:border-[#C5A059]/30">
                  <Mail size={28} />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-2 uppercase tracking-widest text-sm">Concierge Email</h5>
                  <p className="text-stone-500 font-light">{settings.email}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#141414] p-12 md:p-20 rounded-[4rem] border border-white/5 luxury-shadow">
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
                <div className="space-y-8">
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase font-black text-stone-500 tracking-widest">Client Name</label>
                    <input required type="text" className="w-full bg-[#0D0D0D] border border-white/10 rounded-2xl p-6 text-white outline-none focus:border-[#C5A059] transition-all" placeholder="Enter full name" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase font-black text-stone-500 tracking-widest">Electronic Mail</label>
                    <input required type="email" className="w-full bg-[#0D0D0D] border border-white/10 rounded-2xl p-6 text-white outline-none focus:border-[#C5A059] transition-all" placeholder="name@domain.com" />
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
                    <textarea required rows={5} className="w-full bg-[#0D0D0D] border border-white/10 rounded-2xl p-6 text-white outline-none focus:border-[#C5A059] transition-all" placeholder="How may we serve you?"></textarea>
                  </div>
                </div>
                <button className="w-full bg-[#C5A059] text-black py-6 rounded-full font-black uppercase tracking-[0.3em] hover:bg-white transition-all shadow-2xl shadow-[#C5A059]/10 flex items-center justify-center gap-4 group">
                  <MessageSquare size={20} /> Transmit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-40 rounded-[4rem] overflow-hidden shadow-2xl h-[600px] border border-white/10 grayscale hover:grayscale-0 transition-all duration-1000 luxury-shadow">
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
