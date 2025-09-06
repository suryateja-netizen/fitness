
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-brand-primary"></div>
      <p className="ml-4 text-lg text-text-secondary">Generating your plan...</p>
    </div>
  );
};

export default Loader;
