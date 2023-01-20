import { Review } from "./review.interface";

export interface Product {
  _id: string;
  manufacturer: string;
  category: string;
  reviews: Review[];
  description: string;
  discountPercentage: number;
  images: string[];
  price: number;
  stock: number;
  thumbnail: string;
  title: string;
  alt: string;
  slug: string;
  sku: string;
  isGiftCodeUsable: boolean;
  isPublished: boolean;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
}
