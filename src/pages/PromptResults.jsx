// src/pages/PromptResults.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../AppContext.jsx';
import { Repeat, Zap } from 'lucide-react';

const PromptResults = () => {
  const { campaignPrompts, resetApplication } = useAppContext();
  const navigate = useNavigate();

  const handleNewCampaign = () => {
    resetApplication();
    navigate('/');
  };

  if (!campaignPrompts || campaignPrompts.length === 0) {
    return (
      <div className="max-w-3xl mx-auto text-center p-10 bg-white rounded-xl shadow-xl">
        <h2 className="text-4xl font-serif font-bold text-error mb-4">No Prompts Generated</h2>
        <p className="text-textSub mb-6">
          Please go back to the generator to define a new campaign.
        </p>
        <button
          onClick={() => navigate('/generate')}
          className="bg-accent hover:bg-primary text-white font-semibold py-2 px-6 rounded-full transition duration-300"
        >
          <Zap className="w-4 h-4 inline mr-2" /> Start Generating
        </button>
      </div>
    );
  }

  // Determine the primary theme details for display
  const themeDetails = campaignPrompts[0].theme;

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-5xl font-serif font-extrabold text-primary text-center mb-4">
        Campaign Prompts Generated
      </h2>
      <p className="text-center text-textSub mb-10">
        Review the generated prompts, which are optimized for AI image generation tools (e.g., Midjourney, Stable Diffusion).
      </p>

      {/* Campaign Summary Card */}
      <div className="bg-white p-8 rounded-2xl shadow-2xl mb-12 border-t-4 border-accent">
        <h3 className="text-3xl font-serif font-bold text-primary mb-4">
          {campaignPrompts[0].brand} - {campaignPrompts[0].season} Collection
        </h3>
        <p className="text-lg text-textMain mb-4">
          **Editorial Role:** {themeDetails.role}
        </p>
        <div className="grid md:grid-cols-2 gap-4 text-textSub text-sm">
            <div>
                <p><strong>Niche:</strong> {themeDetails.niche}</p>
                <p><strong>Conceptual Theme:</strong> {themeDetails.theme.name}</p>
                <p><strong>Mood:</strong> {themeDetails.theme.mood.join(', ')}</p>
            </div>
            <div>
                <p><strong>Core Message:</strong> {campaignPrompts[0].message}</p>
                <p><strong>Model Profile:</strong> Defined by {campaignPrompts[0].character.gender}, {campaignPrompts[0].character.age}, {campaignPrompts[0].character.fashionAesthetic}</p>
            </div>
        </div>
      </div>

      {/* Prompts List */}
      <div className="space-y-6">
        {campaignPrompts.map((prompt, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-primary">
            <h4 className="text-xl font-semibold text-primary mb-3">Shot {index + 1}: {prompt.shotType}</h4>
            <div className="bg-white p-4 rounded border border-gray-200">
                <code className="block text-sm whitespace-pre-wrap font-mono text-textMain">
                    {prompt.prompt}
                </code>
            </div>
            <p className="text-xs text-textSub mt-2">
                *The base prompt has been synthesized using the thematic system, character profile, and campaign inputs.*
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12 mb-8">
        <button
          onClick={handleNewCampaign}
          className="flex items-center bg-success hover:bg-primary text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300"
        >
          <Repeat className="w-5 h-5 mr-2" /> Start New Campaign
        </button>
      </div>
    </div>
  );
};

export default PromptResults;