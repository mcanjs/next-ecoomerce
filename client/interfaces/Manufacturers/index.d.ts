interface IManufacturersItem {
  _id: string;
  name: string;
  image: string;
  alt: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export interface IManufacturers {
  data: IManufacturersItem[];
  message: string;
}
