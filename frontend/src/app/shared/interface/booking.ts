import { PropertyType } from '../enums/property';
import { Coord } from './map';

interface Property {
  property_id: string;
  name: string;
  address: string;
  description?: string;
  type: PropertyType;
  position: Coord;
  price: number;
  enquiries?: string[];
  features?: string[];
  images?: string[];
  currency?: string;
  contactNumber?: string;
  contactEmail?: string;
  createdAt?: Date;
  updatedAt?: Date;
  user_id: string;
}

export interface Booking {
  property_id: string;
  booking_id: string;
  property?:Property;
  description?: string;
  
  amount: number;
  enquiries?: string[];
  status:string;
  accepted:boolean;
  contactNumber?: string;
  contactEmail?: string;
  createdAt?: Date;
  updatedAt?: Date;
  user_id: string;
}