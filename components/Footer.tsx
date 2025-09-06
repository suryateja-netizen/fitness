
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-base-100 mt-8 py-4">
      <div className="container mx-auto px-4 text-center text-text-secondary">
        <p>&copy; {new Date().getFullYear()} AI Fitness Tracker. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
