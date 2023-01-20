import { CreateReviewDto } from '@/dtos/review.dto';
import { HttpException } from '@/exceptions/HttpException';
import { Product } from '@/interfaces/products.interface';
import { Review } from '@/interfaces/review.interface';
import productModel from '@/models/products.model';
import reviewModel from '@/models/review.model';
import { isEmpty } from 'class-validator';
import ProductService from './product.service';

class ReviewService {
  public review = reviewModel;
  public product = productModel;
  public productService = new ProductService();

  public async findAllReviewByProductId(reviewId: string): Promise<Review[]> {
    if (isEmpty(reviewId)) throw new HttpException(400, 'reviewId is empty');

    const findAllReviewByProductId: Review[] = await this.review.find({ productId: reviewId }, '-__v').populate('userId', 'name surname');
    if (!findAllReviewByProductId) throw new HttpException(409, "Reviews doesn't exit");

    return findAllReviewByProductId;
  }

  public async createReview(reviewData: CreateReviewDto): Promise<Review> {
    if (isEmpty(reviewData)) throw new HttpException(400, 'reviewData is empty');
    const createReviewData: Review = await this.review.create(reviewData);
    const pushProductIdByProduct: Product = await this.product
      .findByIdAndUpdate(reviewData.productId, { $push: { reviews: createReviewData._id } })
      .populate('reviews');
    if (!pushProductIdByProduct) throw new HttpException(409, 'Related product not found');
    await this.productService.updateProductRating(createReviewData.productId);

    return createReviewData;
  }
}

export default ReviewService;
