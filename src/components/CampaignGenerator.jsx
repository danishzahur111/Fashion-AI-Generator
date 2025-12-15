// src/pages/CampaignGenerator.jsx
import React from 'react';
import { useAppContext } from '../AppContext';
import Stepper from '../components/Stepper';
import SubSystemGenerator from '../components/SubSystemGenerator';
import CharacterManager from '../components/CharacterManager';
import CampaignInputs from '../components/CampaignInputs';
import { XCircle } from 'lucide-react';

const CampaignGenerator = () => {
  const { currentStep, subSystem } = useAppContext();

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <SubSystemGenerator />;
      case 2:
        if (!subSystem) {
            return (
                <ErrorState 
                    message="Please define your Editorial Sub-System (Step 1) before proceeding to character definition." 
                    resetMessage="Return to Step 1"
                />
            );
        }
        return <CharacterManager />;
      case 3:
        return <CampaignInputs />;
      default:
        return <SubSystemGenerator />;
    }
  };

  return (
    <div className="min-h-full">
      <h2 className="text-4xl font-serif font-bold text-primary text-center mb-8">
        Campaign Prompt Builder
      </h2>
      
      <Stepper />

      <div className="mt-12">
        {renderStep()}
      </div>
    </div>
  );
};

// Simple Error Component for navigation guard
const ErrorState = ({ message, resetMessage }) => {
    const { setCurrentStep } = useAppContext();
    return (
        <div className="flex flex-col items-center justify-center p-12 bg-red-50 border-2 border-red-300 rounded-xl shadow-lg max-w-xl mx-auto text-center">
            <XCircle className="w-12 h-12 text-red-500 mb-4" />
            <p className="text-xl text-red-700 font-semibold mb-6">{message}</p>
            <button 
                onClick={() => setCurrentStep(1)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full transition-colors"
            >
                {resetMessage}
            </button>
        </div>
    );
};


export default CampaignGenerator;