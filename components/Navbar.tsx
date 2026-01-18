
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Hotel } from 'lucide-react';
import { useSite } from '../context/SiteContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { settings } = useSite();

  // Handle scroll effect for navbar styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fix for mobile menu: Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'BEVARY GUEST', path: '/' },
    { name: 'THE VILLA', path: '/villa' },
    { name: 'DINING', path: '/menu' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${
      scrolled ? 'bg-black/80 backdrop-blur-xl py-4 shadow-2xl' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#C5A059] rounded flex items-center justify-center shadow-lg shadow-[#C5A059]/20 transition-transform group-hover:scale-110">
            <Hotel className="text-black w-6 h-6" strokeWidth={1.5} />
          </div>
          <span className="text-xl font-bold tracking-[0.2em] serif uppercase text-white">
            {settings.name.toUpperCase()}
          </span>
        </Link>

        {/* Center: Nav Links */}
        <div className="hidden lg:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[11px] font-bold tracking-[0.2em] transition-all duration-300 relative group ${
                location.pathname === link.path ? 'text-white' : 'text-stone-400 hover:text-white'
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#C5A059] animate-in fade-in slide-in-from-left duration-700"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Right: Reservations Button */}
        <div className="hidden lg:block">
          <Link
            to="/booking"
            className="glow-button bg-[#C5A059] text-black px-10 py-3 rounded-full text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500 shadow-xl"
          >
            RESERVATIONS
          </Link>
        </div>

        {/* Mobile Menu Toggle - This is the primary closing icon when open */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white p-2 relative z-[60] focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 w-full h-screen bg-[#0D0D0D] z-[55] flex flex-col items-center justify-center space-y-10 animate-in fade-in zoom-in duration-500">
          {/* Redundant close button removed from here to ensure only one icon exists */}
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-bold serif tracking-widest text-white hover:text-[#C5A059] transition-all"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/booking"
            onClick={() => setIsOpen(false)}
            className="glow-button bg-[#C5A059] text-black px-12 py-5 rounded-full font-black uppercase tracking-widest mt-6"
          >
            BOOK NOW
          </Link>
        </div>
      )}
    </nav>
  );
};
