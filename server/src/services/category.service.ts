import { CreateCategoryDto } from '@/dtos/category.dto';
import { HttpException } from '@/exceptions/HttpException';
import { Category } from '@/interfaces/category.interface';
import categoryModel from '@/models/category.model';
import Pagination from '@/utils/pagination';
import { isEmpty } from '@/utils/util';
import { Request } from 'express';

class CategoryService {
  public categories = categoryModel;

  public async findAllCategory(req: Request): Promise<Category[]> {
    const categories: Category[] = await this.categories.find({}, '-__v', new Pagination(req.query));
    return categories;
  }

  public async createCategory(categoryData: CreateCategoryDto): Promise<Category> {
    if (isEmpty(categoryData)) throw new HttpException(400, 'categoryData is empty');

    const createCategoryData: Category = await this.categories.create(categoryData);
    return createCategoryData;
  }

  public async updateCategory(categoryId: string, categoryData: CreateCategoryDto): Promise<Category> {
    if (isEmpty(categoryData)) throw new HttpException(400, 'categoryData is Empty');

    const updateCategoryById: Category = await this.categories.findByIdAndUpdate(categoryId, categoryData);
    if (!updateCategoryById) throw new HttpException(409, `Category doesn't exist`);

    return updateCategoryById;
  }
}

export default CategoryService;
