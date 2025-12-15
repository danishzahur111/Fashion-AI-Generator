// src/pages/CampaignGenerator.jsx - FINAL CODE
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../AppContext.jsx';
import { generateCampaign } from '../utils/generators.js';
import SubSystemSelector from '../components/SubSystemSelector.jsx';
import CharacterBuilder from '../components/CharacterBuilder.jsx';
import CampaignInputs from '../components/CampaignInputs.jsx';
import FormSection from '../components/FormSection.jsx';
import StepIndicator from '../components/StepIndicator.jsx'; // Another missing component!

const CampaignGenerator = () => {
  const { currentStep, userInputs, subSystem, character, setCampaignPrompts } = useAppContext();
  const navigate = useNavigate();
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!subSystem) {
        alert("Please complete the Sub-System selection first.");
        return;
    }
    setIsGenerating(true);
    
    // Simulate generation delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const prompts = generateCampaign({
        brand: userInputs.brand,
        season: userInputs.season,
        message: userInputs.message,
        subSystem: subSystem,
        character: character,
        numImages: 5, // Hardcoded number of images for simplicity
        shotTypes: ['Full Body', 'Close-up', 'Dynamic Action', 'Editorial Portrait', 'Environmental Shot']
    });

    setCampaignPrompts(prompts);
    setIsGenerating(false);
    navigate('/results');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-5xl font-serif font-extrabold text-primary text-center mb-10">
        Campaign Prompt Builder
      </h2>
      
      {/* Step Indicator */}
      <StepIndicator currentStep={currentStep} />
      
      <div className="space-y-12">
        <SubSystemSelector isCurrent={currentStep === 1} />
        <CharacterBuilder isCurrent={currentStep === 2} />
        <CampaignInputs isCurrent={currentStep === 3} />

        {/* Step 4: Review and Generate */}
        <FormSection title="4. Review & Generate Prompts" step={4} isCurrent={currentStep === 4}>
          <div className="space-y-4 text-textMain">
            <h4 className="text-xl font-semibold border-b pb-2 mb-4">Final Campaign Details</h4>
            
            <p><strong>Niche:</strong> {subSystem?.niche || 'N/A'}</p>
            <p><strong>Theme:</strong> {subSystem?.theme.name || 'N/A'}</p>
            <p><strong>Brand:</strong> {userInputs.brand}</p>
            <p><strong>Message:</strong> {userInputs.message}</p>
            
            <p className="pt-4 text-sm text-textSub">
                Review your selections above. Click "Generate" to create the final set of image prompts.
            </p>
          </div>
          
          <div className="flex justify-center mt-6">
            <button
              onClick={handleGenerate}
              disabled={isGenerating || !subSystem}
              className={`flex items-center ${isGenerating ? 'bg-gray-400' : 'bg-success hover:bg-primary'} text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 disabled:opacity-75`}
            >
              {isGenerating ? (
                <>Generating...</>
              ) : (
                <>Generate 5 Prompts</>
              )}
            </button>
          </div>
        </FormSection>
      </div>
    </div>
  );
};

export default CampaignGenerator;