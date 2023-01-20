interface IReviewUserInfo {
  name: string;
  surname: string;
}

interface IReviewsItem {
  _id: string;
  userId: IReviewUserInfo;
  productId: string;
  description: string;
  rating: number;
  createdAt: string;
  updatedAt: string;
}

export interface IReviews {
  data: IReviewsItem[];
  message: string;
}
