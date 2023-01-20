interface ICategoryItem {
  name: string;
  image: string;
  _id: string;
  alt: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export interface ICategory {
  data: ICategoryItem[];
  message: string;
}
