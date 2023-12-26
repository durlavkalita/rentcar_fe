import { User } from "./User";

export type Business = {
  id: string;
  name: string;
  description: string;
  location: string;
  owner: User | string;
  email: string;
  contact_number: string;
};
