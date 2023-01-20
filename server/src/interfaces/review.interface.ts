import { User } from './users.interface';

export interface Review {
  _id: string;
  userId: User;
  productId: string;
  description: string;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
}
