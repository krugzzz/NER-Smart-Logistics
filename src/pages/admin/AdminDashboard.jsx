import React from 'react';
import StatCard from '../../components/StatCard';
import { Truck, ShieldAlert, Navigation, Clock } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Regional Overview</h2>
        <p className="text-gray-600 mt-1">NER Platform Analytics and Performance.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard title="Total Active Vehicles" value="3,412" icon={Truck} color="blue" />
        <StatCard title="High-Risk Corridors" value="4" icon={Navigation} color="yellow" />
        <StatCard title="Total Incidents (24h)" value="18" icon={ShieldAlert} color="red" />
        <StatCard title="Avg. Delivery Delay" value="1.2 hrs" icon={Clock} color="green" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Regional Accessibility Summary</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <span className="text-gray-600">Assam - Meghalaya Corridor</span>
              <span className="font-semibold text-green-600">85% Operational</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <span className="text-gray-600">Arunachal Pradesh Network</span>
              <span className="font-semibold text-yellow-600">62% Operational</span>
            </div>
            <div className="flex justify-between items-center pb-3">
              <span className="text-gray-600">Mizoram - Tripura Routes</span>
              <span className="font-semibold text-red-600">41% Operational</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">System Analytics</h3>
          <div className="bg-gray-50 rounded border border-gray-200 h-48 flex items-center justify-center">
            <p className="text-gray-500">Charts placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
