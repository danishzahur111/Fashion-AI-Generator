// src/components/CharacterManager.jsx
import React from 'react';
import { useAppContext } from '../AppContext';
import { ArrowLeft, ArrowRight, X, Plus } from 'lucide-react';

const CharacterManager = () => {
  const { 
    character, 
    updateCharacter, 
    characterOptions, 
    nextStep, 
    prevStep 
  } = useAppContext();

  // Handler for adding/removing distinctive features
  const handleFeatureChange = (feature) => {
    const currentFeatures = character.distinctiveFeatures;
    if (currentFeatures.includes(feature)) {
      updateCharacter('distinctiveFeatures', currentFeatures.filter(f => f !== feature));
    } else {
      updateCharacter('distinctiveFeatures', [...currentFeatures, feature]);
    }
  };

  const OptionSelect = ({ label, field, options, isRequired = true }) => (
    <label className="block">
      <span className="text-textMain font-semibold">{label} {isRequired && '*'}</span>
      <select
        value={character[field]}
        onChange={(e) => updateCharacter(field, e.target.value)}
        className="mt-1 block w-full border border-gray-300 rounded-lg p-3 bg-secondary/50 focus:border-accent focus:ring focus:ring-accent/50"
      >
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </label>
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow-2xl border border-accent/30 max-w-4xl mx-auto">
      <h3 className="text-3xl font-serif font-bold text-primary mb-6 text-center">
        Step 2: Define Model Character Profile
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* COLUMN 1: Basic Profile */}
        <div className="space-y-4">
          <h4 className="font-serif font-bold text-accent border-b border-accent/50 pb-2">Basic Profile</h4>
          <label className="block">
            <span className="text-textMain font-semibold">Gender/Role</span>
            <select
              value={character.gender}
              onChange={(e) => updateCharacter('gender', e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-3 bg-secondary/50 focus:border-accent focus:ring focus:ring-accent/50"
            >
              <option value="female">Female Model</option>
              <option value="male">Male Model</option>
              <option value="nonbinary">Non-binary Model</option>
            </select>
          </label>
          <OptionSelect label="Age Range" field="age" options={characterOptions.age} />
          <OptionSelect label="Body Type" field="bodyType" options={characterOptions.bodyType} />
          <OptionSelect label="Height" field="height" options={characterOptions.height} />
          <OptionSelect label="Face Shape" field="faceShape" options={characterOptions.faceShape} />
        </div>

        {/* COLUMN 2: Features and Aesthetics */}
        <div className="space-y-4">
          <h4 className="font-serif font-bold text-accent border-b border-accent/50 pb-2">Features & Aesthetic</h4>
          <OptionSelect label="Eye Characteristics" field="eyeCharacteristics" options={characterOptions.eyeCharacteristics} />
          <OptionSelect label="Hair Description" field="hairDescription" options={characterOptions.hairDescription} />
          <OptionSelect label="Skin Characteristics" field="skinCharacteristics" options={characterOptions.skinCharacteristics} />
          <OptionSelect label="Pose/Action" field="pose" options={characterOptions.pose} />
          
          <label className="block">
            <span className="text-textMain font-semibold">Fashion Aesthetic/Style</span>
            <input
              type="text"
              value={character.fashionAesthetic}
              onChange={(e) => updateCharacter('fashionAesthetic', e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-3 bg-secondary/50 focus:border-accent focus:ring focus:ring-accent/50"
              placeholder="e.g., 90s Grunge, Minimalist"
            />
          </label>
        </div>

        {/* COLUMN 3: Distinctive Features (Custom Text/Tags) */}
        <div className="space-y-4">
          <h4 className="font-serif font-bold text-accent border-b border-accent/50 pb-2">Distinctive Traits (Optional)</h4>
          <p className="text-sm text-textSub">Add specific details like tattoos, makeup, or special accessories.</p>
          
          <div className="space-y-2">
            {[
              'Freckles', 'Avant-garde makeup', 'Small face tattoo', 'Piercings', 
              'Statement jewelry', 'Dramatic eyeliner', 'Long painted nails'
            ].map(feature => (
              <button
                key={feature}
                onClick={() => handleFeatureChange(feature)}
                className={`flex items-center text-sm px-3 py-1 rounded-full transition-colors w-full justify-between 
                  ${character.distinctiveFeatures.includes(feature) 
                    ? 'bg-accent text-white hover:bg-primary' 
                    : 'bg-gray-100 text-textSub hover:bg-gray-200'}`
                }
              >
                {feature}
                {character.distinctiveFeatures.includes(feature) ? <X className="w-3 h-3 ml-1" /> : <Plus className="w-3 h-3 ml-1" />}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={prevStep}
          className="bg-textSub hover:bg-textMain text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 flex items-center"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>
        <button
          onClick={nextStep}
          className="bg-primary hover:bg-accent text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 flex items-center"
        >
          Continue to Campaign Inputs
          <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default CharacterManager;