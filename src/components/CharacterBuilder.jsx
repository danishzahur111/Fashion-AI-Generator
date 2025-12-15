// src/components/CharacterBuilder.jsx - FINAL VERIFIED CODE
import React from 'react';
import { useAppContext } from '../AppContext.jsx';
import FormSection from './FormSection.jsx';
import { ArrowRight, ArrowLeft } from 'lucide-react';

// Added { isCurrent } prop here
const CharacterBuilder = ({ isCurrent }) => {
  const { character, updateCharacter, characterOptions, nextStep, prevStep } = useAppContext();

  const handleChange = (e) => {
    updateCharacter(e.target.name, e.target.value);
  };

  const handleMultiSelectChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    updateCharacter('distinctiveFeatures', selectedOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };
  
  // Cleaned up options structure
  const options = [
    { label: 'Gender', name: 'gender', options: ['female', 'male', 'non-binary', 'androgynous'] },
    { label: 'Age', name: 'age', options: characterOptions.age },
    { label: 'Body Type', name: 'bodyType', options: characterOptions.bodyType },
    { label: 'Height', name: 'height', options: characterOptions.height },
    { label: 'Face Shape', name: 'faceShape', options: characterOptions.faceShape },
    { label: 'Expression', name: 'expression', options: characterOptions.expression },
    { label: 'Eye Characteristics', name: 'eyeCharacteristics', options: characterOptions.eyeCharacteristics },
    { label: 'Hair Description', name: 'hairDescription', options: characterOptions.hairDescription },
    { label: 'Skin Characteristics', name: 'skinCharacteristics', options: characterOptions.skinCharacteristics },
    { label: 'Pose/Action (Primary)', name: 'pose', options: characterOptions.pose },
    { label: 'Fashion Aesthetic', name: 'fashionAesthetic', options: ['High Fashion', 'Avant-Garde', 'Streetwear', 'Bohemian', 'Goth'] },
  ];

  return (
    // Passed isCurrent prop to FormSection
    <FormSection title="2. Define Character Profile" isCurrent={isCurrent}> 
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {options.map(option => (
            <div key={option.name}>
              <label htmlFor={option.name} className="block text-sm font-medium text-textMain mb-1">
                {option.label}
              </label>
              <select
                id={option.name}
                name={option.name}
                value={character[option.name]}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent py-2"
              >
                {option.options.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
        
        {/* Multi-select for Features */}
        <div>
          <label htmlFor="distinctiveFeatures" className="block text-sm font-medium text-textMain mb-1">
            Distinctive Features (Select Multiple)
          </label>
          <select
            multiple
            id="distinctiveFeatures"
            name="distinctiveFeatures"
            value={character.distinctiveFeatures}
            onChange={handleMultiSelectChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent py-2 h-28"
          >
            {['Tattoo sleeves', 'Pierced septum', 'Silver hair', 'Freckles', 'Scar', 'Sharp cheekbones', 'No distinctive features'].map(feature => (
              <option key={feature} value={feature}>{feature}</option>
            ))}
          </select>
          <p className="text-xs text-textSub mt-1">Hold Ctrl/Cmd to select multiple options.</p>
        </div>

        <div className="flex justify-between pt-4">
          <button
            type="button"
            onClick={prevStep}
            className="flex items-center text-textSub hover:text-primary font-semibold py-2 px-6 transition duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Sub-System
          </button>
          <button
            type="submit"
            className="flex items-center bg-accent hover:bg-primary text-white font-semibold py-2 px-6 rounded-full transition duration-300"
          >
            Define Campaign
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </form>
    </FormSection>
  );
};

export default CharacterBuilder;