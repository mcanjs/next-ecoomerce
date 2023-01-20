import ProductsController from '@/controllers/products.controller';
import { CreateProductDto } from '@/dtos/products.dto';
import { Routes } from '@/interfaces/routes.interface';
import validationMiddleware from '@/middlewares/validation.middleware';
import { Router } from 'express';

class ProductsRoute implements Routes {
  public path = '/api/products';
  public router = Router();
  public productsController = new ProductsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.productsController.getProducts);
    this.router.get(`${this.path}/:slug`, this.productsController.getProductBySlug);
    this.router.get(`${this.path}/category/:slug`, this.productsController.getProductByCategory);
    this.router.post(`/secure${this.path}`, validationMiddleware(CreateProductDto, 'body'), this.productsController.createProduct);
    this.router.put(`/secure${this.path}/:id`, validationMiddleware(CreateProductDto, 'body'), this.productsController.updateProduct);
    this.router.delete(`/secure${this.path}/:id`);
  }
}

export default ProductsRoute;
