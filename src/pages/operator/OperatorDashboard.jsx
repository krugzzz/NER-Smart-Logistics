import React from 'react';
import NERMap from '../../components/NERMap';
import { useNavigate } from 'react-router-dom';
import StatCard from '../../components/StatCard';
import Button from '../../components/Button';
import { Truck, Package, AlertTriangle, Map, Clock } from 'lucide-react';

const OperatorDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Control Center</h2>
          <p className="text-gray-600 mt-1">Real-time overview of NER logistics.</p>
        </div>
        <div className="flex gap-2">
          <Button onClick={() => navigate('/operator/live-map')} variant="primary" className="flex items-center gap-2">
            <Map size={18} /> Open Live Map
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard title="Active Vehicles" value="124" icon={Truck} color="blue" />
        <StatCard title="Active Shipments" value="89" icon={Package} color="blue" />
        <StatCard title="Delayed Shipments" value="12" icon={Clock} color="yellow" />
        <StatCard title="Current Incidents" value="3" icon={AlertTriangle} color="red" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <NERMap height="400px" />
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 flex flex-col">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">High-Risk Routes</h3>
          <div className="flex-1 space-y-4">
            <div className="p-4 rounded-lg bg-red-50 border border-red-100">
              <div className="flex justify-between items-start mb-2">
                <span className="font-semibold text-red-900">NH-44 (Shillong - Silchar)</span>
                <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-bold rounded">HIGH</span>
              </div>
              <p className="text-sm text-red-700">Landslide warning. 3 active vehicles affected.</p>
            </div>
            <div className="p-4 rounded-lg bg-yellow-50 border border-yellow-100">
              <div className="flex justify-between items-start mb-2">
                <span className="font-semibold text-yellow-900">NH-27 (Guwahati - Nagaon)</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold rounded">MEDIUM</span>
              </div>
              <p className="text-sm text-yellow-700">Heavy rain and low visibility reported.</p>
            </div>
          </div>
          <Button onClick={() => navigate('/operator/incidents')} variant="outline" className="mt-4 w-full">
            View All Incidents
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OperatorDashboard;
