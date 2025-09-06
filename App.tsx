
import React from 'react';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-text-primary">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
};

export default App;
