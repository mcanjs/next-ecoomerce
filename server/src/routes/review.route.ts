import ReviewController from '@/controllers/review.controller';
import { Router } from 'express';

class ReviewRoute {
  public path = `/api/reviews`;
  public router = Router();
  public reviewController = new ReviewController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get(`${this.path}/:productId`, this.reviewController.getReviews);
    this.router.post(`/secure${this.path}`, this.reviewController.createReview);
  }
}

export default ReviewRoute;
