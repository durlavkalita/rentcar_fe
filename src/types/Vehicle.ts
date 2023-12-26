import { Business } from "./Business";

export type Vehicle = {
  id: string;
  brand: string;
  model: string;
  variant: string | null;
  fuel_type: string;
  year: string | null;
  number_plate: string;
  price_per_day: string;
  color: string;
  availability: boolean;
  business: Business | string;
  vehicle_images: string[] | null;
  vehicle_type: string;
};
