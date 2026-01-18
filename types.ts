
export enum BookingStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  CANCELLED = 'CANCELLED'
}

export interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
  image: string;
  amenities: string[];
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Biriyani' | 'Rice' | 'Kottu' | 'Noodles / Pasta' | 'Salads' | 'Soup' | 'Special Dishes' | 'Other Favourite Dishes' | 'Desserts' | 'Starter' | 'Main Course';
  image: string;
}

export interface Testimonial {
  id: string;
  author: string;
  content: string;
  rating: number;
  date: string;
}

export interface Booking {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  roomId: string;
  status: BookingStatus;
  totalPrice: number;
  createdAt: string;
}

export interface SiteSettings {
  name: string;
  address: string;
  phone: string;
  email: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}
