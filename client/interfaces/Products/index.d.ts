import { IAttributeItem } from '../Attribute';
import { IReviewsItem } from '../Reviews';

interface IProductManufacturer {
  name: string;
  _id: string;
}

interface IProductsItem {
  _id: string;
  manufacturer: IProductManufacturer | string;
  category: string;
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
  reviews: IReviewsItem[];
  attributes: IAttributeItem[];
  rating: number;
  createdAt: string;
  updatedAt: string;
}
export interface IProducts {
  data: IProductsItem[];
  message: string;
}
