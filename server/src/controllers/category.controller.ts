import { CreateCategoryDto } from '@/dtos/category.dto';
import { Category } from '@/interfaces/category.interface';
import CategoryService from '@/services/category.service';
import { NextFunction, Request, Response } from 'express';

class CategoryController {
  public categoryService = new CategoryService();

  public getCategories = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllCategories: Category[] = await this.categoryService.findAllCategory(req);
      res.status(200).json({ data: findAllCategories, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public createCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const categoryData: CreateCategoryDto = req.body;
      const createCategoryData: Category = await this.categoryService.createCategory(categoryData);

      res.status(201).json({ data: createCategoryData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const categoryId: string = req.params.id;
      const categoryData: CreateCategoryDto = req.body;
      const updateCategory: Category = await this.categoryService.updateCategory(categoryId, categoryData);

      res.status(200).json({ data: updateCategory, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };
}

export default CategoryController;
