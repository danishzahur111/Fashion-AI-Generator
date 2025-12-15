// src/components/CampaignInputs.jsx - FINAL VERIFIED CODE
import React from 'react';
import { useAppContext } from '../AppContext.jsx';
import FormSection from './FormSection.jsx';
import { ArrowLeft } from 'lucide-react'; // Added ArrowLeft for previous button

// Added { isCurrent } prop here
const CampaignInputs = ({ isCurrent }) => {
  const { userInputs, updateInputs, nextStep, prevStep } = useAppContext();

  const handleChange = (e) => {
    updateInputs(e.target.name, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    // Passed isCurrent prop to FormSection
    <FormSection title="3. Campaign & Narrative Details" isCurrent={isCurrent}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="brand" className="block text-sm font-medium text-textMain">
            Brand Name
          </label>
          <input
            type="text"
            name="brand"
            id="brand"
            value={userInputs.brand}
            onChange={handleChange}
            required
            placeholder="e.g., Luxury Brand X"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent py-2"
          />
        </div>

        <div>
          <label htmlFor="season" className="block text-sm font-medium text-textMain">
            Season/Collection
          </label>
          <input
            type="text"
            name="season"
            id="season"
            value={userInputs.season}
            onChange={handleChange}
            required
            placeholder="e.g., SS 2025 or Resort 2024"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent py-2"
          />
        </div>
        
        <div>
          <label htmlFor="publication" className="block text-sm font-medium text-textMain">
            Target Publication/Client
          </label>
          <input
            type="text"
            name="publication"
            id="publication"
            value={userInputs.publication}
            onChange={handleChange}
            required
            placeholder="e.g., Vogue Italia, Dazed, or Client Name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent py-2"
          />
        </div>
        
        <div>
          <label htmlFor="designers" className="block text-sm font-medium text-textMain">
            Designers/Style Reference
          </label>
          <input
            type="text"
            name="designers"
            id="designers"
            value={userInputs.designers}
            onChange={handleChange}
            required
            placeholder="e.g., Haute Couture Designers, or specific names"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent py-2"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-textMain">
            Core Campaign Message/Concept (Thematic Narrative)
          </label>
          <textarea
            name="message"
            id="message"
            rows="3"
            value={userInputs.message}
            onChange={handleChange}
            required
            placeholder="e.g., A commentary on technology and nature, or a celebration of timeless craftsmanship."
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
          ></textarea>
        </div>

        <div className="flex justify-between pt-4">
          <button
            type="button"
            onClick={prevStep}
            className="flex items-center text-textSub hover:text-primary font-semibold py-2 px-6 transition duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Character
          </button>
          <button
            type="submit"
            className="bg-accent hover:bg-primary text-white font-semibold py-2 px-6 rounded-full transition duration-300"
          >
            Review & Generate Prompts
          </button>
        </div>
      </form>
    </FormSection>
  );
};

export default CampaignInputs;