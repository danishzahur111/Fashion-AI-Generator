// src/components/SubsystemGenerator.jsx
import React, { useState } from 'react';
import { useAppContext } from '../AppContext';
import { generateSubSystem } from '../utils/generators';
import { ArrowRight, Info } from 'lucide-react';

const SubSystemGenerator = () => {
  const { niches, themes, nextStep, setSubSystem, userInputs, updateInputs } = useAppContext();
  const [selectedNiche, setSelectedNiche] = useState(niches[0].id);
  const [selectedTheme, setSelectedTheme] = useState(themes[0].id);
  const [showDetails, setShowDetails] = useState(false);

  // Find the selected theme object for displaying details
  const themeDetails = themes.find(t => t.id === selectedTheme);

  const handleGenerate = () => {
    // Generate the sub-system object using the utility function
    const newSubSystem = generateSubSystem(
      selectedNiche, 
      selectedTheme, 
      userInputs.publication, 
      userInputs.designers
    );
    
    setSubSystem(newSubSystem);
    nextStep();
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-2xl border border-accent/30 max-w-3xl mx-auto">
      <h3 className="text-3xl font-serif font-bold text-primary mb-6 text-center">
        Step 1: Define Editorial Sub-System
      </h3>
      
      <div className="space-y-6">
        {/* Niche Selection */}
        <label className="block">
          <span className="text-textMain font-semibold">1. Select Fashion Niche (Editorial Style)</span>
          <select
            value={selectedNiche}
            onChange={(e) => setSelectedNiche(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-lg p-3 bg-secondary/50 focus:border-accent focus:ring focus:ring-accent/50 transition-colors"
          >
            {niches.map(niche => (
              <option key={niche.id} value={niche.id}>{niche.name}</option>
            ))}
          </select>
        </label>

        {/* Theme Selection */}
        <label className="block">
          <span className="text-textMain font-semibold">2. Select Campaign Theme (Conceptual Narrative)</span>
          <select
            value={selectedTheme}
            onChange={(e) => setSelectedTheme(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-lg p-3 bg-secondary/50 focus:border-accent focus:ring focus:ring-accent/50 transition-colors"
          >
            {themes.map(theme => (
              <option key={theme.id} value={theme.id}>{theme.name}</option>
            ))}
          </select>
        </label>
        
        {/* Optional Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-textMain font-semibold">Publication Name (e.g., Vogue, Dazed)</span>
            <input
              type="text"
              value={userInputs.publication}
              onChange={(e) => updateInputs('publication', e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-3 bg-secondary/50 focus:border-accent focus:ring focus:ring-accent/50"
              placeholder="e.g., Harper's Bazaar"
            />
          </label>
          <label className="block">
            <span className="text-textMain font-semibold">Designers/Aesthetics to reference</span>
            <input
              type="text"
              value={userInputs.designers}
              onChange={(e) => updateInputs('designers', e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-3 bg-secondary/50 focus:border-accent focus:ring focus:ring-accent/50"
              placeholder="e.g., McQueen, minimalism"
            />
          </label>
        </div>

        {/* Theme Details Pop-out */}
        {themeDetails && (
          <div className="border border-accent/40 rounded-lg p-4 bg-accent/5">
            <button 
                onClick={() => setShowDetails(!showDetails)}
                className="flex items-center text-accent hover:text-primary font-semibold text-sm transition-colors"
            >
                <Info className="w-4 h-4 mr-2" />
                {showDetails ? 'Hide' : 'View'} Theme Details: {themeDetails.name}
            </button>
            {showDetails && (
              <div className="mt-3 text-sm text-textSub space-y-2">
                <p><strong>Concept:</strong> {themeDetails.concept}</p>
                <p><strong>Mood/Aura:</strong> {themeDetails.mood.join(', ')}</p>
                <p><strong>Key Environments:</strong> {themeDetails.environment.join(', ')}</p>
                <p><strong>Garment Style:</strong> {themeDetails.garmentStyle.join(', ')}</p>
              </div>
            )}
          </div>
        )}
      </div>

      <button
        onClick={handleGenerate}
        className="mt-8 w-full bg-primary hover:bg-accent text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 flex items-center justify-center"
      >
        Continue to Character Profile
        <ArrowRight className="w-5 h-5 ml-2" />
      </button>
    </div>
  );
};

export default SubSystemGenerator;