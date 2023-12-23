import { Car } from "./Car";
import { User } from "./user";

export type Booking = {
  id: string;
  user: User;
  car: Car;
  pickup_date: Date;
  return_date: Date;
  total_price: number;
  created: Date;
  updated: Date;
};
