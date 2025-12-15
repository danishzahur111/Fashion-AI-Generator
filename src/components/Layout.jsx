// src/components/Layout.jsx - COMPLETE CODE
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, RefreshCcw } from 'lucide-react';
import { useAppContext } from '../AppContext.jsx'; // Make sure the .jsx extension is here

const Layout = ({ children }) => {
  const { resetApp } = useAppContext();

  return (
    <div className="min-h-screen flex flex-col bg-secondary text-textMain">
      
      {/* Header */}
      <header className="sticky top-0 z-10 bg-secondary/95 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link to="/" onClick={resetApp} className="flex items-center space-x-2 group">
            <Sparkles className="w-6 h-6 text-accent group-hover:text-primary transition-colors" />
            <h1 className="text-xl font-serif font-bold text-primary tracking-wider">
              Fashion AI Director
            </h1>
          </Link>
          <button
            onClick={resetApp}
            className="flex items-center text-sm font-medium text-textSub hover:text-accent transition-colors"
            title="Start a new campaign"
          >
            <RefreshCcw className="w-4 h-4 mr-1" />
            New Campaign
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-secondary mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Fashion AI Director. Built for conceptual campaign generation.
          </p>
        </div>
      </footer>
      
    </div>
  );
};

export default Layout;