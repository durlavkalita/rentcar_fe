import { Car } from "./Vehicle";
import { User } from "./User";

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
