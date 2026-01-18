import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Room, MenuItem, Testimonial, Booking, SiteSettings, BookingStatus } from '../types';

interface SiteContextType {
  settings: SiteSettings;
  rooms: Room[];
  menu: MenuItem[];
  testimonials: Testimonial[];
  bookings: Booking[];
  isAdmin: boolean;
  login: () => void;
  logout: () => void;
  updateSettings: (newSettings: SiteSettings) => void;
  addBooking: (booking: Omit<Booking, 'id' | 'createdAt' | 'status'>) => void;
  updateBookingStatus: (id: string, status: BookingStatus) => void;
}

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export const SiteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  
  const [settings, setSettings] = useState<SiteSettings>({
    name: 'Bevary Guest',
    address: '277 Godage Mawatha, 50000 Anuradhapura, Sri Lanka',
    phone: '+94 70 570 5060',
    email: 'concierge@bevaryguest.com',
    colors: {
      primary: '#C5A059', // Gold
      secondary: '#0D0D0D', // Obsidian
      accent: '#F5F5F5' // Pearl White
    }
  });

  const [rooms, setRooms] = useState<Room[]>([
    {
      id: '1',
      name: 'Imperial Suite',
      description: 'The pinnacle of luxury with panoramic city views and curated antique furnishings.',
      price: 25000,
      capacity: 2,
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1200',
      amenities: ['Private Butler', 'A/C', 'Smart Concierge', 'Artisan Mini Bar', 'Rain Shower']
    },
    {
      id: '2',
      name: 'Grand Family Pavilion',
      description: 'Expansive living spaces designed for elite families seeking tranquility and privacy.',
      price: 38000,
      capacity: 4,
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200',
      amenities: ['Garden View', 'Home Cinema', 'WiFi 6', 'Double En-Suite']
    }
  ]);

  const [menu, setMenu] = useState<MenuItem[]>([
    // Biriyani
    {
      id: 'b1',
      name: 'Chicken Biriyani',
      description: 'A traditional biryani consists of fluffy basmati rice layered over tender & succulent pieces of meat, accompanied with the mesmerizing aromas of spices, herbs & caramelized onions.',
      price: 5200,
      category: 'Biriyani',
      image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'b2',
      name: 'Vegetable Biriyani',
      description: 'Vegetable Biryani is an aromatic rice dish made with basmati rice, mix veggies, herbs & biryani spices.',
      price: 3800,
      category: 'Biriyani',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'b3',
      name: 'Prawns Biriyani',
      description: 'Fragrant basmati rice layered with spiced, succulent prawns, slow-cooked to rich perfection.',
      price: 4600,
      category: 'Biriyani',
      image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=800'
    },
    // Rice
    {
      id: 'r1',
      name: 'Signature Mixed Fried Rice',
      description: 'Wok-fired Basmati with ocean prawns, tender chicken, farm-fresh eggs, and crisp garden vegetables.',
      price: 3400,
      category: 'Rice',
      image: 'https://images.unsplash.com/photo-1512058560366-cd242d4536ee?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'r2',
      name: 'Signature Chicken Fried Rice',
      description: 'Aromatic rice served with tender, seasoned chicken, gently cooked for deep flavor.',
      price: 2800,
      category: 'Rice',
      image: 'https://images.unsplash.com/photo-1546539782-6fc531453083?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'r3',
      name: 'Seafood Rice',
      description: 'Flavorful rice tossed with fresh seafood, herbs, and subtle coastal spices.',
      price: 3900,
      category: 'Rice',
      image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'r4',
      name: 'Nasi Goreng Rice',
      description: 'Indonesian-style fried rice with bold spices, vegetables, and smoky umami notes.',
      price: 3600,
      category: 'Rice',
      image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=800'
    },
    // Kottu
    {
      id: 'k1',
      name: 'Sea Food Kottu',
      description: 'Finely shredded paratha tossed with fresh calamari, prawns, and a decadent triple-cheese infusion.',
      price: 3200,
      category: 'Kottu',
      image: 'https://images.unsplash.com/photo-1626777552726-4a6b547b4e53?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'k2',
      name: 'Mandodari Special Chicken Kottu',
      description: 'Our signature kottu with spicy shredded chicken, ginger-garlic aromatics, and toasted curry leaves.',
      price: 2600,
      category: 'Kottu',
      image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce7c?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'k3',
      name: 'Cheese Kottu',
      description: 'Classic kottu roti blended with melted cheese, vegetables, and savory spices.',
      price: 2800,
      category: 'Kottu',
      image: 'https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'k4',
      name: 'Mix Kottu',
      description: 'Finely chopped roti stir-fried with mixed meats, vegetables, eggs, and spices.',
      price: 3100,
      category: 'Kottu',
      image: 'https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&q=80&w=800'
    },
    // Noodles / Pasta
    {
      id: 'np1',
      name: 'Chef’s Special Stir-Fry Noodles',
      description: 'Wok-fried noodles infused with bold sauces, fresh vegetables, and smoky aromas.',
      price: 4800,
      category: 'Noodles / Pasta',
      image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'np2',
      name: 'Chef’s Signature Pasta',
      description: 'Perfectly cooked pasta tossed in a rich, flavorful sauce with chef-selected herbs.',
      price: 3400,
      category: 'Noodles / Pasta',
      image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=800'
    },
    // Salads
    {
      id: 's1',
      name: 'Heirloom Tomato & Buffalo Curd',
      description: 'Organic heritage tomatoes, local buffalo curd, micro-basil, and a balsamic gold reduction.',
      price: 2600,
      category: 'Salads',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 's2',
      name: 'Golden Quinoa & Roast Pumpkin',
      description: 'Ancient grains with honey-roasted pumpkin, pomegranate arils, and a citrus-honey glaze.',
      price: 2400,
      category: 'Salads',
      image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&q=80&w=800'
    },
    // Soup
    {
      id: 'so1',
      name: 'Vegetable Soup',
      description: 'Fresh garden vegetables gently simmered in a light, flavorful herb broth.',
      price: 2800,
      category: 'Soup',
      image: 'https://images.unsplash.com/photo-1547592110-80344b106e2e?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'so2',
      name: 'Chicken Soup',
      description: 'Slow-simmered chicken broth with tender meat, herbs, and comforting warmth.',
      price: 1800,
      category: 'Soup',
      image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&q=80&w=800'
    },
    // Special Dishes
    {
      id: 'sd1',
      name: 'Mix Grill',
      description: 'A hearty assortment of grilled meats, marinated spices, and smoky charred flavors.',
      price: 9500,
      category: 'Special Dishes',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'sd2',
      name: 'Sea Food Grill',
      description: 'Fresh seafood expertly grilled with herbs, spices, and a smoky coastal finish.',
      price: 15500,
      category: 'Special Dishes',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800'
    },
    // Other Favourite Dishes
    {
      id: 'fd1',
      name: 'Cuttlefish Dish',
      description: 'Tender cuttlefish simmered with spices for a perfectly balanced, savory taste.',
      price: 3200,
      category: 'Other Favourite Dishes',
      image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'fd2',
      name: 'Prawns Dish',
      description: 'Juicy prawns cooked in aromatic spices, finished with rich, savory flavors.',
      price: 3600,
      category: 'Other Favourite Dishes',
      image: 'https://images.unsplash.com/photo-1565689157206-0fddef7589a2?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'fd3',
      name: 'Vegetable Dishes',
      description: 'Seasonal vegetables cooked with herbs and spices for wholesome, flavorful meals.',
      price: 2400,
      category: 'Other Favourite Dishes',
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=800'
    },
    // Desserts
    {
      id: 'd1',
      name: 'Watalappam',
      description: 'A traditional Sri Lankan jaggery pudding infused with warm spices and coconut cream.',
      price: 1800,
      category: 'Desserts',
      image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'd2',
      name: 'Ice Cream',
      description: 'A selection of smooth and creamy handcrafted flavors for a refreshing treat.',
      price: 2400,
      category: 'Desserts',
      image: 'https://images.unsplash.com/photo-1514849302-984523450cf4?auto=format&fit=crop&q=80&w=800'
    }
  ]);

  const [testimonials] = useState<Testimonial[]>([
    {
      id: 't1',
      author: 'Alexander V.',
      content: 'Bevary Guest is a masterclass in luxury. Every detail, from the thread count to the personalized service, was impeccable.',
      rating: 5,
      date: '2024-05-10'
    },
    {
      id: 't2',
      author: 'Sophia Rossi',
      content: 'The dining experience was world-class. The Saffron Risotto is a must-try. A true oasis in Anuradhapura.',
      rating: 5,
      date: '2024-06-02'
    },
    {
      id: 't3',
      author: 'Marcus Chen',
      content: 'The best stay I’ve had in Sri Lanka. The team anticipates your every need. Highly recommended for elite travelers.',
      rating: 5,
      date: '2024-06-15'
    },
    {
      id: 't4',
      author: 'Elena Gilbert',
      content: 'Pure elegance. The Mandodari Villa is stunning and the architecture is a blend of modern and ancient history.',
      rating: 5,
      date: '2024-07-01'
    }
  ]);

  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const savedBookings = localStorage.getItem('bevar_bookings');
    if (savedBookings) setBookings(JSON.parse(savedBookings));
  }, []);

  useEffect(() => {
    localStorage.setItem('bevar_bookings', JSON.stringify(bookings));
  }, [bookings]);

  const login = useCallback(() => setIsAdmin(true), []);
  const logout = useCallback(() => setIsAdmin(false), []);
  
  const updateSettings = (newSettings: SiteSettings) => setSettings(newSettings);

  const addBooking = (bookingData: Omit<Booking, 'id' | 'createdAt' | 'status'>) => {
    const newBooking: Booking = {
      ...bookingData,
      id: `BG${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
      createdAt: new Date().toISOString(),
      status: BookingStatus.PENDING
    };
    setBookings(prev => [newBooking, ...prev]);
  };

  const updateBookingStatus = (id: string, status: BookingStatus) => {
    setBookings(prev => prev.map(b => b.id === id ? { ...b, status } : b));
  };

  return (
    <SiteContext.Provider value={{ 
      settings, rooms, menu, testimonials, bookings, isAdmin, 
      login, logout, updateSettings, addBooking, updateBookingStatus 
    }}>
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = () => {
  const context = useContext(SiteContext);
  if (!context) throw new Error('useSite must be used within a SiteProvider');
  return context;
};
