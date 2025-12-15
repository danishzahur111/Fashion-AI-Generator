// src/components/Stepper.jsx
import React from 'react';
import { useAppContext } from '../AppContext';
import { Layers, User, Settings, Send } from 'lucide-react';

const steps = [
  { id: 1, name: 'Sub-System (Theme & Niche)', icon: Layers },
  { id: 2, name: 'Character Profile', icon: User },
  { id: 3, name: 'Campaign Inputs', icon: Settings },
  { id: 4, name: 'Generate Prompts', icon: Send },
];

const Stepper = () => {
  const { currentStep } = useAppContext();

  return (
    <div className="flex justify-center my-8">
      <div className="flex items-center space-x-2 sm:space-x-4">
        {steps.map((step) => {
          const isActive = step.id === currentStep;
          const isComplete = step.id < currentStep;

          return (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center">
                {/* Step Icon/Number */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold transition-all duration-300 
                    ${isActive ? 'bg-accent shadow-lg scale-110' : ''}
                    ${isComplete ? 'bg-primary' : 'bg-gray-300'}`
                  }
                >
                  <step.icon className="w-5 h-5" />
                </div>
                
                {/* Step Name (visible on larger screens) */}
                <p 
                  className={`hidden sm:block mt-2 text-xs font-medium transition-colors duration-300 
                    ${isActive ? 'text-accent' : 'text-textSub'}`
                  }
                >
                  {step.name}
                </p>
              </div>

              {/* Connector Line (unless it's the last step) */}
              {step.id < steps.length && (
                <div 
                  className={`w-16 h-0.5 transition-colors duration-300 
                    ${isComplete ? 'bg-primary' : 'bg-gray-300'}`
                  }
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;