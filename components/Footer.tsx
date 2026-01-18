
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Hotel } from 'lucide-react';
import { useSite } from '../context/SiteContext';

export const Footer: React.FC = () => {
  const { settings } = useSite();

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'The Villa', path: '/villa' },
    { name: 'Gourmet Dining', path: '/menu' },
    { name: 'Visual Gallery', path: '/gallery' },
    { name: 'Contact Concierge', path: '/contact' },
  ];

  return (
    <footer className="bg-[#0D0D0D] text-white pt-40 pb-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          <div className="space-y-10">
            <Link to="/" className="flex items-center gap-4">
               <div className="w-12 h-12 bg-[#C5A059] rounded-xl flex items-center justify-center">
                 <Hotel className="text-black w-7 h-7" />
               </div>
              <span className="text-3xl font-bold tracking-widest serif uppercase text-white">
                {settings.name}
              </span>
            </Link>
            <p className="text-stone-500 font-light leading-relaxed text-lg">
              A masterclass in modern luxury, honoring the timeless traditions of the ancient capital.
            </p>
            <div className="flex gap-8">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-[#C5A059] transition-all"><Facebook size={24} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-[#C5A059] transition-all"><Instagram size={24} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-[#C5A059] transition-all"><Twitter size={24} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-12 text-[#C5A059]">The Collection</h4>
            <ul className="space-y-6">
              {footerLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-stone-500 hover:text-white transition-all text-sm uppercase tracking-widest font-bold">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-12 text-[#C5A059]">Experiences</h4>
            <ul className="space-y-6">
              {['Imperial Suite', 'Grand Pavilion', 'Private Banquets', 'Ancient City Tours', 'Wellness Retreat'].map(link => (
                <li key={link}>
                  <a href="#" className="text-stone-500 hover:text-white transition-all text-sm font-light">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-12 text-[#C5A059]">Global Reach</h4>
            <div className="space-y-8 text-stone-500 font-light">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-[#C5A059] flex-shrink-0" />
                <span className="text-sm">{settings.address}</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={20} className="text-[#C5A059]" />
                <span className="text-sm">{settings.phone}</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={20} className="text-[#C5A059]" />
                <span className="text-sm">{settings.email}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[1px] bg-white/5 w-full mb-16"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10 text-[10px] text-stone-600 uppercase tracking-[0.3em] font-black">
          <p>© {new Date().getFullYear()} {settings.name} Hospitality Group. Pure Opulence.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-[#C5A059] transition-all">Privacy Ethos</a>
            <a href="#" className="hover:text-[#C5A059] transition-all">Terms of Stay</a>
            <a href="#" className="hover:text-[#C5A059] transition-all">Inquiries</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
