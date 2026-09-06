// Helper functions

export const getRiskColor = (level) => {
  switch (level?.toLowerCase()) {
    case 'safe': return 'text-green-600 bg-green-100 border-green-200';
    case 'medium': return 'text-yellow-600 bg-yellow-100 border-yellow-200';
    case 'high': return 'text-red-600 bg-red-100 border-red-200';
    default: return 'text-gray-600 bg-gray-100 border-gray-200';
  }
};
