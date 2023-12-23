import { Business } from "./Business";

export type Car = {
  id: string;
  brand: string;
  model: string;
  year: number;
  color: string;
  license_no: string;
  price_per_day: number;
  available: boolean;
  business: Business;
  created: Date;
  updated: Date;
};
