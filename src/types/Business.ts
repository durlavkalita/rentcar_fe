import { User } from "./user";

export type Business = {
  id: string;
  name: string;
  description: string;
  location: string;
  owner: User;
  created: Date;
  updated: Date;
};
