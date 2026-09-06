import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';
import { Home, Truck, MapPin, Bell } from 'lucide-react';

const DriverLayout = () => {
  const { user } = useAuth();

  if (!user || user.role !== 'driver') {
    return <Navigate to="/" replace />;
  }

  const links = [
    { to: '/driver', label: 'Dashboard', icon: Home, end: true },
    { to: '/driver/register-vehicle', label: 'Register Vehicle', icon: Truck },
    { to: '/driver/create-trip', label: 'Create Trip', icon: MapPin },
    { to: '/driver/alerts', label: 'Alerts', icon: Bell },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar links={links} />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DriverLayout;
