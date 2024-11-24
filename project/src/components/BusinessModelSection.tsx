import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import PackageCard from './PackageCard';
import { BusinessModel } from '@/types';

interface BusinessModelSectionProps {
  model: BusinessModel;
}

export default function BusinessModelSection({ model }: BusinessModelSectionProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className={`${model.color} rounded-xl p-6 border ${model.borderColor}`}>
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between gap-4 mb-6 hover:opacity-80 transition-opacity"
      >
        <div className="flex items-center gap-4">
          {model.icon}
          <div className="text-left">
            <h3 className="text-xl font-bold text-gray-800">{model.type}</h3>
            <p className="text-gray-600">{model.description}</p>
          </div>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-6 h-6 text-gray-400" />
        ) : (
          <ChevronDown className="w-6 h-6 text-gray-400" />
        )}
      </button>

      {isExpanded && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {model.packages.map((pkg, index) => (
            <PackageCard key={index} package={pkg} />
          ))}
        </div>
      )}
    </div>
  );
}