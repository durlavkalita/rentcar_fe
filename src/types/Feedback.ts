import { Business } from "./Business";
import { Car } from "./Car";
import { User } from "./user";

export type Feedback = {
  id: string;
  user: User;
  car: Car;
  business: Business;
  rating: number;
  comments: string;
  created: string;
  updated: string;
};
