import { CreateProductDto } from '@/dtos/products.dto';
import { Product } from '@/interfaces/products.interface';
import ProductService from '@/services/product.service';
import { NextFunction, Request, Response } from 'express';

class ProductsController {
  public productService = new ProductService();

  public createProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const productData: CreateProductDto = req.body;
      const createProductData: Product = await this.productService.createProduct(productData);

      res.status(201).json({ data: createProductData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public getProductBySlug = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const productSlug: string = req.params.slug;
      const findOneProductData = await this.productService.findProductBySlug(productSlug);

      res.status(200).json({ data: findOneProductData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public getProductByCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const categorySlug: string = req.params.slug;
      const findAllCategoryProducts: Product[] = await this.productService.findProductByCategory(categorySlug, req);

      res.status(200).json({ data: findAllCategoryProducts, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public getProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllProducts: Product[] = await this.productService.findAllProducts(req);
      res.status(200).json({ data: findAllProducts, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public updateProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const productId: string = req.params.id;
      const productData: CreateProductDto = req.body;
      const updateProduct: Product = await this.productService.updateProduct(productId, productData);

      res.status(200).json({ data: updateProduct, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };
}

export default ProductsController;
