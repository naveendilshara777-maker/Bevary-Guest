import React, { useState } from 'react';
import { 
  LayoutDashboard, CalendarRange, UtensilsCrossed, Settings, 
  Users, LogOut, Check, X, BookOpen, Image as ImageIcon,
  Hotel
} from 'lucide-react';
import { useSite } from '../context/SiteContext';
import { BookingStatus } from '../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const AdminDashboard: React.FC = () => {
  const { isAdmin, login, logout, bookings, updateBookingStatus, menu, rooms, settings, updateSettings } = useSite();
  const [activeTab, setActiveTab] = useState('overview');
  const [password, setPassword] = useState('');
  const [localSettings, setLocalSettings] = useState(settings);

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-stone-950 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-stone-900 border border-stone-800 p-10 rounded-3xl shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white serif mb-2">Bevar y Guest</h1>
            <p className="text-stone-500 uppercase tracking-widest text-xs font-bold">Admin Portal</p>
          </div>
          <div className="space-y-6">
            <input 
              type="password" 
              placeholder="Admin Access Key" 
              className="w-full bg-stone-800 border-none text-white rounded-xl p-4 focus:ring-2 focus:ring-amber-800/50"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && login()}
            />
            <button 
              onClick={login}
              className="w-full bg-amber-800 text-white py-4 rounded-xl font-bold hover:bg-amber-700 transition-all uppercase tracking-widest"
            >
              Secure Login
            </button>
            <p className="text-center text-xs text-stone-600 mt-8">Authorized personnel only.</p>
          </div>
        </div>
      </div>
    );
  }

  const getStatusBadge = (status: BookingStatus) => {
    switch (status) {
      case BookingStatus.CONFIRMED:
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case BookingStatus.PENDING:
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case BookingStatus.CANCELLED:
        return 'bg-rose-100 text-rose-800 border-rose-200';
      default:
        return 'bg-stone-100 text-stone-800 border-stone-200';
    }
  };

  const statsData = [
    { name: 'Mon', value: 4 },
    { name: 'Tue', value: 7 },
    { name: 'Wed', value: 3 },
    { name: 'Thu', value: 9 },
    { name: 'Fri', value: 12 },
    { name: 'Sat', value: 15 },
    { name: 'Sun', value: 10 },
  ];

  const handleSaveSettings = () => {
    updateSettings(localSettings);
    alert('Global settings updated successfully.');
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] flex text-stone-900">
      <aside className="w-72 bg-stone-900 text-stone-400 p-6 flex flex-col fixed h-full z-40">
        <div className="mb-12">
           <h2 className="text-2xl font-bold text-white serif mb-1 tracking-tight">Admin Console</h2>
           <p className="text-[10px] uppercase tracking-widest font-black text-amber-500/80">Bevar y Guest Hospitality</p>
        </div>
        
        <nav className="flex-grow space-y-1">
          {[
            { id: 'overview', icon: <LayoutDashboard size={20} />, label: 'Overview' },
            { id: 'bookings', icon: <CalendarRange size={20} />, label: 'Bookings' },
            { id: 'cms', icon: <BookOpen size={20} />, label: 'CMS Manager' },
            { id: 'media', icon: <ImageIcon size={20} />, label: 'Media Library' },
            { id: 'settings', icon: <Settings size={20} />, label: 'Site Settings' },
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                activeTab === item.id ? 'bg-amber-800 text-white shadow-lg' : 'hover:bg-white/5 hover:text-white'
              }`}
            >
              {item.icon} {item.label}
            </button>
          ))}
        </nav>

        <button 
          onClick={logout}
          className="mt-auto flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-medium text-red-400 hover:bg-red-400/10 transition-all"
        >
          <LogOut size={20} /> Logout
        </button>
      </aside>

      <main className="flex-grow ml-72 p-10">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-stone-900 serif capitalize">{activeTab}</h1>
            <p className="text-stone-500 text-sm">Managing Bevar y Guest property assets and flows.</p>
          </div>
          <div className="flex gap-4">
             <div className="bg-white px-6 py-2 rounded-2xl shadow-sm border border-stone-100 flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
               <span className="text-xs font-bold uppercase tracking-widest text-stone-600">System Live</span>
             </div>
          </div>
        </header>

        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100">
                <p className="text-stone-400 text-xs font-bold uppercase mb-2 tracking-widest">Total Bookings</p>
                <p className="text-4xl font-bold serif text-stone-900">{bookings.length}</p>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100">
                <p className="text-stone-400 text-xs font-bold uppercase mb-2 tracking-widest">Pending Req</p>
                <p className="text-4xl font-bold serif text-stone-900">{bookings.filter(b => b.status === BookingStatus.PENDING).length}</p>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100">
                <p className="text-stone-400 text-xs font-bold uppercase mb-2 tracking-widest">Active Rooms</p>
                <p className="text-4xl font-bold serif text-stone-900">{rooms.length}</p>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100">
                <p className="text-stone-400 text-xs font-bold uppercase mb-2 tracking-widest">Estimated Rev</p>
                <p className="text-4xl font-bold serif text-amber-800">LKR 450K</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
                <h3 className="font-bold text-stone-800 mb-6">Booking Activity (Last 7 Days)</h3>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={statsData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} />
                      <YAxis axisLine={false} tickLine={false} />
                      <Tooltip 
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} 
                      />
                      <Bar dataKey="value" fill="#8B4513" radius={[4, 4, 0, 0]} barSize={40} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
                <h3 className="font-bold text-stone-800 mb-6">Recent Enquiries</h3>
                <div className="space-y-4">
                  {bookings.slice(0, 5).map(b => (
                    <div key={b.id} className="flex items-center justify-between p-4 bg-stone-50 rounded-2xl">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center font-bold text-stone-500">
                          {b.customerName.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-sm text-stone-800">{b.customerName}</p>
                          <p className="text-[10px] text-stone-400 uppercase tracking-widest">{b.roomId}</p>
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border ${getStatusBadge(b.status)}`}>
                        {b.status}
                      </div>
                    </div>
                  ))}
                  {bookings.length === 0 && <p className="text-stone-400 text-sm text-center py-10">No recent bookings to display.</p>}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'bookings' && (
          <div className="bg-white rounded-3xl shadow-sm border border-stone-100 overflow-hidden">
             <table className="w-full text-left">
               <thead className="bg-stone-50 border-b border-stone-100">
                 <tr>
                   <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-black text-stone-400">Guest</th>
                   <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-black text-stone-400">Dates</th>
                   <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-black text-stone-400">Status</th>
                   <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-black text-stone-400">Amount</th>
                   <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-black text-stone-400">Actions</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-stone-50">
                 {bookings.map(b => (
                   <tr key={b.id} className="hover:bg-stone-50 transition-colors">
                     <td className="px-6 py-4">
                        <div className="font-bold text-stone-800">{b.customerName}</div>
                        <div className="text-xs text-stone-400">{b.customerEmail}</div>
                     </td>
                     <td className="px-6 py-4 text-sm text-stone-600">
                       {b.checkIn} to {b.checkOut}
                     </td>
                     <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.1em] border ${getStatusBadge(b.status)}`}>
                          {b.status}
                        </span>
                     </td>
                     <td className="px-6 py-4 font-bold text-stone-900">
                       LKR {b.totalPrice.toLocaleString()}
                     </td>
                     <td className="px-6 py-4">
                        <div className="flex gap-2">
                           {b.status === BookingStatus.PENDING && (
                             <button 
                               onClick={() => updateBookingStatus(b.id, BookingStatus.CONFIRMED)}
                               className="p-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 shadow-sm transition-all"
                               title="Confirm"
                             >
                               <Check size={14} />
                             </button>
                           )}
                           {b.status !== BookingStatus.CANCELLED && (
                             <button 
                               onClick={() => updateBookingStatus(b.id, BookingStatus.CANCELLED)}
                               className="p-2 bg-stone-200 text-stone-600 rounded-lg hover:bg-rose-500 hover:text-white transition-all shadow-sm"
                               title="Cancel"
                             >
                               <X size={14} />
                             </button>
                           )}
                        </div>
                     </td>
                   </tr>
                 ))}
                 {bookings.length === 0 && (
                   <tr>
                     <td colSpan={5} className="px-6 py-20 text-center text-stone-400 italic">No reservation records found.</td>
                   </tr>
                 )}
               </tbody>
             </table>
          </div>
        )}

        {activeTab === 'cms' && (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
               <div className="flex justify-between items-center mb-6">
                 <h3 className="font-bold text-stone-800 flex items-center gap-2"><UtensilsCrossed size={18} /> Menu Management</h3>
                 <button className="text-xs font-bold text-amber-800 uppercase tracking-widest">+ Add New</button>
               </div>
               <div className="space-y-4">
                  {menu.map(item => (
                    <div key={item.id} className="flex items-center gap-4 p-4 border border-stone-100 rounded-2xl hover:bg-stone-50 group">
                       <img src={item.image} className="w-12 h-12 object-cover rounded-lg" />
                       <div className="flex-grow">
                          <p className="font-bold text-sm">{item.name}</p>
                          <p className="text-xs text-stone-400">LKR {item.price}</p>
                       </div>
                       <button className="opacity-0 group-hover:opacity-100 text-amber-800 transition-all text-xs font-bold">Edit</button>
                    </div>
                  ))}
               </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
               <div className="flex justify-between items-center mb-6">
                 <h3 className="font-bold text-stone-800 flex items-center gap-2"><Hotel size={18} /> Room & Villa Editor</h3>
                 <button className="text-xs font-bold text-amber-800 uppercase tracking-widest">+ New Suite</button>
               </div>
               <div className="space-y-4">
                  {rooms.map(room => (
                    <div key={room.id} className="flex items-center gap-4 p-4 border border-stone-100 rounded-2xl hover:bg-stone-50 group">
                       <img src={room.image} className="w-12 h-12 object-cover rounded-lg" />
                       <div className="flex-grow">
                          <p className="font-bold text-sm">{room.name}</p>
                          <p className="text-xs text-stone-400">{room.capacity} Guests Max</p>
                       </div>
                       <button className="opacity-0 group-hover:opacity-100 text-amber-800 transition-all text-xs font-bold">Settings</button>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="max-w-2xl bg-white p-10 rounded-[2rem] shadow-sm border border-stone-100">
             <h3 className="text-xl font-bold mb-8 serif">Platform Identity</h3>
             <div className="space-y-6">
               <div className="space-y-2">
                 <label className="text-[10px] uppercase font-black text-stone-400 tracking-widest">Brand Name</label>
                 <input 
                    value={localSettings.name} 
                    onChange={(e) => setLocalSettings({...localSettings, name: e.target.value})}
                    className="w-full bg-stone-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-amber-800/20" 
                 />
               </div>
               <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black text-stone-400 tracking-widest">Support Email</label>
                    <input 
                      value={localSettings.email} 
                      onChange={(e) => setLocalSettings({...localSettings, email: e.target.value})}
                      className="w-full bg-stone-50 border-none rounded-xl p-4" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black text-stone-400 tracking-widest">Contact Phone</label>
                    <input 
                      value={localSettings.phone} 
                      onChange={(e) => setLocalSettings({...localSettings, phone: e.target.value})}
                      className="w-full bg-stone-50 border-none rounded-xl p-4" 
                    />
                  </div>
               </div>
               <div className="space-y-2">
                 <label className="text-[10px] uppercase font-black text-stone-400 tracking-widest">Physical Address</label>
                 <textarea 
                   value={localSettings.address} 
                   onChange={(e) => setLocalSettings({...localSettings, address: e.target.value})}
                   rows={3} 
                   className="w-full bg-stone-50 border-none rounded-xl p-4" 
                 />
               </div>
               <button 
                 onClick={handleSaveSettings}
                 className="w-full bg-stone-900 text-white py-4 rounded-xl font-bold uppercase tracking-widest shadow-xl mt-4"
               >
                 Apply Global Changes
               </button>
             </div>
          </div>
        )}
      </main>
    </div>
  );
};