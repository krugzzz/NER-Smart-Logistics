import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';
import { Truck, Shield, Activity } from 'lucide-react';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role) => {
    login(role);
    if (role === 'driver') navigate('/driver');
    else if (role === 'operator') navigate('/operator');
    else if (role === 'admin') navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="text-center text-3xl font-extrabold text-blue-900">
          NER Smart Logistics
        </h1>
        <p className="mt-2 text-center text-sm text-gray-600">
          AI-Based Smart Logistics and Accessibility Intelligence Platform
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <p className="text-center text-gray-700 font-medium mb-6">Select your role to continue</p>
          
          <div className="space-y-4">
            <button
              onClick={() => handleLogin('driver')}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Truck className="text-blue-600" />
              <span className="font-medium text-lg">Driver</span>
            </button>
            
            <button
              onClick={() => handleLogin('operator')}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Activity className="text-green-600" />
              <span className="font-medium text-lg">Logistics Operator</span>
            </button>
            
            <button
              onClick={() => handleLogin('admin')}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Shield className="text-red-600" />
              <span className="font-medium text-lg">Administrator</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
