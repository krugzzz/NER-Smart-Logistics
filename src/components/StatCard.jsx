import React from 'react';

const StatCard = ({ title, value, icon: Icon, description, color = 'blue' }) => {
  const colorMap = {
    blue: 'text-blue-600 bg-blue-100',
    green: 'text-green-600 bg-green-100',
    red: 'text-red-600 bg-red-100',
    yellow: 'text-yellow-600 bg-yellow-100',
  };

  const iconColor = colorMap[color] || colorMap.blue;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 flex items-start gap-4">
      {Icon && (
        <div className={`p-3 rounded-full ${iconColor}`}>
          <Icon size={24} />
        </div>
      )}
      <div>
        <h3 className="text-gray-500 text-sm font-medium mb-1">{title}</h3>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
      </div>
    </div>
  );
};

export default StatCard;
