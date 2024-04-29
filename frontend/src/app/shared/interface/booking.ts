export interface Booking {
  property_id: string;
  booking_id: string;
  property?:object;
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