import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Shield, Sparkles, Stethoscope, 
  Store, Users, Target, ScrollText,
  Activity, PawPrint, Search, Heart,
  MessageSquare, Building2, Map, Bell,
  Briefcase, UserCircle, UsersRound
} from 'lucide-react';
import BusinessModelSection from './BusinessModelSection';
import { BusinessModel } from '@/types';

const RevenueStreamsDiagram = () => {
  const businessModels: BusinessModel[] = [
    {
      type: "B2C",
      icon: <UserCircle className="w-10 h-10 text-blue-600" />,
      description: "Business to Consumer Services",
      color: "bg-blue-50",
      borderColor: "border-blue-200",
      packages: [
        {
          title: "Basic Tier",
          subtitle: "Collar + Subscription",
          audience: "Casual users or new pet owners",
          icon: <Shield className="w-6 h-6" />,
          features: [
            { name: "Basic Health Monitoring", icon: <Activity className="w-4 h-4" /> },
            { name: "Limited GPS Tracking", icon: <Map className="w-4 h-4" /> },
            { name: "Basic Community Support", icon: <Users className="w-4 h-4" /> }
          ],
          type: "Recurring + Hardware"
        },
        {
          title: "Premium Tier",
          subtitle: "Enhanced Experience",
          audience: "Engaged pet owners",
          icon: <Sparkles className="w-6 h-6" />,
          features: [
            { name: "Advanced Health Analytics", icon: <Activity className="w-4 h-4" /> },
            { name: "Full GPS History", icon: <Search className="w-4 h-4" /> },
            { name: "Real-time Alerts", icon: <Bell className="w-4 h-4" /> }
          ],
          type: "Recurring"
        },
        {
          title: "Custom Packages",
          subtitle: "Personalized Add-ons",
          audience: "Users seeking personalized care",
          icon: <ScrollText className="w-6 h-6" />,
          features: [
            { name: "Genetic Health Analysis", icon: <PawPrint className="w-4 h-4" /> },
            { name: "Personalized Vet Services", icon: <Heart className="w-4 h-4" /> }
          ],
          type: "One-time"
        }
      ]
    },
    {
      type: "B2B",
      icon: <Briefcase className="w-10 h-10 text-purple-600" />,
      description: "Business to Business Services",
      color: "bg-purple-50",
      borderColor: "border-purple-200",
      packages: [
        {
          title: "Professional Dashboard",
          subtitle: "For Veterinarians",
          audience: "Veterinary clinics and professionals",
          icon: <Stethoscope className="w-6 h-6" />,
          features: [
            { name: "Patient Management", icon: <Users className="w-4 h-4" /> },
            { name: "Telehealth Platform", icon: <MessageSquare className="w-4 h-4" /> }
          ],
          type: "Recurring"
        },
        {
          title: "Professional Advertising",
          subtitle: "B2B Marketing",
          audience: "Pet service businesses",
          icon: <Building2 className="w-6 h-6" />,
          features: [
            { name: "Targeted Advertising", icon: <Target className="w-4 h-4" /> },
            { name: "Business Analytics", icon: <Activity className="w-4 h-4" /> }
          ],
          type: "Ad Revenue"
        }
      ]
    },
    {
      type: "C2C",
      icon: <UsersRound className="w-10 h-10 text-green-600" />,
      description: "Consumer to Consumer Services",
      color: "bg-green-50",
      borderColor: "border-green-200",
      packages: [
        {
          title: "Marketplace",
          subtitle: "Peer Services",
          audience: "Pet owners and service providers",
          icon: <Store className="w-6 h-6" />,
          features: [
            { name: "Pet Sitting Services", icon: <Users className="w-4 h-4" /> },
            { name: "Breeding Network", icon: <PawPrint className="w-4 h-4" /> }
          ],
          type: "Commission"
        },
        {
          title: "Community Platform",
          subtitle: "Peer Support",
          audience: "Pet owner community",
          icon: <Heart className="w-6 h-6" />,
          features: [
            { name: "Experience Sharing", icon: <MessageSquare className="w-4 h-4" /> },
            { name: "Peer Advice", icon: <Users className="w-4 h-4" /> }
          ],
          type: "Engagement"
        }
      ]
    }
  ];

  return (
    <Card className="w-full max-w-7xl p-6 bg-gradient-to-br from-white to-gray-50">
      <CardContent>
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-gray-800">PetAgora Business Model</h2>
            <p className="text-gray-600">Multi-Layer Revenue Streams</p>
          </div>

          <div className="space-y-8">
            {businessModels.map((model, index) => (
              <BusinessModelSection key={index} model={model} />
            ))}
          </div>

          <div className="border-t pt-4">
            <div className="text-center text-sm space-y-2">
              <p className="font-medium text-gray-700">Integrated Revenue Flow</p>
              <div className="flex justify-center items-center gap-4 flex-wrap">
                <span className="px-3 py-1 bg-blue-50 rounded-full text-blue-700">B2C Core Services</span>
                <span>→</span>
                <span className="px-3 py-1 bg-purple-50 rounded-full text-purple-700">B2B Integration</span>
                <span>→</span>
                <span className="px-3 py-1 bg-green-50 rounded-full text-green-700">C2C Marketplace</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RevenueStreamsDiagram;