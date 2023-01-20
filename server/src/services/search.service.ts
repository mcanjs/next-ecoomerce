// import { Category } from '@/interfaces/category.interface';
// import { Product } from '@/interfaces/products.interface';
import categoryModel from '@/models/category.model';
import productModel from '@/models/products.model';
// import { escapeRegex } from '@/utils/util';

class SearchService {
  public categoryModel = categoryModel;
  public productModel = productModel;
  // public async findCategoryOrProductByKey(key: string): Promise<Product & Category> {
  //   const regex = new RegExp(escapeRegex(key), 'gi');
  //   const searchProductByKey: Product = await this.productModel.find({});
  //   return { product: searchProductByKey };
  // }
}

export default SearchService;
