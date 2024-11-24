import { ReactNode } from 'react';

export interface Feature {
  name: string;
  icon: ReactNode;
}

export interface Package {
  title: string;
  subtitle: string;
  audience: string;
  icon: ReactNode;
  features: Feature[];
  type: string;
}

export interface BusinessModel {
  type: string;
  icon: ReactNode;
  description: string;
  color: string;
  borderColor: string;
  packages: Package[];
}