
import React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  unit: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value, unit }) => {
  return (
    <div className="bg-base-100 p-6 rounded-xl shadow-lg flex items-center space-x-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex-shrink-0 bg-base-200 rounded-full p-3">
        {icon}
      </div>
      <div>
        <p className="text-text-secondary font-medium">{title}</p>
        <p className="text-3xl font-bold text-text-primary">
          {value} <span className="text-lg font-normal text-text-secondary">{unit}</span>
        </p>
      </div>
    </div>
  );
};

export default StatCard;
