// src/components/SubSystemSelector.jsx - FINAL VERIFIED CODE
import React, { useState } from 'react';
import { useAppContext } from '../AppContext.jsx';
import FormSection from './FormSection.jsx';
import { ArrowRight } from 'lucide-react';

const SubSystemSelector = ({ isCurrent }) => {
  const { themes, niches, setSubSystem, nextStep } = useAppContext();
  const [selectedNiche, setSelectedNiche] = useState(niches[0]?.id || '');
  const [selectedTheme, setSelectedTheme] = useState(niches[0]?.baseTheme || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const theme = themes.find(t => t.id === selectedTheme);
    const niche = niches.find(n => n.id === selectedNiche);

    if (theme && niche) {
        setSubSystem({ 
            niche: niche.name, 
            theme: theme,
            role: `Fashion Editorial Director specializing in ${niche.name} with a focus on ${theme.name}.`
        });
        nextStep();
    } else {
        // This usually means the data file failed to load.
        alert("Configuration Error: Niche or Theme data is missing.");
    }
  };

  const handleNicheChange = (e) => {
    const newNicheId = e.target.value;
    setSelectedNiche(newNicheId);
    
    const niche = niches.find(n => n.id === newNicheId);
    if (niche) {
        setSelectedTheme(niche.baseTheme);
    }
  };

  // Ensure data exists before rendering
  if (!niches || niches.length === 0 || !themes || themes.length === 0) {
      return (
        <FormSection title="1. Select Sub-System (Niche & Theme)" isCurrent={isCurrent}>
            <p className="text-error font-bold">Error: Cannot load configuration data. Check src/data/fashionSystem.js.</p>
        </FormSection>
      );
  }

  return (
    <FormSection title="1. Select Sub-System (Niche & Theme)" isCurrent={isCurrent}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="niche" className="block text-sm font-medium text-textMain mb-1">
            Campaign Niche
          </label>
          <select
            id="niche"
            value={selectedNiche}
            onChange={handleNicheChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent py-2"
          >
            {niches.map((n) => (
              <option key={n.id} value={n.id}>{n.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="theme" className="block text-sm font-medium text-textMain mb-1">
            Conceptual Theme
          </label>
          <select
            id="theme"
            value={selectedTheme}
            onChange={(e) => setSelectedTheme(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent py-2"
          >
            {themes.map((t) => (
              <option key={t.id} value={t.id}>{t.name}</option>
            ))}
          </select>
          <p className="text-xs text-textSub mt-2 p-2 bg-gray-100 rounded">
            Theme Description: {themes.find(t => t.id === selectedTheme)?.concept}
          </p>
        </div>

        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="flex items-center bg-accent hover:bg-primary text-white font-semibold py-2 px-6 rounded-full transition duration-300"
          >
            Define Character
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </form>
    </FormSection>
  );
};

export default SubSystemSelector;