import React from 'react';
import { Target } from 'lucide-react';
import { Package } from '@/types';

interface PackageCardProps {
  package: Package;
}

export default function PackageCard({ package: pkg }: PackageCardProps) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
      <div className="flex items-center gap-2 mb-3">
        {pkg.icon}
        <div>
          <h4 className="font-semibold text-gray-800">{pkg.title}</h4>
          <p className="text-sm text-gray-600">{pkg.subtitle}</p>
        </div>
      </div>

      <div className="mb-3">
        <div className="flex items-center gap-1 text-sm text-gray-600">
          <Target className="w-4 h-4" />
          <span>{pkg.audience}</span>
        </div>
      </div>

      <div className="space-y-2">
        {pkg.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
            {feature.icon}
            <span>{feature.name}</span>
          </div>
        ))}
      </div>

      <div className="mt-3">
        <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded-full">
          {pkg.type}
        </span>
      </div>
    </div>
  );
}