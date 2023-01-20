import { CreateManufacturerDto } from '@/dtos/manufacturer.dto';
import { HttpException } from '@/exceptions/HttpException';
import { Manufacturer } from '@/interfaces/manufacturer.interface';
import { Category } from '@/interfaces/category.interface';
import { Product } from '@/interfaces/products.interface';

import manufacturerModel from '@/models/manufacturer.model';
import categoryModel from '@/models/category.model';
import productModel from '@/models/products.model';
import Pagination from '@/utils/pagination';
import { isEmpty } from '@/utils/util';
import { Request } from 'express';

class ManufacturerService {
  public manufacturer = manufacturerModel;
  public categories = categoryModel;
  public products = productModel;

  public async findAllManufacturers(req: Request): Promise<Manufacturer[]> {
    const manufacturers: Manufacturer[] = await this.manufacturer.find({}, '-__v', new Pagination(req.query));
    return manufacturers;
  }

  public async findAllCategoryManufacturers(categorySlug: string, req: Request): Promise<any> {
    if (isEmpty(categorySlug)) throw new HttpException(400, 'categorySlug is empty');

    const findOneCategory: Category = await this.categories.findOne(
      { name: { $regex: `^${categorySlug}$`, $options: 'i' } },
      '',
      new Pagination(req.query),
    );
    if (!findOneCategory) throw new HttpException(409, `categorySlug doesn't exist`);

    const findCategoryProducts: Product[] = await this.products.find({ category: findOneCategory._id }, 'manufacturer');
    return findCategoryProducts;
  }

  public async createManufacturer(manufacturerData: CreateManufacturerDto): Promise<Manufacturer> {
    if (isEmpty(manufacturerData)) throw new HttpException(400, 'manufacturerData is empty');

    const createManufacturerData: Manufacturer = await this.manufacturer.create(manufacturerData);
    return createManufacturerData;
  }
}

export default ManufacturerService;
