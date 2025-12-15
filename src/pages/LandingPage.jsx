// src/pages/LandingPage.jsx - FINAL CORRECT CODE
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ChevronRight } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  const startGeneration = () => {
    navigate('/generate');
  };

  return (
    <div className="text-center py-20">
      <Sparkles className="w-16 h-16 text-accent mx-auto mb-6" />
      <h2 className="text-5xl font-serif font-extrabold text-primary mb-4">
        Conceptual Fashion Campaign Generator
      </h2>
      <p className="text-xl text-textSub max-w-2xl mx-auto mb-8">
        Craft sophisticated, editorial-quality image prompts for your next high-fashion campaign using a systemized thematic approach.
      </p>
      
      <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-accent/20">
        <h3 className="text-2xl font-serif font-semibold text-primary mb-4">
          How It Works
        </h3>
        <ul className="text-left space-y-3 text-textMain mb-8">
          <li className="flex items-start">
            <span className="font-bold text-accent mr-3">1.</span>
            Select a **Niche** and a **Theme** to establish the campaign's narrative foundation (the Sub-System).
          </li>
          <li className="flex items-start">
            <span className="font-bold text-accent mr-3">2.</span>
            Define the **Model Character** with precise physical and aesthetic details.
          </li>
          <li className="flex items-start">
            <span className="font-bold text-accent mr-3">3.</span>
            Input **Campaign Details** (Brand, Season, Message).
          </li>
          <li className="flex items-start">
            <span className="font-bold text-accent mr-3">4.</span>
            Generate a set of **Midjourney/DALL-E prompts** tailored to the Sub-System.
          </li>
        </ul>
        
        <button
          onClick={startGeneration}
          className="bg-accent hover:bg-primary text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center w-full"
        >
          Start Generating Campaign
          <ChevronRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default LandingPage;