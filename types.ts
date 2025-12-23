import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  longDescription: string;
  features: string[];
  images: string[];
  highlight?: boolean;
  backgroundImage?: string;
  hideIcon?: boolean;
  overlayOpacity?: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  imageUrl: string;
  // New fields for project detail page
  fullDescription: string;
  location: string;
  date: string;
  gallery: string[];
  challenge: string;
  solution: string;
}

export interface ContactInfo {
  phone1: string;
  phone2: string;
  email: string;
  address: string;
  nif: string;
}

export interface QuoteFormData {
  companyName: string;
  nif: string;
  contact: string;
  service: string;
  description: string;
}

export interface Value {
  id: string;
  title: string;
  description: string;
}