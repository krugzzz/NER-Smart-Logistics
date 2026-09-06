import React from 'react';
import { useNavigate } from 'react-router-dom';
import StatCard from '../../components/StatCard';
import Button from '../../components/Button';
import { getRiskColor } from '../../utils/helpers';
import { Truck, MapPin, AlertCircle, Clock } from 'lucide-react';

const DriverDashboard = () => {
  const navigate = useNavigate();
  
  // Dummy data for foundation
  const vehicle = { reg: 'AS-01-XX-1234', type: 'Heavy Truck', capacity: '15 Tonnes' };
  const currentTrip = { 
    id: 'TRP-9082', 
    from: 'Guwahati, Assam', 
    to: 'Shillong, Meghalaya', 
    status: 'In Progress',
    eta: '2h 15m',
    riskLevel: 'Medium'
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Welcome back, Driver</h2>
        <p className="text-gray-600 mt-1">Here is your daily logistics summary.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Active Vehicle" value={vehicle.reg} description={vehicle.type} icon={Truck} color="blue" />
        <StatCard title="Current Trip ETA" value={currentTrip.eta} description={`To: ${currentTrip.to}`} icon={Clock} color="green" />
        <StatCard title="Route Risk" value={currentTrip.riskLevel} description="Weather warning en route" icon={AlertCircle} color="yellow" />
        <StatCard title="Recent Alerts" value="2" description="Check alerts tab" icon={MapPin} color="red" />
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Route Status</h3>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-gray-50 rounded-lg">
          <div>
            <p className="text-sm text-gray-500">Trip ID</p>
            <p className="font-medium text-gray-900">{currentTrip.id}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">From</p>
            <p className="font-medium text-gray-900">{currentTrip.from}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">To</p>
            <p className="font-medium text-gray-900">{currentTrip.to}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Risk Assessment</p>
            <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full border ${getRiskColor(currentTrip.riskLevel)}`}>
              {currentTrip.riskLevel} Risk
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mt-6">
        <Button onClick={() => navigate('/driver/register-vehicle')}>Register Vehicle</Button>
        <Button onClick={() => navigate('/driver/create-trip')} variant="secondary">Create Trip</Button>
        <Button onClick={() => navigate('/driver/alerts')} variant="danger">Report Incident</Button>
      </div>
    </div>
  );
};

export default DriverDashboard;
