import React, { useState } from 'react';
import Button from '../../components/Button';

const CreateTrip = () => {
  const [calculating, setCalculating] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleCalculate = (e) => {
    e.preventDefault();
    setCalculating(true);
    // Simulate AI calculation delay
    setTimeout(() => {
      setCalculating(false);
      setShowResult(true);
    }, 1500);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 h-fit">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Create Trip</h2>
        <form onSubmit={handleCalculate} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Starting Location</label>
            <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="e.g. Guwahati" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
            <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="e.g. Tawang" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Cargo Category</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
              <option>General</option>
              <option>Perishable</option>
              <option>Medical Emergency</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Cargo Priority</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
              <option>Standard</option>
              <option>High</option>
              <option>Critical (SOS)</option>
            </select>
          </div>
          <div className="pt-4">
            <Button type="submit" disabled={calculating} className="w-full flex justify-center">
              {calculating ? 'Analyzing with AI...' : 'Calculate Recommended Route'}
            </Button>
          </div>
        </form>
      </div>

      <div className="space-y-6">
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center min-h-[250px]">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Recommended Route</h3>
          {showResult ? (
            <div className="text-center">
              <p className="text-blue-700 font-medium mb-1">Route calculation placeholder</p>
              <p className="text-sm text-gray-500">Map and route steps will appear here.</p>
            </div>
          ) : (
            <p className="text-gray-500 text-sm">Route will appear here</p>
          )}
        </div>

        <div className="bg-blue-50 border-2 border-dashed border-blue-200 rounded-lg p-8 flex flex-col items-center justify-center min-h-[200px]">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Risk Analysis</h3>
          {showResult ? (
            <div className="text-center">
              <p className="text-blue-700 font-medium mb-1">AI risk analysis placeholder</p>
              <p className="text-sm text-gray-500">Weather, terrain, and traffic risks will appear here.</p>
            </div>
          ) : (
            <p className="text-blue-500/70 text-sm">AI risk analysis will appear here</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateTrip;
