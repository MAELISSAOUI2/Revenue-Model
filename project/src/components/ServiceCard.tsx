import React from 'react';
import { ChevronUp } from 'lucide-react';
import ServiceItem from './ServiceItem';
import { ServiceCategory } from '../types';

export default function ServiceCard({ title, description, icon, services, color }: ServiceCategory) {
  return (
    <div className={`rounded-lg p-6 ${color} transition-shadow hover:shadow-md`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-white/90">{icon}</div>
          <div>
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
        <ChevronUp className="w-5 h-5 text-gray-400" />
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {services.map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
      </div>
    </div>
  );
}