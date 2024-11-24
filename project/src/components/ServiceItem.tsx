import React from 'react';
import { Service } from '../types';

export default function ServiceItem({ icon, title, description }: Service) {
  return (
    <div className="bg-white/90 p-4 rounded-lg shadow-sm">
      <div className="flex items-center gap-3 mb-2">
        {icon}
        <h3 className="font-medium text-gray-800">{title}</h3>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}