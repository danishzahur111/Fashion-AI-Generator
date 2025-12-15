// src/components/FormSection.jsx
import React from 'react';

const FormSection = ({ title, children, isCurrent }) => {
  return (
    <div className={`p-8 rounded-2xl shadow-xl transition-all duration-300 ${isCurrent ? 'bg-white border-4 border-accent' : 'bg-gray-50 border border-gray-200'}`}>
      <h3 className={`text-3xl font-serif font-bold mb-6 ${isCurrent ? 'text-primary' : 'text-textSub'}`}>
        {title}
      </h3>
      <div className={`${isCurrent ? 'block' : 'hidden'}`}>
        {children}
      </div>
    </div>
  );
};

export default FormSection;