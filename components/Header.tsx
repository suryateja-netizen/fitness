
import React from 'react';

const DumbbellIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m6.5 6.5 11 11" />
    <path d="m21 21-1-1" />
    <path d="m3 3 1 1" />
    <path d="m18 22 4-4" />
    <path d="m6 2 4 4" />
    <path d="m3 10 4 4" />
    <path d="m14 21 4-4" />
    <path d="m10 3 4 4" />
  </svg>
);


const Header: React.FC = () => {
  return (
    <header className="bg-base-100 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center">
        <DumbbellIcon className="h-8 w-8 text-brand-primary" />
        <h1 className="ml-3 text-2xl font-bold text-text-primary tracking-tight">
          AI Fitness Tracker
        </h1>
      </div>
    </header>
  );
};

export default Header;
