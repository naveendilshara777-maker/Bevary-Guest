
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { SiteProvider, useSite } from './context/SiteContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Villa } from './pages/Villa';
import { Menu } from './pages/Menu';
import { BookingPage } from './pages/BookingPage';
import { Gallery } from './pages/Gallery';
import { AdminDashboard } from './admin/Dashboard';
import { Contact } from './pages/Contact';

const AppContent: React.FC = () => {
  const { settings } = useSite();
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith('/admin');

  // Unified Intersection Observer Logic
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const initObservers = () => {
      document.querySelectorAll('.reveal:not(.active)').forEach(el => observer.observe(el));
    };

    // Run initial scan
    initObservers();

    // Re-scan periodically for dynamic content or slow renders
    const intervalId = setInterval(initObservers, 1000);

    return () => {
      clearInterval(intervalId);
      observer.disconnect();
    };
  }, [location.pathname]); // Re-init on path change

  return (
    <div className="min-h-screen text-[#F5F5F5] flex flex-col selection:bg-[#C5A059] selection:text-black relative">
      {/* Immersive Global Background Layers */}
      <div className="luxury-bg-layer"></div>
      <div className="luxury-grain"></div>

      {!isAdminPath && <Navbar />}
      <main className="flex-grow relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/villa" element={<Villa />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
        </Routes>
      </main>
      {!isAdminPath && <Footer />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <SiteProvider>
      <Router>
        <AppContent />
      </Router>
    </SiteProvider>
  );
};

export default App;
