import React from 'react';
import {
  Users, Activity, MapPin, Users2,
  Building2, MessageSquare, Stethoscope, BarChart3,
  Store, Heart, Baby
} from 'lucide-react';
import { ServiceCategory } from '../types';

export const services: ServiceCategory[] = [
  {
    title: 'B2C',
    description: 'Business to Consumer Services',
    icon: <Users className="w-6 h-6 text-blue-600" />,
    color: 'bg-blue-50',
    services: [
      {
        icon: <Activity className="w-5 h-5 text-blue-600" />,
        title: 'Basic Health Monitoring',
        description: 'Essential health metrics tracking'
      },
      {
        icon: <MapPin className="w-5 h-5 text-blue-600" />,
        title: 'GPS Tracking',
        description: 'Complete location tracking'
      },
      {
        icon: <Users2 className="w-5 h-5 text-blue-600" />,
        title: 'Community Support',
        description: 'Access to community features'
      }
    ]
  },
  {
    title: 'B2B',
    description: 'Business to Business Services',
    icon: <Building2 className="w-6 h-6 text-purple-600" />,
    color: 'bg-purple-50',
    services: [
      {
        icon: <Stethoscope className="w-5 h-5 text-purple-600" />,
        title: 'Professional Dashboard',
        description: 'For Veterinarians'
      },
      {
        icon: <MessageSquare className="w-5 h-5 text-purple-600" />,
        title: 'Telehealth Platform',
        description: 'Remote consultation tools'
      },
      {
        icon: <BarChart3 className="w-5 h-5 text-purple-600" />,
        title: 'Business Analytics',
        description: 'Performance tracking'
      }
    ]
  },
  {
    title: 'C2C',
    description: 'Consumer to Consumer Services',
    icon: <Users2 className="w-6 h-6 text-green-600" />,
    color: 'bg-green-50',
    services: [
      {
        icon: <Store className="w-5 h-5 text-green-600" />,
        title: 'Marketplace',
        description: 'Peer Services'
      },
      {
        icon: <Heart className="w-5 h-5 text-green-600" />,
        title: 'Community Platform',
        description: 'Peer Support'
      },
      {
        icon: <Baby className="w-5 h-5 text-green-600" />,
        title: 'Breeding Network',
        description: 'Breeding community'
      }
    ]
  }
];