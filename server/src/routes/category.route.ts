import { Router } from 'express';
import { Routes } from '@/interfaces/routes.interface';
import CategoryController from '@/controllers/category.controller';
import validationMiddleware from '@/middlewares/validation.middleware';
import { CreateCategoryDto } from '@/dtos/category.dto';

class CategoryRoute implements Routes {
  public path = '/api/category';
  public router = Router();
  public categoryController = new CategoryController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.categoryController.getCategories);
    this.router.post(`/secure${this.path}`, validationMiddleware(CreateCategoryDto, 'body'), this.categoryController.createCategory);
    this.router.put(`/secure${this.path}/:id`, validationMiddleware(CreateCategoryDto, 'body'), this.categoryController.updateCategory);
  }
}

export default CategoryRoute;
