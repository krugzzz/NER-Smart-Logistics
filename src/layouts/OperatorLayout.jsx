import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';
import { Activity, Map, Truck, AlertTriangle, Package } from 'lucide-react';

const OperatorLayout = () => {
  const { user } = useAuth();

  if (!user || user.role !== 'operator') {
    return <Navigate to="/" replace />;
  }

  const links = [
    { to: '/operator', label: 'Dashboard', icon: Activity, end: true },
    { to: '/operator/live-map', label: 'Live Map', icon: Map },
    { to: '/operator/vehicles', label: 'Vehicles', icon: Truck },
    { to: '/operator/incidents', label: 'Incidents', icon: AlertTriangle },
    { to: '/operator/shipments', label: 'Shipments', icon: Package },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar links={links} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default OperatorLayout;
