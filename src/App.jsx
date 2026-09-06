import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// Pages
import Login from './pages/Login';

// Layouts
import DriverLayout from './layouts/DriverLayout';
import OperatorLayout from './layouts/OperatorLayout';
import AdminLayout from './layouts/AdminLayout';

// Driver Pages
import DriverDashboard from './pages/driver/DriverDashboard';
import RegisterVehicle from './pages/driver/RegisterVehicle';
import CreateTrip from './pages/driver/CreateTrip';
import DriverAlerts from './pages/driver/DriverAlerts';

// Operator Pages
import OperatorDashboard from './pages/operator/OperatorDashboard';
import LiveMap from './pages/operator/LiveMap';
import Vehicles from './pages/operator/Vehicles';
import Incidents from './pages/operator/Incidents';
import Shipments from './pages/operator/Shipments';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import Analytics from './pages/admin/Analytics';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          
          <Route path="/driver" element={<DriverLayout />}>
            <Route index element={<DriverDashboard />} />
            <Route path="register-vehicle" element={<RegisterVehicle />} />
            <Route path="create-trip" element={<CreateTrip />} />
            <Route path="alerts" element={<DriverAlerts />} />
          </Route>

          <Route path="/operator" element={<OperatorLayout />}>
            <Route index element={<OperatorDashboard />} />
            <Route path="live-map" element={<LiveMap />} />
            <Route path="vehicles" element={<Vehicles />} />
            <Route path="incidents" element={<Incidents />} />
            <Route path="shipments" element={<Shipments />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="analytics" element={<Analytics />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
