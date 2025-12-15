// src/components/StepIndicator.jsx
import React from 'react';
import { useAppContext } from '../AppContext.jsx';
import { Layers, User, Settings, Send } from 'lucide-react';

const steps = [
  { id: 1, name: 'Sub-System (Theme & Niche)', icon: Layers },
  { id: 2, name: 'Character Profile', icon: User },
  { id: 3, name: 'Campaign Inputs', icon: Settings },
  { id: 4, name: 'Generate Prompts', icon: Send },
];

const StepIndicator = () => {
  const { currentStep, setCurrentStep } = useAppContext();

  const handleStepClick = (stepId) => {
    // Only allow navigation to completed or current steps
    if (stepId <= currentStep) {
        setCurrentStep(stepId);
    }
  }

  return (
    <nav className="flex items-center justify-between mb-12">
      <div className="flex w-full justify-between items-center relative">
        {/* Step Indicators */}
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = step.id === currentStep;
          const isComplete = step.id < currentStep;

          return (
            <React.Fragment key={step.id}>
              {/* Separator Line */}
              {index > 0 && (
                <div 
                  className={`flex-auto border-t-2 transition-colors duration-300 ${isComplete ? 'border-accent' : 'border-gray-300'}`}
                ></div>
              )}

              <button
                type="button"
                onClick={() => handleStepClick(step.id)}
                className="flex flex-col items-center group relative z-10 p-2"
                disabled={step.id > currentStep}
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition-colors duration-300 ${isActive ? 'bg-accent border-accent text-white shadow-lg' : isComplete ? 'bg-secondary border-accent text-accent' : 'bg-secondary border-gray-300 text-gray-400'}`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <span className={`mt-2 text-sm text-center transition-colors duration-300 ${isActive ? 'text-primary font-semibold' : isComplete ? 'text-textSub' : 'text-gray-400'}`}>
                  {step.name}
                </span>
              </button>
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};

export default StepIndicator;