import React from 'react';
import NERMap from '../../components/NERMap';

const LiveMap = () => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
    <div className="p-6 border-b border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900">
        Live NER Logistics Map
      </h2>
      <p className="text-gray-500 mt-1">
        Real-time logistics monitoring across the North Eastern Region
      </p>
    </div>

    <NERMap height="600px" />
  </div>
);

export default LiveMap;
