import { CreateProductDto } from '@/dtos/products.dto';
import { HttpException } from '@/exceptions/HttpException';
import { Category } from '@/interfaces/category.interface';
import { Product } from '@/interfaces/products.interface';
import categoryModel from '@/models/category.model';
import productModel from '@/models/products.model';
import Pagination from '@/utils/pagination';
import { generateSKU, isEmpty } from '@/utils/util';
import { Request } from 'express';

class ProductService {
  public products = productModel;
  public categories = categoryModel;

  public async createProduct(productData: CreateProductDto): Promise<Product> {
    if (isEmpty(productData)) throw new HttpException(400, 'productData is empty');
    const createProductSKU: string = generateSKU(productData.title);
    const createProductData: Product = await this.products.create({ ...productData, sku: createProductSKU });

    return createProductData;
  }

  public async findProductBySlug(productSlug: string): Promise<Product> {
    if (isEmpty(productSlug)) throw new HttpException(400, 'productSlug is empty');

    const findProduct: Product = await this.products.findOne({ slug: productSlug }).populate('manufacturer', 'name').populate('attributes', '-__v');
    if (!findProduct) throw new HttpException(409, `Product doesn't exist`);

    return findProduct;
  }

  public async findProductByCategory(categorySlug: string, req: Request): Promise<Product[]> {
    if (isEmpty(categorySlug)) throw new HttpException(400, 'categorySlug is empty');

    const findOneCategory: Category = await this.categories.findOne(
      { name: { $regex: `^${categorySlug}$`, $options: 'i' } },
      '',
      new Pagination(req.query),
    );
    if (!findOneCategory) throw new HttpException(409, `categorySlug doesn't exist`);

    const findCategoryProducts: Product[] = await this.products.find({ category: findOneCategory._id });
    return findCategoryProducts;
  }

  public async findAllProducts(req: Request): Promise<Product[]> {
    const products: Product[] = await this.products.find({}, '-__v', new Pagination(req.query));
    return products;
  }

  public async updateProduct(productId: string, productData: CreateProductDto): Promise<Product> {
    if (isEmpty(productData)) throw new HttpException(400, 'productData is empty');

    const updateProductById: Product = await this.products.findByIdAndUpdate(productId, { productData });
    if (!updateProductById) throw new HttpException(409, `Product doesn't exist`);

    return updateProductById;
  }

  public async updateProductRating(productId: string): Promise<Product> {
    if (isEmpty(productId)) throw new HttpException(400, 'productId is empty');
    let totalRating = 0;

    const findProductReviewsById: Product = await this.products.findById(productId).populate('reviews');
    findProductReviewsById.reviews.map(review => (totalRating += review.rating));

    const updateProductRatingById: Product = await this.products.findByIdAndUpdate(productId, {
      $set: { rating: totalRating / findProductReviewsById.reviews.length },
    });

    return updateProductRatingById;
  }
}

export default ProductService;
