import { CreateReviewDto } from '@/dtos/review.dto';
import { Review } from '@/interfaces/review.interface';
import ReviewService from '@/services/review.service';
import { NextFunction, Request, Response } from 'express';

class ReviewController {
  public reviewService = new ReviewService();

  public getReviews = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const productId: string = req.params.productId;
      const findReviews: Review[] = await this.reviewService.findAllReviewByProductId(productId);

      res.status(200).json({ data: findReviews, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public createReview = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const reviewData: CreateReviewDto = req.body;
      const createReviewData: Review = await this.reviewService.createReview(reviewData);

      res.status(201).json({ data: createReviewData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
}

export default ReviewController;
