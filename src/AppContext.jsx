// src/AppContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import { fashionEditorialSystem, characterOptions } from './data/fashionSystem';

// 1. Create Context
const AppContext = createContext();

// Default state for the character (will be populated on first load)
const initialCharacterState = {
  gender: 'female',
  age: characterOptions.age[0],
  bodyType: characterOptions.bodyType[0],
  height: characterOptions.height[0],
  faceShape: characterOptions.faceShape[0],
  eyeCharacteristics: characterOptions.eyeCharacteristics[0],
  hairDescription: characterOptions.hairDescription[0],
  expression: characterOptions.expression[0],
  skinCharacteristics: characterOptions.skinCharacteristics[0],
  pose: characterOptions.pose[0],
  fashionAesthetic: 'High Fashion',
  distinctiveFeatures: [],
};

// 2. Context Provider Component
export const AppProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [subSystem, setSubSystem] = useState(null);
  const [character, setCharacter] = useState(initialCharacterState);
  const [campaignPrompts, setCampaignPrompts] = useState([]);
  const [userInputs, setUserInputs] = useState({
    publication: 'Vogue',
    designers: 'Haute Couture Designers',
    brand: 'Luxury Brand X',
    season: 'SS 2025',
    message: 'Sustainability and Timelessness',
    numImages: 5,
    shotTypes: ['Full Body', 'Close-up', 'Dynamic Action'],
  });

  // Data loaded from fashionSystem.js
  const themes = fashionEditorialSystem.themes;
  const niches = fashionEditorialSystem.niches;
  
  // Update state for forms
  const updateCharacter = (field, value) => {
    setCharacter(prev => ({ ...prev, [field]: value }));
  };

  const updateInputs = (field, value) => {
    setUserInputs(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));
  const resetApp = () => {
    setCurrentStep(1);
    setSubSystem(null);
    setCharacter(initialCharacterState);
    setCampaignPrompts([]);
  };

  const contextValue = {
    currentStep,
    setCurrentStep,
    subSystem,
    setSubSystem,
    character,
    updateCharacter,
    characterOptions, // Exported from data
    campaignPrompts,
    setCampaignPrompts,
    userInputs,
    updateInputs,
    themes,
    niches,
    nextStep,
    prevStep,
    resetApp,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

// 3. Custom Hook to use the Context
export const useAppContext = () => {
  return useContext(AppContext);
};